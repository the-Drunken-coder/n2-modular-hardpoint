# Changelog

## P12 — 2026-10-29
- **Receiver guide roofs raised +2.0 mm** (top Z 12.7 → 14.7). Only the receiver changed; keeper overlap stays 0.6 mm.
- Governing FEA screen (receiver, distal roof lost, 0.55 mm mesh): 7.48 N → **10.30 N**.
- **Provisional rating 2.4 N → 3.4 N** (≈ 340 g at 1 g, SF 3). Untested.
- `build_n2.py` now has `DISTAL_OVERLAP` and `ROOF_EXTRA` parameters (env `N2_DISTAL_OVERLAP`, `N2_ROOF_EXTRA`).
- Regenerated receiver STEP/STL/print STL, assembly STEP, viewer data.
- Sweep results: `project/analysis/p12_roof_sweep/`. Test plan load steps updated.

## P11 review — 2026-10-29
- FEA review of the 39 archived cases, first provisional rating (2.4 N), proof-test plan.
