# N2 analysis method and interpretation

## 1. Geometry and normalization

The authoritative solids are `geometry/N2/N2_adapter.step`, `N2_keeper.step`, and `N2_receiver.step`. They are exact copies of the original P6 solids used in P8. Their SHA-256 values are recorded in `input_manifest.json`, each frozen model configuration, and the individual result files. This archive is not analysis of a strengthened or simplified replacement shape.

All dimensions are millimetres and forces newtons. The CAD coordinate **+Z** is the direction in which the adapter leaves the receiver. Mini-solenoid withdrawal moves the keeper along +X. The retained-load model uses 1 N of total adapter extraction load. The adapter model receives a -1 N keeper contact reaction on its inner floor while its external payload flange is fixed; the keeper receives +1 N from the adapter and balancing guide reactions; the receiver receives the opposite keeper-guide reactions. This is the same assembled force path expressed as three component free bodies.

The solenoid housing and its clamp are not intended to carry this transverse retained payload force. They are therefore not assigned a fictitious fixed structural support in the keeper FE model. Actual fit, guide compliance, and unwanted solenoid/plunger side loading remain installation questions. The two small actuator clamp screws are not qualified as payload supports by this calculation.

## 2. Common effective PLA assumptions

| Property | Value | Status |
|---|---:|---|
| Young's modulus | 2,200 MPa | Assumed effective isotropic elastic value |
| Poisson ratio | 0.35 | Assumed |
| Density | 1.24 g/cm³ | Assumed material context; does not determine unit-load stress |
| Local tension threshold | 25 MPa | Analyst stress screen, not measured allowable |
| Local compression threshold | 40 MPa | Analyst stress screen, not measured allowable |
| Local maximum-shear threshold | 15 MPa | Analyst stress screen, not measured allowable |
| Temperature | 22°C | Nominal short-duration room-temperature condition |
| Fill | 100% / effective solid | No sparse-infill model |

The frozen material record is [material.json](material.json). Its supplier context is [Bambu PLA Basic technical data sheet](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf), which the P8 record cites for typical coupon values. Coupon data are not part allowables. In particular, these assumed thresholds do not establish properties of a chosen print orientation, moisture state, layer adhesion, seam, defect distribution, or actual print process.

The model does not give favorable directional-strength credit. It also does not explicitly solve weak-layer fracture, creep, temperature softening, fatigue, shock, damage, or plasticity. Purchased metal hardware remains metal; the comparison assumption applies to the three custom printed structural parts. No hardware is assigned PLA simply to make the model uniform.

## 3. Finite contact patches and hand equilibrium

### Both roof supports engaged

The nominal lug spans X = 26.8–28.2, so its axial thickness is 1.4 mm and its contact centroid is X = 27.5. The keeper retaining section is 3 × 3 mm. Its tip begins at X = 25.9.

The distal roof patch spans X = 25.9–26.5, centered at 26.2. The proximal patch spans X = 28.5–29.5, centered at 29.0. Both patches span Y = 8.5–11.5 in the centered case. Their total areas are 1.8 and 3.0 mm² respectively. With total load (P), vertical force balance and moment balance give:

\[
R_d+R_p=P,\qquad
R_d=P\frac{29.0-27.5}{29.0-26.2}=0.535714P,\qquad
R_p=0.464286P.
\]

The FE pressures are finite uniform patch tractions with force/moment audits; they are not point loads at the guide corners. Nominal average bearing pressures are (P/(3\times1.4)=0.238095P\) MPa on the lug, (R_d/(3\times0.6)=0.297619P\) MPa on the distal roof, and (R_p/(3\times1)=0.154762P\) MPa on the proximal roof, with (P) in N. These averages are useful equilibrium checks, not predictions of edge peak stress or failure.

For a simple beam check on the 3 × 3 mm keeper, (A=9\text{ mm}^2), (I=6.75\text{ mm}^4), and (Z=4.5\text{ mm}^3). This idealization helps identify bending and shear, but the actual FE solid also contains the yoke and local transitions. No standalone beam estimate is substituted for its three-dimensional result.

