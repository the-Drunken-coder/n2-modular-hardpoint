# N2 P14 — supported cross-bolt hardpoint

N2 connects a small payload adapter to a fixed receiver using a printed cross-bolt. The bolt is supported by the receiver on both sides of the adapter while retained. A mini solenoid withdraws it; the payload must then move away under gravity or another external force.

| Item | Current configuration |
|---|---|
| Retained assembly envelope | 43.1 × 30 × 19.0 mm |
| Printed pieces | Receiver, adapter, keeper, clamp: four |
| Actuator | Adafruit 2776 mini spring-return solenoid |
| Clamp hardware | 2 × ISO 4762 M2 × 16 screws; 2 × ISO 4032 M2 nuts |
| Keeper bar section | 3 × 3 mm |
| Adapter lug thickness | 1.4 mm |
| Nominal distal engagement | 0.6 mm |
| Nominal powered stroke | 3.0 mm in +X |
| Nominal full-open axial clearance | 0.7 mm |
| Payload departure | +Z, supplied by the installation or payload |
| Prototype candidate material | Bambu PAHT-CF; supplied P14 print orientations remain unverified on real prints |
| Provisional load requirement | 0.454 kg (1 lb) including departing adapter/hardware, 2 g, straight +Z: 8.9 N design / 17.8 N sacrificial qualification target |
| Analysis basis | 33.68 N stress screen using PLA thresholds scaled by 47/31; 16.84 N arithmetic SF 2 allowance, no working-load rating |

The envelope excludes full wiring, controller, driver, host mounting hardware and payload departure space. The 13 modeled objects include the actuator's separately illustrated body, armature, spring and lead stubs; they are not 13 purchases.

## Read in this order

1. `mechanism.md`: what holds the payload and what changes during release.
2. `assembly_installation.md`: assembly order, mounting interfaces and operating procedure.
3. [Print guidance](../manufacturing/PRINTING.md) and [order list](../manufacturing/ORDER_LIST.md): fabrication, inspection and purchased parts. The original BOM masses/costs describe P11.
4. `../electronics/wiring.md`: complete local bench power/control and firmware setup.
5. [P14 test plan](../../docs/test-plan.md): current bench loads, gates and records. `verification.md` adds general test considerations.
6. [P14 analysis limits](../../docs/provisional-load-rating.md) and `../analysis/p14/`: current screens. The original `../analysis/summary.json` describes historical P11 geometry.

This is a selected development prototype. Its intended payload capacity has not been established by a manufactured test article. Departing load means the payload plus its adapter and all departing attachment hardware; receiver, actuator and carrier-side hardware add separately to aircraft mass.

Nominal geometry is traceable to the [CAD manifest](../cad/N2/manifest.json). Evidence and source boundaries are collected in [sources.md](sources.md) and [assumptions.md](assumptions.md).
