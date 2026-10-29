# N2 provisional load rating

> **PROVISIONAL. UNTESTED. Paper number only.** Not a qualified payload capacity. Valid for static, short-duration +Z extraction at room temperature, solid (100%) PLA, until the physical proof test in [test-plan.md](test-plan.md) passes.

> **Off-axis warning (P13 expanded sims):** the rating is for straight +Z pull only. Angled pull drops the adapter-floor screen to ~4.6 N at 30° and ~3.4 N at 45° (pessimistic model). See [p13-expanded-sims.md](p13-expanded-sims.md).

## Current design: P12 (roof +2.0 mm)

P12 raises the top of both receiver guide roofs from Z 12.7 to Z 14.7 (roof 2.2 mm → 4.2 mm thick). Nothing else changed. The table below is the original P11 rating, kept for traceability; **the P12 rating is in the section after it.**

## P11 baseline inputs (from the repo)

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

## P12 sweep (rerun with the repo's own solver, receiver, 0.55 mm mesh)

Solver: frozen `inputs/drivers/solver_6d9b…py` via `reproduce.py --prepare-only`, then STEP + hash swapped in the receiver config; loads, supports, material, mesh recipe unchanged. Baseline replay reproduced the archive exactly (21.497 N / 7.483 N). Raw results: `project/analysis/p12_roof_sweep/`.

| Variant | Roof top Z | distal_ineff. bonded, N | distal_ineff. washers, N | centered bonded, N | Fit / release check |
|---|---:|---:|---:|---:|---|
| Baseline (P11) | 12.7 | 7.483 | 7.527 (archive) | 21.497 | OK |
| Roof +0.5 | 13.2 | 7.675 | 7.718 | 22.044 | OK |
| Roof +1.0 | 13.7 | 8.518 | 8.587 | 24.469 | OK |
| **Roof +2.0 (chosen)** | **14.7** | **10.297** | — (not run) | **29.573** | OK, 1.3 mm under adapter flange (Z 16) |
| Overlap 1.2 mm (roof +0) | 12.7 | n/a: receiver unchanged | | | Lug clears open keeper by only 0.1 mm. Rejected |
| Overlap 2.0 mm | — | — | — | — | Infeasible: 3 mm stroke can't clear the lug |

Fit/release check = boolean intersection of the regenerated receiver with all 12 other assembly parts, keeper retained and +3 mm open, and the adapter swept +Z 0–22 mm with the keeper open: zero overlap volume for every variant. Overlap changes only the keeper, so it doesn't change the governing (distal-lost) case; it only makes losing distal contact less likely. Keeping 0.6 mm preserves the 0.7 mm release margin.

Peak location is unchanged: receiver roof underside at the +Y edge of the keeper channel, near the proximal patch (≈ X 28.8–29.2, Y 11.8, Z 10.6). It's a sharp internal corner, so thickening helps only gradually. A fillet there is the next lever. Only the 0.55 mm mesh was run for P12; no convergence study yet.

## P12 provisional rating (superseded by P13)

```
P_cross  = 10.297 N   (receiver, distal_ineffective_bonded, roof +2.0)
P_rated  = 10.297 / 3.0 = 3.43 N   -> round DOWN to 3.4 N
Mass 1 g = 3.4 / 9.80665 = 0.347 kg -> 0.34 kg (≈ 0.75 lb)
```

**N2 P12 hardpoint: 3.4 N static +Z extraction (≈ 340 g at 1 g). PROVISIONAL, untested.** Up 42% from 2.4 N. Same SF 3 method and caveats as above.

## P13 inside-corner fillet sweep

Quarter-round fillet (`ROOF_FILLET` in `build_n2.py`) on the X-parallel inside corners where the keeper-channel walls (Y 8.2, Y 11.8) meet the roof underside (Z 10.5), both roofs. Roof stays +2.0 mm, overlap 0.6 mm. Receiver only, 0.55 mm mesh, thresholds in N.

| Fillet r (mm) | distal_ineffective_bonded | distal_ineffective_washers | centered_bonded | Keeper gap, open | Fit/release |
|---|---|---|---|---|---|
| 0 (P12) | 10.297 | — | 29.573 | 0.30 | OK |
| 0.25 | 11.430 | 11.540 | 32.823 | 0.30 | OK |
| **0.3 (chosen)** | **12.089** | **12.213** | **34.713** | **0.30** | **OK** |
| 0.5 | not solvable | | | 0.22 | OK |
| 0.75 | not solvable | | | 0.11 | OK |
| 1.0 | not solvable | | | 0.01 | Too tight to print |
| ≥ 1.2 | — | | | — | Interferes with keeper |

"Not solvable": the archived load patches are Y 8.5–11.5 on the flat roof underside. A fillet over 0.3 mm eats into that patch (flat ends at Y 11.8 − r), the patch imprint lands on the curved face and the mesher segfaults. Moving the patch would change the load case, so 0.3 mm is the largest fillet that keeps the screen like-for-like. It also keeps the full 0.3 mm keeper clearance.

Fit/release check (same as P12): zero overlap volume against all 12 parts, keeper retained and +3 mm open, adapter swept +Z with keeper open.

Mesh check (extra local box X 24.5–37.6, Y 7–13, Z 9–11.5 at 0.4 mm, global 0.55 mm):

| Geometry | distal_ineffective_bonded 0.55 → local 0.4 | centered_bonded 0.55 → local 0.4 |
|---|---|---|
| Fillet 0.3 | 12.089 → 12.167 (+0.6%) | 34.713 → 34.933 (+0.6%) |
| Sharp (P12) | 10.297 → 10.927 (+6%) | 29.573 → 31.376 (+6%) |

The filleted number is mesh-stable. The sharp-corner number moved with the mesh because it sits on a singularity. Peak is still at the fillet (≈ X 28.7, Y 11.8, Z 10.4). The rating uses the lower 0.55 mm value.

Results: `project/analysis/p13_fillet_sweep/`.

## P13 provisional rating (current)

```
P_cross  = 12.089 N   (receiver, distal_ineffective_bonded, roof +2.0, fillet 0.3)
P_rated  = 12.089 / 3.0 = 4.03 N   -> round DOWN to 4.0 N
Mass 1 g = 4.0 / 9.80665 = 0.408 kg -> 0.40 kg (≈ 0.88 lb)
```

**N2 P13 hardpoint: 4.0 N static +Z extraction (≈ 400 g at 1 g). PROVISIONAL, untested.** Up from 3.4 N (P12). Same SF 3 method and caveats as above.

## What would change this number

- Proof test (test-plan.md) passes → keep or raise using the measured failure load / SF.
- Increase distal roof overlap beyond 0.6 mm or thicken the receiver roof at the proximal patch edge → biggest design lever.
- Different material (PETG/PA-CF) → redo with that material's data.
