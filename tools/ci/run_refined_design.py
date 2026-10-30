#!/usr/bin/env python3
"""Build, solve and audit R4 in a fresh directory, with explicit bench status."""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
import math
import os
from pathlib import Path
import subprocess
import sys
import time

ROOT = Path(__file__).resolve().parents[2]
DESIGN = ROOT / "project/designs/r4"
SOLVER_SHA = "6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c"
COMPONENTS = ("receiver", "adapter", "keeper")
PRINT_IDS = {"receiver_core", "payload_adapter", "keeper"}


def read(path):
    return json.loads(Path(path).read_text())


def dump(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2, allow_nan=False) + "\n")


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def require(condition, message):
    if not condition:
        raise ValueError(message)


def finite(value, label, nonnegative=False):
    require(isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value),
            f"Non-finite or nonnumeric {label}")
    if nonnegative:
        require(value >= 0, f"Negative {label}")
    return value


def contained(root, relative):
    path = (Path(root) / relative).resolve()
    require(path.is_relative_to(Path(root).resolve()), f"Path escapes evidence root: {relative}")
    return path


def source_hashes():
    paths = {Path(__file__).resolve(), ROOT / ".github/workflows/refined-design-validation.yml",
             ROOT / f"project/analysis/inputs/drivers/solver_{SOLVER_SHA}.py",
             ROOT / "project/analysis/inputs/material.json", ROOT / "tools/overhang.py",
             ROOT / "project/cad/requirements.txt", ROOT / "project/analysis/requirements.txt"}
    paths.update((DESIGN / "viewer").glob("*.mjs"))
    paths.add(DESIGN / "viewer/kinematics.js")
    for folder in (DESIGN / "cad", DESIGN / "analysis", ROOT / "project/concepts/modular-core/scripts"):
        for path in folder.rglob("*"):
            if path.is_file() and path.suffix in (".py", ".json", ".step") and "evidence" not in path.parts:
                paths.add(path)
    for path in (ROOT / "project/cad").glob("*.py"):
        paths.add(path)
    for path in (ROOT / "project/cad/N2").glob("*.step"):
        paths.add(path)
    return {str(path.relative_to(ROOT)): sha(path) for path in sorted(paths)}


def execute(out, label, command, accepted=(0,)):
    folder = out / "logs"
    folder.mkdir(parents=True, exist_ok=True)
    logfile = folder / f"{label}.log"
    env = os.environ.copy()
    env.update({name: "1" for name in ("OPENBLAS_NUM_THREADS", "OMP_NUM_THREADS", "MKL_NUM_THREADS")})
    started = time.monotonic()
    print(f"Running {label}; log {logfile}", flush=True)
    with logfile.open("w") as stream:
        result = subprocess.run(command, cwd=ROOT, stdout=stream, stderr=subprocess.STDOUT, env=env)
    record = {"command": command, "returncode": result.returncode,
        "elapsed_seconds": time.monotonic() - started, "log": str(logfile.relative_to(out))}
    dump(out / "execution" / f"{label}.json", record)
    if result.returncode not in accepted:
        print(logfile.read_text()[-12000:])
        raise RuntimeError(f"{label} failed with exit {result.returncode}")
    return record


