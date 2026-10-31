#!/usr/bin/env python3
"""Build the active CAD and complete viewer package; any failed stage is fatal."""
import json
from pathlib import Path
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]


def active_directory(root):
    selection = json.loads((root / "project/active_design.json").read_text())
    if selection.get("id") != "r5":
        raise ValueError("Active preview must be the selected R5 package")
    return root / "project/designs/r5"


def validate_assets(design):
    out = design / "out"
    numerical_flags = {
        "coupled_forces.json": ("numerical_screen_passed",),
        "mechanics.json": ("numerical_checks_passed",),
        "yoke_strength.json": ("service_section_screen_pass",
                               "prescribed_closing_jam_section_screen_pass"),
        "actuation_fea.json": ("numerical_screen_passed",),
        "body_actuation_fea.json": ("numerical_screen_passed",),
    }
    required = ["cad.json", "body.step", "keeper.step", "adapter.step",
                "viewer/manifest.json", "viewer/fea/index.json", "risks.json",
                *numerical_flags]
    for name in required:
        path = out / name
        if not path.is_file() or path.stat().st_size == 0:
            raise ValueError(f"Missing active preview artifact: {path}")

    for name, flags in numerical_flags.items():
        report = json.loads((out / name).read_text())
        for flag in flags:
            if report.get(flag) is not True:
                raise ValueError(f"Failed or missing numerical gate: {name}:{flag}")
    risk_gates = json.loads((out / "risks.json").read_text()).get("gates")
    if not isinstance(risk_gates, dict) or not risk_gates or any(
            value is not True for value in risk_gates.values()):
        raise ValueError("Failed or missing numerical gate: risks.json:gates")

    def inside_viewer(name):
        path = (out / "viewer" / name).resolve()
        if not path.is_relative_to((out / "viewer").resolve()):
            raise ValueError(f"Viewer asset leaves package: {name}")
        if not path.is_file() or path.stat().st_size == 0:
            raise ValueError(f"Missing viewer asset: {name}")

    manifest = json.loads((out / "viewer/manifest.json").read_text())
    if not {"body", "keeper", "adapter"} <= {p["id"] for p in manifest["parts"]}:
        raise ValueError("Active viewer is missing printed parts")
    for part in manifest["parts"]:
        inside_viewer(part["stl"])
    index = json.loads((out / "viewer/fea/index.json").read_text())
    if index["revision"] != "R5":
        raise ValueError("Active FEA viewer revision is stale")
    if {case["part"] for case in index["cases"]} != {"body", "keeper", "adapter"}:
        raise ValueError("Active viewer is missing FEA cases")
    for case in index["cases"]:
        inside_viewer(f"fea/{case['part']}__{case['case']}.json")


def build(root=ROOT):
    root = Path(root).resolve()
    design = active_directory(root)
    # out is generated and ignored. Cleaning prevents an old successful build
    # from making a missing or incomplete new export look complete.
    shutil.rmtree(design / "out", ignore_errors=True)
    subprocess.run([sys.executable, "cad/build.py"], cwd=design, check=True)
    subprocess.run(["bash", "viewer_build.sh"], cwd=design, check=True)
    validate_assets(design)
    print("PASS: active R5 CAD and complete analysis viewer assets were regenerated")


if __name__ == "__main__":
    build()
