# R4 prototype mass and packaging

The reference estimate is **65.9 g retained on the host**, including the specified host attachment fasteners, and **11.4 g departing with the payload** for its adapter and attachment fasteners. Together these account for approximately **77.3 g of mechanical hardware**. No physical assembly has been weighed. The offboard electronics, added harness, host structure, payload container/content and test fixtures are excluded.

The calculation uses the part volumes and motion assignments in [the CAD assembly](../manufacturing/assembly.json). [The companion calculation record](mass-and-envelope.json) records the source hashes, part IDs, assumptions and unrounded values. It must be refreshed when the geometry or hardware changes.

## Mass account

| Item | Side of the interface | Reference mass | Basis |
|---|---|---:|---|
| Receiver print | Retained | 39.44 g | 37.212 cm³ × 1.06 g/cm³ |
| Keeper/yoke print | Retained | 0.89 g | 0.841 cm³ × 1.06 g/cm³ |
| Adapter/lug print | Departing | 5.00 g | 4.721 cm³ × 1.06 g/cm³ |
| HS-65MG servo | Retained | 12.50 g | Manufacturer value, excluding horn |
| Modified horn | Retained | 0.34 g | Modeled 0.295 cm³ × assumed 1.15 g/cm³ |
| CU-2004 sleeve | Retained | 0.28 g | Modeled 0.0351 cm³ × assumed 7.9 g/cm³ |
| Follower, servo-mount, horn-center and open-stop fasteners | Retained | 4.04 g | Fifteen modeled steel hardware items × assumed 7.85 g/cm³ |
| Four host screw sets | Retained | 8.40 g | Four M3×16 screws, eight small washers and four locknuts |
| Four payload screw sets | Departing | 6.36 g | Four M3×14 flat-head screws, four small washers and four locknuts |
| Four foam discs and adhesive discs | Retained | 0.04 g | Free foam volume plus nominal adhesive allowance |
| **Retained mechanism before host attachment hardware** | **Retained** | **57.5 g** | Receiver, keeper, drive, pads and local mechanism hardware |
| **Retained mechanism with defined host fasteners** | **Retained** | **65.9 g** | The specified 3 mm host-panel grip; panel itself excluded |
| **Adapter and defined payload fasteners** | **Departing** | **11.4 g** | The specified 3 mm payload-panel grip; panel itself excluded |
| **Combined mechanical package** | **Both** | **77.3 g** | Does not include the actual pod or either panel |

The [Bambu PAHT-CF data sheet, page 2](https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf) gives typical density **1.06 g/cm³**, making the three ideal solid prints **45.34 g**. Extrusion, voids, finishing and moisture can change the actual mass. Supports, brims and coupons are excluded.

The [Hitec specification](https://www.hiteccs.com/public/uploads/data_sheet/HCS_HS-65MG_Specsheetv2.2_10-1729888021.pdf) supplies 12.5 g excluding horn; it does not separately itemize lead mass. Weigh the actual servo and supplied lead together. Neither the HB-family STEP volume nor the illustrative `lead_reservation` is converted into an invented servo/cable mass.

Fastener and horn figures are **planning estimates**: threads, nylon nut inserts, head details and the molded horn are simplified. PORON uses its **uncompressed** Ø4 × 2.36 mm volume and [Rogers' selected 320 kg/m³ density](https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf), giving 0.038 g; compression does not remove mass. Adhesive adds about 0.003 g using an assumed 1.0 g/cm³, not a measured 467MP density.

Varying prints by ±10%, metal hardware by ±25%, and horn mass over 0.2–0.5 g, with servo mass fixed, gives **59–73 g retained**, **9–13.5 g departing**, and **68–87 g combined**. These selected budget sensitivities are not supplier tolerances, confidence bounds or guaranteed maxima. Actual weighing remains necessary.

Within the **454 g total departing-mass assumption**, the adapter and fasteners leave approximately **442.6 g** for the pod, contents and other departing equipment. This arithmetic does not establish a payload rating.

## Packaging account

Dimensions below are X × Y × Z, rounded to 0.1 mm. The retained pose and the operating sweep are different packaging checks.

| Included items | Retained pose | Through the 9.5 mm operating stroke |
|---|---:|---:|
| Retained module, excluding host attachment bolts/nuts | 100.0 × 55.0 × 27.4 mm | Approximately 100.0 × 55.0 × 29.6 mm |
| Mated mechanism and adapter, excluding host/payload attachment fasteners | 100.0 × 56.0 × 28.9 mm | Approximately 100.0 × 56.0 × 29.6 mm |
| Retained module with the specified host fasteners | 100.0 × 55.0 × 38.1 mm | Approximately 100.0 × 55.0 × 40.3 mm |
| Complete displayed assembly, including both sets of attachment fasteners | **100.0 × 56.0 × 49.6 mm** | **100.0 × 56.0 × 49.6 mm** |

The viewer's **49.6 mm** runs from host screw tips at approximately Z−12.3 to payload screw tips at Z37.3. The bare mechanism projects **27.4 mm** from mounting face Z−1.6; its horn reaches Z28.0 during motion, requiring **29.6 mm outward space** before installation allowances. The adapter makes the mated footprint 1 mm wider than the receiver base.

The operating sweep estimate analytically extremizes the exported rotating mesh vertices over 0–105.466° and includes the keeper's 0–9.5 mm translation. It is a nominal packaging calculation, not a tolerance allowance or exact continuous surface-clearance certificate. Reserve additional space for the actual lead, host strain relief, tool access, +X joint removal, −Y servo removal, and the payload's departure corridor. The exploded animation and translating payload are not installed envelopes.

Weigh the finished retained and departing assemblies with their actual fasteners; record conditioning, panel grip, harness and motion envelope. The provisional 100 g target remains unverified. An installed aircraft mass must additionally include its controls, wiring and support structure.
