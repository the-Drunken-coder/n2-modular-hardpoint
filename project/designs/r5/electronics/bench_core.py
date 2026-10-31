"""Small hardware-independent manual bench command state machine.

This is not aircraft firmware. It cannot sense a jam, payload departure,
voltage, current, or actual position. ``pulse_us`` is the requested waveform.
"""


def valid_calibration(c):
    try:
        ints = (c["min_us"], c["max_us"], c["latched_us"], c["released_us"])
        if not all(type(x) is int for x in ints):
            return False
        lo, hi, latch, release = ints
        return (750 <= lo < hi <= 2250 and lo <= latch <= hi and lo <= release <= hi
                and latch != release and bool(c["servo_id"])
                and c["geometry_revision"] == "R5"
                and c["measured_open_clearance_mm"] >= 0.5
                and c["measured_full_section_overlap_mm"] >= 0.5
                and c["signal_verified_5v"] is True and c["operator_accepted"] is True)
    except (KeyError, TypeError, ValueError):
        return False


class Controller:
    def __init__(self, calibration, arm_window_ms=5000, max_loop_gap_ms=250):
        self.cal = dict(calibration)
        self.calibrated = valid_calibration(self.cal)
        self.arm_window_ms = arm_window_ms
        self.max_loop_gap_ms = max_loop_gap_ms
        self.state = "OFF"
        self.pulse_us = None
        self.last_ms = None
        self.armed_until = 0

    def fault(self):
        self.state, self.pulse_us = "FAULT", None

    def tick(self, now_ms):
        if self.last_ms is not None:
            delta = now_ms - self.last_ms
            if delta < 0 or (self.pulse_us is not None and delta > self.max_loop_gap_ms):
                self.fault()
        self.last_ms = now_ms
        if self.state == "ARMED" and now_ms >= self.armed_until:
            self.state = "LATCHED"  # expire permission, retain the same pulse
        return self.pulse_us

    def command(self, text, now_ms):
        self.tick(now_ms)
        cmd = text.strip().upper()
        if cmd == "STOP":
            self.state, self.pulse_us = "OFF", None
            return "PWM OFF; support payload; signal-loss response is not assured"
        if cmd == "STATUS":
            return self.state
        if self.state == "FAULT":
            return "FAULT: STOP and inspect before restarting"
        if not self.calibrated:
            return "REFUSED: individual endpoint/fit calibration is incomplete"
        if cmd == "HOLD" and self.state == "OFF":
            self.state, self.pulse_us = "LATCHED", self.cal["latched_us"]
        elif cmd == "ARM" and self.state == "LATCHED":
            self.state, self.armed_until = "ARMED", now_ms + self.arm_window_ms
        elif cmd == "RELEASE" and self.state == "ARMED":
            self.state, self.pulse_us = "RELEASED", self.cal["released_us"]
        elif cmd == "LATCH" and self.state == "RELEASED":
            self.state, self.pulse_us = "LATCHED", self.cal["latched_us"]
        else:
            return "REFUSED: invalid command or state"
        return self.state
