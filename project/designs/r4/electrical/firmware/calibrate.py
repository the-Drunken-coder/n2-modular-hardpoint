"""Run explicitly from the Pico USB REPL with normal main.py disabled.

No automatic sweep, no payload, no saved calibration changes. See README.
Do not rename this file to main.py or use it as an installed flight controller.
"""
from machine import Pin, PWM
from time import sleep_ms, ticks_ms, ticks_diff
import config
from calibration_core import parse_command, pulse_once


def run():
    power = Pin(config.POWER_ENABLE_GPIO, Pin.OUT, value=0)
    signal = Pin(config.SIGNAL_ENABLE_GPIO, Pin.OUT, value=0)
    pwm = PWM(Pin(config.PWM_GPIO, Pin.OUT, value=0), freq=50)
    pwm.duty_ns(0)
    arm = Pin(config.ARM_GPIO, Pin.IN, Pin.PULL_UP)
    fire = Pin(config.FIRE_GPIO, Pin.IN, Pin.PULL_UP)

    class IO:
        def apply(self, powered, enabled, pulse_us):
            if not enabled:
                signal.value(0)
            pwm.duty_ns(pulse_us * 1000)
            power.value(powered)
            if enabled:
                signal.value(1)

    io = IO()

    def checked_wait(duration):
        start = ticks_ms()
        while ticks_diff(ticks_ms(), start) < duration:
            if not arm.value() or not fire.value():
                raise RuntimeError("Button input interrupted calibration; inspect before retrying")
            sleep_ms(5)

    previous = None
    last_off = None
    try:
        print("UNLOADED calibration only. Start with horn removed; normal main must be disabled.")
        print("One pulse setting per command, 40 ms settle + 500 ms movement, then off.")
        if input("Type UNLOADED to proceed: ").strip() != "UNLOADED":
            return
        while True:
            command = input("pulse 930 / pulse <900..2100> / quit: ").strip()
            if command == "quit":
                break
            try:
                value = parse_command(command, previous)
                if last_off is not None and ticks_diff(ticks_ms(), last_off) < 10000:
                    raise ValueError("Wait at least 10 seconds after the previous pulse")
                if not arm.value() or not fire.value():
                    raise ValueError("Release both physical buttons before an unloaded pulse")
            except ValueError as error:
                print(error)
                continue
            pulse_once(value, io, checked_wait)
            previous, last_off = value, ticks_ms()
            print("OFF. Commanded", value, "us. Measure position/current/clearance; no calibration saved.")
    finally:
        io.apply(False, False, 0)
        pwm.deinit()
