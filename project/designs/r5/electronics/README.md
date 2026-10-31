# R5 servo interface and manual bench controller

**Bench implementation, not flight firmware. Physical GPIO, servo motion, holding,
power interruption, stall and loaded departure tests remain pending.** The
solenoid pulser in `project/electronics/` is historical and cannot drive R5.

## Electrical contract

The selected TowerPro MG92B has a **5.0–6.6 V manufacturer operating range**.
This project retains **fixed nominal 5 V**; the terminal voltage must remain at
or above 5.0 V during actuation and holding, including measurement uncertainty.
A 5 V source setting alone does not establish that. Below 5.0 V is an unqualified
condition, not a torque-curve pass. Do not raise the design voltage or infer
internal-servo behavior by extrapolating stall torque. If this terminal contract
cannot be met, qualify a compatible actuator before closing the power gate.

TowerPro gives 3.1 kgf·cm at 5.0 V and 3.5 at 6.0 V. Adafruit labels the lower
point 4.8 V but also specifies a 5.0 V operating minimum. The calculations use
the manufacturer's points; their assumed 50%-of-stall working torque is not a
measured speed/torque curve or continuous-duty rating.

The Adafruit listing specifies **5 V command logic**. Do not connect an RP2040
3.3 V output directly and assume compatibility. The bench setup uses one
SN74AHCT125 buffer channel on an external breadboard/adapter. It has TTL-level
inputs compatible with the Pico output, and a 5 V output. No custom PCB is needed.

| Connection | Destination |
|---|---|
| Regulated nominal 5 V bench supply | Servo positive and SN74AHCT125 VCC (pin 14) |
| Supply ground | Servo ground, buffer pin 7, Pico GND (physical pin 13) |
| Pico GP9 (physical pin 12) | Buffer 1A, pin 2; add 10 kΩ from 1A to ground |
| Buffer 1OE, pin 1 | Ground (channel enabled; input pulldown keeps command low at boot) |
| Buffer 1Y, pin 3 | 220 Ω series resistor, then servo signal |
| Buffer VCC to GND | 100 nF ceramic directly at the IC |
| Unused buffer inputs | Ground; unused OE pins to VCC; unused outputs unconnected |
| Pico micro-USB | Host power and serial terminal; no link from servo supply to Pico 3V3/VBUS/VSYS |

Use the package's actual pinout and servo connector markings; do not rely on
wire colors. The existing 3 A-per-station figure is a planning budget, not a
measured current requirement. Record startup, moving, holding and jam current,
terminal waveform, connector/wire rating, and regulator response. The buffer,
resistors/capacitor, Pico, supply and external leads are bench equipment outside
the cartridge mass and mechanical cost estimate.

## Endpoint calibration

1. Support/catch the mechanism; keep the payload detached. Disconnect the servo
   from the keeper and remove the horn for initial electrical checkout.
2. Install MicroPython **1.25.0** on a non-wireless RP2040 Pico/Pico H. Remove or
   rename any existing `main.py`, then power-cycle; Ctrl-C alone cannot disable
   a watchdog started by previous firmware. Initially copy only `calibrate.py`.
   Check the 5 V signal with the actuator disconnected.
   With the free actuator powered, run `import calibrate` at the REPL. `CENTER`
   requests 1500 µs; `STEP +10` / `STEP -10` move by 10 µs. `STOP` or Ctrl-C
   removes PWM. Observe each movement before the next command. The helper's
   1000–2000 µs range is a cautious starting window, not guaranteed angular travel.
3. Measure free-actuator travel and identify useful pulse endpoints. Adafruit
   warns that 1–2 ms may not give 180° and discusses 0.75–2.25 ms; that is not
   permission to drive an assembled mechanism blindly to those extremes.
   Extending the helper's bounds is a deliberate free-actuator calibration step.
4. Index the stock horn so its crank pin faces the keeper at the selected latch
   pulse. **180° is the geometric crank orientation, not a universal PWM command
   or the servo's electrical center.** Adjust indexing/trim with the keeper
   unloaded. Follow the ordered [sleeve-joint assembly](../ASSEMBLY.md), including
   its assembly-only 215° bare-pin position. Verify at least 175° of useful free
   servo travel for the 40–215° installation range; the nominal vendor travel
   is not that measurement. The normal controller never commands the assembly
   position. Inspect the full motion for pin/slot/roof contact and binding.
