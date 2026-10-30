#!/usr/bin/env python3
"""Run current controller host tests into a fresh, independent CI artifact directory."""
from __future__ import annotations

import argparse
import hashlib
import json
import platform
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HISTORICAL_BASELINE = "e1150701358f31e536c807ee21e29eae4e6c4985"


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


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


def save(path: Path, value: dict) -> None:
    path.write_text(json.dumps(value, indent=2, allow_nan=False) + "\n", encoding="utf-8")


def run(root: Path, output: Path, source_revision: str | None = None, timeout_seconds: float = 120) -> int:
    root = root.resolve()
    output = prepare_output(root, output)
    report = {
        "schema_version": 1, "kind": "controller", "id": "current_controller_host_tests", "status": "FAIL",
        "started_at_utc": now(), "historical_baseline_revision": HISTORICAL_BASELINE,
        "source_revision": None, "checkout_sha": None, "revision_method": None, "source_file_sha256": {},
        "python": platform.python_version(), "tests_run": None, "skipped": None,
        "test_process_returncode": None, "physical_tests_performed": False,
        "limits": [
            "Existing bench state/button/timing logic only; no GPIO or actuator is exercised.",
            "Proposed seating interlocks and equipment locks are not implemented by this controller.",
            "A passing host suite assigns no structural load or loaded-release rating.",
        ],
    }
    log_path = output / "controller.log"
    try:
        report.update(revision(root, source_revision))
        report["checkout_sha"] = report["source_revision"]
        electronics = root / "project" / "electronics"
        for name in ("controller_core.py", "config.py", "main.py", "test_controller.py"):
            path = electronics / name
            report["source_file_sha256"][str(path.relative_to(root))] = hashlib.sha256(path.read_bytes()).hexdigest()
        command = [sys.executable, "-m", "unittest", "-v", "test_controller.py"]
        report["command"] = command
        report["working_directory"] = "project/electronics"
        try:
            completed = subprocess.run(command, cwd=electronics, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT, text=True, timeout=timeout_seconds, check=False)
            transcript = completed.stdout
            report["test_process_returncode"] = completed.returncode
        except subprocess.TimeoutExpired as exc:
            partial = exc.stdout or ""
            transcript = partial.decode("utf-8", errors="replace") if isinstance(partial, bytes) else partial
            transcript += f"\nCI controller timeout after {timeout_seconds} seconds.\n"
            log_path.write_text(transcript, encoding="utf-8")
            raise RuntimeError("Controller test process timed out") from exc
        log_path.write_text(transcript, encoding="utf-8")
        counts = re.findall(r"Ran (\d+) tests? in", transcript)
        report["tests_run"] = int(counts[-1]) if counts else None
        skipped = re.findall(r"skipped=(\d+)", transcript)
        report["skipped"] = int(skipped[-1]) if skipped else 0
        if completed.returncode != 0:
            report["error"] = "Controller test process failed"
        elif report["tests_run"] is None:
            report["error"] = "Could not establish the number of controller tests executed"
        elif report["tests_run"] <= report["skipped"]:
            report["error"] = "No controller tests executed (empty or entirely skipped suite)"
        else:
            report["status"] = "PASS"
    except Exception as exc:
        report["error"] = f"{type(exc).__name__}: {exc}"
        if not log_path.exists():
            log_path.write_text(report["error"] + "\n", encoding="utf-8")
    report["finished_at_utc"] = now()
    report["log_path"] = "controller.log"
    save(output / "summary.json", report)
    (output / "summary.md").write_text(
        f"# Controller host tests\n\nStatus: **{report['status']}**\n\n"
        f"Checkout: `{report['checkout_sha']}` ({report['revision_method']}).\n\n"
        f"Tests run: {report['tests_run']}; skipped: {report['skipped']}.\n\n"
        + (f"Failure: {report['error']}\n\n" if report.get('error') else '')
        + "Host logic only; no GPIO, actuator, or physical release test. Historical evidence is unchanged.\n",
        encoding="utf-8")
    print(json.dumps({"status": report["status"], "tests_run": report["tests_run"],
                      "source_revision": report["source_revision"], "summary": str(output / "summary.json")}))
    return 0 if report["status"] == "PASS" else 1


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--output", required=True, type=Path, help="New or empty CI artifact directory")
    ap.add_argument("--source-revision", help="Only needed for an explicitly identified non-git snapshot")
    ap.add_argument("--timeout-seconds", type=float, default=120)
    args = ap.parse_args()
    if args.timeout_seconds <= 0:
        ap.error("--timeout-seconds must be positive")
    try:
        return run(ROOT, args.output, args.source_revision, args.timeout_seconds)
    except Exception as exc:
        print(f"Controller CI setup failed: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
