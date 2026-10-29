# Artifacts and recovery

All five recovered source artifacts are indexed below. The checked-in source tree and PDFs are available through this private GitHub repository; GitHub permissions do not grant access to the external archives.

## Original downloads

| Source artifact | Bytes | Repository treatment |
|---|---:|---|
| N2_Selected_Hardpoint_Project.zip | 181,844,720 | Full archive download |
| Six_Hardpoints_PLA_FEA.pdf | 2,200,567 | [committed copy](../history/comparison_reports/Six_Hardpoints_PLA_FEA.pdf) |
| N4_Extraction_Direction_FEA.pdf | 1,149,409 | [committed copy](../history/comparison_reports/N4_Extraction_Direction_FEA.pdf) |
| Six_Hardpoint_Load_Calculations.pdf | 1,957,184 | [committed copy](../history/comparison_reports/Six_Hardpoint_Load_Calculations.pdf) |
| Six_Hardpoint_Load_Calculations.zip | 5,940,691 | Full archive download |

Source references are carried forward from the project context; the import checks file identity rather than external access or current deployment status.

## Full member inventories

| Inventory | Coverage |
|---|---|
| [P11 N2 archive](../provenance/n2_archive_inventory.json) | Every one of 475 files, including archive path, expanded/compressed size, CRC, SHA-256, imported path or explicit archive-only disposition |
| [Historical calculation archive](../provenance/comparison_archive_inventory.json) | Every one of 158 files, including the comparison's source, geometry, results, figures and embedded PDF |
| [Source artifacts](../provenance/source_artifacts.json) | Original archive/PDF download URLs, exact sizes, hashes, roles and inventory links |
| [Imported originals](../provenance/imported_originals.json) | The 230 selected P11 files and 3 separately delivered PDFs, mapped back to original artifact/member paths |
| [Imported-original SHA-256 list](../provenance/imported_originals.sha256) | Checksum file usable from the repository root |
| [Context sources](../provenance/context_sources.json) | Prior briefing and work-thread provenance, separate from issued package evidence |
| [Import validation](../provenance/import_validation.json) | Checks actually performed for this import, distinct from historical engineering verification |

The P11 ZIP contains **212,823,735 expanded bytes**. Git includes 230 original P11 members totaling **19,094,350 bytes**. The two omission groups are:

| Omission | Files | Expanded bytes | Recovery and reason |
|---|---:|---:|---|
| `analysis/results/**` raw `.npz` and `.msh` files | 59 | 171,367,075 | Full P11 archive; 39 field arrays, 10 mesh arrays and 10 mesh files. All compact case JSON and frozen replay inputs are committed. |
| `website_source/dist/**` | 186 | 22,362,310 | Full P11 archive; issued generated site and duplicate downloadable source files. Editable application/build source, lockfile and dependency licenses are committed. |

The 158-file historical calculation ZIP is retained as a download, with a complete inventory and verified original manifest. Its six-concept source tree is not placed inside active `project/`. The three historical PDFs provide immediate review access. The calculation PDF inside the ZIP has a different hash and size from the separately delivered PDF committed here; see the [historical version note](../history/README.md).

## Verify and inspect this checkout

From the repository root, this standard checksum command verifies the 233 byte-preserved source files against the import record:

```sh
sha256sum -c provenance/imported_originals.sha256
```

A successful result verifies byte identity. It does not establish that a geometry build, solver, software test, or physical experiment has run. New import notes and index files are separate from the original P11 package manifest.

## Recover the complete issued package

Download `N2_Selected_Hardpoint_Project.zip` using the original-download link above. Verify its SHA-256 before extraction:

```sh
sha256sum N2_Selected_Hardpoint_Project.zip
```

Expected result:

```text
757ef6a4fd6e74e8db6c20262298813dc0fc24d3fdce087c54abfdfe1772d65b
```

Extract into a **new separate directory**, preserving the `N2_Selected_Hardpoint_Project/` archive root. The complete extraction includes the raw FEA files and `website_source/dist/` that are omitted from Git. It also includes the original `PACKAGE_MANIFEST.json` with all 474 other members. Do not replace issued geometry or results merely to satisfy a checksum.

The original [analysis reproduction instructions](../project/analysis/REPRODUCE.md) apply from that extracted package root. In particular, `analysis/verify_package.py` and `analysis/reproduce.py --verify-only` check archived raw outputs; a partial Git checkout is expected to report those files missing. The 11 frozen analysis inputs, including the replay wrapper and exact final solver, are already in Git. Future replay should use the supplied remapping wrapper rather than invoking historical configuration paths directly.

Full replay is optional and requires the original pinned environment and meaningful compute. It was not performed for this import. The frozen implementation is suitable for current replay, but historical executing-code provenance is incomplete; archive hash consistency is not proof of bit-identical historical numerical reruns. [Reproducibility boundary](EVIDENCE_AND_READINESS.md)

## Website and editable exports

For the exact issued static website, use the original archive's `website_source/dist/`. For further development, use the committed [website source instructions](../project/website_source/README.md), application, build script and lockfile. The unchanged builder writes generated `data/`, `dist/`, a project snapshot and license outputs; review changes if rebuilding. No dependencies were installed and no build or deployment was performed during this import.

The supplemental [package_link.json](../project/package_link.json) supplies the now-known saved ZIP link to that builder. It was not a member of the original ZIP. All original files remain unchanged. [Import scope note](../project/IMPORT_NOTE.md)

Use the [CAD README](../project/cad/README.md) for regenerating exports into a new output directory. The current checked-in STEP/STL files are the issued source exports; integrity validation did not regenerate or alter them. Preserve source/version identity when changing geometry so old analysis is not silently attached to a changed part.

## Source SHA-256 values

**N2_Selected_Hardpoint_Project.zip**

```text
757ef6a4fd6e74e8db6c20262298813dc0fc24d3fdce087c54abfdfe1772d65b
```

**Six_Hardpoints_PLA_FEA.pdf**

```text
97def9dc0e98658f179848d4082985ceb4bb03b2dbd272272fbed83c4215f56b
```

**N4_Extraction_Direction_FEA.pdf**

```text
fa56d223542bcff7c29ecf8ba241d50f6762cc8e3c9ee511beeb4606ed922dcf
```

**Six_Hardpoint_Load_Calculations.pdf**

```text
47c5ff31301d816bc2ea6dfa2a0803383e1d0a5f9cfa1aca9299c5640c378689
```

**Six_Hardpoint_Load_Calculations.zip**

```text
5d1c272ed285904dca88228ded43b2fb57bef2c6b66b251db590275e9f397043
```
