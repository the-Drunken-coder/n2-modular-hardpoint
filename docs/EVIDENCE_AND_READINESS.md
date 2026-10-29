# Evidence and readiness

**Current baseline: N2 P14, with PAHT-CF as the prototype candidate. No physical specimen, load test or loaded release has been demonstrated.** This page separates current analytical evidence from historical import/rebuild records. [P14](p14.md) · [Requirements](requirements.md)

## Current evidence register

| Area | Available evidence | What it establishes | What remains open |
|---|---|---|---|
| CAD | P14 generator and STEP/STL, manifest and viewer geometry | Nominal revised roof, keeper/linkage and slot geometry | Actual printing, shrinkage, surface quality, assembly fit and tolerances |
| Motion | Prescribed viewer sequence and P14 sampled rigid interference checks | Documented nominal sequence and sampled clearances | Full-stroke loaded contact, friction, actuator travel and actual departure |
| Structure | P14 linear component screens; underlying PLA thresholds scaled by 47/31 | Conditional estimate of 33.68 N governing straight-pull threshold crossing | Anisotropic PAHT-CF properties, actual mounting, P14 convergence/contact study, nonlinear failure and physical qualification |
| Manufacturing | P14 overhang classifier and specified print orientations | Geometry-based bridge/support assessment | Slicer paths, actual bridging, dimensional repeatability and process strength |
| Withdrawal/retention | P14 analytical arguments and historical friction diagnostics | Identified force and engagement questions | Measured pull curve, spring preload, back-drive, partial engagement, vibration and loaded release |
| Controls | Original controller source and 16-test host transcript | Recorded software logic behavior | Physical flashing, pulse/current, temperatures, hardware faults and mechanism operation |
| Procurement/mass | Current order-list record and CAD volumes; historical BOM | Traceable part choices, recorded costs and geometric quantities | Purchased/printed inspection, measured mass and complete installation cost |

The **8.9 N design force and 17.8 N sacrificial qualification target** are current provisional requirements. The **33.68 N screen / SF 2 = 16.84 N** is arithmetic from a surrogate model, not a measured allowable or working-load rating. The receiver's ideal full backing is not equivalent to any arbitrary two-bolt installation. [Requirements](requirements.md) · [P14 estimate](p14.md) · [Test plan](test-plan.md)

Two evaluated support states retaining the same governing adapter screen do not close every partial-engagement case. A geometric support classifier does not demonstrate successful support-free printing. Analytical back-drive/vibration arguments do not close those requirements, and the 2g flight load factor does not define a vibration spectrum.

## Prioritized physical work

1. **Confirm the print process and fit.** Inspect all thin-wall/bridge paths, then measure actual actuator dimensions, keeper travel, linkage lost motion, retained overlap and full-open clearance. The provisional development target is at least 0.20 mm measured open clearance after variation. Binding, missing engagement or inadequate clearance stops loaded testing.
2. **Measure the force budget and return behavior.** Measure available actuator pull and mechanism demand throughout the stroke, especially the transitions near 0.6 and 2.3 mm. Include actual spring force exactly once, operating voltage and thermal condition. Supplier nominal force does not establish minimum net pull throughout the mechanism's travel.
3. **Test representative mounting and retention.** Use the actual host/payload fasteners and backing, documented material/process specimens and a controlled load fixture. Follow the 8.9 N design and 17.8 N sacrificial qualification steps in the current test plan; record first damage, permanent set, slip and separation separately.
4. **Demonstrate complete loaded release and faults.** Observe command-on, actual keeper withdrawal, adapter clearance and command-off separately. Check incomplete insertion, interrupted travel, loss of power, obstructed return and the actual departure path.
5. **Establish environmental and repeated-use behavior.** Characterize conditioning, retained duration, creep, wear, coil/contact temperatures and a defined vibration environment. Aircraft installation and glider separation need their own load and clearance evidence.

These are planned gates, not completed tests. The [current test plan](test-plan.md) defines the procedures, records and provisional acceptance criteria. The [older verification plan](../project/docs/verification.md) remains useful for detailed forms and original development context; its older load/material assumptions do not override the current plan.

## Historical records and reproducibility boundary

The P8/P11 archive preserves 39 PLA scalar case solutions across 10 meshes, plus original configurations, geometry and audit records. The compact scalar results are in Git; large raw arrays/meshes remain in the indexed original ZIP. Whole-package archival hash verification requires those missing archive files. [Historical analysis](../project/analysis/README.md) · [Recovery guide](ARTIFACTS_AND_RECOVERY.md)

The final frozen solver has SHA-256 `6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c`. Historical `driver_sha256` fields were sampled during result serialization and cannot prove which bytes had already been imported into each running process. Older executing snapshots were not retained. Archive/hash verification therefore does not prove bit-identical replay of every historical solve. [Reproduction instructions](../project/analysis/REPRODUCE.md) · [Frozen inputs](../project/analysis/input_manifest.json)

The original [CAD provenance](../project/cad/SOURCE_PROVENANCE.json), [regeneration report](../project/cad/REGENERATION_VERIFICATION.json) and [import validation](../provenance/import_validation.json) establish continuity of their original P11/P6 snapshot. They are not reports of a current P14 rebuild or current-tree hash audit. Preserve their identities and issue separately named records for later work.

Current P14 analysis inputs/results are under [project/analysis/p14/](../project/analysis/p14/); reproduction tooling is documented in [tools/README.md](../tools/README.md). The documentation/metadata correction does not rerun FEA, perform physical tests or assign an operating capacity. Historical host/build/browser transcripts retain their original dates and scope.
