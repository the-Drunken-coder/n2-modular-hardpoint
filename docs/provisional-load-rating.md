# N2 analysis load estimates — current P14 and superseded studies

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](EVIDENCE_AND_READINESS.md); the specifications, files and results below apply only to the earlier package.

**No working-load rating has been demonstrated.** This page keeps the historical "provisional load rating" filename for existing links. The values are stress-screen calculations, not measured breaking loads, qualified payload capacities or successful release loads.

## Current baseline: P14, PAHT-CF material scaling, SF 2

The current design is the bridged receiver roof and flat-print keeper described in [p14.md](p14.md), with lug 1.4 mm, distal overlap 0.6 mm and nominal 3 mm actuator stroke. Use the current [print instructions](p14-print-requirements.md) and [P14 test plan](p14-test-plan.md).

| Quantity | Value | Meaning |
|---|---:|---|
| Provisional carried mass | **0.454 kg (1 lb)** | Includes payload, removable adapter and attached hardware. |
| Assumed flight load factor | **2 g** | Design input; not a vibration specification. |
| Design load | **8.9 N** | 0.454 × 9.81 × 2, rounded. |
| Design SF | **2** | Chosen requirement, not evidence that uncertainties are covered. |
| Sacrificial proof target | **17.8 N** | 2 × 8.9 N; physical tests not performed. |
| Governing analysis screen | **33.68 N** | Adapter, selected straight +Z case, after material scaling. |
| Screen divided by SF 2 | **16.84 N** | Arithmetic estimate; 16.8 N rounded down. **Not a working-load rating.** |

Requirements source: [requirements.md](p14-requirements.md). Analysis source: [P14 selected summary](../project/analysis/p14/fea/B1.4_O0.6/summary.json). Legacy JSON keys such as `fail_N` and `rating_N` retain their original names; those labels do not establish physical failure or rating evidence.

### Reproducible interpretation

The frozen model uses effective isotropic PLA properties: E = 2200 MPa, ν = 0.35, and tension/compression/max-shear screen thresholds of 25/40/15 MPa. See [material.json](../project/analysis/material.json). The P14 tool multiplies the resulting load thresholds by **47/31**, using the PAHT-CF/PLA TDS Z tensile-strength ratio, and then divides by the selected SF:

```
Material scale = 47 / 31 ≈ 1.516
Adapter PLA screen ≈ 22.21 N
Scaled PAHT-CF screen ≈ 33.68 N
Arithmetic SF-2 allowance = 33.68 / 2 = 16.84 N
Requirement comparison = 33.68 / 17.8 ≈ 1.89
```

Small differences from multiplying displayed rounded inputs are expected; the saved summary is the recorded result. Material sources and process assumptions are linked in [print-requirements.md](p14-print-requirements.md).

| Selected P14 straight-pull component state | Scaled stress-screen crossing |
|---|---:|
| Adapter, keeper-floor loading | **33.68 N** |
| Receiver, both roofs effective | 59.17 N |
| Receiver, distal roof ineffective | 36.73 N |
| Keeper, both roofs effective | 114.9 N |
| Keeper, distal roof ineffective | 71.6 N |
| Keeper, half-width contact | 57.4 N |

The adapter governs these component checks. Both modeled receiver support states give the same assembly minimum; that does **not** cover every partial-engagement position.

### What the model does not establish

The receiver uses ideal continuous backing, not a validated two-screw mounting. Prescribed component loads do not reproduce a nonlinear frictional release path. The 47/31 factor is a surrogate material comparison, including unsupported extrapolation of the same ratio to compression and shear thresholds; it is not an anisotropic PAHT-CF simulation. Actual printed stiffness, directional failure, contact, temperature, moisture, creep and wear remain unverified.

The selected P14 mesh sizes are 0.8 mm for the receiver and 0.55 mm for the adapter. Earlier mesh variation cannot be assigned as a P14 convergence bound. A dedicated P14 mesh study and actual mounting evaluation remain open.

Straight +Z extraction is the only required load direction. For context, P14's XZ90 adapter screen is 4.25 N after material scaling, or 2.12 N divided by SF 2; socket-wall bearing is absent in that baseline. This is an off-axis model result, not a qualified capacity.

