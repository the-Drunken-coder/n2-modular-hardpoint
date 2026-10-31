"""Separate service-opening keeper screen for the assembly-entry yoke.

This is a pre-motion linear component model with ideal guide restraints and
an assumed finite sleeve-contact patch. It does not solve sliding contact,
prove unrestricted actuator stall survival or qualify loaded release.
"""
import gc
import hashlib
from importlib.metadata import version
import json
from pathlib import Path
import sys
import uuid

import numpy as np

import fea
from evidence import convergence, validate_cad_inputs
from coupled_forces import study

HERE = Path(__file__).resolve().parent
p = fea.p
OUT = HERE.parent / "out"
MIN_LOCAL_REFINEMENT_MM = 0.25


def service_opening_case():
    """Preserve the service force and moment on both tab and sleeve patches."""
    fit = getattr(p, "FIT_BOUNDS", {})
    if not {"latch_error_deg", "horn_r"}.issubset(fit):
        raise ValueError("opening screen requires the inspected endpoint/radius envelope in FIT_BOUNDS")
    coupled = study(p, include_states=False)
    if not coupled["finite_sliding_solution"]:
        raise ValueError("opening FEA requires a finite coupled sliding-force envelope")
    load_state = coupled["max_opening_force"]
    angle = load_state["alpha_deg"]
    radius = load_state["dimensional_candidate"]["radius_mm"]
    pin_z = min(load_state["sleeve_application_point_mm"][2],
                p.SHAFT_Z-fit["relative_guide_shaft_z_error_mm"])
    # The finite patch is an explicit pressure assumption, not Hertz contact.
    # The bridge widens toward +Y. Its opposite -Y wall edge gives the adverse
    # eccentricity relative to that shifted bridge centroid.
    patch_height = p.PIN_D / 2
    slot_x = p.SHAFT_X - p.CRANK_R + p.PIN_SLOT/2
    ylo, yhi = p.YK-p.KEEPER_W/2, p.YK+p.KEEPER_W/2
    if getattr(p, "HORN_GROOVE_ENABLED", True):
        groove_half = p.HORN_SCREW["head_d"]/2 + getattr(p, "HORN_GROOVE_Z_CLEAR", p.SCREW_CLEAR)
        if pin_z + patch_height/2 > p.SHAFT_Z + groove_half:
            raise ValueError("opening patch straddles the groove step; define its contact distribution explicitly")
        ylo = max(ylo, p.SPLINE_TOP_Y + p.HORN_SCREW["head_h"] + getattr(p, "HORN_GROOVE_Y_CLEAR", p.SCREW_CLEAR))
    patch_width = min(1.0, yhi-ylo)
    yhi = ylo+patch_width
    pin_point = np.array([slot_x, (ylo+yhi)/2, pin_z])
    pin_force = np.array(load_state["sleeve_force_N"])
    tab_force = np.array([-p.MU*p.P_DESIGN, 0.0, -p.P_DESIGN])
    base = fea.CASES["keeper"]
    tab_load = dict(base["loads"][0], force=tab_force, name="service tab load and drag")
    slot_load = dict(name="opening sleeve -Y edge patch", select=lambda x: fea.near(x[0], slot_x) & (x[1] >= ylo) & (x[1] <= yhi)
                     & (np.abs(x[2]-pin_z) < patch_height/2),
                     force=pin_force, application_point=pin_point, plane=(0, slot_x),
                     vertex_bands=((1, ylo, yhi),))
    slot_top = p.SHAFT_Z+p.CRANK_R_MAX+p.PIN_SLOT/2+p.YOKE_SLOT_TOP_EXTRA
    corner_points = [(xx, yy, slot_top) for xx in (slot_x-p.PIN_SLOT, slot_x) for yy in (ylo, yhi)]
    resultants = (tab_force+pin_force,
                  np.cross(fea.TAB_CENTRE, tab_force) + np.cross(pin_point, pin_force))
    case = dict(base, loads=[tab_load, slot_load], source_resultant=resultants,
                bearing_points=base["bearing_points"] + corner_points + [pin_point.tolist()])
    definition = dict(reference_payload_force_N=p.P_DESIGN, sleeve_force_N=pin_force.tolist(),
                      sleeve_application_point_mm=pin_point.tolist(), assumed_patch_height_mm=patch_height,
                      assumed_patch_width_mm=patch_width, sleeve_eccentricity_y_mm=pin_point[1]-p.YK,
                      angle_deg=angle, radius_mm=radius,
                      coupled_force_state=load_state,
                      basis="Coupled inspected-position opening-force envelope and minimum opening pin height; adverse -Y edge patch opposite the widened bridge; nominal CAD with ideal guide restraints",
                      limitations="The force envelope is applied to the nominal component, with tab friction at its nominal patch; this is not the complete as-built contact state. Assumed finite pressure patch; nominal face cannot reproduce the larger inspected-dimension hand eccentricity; no sliding/contact solution or arbitrary stall load; printed material and loaded release unqualified")
    return case, definition


