"""P5 local bench pulser; no radio, aircraft bus, or release-state sensing.

Inputs are debounced button LEVELS (True = pressed), not command messages.
The caller supplies monotonically increasing elapsed milliseconds, starting at
zero. A fresh ARM press and release is the operator's inspection/temperature
confirmation. The controller cannot measure those conditions.
"""


class Button:
    """Debounce one normally-open button; seed with its actual boot level."""
    def __init__(self, pressed, now=0, debounce_ms=20):
        self.value = self.candidate = bool(pressed)
        self.since = now
        self.debounce_ms = debounce_ms

    def update(self, now, pressed):
        pressed = bool(pressed)
        if pressed != self.candidate:
            self.candidate = pressed
            self.since = now
        if now - self.since >= self.debounce_ms:
            self.value = self.candidate
        return self.value


class Controller:
    def __init__(self, pulse_ms=250, cooldown_ms=10000,
                 armed_timeout_ms=10000, release_dwell_ms=100,
                 max_active_poll_gap_ms=50):
        if not 0 < pulse_ms <= 250:
            raise ValueError("Development pulse must be 1..250 ms")
        if cooldown_ms < 10000:
            raise ValueError("Development cooldown must be at least 10000 ms")
        if min(armed_timeout_ms, release_dwell_ms, max_active_poll_gap_ms) <= 0:
            raise ValueError("Timing settings must be positive")
        self.pulse_ms = pulse_ms
        self.cooldown_ms = cooldown_ms
        self.armed_timeout_ms = armed_timeout_ms
        self.release_dwell_ms = release_dwell_ms
        self.max_active_poll_gap_ms = max_active_poll_gap_ms
        self.state = "WAIT_READY"
        self.reason = "Startup lockout; release both buttons and inspect"
        self.ready_after = cooldown_ms
        self.idle_since = None
        self.last_now = None
        self.arm_previous = self.fire_previous = False
        self.pulse_end = self.armed_until = 0
        self.drive = 0
        self.pulse_count = 0

    def fault(self, reason):
        self.drive = 0
        self.state = "FAULT"
        self.reason = reason + "; disconnect coil supply, inspect, restart controller"
        return 0

    def wait_ready(self, now, reason, cooldown=False):
        self.drive = 0
        self.state = "WAIT_READY"
        self.ready_after = now + (self.cooldown_ms if cooldown else 0)
        self.idle_since = None
        self.reason = reason

    def step(self, now, arm=False, fire=False):
        """Return 0/1 for the coil command. FAULT latches until a restart."""
        self.drive = 0
        if self.state == "FAULT":
            return 0
        if self.last_now is not None:
            if now < self.last_now:
                return self.fault("Non-monotonic controller clock")
            if (self.state == "PULSING" and
                    now - self.last_now > self.max_active_poll_gap_ms):
                return self.fault("Active loop stalled; pulse timing unverified")
        self.last_now = now
        arm, fire = bool(arm), bool(fire)
        arm_rise = arm and not self.arm_previous
        arm_fall = not arm and self.arm_previous
        fire_rise = fire and not self.fire_previous
        self.arm_previous, self.fire_previous = arm, fire
        if arm and fire:
            return self.fault("Both buttons pressed")

        if self.state == "PULSING":
            if arm:
                return self.fault("ARM button aborted active pulse")
            if now >= self.pulse_end:
                self.wait_ready(now, "Pulse ended; unlock and departure unverified", True)
            else:
                self.drive = 1
            # FIRE activity never extends the pulse or queues another pulse.
        elif self.state == "WAIT_READY":
            if arm or fire:
                self.idle_since = None
            elif self.idle_since is None:
                self.idle_since = now
            if (self.idle_since is not None and now >= self.ready_after and
                    now - self.idle_since >= self.release_dwell_ms):
                self.state = "DISARMED"
                self.reason = "Inspect keeper and measure coil temperature before ARM"
        elif self.state == "DISARMED":
            if arm_rise and not fire:
                self.state = "ARM_PENDING"
                self.reason = "Release ARM; FIRE must remain released"
        elif self.state == "ARM_PENDING":
            if fire:
                return self.fault("FIRE pressed before ARM was released")
            if arm_fall:
                self.state = "ARMED"
                self.armed_until = now + self.armed_timeout_ms
                self.reason = "Fresh FIRE press requests one development pulse"
        elif self.state == "ARMED":
            if arm_rise:
                self.wait_ready(now, "ARM cancelled arming")
            elif now >= self.armed_until:
                self.wait_ready(now, "Arming expired; repeat inspection and ARM")
            elif fire_rise:
                self.state = "PULSING"
                self.pulse_end = now + self.pulse_ms
                self.pulse_count += 1
                self.drive = 1
                self.reason = "Coil commanded on; mechanical state is not sensed"
        else:
            return self.fault("Unknown controller state")
        return self.drive
