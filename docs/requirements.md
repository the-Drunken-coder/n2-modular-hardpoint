# N2 requirements — current P14 baseline

Set by Lane, 2026-10-29. Priorities, in order: **reliability (no accidental drops) > simplicity > ease of manufacture.** The 1 lb payload is a provisional design input, not a demonstrated capacity.

| # | Requirement | Verification |
|---|---|---|
| R1 | Carried mass **≤ 0.454 kg (1 lb)**, including the payload, removable adapter and its attached hardware. Provisional; the former 4 lb input is superseded. | Weigh the complete carried assembly. The aircraft-side receiver is not part of carried mass, but its mass and mounting loads remain aircraft integration inputs. |
| R2 | Design load factor **2 g**, assumed for gentle RC flight. Design load = 0.454 × 9.81 × 2 = **8.9 N**. | Design input; verify the actual aircraft's maneuver, shock and release loads before use. This does not specify a vibration spectrum. |
| R3 | Required load direction: **straight hanging pull (+Z extraction) only**. Off-axis capacity is not required by this baseline. | Fixture and installation alignment review. Off-axis use requires a separate assessment. |
| R4 | Design safety factor **2**: the minimum analysis stress-screen crossing must be **≥ 17.8 N** (2 × 8.9 N), with its assumptions justified. Complete sacrificial assembly proof tests to **17.8 N** without failure and material checks per [test-plan.md](test-plan.md). | Analysis, material evidence and physical proof are separate gates. A screen crossing is not a measured breaking load; passing a small proof-test sample does not establish a working-load rating. |
| R5 | (a) Stays latched with power removed. (b) Releases only on command. (c) Payload load cannot back-drive the latch open. (d) No partial-engagement state with reduced capacity. (e) Vibration does not open it. | Power-off and control tests; measured return force; tolerance/engagement checks; loaded-release tests; aircraft-specific vibration test. Record unlocking and payload clearance separately. |
| R6 | Simple: **one moving printed part and one actuator** if possible. | Design review / BOM. |
| R7 | Printed parts must be manufacturable on a common FDM printer in a common engineering material, with **no critical supports on load-bearing or sliding faces**. Hardware must be off the shelf. | Slicer review, printed-part inspection and BOM. Current prototype material: dried Bambu PAHT-CF. PLA remains a comparison baseline. |

## Current evidence: P14 in PAHT-CF, SF 2

Geometry and analysis: [p14.md](p14.md). Manufacturing: [print-requirements.md](print-requirements.md). **No physical qualification is complete.**

| # | Status | Basis and remaining work |
|---|---|---|
| R1–R3 | Provisional inputs | 0.454 kg, 2 g and straight +Z define this iteration. They do not establish a flight envelope. |
| R4 | Analysis screen exceeds target; physical checks open | The adapter's **33.68 N** scaled screen is 1.89× the required 17.8 N. Receiver screens are 59.17 N with both roofs and 36.73 N with the distal roof ineffective; keeper checks are ≥57.4 N. These are separate linear component models, with ideal receiver backing and PLA results scaled by 47/31, not a validated anisotropic PAHT-CF assembly model. Actual mounting, material and proof tests remain open. |
| R5a | Open | Spring return is intended to retain the keeper without power. Actual preload, seating and power-off retention are unmeasured. |
| R5b | Open | Local control is intended to energize only for release. Startup, reset, power interruption and unintended-command behavior require hardware tests. |
| R5c | Open; preliminary analytical check only | The friction/deflection calculation in p14.md is a sensitivity check. Friction, contact tilt, wear and return force have not been measured. |
| R5d | Open; two modeled support states improved | Both modeled straight-pull support states are adapter-governed at 33.68 N. This does **not** cover every partial keeper position, tolerance combination or worn contact. Define and verify the acceptable latched engagement before claiming compliance. |
| R5e | Open | A 2 g moving-mass calculation gives 0.26 N and an illustrative 2× preload target of 0.52 N. It is not a vibration qualification. Measure the spring/actuator force curves and define the installation's vibration exposure. |
| R6 | Design check satisfied | One moving printed keeper and one Adafruit 2776 solenoid. No extra moving printed parts added by P14. |
| R7 | CAD screening only; print verification open | The overhang classifier reports no support-required area on the four P14 print orientations. Bridge quality, sliding clearances and the 1.4 mm lug still require slicer review and a PAHT-CF print. |

**Next gate:** print and inspect P14 specimens, measure the mechanism and actuator, and run the [P14 bench test plan](test-plan.md). The **8.9 N requirement**, **17.8 N sacrificial proof target**, **33.68 N analysis screen**, and **16.84 N screen divided by SF 2** are different quantities.

## Superseded P13 comparison

P13's distal-ineffective receiver screen was 12.089 N in PLA, scaled to 18.33 N for PAHT-CF. Its 9.1 N value was that screen divided by SF 2 and rounded down, not a physical rating. The margin above 17.8 N was only about 3%, within the numerical variation discussed in the older studies. P13 also retained a weaker one-sided proximal roof and print-support concerns.

P14 replaces the current geometry and test instructions. P11–P13 calculations remain in [provisional-load-rating.md](provisional-load-rating.md) as historical comparisons; they must not supply the current print or test loads. The old 4 lb case required 71.2 N and is outside the current baseline.
