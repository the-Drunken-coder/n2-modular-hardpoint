# N2 improvement study: where the capacity is

> Paper study, untested. PAHT-CF, SF 2, the same failure screen as [provisional-load-rating.md](provisional-load-rating.md). Each number is labelled **FEA** (run with `tools/n2fea.py`, raw data in `project/analysis/improvements/`) or **hand** (scaling or calculation, stated assumptions). The current rating stays 9.1 N until a design change is adopted and tested.

## 1. First principles: what limits N2

Load path: payload → adapter flange → two 1.3 × 1.4 mm side webs → cross-hole floor → 3 × 3 mm keeper → receiver guide roofs → host.

| Mode | What sets it | P13 PAHT-CF rating, SF 2 (FEA) |
|---|---|---:|
| Straight pull with distal roof lost (current rating) | The keeper becomes an overhung lever. The proximal roof sees 1.33× the load, concentrated at the roof's **free edge** (X 28.5) and an inside corner. | **9.05 N** |
| Straight pull with both roofs engaged | Adapter side webs at the cross-hole corners | 16.8 N |
| 45° / 90° side pull | The 1.4 mm lug bends about its weak axis as a ~9 mm cantilever: σ ≈ 6PL/(b·t²) with b 7.2, t 1.4 → ~3.8 MPa/N (hand). FEA is worse because of the local keeper contact. | 2.85 / 2.12 N |

Sensitivities, from FEA already in the repo and this study:
- **Distal engagement:** ×1.86 on straight pull. It is binary: 0.6 mm overlap is lost to tolerance or wear.
- **Lug thickness t:** bending goes as t². Side-pull failure rose ×2.5 for 1.4→2.4 mm and ×4.2 for 1.4→3.4 mm (FEA).
- **Roof thickness:** weak. P12 got ×1.38 for ×1.9 thickness, because the peak is a local edge/corner concentration rather than beam bending.
- **Fillet:** ×1.17 (P13).
- **Lever arm:** side load is reacted at the keeper 9 mm below the flange. Bearing the lug on the socket wall near the keeper removes most of that moment (FEA, ×5).
- **Size:** for geometrically similar parts in the linear model σ ∝ P/L², so failure load ∝ scale² (exact, hand).
- **Material/orientation:** a linear multiplier on the screen. PAHT-CF XY/Z = 92/47 gives up to ×1.96 if the governing tension can be put fully in-plane. That is a ceiling, not shown.
- **Keeper:** not governing (P13 keeper failures ≥ 41.8 N PLA). A steel pin keeper buys nothing by itself.

**The 3 mm solenoid stroke drives almost all of this.** It forces both the 0.6 mm overlap and the 1.4 mm lug. Stroke needed ≈ overlap + lug thickness + 1.0 mm (0.3 mm slot clearance and 0.7 mm release margin).

## 2. Ideas and results

Ratings are in N, PAHT-CF, SF 2, worst sign of each direction. "Straight" assumes the distal roof is engaged. "Distal lost" is the fallback case.

| # | Idea | Hardware implication | Tested | Straight | 45° | 90° | Distal lost |
|---|---|---|---|---:|---:|---:|---:|
| 0 | P13 baseline (rerun with tool) | none | FEA | 16.8 | 2.85 | 2.12 | 9.05 |
| 1 | Guarantee distal engagement (tight keeper-tip tolerance, positive tip-position check, no stroke change) | inspection/shim only | FEA (case 0) | 16.8 (×1.86 over current rating) | 2.85 | 2.12 | n/a |
| 2 | Socket-wall bearing: near-zero clearance or tapered seat so the lug bears on the slot walls under side load | tighter slot or a taper and preload. The receiver wall load is **not yet checked** | FEA, idealised | 18.2 | 14.4 | 10.7 | 9.05 |
| 3 | Lug 2.4 mm + overlap 1.5 mm | ≥4.9 mm stroke actuator | FEA | 22.6 | 6.8 | 5.3 | 8.0 |
| 4 | Lug 3.4 mm + overlap 2.0 mm | ≥6.4 mm stroke actuator (larger solenoid, or a servo/cam keeper) | FEA | 21.0 (receiver governs) | 10.5 | 8.2 | 6.7 |
| 5 | 4 + socket-wall bearing | both of the above | FEA, idealised | 21.0 | 15.5 | 16.1 | 6.7 |
| 6 | Scale the whole interface 1.5× | 4.5 mm stroke for the same proportions, 1.5× envelope | hand (exact scaling) | ×2.25 on any row: 0 → 37.8 / 6.4 / 4.8; 5 → 47 / 35 / 36 | | | |
| 7 | Credit in-plane orientation strength (XY 92 vs Z 47 MPa) | none. Needs XY coupons and an anisotropic check | hand, ceiling only | ≤ ×1.96 | | | |
| 8 | Metal lug (e.g. 6061-T6 plate, same shape) in a printed flange | machined/cut plate, insert or bonded | hand + FEA | Adapter screen rises ~×7 (276 MPa yield / 37.9 MPa), so the receiver governs: ≈ 26 / 17.5 / 15.0 (receiver FEA, case 0 geometry) | | | |
| 9 | Steel pin keeper | dowel instead of printed keeper | P13 FEA | no gain (keeper not governing) | | | |

Notes:
- Thicker lugs widen the slot. That moves the proximal patch outboard, so **distal-lost gets worse** (9.05 → 6.7). With 2 mm overlap that state is much less likely, but it still needs a tolerance check.
- In 4/5 the receiver roofs (centered case) now govern straight and YZ. Roof work (gusset or doubled roof width) is the next lever there.
- Mesh scatter: the adapter straight case varies by ~7% between runs (16.8 vs 18.1 N). Treat differences under ~10% as noise.
- Ball-lock or rotating-cam latches were not modelled. They are mainly a way to get idea 4's engagement and idea 2's bearing without a long-stroke solenoid.

## 3. Recommendations

1. **Socket-wall bearing (idea 2).** It is the cheapest and biggest off-axis gain: 2.1 → 10.7 N at 90° on the current hardware. Next step: a receiver load case with the wall reaction, plus a tolerance/taper design.
2. **Longer-stroke keeper → 3.4 mm lug + 2 mm overlap (ideas 4+5).** This removes the fragile distal state and, with wall bearing, gives about 21 N straight and ≥15.5 N at any angle (≈2.1 kg / 1.6 kg at 1 g). It needs an actuator with ≥6.4 mm stroke.
3. **If the envelope allows, scale 1.5× (idea 6)** on top: about 2.25× again.

Rerun any row: `python3 tools/n2fea.py --lug-t <t> --overlap <o> [--wall-bearing]` (see [tools/README.md](../tools/README.md)).
