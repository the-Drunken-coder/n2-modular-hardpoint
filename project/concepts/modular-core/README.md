# Standalone modular hardpoint: printable concept and numerical study

This study updates the selected N2 concept into **three connected printed bodies**: the receiver core, payload adapter with retaining lug, and keeper with coupling tongue. The receiver carries its own guide, keyed-seat and actuator structures. It is intended to be integrated into a later host module; the structural cases do not assume that external carrier rails support it.

This is a design study, not a released replacement for P14. The original CAD under `project/cad`, frozen P14 FEA inputs and `Engineering validation` workflow are unchanged. A passing modular-core workflow establishes nominal geometry and numerical consistency for the cases below. **It does not establish a payload rating, actuator force adequacy, print qualification or flight readiness.**

The completed local study is recorded in [the 2026-10-30 evidence folder](evidence/2026-10-30/README.md), including all 29 summary rows, mesh sensitivity and the generated analysis report. **That record is from the local development run, not a GitHub Actions run.** The workflow never reads those archived results; it rebuilds and solves its own current geometry. The [actuator selection note](docs/actuator-selection.md) records the current candidate comparison and outstanding bench measurements.

## Physical changes

- Receiver structure and keyed seat are one connected print. The host attachment model uses the two existing mounting-hole annuli, at XY `(5, 14)` and `(35, -10)` mm.
- The flange, retaining lug and root shoulders are one payload-adapter print. The selected lug thickness remains 3.5 mm.
- The keeper and flat-bottom actuator tongue are one print. They move together in the exploded model and proposed print export.
- The long-stroke actuator is a provisional Adafruit 3992 reservation with a 27 × 22 × 25 mm body envelope and 10 mm pull motion. The 68 g actuator mass is included in the receiver's vertical load cases. Sample dimensions, exact stroke endpoints, coupling fit, fastener engagement and the loaded force curve still need measurement.
- Four compliant preload pads remain separate inserts. Their material and actual preload have not been selected. The simulation's 2 N total preload is a sensitivity assumption.

The CAD generator exports STEP in assembly coordinates and STL in proposed print orientations. It verifies that each printed body is one valid solid and evaluates 85 specified nominal interference checks across keeper travel, payload departure, mounting-tool access and the actuator lead reservation. These are discrete rigid-geometry checks; they do not simulate tolerance accumulation, elastic interference, slicer toolpaths or a physical print. The gate deliberately expects this reviewed check count, so adding or removing checked poses requires an explicit scope update.

The workflow also runs the existing `tools/overhang.py` heuristic on receiver +Z, inverted adapter −Z and keeper +Z orientations. It preserves face-area reports and flags where supports are indicated. **The receiver needs removable support under parts of the seating deck.** The report's support indication is advisory; a valid report that calls for support is accepted, while a missing or invalid report fails. The heuristic is not a slicer, and successful bridge classification does not prove a bridge will print.

## New geometry is actually solved

The workflow first rebuilds the new STEP bodies and then prepares configurations pointing to those exact files. Each result records the new STEP, configuration and solver SHA-256 hashes. The wrapper rejects missing cases, changed source inputs, mismatched geometry, missing solve execution, nonfinite data and results that disagree with their compact summary.

The component analysis uses the existing frozen Gmsh/scikit-fem quadratic-tetrahedron engine with **new actual-load configurations**, not the previous P14 result files. The engine is copied into the temporary run directory without modifying it. Legacy solver fields that imply unit-load strength thresholds are excluded from the published concept summary because these cases use actual newtons and do not qualify strength.

| Component | Cases at each mesh size | Mesh sizes | Solves |
| --- | --- | --- | ---: |
| Receiver | Retained at 2 g without preload; retained at 2 g with 2 N preload; distal support lost with preload; 4 g proof-load sensitivity with preload | 1.15, 0.85 mm | 8 |
| Payload adapter | Remaining lug contact at 0, 4.5 and 4.7 mm withdrawal | 0.7, 0.5, 0.35 mm | 9 |
| Keeper | Prescribed balanced contact at 0, 1.0, 4.5 and 4.7 mm withdrawal | 0.7, 0.5, 0.35 mm | 12 |

The screening payload is 0.454 kg: 8.9044 N at 2 g and 17.8089 N for the 4 g sensitivity. These are applied test loads, not demonstrated capacities. The receiver additionally carries the 68 g actuator's corresponding vertical inertia through its two modeled countersink bearing surfaces. Equal splitting is an explicit approximation; its resultant is 1 mm from the approximate actuator body-envelope center.

The receiver is fixed only on its two mounting annuli. The adapter is fixed only on its two payload-bolt annuli. Keeper contacts are prescribed as balanced finite tractions, with six gauge degrees of freedom to remove rigid modes. The gate requires their residual reactions to remain negligible. A nonlinear assembled-contact solve, fastener preload, host flexibility, lateral forces, keyed-face bearing, torsion and payload center-of-gravity moments are not included.

