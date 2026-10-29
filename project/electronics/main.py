"""Copy with config.py and controller_core.py to an RP2040 Pico / Pico H.

MicroPython 1.25.0 API target. Host-tested state logic, not hardware-validated.
Remove the separate 5 V coil supply before programming or opening the REPL.
"""
from machine import Pin, WDT
from time import ticks_ms, ticks_diff, sleep_ms
import config as cfg
from controller_core import Button, Controller

# Initialise the load command LOW before any further application setup.
# A physical 10k pull-down at driver In is required during boot/reset/unplugging.
coil = Pin(cfg.COIL_PIN, Pin.OUT, value=0)
led = Pin(cfg.LED_PIN, Pin.OUT, value=0)

try:
    arm_pin = Pin(cfg.ARM_PIN, Pin.IN, Pin.PULL_UP)
    fire_pin = Pin(cfg.FIRE_PIN, Pin.IN, Pin.PULL_UP)
    arm_button = Button(arm_pin.value() == 0, debounce_ms=cfg.DEBOUNCE_MS)
    fire_button = Button(fire_pin.value() == 0, debounce_ms=cfg.DEBOUNCE_MS)
    controller = Controller(cfg.PULSE_MS, cfg.COOLDOWN_MS,
                            cfg.ARMED_TIMEOUT_MS, cfg.BUTTON_RELEASE_DWELL_MS,
                            cfg.MAX_ACTIVE_POLL_GAP_MS)
    watchdog = WDT(timeout=cfg.WATCHDOG_MS)
    previous_tick = ticks_ms()
    elapsed = 0
    while True:
        tick = ticks_ms()
        delta = ticks_diff(tick, previous_tick)
        previous_tick = tick
        if delta < 0:
            controller.fault("Unexpected clock discontinuity")
            delta = 0
        elapsed += delta
        arm = arm_button.update(elapsed, arm_pin.value() == 0)
        fire = fire_button.update(elapsed, fire_pin.value() == 0)
        coil.value(controller.step(elapsed, arm, fire))
        if controller.state == "FAULT":
            led.value((elapsed // 100) % 2)
        elif controller.state in ("ARMED", "PULSING"):
            led.value(1)
        elif controller.state == "DISARMED":
            led.value(elapsed % 2000 < 100)
        else:
            led.value(0)
        watchdog.feed()  # Only after input, state, and output updates complete.
        sleep_ms(cfg.POLL_MS)
finally:
    # Covers Python exceptions and Ctrl-C; a hung interpreter requires watchdog
    # reset or the independent supply disconnect. A shorted MOSFET needs the latter.
    coil.value(0)
    led.value(0)
