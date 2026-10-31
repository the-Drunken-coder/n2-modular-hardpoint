"""Copy with bench_core.py and main.py to a MicroPython 1.25.0 RP2040 Pico.

No actuator output is permitted until an individual calibration is entered.
Values must be measured on the purchased servo/horn and assembled mechanism.
"""
PWM_PIN = 9
PWM_HZ = 50
POLL_MS = 5
MAX_LOOP_GAP_MS = 250
ARM_WINDOW_MS = 5000
# PWM continues to hold the last commanded position. No automatic relatch and
# no inferred USB-disconnect detection. STOP/reset removes the PWM signal;
# the servo's response to signal loss must be measured with the payload caught.
CALIBRATION = {
    "servo_id": "",
    "geometry_revision": "R5",
    "min_us": 1000,
    "max_us": 2000,
    "latched_us": None,
    "released_us": None,
    "measured_open_clearance_mm": None,  # >=1.50 mm in worst inspected loaded/float pose
    "measured_full_section_overlap_mm": None,
    "signal_verified_5v": False,
    "fit_bounds_inspected": False,
    "operator_accepted": False,
}
