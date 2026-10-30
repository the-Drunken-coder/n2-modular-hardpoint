# R4 design decisions and scope

R4 is the active development proposal. It packages the user's selected mechanical direction as one standalone hardpoint. The original P14 files remain an issued historical reference; the R3 modular-core study remains a reproducible comparison. Neither supplies qualification for R4.

| Decision | R4 implementation | Reason |
|---|---|---|
| Standalone hardpoint | Receiver contains its own guide, seat, mechanism walls and actuator mount; four host attachment interfaces | Integration must not depend on an external receiver rail or aircraft housing being present. |
| Preloaded keyed seat | Rectangular locating features, deliberate relief of redundant constraints, four replaceable foam pads in defined recesses | Locate the payload and take up play with a specified, measurable preload. |
| More structure | Thicker base, integral guide support and wider lug sidewalls/root support | Reduce the prior cantilever and thin-feature weaknesses while maintaining assembly and release access. |
| Thicker retaining lug | 3.5 mm thickness along keeper motion | Preserve the user's preferred stronger lug concept. |
| Longer travel | A fully defined servo/crank/follower/yoke withdraws the keeper beyond complete lug disengagement | Pair the thicker lug with an actual drive and motion envelope. |
| Actuator | Hitec HS-65MG at regulated nominal 5 V, driving the loaded keeper directly | The user allowed a servo. The R3 Adafruit 3992's mass and unproven long-gap force made it a weaker prototype choice. No sear is added. |
| Printed grouping | Three structural manufactured bodies; integral features never separate in the exploded view | Match the model, BOM, print exports and assembly instructions. |
| Equipment lock | Deferred | Integration access and a captive lock mechanism will be addressed after the installation is defined. R4 does not contain the earlier loose pin. |
| Round/diamond pins and seating interlock | Omitted | The user rejected these additions. |
| Aircraft backing, twin hardpoints and wing loads | External integration scope | The individual mechanism supplies mounting interfaces and load cases; it does not define the aircraft structure or aerodynamic limits. |
| Payload battery/data transfer | Deferred | Mechanical carriage does not imply an electrical payload interface. |

## Fixed inputs and selected engineering values

The user fixed the supply at 5 V and requested release at 2 g. The working departing mass remains 0.454 kg, including adapter and all departing attachment hardware. The corresponding straight extraction load is 8.9044 N using standard gravity. A 17.8089 N fixture load is a separate 4 g/safety-factor sensitivity and planned sacrificial proof target, not an established rating.

One-can and two-can pod envelopes are integration sketches: approximately Ø70 × 125 mm and Ø70 × 250 mm. They are not an unrestricted permitted CG or side-load envelope. R4 includes a stated lateral/moment sensitivity at the hardpoint interface; the actual host and pod must supply their load cases before any flight use.

The approximate 100 × 65 mm footprint, 45 mm height and 100 g installed mass are engineering planning targets derived from the user's size comparisons. The user did not set a numerical mass limit. The mass account separates departing hardware, retained mechanism, local controls/harness and aircraft-specific structure.

## Power-off behavior

The servo is a deliberate change from a spring-return solenoid. The intended retained pose uses the defined crank geometry and mechanical stops; it must pass an unpowered-retention test. Removing power during motion can leave an intermediate position. The controller does not infer retention or separation from a commanded PWM value, and it does not automatically drive the mechanism closed after release. A controller LED describes the command state only.

## What is selected versus what is measured

CAD dimensions, the bill of materials, assembly operations, nominal fits, prototype process, electrical topology, motion law, numerical load cases and bench acceptance criteria are selected in this package. Physical part dimensions, material allowables, actual friction and preload, servo output force, thermal behavior, power-off vibration retention and successful loaded separation require measurements on a manufactured assembly. Those are explicit evidence gates with record formats, not undecided design alternatives.

A passing computational workflow means its declared numerical and artifact checks passed. It must not relabel missing physical evidence as a passed requirement.

The 12 N drive-load case is a selected sensitivity on the slot, keeper and servo mounting load paths. It does not bound a stalled servo at an obstructed, near-dead-center crank: the mechanical advantage grows strongly near that position. Unloaded endpoint calibration, free manual travel and the no-buzz criterion are required before loading. Hard-stop abuse, obstruction and stall protection are not qualified by that linear calculation.
