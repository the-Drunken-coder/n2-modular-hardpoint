# Changelog

## P13 — 2026-10-29
- **0.3 mm fillet** at the inside corners where the keeper-channel walls meet the roof underside (the governing stress spot). `build_n2.py` parameter `ROOF_FILLET` (env `N2_ROOF_FILLET`).
- Governing FEA screen (distal roof lost, 0.55 mm mesh): 10.30 N → **12.09 N**. Two-screw case 12.21 N, both roofs loaded 34.71 N.
- Mesh check at local 0.4 mm: 12.17 N (+0.6%), so the fillet result is mesh-stable.
- **Provisional rating 3.4 N → 4.0 N** (≈ 400 g at 1 g, SF 3). Untested.
- Fillets over 0.3 mm cut into the archived load patch and can't be screened like-for-like; 1.0 mm leaves 0.01 mm keeper clearance and ≥ 1.2 mm hits the keeper.
- Keeper clearance and release unchanged (0.3 mm open gap, no overlap).
- Regenerated receiver STEP/STL/print STL, assembly STEP, viewer data.
- `STATUS.md` in the repo root, regenerated on every push.
- GitHub Pages site back (public, by choice): 3D assembly viewer with part toggles, print-part viewer and STL downloads; rating read from the docs.

## P12 — 2026-10-29
- **Receiver guide roofs raised +2.0 mm** (top Z 12.7 → 14.7). Only the receiver changed; keeper overlap stays 0.6 mm.
- Governing FEA screen (receiver, distal roof lost, 0.55 mm mesh): 7.48 N → **10.30 N**.
- **Provisional rating 2.4 N → 3.4 N** (≈ 340 g at 1 g, SF 3). Untested.
- `build_n2.py` now has `DISTAL_OVERLAP` and `ROOF_EXTRA` parameters (env `N2_DISTAL_OVERLAP`, `N2_ROOF_EXTRA`).
- Regenerated receiver STEP/STL/print STL, assembly STEP, viewer data.
- Sweep results: `project/analysis/p12_roof_sweep/`. Test plan load steps updated.

## P11 review — 2026-10-29
- FEA review of the 39 archived cases, first provisional rating (2.4 N), proof-test plan.
