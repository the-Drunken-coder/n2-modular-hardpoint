"""The motion sweep must align the CAD slot with the real crank pin."""
from itertools import product
from math import cos, radians, sin
from pathlib import Path
import sys
import unittest

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad"), str(ROOT / "analysis")]
import params as p
from guide_motion import guaranteed_guide_interval, motion_guide_certificate, pose_fits_interval, slot_translation_interval
from guided_pose_geometry import rotation_matrix


class GuidePlacementTests(unittest.TestCase):
    def test_latch_recovers_the_full_guide_and_rejects_short_guide_yaw(self):
        certificate = motion_guide_certificate(p, p.FIT_BOUNDS)
        for alpha in (177, 180, 183):
            interval = guaranteed_guide_interval(alpha, certificate)
            self.assertEqual(interval, p.FIT_BOUNDS["guide_interval_x_mm"])
            self.assertFalse(pose_fits_interval((0, certificate["continuous_pitch_yaw_abs_bound_deg"],
                                                0, 0, 0), interval, 22.55))

    def test_level_radius_uses_the_fixed_nominal_cad_slot_datum(self):
        lo, hi = slot_translation_interval(40, 0, 0, 0, 0, 22.55)
        extra = p.FIT_AXIAL_ENVELOPE - max(abs(x) for x in p.FIT_BOUNDS["servo_dx"])
        expected_lo = min(r * cos(radians(40)) + p.CRANK_R + dx
                          for r, dx in product(p.FIT_BOUNDS["horn_r"], p.FIT_BOUNDS["servo_dx"])) - extra
        expected_hi = max(r * cos(radians(40)) + p.CRANK_R + dx
                          for r, dx in product(p.FIT_BOUNDS["horn_r"], p.FIT_BOUNDS["servo_dx"])) + extra
        self.assertAlmostEqual(lo, expected_lo, places=10)
        self.assertAlmostEqual(hi, expected_hi, places=10)
        old_lower = p.keeper_x(40, p.CRANK_R_MAX) - p.FIT_AXIAL_ENVELOPE
        self.assertLess(lo, old_lower - 0.20)

    def test_radius_error_does_not_disappear_at_the_latched_angle(self):
        lo, hi = slot_translation_interval(180, 0, 0, 0, 0, 22.55)
        self.assertLess(lo, -p.FIT_AXIAL_ENVELOPE)
        self.assertGreater(hi, p.FIT_AXIAL_ENVELOPE)

    def test_tilted_contact_is_enclosed_and_reconstructs_the_real_pin(self):
        pivot = 22.55
        for alpha, pitch, yaw, roll, guide_dz in product(
                (40, 90, 183), (-2.46694874585, 2.46694874585),
                (-1.23347437293, 1.23347437293), (-3.0, 3.0), (-0.35, 0.35)):
            lower, upper = slot_translation_interval(alpha, pitch, yaw, roll, guide_dz, pivot)
            rotation = rotation_matrix(radians(pitch), radians(yaw), radians(roll))
            for radius, shaft_dx, shaft_dz, contact_y in product(
                    p.FIT_BOUNDS["horn_r"], p.FIT_BOUNDS["servo_dx"],
                    (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR), (-2.55, 2.55)):
                pin = np.array((p.SHAFT_X + shaft_dx + radius * cos(radians(alpha)),
                                p.SHAFT_Z + shaft_dz + radius * sin(radians(alpha))))
                origin = np.array((pivot, p.ZK + guide_dz))
                local_xz = np.linalg.solve(rotation[np.ix_((0, 2), (0, 2))],
                                           pin - origin - rotation[(0, 2), 1] * contact_y)
                local_point = np.array((local_xz[0], contact_y, local_xz[1]))
                reconstructed = (rotation @ local_point)[[0, 2]] + origin
                np.testing.assert_allclose(reconstructed, pin, atol=1e-10)
                placement = local_xz[0] - (p.SHAFT_X - p.CRANK_R - pivot)
                self.assertLessEqual(lower, placement - 0.4 + 1e-9)
                self.assertGreaterEqual(upper, placement + 0.4 - 1e-9)


if __name__ == "__main__":
    unittest.main()
