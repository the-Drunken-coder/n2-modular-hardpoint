# N2 requirements

Set by Lane, 2026-10-29. Priorities, in order: **reliability (no accidental drops) > simplicity > ease of manufacture.** Every requirement has a pass/fail check.

| # | Requirement | Verification |
|---|---|---|
| R1 | Payload, including the adapter: **≤ 0.454 kg (1 lb)**. Provisional: Lane is unsure and this may change (was 4 lb). | Design input. |
| R2 | Load factor **2 g** (gentle RC drone/plane flight; assumed value). Design load = 0.454 × 9.81 × 2 = **8.9 N**. | Design input. |
| R3 | Load direction: **straight hanging pull (+Z) only**. Off-axis capacity is not required. | Design input. |
| R4 | Safety factor **2**: minimum predicted failure **≥ 17.8 N**. Verified by (a) analysis, (b) a proof test of spare parts to 17.8 N (2× design load) without failure, and (c) the Z coupon test in [test-plan.md](test-plan.md) meeting the assumed layer strength. | FEA + proof test + coupon test |
| R5 | Fail-safe. (a) Stays latched with power removed. (b) Releases only on command. (c) The load cannot back-drive the latch open. (d) No partial-engagement state with reduced capacity. (e) Vibration does not open it. | Power-off hold test. Back-drive test (hold the design load with the actuator disconnected and try to open it). Engagement tolerance stack-up. Vibration test (method TBD). |
| R6 | Simple: **one moving part and one actuator** if possible. | Design review / BOM |
| R7 | Manufacture: printed parts must print on a common FDM printer in a common engineering material (for example PAHT-CF), with **no critical supports on load-bearing or sliding faces**. Hardware must be **off-the-shelf** only. | Slicer review / BOM |

## Compliance: current P13 design (PAHT-CF, SF 2)

| # | Status | Basis |
|---|---|---|
| R1–R3 | n/a | Inputs. |
| R4 | **MARGINAL PASS (paper)** | Predicted straight-pull failure is **18.33 N** vs the required ≥ 17.8 N, +3%. That number is already the governing **distal-lost** case (receiver `distal_ineffective_bonded`: 12.09 N PLA × 47/31; [provisional-load-rating.md](provisional-load-rating.md)), so the design meets R4 even with the distal roof lost. The +3% margin is inside the ~7% mesh scatter, so the proof test to 17.8 N decides. With the distal roof engaged, failure is about 34–37 N, roughly 2× margin. No proof test or Z coupon test has been done. |
| R5a | **Likely PASS, untested** | The keeper is spring-returned to the latched position, and the solenoid only unlocks while energised ([build_n2.py](../project/cad/build_n2.py) release sequence). Spring force is not measured. |
| R5b | **Likely PASS, untested** | Same basis. No inadvertent-actuation analysis. |
| R5c | **Unknown** | The load acts in Z, normal to the keeper's X travel, so there is no designed ramp. Back-drive then depends on contact tilt or friction under deflection, which is not analysed or tested. |
| R5d | **FAIL** | The 0.6 mm distal overlap is a known fragile state: it is lost to tolerance or wear, and capacity drops 1.86×. At 1 lb that state still meets R4 on paper, but it is a reliability hazard the requirement excludes. The repo also notes the support disengages first during withdrawal. |
| R5e | **Unknown** | No vibration analysis or test. Spring preload is unknown. |
| R6 | **PASS** | One moving printed part (keeper) and one actuator (Adafruit 2776 solenoid). |
| R7 | **FAIL (supports)**; hardware PASS | The print notes say both receiver guide roofs need local support with running-face cleanup, and the keeper retaining arm needs local support on a sliding part. Hardware is off-the-shelf (Adafruit 2776, M2 screws and nuts). PAHT-CF printability of the thin 1.4 mm lug is unverified. |

**Gaps to close:** R4 is marginal (needs the proof test and the Z coupon test; any coupon shortfall below 47 MPa fails it). R5c, R5d and R5e are open, and so are the R7 supports. R5d is no longer a strength problem (the distal-lost case still meets R4), but the fragile engagement state still violates the reliability priority. If R1 goes back up, re-check R4 first: the 4 lb case needs ≥ 71.2 N (see [improvement-study.md](improvement-study.md)).
