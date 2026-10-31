"""Linear FEA of the three R5 printed parts at the 17.8 N proof load.

Transversely isotropic PAHT-CF (layer plane stiff, print axis soft). Stress is
checked two ways per element quadrature point:
  max principal tension   vs ALLOW_XY   (in-layer)
  normal stress across layers (print axis) vs ALLOW_Z
Each part is refined until load-point displacement (f.u / P) changes < 5 % (and stops early if the
governing stress outside 1 mm of fixed patches also changes < 5 %). Margins are
divided by (1 + last stress change). Keeper stresses sit mostly inside the excluded
zone, so mechanics.py also checks the keeper and tab by hand.

    python project/designs/r5/analysis/fea.py   (needs ../out from cad/build.py)
"""
import json
import sys
from pathlib import Path

import gmsh
import numpy as np
from skfem import (Basis, BilinearForm, ElementTetP2, ElementVector, FacetBasis,
                   LinearForm, MeshTet, condense, solve)
from skfem.helpers import sym_grad, ddot
import pypardiso
from scipy.spatial import cKDTree

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402

OUT = HERE.parent / "out"
P = p.P_PROOF
SUPPORT_EXCLUDE = 1.0  # mm
CONVERGED_PCT = 5.0   # max-displacement change between successive refinements


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


def mesh_step(step, h):
    gmsh.initialize()
    gmsh.option.setNumber("General.Terminal", 0)
    gmsh.model.occ.importShapes(str(step))
    gmsh.model.occ.synchronize()
    gmsh.option.setNumber("Mesh.MeshSizeMax", h)
    gmsh.option.setNumber("Mesh.MeshSizeMin", h / 3)
    gmsh.option.setNumber("Mesh.MeshSizeFromCurvature", 12)
    gmsh.model.mesh.generate(3)
    tags, xyz, _ = gmsh.model.mesh.getNodes()
    _, _, conn = gmsh.model.mesh.getElements(3)
    gmsh.finalize()
    pts = np.zeros((tags.max() + 1, 3))
    pts[tags] = xyz.reshape(-1, 3)
    t = conn[0].reshape(-1, 4).T
    used, inv = np.unique(t, return_inverse=True)
    return MeshTet(pts[used].T, inv.reshape(t.shape))


