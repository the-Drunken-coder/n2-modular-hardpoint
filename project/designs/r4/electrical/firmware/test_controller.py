"""State-transition tests; these do not flash hardware or prove servo movement."""
import unittest
from controller_core import Controller
import config


class SequencerTests(unittest.TestCase):
    def test_shipped_configuration_is_inhibited(self):
        self.assertIs(config.CALIBRATED, False)
        c = Controller(config.RETAINED_US, config.RELEASED_US, config.CALIBRATED)
        for t, arm, fire in ((0, False, False), (1000, True, False), (2000, False, True), (30000, True, True)):
            out = c.step(t, arm, fire)
            self.assertFalse(out['power_enable'])
            self.assertFalse(out['signal_enable'])

    def ready(self):
        c = Controller(930, 2095, True)
        c.step(0)
        self.assertEqual(c.step(1000)["state"], "IDLE_OFF")
        return c

    def armed(self):
        c = self.ready()
        c.step(1010, arm=True)
        c.step(1050)
        c.step(1550)
        c.step(1560)
        c.step(1810)
        self.assertEqual(c.state, "ARMED_OFF")
        return c

    def test_uncalibrated_never_energizes(self):
        c = Controller(930, 2095)
        for t in range(0, 20000, 250):
            out = c.step(t, t % 1000 == 0, t % 1000 == 500)
            self.assertFalse(out["power_enable"])
            self.assertFalse(out["signal_enable"])
        self.assertEqual(c.state, "CALIBRATION_REQUIRED")

    def test_held_buttons_at_startup_cannot_arm(self):
        c = Controller(930, 2095, True)
        for t in (0, 1000, 5000):
            self.assertFalse(c.step(t, arm=True, fire=True)["power_enable"])
        c.step(5010)
        self.assertEqual(c.step(5260)["state"], "IDLE_OFF")
        self.assertFalse(c.outputs()["power_enable"])

    def test_prepare_powers_before_signal(self):
        c = self.ready()
        out = c.step(1010, arm=True)
        self.assertTrue(out["power_enable"])
        self.assertFalse(out["signal_enable"])
        self.assertEqual(out["pulse_us"], 930)
        self.assertTrue(c.step(1050)["signal_enable"])
        self.assertFalse(c.step(1550)["power_enable"])

    def test_fire_requires_post_prepare_release(self):
        c = self.ready()
        c.step(1010, arm=True)
        c.step(1050)
        c.step(1550, fire=True)
        self.assertFalse(c.step(1600, fire=True)["power_enable"])
        c.step(1610)
        c.step(1860)
        self.assertEqual(c.step(1870, fire=True)["state"], "RELEASE_POWER")

    def test_exactly_one_release_then_no_automatic_return(self):
        c = self.armed()
        out = c.step(1820, fire=True)
        self.assertEqual(out["state"], "RELEASE_POWER")
        self.assertEqual(out["pulse_us"], 2095)
        self.assertFalse(out["signal_enable"])
        self.assertTrue(c.step(1860, fire=True)["signal_enable"])
        self.assertFalse(c.step(2360, fire=True)["power_enable"])
        for t in (3000, 9000, 20000):
            self.assertFalse(c.step(t, arm=True, fire=True)["power_enable"])
        self.assertEqual(c.command_count, 1)
        self.assertFalse(c.outputs()["physical_position_known"])

    def test_armed_timeout_cannot_fire(self):
        c = self.armed()
        self.assertEqual(c.step(11550, fire=True)["state"], "LOCKOUT_OFF")
        self.assertEqual(c.command_count, 0)

    def test_external_inhibit_latches_off(self):
        c = self.armed()
        c.step(1820, fire=True)
        c.step(1860)
        self.assertEqual(c.step(1870, external_ok=False)["state"], "FAULT_OFF")
        self.assertFalse(c.step(30000, arm=True)["power_enable"])

    def test_nonmonotonic_time_latches_off(self):
        c = self.armed()
        self.assertEqual(c.step(1000)["state"], "FAULT_OFF")

    def test_invalid_calibration_rejected(self):
        for a, b in ((899, 2095), (930, 2101), (930, 1000), (True, 2095), (930.0, 2095)):
            with self.subTest(a=a, b=b), self.assertRaises(ValueError):
                Controller(a, b, True)

    def test_reversed_calibration_is_supported(self):
        c = Controller(2095, 930, True)
        c.step(0)
        c.step(1000)
        self.assertEqual(c.step(1010, arm=True)["pulse_us"], 2095)


if __name__ == "__main__":
    unittest.main()
