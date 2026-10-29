# P13 expanded simulations (2026-10-29)

Same frozen solver (`6d9b172…`), P13 STEPs (OVERLAP 0.6, ROOF_EXTRA 2.0, ROOF_FILLET 0.3), PLA screen 25/40/15 MPa, P2 tets at h = 0.55 mm. "Failure" = raw linear-elastic crossing of the stress screen (total payload N). Rating = failure / 3. Margin = failure / 4.0 N (the current rating). Full data: `project/analysis/p13_expanded/results.csv` (113 cases).

## 1. Existing cases re-run on P13

| Part | Case | Failure N | Rating N (SF 3) | Margin vs 4.0 N |
|---|---|---:|---:|---:|
| receiver | distal_ineffective_bonded | **12.09** | **4.03** | 3.02 |
| receiver | distal_ineffective_washers | 12.21 | 4.07 | 3.05 |
| receiver | centered_washers | 12.97 | 4.32 | 3.24 |
| receiver | low_y_half_contact_washers | 13.73 | 4.58 | 3.43 |
| receiver | low_y_half_contact_bonded | 28.69 | 9.56 | 7.17 |
| receiver | centered_bonded | 34.71 | 11.57 | 8.68 |
| adapter | low_y_half_contact | 20.72 | 6.91 | 5.18 |
| adapter | centered / distal_ineffective | 23.72 | 7.91 | 5.93 |
| keeper | low_y_half_contact | 41.20 | 13.73 | 10.30 |
| keeper | distal_ineffective | 41.76 | 13.92 | 10.44 |
| keeper | centered | 80.69 | 26.90 | 20.17 |

Governing axial case is unchanged: **receiver distal_ineffective_bonded, 12.09 N** (reproduces the P13 sweep exactly).

## 2. Off-axis pull (worst sign, distal_ineffective unless noted)

Load at angle θ from +Z; the transverse part is applied as shear on the same keeper contact patches (adapter floor patch / receiver roof patch). That is a **pessimistic assumption**: in the real part some side load goes into the socket walls, which this model does not include.

| θ | Receiver XZ | Receiver YZ | Adapter XZ (worst incl. low_y) | Adapter YZ |
|---:|---:|---:|---:|---:|
| 0 | 12.09 | 12.09 | 20.72 | 20.72 |
| 15 | 12.41 | 11.27 | **8.04** | 9.47 |
| 30 | 11.88 | 10.61 | **4.62** | 6.42 |
| 45 | 11.98 | 10.00 | **3.40** | 5.11 |
| 90 (pure side) | 13.48 | 9.59 | **2.55** | 4.37 |

Receiver drops at most ~17% (YZ 45°: 10.0 N → 3.3 N rated). **Adapter becomes governing off-axis**: peak at the keeper-floor patch edge (≈ X 27.9, Y 7.6, Z 10.4), in shear/bending of the floor. Rated (÷3): 15° 2.7 N, 30° 1.5 N, 45° 1.1 N, side 0.85 N.

Torsion / payload moment cases: not supported by the prescribed-contact model (socket-wall reactions aren't modeled). Moment about X is partly covered by `low_y_half_contact`.

## 3. Reduced interlayer strength (Z = build direction)

Element-mean stresses, layer-normal tension and interlayer shear limits scaled by k:

| Case | k = 1 | k = 0.75 | k = 0.5 |
|---|---:|---:|---:|
| receiver distal_ineffective_bonded | 12.09 | 11.06 | 7.37 (rating 2.5 N) |
| receiver distal_ineffective_washers | 12.21 | 11.20 | 7.47 |
| receiver centered_washers | 12.97 | 11.82 | 7.88 |
| adapter low_y_half_contact | 20.72 | 15.81 | 10.54 |

## 4. Mesh check, governing case

h 1.2: 12.05 N · h 0.8: 11.94 N · h 0.55: 12.09 N · local 0.4: 12.31 N. Spread ±1.5%; consistent with the earlier fillet sweep (12.17 N at local 0.4). Local 0.3 run was stopped (time).

## Verdict

- **4.0 N holds for straight (+Z, within ~15°) pull.** Governing case unchanged.
- **Not valid for angled or side loads.** Under the pessimistic off-axis model, the adapter floor limits the hardpoint to ~1.5 N at 30° and ~1.1 N at 45°. Either keep the payload pull straight, or model/print-test the socket-wall side load path before trusting more.
- If layer adhesion is half the coupon value, the axial rating falls to ~2.5 N; SF 3 is meant to cover that, but it uses up most of it.
