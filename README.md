# N2 Modular Hardpoint

**R4 is the current development proposal: a standalone, printable hardpoint with a preloaded keyed seat, supported thicker lug and direct servo drive.** The complete [R4 design package](project/designs/r4/README.md) includes parameterized CAD, physical STEP/STL parts, dimensioned drawings, hardware and fit specifications, assembly instructions, 5 V bench controls, an interactive viewer and fresh CAD/FEA validation. No working-load or flight qualification is claimed.

| Start with R4 | Material |
|---|---|
| Review the complete design | [R4 package and decisions](project/designs/r4/README.md) |
| Inspect the new model | [R4 viewer source](project/designs/r4/viewer/index.html); after building the site, open `r4/viewer/` |
| Print, buy and assemble | [Manufacturing files](project/designs/r4/manufacturing/), [assembly](project/designs/r4/docs/assembly.md), [interfaces](project/designs/r4/docs/interfaces.md) |
| Understand the actuator and power | [Actuation](project/designs/r4/docs/actuation.md), [wiring and firmware](project/designs/r4/electrical/README.md) |
| Reproduce the engineering checks | [R4 analysis](project/designs/r4/analysis/README.md), [R4 Actions workflow](.github/workflows/refined-design-validation.yml) |
| Plan physical acceptance | [R4 qualification plan](project/designs/r4/docs/qualification.md) |

The remainder of this README preserves the **P14 issued reference** and its provenance. Its smaller four-print solenoid assembly and its numerical results do not describe or qualify R4. [P14 design](docs/p14.md) · [Current context](docs/CURRENT_CONTEXT.md)

## Preserved P14 reference

P14 uses a mini spring-return solenoid to withdraw a printed keeper. Its four printed pieces have a nominal retained envelope of **43.1 × 30 × 19 mm**, excluding the controller, full wiring, installation hardware and departure space.

The scope is mechanical retention and release with a local bench actuator controller. Payload power/data transfer and direct RC integration remain outside this prototype. The adapter needs an external +Z force to leave after unlocking; there is no ejector, departure sensor or positive fixed-pod lock. [Mechanism](project/docs/mechanism.md)

## Preserved P14 baseline

| Item | Current basis |
|---|---|
| Geometry | P14: bridged proximal roof, relocated keeper link, flat keeper underside and narrower armature-button slot |
| Candidate prototype material | Bambu PAHT-CF, with the supplied P14 print orientations; slicing and physical printing remain unverified |
| Provisional payload requirement | **0.454 kg (1 lb)** including the departing adapter and all departing attachment hardware |
| Design load | **8.9 N**, assuming 2 g and straight +Z extraction only |
| Sacrificial bench qualification target | **17.8 N**, twice the design load; this is a test target, not a demonstrated proof rating |
| Earlier retained-state stress screen | **33.68 N**, adapter, using PLA component FEA thresholds scaled by 47/31; conditional on the original modeled support states |
| Arithmetic SF 2 allowance | **16.84 N** = 33.68/2; not an established working-load or loaded-release rating |
| Physical evidence | No manufactured prototype, successful loaded release or qualified installation recorded |

The receiver analysis assumes ideal continuous full backing. Prescribed contact tractions and a material-strength ratio do not establish the performance of printed PAHT-CF parts, the actual two-screw installation, or the entire release stroke. The two modeled engagement states do not prove all partial-engagement states. See [requirements](docs/requirements.md), [analysis limits](docs/provisional-load-rating.md) and [test plan](docs/test-plan.md).

The [subsequent mounting and withdrawal study](project/analysis/validation_20261029/README.md) found adverse fixture and reduced-overlap sensitivity. The **next-design brief** now records the user's one/two-can pod range, compact mounting envelope, **2 g loaded release**, and **fixed 5 V** requirement. Its rounded dimensions and power/mass budgets guide the next layout; P14 remains the issued CAD. [Recorded inputs](docs/next-design-brief.md)

## P14 reference map

