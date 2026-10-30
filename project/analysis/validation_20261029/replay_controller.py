#!/usr/bin/env python3
"""Replay existing N2 bench-controller tests; no hardware or proposed interlock."""
from __future__ import annotations

import hashlib
import json
import platform
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

BASELINE = "e1150701358f31e536c807ee21e29eae4e6c4985"
ROOT = Path(__file__).resolve().parents[3]
OUTPUT = Path(__file__).resolve().parent
ELECTRONICS = ROOT / "project/electronics"


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def main() -> int:
    inputs = {}
    for name in ("controller_core.py", "config.py", "main.py", "test_controller.py"):
        path = ELECTRONICS / name
        inputs[str(path.relative_to(ROOT))] = hashlib.sha256(path.read_bytes()).hexdigest()
    command = [sys.executable, "-m", "unittest", "-v", "test_controller.py"]
    started = utc_now()
    run = subprocess.run(command, cwd=ELECTRONICS, stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT, text=True, check=False)
    finished = utc_now()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / "controller_host_tests.log").write_text(run.stdout, encoding="utf-8")
    match = re.search(r"Ran (\d+) tests? in", run.stdout)
    result = {
        "schema_version": 1,
        "id": "controller_host_replay",
        "title": "Existing local bench-controller host tests",
        "status": "PASS_COMPUTED" if run.returncode == 0 else "FAIL",
        "evidence_type": "executed_host_logic_tests",
        "source_revision": BASELINE,
        "source_file_sha256": inputs,
        "command": command,
        "working_directory": "project/electronics",
        "started_at_utc": started,
        "finished_at_utc": finished,
        "python": sys.version,
        "platform": platform.platform(),
        "returncode": run.returncode,
        "tests_run": int(match.group(1)) if match else None,
        "log_path": "project/analysis/validation_20261029/controller_host_tests.log",
        "limits": [
            "Existing bench state/button/timing logic only.",
            "No GPIO, actuator, temperature, structural, vibration or release hardware exercised.",
            "Proposed seating interlock and optional manual lock are not implemented by this controller.",
            "A passing host suite does not establish a load rating or reliable payload departure."
        ]
    }
    (OUTPUT / "controller_host_tests.json").write_text(
        json.dumps(result, indent=2) + "\n", encoding="utf-8")
    status_path = OUTPUT / "verification_status.json"
    if status_path.exists():
        status = json.loads(status_path.read_text(encoding="utf-8"))
        status["updated_at_utc"] = finished
        for item in status["checks"]:
            if item["id"] == result["id"]:
                item["status"] = result["status"]
                item["result"] = {"tests_run": result["tests_run"],
                                  "returncode": result["returncode"]}
        status_path.write_text(json.dumps(status, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"status": result["status"], "tests_run": result["tests_run"],
                      "result_path": str(OUTPUT / "controller_host_tests.json")}))
    return run.returncode


if __name__ == "__main__":
    raise SystemExit(main())
