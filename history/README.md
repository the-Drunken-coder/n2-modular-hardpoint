# Historical hardpoint comparison reports

These reports explain how the project reached the selected N2 configuration. **N2 remains the sole active design.** The historical recommendation of another concept or a higher conditional comparison value does not reopen the active selection. [P11 decision](../project/docs/selection.md)

| Report | Role | Reading rule |
|---|---|---|
| [Six Hardpoints PLA FEA — P8](comparison_reports/Six_Hardpoints_PLA_FEA.pdf) | Common-material linear FEA comparison on unchanged P6 geometry | Its N4 +Z normal-load result is not the N4 extraction-lock result; read P9 with it |
| [N4 Extraction Direction FEA — P9](comparison_reports/N4_Extraction_Direction_FEA.pdf) | Corrects N4 loading to its +Y departure direction and audits all six departure axes | The full-notch reference N4 extraction screen is about 2.47 N; no physical load or release rating is established |
| [Six Hardpoint Load Calculations — P6-C1](comparison_reports/Six_Hardpoint_Load_Calculations.pdf) | Conditional section/friction arithmetic for all six concepts, including the N2 loss-of-support transition | Its material/stress assumptions and hypothetical actuator allocation differ from the PLA FE model; example masses are not operating limits |

The P8 report gives N2 about 21.50 N with full backing and 11.26 N with an ideal two-hole fixture. Its comparable N3 two-hole value is about 12.74 N. The selected N2 is therefore not a universal numerical winner. P9 specifically corrects the temptation to treat N4's larger normal-rail screen as extraction-lock strength. These are finite-mesh or assumed-section screens with the limitations stated in each report; no print or physical load/release test is represented by their tables.

## Sources and version identity

The three PDFs are copied without alteration from their separately delivered artifacts. Full file hashes and original account-scoped download links are in [source_artifacts.json](../provenance/source_artifacts.json).

The complete historical calculation source ZIP contains 158 files, including comparison scripts, frozen geometry, derivations, figures, result tables and its own PDF. Its full member inventory and original 157-entry hash manifest were verified during import. To avoid making the retired mechanisms appear active, that complete comparison tree is retained as a recoverable archive rather than copied into `project/`. [Comparison archive inventory](../provenance/comparison_archive_inventory.json)

The PDF inside that ZIP is **not byte-identical** to the separately delivered PDF committed here. The standalone PDF is 1,957,184 bytes, SHA-256 `47c5ff31301d816bc2ea6dfa2a0803383e1d0a5f9cfa1aca9299c5640c378689`; the ZIP's PDF is 1,932,219 bytes, SHA-256 `907a422cee82b9f37b8697ea6b213d745117c00605670328433ed0d96e0f86f6`. Both identities are preserved. Their different hashes are a version distinction; this import does not assert that every layout or text change between them has been reconciled.

## Limits of the recovered comparison record

The available original ZIPs are the selected P11 N2 package and P6-C1 calculation supplement. The P8/P9 reports refer to broader original analysis packages and prior source history; those full comparison FE packages are not among the recovered inputs indexed here. The N2 subset, its inputs, 39 results, and complete raw fields remain recoverable from the selected P11 ZIP. This repository does not invent missing historical packages or claim to contain all prior work beyond the five identified source artifacts.
