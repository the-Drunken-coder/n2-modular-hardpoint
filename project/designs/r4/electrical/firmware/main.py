"""RP2040 Pico H / MicroPython 1.25.0: externally powered R4 bench control.

Do not flash the original solenoid firmware into this servo harness.
"""
from machine import Pin, PWM, WDT
from time import ticks_ms, ticks_diff, sleep_ms
import config
from controller_core import Controller

# External resistors also hold both enables off before these instructions run.
power = Pin(config.POWER_ENABLE_GPIO, Pin.OUT, value=0)
signal = Pin(config.SIGNAL_ENABLE_GPIO, Pin.OUT, value=0)
pwm = PWM(Pin(config.PWM_GPIO, Pin.OUT, value=0), freq=config.PWM_HZ)
pwm.duty_ns(0)
arm_pin = Pin(config.ARM_GPIO, Pin.IN, Pin.PULL_UP)
fire_pin = Pin(config.FIRE_GPIO, Pin.IN, Pin.PULL_UP)
led = Pin(25, Pin.OUT, value=0)
controller = Controller(config.RETAINED_US, config.RELEASED_US, config.CALIBRATED)
# An inhibited first-time setup never powers the servo and remains interruptible
# for USB calibration setup. Enable the watchdog for the calibrated sequencer.
watchdog = WDT(timeout=config.WATCHDOG_MS) if config.CALIBRATED else None


class Debounced:
    def __init__(self, pin):
        self.pin = pin
        self.raw = not pin.value()
        self.stable = self.raw
        self.changed = 0

    def read(self, now):
        raw = not self.pin.value()
        if raw != self.raw:
            self.raw, self.changed = raw, now
        if now - self.changed >= config.DEBOUNCE_MS:
            self.stable = raw
        return self.stable


arm, fire = Debounced(arm_pin), Debounced(fire_pin)
last_tick, elapsed, previous = ticks_ms(), 0, None
print("R4 bench controller. Calibration:", config.CALIBRATED)
try:
    while True:
        tick = ticks_ms()
        elapsed += ticks_diff(tick, last_tick)
        last_tick = tick
        out = controller.step(elapsed, arm.read(elapsed), fire.read(elapsed))
        if not out["signal_enable"]:
            signal.value(0)
        pwm.duty_ns(out["pulse_us"] * 1000)
        power.value(out["power_enable"])
        if out["signal_enable"]:
            signal.value(1)
        led.value(out["logical_armed"])
        if out["state"] != previous:
            print(elapsed, out["state"], "commanded; physical state unmeasured")
            previous = out["state"]
        if watchdog is not None:
            watchdog.feed()
        sleep_ms(5)
finally:
    signal.value(0)
    pwm.duty_ns(0)
    power.value(0)
    pwm.deinit()
    led.value(0)
