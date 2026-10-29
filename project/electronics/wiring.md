# N2 — complete local bench control

## Selected arrangement

Use **one Adafruit 2776 mini solenoid, one Adafruit 5648 MOSFET driver, and a separate regulated 5.0 V bench supply capable of at least 2 A**. For repeatable development pulses, the supplied firmware adds a USB-powered **Raspberry Pi Pico H (RP2040, SC0917)** and two ordinary normally-open momentary buttons marked **ARM** and **FIRE**. A 10 kΩ resistor holds the driver's input low when the controller is absent or resetting. The actuator is in the hardpoint; the controller, driver, buttons, power supply, and test wiring are all external bench equipment, outside its quoted mechanical envelope.

The Pico is a convenient reusable timer for this prototype, not a required aircraft-wide controller. A manual button alone can be held indefinitely and produces inconsistent energization time. This small timer produces one requested pulse, rejects held inputs at startup, and requires deliberate rearming. It does **not** establish the solenoid's thermal rating or measure successful release.

There is no RC decoder, radio, motor H-bridge, endpoint switch, custom PCB, or payload power/data interface in N2. PCBWay quotation is **not applicable**: this solution uses purchased boards and wiring.

## Purchased parts and limits

| Item | Part / quantity | Selection basis |
|---|---|---|
| Mini solenoid | Adafruit **2776**, 1 | Supplier lists 5 V, 1.1 A, 4.5 Ω ±5%, 3 mm stroke / 80 g-force, and spring return [E01]. A complete force/stroke/temperature/duty curve is absent. |
| Driver | Adafruit **5648**, 1 | Purchased low-side MOSFET board with integrated 1N4007 flyback diode; 3.3 V GPIO is compatible. Board output rating is 1.5 A continuous / 3 A peak; JST-PH limit is 2 A continuous [E02,E03]. Those are driver limits, not solenoid duty ratings. |
| Timer/controller | Raspberry Pi **Pico H, SC0917**, 1; procurement example Adafruit **5525** | Preinstalled headers; non-wireless RP2040 board. Plain RP2040 Pico with soldered headers can run the same code. Use USB for controller power only [E04,E05]. |
| Buttons | Adafruit **367**, 2 switches used from 20-pack, or equivalent NO momentary signal contacts | Inputs only, never coil current. Confirm with a continuity meter which two contact groups change from open to closed [E06]. |
| Input bias | 10 kΩ, ≥0.125 W resistor, 1 | Install directly between driver **In** and **GND**. Project-selected value; prevents a floating command wire. |
| Wiring | Short insulated leads, power conductors sized for ≥1.3 A; USB data cable | Use soldered connections or rated terminals in the coil-current path. Keep coil current out of solderless breadboard rails. Signal/button wiring can use a breadboard for the bench. |
| Instruments | Regulated current-limited supply; voltage/current measurement; contact thermometer; video or oscilloscope | Reusable laboratory equipment, not counted in hardpoint mass or price. Record actual instrument models and calibration/uncertainty in the test record. |

Observed unit/pack prices on 2026-10-26: driver $3.95, Pico H $5.00, 20-button pack $2.50, solenoid $4.95 [E01,E02,E05,E06]. The Pico H listing was out of stock at the observed vendor. These are catalog observations, not a quote or an order. Resistor, wiring, USB cable, bench supply, instruments, delivery and tax are additional. Only two buttons are consumed; the minimum package purchase is twenty.

## Wiring — use printed labels, not cable colors

| From | To | Purpose |
|---|---|---|
| Bench supply positive, set **5.0 V** | Driver **V+** input pad or JST-PH V+ conductor | Coil supply. Choose one input wiring route. |
| Bench supply negative | Driver **GND** | Coil return and logic reference. |
| Driver output terminal **+** | One solenoid lead | Permanently connected to V+ on the driver. |
| Driver output terminal **− / Out** | Other solenoid lead | Switched low-side return; **do not** connect this terminal directly to GND. |
| Pico **GP9**, physical pin **12** | Driver **In** | 3.3 V high requests coil current; low requests off. |
| Pico **GND**, physical pin **13** | Driver **GND** | Common logic reference. Connect before applying coil power. |
| 10 kΩ resistor | Driver **In** to driver **GND** | Boot/unplug input bias; fit at driver end. |
| Pico **GP12**, physical pin **16** | ARM normally-open contact; other side to GND | Firmware enables internal pull-up; pressed reads low. |
| Pico **GP13**, physical pin **17** | FIRE normally-open contact; other side to GND | Same input arrangement. |
| USB computer or regulated USB supply | Pico micro-USB connector | Controller power; a data cable is required for programming. |

