# R4 offboard bench electronics

This is the complete build specification for a **5 V, directly driven HS-65MG prototype**, independent of the historical solenoid controller. It uses purchased modules and through-hole logic on an offboard prototyping board. It is not an installed aircraft controller or a custom PCB fabrication package. The three-wire servo is the only electrical part carried on the hardpoint.

Read [the wiring diagram](wiring.svg), [node-by-node netlist](netlist.json), [bill of materials](bom.csv) and [actuation procedure](../docs/actuation.md) together. The node list is authoritative if a rendering is unclear.

## Power and connector contract

| Item | Definition |
| --- | --- |
| Source | Regulated bench supply at **5.00 V**, ≥3 A available, initial current limit 1.5 A; verify no current limiting during accepted force measurements. |
| Accepted servo terminal voltage | **4.80–5.10 V during motion**; the source voltage alone is insufficient evidence. |
| U1 | Pololu **2810** Mini MOSFET Slide Switch LV; VIN = source +5 V, GND = common return, VOUT = SERVO_5V, ON = Pico GP11. Keep its slide switch physically **OFF**; ON is then controlled by firmware. |
| U2 | TI **SN74AHCT125N** powered from unswitched +5 V, converts 3.3 V PWM to a defined 5 V signal; its output defaults disabled. |
| J1 | Two-position power terminal: pin 1 +5 V, pin 2 GND. Red/black 22 AWG twisted pair, ≤100 mm each from source connector to U1. |
| J2 | 2.54 mm three-pin servo header: **1 SIGNAL / 2 SERVO_5V / 3 GND**, numbered according to the Hitec datasheet view. Mark the ground end; this header is not inherently polarized. Confirm the purchased lead colors/pin orientation by continuity and the datasheet. |
| Pico power | Pico H **SC0917**, USB powered. Connect its GND to the servo-source return. Do **not** connect the servo's +5 V to Pico 3V3, VBUS or VSYS in this bench implementation. |
| Capacitors | 100 nF at U2 pins 14/7; 100 µF, ≥10 V across SERVO_5V/GND at J2, observing polarity. Check turn-on inrush experimentally. |
| Bleeder | 1 kΩ across SERVO_5V/GND discharges local capacitance; verify <0.5 V within 1 s after disabling. |

