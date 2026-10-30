# R4 actual-STEP simulation record

**42 component/mesh solves; numerical_checks_passed.**

The numerical result does not establish a payload rating or physical release qualification.

## Inputs and fixtures

Payload: 0.454 kg, 2 g equivalent = 8.904438 N. Pad preload sensitivity: 3 N total. Purchased servo mass represented: 12.5 g; horn and connector allowances are reported in the BOM.

The receiver is fixed at four real host-mount annuli. The adapter is fixed at real payload-bolt annuli. Vertical keeper cases use six rigid-motion gauge DOFs and must have negligible reaction. The separate axial case fixes the tip end as an explicit blocked-keeper fixture and applies 12 N on its real follower slot wall.

All parts use the existing isotropic solid PLA comparison proxy: E = 2200 MPa and ν = 0.35. This is not a measured PAHT-CF material model. Any strength thresholds retained inside the legacy solver are excluded from the curated results because they are not qualified material allowables.

Assumed 1 g transverse/60 mm offset contact sensitivity. Positive-compression hard-seat and keeper couple; no aircraft model.

## Finest mesh results

| Part / case | h (mm) | Displacement (mm) | Raw tension (MPa) | Raw compression (MPa) |
| --- | ---: | ---: | ---: | ---: |
| adapter / lateral_1g_and_roll_60mm | 0.35 | 0.02767 | 15.401 | 8.443 |
| adapter / stroke_0p00mm | 0.35 | 0.01158 | 5.778 | 2.446 |
| adapter / stroke_4p50mm | 0.35 | 0.03389 | 14.779 | 20.341 |
| adapter / stroke_4p70mm | 0.35 | 0.03556 | 25.571 | 63.003 |
| keeper / coupling_axial_12N | 0.35 | 1.17299 | 29.809 | 10.573 |
| keeper / retained_tipping_sensitivity | 0.35 | 0.02080 | 7.241 | 9.060 |
| keeper / stroke_0p00mm | 0.35 | 0.00781 | 2.720 | 3.403 |
| keeper / stroke_1p00mm | 0.35 | 0.22480 | 6.842 | 10.819 |
| keeper / stroke_4p50mm | 0.35 | 0.06207 | 10.746 | 17.805 |
| keeper / stroke_4p70mm | 0.35 | 0.05909 | 27.995 | 58.055 |
| receiver / distal_support_lost | 0.85 | 0.02131 | 10.723 | 7.077 |
| receiver / lateral_1g_and_roll_60mm | 0.85 | 0.07598 | 13.151 | 10.377 |
| receiver / retained_2g | 0.85 | 0.01487 | 3.513 | 2.322 |
| receiver / retained_2g_preload | 0.85 | 0.01583 | 4.755 | 3.113 |
| receiver / servo_reaction_12N | 0.85 | 0.03090 | 3.785 | 4.169 |
| receiver / static_4g_sensitivity | 0.85 | 0.03070 | 8.268 | 5.435 |

## Mesh sizes and model size

The local h target applies inside the CAD-provided refinement boxes. The far field is coarser by factors of 2.6 for the receiver and 2.2 for the adapter/keeper. HXT generates linear boundary geometry; displacements use quadratic tetrahedral shape functions. Element and DOF counts are measured from each actual mesh.

| Part | Local h (mm) | Tetrahedra | Displacement DOFs |
| --- | ---: | ---: | ---: |
| adapter | 0.35 | 86,591 | 412,824 |
| adapter | 0.5 | 35,239 | 177,258 |
| adapter | 0.7 | 17,731 | 94,131 |
| keeper | 0.35 | 59,513 | 291,426 |
| keeper | 0.5 | 24,927 | 128,109 |
| keeper | 0.7 | 12,617 | 67,920 |
| receiver | 0.85 | 48,604 | 260,007 |
| receiver | 1.15 | 30,308 | 168,393 |

## Refinement sensitivity

