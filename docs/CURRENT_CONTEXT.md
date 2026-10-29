# Current N2 engineering context

This guide reconciles the source material imported on 29 October 2026. The selected package is P11, dated 27 October. The original source files remain unchanged under `project/`; linked records provide the detailed dimensions, equations, source provenance, and procedures.

## Decisions that govern further work

**N2 is the sole active mechanism.** The selected supported cross-bolt uses an integral distal support without adding another printed part or separate bracket. The other five mechanisms belong to the comparison history. P11 did not change P6 N2 geometry, strengthen a component, improve the actuator, or add test evidence. [Selection](../project/docs/selection.md) · [Project record](../project/project.json)

The earlier 10–15 lb carried-mass requirement was removed during simplification. No minimum load target or replacement load rating is established. Do not reinstate that withdrawn target, infer a capacity from an animation, or treat a calculated 1g mass equivalent as a permitted payload. [Prior project context](../provenance/PRIOR_CONTEXT_BRIEFING.txt) · [Context provenance](../provenance/context_sources.json) · [Current assumptions](../project/docs/assumptions.md)

The current system provides mechanical retention/release and local release-actuator control. Payload electrical contacts, payload data transfer, a shared aircraft bus, remote flight integration, an ejector, keeper/departure sensing, and a positive fixed-pod lock are outside the implemented configuration. Spring return is an actuator behavior, not proof of positive locking or fail-safe retention. [Overview](../project/docs/overview.md) · [Mechanism](../project/docs/mechanism.md)

## Physical configuration and motion

| Item | Current source definition | Engineering implication |
|---|---|---|
| Retained envelope | Approximately 43.1 × 30 × 19 mm | Excludes full wiring, remote controls, host mounting hardware, backing, and departure clearance |
| Custom printed pieces | Receiver, payload adapter, keeper, solenoid clamp | Purchased actuator components shown in CAD are references, not additional print parts |
| Actuator | One complete Adafruit 2776 mini solenoid, with captive armature, return spring and leads | Supplier geometry and actual hardware still require fit and travel measurement |
| Clamp fasteners | Two M2 × 16 screws and two M2 nuts | They retain the actuator clamp; host and payload mounting remain installation-specific |
| Keeper / adapter lug | 3 × 3 mm keeper; 1.4 mm lug | Retention depends on engagement, contact, guide roots and print quality |
| Unlocking motion | Keeper withdraws in +X, nominal 3 mm stroke | Actual net travel and linkage lost motion must be measured |
| Departure motion | Adapter departs in +Z under an external force | Coil energization alone establishes neither unlocking nor complete separation |

Sources: [mechanism dimensions](../project/docs/mechanism.md), [assembly instructions](../project/docs/assembly_installation.md), [CAD manifest](../project/cad/N2/manifest.json), [BOM](../project/manufacturing/BOM.md).

The nominal distal overlap is **0.6 mm**. The keeper clears the lug at approximately **2.3 mm** travel, leaving a nominal **0.7 mm** open margin within the 3 mm stroke. Distal support is therefore lost during about **1.7 mm** of continued loaded withdrawal. The retained two-support condition cannot be used as a full-stroke release condition. Actual tolerances, contact seating, guide reactions and actuator pull can alter the behavior. These dimensions are preserved from the issued geometry; this import makes no mechanical improvement. [Mechanism](../project/docs/mechanism.md) · [Historical full-stroke calculation](../project/analysis/historical_release/README.md)

## Material, mass and manufacturing

Use the active **PLA** print guidance. Original CAD manifests retain historical PETG descriptions so their bytes remain traceable; [active metadata](../project/cad/N2/active_metadata.json) and [printing instructions](../project/manufacturing/PRINTING.md) govern the current trial material. The analysis assumes solid-equivalent prints. A slicer label, nominal infill setting, or filament datasheet does not establish the actual strength of the small retaining surfaces.

The source BOM calculates **9.429 g** of ideal solid printed PLA and uses **12.6 g** as the supplier-listed solenoid mass, giving a **22.029 g partial subtotal**. This excludes fasteners, wiring, remote controls, mounting hardware and other installation items. The **0.644 g adapter** is departing mass and belongs in carried-side mass accounting. These are model and catalog values, not weighed assembly results. [BOM and mass basis](../project/manufacturing/BOM.md)

The four `_print.stl` files are the intended print exports. The remaining STL/STEP objects include reference actuator components and hardware. Keep the selected orientation, guide/contact geometry and inspection plan associated with the parts. [CAD instructions](../project/cad/README.md) · [Inspection record](../project/manufacturing/inspection_record.csv)

## Structural evidence and its limits

