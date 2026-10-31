"""Linear component FEA at the R5 proof target, with audited applied loads.

PAHT-CF XY/Z tensile data inform an assumed elastic/comparison model. Contact,
compression, interlayer shear, environment and the printed process are not
qualified. Both displacement and governing stress utilization must stabilize
within 5 %; a large strength ratio cannot bypass the mesh gate. A stated 1 mm
zone around ideal fixed supports is excluded from comparison ratios, and its
unfiltered peak is reported separately. See analysis/README.md for limitations.

    python project/designs/r5/analysis/fea.py   (needs ../out from cad/build.py)
"""
import gc
import hashlib
from importlib.metadata import version
import json
import os
import sys
import uuid
from pathlib import Path

os.environ.setdefault("MKL_NUM_THREADS", "2")
os.environ.setdefault("OMP_NUM_THREADS", "2")

import gmsh
import numpy as np
from skfem import Basis, BilinearForm, ElementTetP2, ElementVector, MeshTet
from skfem.helpers import sym_grad, ddot
from scipy.spatial import cKDTree

from load_audit import (check_resultants, facets_inside_band, horizontal_facets, mean_patch_displacement,
                        planar_facets, resultants, support_equilibrium, surface_load)
from evidence import (DISPLACEMENT_CHANGE_LIMIT_PCT, UTILIZATION_CHANGE_LIMIT_PCT,
                      convergence, stress_utilizations, validate_cad_inputs)
from linear_solver import solve_spd

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402

OUT = HERE.parent / "out"
P = p.P_PROOF
SUPPORT_EXCLUDE = 1.0  # mm
MAX_DOFS = int(os.environ.get("N2_FEA_MAX_DOFS", "650000"))


class MeshBudgetExceeded(RuntimeError):
    pass


class InvalidLoadPatch(ValueError):
    """A mesh cannot represent the declared nonnegative finite load patch."""


def stiffness(axis):
    """6x6 Voigt stiffness, print axis = 0/1/2 (x/y/z)."""
    e1, e3, n12, n13 = p.E_XY, p.E_Z, p.NU, p.NU * p.E_Z / p.E_XY * 1.0
    g12 = e1 / (2 * (1 + n12))
    g13 = e3 / (2 * (1 + p.NU))
    n31 = n13 * e1 / e3
    S = np.zeros((6, 6))
    S[0, 0] = S[1, 1] = 1 / e1
    S[2, 2] = 1 / e3
    S[0, 1] = S[1, 0] = -n12 / e1
    S[0, 2] = S[2, 0] = S[1, 2] = S[2, 1] = -n31 / e3
    S[3, 3] = S[4, 4] = 1 / g13          # yz, xz
    S[5, 5] = 1 / g12                    # xy
    C = np.linalg.inv(S)
    perm = {2: [0, 1, 2], 1: [0, 2, 1], 0: [2, 1, 0]}[axis]
    full = np.zeros((3, 3, 3, 3))
    vo = {(0, 0): 0, (1, 1): 1, (2, 2): 2, (1, 2): 3, (2, 1): 3, (0, 2): 4, (2, 0): 4,
          (0, 1): 5, (1, 0): 5}
    for i in range(3):
        for j in range(3):
            for k in range(3):
                for l in range(3):
                    full[perm[i], perm[j], perm[k], perm[l]] = C[vo[i, j], vo[k, l]]
    return full


def mesh_step(step, h, global_h=None, centres=(), radius=1.5):
    global_h = h if global_h is None else global_h
    gmsh.initialize()
    try:
        gmsh.option.setNumber("General.Terminal", 0)
        gmsh.model.occ.importShapes(str(step))
        gmsh.model.occ.synchronize()
        gmsh.option.setNumber("Mesh.MeshSizeMax", global_h)
        gmsh.option.setNumber("Mesh.MeshSizeMin", h / 3)
        gmsh.option.setNumber("Mesh.MeshSizeFromCurvature", 12)
        # Keep global/local stages on the same sizing policy. Curvature still
        # resolves surfaces, but must not silently propagate a small arc size
        # through the whole body volume and exhaust the direct-solver budget.
        gmsh.option.setNumber("Mesh.MeshSizeExtendFromBoundary", 0)
        if centres:
            fields = []
            for centre in centres:
                field = gmsh.model.mesh.field.add("Ball")
                for key, value in dict(XCenter=centre[0], YCenter=centre[1], ZCenter=centre[2],
                                       Radius=radius, Thickness=global_h, VIn=h, VOut=global_h).items():
                    gmsh.model.mesh.field.setNumber(field, key, float(value))
                fields.append(field)
            background = gmsh.model.mesh.field.add("Min")
            gmsh.model.mesh.field.setNumbers(background, "FieldsList", fields)
            gmsh.model.mesh.field.setAsBackgroundMesh(background)
        gmsh.model.mesh.generate(3)
        tags, xyz, _ = gmsh.model.mesh.getNodes()
        _, _, conn = gmsh.model.mesh.getElements(3)
    finally:
        gmsh.finalize()
    pts = np.zeros((tags.max() + 1, 3))
    pts[tags] = xyz.reshape(-1, 3)
    t = conn[0].reshape(-1, 4).T
    used, inv = np.unique(t, return_inverse=True)
    return MeshTet(pts[used].T, inv.reshape(t.shape))