Physical pin numbers refer to the official non-wireless Pico pinout [E04]. GPIO numbers in `config.py` are **GP** numbers, not physical header numbers. Pico GPIO is 3.3 V logic. Leave **VBUS, VSYS, 3V3, and unused GPIO pins unconnected** to the coil supply in this wiring arrangement. Never run the 1.1 A solenoid from the Pico's 3V3 rail or a computer USB output. Only grounds are shared between the two supplies.

The driver is a low-side switch: the current path while commanded on is supply + → coil → Out → MOSFET → GND. Its built-in diode is the flyback path across the coil connection, with cathode at V+ and anode at Out [E02]. Leave the coil attached to both driver output terminals during a power abort; remove/disable the **upstream 5 V supply**, so the flyback path stays intact. Do not pull a coil terminal loose during energization. A diode affects current decay and therefore spring-return timing; measure the real return, not just the input falling edge.

Set the supply voltage before connecting it. The source must be capable of ≥2 A, but start with its **current limit at 1.3 A**. This is a project test setting: the listed minimum cold resistance gives \(5/(4.5\times0.95)=1.17\,\mathrm A\) before wiring/driver losses. If the supply enters current limiting during a normal pulse, record that trial as invalid for nominal 5 V force characterization and investigate; do not raise voltage to force release. Confirm actual voltage at the driver under load. Supply output-off or the upstream connector is the independent power abort.

## Firmware operation

The supplied `main.py`, `config.py`, and `controller_core.py` target **MicroPython 1.25.0 on a non-wireless RP2040 Pico / Pico H** [E07,E08]. They use standard Pin, time and watchdog APIs; no external library is required.

1. **Power-up:** GPIO command starts low. A 10 s startup lockout runs, and both buttons must be released for 100 ms. A button held during boot cannot trigger a pulse or silently arm the unit.
2. **Inspect:** support the adapter above a guarded catch; confirm the keeper is fully retained and the release path unobstructed. Measure ambient air and solenoid case temperature. Before **every** arming, require case temperature within **2°C of measured ambient**, allowing for instrument uncertainty. This is an external operator gate, not a software measurement. Ten seconds alone is not permission to repeat a pulse.
3. **ARM:** press and release ARM while FIRE remains released. This action records the operator's confirmation through the procedure, not electronically. The armed window lasts 10 s. A second ARM press cancels it.
4. **FIRE:** a fresh FIRE press requests **one 250 ms command pulse**. Releasing, holding, or pressing FIRE again does not extend it or queue another pulse. The keeper withdraws if the physical force/stroke budget is sufficient; the software cannot tell whether it did.
5. **After the pulse:** command goes low and spring return begins as current decays. A **10 s minimum lockout starts at that low command**, then both buttons must again be released, temperature rechecked, the mechanism inspected/reset, and a fresh ARM cycle completed. The controller does not sense zero coil current or payload departure.
6. **Abort/fault:** ARM during an active pulse requests immediate software shutoff after debounce; pressing both buttons, early FIRE during the ARM cycle, a backwards clock, or an active polling gap over 50 ms latches FAULT/off. Disconnect coil supply, inspect/support the adapter, and restart the Pico after correcting the cause. Neither button clears a fault. The independent supply disconnect remains available even if software or the MOSFET fails.

| Onboard Pico LED | Meaning |
|---|---|
| One 100 ms flash each 2 s | Disarmed and ready for inspection/arming |
| Solid | Armed, or pulse in progress; see driver **Sig** LED to distinguish coil command |
| Rapid flashing | Latched fault |
| Off | Startup/cooldown/button-release wait, ARM held, or unpowered controller; never treat darkness as proof of retention |

The driver's **Sig** LED indicates the command, not actual keeper position or payload clearance. A 5 ms loop sleep is a nominal setting, not a hard timing bound. `main.py` drives the command low in its `finally` block on a Python exception or Ctrl-C. A 1000 ms hardware watchdog is fed only after completing each loop; it is a backup reset for stalled execution, **not a 250 ms hardware one-shot**. A shorted MOSFET can remain energized despite a low command. Physically measure pulse width, reset behavior and watchdog behavior before loaded testing. Software tests cannot establish those hardware properties.

The nominal steady electrical input is approximately \(5\times1.1=5.5\,\mathrm W\); a 250 ms pulse corresponds to about \(1.38\,\mathrm J\) using that approximation. Ten seconds off plus 0.25 s on gives an apparent 2.44% repeating duty, but inductance, coil temperature and housing heat flow are unmeasured. **Neither this energy estimate nor the cooldown is a supplier duty rating.** Do not increase pulse length to hide a jam or insufficient pull force. A longer opening interval requires a new thermal and separation review.

## Programming and checkout