def gate_cad(cad):
    manifest = read(cad / "manifest.json")
    require(manifest.get("revision") == "R4", "Wrong CAD revision")
    require(manifest.get("units") == "mm", "Wrong CAD units")
    prints = manifest.get("printed_parts", [])
    require(len(prints) == 3 and {p["id"] for p in prints} == PRINT_IDS, "Expected three physical print bodies")
    parts = {}
    for part in prints:
        require(part["solid_count"] == 1 and part["valid"] is True, f"Invalid or disconnected print: {part['id']}")
        step, stl = contained(cad, part["step"]), contained(cad, part["stl"])
        require(step.is_file() and stl.is_file(), f"Missing print export: {part['id']}")
        require(sha(step) == part["step_sha256"], f"Stale print STEP: {part['id']}")
        require(sha(stl) == part["stl_sha256"], f"Stale print STL: {part['id']}")
        require(finite(part["volume_mm3"], "CAD volume", True) > 0, "Empty CAD print")
        parts[part["id"]] = {"step_sha256": sha(step), "stl_sha256": sha(stl)}
    checks = read(cad / "clearance.json")
    rows = checks.get("checks", [])
    require(rows and checks.get("all_passed") is True, "CAD clearance did not pass")
    require(len({r["id"] for r in rows}) == len(rows), "Duplicate CAD clearance check")
    for row in rows:
        require(row.get("passed") is True, f"CAD clearance failure: {row['id']}")
        if "overlap_mm3" in row:
            require(finite(row["overlap_mm3"], "CAD overlap", True) < 1e-5, f"Unexpected solid interference: {row['id']}")
    geometry = read(cad / "geometry.json")
    require(geometry.get("units") == "mm", "Wrong analysis geometry units")
    require(len(geometry.get("receiver_mounts", [])) == 4, "R4 requires four actual host mount annuli")
    for filename in ("assembly.step", "assembly.json"):
        require((cad / filename).is_file(), f"Missing complete assembly export: {filename}")
    return {"revision": "R4", "physical_print_bodies": 3, "nominal_clearance_checks": len(rows),
            "parts": parts, "geometry_sha256": sha(cad / "geometry.json"),
            "manifest_sha256": sha(cad / "manifest.json"), "clearance_sha256": sha(cad / "clearance.json"),
            "physical_qualification": False}


def overhang(out):
    records = []
    cad = out / "cad"
    for part in read(cad / "manifest.json")["printed_parts"]:
        path = cad / "overhang" / f"{part['id']}.json"
        path.parent.mkdir(exist_ok=True)
        up = part["print_up"]
        if isinstance(up, list):
            mapping = {(0, 0, 1): "+Z", (0, 0, -1): "-Z", (0, 1, 0): "+Y", (0, -1, 0): "-Y", (1, 0, 0): "+X", (-1, 0, 0): "-X"}
            up = mapping[tuple(up)]
        execution = execute(out, f"overhang-{part['id']}", [sys.executable, str(ROOT / "tools/overhang.py"),
            str(cad / part["step"]), f"--up={up}", "--json", str(path)], accepted=(0, 1))
        data = read(path)
        require(Path(data["step"]).resolve() == (cad / part["step"]).resolve(), "Overhang report is for another STEP")
        require(data["up"] == up, "Wrong print orientation audited")
        for category in ("SUPPORT", "bridge", "small-curve", "sliver"):
            finite(data["totals"][category], "overhang area", True)
        support = data["totals"]["SUPPORT"] > 0
        require(execution["returncode"] == int(support), "Overhang exit/report disagreement")
        records.append({"id": part["id"], "up": up, "areas_mm2": data["totals"],
            "support_indicated": support, "step_sha256": part["step_sha256"]})
    dump(out / "manufacturing-advisory.json", {"parts": records, "physical_print_test": False,
        "slicer_toolpath_test": False, "scope": "Geometric face-normal/bridge heuristic only; support indication is advisory."})


def stage_cad(out):
    require(not out.exists(), "Select a fresh output directory; cached evidence reuse is rejected")
    out.mkdir(parents=True)
    commit = subprocess.run(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True, check=True, stdout=subprocess.PIPE).stdout.strip()
    run = {"revision": "R4", "started_utc": datetime.now(timezone.utc).isoformat(), "commit": commit,
        "github_run_id": os.environ.get("GITHUB_RUN_ID"), "sources": source_hashes(), "physical_qualification": False}
    run["uncommitted_changes_present"] = bool(subprocess.run(["git", "status", "--porcelain"], cwd=ROOT,
        text=True, check=True, stdout=subprocess.PIPE).stdout.strip())
    dump(out / "run.json", run)
    execute(out, "cad", [sys.executable, str(DESIGN / "cad/build.py"), "--output", str(out / "cad")])
    dump(out / "cad-gate.json", gate_cad(out / "cad"))
    execute(out, "viewer-kinematics", ["node", str(DESIGN / "viewer/test-kinematics.mjs"),
        "--assembly", str(out / "cad/assembly.json")])
    overhang(out)
    execute(out, "prepare", [sys.executable, str(DESIGN / "analysis/simulate.py"), "--prepare",
        "--cad", str(out / "cad"), "--output", str(out / "fea")])
    execute(out, "surface-audit", [sys.executable, str(DESIGN / "analysis/audit_surfaces.py"),
        "--fea", str(out / "fea")])
    require(read(out / "fea/surface-audit.json")["status"] == "pass", "CAD load/fixture patch audit failed")
    execute(out, "fit-stack", [sys.executable, str(DESIGN / "analysis/fit_stack.py"),
        "--geometry", str(out / "cad/geometry.json"), "--output", str(out / "fit-stack.json")])
    execute(out, "bench-status", [sys.executable, str(DESIGN / "analysis/bench_records.py"),
        "--output", str(out / "bench-status.json")])
    execute(out, "bench-template", [sys.executable, str(DESIGN / "analysis/bench_records.py"),
        "--template", str(out / "bench-records-blank.csv")])
    require(sha(out / "bench-records-blank.csv") == sha(DESIGN / "analysis/bench-records-template.csv"),
            "Committed blank bench template is stale; regenerate it from the current plan")
    require(read(out / "bench-status.json")["status"] == "pending", "Unperformed bench tests must remain pending")
    paths = [out / "fea/manifest.json", *sorted((out / "fea/configs").glob("*.json"))]
    dump(out / "prepared-inputs.json", {str(p.relative_to(out)): sha(p) for p in paths})
    verify_run(out)


