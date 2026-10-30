# Current N2 engineering context

**Current development: [N2 R5](../project/designs/r5/README.md). Previous proposal: [R4](../project/designs/r4/README.md). Preserved issued reference: P14.** R5 fixes the retained cartridge at **85.6 × 54 × 20 mm**, including its casing and lid, and fits the mechanism inside that envelope. It retains the selected keyed preload interface, reinforced receiver and 3.5 mm lug, with a guided keeper driven by the **TowerPro MG90D prototype actuator**. Its observed actuator price is **$9.95 before shipping and tax**, not a complete module price.

The cartridge installs upward from the wing's lower opening. Four screws accessed through a removable upper panel connect the structural receiver's captive nuts to a host mounting frame. The [interactive design page](https://n2-hardpoint-3d-changes.drunken.chatgpt.site) demonstrates this sequence and lets the casing be solid, ghosted or hidden. The wing is a one-off installation illustration, not a flight-qualified structure.

| R5 source of current instructions | Link |
| --- | --- |
| Package and fixed design requirements | [R5 package](../project/designs/r5/README.md), [requirements](../project/designs/r5/docs/requirements.md) |
| Interactive inspection | [Hosted viewer](https://n2-hardpoint-3d-changes.drunken.chatgpt.site), [viewer source](../project/designs/r5/viewer/index.html) |
| Actuator selection, cost and mass | [Actuator research](../project/designs/r5/docs/actuator-research.md), [cost and mass account](../project/designs/r5/docs/cost-and-mass.md) |
| Assembly and installation | [Assembly instructions](../project/designs/r5/docs/assembly.md), [electrical interface](../project/designs/r5/docs/electrical.md) |
| Computational validation and physical gates | [R5 analysis](../project/designs/r5/analysis/README.md), [engineering assessment](../project/designs/r5/docs/engineering.md), [qualification plan](../project/designs/r5/docs/qualification.md) |

The fixed nominal **5 V supply**, **0.454 kg total departing-mass input** and **2 g loaded-release target** carry forward. R5 supersedes the earlier footprint/bulk allowances and solenoid-first motion preference. Round-and-diamond locators and the full-seating interlock remain excluded; the positive equipment lock remains deferred. Aircraft-specific loads, reinforcement, payload power/data and any twin installation still require their own integration work.

The complete local R5 run contains **18 actual STEP-based FEA solves that passed their numerical checks**. That status does not qualify actuator output, assembled contact behavior, PAHT-CF strength, power-off retention or successful physical separation. No physical working-load or flight rating has been established. Older P14 and R4 results are not transferred to R5.

## Preserved P14 context

Everything below preserves the earlier **P14 engineering context**, including its four-print solenoid configuration, dimensional allowances, controls and numerical screens. References to “current,” “next” or “further work” in these historical sections apply to that recorded stage. Use the R5 links above for current development; do not apply the old footprint or actuator settings to R5.

## Decisions that govern further work

The user has now confirmed **2 g loaded release and a fixed 5 V actuator supply**. The next layout uses a roughly **Ø70 × 125 mm** nominal pod and **Ø70 × 250 mm** extended pod, an approximately **100 × 65 mm** mounting allowance, and compact one/two-case mechanism bulk. These rounded dimensions, a **100 g soft mass goal**, and **5 V / 3 A supply capacity per station** are engineering working values, not measured hardware or new issued CAD. The exact decisions and force accounting are in [next-design-brief.md](next-design-brief.md).

N2 remains the sole active mechanism. It uses four printed parts and a mini solenoid, with reliability against accidental release prioritized ahead of simplicity and ease of manufacture. Other mechanisms remain comparison history. P11 selected N2 without changing P6 geometry; P12–P14 subsequently changed the design. [P14](p14.md) · [Historical selection](../project/docs/selection.md)

The provisional carried-mass target is now **0.454 kg (1 lb)**, including the departing adapter and its attachment hardware. The earlier 10–15 lb requirement was withdrawn; the later 4 lb working assumption was superseded. Current loads are straight +Z extraction under an assumed 2g flight load factor. That simplified requirement does not qualify real off-axis forces, moments, vibration or glider separation. [Requirements](requirements.md)

| Quantity | Current value | Meaning |
|---|---:|---|
| Carried mass | 0.454 kg, provisional | Payload plus departing adapter and attachment hardware |
| Design extraction force | 8.9 N | 0.454 × 9.81 × 2, rounded |
| Sacrificial qualification target | 17.8 N | SF 2 times design force; a planned test, not a passed result |
| Earlier retained-state P14 stress screen | 33.68 N | Conditional scaled estimate for the original evaluated support cases; not governing over the later mounting/partial-overlap studies |
| Crossing divided by SF 2 | 16.84 N | Arithmetic screening estimate, not a working-load rating |

Sources: [requirements](requirements.md), [P14 analysis](p14.md), [P14 result summary](../project/analysis/p14/fea/B1.4_O0.6/summary.json). **No physical working-load rating has been established.**

The implemented scope is mechanical retention/release plus local bench actuation. Payload power/data, an aircraft-wide bus, direct RC integration, an ejector, departure sensing and a positive non-releasable pod lock remain outside this design.

## Physical configuration and motion

| Item | Current nominal definition | What remains to verify |
|---|---|---|
| Retained envelope | Approximately 43.1 × 30 × 19 mm | Wiring, mounting/backing and departure space are additional |
| Printed pieces | Receiver, adapter, keeper, solenoid clamp | Slicing, print fit, strength and repeatability |
| Actuator | One complete Adafruit 2776, including armature, return spring and leads | Purchased geometry, usable stroke, pull curve and spring preload |
| Clamp hardware | Two M2 × 16 screws and two M2 nuts | Fit and non-distorting clamp setting; these are not the aircraft mounting screws |
| Retention | 3 × 3 mm keeper through a 1.4 mm adapter lug | Actual overlap, contact, bearing faces and print quality |
| Unlocking | Keeper withdraws in +X through nominal 3 mm | Lost motion, binding and loaded travel |
| Departure | Adapter moves +Z under an external force | Complete clearance before keeper return |

Sources: [current manifest](../project/cad/N2/manifest.json), [CAD generator](../project/cad/build_n2.py), [assembly instructions](../project/docs/assembly_installation.md).

P14 bridges the proximal roof on both sides of the channel from X 28.5 to 31.7. The keeper linkage begins at X 32.0, beyond the bridge. Keeper body and arm now share the Z 7.2 underside for flat printing. The stem slot narrows from ±1.5 to ±1.0 mm, leaving nominal button bearing during spring return. [P14 changes](p14.md)

The nominal distal overlap remains **0.6 mm**; lug clearance occurs at approximately **2.3 mm** travel, leaving a nominal **0.7 mm** open margin in the 3 mm stroke. Distal support therefore disappears during about 1.7 mm of continued loaded withdrawal. The original P14 two-support and distal-lost screens both predict the adapter as governing, but they do not solve every intermediate contact state, friction or motion. Actual unlocking and payload departure must be observed separately.

## Manufacturing and mass accounting

**PAHT-CF is the candidate for the current P14 prototype.** PLA remains the historical comparison material and optional fit-trial material. Use the four supplied print meshes: receiver base to bed, adapter flange to bed, keeper flat underside to bed, clamp top bridge to bed. The overhang classifier finds no support-required area for these orientations, but the slicer and a physical bridge print have not confirmed the process. [Print requirements](print-requirements.md) · [Fabrication and inspection](../project/manufacturing/PRINTING.md)

Record filament lot, conditioning, nozzle, layers, orientation, slicer paths, dimensions and actual mass. A wall-count request, nominal 100% infill or a supplier coupon value does not establish the strength of these thin retaining sections.

The imported P11 BOM's 9.429 g ideal PLA print mass and 22.029 g partial subtotal belong to its original geometry/material basis. They are not measured P14 PAHT-CF masses. Current CAD volumes are in the [manifest](../project/cad/N2/manifest.json); weigh the fabricated parts. Count the adapter and all departing attachment hardware within the 0.454 kg target. Receiver-side hardware, wiring and controls contribute to the carrier's installed mass. [Historical BOM](../project/manufacturing/BOM.md) · [Current procurement record](../project/manufacturing/ORDER_LIST.md)

## Structural evidence and limits

P14 uses the frozen linear solver with component contact-load idealizations. The underlying PLA assumptions are E = 2,200 MPa, ν = 0.35 and tension/compression/maximum-shear thresholds of 25/40/15 MPa. The PAHT-CF screen multiplies crossing loads by the supplier Z-tensile ratio **47/31**; it does not substitute measured anisotropic PAHT-CF stiffness or failure properties. [P14](p14.md) · [Tool implementation](../tools/n2fea.py)

The original P14 receiver cases use ideal continuous backing. The [subsequent 35-case study](../project/analysis/validation_20261029/README.md) compares that idealization with fixed washer annuli and examines reduced overlap. On the refined receiver mesh, the centered PLA screen changes from **40.982 N with full backing to 12.986 N with ideal washers**; refined terminal-overlap screens are **6.745 N for the adapter and 6.574 N for the keeper**. These are model outputs, not measured failures. Actual backing flexibility, preload, contact redistribution and pull-through remain unvalidated, and some results remain mesh-sensitive.

The 33.68 N result is a stress-threshold crossing, not measured ultimate strength. The model does not establish layer fracture, creep, warm/wet material behavior, wear, back-drive immunity, vibration retention or loaded release. A supplier Z coupon mean is not a mechanism allowable or a complete safety-factor validation. [Evidence register](EVIDENCE_AND_READINESS.md)

### Preserved P8/P11 history

The original common-PLA study retains 39 scalar case solutions across 10 meshes; raw arrays and meshes are indexed in the original archive. Its baseline h = 0.55 mm assembly results were:

| Historical contact case | Full backing, N | Ideal two-hole fixture, N |
|---|---:|---:|
| Centered | 21.49745 | 11.26379 |
| Distal support ineffective | 7.48300 | 7.52730 |
| Low-Y half contact | 17.81746 | 11.57790 |

These are historical local stress screens for earlier geometry, not current P14 capacities. The separate local-refinement results and fixture differences should remain in the audit trail. [Historical analysis README](../project/analysis/README.md) · [Assembly CSV](../project/analysis/assembly_results.csv) · [Archive recovery](ARTIFACTS_AND_RECOVERY.md)

The historical withdrawal model's approximately 0.650 P nominal and 0.784 P adverse demand coefficients used assumed μ = 0.20 and selected contact branches. They are not measured friction, current P14 pull curves or a coupled release simulation. [Historical release model](../project/analysis/historical_release/README.md)

## Controls and existing records

The local bench setup uses a Pico H / SC0917, Adafruit 5648 MOSFET driver, ARM/FIRE buttons and a regulated 5 V supply. Wiring and pin mapping are in [wiring.md](../project/electronics/wiring.md). The initial 250 ms pulse and 10 s minimum off interval are development settings, not validated thermal/duty limits.

The 27 October firmware transcript records 16 passing host logic tests. It does not demonstrate hardware flashing, GPIO/current, actuator stroke, temperatures or mechanical release. No bespoke PCB exists, so there is no PCBWay fabrication quote. [Controller verification](../project/electronics/verification.json) · [Order list](../project/manufacturing/ORDER_LIST.md)

The P8/N4 direction correction and earlier competing-design studies remain decision history; N2 selection is not a claim of universal superiority across all fixtures. The old CAD regeneration/import reports apply to their original file hashes. [Comparison history](../history/README.md) · [Evidence and reproducibility boundaries](EVIDENCE_AND_READINESS.md)

## Next work

Use the recorded [next-design inputs](next-design-brief.md) for the selected keyed-seat, solenoid, backing and optional-lock concept. The earlier questions about rough envelope, release at 1 g versus 2 g, and whether 5 V is fixed are answered. Select the actuator from the whole-stroke force budget; then update CAD, contact/clearance expectations and evidence together.

Use the [P14 test plan](test-plan.md): inspect the slicer and prints, measure actual overlap and open margin, measure full-stroke actuator pull and demand, test retention and release on the actual mounting fixture, then address conditioning, wear, vibration and installation-specific departure. No physical test has been completed. The current analytical estimate must remain separate from any future demonstrated operating envelope.

