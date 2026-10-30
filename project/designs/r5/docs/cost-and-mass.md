# R5 cost and mass account

**The actuator is $9.95. The modeled mechanical parts consume about $18.48–$21.98 per unit under the allowances below.** This is not a complete first-purchase checkout or a quotation for an assembled product.

Prices were checked on 2026-10-30, before shipping and tax. The structured [account](cost-and-mass.json) records the CAD/source hashes and each mass assumption.

## Consumed mechanical cost

| Item | US dollars per hardpoint | Basis |
| --- | ---: | --- |
| [MG90D servo, with stock horn/hardware](https://www.adafruit.com/product/1143) | $9.95 | Observed single-unit listing, 2026-10-30 |
| [One aluminum follower sleeve](https://www.amazon.com/dp/B0CQF66RR7) | $0.72 | Allocated from a $7.19 ten-pack; full first-pack cash cost is separate |
| Six PAHT-CF prints, with 15% process allowance | $4.81 | $100/kg planning filament price, not a current quotation; CAD solid mass plus 15% |
| Remaining generic screws, nuts and washers | $2.50–$5.00 | Unquoted consumed-hardware allowance, including cartridge, payload and host fasteners |
| Foam, adhesive and servo clamp pads | $0.50–$1.50 | Unquoted allocated-material allowance; does not buy full stock sheets |

The six nominal solid prints total **41.83 g**. At the explicit $100/kg planning assumption and 15% process allowance, their material consumption is $4.81. A slicer estimate and the actual filament invoice must replace this allowance before ordering.

Add an unquoted **$1–3** allowance for the wing-side harness/connector if needed. The controller, signal buffer, power switch and regulated supply are offboard and excluded. Reusing those aircraft or bench components changes the incremental cost; buying them new changes the checkout.

**First purchase:** one servo and a complete ten-pack of sleeves cost **$17.14** before the remaining hardware, material stock, shipping and tax. A full filament spool, foam sheet and several fastener packs can make the first prototype substantially more expensive than its consumed-parts total. No complete $20 checkout is claimed.

## Nominal mass

| Group | Estimated mass | Included |
| --- | ---: | --- |
| Retained cartridge | **56.78 g** | Five retained prints, listed servo, horn, follower, captive nuts, lid/clamp/stop hardware and pads |
| Departing interface modeled here | **7.03 g** | Adapter, four payload screws, free-volume foam and adhesive |
| Four aircraft mounting screws and washers | 4.98 g | Host hardware outside the 20 mm cartridge |
| Mechanical package subtotal | 68.80 g | The three rows above; excludes the pod and its mating hardware |
| Illustrative wing frame, if solid PAHT-CF | 40.65 g | Example geometry only; actual aircraft reinforcement is not specified |
| Illustrative hatch, if solid PAHT-CF | 12.06 g | Example panel only; actual skin material and retention are aircraft-specific |

The **0.454 kg departing-mass requirement includes the adapter and every departing fastener and mating component**. Do not add the adapter on top of a 0.454 kg pod and claim the same 2 g load. The receiver-side module and host hardware belong in the aircraft mass account.

The retained cartridge is below the earlier 100 g soft planning goal by itself. That does **not** establish a complete installation below 100 g: the illustrative solid frame and hatch, external wiring and controls add mass. Optimize and weigh the actual aircraft installation after its structural load path is designed.

## Calculation limits

Print masses use nominal solid CAD volume and the [Bambu PAHT-CF data sheet](https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf) typical density of 1.06 g/cm³. FDM voids, supports, finishing and moisture change actual mass. Metal hardware uses simplified CAD solids and an assumed steel density of 7.85 g/cm³; the aluminum sleeve uses 2.70 g/cm³ and the molded horn 1.15 g/cm³. These are planning estimates, not certified material identities or purchased-part masses.

Foam mass uses uncompressed geometry and the [selected PORON 4701-30 data](https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf) 320 kg/m³ nominal density. Compression does not remove mass. Adhesive and shim densities are explicit estimates. The modeled cable envelope is not separately added to the servo listing mass; the external service harness remains unmeasured.

Reproduce this account with `python project/designs/r5/analysis/cost_and_mass.py`. Weigh the completed cartridge and departing assembly before load testing.