def verify_run(out):
    run = read(out / "run.json")
    require(run["sources"] == source_hashes(), "R4 source changed during this run")
    require(gate_cad(out / "cad") == read(out / "cad-gate.json"), "CAD output changed after its gate")
    for path, digest in read(out / "prepared-inputs.json").items():
        require(sha(contained(out, path)) == digest, f"Prepared input changed: {path}")
    manifest = read(out / "fea/manifest.json")
    require(manifest["physical_qualification"] is False and manifest["strength_rating_established"] is False,
            "FEA manifest cannot qualify physical performance")
    require(manifest["solver_sha256"] == SOLVER_SHA == sha(out / "fea/engine/solver.py"), "Wrong frozen solver")
    require(manifest["material_sha256"] == sha(out / "fea/engine/material.json"), "Changed material model")
    require(manifest["runner_sha256"] == sha(DESIGN / "analysis/simulate.py"), "Wrong simulation runner")
    require(manifest["geometry_sha256"] == sha(out / "cad/geometry.json"), "Stale geometry coordinates")
    require(len(manifest["plans"]) == 3 and {p["part"] for p in manifest["plans"]} == set(COMPONENTS), "Missing component plan")
    reviewed = {"receiver": (6, 2), "adapter": (4, 3), "keeper": (6, 3)}
    for plan in manifest["plans"]:
        require((len(plan["cases"]), len(plan["sizes_mm"])) == reviewed[plan["part"]],
                "R4 reviewed load-case/refinement coverage changed; explicitly review the analysis scope")
    for part, item in manifest["source_steps"].items():
        path = Path(item["path"]).resolve()
        require(path.is_relative_to((out / "cad").resolve()), "FEA STEP is outside this fresh CAD output")
        require(sha(path) == item["sha256"], f"FEA STEP changed: {part}")
    return run, manifest


def stage_component(out, part):
    verify_run(out)
    execute(out, part, [sys.executable, str(DESIGN / "analysis/simulate.py"), "--run", part, "--output", str(out / "fea")])


