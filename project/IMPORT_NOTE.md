# Repository import scope

This note records the initial import on 29 October 2026. At import, the original P11 files were byte-identical to the selected-design ZIP. Subsequent P12–P14 work changed the active CAD and documentation; the current working tree is not a byte-identical P11 archive. The original import hashes and full-package manifest remain historical records. See the current [repository README](../README.md).

**This Git tree is an indexed subset of the complete issued package.** The original [package manifest](PACKAGE_MANIFEST.json) and historical analysis documentation describe that complete P11 package. Their references to all raw fields and an issued `website_source/dist/` build apply to the ZIP.

The initial Git import contained 230 original files. The 59 raw FEA `.npz`/`.msh` files and 186 generated `website_source/dist/` files are available through the complete source package. [Repository recovery instructions](../docs/ARTIFACTS_AND_RECOVERY.md) and the [complete member inventory](../provenance/n2_archive_inventory.json) identify every omission and hash.

The original whole-package analysis verification commands will report missing outputs in this partial checkout. Use a verified complete extraction for those commands. No original manifest was weakened or rewritten to make a partial tree appear complete.

`package_link.json` is also a new import supplement. It supplies the saved full-package URL to the unchanged website builder; that self-link could not exist inside the original ZIP before it was saved. No website build or deployment was performed during import.