### Distal support ineffective

No load is assigned to the distal patch. The proximal roof patch remains X = 28.5–29.5, centroid 29.0; a far floor patch is X = 33–34, centroid 33.5. The floor reaction acts upward on the keeper, while the roof acts downward:

\[
R_a-R_b=P,\qquad
R_b/P=(29.0-27.5)/(33.5-29.0)=1/3,\qquad
R_a/P=4/3.
\]

The larger proximal reaction explains why losing the short distal support significantly reduces the screen. This case is a prescribed retained contact state, not a nonlinear simulation of the motion that loses support.

### Unequal contact across Y

The low-Y-half case restricts the lug and roof contact to Y = 8.5–10.0. It examines asymmetric web and guide loading. It does not exhaust all tolerance, angular misalignment, or payload-moment states.

The STEP audit in [audits/contact_plan_audit.json](audits/contact_plan_audit.json) checks patch locations and force-path geometry. It establishes the selected geometry, not physical contact occurrence. Keeper top Z = 10.2 and receiver roof underside Z = 10.5 are nominal CAD surfaces; the model assumes the permitted assembly motion seats the selected contacts. Verify this with the real print.

## 4. Boundary conditions

The adapter's exposed external payload face at Z = 19 is fixed in XYZ. The actual payload mounting screws, pod wall, and prying compliance are outside the model.

The keeper is a balanced free body with six scalar gauge constraints to remove rigid-body modes only: point A(22, -4, 6.5) fixes XYZ, B(34, -4, 6.5) fixes YZ, and C(34, 4, 6.5) fixes Z. Near-zero gauge reactions are checked. These points are numerical gauges, not added mechanical supports.

The receiver is evaluated with two ideal fixture models:

- **Full backing:** all selected underside nodes on Z = 0 are fixed in XYZ. This assumes a continuous rigid backing or bond. The result does not qualify an adhesive or a two-screw airframe joint.
- **Two-hole fixture:** actual exposed washer annuli at Z = 3.2 are fixed in XYZ. Centers are (5, 14) and (35, -10), inner radius 1.6 mm, outer radius 3.0 mm. The remaining base is free. Washer/bolt rigidity, no clearance motion, and no slip are idealizations. Bolt preload, fastener pull-through, airframe flexibility, and local joint failure are not solved.

The frozen JSON configurations contain all selectors, forces, support directions, refinement boxes, and original STEP hashes. Individual result `boundary_audit` arrays record selected areas, actual applied forces/moments, and fixture DOFs.

## 5. Element formulation and solution

The final frozen driver uses Gmsh meshes of the actual STEP solids, quadratic displacement tetrahedra (P2), and faceted linear boundary geometry. The stiffness is assembled with second-order integration. Linear systems use the archived sparse solver choice: SuperLU for eligible small systems or conjugate gradient with smoothed-aggregation algebraic multigrid. Each result records its actual method and iteration count.

Element-mean stress tensors are integrated for field display and uncalibrated smoothing diagnostics. The raw metrics evaluate the P2 displacement stress field at tetrahedron vertices and retain elementwise maxima. Consequently, sharp edges, ideal support boundaries, and contact discontinuities can produce mesh-sensitive local peaks. The color plot uses element-mean von Mises stress for orientation; von Mises stress is not the selected PLA threshold criterion.

With principal stresses ordered (\sigma_1\geq\sigma_2\geq\sigma_3\), the local index is:

\[
I=\max\left(\frac{\max(\sigma_1,0)}{25},
\frac{\max(-\sigma_3,0)}{40},
\frac{\sigma_1-\sigma_3}{2\times15}\right).
\]

Because the cases are linear and normalized to total (P=1\text{ N}), the raw crossing is (P_{cross}=1/\max(I)\). The assembly screen is the minimum of the corresponding adapter, keeper, and receiver values. It is neither a nonlinear collapse load nor a reliability-based working limit. No safety factor or environmental derating can repair an unvalidated contact/fracture assumption by itself.