def refinement_plan(case, h, peak_history=()):
    """Keep the resolved bulk and refine both physical load zones and old peaks."""
    global_h = max(h, case.get("global_floor_mm", h))
    centres = []
    if h < global_h:
        for point in list(case.get("bearing_points", ())) + list(peak_history):
            if not any(np.linalg.norm(np.asarray(point) - centre) < 0.5 for centre in centres):
                centres.append(np.asarray(point, dtype=float).tolist())
    return global_h, centres


def governing_element_geometry(mesh, quadrature_index, points_per_element):
    """Report the actual linear tetrahedron containing a governing stress point.

    Requested Gmsh field sizes are not measured element sizes.  Quadrature
    arrays are flattened element-first, as in the stress recovery below.
    """
    element = int(quadrature_index) // int(points_per_element)
    vertices = mesh.p[:, mesh.t[:4, element]].T
    edges = [np.linalg.norm(vertices[i] - vertices[j])
             for i in range(4) for j in range(i)]
    return {"element_index": element, "centroid_mm": vertices.mean(axis=0).tolist(),
            "max_edge_mm": float(max(edges)), "min_edge_mm": float(min(edges))}


def run_case(case, h, peak_history=(), reference_load_N=None, mesh_builder=None):
    reference_load = P if reference_load_N is None else float(reference_load_N)
    if not np.isfinite(reference_load) or reference_load <= 0:
        raise ValueError("reference load must be positive and finite")
    global_h, centres = refinement_plan(case, h, peak_history)
    # A component driver may partition its finite traction rectangles without
    # changing the shared stiffness, load audits, supports or comparison gates.
    builder = mesh_step if mesh_builder is None else mesh_builder
    m = builder(OUT / f"{case['part']}.step", h, global_h, centres, case.get("refinement_radius_mm", 1.5))
    predicted_dofs = 3 * (m.p.shape[1] + m.edges.shape[1])
    if predicted_dofs > MAX_DOFS:
        raise MeshBudgetExceeded(f"{case['part']} h={h}: {predicted_dofs} DOFs exceed the {MAX_DOFS} budget; convergence remains unresolved")
    e = ElementVector(ElementTetP2())
    ib = Basis(m, e, intorder=2)
    C = stiffness(case["print_axis"])

    @BilinearForm
    def a(u, v, w):
        sig = np.einsum("ijkl,kl...->ij...", C, sym_grad(u))
        return ddot(sig, sym_grad(v))

    # Validate the physical load patches before allocating the stiffness matrix.
    f = np.zeros(ib.N)
    load_reports = []
    patch_forces = []
    for load_index, load in enumerate(case["loads"]):
        sel, force = load["select"], load["force"]
        facets = np.intersect1d(m.facets_satisfying(sel), m.boundary_facets())
        if "plane" in load:
            facets = planar_facets(m, facets, *load["plane"])
        else:
            plane_z = load.get("plane_z", load.get("application_point", (None, None, None))[2])
            if plane_z is not None:
                facets = horizontal_facets(m, facets, plane_z)
        for axis, lower, upper in load.get("vertex_bands", ()):
            facets = facets_inside_band(m, facets, axis, lower, upper)
        try:
            nodal, report = surface_load(m, facets, force, load.get("application_point"))
        except (ValueError, np.linalg.LinAlgError) as exc:
            label = load.get("name", f"patch {load_index}")
            raise InvalidLoadPatch(f"{case['part']} h={h}: {label}: {exc}") from exc
        report["name"] = load.get("name", f"patch {load_index}")
        f += nodal
        report["footprint_vertex_bands_mm"] = list(load.get("vertex_bands", ()))
        load_reports.append(report)
        patch_forces.append((nodal, force))
    expected = tuple(np.sum([r[key] for r in load_reports], axis=0)
                     for key in ("expected_force_N", "expected_moment_Nmm"))
    check_resultants(resultants(ib, f), expected, f"{case['part']} total applied load")
    if "source_resultant" in case:
        check_resultants(resultants(ib, f), case["source_resultant"], f"{case['part']} source load")
    K = a.assemble(ib)
    fixed = np.intersect1d(m.facets_satisfying(case["fixed"]), m.boundary_facets())
    assert len(fixed) > 0, case["part"]
    D = ib.get_dofs(fixed).all()
    free = np.setdiff1d(np.arange(K.shape[0]), D)
    Kff = K.tocsr()[free][:, free]
    # Direct symmetric solve; retain the full matrix for independent residuals.
    x = np.zeros(K.shape[0])
    x[free] = solve_spd(Kff, f[free])
    rel_res = np.linalg.norm(f[free] - Kff @ x[free]) / np.linalg.norm(f[free])
    assert rel_res < 1e-6, f"{case['part']} h={h}: solver residual {rel_res:.2e}"
    equilibrium = support_equilibrium(ib, K, x, f, D)
    for report, (nodal, force) in zip(load_reports, patch_forces):
        report["pressure_weighted_displacement_mm"] = mean_patch_displacement(ib, nodal, force, x).tolist()
    del patch_forces
    if "source_resultant" in case:
        equilibrium["expected_applied_force_N"] = np.asarray(case["source_resultant"][0]).tolist()
        equilibrium["expected_applied_moment_Nmm"] = np.asarray(case["source_resultant"][1]).tolist()
    del Kff, K
    # stresses at quadrature points
    u = ib.interpolate(x)
    sig = np.einsum("ijkl,kl...->ij...", C, sym_grad(u))
    s = np.moveaxis(sig.reshape(3, 3, -1), -1, 0)
    princ = np.linalg.eigvalsh(s)
    ax = case["print_axis"]
    # Fully fixed patches put a stress singularity on their edges that grows without
    # bound under refinement. Margins are taken outside SUPPORT_EXCLUDE of them
    # (Saint-Venant); the raw peak is reported too.
    qp = ib.global_coordinates().value.reshape(3, -1).T
    fixed_pts = m.p[:, np.unique(m.facets[:, fixed])].T
    far = cKDTree(fixed_pts).query(qp)[0] > SUPPORT_EXCLUDE
    ps, sz = princ[far], s[far]
    indices = stress_utilizations(s, ax, p.ALLOW_XY, p.ALLOW_Z)
    utilization = indices["governing"]
    peak_index = int(np.argmax(np.where(far, utilization, -np.inf)))
    peak_element = governing_element_geometry(m, peak_index, sig.shape[-1])
    res = {
        "h_mm": h, "global_h_mm": global_h, "dofs": len(x),
        "local_refinement_centres_mm": centres,
        "local_refinement_radius_mm": case.get("refinement_radius_mm", 1.5) if centres else None,
        "max_disp_mm": float(np.linalg.norm(x.reshape(-1, 3), axis=1).max()),
        "reference_load_N": reference_load,
        "load_point_disp_mm": float(f @ x / reference_load),     # compliance-weighted, converges in energy norm
        "solver_rel_residual": float(rel_res),
        "load_patches": load_reports,
        "equilibrium": equilibrium,
        "peak_principal_at_supports_MPa": float(princ[:, -1].max()),
        "max_principal_MPa": float(ps[:, -1].max()),
        "min_principal_MPa": float(ps[:, 0].min()),
        "max_across_layer_tension_MPa": float(sz[:, ax, ax].max()),
        "p99_9_principal_MPa": float(np.percentile(princ[:, -1], 99.9)),
        "max_utilization_at_proof": float(utilization[far].max()),
        "raw_max_utilization_at_proof": float(utilization.max()),
        "support_exclusion_mm": SUPPORT_EXCLUDE,
        "governing_peak_mm": qp[peak_index].tolist(),
        "governing_element": peak_element,
    }
    # The report and viewer use exactly the same three criteria, including the
    # explicitly provisional compression criterion. Excluded elements are tagged
    # separately so the viewer does not colour unassessed material as zero stress.
    ne = m.t.shape[1]
    fiq = utilization / reference_load
    fiq = np.where(far, fiq, np.nan).reshape(ne, -1)
    excluded = np.all(np.isnan(fiq), axis=1)
    fi_e = np.where(excluded, 0.0, np.max(np.nan_to_num(fiq, nan=-np.inf), axis=1))
    res["_field"] = dict(points_mm=m.p.T, tet4=m.t[:4].T, fi_e=np.maximum(fi_e, 0),
                         excluded_e=excluded, raw_fi_e=utilization.reshape(ne, -1).max(axis=1) / reference_load,
                         reference_load_N=reference_load, peak_mm=qp[peak_index])
    res["margin_in_layer"] = margin(p.ALLOW_XY, res["max_principal_MPa"])
    res["margin_across_layer"] = margin(p.ALLOW_Z, res["max_across_layer_tension_MPa"])
    res["margin_compression"] = margin(p.ALLOW_XY, -res["min_principal_MPa"])
    res["strength_ratio_at_proof"] = 1 / res["max_utilization_at_proof"]
    return res


