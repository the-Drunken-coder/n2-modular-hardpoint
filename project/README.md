# N2 project packages — current R5

**R5 is the active development package.** It uses three printed parts and a TowerPro MG92B positional servo. It remains an unqualified bench prototype; numerical checks do not establish a working-load rating, physical release result or aircraft qualification. The repository selection is recorded in [active_design.json](active_design.json).

## Current R5 work

| Task | Entry point |
|---|---|
| Read the selected scope and load requirements | [Current context](../docs/CURRENT_CONTEXT.md), [R5 requirements](../docs/requirements.md) |
| Understand the mechanism and reproduce its checks | [R5 package](designs/r5/README.md) |
| Edit the geometry | [R5 parameters](designs/r5/params.py), [CAD generator](designs/r5/cad/build.py) |
| Procure components | [R5 BOM](designs/r5/BOM.md) |
| Print, inspect and assemble | [R5 printing](designs/r5/PRINTING.md), [assembly](designs/r5/ASSEMBLY.md), [current print requirements](../docs/print-requirements.md) |
| Wire and calibrate the bench controller | [R5 servo electronics](designs/r5/electronics/README.md) |
| Define the host and payload mounting interfaces | [R5 installation interface](designs/r5/docs/installation-interface.md) |
| Plan physical testing and assess evidence | [R5 bench plan](../docs/test-plan.md), [evidence status](../docs/EVIDENCE_AND_READINESS.md) |

The active CAD, analysis, manufacturing and controller instructions are under `designs/r5/`. Follow their measured-fit and calibration limits before powered trials. The repository [README](../README.md) is the top-level entry point.

## Historical P11–P14 material

The other directories in this package preserve earlier designs, source imports and studies. In particular, `cad/N2/`, `manufacturing/` and `electronics/` describe the historical four-print P14 solenoid mechanism. Their dimensions, positive-Z extraction frame, hardware, controller and numerical results do not apply to R5.

- [P14 design record](../docs/p14.md), [requirements](../docs/p14-requirements.md), [print requirements](../docs/p14-print-requirements.md) and [bench plan](../docs/p14-test-plan.md).
- [P14 CAD](cad/README.md), [fabrication](manufacturing/PRINTING.md), [electronics](electronics/README.md) and [analysis interpretation](../docs/provisional-load-rating.md).
- [P11 import scope](IMPORT_NOTE.md), [original analysis archive](analysis/README.md) and [artifact recovery](../docs/ARTIFACTS_AND_RECOVERY.md).

Original manifests, hashes, drawings, archived test transcripts and `website_source/` describe their recorded revisions. Preserve that source identity when reproducing them; they are not current R5 evidence.
