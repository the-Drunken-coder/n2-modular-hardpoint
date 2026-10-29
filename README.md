# N2 Modular Hardpoint

**N2, the supported cross-bolt, is the sole active design.** This private repository imports the selected P11 engineering package, dated 27 October 2026, and its decision history. P11 preserves the P6 geometry. It is a source and evidence consolidation, with no new geometry revision, FEA solve, manufactured prototype, or demonstrated loaded release. [Selection record](project/docs/selection.md)

The current scope is **mechanical retention and release with a local bench actuator controller**. There is no payload power/data interface, aircraft bus, ejector, position sensor, or implemented positive fixed-pod lock. The earlier 10–15 lb target was withdrawn; no replacement minimum or working-load rating is established. [Prior scope context](provenance/context_sources.json) Current print and analysis guidance uses **PLA**. Historical PETG wording remains in original CAD metadata and is superseded by the active metadata and manufacturing guidance. [Scope and assumptions](project/docs/assumptions.md) · [Active metadata](project/cad/N2/active_metadata.json)

## Start here

**Requirements:** [docs/requirements.md](docs/requirements.md) (1.81 kg at 2 g, SF 2: failure ≥ 71.2 N, fail-safe latch).

| Need | Repository material |
|---|---|
| Catch up on the current engineering state | [Current context](docs/CURRENT_CONTEXT.md) |
| Understand what is demonstrated and what remains open | [Evidence and readiness](docs/EVIDENCE_AND_READINESS.md) |
| Find every download, archive member, and checksum | [Artifacts and recovery](docs/ARTIFACTS_AND_RECOVERY.md) |
| Read the unchanged original package | [P11 README](project/README.md) and [scope note for this checkout](project/IMPORT_NOTE.md) |
| Open the retained assembly | [N2 assembly STEP](project/cad/N2/assembly.step) |
| Edit the geometry | [CAD instructions](project/cad/README.md), [N2 generator](project/cad/build_n2.py), [common CAD code](project/cad/common.py) |
| Print the four custom pieces | [Receiver](project/cad/N2/N2_receiver_print.stl), [adapter](project/cad/N2/N2_adapter_print.stl), [keeper](project/cad/N2/N2_keeper_print.stl), [clamp](project/cad/N2/N2_clamp_print.stl), [printing instructions](project/manufacturing/PRINTING.md) |
| Inspect the mechanism visually | [Assembled](project/drawings/N2_assembled.png), [exploded](project/drawings/N2_exploded.png), [sequence](project/drawings/N2_sequence.png), [dimensions](project/drawings/N2_dimensions.png); editable SVG counterparts are in [drawings](project/drawings/) |
| Assemble, mount, or review procurement | [Assembly and installation](project/docs/assembly_installation.md), [BOM](project/manufacturing/BOM.md), [structured BOM](project/manufacturing/bom.json) |
| Review local controls | [Electronics README](project/electronics/README.md), [wiring](project/electronics/wiring.md), [controller](project/electronics/controller_core.py), [host tests](project/electronics/test_controller.py) |
| Inspect the analytical evidence | [Analysis README](project/analysis/README.md), [method](project/analysis/METHOD.md), [39-case summary](project/analysis/summary.json), [assembly results](project/analysis/assembly_results.csv) |
| Understand the design-selection history | [Historical comparison guide](history/README.md), including the N4 extraction-direction correction |
| Continue the documentation website | [Website source](project/website_source/README.md), [application](project/website_source/src/App.jsx), [lockfile](project/website_source/pnpm-lock.yaml) |

## What is committed and what is in the full archive

The `project/` tree contains **230 original files, 19,094,350 bytes**, preserved byte for byte. It includes editable CAD, issued STEP/STL exports, drawings, manufacturing documents, local controller code, all 39 compact FEA case records, analysis inputs and replay code, historical N2 friction arithmetic, and website source with dependency licenses. Three historical report PDFs are also committed under `history/comparison_reports/`.

The complete P11 ZIP has 475 files. **59 raw FEA field/mesh files and 186 generated website-build files are intentionally retained in the complete archive rather than duplicated in Git.** Every member, including each omitted file, has a size, CRC, SHA-256, and disposition in the [full P11 archive inventory](provenance/n2_archive_inventory.json). The original `project/PACKAGE_MANIFEST.json` describes that full issued package; it is not a claim that the partial Git checkout contains all its members.

Download the [complete N2 P11 package](https://chatgpt.com/library?file_id=libfile_145a3e612f4881918827a6076504b265&account_id=personal) when raw fields, meshes, or the issued website build are needed. Its SHA-256 is:

```text
757ef6a4fd6e74e8db6c20262298813dc0fc24d3fdce087c54abfdfe1772d65b
```

Original instructions that verify every archived output require that complete package. They will report missing files in this intentionally smaller checkout. [Recovery instructions](docs/ARTIFACTS_AND_RECOVERY.md) explain the distinction and list all source downloads. The account-scoped archive links require access to the originating ChatGPT account; GitHub access alone does not grant that access.

## Main engineering issue

The retained keeper has nominal distal engagement of only **0.6 mm**. During the **3 mm** withdrawal, that support is lost before the keeper clears the adapter lug at approximately **2.3 mm**. The remaining loaded interval is the central fit, friction, and actuator-force question. Printed engagement, mounting/backing, full-stroke available pull and demand, and actual adapter departure remain unmeasured. [Mechanism](project/docs/mechanism.md) · [Verification plan](project/docs/verification.md)

The archived PLA FEA gives finite-mesh local stress-threshold crossings, including approximately 21.50 N for centered full backing, 11.26 N for the ideal two-hole fixture, and 7.48–7.53 N with ineffective distal support. **These are not working, breaking, proof, payload, or loaded-release ratings.** The model uses assumed material thresholds and prescribed contact. [Analysis basis](project/analysis/METHOD.md)

## Import verification and continuity

The 29 October 2026 import checked both source ZIPs for CRC errors, verified their complete original file-hash manifests, and compared every imported original against its source bytes. Python files were parsed for syntax and structured JSON was checked; this import did not rerun a solver, regenerate CAD, flash a controller, exercise hardware, or deploy the website. See the [import validation](provenance/import_validation.json), [original-file hashes](provenance/imported_originals.sha256), and [source artifact manifest](provenance/source_artifacts.json).

The recorded documentation site is [compact-modular-hardpoint-r1.drunken.chatgpt.site](https://compact-modular-hardpoint-r1.drunken.chatgpt.site). This import preserves its editable source; site deployment state is not validated by repository integrity checks.

## Print requirements

Bambu PLA Basic (dried), 100% solid, supplied print orientations. The FEA rating assumes all of it: [docs/print-requirements.md](docs/print-requirements.md).
