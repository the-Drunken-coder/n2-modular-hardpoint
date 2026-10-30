# N2 hardpoint: concept demonstrations and computational validation

Recorded 2026-10-30 UTC. Study identifier `validation_20261029` retains the local date when the work began. Source baseline: [`e1150701358f31e536c807ee21e29eae4e6c4985`](https://github.com/the-Drunken-coder/n2-modular-hardpoint/tree/e1150701358f31e536c807ee21e29eae4e6c4985).

## Outcome

**35 actual FEA case solves on 12 meshes, 16 rigid-CAD clearance checks, and 16 existing controller host tests completed. Zero physical tests were performed. No working-load or release rating is assigned.**

The requested demonstrations cover a preloaded keyed flange, round/diamond locators, a longer-stroke cross-bolt with a thicker lug, broad structural backing, optional twin supports, an ideal seating interlock, and an optional independent equipment lock. The diagrams are concepts; the structural computations evaluate existing P14 geometry.

## Selected direction

| Topic | Direction carried into the demonstration | Remaining design choice |
|---|---|---|
| Location and play | Show both a preloaded keyed flange and round/diamond locating pins | Select the fits, face geometry, preload magnitude and simple preload-generating detail. Neither diagram is a released CAD design. |
| Actuation | Keep the simple solenoid-driven cross-bolt; investigate more force and useful stroke | Select the actual solenoid from a full-stroke force budget and installed mass/envelope. Servo remains a fallback. No load-isolating sear is introduced. |
| Thin retaining lug | Demonstrate 6 mm travel and a 3.5 mm lug as an illustrative alternative | Redesign and verify the guide/keeper as well as the lug; extra stroke lengthens the one-guide interval. |
| Attachment and moments | Prefer a broad backed single station; keep two supports on one pod as an alternative | Define real backing, fasteners and reaction spacing. If both supports latch, coordinate release. |
| Partial seating | Demonstrate closure being inhibited before full seating | Build and verify the physical interlock. Seating and keeper position are separate conditions; no new feedback hardware or firmware has been implemented. |
| Retained equipment | Optional independent positive lock for a camera or other retained pod | Disengage/remove it for an intentional drop. A power-off command is not the same as a positive lock. |

Battery power architecture and wing aerodynamics, mass distribution and asymmetry are outside this study. At the time of this study, no fixed payload envelope had been selected. Subsequent user decisions are recorded in the [next-design brief](../../../docs/next-design-brief.md). Local interface forces, moments and offsets still need to be specified to qualify the hardpoint.

## Results that change the design assessment

### 1. The current interface has geometric freedom

The three committed P14 STEP solids pass all 16 expected clearance/interference checks. Adapter motion is clear at ±0.59 mm with keeper motion ±0.29 mm; the nominal limits are ±0.6 and ±0.3 mm. This gives approximately **1.2 mm total axial free travel** in the ideal geometry. Yaw is clear at ±4.75° and interferes at ±5°. The rectangular lug/socket calculation gives **9.639° total yaw range**. The nominal adapter flange sits **1.3 mm above** the receiver roof.

These results support a defined face seat and separate locating features. CAD clearance is geometric play, not a prediction of how freely a loaded printed mechanism moves. See [mechanical results and reproduction](mechanical/README.md).

### 2. The mounting assumption materially changes the structural screen

On the same refined receiver mesh (0.55 mm local target), replacing a fully fixed backing with ideal fixed washer annuli changes the centered axial PLA stress screen from **40.982 N to 12.986 N**. The distal-support-absent case changes from **23.326 N to 12.936 N**.

This supports the preference for broad structural backing. It does **not** mean that a real screw installation fails at 12.94 N: the peak occurs at an ideal fixed boundary, the results remain mesh-sensitive, and bolt preload, washer compliance, contact separation and pull-through are absent from the model.

### 3. Near-release contact is a separate weak state

The refined adapter screen falls from **22.066 N at full contact to 6.745 N at 0.1 mm remaining overlap** on the same mesh. The refined keeper screen at that terminal overlap is **6.574 N**. Both parts are therefore relevant near clearance in this model. At 0.3 mm overlap, adapter refinement changes the screen from 11.110 to 8.942 N (−19.5%).

The former distal-support-removed case kept full lug contact and could not establish these reduced-overlap states. These new calculations still prescribe uniform contact: they do not predict dynamic departure, load redistribution or fracture.

### 4. The original result reproduces, but it is not a payload rating

All five original coarse axial cases reproduce. Adapter refinement changes the governing full-backed axial PLA screen from **22.213 N to 20.697 N** (−6.83%). The older scalar PAHT-CF sensitivity changes from 33.678 to 31.380 N, but that is still an unvalidated multiplier.

The distinction is consequential: the baseline adapter is tension-governed, the washer cases compression-governed, and terminal overlap cases maximum-shear-governed. A tensile coupon ratio does not validate compression or shear strength of the printed assembly. See the [full FEA report](fea/FEA_REPORT.md), [all 35 results](fea/results_summary.csv) and [compact findings](fea/key_findings.json).

## Longer-stroke demonstration: explicit arithmetic

Let S be available keeper travel, t the axial lug thickness, e distal retained engagement, and g the gap to the lug.

- Travel to clear the lug: `s_clear = e + g + t`.
- Nominal opening margin: `c = S - e - g - t`.
- Retaining travel after distal support is lost: `g + t`.

| Quantity | Current P14 reference | Illustrative concept |
|---|---:|---:|
| S | 3.0 mm | 6.0 mm |
| t | 1.4 mm | 3.5 mm |
| e | 0.6 mm | 1.0 mm |
| g | 0.3 mm | 0.3 mm |
| Travel to clear | 2.3 mm | 4.8 mm |
| Nominal opening margin | 0.7 mm | 1.2 mm |
| Retaining travel on the proximal guide alone | 1.7 mm | 3.8 mm |

The concept gives more nominal opening margin and a thicker lug, but also more than doubles the interval on one guide. No actuator has been selected, and no strength improvement has been assigned to the changed geometry. Actual minimum stroke, tolerances, deflection and fit must close the clearance budget.

The mounting demonstration uses `M = F e` and a moment-couple component `M / d`, with millimeters converted to meters. For example, 8.9 N at a 40 mm perpendicular offset gives 0.356 N·m; a 50 mm bearing spacing gives a 7.12 N couple component. Total reactions also include axial load sharing and real structural compliance.

## Completed evidence and reproducibility

| Evidence | Completed | Scope |
|---|---:|---|
| Rigid STEP clearance/interference checks | 16 | Current receiver, adapter and keeper, with exact source hashes |
| Finite-element solves | 35 on 12 meshes | Baseline replay, two-size sensitivities, mounting and reduced-overlap cases |
| Numerical/source audits | All recorded checks pass | Residuals, force/moment balance, volume and source identity; internal consistency only |
| Existing controller tests | 16/16 | Existing host logic; no GPIO, proposed interlock or physical actuator exercised |
| Hardware measurements/tests | 0 | Explicitly pending; blank templates contain no invented readings |

For ordinary validation of the current Git checkout, use the CI wrappers from the repository root. Create fresh output directories so these runs preserve the historical evidence:

```sh
n2_check_dir="$(mktemp -d "${TMPDIR:-/tmp}/n2-checks.XXXXXX")"
python tools/ci/run_cad.py --output "$n2_check_dir/cad"
python tools/ci/run_controller.py --output "$n2_check_dir/controller"
```

Use the pinned dependencies and fresh FEA group commands in [continuous validation](../../../docs/continuous-validation.md). The wrappers record the tested checkout, guard the P14 inputs and reject missing or failed evidence. Changed geometry requires a reviewed model and expectation update.

The original `mechanical/run_validation.py`, `replay_controller.py` and `tools/validation_20261029/*` are **frozen-reference-only utilities**. They carry hard-coded historical source identifiers and in-place output paths, so running them on a later checkout can mislabel its inputs and overwrite the recorded study evidence. Use them only in a disposable reconstruction whose inputs have been verified against the historical source hashes; use the CI wrappers for current work.

[FEA_REPORT.md](fea/FEA_REPORT.md) preserves the original methods and commands. The frozen solver is unchanged. [artifact_inventory.json](fea/artifact_inventory.json) identifies the compact published records and separately hashes the omitted 157 MB of native meshes/field arrays. The historical results above remain unchanged.

## Remaining work and recommendation

Proceed with a **preloaded located seat, solenoid cross-bolt, broader backing and optional equipment lock**, while keeping round/diamond locators and twin supports available as alternatives. The most useful next measurement is actual actuator pull versus latch withdrawal demand throughout the stroke, with the intended preload, mounting, temperature and voltage. Size the actuator and proximal guide together.

The physical protocols and eight blank data sheets are ready in [concept verification](../../../docs/concept-verification-20261029.md) and [physical_pending](physical_pending/README.md). They cover actual fit, actuator and latch force curves, complete-assembly retention/release, partial seating, manual-lock modes, wear, creep, vibration and environment. Numerical side-load/moment contact analysis and the new concept CAD/FEA remain unperformed; their contact and installation definitions must be designed first.

The previous 8.9 N service and 17.8 N proof-screen targets are provisional carryovers. The study does not turn them into a rated payload. [verification_status.json](verification_status.json) records completed computation separately from missing inputs and hardware evidence.