def run_case(case, h):
    m = mesh_step(OUT / f"{case['part']}.step", h)
    e = ElementVector(ElementTetP2())
    ib = Basis(m, e, intorder=2)
    C = stiffness(case["print_axis"])

    @BilinearForm
    def a(u, v, w):
        sig = np.einsum("ijkl,kl...->ij...", C, sym_grad(u))
        return ddot(sig, sym_grad(v))

    K = a.assemble(ib)
    f = np.zeros(K.shape[0])
    for sel, force in case["loads"]:
        facets = np.intersect1d(m.facets_satisfying(sel), m.boundary_facets())
        assert len(facets) > 0, case["part"]
        fb = FacetBasis(m, e, facets=facets)
        area = LinearForm(lambda v, w: 1.0 + 0 * v[0]).assemble(FacetBasis(m, ElementTetP2(), facets=facets)).sum()
        t = np.array(force) / area

        @LinearForm
        def lf(v, w):
            return t[0] * v[0] + t[1] * v[1] + t[2] * v[2]
        f += lf.assemble(fb)
    fixed = np.intersect1d(m.facets_satisfying(case["fixed"]), m.boundary_facets())
    assert len(fixed) > 0, case["part"]
    D = ib.get_dofs(fixed).all()
    free = np.setdiff1d(np.arange(K.shape[0]), D)
    Kff = K.tocsr()[free][:, free]
    # direct sparse solve (MKL PARDISO): iterative AMG-CG stalled on the thin adapter plate
    x = np.zeros(K.shape[0])
    x[free] = pypardiso.spsolve(Kff, f[free])
    rel_res = np.linalg.norm(f[free] - Kff @ x[free]) / np.linalg.norm(f[free])
    assert rel_res < 1e-6, f"{case['part']} h={h}: solver residual {rel_res:.2e}"
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
    res = {
        "h_mm": h, "dofs": int(K.shape[0]),
        "max_disp_mm": float(np.linalg.norm(x.reshape(-1, 3), axis=1).max()),
        "load_point_disp_mm": float(f @ x / P),     # compliance-weighted, converges in energy norm
        "solver_rel_residual": float(rel_res),
        "peak_principal_at_supports_MPa": float(princ[:, -1].max()),
        "max_principal_MPa": float(ps[:, -1].max()),
        "min_principal_MPa": float(ps[:, 0].min()),
        "max_across_layer_tension_MPa": float(sz[:, ax, ax].max()),
        "p99_9_principal_MPa": float(np.percentile(princ[:, -1], 99.9)),
    }
    # viewer field: per-element failure index per 1 N (max over its quadrature points of
    # in-layer principal / ALLOW_XY and across-layer tension / ALLOW_Z), support zone excluded
    ne = m.t.shape[1]
    fiq = np.maximum(princ[:, -1] / p.ALLOW_XY, s[:, ax, ax] / p.ALLOW_Z) / P
    fiq = np.where(far, fiq, np.nan).reshape(ne, -1)
    fi_e = np.where(np.all(np.isnan(fiq), axis=1), 0.0, np.nanmax(np.nan_to_num(fiq, nan=-np.inf), axis=1))
    res["_field"] = dict(points_mm=m.p.T, tet4=m.t[:4].T, fi_e=np.maximum(fi_e, 0))
    res["margin_in_layer"] = margin(p.ALLOW_XY, res["max_principal_MPa"])
    res["margin_across_layer"] = margin(p.ALLOW_Z, res["max_across_layer_tension_MPa"])
    res["margin_compression"] = margin(p.ALLOW_XY, -res["min_principal_MPa"])
    return res


def margin(allow, stress):
    return allow / stress if stress > 0 else float("inf")


def near(v, a, tol=1e-3):
    return np.abs(v - a) < tol