| Need | Repository material |
|---|---|
| Understand the current geometry and remaining evidence | [P14 design](docs/p14.md), [current context](docs/CURRENT_CONTEXT.md), [evidence and readiness](docs/EVIDENCE_AND_READINESS.md) |
| Rotate the model, explode the assembly or inspect the FEA | [GitHub Pages viewer](https://the-drunken-coder.github.io/n2-modular-hardpoint/) and [current viewer source](web/src/App.jsx) |
| Edit or inspect CAD | [CAD instructions](project/cad/README.md), [generator](project/cad/build_n2.py), [assembly STEP](project/cad/N2/assembly.step), [active metadata](project/cad/N2/active_metadata.json) |
| Print the four custom pieces | [Receiver](project/cad/N2/N2_receiver_print.stl), [adapter](project/cad/N2/N2_adapter_print.stl), [keeper](project/cad/N2/N2_keeper_print.stl), [clamp](project/cad/N2/N2_clamp_print.stl), [P14 print requirements](docs/print-requirements.md) |
| Assemble, mount or buy components | [Assembly and installation](project/docs/assembly_installation.md), [manufacturing instructions](project/manufacturing/PRINTING.md), [order list](project/manufacturing/ORDER_LIST.md) |
| Review local controls | [Electronics](project/electronics/README.md), [wiring](project/electronics/wiring.md), [controller](project/electronics/controller_core.py) |
| Reproduce or examine the current calculations | [P14 result summary](project/analysis/p14/fea/B1.4_O0.6/summary.json), [tool instructions](tools/README.md), [analysis overview](project/analysis/README.md) |
| Run automated FEA, CAD clearance and controller checks | [Engineering validation workflow](https://github.com/the-Drunken-coder/n2-modular-hardpoint/actions/workflows/engineering-validation.yml), [CI scope and local commands](docs/continuous-validation.md) |
| Plan the first physical prototype | [P14 bench-test plan](docs/test-plan.md), [requirements and open gates](docs/requirements.md) |
| Develop the next concept within the selected size and power constraints | [Next-design brief](docs/next-design-brief.md), [structured inputs](docs/next-design-inputs.json) |
| Recover the original P11 package or comparison history | [Artifacts and recovery](docs/ARTIFACTS_AND_RECOVERY.md), [historical comparison guide](history/README.md), [import scope](project/IMPORT_NOTE.md) |

The issued [drawings](project/drawings/) and original [BOM](project/manufacturing/BOM.md) are **P11 historical records**. The drawings explain the general assembly but do not show the P14 roof and keeper revisions; use the current CAD and instructions to make P14. Historical printed masses, cost totals and PLA screens are not current P14 manufacturing results.

## Main engineering question

Nominal distal overlap is **0.6 mm**. The keeper loses that support before it clears the adapter lug at about **2.3 mm** of its **3 mm** withdrawal. P14 improves the modeled proximal support, but printed fit, full-stroke force demand, spring return, vibration retention and actual adapter departure still need measurement. [Release behavior](project/docs/mechanism.md) · [Bench tests](docs/test-plan.md)

## Repository and archive provenance

The initial 29 October 2026 import brought in **230 original P11 files (19,094,350 bytes)** plus three historical comparison PDFs. Subsequent P12–P14 commits changed the active design. The import hashes are a record of that original import, **not a claim that today's working tree is byte-identical to P11**.

The complete P11 ZIP contains 475 files. Its 59 raw FEA field/mesh files and 186 generated website-build files were not duplicated in Git. The [archive inventory](provenance/n2_archive_inventory.json) and [recovery instructions](docs/ARTIFACTS_AND_RECOVERY.md) identify them. The original `project/PACKAGE_MANIFEST.json` applies to that historical full ZIP, whose SHA-256 is:

```text
757ef6a4fd6e74e8db6c20262298813dc0fc24d3fdce087c54abfdfe1772d65b
```

Use a verified P11 extraction for whole-archive integrity checks or historical replay. Current P14 metadata and instructions do not rewrite those historical results. The deployed application is built from `web/`; `project/website_source/` preserves the earlier P11 site.

## Automated engineering checks

The **Engineering validation** workflow runs on every pull request, push to `main`, and manual dispatch. It performs 35 fresh P14 FEA case solves, regenerates and compares all 13 CAD parts, checks 16 nominal clearance poses, and runs the current controller host tests. Each job records logs and results as Actions artifacts retained for 14 days. The final gate fails if a required job or result is missing or unsuccessful.

These are computational regression checks, not a payload rating or physical qualification. The P14 contact model and clearance expectations are guarded against changes to their inputs; new geometry requires a reviewed model update. See [continuous validation](docs/continuous-validation.md) for commands, failure handling and the recorded design inputs.

## Check documentation consistency

```bash
python tools/check_current_baseline.py
python site/build_status.py
cd web
npm ci --legacy-peer-deps
npm run build
```

These checks validate metadata, result references and the website build. They do not run FEA, qualify print settings or demonstrate mechanical performance.

