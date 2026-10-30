# Modular-core numerical study

## Outcome

29 actual-STEP, quadratic-tetrahedron linear-elastic component solves were run. Numerical status: **numerical_checks_passed**. These runs do **not** establish a payload rating, printed-material strength or reliable release at 2 g.

The final core uses only its two actual mounting holes as external restraints. There is no outer rail, surrounding module or aircraft skin in the support model. The adapter is restrained only at the two actual payload attachment-hole annuli. The keeper uses six rigid-motion gauge degrees of freedom with a negligible-reaction check.

## Design issue found and corrected

The first actuator reservation pulled at Y=-6 mm while the keeper contact bar lies at Y=10 mm. That 16 mm offset creates a yaw moment and can amplify sliding friction. It was rejected before the final evidence runs. The revised actuator and straight keeper pull at Y=10 mm. A 2 mm tongue preserves the provisional 2.4 mm clevis opening; the actuator axis is 0.5 mm below the 3 mm bar midplane. Printable ribs support the local actuator bed; they do not add an external restraint.

For a simplified pair of opposed side contacts, F = F0/(1 - 2 μ e/L), where e is force-line eccentricity and L is the contact separation along travel. The discarded e=16 mm layout gives 1.92× amplification at μ=0.15 and L=10 mm; at L=4.5 mm its idealized denominator is negative. The final nominal yaw offset is zero. For the remaining e=0.5 mm vertical offset, this same deliberately simplified feedback bound is 1.034× at μ=0.15, L=4.5 mm and 1.071× at μ=0.30. Actual contact geometry, clearances and return forces still require measurement.

## Inputs and physical scope

- Departing mass: 0.454 kg; 2 g force: 8.904438 N.
- Purchased actuator mass: 0.068 kg; 2 g inertia: 1.333704 N.
- Seat preload: an assumed total 2 N, with four equal 0.5 N pad reactions. Both receiver and adapter include the corresponding opposing pad tractions, so preload does not become additional external payload weight.
- The receiver also has a 4 g external-load sensitivity, equivalent to twice the 2 g payload and actuator forces. The 2 N preload remains constant. This is a numerical proof-load screen, not a passed physical proof test.
- Isotropic solid PLA comparison proxy: E=2200 MPa, ν=0.35. The repository material file contains analyst-assumed strength numbers used by legacy diagnostic code; they are not measured allowables. The curated results remove derived strength-threshold and failure-index fields. No PAHT-CF strength or anisotropy is inferred.
- Vertical load cases only. Lateral key bearing, torsion, payload-center-of-gravity moments, combined multiaxis loads, bolt preload/slip/pull-through and host compliance are not solved.
- Contact is represented by finite prescribed tractions. The actual 0.3 mm guide clearance, rotation into alternate contacts, frictional redistribution, wear, nonlinear geometry and material yielding are not solved. The vanishing distal-guide overlap immediately before its support is lost is not resolved by these discrete contact states.
- Solenoid axial pull, tongue/pin bearing strength and their coupled frictional contact response are not included in the vertical retention FEA.
- The actuator inertial force is split between the two actual countersink surfaces. Its resultant is at their midpoint, 1 mm from the approximate envelope CG. This is a finite bearing-traction surrogate, not a bolt/contact model.

## Finest-mesh results

| Part and case | h (mm) | Tetrahedra | Max displacement (mm) | Raw peak tension (MPa) | 0.4 mm averaged peak tension (MPa) |
|---|---:|---:|---:|---:|---:|
| adapter: stroke_0p0mm | 0.35 | 45,340 | 0.02951 | 8.642 | 2.915 |
| adapter: stroke_4p5mm | 0.35 | 45,340 | 0.03146 | 14.917 | 5.591 |
| adapter: stroke_4p7mm | 0.35 | 45,340 | 0.03401 | 28.898 | 5.826 |
| keeper: stroke_0p0mm | 0.35 | 15,981 | 0.00636 | 2.337 | 1.956 |
| keeper: stroke_1p0mm | 0.35 | 15,981 | 0.02907 | 5.886 | 5.070 |
| keeper: stroke_4p5mm | 0.35 | 15,981 | 0.01139 | 9.913 | 3.053 |
| keeper: stroke_4p7mm | 0.35 | 15,981 | 0.01389 | 33.820 | 3.674 |
| receiver: distal_lost_2g_preload | 0.85 | 63,503 | 0.26988 | 13.515 | 4.261 |
| receiver: proof_4g_preload | 0.85 | 63,503 | 0.55570 | 17.210 | 5.302 |
| receiver: retained_2g | 0.85 | 63,503 | 0.28455 | 8.810 | 2.724 |
| receiver: retained_2g_preload | 0.85 | 63,503 | 0.27115 | 8.399 | 2.578 |

The 0.4 mm value is the independent maximum principal tensile stress after volume-weighted tensor averaging within that radius of each element centroid. This smooths sharp traction/fixture peaks for comparison; it is not a calibrated fracture criterion. Keeper displacement is relative to its rigid-motion gauges and must not be added directly to receiver/adapter maxima as an assembly clearance prediction.

## Mesh refinement and numerical checks

