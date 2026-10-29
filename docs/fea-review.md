# N2 FEA review (sanity check of the 39 archived cases)

Reviewer pass, 2026-10-29. Read-only review of `project/analysis/` (P11 import). **No new solve was run.** Every number below comes from `results.csv`, `assembly_results.csv`, `material.json`, `METHOD.md`, or the result JSONs. Units: N, mm, MPa.

## What was modeled

| Item | What the files say |
|---|---|
| Parts | Adapter, keeper, receiver (actual N2 STEP solids). Purchased hardware not modeled as PLA. |
| Load | Linear, normalized to **1 N total extraction force in +Z**. Every stress is "MPa per N". Uniform finite contact patches, force/moment audited. |
| Contact states | `centered` (both roofs carry the keeper), `distal_ineffective` (0.6 mm distal roof overlap lost), `low_y_half_contact` (contact only on Y 8.5–10.0). |
| BCs | Adapter: payload face Z=19 fixed. Keeper: free body, 6 gauge DOFs only. Receiver: `bonded` = whole underside Z=0 fixed (ideal rigid backing); `washers` = two washer annuli at Z=3.2 fixed (ideal two-screw fixture). |
| Material | Isotropic linear elastic "effective solid PLA": E 2200 MPa, ν 0.35, thresholds tension 25 / compression 40 / max shear 15 MPa, 22 °C, 100% infill. No anisotropy, creep, temperature, fatigue, or plasticity. |
| Failure screen | I = max(σ1/25, −σ3/40, (σ1−σ3)/30); crossing load P = 1/I. |
| Elements | Quadratic tets (P2), Gmsh, target h = 1.2 / 0.8 / 0.55 mm (+0.40 mm local refine on 3 receiver washer cases). 9 adapter + 9 keeper + 21 receiver = 39. |

## Results at the 0.55 mm baseline (per 1 N)

| Part / case | Crossing N | σ1 peak | −σ3 peak | τmax | max disp, mm |
|---|---:|---:|---:|---:|---:|
| Adapter centered | 23.58 | 1.060 | 0.557 | 0.453 | 0.00183 |
| Adapter distal_ineff. | 23.58 | (identical to centered) | | | |
| Adapter low_y | 20.61 | 1.213 | 0.954 | 0.520 | 0.00206 |
| Keeper centered | 80.69 | 0.289 | 0.431 | 0.186 | 0.00032 |
| Keeper distal_ineff. | 41.76 | 0.599 | 0.888 | 0.333 | 0.00127 |
| Keeper low_y | 41.20 | 0.555 | 0.865 | 0.364 | 0.00054 |
| Receiver centered bonded | 21.50 | 1.163 | 0.545 | 0.524 | 0.00416 |
| Receiver centered washers | 11.26 | 1.272 | 3.551 | 0.958 | 0.01287 |
| **Receiver distal_ineff. bonded** | **7.48** | **3.341** | 1.048 | 1.506 | 0.01192 |
| Receiver distal_ineff. washers | 7.53 | 3.321 | 3.541 | 1.498 | 0.01655 |
| Receiver low_y bonded | 17.82 | 1.403 | 0.882 | 0.573 | 0.00539 |
| Receiver low_y washers | 11.58 | 1.444 | 3.455 | 0.932 | 0.01210 |

Displacements are tiny (< 0.02 mm/N); stiffness is not the concern, local stress is.

## Convergence

- **Governing case is converged enough**: receiver distal_ineffective 8.04 → 7.72 → 7.48 N (bonded); washers 8.09 → 7.75 → 7.53 → 7.64 N (0.40 local). ~1.5% change on last step.
- **Not converged**: receiver *washer* centered and low_y cases (22.9 → 16.6 → 11.3 → 12.6 N; ~11–12% swing at the last step, and 50% from coarse to fine). Peak sits at a washer edge (35.06, −6.99, 3.09), a stress singularity at an ideal fixed boundary. Treat these as "~11–13 N, mesh-sensitive", not a number.
- Adapter crossing drops monotonically 27.7 → 24.1 → 23.6 N (centered); small remaining drift.
- Keeper low_y is non-monotonic (37.85 → 37.88 → 41.20 N). Not governing, but flag it.
- Numerical health is good: force balance ≤ 5.5e-11 N, moment ≤ 1.3e-9 N·mm, volume error ≤ 0.115%.

## Flags / suspect items

1. **Adapter `distal_ineffective` = adapter `centered`, byte-identical numbers at all 3 meshes.** Plausible (the adapter lug load doesn't depend on which roof the keeper bears on), but it means that case adds no information. Confirm in the config that this is intended, not a copied file.
2. **Receiver washer cases peak at the ideal washer edge**: singular boundary, mesh-dependent, real answer depends on bolt/washer/airframe compliance that isn't modeled.
3. **Isotropic PLA with 25 MPa tension threshold**: no Z/layer weakness credit or penalty; the governing stress is tension on a thin roof, exactly where layer orientation matters.
4. **Contact seating is assumed**: the model presumes both roofs seat (nominal gap keeper top Z=10.2 vs roof underside Z=10.5). Not verified on a print.
5. **Solver provenance**: 34 of 39 records carry the older serialized driver hash; byte-identical historical replay not established (stated in README).
6. **Missing from the files**: measured print properties, print orientation per part, any temperature/creep/fatigue/shock case, off-axis or moment loads, fastener pull-through, loaded-release (holding FEA only), any physical test data.

## Governing case

**Receiver, `distal_ineffective`, 0.55 mm mesh: 7.48 N (bonded) / 7.53 N (two-hole). Criterion: tension.**
Peak at element centroid (28.76, 11.73, 10.55) mm, i.e. on the receiver **roof underside (Z≈10.5) at the edge of the proximal roof contact patch** (patch X 28.5–29.5, Y 8.5–11.5), just past its +Y edge. Cause: when the 0.6 mm distal overlap is lost, the proximal roof carries 4/3·P (hand equilibrium in METHOD.md §3) instead of 0.46·P.

The full-backing and two-hole fixtures agree within 1% for this case, so the result doesn't hinge on the mounting idealization. It does hinge on the contact state, PLA strength and print quality.

Mass equivalent at 1 g (from `assembly_results.csv`): 0.763 kg (1.68 lb). This is the **screen crossing**, not a capacity.
