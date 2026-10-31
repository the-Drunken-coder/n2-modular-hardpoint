# N2 modular hardpoint — R5

**R5 is the current development design:** three printed PAHT-CF parts, one MG92B positional servo, and a sliding keeper. The payload adapter departs in **−Z** in the R5 assembly frame. P14 and its solenoid controller are retained as **historical reference packages**.

**Status: unqualified bench prototype.** No physical proof, loaded-release result, working-load rating, or aircraft qualification is recorded. Computational checks must be run on the exact proposed geometry; archived results do not transfer automatically.

## Current specification

| Item | R5 requirement or design choice |
|---|---|
| Complete departing mass | 0.454 kg maximum, including adapter and departing hardware |
| Required loaded release | 2 g total load factor: **8.9044 N** axial extraction |
| Retention proof target | **17.8089 N** on the complete assembly; release at this force is not required |
| Actuator supply | Fixed nominal **5 V**; actual terminal voltage and signal interface require acceptance |
| Construction | Printed body, keeper and adapter; one servo |
| Power-off retention | Deliberately outside the requirement; a local actuator fault can lose retention independently of aircraft power |
| Payload interfaces | Mechanical only; no ejector, departure feedback, payload power/data or independent fixed-pod lock |
| Installation envelope | Compact credit-card-scale footprint, retained thickness at most 20 mm; use current generated bounds |

The selection is machine-readable in [active_design.json](project/active_design.json), with [R5 metadata](project/designs/r5/design.json) and [geometry parameters](project/designs/r5/params.py). The metadata checker rejects selection of the historical solenoid design as the active package.

## Build, inspect and test

| Task | Current source |
|---|---|
| Requirements and scope | [Requirements](docs/requirements.md), [current context](docs/CURRENT_CONTEXT.md) |
| Mechanism, source and purchased parts | [R5 package](project/designs/r5/README.md), [BOM](project/designs/r5/BOM.md) |
| Print and inspect | [Print requirements](docs/print-requirements.md) |
| Calibrate and power the servo | [R5 bench electronics](project/designs/r5/electronics/README.md) |
| Test retention and loaded departure | [R5 bench plan](docs/test-plan.md) |
| Understand evidence limits | [Evidence and readiness](docs/EVIDENCE_AND_READINESS.md) |
| View the assembly | [3D viewer](https://the-drunken-coder.github.io/n2-modular-hardpoint/); select R5 and inspect the shown commit |

```sh
python -m pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt -r project/designs/r5/requirements.txt
python tools/check_current_baseline.py
cd project/designs/r5
python cad/build.py
python -m unittest discover -s tests -v
python analysis/mechanics.py
python analysis/fea.py
python analysis/risks.py
python analysis/yoke_strength.py
```

Generated geometry and calculations are in `project/designs/r5/out/`, uploaded by the **R5 design checks** workflow. The viewer is a design aid; a moving animation does not establish loaded departure or physical fit.

## Historical material

The committed STEP/STL files in [project/cad/N2](project/cad/N2) belong to P14, not R5. Its [requirements](docs/p14-requirements.md), [test plan](docs/p14-test-plan.md), and [print instructions](docs/p14-print-requirements.md) must not be used to manufacture or approve R5. `project/project.json` and `project/cad/N2/active_metadata.json` describe that historical package; they no longer select the repository's active design.

P14 numerical/CAD/controller regression workflows preserve that reference. They do not validate R5. [Historical recovery and provenance](docs/ARTIFACTS_AND_RECOVERY.md) retain the original P11 archive identities and engineering history.