The retained study uses homogeneous isotropic PLA: E = 2,200 MPa, ν = 0.35, density 1.24 g/cm³, and assigned tension/compression/maximum-shear thresholds of 25/40/15 MPa. It assumes 22°C, solid-equivalent material and short static loading. These inputs are comparison assumptions, not qualified print allowables. [Material record](../project/analysis/material.json) · [Method](../project/analysis/METHOD.md)

There are **39 archived case solutions across 10 meshes**: nine adapter cases, nine keeper cases and 21 receiver cases. All scalar case JSON records are committed. The 39 field arrays and 20 mesh files remain in the fully indexed original ZIP. The baseline h = 0.55 mm assembly values are:

| Contact scenario | Full rigid backing, N | Ideal two-hole fixture, N |
|---|---:|---:|
| Centered | 21.49745 | 11.26379 |
| Distal support ineffective | 7.48300 | 7.52730 |
| Low-Y half contact | 17.81746 | 11.57790 |

These are **raw local stress-threshold crossings** from the specified linear models. They are not measured ultimate loads, safe working loads, proof loads, or release limits. See the [full-precision assembly CSV](../project/analysis/assembly_results.csv), [case summary](../project/analysis/summary.json), and [method](../project/analysis/METHOD.md).

The h = 0.4 mm local receiver refinement is a separate recipe from the baseline mesh. Its centered, distal-ineffective and low-Y two-hole crossings are approximately 12.56, 7.64 and 12.95 N. The original results retain those sensitivities; the higher numbers must not be selected as a new load rating. Sharp roots, finite pressure patches and ideal fixture edges remain influential. Real joint preload, backing flexibility, nonlinear contact take-up, layer fracture, creep and loaded sliding are not resolved. [Refinement records](../project/analysis/results/N2_receiver/h0.4/) · [Analysis README](../project/analysis/README.md)

Historical N2 withdrawal arithmetic gives peak demand of approximately **0.650 P** for the selected nominal μ = 0.20 branch and **0.784 P** for the adverse support/contact branch. Those are analytical friction coefficients multiplying retained force P, not measured pull curves or a coupled FEA release solution. A hypothetical actuator force allocation cannot establish an operating mass. [Historical release model](../project/analysis/historical_release/README.md)

## Controller and electrical context

The bench setup uses a Raspberry Pi Pico H / SC0917 (Adafruit 5525 listing), Adafruit 5648 MOSFET driver, ARM/FIRE buttons from Adafruit 367, and a regulated 5 V supply. The actuator, local controller, and remote controls are separate from the compact retained envelope. The complete original pin mapping, supply arrangement, limits, checkout and timing procedure are preserved in [wiring.md](../project/electronics/wiring.md). [Electronics source records](../project/electronics/sources.json)

The source firmware's initial **250 ms pulse** and **10 s minimum off interval** are development settings. They are not qualified thermal or duty-cycle ratings. The source includes 16 passing host logic tests recorded on 27 October, plus the transcript. No Pico, GPIO, current, stroke, temperature or loaded release was physically exercised for that package, and none was exercised during this import. [Controller verification](../project/electronics/verification.json) · [Transcript](../project/electronics/host_test_output.txt)

No bespoke PCB exists. There is no corresponding PCB fabrication quote or order to import. Historical 26 October cost records show a $5.99 consumed mechanism subtotal, and known subsets of $15.19 with prorated buttons or $17.44 with the whole button pack. Unpriced wiring/equipment/installation items and tax/shipping are excluded. Those figures are retained project records, not refreshed shopping quotes. [BOM](../project/manufacturing/BOM.md) · [Electronics sources](../project/electronics/sources.json)

## What the historical comparisons establish

The common-PLA P8 report compared normal loads. Its N4 +Z load does not represent that design's +Y extraction path. The P9 correction audits actual departure directions and reports a reference N4 extraction screen of about 2.47 N; the original normal-load value must not be reused as an extraction-lock capacity. N2 is also not universally strongest across modeled fixtures: N3 exceeds it in the cited two-hole comparison. Selection remains a user decision to develop N2, not a proof that it wins every numerical comparison. [Paired historical reports and explanation](../history/README.md)

The P6-C1 analytical comparison uses a different material/screening and friction basis and recommends other concepts for particular tests. It is historical decision evidence and does not override the later P11 active-design selection. Its standalone PDF and the PDF embedded in its source ZIP differ in bytes; the recovery inventory preserves both identities explicitly. [Artifact inventory](ARTIFACTS_AND_RECOVERY.md)

## Practical continuation

The next decisions depend on physical evidence: measured support engagement and open margin, full-stroke actuator pull versus mechanism demand, mounting/backing behavior, and complete separation under controlled conditions. The detailed existing plan keeps these gates separate from numerical screening. Record the actual service force/moment conditions before selecting qualification values. Do not silently change geometry while describing the original analysis as validation of the new part. [Evidence and readiness](EVIDENCE_AND_READINESS.md) · [Original verification plan](../project/docs/verification.md)
