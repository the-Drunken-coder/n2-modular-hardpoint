# N2 P14 fabrication and inspection

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](../designs/r5/PRINTING.md); the specifications, files and results below apply only to the earlier package.

**Use the current P14 print files with PAHT-CF as the candidate material for the next controlled prototype.** PLA is the historical analysis reference and may be used for separately identified fit trials. No material/process combination has an established working-load rating.

The governing [print requirements](../../docs/p14-print-requirements.md) and [P14 test plan](../../docs/p14-test-plan.md) supersede the earlier PLA/P11 and P13 instructions. Current provisional targets are 8.9 N design force and 17.8 N sacrificial qualification load; the analytical 16.84 N estimate is not permission to load a print to that value.

## Initial print setup

Import these four files in millimeters and preserve their supplied orientation:

- `../cad/N2/N2_receiver_print.stl`
- `../cad/N2/N2_adapter_print.stl`
- `../cad/N2/N2_keeper_print.stl`
- `../cad/N2/N2_clamp_print.stl`

The current receiver is about **40 × 30 × 14.7 mm**. Dimensions come from the [current manifest](../cad/N2/manifest.json).

For the first small-feature PAHT-CF trial, use a hardened 0.4 mm nozzle, 0.16 mm layers, five requested walls and six top/bottom layers as project starting settings. Request 100% infill / solid-equivalent toolpaths throughout. These are starting settings, not a validated production recipe. Use the material preparation and temperature guidance in [print requirements](../../docs/p14-print-requirements.md); record the actual profile rather than copying a single FEA material label.

Inspect the sliced 1.4 mm lug and 1.3 mm window side webs. A thin feature cannot contain five complete 0.4 mm perimeters: actual wall, gap-fill and bridge paths govern. Confirm all retaining sections are continuous and solid in the slicer preview. Sparse infill is outside the current screening assumptions.

## Part-specific orientation

| Part | Bed orientation | P14 attention points |
|---|---|---|
| Receiver | Base to bed | Both keeper-channel roofs are short bridges. Inspect them and the approximately 4.2 mm base-pocket bridges; no support should be trapped inside a guide. Preserve integral distal/proximal roof roots and mounting seats. |
| Adapter | Flange to bed, supplied inverted STL | Inspect the 1.4 mm lug, 1.3 mm side webs and hole bridge. Reject incomplete walls, under-extrusion or separated layers. |
| Keeper | Flat underside to bed | P14 body and retaining arm are coplanar. The old 0.7 mm raised-arm support instruction no longer applies. Protect the tip length, arm, linkage, fork and narrowed return-button slot. |
| Clamp | Top bridge to bed; legs upward | Confirm flat actuator contact and screw-hole alignment. No clamp torque has been qualified. |

The intended P14 process uses no supports on these parts. `tools/overhang.py` classifies the geometry that way, but no slicer or physical print has confirmed it. Check bridge settings and possible sag before proceeding. If support would be inaccessible or would scar a bearing/running face, revise the documented process or design before fabrication.

Automatic plate placement may remove tiny tessellation offsets around Z = 0. Do not scale or arbitrarily reorient the parts. Assembly-space STLs are for viewing; the `_print.stl` files define the trial orientation.

## Cleanup and dimensional acceptance

Remove loose stringing and burrs without rounding retaining edges or shortening the keeper tip. Do not sand away the 0.6 mm distal-engagement budget to cure binding. If more than light surface cleanup is required, record the dimensional change and revise the fit strategy.

Measure the actual actuator and critical printed interfaces before assembly:

- Actual net keeper travel, rear button/stem fit and linkage lost motion.
- Free guide travel and spring return throughout the stroke, including the narrowed P14 stem slot.
- Positive retained distal overlap, full adapter seating and guide play.
- Full-open axial clearance: nominal CAD value 0.7 mm; the provisional measured development target remains at least **0.20 mm after measured variation**.
- Roof roots/undersides, lug walls, keeper tip and mounting/contact faces.

Reject cracks, split layers, porous/incomplete retaining sections, damaged bearing faces, warped base/clamp seats and any print that binds in its unloaded guide. Each custom part must remain one connected closed solid. Mesh topology checks do not establish print quality.

Use [inspection_record.csv](inspection_record.csv) and the [test-plan records](../../docs/p14-test-plan.md). Record revision, material lot, drying/conditioning, orientation, nozzle, slicer file/settings, measured dimensions and actual mass. Count the departing adapter and its attachment hardware in carried mass; receiver-side parts remain aircraft mass. Complete unloaded assembly and actuator checkout before any loaded trial.

## Structural and material limits

The underlying historical PLA analysis uses a homogeneous solid-equivalent model with E = 2,200 MPa and local thresholds of 25/40/15 MPa in tension/compression/maximum shear. The P14 PAHT-CF screen scales those thresholds by 47/31; it does not replace the model with measured anisotropic PAHT-CF properties.

Layer-interface failure, moisture, creep, temperature, wear and warm-coil exposure remain unqualified. A supplier coupon result or matching Z coupon mean does not establish the strength of these bridges, thin walls or loaded sliding contacts. Qualify the actual process and complete assembly using the [P14 plan](../../docs/p14-test-plan.md).

The retained P11/P6 drawings and older PLA mass/BOM records describe their original geometry and material. Use current P14 STEP/STL and manifest for fabrication, and the [order list](ORDER_LIST.md) for the current procurement record.
