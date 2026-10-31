# R5 – simplified servo hardpoint

3 printed parts, 0 captive nuts, one external M2 locknut. Body envelope **65 × 51 × 20 mm**; with the servo overhang **65 × 51.4 × 20 mm**. The 20 mm height provides loaded-motion clearance within the original thickness limit; the wider rear boss spacing clears keeper insertion. The top plate is 2.5 mm, with a 1.0 mm local roof above the reinforced yoke. Regenerated volumes and mass estimates are in `out/cad.json`. Purchased parts: [BOM.md](BOM.md).

Unpowered retention is **not** a requirement: losing servo power means losing the aircraft.

## Concept and load path
A printed 5 × 5 mm keeper slides in a 5.4 × 5.4 tunnel in the body and passes through a 5.6 × 5.6 hole in a 4 mm tab on the payload adapter. Payload load goes tab → keeper top → tunnel mouth and back roof → body → 4 M3 self-tapping screws → wing.

The drive is a scotch yoke. A smooth 4 mm metal sleeve, clamped to the stock horn by an M2 through-bolt and locknut, runs in a 4.4 mm vertical slot. Measure the clamped sleeve-center radius at **5.4±0.1 mm**. Latched is 180°; the accepted released endpoint is 40–44°. The 2 mm tip-pocket depth is free travel beyond the latched tip, not bearing overlap. See [assembly and joint details](ASSEMBLY.md).

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
| Keeper sliding fit | 0.4 total | 0.3–0.5 total, inspected |
| Tab-in-socket gap | 0.4 per side | ≥0.3 |
| Tab hole to keeper | 0.6 total (0.3 per side when centered; all vertical clearance below when loaded) | ≥0.5 total |
| Servo pocket, horn and yoke gaps | ≥0.5 | ≥0.5 |
| Spare travel beyond 0.5 mm | 2.33 mm (1.37 if the servo stops 15° short, nominal centered geometry); deterministic check additionally includes pin/slot play | ≥1 |
| Assumed working-torque margin, 5.0 V, μ 0.35 | 4.00× (8.0× on stall); 50% stall is an assumption | ≥3 |
| FEA at 17.8 N, lowest margin | 26.2 (adapter, across layers) | ≥1 |

## Simulated risks (`risks.py`, gated in CI)
| Risk | Result |
|---|---|
| Friction μ 0.2–0.6, yoke T = F·r(\|sin α\| + μ\|cos α\|) | margin 7.3× → 2.1×; falls to 3× at μ 0.45 |
| Supply | Manufacturer operating range 5.0–6.6 V; 4.4/4.6/4.8 V are unsupported and cannot pass by extrapolation. Fixed nominal 5 V must be measured at the servo under load. |
| Tolerance | Deterministic endpoints/extrema over the measured acceptance limits in `params.FIT_BOUNDS`. The separate 200k synthetic draws use guessed distributions and report sample fractions, not measured failure probabilities. |
| Back-drive at dead centre, 3° backlash, 10 g | 1.65 N·mm, 92× below working torque |
| Unseated tab | Integral lower-root buttresses are screened against the same 16 MPa across-layer allowable as the structure. This prescribed root-load case does not qualify upper hole contacts or arbitrary mis-seating; complete jam tests remain pending. |
| Payload mode / rattle | ≈2 kHz on rigid wing; lifts off above 1 g peak, impact 34–68× proof at 2–5 g (undamped, reported only) |

FEA: skfem P2 tets, transversely isotropic, direct solver with residual check. Refined until load-point displacement changes < 5 % (adapter 0.2 %, body 1.1 %). Keeper stays at 11 % but its margin is 176, and hand calcs give 10.8.

## Print
Use the generated `out/body_print.stl`, `out/keeper_print.stl` and
`out/adapter_print.stl`, following [PRINTING.md](PRINTING.md). These files already
put the selected face on the bed. Record the material/process and finished fits
in [inspection-template.csv](inspection-template.csv). `params.PRINT_AXES` and
the CAD manifest tie the FEA material directions to those exact orientations.

The [loaded-fit envelope and bench gate](docs/loaded-fit.md) define acceptable
finished guide dimensions, horn radius and non-contact clearances. The CAD gate
checks pitch/yaw and free-play poses; it does not demonstrate loaded release.

## Assembly
The servo lead uses the continuous gland-side opening; see [cable fit and routing](docs/cable-fit.md).

