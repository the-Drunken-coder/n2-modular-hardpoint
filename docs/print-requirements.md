# P14 print requirements

**Current prototype: N2 P14 in Bambu PAHT-CF, subject to slicer, fit and material tests.** PLA remains the historical comparison material and an optional fit-trial material. Neither material has a qualified working-load rating for this hardpoint.

The current [requirements](requirements.md) use a provisional 0.454 kg (1 lb) carried mass, including the departing adapter and attachment hardware, at 2g: **8.9 N design force and 17.8 N sacrificial qualification target**. P14's **33.68 N scaled stress-screen crossing** and **16.84 N after division by SF 2** are analytical estimates, not demonstrated capacities. See [P14 evidence](p14.md) and the [test plan](test-plan.md).

## Material choice and evidence

PAHT-CF is the candidate for the next controlled print trial because the existing material study reports higher build-direction tensile strength and heat resistance than PLA. The supplier values below are coupon data, not allowables for this printed mechanism.

The recorded Bambu PAHT-CF TDS lists dry tensile strength of 92 ± 7 MPa in X–Y and **47 ± 5 MPa in Z**, with moduli of 3860 / 2180 MPa. Its recorded HDT is 170 °C at 1.8 MPa. These properties depend on the supplier's conditioning and test process. **Supplier Z denotes the print build direction; it is not a universal assembly-load direction.** [PAHT-CF TDS](https://store.bblcdn.eu/s8/default/91dea87af3414d878a0696d2c51b98f7/Bambu_PAHT-CF_Technical_Data_Sheet_V2.pdf)

The P14 estimate scales the earlier PLA stress thresholds by 47/31. It does **not** solve an anisotropic PAHT-CF material model, establish printed shear/compression allowables, or resolve creep and fracture. A matching Z coupon test is useful process evidence; reaching a supplier mean alone does not validate SF 2, the complete mechanism, or loaded release.

### Recorded material shortlist

| Material | Tensile X–Y / Z, MPa | HDT at 1.8 MPa | Role in this project |
|---|---:|---:|---|
| PLA Basic | 35 / 31 | Not used here | Historical comparison and optional fit trials |
| **PAHT-CF** | **92 / 47** | **170 °C** | Current prototype candidate; process and mechanism unqualified |
| PC | 62 / 56 | 117 °C | Alternative; recorded Z elongation 2.1% and Z impact 9.0 kJ/m² require their own assessment |
| ASA | 37 / 31 | 92 °C | No recorded Z tensile gain over the PLA reference |
| PETG-CF | 35 / 29 | 68 °C | Lower recorded Z tensile value than the PLA reference |

Sources: [PLA Basic TDS](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf), [PC TDS](https://wiki.bambulab.com/filament-acc/abs-asa-pc/a52afdccddfd448583d119587122c8c5.pdf), [ASA TDS](https://wiki.bambulab.com/filament-acc/abs-asa-pc/6eaf4c432d1d4014a1975e55a55ed00b.pdf), [PETG-CF TDS](https://store.bblcdn.eu/s8/default/7c4afe6d319b456d9f9c8db59647976e/Bambu_PETG-CF_Technical_Data_Sheet_V2.pdf). These are the existing study's source records, not new material tests. None supplies a mechanism-specific creep limit.

## Print process to record

Use the four current `*_print.stl` files and the detailed [fabrication/inspection instructions](../project/manufacturing/PRINTING.md).

- **Solid toolpaths:** request 100% infill and inspect every thin retaining section in the slicer. A wall-count setting does not guarantee a solid 1.4 mm lug.
- **PAHT-CF preparation:** the recorded TDS specifies drying at 80 °C for 8–12 hours in forced air, printing/storage below 20% RH, nozzle 260–290 °C and bed 80–100 °C. Use compatible equipment, the current filament profile and the chosen plate's adhesion instructions; record actual settings and conditioning.
- **Wear-resistant hardware:** hardened nozzle and extruder gears. The recorded supplier guidance recommends a 0.6 mm nozzle and allows 0.4 mm. For the first small-feature trial, use a hardened 0.4 mm nozzle and 0.16 mm layers as project starting settings, then inspect the actual paths. A nozzle/process change needs its own fit and strength evidence.
- **Environment:** record the enclosed-printer chamber conditions; the recorded TDS chamber range is 45–60 °C. An enclosure alone does not prove that temperature was reached.
- **No uncontrolled annealing:** supplier coupon conditioning is not an instruction to anneal these precision fits. If used, record and qualify the complete process after dimensional change.

## P14 orientations and bridge checks

| Part | Supplied print orientation | Required inspection |
|---|---|---|
| Receiver | Base to bed | Two keeper-channel roof bridges and two approximately 4.2 mm base-pocket bridges. Inspect for sag into running clearances and incomplete roof roots. |
| Keeper | Flat underside to bed | P14 body and arm share a plane; there is no raised-arm support requirement. Inspect the fork, narrowed stem slot and retaining tip. |
| Adapter | Flange to bed | Inspect the 1.4 × 4.6 mm hole ceiling, 1.4 mm lug and 1.3 mm side webs. |
| Clamp | Top bridge to bed, legs upward | Inspect actuator contact flatness and screw alignment. |

The [P14 overhang screen](p14.md) classifies the intended orientations as bridgeable without support, but it is a geometry classifier, **not a slicer result or successful print**. Confirm bridge direction, extrusion paths and clearances before printing. If the slicer requires inaccessible support on a sliding/load face, stop and revise the process or geometry; do not silently remove material to make the assembly fit.

The older P13 recommendation to rotate the receiver onto its −X end and the adapter onto its −Y side is superseded for P14. **Orientation still affects strength and fit.** Using a supplier Z tensile number does not make the estimate orientation-independent.

No part has been printed or tested. Record each specimen's revision, filament lot, drying/conditioning, nozzle, layers, temperatures, orientation, slicing project and measured dimensions before applying the [P14 test plan](test-plan.md).
