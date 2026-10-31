"""Behavior tests; none of the fixture values is a measured servo calibration."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "electronics"))
sys.path.insert(0, str(ROOT / "analysis"))
from bench_core import Controller, valid_calibration
from bench_config import CALIBRATION
import risks


def fixture():
    return dict(CALIBRATION, servo_id="TEST FIXTURE ONLY", latched_us=1100,
                released_us=1900, measured_open_clearance_mm=1.0,
                measured_full_section_overlap_mm=1.0,
                signal_verified_5v=True, operator_accepted=True)


class BenchControlTests(unittest.TestCase):
    def test_shipped_profile_cannot_move(self):
        c = Controller(CALIBRATION)
        for command in ("HOLD", "ARM", "RELEASE", "LATCH"):
            self.assertIn("REFUSED", c.command(command, 0))
            self.assertIsNone(c.pulse_us)

    def test_no_auto_movement_at_boot_and_no_release_without_arm(self):
        c = Controller(fixture())
        self.assertIsNone(c.tick(0))
        self.assertIn("REFUSED", c.command("RELEASE", 0))
        c.command("HOLD", 0)
        self.assertEqual(c.pulse_us, 1100)
        self.assertIn("REFUSED", c.command("RELEASE", 0))
        self.assertEqual(c.pulse_us, 1100)

    def test_expired_arm_cannot_release(self):
        c = Controller(fixture(), arm_window_ms=100)
        c.command("HOLD", 0)
        c.command("ARM", 0)
        self.assertIn("REFUSED", c.command("RELEASE", 100))
        self.assertEqual(c.pulse_us, 1100)

    def test_release_holds_open_until_explicit_relatch(self):
        c = Controller(fixture())
        c.command("HOLD", 0)
        c.command("ARM", 5)
        c.command("RELEASE", 10)
        for now in range(15, 10000, 5):
            self.assertEqual(c.tick(now), 1900)
        self.assertIn("REFUSED", c.command("RELEASE", 10000))
        self.assertEqual(c.pulse_us, 1900)
        c.command("LATCH", 10000)
        self.assertEqual(c.pulse_us, 1100)
        c.command("STOP", 10000)
        self.assertIsNone(c.pulse_us)

    def test_loop_fault_and_backwards_clock_remove_pwm(self):
        for end in (251, -1):
            c = Controller(fixture())
            c.command("HOLD", 0)
            self.assertIsNone(c.tick(end))
            self.assertEqual(c.state, "FAULT")
            self.assertIn("FAULT", c.command("ARM", end))

    def test_invalid_endpoints_are_rejected_not_clipped(self):
        for changes in ({"released_us": 2400}, {"latched_us": 1900},
                        {"min_us": True}, {"signal_verified_5v": False},
                        {"measured_open_clearance_mm": 0.49},
                        {"measured_full_section_overlap_mm": 0.49}):
            self.assertFalse(valid_calibration(dict(fixture(), **changes)))

    def test_subminimum_voltage_is_never_extrapolated_into_a_pass(self):
        for v in (4.4, 4.6, 4.8):
            with self.assertRaises(ValueError):
                risks.stall_nmm(v)
        for row in risks.derating():
            if row["volts"] < 5.0:
                self.assertIsNone(row["margin_working"])
                self.assertFalse(row["supported_by_torque_points"])


if __name__ == "__main__":
    unittest.main()
