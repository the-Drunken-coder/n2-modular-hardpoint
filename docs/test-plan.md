# R5 bench acceptance plan

**Status: PLANNED; no physical tests have been performed.** This is the active R5 procedure. [P14's solenoid plan](p14-test-plan.md) is historical. Software/FEA success must not change the physical status.

## 1. Configuration and development envelope

Use three independently printed complete assemblies (A, B, C) of the same proposed revision. Each includes the body, keeper, adapter, specified crank-pin hardware, actual servo and the selected host/payload fasteners. Record all deviations; a different material, print orientation, major fit adjustment or hardware substitution is a different configuration.

The initial campaign is an engineering development acceptance gate, not a statistical field-reliability or flight qualification. Its selected conditions are dry, conditioned parts at 20–25 °C, straight −Z load, measured supply/logic within the R5 electronics limits, and the identified rigid bench fixture. Record humidity and conditioning history. Other temperature, moisture, vibration, mounting or load-vector conditions remain unqualified.

Before loading, fill [specimen records](../project/designs/r5/records/specimens.csv) and the [installation interface record](../project/designs/r5/records/installation.csv). Record:

- Git commit, CAD export identity, firmware/configuration/calibration identity and servo serial/lot.
- Printer, filament lot, drying, post-conditioning, orientation, nozzle, layer profile, actual slicer project and measured masses.
- Actual guide fit, keeper/tab dimensions, full engagement, released clearance, horn radius and cable route against the [R5 print recipe](../project/designs/r5/PRINTING.md).
- Actual screw/pilot dimensions, engagement, installation torque, crank-pin running gap/retention and mating structure.
- Force, voltage/current and timing instrument ranges, calibration/accuracy and recording rate.

Establish the self-tapper installation torque and pull-out behavior on matching process coupons before loading an assembly. No numerical tightening torque is invented here. An unknown process or failing coupon keeps the assembly gate pending.

## 2. Fixture and event definitions

Mount through all four R5 host bosses with the selected actual fasteners. Use a rigid fixture whose drawing and material are recorded; it qualifies only that fixture. Attach the payload through the real adapter holes. Apply axial force through the intended load center without adding an unrecorded moment or preventing normal adapter motion.

Use a measured force fixture, pulley or equivalent test load that maintains the required extraction force until keeper disengagement. Extra bench load is an equivalent-force test and does not increase the 0.454 kg permitted departing mass. Record actual moving mass separately. A catch must stop the released item without loading the mechanism before departure.

Define the events before the run:

| Event | Definition |
|---|---|
| t0 | Intentional release command reaches the bench controller |
| t1 | Measured keeper tip clears the actual tab, with at least 1.50 mm open clearance (0.50 mm reserve plus 1.00 mm spare travel) |
| t2 | Highest adapter feature clears the body and adapter has moved at least 20 mm along −Z without recontact |
| t3 | Operator supports/reinstalls the adapter, deliberately commands latch, and verifies full engagement |

Use synchronized video of at least 120 frames/s or position sensing with comparable timing resolution. These are temporary test instruments, not added product features. Record uncertainty; command logs alone cannot establish t1 or t2.

Selected development timing limits are **t1−t0≤1.0 s** and **t2−t0≤2.0 s**. These are acceptance targets, not demonstrated capabilities. Revise them deliberately before testing if the intended installation requires different timing.

## 3. Fit, power and unloaded operation

1. Inspect the current print and purchased parts, gland recess, continuous lead path, actual crank-pin gap and fastener retention.
2. Calibrate using the [R5 electronics procedure](../project/designs/r5/electronics/README.md). Confirm the real latched and released keeper positions; nominal software degrees do not count.
3. Measure terminal voltage and signal high/low levels at the servo during motion and holding. Record startup, STOP, signal interruption and reconnect behavior with the adapter supported.
4. Run ten unloaded release/reset cycles per assembly. Every cycle must clear and relatch without scraping, jamming, screw movement or sustained stall.
5. An automatic startup or reconnect movement, uninspected damage, failed dimensional limit or unexplained current rise stops loaded trials.

Power-off retention is deliberately not required. Loss of retention after disconnecting actuator power is not reclassified as an aircraft-wide power failure; record the observed local consequence.

## 4. Complete-assembly static retention

The required service force is:

`0.454 × 9.80665 × 2 = 8.9044382 N`.

The separate proof target is:

`2 × 8.9044382 = 17.8088764 N`.

Using a supported catch and measured load, increase axial force in stages of approximately 4.45 N, 8.90 N and 13.36 N, holding 10 s at each stage. Then hold the complete assembly at **17.8089 N for 60 s**. The measured force, including instrument uncertainty, must remain between the target and 105% of it during the scored proof dwell. Record actual force, displacement, servo terminal voltage/current and any event.

Pass requires no separation, crack, layer split, mounting slip, fastener movement or permanent deformation that violates the original inspected fit/engagement limits after unloading. Recheck the actuator path and open clearance. Do not re-tighten, sand or reset a shifted joint and count the original trial as a pass.

Repeat for A, B and C. This is a complete load-path proof, not an adapter coupon test. The force multiplier is not a working-load rating and does not qualify unspecified side loads or moments.

## 5. Repeated loaded release and reset

For each of A, B and C, perform **100 scored cycles** with **8.9044 N** axial extraction force maintained through keeper disengagement. The scored force range is the target through 105% of it, including uncertainty. Do not require release at 17.8 N; that is the separate retention proof.

For every cycle:

1. Support and fully seat the adapter, command latch deliberately and inspect engagement. Confirm the selected payload envelope and clear departure path.
2. Apply and record the full 8.9044 N release load.
3. Issue one release command. Record t0, t1, t2, minimum terminal voltage, peak current, keeper clearance and contact observations.
4. Count a failure for late/missing clearance, extra command, manual help, binding, recontact, any unintended release, or an electrical condition outside the accepted range.
5. Remove the test load, support the adapter and reset deliberately. Inspect engagement again. Record t3 and reset outcome.

Inspect retaining edges, guide roof/floor, yoke, slot/pin, tab root, cable and fasteners every ten cycles. Record wear even when motion succeeds. After 100 cycles, repeat the complete-assembly 17.8 N proof and dimensional inspection.

The development campaign requires **300/300 successful scored cycles** and all three post-cycle proofs. A failure remains in the record; repair/reprint starts a new configuration campaign rather than deleting the result. This limited sample is not a claim of zero field-failure probability.

## 6. Defined jam and sustained-hold trials

After the normal campaign, use an identified sacrificial assembly for the documented lower-tab unseated pose. Restrict the stall exposure to the maximum established by the selected servo/driver characterization. If no bounded stall exposure has been established, this physical gate remains pending; do not intentionally stall it indefinitely.

Record actual contact height, torque/current, time and deformation. Inspect and repeat static proof afterward. The reinforced-root calculation covers its stated pose only; higher hole-ligament contact, arbitrary mis-seating and repeated jams require their own evidence. Do not mark all jam conditions qualified from one test.

On another identified specimen, hold **8.9044 N for 60 min** within the initial ambient/conditioning envelope. Record creep, local temperature and power throughout, then perform ten loaded releases and re-inspect. This establishes only the tested dwell; other carriage durations and environments remain open.

## 7. Acceptance, records and later installation

Use the header-only templates in [R5 records](../project/designs/r5/records/README.md). Attach raw force/power/time traces and videos, including every failure. A reviewer must associate the results with the exact specimen and revision before updating physical status.

| Gate | Required result |
|---|---|
| Print, hardware and control acceptance | All stated inspections complete, no undocumented rework |
| Unloaded cycle gate | 10/10 per assembly |
| Initial complete-assembly proof | 3/3 at 17.8089 N for 60 s |
| Loaded release | 100/100 per assembly at 8.9044 N, with both t1 and t2 accepted |
| Post-cycle proof/inspection | 3/3; no unacceptable permanent change |
| Defined jam trial | Documented bounded exposure, inspection and subsequent proof |
| Sustained hold | 60 min at 8.9044 N followed by 10/10 loaded releases |
| Installation | Explicit force/moment, mounting, power, environmental and departure limits recorded |

Passing this bench campaign does not qualify an aircraft installation. Use the [installation interface](../project/designs/r5/docs/installation-interface.md) to identify pod CG, lateral forces/moments, host stiffness, vibration, service duration and departure corridor. Expand qualification only against those stated conditions.
