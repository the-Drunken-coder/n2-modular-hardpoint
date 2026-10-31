"""Strict conditional receiver-opening component screens.

Each case uses its own scaled reference force, actual guide/socket rectangles
and full ideal-clamp servo wrench. These two nominal interface traction models
do not qualify all-stroke contact, fasteners, printed material or loaded release.
"""
from functools import partial
import gc
import hashlib
from importlib.metadata import version
import json
from pathlib import Path
import sys
import uuid

import numpy as np

import fea
from body_actuation import body_opening_cases
from evidence import (DISPLACEMENT_CHANGE_LIMIT_PCT, UTILIZATION_CHANGE_LIMIT_PCT,
                      convergence, validate_cad_inputs)
from traction_mesh import mesh_with_traction_partitions, traction_refinement_fields

HERE = Path(__file__).resolve().parent
OUT = HERE.parent/"out"
EXPECTED_CASES = ("body_opening_force", "body_opening_torque")
BULK_FLOOR_MM = 1.3
SIZES_MM = (1.3, 0.3, 0.22, 0.16, 0.12)
SOURCE_FILES = ("analysis/body_actuation_fea.py", "analysis/body_actuation.py",
                "analysis/traction_mesh.py", "analysis/fea.py", "analysis/load_audit.py",
                "analysis/linear_solver.py", "analysis/evidence.py", "analysis/coupled_forces.py",
                "params.py", "out/cad.json", "out/body.step")


def source_identities(root):
    root = Path(root)
    return {name: hashlib.sha256((root/name).read_bytes()).hexdigest() for name in SOURCE_FILES}


def verify_source_identities(root, identities):
    if source_identities(root) != identities:
        raise ValueError("body-opening sources changed during the study; regenerate the numerical evidence")


def reference_labels(result):
    return {key.replace("_at_proof", "_at_reference_load"): value for key, value in result.items()}


def case_passes(record):
    fine = record.get("fine") or {}
    strength = fine.get("strength_ratio_at_reference_load", float("nan"))
    return bool(len(record.get("study", ())) >= 2 and fine.get("converged") is True
                and fine.get("displacement_converged") is True
                and fine.get("stress_converged") is True
                and fine.get("refinement_depth_reached") is True
                and np.isfinite(strength) and strength >= 1.0
                and not record.get("refinement_stopped_reason"))


def all_cases_pass(cases):
    return set(cases) == set(EXPECTED_CASES) and all(case_passes(cases[name]) for name in EXPECTED_CASES)


def run_study(name, source_case, definition, analysis_id, output_dir, progress=lambda record: None):
    """Sequential solves; every failed/refused refinement leaves a failed gate."""
    reference = float(source_case["reference_load_N"])
    if not np.isfinite(reference) or reference <= 0 or not np.isclose(reference, definition["applied_reference_force_N"], rtol=1e-12):
        raise ValueError("body-opening case and definition must name the same positive reference force")
    minimum = float(source_case["minimum_refinement_mm"])
    if not 0 < minimum <= 0.22:
        raise ValueError("body-opening must retain the mandatory 0.22 mm or finer local refinement")
    case = dict(source_case, sizes=SIZES_MM, global_floor_mm=BULK_FLOOR_MM)
    record = dict(definition=definition, reference_load_N=reference, numerical_screen_passed=False,
                  study=[], rejected_meshes=[], fine=None)
    runs, peaks = [], []
    progress(record)
    for h in case["sizes"]:
        print(f"{name}: global floor {BULK_FLOOR_MM:g}, local h={h:g} mm", flush=True)
        gc.collect()
        builder = partial(mesh_with_traction_partitions, patches=case["loads"],
                          baseline_h_mm=minimum, peak_points=tuple(peaks))
        try:
            result = fea.run_case(case, h, peaks, reference_load_N=reference, mesh_builder=builder)
        except fea.InvalidLoadPatch as exc:
            record["rejected_meshes"].append(dict(h_mm=h, reason=str(exc)))
            progress(record)
            continue
        except fea.MeshBudgetExceeded as exc:
            record["refinement_stopped_reason"] = str(exc)
            break
        field = result.pop("_field")
        field.update(analysis_id=analysis_id, case_name=name)
        np.savez_compressed(Path(output_dir)/f"{name}_fields.npz", **field)
        del field
        _, centres = fea.refinement_plan(case, h, peaks)
        result["mesh_refinement_fields"] = traction_refinement_fields(
            h, centres, case.get("refinement_radius_mm", 1.5), minimum, peaks)
        peaks.append(result["governing_peak_mm"])
        if runs:
            result.update(convergence(runs[-1], result, minimum))
        result.setdefault("converged", False)
        runs.append(result)
        record["study"] = [reference_labels(run) for run in runs]
        record["fine"] = reference_labels(result)
        progress(record)
        print(json.dumps(record["fine"], indent=1), flush=True)
        if result["converged"]:
            break
    if record.get("refinement_stopped_reason") and record["fine"] is not None:
        record["fine"]["converged"] = False
    if not runs:
        record["unresolved_reason"] = "No admissible mesh within the configured resource budget"
        record["fine"] = {}
    record["numerical_screen_passed"] = case_passes(record)
    progress(record)
    return record


