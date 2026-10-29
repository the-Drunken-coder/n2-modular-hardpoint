# N2 provisional load rating

> **PROVISIONAL. UNTESTED. Paper number only.** Not a qualified payload capacity. Valid for static, short-duration +Z extraction at room temperature, solid (100%) PLA, until the physical proof test in [test-plan.md](test-plan.md) passes.

## Inputs (from the repo)

- Governing case: receiver `distal_ineffective`, 0.55 mm mesh ([fea-review.md](fea-review.md)).
- Stress per unit load: σ1 = 3.341 MPa/N (tension governs).
- FEA crossing at the model's 25 MPa tension threshold: P_cross = 25 / 3.341 = **7.48 N**.
- Why use the distal-ineffective case and not the centered one (21.5 N)? The distal roof overlap is only 0.6 mm. Print tolerance, wear or a slightly retracted keeper can remove it. Rate the hardware for the state it can easily get into.

## PLA allowable

Source: Bambu Lab PLA Basic TDS V3.0 (linked in `project/analysis/material.json`): tensile strength **35 MPa XY / 31 MPa Z**, 100% infill, dried/annealed coupons.

The 25 MPa threshold the FEA used is already 81% of the Z (layer) value. That leaves some margin for layer adhesion but nothing for the rest. I don't add extra knockdowns to the stress; I put them in the safety factor so the math stays in one place.

## Safety factor: 3.0 (minimum for printed PLA)

| Concern | Why it matters here |
|---|---|
| Layer adhesion / Z weakness | Governing stress is tension in a thin roof. If layers run the wrong way, real strength can be well below coupon Z values. |
| Print variability | Under-extrusion, voids, wall count, wet filament. Nothing has been measured. |
| Creep | PLA creeps under sustained load; a held payload is a sustained load. |
| Temperature | PLA softens fast approaching its glass transition (roughly 55–60 °C). A hot car or sun-baked airframe can get there. |
| Contact / stress concentration | Peak is at a contact patch edge with a sharp-ish geometry; FE screen, not fracture analysis. |
| Dynamic loads | Rating is 1 g static. Flight loads/shock must be divided out separately. |

3.0 is the floor. Use **≥4 if the part will sit hot (>40 °C) or hold load for hours**.

## Math

```
P_cross    = 25 MPa / 3.341 MPa/N         = 7.48 N
P_rated    = P_cross / SF = 7.48 / 3.0    = 2.49 N   -> round DOWN to 2.4 N
Mass at 1 g = 2.4 / 9.80665               = 0.245 kg  -> call it 0.24 kg (≈ 0.53 lb)
Mass at n g = 2.4 / (n · 9.80665)         e.g. 2 g -> 0.12 kg
```

Mass includes payload + removable adapter + its fasteners.

## Provisional rating

**N2 hardpoint: 2.4 N static +Z extraction (≈ 240 g payload at 1 g), PROVISIONAL, untested.**

For context: the withdrawn 10–15 lb requirement is ~20–30× this. If both roofs are proven to seat reliably by test, the centered case (21.5 N bonded, ~11.3 N two-hole) could support a higher rating, but **only after test**.

## What would change this number

- Proof test (test-plan.md) passes → keep or raise using the measured failure load / SF.
- Increase distal roof overlap beyond 0.6 mm or thicken the receiver roof at the proximal patch edge → biggest design lever.
- Different material (PETG/PA-CF) → redo with that material's data.
