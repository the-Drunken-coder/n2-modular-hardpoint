#!/usr/bin/env python3
"""Regenerate the N2-only tables from archived outputs; does not run FEA.

Python standard library only. Run from any working directory.
"""
from pathlib import Path
import collections
import csv
import hashlib
import json

HERE = Path(__file__).resolve().parent


def read(path):
    return json.loads((HERE / path).read_text())


def write(path, obj):
    (HERE / path).write_text(json.dumps(obj, indent=2) + "\n")


def main():
    selection = read("inputs/archived_selection.json")
    manifest = read("input_manifest.json")
    rows = []
    for run in manifest["issued_runs"]:
        for path in run["reference_results"]:
            row = read(path)
            assert row["variant"] == "N2"
            assert abs(row["raw_strength_threshold_N"] * row["raw_peak_failure_index"] - 1) < 1e-12
            rows.append((path, row))
    assert len(rows) == 39
    numerical = {
        key: max(abs(r[key]) for _, r in rows)
        for key in ["force_balance_error_N", "moment_balance_error_Nmm",
                    "relative_free_residual", "gauge_reaction_norm_N", "relative_volume_error"]
    }
    numerical.update(case_solves=len(rows), unique_meshes=len(manifest["issued_runs"]),
                     max_dofs=max(r["dofs"] for _, r in rows))
    summary = dict(selection["variant"])
    summary.update(
        schema="N2_FOCUSED_ANALYSIS_V1",
        revision="P11 scope consolidation; P8 numerical results unchanged",
        status="ARCHIVED_PLA_STRESS_SCREEN_NOT_WORKING_LOAD_RATING",
        numerical_results_changed=False,
        new_FEA_performed=False,
        geometry_changed=False,
        material=read("material.json"),
        load_axis="+Z",
        axis_note="The retained payload adapter pulls out in +Z; keeper actuation is +X. Holding FEA loads the actual extraction direction, not the actuator direction.",
        baseline_h_mm=selection["baseline_h_mm"],
        gravity_m_s2=9.80665,
        load_normalization_N=1,
        method=selection["method"],
        criterion={
            "expression": "I=max(max(sigma1,0)/25, max(-sigma3,0)/40, (sigma1-sigma3)/(2*15)); P_cross=1/max(I) N for the 1 N cases",
            "meaning": "First crossing of assumed local stress thresholds in this linear model; no fracture, contact redistribution, safety factor, creep, or statistical print allowance is solved.",
            "mass_conversion": "m=P/(n*9.80665). Any shown 1g equivalent includes the removable payload, adapter, and removable fasteners; it is not a payload or flight rating.",
        },
        local_refinement=selection["extra_refinement_records"],
        local_refinement_note="h0.4 is a separate local receiver refinement: h0.55 bulk sizing retained, sharp roof/wall root and second-washer hotspot refined to 0.4 mm. It is not a uniform 0.4 mm mesh or a revised design. The common 0.55 mm assembly screen is retained.",
        convergence=selection["convergence"],
        numerical_audit=numerical,
        provenance={
            "source_revision": selection["source_revision"],
            "source_date": selection["source_date"],
            "source_manifest": manifest["source_archive"],
            "frozen_solver": manifest["replay_solver"],
            "driver_history": manifest["driver_history"],
            "archived_output_manifest": "archive_manifest.json",
            "verification_scope": "Input and byte-copy verification plus prepare-only path remapping; no new FE solve in P11.",
        },
        limitations=[
            "Printed PLA thresholds and elastic constants are analyst assumptions, not measured allowables for these parts.",
            "Finite seated contact pressures are prescribed component loads; the actual assembled fit and pressure distribution are not solved.",
            "Local raw peaks remain mesh sensitive, particularly at sharp roof and ideal washer constraints; displacement/compliance convergence is not strength convergence.",
            "Distal support must seat to justify the nominal two-support case. Its retained axial overlap is only 0.6 mm.",
            "The distal overlap disappears after 0.6 mm keeper withdrawal, while the payload lug remains engaged until 2.3 mm. Holding strength does not prove loaded release.",
            "Actuator force, zero-load friction, skew, incomplete retraction, and load redistribution throughout withdrawal require measurement and testing.",
            "The two fixtures are ideal rigid boundaries. Actual airframe, host fasteners, payload fasteners, clamp screws, and pod wall are not qualified.",
            "No off-axis force or payload CG moment, shock, vibration, fatigue, layer fracture, creep, thermal exposure, or complete payload departure is validated.",
            "Historical driver hashes reflect file contents at result serialization; older executing-byte snapshots are unavailable. The frozen final driver defines current replay.",
        ],
        figures={"stress": "figures/N2_receiver.png", "convergence": "figures/N2_convergence.png"},
        historical_release={
            "path": "historical_release/README.md",
            "status": "P7_PETG_ERA_FRICTION_ASSUMPTIONS_NOT_PLA_QUALIFICATION",
            "retained_distal_overlap_mm": 0.6,
            "keeper_withdrawal_for_nominal_lug_clearance_mm": 2.3,
            "note": "Historical contact/friction statics retained for diagnosis. No legacy material-strength values are used in the PLA FE screen.",
        },
    )
    for case in summary["cases"]:
        parts = case["components"]
        assert case["raw_crossing_N"] == min(p["raw_crossing_total_N"] for p in parts)
        for p in parts:
            source = read(p["result_path"])
            assert source["raw_strength_threshold_N"] == p["raw_crossing_total_N"]
    write("summary.json", summary)
    cols = ["fixture", "scenario", "h_mm", "raw_crossing_N", "mass_equivalent_1g_kg",
            "mass_equivalent_1g_lb", "controlling_model", "controlling_case", "criterion"]
    with (HERE / "assembly_results.csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        for row in summary["cases"]:
            w.writerow({k: row[k] for k in cols})
    cols = ["result_path", "id", "variant", "case", "h_mm", "elements", "dofs",
            "raw_strength_threshold_N", "raw_peak_failure_index", "raw_peak_tensile_MPa",
            "raw_peak_compressive_MPa", "raw_peak_max_shear_MPa", "raw_peak_vm_MPa",
            "max_displacement_mm", "compliance_Nmm", "strain_energy_Nmm",
            "force_balance_error_N", "moment_balance_error_Nmm", "relative_free_residual",
            "gauge_reaction_norm_N", "relative_volume_error", "step_sha256",
            "configuration_sha256", "driver_sha256"]
    with (HERE / "results.csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        for path, row in rows:
            w.writerow({k: path if k == "result_path" else row[k] for k in cols})
    print(json.dumps({"cases": len(rows), "assembly_screens": len(summary["cases"]),
                      "numerical_audit": numerical, "outputs": ["summary.json", "assembly_results.csv", "results.csv"]}, indent=2))


if __name__ == "__main__":
    main()