def write_markdown(summary, output):
    lines = ["# Conditional receiver opening component screens", "",
             f"Status: **{'PASS' if summary['numerical_screen_passed'] else 'HOLD'}**. "
             f"Design service force remains {fea.p.P_DESIGN:.7f} N; each row uses its separately recorded scaled reference force.", "",
             "| Case | Reference force N | Strength ratio | Displacement / utilization change | Mesh gate |",
             "| --- | ---: | ---: | --- | --- |"]
    for name, record in summary["cases"].items():
        fine = record.get("fine") or {}
        lines.append(f"| {name} | {record['reference_load_N']:.6f} | "
                     f"{fine.get('strength_ratio_at_reference_load', float('nan')):.3f} | "
                     f"{fine.get('disp_change_pct', float('nan')):.2f}% / {fine.get('utilization_change_pct', float('nan')):.2f}% | "
                     f"{'PASS' if fine.get('converged') else 'HOLD'} |")
        if record.get("refinement_stopped_reason"):
            lines.extend(["", record["refinement_stopped_reason"]])
    lines.extend(["", summary["contact_basis"], "", summary["material_basis"], "", summary["mesh_policy"], "",
                  f"Both changes must be <=5%, local size must reach 0.22 mm or finer, and at least two successful levels are required. "
                  f"The {fea.MAX_DOFS:,} DOF guard is retained. The existing {fea.SUPPORT_EXCLUDE:g} mm ideal host-support exclusion is unchanged; "
                  "no additional ear, socket or guide exclusions are introduced. Raw and excluded peaks, actual governing tetrahedron dimensions, "
                  "all patch forces/moments and host reactions remain in the JSON report.", ""])
    output.write_text("\n".join(lines))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    analysis_id = uuid.uuid4().hex
    summary = dict(schema_version=1, analysis_id=analysis_id, numerical_screen_passed=False,
                   status="VALIDATING OR UNRESOLVED", cases={})
    destination = OUT/"body_actuation_fea.json"
    destination.write_text(json.dumps(summary, indent=2))
    (OUT/"body_actuation_fea.md").write_text(
        f"# Conditional receiver opening component screens: HOLD\n\n"
        f"Analysis `{analysis_id}` is pending or unresolved. See `body_actuation_fea.json` for current progress.\n")
    validate_cad_inputs(HERE.parent, ("body",))
    identities = source_identities(HERE.parent)
    cases = body_opening_cases()
    if set(cases) != set(EXPECTED_CASES):
        raise ValueError("both defined receiver-opening reference cases are required")
    summary.update(source_sha256=identities,
        dependencies={name: version(name) for name in ("numpy", "scipy", "gmsh", "scikit-fem", "pypardiso")},
        physical_tests_performed=False, working_load_rating_N=None,
        design_service_force_N=fea.p.P_DESIGN, max_dofs_per_solve=fea.MAX_DOFS,
        convergence_limits_pct=dict(load_point_displacement=DISPLACEMENT_CHANGE_LIMIT_PCT,
                                    governing_utilization=UTILIZATION_CHANGE_LIMIT_PCT),
        mesh_policy="Exact partitions preserve all ten finite traction rectangles on the unchanged solid; bulk 1.3 mm, then local 0.30/0.22 mm at every physical patch and all previous governing peaks. If needed, all previous governing peaks refine to 0.16/0.12 mm while the complete physical patch zones retain their mandatory 0.22 mm baseline; every field size is recorded and the DOF guard remains active",
        contact_basis="Two balanced, scaled centered-reference component screens with positive socket tractions and full ideal-clamp servo wrenches. Componentwise amplitude coverage is not a full-stroke stress envelope or a jointly realized contact state; fastener pull-out/slip and physical loaded release remain unqualified.",
        material_basis="Dry PAHT-CF tensile-data proxy; elastic coupling/shear and compression are assumed; no printed-process qualification",
        support_exclusion_mm=fea.SUPPORT_EXCLUDE, status="RUNNING OR UNRESOLVED")
    destination.write_text(json.dumps(summary, indent=2))
    for name in EXPECTED_CASES:
        case, definition = cases[name]
        def progress(record):
            summary["cases"][name] = record
            destination.write_text(json.dumps(summary, indent=2))
        run_study(name, case, definition, analysis_id, OUT, progress)
    # cad.json also identifies the CAD generators and their helpers. Recheck
    # those current files, not merely the unchanged manifest/STEP bytes.
    validate_cad_inputs(HERE.parent, ("body",))
    verify_source_identities(HERE.parent, identities)
    summary["numerical_screen_passed"] = all_cases_pass(summary["cases"])
    summary["status"] = "PASS" if summary["numerical_screen_passed"] else "HOLD"
    destination.write_text(json.dumps(summary, indent=2))
    write_markdown(summary, OUT/"body_actuation_fea.md")
    if not summary["numerical_screen_passed"]:
        sys.exit("conditional receiver opening component screen unresolved or below the comparison allowable")


if __name__ == "__main__":
    main()
