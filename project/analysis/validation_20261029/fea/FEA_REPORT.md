# P14 computational validation results

## Outcome

Completed **35 actual finite-element case solves on 12 meshes**, using current P14 STEP solids and the unchanged frozen solver. The original coarse axial screens reproduce at their published precision. All stored numerical residual, equilibrium, material-volume and source-identity checks pass.

The new results identify two substantial limitations: **the real mounting boundary condition can govern before the previously quoted adapter screen, and reduced keeper-to-lug overlap does reduce the computed structural screen.** Mesh refinement also changes several raw stress screens materially. This work provides evidence for design decisions; it does not assign a working-load rating.

Source snapshot: `e1150701358f31e536c807ee21e29eae4e6c4985`. The study is of existing P14 only. Longer-stroke, thicker-lug, keyed-seat, positive-lock and sensing concepts have not been structurally modeled by these solves.

## What the numbers mean

Every primary force value below is a **PLA assumed local stress-screen crossing in newtons**, not a measured failure force. The solver uses homogeneous isotropic linear elasticity, E = 2200 MPa, Poisson ratio 0.35, and analyst thresholds of 25 MPa tension, 40 MPa compression and 15 MPa maximum shear. Loads are normalized to 1 N.

For each stress field the screen is the load at which the maximum normalized local stress index first reaches one. It is neither nonlinear collapse nor a calibrated printed-part fracture model. Dividing it by a safety factor does not validate the contact, fixture, process or environmental assumptions.

`results_summary.csv` includes the older 47/31 PAHT-CF multiplier as a clearly named **unvalidated sensitivity column**. It is not a new PAHT-CF constitutive model. This caveat matters especially because the washer cases below govern in compression and the terminal overlap cases govern in maximum shear, while 47/31 comes from tensile coupon strengths.

## 1. Baseline replay and focused refinement

The same P14 standard case definitions and their imprint boundaries were retained. Receiver sizes are 0.8 and 0.55 mm; adapter and keeper sizes are 0.55 and 0.40 mm. These are local mesh targets, not uniform element dimensions.

| Component / case | Mesh target, mm | Coarse screen, N | Refined screen, N | Change |
|---|---:|---:|---:|---:|
| adapter / adapter__Z | 0.55 → 0.4 | 22.213 | 20.697 | -6.83% |
| receiver / centered__Z | 0.8 → 0.55 | 39.030 | 40.307 | +3.27% |
| receiver / distal_ineffective__Z | 0.8 → 0.55 | 24.224 | 23.730 | -2.04% |
| keeper / centered | 0.55 → 0.4 | 75.815 | 72.766 | -4.02% |
| keeper / distal_ineffective | 0.55 → 0.4 | 47.203 | 47.642 | +0.93% |

The refined full-backing axial component minimum is the adapter's **20.697 N PLA screen**, compared with 22.213 N at the original mesh. Under the earlier scalar multiplier those become 31.380 N and 33.678 N respectively. The two-size check establishes sensitivity, not complete convergence or physical capacity.

The keeper's coarse full-contact and distal-ineffective results also reproduce the archived full-precision records. This is a reproducibility check of the selected mathematical problem, not validation of a printed assembly.

## 2. Actual P14 fixture sensitivity

Full-backing and washer cases were compared **on the same mesh at each resolution**, including the same imprinted washer boundaries. Full backing fixes the selected receiver underside in XYZ. The alternative fixes the two exposed washer annuli in XYZ, using the archived centers (5,14) and (35,-10) mm, inner radius 1.6 mm and outer radius 3 mm.

| Mesh target, mm | Retained contact state | Full backing screen, N | Ideal washer screen, N | Change to washers |
|---|---|---:|---:|---:|
| 0.8 | centered__Z | 38.490 | 15.259 | -60.36% |
| 0.8 | distal_ineffective__Z | 24.225 | 15.335 | -36.70% |
| 0.55 | centered__Z | 40.982 | 12.986 | -68.31% |
| 0.55 | distal_ineffective__Z | 23.326 | 12.936 | -44.54% |

At the refined mesh, the washer-supported receiver screens **12.986 N centered and 12.936 N with the distal support absent**, below the 20.697 N refined fully fixed adapter screen. This shows that the earlier adapter-governed assembly conclusion does not transfer automatically to a two-fastener installation.

The washer screens decrease about 15% when refined from 0.8 to 0.55 mm, and the critical compressive peak occurs at an ideal fixed-washer edge. Consequently these are **fixture sensitivities, not a prediction that a real screw joint fails at 12.94 N**. Real bolt preload, contact separation, washer compliance, backing flexibility, friction, slip and pull-through remain unmodeled. The payload adapter still assumes its whole external flange fixed; its real payload bolts and pod wall are also outside the model.

## 3. Reduced overlap during withdrawal

The adapter lug occupies X = 26.8–28.2 mm and the keeper starts at X = 25.9 mm. For withdrawal s, remaining overlap is:

`overlap(s) = min(1.4, max(0, 2.3 - s)) mm`.

Distal roof contact disappears at 0.6 mm travel. The following four states are after that loss, with actual reduced lug pressure footprints. The keeper STEP is kept in local coordinates and all host-fixed contact footprints are translated by -s; this is geometrically equivalent to translating the keeper by +s. The assumed proximal roof and far-floor reaction centroids stay at host X = 29.0 and 33.5 mm. Vertical forces and moments are balanced separately at every state.

