"""RP2040 manual USB bench controller; hardware checkout remains required."""
from machine import Pin, PWM, WDT
from time import ticks_ms, ticks_diff, sleep_ms
import select
import sys
import bench_config as cfg
from bench_core import Controller

pin = Pin(cfg.PWM_PIN, Pin.OUT, value=0)
pwm = None
controller = Controller(cfg.CALIBRATION, cfg.ARM_WINDOW_MS, cfg.MAX_LOOP_GAP_MS)
poll = select.poll()
poll.register(sys.stdin, select.POLLIN)
watchdog = WDT(timeout=1000)
previous, elapsed, line = ticks_ms(), 0, ""
print("R5 BENCH ONLY. Output off. Commands: HOLD, ARM, RELEASE, LATCH, STOP, STATUS")
try:
    while True:
        now = ticks_ms()
        elapsed += ticks_diff(now, previous)
        previous = now
        controller.tick(elapsed)
        if poll.poll(0):
            char = sys.stdin.read(1)
            if char in ("\r", "\n"):
                if line:
                    print(controller.command(line, elapsed))
                line = ""
            elif char and len(line) < 32:
                line += char
            elif len(line) >= 32:
                controller.fault()
                line = ""
        pulse = controller.pulse_us
        if pulse is None:
            if pwm is not None:
                pwm.deinit()
                pwm = None
            pin.init(Pin.OUT, value=0)
        else:
            if pwm is None:
                pwm = PWM(pin, freq=cfg.PWM_HZ, duty_ns=0)
            pwm.duty_ns(pulse * 1000)
        watchdog.feed()
        sleep_ms(cfg.POLL_MS)
finally:
    if pwm is not None:
        pwm.deinit()
    pin.init(Pin.OUT, value=0)
