# R5 electrical interface and calibration

The cartridge contains the MG90D and its mechanical drive. Its existing
three-conductor servo lead exits upward into the wing. The controller, power
switch and any logic-level buffer remain accessible inside the wing or fuselage;
they are not hidden inside the 85.6 × 54 × 20 mm mechanical envelope.

## Connections

| Connection | Requirement |
| --- | --- |
| Servo power | Regulated nominal **5.00 V**; measure at the servo during movement. |
| Servo ground | Common with the control-signal source. |
| Position command | Servo PWM through a verified compatible output. The project harness supplies a buffered 5 V signal. |
| Available source capacity | Retain the provisional **3 A per module** allowance. This is available capacity, not measured MG90D consumption. |
| Terminal-voltage test band | **4.80–5.10 V** during the specified test. 5.10 V is an upper test bound, not a changed nominal supply setting. |
| Power-off isolation | Remove servo supply when the test procedure calls for power off. Stopping PWM alone is not power isolation. |

[TowerPro's MG90D specification](https://towerpro.com.tw/product/mg90d-2/)
lists 4.8–6.6 V; [Adafruit's product page](https://www.adafruit.com/product/1143)
lists 4.8–6 V and warns that this digital servo can continue holding position
after the control signal stops. The selected 5 V supply lies within both ranges.
Neither source establishes a useful loaded torque/current curve for this
mechanism.

The supplier describes the middle connector conductor as power and the
brown/black conductor as ground. Check the actual connector and documentation
before connection; do not reverse a connector because an extension lead uses
different colors. Label the installed harness **SIGNAL / +5 V / GND**.

The existing [R4 bench harness](../../r4/electrical/README.md) provides a
switchable servo supply, common ground, and a 5 V SN74AHCT125 output buffer for
a 3.3 V Pico signal. Its electrical topology is a reusable bench arrangement.
**R4's calibrated pulse endpoints and long-stroke firmware assumptions are not
R5 calibration values.** This revision does not claim new aircraft-controller
software or an integrated PCB inside the cartridge.

## Cable route

The upper-lid exit and matching host-frame passage align. Thread the stock
connector through them before fastening the cartridge, connect it through the
open hatch, and secure a service loop to the host frame. The route must clear
the crank, fork, screwdrivers and hatch seating surface. The model includes the
continuous passage reservation; it does not model individual flexible wire
strands or prove a particular connector's fit. Measure the actual connector
before printing the final host frame.

Provide enough accessible slack to disconnect the module before lowering it
from the wing. Do not pull on the servo's case entry to remove the module.
Record the installed lead length, connector, terminal voltage and peak current
in the prototype record. A different aircraft power system needs its own source
and wiring assessment.

## Unloaded endpoint calibration

1. Remove the payload, support the cartridge on the bench, and remove its upper
   cover. Inspect the mechanism by hand before energizing anything.
2. Characterize the purchased servo's pulse/angle range without the linkage
   attached. Start near the neutral pulse and move in small increments, watching
   shaft angle and current. Do not assume that a library's 0–180 setting is a
   calibrated physical angle or that a quoted approximate travel is guaranteed.
3. Index the supplied horn to the drawing's retained crank angle. Fit the
   follower and keeper, then approach the retained position at low speed. Verify
   the actual tip overlap and that the guide, rather than the follower, supports
   vertical keeper movement.
4. Move toward the nominal released crank angle of 100° from the 15° retained
   drawing pose. The nominal differential angle is **85°** and calculated
   withdrawal is **6.267657 mm**. These are linkage coordinates, not servo pulse
   instructions.
5. Record measured pulses that produce at least **0.5 mm clearance past the
   actual lug**, with at least **0.5 mm clearance to the physical open stop**.
   Verify both with the lid installed. Do not drive against a stop to establish
   a pulse endpoint. The 105° reserved collision sweep is not the normal command.
6. Record voltage at the servo terminals, supply current, case temperature,
   actual travel, photographs and the hardware specimen ID. Leave automatic
   release inhibited until these observations and the loaded tests are complete.

The servo's internal feedback does not report keeper engagement or payload
separation to the aircraft. No position sensor or seating interlock is included
in this revision. A commanded pulse is only a command. Power removal also does
not establish that the servo returns to retention; observe and record retained
and mid-stroke power-loss behavior with a restrained test payload.
