#!/usr/bin/env python3
"""Rebuild current CAD, verify issued exports, and replay guarded P14 clearance cases."""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
import os
import platform
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
EXPECTATION = Path(__file__).resolve().with_name("p14_expectation.json")
PARAMETER_OVERRIDES = ("N2_DISTAL_OVERLAP", "N2_ROOF_EXTRA", "N2_ROOF_FILLET", "N2_PROX_BRIDGE_END")


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def save(path: Path, value: dict) -> None:
    path.write_text(json.dumps(value, indent=2, allow_nan=False) + "\n", encoding="utf-8")


def prepare_output(root: Path, output: Path) -> Path:
    root, output = root.resolve(), output.resolve()
    if output == root or any(output.is_relative_to(root / p) for p in ("project", "tools", "tests", ".git")):
        raise ValueError("Output must be outside source and historical evidence directories")
    if output.exists() and (not output.is_dir() or any(output.iterdir())):
        raise ValueError("Output directory must be new or empty; existing evidence is not overwritten")
    output.mkdir(parents=True, exist_ok=True)
    return output


def revision(root: Path, declared: str | None) -> dict:
    if declared and not re.fullmatch(r"[0-9a-fA-F]{40}|[0-9a-fA-F]{64}", declared):
        raise ValueError("--source-revision must be a full hexadecimal commit SHA")
    try:
        git = subprocess.run(["git", "rev-parse", "HEAD"], cwd=root, capture_output=True, text=True, check=False)
    except FileNotFoundError:
        git = None
    if git is not None and git.returncode == 0:
        sha = git.stdout.strip()
        if declared and declared.lower() != sha.lower():
            raise ValueError("Declared source revision does not match checked-out git HEAD")
        return {"source_revision": sha, "revision_method": "git_HEAD"}
    if not declared:
        raise ValueError("No git checkout found; explicitly identify a materialized snapshot with --source-revision")
    return {"source_revision": declared.lower(), "revision_method": "declared_materialized_snapshot_not_git_verified"}


def input_identity(cad: Path, expectation: dict) -> dict:
    rows = []
    for name, expected in expectation["step_sha256"].items():
        path = cad / "N2" / f"N2_{name}.step"
        actual = digest(path) if path.is_file() else None
        rows.append({"part": name, "expected_sha256": expected, "actual_sha256": actual, "matches": actual == expected})
    return {"status": "PASS" if rows and all(x["matches"] for x in rows) else "FAIL",
        "historical_baseline_revision": expectation["historical_baseline_revision"], "inputs": rows,
        "meaning": "Input identity guard for fixed P14 dimensional assumptions; update deliberately with a new geometry revision."}


def execute(command: list[str], root: Path, log: Path, timeout_seconds: float) -> dict:
    result = {"command": command, "started_at_utc": now(), "returncode": None, "log": log.name}
    with log.open("w", encoding="utf-8") as stream:
        try:
            p = subprocess.run(command, cwd=root, stdout=stream, stderr=subprocess.STDOUT,
                timeout=timeout_seconds, check=False)
            result["returncode"] = p.returncode
        except subprocess.TimeoutExpired:
            result["error"] = f"Process exceeded {timeout_seconds} seconds"
            stream.write("\n" + result["error"] + "\n")
    result["finished_at_utc"] = now()
    return result


def assess_regeneration(report: dict, expected_parts: int) -> bool:
    parts = report.get("parts", [])
    return bool(report.get("status") == "PASS" and len(parts) == expected_parts
        and all(x.get("passed") is True for x in parts)
        and report.get("assembly", {}).get("passed") is True
        and report.get("viewer", {}).get("part_count") == expected_parts
        and report.get("viewer", {}).get("motion_and_explode_identical") is True)


