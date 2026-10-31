"""UNLOADED, HORN REMOVED: manual pulse calibration helper, not flight code.

Run from the Pico REPL with `import calibrate`. Commands CENTER, STEP +10,
STEP -10, STOP. Initial range 1000..2000 us is a starting range, not guaranteed
travel. Expanding it requires free-actuator inspection and the vendor limits.
"""
from machine import Pin, PWM

pin = Pin(9, Pin.OUT, value=0)
pwm, pulse = None, None
try:
    while True:
        command = input("HORN REMOVED / supported: CENTER, STEP +/-10, STOP > ").strip().upper()
        if command == "STOP":
            break
        if command == "CENTER" and pulse is None:
            target = 1500
        elif command in ("STEP +10", "STEP -10") and pulse is not None:
            target = pulse + (10 if command == "STEP +10" else -10)
        else:
            print("Refused")
            continue
        if not 1000 <= target <= 2000:
            print("Refused: outside initial calibration range; inspect before editing bounds")
            continue
        if pwm is None:
            pwm = PWM(pin, freq=50, duty_ns=0)
        pwm.duty_ns(target * 1000)
        pulse = target
        print("Requested pulse us:", pulse)
finally:
    if pwm is not None:
        pwm.deinit()
    pin.init(Pin.OUT, value=0)