| Part / case | Displacement change | Raw tension change | Raw compression change |
| --- | ---: | ---: | ---: |
| adapter / lateral_1g_and_roll_60mm | 0.72% | 5.76% | 4.17% |
| adapter / stroke_0p00mm | 0.99% | 5.84% | 34.81% |
| adapter / stroke_4p50mm | 0.40% | 13.19% | 9.10% |
| adapter / stroke_4p70mm | 0.39% | 6.58% | 12.60% |
| keeper / coupling_axial_12N | 0.02% | 29.52% | 36.58% |
| keeper / retained_tipping_sensitivity | 0.46% | 5.49% | 9.75% |
| keeper / stroke_0p00mm | 0.46% | 5.49% | 9.75% |
| keeper / stroke_1p00mm | 0.56% | 0.40% | 1.08% |
| keeper / stroke_4p50mm | 0.52% | 8.62% | 27.91% |
| keeper / stroke_4p70mm | 0.24% | 7.60% | 10.33% |
| receiver / distal_support_lost | 2.86% | 9.63% | 14.14% |
| receiver / lateral_1g_and_roll_60mm | 2.70% | 5.41% | 8.30% |
| receiver / retained_2g | 3.21% | 11.38% | 26.76% |
| receiver / retained_2g_preload | 3.16% | 6.22% | 13.87% |
| receiver / servo_reaction_12N | 2.87% | 2.30% | 15.03% |
| receiver / static_4g_sensitivity | 3.19% | 5.10% | 13.95% |

Changes compare the finest two meshes. Converged displacement does not imply converged local stress. The earlier 0.4 mm averaging neighborhood was undersampled and supplied no reliable strength criterion; this revision exposes raw stresses without using smoothing as safety credit.

Displacement figures show the real undeformed boundary triangles, colored by the mean corner-node displacement magnitude of each triangle. The table reports maxima over all quadratic nodes. Keeper values from the balanced traction cases are relative to their rigid-motion gauges; separate component maxima cannot be added to claim an assembled clearance.

## Numerical gates

Every solve must satisfy force error < 1e−4 N, moment error < 1e−3 N·mm, relative free residual < 1e−7, CAD/mesh volume error < 2%, and rigid-motion gauge reaction < 1e−4 N. Input STEP, configuration, material and solver hashes must identify the current run; archived evidence cannot satisfy the gate.

## Remaining physical evidence

- Prescribed component tractions and rigid fixtures, not an assembled nonlinear contact solve.
- Isotropic PLA proxy; no measured PAHT-CF directional stiffness, strength, creep or fatigue data.
- Raw stress peaks may be singular or mesh-sensitive; no allowable or payload rating is assigned.
- Servo shaft/horn gear capacity, fasteners, horn slot contact and gearbox failure are not solved.
- The 12 N axial coupling case is an imposed blocked-tip fixture sensitivity, not guaranteed available actuator force.
- Host compliance, fastener preload/slip/pull-through, vibration and combined real contact redistribution remain physical checks.

## Coupled crank/guide demand

The fixed sleeve slides in its slot. The following values include sleeve resistance, the moving vertical force offset, and signed reactions at the two long-guide stations. All friction coefficients are assumptions, and no servo force margin is declared from these calculated demands.

| Guide coefficient | Sleeve coefficient | Peak horizontal demand (N) | Peak shaft torque (N·mm) |
| ---: | ---: | ---: | ---: |
| 0.05 | 0.05 | 1.335 | 8.847 |
| 0.15 | 0.15 | 3.724 | 26.955 |
| 0.30 | 0.30 | 7.849 | 61.205 |
| 0.30 | 0.40 | 8.117 | 65.564 |

The nominal operating command is calibrated below the full geometric stop. Pin-slot free play, print dimensions and loaded angle error must meet the measured interface acceptance table; the CAD animation is not position feedback.

The companion bench plan and blank CSV require measured force margin over the whole withdrawal, repeated 2 g releases, restrained static holds, dimensional inspection and power-loss observations. No physical measurements were generated by this analysis.
