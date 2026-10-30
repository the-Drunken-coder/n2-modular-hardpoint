#!/usr/bin/env python3
"""Copy a completed local run's compact evidence for review, never as CI inputs."""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import shutil


def archive(run, destination):
    gate = json.loads((run / "validation-gate.json").read_text())
    if gate.get("numerical_checks_passed") is not True:
        raise ValueError("Only a completed numerically checked run can be archived as the current record")
    if destination.exists():
        raise ValueError("Evidence destination already exists; retain previous records explicitly")
    destination.mkdir(parents=True)
    root_files = ("run.json", "cad-gate.json", "manufacturing-advisory.json", "fit-stack.json",
        "bench-status.json", "validation-gate.json", "handoff-gate.json", "prepared-inputs.json")
    fea_files = ("summary.json", "report.md", "manifest.json", "surface-audit.json",
                 "release-force-sweep.json", "crank-force-sensitivity.json")
    for name in root_files:
        shutil.copyfile(run / name, destination / name)
    for name in fea_files:
        shutil.copyfile(run / "fea" / name, destination / name)
    for name in ("cases", "plots", "execution"):
        shutil.copytree(run / "fea" / name, destination / name)
    (destination / "configs").mkdir()
    for path in (run / "fea/configs").glob("*.json"):
        shutil.copyfile(path, destination / "configs" / path.name)
    files = {str(path.relative_to(destination)): hashlib.sha256(path.read_bytes()).hexdigest()
             for path in sorted(destination.rglob("*")) if path.is_file()}
    (destination / "evidence-manifest.json").write_text(json.dumps({
        "origin": "completed_local_development_run", "input_to_CI": False,
        "source_run": str(run.resolve()), "files": files,
        "native_mesh_and_field_arrays": "Retained in the source run; GitHub Actions can upload them on manual dispatch.",
        "physical_tests_performed": False}, indent=2) + "\n")
    (destination / "README.md").write_text(
        "# Recorded R4 local validation\n\n"
        "This directory records a completed **local development run**, with exact input/result provenance. "
        "It is documentary evidence, not an input or substitute for the fresh GitHub Actions workflow.\n\n"
        "Read [report.md](report.md) for numerical findings, [summary.json](summary.json) for every mesh/case, "
        "and [validation-gate.json](validation-gate.json) for the automated checks. "
        "[fit-stack.json](fit-stack.json) records explicit fit assumptions; "
        "[bench-status.json](bench-status.json) records that physical measurements are pending.\n\n"
        "No payload rating, flight qualification, measured material properties or physical loaded-release success is claimed.\n")
    print(json.dumps({"archived": str(destination), "files": len(files), "solves": gate["case_solves"]}))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--run", type=Path, required=True)
    parser.add_argument("--destination", type=Path, required=True)
    args = parser.parse_args()
    archive(args.run.resolve(), args.destination.resolve())
