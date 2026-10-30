# R4 physical acceptance and evidence

**No R4 hardware has been manufactured, calibrated or load-tested by this software run.** The [machine-readable plan](../analysis/bench-plan.json) is a defined prototype acceptance program. The blank records and validator preserve that distinction: missing data remain pending; passing CAD/FEA/controller checks cannot fill them in.

## Fixture and specimen setup

Use three separately identified assemblies, initially labeled R4-01, R4-02 and R4-03. Each receives the complete plan. Preserve CAD/source hashes, material lot, print orientation, machine and slicer versions, drying/conditioning history, completed dimensions, assembly torques, hardware part numbers, servo serial/lot if available, calibrated pulse widths, pad preload and photographs. The [assembly procedure](assembly.md) and dimensional acceptance precede all loading.

Use a rigid supported test frame with the four specified host interfaces, a captured departing test panel/payload, an inline calibrated force gauge and a visible displacement scale. Rotate the fixture so the CAD +Z departure direction is physically downward. Arrange the capture so it cannot carry load before separation or obstruct the first 10 mm of departure. Record fixture compliance and load direction. The analysis's rigid mounting annuli do not validate a particular frame or aircraft panel.

Apply **8.9044–9.35 N** along +Z for the 2 g equivalent tests and **17.8089–18.7 N** for B01. These are force targets, not extra masses to add blindly to the existing assembly. Nominal deadweight equivalents are approximately 0.908 kg and 1.816 kg total respectively, including all moving hardware and fixture attachments; use the inline force reading as the acceptance value. The intended airborne departing mass remains 0.454 kg. Keep the test assembly restrained after disengagement.

Measure voltage at the servo end, current in its switched supply, external case temperature at a repeatable marked location, keeper position, and payload separation. Use a scope or synchronized video/logic trace that resolves the 500 ms criterion. Record instrument range, resolution, calibration and combined uncertainty; force-margin uncertainty must be positive. Neither the supply display nor an estimated servo angle substitutes for an output measurement.

## Controlled prototype conditions

These are selected development procedures, not claims of compliance with an environmental standard. Record actual achieved conditions and any departure from the procedure.

| Plan label | Preparation |
|---|---|
| `dry_23C` | Print from the prescribed dried material, then assemble and test at 23 ±2 °C and <20% RH. Store the specimens dry between operations. Record time since drying. |
| `conditioned_40C` | Expose the printed assembly to 40 ±2 °C and 75 ±5% RH for 48 h; record mass before/after and test at 40 ±2 °C. This fixed exposure does not establish moisture equilibrium or a worst environmental state. Servo case limits still apply. |
| `documented_fine_dust_23C` | Use a recorded lot of commercially specified ISO12103-1 A2 fine test dust, applied **10 ±2 mg total** across the exposed guide/seat using a weighed brush. Photograph distribution, perform the 25 releases without cleaning, and record recovered deposits. This is a project contamination screen; the apparatus is not asserted to implement an ISO environmental test. |
| `dimension_limit_fit_23C` | Use an inspected part set near the tight accepted fit: guide3.50–3.55, bar3.02–3.05, slot4.30–4.35, sleeveOD4.00–4.05. All other drawing limits still apply. Record the actual dimensions; do not wedge a nominal assembly with loose shims in its load path. |

Each complete specimen record identifies any substituted accepted keeper/adapter/receiver used for the dimension-limit condition and the corresponding print record. A failed part is not silently replaced to keep a repetition count running; retain the failure record and open a new identified test series after the cause is corrected.

## Acceptance matrix

| ID | Work per three specimens | Prototype criterion |
|---|---|---|
| B00 | One check each in dry and conditioned conditions: 6 records | Total pad preload0.5–3.0 N; retained lug overlap≥3.0 mm; released travel5.3–10.0 mm; actual lug-clearance and open-stop margins each≥0.5 mm |
| B01 | One static hold each in dry and conditioned conditions: 6 holds | 17.8089–18.7 N for≥60 s; permanent set≤0.10 mm after unloading; no cracks, damage or uncommanded release |
| B02 | 25 releases in each of four conditions on each specimen: **300 releases** | 8.9044–9.35 N; servo4.80–5.10 V; full clearance within500 ms of PWM motion start; separation≥10 mm; travel and stop margins as B00; no release failure or damage |
| B03 | 20 stroke stations at0.5 mm spacing from0 through9.5 mm, each specimen: 60 paired-force records | At4.80–4.85 V and servo case40–45 °C: `available − uncertainty ≥ 1.5 × (demand + uncertainty)` at every station |
| B04 | Three power-loss modes ×10 repetitions on each specimen: 90 holds | Retained 2 g equivalent load for≥60 s; keeper movement≤0.5 mm; no uncommanded release |
| B05 | Interrupt at1,3 and4.5 mm; three repetitions each per specimen: 27 observations | Record final keeper position and whether the payload releases. Either state can be recorded; this is an observation requirement, not a fail-retained pass. |

