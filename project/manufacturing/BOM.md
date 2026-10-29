# Historical P11 bill of materials and cost basis

**Historical record:** the quantities, PLA masses and cost arithmetic below describe P11, not the current P14 PAHT-CF prototype. Use the [current order list](ORDER_LIST.md), [P14 print requirements](../../docs/print-requirements.md) and current CAD part volumes. P14 printed masses and total installed mass remain unmeasured.

Four custom printed pieces and one complete purchased solenoid form the mechanism, held by two screws and two nuts. The actuator's frame/coil, armature, return spring and wire models are components of **one Adafruit 2776 purchase**, not separate procurement lines. Purchased metal hardware and electrical components are modeled for fit and explanation; they are not intended to be printed.

## Printed structure

| Piece | Quantity | File | Ideal solid PLA mass |
|---|---:|---|---:|
| Receiver, including both keeper supports | 1 | `cad/N2/N2_receiver_print.stl` | 6.438 g |
| Payload adapter | 1 | `cad/N2/N2_adapter_print.stl` | 0.644 g |
| Keeper with fork and inspection tab | 1 | `cad/N2/N2_keeper_print.stl` | 0.651 g |
| Solenoid clamp | 1 | `cad/N2/N2_clamp_print.stl` | 1.696 g |
| **Total** | **4** | 7,604.114 mm³ CAD solid volume | **9.429 g** |

Mass uses the analysis assumption 1.24 g/cm³: mass = CAD volume / 1,000 × density. This is an ideal solid-volume estimate, not a slicer estimate or measured part mass. The approximately **22.029 g known partial mechanism mass** adds the supplier-listed 12.6 g solenoid and excludes screws, nuts, full wiring, remote controls and host/payload attachment hardware. Carried load includes the departing adapter and its hardware in addition to the payload; the 0.644 g adapter estimate must not disappear from that accounting.

## Purchased parts

Prices below are **historical project observations recorded 2026-10-26** or explicit allowances. They were not refreshed for this N2 selection. None is an actual quote or paid order. Detailed machine-readable quantities, assumptions, unpriced items and sources are in [bom.json](bom.json).

| Part | Qty | Identity | Historical unit/consumed cost | Basis |
|---|---:|---|---:|---|
| Mini solenoid, complete | 1 | [Adafruit 2776](https://www.adafruit.com/product/2776) | $4.95 / $4.95 | Observed catalog unit price |
| M2 × 16 socket-head screw | 2 | ISO 4762 M2 × 16 | $0.25 / $0.50 | Allowance; manufacturer, grade, coating and pack price unselected |
| M2 hex nut | 2 | ISO 4032 M2 | $0.15 / $0.30 | Allowance; manufacturer, grade, coating and pack price unselected |
| MOSFET driver, remote | 1 | [Adafruit 5648](https://www.adafruit.com/product/5648) | $3.95 / $3.95 | Observed catalog unit price |
| Pico H, remote | 1 | Raspberry Pi **SC0917**, procurement [Adafruit 5525](https://www.adafruit.com/product/5525) | $5.00 / $5.00 | Observed catalog unit price; vendor was out of stock at that observation |
| ARM/FIRE buttons, remote | 2 used | [Adafruit 367](https://www.adafruit.com/product/367), 20-pack | $0.125 / $0.25 prorated | Observed $2.50 pack price; two used, twenty purchased in this example |
| 10 kΩ, ≥0.125 W resistor | 1 | Manufacturer/MPN unselected | Unpriced | Driver input pulldown |
| Wiring, terminals and USB cable | As needed | Manufacturer/MPNs unselected | Unpriced | Bench wiring lengths and rated terminations depend on fixture |
| Regulated 5 V source and instruments | 1 set | Record equipment used | Unpriced | Reusable external test equipment |
| Aircraft/payload mount fasteners and backing | As needed | Installation dependent | Unpriced | The two M2 clamp screws are not airframe mounting hardware |

ISO standard designations are not manufacturer part numbers. Fit and material selection for those procurement lines remain open; this package does not fabricate a supplier identity for them.

At an assumed PLA material budget of $25/kg, ideal print material is **$0.236**. The mechanism's consumed-material/parts subtotal is therefore **$5.99** before exclusions. Adding the three priced remote-control lines gives a **$15.19 known priced subset** using two prorated switches, or **$17.44** using the full example switch pack. Both omit every unpriced line, shipping, tax, other pack minimums, supports/purge, printer time and labor. They are not the cost to produce and qualify a complete installation.

To reproduce the historical quantities, run this command only in a verified extraction of the complete P11 archive. The generator refuses current P14 input to avoid mixing P14 volumes with P11/PLA labels:

```bash
python manufacturing/build_bom.py
```

## Electronics manufacture

The local release uses purchased boards and point-to-point bench wiring. No bespoke PCB is necessary, so no custom schematic/layout/Gerber fabrication package or PCBWay fabrication quote applies. The complete circuit and firmware are supplied under [electronics](../electronics/README.md).
