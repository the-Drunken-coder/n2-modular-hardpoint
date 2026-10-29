# Print requirements

Two rated configurations. A part printed any other way is untested and unrated.

| Config | Material | Rating (straight +Z pull, SF 2) |
|---|---|---|
| **Recommended** | Bambu PAHT-CF, dried | **9.1 N** (≈ 0.92 kg at 1 g), provisional, untested |
| Baseline | Bambu PLA Basic, dried | 6.0 N (≈ 0.61 kg), provisional, untested |

SF 2 is Lane's choice and holds only if the Z coupon test in [test-plan.md](test-plan.md) confirms the TDS Z strength (47 MPa PAHT-CF, 31 MPa PLA Basic). Off-axis ratings at SF 2: see [provisional-load-rating.md](provisional-load-rating.md).

Both assume:

- **Infill:** 100%. Or enough walls/top/bottom layers that the receiver roofs, the adapter floor and the keeper bar are fully solid. Check this in the slicer preview.
- **Orientation:** as in the table below. Record what you used.

## Recommended material: Bambu PAHT-CF

Values from the Bambu PAHT-CF TDS ([V3.0 PDF](https://store.bblcdn.eu/s8/default/91dea87af3414d878a0696d2c51b98f7/Bambu_PAHT-CF_Technical_Data_Sheet_V2.pdf)), dry, ISO 527 / ISO 75:

- Tensile strength 92 ± 7 MPa (X-Y), **47 ± 5 MPa (Z)**. Modulus 3860 (X-Y) / 2180 (Z) MPa.
- HDT 170 °C at 1.8 MPa. Tg 70 °C.
- Drying: 80 °C for 8–12 h in a blast (forced-air) oven, or on the heatbed at 90–100 °C for 12 h. Print and store below 20% RH.
- Chamber 45–60 °C (enclosed printer). Nozzle 260–290 °C, bed 80–100 °C, glue on Engineering/High-Temp/Textured PEI plate. Supports: Bambu Support for PA/PET.
- **Hardened nozzle and extruder gears required** (carbon fibre wears brass). 0.6 mm nozzle recommended by Bambu, 0.4 mm allowed.
- Values above are for annealed, dried coupons. Saturated water absorption 0.88%. Wet strength isn't listed, so print dry and keep parts dry.

### Shortlist (Bambu TDS values, dry)

| Material | Tensile X-Y / Z (MPa) | Modulus X-Y / Z (MPa) | HDT 1.8 MPa | Notes |
|---|---|---|---|---|
| PLA Basic (baseline) | 35 / 31 | 2580 / 2060 | — | Rating basis today |
| **PAHT-CF** | **92 / 47** | 3860 / 2180 | 170 °C | Chosen. Best in-layer strength, highest heat, Z impact 13.3 kJ/m² |
| PC | 62 / 56 | 2110 / 1450 | 117 °C | Highest Z strength, but Z elongation 2.1% and Z impact 9.0 kJ/m² (brittle). [TDS](https://wiki.bambulab.com/filament-acc/abs-asa-pc/a52afdccddfd448583d119587122c8c5.pdf) |
| ASA | 37 / 31 | 2450 / 2120 | 92 °C | No strength gain over PLA. [TDS V3.0](https://wiki.bambulab.com/filament-acc/abs-asa-pc/6eaf4c432d1d4014a1975e55a55ed00b.pdf) |
| PETG-CF | 35 / 29 | 2460 / 1340 | 68 °C | Weaker in Z than PLA. [TDS](https://store.bblcdn.eu/s8/default/7c4afe6d319b456d9f9c8db59647976e/Bambu_PETG-CF_Technical_Data_Sheet_V2.pdf) |

None of these TDS give creep data. A sustained-load creep test is still needed before any long-hold use (see [test-plan.md](test-plan.md)).

## Orientation per part

Stress directions are from the P13 FEA fields (`project/analysis/p13_expanded`). Layer plane = the plane parallel to the bed.

| Part | Recommended orientation | Peak tension direction (|x|,|y|,|z|) | Effect |
|---|---|---|---|
| Keeper | Unchanged: main-body underside to bed | (0.98, 0.17, 0.07) | Along the layers. |
| Receiver | **On its −X end face** (part's X axis up, ≈ 40 mm tall). Was base to bed. | (0.23, 0.55, 0.80) | Was mostly across layers; now only the 0.23 X component crosses them. Keeper channel and sliding faces become vertical walls (no support scars). Bed contact 136 mm² (was 1152), ≈ 290 mm² of >45° overhang to support (was ≈ 90). Use a brim. |
| Adapter | **On its −Y side face** (part's Y axis up). Was flange to bed. | (0.22, 0.17, 0.96), worst off-axis case | Only the 0.17 Y component crosses layers. Bed contact 39 mm², ≈ 37 mm² overhang. Use a brim. |

Contact and overhang areas are from the STL geometry, not a slicer. **Check supports, bridges and the keeper slide fit in the slicer and with a test print before relying on the new orientation.** The supplied `*_print.stl` files are still in the old orientation; rotate them in the slicer.

**The 9.1 N rating does not depend on the new orientation.** It uses the Z (layer) strength, so it holds even if a part has to stay in the old orientation. The new orientation is extra margin, not counted.

**Required for SF 2:** confirm the filament reaches the TDS Z value with the coupon test in [test-plan.md](test-plan.md), printed in the same material and settings.
