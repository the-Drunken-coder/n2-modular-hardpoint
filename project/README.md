# N2 Supported Cross-bolt Hardpoint — selected design

**N2 is the sole active design.** This P11 package consolidates its editable CAD, issued models, drawings, manufacturing instructions, local release electronics, archived PLA finite-element results and documentation website. Other mechanisms are removed from the active model selector and downloads. Earlier comparison deliveries and source history retain the decision trail.

This is a consolidation of the original N2 geometry, not a new mechanical revision or a newly qualified product. No new FEA or physical manufacturing/release test was performed for this selection. The previous analytical crossing loads are not established working-load ratings.

## Start here

| Task | File or directory |
|---|---|
| Understand the mechanism and scope | `docs/overview.md`, `docs/mechanism.md` |
| Open the complete retained assembly | `cad/N2/assembly.step` |
| Edit and regenerate the design | `cad/build_n2.py`, `cad/README.md` |
| Print the four custom parts | `cad/N2/*_print.stl`, `manufacturing/PRINTING.md` |
| Inspect assembled, exploded and release views | `drawings/` |
| Assemble and install | `docs/assembly_installation.md` |
| Procure and account for mass/cost | `manufacturing/BOM.md`, `manufacturing/bom.json` |
| Wire and program the bench release | `electronics/wiring.md`, `electronics/README.md` |
| Read the actual PLA cases and limitations | `analysis/README.md`, `analysis/summary.json` |
| Reproduce and audit the analyses | `analysis/reproduce.py`, `analysis/verify_package.py`, analysis instructions |
| Plan physical inspection and release tests | `docs/verification.md`, `manufacturing/inspection_record.csv` |
| Open the interactive website locally | `website_source/README.md` and its `dist/` directory |

## Compact assembly

The modeled retained envelope is approximately **43.1 × 30 × 19 mm**. It excludes full wiring, remote controls, installation-specific attachment hardware and payload departure clearance. Four custom pieces are printed: receiver, payload adapter, keeper and solenoid clamp. One purchased Adafruit 2776 mini solenoid drives the keeper, and two M2 × 16 screws with two M2 nuts retain its clamp. The 13 modeled objects include purchased actuator components and simplified hardware; those purchased pieces are not intended to be printed.

The keeper carries the retained adapter load through the receiver supports. The solenoid retracts the keeper in +X. After clearance, an external force must move the adapter away in +Z. Energizing the coil does not itself prove unlocking or complete separation. There is no ejector, position sensor or implemented positive fixed-pod lock.

The local COTS bench controller and firmware are included. Payload power/data transfer and aircraft-wide electrical integration remain outside the current mechanical scope. There is no bespoke PCB and therefore no PCB fabrication quote.

## Current engineering basis

Use the active **PLA** manufacturing instructions for common-material comparison and first fit specimens. The retained original CAD manifests contain historical PETG wording; `cad/N2/active_metadata.json` and the current manufacturing instructions supersede that material guidance. Original files remain byte-identical evidence.

The archived PLA models use a homogeneous isotropic approximation, room-temperature short static loading, solid-equivalent prints and stated assumed strength thresholds. Full backing and two-hole receiver fixtures give different results. Raw peak stress is mesh-sensitive and does not determine a certified capacity. The N2 subset contains the existing 39 case solutions and 10 meshes, including local receiver refinement; every raw field is retained in this complete package.

The first development priority is **distal keeper support engagement during withdrawal**. The nominal retained engagement is only 0.6 mm. That support is lost after approximately 0.6 mm of the 3 mm stroke, while the keeper does not clear the 1.4 mm adapter lug until approximately 2.3 mm of travel. The resulting loaded withdrawal interval requires improvement and measured verification. No change to those dimensions is silently included here; changing them requires renewed fit, structural and actuation evaluation.

Subsequent work must verify printed fit, mounting/backing, keeper return, full loaded stroke, actual adapter clearance, actuator temperature and installation-specific aircraft loads. The test plan gives measurable acceptance gates without claiming those gates have been passed.

## Reproducibility and package contents

The CAD generator is N2-only. From the package root:

```sh
python -m pip install -r cad/requirements.txt
python cad/build_n2.py --output /absolute/new-export-directory
python cad/verify_regeneration.py --regenerated /absolute/new-export-directory --report /absolute/rebuild-check.json
python manufacturing/build_bom.py
python analysis/verify_package.py
```

Use the exact analysis environment and replay commands in `analysis/README.md` and its linked reproduction instructions. A regeneration check has already confirmed identical solids, bounds, volumes and prescribed viewer motions. Electronic host tests cover software logic only; no controller was physically flashed or exercised for this consolidation.

`PACKAGE_MANIFEST.json` records issued file hashes. `website_source/` contains the editable application, lockfile, dependency licenses and an issued static build. Serve its `dist/` directory over local HTTP to rotate, explode and inspect the release sequence; the browser animation is prescribed motion, not a dynamics simulation. This ZIP is a snapshot and cannot contain a download link to itself before it is saved; the published website provides the current complete-package link.
