"""Geometry probes independent of the endpoint interval's scalar equations."""
import math
import random
import sys
import unittest
from itertools import product
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT/"analysis")]
import params as p
import risks
from fit_envelope import contact_envelope, corner_span, guide_angle, motion_guide_certificate, tip_interval, validate_relief_contract
from guided_pose_geometry import rotation_matrix, section_samples_fit_relief_superset


class ReliefFitEnvelopeTests(unittest.TestCase):
    def test_inspected_relief_contract_preserves_existing_acceptance_gates(self):
        b = p.FIT_BOUNDS
        angle = guide_angle(b)
        proof = validate_relief_contract(b, angle)
        self.assertAlmostEqual(proof["central_flat_half_mm"], 2.4)
        self.assertLess(proof["initial_center_plus_generator_offset_mm"], 2.4)
        self.assertLess(proof["opposite_edge_extra_mm"], b["guide_clearance_total_mm"][0])
        self.assertGreater(proof["adjacent_corner_drop_mm"], b["guide_relief_intrusion_max_mm"])
        envelope = contact_envelope(p, b, angle)
        self.assertGreater(envelope["local_corner_box_mm"], 5.6)
        self.assertGreater(envelope["sleeve_contact_y_abs_bound_mm"], envelope["local_corner_box_mm"]/2)
        result = risks.bounded_fit()
        self.assertTrue(result["rigid_kinematic_bounds_pass"])
        self.assertEqual(b["full_section_overlap_min_mm"], 0.5)
        self.assertEqual(b["spare_after_clearance_min_mm"], 1.0)
        self.assertEqual(b["open_clearance_reserve_mm"]+b["spare_after_clearance_min_mm"], 1.5)

    def test_unbounded_or_wider_corner_relief_is_rejected(self):
        for key, value in (("guide_relief_intrusion_max_mm", 0.3),
                           ("guide_relief_extent_max_mm", 3.0),
                           ("guide_flat_width_min_mm", 4.7),
                           ("guide_relief_intrusion_max_mm", float("nan"))):
            with self.subTest(key=key, value=value), self.assertRaises(ValueError):
                risks.bounded_fit(dict(p.FIT_BOUNDS, **{key: value}))

    def test_release_uses_the_certified_remaining_guide_not_the_full_length(self):
        certificate = motion_guide_certificate(p, p.FIT_BOUNDS)
        front, rear = p.FIT_BOUNDS["guide_interval_x_mm"]
        candidate = p.FIT_BOUNDS["remaining_guide_length_min_mm"]
        self.assertGreater(certificate["remaining_guide_length_proved_mm"], candidate)
        self.assertLess(certificate["remaining_guide_length_proved_mm"], rear-front)
        self.assertLess(certificate["latched_full_section_lead_max_x_mm"], front)
        self.assertLess(certificate["full_section_lead_max_x_mm"], rear-candidate)
        result = risks.bounded_fit()
        self.assertGreater(result["continuous_pitch_yaw_abs_bound_deg"],
                           result["latched_pitch_yaw_abs_bound_deg"])
        with self.assertRaises(ValueError):
            motion_guide_certificate(p, dict(p.FIT_BOUNDS, remaining_guide_length_min_mm=rear-front))
        old_window = risks.bounded_fit(dict(p.FIT_BOUNDS, release_error_deg=(0, 20)))
        self.assertFalse(old_window["rigid_kinematic_bounds_pass"])
        self.assertLess(old_window["minima"]["spare_after_clearance_mm"], 1.0)

    def test_independent_section_geometry_rejects_excess_pure_tilt_and_roll(self):
        widths, aperture = (4.9, 4.9), (5.4, 5.4)
        for length in (15.8, 11.5):
            angle = guide_angle(dict(p.FIT_BOUNDS, guide_length_min_mm=length))
            for sign in (-1, 1):
                for angles in ((sign*angle, 0, 0), (0, sign*angle, 0)):
                    self.assertTrue(section_samples_fit_relief_superset(widths, aperture, angles, length=length))
                    self.assertFalse(section_samples_fit_relief_superset(
                        widths, aperture, tuple(1.01*a for a in angles), length=length))
                roll = math.asin(aperture[0]/(widths[0]*math.sqrt(2)))-math.pi/4
                self.assertTrue(section_samples_fit_relief_superset(widths, aperture, (0, 0, sign*roll), length=length))
                self.assertFalse(section_samples_fit_relief_superset(widths, aperture, (0, 0, sign*roll*1.01), length=length))

    def test_relief_can_accept_a_corner_outside_the_plain_rectangle(self):
        # Rejecting a pose only because its rectangular bounding box clips the
        # guide would incorrectly discard this small, feasible neck excursion.
        roll = math.radians(1)
        span = 5*(math.cos(roll)+math.sin(roll))
        center_y = (5.4-span)/2+0.0005
        self.assertGreater(span+2*center_y, 5.4)
        self.assertTrue(section_samples_fit_relief_superset(
            (5, 5), (5.4, 5.4), (0, 0, roll), (center_y, -0.1)))

    def test_geometric_pose_search_and_rotated_yoke_contacts_stay_inside_bound(self):
        # A reproducible stress test, not a manufacturing probability or the
        # proof of the continuous bound. The analytic proof is documented.
        rng = random.Random(20491)
        b = p.FIT_BOUNDS
        accepted = []
        for _ in range(12000):
            length = rng.choice((15.8, 11.5))
            bound = guide_angle(dict(b, guide_length_min_mm=length))
            widths = tuple(rng.choice((4.9, 5.0, 5.1)) for _ in range(2))
            aperture = tuple(w+rng.choice((0.3, 0.4, 0.5)) for w in widths)
            angles = (rng.uniform(-1.18*bound, 1.18*bound),
                      rng.uniform(-1.18*bound, 1.18*bound),
                      rng.uniform(-math.radians(10), math.radians(10)))
            center = (rng.uniform(-0.1, 0.1), rng.uniform(-0.1, 0.1))
            if not section_samples_fit_relief_superset(widths, aperture, angles, center, length=length):
                continue
            pitch, yaw, roll = angles
            self.assertLessEqual(abs(pitch), bound+1e-10)
            self.assertLessEqual(abs(yaw), bound+1e-10)
            for span in (widths[0]*abs(math.cos(roll))+widths[1]*abs(math.sin(roll)),
                         widths[0]*abs(math.sin(roll))+widths[1]*abs(math.cos(roll))):
                self.assertLessEqual(span, corner_span(b, bound)+1e-10)
            accepted.append((length, widths, angles, center))
        self.assertGreater(len(accepted), 100)
        self.assertLess(len(accepted), 1000)

        # Solve actual 3D contact coordinates at either Y face of the rolled
        # raised yoke, then transform all four tip corners. This uses the full
        # rotation matrix, not contact_envelope's scalar enclosure.
        for guide_length, widths, angles, center in accepted[:100]:
            bound = guide_angle(dict(b, guide_length_min_mm=guide_length))
            rotation = rotation_matrix(*angles)
            matrix = rotation[np.ix_((0, 2), (0, 2))]
            for alpha in (40, 42, 177, 180, 183):
                radius, shaft_dx, length = 5.5, 0.1, risks.L_PIN_TIP+0.1
                xp = p.SHAFT_X+shaft_dx+radius*math.cos(math.radians(alpha))
                zp = p.SHAFT_Z+radius*math.sin(math.radians(alpha))
                xc = b["guide_interval_x_mm"][1]-guide_length/2
                lower, upper = tip_interval(p, b, bound, radius, shaft_dx, alpha, length)
                for datum, contact_y in product((-0.2, 0.2), (-widths[0]/2, widths[0]/2)):
                    contact = np.linalg.solve(matrix,
                        np.array((xp-xc, zp-p.ZK-center[1]-datum))
                        - rotation[(0, 2), 1]*contact_y)
                    for y, z, play in product((-widths[0]/2, widths[0]/2),
                                              (-widths[1]/2, widths[1]/2), (-0.25, 0.25)):
                        actual_x = xc+(rotation @ np.array((contact[0]-length+play, y, z)))[0]
                        self.assertGreaterEqual(actual_x, lower-1e-10)
                        self.assertLessEqual(actual_x, upper+1e-10)


if __name__ == "__main__":
    unittest.main()
