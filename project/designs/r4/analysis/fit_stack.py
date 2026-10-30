#!/usr/bin/env python3
"""Report explicit fit/kinematic intervals; unknown print capability stays pending."""
from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

HERE = Path(__file__).resolve().parent


def calculate(g, assumptions):
    p = assumptions["finished_print_dimension_error_mm"]
    s = assumptions["sleeve_diameter_error_mm"]
    a = g["actuation"]
    free = a["slot_width_mm"] - a["sleeve_diameter_mm"]
    slot_min, slot_max = free - p - s, free + p + s
    guide = g["receiver_roof_z"] - g["receiver_floor_z"] - (g["keeper_top_z"] - g["keeper_bottom_z"])
    clear = g["lug_x"][1] - g["keeper_tip_x"]
    radius = a["crank_radius_mm"]
    operating = a["operating_travel_mm"]
    angle = math.acos(1 - operating / radius)
    error = math.radians(assumptions["uncalibrated_output_angle_error_deg"])
    radius_error = assumptions["crank_radius_error_mm"]
    low = (radius - radius_error) * (math.cos(error) - math.cos(max(0, angle - error))) - slot_max
    high = (radius + radius_error) * (1 - math.cos(angle + error)) + slot_max
    worst_clear = clear + 2 * p
    stop_min = a["travel_mm"] - 2 * p
    key_min = g["key_normal_gap_mm"] - 2 * p
    return {"revision": "R4", "assumptions": assumptions, "actual_process_capability_measured": False,
        "nominal_keeper_clear_mm": clear, "worst_required_clear_mm": worst_clear,
        "nominal_operating_travel_mm": operating, "nominal_operating_angle_deg": math.degrees(angle),
        "slot_diametral_clearance_interval_mm": [slot_min, slot_max],
        "vertical_guide_total_clearance_interval_mm": [guide - 2*p, guide + 2*p],
        "key_single_face_clearance_interval_mm": [key_min, g["key_normal_gap_mm"] + 2*p],
        "uncalibrated_keeper_travel_interval_mm": [low, high],
        "minimum_release_reserve_mm_under_assumptions": low - worst_clear,
        "minimum_stop_reserve_mm_without_keeper_calibration": stop_min - high,
        "slot_interference_free_under_assumptions": slot_min > 0,
        "guide_interference_free_under_assumptions": guide - 2*p > 0,
        "key_clearance_strictly_positive_under_assumptions": key_min > 1e-8,
        "release_reserve_exceeds_half_mm_under_assumptions": low - worst_clear >= assumptions["required_release_margin_mm"],
        "uncalibrated_stop_reserve_meets_requirement": stop_min - high >= assumptions["required_measured_released_stop_margin_mm"],
        "disposition": "Conditionally dimensioned prototype. Calibrate actual keeper travel and inspect stop margin; unknown print/hardware tolerances are not an automatic pass.",
        "required_measurements": ["Actual critical printed dimensions and key/guide fit coupon",
            "Sleeve OD, slot width, and side/axial free play", "Retained keeper engagement and visible dead-center alignment",
            "Released keeper travel, >=0.5 mm clearance past the actual lug, and >=0.5 mm to the physical released stop",
            "Total installed pad preload between 0.5 and 3 N"]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--geometry", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    result = calculate(json.loads(args.geometry.read_text()), json.loads((HERE / "fit_assumptions.json").read_text()))
    args.output.write_text(json.dumps(result, indent=2, allow_nan=False) + "\n")
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
