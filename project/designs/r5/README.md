# R5 — credit-card hardpoint cartridge

**85.6 × 54 × 20 mm retained module; a lower-cost servo; installation from below
with screws accessed through a wing's top panel.** This revision designs the
mechanism inside a fixed box instead of adding a case to the larger R4 layout.

Open the [interactive cartridge and wing installation viewer](viewer/index.html).
The hosted viewer is at [the N2 design page](https://n2-hardpoint-3d-changes.drunken.chatgpt.site).
Use the cartridge tab's **Solid / Ghost / Off** casing control to inspect the
enclosure and structural skeleton. The wing tab demonstrates top-panel access,
bottom insertion, mounting screws and the installed package. Explosion operates
on manufactured parts, not the individual features fused into a printed body.

## Start here

| Document or artifact | Purpose |
| --- | --- |
| [Requirements](docs/requirements.md) | Fixed box, user decisions and explicit engineering assumptions |
| [Actuator comparison](docs/actuator-research.md) | Current prices, technical sources, selection and measurement gaps |
| [Assembly and wing installation](docs/assembly.md) | Parts, installation order, top access and service |
| [Engineering](docs/engineering.md) | Load path, calculations, tolerance budget and what was verified |
| [Cost and mass](docs/cost-and-mass.md) | Quoted actuator cost versus estimated consumed material/hardware |
| [Electrical interface](docs/electrical.md) | 5 V, buffered control, connector, calibration and power behavior |
| [Manufacturing BOM](manufacturing/bom.csv) | Physical parts and hardware |
| [CAD source](cad/build.py) | Editable generator for the cartridge and wing demonstration |
| [Assembly manifest](manufacturing/assembly.json) | Exact physical grouping, motion and download paths |
| [Verification record](analysis/evidence/verification.json) | New geometry's checks and source identity |

## What changed from R4

The outer footprint shrinks from 100 × 55 mm to 85.6 × 54 mm and the retained
depth is fixed at 20 mm. A side-mounted TowerPro MG90D replaces the more
expensive HS-65MG. Its short crank provides only the travel needed to clear the
3.5 mm lug with an explicit tolerance allowance. The receiver carries the keeper
and installation loads; removable outer panels provide the enclosure and
inspection access.

The actuator listing is $9.95 before shipping and tax as checked on 2026-10-30.
That is the servo price, not the price of a complete assembled hardpoint.
The cost account separates quoted parts, engineering allowances and reusable
bench equipment. No hardware has been ordered.

## Status

This is a dimensioned prototype design. CAD validity, motion checks, calculated
release demand and any fresh component simulation are identified separately in
the verification record. Purchased-part fit, actual print dimensions, assembled
loaded release, wear and aircraft mounting strength require measurement. The
wing is an installation illustration; neither it nor R5 has a flight-load rating.

R4, the earlier modular-core study and issued P14 remain available as historical
references. Their test counts and numerical results are not reassigned to R5.