Follow the [5 V interface and endpoint calibration procedure](electronics/README.md).
Follow the ordered [assembly procedure](ASSEMBLY.md): prepare the horn and bare
through-bolt, install its center screw before the keeper, use the verified
215° bare-pin entry pose, insert the keeper, return to latch, then install the
larger sleeve/washer/locknut. The 175° safe unloaded assembly span is a receiving
gate, not an operational controller command or a vendor-guaranteed capability.
Fit the payload, command latch and pull-test it every time. An unseated tab can
block the keeper; follow the defined jam limits rather than forcing it.

## Sources
- Servo: TowerPro MG92B, manufacturer 3.1 kgf·cm stall at 5.0 V, 13.8 g. https://towerpro.com.tw/product/mg92b/ . Adafruit 2307 labels that point 4.8 V but also specifies a 5.0 V operating minimum; this design uses the manufacturer's point. https://www.adafruit.com/product/2307
- Material: Bambu PAHT-CF TDS V2, dry. https://wiki.bambulab.com/en/filament-acc/filament/paht-cf

## Bench tests (cannot be simulated)
1. Servo torque at the actual nominal 5 V terminals: stall and the speed–torque curve (50 % of stall assumed), minimum terminal voltage/current transients, signal level and endpoint calibration. Sub-5 V sag behavior is unqualified.
2. μ between printed PAHT-CF parts: incline or pull test (0.35 assumed; ≥3× holds to 0.45).
3. Print strength: tab proof at 17.8 N on a printed adapter, plus a Z coupon.
4. Wing boss M3 self-tapper pull-out.
5. Horn hole radius and servo case: measure on arrival.
6. Vibration at the hardpoint in flight (decides whether rattle matters) and servo holding under vibration.
7. Mis-seating/jam trials on sacrificial assemblies: upper tab and hole contacts, keeper, horn and body must be inspected after each event. The lower-root hand calculation is not a complete jam model. Do not continue a stalled command or fly a damaged specimen.

## Optional
A latched-position microswitch is not fitted. The keeper is visible from the +Y side for a visual check. A switch could be added later on the tunnel back if needed.

## Viewer

`viewer_build.sh` builds `out/viewer/`: printed and purchased parts including the complete sleeve clamp stack, explode vectors, servo-crank kinematics and current FEA fields. Purchased parts are receiving-inspection reservations, not vendor-certified CAD.

Fit note: the horn centre retaining screw is included. The servo is separated
from the full-width keeper so the guide retains its complete bearing length.
There is no keeper groove; inflated head/horn checks include loaded pitch/yaw
and the permitted axial fit envelope.

### Dimensional acceptance and probability limits

The keeper tip is at X5.65 mm to preserve full-section overlap across the
combined dimensional and guide-pose bounds. Inspect the **assembled sleeve-center
radius 5.4 ±0.1 mm**, including bolt/hole/sleeve eccentricity, mounted shaft
X and printed pin-to-tip length (±0.1 mm), latch angle (180 ±3°), release angle
(40–44°), and tab thickness (4.0 ±0.1 mm). The deterministic check includes the
entire ±0.4 mm socket float. Require measured guide clearance **0.3–0.5 mm total**
and full-section guide length **at least 15.8 mm**, keeper section **4.9–5.1 mm**,
and relative guide/shaft Z datum **within ±0.20 mm**. The horn groove is removed
so the full guide section is available. Use the separate loaded-pose CAD checks.
Inspect the sleeve/slot gap to **0.3–0.5 mm total**. The check includes its
worst **±0.25 mm lost motion** with opposite pin contact faces at latch/release;
it does not assume the pin remains centered in the slot.
These are acceptance limits, not a claim that every print or stock horn meets
them. Rework, reject or reassess parts outside them. The calibration record must
also show at least **0.50 mm full-section overlap** and **1.50 mm actual open
gap** under the declared loaded/float poses.

The combined guided endpoint model requires at least 0.5 mm of full keeper section
beyond the tab (excluding the tip chamfer), 1.0 mm additional stroke after the
0.5 mm open-clearance reserve, and positive pocket-floor clearance. The
[continuous interval calculation](analysis/FIT_ENVELOPE.md) combines guide
pitch/yaw, pin-height coupling, edge contact, rolled-section corner bounds and
slot lost motion. It does not model binding, friction, wear, print defects,
elastic deformation, power behavior or actual
payload departure. Synthetic Monte Carlo sample counts supply no physical
reliability claim, even when a sampled failure count is zero.
