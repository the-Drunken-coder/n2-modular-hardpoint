# N2 P14 bench verification plan

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](test-plan.md); the specifications, files and results below apply only to the earlier package.

**Current specimen: P14 bridged receiver and flat-print keeper, dried Bambu PAHT-CF.** This plan replaces the P13 / 9.1 N plan. It checks the provisional **0.454 kg carried mass at 2 g** requirement: **8.9 N design load** and **17.8 N sacrificial proof target** at SF 2. Neither is the predicted breaking load.

The recorded P14 analysis gives a **33.68 N scaled stress-screen crossing** and **16.84 N after division by SF 2**. These are analysis estimates, not demonstrated capacities or alternate test targets. See [requirements.md](p14-requirements.md) and [p14.md](p14.md). Passing this bench plan does not by itself qualify an aircraft installation.

## 1. Specimens and setup

- Use **three complete sacrificial P14 assemblies**, with unique specimen IDs. Do not fly specimens used for proof, partial-engagement or failure testing. Record which parts are reused between trials.
- Confirm the P14 geometry: proximal bridge ends at X 31.7 mm; keeper link begins at X 32.0 mm; keeper underside is flat at Z 7.2 mm; stem slot is ±1.0 mm. Lug 1.4 mm, nominal distal overlap 0.6 mm and nominal actuator stroke 3 mm are unchanged. Use the current generated files, not P13 exports.
- Print per [print-requirements.md](p14-print-requirements.md). Record filament lot, drying/storage, printer/nozzle, orientation, layer height, walls, infill, temperatures and slicer 3MF. Check that the load-bearing regions are solid and bridge surfaces do not obstruct the keeper.
- Mount the receiver to a **representative airframe/backing coupon with the installation-selected host fasteners**, through its two Ø3.2 mm holes at **(X, Y) = (5, 14) and (35, −10) mm** in assembly coordinates. These are separate from the **two M2 solenoid-clamp screws**, which do not attach the receiver to the aircraft. Record host-fastener diameter, grade, length, thread engagement, washers, backing/coupon construction and tightening method. Do not glue the receiver to the bench: the P14 receiver analysis uses ideal backing, which does not verify this real mounting. Hole geometry comes from [solenoid_parts.py](../project/cad/solenoid_parts.py), called with receiver length parameter 38 mm by [build_n2.py](../project/cad/build_n2.py).
- Pull the adapter in **+Z extraction**, with no intentional eccentricity. Use a force gauge or weighed suspended masses. The indicated force must include the adapter, attached hardware and suspended fixture mass. At 1 g, 8.9 N corresponds to approximately 0.907 kg total suspended mass, although the proposed in-flight carried mass is 0.454 kg at 2 g.
- Measure displacement at the adapter relative to the receiver. Record instrument resolution, load uncertainty, ambient temperature and humidity. Film the keeper and payload path. Use a catch box and keep people clear of the suspended mass; disconnect the coil while loading.

## 2. Fit, actuation and material gates

Before proof loading:

1. Inspect all four prints for cracks, delamination, under-extrusion and bridge defects. Measure lug, slot, roof engagement and keeper clearances. Record actual distal overlap and the fully seated position.
2. Measure keeper travel and require **at least 0.20 mm full-open axial lug clearance after measured variation**, consistent with the provisional development criterion in [PRINTING.md](../project/manufacturing/PRINTING.md); the nominal CAD margin is 0.7 mm. Record the measurement and variation allowance through the actual linkage. An electrical pulse or armature motion alone does not prove that the keeper cleared the lug. Confirm spring return to full seating without hand assistance.
3. Measure return-spring force across the working stroke, especially latched preload; measure actuator pull and supply voltage/current over the same stroke using the intended driver at nominal and lowest intended voltage. **Initially, before every bench ARM, externally verify coil-case temperature within 2°C of ambient, including instrument uncertainty.** Warm powered measurements remain open until a separately documented thermal-conditioning and temperature-limit protocol is approved for the actual hardware, as required by [verification.md, Priority 5](../project/docs/verification.md). Record pulse length and duty cycle; the controller's 250 ms pulse and 10 s lockout are not a tested thermal rating. The listing's single force value is not a full-stroke guarantee.
4. With the payload unloaded, verify that power-up, reset and power interruption do not command release. Verify that a valid release command does unlock. Repeat after the loaded tests.
5. Print and test **at least three Z-built tensile coupons** from the same filament lot and process, using a documented coupon geometry and test method (for example ISO 527-2 1BA). Record individual strengths, minimum, mean, dimensions, conditioning and failure locations. The PAHT-CF screen used the TDS Z value of **47 MPa** to scale the PLA screen by 47/31. For the initial material check, any measured result below 47 MPa requires review of that assumption before proceeding to a capacity claim. Three coupons do not establish a statistical material allowable; tensile coupons also do not validate the assumed compression/shear scaling or creep performance. **Do not automatically raise a rating, substitute SF 3, or accept a coupon mean as qualification.**

A PLA trial is a separate material configuration. Label it as such and review its own analysis and test targets; do not multiply this P14 PAHT-CF test ladder by the old P13 ratio.