The [Pololu switch specification](https://www.pololu.com/product/2810) defines ON-low/disconnected as off when its slide switch is off. It switches the positive rail and keeps servo ground connected. Do not substitute the previous low-side solenoid driver: switching servo ground can create a current path through its signal wire. The purchased switch is a control device, not an independent emergency disconnect; remove the source lead when physically handling a potentially loaded mechanism.

The [TI buffer datasheet](https://www.ti.com/lit/ds/symlink/sn74ahct125.pdf) defines active-low output enable and TTL-compatible inputs. A 2N3904G NPN pulls its OE low only when GP10 is driven high. This prevents a powered 5 V signal from feeding an unpowered servo during normal disabled operation. Power-off, reset and partially powered combinations still require the listed scope checks.

## Exact Pico and logic wiring

| Function | Pico GPIO / physical header pin | Connection |
| --- | --- | --- |
| Servo PWM | GP9 / **12** | U2 pin 2 (1A); external 10 kΩ input-to-GND holds it low while the Pico is unpowered. |
| Signal enable | GP10 / **14** | 4.7 kΩ to Q1 base; 100 kΩ base-to-GND. Q1 emitter GND, collector U2 pin 1 (1OE). |
| Servo power enable | GP11 / **15** | U1 ON; external 10 kΩ ON-to-GND. |
| PREPARE/ARM | GP12 / **16** | Normally-open button to GND; internal pull-up. |
| FIRE | GP13 / **17** | Separate normally-open button to GND; internal pull-up. |
| Ground | GND / **13** | Common source, U1, U2, Q1 and servo ground. |
| Command indicator | Built-in GP25 LED | Indicates logical ARMED state only; no position/retention/separation feedback. |

U2 pin 14 connects to +5 V, pin 7 to GND. Pin 1 has a 10 kΩ pull-up to +5 V. Pin 3 (1Y) feeds J2 signal through 220 Ω; J2 signal has a 10 kΩ pull-down. Unused U2 OE pins **4, 10 and 13** connect to +5 V; unused inputs **5, 9 and 12** connect to GND; unused outputs **6, 8 and 11** remain unconnected. Q1 is specifically onsemi 2N3904G TO-92: **1 emitter, 2 base, 3 collector** according to its [datasheet](https://www.onsemi.com/pdf/datasheet/2n3903-d.pdf); check package orientation rather than guessing from the flat face.

Use a soldered perfboard or terminal harness for loaded testing, with insulated conductors, strain relief and short power loops. The offboard board's placement and aircraft-level connector system are intentionally outside the individual hardpoint. Tie the servo lead to host-provided strain relief without loading the case entry or entering the horn sweep.

## Explicit unloaded calibration

The normal startup program intentionally cannot energize an uncalibrated mechanism. Use the separate supplied `firmware/calibrate.py` and `firmware/calibration_core.py` for calibration; it does not change `CALIBRATED`, save endpoints or perform an automatic sweep.

1. Inspect the unpowered wiring against the netlist. Leave the servo disconnected and use a **10 Ω,≥5 W resistor** across J2 power/ground as the temporary dummy load. Connect the scope to J2 signal and the switched rail. Copy `config.py`, `calibrate.py` and `calibration_core.py` onto the Pico. Keep `CALIBRATED = False`.
2. Prevent the normal startup program from running while using the USB REPL. If `main.py` is already on the Pico, interrupt it, rename it to `main_control.py` using the device file browser, and reset the Pico. The shipped uncalibrated program does not start the watchdog, so first-time setup is interruptible. If revisiting an already-calibrated program, its RP2040 watchdog cannot be disabled by simply interrupting Python; set CALIBRATED false, reset, then rename the startup file and reset again. With power disconnected, verify that neither enable is asserted after this reset. If no startup file has been installed yet, skip the rename.
3. In the USB REPL enter `from calibrate import run`, then `run()`. The program starts with both enables off. With the dummy load still fitted, reconnect the5 V source and type the explicit confirmation `UNLOADED`. Use a single `pulse 930` command to perform the dummy-load/scope checks before connecting a servo. Check disabled output, power-before-signal sequencing, pulse amplitude/width and switched-rail discharge. Type `quit` and disconnect the source before removing the dummy load and connecting the unloaded servo, initially with its horn removed.
4. Invoke `run()` again, confirm `UNLOADED`, and enter one command such as `pulse 930`. It powers the servo for40 ms with signal disabled, commands that pulse for500 ms, then disables signal and power. There is no automatic second movement. Observe current, direction and unloaded horn-index position. Subsequent pulse settings may change by at most25 µs per trial; use smaller steps near endpoints. The tool requires at least10 s off between commands. Both physical buttons must remain released; a button press or Python interruption terminates the trial and requests outputs off.
5. With source power disconnected, install the horn and unloaded mechanism. Choose the spline index and calibrated retained pulse together so both measured endpoints fit within 900–2100 µs. The supplied 930/1985 µs values are starting estimates. Do not extend the published pulse range to compensate for the wrong spline index or an incompatible sample. Repeat deliberate single-command trials until retained overlap, 9.5 mm nominal operating withdrawal and the specified stop margins are verified. Do not drive against a stop or sustain buzzing. Record pulse widths, travel, current, voltage, temperature and all fit measurements.
6. Type `quit`, disconnect the source, and edit the measured endpoints in `config.py`. Only after the unloaded record is accepted set `CALIBRATED = True`. Restore the normal `main.py` filename (or install it for the first time), then reset and verify the defined boot-off behavior before a supported preparation cycle.

The calibration tool is manual bench software with `finally` cleanup, not a hardware pulse limiter or emergency cutoff. A processor or electrical fault can defeat software timing. Keep the source disconnect accessible and inspect the actual output trace. Do not use this calibration program with a retained payload or in an installed aircraft.

## Firmware and command sequence

Install **MicroPython 1.25.0 for the non-wireless RP2040 Pico**, then copy `firmware/main.py`, `firmware/config.py` and `firmware/controller_core.py` to its filesystem. Do not install the desktop `test_controller.py` as startup code. The API usage follows [the versioned RP2 documentation](https://docs.micropython.org/en/v1.25.0/rp2/quickref.html); board pin numbering follows [Raspberry Pi's documentation](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html).

The supplied configuration has `CALIBRATED = False`. It leaves the servo physically unpowered even when buttons are pressed. After unloaded calibration is recorded, enter the measured retained/released pulse widths (within **900–2100 µs**) and set that flag true. The 930/1985 µs shipped values are bounded initial estimates, not manufacturer-calibrated endpoints. Calibrate the release command to **9.5 mm nominal withdrawal**, with at least **0.5 mm measured clearance to the 10.5 mm open stop**, rather than commanding against that stop. Rotation direction can be reversed by swapping the calibrated values; no source edits are required.

| State | Behavior |
| --- | --- |
| Boot | Both enables low, PWM zero. Wait at least 1 s and require both buttons released for 250 ms. |
| Idle | No servo power. Fresh PREPARE/ARM press, with FIRE released, begins the supported preparation operation. |
| Preparation | Power on with signal disabled for 40 ms, then command retained position for 500 ms. Power and signal go off. This command may move the mechanism: support the payload beforehand. |
| Armed | No servo power. Both buttons must be released for 250 ms after preparation. A fresh FIRE edge within 10 s starts one release. The LED represents permission to command only. |
| Release | Power on for 40 ms before enabling the calibrated release pulse. Command for 500 ms, then disable signal and power. No automatic return. |
| Lockout | Both enables off for at least 10 s; both buttons must be released before another preparation can occur. Held FIRE cannot repeat a release. |
| Reset/fault | Outputs off. A reboot does not restore the previous armed state. Real mechanical position remains unknown. |

The pure controller's `external_ok` argument permits a future host inhibit, but the shipped bench harness has **no automatic voltage, temperature, current or position sensor**. Its default runtime does not measure these quantities. Use the external instruments in the actuation test procedure. A 1 s watchdog resets a stalled program; it is not an independent 500 ms pulse limiter, current trip, or motion stop. The software maximum also depends on scheduling. The series power connection provides physical disconnection for bench handling.

## Checkout and verification

1. With servo disconnected, verify every net against `netlist.json`, +5 V/GND polarity, U2 orientation, Q1 pinout and the physically OFF U1 slide switch. Check insulation and shorts.
2. Use a dummy load and scope to verify both enable defaults, signal high level, pulse endpoints, turn-on delay, 500 ms command period, power-off discharge, held-button behavior and reboot behavior. Record source and J2 voltages. Do not call desktop test success a hardware measurement.
3. Fit the servo without the payload and perform the calibration/fit procedure in `docs/actuation.md`. Check both angular stops, pin retention and lead clearance throughout the motion.
4. Complete the force-margin, thermal and repeated loaded-release measurements before treating any simulated load as a usable capacity.

Run the desktop checks from the repository root:

```sh
python -m unittest discover -s project/designs/r4/electrical/firmware -p 'test_*.py' -v
python -m py_compile project/designs/r4/electrical/firmware/controller_core.py project/designs/r4/electrical/firmware/config.py project/designs/r4/electrical/firmware/main.py
```

These tests cover startup inhibition, held buttons, preparation-before-fire, timeout, a single release per arm cycle, fault latching and calibration bounds. No Pico was flashed and no servo current, temperature, angle or loaded release was measured by those tests.
