# N2 hardpoint engineering packages

**Current development: [R4 standalone hardpoint](designs/r4/README.md).** R4 contains the selected three-print architecture, supported 3.5 mm lug, longer direct servo withdrawal, dimensional/assembly definition, local bench controls and reproducible validation. Use that package for new prototype work.

The following material is the **preserved P14 issued reference**. Its four printed pieces use a purchased mini solenoid to retract a supported cross-bolt. It is retained with its original CAD, calculations and instructions so previous work remains reproducible. It does not qualify the changed R4 geometry.

This directory began as the P11 package import and still contains historical drawings, BOM/analysis records and website source. The current geometry is P14; the original P11/P6 provenance and test transcripts do not validate later revisions. The repository-level [current context](../docs/CURRENT_CONTEXT.md), [P14 record](../docs/p14.md), [requirements](../docs/requirements.md) and [test plan](../docs/test-plan.md) govern further work.

## Start here

| Task | Current entry point |
|---|---|
| Understand the selected design and load targets | [Current context](../docs/CURRENT_CONTEXT.md), [requirements](../docs/requirements.md), [P14](../docs/p14.md) |
| Open the complete retained assembly | [cad/N2/assembly.step](cad/N2/assembly.step) |
| Edit and regenerate the design | [cad/build_n2.py](cad/build_n2.py), [CAD instructions](cad/README.md) |
| Print the four custom parts | `cad/N2/*_print.stl`, [printing](manufacturing/PRINTING.md), [print requirements](../docs/print-requirements.md) |
| Assemble and inspect release motion | [Assembly](docs/assembly_installation.md), [mechanism](docs/mechanism.md), current CAD viewer |
| Procure components | [Order list](manufacturing/ORDER_LIST.md); older BOM records retain their original cost/material basis |
| Wire and program the local bench release | [Wiring](electronics/wiring.md), [electronics](electronics/README.md) |
| Read the current structural estimate | [P14 evidence](../docs/p14.md), [load-estimate interpretation](../docs/provisional-load-rating.md) |
| Reproduce current analyses | [Tools](../tools/README.md), `analysis/p14/`; the original PLA archive has separate reproduction instructions |
| Plan physical inspection and tests | [Current test plan](../docs/test-plan.md), [inspection form](manufacturing/inspection_record.csv) |
| Build the current website | Repository [README](../README.md) and [web/](../web/) |

## Compact assembly and operation

The current retained envelope is approximately **43.1 × 30 × 19 mm**, excluding full wiring, controls, installation hardware/backing and the departure corridor. Four custom pieces are printed: receiver, payload adapter, keeper and solenoid clamp. One purchased Adafruit 2776 mini solenoid drives the keeper; two M2 × 16 screws and two M2 nuts retain its clamp. The 13 modeled objects include simplified purchased actuator components and hardware; those reference pieces are not intended to be printed. [Manifest](cad/N2/manifest.json)

The keeper carries adapter load through receiver supports. The solenoid retracts it in +X; after the keeper clears, an external force must move the adapter away in +Z. Commanding the coil establishes neither unlocking nor complete separation. There is no ejector, position sensor or implemented positive fixed-pod lock.

P14 bridges the proximal roof on both sides, moves the keeper linkage past it, makes the keeper underside flat and narrows the stem slot to give the return button a bearing surface. It preserves the 3 mm stroke, 0.6 mm distal overlap and 1.4 mm lug. Losing distal support still occurs before lug clearance; two modeled support states having the same governing adapter screen does not prove the intervening loaded motion. [P14 changes](../docs/p14.md)

The local COTS bench controller and firmware are included. Payload power/data transfer and aircraft-wide electrical integration remain outside the current mechanical scope. There is no bespoke PCB and therefore no PCB fabrication quote.

## Current engineering basis

The provisional carried-mass target is **0.454 kg (1 lb), including the departing adapter and its attachment hardware**. At the assumed 2g load factor this is **8.9 N**; SF 2 sets a **17.8 N sacrificial qualification target**. These are development requirements, not demonstrated performance. The old 10–15 lb target and later superseded 4 lb requirement do not apply. [Requirements](../docs/requirements.md)

The current P14 estimate has a governing **33.68 N scaled local stress-screen crossing**. Dividing by SF 2 gives **16.84 N as an analytical estimate**, not an established working-load rating. The calculation scales a homogeneous isotropic PLA model by the supplier Z-tensile ratio 47/31; it is not a measured or anisotropic PAHT-CF solution. P14 receiver cases use ideal full backing, so actual mounting remains a separate qualification issue. [Analysis interpretation](../docs/provisional-load-rating.md)

No part has been printed or physically tested. Immediate work is slicer/bridge inspection, measured print/actuator fit, actual spring return and full-stroke pull, retained-load tests on the real mounting fixture, and complete loaded release. Matching coupons, moisture/temperature, wear and retention duration also require evidence.

## Reproduction and historical records

Use the current commands in [cad/README.md](cad/README.md) for geometry and [../tools/README.md](../tools/README.md) for P14 structural studies. The original [analysis/README.md](analysis/README.md) covers the P8/P11 common-PLA archive; it is valuable history but is not the P14 result set.

The original `PACKAGE_MANIFEST.json`, CAD provenance/regeneration reports, drawings, historical BOM figures and `website_source/` describe the imported snapshot. They must not be presented as fresh P14 verification. Large raw historical arrays/meshes were retained in the indexed original archive, not all in this Git checkout. See the [artifact recovery guide](../docs/ARTIFACTS_AND_RECOVERY.md).

The original controller host-test transcript covers software logic only. No controller was physically flashed or exercised for this documentation correction, and no new FEA or physical test is implied by it.