def margin(allow, stress):
    return allow / stress if stress > 0 else float("inf")


def near(v, a, tol=1e-3):
    return np.abs(v - a) < tol


h = p.KEEPER_W / 2
X0, X1 = p.TUNNEL_X
PATCH = p.GUIDE_PATCH_LENGTH
PATCH_X = p.GUIDE_PATCH_X
TAB_CENTRE = ((p.TAB_X[0] + p.TAB_X[1]) / 2, p.YK, p.HOLE_TOP_LOADED)
SOURCE_RESULTANT = (np.array([0.0, 0.0, -P]), np.cross(TAB_CENTRE, [0.0, 0.0, -P]))
# The distributed reaction patches act at their centres, not at the tunnel ends.
# Preserve both force and moment of the payload load at the tab centre.
PATCH_REACTION_RATIO = p.REACTION_RATIO
R1, R2 = P * (1 + PATCH_REACTION_RATIO), P * PATCH_REACTION_RATIO
CASES = {
    # keeper cantilevered from the tunnel mouth; tab bears on its top face
    "keeper": dict(part="keeper", print_axis=p.PRINT_AXES["keeper"], sizes=(0.8, 0.6, 0.45, 0.35, 0.25, 0.18), global_floor_mm=0.45,
                   minimum_refinement_mm=0.25,
                   bearing_points=[(xx, p.YK + yy, zz) for xx, zz in ((TAB_CENTRE[0], p.ZK + h),
                                                                                    (PATCH_X[0], p.ZK - h), (PATCH_X[1], p.ZK + h))
                                   for yy in (-2.0, 0.0, 2.0)],
                   fixed=lambda x: (near(x[2], p.ZK - h) & (x[0] > X0) & (x[0] < X0 + PATCH))
                   | (near(x[2], p.ZK + h) & (x[0] > X1 - PATCH) & (x[0] < X1)),
                   loads=[dict(select=lambda x: near(x[2], p.ZK + h) & (x[0] > p.TAB_X[0]) & (x[0] < p.TAB_X[1]),
                               force=(0, 0, -P), application_point=TAB_CENTRE)],
                   source_resultant=SOURCE_RESULTANT),
    # adapter held at the hole top (keeper contact); payload pulls the plate down
    "adapter": dict(part="adapter", print_axis=p.PRINT_AXES["adapter"], sizes=(0.8, 0.6, 0.45, 0.35, 0.25, 0.18), global_floor_mm=0.45,
                    minimum_refinement_mm=0.25,
                    bearing_points=[(xx, p.YK + yy, p.HOLE_TOP_LOADED) for xx in p.TAB_X for yy in (-p.HOLE_W/2, p.HOLE_W/2)],
                    fixed=lambda x: near(x[2], p.HOLE_TOP_LOADED) & (np.abs(x[1] - p.YK) < p.HOLE_W / 2),
                    loads=[dict(select=lambda x: near(x[2], p.ADAPTER["z"][0]), force=(0, 0, -P),
                                application_point=(TAB_CENTRE[0], p.YK, p.ADAPTER["z"][0]))],
                    source_resultant=SOURCE_RESULTANT),
    # body fixed at the four screw pilots; keeper reactions on the tunnel
    "body": dict(part="body", print_axis=p.PRINT_AXES["body"], sizes=(2.0, 1.4, 1.1, 0.75, 0.55, 0.4, 0.3, 0.22, 0.16), global_floor_mm=1.1,
                 # Below the 2*pi*R/12 curvature-controlled surface target;
                 # the 0.30 -> 0.22 mm pair really refines the R0.60 arc.
                 minimum_refinement_mm=min(0.22, 0.4*p.GUIDE_RELIEF_RADIUS),
                 refinement_radius_mm=0.8,
                 # A denser grid covers each full 2 x 5 mm bearing rectangle
                 # with smaller balls: the furthest plane point is sqrt(0.5^2
                 # + 0.5^2) < 0.8 mm away. All old stress peaks are added too.
                 bearing_points=[(xx+dx, p.YK+yy, zz) for xx, zz in ((PATCH_X[0], p.ZK-(p.KEEPER_W+p.SLIDE)/2),
                                                                  (PATCH_X[1], p.ZK+(p.KEEPER_W+p.SLIDE)/2))
                                 for dx in (-PATCH/4, PATCH/4) for yy in np.linspace(-h+0.5, h-0.5, 5)],
                 fixed=lambda x: np.any([np.hypot(x[0] - bx, x[1] - by) < p.PILOT_M3 / 2 + 0.05
                                         for bx, by in p.BOSSES], axis=0) & (x[2] > p.BODY["z"] - p.PILOT_DEPTH),
                 loads=[dict(select=lambda x: near(x[2], p.ZK - (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > X0) & (x[0] < X0 + PATCH),
                             vertex_bands=((1, p.YK-h, p.YK+h),),
                             force=(0, 0, -R1), application_point=(PATCH_X[0], p.YK, p.ZK - (p.KEEPER_W + p.SLIDE) / 2)),
                        dict(select=lambda x: near(x[2], p.ZK + (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > X1 - PATCH) & (x[0] < X1),
                             vertex_bands=((1, p.YK-h, p.YK+h),),
                             force=(0, 0, R2), application_point=(PATCH_X[1], p.YK, p.ZK + (p.KEEPER_W + p.SLIDE) / 2))],
                 source_resultant=SOURCE_RESULTANT),
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    analysis_id = uuid.uuid4().hex
    (OUT / "fea.json").write_text(json.dumps(dict(schema_version=2, analysis_id=analysis_id,
        numerical_validation_passed=False, status="VALIDATING OR UNRESOLVED", cases={}), indent=2))
    (OUT / "fea.md").write_text(
        f"# Retention component screens: HOLD\n\n"
        f"Analysis `{analysis_id}` is pending or unresolved. See `fea.json` for current progress.\n")
    validate_cad_inputs(HERE.parent, CASES)
    source_files = [Path(__file__).resolve(), HERE / "load_audit.py", HERE / "linear_solver.py", HERE / "evidence.py", HERE.parent / "params.py"]
    source_files += [OUT / "cad.json"] + [OUT / f"{name}.step" for name in CASES]
    identities = {str(path.relative_to(HERE.parent)): hashlib.sha256(path.read_bytes()).hexdigest() for path in source_files}
    dependencies = {name: version(name) for name in ("numpy", "scipy", "gmsh", "scikit-fem", "pypardiso")}
    source_id = hashlib.sha256(json.dumps(dict(files=identities, dependencies=dependencies), sort_keys=True).encode()).hexdigest()
    summary = {"schema_version": 2, "analysis_id": analysis_id, "source_id": source_id,
               "source_sha256": identities, "dependencies": dependencies, "python": sys.version.split()[0],
               "load_N": P, "allow_in_layer_MPa": p.ALLOW_XY, "allow_across_layer_MPa": p.ALLOW_Z,
               "material_basis": "Dry PAHT-CF tensile-data proxy; elastic coupling/shear and compression are assumed; no printed-process qualification",
               "contact_basis": "Fully engaged axial component cases; ideal fixed supports and prescribed reaction patches; no loaded withdrawal or off-axis qualification",
               "support_exclusion_mm": SUPPORT_EXCLUDE,
               "mesh_policy": "Global refinement to the stated floor, then local refinement at finite bearing patches and every previously governing peak",
               "max_dofs_per_solve": MAX_DOFS,
               "solver_threads": {key: os.environ[key] for key in ("MKL_NUM_THREADS", "OMP_NUM_THREADS")},
               "convergence_limits_pct": {"load_point_displacement": DISPLACEMENT_CHANGE_LIMIT_PCT,
                                          "governing_utilization": UTILIZATION_CHANGE_LIMIT_PCT},
               "physical_tests_performed": False, "working_load_rating_N": None,
               "numerical_validation_passed": False, "cases": {}}
    # A failed/terminated new run must not leave an older PASS report in place.
    (OUT / "fea.json").write_text(json.dumps(summary, indent=2))
    for name, c in CASES.items():
        runs, peaks = [], []
        stopped = None
        for h in c["sizes"]:
            print(f"Solving {name}: h={h} mm", flush=True)
            gc.collect()
            try:
                result = run_case(c, h, peaks)
            except MeshBudgetExceeded as exc:
                if not runs:
                    raise
                stopped = str(exc)
                print(stopped, flush=True)
                break
            field = result.pop("_field")
            field["analysis_id"] = analysis_id
            np.savez_compressed(OUT / f"{name}_fields.npz", **field)
            del field
            peaks.append(result["governing_peak_mm"])
            runs.append(result)
            if len(runs) > 1:
                r0, r1 = runs[-2], runs[-1]
                r1.update(convergence(r0, r1, c["minimum_refinement_mm"]))
                r1["p99_9_change_pct"] = 100 * abs(r1["p99_9_principal_MPa"] - r0["p99_9_principal_MPa"]) / r1["p99_9_principal_MPa"]
                print(f"  {name} h={h}: load-point disp {r1['load_point_disp_mm']:.5f} mm ({r1['disp_change_pct']:.1f}%), "
                      f"p99.9 {r1['p99_9_principal_MPa']:.2f} MPa ({r1['p99_9_change_pct']:.1f}%)", flush=True)
                print(f"    governing utilization {r1['max_utilization_at_proof']:.4f} ({r1['utilization_change_pct']:.1f}%)", flush=True)
                if r1["converged"]:
                    break
        fine = runs[-1]
        fine.setdefault("converged", False)
        if stopped:
            fine["converged"] = False
            fine["refinement_stopped_reason"] = stopped
        summary["cases"][name] = {"study": runs, "fine": fine}
        print(name, json.dumps(fine, indent=1), flush=True)
    unconverged = [n for n, v in summary["cases"].items() if not v["fine"]["converged"]]
    worst = min(v["fine"]["strength_ratio_at_proof"] for v in summary["cases"].values())
    summary["min_margin"] = worst
    summary["numerical_validation_passed"] = bool(not unconverged and np.isfinite(worst) and worst >= 1)
    (OUT / "fea.json").write_text(json.dumps(summary, indent=2))
    lines = ["| Part | Max principal MPa | Across-layer tension MPa | Strength ratio (all criteria) | Load-point disp mm | Δdisp / Δutilization | Mesh gate |", "|---|---:|---:|---:|---:|---|---|"]
    for n, v in summary["cases"].items():
        f = v["fine"]
        lines.append(f"| {n} (global {f['global_h_mm']}, local {f['h_mm']}, {f['dofs']} DOFs) | {f['max_principal_MPa']:.2f} | {f['max_across_layer_tension_MPa']:.2f} | {f['strength_ratio_at_proof']:.2f} | {f['load_point_disp_mm']:.4f} | {f.get('disp_change_pct', float('nan')):.2f}% / {f.get('utilization_change_pct', float('nan')):.2f}% | {'PASS' if f['converged'] else 'FAIL'} |")
    (OUT / "fea.md").write_text(f"FEA at {P:.5f} N (2 x design load); all applied forces, moments and support reactions audited\n\n"
                               + "\n".join(lines) + f"\n\nMinimum comparison strength ratio: {worst:.2f}. "
                               + "Both mesh changes must be <=5%; no numerical-error discount or high-ratio bypass is used.\n\n"
                               + "Minimum local refinement is 0.25 mm for keeper/adapter and at most 0.22 mm for the rounded body; a stable coarse pair cannot pass.\n\n"
                               + summary["mesh_policy"] + f". The pre-assembly budget is {MAX_DOFS} DOFs; a budget stop fails the gate.\n\n"
                               + "\n".join(f"{n}: {v['fine']['refinement_stopped_reason']}\n" for n, v in summary["cases"].items()
                                           if "refinement_stopped_reason" in v["fine"])
                               + summary["material_basis"] + ". " + summary["contact_basis"] + ". "
                               + f"The {SUPPORT_EXCLUDE:g} mm ideal-support zone is excluded; raw peaks remain in fea.json. "
                               + "These are computational screens, not a working-load or release rating.\n")
    print(f"min margin {worst:.2f}")
    if unconverged:
        sys.exit(f"mesh study not converged: {unconverged}")
    if worst < 1.0:
        sys.exit("FEA margin below 1.0 at the proof load")


if __name__ == "__main__":
    main()
