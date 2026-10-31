# R5 purchased parts

Prices are rough and unverified. Crank bolt and 12 mm sleeve dimensions were checked
against their supplier/manufacturer datasheets on 2026-10-31; the 2 mm spacer is
identified from its supplier listing. Stock and delivered
prices remain unconfirmed. Where no link is given, buy a part matching the spec.

| # | Qty | Part | Spec | Link | Approx. price (unverified) |
|---|---|---|---|---|---|
| P1 | 1 | Servo | TowerPro MG92B metal-gear micro servo, manufacturer operating range 5.0-6.6 V, 5 V signal logic. Use the project's fixed nominal 5 V interface; do not extrapolate a sag qualification. Includes horns and screws. | https://www.adafruit.com/product/2307 (maker: https://towerpro.com.tw/product/mg92b/) | $12 |
| P2 | 1 | Crank through-bolt | M2×20 DIN 965H / ISO 7046-2, 90° Phillips countersunk, A2; ≤3.8 mm head. Includes head in length. Prepare horn and assemble per ASSEMBLY.md | [Accu SIK-M2-20-A2](https://www.accu.co.uk/phillips-countersunk-screws/65894-SIK-M2-20-A2) | quote required |
| P3 | 1 | Horn centre screw | M2 x 4 pan head (supplied with the MG92B). Spare: M2 x 4 pan head, A2 | in servo bag | - |
| P4 | 2 | Servo ear screws | Supplied with the MG92B (self-tapping, ~M2 x 8) | in servo bag | - |
| P5 | 4 | Wing-to-body screws | M3 x 12 pan head self-tapping for plastic (thread-forming, e.g. DIN 7500 / "PT"-style), into 2.5 mm pilots 10 mm deep. Assumes a 3 mm wing skin; use skin + 9 mm | spec only | $0.10 ea, ~$6 per 100 |
| P6 | 4 | Adapter-to-payload screws | M3 x 10 flat (90 deg countersunk) head self-tapping for plastic. Heads sit flush in the adapter's countersinks. Use machine screws + nuts if the payload is not plastic | spec only | $0.10 ea, ~$6 per 100 |
| P7 | 1 | Servo extension lead | 3-pin JR/"Futaba" servo extension, 30 cm (cut to length for the harness) | https://www.adafruit.com/product/972 | $2 |
| P8 | ~30 g | Filament | PAHT-CF (carbon-fibre PA12), 1.75 mm. Current per-part mass estimates: generated out/cad.json; allow brim/waste separately | https://us.store.bambulab.com/products/paht-cf | quote required |
| P9 | 1 | Smooth running sleeve | CW508L brass, nickel-plated; 4.0 mm OD × 2.2 mm ID × 12.0 mm long, unthreaded; nominal 0.88 g | [Ettinger 005.51.123](https://www.buerklin.com/en/p/ettinger/spacer-bolts/005-51-123/17H1216/) | quote required |
| P10 | 1 | Crank washer | M2 DIN 125 stainless, 5.0 mm OD × 2.2 mm ID × 0.3 mm | [RS PRO 527347](https://us.rs-online.com/product/rs-pro/527347/70791028/) | quote required |
| P11 | 1 | Crank locknut | M2 DIN 985 nylon insert, 4 mm AF, height ≤3.0 mm; inspect supplied dimensions | [TR00000406-000](https://www.trfastenings.com/Products/Catalogue/nuts/Nylon-Insert/Cart/View/Thin/TR00000406-000) | quote required |
| P12 | 1 | Horn-side spacer | Nickel-plated brass, 4.0 mm OD × 2.2 mm ID × 2.0 mm long, unthreaded; pre-fit against horn before keeper insertion | [Ettinger 005.51.023, supplier listing](https://www.buerklin.com/en/p/ettinger/spacer-bolts/005-51-023/17H1208/) | quote required |

The servo horn is included with the MG92B. Use the single-arm horn.

The [Accu M2×20 datasheet](https://www.accu.co.uk/api/product-datasheet?id=65894)
specifies a 20 mm overall countersunk length, 3.8 mm head diameter (+0/−0.3),
1.2 mm head height and 0.4 mm pitch. The
[Ettinger sleeve datasheet](https://www.buerklin.com/Buerklin-Webshop-Site/rest;loc=de_DE/attachments/Buerklin-Webshop%253A%252FFiles_a83%252F17H1216-EN.pdf)
specifies the 12 mm length, 4/2.2 mm diameters, nickel-plated CW508L brass and
0.88 g nominal mass. The 2 mm spacer dimensions come from the linked supplier
listing; its manufacturer drawing was not independently retrieved. Inspect
both supplied metal parts. They form a **14 mm rigidly clamped stack**, with
the 2 mm part against the horn and the 12 mm part spanning the complete keeper
running surface. The seam must remain outside that moving contact envelope.
No unverified 14 mm one-piece catalog part is specified. Receiving inspection
and the assembled joint gates still apply; do not substitute the old 12/18 or
10/16 mm sleeve/bolt stacks.

External bench-control hardware and wiring are specified in [electronics/README.md](electronics/README.md). They are not included in the cartridge mass or the mechanical BOM subtotal.

The crank joint is through-bolted and clamped against its two metal spacers. It does
not thread into the plastic horn. Follow [ASSEMBLY.md](ASSEMBLY.md), including
the bare-pin installation sequence, measured **assembled sleeve-center radius**,
175° unloaded assembly-travel acceptance gate and the full **72×54.1×20 mm**
retained envelope. Current procurement links identify example parts; verify
availability and shipping before ordering. No order has been placed.
