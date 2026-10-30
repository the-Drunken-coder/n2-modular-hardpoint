# R5 – simplified servo hardpoint

3 printed parts, 0 captive nuts, 7 BOM lines. Fits the 85.6 × 54 × 20 mm card envelope (64 × 50 × 20), so keeping the envelope cost nothing.

Unpowered retention is **not** a requirement: losing servo power means losing the aircraft.

## Concept and load path
A printed 5 × 5 mm keeper slides in a 5.4 × 5.4 tunnel in the body and passes through a hole in a 3 mm tab on the payload adapter. Payload load goes tab → keeper top → tunnel mouth and back roof → body → 4 M3 self-tapping screws → wing.

The drive is a scotch yoke. An M2 screw in the stock horn's outer hole (r = 5 mm) rides in a vertical slot in the keeper. Latched is 180° (dead centre, so payload load puts no torque on the servo). Released is 70°.

## Build and check
```
pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt
python cad/build.py            # STEP/STL + interference checks -> out/
python analysis/mechanics.py   # travel, clearances, torque margin
python analysis/fea.py         # 17.8 N FEA -> out/fea.md
```
`out/` is generated, not committed. CI (`.github/workflows/r5.yml`) builds and uploads it.

## Numbers (from the scripts)
| Check | Value | Requirement |
|---|---|---|
| Keeper sliding fit | 0.4 total | 0.3–0.4 |
| Tab-in-socket gap | 0.4 per side | ≥0.3 |
| Tab hole to keeper | 0.6 / 1.1 | ≥0.5 |
| Servo pocket, horn and yoke gaps | ≥0.5 (servo pocket 0.5, horn 1.0) | ≥0.5 |
| Spare travel beyond 0.5 mm | 2.71 mm (1.44 mm if the servo stops 15° short) | ≥1 |
| Working-torque margin at 4.8 V, μ = 0.35 | 3.8× (7.6× on stall; about 2.7× at μ = 0.5) | ≥3 |
| FEA at 17.8 N, lowest margin | 10.9 (adapter, across layers) | ≥1 |

## Print
PAHT-CF, dried. Body: wing face down; the tunnel roof is the only bridge. Keeper: on its side. Adapter: flat. FEA uses the XY/Z properties for these orientations.

## Assembly
1. Screw the servo into the cradle with its ear screws.
2. Centre the servo at 180° and fit the stock horn with the M2 pin facing the keeper.
3. Slide the keeper into the tunnel so that the pin enters the slot.
4. Screw the body to the wing with 4 M3 self-tapping screws.
5. Fit the payload, command latch and pull-test it every time. If the tab isn't seated, the keeper tip hits the tab face and the servo stalls instead of latching.

## Sources
- Servo: Adafruit 2307 (TowerPro MG92B), 3.1 kgf·cm stall at 4.8 V, 14 g. https://www.adafruit.com/product/2307
- Material: Bambu PAHT-CF TDS V2, dry. https://wiki.bambulab.com/en/filament-acc/filament/paht-cf

## Unverified – check before flight
- μ = 0.35 between the printed parts is assumed.
- Working torque is taken as 50% of stall. No curve is published.
- The listing gives the operating voltage as 5.0–6.6 V, but the stall figure is quoted at 4.8 V. Confirm at 4.8 V.
- Horn outer-hole radius (5 mm) and servo case dimensions: measure when the parts arrive.
- FEA is linear elastic. Allowable = (mean − 3σ) × 0.5. It does not model voids, creep, moisture or the screw bosses in the wing. The adapter mesh is not converged (displacement changed about 110% between meshes), so treat its margin as indicative only. **A physical proof test at 17.8 N is still required.**

## Optional
A latched-position microswitch is not fitted. The keeper is visible from the +Y side for a visual check. A switch could be added later on the tunnel back if needed.
