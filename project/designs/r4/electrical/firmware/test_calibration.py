import unittest
from calibration_core import parse_command, pulse_once


class FakeIO:
    def __init__(self):
        self.events = []

    def apply(self, power, signal, pulse):
        self.events.append((power, signal, pulse))


class CalibrationTests(unittest.TestCase):
    def test_one_shot_order_and_duration(self):
        io = FakeIO()
        waits = []
        pulse_once(930, io, waits.append)
        self.assertEqual(waits, [40, 500])
        self.assertEqual(io.events, [(False, False, 0), (True, False, 0), (True, True, 930), (False, False, 0)])

    def test_exception_after_power_on_requests_off(self):
        io = FakeIO()
        def interrupted(_):
            raise KeyboardInterrupt()
        with self.assertRaises(KeyboardInterrupt):
            pulse_once(1500, io, interrupted)
        self.assertEqual(io.events[-1], (False, False, 0))
        self.assertNotIn((True, True, 1500), io.events)

    def test_exception_during_motion_requests_off(self):
        io = FakeIO()
        def interrupted(duration):
            if duration == 500:
                raise RuntimeError("button interrupt")
        with self.assertRaises(RuntimeError):
            pulse_once(1500, io, interrupted)
        self.assertEqual(io.events[-1], (False, False, 0))

    def test_invalid_pulse_never_energizes(self):
        for value in (899, 2101, True, 1500.5, "1500"):
            io = FakeIO()
            with self.assertRaises(ValueError):
                pulse_once(value, io, lambda _: None)
            self.assertEqual(io.events, [(False, False, 0)])

    def test_explicit_command_and_increment_bound(self):
        self.assertEqual(parse_command("pulse 930"), 930)
        self.assertEqual(parse_command("pulse 955", 930), 955)
        for command in ("1500", "pulse 1500.0", "pulse 930 extra", "sweep", "pulse 899"):
            with self.assertRaises(ValueError):
                parse_command(command)
        with self.assertRaises(ValueError):
            parse_command("pulse 956", 930)


if __name__ == "__main__":
    unittest.main()
