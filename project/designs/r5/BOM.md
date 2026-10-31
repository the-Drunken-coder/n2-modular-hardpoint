# R5 purchased parts

Prices are rough and unverified. Links were checked with curl (HTTP 200, title matches) on 2026-10-30. Where no link is given, buy any part matching the spec.

| # | Qty | Part | Spec | Link | Approx. price (unverified) |
|---|---|---|---|---|---|
| P1 | 1 | Servo | TowerPro MG92B metal-gear micro servo, manufacturer operating range 5.0-6.6 V, 5 V signal logic. Use the project's fixed nominal 5 V interface; do not extrapolate a sag qualification. Includes horns and screws. | https://www.adafruit.com/product/2307 (maker: https://towerpro.com.tw/product/mg92b/) | $12 |
| P2 | 1 | Crank through-bolt | M2×16 DIN 965H / ISO 7046-2, 90° Phillips countersunk, A2; ≤3.8 mm head. Includes head in length. Prepare horn and assemble per ASSEMBLY.md | [Accu SIK-M2-16-A2](https://accu-components.com/us/phillips-countersunk-screws/65892-SIK-M2-16-A2) | quote required |
| P3 | 1 | Horn centre screw | M2 x 4 pan head (supplied with the MG92B). Spare: M2 x 4 pan head, A2 | in servo bag | - |
| P4 | 2 | Servo ear screws | Supplied with the MG92B (self-tapping, ~M2 x 8) | in servo bag | - |
| P5 | 4 | Wing-to-body screws | M3 x 12 pan head self-tapping for plastic (thread-forming, e.g. DIN 7500 / "PT"-style), into 2.5 mm pilots 10 mm deep. Assumes a 3 mm wing skin; use skin + 9 mm | spec only | $0.10 ea, ~$6 per 100 |
| P6 | 4 | Adapter-to-payload screws | M3 x 10 flat (90 deg countersunk) head self-tapping for plastic. Heads sit flush in the adapter's countersinks. Use machine screws + nuts if the payload is not plastic | spec only | $0.10 ea, ~$6 per 100 |
| P7 | 1 | Servo extension lead | 3-pin JR/"Futaba" servo extension, 30 cm (cut to length for the harness) | https://www.adafruit.com/product/972 | $2 |
| P8 | ~30 g | Filament | PAHT-CF (carbon-fibre PA12), 1.75 mm. Current per-part mass estimates: generated out/cad.json; allow brim/waste separately | https://us.store.bambulab.com/products/paht-cf | quote required |
| P9 | 1 | Smooth crank sleeve | Brass, nickel-plated; 4.0 mm OD × 2.2 mm ID × 10.0 mm long, unthreaded | [Ettinger 005.51.103](https://www.buerklin.com/en/p/ettinger/spacer-bolts/005-51-103/17H1215/) | quote required |
| P10 | 1 | Crank washer | M2 DIN 125 stainless, 5.0 mm OD × 2.2 mm ID × 0.3 mm | [RS PRO 527347](https://us.rs-online.com/product/rs-pro/527347/70791028/) | quote required |
| P11 | 1 | Crank locknut | M2 DIN 985 nylon insert, 4 mm AF, height ≤3.0 mm; inspect supplied dimensions | [TR00000406-000](https://www.trfastenings.com/Products/Catalogue/nuts/Nylon-Insert/Cart/View/Thin/TR00000406-000) | quote required |

The servo horn is included with the MG92B. Use the single-arm horn.

External bench-control hardware and wiring are specified in [electronics/README.md](electronics/README.md). They are not included in the cartridge mass or the mechanical BOM subtotal.

The crank joint is through-bolted and clamped against its metal sleeve. It does
not thread into the plastic horn. Follow [ASSEMBLY.md](ASSEMBLY.md), including
the bare-pin installation sequence, measured **assembled sleeve-center radius**,
175° unloaded assembly-travel acceptance gate and the full **65×51.4×20 mm**
retained envelope. Current procurement links identify example parts; verify
availability and shipping before ordering. No order has been placed.