1. Disconnect the 5 V coil supply. Leave it disconnected through firmware installation and I/O tests.
2. Obtain the **RPI_PICO MicroPython 1.25.0 UF2** from the official [Pico download page](https://micropython.org/download/RPI_PICO/). Record the downloaded filename and hash in the test record. Use this stated version for the initial reproduction; adopting a different firmware version requires rerunning the checkout.
3. Hold Pico BOOTSEL while connecting USB, then copy the UF2 onto the RPI-RP2 mass-storage device. The board restarts. This installs the runtime; it does not copy this project's Python files [E09].
4. With Thonny or another MicroPython filesystem tool, copy **`controller_core.py`, `config.py`, and `main.py`** to the Pico's filesystem root. The last file runs at startup. Do not copy the host unit-test runner as firmware. Reset/power-cycle USB after copying.
5. With coil supply still off, measure GP9. It must remain low at startup, when FIRE is held at boot, when FIRE is pressed without arming, and during cooldown. Confirm one high pulse only after the complete ARM/FIRE sequence. Measure a target **250 ms ±10 ms** command pulse; this is an initial bench acceptance gate, not a proven result. Reject unexplained extra pulses or any failure to go low. Test the physical held-button, cancellation, fault, reset and watchdog cases.
6. Connect the driver and unloaded solenoid, leave the adapter supported, set 5.0 V / 1.3 A limit, and perform one pulse. Observe actual current, full stroke, return and temperature. Stop if voltage collapses, the current limiter activates, the keeper stalls, the driver gets hot, or the spring does not restore the keeper fully. Record the cause rather than retrying rapidly.
7. Progress to the project's mechanical load/misalignment tests only after the electrical and unloaded checks pass. Keep the pulse duration fixed while characterizing the mechanism.

To reproduce host verification from this folder:

```bash
python -m unittest -v test_controller.py
python -m py_compile main.py config.py controller_core.py test_controller.py
```

The host suite tests logic only. It does not execute MicroPython GPIO, prove MOSFET protection, measure coil temperature, or demonstrate loaded release.

## Command / unlock / clear record

Use `release_timing_record.csv` for each physical trial. Film the driver Sig LED, visible keeper witness and departing adapter in the same view, or record synchronized electrical/position sensors. **Command:** first observed high command/LED. **Unlock:** keeper has completely left its retaining overlap. **Clear:** the adapter has fully passed the recapture/interference region. Record command-low separately. Report video frame rate and timing uncertainty; if an event is obscured or never occurs, mark it unknown/failure rather than inventing a time.

Calculate \(t_\text{unlock}-t_\text{command}\) and \(t_\text{clear}-t_\text{unlock}\) separately. For this fixed-pulse bench checkout, require observed complete clearance before command-low with at least two video-frame intervals of margin after including timing uncertainty. This is a development screen only. If there is insufficient margin, or the spring recaptures the adapter, the arrangement fails that trial; do not label an electrical pulse a successful release. On a lifting glider, actual aircraft-relative clearance remains a separate aircraft-specific qualification problem.

## Sources

- **E01:** [Adafruit 2776 product specification](https://www.adafruit.com/product/2776), Description / Technical Details.
- **E02:** [Adafruit 5648 product specification](https://www.adafruit.com/product/5648), Description; [manufacturer design repository](https://github.com/adafruit/Adafruit-MOSFET-Driver-STEMMA-PCB). Purchased board; no custom fabrication required.
- **E03:** [Adafruit MOSFET Driver pinouts](https://learn.adafruit.com/adafruit-mosfet-driver/pinouts), input/output labels and indicator functions.
- **E04:** [Official Pico product documentation](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html) and [official Pico pinout](https://pip-assets.raspberrypi.com/categories/610-raspberry-pi-pico/documents/RP-008309-DS-1-Pico-R3-A4-Pinout.pdf).
- **E05:** [Pico H procurement listing](https://www.adafruit.com/product/5525); [Raspberry Pi product portal](https://pip.raspberrypi.com/categories/610-raspberry-pi-pico) lists SC0917 in the Pico family. Manufacturer part identity is also cross-listed by [DigiKey SC0917](https://www.digikey.com/en/products/detail/raspberry-pi/SC0917/16608257); technical pin/power design uses the official documentation.
- **E06:** [Adafruit 367 momentary buttons](https://www.adafruit.com/product/367).
- **E07:** [MicroPython 1.25.0 RP2 API](https://docs.micropython.org/en/v1.25.0/rp2/quickref.html), time and GPIO.
- **E08:** [MicroPython 1.25.0 WDT API](https://docs.micropython.org/en/v1.25.0/library/machine.WDT.html), watchdog reset semantics.
- **E09:** [Raspberry Pi MicroPython installation](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html).

Source access and catalog-price observations below were recorded in the earlier project on 2026-10-26; they were not refreshed for this selection update. All numeric firmware thresholds, current-limit setting, temperature gate, and checkout tolerances are **project engineering choices awaiting physical validation** unless explicitly attributed to a supplier above.
