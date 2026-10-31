# R5 print process and inspection

This is the controlled first-article process for the three current R5 parts.
Its printed strength, dimensional yield and release performance still require
measured qualification. A CAD export or a completed slicer job does not close
those gates. Use one identified material lot and record any process change.

## Generate the correct files

From `project/designs/r5`, run `python cad/build.py`. Import these millimetre STLs
at **100% scale**, with no automatic reorientation. The body measures
**65×51×20 mm**; the retained assembly including the servo overhang measures
**65×51.4×20 mm**:

| File | Face on bed | Layer normal in the assembly frame | Reason |
|---|---|---|---|
| `out/body_print.stl` | Wing face, original +Z | Z; `PRINT_AXES.body = 2` | Flat mounting datum; guide/servo pockets build upward |
| `out/keeper_print.stl` | Plain side, original +Y | Y; `PRINT_AXES.keeper = 1` | X/Z bar bending and yoke actuation paths run in the layer plane |
| `out/adapter_print.stl` | Adapter base, original −Z | Z; `PRINT_AXES.adapter = 2` | Flat attachment base; the tab's weaker across-layer direction remains explicit in analysis |

The unsuffixed STLs and STEP files retain assembly coordinates for CAD/FEA and
viewing. They are not the print-bed layout. The generated print files are
separate rigid transforms, not scaled or remodelled parts. `out/cad.json`
records each transform, bed bounding box, layer axis, volume and print-STL
SHA-256, together with CAD-source and assembly-STEP SHA-256 values. Archive that
manifest with the actual sliced project/G-code and inspection record.

The body local roof is 1.0 mm, the yoke slot has 0.8 mm internal corner radii,
and the keeper has a full 5×5 mm bar through the guide. Do not add a horn groove
or rotate the adapter sideways while using the current structural results.

## Material and machine setup

Use **Bambu PAHT-CF**, 1.75 mm, on an enclosed X1C with a **0.4 mm hardened steel
nozzle**. This nozzle is a project choice for these small features; Bambu also
lists 0.4 mm as compatible and recommends 0.6 mm for general PAHT-CF use. A
larger nozzle requires a new first article and dimensional/process record.

