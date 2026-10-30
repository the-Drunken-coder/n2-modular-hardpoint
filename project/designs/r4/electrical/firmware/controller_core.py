"""Deterministic, host-testable R4 bench sequencer. No position feedback.

The caller supplies a monotonic millisecond time and debounced button levels.
Outputs are commands only: they must never be used as proof of retention or
separation. There is deliberately no automatic return after a release.
"""


class Controller:
    def __init__(self, retained_us, released_us, calibrated=False):
        for value in (retained_us, released_us):
            if not isinstance(value, int) or isinstance(value, bool) or not 900 <= value <= 2100:
                raise ValueError("Servo calibration must contain integer pulses within 900..2100 us")
        if abs(released_us - retained_us) < 500:
            raise ValueError("Endpoint separation is inconsistent with the R4 long stroke")
        self.retained_us = retained_us
        self.released_us = released_us
        self.calibrated = calibrated is True
        self.state = "BOOT_OFF" if self.calibrated else "CALIBRATION_REQUIRED"
        self.entered_ms = None
        self.last_ms = None
        self.last_arm = False
        self.last_fire = False
        self.quiet_since = None
        self.reason = ""
        self.command_count = 0
        self._fire_ready = False

    def _enter(self, state, now):
        self.state = state
        self.entered_ms = now

    def fault(self, reason, now):
        self.reason = str(reason)
        self._enter("FAULT_OFF", now)

    def step(self, now_ms, arm=False, fire=False, external_ok=True):
        if not isinstance(now_ms, int) or isinstance(now_ms, bool) or now_ms < 0:
            raise ValueError("Use nonnegative monotonic integer milliseconds")
        if self.last_ms is not None and now_ms < self.last_ms:
            self.fault("non-monotonic time", now_ms)
        if self.entered_ms is None:
            self.entered_ms = now_ms
        rising_arm = bool(arm) and not self.last_arm
        rising_fire = bool(fire) and not self.last_fire
        self.last_ms, self.last_arm, self.last_fire = now_ms, bool(arm), bool(fire)
        if not external_ok:
            self.fault("external inhibit", now_ms)
        if arm or fire:
            self.quiet_since = None
        elif self.quiet_since is None:
            self.quiet_since = now_ms
        quiet = self.quiet_since is not None and now_ms - self.quiet_since >= 250
        elapsed = now_ms - self.entered_ms

        if self.state == "BOOT_OFF" and elapsed >= 1000 and quiet:
            self._enter("IDLE_OFF", now_ms)
        elif self.state == "IDLE_OFF" and rising_arm and not fire:
            self._enter("PREPARE_POWER", now_ms)
        elif self.state == "PREPARE_POWER" and elapsed >= 40:
            if fire:
                self.fault("FIRE held during preparation", now_ms)
            else:
                self._enter("PREPARE_MOVE", now_ms)
        elif self.state == "PREPARE_MOVE" and elapsed >= 500:
            self._enter("ARMED_OFF", now_ms)
            self.quiet_since = None
        elif self.state == "ARMED_OFF":
            if elapsed >= 10000:
                self._enter("LOCKOUT_OFF", now_ms)
            elif rising_fire and not arm and self._fire_ready:
                self.command_count += 1
                self._enter("RELEASE_POWER", now_ms)
        elif self.state == "RELEASE_POWER" and elapsed >= 40:
            self._enter("RELEASE_MOVE", now_ms)
        elif self.state == "RELEASE_MOVE" and elapsed >= 500:
            self._enter("LOCKOUT_OFF", now_ms)
        elif self.state == "LOCKOUT_OFF" and elapsed >= 10000 and quiet:
            self._enter("IDLE_OFF", now_ms)

        # Both contacts must have been released for 250 ms after preparation.
        if self.state == "ARMED_OFF" and quiet:
            self._fire_ready = True
        elif self.state != "ARMED_OFF":
            self._fire_ready = False
        return self.outputs()

    def outputs(self):
        preparing = self.state in ("PREPARE_POWER", "PREPARE_MOVE")
        releasing = self.state in ("RELEASE_POWER", "RELEASE_MOVE")
        moving = self.state in ("PREPARE_MOVE", "RELEASE_MOVE")
        return {
            "state": self.state,
            "power_enable": preparing or releasing,
            "signal_enable": moving,
            "pulse_us": self.retained_us if preparing else self.released_us if releasing else 0,
            "logical_armed": self.state == "ARMED_OFF",
            "release_commands": self.command_count,
            "physical_position_known": False,
            "fault": self.reason,
        }