def gate_results(summary, manifest, fea):
    require(summary.get("revision") == "R4", "Wrong result revision")
    require(summary.get("status") == "numerical_checks_passed", "Numerical solve failure")
    require(summary.get("physical_qualification") is False and summary.get("strength_rating_established") is False,
            "Numerical results cannot qualify physical performance")
    expected = {(p["part"], case, float(h)) for p in manifest["plans"] for case in p["cases"] for h in p["sizes_mm"]}
    rows = summary.get("cases", [])
    require(len(rows) == len(expected) == summary.get("case_solves"), "Missing or duplicate case results")
    seen = set()
    for row in rows:
        key = row["part"], row["case"], float(row["mesh_size_mm"])
        require(key in expected and key not in seen, "Unexpected or duplicate result identity")
        seen.add(key)
        require(row.get("numerical_checks_passed") is True, f"Failed numerical result: {key}")
        for name in ("max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_compressive_MPa", "raw_peak_vm_MPa",
                     "force_balance_error_N", "moment_balance_error_Nmm", "relative_free_residual", "gauge_reaction_norm_N"):
            finite(row.get(name), name, True)
        require(row["force_balance_error_N"] < 1e-4, "Force equilibrium failed")
        require(row["moment_balance_error_Nmm"] < 1e-3, "Moment equilibrium failed")
        require(row["relative_free_residual"] < 1e-7, "Free DOF residual failed")
        require(row["gauge_reaction_norm_N"] < 1e-4, "Artificial gauge carries physical load")
        require(abs(finite(row.get("relative_volume_error"), "volume error")) < .02, "CAD/mesh volume mismatch")
        for name in ("elements", "dofs"):
            require(isinstance(row.get(name), int) and not isinstance(row[name], bool) and row[name] > 0, f"Invalid {name}")
        result = read(contained(fea, row["result"]))
        require(result.get("id") == f"R4_{row['part']}" and result.get("case") == row["case"]
                and result.get("h_mm") == row["mesh_size_mm"], "Result belongs to another problem")
        require(row["step_sha256"] == result.get("step_sha256") == manifest["source_steps"][row["part"]]["sha256"], "Wrong STEP hash")
        require(result.get("driver_sha256") == SOLVER_SHA, "Wrong solver hash")
        require(result.get("configuration_sha256") == manifest["configuration_sha256"][row["part"]], "Wrong configuration hash")
        require(result.get("physical_qualification") is False and result.get("numerical_checks_passed") is True,
                "Invalid case status or qualification")
        for name in ("elements", "dofs", "max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_compressive_MPa", "raw_peak_vm_MPa",
                     "force_balance_error_N", "moment_balance_error_Nmm", "relative_free_residual", "gauge_reaction_norm_N", "relative_volume_error"):
            require(row[name] == result.get(name), f"Summary differs from native case: {name}")
    convergence = summary.get("mesh_convergence", [])
    require(len(convergence) == len({(p, c) for p, c, _ in expected})
            and {(r["part"], r["case"]) for r in convergence} == {(p, c) for p, c, _ in expected}, "Missing mesh sensitivity report")
    for row in convergence:
        series = sorted([r for r in rows if r["part"] == row["part"] and r["case"] == row["case"]],
                        key=lambda r: -r["mesh_size_mm"])
        require(row["mesh_levels"] == len(series) and len(series) >= 2, "At least two real mesh levels are required")
        for value in row["finest_pair_change_percent"].values():
            finite(value, "mesh sensitivity", True)
        a, b = series[-2:]
        for field in ("max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_compressive_MPa"):
            expected_change = abs(b[field] - a[field]) / max(abs(b[field]), 1e-12) * 100
            require(math.isclose(row["finest_pair_change_percent"].get(field, -1), expected_change,
                    rel_tol=1e-9, abs_tol=1e-9), "Mesh sensitivity differs from actual solved values")
    return {"case_solves": len(rows), "numerical_checks_passed": True, "physical_qualification": False,
            "payload_rating_established": False, "stress_convergence_is_reported_separately": True}


def semantic_equal(a, b):
    if isinstance(a, dict) and isinstance(b, dict):
        return set(a) == set(b) and all(semantic_equal(a[key], b[key]) for key in a)
    if isinstance(a, list) and isinstance(b, list):
        return len(a) == len(b) and all(semantic_equal(x, y) for x, y in zip(a, b))
    if isinstance(a, (int, float)) and not isinstance(a, bool) and isinstance(b, (int, float)) and not isinstance(b, bool):
        return math.isfinite(a) and math.isfinite(b) and math.isclose(a, b, rel_tol=1e-8, abs_tol=1e-6)
    return type(a) is type(b) and a == b


