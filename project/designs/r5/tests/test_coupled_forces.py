"""Independent equilibrium, virtual-work and contact-transition regressions."""
import json
from math import acos, cos, degrees, radians, sin
from pathlib import Path
import sys
from types import SimpleNamespace
import unittest

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT/"analysis")]
from coupled_forces import solve_contact, slot_motion, study


def fixture():
    return SimpleNamespace(SHAFT_X=47.4, SHAFT_Z=6.3, CRANK_R=5.4, TIP_LATCHED_X=5.65,
        PIN_D=4., ZK=8., YK=40.2, GUIDE_PATCH_LENGTH=2., TAB_X=(8., 12.), SOCKET_GAP=.4,
        A_RELEASE=40., A_LATCH=180., MU=.35, P_DESIGN=.454*9.80665*2,
        STALL_KGFCM_5V=3.1, WORKING_FRACTION=.5,
        FIT_BOUNDS=dict(horn_r=(5.3, 5.5), servo_dx=(-.1, .1),
            keeper_length_error_mm=(-.1, .1), pin_slot_clearance_total_mm=(.3, .5),
            tab_thickness_error_mm=(-.1, .1), guide_interval_x_mm=(12.5, 34.3),
            keeper_width_mm=(4.9, 5.1), guide_clearance_total_mm=(.3, .5),
            relative_guide_shaft_z_error_mm=.2, tip_chamfer_mm=.5,
            release_error_deg=(0., 2.), latch_error_deg=(-3., 3.)))


class CoupledForceTests(unittest.TestCase):
    def test_full_equilibrium_recovers_the_force_missing_from_payload_only_drag(self):
        p = fixture()
        z = 6.3+5.5*sin(radians(183))
        points = [[37.2, 0, z], [13.4, 0, 5.5], [27.4, 0, 10.5], [10., 0, 10.5]]
        result = solve_contact(points, (1, -1), .35, .35, p.P_DESIGN, 1)
        self.assertAlmostEqual(result["force_x_N"], 13.10151407706065, places=10)
        self.assertAlmostEqual(result["force_x_N"], .35*(p.P_DESIGN+
            result["front_normal_N"]+result["rear_normal_N"]), places=10)
        self.assertLess(result["force_residual_N"], 1e-10)
        self.assertLess(result["moment_residual_Nmm"], 1e-10)
        old = .35*p.P_DESIGN*2*(1+3.4/14)
        self.assertGreater(result["force_x_N"], 1.6*old)
        self.assertIsNone(solve_contact(points, (-1, -1), .35, .35, p.P_DESIGN, 1))

    def test_clamped_sleeve_reversal_includes_spin_and_is_not_at_90_degrees(self):
        angle = degrees(acos(-2/5.4))
        self.assertGreater(angle, 111.)
        self.assertLess(angle, 112.)
        self.assertGreater(slot_motion(5.4, angle+.01, 2., .35)[1], 0)
        self.assertLess(slot_motion(5.4, angle-.01, 2., .35)[1], 0)
        self.assertEqual(slot_motion(5.4, 90, 2., .35)[2], -.35)
        self.assertEqual(slot_motion(5.4, 183, 2., .35)[0], -1)

    def test_actuator_moment_matches_translation_and_contact_dissipation(self):
        force, radius, sleeve, mu = 12., 5.4, 2., .35
        for angle in (40., 90., 120., 177., 183.):
            for omega in (-1, 1):
                direction, relative_vz, k, arm = slot_motion(radius, angle, sleeve, mu, omega)
                a = radians(angle)
                x, z = radius*cos(a)+direction*sleeve, radius*sin(a)
                # The actuator counters the sleeve reaction; compare its
                # positive power with horizontal work plus sliding dissipation.
                moment = x*(k*force)-z*(direction*force)
                work = force*abs(-omega*radius*sin(a))+mu*force*abs(relative_vz)
                self.assertAlmostEqual(moment*omega, work, places=10)
                self.assertAlmostEqual(force*arm, work, places=10)

    def test_selected_geometry_passes_and_old_guide_fails_same_torque_requirement(self):
        p = fixture()
        current = study(p, include_states=False)
        self.assertTrue(current["finite_sliding_solution"])
        self.assertGreater(current["working_torque_ratio"], 3.)
        self.assertLess(current["working_torque_ratio"], 3.1)
        p.SHAFT_X -= 7
        p.FIT_BOUNDS = dict(p.FIT_BOUNDS, guide_interval_x_mm=(12.5, 28.3))
        old = study(p, include_states=False)
        self.assertLess(old["working_torque_ratio"], 3.)

    def test_load_scaling_and_lowest_opening_pose_are_consistent(self):
        p = fixture()
        one = study(p, include_states=False)
        two = study(p, load=2*p.P_DESIGN, include_states=False)
        self.assertAlmostEqual(two["required_torque_Nmm"], 2*one["required_torque_Nmm"])
        self.assertAlmostEqual(two["max_opening_force"]["force_x_N"], 2*one["max_opening_force"]["force_x_N"])
        force = one["max_opening_force"]
        self.assertEqual(force["alpha_deg"], 180.)
        self.assertAlmostEqual(force["sleeve_application_point_mm"][2],
                               p.SHAFT_Z-p.FIT_BOUNDS["relative_guide_shaft_z_error_mm"])
        self.assertGreater(force["sleeve_force_N"][2], 0)

    def test_contact_modes_load_removal_and_free_body_audits(self):
        p = fixture()
        result = study(p)
        self.assertIn([1, -1], [r["guide_vertical_signs"] for r in result["states"]])
        self.assertIn([1, 1], [r["guide_vertical_signs"] for r in result["states"]])
        for state in result["states"]:
            self.assertLess(state["tip_x_mm"], state["tab_near_face_x_mm"])
            self.assertGreaterEqual(min(state["front_normal_N"], state["rear_normal_N"]), -1e-8)
            self.assertLess(state["moment_residual_Nmm"], 1e-8)
        self.assertGreater(min(r["alpha_deg"] for r in result["states"]), p.A_RELEASE)
        json.dumps(result, allow_nan=False)

    def test_unresolved_sliding_mode_withholds_torque_instead_of_partial_pass(self):
        result = study(fixture(), mu=.6)
        self.assertFalse(result["finite_sliding_solution"])
        self.assertEqual(result["working_torque_ratio"], 0.)
        self.assertIsNone(result["required_torque_Nmm"])
        self.assertIsNone(result["max_torque"])
        json.dumps(result, allow_nan=False)

    def test_changed_dimensions_cannot_silently_reuse_the_tab_height_enclosure(self):
        p = fixture()
        p.FIT_BOUNDS = dict(p.FIT_BOUNDS, keeper_width_mm=(4.8, 5.1))
        with self.assertRaisesRegex(ValueError, "re-derive the tab-height enclosure"):
            study(p)


if __name__ == "__main__":
    unittest.main()