Passing a three-specimen proof test or obtaining a coupon mean of 47 MPa does not automatically validate the material model, release reliability or flight installation. No increase in claimed capacity follows automatically from a successful test.

## Superseded P11–P13 calculation record

**Historical comparisons only.** These values must not drive the current print files, test loads or operating instructions. The former 4 lb requirement and P11–P13 "ratings" are superseded by the P14 baseline above. None was physically qualified.

### P11 and P12 roof study

P11 used a 0.6 mm distal overlap; the distal-ineffective receiver state was treated as a credible reduced-support case. At the recorded 0.55 mm mesh, tensile stress per unit load was 3.341 MPa/N, giving 25 / 3.341 = **7.48 N**. The old SF-3 calculation was 7.48 / 3 = 2.49 N, rounded down to **2.4 N**. SF 3 was an analyst choice, not an established minimum that could qualify arbitrary prints.

P12 raised both guide roofs from Z 12.7 to Z 14.7, increasing roof thickness from 2.2 to 4.2 mm. Loads, material and baseline solver were held fixed. Recorded results: [P12 roof sweep](../project/analysis/p12_roof_sweep/).

| Roof increase | Distal-ineffective, ideal backing | Distal-ineffective, washer support | Both roofs, ideal backing |
|---|---:|---:|---:|
| P11 baseline | 7.483 N | 7.527 N | 21.497 N |
| +0.5 mm | 7.675 N | 7.718 N | 22.044 N |
| +1.0 mm | 8.518 N | 8.587 N | 24.469 N |
| **P12: +2.0 mm** | **10.297 N** | Not run | **29.573 N** |

The P12 SF-3 arithmetic was 10.297 / 3 = 3.43 N, rounded down to **3.4 N**. Only one global mesh size was run for that sweep.

A 1.2 mm distal overlap left only 0.1 mm nominal open lug clearance; 2.0 mm overlap could not clear with the 3 mm stroke. Increasing overlap alone did not improve the modeled distal-ineffective receiver. The selected nominal overlap remained 0.6 mm, preserving 0.7 mm geometric open margin. Recorded rigid CAD checks found no interference; these were not physical release tests.

### P13 fillet study

P13 retained the +2.0 mm roofs and added a 0.3 mm inside fillet at the channel wall/roof junction. Recorded results: [P13 fillet sweep](../project/analysis/p13_fillet_sweep/).

| Fillet radius | Distal-ineffective, ideal backing | Distal-ineffective, washer support | Both roofs, ideal backing |
|---|---:|---:|---:|
| 0 (P12) | 10.297 N | Not run | 29.573 N |
| 0.25 mm | 11.430 N | 11.540 N | 32.823 N |
| **0.3 mm (P13)** | **12.089 N** | **12.213 N** | **34.713 N** |

Fillets above 0.3 mm affected the archived flat load patches and were not solved with that unchanged load definition. A 1.0 mm fillet left only 0.01 mm geometric keeper clearance; ≥1.2 mm interfered. These rejected variants are not strength evidence.

Local refinement to 0.4 mm changed P13's distal-ineffective result from 12.089 to 12.167 N (+0.6%) and its centered result from 34.713 to 34.933 N (+0.6%). The corresponding sharp P12 results moved by about 6%. This is evidence for those particular P12/P13 meshes, not a P14 convergence study.

| Historical calculation | Arithmetic | Former rounded value |
|---|---|---:|
| P13 PLA, SF 3 | 12.089 / 3 | 4.0 N |
| P13 PLA, SF 2 | 12.089 / 2 | 6.0 N |
| P13 PAHT-CF scaling, SF 2 | (12.089 × 47/31) / 2 | **9.1 N** |

The historical PAHT-CF crossing was **18.33 N**, only about 3% above the current 17.8 N requirement. Older off-axis values belong to the [P13 expanded study](p13-expanded-sims.md), not P14.

The former instruction to accept SF 2 solely from a three-coupon mean, automatically scale a rating after a shortfall, or raise capacity following a proof test is withdrawn. Use the current P14 evidence limits and verification plan.