def gate_handoff(fresh, committed=None):
    """The downloadable/viewed CAD must describe the current checked generator."""
    committed = Path(committed) if committed else DESIGN / "manufacturing"
    require((committed / "manifest.json").is_file(), "Missing committed manufacturing handoff")
    shipped, rebuilt = read(committed / "manifest.json"), read(fresh / "manifest.json")
    current = {"generator_sha256": sha(DESIGN / "cad/build.py"),
               "manufacturing_generator_sha256": sha(DESIGN / "cad/manufacturing.py"),
               "parameters_sha256": sha(DESIGN / "cad/parameters.json"),
               "vendor_step_sha256": sha(DESIGN / "cad/vendor/HS-65HB-vendor.step")}
    for field, digest in current.items():
        require(shipped.get(field) == rebuilt.get(field) == digest, f"Committed handoff has stale {field}")
    generator_sources = {str(path.relative_to(DESIGN / "cad")): sha(path)
        for path in sorted((DESIGN / "cad").rglob("*"))
        if path.is_file() and path.suffix in (".py", ".json", ".step") and "__pycache__" not in path.parts}
    require(shipped.get("generator_sources") == rebuilt.get("generator_sources") == generator_sources,
            "Committed handoff has stale or incomplete CAD generator dependencies")
    artifacts = shipped.get("artifacts", {})
    require(artifacts and all(name in artifacts for name in ("assembly.step", "assembly.json", "geometry.json", "clearance.json")),
            "Committed handoff needs a complete artifact manifest")
    required = {p for p in committed.rglob("*") if p.is_file() and p.suffix.lower() in (".step", ".stl", ".svg")}
    required |= {p for p in (committed / "meshes").glob("*.json")}
    for path in required:
        require(str(path.relative_to(committed)) in artifacts, f"Shipped CAD artifact is not hashed: {path.name}")
    for relative, digest in artifacts.items():
        path = contained(committed, relative)
        require(path.is_file() and sha(path) == digest, f"Committed CAD artifact changed: {relative}")
    # STEP headers may carry export times. Geometry metadata and the viewer's
    # actual complete assembly contract must agree to numerical precision.
    for filename in ("geometry.json", "assembly.json"):
        require(semantic_equal(read(committed / filename), read(fresh / filename)),
                f"Committed {filename} differs from freshly rebuilt geometry")
    by_id = {p["id"]: p for p in rebuilt["printed_parts"]}
    for part in shipped["printed_parts"]:
        other = by_id[part["id"]]
        for field in ("solid_count", "valid", "volume_mm3", "print_up", "print_bounds"):
            require(semantic_equal(part[field], other[field]), f"Committed print geometry differs: {part['id']} / {field}")
    gate_cad(committed)
    return {"status": "pass", "artifact_count": len(artifacts), "current_source_hashes": current,
            "complete_viewer_assembly_matches_fresh_geometry": True,
            "comparison": "Input hashes, every shipped artifact hash, exact geometry/assembly metadata within 1e-6 mm numerical tolerance; STEP timestamp headers are not treated as geometry."}


def stage_report(out):
    run, manifest = verify_run(out)
    for part in COMPONENTS:
        record = read(out / "fea/execution" / f"{part}.json")
        require(record["returncode"] == 0 and record["solver_sha256"] == SOLVER_SHA
                and record["runner_sha256"] == manifest["runner_sha256"]
                and record["config_sha256"] == manifest["configuration_sha256"][part], "Missing or mismatched solve execution")
    execute(out, "report", [sys.executable, str(DESIGN / "analysis/simulate.py"), "--report", "--output", str(out / "fea")])
    verify_run(out)
    summary = read(out / "fea/summary.json")
    gate = gate_results(summary, manifest, out / "fea")
    handoff = gate_handoff(out / "cad")
    dump(out / "handoff-gate.json", handoff)
    gate.update(revision="R4", commit=run["commit"], github_run_id=run["github_run_id"],
                nominal_clearance_checks=read(out / "cad-gate.json")["nominal_clearance_checks"],
                physical_bench_status=read(out / "bench-status.json")["status"])
    gate["committed_manufacturing_handoff"] = handoff["status"]
    require(gate["physical_bench_status"] == "pending", "Fresh software-only run must report unperformed benches as pending")
    dump(out / "validation-gate.json", gate)
    (out / "summary.md").write_text((out / "fea/report.md").read_text() +
        f"\n## Automated gate\n\n{gate['nominal_clearance_checks']} nominal CAD checks passed. "
        f"{gate['case_solves']} fresh STEP solves passed numerical/provenance checks. "
        "Bench measurements remain **PENDING**. Passing Actions does not release the design for flight.\n")
    print(json.dumps(gate, indent=2), flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--stage", required=True, choices=("cad", *COMPONENTS, "report", "all"))
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    out = args.output.resolve()
    stages = ("cad", *COMPONENTS, "report") if args.stage == "all" else (args.stage,)
    for stage in stages:
        if stage == "cad":
            stage_cad(out)
        elif stage == "report":
            stage_report(out)
        else:
            stage_component(out, stage)


if __name__ == "__main__":
    main()
