"""R4 bench setup; replace pulse endpoints only after unloaded calibration.

CAD angles do not establish the real servo's pulse-to-angle map. These values
are bounded starting values; the shipped program deliberately cannot energize
the servo until the calibration procedure has been completed and recorded.
"""
CALIBRATED = False
RETAINED_US = 930
RELEASED_US = 1985
PWM_HZ = 50
PWM_GPIO = 9
SIGNAL_ENABLE_GPIO = 10
POWER_ENABLE_GPIO = 11
ARM_GPIO = 12
FIRE_GPIO = 13
DEBOUNCE_MS = 30
WATCHDOG_MS = 1000
