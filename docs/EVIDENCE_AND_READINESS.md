# Evidence and readiness

This is a record of the current evidence, not a new qualification result. The selected N2 package and this repository import retain unchanged geometry and existing analytical/software records. [Selection record](../project/docs/selection.md)

## Evidence register

| Area | Available evidence | What it establishes | What remains open |
|---|---|---|---|
| CAD | Editable N2 generator, issued STEP/STL, source provenance, frozen-file and regeneration reports | Nominal geometry and reported digital continuity | Actual printing, shrinkage, surface quality, assembly fit and tolerances |
| Motion | Prescribed viewer motions and sampled rigid interference checks | The documented nominal sequence and sampled clearances | Loaded motion, elastic deformation, friction, actuator travel and actual departure |
| Structure | 39 PLA case records, frozen inputs, 10 meshes in the original archive, convergence/contact/mounting sensitivities | Conditional linear-elastic stress screens | Material allowables, nonlinear failure, creep, fatigue, installation and load qualification |
| Withdrawal | Historical full-stroke analytical friction model and equilibrium audit | Arithmetic for selected assumed contact/friction branches | Measured demand, actual contact transitions and net available actuator force |
| Controls | Original controller source, 16-test host transcript and verification record | Recorded software logic behavior | Physical flashing, pulse/current measurement, coil temperature, hardware faults and mechanical release |
| Manufacturing and cost | Print instructions, model-derived mass, historical supplier records, blank inspection/timing forms | Reproducible assumptions and planned records | Weighed parts, current quotes, complete procurement and manufactured test evidence |
| Repository import | Full archive CRC/hash audit, imported byte comparisons, syntax and JSON checks | Source preservation and recoverability | New CAD/FEA/software execution or any physical validation |

Source records: [CAD provenance](../project/cad/SOURCE_PROVENANCE.json), [regeneration report](../project/cad/REGENERATION_VERIFICATION.json), [analysis method](../project/analysis/METHOD.md), [historical friction model](../project/analysis/historical_release/README.md), [controller verification](../project/electronics/verification.json), [BOM](../project/manufacturing/BOM.md), [import validation](../provenance/import_validation.json).

## Prioritized continuation already defined by the project

1. **Measure real support and open clearance.** Record actual parts, actuator travel, fork lost motion and retained play. Positive distal overlap must remain observable across measured variation; the issued plan uses a provisional full-open clearance target of at least 0.20 mm after variation. Binding, lost retained support or inadequate open margin stops loaded testing.
2. **Measure the complete force budget.** Compare net actuator pull and mechanism demand at every relevant stroke position and condition, including the transitions near 0.6 and 2.3 mm. Count spring force once. The existing provisional development gate is at least 2:1 minimum measured available pull to maximum measured demand, including uncertainty. That ratio has not been passed or qualified.
3. **Characterize actual mounting and retained-load behavior.** The existing plan calls for matching material specimens and representative assemblies, actual backing and fixtures, and separately recorded first damage, permanent set, slip and ultimate separation. Service wrench, proof factor and permitted set must be defined before qualification; no service value is supplied by the archived FEA.
4. **Measure complete release and faults.** Distinguish command-on, keeper withdrawn, adapter clear and command-off. The timing forms are blank. Demonstrate the actual departure path, including incomplete insertion, obstructed return and relevant installation conditions, before treating an energized coil as successful release.
5. **Establish thermal, wear and installation behavior.** The initial pulse/off settings remain unqualified. Coil and printed-contact temperatures, repeatability, retained duration, wear and installation-specific separation remain open.

These are summarized from the [original verification plan](../project/docs/verification.md). That source contains the complete procedures and provisional acceptance language. This import adds no operating envelope, test completion, reliability claim, or flight qualification.

## Reproducibility boundary

The final frozen analysis driver is identified by SHA-256 `6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c`. It is the implementation supplied for future replay. Historical `driver_sha256` fields were sampled when results were serialized and cannot prove which code bytes had already been imported into each running process. Older executing snapshots were not retained. Successful archive/hash verification therefore does not prove bit-identical replay of every historical solve. [Reproduction instructions](../project/analysis/REPRODUCE.md) · [Frozen input manifest](../project/analysis/input_manifest.json)

The original manifests include 11 frozen inputs and 105 archived analysis outputs. This checkout retains all frozen inputs and compact scalar outputs; raw arrays and mesh files are in the complete package. The original whole-package verification commands need those files. Preserve this distinction when reviewing a future change or reporting test results. [Recovery instructions](ARTIFACTS_AND_RECOVERY.md)

## Import-specific checks

The repository import validates content identity and basic readability. It does not rerun FEA, regenerate CAD, install dependencies, build/deploy the website, flash hardware, or invoke actuator firmware. Historical test transcripts and browser/build reports are labeled by their original dates and remain evidence of their original runs. [Machine-readable import validation](../provenance/import_validation.json)