def clearance(cad: Path, expectation: dict, cq=None) -> dict:
    if cq is None:
        import cadquery as cq
    poses = expectation["poses"]
    if not poses or len(poses) != expectation["expected_clearance_case_count"]:
        raise ValueError("Clearance expectation contains no cases or has an inconsistent case count")
    tolerance = float(expectation["intersection_tolerance_mm3"])
    if not math.isfinite(tolerance) or tolerance <= 0:
        raise ValueError("Invalid intersection tolerance")
    names = ("receiver", "adapter", "keeper")
    shapes = {n: cq.importers.importStep(str(cad / "N2" / f"N2_{n}.step")).val() for n in names}
    solids = {}
    for name, shape in shapes.items():
        volume = shape.Volume()
        if not math.isfinite(volume) or volume <= 0 or not shape.isValid() or len(shape.Solids()) != 1:
            raise ValueError(f"{name} must be one valid solid with a finite positive volume")
        solids[name] = {"valid": True, "solid_count": 1, "volume_mm3": volume}
    receiver, adapter, keeper = (shapes[n] for n in names)
    checks = []
    for pose in poses:
        row = {**pose, "adapter_receiver_overlap_mm3": None, "adapter_keeper_overlap_mm3": None,
            "keeper_receiver_overlap_mm3": None, "interference_found": None, "check_pass": False, "error": None}
        try:
            if type(pose["expected_interference"]) is not bool:
                raise ValueError("Expected interference must be a boolean")
            if not all(math.isfinite(float(pose[k])) for k in ("adapter_dz_mm", "keeper_dz_mm", "yaw_deg")):
                raise ValueError("Pose contains a non-finite coordinate")
            a = adapter.translate((0, 0, pose["adapter_dz_mm"]))
            k = keeper.translate((0, 0, pose["keeper_dz_mm"]))
            if pose["yaw_deg"]:
                a = a.rotate(tuple(expectation["yaw_axis_start_mm"]), tuple(expectation["yaw_axis_end_mm"]), pose["yaw_deg"])
            values = [a.intersect(receiver).Volume(), a.intersect(k).Volume(), k.intersect(receiver).Volume()]
            if not all(math.isfinite(v) and v >= -tolerance for v in values):
                raise ValueError("CAD kernel returned a non-finite or invalid intersection volume")
            for field, value in zip(("adapter_receiver_overlap_mm3", "adapter_keeper_overlap_mm3", "keeper_receiver_overlap_mm3"), values):
                row[field] = max(0.0, value)
            row["interference_found"] = any(v > tolerance for v in values)
            row["check_pass"] = row["interference_found"] == pose["expected_interference"]
        except Exception as exc:
            row["error"] = f"{type(exc).__name__}: {exc}"
        checks.append(row)
    passed = len(checks) == expectation["expected_clearance_case_count"] and all(x["check_pass"] for x in checks)
    return {"status": "PASS" if passed else "FAIL", "cadquery": cq.__version__,
        "historical_expectation_revision": expectation["historical_baseline_revision"],
        "intersection_tolerance_mm3": tolerance, "solids": solids, "checks": checks,
        "cases_run": len(checks), "cases_passed": sum(x["check_pass"] for x in checks),
        "meaning": "Reproduces nominal P14 clearance, including known play; not an acceptable-fit or physical qualification test."}


def write_clearance(output: Path, result: dict) -> None:
    save(output / "clearance.json", result)
    rows = result.get("checks", [])
    if rows:
        with (output / "clearance.csv").open("w", newline="", encoding="utf-8") as stream:
            writer = csv.DictWriter(stream, fieldnames=list(rows[0]))
            writer.writeheader()
            writer.writerows(rows)


