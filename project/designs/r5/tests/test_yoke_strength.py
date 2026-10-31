"""Independent load-path regressions for the assembly-entry yoke."""
import sys
import unittest
from itertools import product
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "analysis")]
import params
import yoke_strength as ys


def fixture(**changes):
    # Declared geometry fixture, not measured manufacturing evidence. The real
    # runtime check calls assess() against the installed geometry/fit parameters.
    values = dict(vars(params))
    values.update(YK=40.2, SPLINE_TOP_Y=34.4, SHAFT_X=47.4, SHAFT_Z=6.3,
                  CRANK_R=5.4, CRANK_R_MAX=5.5, PIN_D=4.0, PIN_SLOT=4.4,
                  TIP_LATCHED_X=5.65, HORN_GROOVE_ENABLED=False,
                  TUNNEL_X=(12.4, 34.4), GUIDE_PATCH_X=(13.4, 33.4),
                  REACTION_RATIO=3.4/20, FIT_DATUM_ERROR=0.1,
                  FIT_SURFACE_ERROR=0.1, YOKE_MIN_BREADTH=4.9,
                  YOKE_LEFT_WALL=3.5, YOKE_RIGHT_WALL=3.0, YOKE_TOP_WALL=2.4,
                  YOKE_BRIDGE_EXTRA_Y=3.0, YOKE_BRIDGE_MIN_BREADTH=7.9,
                  YOKE_BRIDGE_MAX_BREADTH=8.1, YOKE_BRIDGE_FILLET=0.8,
                  YOKE_SLOT_TOP_EXTRA=0.8,
                  FIT_BOUNDS=dict(params.FIT_BOUNDS, horn_r=(5.3, 5.5),
                      guide_interval_x_mm=(12.5, 34.3), guide_length_min_mm=21.8,
                      remaining_guide_length_min_mm=17.5, keeper_width_mm=(4.9, 5.1)))
    values.update(changes)
    return SimpleNamespace(**values)


