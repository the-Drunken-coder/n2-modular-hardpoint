"""Explicit one-shot unloaded calibration, independent of normal arm/fire control.

IO and delay functions are injected so host tests can verify output ordering
and cleanup. Software timing is not a hardware current/thermal cutoff.
"""


def parse_command(command, previous_us=None):
    words = command.strip().split()
    if len(words) != 2 or words[0] != "pulse" or not words[1].isdigit():
        raise ValueError("Use: pulse <integer microseconds>, or quit")
    pulse_us = int(words[1])
    validate_pulse(pulse_us)
    if previous_us is not None and abs(pulse_us - previous_us) > 25:
        raise ValueError("After the first unloaded command, change by at most 25 us per trial")
    return pulse_us


def validate_pulse(pulse_us):
    if isinstance(pulse_us, bool) or not isinstance(pulse_us, int) or not 900 <= pulse_us <= 2100:
        raise ValueError("Pulse must be an integer within 900..2100 us")


def pulse_once(pulse_us, io, wait_ms):
    """One 40 ms settling + 500 ms command window; always request outputs off."""
    try:
        validate_pulse(pulse_us)
        io.apply(False, False, 0)
        io.apply(True, False, 0)
        wait_ms(40)
        io.apply(True, True, pulse_us)
        wait_ms(500)
    finally:
        io.apply(False, False, 0)
