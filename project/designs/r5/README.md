# R5 – simplified servo hardpoint

3 printed parts, 0 captive nuts, 7 BOM lines. Fits the 85.6 × 54 × 20 mm card envelope (64 × 50 × 20), so keeping the envelope cost nothing.

Unpowered retention is **not** a requirement: losing servo power means losing the aircraft.

## Concept and load path
A printed 5 × 5 mm keeper slides in a 5.4 × 5.4 tunnel in the body and passes through a 5.6 × 5.6 hole in a 4 mm tab on the payload adapter. Payload load goes tab → keeper top → tunnel mouth and back roof → body → 4 M3 self-tapping screws → wing.

The drive is a scotch yoke. An M2 screw in the stock horn's outer hole (r = 5 mm) rides in a vertical slot in the keeper. Latched is 180° (dead centre, so payload load puts no torque on the servo). Released is 40° (140° swing). The keeper tip sits 2 mm deep in a pocket when latched.

## Build and check
```
pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt -r project/designs/r5/requirements.txt
cd project/designs/r5
python cad/build.py            # STEP/STL + interference checks -> out/
python analysis/mechanics.py   # travel, clearances, torque margin
python analysis/fea.py         # 17.8 N FEA, mesh-converged -> out/fea.md
python analysis/risks.py       # friction, voltage, tolerance Monte Carlo, dynamics -> out/risks.md
```
`out/` is generated, not committed. CI (`.github/workflows/r5.yml`) builds and uploads it.

## Numbers (from the scripts)
| Check | Value | Requirement |
|---|---|---|
| Keeper sliding fit | 0.4 total | 0.3–0.4 |
| Tab-in-socket gap | 0.4 per side | ≥0.3 |
| Tab hole to keeper | 0.6 per side | ≥0.5 |
| Servo pocket, horn and yoke gaps | ≥0.5 | ≥0.5 |
| Spare travel beyond 0.5 mm | 2.83 mm (1.87 if the servo stops 15° short) | ≥1 |
| Working-torque margin, 4.8 V, μ 0.35 | 4.00× (8.0× on stall) | ≥3 |
| FEA at 17.8 N, lowest margin | 28.9 (adapter, across layers) | ≥1 |

## Simulated risks (`risks.py`, gated in CI)
| Risk | Result |
|---|---|
| Friction μ 0.2–0.6, yoke T = F·r(\|sin α\| + μ\|cos α\|) | margin 7.3× → 2.1×; falls to 3× at μ 0.45 |
| Supply 4.4–6.0 V (datasheet interpolation) | 3.83× at 4.4 V, 4.00× at 4.8 V |
| Tolerance Monte Carlo, 200k (horn radius, stop error, print) | P(no release) 0, P(spare < 1 mm) 2e-5, P(partial engagement) 3.5e-5, tip never hits pocket floor |
| Back-drive at dead centre, 3° backlash, 10 g | 1.65 N·mm, 92× below working torque |
| Unseated tab | chamfer self-seats with 12.8 N of 30.6 N; servo stall on a clamped tab gives 27.5 MPa, 1.7× mean Z UTS |
| Payload mode / rattle | ≈2 kHz on rigid wing; lifts off above 1 g peak, impact 34–68× proof at 2–5 g (undamped, reported only) |

FEA: skfem P2 tets, transversely isotropic, direct solver with residual check. Refined until load-point displacement changes < 5 % (adapter 0.2 %, body 1.1 %). Keeper stays at 11 % but its margin is 176, and hand calcs give 10.8.

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

## Bench tests (cannot be simulated)
1. Servo torque at 4.8 V: stall and the speed–torque curve (50 % of stall assumed).
2. μ between printed PAHT-CF parts: incline or pull test (0.35 assumed; ≥3× holds to 0.45).
3. Print strength: tab proof at 17.8 N on a printed adapter, plus a Z coupon.
4. Wing boss M3 self-tapper pull-out.
5. Horn hole radius and servo case: measure on arrival.
6. Vibration at the hardpoint in flight (decides whether rattle matters) and servo holding under vibration.

## Optional
A latched-position microswitch is not fitted. The keeper is visible from the +Y side for a visual check. A switch could be added later on the tunnel back if needed.