The material remains the prior **isotropic effective solid PLA comparison proxy**, with E = 2200 MPa and Poisson's ratio 0.35. It is not a PAHT-CF material model or a measured printed-part allowable. Sparse infill, anisotropy, creep, fatigue, temperature and print defects are not qualified by this analysis.

### Release sensitivity

The modeled distal keeper support ends after 1.0 mm withdrawal, while the retaining lug clears after 4.8 mm. The analysis therefore includes the transition into one-sided support and the small remaining overlaps near release. The force sweep applies the same prescribed contact resultants to a Coulomb-friction calculation over multiple payload masses, friction coefficients, pad preloads and other return resistances.

The sweep does not prove actuator adequacy: breakaway friction, wedging, contamination, contact redistribution, current rise and heating remain unmeasured. In this layout a nominal 10 mm actuator starts its pull at a 10 mm gap. A force value specified at 6 mm is insufficient to establish its initial pull force.

## What makes CI pass or fail

All component/mesh solves must complete, and each result must satisfy:

| Numerical check | Required bound |
| --- | ---: |
| Relative free-degree-of-freedom residual | < 1e-7 |
| Force equilibrium error | < 1e-4 N |
| Moment equilibrium error | < 1e-3 N·mm |
| Absolute CAD/mesh relative volume error | < 2% |
| Keeper gauge reaction norm | < 1e-4 N |

The report separately records the changes in displacement, raw peak tensile stress and 0.4 mm averaged tensile stress between the finest meshes. **A numerical pass does not imply converged stress.** Stress averaging is an uncalibrated comparison metric; the report also records when the averaging neighborhood contains very few elements. The final report retains explicit `physical_qualification: false` and `strength_rating_established: false` flags even when all numerical checks pass.

The failure-injection tests exercise incomplete case sets, missing artifacts, stale geometry/configuration/solver hashes, NaN data, inconsistent summaries, equilibrium failure, gauge load and attempts to claim qualification. These fixtures test the evidence gate; they are not substituted for actual CAD or FEA in the workflow.

## Running it

Use Python 3.12 and the repository's pinned dependencies. On Ubuntu, Gmsh/CadQuery require the native libraries installed by the workflow:

```sh
sudo apt-get install libgl1 libglu1-mesa libxft2 libxrender1
python -m pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt
python -m unittest discover -s tests/ci -p 'test_modular_core_gate.py' -v
```

Run these commands from the repository root, selecting a **new output directory** each time. Existing output is deliberately rejected at the CAD stage so cached results cannot count as fresh evidence.

```sh
python tools/ci/run_modular_core.py --stage cad --output /tmp/n2-modular-run
python tools/ci/run_modular_core.py --stage receiver --output /tmp/n2-modular-run
python tools/ci/run_modular_core.py --stage adapter --output /tmp/n2-modular-run
python tools/ci/run_modular_core.py --stage keeper --output /tmp/n2-modular-run
python tools/ci/run_modular_core.py --stage report --output /tmp/n2-modular-run
```

`.github/workflows/modular-core-validation.yml` runs the same commands on relevant pull requests, pushes to `main` and manual dispatch. It uses a separate concurrency group and read-only repository permissions. It neither replaces the P14 workflow nor changes branch-protection requirements.

The standard artifact includes physical STEP/STL exports, the assembly STEP, nominal clearance/connectivity reports, print notes, generated component configurations, compact case results, mesh-sensitivity report, force sweep, logs and source manifests. Large native `.msh` and `.npz` files are omitted from the standard artifact. Manual dispatch can retain those in an additional seven-day artifact; the standard evidence lasts fourteen days.

Key output locations inside the selected output directory:

| Path | Contents |
| --- | --- |
| `run.json`, `cad-gate.json`, `geometry-config-gate.json`, `study-gate.json` | Current source/run identity, contact-coordinate consistency and final gate results |
| `manufacturing-advisory.json` | Support/bridge area flags in the proposed print orientations |
| `summary.md` | Actions summary with engineering limits and mesh sensitivity |
| `workspace/docs/` | Fresh generated analysis report and the actuator selection rationale |
| `workspace/dist/models/modular-core-parts/` | Three new physical STEP and oriented STL files |
| `workspace/dist/models/modular-core-*.json` | Clearance, connectivity, print notes and geometry metadata |
| `workspace/dist/simulation/` | Compact solved cases, configurations, force sweep and summary |
| `fea/configs/results/`, `fea/logs/`, `logs/` | Solver-native outputs and execution logs |

## Source boundary

`source-manifest.json` pins the baseline CAD/helper inputs and frozen solver/material files at repository commit `15f64836da8fa8a9957beea391beb9685ffbd532`. The new CAD and simulation scripts are kept here as a bounded reproducible study. They retain the same relative paths as the visual design study, so the wrapper stages a temporary workspace instead of silently patching their geometry or solver behavior. Existing baseline files are copied at runtime; large generated meshes and repeated issued CAD are not committed again.

If the issued baseline is intentionally changed, explicitly review and update the source manifest and the affected study geometry. A source hash failure must not be bypassed to make an old result appear current.
