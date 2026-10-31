"""Deterministic fit limits are conditional inspection bounds, not process statistics."""
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "analysis"))
import params as p
import risks


class FitBoundTests(unittest.TestCase):
    def test_all_corners_and_interior_latch_extremum_pass(self):
        r = risks.bounded_fit()
        self.assertEqual(r["configurations_checked"], 192)
        self.assertTrue(r["rigid_kinematic_bounds_pass"])
        self.assertGreaterEqual(r["minima"]["full_section_overlap_mm"], 0.5)
        self.assertGreaterEqual(r["minima"]["spare_after_clearance_mm"], 1.0)

    def test_broad_guessed_scatter_is_not_accepted_as_manufacturing_tolerance(self):
        b = dict(p.FIT_BOUNDS, horn_r=(4.5, 5.5), servo_dx=(-0.5, 0.5))
        self.assertFalse(risks.bounded_fit(b)["rigid_kinematic_bounds_pass"])

    def test_pin_slot_lost_motion_reduces_both_endpoint_margins(self):
        centered = risks.bounded_fit(dict(p.FIT_BOUNDS, pin_slot_clearance_total_mm=(0.0, 0.0)))
        actual = risks.bounded_fit()
        self.assertEqual(actual["pin_slot_play_per_endpoint_mm"], 0.25)
        for key in ("full_section_overlap_mm", "spare_after_clearance_mm", "tip_to_pocket_floor_mm"):
            self.assertAlmostEqual(centered["minima"][key] - actual["minima"][key], 0.25)
        with patch.object(p, "TIP_LATCHED_X", 6.2), patch.object(risks, "L_PIN_TIP", p.SHAFT_X - p.CRANK_R - 6.2):
            self.assertFalse(risks.bounded_fit()["rigid_kinematic_bounds_pass"])

    def test_previous_tip_length_loses_full_section_margin(self):
        with patch.object(p, "TIP_LATCHED_X", 6.5), patch.object(risks, "L_PIN_TIP", p.SHAFT_X - p.CRANK_R - 6.5):
            r = risks.bounded_fit()
        self.assertFalse(r["rigid_kinematic_bounds_pass"])
        self.assertLess(r["minima"]["full_section_overlap_mm"], 0.5)

    def test_no_physical_probability_is_returned(self):
        with patch.dict(risks.MC, n=2000):
            r = risks.monte_carlo()
        self.assertFalse(any(k.startswith("P_") for k in r))
        self.assertIn("not a measured reliability", r["interpretation"])

    def test_unsupported_angular_interval_is_rejected(self):
        with self.assertRaises(ValueError):
            risks.bounded_fit(dict(p.FIT_BOUNDS, release_error_deg=(0, 60)))


if __name__ == "__main__":
    unittest.main()
