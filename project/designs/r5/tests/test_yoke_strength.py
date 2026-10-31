"""Independent load-path regressions for the assembly-entry yoke."""
import sys
import unittest
from pathlib import Path
from types import SimpleNamespace

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "analysis")]
import params
import yoke_strength as ys


def fixture(**changes):
    # Declared geometry fixture, not measured manufacturing evidence. The real
    # runtime check calls assess() against the installed geometry/fit parameters.
    values = dict(vars(params))
    values.update(YK=40.2, SPLINE_TOP_Y=34.5, SHAFT_X=40.4, SHAFT_Z=6.5,
                  CRANK_R=5.4, CRANK_R_MAX=5.5, PIN_D=4.0, PIN_SLOT=4.4,
                  TIP_LATCHED_X=5.7, HORN_GROOVE_ENABLED=False,
                  HORN_GROOVE_Y_CLEAR=1.6, HORN_GROOVE_Z_CLEAR=2.2,
                  FIT_DATUM_ERROR=0.1, YOKE_MIN_BREADTH=4.9,
                  YOKE_LEFT_WALL=3.5, YOKE_RIGHT_WALL=3.0, YOKE_TOP_WALL=2.4,
                  FIT_BOUNDS=dict(params.FIT_BOUNDS, horn_r=(5.3, 5.5), keeper_width_mm=(4.9, 5.1)))
    values.update(changes)
    return SimpleNamespace(**values)


class YokeSectionTests(unittest.TestCase):
    def test_installed_geometry_when_pin_joint_stack_is_present(self):
        if not hasattr(params, "YOKE_LEFT_WALL"):
            self.skipTest("requires the companion pin-joint geometry commit")
        report = ys.assess()
        self.assertTrue(report["service_section_screen_pass"])
        self.assertTrue(report["prescribed_closing_jam_section_screen_pass"])

    def test_reinforced_sections_carry_service_and_prescribed_closing_jam(self):
        report = ys.assess(fixture())
        self.assertAlmostEqual(report["service_withdrawal"]["keeper_drag_N"],
                               2*params.MU*params.P_DESIGN*(1+params.REACTION_RATIO))
        self.assertTrue(report["service_section_screen_pass"])
        self.assertTrue(report["prescribed_closing_jam_section_screen_pass"])
        self.assertGreaterEqual(report["prescribed_closing_jam"]["principal_section_bound_MPa"],
                                report["prescribed_closing_jam"]["normal_bound_MPa"])

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
