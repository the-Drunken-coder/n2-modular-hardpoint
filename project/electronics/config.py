"""P5 L1R bench defaults, Raspberry Pi Pico / Pico H (RP2040).

These are development limits, not supplier-qualified solenoid duty ratings.
All hardware except the solenoid is remote from the printed hardpoint.
"""
COIL_PIN = 9       # Physical pin 12 -> Adafruit 5648 In; external 10k to GND.
ARM_PIN = 12       # Physical pin 16 -> NO button -> GND; internal pull-up.
FIRE_PIN = 13      # Physical pin 17 -> NO button -> GND; internal pull-up.
LED_PIN = 25       # Onboard LED on non-wireless RP2040 Pico / Pico H.

PULSE_MS = 250
COOLDOWN_MS = 10000       # Measured from the observed software coil-off event.
ARMED_TIMEOUT_MS = 10000
BUTTON_RELEASE_DWELL_MS = 100
DEBOUNCE_MS = 20
POLL_MS = 5              # Nominal sleep; not a hard real-time guarantee.
MAX_ACTIVE_POLL_GAP_MS = 50
WATCHDOG_MS = 1000       # Backup reset for a stalled loop, not a 250 ms limiter.

# Before EVERY ARM: operator measures coil case within 2 degC of local ambient,
# confirms keeper fully retained and payload supported in a guarded catch.
# There is deliberately no temperature sensor or aircraft signal interface.