Historical JSON key `raw_strength_threshold_N` means this raw local-stress crossing. `regularized.*.estimated_strength_threshold_N` refers to volume-weighted tensor averages within radii 0.4 and 0.8 mm. Those radii have no fracture calibration. They are retained diagnostics and are excluded from the reported assembly screen.

## 6. Results, convergence, and numerical checks

The archive contains 9 adapter solutions, 9 keeper solutions, and 21 receiver solutions: 39 total on 10 meshes. All three solids have nominal target mesh sizes 1.2, 0.8, and 0.55 mm. Refinement boxes target critical geometry; far-field sizes are larger, so these are not uniform meshes.

Three additional receiver washer cases use `refine_N2_receiver.json` with a 0.40 mm local target while retaining the previous 0.55 mm bulk recipe. The local targets cover the sharp roof/wall region and observed second-washer hotspot. Material, STEP, tractions, and fixtures are unchanged. Its 58,216 elements compare with 56,500 on the previous receiver mesh.

| Receiver case | 1.2 mm, N | 0.8 mm, N | 0.55 mm, N | Extra 0.40 local, N |
|---|---:|---:|---:|---:|
| Centered, full backing | 23.0975 | 22.1674 | 21.4975 | — |
| Centered, two-hole | 22.8783 | 16.5681 | 11.2638 | 12.5557 |
| Distal ineffective, full backing | 8.0407 | 7.7195 | 7.4830 | — |
| Distal ineffective, two-hole | 8.0862 | 7.7454 | 7.5273 | 7.6391 |
| Low-Y half, full backing | 21.4511 | 20.8680 | 17.8175 | — |
| Low-Y half, two-hole | 21.0423 | 17.1362 | 11.5779 | 12.9537 |

The nominal two-hole raw crossing changes by **11.47%** in the final local step; low-Y by **11.88%** and distal-ineffective by **1.49%**. Corresponding compliance changes are approximately 0.183%, 0.177%, and 0.094%. A stable displacement/compliance does not establish a stable failure load. The common 0.55 mm result remains the reported baseline; the higher local-refinement value is not selected as an improved rating. All 12 component/case convergence sequences are in `summary.json`.

Across the 39 archived solutions, maximum force balance error is (5.54\times10^{-11}\) N; moment error (1.29\times10^{-9}\) Nmm; relative free residual (9.88\times10^{-10}\); and gauge reaction norm (6.73\times10^{-13}\) N. Maximum absolute mesh/CAD volume discrepancy is 0.1146%. Mesh-quality records and hotspot element qualities are retained in `audits/mesh_audit.json`. These checks support numerical consistency of the chosen model; they do not validate the boundary conditions or physical capacity.

The prior generic bar/beam implementation check is summarized, with its source hash, in `audits/prior_implementation_benchmark.json`. Its beam displacement was within 0.8% of the specified Timoshenko comparison. That is an archived code check, not an N2 material/contact experiment. The full generic benchmark remains in the earlier P8 archive.

## 7. Historical provenance and physical limits

All original result files and their historical hashes are preserved. Thirty-four N2 records have the older serialized driver hash and five the final hash. Those hashes were sampled from the file at serialization; a process could have imported earlier code before a file edit. Older executing-byte snapshots were not preserved. Thus exact historical executing-byte identity cannot be reconstructed from the old hashes alone.

The final frozen driver is the authoritative **current replay implementation**, and its exact hash is verified before every replay. Known historical edits concerned cylindrical surface selection and configurable mesher/optimizer options with unchanged defaults. N2 has no cylindrical pressure patches, but that observation is not a substitute for a full historical replay comparison. P11 only verifies package relocation and prepare-only input mapping; it does not claim a new numerical validation campaign.

Physical qualification must address actual material/process variation, support seating, load eccentricity and external moment, fastener/airframe compliance, temperature, duration, cyclic service, and release throughout the complete stroke. Unlocking the lug and the payload clearing the aircraft are separate events. The historical P7 friction statics explain the transition in support and drag, but do not resolve nonlinear contact, edge deformation, actuator reliability, or departure aerodynamics.
