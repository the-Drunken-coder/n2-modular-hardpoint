#!/usr/bin/env python3
"""Reproduce nominal P14 play and a clearly illustrative stroke-budget study.

Imports only three committed STEP solids; does not regenerate or modify CAD.
Requires CadQuery for CAD checks. All other calculations use the standard library.
Outputs are analytical/geometry evidence, never physical qualification records.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
import platform
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path

SOURCE_COMMIT = "e1150701358f31e536c807ee21e29eae4e6c4985"
VOLUME_TOL_MM3 = 1e-7


@dataclass(frozen=True)
class Geometry:
    name: str
    status: str
    stroke_mm: float
    lug_thickness_mm: float
    distal_engagement_mm: float
    lug_to_distal_edge_gap_mm: float
    contact_width_mm: float = 3.0

    @property
    def clear_stroke_mm(self) -> float:
        return self.distal_engagement_mm + self.lug_to_distal_edge_gap_mm + self.lug_thickness_mm

    def at(self, stroke_mm: float) -> dict:
        s = min(self.stroke_mm, max(0.0, stroke_mm))
        overlap = min(self.lug_thickness_mm, max(0.0, self.clear_stroke_mm - s))
        distal = max(0.0, self.distal_engagement_mm - s)
        if overlap <= 1e-10:
            overlap = 0.0
        if distal <= 1e-10:
            distal = 0.0
        area = self.contact_width_mm * overlap
        return {
            "geometry": self.name,
            "status": self.status,
            "stroke_mm": round(s, 9),
            "distal_overlap_mm": round(distal, 9),
            "lug_overlap_mm": round(overlap, 9),
            "nominal_contact_area_mm2": round(area, 9),
            "pressure_ratio_to_full_contact": self.lug_thickness_mm / overlap if overlap else None,
            "ideal_average_pressure_at_8p90748N_MPa": 8.90748 / area if area else None,
            "phase": "clear" if not overlap else "proximal_only" if not distal else "both_supports_available",
        }


BASELINE = Geometry("P14_reference", "current_nominal_geometry", 3.0, 1.4, 0.6, 0.3)
CONCEPT = Geometry("longer_stroke_concept", "illustrative_only_not_CAD_or_strength_validated", 6.0, 3.5, 1.0, 0.3)


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_json(path: Path, value) -> None:
    path.write_text(json.dumps(value, indent=2, allow_nan=False) + "\n")


def write_csv(path: Path, rows: list[dict]) -> None:
    with path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)


def model_summary(g: Geometry) -> dict:
    # Deliberately illustrative allowances, not measured manufacturing statistics.
    travel_loss_mm = 0.25
    adverse_axial_stack_mm = 0.25
    adverse_engagement_loss_mm = 0.25
    return {
        **asdict(g),
        "clear_stroke_mm": g.clear_stroke_mm,
        "full_lug_overlap_until_stroke_mm": g.distal_engagement_mm + g.lug_to_distal_edge_gap_mm,
        "nominal_open_margin_mm": g.stroke_mm - g.clear_stroke_mm,
        "proximal_only_loaded_travel_mm": g.lug_to_distal_edge_gap_mm + g.lug_thickness_mm,
        "nominal_full_contact_area_mm2": g.contact_width_mm * g.lug_thickness_mm,
        "illustrative_travel_loss_mm": travel_loss_mm,
        "illustrative_adverse_axial_stack_mm": adverse_axial_stack_mm,
        "illustrative_adverse_engagement_loss_mm": adverse_engagement_loss_mm,
        "open_margin_after_illustrative_allowances_mm": g.stroke_mm - travel_loss_mm - g.clear_stroke_mm - adverse_axial_stack_mm,
        "distal_engagement_after_illustrative_allowance_mm": g.distal_engagement_mm - adverse_engagement_loss_mm,
        "working_load_rating_N": None,
        "loaded_release_rating_N": None,
    }


def cad_play(cad_dir: Path) -> tuple[dict, list[dict]]:
    import cadquery as cq

    names = ("receiver", "adapter", "keeper")
    paths = {n: cad_dir / "N2" / f"N2_{n}.step" for n in names}
    shapes = {n: cq.importers.importStep(str(p)).val() for n, p in paths.items()}
    receiver, adapter, keeper = (shapes[n] for n in names)
    if not all(s.isValid() for s in shapes.values()):
        raise RuntimeError("At least one current STEP solid is invalid")
    checks = []

    def overlaps(a, k) -> dict:
        return {
            "adapter_receiver_overlap_mm3": a.intersect(receiver).Volume(),
            "adapter_keeper_overlap_mm3": a.intersect(k).Volume(),
            "keeper_receiver_overlap_mm3": k.intersect(receiver).Volume(),
        }

    for az, kz, expected in [
        (0, 0, False), (.29, 0, False), (.31, 0, True),
        (.59, .29, False), (.61, .29, True), (.59, .31, True),
        (-.59, -.29, False), (-.61, -.29, True), (-.59, -.31, True),
    ]:
        result = overlaps(adapter.translate((0, 0, az)), keeper.translate((0, 0, kz)))
        actual = any(v > VOLUME_TOL_MM3 for v in result.values())
        checks.append({"check": "axial_pose", "adapter_dz_mm": az, "keeper_dz_mm": kz,
                       "yaw_deg": 0, **result, "interference_found": actual,
                       "expected_interference": expected, "check_pass": actual == expected})

    for theta in (-5, -4.75, -4.5, 0, 4.5, 4.75, 5):
        a = adapter.rotate((27.5, 10, 0), (27.5, 10, 1), theta)
        result = overlaps(a, keeper)
        actual = any(v > VOLUME_TOL_MM3 for v in result.values())
        expected = abs(theta) >= 5
        checks.append({"check": "yaw_pose", "adapter_dz_mm": 0, "keeper_dz_mm": 0,
                       "yaw_deg": theta, **result, "interference_found": actual,
                       "expected_interference": expected, "check_pass": actual == expected})

    theta = math.degrees(math.asin(1 / math.hypot(.7, 3.6)) - math.atan(.7 / 3.6))
    report = {
        "method": "Rigid Boolean intersection of the three committed current STEP solids",
        "software": {"python": platform.python_version(), "cadquery": cq.__version__},
        "intersection_tolerance_mm3": VOLUME_TOL_MM3,
        "step_sha256": {n: digest(p) for n, p in paths.items()},
        "solid_volumes_mm3": {n: s.Volume() for n, s in shapes.items()},
        "tested_source_commit": SOURCE_COMMIT,
        "nominal_geometry_mm": {
            "keeper_z": [7.2, 10.2], "keeper_channel_z": [6.9, 10.5],
            "adapter_cross_hole_z": [6.9, 10.5], "adapter_lug_x": [26.8, 28.2],
            "adapter_lug_y": [6.4, 13.6], "receiver_slot_x": [26.5, 28.5],
            "receiver_slot_y": [6.1, 13.9], "adapter_flange_underside_z": 16,
            "receiver_roof_top_z": 14.7,
        },
        "nominal_axial_motion_each_direction_mm": 0.6,
        "nominal_axial_total_motion_mm": 1.2,
        "analytical_yaw_first_side_contact_deg": theta,
        "analytical_total_yaw_range_deg": 2 * theta,
        "yaw_first_contact_equation": "0.7*cos(theta) + 3.6*sin(theta) = 1.0",
        "sampled_yaw_no_interference_through_each_direction_deg": 4.75,
        "sampled_yaw_interference_at_each_direction_deg": 5.0,
        "nominal_flange_to_roof_gap_mm": 1.3,
        "all_expected_geometry_checks_pass": all(r["check_pass"] for r in checks),
        "limits": [
            "This establishes nominal geometric clearance, not measured backlash on a printed specimen.",
            "Loads, friction, preload, elasticity, wear, and dynamics are not solved.",
            "This current-commit run checks receiver, adapter, and keeper only; it does not test purchased actuator internals.",
            "The yaw analytic calculation is the rectangular lug/socket estimate and is bracketed by the STEP checks.",
            "No working-load rating or flight readiness follows from these checks.",
        ],
    }
    if not report["all_expected_geometry_checks_pass"]:
        raise RuntimeError("A CAD play expectation changed; inspect results before issuing conclusions")
    return report, checks


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--cad-dir", type=Path, default=Path(__file__).resolve().parents[3] / "cad")
    ap.add_argument("--output", type=Path, default=Path(__file__).resolve().parent)
    args = ap.parse_args()
    out = args.output.resolve()
    out.mkdir(parents=True, exist_ok=True)
    cad_dir = args.cad_dir.resolve()

    cad, checks = cad_play(cad_dir)
    write_json(out / "current_p14_play.json", cad)
    write_csv(out / "current_p14_clearance_checks.csv", checks)

    summaries = [model_summary(g) for g in (BASELINE, CONCEPT)]
    series = []
    for g in (BASELINE, CONCEPT):
        samples = {round(i * .05, 9) for i in range(round(g.stroke_mm / .05) + 1)}
        samples.update((g.distal_engagement_mm, g.distal_engagement_mm + g.lug_to_distal_edge_gap_mm,
                        g.clear_stroke_mm, max(0, g.clear_stroke_mm - .1), g.stroke_mm))
        series.extend(g.at(s) for s in sorted(samples))
    write_csv(out / "stroke_comparison.csv", summaries)
    write_csv(out / "stroke_overlap_series.csv", series)

    tolerance_rows = []
    for g in (BASELINE, CONCEPT):
        for travel_loss in (0, .1, .25, .5, .75):
            for adverse_stack in (0, .1, .25, .5, .75):
                margin = g.stroke_mm - travel_loss - g.clear_stroke_mm - adverse_stack
                tolerance_rows.append({"geometry": g.name, "travel_loss_mm": travel_loss,
                    "adverse_axial_stack_mm": adverse_stack, "remaining_open_margin_mm": margin,
                    "positive_geometric_margin": margin > 0,
                    "label": "illustrative_allowance_screen_not_tolerance_qualification"})
    write_csv(out / "illustrative_tolerance_sweep.csv", tolerance_rows)

    force_rows = []
    for mass in (.1, .454, 1.0):
        for load_factor in (1, 2):
            for mu in (.05, .1, .2, .3, .4):
                p = mass * 9.81 * load_factor
                force_rows.append({"mass_kg": mass, "load_factor": load_factor, "retained_force_N": p,
                    "assumed_equal_contact_mu": mu, "ideal_planar_withdrawal_lower_bound_N": 2 * mu * p,
                    "catalog_80gf_point_N": .08 * 9.80665,
                    "catalog_point_is_not_full_stroke_curve": True,
                    "additional_latch_normal_force_N": 0, "additional_normal_force_is_assumed": True,
                    "label": "conditional_friction_screen_not_release_rating"})
    write_csv(out / "illustrative_force_sweep.csv", force_rows)

    # A unit of extra normal force through the latch adds at least 2*mu N of
    # ideal planar drag. Do not equate clamp preload directly to this force:
    # the actual joint stiffness/load partition must be established separately.
    extra_load_rows = []
    for mu in (.1, .2, .3):
        for extra_normal in (0, .5, 1, 2, 5):
            extra_load_rows.append({"assumed_equal_contact_mu": mu,
                "assumed_additional_normal_force_through_latch_N": extra_normal,
                "additional_ideal_planar_drag_N": 2 * mu * extra_normal,
                "label": "not_a_joint_preload_partition_model"})
    write_csv(out / "extra_normal_load_force_trade.csv", extra_load_rows)

    assert math.isclose(BASELINE.clear_stroke_mm, 2.3)
    assert math.isclose(CONCEPT.clear_stroke_mm, 4.8)
    assert math.isclose(BASELINE.at(2.2)["lug_overlap_mm"], .1)
    assert math.isclose(CONCEPT.at(4.7)["lug_overlap_mm"], .1)
    assert BASELINE.at(3)["phase"] == "clear"
    assert CONCEPT.at(6)["phase"] == "clear"

    source_files = [cad_dir / n for n in ("build_n2.py", "common.py", "solenoid_parts.py", "N2/active_metadata.json")]
    report = {
        "generated_utc": datetime.now(timezone.utc).isoformat(),
        "source_commit": SOURCE_COMMIT,
        "scope": "Current STEP clearance replay plus illustrative one-dimensional design arithmetic",
        "physical_test_performed": False,
        "new_CAD_design_created": False,
        "new_structural_solve_in_this_mechanical_substudy": False,
        "current_p14_play": cad,
        "stroke_models": summaries,
        "equations": {
            "clear_stroke": "s_clear = e + g + t",
            "lug_overlap": "ell(s) = min(t, max(0, e+g+t-s))",
            "distal_overlap": "d(s) = max(0, e-s)",
            "nominal_open_margin": "S-e-g-t",
            "proximal_only_loaded_travel": "g+t",
            "allowance_screen": "margin = S-travel_loss-e-g-t-adverse_axial_stack",
            "conditional_planar_drag_floor": "F >= 2*mu*P for equal Coulomb coefficients and parallel opposing contacts",
            "extra_normal_force_trade": "delta_F >= 2*mu*delta_N; delta_N is force actually transmitted through the sliding latch",
        },
        "critical_tradeoffs": [
            "The illustrative 6 mm / 3.5 mm concept has 1.2 mm nominal opening margin, versus 0.7 mm for P14.",
            "It increases the proximal-only loaded interval from 1.7 mm to 3.8 mm; this can worsen keeper/guide bending and release demand.",
            "A thicker lug does not by itself establish assembly strength, loaded-release capability, or fit.",
            "The 0.25 mm loss/stack examples are invented screening inputs, not measured fabrication tolerances.",
            "Friction coefficients are assumptions; the 80 gf supplier point is not a force-versus-stroke curve or guaranteed net available pull.",
            "Seating preload and ejector forces can increase release demand, but mapping them to latch load requires a joint/load-path model.",
            "Existing and proposed printed load paths require physical fit, pull-force, structural, wear, and vibration tests.",
        ],
        "source_sha256": {str(p.relative_to(cad_dir)): digest(p) for p in source_files},
        "outputs": ["current_p14_play.json", "current_p14_clearance_checks.csv", "stroke_comparison.csv",
            "stroke_overlap_series.csv", "illustrative_tolerance_sweep.csv", "illustrative_force_sweep.csv",
            "extra_normal_load_force_trade.csv"],
    }
    write_json(out / "mechanical_summary.json", report)
    print(json.dumps({"status": "geometry_and_arithmetic_checks_passed", "source_commit": SOURCE_COMMIT,
        "cad_checks": len(checks), "stroke_rows": len(series), "current_axial_total_mm": cad["nominal_axial_total_motion_mm"],
        "current_total_yaw_deg": cad["analytical_total_yaw_range_deg"], "concept_open_margin_mm": summaries[1]["nominal_open_margin_mm"],
        "concept_proximal_only_interval_mm": summaries[1]["proximal_only_loaded_travel_mm"], "physical_tests": False}))


if __name__ == "__main__":
    main()
