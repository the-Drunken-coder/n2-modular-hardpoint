#!/usr/bin/env python3
"""Verify the selected R5 sources and requirements; no physical qualification."""
import argparse
import importlib.util
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_inside(root, path):
    target = (root / path).resolve()
    if not target.is_relative_to(root.resolve()):
        raise ValueError(f"Reference leaves repository: {path}")
    return target


def load_design(root=ROOT):
    root = Path(root)
    selection = json.loads((root / "project/active_design.json").read_text())
    if selection != {"schema_version": 1, "id": "r5", "metadata": "project/designs/r5/design.json"}:
        raise ValueError("Repository active selection must identify R5")
    design = json.loads(read_inside(root, selection["metadata"]).read_text())
    parameter_path = read_inside(root, design["parameters"])
    spec = importlib.util.spec_from_file_location("_r5_current_parameters", parameter_path)
    params = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(params)
    return design, params


def check(root=ROOT):
    root = Path(root)
    errors = []
    def require(condition, message):
        if not condition:
            errors.append(message)
    def near(actual, expected, label):
        require(isinstance(actual, (int, float)) and not isinstance(actual, bool)
                and math.isfinite(actual) and math.isclose(actual, expected, rel_tol=1e-9, abs_tol=1e-9),
                f"{label}: expected {expected}, got {actual!r}")
    try:
        design, p = load_design(root)
        req, evidence = design["requirements"], design["evidence"]
        require(design["id"] == "r5" and design["revision"] == "R5", "Active metadata is not R5")
        require(design["status"] == "bench_prototype_unqualified", "Review any change to qualification status")
        require(design["prototype_material"] == "Bambu PAHT-CF", "Prototype material differs")
        require(design["printed_parts"] == ["body", "keeper", "adapter"], "R5 printed parts differ")
        require(design["actuator"] == "TowerPro MG92B positional servo", "R5 actuator differs")
        near(req["departing_mass_kg"], p.MASS_KG, "Departing mass")
        near(req["departing_mass_kg"], 0.454, "Selected mass requirement")
        near(req["total_load_factor_g"], p.G_DESIGN, "Total load factor")
        near(req["total_load_factor_g"], 2.0, "Selected load factor")
        force = req["departing_mass_kg"] * req["gravity_m_s2"] * req["total_load_factor_g"]
        near(req["release_load_N"], force, "Release force arithmetic")
        near(req["release_load_N"], p.P_DESIGN, "Source release force")
        near(req["retention_proof_multiplier"], 2.0, "Selected retention proof multiplier")
        near(req["retention_proof_target_N"], force * req["retention_proof_multiplier"], "Proof arithmetic")
        near(req["retention_proof_target_N"], p.P_PROOF, "Source proof force")
        near(req["nominal_supply_V"], 5.0, "Fixed supply requirement")
        require(req["extraction_direction"] == "-Z in R5 assembly coordinates", "Wrong extraction frame")
        for flag in ("power_off_retention_required", "payload_power_data", "ejector", "departure_sensor"):
            require(req[flag] is False, f"Accepted scope changed: {flag}")
        require(evidence["working_load_rating_N"] is None, "No working-load rating is established")
        require(evidence["physical_tests_performed"] is False, "Review supplied physical evidence before changing status")
        require(evidence["flight_qualified"] is False, "No flight qualification is established")
        require(evidence["numerical_status"] == "requires_current_checkout_run", "Do not inherit archived numerical results")
        for path in (req["source"], evidence["bench_plan"], "project/designs/r5/cad/build.py",
                     "project/designs/r5/BOM.md", "project/designs/r5/PRINTING.md",
                     "project/designs/r5/electronics/README.md", *design["historical_references"]):
            require(read_inside(root, path).is_file(), f"Missing package reference: {path}")
        for path in ("README.md", "docs/requirements.md", "docs/print-requirements.md",
                     "docs/test-plan.md", "docs/EVIDENCE_AND_READINESS.md"):
            heading = (root / path).read_text().splitlines()[0]
            require("R5" in heading, f"Current entry point does not identify R5: {path}")
        require(p.BODY["z"] <= 20.0, "Retained body exceeds the selected 20 mm thickness")
    except (OSError, ValueError, KeyError, TypeError, AttributeError, IndexError) as error:
        errors.append(f"Invalid current design: {error}")
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=ROOT)
    errors = check(parser.parse_args().root.resolve())
    for error in errors:
        print("FAIL:", error)
    if not errors:
        print("PASS: R5 selection, source parameters, requirements and current entry points agree.")
        print("Consistency only; CAD/FEA runs and physical acceptance are separate.")
    return bool(errors)


if __name__ == "__main__":
    raise SystemExit(main())