Use the numeric values and units in `bench-plan.json` when filling records. The initial program therefore comprises **489 test/condition/cycle records**, each containing its prescribed measurement fields. Case temperature must be≤45 °C before a B02 cycle and≤55 °C afterward. A preparation-and-release pair can include two500 ms motion commands plus two40 ms power-settle periods. The controller imposes at least10 s off after release; stop earlier for heating, voltage excursions, buzzing, damaged parts, an increasing force trend or incomplete motion.

B02 measures its500 ms interval from the beginning of commanded PWM motion. FIRE precedes that by the separate40 ms power-settle interval. Report both timestamps so the preparation delay is not hidden. The successful separation observation includes the actual payload fixture, pads and attachment hardware.

### B03 measurement method

An axial pull with the servo joint disconnected is a **partial friction diagnostic**. Perform it at≤1 mm/s with the real2 g normal load, pads, fit and surface condition; record breakaway peaks and the continuous trace, and distinguish release from reinsertion. This pull omits the moving follower force offset and sleeve/slot friction, so it cannot establish complete drive demand by itself.

For the B03 acceptance measurement, retain the actual horn, sleeve, yoke, guides, pad preload and2 g payload load. Replace the servo drive with an instrumented rotary driver at the actual shaft axis and measure the **required crank torque** over the same angle/speed trajectory used for release. Independently measure available HS-65MG output torque using a controlled moving brake at matching angle, speed, representative shaft side load,4.80–4.85 V terminal voltage and40–45 °C external case temperature. Preserve raw torque, angle, time and current traces, including startup and breakaway. Do not substitute repeated prolonged stalls for a moving torque profile.

The CSV retains its N-valued `available_pull_N` and `required_pull_N` columns. For B03 these mean **equivalent tangential force `F = T / 7.5 mm`**, with torque inN·mm; divide torque uncertainties by the same7.5 mm radius. They are not axial keeper-force readings. Record the raw torque evidence and conversion alongside each station. Comparing these quantities preserves the required1.5 torque margin while including the complete linkage demand.

Map measured shaft angle to the corresponding measured keeper position at each0.5 mm station. At retained dead center use the actual startup trace; never infer infinite force from the crank equation. At9.5 mm use the final moving interval leading into the calibrated operating endpoint, preserving the actual stop gap. Do not drive against the10.5 mm stop to create an endpoint reading.

Fixture effects and instrument uncertainty belong in the record. The B03 plan covers straight loading. The separately computed lateral/60 mm-CG sensitivity does not constitute a passed side-load release test; actual installation combinations require additional torque profiles and releases once that installation is defined.

### Power interruptions

B04 separately removes servo supply, resets the controller and disconnects the control signal while retained. Check actual keeper movement and load retention after each event. B05 cuts servo power during measured withdrawal, with a catch beneath the payload. Preserve the observed state before resetting. The servo has no return spring and the mechanism has no independent equipment lock or position sensor. The record must not relabel an observed intermediate release as automatic relatching.

## Recording, validation and release decisions

Use [the bench record utility](../analysis/bench_records.py) and the exact commands in [analysis/README.md](../analysis/README.md) to create and validate the CSV template. Enter each measurement with unit, operator, UTC timestamp and an evidence path/identifier. Keep raw scope traces, videos, photos and calibration records beside the specimen record. Do not replace blank values with zero: zero is a measured value only where the schema permits it.

The validator rejects missing context, invalid units, nonfinite numbers, duplicate measurements and out-of-range results. Its ordinary status can remain pending while measurements are gathered; `--require-complete` rejects an incomplete program. A valid CSV does not authenticate the evidence. An engineering review must check that the physical procedure, specimen identities and raw records support its numbers.

Passing this program supports further prototype development. It does not establish directional printed-material allowables, fatigue/creep life, vibration release probability, field reliability, a payload working-load rating or aircraft suitability. Aircraft backing, actual pod CG and combined acceleration, retained duration, power integration, departure corridor and the deferred equipment lock remain installation-specific work. Those are explicitly outside this individual-hardpoint revision; they are not unchosen parts of its CAD or BOM.
