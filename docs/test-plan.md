# N2 physical proof-load test plan (one page)

Goal: check the [provisional rating](provisional-load-rating.md) for the **P13 receiver (roof +2.0 mm, 0.3 mm corner fillet) in Bambu PAHT-CF**: 9.1 N static +Z, SF 2 (Lane's choice), and that the keeper releases under load. SF 2 depends on the Z coupon test below passing first. Print the P13 receiver (roof top Z 14.7, filleted inside corners). Use parts printed exactly like flight parts (same printer, filament lot, orientation, 100% infill, per [print-requirements.md](print-requirements.md)). Record print settings. Predicted screen crossing (failure): 18.3 N. For the PLA Basic baseline (6.0 N at SF 2, predicted failure 12.1 N), scale every load below by 6.0/9.1.

## Setup

- Receiver mounted the **real way** (two screws into a representative airframe coupon), not glued to the bench.
- Load hung on the adapter in **+Z extraction**, straight, through a hook on the adapter's payload face. Dead weights (calibrated or weighed on a kitchen scale) or a luggage/force gauge.
- Before loading: measure keeper/roof engagement with feeler gauge or calipers. **Note whether both roofs seat** (distal overlap nominal 0.6 mm).
- Room temp, note °C. Phone camera on the keeper/roof area.

## Steps (part A: proof, 3 specimens)

| Step | Load, N (≈ g) | Hold | vs predicted failure (18.3 N) |
|---|---:|---:|---:|
| 1 | 4.5 (460 g) — 0.5× rating | 1 min | 25% |
| 2 | 9.1 (930 g) — 1.0× rating | 10 min (creep check) | 50% |
| 3 | 13.6 (1390 g) — 1.5× rating | 1 min | 74% |
| 4 | 18.2 (1855 g) — 2.0× rating = rating × SF | 1 min | **99%, spare parts only** |

Unload fully between steps 2 and 3 and check for permanent set.

**Step 4 sits at the predicted failure load** (18.2 N vs 18.3 N). Expect it to crack or fail. Run it only on spare specimens that will never fly, never on flight parts.

## Release under load

At 1.0× rating (9.1 N), fire the solenoid release 10 times. Record: released yes/no, payload dropped clear yes/no, any hang-up. Then once at 1.5× rating (13.6 N).

## Part B (spare specimens, step 4 and failure)

On spare specimens only: hold step 4 (18.2 N) for 1 min, then keep stepping +1 N/min until failure. Record failure load and location. Predicted screen crossing: ~18.3 N at the receiver roof underside fillet, +Y channel edge near the proximal contact patch.

## Pass / fail

- **Pass:** all 3 specimens hold step 3 for 1 min with no crack, no whitening, no visible permanent deformation, keeper still seated; creep at step 2 < 0.2 mm over 10 min; 10/10 releases at rating with payload clearing.
- **Fail:** any crack/whitening/delamination, keeper slips or pops, a missed or sticky release, or a spare specimen failing below step 4 (18.2 N). Then don't fly it; fix the design (distal overlap, roof thickness) or lower the rating.

## Record

Print settings and orientation, filament brand/lot, mass and dims of each part, roof engagement measured, temperature, each load step and hold, displacement (dial or caliper on adapter), photos/video, release results, failure load and location.

## Safety

Safety glasses (PAHT-CF and PLA parts can shatter). Keep hands and feet out from under the load; use a catch box/soft landing under the weights. Solenoid wiring off and disconnected while loading; arm only for the release test. One person loads, one watches/records.

## Print record and layer-strength coupon

- **Before testing:** for each tested part, record the slicer profile (export the 3MF), layer height, walls, top/bottom layers, infill, nozzle and bed temperatures, filament lot, dry time, and orientation. Test only parts printed exactly to [print-requirements.md](print-requirements.md). Flight parts must use the same settings.
- **Z coupon pull test (required for SF 2, run before part A):** print 3 or more vertical (Z-built) tensile coupons (ISO 527-2 1BA or similar) in the same filament and settings. Pull to failure and record peak load and cross-section to get layer tensile strength. SF 2 assumes the TDS Z value: mean ≥ 47 MPa for PAHT-CF (≥ 31 MPa for PLA Basic). Lower than that: scale the rating by (coupon mean / TDS value) or go back to SF 3. Below the FEA screen (37.9 MPa PAHT-CF, 25 MPa PLA) the screen itself is unconservative.
