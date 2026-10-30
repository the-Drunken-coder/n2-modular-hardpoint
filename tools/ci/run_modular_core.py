#!/usr/bin/env python3
"""Regenerate and solve the modular-core concept in a fresh isolated workspace.

The original P14 CAD, replay engine and workflow stay unchanged. A passing run
checks geometry and numerical evidence; it never qualifies a payload or print.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time

REPO = Path(__file__).resolve().parents[2]
STUDY = REPO / "project/concepts/modular-core"
SOLVER_SHA = "6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c"
COMPONENTS = ("receiver", "adapter", "keeper")
PRINT_IDS = {"receiver_core", "payload_adapter", "keeper"}
# Deliberate scope-completeness guard. Review this expectation when adding or
# removing specified poses; merely reporting all_passed must not hide omissions.
REVIEWED_CLEARANCE_COUNT = 85


def read(path):
    return json.loads(Path(path).read_text())


def dump(path, data):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, allow_nan=False) + "\n")


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def require(condition, message):
    if not condition:
        raise ValueError(message)


def contained(root, relative):
    root = Path(root).resolve()
    path = (root / relative).resolve()
    require(path.is_relative_to(root), f"Evidence path escapes its workspace: {relative}")
    return path


def finite(value, label, nonnegative=False):
    require(isinstance(value, (int, float)) and not isinstance(value, bool)
            and math.isfinite(value), f"Non-finite or nonnumeric {label}")
    if nonnegative:
        require(value >= 0, f"Negative {label}")
    return value


def verify_frozen_inputs():
    manifest = read(STUDY / "source-manifest.json")
    require(len(manifest["files"]) >= 20, "Incomplete frozen source manifest")
    for item in manifest["files"]:
        path = contained(REPO, item["path"])
        require(path.is_file(), f"Missing frozen input: {item['path']}")
        require(sha(path) == item["sha256"], f"Frozen input changed: {item['path']}")
    return manifest


def tracked_sources():
    # Archived local results are documentary records, never inputs to this run.
    paths = sorted((STUDY / "scripts").rglob("*.py")) + sorted((STUDY / "scripts").rglob("*.json"))
    paths += [STUDY / "source-manifest.json"] + sorted((STUDY / "docs").rglob("*.md"))
    paths += [Path(__file__).resolve(), REPO / ".github/workflows/modular-core-validation.yml"]
    return {str(p.relative_to(REPO)): sha(p) for p in paths}


def execute(out, label, command, accepted_codes=(0,)):
    log = out / "logs" / f"{label}.log"
    log.parent.mkdir(parents=True, exist_ok=True)
    start = time.monotonic()
    env = os.environ.copy()
    env.update({key: "1" for key in ("OPENBLAS_NUM_THREADS", "OMP_NUM_THREADS", "MKL_NUM_THREADS")})
    print(f"Running {label}; log: {log}", flush=True)
    with log.open("w") as stream:
        result = subprocess.run(command, cwd=out / "workspace", env=env,
                                stdout=stream, stderr=subprocess.STDOUT)
    record = {"command": command, "returncode": result.returncode,
              "elapsed_seconds": time.monotonic() - start, "log": str(log.relative_to(out))}
    dump(out / "execution" / f"{label}.json", record)
    if result.returncode not in accepted_codes:
        print(log.read_text()[-12000:], file=sys.stderr)
        raise RuntimeError(f"{label} exited {result.returncode}; see {log}")
    return record


def gate_cad(models):
    clearance = read(models / "modular-core-clearance.json")
    checks = clearance.get("checks", [])
    require(clearance.get("scene") == "modular-core", "Wrong CAD study")
    require(len(checks) == REVIEWED_CLEARANCE_COUNT and clearance.get("all_passed") is True,
            f"Expected all {REVIEWED_CLEARANCE_COUNT} reviewed nominal modular-core clearance checks")
    require(len({r["label"] for r in checks}) == len(checks), "Duplicate CAD checks")
    for row in checks:
        overlap = finite(row.get("overlap_mm3"), "clearance overlap", nonnegative=True)
        require(row.get("expected_interference") is False and row.get("passed") is True
                and overlap < 1e-5, f"CAD interference: {row.get('label')}")
    connectivity = read(models / "modular-core-connectivity.json")
    for part in COMPONENTS:
        require(connectivity.get(f"{part}_joined_solid_count") == 1
                and connectivity.get(f"{part}_valid") is True,
                f"{part} must be one valid connected printed solid")
    prints = read(models / "modular-core-printability.json")["printedParts"]
    require({p["id"] for p in prints} == PRINT_IDS and len(prints) == 3,
            "Expected exactly three physical print bodies")
    hashes = {}
    for part in prints:
        step = contained(models, part["step"])
        require(step.is_file() and sha(step) == part["stepSha256"],
                f"Printed STEP differs from geometry report: {part['id']}")
        require(contained(models, part["stl"]).is_file(), f"Missing oriented STL: {part['id']}")
        require(part["solidCount"] == 1, f"Disconnected print: {part['id']}")
        finite(part["volume_mm3"], "printed volume", nonnegative=True)
        require(part["volume_mm3"] > 0, "Empty printed body")
        hashes[part["id"]] = sha(step)
    return {"nominal_clearance_checks": len(checks), "physical_print_bodies": 3,
            "physical_step_sha256": hashes, "physical_qualification": False}


def gate_geometry_config(models, config):
    """Reject contact coordinates that no longer match the freshly built CAD."""
    geometry = read(models / "modular-core-simulation-geometry.json")
    expected = {
        "receiver_mounts": [xy + [geometry["host_mount_top_z_mm"]]
                            for xy in geometry["host_mount_centers_mm"]],
        "payload_mounts": [xy + [geometry["payload_mount_plane_z_mm"]]
                           for xy in geometry["payload_mount_centers_mm"]],
        "lug_x": geometry["lug_x_mm"],
        "adapter_floor_z": geometry["lug_floor_z_mm"],
        "keeper_tip_x": geometry["keeper_tip_x_mm"],
        "keeper_bottom_z": geometry["keeper_bottom_z_mm"],
        "keeper_top_z": geometry["keeper_top_z_mm"],
        "receiver_roof_z": geometry["receiver_roof_z_mm"],
        "receiver_floor_z": geometry["receiver_floor_z_mm"],
        "distal_roof_x": geometry["distal_x_mm"],
        "proximal_roof_x": geometry["proximal_x_mm"],
        "far_floor_x": geometry["far_floor_x_mm"],
        "contact_y": geometry["contact_y_mm"],
        "actuator_stroke_mm": geometry["stroke_mm"],
        "distal_support_loss_mm": geometry["distal_x_mm"][1] - geometry["keeper_tip_x_mm"],
        "actuator_pull_line_y_mm": geometry["actuator_axis_mm"][1],
        "keeper_contact_center_y_mm": sum(geometry["contact_y_mm"]) / 2,
        "nominal_yaw_eccentricity_mm": abs(geometry["pull_y_eccentricity_mm"]),
        "vertical_pull_offset_mm": abs(geometry["pull_z_eccentricity_mm"]),
    }

    def match(actual, wanted):
        if isinstance(wanted, list):
            return isinstance(actual, list) and len(actual) == len(wanted) and all(
                match(a, b) for a, b in zip(actual, wanted))
        return isinstance(actual, (int, float)) and math.isclose(actual, wanted, rel_tol=0, abs_tol=1e-7)

    for name, wanted in expected.items():
        require(match(config.get(name), wanted), f"FEA contact config differs from fresh CAD: {name}")
    mount_centers = [selector["annulus_xy"][:2] for selector in config["actuator_load_selectors"]]
    require(match(mount_centers, geometry["actuator_mount_centers_mm"]),
            "FEA actuator mount centers differ from fresh CAD")
    return {"coordinate_fields_checked": len(expected) + 1, "consistent_with_current_cad": True}


def overhang_advisory(out):
    models = out / "workspace/dist/models/modular-core-parts"
    records = []
    for part, up in (("receiver_core", "+Z"), ("payload_adapter", "-Z"), ("keeper", "+Z")):
        step = models / f"{part}.step"
        report = models / f"{part}_overhang.json"
        execution = execute(out, f"overhang-{part}", [sys.executable,
            str(out / "workspace/tools/overhang.py"), str(step), f"--up={up}", "--json", str(report)],
            accepted_codes=(0, 1))
        data = read(report)
        require(Path(data["step"]).resolve() == step.resolve() and data["up"] == up,
                f"Overhang report uses wrong print or orientation: {part}")
        finite(data.get("bed_mm2"), "bed area", nonnegative=True)
        for category in ("SUPPORT", "bridge", "small-curve", "sliver"):
            finite(data["totals"][category], "overhang area", nonnegative=True)
        support = data["totals"]["SUPPORT"] > 0
        require(execution["returncode"] == int(support), f"Overhang exit code differs from report: {part}")
        records.append({"part": part, "up": up, "step_sha256": sha(step),
                        "report": str(report.relative_to(out)), "bed_mm2": data["bed_mm2"],
                        "areas_mm2": data["totals"], "support_indicated": support})
    result = {"status": "geometric_advisory", "physical_qualification": False,
              "slicer_validation_performed": False, "parts": records,
              "scope": "Face-normal, bridge-span and adjacency heuristic in proposed orientations; "
                       "support indication is advisory, not print qualification."}
    dump(out / "manufacturing-advisory.json", result)
    return result


def stage_cad(out):
    require(not out.exists(), "Output already exists; choose a fresh directory to prevent cached evidence reuse")
    frozen = verify_frozen_inputs()
    out.mkdir(parents=True)
    workspace = out / "workspace"
    scripts = workspace / "scripts"
    shutil.copytree(STUDY / "scripts", scripts, ignore=shutil.ignore_patterns("__pycache__"))
    shutil.copytree(STUDY / "docs", workspace / "docs")
    require((scripts / "simulate_modular_core.py").is_file(), "Missing new-geometry simulation runner")
    require((scripts / "simulation/geometry.json").is_file(), "Missing new-geometry contact configuration")
    for item in frozen["files"]:
        path = item["path"]
        if path.startswith("project/cad/") and not path.endswith("requirements.txt"):
            dest = workspace / "source-cad" / Path(path).relative_to("project/cad")
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(REPO / path, dest)
        elif path == "tools/overhang.py":
            dest = workspace / path
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(REPO / path, dest)
    engine = scripts / "simulation"
    engine.mkdir(exist_ok=True)
    shutil.copyfile(REPO / f"project/analysis/inputs/drivers/solver_{SOLVER_SHA}.py", engine / "solver.py")
    shutil.copyfile(REPO / "project/analysis/inputs/material.json", engine / "material.json")
    shutil.copyfile(REPO / "project/analysis/requirements.txt", engine / "requirements.txt")
    staged = {str(p.relative_to(workspace)): sha(p) for p in sorted(workspace.rglob("*")) if p.is_file()}
    commit = subprocess.run(["git", "rev-parse", "HEAD"], cwd=REPO, text=True, check=True,
                            stdout=subprocess.PIPE).stdout.strip()
    run = {"study": "modular-core", "created_utc": datetime.now(timezone.utc).isoformat(),
           "commit": commit, "github_run_id": os.environ.get("GITHUB_RUN_ID"),
           "github_run_attempt": os.environ.get("GITHUB_RUN_ATTEMPT"),
           "frozen_source_commit": frozen["source_commit"], "sources": tracked_sources(),
           "staged_sources": staged, "physical_qualification": False}
    dump(out / "run.json", run)
    execute(out, "cad", [sys.executable, str(scripts / "build_modular_core.py")])
    cad = gate_cad(workspace / "dist/models")
    dump(out / "cad-gate.json", cad)
    overhang_advisory(out)
    dump(out / "geometry-config-gate.json", gate_geometry_config(
        workspace / "dist/models", read(scripts / "simulation/geometry.json")))
    execute(out, "prepare", [sys.executable, str(scripts / "simulate_modular_core.py"),
                             "--prepare", "--output", str(out / "fea")])
    inputs = [out / "fea/manifest.json", *sorted((out / "fea/configs").glob("*.json"))]
    dump(out / "fea-inputs.json", {str(p.relative_to(out)): sha(p) for p in inputs})
    print(json.dumps(cad), flush=True)


def verify_run(out):
    verify_frozen_inputs()
    run = read(out / "run.json")
    require(run["sources"] == tracked_sources(), "Study source changed during this run")
    for relative, digest in run["staged_sources"].items():
        require(sha(contained(out / "workspace", relative)) == digest,
                f"Staged source changed during this run: {relative}")
    cad = gate_cad(out / "workspace/dist/models")
    require(cad == read(out / "cad-gate.json"), "Generated CAD changed after its clearance gate")
    gate_geometry_config(out / "workspace/dist/models", read(out / "workspace/scripts/simulation/geometry.json"))
    for relative, digest in read(out / "fea-inputs.json").items():
        require(sha(contained(out, relative)) == digest, f"Prepared FEA input changed: {relative}")
    manifest = read(out / "fea/manifest.json")
    require(manifest.get("structural_or_physical_qualification") is False,
            "Simulation manifest must not imply qualification")
    require(manifest.get("solver_sha256") == SOLVER_SHA, "Wrong solver in simulation manifest")
    require({p["part"] for p in manifest["plans"]} == set(COMPONENTS)
            and len(manifest["plans"]) == 3, "Incomplete component solve plan")
    for part, item in manifest["source_steps"].items():
        step = contained(out / "workspace", item["path"])
        require(step.is_relative_to((out / "workspace/dist/models/modular-core-parts").resolve()),
                "Simulation STEP must come from this run's modular CAD")
        require(sha(step) == item["sha256"], f"Simulation STEP changed: {part}")
    for plan in manifest["plans"]:
        config_path = Path(plan["config"]).resolve()
        require(config_path.is_relative_to((out / "fea/configs").resolve()), "Config escapes run")
        config = read(config_path)
        require(config.get("variant") == "modular-core" and config.get("loads_are_actual_newtons") is True,
                "Wrong geometry or load normalization in component config")
        require(config["expected_step_sha256"] == manifest["source_steps"][plan["part"]]["sha256"],
                "FEA configuration does not use this run's STEP")
    return run, manifest


def stage_component(out, part):
    verify_run(out)
    execute(out, part, [sys.executable, str(out / "workspace/scripts/simulate_modular_core.py"),
                        "--run", part, "--output", str(out / "fea")])


def gate_simulation(summary, manifest, dist):
    require(summary.get("status") == "numerical_checks_passed", "Simulation reports a numerical failure")
    require(summary.get("physical_qualification") is False
            and summary.get("strength_rating_established") is False,
            "Numerical results cannot establish physical qualification or a strength rating")
    expected = {(p["part"], case, float(h)) for p in manifest["plans"]
                for case in p["cases"] for h in p["sizes_mm"]}
    rows = summary.get("cases", [])
    require(len(rows) == len(expected) and summary.get("case_solves") == len(expected),
            "Missing or duplicate case solves")
    seen = set()
    plans = {p["part"]: p for p in manifest["plans"]}
    for row in rows:
        key = row["part"], row["case"], float(row["mesh_size_mm"])
        require(key in expected and key not in seen, f"Unexpected or duplicate case: {key}")
        seen.add(key)
        require(row.get("numerical_checks_passed") is True, f"Failed numerical gate: {key}")
        for field in ("max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_vm_MPa",
                      "averaged_0p4mm_tensile_MPa", "relative_free_residual", "gauge_reaction_norm_N",
                      "force_balance_error_N", "moment_balance_error_Nmm"):
            finite(row.get(field), field, nonnegative=True)
        require(row["relative_free_residual"] < 1e-7, f"Residual too large: {key}")
        require(row["force_balance_error_N"] < 1e-4, f"Force imbalance: {key}")
        require(row["moment_balance_error_Nmm"] < 1e-3, f"Moment imbalance: {key}")
        require(abs(finite(row.get("relative_volume_error"), "mesh volume error")) < .02,
                f"CAD/mesh volume mismatch: {key}")
        require(row["part"] != "keeper" or row["gauge_reaction_norm_N"] < 1e-4,
                f"Keeper relies on artificial gauge restraints: {key}")
        for field in ("elements", "dofs"):
            require(isinstance(row.get(field), int) and row[field] > 0, f"Invalid {field}: {key}")
        result = read(contained(dist, row["result"]))
        require(result.get("id") == f"Modular_{row['part']}" and result.get("case") == row["case"]
                and result.get("h_mm") == row["mesh_size_mm"],
                f"Result belongs to another component, load case or mesh: {key}")
        expected_step = manifest["source_steps"][row["part"]]["sha256"]
        require(row["step_sha256"] == result.get("step_sha256") == expected_step,
                f"Wrong geometry hash: {key}")
        require(result.get("driver_sha256") == SOLVER_SHA, f"Wrong solver hash: {key}")
        require(result.get("configuration_sha256") == sha(plans[row["part"]]["config"]),
                f"Wrong configuration hash: {key}")
        require(result.get("qualification") is False and result.get("numerical_checks_passed") is True,
                f"Case qualification or numeric flag invalid: {key}")
        for field in ("max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_vm_MPa",
                      "relative_free_residual", "force_balance_error_N", "moment_balance_error_Nmm",
                      "relative_volume_error", "gauge_reaction_norm_N", "elements", "dofs"):
            require(result.get(field) == row[field], f"Summary differs from case {field}: {key}")
    convergence = summary.get("mesh_convergence", [])
    require({(r["part"], r["case"]) for r in convergence} == {(p, c) for p, c, h in expected}
            and len(convergence) == len({(p, c) for p, c, h in expected}),
            "Missing or duplicate convergence report")
    for row in convergence:
        require(row["mesh_levels"] >= 2, "Convergence needs at least two mesh sizes")
        for value in row["finest_pair_change_percent"].values():
            finite(value, "mesh convergence change", nonnegative=True)
    return {"case_solves": len(rows), "component_count": 3,
            "numerical_checks_passed": True, "physical_qualification": False,
            "strength_rating_established": False,
            "mesh_convergence_is_reported_not_a_strength_acceptance": True}


def write_summary(out, summary, gate):
    cad = read(out / "cad-gate.json")
    manufacturing = read(out / "manufacturing-advisory.json")
    lines = ["# Modular-core concept study", "",
             "**Numerical and nominal geometry checks passed. Physical qualification and payload rating remain unestablished.**", "",
             f"- {cad['nominal_clearance_checks']} specified nominal clearance poses passed.",
             f"- {cad['physical_print_bodies']} connected printed bodies were rebuilt and exported as STEP and oriented STL.",
             f"- {gate['case_solves']} actual revised-STEP component/mesh solves passed residual, equilibrium and volume checks.",
             "- The receiver is restrained only at its two mounting annuli; no external rails or backing support is assumed.",
             "- Material is the previous isotropic solid PLA comparison proxy, not measured PAHT-CF allowables.", "",
             "## Print orientation advisory", "",
             "| Printed body | Axis up | Support area indicated | Bridge area |",
             "| --- | --- | ---: | ---: |"]
    for part in manufacturing["parts"]:
        lines.append(f"| {part['part']} | {part['up']} | {part['areas_mm2']['SUPPORT']:.2f} mm² | "
                     f"{part['areas_mm2']['bridge']:.2f} mm² |")
    lines += ["", "This geometric heuristic does not validate slicer settings or a physical print. Support is permitted and explicitly reported.", "",
             "## Mesh sensitivity", "",
             "| Component / case | Displacement change | Averaged stress change | Raw peak stress change |",
             "| --- | ---: | ---: | ---: |"]
    for row in summary["mesh_convergence"]:
        changes = row["finest_pair_change_percent"]
        lines.append(f"| {row['part']} / {row['case']} | {changes['max_displacement_mm']:.2f}% | "
                     f"{changes['averaged_0p4mm_tensile_MPa']:.2f}% | {changes['raw_peak_tensile_MPa']:.2f}% |")
    lines += ["", "Changes compare the finest two meshes. Raw stress sensitivity is retained in the evidence; numerical success does not mean stress convergence or a strength rating.",
              "", "## Practical limits", "", "Prescribed contact tractions omit contact redistribution, frictional wedging, print anisotropy, creep and fixture compliance. "
              "The 3992 actuator reservation still needs dimensional inspection and a measured force/current/temperature test over the release stroke. "
              "No physical release, print, slicer or flight test is performed by this workflow.", ""]
    (out / "summary.md").write_text("\n".join(lines))


def stage_report(out):
    run, manifest = verify_run(out)
    for label in ("cad", "prepare", *COMPONENTS):
        require(read(out / "execution" / f"{label}.json")["returncode"] == 0,
                f"Missing successful execution for {label}")
    execute(out, "summarize", [sys.executable, str(out / "workspace/scripts/simulate_modular_core.py"),
                               "--summarize", "--output", str(out / "fea")])
    # The reporting stage appends execution provenance to the manifest. Permit
    # those exact fields while retaining the immutable numerical input check.
    runner_sha = sha(out / "workspace/scripts/simulate_modular_core.py")
    executions = [read(out / "fea/logs" / f"{part}-execution.json") for part in COMPONENTS]
    for record in executions:
        require(record.get("returncode") == 0 and record.get("solver_sha256") == SOLVER_SHA
                and record.get("runner_sha256_at_start") == runner_sha,
                "Solver launch did not use this run's immutable runner and engine")
    reported_manifest = read(out / "fea/manifest.json")
    expected_manifest = dict(manifest, reporting_runner_sha256=runner_sha, execution_records=executions)
    require(reported_manifest == expected_manifest, "Reporting changed prepared numerical inputs")
    input_hashes = read(out / "fea-inputs.json")
    input_hashes["fea/manifest.json"] = sha(out / "fea/manifest.json")
    dump(out / "fea-inputs.json", input_hashes)
    dist = out / "workspace/dist"
    summary = read(dist / "simulation/modular-core-summary.json")
    gate = gate_simulation(summary, manifest, dist)
    gate.update(study="modular-core", commit=run["commit"], github_run_id=run["github_run_id"])
    dump(out / "study-gate.json", gate)
    write_summary(out, summary, gate)
    print(json.dumps(gate), flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--stage", choices=("cad", *COMPONENTS, "report"), required=True)
    args = parser.parse_args()
    out = args.output.resolve()
    existed_before = out.exists()
    try:
        if args.stage == "cad":
            stage_cad(out)
        elif args.stage == "report":
            stage_report(out)
        else:
            stage_component(out, args.stage)
    except Exception as exc:
        if not (args.stage == "cad" and existed_before):
            out.mkdir(parents=True, exist_ok=True)
            dump(out / f"{args.stage}-failure.json", {"stage": args.stage, "error": str(exc),
                                                     "physical_qualification": False})
            (out / "summary.md").write_text(f"# Modular-core concept study\n\n**{args.stage} failed:** {exc}\n\n"
                                           "No qualification or payload rating is established. See the uploaded logs and evidence.\n")
        raise


if __name__ == "__main__":
    main()
