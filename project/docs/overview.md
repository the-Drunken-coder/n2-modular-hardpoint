# N2 — supported cross-bolt hardpoint

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
| Current material basis | Solid-equivalent printed PLA, assumed properties from the existing analysis |

The envelope excludes full wiring, controller, driver, host mounting hardware and payload departure space. The 13 modeled objects include the actuator's separately illustrated body, armature, spring and lead stubs; they are not 13 purchases.

## Read in this order

1. `mechanism.md`: what holds the payload and what changes during release.
2. `assembly_installation.md`: assembly order, mounting interfaces and operating procedure.
3. [Print guidance](../manufacturing/PRINTING.md) and [BOM](../manufacturing/BOM.md): fabrication, inspection and purchased parts.
4. `../electronics/wiring.md`: complete local bench power/control and firmware setup.
5. `verification.md`: evidence limits and the next physical tests.
6. `../analysis/`: existing N2 analysis, actual input geometry and reproducible results.

This is a selected development prototype. Its intended payload capacity has not been established by a manufactured test article. Departing load means the payload plus its adapter and all departing attachment hardware; receiver, actuator and carrier-side hardware add separately to aircraft mass.

Nominal geometry is traceable to the [CAD manifest](../cad/N2/manifest.json). Evidence and source boundaries are collected in [sources.md](sources.md) and [assumptions.md](assumptions.md).
