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
from fit_envelope import angular_candidates, guide_angle, tip_interval
from itertools import product
from math import cos, sin, radians, degrees
import numpy as np


class FitBoundTests(unittest.TestCase):
    def test_combined_continuous_guide_envelope_and_dimensional_extrema_pass(self):
        r = risks.bounded_fit()
        self.assertGreater(r["configurations_checked"], 0)
        self.assertGreater(r["continuous_pitch_yaw_abs_bound_deg"], 1.8)
        self.assertTrue(r["rigid_kinematic_bounds_pass"])
        self.assertGreaterEqual(r["minima"]["full_section_overlap_mm"], 0.5)
        self.assertGreaterEqual(r["minima"]["spare_after_clearance_mm"], 1.0)

    def test_old_decoupled_tip_fails_with_the_same_clearance_thresholds(self):
        with patch.object(p, "TIP_LATCHED_X", 5.8), patch.object(risks, "L_PIN_TIP", p.SHAFT_X-p.CRANK_R-5.8):
            r = risks.bounded_fit()
        self.assertFalse(r["rigid_kinematic_bounds_pass"])
        self.assertLess(r["minima"]["full_section_overlap_mm"], 0.5)

    def test_interval_encloses_independent_transformed_slot_plane_samples(self):
        b = p.FIT_BOUNDS
        tilt = guide_angle(b)
        radius = b["horn_r"][1]
        length = risks.L_PIN_TIP + b["keeper_length_error_mm"][1]
        half = (b["keeper_width_mm"][1]+b["guide_clearance_total_mm"][1])/2
        zfloat = b["relative_guide_shaft_z_error_mm"]+b["guide_clearance_total_mm"][1]/2
        xc = sum(p.TUNNEL_X)/2
        for alpha in (p.A_RELEASE, p.A_RELEASE+4, 177, 180, 183):
            lo, hi = tip_interval(p, b, tilt, radius, 0.1, alpha, length)
            xp = p.SHAFT_X+0.1+radius*cos(radians(alpha))
            zp = p.SHAFT_Z+radius*sin(radians(alpha))
            for pitch, yaw, dz in product((-tilt, 0, tilt), (-tilt, 0, tilt), (-zfloat, zfloat)):
                cp, sp, cy, sy = cos(pitch), sin(pitch), cos(yaw), sin(yaw)
                rotation = np.array([[cy*cp, -sy, -cy*sp], [sy*cp, cy, -sy*sp], [sp, 0, cp]])
                xz = rotation[np.ix_((0, 2), (0, 2))]
                for uc, u, v, play in product((-half, half), (-half, half), (-half, half), (-0.25, 0.25)):
                    # Independently solve the two world X/Z contact coordinates
                    # for the slot position along the guided bar and contact Z.
                    contact = np.linalg.solve(xz, np.array([xp-xc, zp-p.ZK-dz])-rotation[(0, 2), 1]*uc)
                    tip_x = xc+(rotation @ np.array([contact[0]-length+play, u, v]))[0]
                    self.assertGreaterEqual(tip_x, lo-1e-10)
                    self.assertLessEqual(tip_x, hi+1e-10)

    def test_interior_pocket_extremum_is_not_assumed_at_180(self):
        tilt = guide_angle(p.FIT_BOUNDS)
        values = angular_candidates(177, 183, 5.4, p.SHAFT_Z, p.ZK, tilt)
        self.assertTrue(any(abs(a-(180+degrees(tilt))) < 1e-8 for a in values))

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
