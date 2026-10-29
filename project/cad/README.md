# N2 P14 editable CAD and models

**N2 P14 is the sole active design.** The default generator now produces the bridged proximal roof, relocated keeper linkage, flat keeper underside and narrowed return-button slot described in [P14](../../docs/p14.md). This is later geometry than the P6-01 model consolidated in P11.

The four printed pieces remain the receiver, adapter, keeper and clamp. The retained assembly envelope, including the modeled actuator and hardware, is approximately **43.1 × 30 × 19 mm**. It excludes full wiring, off-board controls, aircraft/payload backing and departure clearance. [Current manifest](N2/manifest.json)

## Open or print

| File | Use |
|---|---|
| [N2/assembly.step](N2/assembly.step) | Complete retained assembly with 13 modeled instances |
| `N2/N2_receiver_print.stl` | Receiver, base to bed |
| `N2/N2_adapter_print.stl` | Adapter, flange to bed |
| `N2/N2_keeper_print.stl` | Keeper, flat underside to bed |
| `N2/N2_clamp_print.stl` | Clamp, top bridge to bed |
| Other `N2/*.stl` | Assembly-coordinate meshes for visualization |
| [N2/viewer.json](N2/viewer.json) | Mesh arrays, exploded offsets and prescribed motion for the interactive viewer |
| [N2/manifest.json](N2/manifest.json), [parts_catalog.json](parts_catalog.json) | Current nominal geometry, volumes, file mapping and print notes |
| [N2/active_metadata.json](N2/active_metadata.json) | Current revision, prototype material and evidence status |

Use the [P14 print requirements](../../docs/print-requirements.md) and [fabrication/inspection instructions](../manufacturing/PRINTING.md). PAHT-CF is the current prototype candidate; the estimate based on scaled PLA screens is not a qualified material or load rating.

The illustrations in [../drawings/](../drawings/) were issued with the P11/P6 package. They remain useful for the general assembly and release sequence, but are **historical illustrations**, not current P14 roof/keeper fabrication drawings. Use the current STEP/STL and manifest for those features.

## Edit and regenerate

From the repository root, use Python 3.12 with the pinned CAD dependencies:

```sh
python -m pip install -r project/cad/requirements.txt
python project/cad/build_n2.py --output /absolute/new-export-directory
python project/cad/verify_regeneration.py \
  --regenerated /absolute/new-export-directory \
  --report /absolute/p14-rebuild-check.json
```

The export destination must not already exist. The new tree contains `cad/N2/` with STEP, STL, print meshes, manifest and viewer data. `common.py` and `solenoid_parts.py` provide shared export operations and actuator/clamp/hardware models.

The default parameters in `build_n2.py` define P14. Environment overrides are design experiments; record every override and evaluate the resulting geometry before adopting it. A changed solid does not inherit the previous analysis automatically.

The verification script compares an independent rebuild against the current `N2/` models using per-part Boolean symmetric differences, volumes, bounds and solid counts, plus assembly and prescribed motion checks. STEP hashes may change because of export metadata. A passing digital comparison establishes source/model continuity only, not fit, print success or strength.

## Historical provenance

[SOURCE_PROVENANCE.json](SOURCE_PROVENANCE.json) and [REGENERATION_VERIFICATION.json](REGENERATION_VERIFICATION.json) record the original P11/P6 import and rebuild. Their unchanged-file claims and STEP hashes apply to that historical snapshot, **not the current P14 exports**. Keep those records intact and write a separately identified report when a new regeneration is checked.

Likewise, the older `PACKAGE_MANIFEST.json` belongs to the imported package. It is not a current-tree integrity manifest after later CAD revisions. The [recovery guide](../../docs/ARTIFACTS_AND_RECOVERY.md) identifies the original archive.

## Modeling limits and retained dimensions

The purchased Adafruit 2776 is an exterior-envelope model based on its supplier drawing. Internal frame/coil/spring/button details include assumptions; the spring is shown only in its retained shape. Fastener threads are simplified and wire stubs only locate lead exits. Measure purchased hardware before relying on fit or travel.

P14 preserves the nominal 3 mm actuator stroke, 0.6 mm distal keeper engagement, 1.4 mm lug thickness and approximately 2.3 mm travel to lug clearance. The proximal roof now spans X 28.5–31.7, supported on both sides of the channel; the floor and outer wall continue to X 37.4. The keeper's linkage begins at X 32.0 and its body/arm underside is coplanar at Z 7.2 in assembly coordinates. [Generator](build_n2.py)

The two P14 structural support cases have the same governing adapter screen. They do not establish every intermediate contact state, full-stroke force or actual separation. No part has been printed or physically tested; use the [test plan](../../docs/test-plan.md) before assigning an operating capacity.
