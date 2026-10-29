# N2 requirements

Set by Lane, 2026-10-29. Priorities, in order: **reliability (no accidental drops) > simplicity > ease of manufacture.** Every requirement has a pass/fail check.

| # | Requirement | Verification |
|---|---|---|
| R1 | Payload, including the adapter: **≤ 1.81 kg (4 lb)**. | Design input. |
| R2 | Load factor **2 g** (gentle RC drone/plane flight; assumed value). Design load = 1.81 × 9.81 × 2 = **35.6 N**. | Design input. |
| R3 | Load direction: **straight hanging pull (+Z) only**. Off-axis capacity is not required. | Design input. |
| R4 | Safety factor **2**: minimum predicted failure **≥ 71.2 N**. Verified by (a) analysis, (b) a proof test of spare parts to 71.2 N (2× design load) without failure, and (c) the Z coupon test in [test-plan.md](test-plan.md) meeting the assumed layer strength. | FEA + proof test + coupon test |
| R5 | Fail-safe. (a) Stays latched with power removed. (b) Releases only on command. (c) The load cannot back-drive the latch open. (d) No partial-engagement state with reduced capacity. (e) Vibration does not open it. | Power-off hold test. Back-drive test (hold the design load with the actuator disconnected and try to open it). Engagement tolerance stack-up. Vibration test (method TBD). |
| R6 | Simple: **one moving part and one actuator** if possible. | Design review / BOM |
| R7 | Manufacture: printed parts must print on a common FDM printer in a common engineering material (for example PAHT-CF), with **no critical supports on load-bearing or sliding faces**. Hardware must be **off-the-shelf** only. | Slicer review / BOM |

## Compliance: current P13 design (PAHT-CF, SF 2)

| # | Status | Basis |
|---|---|---|
| R1–R3 | n/a | Inputs. |
| R4 | **FAIL** | Predicted straight-pull failure is **18.3 N** with the distal roof lost, or about 34–37 N with it engaged ([provisional-load-rating.md](provisional-load-rating.md), [improvement-study.md](improvement-study.md)). The requirement is ≥ 71.2 N, so the shortfall is 3.9× (2× even when engaged). No proof test or coupon test has been done. Best studied variant: ~42 N (idea 4/5), still short. Scaling it 1.5× (×2.25 exact) gives ~95 N, which would pass on paper. |
| R5a | **Likely PASS, untested** | The keeper is spring-returned to the latched position, and the solenoid only unlocks while energised ([build_n2.py](../project/cad/build_n2.py) release sequence). Spring force is not measured. |
| R5b | **Likely PASS, untested** | Same basis. No inadvertent-actuation analysis. |
| R5c | **Unknown** | The load acts in Z, normal to the keeper's X travel, so there is no designed ramp. Back-drive then depends on contact tilt or friction under deflection, which is not analysed or tested. |
| R5d | **FAIL** | The 0.6 mm distal overlap is a known fragile state: it is lost to tolerance or wear, and capacity drops 1.86×. The repo also notes the support disengages first during withdrawal. |
| R5e | **Unknown** | No vibration analysis or test. Spring preload is unknown. |
| R6 | **PASS** | One moving printed part (keeper) and one actuator (Adafruit 2776 solenoid). |
| R7 | **FAIL (supports)**; hardware PASS | The print notes say both receiver guide roofs need local support with running-face cleanup, and the keeper retaining arm needs local support on a sliding part. Hardware is off-the-shelf (Adafruit 2776, M2 screws and nuts). PAHT-CF printability of the thin 1.4 mm lug is unverified. |

**Gaps to close:** R4 (strength is ~4× short), R5c, R5d, R5e, and R7 supports. The next redesign should be driven by R4 + R5d: longer engagement, a thicker lug, and a larger scale (see [improvement-study.md](improvement-study.md)).