With lug-contact centroid xc, the assumed reaction magnitudes are `Rb/P = (29 - xc)/(33.5 - 29)` and `Ra/P = 1 + Rb/P`. Each component still uses prescribed uniform contact; no pressure distribution or contact state is solved between bodies.

| Travel, mm | Remaining overlap, mm | Adapter h0.55 screen, N | Adapter h0.40 screen, N | Keeper h0.55 screen, N | Keeper h0.40 screen, N |
|---:|---:|---:|---:|---:|---:|
| 0.6 | 1.4 | 21.189 | 22.066 | 51.863 | — |
| 1.5 | 0.8 | 15.279 | 12.342 | 47.451 | — |
| 2.0 | 0.3 | 11.110 | 8.942 | 21.599 | — |
| 2.2 | 0.1 | 6.568 | 6.745 | 7.056 | 6.574 |

All stroke states within each component study share an imprinted mesh. Separate retained controls are stored: the adapter's full-contact control is 21.189 N at h0.55 and 22.066 N at h0.40. Thus the terminal 0.1 mm-overlap adapter screen is about **31% of its same-mesh full-contact control** at either size. The nominally fully engaged control differs modestly from the separate baseline mesh because the additional stroke boundaries change the triangulation.

The adapter's 0.3 mm-overlap result changes from 11.110 to 8.942 N under refinement (about -19.5%). The keeper and adapter terminal screens are close; two additional keeper terminal/control solves were therefore run at h0.40. Both components should be treated as critical in that near-clearance state rather than claiming an established physical governing failure mode.

At the 8.90748 N design input, average nominal bearing pressure rises from `8.90748/(3*1.4) = 2.121 MPa` with full overlap to `8.90748/(3*0.1) = 29.692 MPa` at 0.1 mm overlap. This arithmetic and the FE sensitivities do not predict the final dynamic departure: contact redistributes, edges deform and the payload begins moving. They do establish that a static distal-support-removed model with full lug contact cannot validate all partial-engagement states.

No receiver stroke study, frictional assembled-contact solve, tilted-contact solve, wear model, actual measured geometry, or moving-payload calculation is included. A zero-overlap state was deliberately not assigned a fictitious static carrying capacity.

## Numerical audit

Every recorded case uses the unchanged solver SHA-256 `6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c`. All nine reference inputs match their source Git blob identity and stored SHA-256. Each case also records the exact STEP and configuration hash, mesh size, degrees of freedom, load and support selection areas, forces/moments, solver method and iterations.

Maximum values across the 35 cases:

- Relative free residual: 9.95502e-10.
- Force-balance error: 5.25208e-11 N.
- Moment-balance error: 1.80169e-09 N·mm.
- Keeper gauge-reaction norm: 3.26422e-13 N.
- Absolute mesh/CAD volume difference: 0.11458%.

These checks support internal numerical consistency only. They do not validate physical material properties, contact seating, mounting stiffness, strength, reliability or a release envelope.

## What has and has not been completed

**Completed:** pinned dependency setup, source identity verification, actual baseline replay, focused mesh refinement, same-mesh mounting sensitivity, reduced-overlap adapter/keeper sensitivity, equilibrium/residual audits, and preservation of compact results, configs, logs and hashes.

**Not performed:** physical printing, specimen dimensional inspection, actuator pull curves, loaded release, proof/destructive assembly tests, material coupons, creep, temperature/moisture conditioning, vibration, wear or fatigue. No experimental result or pass has been invented. The model does not establish that the present solenoid can withdraw the keeper under the intended load.

The next useful physical work is full-stroke available actuator force versus required mechanism force, followed by complete-assembly load/release tests through the intended mounting surfaces. Those measurements should select and calibrate the next model; more mesh refinement alone cannot close the physical gaps shown here.

## Reproduction and files

Use the pinned `project/analysis/requirements.txt`, Python 3.12 and the native library required by the gmsh wheel. The recorded environment used CadQuery 2.7.0 and a scratch-only Ubuntu libXft 2.3.6 extraction. No solver code was changed.

```sh
python tools/validation_20261029/run_fea.py --prepare
python tools/validation_20261029/run_fea.py --group baseline
python tools/validation_20261029/run_fea.py --group fixture
python tools/validation_20261029/run_fea.py --group partial_adapter
python tools/validation_20261029/run_fea.py --group partial_keeper
python tools/validation_20261029/run_fea.py --group partial_keeper_terminal_refine
python tools/validation_20261029/summarize_fea.py
python tools/validation_20261029/report_fea.py
```

`--prepare` reconstructs ignored reference and engine copies from the source checkout only after verifying their stored hashes. If they differ, use the cited source snapshot; no incompatible geometry is silently accepted. Native library paths are installation-specific. Set `N2_FEA_PY` when a different isolated interpreter is required.

- `key_findings.json`: compact tables and qualifications for the interactive review page.
- `results_summary.csv` / `results_summary.json`: all 35 rows, numerical audits and exact result paths.
- `configs/`: seven complete case configurations; per-case compact JSON is under `configs/results/`.
- `logs/`: solver logs and seven execution records, including return codes and elapsed times.
- `source_git_blobs.json`, `environment.json`, `run_plan.json`, `stroke_states.json`: provenance and assumptions.
- `artifact_inventory.json`: curated publication hashes and a separate manifest of omitted native mesh/field arrays.

Large `.msh` and `.npz` files are omitted from the compact repository record; their hashes are indexed and the script regenerates them. They were produced during the actual runs, rather than inferred from archived scalar values.
