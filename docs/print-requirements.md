# Print requirements

The FEA rating (4.0 N, straight +Z pull, SF 3) **assumes every item below**. A part printed differently is untested and unrated.

- **Material:** Bambu PLA Basic, dried before printing.
- **Infill:** 100%. Or enough walls/top/bottom layers that the receiver roofs, the adapter floor and the keeper bar are fully solid. Check this in the slicer preview.
- **Orientation:** use the supplied `*_print.stl` files as-is (see below). Record what you used.

## Orientation per part

Build direction = Z in every case (the current `_print.stl` files). Stress directions are from the P13 FEA fields (`project/analysis/p13_expanded`).

| Part | Orientation | Peak tension direction | Layers |
|---|---|---|---|
| Keeper | Main-body underside to bed | Along X (bar bending) | **Good**: tension runs along the layers. |
| Receiver | Base to bed | Mostly Z, partly Y (roof root, governing case) | **Pulls layers apart.** |
| Adapter | Flange to bed (inverted STL) | Almost pure Z (floor, worse off-axis) | **Pulls layers apart.** |

**Open issue, not resolved:** for the receiver and the adapter, the governing tension crosses the layers. Turning them 90° (Z lying flat on the bed) would put that tension along the layers. But it changes supports, bridges and the sliding faces, and nobody has checked that in a slicer, so it isn't recommended yet. For now, keep the current orientation. That is covered only because the FEA's 25 MPa screen sits below Bambu's 31 MPa Z (layer) coupon value. Run the Z coupon test in [test-plan.md](test-plan.md) to confirm the filament and printer actually reach that.
