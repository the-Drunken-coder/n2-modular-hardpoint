# N2 PLA fabrication and inspection

This package uses **PLA for the current material comparison and first controlled print trials**. The unchanged source geometry originated with PETG fit-prototype notes; those legacy notes do not establish the PLA process. The directions below govern the active N2 print trial.

## Initial X1 Carbon setup

Use the four supplied `*_print.stl` files as millimeters, centered on the plate without changing their supplied orientation. The largest part is about 40 × 30 × 12.7 mm; all parts fit within the X1C's nominal 256 × 256 × 256 mm build volume. This envelope check does not establish successful printing or strength.

- Unfilled PLA from one recorded lot; use its manufacturer's drying, temperature and adhesion profile. Do not infer drying or annealing requirements from the FEA model.
- 0.4 mm nozzle, 0.16 mm layers, five requested walls and six top/bottom layers are initial project settings.
- Use **100% infill / solid-equivalent toolpaths** throughout the four small pieces for correlation with the FEA assumptions. Sparse infill is outside that comparison.
- Inspect the sliced 1.4 mm lug and 1.3 mm window side webs. A thin feature cannot contain five complete 0.4 mm perimeters; wall/infill commands are requests, and the actual extrusion paths govern.
- Use local supports only where required and accessible for removal. Record support settings and cleanup method. Do not leave inaccessible support or bearing-face scars.

These settings are a reproducible starting trial, not validated PLA allowables or a production recipe. The analysis homogenizes the print and does not resolve individual roads, voids or weak layer interfaces. Record the actual orientation; no favorable print-direction strength credit was used in the common FEA.

## Part-specific orientation

| Part | Bed orientation | Attention points |
|---|---|---|
| Receiver | Base to bed | Local support beneath both guide roofs; remove from accessible end openings. Keep distal roof integral and intact. Inspect roof roots and underside mounting seats. |
| Adapter | Flange to bed, supplied inverted STL | Inspect the 1.4 mm lug, 1.3 mm side webs and hole bridge. Reject incomplete walls, under-extrusion, separated layers or support damage. |
| Keeper | Main-body underside to bed | The retaining arm is raised 0.7 mm above that plane and needs removable local support. Protect the tip length, bar dimensions, fork and tab. |
| Clamp | Top bridge to bed; legs upward | Confirm flat actuator contact and screw-hole alignment. No clamp torque has been qualified. |

Automatic plate placement may remove tiny export-tessellation offsets around Z = 0. Do not scale the parts. The assembly-space STLs are for viewing; choose the `_print.stl` files for the prescribed orientation.

## Cleanup and acceptance

Remove loose support and burrs without rounding retaining edges or shortening the keeper tip. Do not sand the 0.6 mm distal-engagement budget away to cure binding. If more than light surface cleanup is required, document the dimensional change and revise the fit strategy.

Measure the purchased actuator and all critical printed interfaces before assembly. Check actual stroke, rear button/stem, fork lost motion, guide play, closed tip overlap and full-open clearance. The nominal axial open clearance is 0.7 mm; the provisional post-variation measured target is at least 0.20 mm.

Reject cracks, split layers, porous/incomplete retaining sections, damaged bearing faces, warped base/clamp seats and any print that needs force to traverse its guide. Each custom piece must remain one connected closed solid. Mesh topology and dimensional-envelope verification are not physical print qualification.

Use `inspection_record.csv` to retain measured dimensions and observations. Record actual mass including supports separately from the ideal CAD-volume estimate. Before any loaded trial, complete the unloaded assembly and actuator checkout.

## Material basis and references

The structural comparison assumes PLA density 1.24 g/cm³, E = 2,200 MPa and local thresholds 25/40/15 MPa in tension/compression/maximum shear. These are analyst assumptions for a solid-equivalent short static model; they are not certified properties of this print process. Layer-interface failure, creep, temperature, wear and warm-coil exposure remain unqualified.

- Bambu X1 Carbon specification: https://public-cdn.bambulab.com/store/bambulab-X1-carbon-tech-specs.pdf
- Bambu PLA Basic TDS V3.0, context only: https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf

The material sheet's annealed/dried coupon values do not certify this geometry or require annealing it. Uncontrolled annealing can change fit; a changed process needs new dimensional and mechanical evidence.