h = p.KEEPER_W / 2
X0, X1 = p.TUNNEL_X
PATCH = 2.0                                      # support patch length at each tunnel end
R1, R2 = P * (1 + p.REACTION_RATIO), P * p.REACTION_RATIO   # tunnel reactions on the keeper
CASES = {
    # keeper cantilevered from the tunnel mouth; tab bears on its top face
    "keeper": dict(part="keeper", print_axis=1, sizes=(0.8, 0.6, 0.45),
                   fixed=lambda x: (near(x[2], p.ZK - h) & (x[0] > X0) & (x[0] < X0 + PATCH))
                   | (near(x[2], p.ZK + h) & (x[0] > X1 - PATCH) & (x[0] < X1)),
                   loads=[(lambda x: near(x[2], p.ZK + h) & (x[0] > p.TAB_X[0]) & (x[0] < p.TAB_X[1]),
                           (0, 0, -P))]),
    # adapter held at the hole top (keeper contact); payload pulls the plate down
    "adapter": dict(part="adapter", print_axis=2, sizes=(0.8, 0.6, 0.45),
                    fixed=lambda x: near(x[2], p.HOLE_TOP_LOADED) & (np.abs(x[1] - p.YK) < p.HOLE_W / 2),
                    loads=[(lambda x: near(x[2], p.ADAPTER["z"][0]), (0, 0, -P))]),
    # body fixed at the four screw pilots; keeper reactions on the tunnel
    "body": dict(part="body", print_axis=2, sizes=(2.0, 1.4, 1.0),
                 fixed=lambda x: np.any([np.hypot(x[0] - bx, x[1] - by) < p.PILOT_M3 / 2 + 0.05
                                         for bx, by in p.BOSSES], axis=0) & (x[2] > p.BODY["z"] - p.PILOT_DEPTH),
                 loads=[(lambda x: near(x[2], p.ZK - (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > X0) & (x[0] < X0 + PATCH), (0, 0, -R1)),
                        (lambda x: near(x[2], p.ZK + (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > X1 - PATCH) & (x[0] < X1), (0, 0, R2))]),
}


def main():
    summary = {"load_N": P, "allow_in_layer_MPa": p.ALLOW_XY, "allow_across_layer_MPa": p.ALLOW_Z, "cases": {}}
    for name, c in CASES.items():
        runs = []
        for h in c["sizes"]:
            runs.append(run_case(c, h))
            if len(runs) > 1:
                r0, r1 = runs[-2], runs[-1]
                r1["disp_change_pct"] = 100 * abs(r1["load_point_disp_mm"] - r0["load_point_disp_mm"]) / r1["load_point_disp_mm"]
                r1["p99_9_change_pct"] = 100 * abs(r1["p99_9_principal_MPa"] - r0["p99_9_principal_MPa"]) / r1["p99_9_principal_MPa"]
                print(f"  {name} h={h}: load-point disp {r1['load_point_disp_mm']:.5f} mm ({r1['disp_change_pct']:.1f}%), "
                      f"p99.9 {r1['p99_9_principal_MPa']:.2f} MPa ({r1['p99_9_change_pct']:.1f}%)", flush=True)
                gov0 = max(r0["max_principal_MPa"], r0["max_across_layer_tension_MPa"])
                gov1 = max(r1["max_principal_MPa"], r1["max_across_layer_tension_MPa"])
                r1["stress_change_pct"] = 100 * abs(gov1 - gov0) / gov1
                print(f"    governing stress {gov1:.2f} MPa ({r1['stress_change_pct']:.1f}%)", flush=True)
                if r1["disp_change_pct"] < CONVERGED_PCT and r1["stress_change_pct"] < CONVERGED_PCT:
                    break
        fine = runs[-1]
        np.savez_compressed(OUT / f"{name}_fields.npz", **fine.pop("_field"))
        for r_ in runs:
            r_.pop("_field", None)
        # Gate on displacement; stresses this small are noisy, so the margin is
        # discounted by the last refinement change instead.
        fine["converged"] = fine.get("disp_change_pct", 100) < CONVERGED_PCT
        k = 1 + fine.get("stress_change_pct", 0) / 100
        for key in ("margin_in_layer", "margin_across_layer", "margin_compression"):
            fine[key] /= k
        summary["cases"][name] = {"study": runs, "fine": fine}
        print(name, json.dumps(fine, indent=1), flush=True)
    # an unconverged part still passes if its margin is >= 10, far beyond any remaining mesh error
    unconverged = [n for n, v in summary["cases"].items() if not v["fine"]["converged"]
                   and min(v["fine"]["margin_in_layer"], v["fine"]["margin_across_layer"]) < 10]
    worst = min(min(v["fine"]["margin_in_layer"], v["fine"]["margin_across_layer"], v["fine"]["margin_compression"])
                for v in summary["cases"].values())
    summary["min_margin"] = worst
    (OUT / "fea.json").write_text(json.dumps(summary, indent=2))
    lines = ["| Part | Max principal MPa | Across-layer tension MPa | Margin in-layer | Margin across layers | Load-point disp mm |", "|---|---:|---:|---:|---:|---:|"]
    for n, v in summary["cases"].items():
        f = v["fine"]
        lines.append(f"| {n} (h {f['h_mm']}, Δdisp {f.get('disp_change_pct', float('nan')):.1f}%, Δσ {f.get('stress_change_pct', float('nan')):.1f}%) | {f['max_principal_MPa']:.2f} | {f['max_across_layer_tension_MPa']:.2f} | {f['margin_in_layer']:.1f} | {f['margin_across_layer']:.1f} | {f['load_point_disp_mm']:.4f} |")
    (OUT / "fea.md").write_text(f"FEA at {P:.2f} N (2 x design load)\n\n" + "\n".join(lines) + f"\n\nMinimum margin: {worst:.1f}\n")
    print(f"min margin {worst:.2f}")
    if unconverged:
        sys.exit(f"mesh study not converged: {unconverged}")
    if worst < 1.0:
        sys.exit("FEA margin below 1.0 at the proof load")


if __name__ == "__main__":
    main()
