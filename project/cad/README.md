# N2-only editable CAD and issued models

N2 is the sole active design. Its issued P6-01 geometry is unchanged in this consolidation. The four printed pieces are the receiver, adapter, keeper and clamp. The assembled envelope, including the modeled actuator and hardware, is approximately **43.1 × 30 × 19 mm**.

## Open or print

- `N2/assembly.step` is the complete retained assembly with all 13 modeled instances.
- `N2/N2_receiver_print.stl`, `N2/N2_adapter_print.stl`, `N2/N2_keeper_print.stl`, and `N2/N2_clamp_print.stl` are the four print-oriented meshes.
- Other `N2/*.stl` files retain assembly coordinates for visualization. They are not the recommended print orientation files.
- `N2/viewer.json` supplies the original mesh arrays, exploded offsets and prescribed motion for the interactive viewer.
- `parts_catalog.json` identifies every part, print file, dimensions and orientation note.
- `../drawings/` has the original N2 assembled, exploded, unlocked, separated, sequence and nominal-dimension illustrations in SVG and PNG.

The original 34 issued files under `N2/` were copied byte-for-byte. Their hashes are recorded in `SOURCE_PROVENANCE.json`. `N2/active_metadata.json` supplies current PLA and N2-only project wording. The older `manifest.json` and `viewer.json` contain historical PETG fit-print/comparison wording and remain frozen evidence; current manufacturing instructions and active metadata take precedence for material selection. A historical CAD metadata statement is not a tested material allowable.

## Edit and regenerate N2 only

Use Python 3.12 with the pinned CAD dependencies:

```sh
python -m pip install -r cad/requirements.txt
python cad/build_n2.py --output /absolute/new-export-directory
```

The destination must not already exist. This prevents overwriting the issued models or unrelated files. The new tree contains `cad/N2/` with STEP, STL, print meshes, manifest and viewer data. The source has only the N2 geometry entrypoint. Shared files `common.py` and `solenoid_parts.py` supply primitive/export operations and the actuator, clamp and hardware models; no other design tree is required.

The geometry constructor and common metadata function were extracted verbatim from the original source. New-output CLI handling and current metadata overrides are the only behavioral additions. The STEP exporter may write different header/order metadata, so export-file hashes are not assumed reproducible. Geometry and motion must instead be checked:

```sh
python cad/verify_regeneration.py \
  --regenerated /absolute/new-export-directory \
  --report /absolute/rebuild-check.json
```

`REGENERATION_VERIFICATION.json` records the completed independent rebuild from a temporary working directory. It checks every STEP part by Boolean symmetric difference, material volume, bounds and solid count, and verifies the complete assembly and viewer motion. No physical model was manufactured or tested for this consolidation.

## Modeling limits

The purchased solenoid is an exterior-envelope model based on the Adafruit 2776 drawing. Internal frame/coil/spring/button details include assumptions. The spring is shown only in its retained shape. Fastener threads are simplified; wire stubs locate lead exits. Host/payload bolts, aircraft structure, external wiring and local control hardware are outside this small assembly model and must be selected or verified for installation.

Keep the nominal 3 mm stroke, 0.6 mm distal bearing engagement, 1.4 mm lug thickness and approximately 2.3 mm travel to lug clearance traceable when changing geometry. A CAD modification requires renewed fit and structural evaluation; the previous FEA does not automatically apply to changed solids.