| Part and case | Mesh levels | Finest-pair displacement change | Averaged-tension change | Raw-tension change |
|---|---:|---:|---:|---:|
| adapter: stroke_0p0mm | 3 | 2.73% | 43.76% | 3.69% |
| adapter: stroke_4p5mm | 3 | 0.38% | 2.34% | 1.11% |
| adapter: stroke_4p7mm | 3 | 0.35% | 2.33% | 29.01% |
| keeper: stroke_0p0mm | 3 | 0.73% | 1.72% | 0.33% |
| keeper: stroke_1p0mm | 3 | 0.49% | 2.76% | 1.52% |
| keeper: stroke_4p5mm | 3 | 2.06% | 4.38% | 2.08% |
| keeper: stroke_4p7mm | 3 | 0.21% | 1.65% | 11.89% |
| receiver: distal_lost_2g_preload | 2 | 1.74% | 5.30% | 7.87% |
| receiver: proof_4g_preload | 2 | 1.74% | 28.78% | 3.46% |
| receiver: retained_2g | 2 | 1.74% | 27.92% | 3.77% |
| receiver: retained_2g_preload | 2 | 1.74% | 29.69% | 3.14% |

Numerical gates are force balance <1e-4 N, moment balance <1e-3 N·mm, free-DOF relative residual <1e-7, mesh/CAD volume error <2%, and keeper gauge reactions <1e-4 N. Refinement is reported separately: a solved equilibrium problem is not evidence of mesh-independent stress or physical safety. The receiver has two levels; the critical lug/keeper cases have three.

The 0.4 mm averaging operator is undersampled near some fixtures. At the retained adapter tensile peak, its neighborhood contains only one element centroid at h=0.5 mm and three at h=0.35 mm. At the receiver retained/preload tensile peak, the corresponding counts are one at h=1.15 mm and two at h=0.85 mm. The peak locations also move around the attachment fixtures. These observations explain why some averaged maxima change by 28–44% even while displacements settle. The averaged stress is not converged in those cases, and no safety credit is taken from smoothing. Per-case neighbor counts are recorded in the curated results.

## Release force and actuator decision

The friction sweep uses Fpull = μ × (lug normal + sum of absolute guide normals) + return resistance. For 0.454 kg at 2 g, 2 N preload, μ=0.15 and 0.5 N return resistance, its peak is approximately 5.63 N immediately after the distal support is lost. At zero preload the same assumptions give about 4.69 N. These are sensitivity values, not measured requirements; they omit breakaway, side binding, contamination, wedges, current rise, temperature and tolerance.

The nominal lug overlap is 3.5 mm retained, 0.3 mm at 4.5 mm withdrawal and 0.1 mm at 4.7 mm. Distal guide support ends at 1 mm; complete lug clearance occurs at 4.8 mm. A 10 mm actuator stroke leaves 5.2 mm nominal final travel margin, but the initial pull begins at a 10 mm magnetic gap. Longer stroke does not establish usable force throughout that gap.

Adafruit 3992 remains a 5–6 V, 10 mm-stroke, 68 g envelope/bench candidate. The nominal 6 Ω winding is about 4.17 W at 5 V. The supplier diagram labels power/duty curves, not a guaranteed 5 V minimum-force curve, and does not establish spring-subtracted available force or tolerance. No release-at-2-g claim follows. See [actuator selection](actuator-selection.md) and the [official drawing](https://cdn-shop.adafruit.com/product-files/3992/3992_diagram.jpg).

## Reproduction and evidence

Install `scripts/simulation/requirements.txt` and system `libxft2`, then run:
```sh
python scripts/simulate_modular_core.py --prepare --output /tmp/n2-modular-simulation
python scripts/simulate_modular_core.py --run receiver --output /tmp/n2-modular-simulation
python scripts/simulate_modular_core.py --run adapter --output /tmp/n2-modular-simulation
python scripts/simulate_modular_core.py --run keeper --output /tmp/n2-modular-simulation
python scripts/simulate_modular_core.py --summarize --output /tmp/n2-modular-simulation
```

The public `dist/simulation` directory contains the input manifest, exact component configurations, curated case results, compact summary, friction/yaw sweep and plots. Raw meshes, field arrays and solver logs stay in the output directory and are suitable for CI artifacts. Every result includes STEP, solver and configuration hashes. A fresh geometry build must be prepared and solved again; old numerical results are not carried forward by shape similarity.

## Next verification steps

Measure the candidate solenoid and its actual loaded 5 V force across the full 10 mm travel. Establish printed-material directional properties and print orientation, then run a controlled fixture proof and repeated release test at 2 g equivalent loading, including unfavorable lateral loads and tolerance extremes. These remain outstanding, and no physical testing is claimed here.

## Local execution and reporting provenance

The solve-era orchestration source is preserved with SHA-256 `8c0fc7f6541493ea6004dac5939e6bc3479277564cb5937cdbb3753967efb777`. Its snapshot was recovered from a contemporaneous CI staging copy; the original local launcher did not capture its own hash at process start. The final preparation/reporting source has SHA-256 `2b8662df8a95edab644eb3e02f4a74981dc3681de0507d360999c85a58fbc650`. Later edits changed reporting, plots and provenance bookkeeping, with no changes to the executed STEP bodies, solver or case configurations. The input manifest and provenance directory distinguish these versions and preserve a source diff. Future runs record the runner hash at launch.
