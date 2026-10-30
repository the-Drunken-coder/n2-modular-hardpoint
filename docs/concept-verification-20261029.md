# N2 concept verification: selected mechanical direction

Review date: 2026-10-29, America/New_York. Source baseline: [`e1150701358f31e536c807ee21e29eae4e6c4985`](https://github.com/the-Drunken-coder/n2-modular-hardpoint/tree/e1150701358f31e536c807ee21e29eae4e6c4985).

**State: concept only.** This note records the selected direction, the checks feasible without hardware, and the physical evidence still needed. The interactive concept is not a manufacturing release. Existing P14 numerical results do not qualify the changed interface, lug, stroke, actuator, or mounting.

## Decisions and scope

| Decision | Implementation intent |
|---|---|
| Keep a simple cross-bolt and solenoid | Investigate a larger-force, longer-stroke pull solenoid with spring return. A servo is a fallback only. A load-isolated sear is rejected and is not part of this concept. |
| Demonstrate a preloaded keyed face | Broad mating faces seat the payload. Defined keys/shoulders carry lateral reactions and moments; axial preload limits play. Neither friction alone nor preload alone establishes a load rating. |
| Demonstrate round and diamond locating features | One round locator fixes two in-plane translations; a correctly oriented relieved/diamond locator fixes the remaining in-plane rotation without redundantly fixing locator spacing. The face establishes the normal datum. Clearances and the actual load-sharing arrangement remain design inputs. |
| Increase useful stroke and lug thickness | Demonstrate how a longer bolt withdrawal can accommodate a thicker lug and retained overlap while preserving open clearance. Inspect every partially withdrawn state. |
| Use broad structural backing | Transfer receiver loads into a defined backing and host structure. Merely adding a thin plate does not reproduce an infinitely rigid FEA boundary. Twin supports per long pod remain an alternative, with their own alignment and release-coordination requirements. |
| Add a seating interlock | A partially inserted or skewed adapter must not be accepted as fully locked. A seat indication and a fully engaged keeper indication describe different conditions. The demonstration does not imply that a physical sensor or interlock has already been built. |
| Optional positive camera-pod lock | A captive manual lock can positively inhibit withdrawal for a retained camera pod. It must be disengaged/removed for commanded drop operation. The selected mode and lock state must be explicit. |

Battery power interfaces and wing aerodynamics/asymmetry are explicitly outside this work. Payload-dependent mechanical forces and moments are still necessary inputs to mounting and latch tests. No connector, aircraft power architecture, wing analysis, or battery procurement is introduced here.

## Illustrative stroke budget

The concept demonstration uses the following values to make the geometry understandable. They are not selected manufacturing dimensions or an actuator specification.

| Quantity | Symbol | Illustrative value |
|---|---|---:|
| Net keeper withdrawal | S | 6.0 mm |
| Lug thickness along keeper travel | t | 3.5 mm |
| Distal retained overlap | e | 1.0 mm |
| Distal support-to-lug axial gap | g | 0.3 mm |

The tip clears the far side of the lug at `x_clear = e + g + t = 4.8 mm`.

Nominal fully open margin is `c_nominal = S - e - g - t = 1.2 mm`.

Distal support ends at `x = e = 1.0 mm`; the bolt is still retaining the lug until `x = 4.8 mm`. Therefore the interval without distal support is **3.8 mm**. The older nominal interval was 1.7 mm. A thicker lug and longer stroke do not by themselves eliminate binding or prove stronger retention during this transition.

For real parts, use measured minimum keeper travel, maximum lost motion, maximum lug/gap dimensions, deflection and skew. A nominal 1.2 mm margin is not a guaranteed manufactured clearance. The actual open-clearance acceptance value remains to be set from the tolerance stack and departure path.

## Acceptance inputs still unknown

| Input | Why it is needed |
|---|---|
| Service load envelope `(Fx,Fy,Fz,Mx,My,Mz)` and payload CG offsets | Defines axial, transverse, eccentric and combined structural tests. A hanging mass alone is insufficient. |
| Required release load envelope | A payload may have a structural retention limit different from its reliable release limit. |
| Allowable installed mass and envelope | Prevents selecting a much heavier actuator merely because its endpoint force is high. |
| Minimum actuator-terminal voltage, wiring/driver limits and command duration | Defines available force and thermal/electrical conditions. The existing 5 V bench driver is not automatically suitable for a different solenoid. |
| Exact actuator model/winding, full-stroke force, return spring and linkage | Closes the withdrawal and return budgets without counting the spring twice. |
| Preload magnitude, application method and acceptable face opening/play | Establishes whether the locating interface remains seated and whether preload increases release demand. |
| Print material, conditioning, orientation and process | Establishes repeatable specimens and material evidence for the small retaining features. |
| Host/backing material, geometry, fasteners and assembly torque | Establishes a real installation boundary instead of assuming rigid full backing. |
| Fit limits, permanent-set limit and minimum closed/open engagement | Defines numerical acceptance of retention, reset and release. |
| Retention duration, cycle life, temperature/moisture range and vibration spectrum | Defines durability and environmental test conditions. A static 2 g load does not specify vibration. |
| Required release time and clearance corridor | Defines the difference between an electrical command, an unlocked keeper and a departed payload. |

The earlier **8.9 N axial service target and 17.8 N qualification/proof-screen target are provisional carryovers only**. They are not a working-load rating for the concept and do not define side loads or moments. Confirm or replace them before physical qualification; do not infer a capacity from them.

## What can be checked now

The current bench controller can be replayed without hardware. Run from the repository root:

```bash
python project/analysis/validation_20261029/replay_controller.py
```

The replay records the command, UTC execution timestamps, Python/platform details, SHA-256 hashes of the exact four electronics source files, full unittest output and return code. Its result is limited to the existing button/state/timing logic. It neither implements the proposed seating interlock nor exercises GPIO, a solenoid, temperature, physical engagement, loaded release or departure.

See [machine-readable verification status](../project/analysis/validation_20261029/verification_status.json), [controller result](../project/analysis/validation_20261029/controller_host_tests.json) and [controller log](../project/analysis/validation_20261029/controller_host_tests.log). Geometry/computation evidence produced separately must retain its own assumptions and revision identity.

## Physical protocols — all NEEDS_HARDWARE

Use the header-only CSV templates in [physical_pending](../project/analysis/validation_20261029/physical_pending/). No blank field means zero or pass. Record failures and interrupted trials as such. Use a restrained bench fixture and catch so the intended load path is measured without losing the test article.

### H1 — specimens, instrumentation and fit

Give every printed component, assembled mechanism, actuator, spring and mounting fixture an identifier. Record CAD revision/hash, material brand/batch, drying/conditioning, printer/nozzle, orientation, layer height, walls, infill and slicer profile hash. Weigh the completed assembly and record included hardware. Use matching-process specimens; a vendor bulk-material strength is not an assembly result.

Register force sensor/load-cell range, resolution, calibration and uncertainty; displacement measurement; voltage/current acquisition; temperature sensors; and synchronized video/position acquisition. Select ranges and resolution from the smallest margin being assessed. Record actual host/backing and fastener stack, torque and instrument alignment. Establish force/displacement zero and fixture compliance before each sequence.

Measure actual stroke, closed overlap, lug thickness, guide play, locator clearances, face gap, preload, fork/link lost motion and full-open clearance. Check fully seated, deliberately incomplete insertion and controlled skew. Inspect the round/diamond locator relief direction and verify that the second locator actually allows spacing tolerance. Measure the clearances after clamping to the real backing.

**Acceptance to set before test:** dimensional limits, preload window, permitted free play and minimum closed/open clearance. Required qualitative outcome: repeatable seating and motion without forced assembly, cracked contacts, or a false fully-locked indication.

### H2 — available actuator force and actual latch demand

Measure available pull versus keeper-equivalent position across the complete useful stroke, including the initial gap, loss of distal support, lug clearance and full-open endpoint. Sample sufficiently closely around discontinuities; record actual positions rather than assuming the catalog stroke. Test at minimum and nominal terminal voltage, cold and at a permitted warm condition, with the intended driver and pulse duration. Record voltage at the actuator, current, coil/case temperature, return spring and linkage friction.

Choose one accounting basis and keep it throughout: **(a)** measure net output with the return spring and linkage installed, then compare it with latch-only demand; or **(b)** measure gross actuator force and subtract measured spring/linkage demand once. Mark the basis in every row. Do not subtract a stock spring again from a manufacturer value whose definition is unknown.

With the actuator disconnected mechanically, use the force instrument to withdraw the keeper through the same path while applying the specified payload wrench, face preload and fit/misalignment cases. Log continuous travel or sufficiently close position samples in both withdrawal and return directions. Include dust/wear/environment states when defined. Compare demand and available force at matching positions and conditions; an endpoint holding-force number cannot replace this comparison.

**Proposed development gate:** lower-bound net available force at every required position is at least twice upper-bound external latch demand, including measurement uncertainty. This 2:1 margin is a proposed project criterion, not a supplier rating or proven release capacity. Confirm it before qualification. Powered full-stroke trials must also pass; static force curves alone do not prove dynamic release.

### H3 — physical retention, partial engagement and backing

Use a fixture reproducing the actual backing footprint, stiffness, fasteners and load application point. Start with at least three independently printed assemblies per chosen process/configuration as exploratory screening, not statistical qualification. Reserve separate specimens for destructive characterization; do not return destructively loaded or damaged parts to service.

After low-load seating checks, apply the agreed axial service target in controlled steps while measuring load, displacement, face opening and keeper movement. Add both signs of transverse load and the defined moments, followed by relevant combined cases. Repeat at selected intermediate keeper positions, especially just after distal support is lost and near lug clearance. Distinguish the normal retained configuration from deliberately degraded/partial engagement.

If the provisional 8.9/17.8 N targets are retained, label them as the selected axial screening loads in the test record. Set ramp rate, dwell time, permissible permanent set and stop conditions before testing. Record first slip, first visible damage, permanent set after unloading and ultimate failure separately. A survivor at 17.8 N is evidence for that specimen, fixture and condition; it is not a measured breaking load or a general flight rating.

For twin supports on one pod, repeat using the actual spacing and alignment. Measure load sharing rather than assuming 50/50; include a support-clearance mismatch and coordinated versus one-side-delayed release if both supports latch.

### H4 — seating interlock, optional lock and complete release

Test fully seated, partially inserted, skewed, obstructed and worn cases. Confirm separately the physical seat, full keeper engagement and optional manual-lock state. Reject a nearly closed keeper or command LED as sole evidence of retention. Define sensor-disconnected and stuck-indication responses if electrical sensing is used; the current controller has no such inputs.

For retained-camera mode, engage the positive lock and verify that an intended release command cannot withdraw the keeper, without prolonged actuator stall. For drop mode, explicitly disengage/remove the manual lock before the trial and confirm that the mechanism can unlock and the payload can depart. No automatic powered command should be used to overcome an engaged safety lock.

Record command-on, keeper-clear, payload-clear, command-off and actual return using synchronized position/video and electrical measurements. Apply the intended departure force and attitude; include a low-departure-force case. Interrupt upstream actuator power at early, middle and late withdrawal with the payload restrained, and document recapture, jam or return. Set acceptable release time and departure margin before acceptance. A successful pulse is not successful separation.

### H5 — wear, vibration, creep and environment

Define a duty cycle, service-cycle target, retention duration, temperature/humidity/contamination limits and measured or explicitly assumed vibration input before these tests. Use the actual mounted assembly and representative payload inertia. A peak static acceleration and spring-force calculation do not establish a vibration spectrum or endurance life.

During cycling, record release force, return, preload, engagement, play and surface damage at specified intervals. For sustained retention, log time-dependent deformation and post-unload set at the chosen temperature and material conditioning. For vibration, log input at the fixture and response at the mechanism; test relevant axes and watch for keeper migration, face separation, loose fasteners and false state indications. Repeat release/retention checks afterwards.

No cycle count, thermal range, vibration level or environmental rating is assigned by this concept. Define those inputs first; every H5 result remains NEEDS_HARDWARE until measured.

## Two actuator families with manufacturer force/stroke data

These are **screening candidates only**, not selected parts or purchase recommendations. Their 63 g and 125 g catalog masses are substantial relative to the original 12.6 g actuator, so they may violate the desired small/light envelope. A required force curve and mass allowance must be established before selection. Neither is a drop-in replacement for the existing mounting, spring, wiring or driver.

| Candidate family | Manufacturer-listed envelope | Available evidence and condition |
|---|---|---|
| Geeplus 224C small push-pull | 6 mm listed stroke; body diameter/height 22 × 28 mm; 63 g | [Official one-page datasheet](https://www.geeplus.com/wp-content/uploads/2023/10/small_push_pull_solenoid_224.pdf) has force/stroke curves for 3.75, 7.5, 15 and 37.5 W, stated at 20°C without a heatsink. PDF text was retrieved; no numerical curve points were extracted. A screenshot request encountered the site's verification wall. |
| Geeplus 253-L tubular pull | 12 mm listed stroke; body diameter/height 25 × 30 mm; 125 g | [Official one-page datasheet](https://www.geeplus.com/wp-content/uploads/2023/10/Tubular_solenoid_253.pdf) has force/stroke curves for 8, 16, 32 and 80 W. The page and curves were visually inspected; data assume 20°C and a 100 × 100 × 3 mm aluminum heatsink. No numerical curve points were digitized. |

The catalog table's holding forces are endpoint values, not force available throughout the stroke. Coil winding, excitation, maximum on-time, thermal mounting and voltage losses must match the chosen curve. Geeplus describes an externally supplied return force; the spring must be part of the design and force accounting. The larger power curves do not authorize overdriving an arbitrary winding or reusing the old bench electronics.

Sources checked 2026-10-29 America/New_York: [push-pull range](https://www.geeplus.com/push-pull-solenoids/), [tubular range](https://www.geeplus.com/tubular-solenoids/), [manufacturer selection guidance](https://www.geeplus.com/selecting-a-push-pull-solenoid/), and the two datasheets above. Stock, price and exact coil availability were not verified.

## Evidence files and state vocabulary

- `PASS_COMPUTED`: the named software or arithmetic check ran successfully; limited to its stated model or logic.
- `NEEDS_HARDWARE`: a physical measurement or trial has not occurred.
- `NEEDS_INPUT`: numerical acceptance inputs are still unspecified.
- `NOT_RUN`: an executable check has not been run.
- `FAIL`: an executed check did not meet its stated criterion.

The overall state remains `CONCEPT_ONLY` regardless of host-test success. Header-only physical templates deliberately contain no measured values, trial outcomes or implied passes.