class YokeSectionTests(unittest.TestCase):
    def test_installed_geometry_when_pin_joint_stack_is_present(self):
        if not hasattr(params, "YOKE_BRIDGE_MAX_BREADTH"):
            self.skipTest("requires the companion widened-bridge geometry commit")
        report = ys.assess()
        self.assertTrue(report["service_section_screen_pass"])
        self.assertTrue(report["prescribed_closing_jam_section_screen_pass"])

    def test_reinforced_sections_carry_service_and_prescribed_closing_jam(self):
        from coupled_forces import study
        p = fixture()
        report = ys.assess(p)
        force_model = study(p, include_states=False)
        self.assertAlmostEqual(report["service_withdrawal"]["keeper_drag_N"],
                               force_model["max_opening_force"]["force_x_N"])
        # This regression would fail if the old payload-only guide reactions
        # were reintroduced while the pin friction was merely added afterward.
        self.assertGreater(report["service_withdrawal"]["keeper_drag_N"],
                           1.5*2*p.MU*p.P_DESIGN*(1+p.REACTION_RATIO))
        self.assertTrue(report["service_section_screen_pass"])
        self.assertTrue(report["prescribed_closing_jam_section_screen_pass"])
        self.assertIn("receiving_left_wall", report["service_withdrawal"])
        self.assertIn("bar_root", report["service_withdrawal"])
        self.assertIn("bar_root", report["prescribed_closing_jam"])
        self.assertGreaterEqual(report["prescribed_closing_jam"]["left_wall"]["principal_section_bound_MPa"],
                                report["prescribed_closing_jam"]["left_wall"]["normal_bound_MPa"])

    def test_shifted_bridge_centroid_and_edge_load_are_preserved(self):
        p = fixture()
        g = ys.section_geometry(p)
        self.assertAlmostEqual(g["bridge_centroid_y_nominal_mm"], 41.7)
        self.assertAlmostEqual(g["bridge_centroid_shift_y_mm"], 1.5)
        self.assertAlmostEqual(g["bridge_contact_eccentricity_y_mm"], 4.15)
        self.assertAlmostEqual(g["wall_contact_eccentricity_y_mm"], 2.65)
        self.assertAlmostEqual(g["slot_top_z_mm"], 14.8)
        self.assertAlmostEqual(g["underside_blend_start_z_mm"], 14.0)

    def test_cap_width_does_not_widen_the_receiving_wall_or_bar_root(self):
        base = ys.assess(fixture())["service_withdrawal"]
        wider = ys.assess(fixture(YOKE_BRIDGE_EXTRA_Y=5.0,
                                  YOKE_BRIDGE_MIN_BREADTH=9.9,
                                  YOKE_BRIDGE_MAX_BREADTH=10.1))["service_withdrawal"]
        self.assertLess(wider["bridge"]["principal_section_bound_MPa"],
                        base["bridge"]["principal_section_bound_MPa"])
        for name in ("right_wall", "receiving_left_wall", "bar_root"):
            self.assertEqual(wider[name], base[name])

    def test_bar_root_normal_stress_matches_independent_force_moment_section(self):
        p = fixture()
        g = ys.section_geometry(p)
        fx, fz = 10.0, 3.0
        section = ys.bar_root_screen(p, g, fx, fz, (7.0, 7.0), opening=True)
        # Force at an adverse corner: M = r cross F. Compute normal stress at
        # all four section corners from second moments, independently of the
        # implementation's section-modulus sum. The X arm includes the slot
        # AND the full left wall before the load reaches the keeper bar.
        rx, ry, rz = 4.5+3.5+0.2, 2.65, -1.1
        my, mz = rz*fx-rx*fz, -ry*fx
        b, h = 4.9, 4.9
        iy, iz = b*h**3/12, h*b**3/12
        maximum = max(fx/(b*h)-my*z/iy+mz*y/iz
                      for y, z in product((-b/2, b/2), (-h/2, h/2)))
        self.assertAlmostEqual(section["normal_bound_MPa"], maximum)

    def test_over_center_load_uses_left_wall_path(self):
        report = ys.assess(fixture())
        opening, closing = report["service_withdrawal"], report["service_over_center_closing"]
        self.assertGreater(opening["governing_force_state"]["sleeve_force_N"][0], 0)
        self.assertLess(closing["governing_force_state"]["sleeve_force_N"][0], 0)
        self.assertIn("left_wall", closing)
        self.assertNotIn("right_wall", closing)
        self.assertNotIn("bridge", closing)

    def test_no_finite_force_solution_cannot_publish_a_passing_section_screen(self):
        with patch("coupled_forces.study", return_value={"finite_sliding_solution": False}):
            with self.assertRaisesRegex(ValueError, "finite coupled sliding"):
                ys.assess(fixture())

    def test_changed_relief_or_unbounded_bridge_requires_a_new_screen(self):
        with self.assertRaisesRegex(ValueError, "unrelieved"):
            ys.section_geometry(fixture(HORN_GROOVE_ENABLED=True))
        with self.assertRaisesRegex(ValueError, "bridge dimensions"):
            ys.section_geometry(fixture(YOKE_BRIDGE_MAX_BREADTH=7.8))

    def test_original_open_frame_fails_the_same_allowable(self):
        report = ys.assess(fixture(YOKE_LEFT_WALL=2.0, YOKE_RIGHT_WALL=2.0, YOKE_TOP_WALL=1.5))
        self.assertFalse(report["service_section_screen_pass"])
        self.assertFalse(report["prescribed_closing_jam_section_screen_pass"])

    def test_proof_drag_is_separate_linear_sensitivity(self):
        report = ys.assess(fixture())
        self.assertAlmostEqual(report["proof_drag_sensitivity"]["governing_section_bound_MPa"],
                               2*report["service_withdrawal"]["governing_section_bound_MPa"])
        self.assertIn("does not command release", report["proof_drag_sensitivity"]["note"])

    def test_normal_service_pass_never_becomes_an_unrestricted_stall_claim(self):
        report = ys.assess(fixture())
        self.assertLess(report["finite_90deg_5V_stall_sensitivity"]["margin"], 1)
        self.assertIn("NOT QUALIFIED", report["unrestricted_release_stall_survival"])

    def test_torsion_has_the_known_square_limit_and_orthotropic_symmetry(self):
        self.assertAlmostEqual(ys.rectangular_torsion(1, 1, 1, 1, 1), 4.8038755, places=5)
        self.assertAlmostEqual(ys.rectangular_torsion(4, 3, 5, 700, 1400),
                               ys.rectangular_torsion(4, 5, 3, 1400, 700), places=10)


if __name__ == "__main__":
    unittest.main()