Bambu's [PAHT-CF product data](https://us.store.bambulab.com/products/paht-cf)
and [manufacturer-authored V3 technical data sheet](https://idarts.co.jp/3dfs/data_sheet/bambuLab/Bambu_PAHT-CF_TDS.pdf)
provide an 80 °C, 8–12 hour forced-air drying range, 260–290 °C nozzle range,
80–100 °C bed range and sealed storage/feeding below 20% RH. Use **80 °C for
12 hours**, then feed from a dry enclosure. Record actual dryer temperature,
time and storage humidity. Use a suitable dedicated dryer; the printer bed
is not equivalent to the quoted forced-air drying temperature.

The following settings are the project's reproducible starting recipe, within
those material ranges. They are not a manufacturer certification of R5 strength:

| Setting | Initial controlled value |
|---|---|
| Nozzle / bed | 290 °C / 100 °C |
| Plate / adhesion | Smooth PEI with a thin, even PVP glue layer |
| Layer height | 0.20 mm, including first layer |
| Nominal extrusion width | 0.42 mm; record actual slicer profile/width changes |
| Walls | 6 wall loops; inspect actual narrow-wall toolpaths |
| Infill | 100% rectilinear, alternating direction; no sparse-infill replacement |
| Top / bottom | 8 solid layers each; thin roofs are solid through their thickness |
| Speed caps | Outer wall 40 mm/s; inner/solid infill 60 mm/s; bridges 20 mm/s |
| Cooling | PAHT-CF profile; auxiliary fan off; record actual part/bridge fan values |
| Brim | 5 mm external brim where needed; remove without cutting bearing edges |
| Scale / compensation | 100%; calibrate flow and first-layer compensation on an identified first article, then record them |
| Supports | Start with supports off in these orientations; review bridges and qualify them as below |

Keep the enclosure closed and record chamber temperature against the TDS
45–60 °C range. Do not bypass the printer's thermal protections to reach it.
Record slicer version, complete profile, measured
chamber conditions and filament lot. Do not claim the dry TDS strength after
an unrecorded moisture/temperature history or an unqualified change of material.
The analysis knock-down is an engineering assumption, not a replacement for
printed coupons and component tests.

## Inspect the slice before printing

Check all three parts layer by layer. The body has the keeper tunnel and the
small Y-axis ear-screw pilots; the adapter tab has its keeper hole. These are
bridges/overhangs that need first-article inspection. The 1.0 mm body roof must
contain five continuous 0.20 mm layers. The keeper's slot and bare-pin entry
must remain open, its 2.4 mm top bridge continuous, and the reinforced tab root
must have continuous solid toolpaths into its base.

Do not fill the guide, slot, pilots or tab hole with trapped supports. If the
chosen process cannot bridge these features without sagging beyond the fit
limits, revise and qualify an accessible support/finishing plan and record it.
Do not silently accept a sagged bearing surface or reduce the specified wall
minima. Do not infer solid material solely from the "100%" infill field: inspect
perimeter joins, gap fill and the exported layer preview for voids.

## Finishing and dimensional acceptance

Allow the parts to cool before removal. Remove brim and obvious burrs with
light, local finishing. Deburr the guide and slot edges; keep them straight and
parallel. Do not sand the yoke walls, top bridge, reinforced tab root or guide
bearing span below their acceptance dimensions.

Post-treat the finished parts at **80 °C for 12 hours** in a suitable forced-air
oven with uniform temperature, then cool and store dry before final inspection.
The V3 material specimens used this conditioning as well as 290 °C extrusion;
its inclusion makes the material-state assumption explicit. Warping remains
possible, so **all dimensional and fit inspection is after post-treatment**.
Do not apply a broad scale factor, higher annealing temperature or unrecorded
hole expansion as a substitute for a qualified process. Record dimensions
before/after on the first articles and reject parts that cannot meet the gates.

Use [inspection-template.csv](inspection-template.csv) for each assembly. Fill
in actual values; blank/PENDING entries remain open gates. Use the receiver's
**CAD X=0 side plane as the common assembly X datum**, with the receiver seated
on its intended host fixture and its mounting screws tightened. Do not zero the
measurement on the floating adapter. The tab's **far face** is its −X face
(nominal X8.00), which the keeper must extend past when latched; its
**near face** is the +X
face toward the servo (nominal X12.00). Measure the unbuttressed upper tab at the
keeper-hole ligaments, excluding the lower root reinforcement and top chamfer.

The limits include:

- Keeper Y and Z section **4.90–5.10 mm**, full square section across an effective
  guide length **≥15.8 mm**. Measure total guide/keeper clearance in both axes:
  **0.30–0.50 mm** throughout the bearing span after finishing.
- Keeper **slot-center-to-tip length 29.35 ±0.10 mm** (29.25–29.45 mm).
  Measure along the keeper's own X direction from the geometric center plane
  between the slot's straight X faces to the leading flat tip plane. Do not
  substitute the installed sleeve position: sleeve/slot play is budgeted
  separately. Nominally, `(40.4 − 5.4) − 5.65 = 29.35 mm`; the 0.50 mm tip
  chamfer is accounted for separately and is not subtracted from this measurement.
- Upper-tab **X thickness 3.90–4.10 mm**, measured between the far and near
  faces at the keeper-hole ligaments. Record actual thickness after conditioning.
- Actual tab **far-face X must remain within 7.60–8.40 mm over the complete
  permitted socket float**, in the common receiver datum. Gently move the
  seated adapter to both X limits and inspect the permitted float/rocking poses;
  record the smallest and largest far-face X separately. Retain at least
  0.30 mm socket clearance per side when centered. A lower-only socket-gap
  measurement does not establish the far-face position or its maximum movement.
  In the endpoint model, the near-face position is the measured far-face X plus
  the measured upper-tab thickness; all three dimensional gates must hold together.
- As-built yoke left wall **≥3.5 mm**, right wall **≥3.0 mm**, top bridge
  **≥2.4 mm**, and full breadth **≥4.9 mm**. These are measured minima, not
  permission to subtract a guessed printer error from nominal CAD.
- Sleeve-to-slot total lateral clearance **0.30–0.50 mm**, measured with the
  actual 4 mm sleeve. A smooth pin should pass the entire slot without forcing.
- Guide and shaft datums **±0.10 mm** each; relevant non-contact roof/yoke
  surfaces **±0.10 mm** each. Inspect the true dimensions against the current
  STEP drawing, including after tightening host mounting screws.
- Effective **assembled** sleeve-center radius **5.30–5.50 mm**, after the
  clamp is tightened. A stock hole measurement alone omits sleeve/hole play.
- Latch endpoint **177–183°** and released endpoint **40–44°** in the CAD frame,
  calibrated from actual motion. Accept the separate **175° safe unloaded
  assembly span** before attempting the 215° bare-pin installation procedure.
- Minimum measured non-contact roof, horn, center head and washer gap **0.50 mm**
  through the complete loaded path. The square keeper section must overlap the
  tab far face by **≥0.50 mm** when latched, excluding the tip chamfer; the released tip-to-near-tab-face opening must be **≥1.50 mm**, including
  the 0.50 mm clearance and 1.00 mm spare, across the declared loaded/float poses.
- At least **0.80 mm of bolt beyond the engaged locknut**, no clamp looseness,
  no horn whitening/cracks and no visible print splitting or bearing damage.

Assemble using [ASSEMBLY.md](ASSEMBLY.md). Finally run the unloaded motion check,
the [full-path loaded-release protocol](docs/loaded-fit.md), retention proof,
mount pull-out and the defined jam test. Record failures and requalification
following any correction. The print recipe, CAD gates and hand/FEA screens
alone do not establish flight readiness, endurance or environmental performance.
