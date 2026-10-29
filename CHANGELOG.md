# Changelog

## Print requirements — 2026-10-29
- Material study: recommended Bambu PAHT-CF (TDS Z tensile 47 MPa vs PLA 31) with receiver on its −X end and adapter on its −Y side. **Provisional rating 6.1 N in PAHT-CF** (4.0 N in PLA Basic), straight pull, SF 3, untested. See docs/print-requirements.md.
- Added [docs/print-requirements.md](docs/print-requirements.md): dried PLA Basic, 100% solid, supplied orientations. The rating assumes these. Receiver roof and adapter floor tension crosses the layers (open issue). Test plan now requires a print record and has an optional Z coupon test.

## P13 expanded sims — 2026-10-29
- Re-ran all 12 archived cases on P13 geometry (receiver, adapter, keeper). Governing case unchanged: receiver distal_ineffective, **12.09 N → 4.0 N rating holds** for straight pull.
- Off-axis 15/30/45/90° in XZ and YZ: **adapter floor governs off-axis** (pessimistic model: 8.0 / 4.6 / 3.4 / 2.6 N failure). Rating not valid for angled/side loads.
- Interlayer strength at 50%: governing case 7.37 N (2.5 N rated).
- Mesh check 11.94–12.31 N. Results in `project/analysis/p13_expanded/`, write-up in `docs/p13-expanded-sims.md`.

## P13 — 2026-10-29
- **0.3 mm fillet** at the inside corners where the keeper-channel walls meet the roof underside (the governing stress spot). `build_n2.py` parameter `ROOF_FILLET` (env `N2_ROOF_FILLET`).
- Governing FEA screen (distal roof lost, 0.55 mm mesh): 10.30 N → **12.09 N**. Two-screw case 12.21 N, both roofs loaded 34.71 N.
- Mesh check at local 0.4 mm: 12.17 N (+0.6%), so the fillet result is mesh-stable.
- **Provisional rating 3.4 N → 4.0 N** (≈ 400 g at 1 g, SF 3). Untested.
- Fillets over 0.3 mm cut into the archived load patch and can't be screened like-for-like; 1.0 mm leaves 0.01 mm keeper clearance and ≥ 1.2 mm hits the keeper.
- Keeper clearance and release unchanged (0.3 mm open gap, no overlap).
- Regenerated receiver STEP/STL/print STL, assembly STEP, viewer data.
- `STATUS.md` in the repo root, regenerated on every push.
- GitHub Pages site rebuilt with Blueprint (dark): viewer for every CAD revision in git history (P11 import, P12, P13), compare mode (side by side with synced cameras, overlay, added/removed-material diff), rating/parameter/changelog deltas, status and docs. Built in the Pages workflow (`site/build_data.py` + `web/`).

## P12 — 2026-10-29
- **Receiver guide roofs raised +2.0 mm** (top Z 12.7 → 14.7). Only the receiver changed; keeper overlap stays 0.6 mm.
- Governing FEA screen (receiver, distal roof lost, 0.55 mm mesh): 7.48 N → **10.30 N**.
- **Provisional rating 2.4 N → 3.4 N** (≈ 340 g at 1 g, SF 3). Untested.
- `build_n2.py` now has `DISTAL_OVERLAP` and `ROOF_EXTRA` parameters (env `N2_DISTAL_OVERLAP`, `N2_ROOF_EXTRA`).
- Regenerated receiver STEP/STL/print STL, assembly STEP, viewer data.
- Sweep results: `project/analysis/p12_roof_sweep/`. Test plan load steps updated.

## P11 review — 2026-10-29
- FEA review of the 39 archived cases, first provisional rating (2.4 N), proof-test plan.
