# N2 physical proof-load test plan (one page)

Goal: check the [provisional rating](provisional-load-rating.md) for the **P13 receiver (roof +2.0 mm, 0.3 mm corner fillet)**: 4.0 N static +Z, SF 3 and that the keeper releases under load. Print the P13 receiver (roof top Z 14.7, filleted inside corners). Use parts printed exactly like flight parts (same printer, filament lot, orientation, 100% infill). Record print settings.

## Setup

- Receiver mounted the **real way** (two screws into a representative airframe coupon), not glued to the bench.
- Load hung on the adapter in **+Z extraction**, straight, through a hook on the adapter's payload face. Dead weights (calibrated or weighed on a kitchen scale) or a luggage/force gauge.
- Before loading: measure keeper/roof engagement with feeler gauge or calipers. **Note whether both roofs seat** (distal overlap nominal 0.6 mm).
- Room temp, note °C. Phone camera on the keeper/roof area.

## Steps (part A: proof, 3 specimens)

| Step | Load, N (≈ g) | Hold |
|---|---:|---:|
| 1 | 2.0 (205 g) — 0.5× rating | 1 min |
| 2 | 4.0 (410 g) — 1.0× rating | 10 min (creep check) |
| 3 | 6.0 (610 g) — 1.5× rating | 1 min |
| 4 | 8.0 (815 g) — 2.0× rating | 1 min |
| 5 | 12.0 (1225 g) — 3.0× rating = rating × SF | 1 min |

Unload fully between steps 2 and 3 and check for permanent set.

## Release under load

At 1.0× rating (4.0 N), fire the solenoid release 10 times. Record: released yes/no, payload dropped clear yes/no, any hang-up. Then once at 2× rating.

## Part B (optional, 1 sacrificial specimen)

Keep stepping +1 N/min past 12.0 N until failure. Record failure load and location. Predicted screen crossing: ~12.1 N at the receiver roof underside fillet, +Y channel edge near the proximal contact patch.

## Pass / fail

- **Pass:** all 3 specimens hold step 5 for 1 min with no crack, no whitening, no visible permanent deformation, keeper still seated; creep at step 2 < 0.2 mm over 10 min; 10/10 releases at rating with payload clearing.
- **Fail:** any crack/whitening/delamination, keeper slips or pops, a missed or sticky release, or failure below 12.0 N. Then don't fly it; fix the design (distal overlap, roof thickness) or lower the rating.

## Record

Print settings and orientation, filament brand/lot, mass and dims of each part, roof engagement measured, temperature, each load step and hold, displacement (dial or caliper on adapter), photos/video, release results, failure load and location.

## Safety

Safety glasses (PLA shatters). Keep hands and feet out from under the load; use a catch box/soft landing under the weights. Solenoid wiring off and disconnected while loading; arm only for the release test. One person loads, one watches/records.
