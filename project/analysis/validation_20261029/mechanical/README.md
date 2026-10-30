# Mechanical clearance replay and illustrative stroke study

This directory separates **current P14 nominal CAD evidence** from a **new illustrative one-dimensional concept**. It contains no physical test results and assigns no working-load or release rating.

## Reproduce

From the repository root, using Python with CadQuery installed:

```sh
python project/analysis/validation_20261029/mechanical/run_validation.py
```

The script imports the current `N2_receiver.step`, `N2_adapter.step`, and `N2_keeper.step`. It does not regenerate CAD, change source geometry, or perform FEA. Source commit: `e1150701358f31e536c807ee21e29eae4e6c4985`. File SHA-256 values are recorded in the JSON results.

## Current nominal play

The keeper has 0.3 mm nominal clearance to each vertical side of its guide; the adapter cross-hole has another 0.3 mm relative to the keeper. Rigid STEP checks bracket the resulting adapter travel at roughly ±0.6 mm, or **1.2 mm total axial clearance**. This does not mean a loaded physical specimen necessarily moves freely through the whole range: friction, elasticity, preload, and print tolerances are not modeled.

Yaw about the lug center is clear at ±4.75° and interferes at ±5°. The rectangular lug/socket calculation predicts first contact at **±4.8197°**, or about 9.64° total. The adapter flange underside is 1.3 mm from the receiver roof in the nominal CAD pose, so it is not a preloaded broad face seat.

`current_p14_play.json` and `current_p14_clearance_checks.csv` contain the source identities and all 16 checked poses. This replay includes the three printed load-path solids only; purchased actuator internals are excluded.

## Illustrative longer-stroke option

| Parameter | P14 reference | Illustrative concept |
|---|---:|---:|
| Available withdrawal S | 3.0 mm | 6.0 mm |
| Lug thickness t | 1.4 mm | 3.5 mm |
| Distal engagement e | 0.6 mm | 1.0 mm |
| Lug-to-distal-edge gap g | 0.3 mm | 0.3 mm |
| Travel to clear, e + g + t | 2.3 mm | 4.8 mm |
| Nominal open margin | 0.7 mm | 1.2 mm |
| Loaded travel after distal support is lost, g + t | 1.7 mm | 3.8 mm |

The proposed dimensions are **invented concept inputs**, not a released CAD revision or a qualified actuator selection. More stroke permits a thicker lug and more clearance, but also **lengthens the interval carried only by the proximal guide**. That can worsen keeper bending and withdrawal demand. No strength increase is assigned to the new concept.

`stroke_comparison.csv` lists the inputs and event locations. `stroke_overlap_series.csv` samples remaining engagement and nominal contact area. Its pressure values use a deliberately uniform pressure patch and **must not be used as failure loads**. The finite-area model ceases to apply as the contact vanishes; post-clearance values are empty rather than infinity.

## Tolerance and force screens

`illustrative_tolerance_sweep.csv` subtracts travel loss and an adverse dimensional stack from nominal opening margin. The example losses are not measured tolerances; they show which quantities must be measured. Positive residual clearance establishes only geometric margin in this model.

For equal Coulomb coefficients on ideal parallel keeper/payload and keeper/guide contacts, the ideal planar sliding-force floor is `F >= 2*mu*P`. `illustrative_force_sweep.csv` evaluates that conditional expression for stated masses, load factors, and friction coefficients. It compares only with the arithmetic conversion of the supplier's 80 gf point; that point is not a full-stroke force curve and is not treated as a guaranteed net actuator budget. Spring force is not subtracted a second time.

`extra_normal_load_force_trade.csv` shows drag sensitivity to **extra normal force actually transmitted through the sliding latch**. It does not equate that force to clamp or ejector preload: the real load split depends on geometry and joint stiffness. Side friction, cantilever reaction amplification, binding, temperature, and dynamic effects are absent.

## Design implication

A preloaded keyed flange or a round/diamond located flange is a plausible way to remove interface play. A larger, longer-stroke solenoid remains a plausible simple actuator choice. Both changes require the measured whole-mechanism force curve and a redesigned proximal support to be considered together. Seating interlocks and secondary fixed-pod locks are illustrated concepts elsewhere; they are not simulated or qualified by these records.
