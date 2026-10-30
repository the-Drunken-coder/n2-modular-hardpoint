# R5 prototype measurement plan

All physical records start **PENDING**. Computational checks do not fill them.
Use three independently identified prints/assemblies before treating a single
successful specimen as a repeatable process. The following limits are explicit
development acceptance choices, not supplier ratings.

| Gate | Measurement | Development acceptance |
| --- | --- | --- |
| Purchased hardware | Actual case, horn, spline seating, follower and fasteners | Fits receiving limits and the complete motion envelope without forced assembly |
| Printed geometry | Envelope, guide, lug, keys, nut walls and case fit | Meets drawings; no cracking, delamination or obstructed nut/screw access |
| Preload | Total installed pad force | 0.5–3.0 N; record force versus seating displacement |
| Retained geometry | Keeper engagement and actual seating | Positive full engagement; do not rely on the servo command as an indicator |
| Released geometry | Lug opening and mechanical-stop margin | At least 0.5 mm at both limits, with the lid fitted |
| Guide separation | Keeper float before follower/slot interference | Structural guide reaches its intended support before follower takes vertical payload load |
| Supply | Servo-terminal waveform during movement | 4.80–5.10 V with a nominal 5.00 V source |
| Static retention screen | 17.8088764 N, 60 seconds, restrained fixture | No release, damage or more than 0.1 mm permanent set |
| Loaded operation | 8.9044382 N through the complete release | Observe actual lug clearance and payload departure; log every attempt |
| Drive margin | Measured torque available versus required along the complete path | Available minus uncertainty at least 1.5 times demand plus uncertainty at every measured position |
| Power behavior | Supply loss, reset and PWM loss while retained | No uncommanded release; record physical movement, not only command state |
| Mid-stroke interruption | Supply loss at several withdrawal positions | Record outcome; do not assume spring return or fail-closed behavior |

## Loaded cycles and wear

For each of three specimens, perform 25 loaded cycles in each of four declared
conditions: clean nominal fit, warm actuator, measured dimensional-limit fit,
and a documented contamination condition. That gives **100 attempts per
specimen and 300 total**. Define the warm temperature and contamination dose
before testing, within the supplier's temperature limits and the material's
permitted use. Record every failure; do not remove it from the history.

For every attempt, log specimen/material/print-profile identity, condition,
cycle number, servo-terminal voltage, peak current, case temperature, commanded
and measured travel, time to clear, observed payload departure and outcome.
Inspect the lug edge, keeper contact faces, yoke, aluminum sleeve, horn and pads
at each 25-cycle interval. Recheck preload, clearances and permanent set.

The selected economical sleeve is aluminum. Its seller does not specify alloy,
surface finish or dimensional tolerances, so wear performance cannot be borrowed
from the previous stainless sleeve. Replace a burr-prone or out-of-size part;
do not enlarge the structural slot to accommodate it without revising the fit
record.

## Torque measurement boundary

Measure required torque at the crank axis with the actual horn, sleeve, yoke,
guide, pads, lid and 2 g equivalent payload load in place. Separately measure
available servo torque at the same angles, speed, terminal voltage and thermal
condition. A straight pull on a disconnected keeper omits follower friction and
the moving force offset; it is useful diagnostically but is not the complete
drive-margin measurement.

The 5.5 mm reference radius gives an optional equivalent tangential force:

    F_equivalent = T_measured / 5.5

Keep torque in N mm and equivalent force in N. Never substitute advertised
stall torque, supply current or the ideal crank equation for measured available
torque.

## Wing demonstration boundary

The supplied wing bay illustrates access, fit and assembly. Before installing a
payload on an aircraft, that aircraft needs a structural design of the actual
skin, spar/ribs, frame, joints and panel retention, including the opening's
effect on torsion, loads from the real pod's center of mass, and asymmetric
operation. Those results are not supplied by the one-off installation model.
