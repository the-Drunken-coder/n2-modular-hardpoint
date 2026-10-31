# N2 order list

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](../designs/r5/BOM.md); the specifications, files and results below apply only to the earlier package.

Everything needed to build one N2 and run the bench tests. Prices and stock were read from each product page on 2026-10-29. They are not quotes; check again at checkout.

Printed parts (receiver, adapter, keeper, clamp) are printed in-house in PAHT-CF, about 10 g total.

## Required

| # | Item | Qty to order | Used | Link | Price seen | Stock seen |
|---|---|---:|---:|---|---:|---|
| 1 | Mini push-pull solenoid, 5 V (Adafruit 2776) | 1 | 1 | [adafruit.com/product/2776](https://www.adafruit.com/product/2776) | $4.95 | In stock |
| 2 | M2 × 0.4 × 16 mm socket head cap screw, 18-8 stainless, DIN 912/ISO 4762 (Bolt Depot 6367) | 4 (2 spare) | 2 | [boltdepot.com 6367](https://boltdepot.com/Product-Details?product=6367) | $0.19 ea ($13.24/100) | Listed |
| 3 | M2 × 0.4 hex nut, 18-8 stainless, DIN 934, 4 mm AF × 1.6 mm (Bolt Depot 7362) | 4 (2 spare) | 2 | [boltdepot.com 7362](https://boltdepot.com/Product-Details?product=7362) | $0.07 ea ($2.21/100) | Listed |
| 4 | MOSFET driver, STEMMA JST PH (Adafruit 5648) | 1 | 1 | [adafruit.com/product/5648](https://www.adafruit.com/product/5648) | $3.95 | In stock |
| 5 | Raspberry Pi Pico H, SC0917 (PiShop.us) | 1 | 1 | [pishop.us Pico H](https://www.pishop.us/product/raspberry-pi-pico-h/) | $5.00 | In stock |
| 6 | Tactile buttons 6 mm, 20-pack (Adafruit 367), ARM/FIRE | 1 pack | 2 | [adafruit.com/product/367](https://www.adafruit.com/product/367) | $2.50 | In stock |
| 7 | 10 kΩ 1/4 W resistor, 25-pack (Adafruit 2784), driver input pulldown | 1 pack | 1 | [adafruit.com/product/2784](https://www.adafruit.com/product/2784) | $0.75 | In stock |
| 8 | STEMMA JST PH 3-pin to male header cable, 200 mm (Adafruit 3893), Pico → driver input | 1 | 1 | [adafruit.com/product/3893](https://www.adafruit.com/product/3893) | $1.25 | In stock |
| 9 | Half-size breadboard (Adafruit 64) | 1 | 1 | [adafruit.com/product/64](https://www.adafruit.com/product/64) | $4.95 | In stock |
| 10 | Male/male jumper wires, 20 × 150 mm (Adafruit 1957) | 1 | — | [adafruit.com/product/1957](https://www.adafruit.com/product/1957) | $1.95 | In stock |
| 11 | Bambu PAHT-CF filament, 0.5 kg | 1 | ~10 g | [us.store.bambulab.com/products/paht-cf](https://us.store.bambulab.com/products/paht-cf) | from $29.99 (typical $49.99) | Listed |

Adafruit 5525 (Pico H) was **out of stock** on 2026-10-29, so the Pico H comes from PiShop.us (MPN SC0917, same part).

Approximate total: Adafruit lines $20.30, Bolt Depot $1.04 (8 pcs at each price), PiShop $5.00, filament from $29.99. About $56 before shipping and tax.

## Optional (only if not already on the bench)

| Item | Why | Link | Price seen |
|---|---|---|---:|
| 200 g × 0.01 g pocket scale (AMIR, ASIN B07QZKD5JX) | Measure return-spring preload (need ≥ 0.26 N ≈ 27 g, target 0.52 N ≈ 53 g) by pushing the plunger on the pan | [amazon.com/dp/B07QZKD5JX](https://www.amazon.com/Digital-200g-0-01g-calibration-Electronic-Stainless/dp/B07QZKD5JX) | $18.99 (search index, not confirmed live) |

The 17.8 N proof test needs no purchase: hang a 1.82 kg dead weight (e.g. a water jug weighed on a kitchen scale) from the adapter.

## Assumed on hand

USB cable for the Pico, a 5 V USB supply rated ≥ 1.5 A (solenoid draws about 1 A), 1.5 mm hex key, filament dryer or oven for the 80 °C dry.