def run(root: Path, output: Path, source_revision: str | None = None,
        expectation_path: Path = EXPECTATION, timeout_seconds: float = 300) -> int:
    root = root.resolve()
    output = prepare_output(root, output)
    summary = {"schema_version": 1, "kind": "cad", "id": "current_cad_and_p14_clearance", "status": "FAIL",
        "started_at_utc": now(), "source_revision": None, "checkout_sha": None, "revision_method": None,
        "clearance_checks": 0, "regeneration_parts": 0,
        "python": platform.python_version(), "source_file_sha256": {}, "failures": [],
        "physical_tests_performed": False, "working_load_rating_N": None,
        "limits": ["CAD/source consistency and rigid clearance only; no load, wear, print, vibration, or actuator test.",
            "P14 regression success reproduces its known play; it does not approve that play for service."]}
    try:
        summary.update(revision(root, source_revision))
        summary["checkout_sha"] = summary["source_revision"]
        expectation = json.loads(expectation_path.read_text(encoding="utf-8"))
        summary["historical_expectation_revision"] = expectation["historical_baseline_revision"]
        summary["expectation_sha256"] = digest(expectation_path)
        cad = root / "project" / "cad"
        identity = input_identity(cad, expectation)
        save(output / "p14_input_identity.json", identity)
        if identity["status"] != "PASS":
            raise ValueError("Current STEP differs from the P14 expectation; review and update geometry assumptions before applying these clearance cases")
        if set(expectation["step_sha256"]) != {"receiver", "adapter", "keeper"}:
            raise ValueError("P14 expectation must identify receiver, adapter, and keeper")
        overrides = {k: os.environ[k] for k in PARAMETER_OVERRIDES if k in os.environ}
        if overrides:
            raise ValueError(f"CAD CI checks source defaults; remove parameter overrides: {', '.join(overrides)}")
        manifest = json.loads((cad / "N2" / "manifest.json").read_text(encoding="utf-8"))
        if len(manifest["parts"]) != expectation["expected_assembly_part_count"]:
            raise ValueError("Issued assembly part count differs from the versioned expectation")
        files = [cad / name for name in ("build_n2.py", "common.py", "solenoid_parts.py", "verify_regeneration.py", "N2/active_metadata.json", "N2/manifest.json", "N2/viewer.json", "N2/assembly.step")]
        for part in manifest["parts"]:
            if Path(part["step"]).name != part["step"]:
                raise ValueError("Part STEP must be a filename within the issued CAD directory")
            files.append(cad / "N2" / part["step"])
        summary["source_file_sha256"] = {str(p.relative_to(root)): digest(p) for p in files}
        build = execute([sys.executable, str(cad / "build_n2.py"), "--output", str(output / "regenerated")], root, output / "build.log", timeout_seconds)
        summary["build"] = build
        if build["returncode"] != 0:
            summary["failures"].append("CAD source regeneration failed or timed out; see build.log")
        else:
            compare = execute([sys.executable, str(cad / "verify_regeneration.py"), "--regenerated", str(output / "regenerated"), "--report", str(output / "regeneration.json")], root, output / "comparison.log", timeout_seconds)
            summary["comparison"] = compare
            report_path = output / "regeneration.json"
            if report_path.exists():
                comparison = json.loads(report_path.read_text(encoding="utf-8"))
                summary["regeneration_parts"] = len(comparison.get("parts", []))
                summary["regeneration_passed"] = assess_regeneration(comparison, expectation["expected_assembly_part_count"])
            else:
                summary["regeneration_passed"] = False
            if compare["returncode"] != 0 or not summary["regeneration_passed"]:
                summary["failures"].append("Current CAD source and issued assembly/viewer do not agree; see comparison.log and regeneration.json")
        # Run guarded current-STEP clearance even when regeneration found a drift.
        try:
            result = clearance(cad, expectation)
        except Exception as exc:
            result = {"status": "FAIL", "cases_run": 0, "cases_passed": 0, "checks": [], "error": f"{type(exc).__name__}: {exc}"}
        result["source_revision"] = summary["source_revision"]
        result["revision_method"] = summary["revision_method"]
        write_clearance(output, result)
        summary["clearance_cases_run"] = result["cases_run"]
        summary["clearance_checks"] = result["cases_run"]
        summary["clearance_cases_passed"] = result["cases_passed"]
        if result["status"] != "PASS":
            summary["failures"].append("P14 clearance regression failed; see clearance.json and clearance.csv")
        if not summary["failures"]:
            summary["status"] = "PASS"
    except Exception as exc:
        summary["failures"].append(f"{type(exc).__name__}: {exc}")
    summary["finished_at_utc"] = now()
    save(output / "summary.json", summary)
    (output / "summary.md").write_text(
        f"# CAD and P14 clearance regression\n\nStatus: **{summary['status']}**\n\n"
        f"Checkout: `{summary['checkout_sha']}` ({summary['revision_method']}).\n\n"
        f"Regeneration parts checked: {summary['regeneration_parts']}. "
        f"Clearance cases passed: {summary.get('clearance_cases_passed', 0)} / {summary['clearance_checks']}.\n\n"
        + ("Failures:\n\n" + "\n".join(f"- {x}" for x in summary['failures']) + "\n\n" if summary['failures'] else '')
        + "Checks source/export continuity and known nominal play. No physical testing or working-load rating.\n",
        encoding="utf-8")
    print(json.dumps({"status": summary["status"], "source_revision": summary["source_revision"],
        "clearance_cases_passed": summary.get("clearance_cases_passed", 0), "summary": str(output / "summary.json")}))
    return 0 if summary["status"] == "PASS" else 1


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--output", required=True, type=Path, help="New or empty CI artifact directory")
    ap.add_argument("--source-revision", help="Only needed for an explicitly identified non-git snapshot")
    ap.add_argument("--timeout-seconds", type=float, default=300, help="Timeout for each regeneration subprocess")
    args = ap.parse_args()
    if args.timeout_seconds <= 0:
        ap.error("--timeout-seconds must be positive")
    try:
        return run(ROOT, args.output, args.source_revision, EXPECTATION, args.timeout_seconds)
    except Exception as exc:
        print(f"CAD CI setup failed: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