## 3. Power-off retention and progressive load test

Run the following on each sacrificial assembly in its measured, fully seated state. Apply load gradually, without shock. The 10-minute dwell and displacement limits below are **initial bench acceptance criteria**, not established service-life limits.

| Step | Applied force | Approximate total suspended mass at 1 g | Hold |
|---|---:|---:|---:|
| 1: seating check | 4.5 N | 0.459 kg | 1 minute |
| 2: design-load check | **8.9 N** | **0.907 kg** | **10 minutes** |
| 3: intermediate check | 13.35 N | 1.361 kg | 1 minute |
| 4: sacrificial proof | **17.8 N** | **1.815 kg** | **1 minute** |

Keep the solenoid unpowered during retention holds. Mark and observe keeper position to detect back-drive. After each step unload and inspect; measure residual set before proceeding. At step 2, record displacement immediately after load settles and after 10 minutes.

**Initial acceptance:** all three assemblies complete every step with no crack, whitening, delamination, keeper migration or slip; no measurable permanent set at the recorded instrument resolution; and additional displacement during the 10-minute design-load dwell is **less than 0.2 mm**. Use displacement measurement with resolution **0.05 mm or better**. Any binding or loss of full spring return after unloading is a failure.

These observations screen the mechanism and mount only for the tested conditions. Longer carriage time, different temperature/moisture, fatigue and flight loads require additional tests.

## 4. Loaded release and reset

The planned campaign is **20 release/reset trials at 8.9 N per assembly**, using the actual driver: **10 at nominal supply voltage and ambient coil temperature, plus 10 at the minimum intended supply voltage under a separately approved warm-coil protocol**. This is **60 planned loaded-release trials across three assemblies**.

After the preceding fit, **ambient-condition force**, material and structural gates, the **initial 10 ambient trials per assembly may proceed**, cooling and externally verifying the coil case is within **2°C of ambient, including instrument uncertainty, before every ARM**. Record actual voltage and coil temperature for every trial. The **10 warm trials per assembly remain open** until the hardware-specific thermal-conditioning method, temperature limits, monitoring and stop criteria are documented and approved under [verification.md, Priority 5](../project/docs/verification.md). No warm temperature or duty limit is assigned by this plan, and the initial ambient gate must not be bypassed merely to complete the trial count.

A catch box must allow the adapter to move freely until clear; a tether must not pull it out or conceal a hang-up.

For every command, record separately:

- Whether the keeper reached the measured lug-clear position.
- Whether the adapter **actually moved clear** without assistance, plus time to clear from video.
- Any hesitation, rubbing, bounce or incomplete release.
- Whether the keeper returned fully and the next reattachment seated without forcing.

**Acceptance:** each completed condition requires 10/10 successful unlocks, clearances and resets on each assembly, with no unintended release during power changes or holds. Completing the ambient set records **ambient-set success only**; the warm set and overall loaded-release campaign remain **open**, not passed by default. Completion of both approved sets requires 20/20 per assembly (60/60 total). A missed/sticky release fails the relevant bench gate even if the static proof passed. This is preliminary characterization; no reliability probability is inferred from this small sample.

A hanging weight supplies the separation force in this test. It does **not** demonstrate that a lifting glider will separate: glider lift, attitude, airflow and clearance need an installation-specific separation test.

## 5. Partial engagement, vibration and sustained load — still open

The two P14 FEA support states are not a sweep of every partially retracted keeper position. Before closing R5d, map the measured retained engagement and tolerance/wear envelope, including loss of distal-roof contact. On sacrificial hardware, use controlled keeper positions and representative misalignment to check retention and loaded release. Any positioning fixture must not carry the payload's +Z load. Record the allowable fully latched condition and test the identified weakest credible retained condition to the same **17.8 N** target. If the weakest condition is not yet known, this gate remains open.

For vibration, measure or define the intended installation's axes, frequency content, acceleration and duration; test unpowered retention and subsequent commanded release under that exposure. The preliminary **0.26 N / 0.52 N** preload calculation in [p14.md](p14.md) is only a 2 g moving-mass estimate. The flight load factor does not define vibration severity or resonance.

Extend the design-load dwell to the intended maximum carriage duration and temperature/moisture range before claiming service suitability. No creep, vibration or aircraft separation test is currently reported.

## 6. Optional destructive characterization and records

After the required tests, dedicated sacrificial specimens may be loaded incrementally to failure to identify location and mode. Record the measured force trace and mounting response. The **33.68 N** screen is a comparison point, not a commanded failure target or proof that failure will occur there. Stop if the fixture becomes the limiting component.

Retain: revision/part IDs, source commit, print 3MF and settings, coupon results, as-built measurements, actuator force/stroke data, driver settings, mount details, loads/dwells, displacement readings, videos, release/reset outcomes and failure observations. Record unsuccessful specimens as well as successful ones.

A failure triggers review of the geometry, fit, material assumptions, mounting or load requirement. Do not silently lower the load, discard a failed sample, or convert a successful proof into a working-load rating. Publish the evidence and remaining limits before assigning any capacity.
