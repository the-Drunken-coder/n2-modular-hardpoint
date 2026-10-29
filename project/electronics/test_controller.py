"""Functional scenarios: python -m unittest -v test_controller.py

Exercises decisions that could cause an unwanted or extended coil pulse.
Inputs to Controller are debounced levels; Button has a separate bounce test.
This executes on a host computer, not on a Pico or physical hardpoint.
"""
import unittest
from controller_core import Button, Controller


class Rig:
    def __init__(self, arm=False, fire=False):
        self.c = Controller()
        self.now = 0
        self.c.step(0, arm, fire)

    def step(self, dt=5, arm=False, fire=False):
        self.now += dt
        return self.c.step(self.now, arm, fire)

    def ready(self):
        self.step(10000)
        return self

    def arm(self):
        self.step(5, arm=True)
        self.step(5)

    def fire(self):
        return self.step(5, fire=True)

    def finish_pulse(self, hold_fire=False):
        for _ in range(50):
            self.step(5, fire=hold_fire)


class BenchScenarios(unittest.TestCase):
    def test_boot_and_held_fire_never_energize(self):
        r = Rig(fire=True)
        for _ in range(4000):
            self.assertEqual(r.step(5, fire=True), 0)
        self.assertEqual(r.c.state, "WAIT_READY")
        r.step(5)
        r.step(100)
        self.assertEqual(r.c.state, "DISARMED")
        self.assertEqual(r.fire(), 0)
        self.assertEqual(r.c.pulse_count, 0)

    def test_held_arm_at_boot_does_not_arm(self):
        r = Rig(arm=True)
        r.step(15000, arm=True)
        r.step(5)
        r.step(100)
        self.assertEqual(r.c.state, "DISARMED")
        self.assertEqual(r.fire(), 0)

    def test_fresh_arm_release_then_one_pulse(self):
        r = Rig().ready()
        r.arm()
        self.assertEqual(r.c.state, "ARMED")
        self.assertEqual(r.fire(), 1)
        r.finish_pulse(hold_fire=True)
        self.assertEqual(r.c.drive, 0)
        self.assertEqual(r.c.pulse_count, 1)
        self.assertEqual(r.c.state, "WAIT_READY")

    def test_fire_bounce_does_not_extend_or_queue_pulse(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        stop = r.c.pulse_end
        for i in range(50):
            r.step(5, fire=bool(i % 2))
            self.assertEqual(r.c.pulse_end, stop)
        self.assertEqual(r.c.drive, 0)
        self.assertEqual(r.c.pulse_count, 1)

    def test_cooldown_starts_when_pulse_turns_off(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        r.finish_pulse()
        off = r.now
        self.assertEqual(r.c.ready_after, off + 10000)
        r.step(9990, arm=True)
        r.step(20, arm=True)
        self.assertEqual(r.c.state, "WAIT_READY")
        r.step(5)
        r.step(100)
        self.assertEqual(r.c.state, "DISARMED")
        self.assertEqual(r.fire(), 0)
        r.step(5)
        r.arm()
        self.assertEqual(r.fire(), 1)
        self.assertEqual(r.c.pulse_count, 2)

    def test_held_fire_cannot_restart_after_cooldown(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        r.finish_pulse(hold_fire=True)
        r.step(20000, fire=True)
        self.assertEqual(r.c.state, "WAIT_READY")
        self.assertEqual(r.c.drive, 0)
        self.assertEqual(r.c.pulse_count, 1)

    def test_arm_again_cancels_armed_state(self):
        r = Rig().ready()
        r.arm()
        r.step(5, arm=True)
        self.assertEqual(r.c.state, "WAIT_READY")
        r.step(5)
        r.step(100)
        self.assertEqual(r.fire(), 0)

    def test_arming_expires_without_a_pulse(self):
        r = Rig().ready()
        r.arm()
        r.step(10000, fire=True)
        self.assertEqual(r.c.drive, 0)
        self.assertEqual(r.c.state, "WAIT_READY")
        self.assertEqual(r.c.pulse_count, 0)

    def test_both_buttons_latch_fault_and_no_button_recovers(self):
        r = Rig().ready()
        r.arm()
        self.assertEqual(r.step(5, arm=True, fire=True), 0)
        self.assertEqual(r.c.state, "FAULT")
        r.step(20000)
        r.arm()
        self.assertEqual(r.fire(), 0)
        self.assertEqual(r.c.pulse_count, 0)

    def test_arm_aborts_a_pulse(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        r.step(5)
        self.assertEqual(r.step(5, arm=True), 0)
        self.assertEqual(r.c.state, "FAULT")

    def test_early_fire_during_arm_cycle_faults(self):
        r = Rig().ready()
        r.step(5, arm=True)
        self.assertEqual(r.step(5, fire=True), 0)
        self.assertEqual(r.c.state, "FAULT")

    def test_active_loop_stall_turns_off_and_latches_fault(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        self.assertEqual(r.step(60), 0)
        self.assertEqual(r.c.state, "FAULT")

    def test_backwards_time_faults(self):
        r = Rig().ready()
        r.arm()
        self.assertEqual(r.c.step(0), 0)
        self.assertEqual(r.c.state, "FAULT")

    def test_restart_has_new_lockout_and_no_remembered_arming(self):
        r = Rig().ready()
        r.arm()
        r.fire()
        r2 = Rig(fire=True)
        self.assertEqual(r2.step(9999, fire=True), 0)
        self.assertEqual(r2.c.state, "WAIT_READY")
        self.assertEqual(r2.c.pulse_count, 0)

    def test_short_button_chatter_does_not_create_stable_press(self):
        b = Button(False)
        for t, raw in [(5, True), (10, False), (15, True), (20, False)]:
            self.assertFalse(b.update(t, raw))
        self.assertFalse(b.update(30, True))
        self.assertFalse(b.update(49, True))
        self.assertTrue(b.update(50, True))
        self.assertTrue(b.update(55, False))
        self.assertFalse(b.update(75, False))

    def test_invalid_development_limits_rejected(self):
        with self.assertRaises(ValueError):
            Controller(pulse_ms=251)
        with self.assertRaises(ValueError):
            Controller(cooldown_ms=9999)


if __name__ == "__main__":
    unittest.main(verbosity=2)
