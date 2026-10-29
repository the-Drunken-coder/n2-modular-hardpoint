# N2 analysis: current P14 and historical PLA evidence

## Current P14

Start with [P14 design and limitations](../../docs/p14.md), [current screen interpretation](../../docs/provisional-load-rating.md), [stored summary](p14/fea/B1.4_O0.6/summary.json) and [analysis tools](../../tools/README.md). The 33.68 N straight-pull screen uses PLA component thresholds scaled by 47/31 for a PAHT-CF estimate. Receiver backing is idealized; full-stroke contact, P14 mesh convergence and actual mounting are not established. Dividing by SF 2 gives 16.84 N for comparison only. No working-load rating is assigned. The physical-test targets are 8.9 N design and 17.8 N sacrificial qualification.

## Historical P11 / P8 archive

The rest of this page and the root `summary.json`, `material.json`, `results/`, `geometry/` and original manifests describe the preserved P11/P8 analysis, not a new solve of P14. Whole-archive hash checks require the complete historical ZIP. Their source records are retained without numerical edits.

This is the N2-only extraction of the existing P8 analysis. **No geometry was improved and no new finite-element solve was performed for P11.** The archive contains the actual three N2 STEP solids, frozen configurations, final replay solver, 39 case/mesh solutions on 10 meshes, field arrays, and numerical audits.

The results are **conditional local-stress screens**, not measured breaking loads, qualified payload capacities, or working-load ratings. N2 remains a selected development design. Its printed parts, fitted support contacts, mounting joint, and loaded release still require testing.

## What the existing model says

The payload adapter's extraction direction is **+Z**. The keeper withdraws in **+X**. Every component analysis is normalized to the reactions produced by a total retained extraction force of 1 N; component tractions have the appropriate opposing signs.

| Contact case | Full rigid backing, N | Ideal two-hole fixture, N | Controlling part |
|---|---:|---:|---|
| Centered; both roofs support keeper | 21.4975 | 11.2638 | Receiver |
| Distal roof ineffective | 7.4830 | 7.5273 | Receiver |
| Contact restricted to low-Y half | 17.8175 | 11.5779 | Receiver |

These are the original common **0.55 mm target-mesh results**. “N” means total extraction force at the first crossing of assumed local stress thresholds. A mass equivalent is only (m=P/(n g)), where (g=9.80665\text{ m/s}^2), and includes the payload, its removable adapter, and removable fasteners. For example, the centered full-backing and two-hole crossings correspond algebraically to 2.192 kg and 1.149 kg at 1g. Neither number is a qualified carried mass.

The full-backing fixture assumes the complete receiver underside is continuously rigidly supported. The two-hole fixture fixes ideal exposed washer annuli. An actual installation is not automatically represented by either ideal fixture.

## Why the support and release caveat matters

The retained keeper overlaps the distal roof by only **0.6 mm**. Both roofs must actually engage for the nominal load path to apply. That distal overlap disappears after 0.6 mm of withdrawal, while the lug remains captured until 2.3 mm of nominal keeper travel. The lower distal-ineffective results are therefore material to the development decision.

Holding FEA does not establish loaded release. As the keeper retracts, guide reactions and friction change and the remaining lug-contact area shrinks. The mini-solenoid's minimum usable pull over stroke, the fitted zero-load drag, skew, print variation, thermal state, and the payload's ability to depart must be demonstrated separately. The [historical P7 friction study](historical_release/README.md) is retained as an explicitly unqualified analytical diagnostic.

## Files to start with

| File or directory | Purpose |
|---|---|
| [METHOD.md](METHOD.md) | Material assumptions, load path, constraints, failure index, convergence, and interpretation |
| [REPRODUCE.md](REPRODUCE.md) | Portable verification and optional numerical replay instructions |
| [summary.json](summary.json) | N2-only website/table source, assembly cases, convergence, and limitations |
| [assembly_results.csv](assembly_results.csv) | The six common-mesh fixture/contact screens |
| [results.csv](results.csv) | All 39 component/case/mesh scalar results |
| `geometry/N2/` | Frozen, hash-identified N2 adapter, keeper, and receiver STEP solids |
| `inputs/configs/` | Original three model configs and separate receiver local-refinement config |
| `inputs/drivers/` | Exact final P8 solver snapshot; authoritative implementation for current replay |
| `results/` | Original JSON results, all 39 field NPZ files, 10 MSH files and 10 mesh NPZ files |
| `audits/` | Contact, mesh, package, and prior generic implementation verification records |
| `historical_release/` | N2-only P7 friction statics, full-stroke data, source and arithmetic checks |
| [archive_manifest.json](archive_manifest.json) | SHA-256 proof of the byte-identical raw output extraction |

`figures/N2_receiver.png` is the existing actual-geometry stress visualization. Its color is cell-mean von Mises stress for visual orientation, **not** the tension/compression/maximum-shear criterion used for the reported screen. `figures/N2_convergence.png` and `.svg` plot the existing scalar results; creating that plot did not rerun FEA.

## Verification status

The focused package has passed frozen-input hashes, all 105 archived-output hashes, independent relocation of the input package, and prepare-only remapping of all four configurations. All case dictionaries, numerical settings, mesh recipes, and geometry hashes were preserved. The historical N2 friction arithmetic reproduces 12 cases and 3,462 full-stroke rows exactly; its independent force/moment balance covers 13,848 assumed contact states. See [audits/portability_check.json](audits/portability_check.json).

**Historical solver provenance remains limited.** Older result files recorded the solver file hash when serializing output, not necessarily the bytes imported by the running process. Older executing snapshots were not preserved. The final frozen driver is the authoritative current replay source; byte-identical reproduction of every historical solve has not been established. This limitation was not removed by extracting N2.

## Remaining engineering work

Measure the actual print and actuator assembly, verify both roofs seat, test fixture stiffness and local fastener behavior, and measure extraction/withdrawal force through the complete stroke. Establish repeatable print properties and dimensional inspection first. Then test retained load and loaded release using the actual host fixture, off-axis loads/CG moments, temperatures, and expected service cycles. Payload unlocking and complete aircraft clearance remain separate acceptance events. The package's main verification documents define the physical test plan; none of these physical events has been demonstrated by this analysis archive.