5. Measure actual fully latched engagement, assembled sleeve-center radius and
   released clearance under the declared loaded/float poses.
   Require at least **0.5 mm of full keeper section beyond the far tab face**
   (exclude the tip chamfer), and **1.5 mm minimum clear opening** at release:
   0.5 mm clearance plus the selected 1.0 mm additional stroke reserve. Apply
   the fit/tolerance and loaded-test procedure as separate gates.
6. Enter the measured pulse limits and endpoints, servo identity and fit records
   in `bench_config.py`. Check all `params.FIT_BOUNDS` limits, including the
   **assembled sleeve-center radius 5.4 ±0.1 mm** after clamping (including bolt,
   horn-hole and sleeve eccentricity),
   shaft and keeper dimensions, angular endpoints (**latch 177–183°, release
   40–44°**), keeper section **4.9–5.1 mm**, guide fit, relative guide/shaft Z
   datum **within ±0.20 mm**, and **0.3–0.5 mm total sleeve/slot clearance**. Measure
   endpoint fit against the actual driven pin contact faces, not a centered-pin
   pose; the [continuous guided-fit bound](../analysis/FIT_ENVELOPE.md) includes
   up to ±0.25 mm of yoke lost motion, guide tilt and tip-corner projection. Only after
   inspecting the signal/fit set the three explicit acceptance booleans true.
   These are operator records; firmware does not measure
   position or certify the inspection. Recalibrate after servo, horn, linkage,
   geometry, print or endpoint changes.

## Run the manual bench controller

Copy **`bench_config.py`, `bench_core.py`, and `main.py`** to the Pico filesystem
root. Leave the old solenoid `main.py` off the board. The shipped profile has no
endpoints and refuses motion. Open a USB serial terminal and send newline-ended
commands, with local echo disabled if desired:

| Command/state | Behavior |
|---|---|
| Boot/reset | Output low; no automatic movement or holding command |
| `HOLD` from OFF | Command the calibrated latch endpoint; inspect before loading |
| `ARM` from LATCHED | Permit one release for five seconds; pulse remains latched |
| `RELEASE` while ARMED | Command calibrated open endpoint and hold it there |
| `LATCH` from RELEASED | Explicit return to latch; first support/clear the adapter |
| `STOP` | Remove PWM; support the payload because signal-loss behavior is unqualified |
| `STATUS` | Report command state, not actual physical position |

There is **no automatic relatch**, so the controller cannot intentionally recapture
a slowly departing payload on a timer. A missing release command never releases.
Arming expiry only removes release permission. Repeated or out-of-order commands
are refused. A reversed clock or active polling gap over 250 ms faults with PWM
off; the 1 s watchdog is backup. Ctrl-C/exception also removes PWM.

USB disconnect is not reliably observable through this interface. PWM therefore
continues holding the last endpoint while the loop runs, until explicit STOP,
reset, watchdog or loss of power. Measure what the **actual servo** does when
its signal or supply disappears. The design deliberately does not require
power-off retention; a local actuator/connector failure can still occur while
the rest of an aircraft is powered. This bench controller makes no flight-safety
or failsafe claim. Use the upstream bench supply disconnect for an immediate
power abort, and never sustain a stalled mechanism to force a fit.

## Verification

Run `python -m unittest discover -s project/designs/r5/tests -v` from the repository
root. The host tests check calibration refusal, command ordering, arming expiry,
loop faults and output bounds. They cannot execute MicroPython hardware, validate
5 V levels, check PWM accuracy, measure a jam, or demonstrate departure. Record
those physical checks before applying the R5 loaded-release procedure.

Sources checked 2026-10-31 UTC: [TowerPro MG92B](https://towerpro.com.tw/product/mg92b/),
[Adafruit 2307](https://www.adafruit.com/product/2307),
[TI SN74AHCT125](https://www.ti.com/product/SN74AHCT125), and
[MicroPython 1.25.0 RP2 API](https://docs.micropython.org/en/v1.25.0/rp2/quickref.html).