def at_reference_load(result):
    """Do not label a service-opening result as retention-proof evidence."""
    return {key.replace("_at_proof", "_at_reference_load"): value for key, value in result.items()}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    analysis_id = uuid.uuid4().hex
    pending = dict(schema_version=1, analysis_id=analysis_id, case="service_opening_keeper",
                   numerical_screen_passed=False, status="VALIDATING OR UNRESOLVED")
    (OUT/"actuation_fea.json").write_text(json.dumps(pending, indent=2))
    (OUT/"actuation_fea.md").write_text(
        f"# Service-opening keeper component screen: HOLD\n\n"
        f"Analysis `{analysis_id}` is pending or unresolved. See `actuation_fea.json` for current progress.\n")
    validate_cad_inputs(HERE.parent, ("keeper",))
    case, definition = service_opening_case()
    files = [Path(__file__).resolve(), HERE/"fea.py", HERE/"load_audit.py", HERE/"linear_solver.py",
             HERE/"evidence.py", HERE/"coupled_forces.py", HERE.parent/"params.py", OUT/"cad.json", OUT/"keeper.step"]
    identities = {str(path.relative_to(HERE.parent)): hashlib.sha256(path.read_bytes()).hexdigest() for path in files}
    runs, peaks, stopped, rejected = [], [], None, []
    pending.update(source_sha256=identities, status="RUNNING OR UNRESOLVED", rejected_meshes=rejected)
    (OUT/"actuation_fea.json").write_text(json.dumps(pending, indent=2))
    for h in case["sizes"]:
        print(f"Service-opening keeper: local h={h} mm", flush=True)
        gc.collect()
        try:
            result = fea.run_case(case, h, peaks, reference_load_N=p.P_DESIGN)
        except fea.InvalidLoadPatch as exc:
            rejected.append(dict(h_mm=h, reason=str(exc)))
            print(f"Rejected load-patch mesh: {exc}", flush=True)
            (OUT/"actuation_fea.json").write_text(json.dumps(pending, indent=2))
            continue
        except fea.MeshBudgetExceeded as exc:
            if not runs:
                raise
            stopped = str(exc)
            break
        field = result.pop("_field")
        field["analysis_id"] = analysis_id
        np.savez_compressed(OUT/"keeper_opening_fields.npz", **field)
        del field
        peaks.append(result["governing_peak_mm"])
        if runs:
            result.update(convergence(runs[-1], result, MIN_LOCAL_REFINEMENT_MM))
        # Coarse global meshes can share nearly the same curvature-controlled
        # slot fillet mesh. Require the 0.35 and 0.25 mm local stages before the
        # observed stability can qualify this marginal corner-stress screen.
        result.setdefault("converged", False)
        runs.append(result)
        print(json.dumps(at_reference_load(result), indent=1), flush=True)
        if result.get("converged"):
            break
    if not runs:
        raise SystemExit("No admissible opening load-patch mesh; numerical screen remains unresolved")
    fine = runs[-1]
    fine.setdefault("converged", False)
    if stopped:
        fine.update(converged=False, refinement_stopped_reason=stopped)
    passed = bool(fine["converged"] and fine["strength_ratio_at_proof"] >= 1.0)
    summary = dict(schema_version=1, analysis_id=analysis_id, case="service_opening_keeper",
                   source_sha256=identities,
                   dependencies={name: version(name) for name in ("numpy", "scipy", "gmsh", "scikit-fem", "pypardiso")},
                   definition=definition, physical_tests_performed=False, numerical_screen_passed=passed,
                   rejected_meshes=rejected, study=[at_reference_load(r) for r in runs], fine=at_reference_load(fine))
    (OUT/"actuation_fea.json").write_text(json.dumps(summary, indent=2))
    status = "PASS" if passed else "HOLD"
    pin_displacement = fine["load_patches"][1]["pressure_weighted_displacement_mm"]
    (OUT/"actuation_fea.md").write_text(
        f"# Service-opening keeper component screen: {status}\n\n"
        f"Payload force {p.P_DESIGN:.5f} N; sleeve force {definition['sleeve_force_N']} N. "
        f"Strength ratio at this service load: {fine['strength_ratio_at_proof']:.3f}. "
        f"Mesh changes: displacement {fine.get('disp_change_pct', float('nan')):.2f}%, "
        f"governing utilization {fine.get('utilization_change_pct', float('nan')):.2f}%; both must be <=5%.\n\n"
        f"Local refinement must also reach {MIN_LOCAL_REFINEMENT_MM:g} mm; a stable coarse pair cannot stop the study.\n\n"
        f"Pressure-weighted sleeve-patch displacement relative to the ideal guide restraints: {pin_displacement} mm. "
        "This worst-stress pose does not give the release endpoint's travel loss; payload drag ceases after disengagement.\n\n"
        f"{definition['basis']}. {definition['limitations']}. "
        f"The prescribed sleeve patch is {definition['assumed_patch_height_mm']:g} mm high by "
        f"{definition['assumed_patch_width_mm']:g} mm wide, with centroid Y eccentricity "
        f"{definition['sleeve_eccentricity_y_mm']:g} mm; "
        f"the standard {fea.SUPPORT_EXCLUDE:g} mm guide-support exclusion remains. "
        "Yoke corners are included, with no extra notch exclusion. "
        "This screen is separate from the fully engaged axial retention proof and from the hand closing-jam case.\n")
    if not passed:
        sys.exit("service-opening component screen unresolved or below the comparison allowable")


if __name__ == "__main__":
    main()
