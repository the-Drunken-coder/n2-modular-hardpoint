# N2 source and evidence map

## Project evidence

| Subject | Included record | Use and limit |
|---|---|---|
| Geometry and fit interfaces | [CAD manifest](../cad/N2/manifest.json), [active N2 metadata](../cad/N2/active_metadata.json), editable CAD source and STEP | Nominal dimensions; frozen source metadata may retain historical material notes, superseded by active PLA trial guidance |
| Geometry preservation | [CAD source provenance](../cad/SOURCE_PROVENANCE.json) and [frozen-file verification](../cad/FROZEN_FILE_VERIFICATION.json) | File and geometry continuity; not physical manufacturing evidence |
| PLA FEA | [Analysis summary](../analysis/summary.json), [material inputs](../analysis/material.json), actual result/mesh files | Prior linear analysis and sensitivities on current N2 geometry; no physical rating |
| Printed volumes and cost arithmetic | [BOM data](../manufacturing/bom.json), [reproduction script](../manufacturing/build_bom.py) | CAD-derived ideal solid PLA mass and historical cost inputs; not measured mass or complete checkout |
| Controller logic | [Firmware provenance](../electronics/provenance.json), [verification record](../electronics/verification.json), [test transcript](../electronics/host_test_output.txt) | Copied implementation and rerun host logic tests; hardware was not exercised |
| Physical tests | [Test priorities](verification.md), inspection and timing forms | Planned tests and blank forms only; no physical results are implied |

## Manufacturer references carried forward

These sources and the catalog-price record were accessed in the prior project on **2026-10-26**. This selection update does not claim a new supplier quote or refreshed availability check. The complete electronics mapping is also in [electronics/sources.json](../electronics/sources.json).

- [Adafruit 2776 product page](https://www.adafruit.com/product/2776) and [dimension drawing](https://www.adafruit.com/images/product-files/2776/2776diagram.jpg): purchased actuator envelope and listed electrical/stroke information. The listing does not provide the needed complete load/position/thermal characterization.
- [Adafruit 5648 driver](https://www.adafruit.com/product/5648), [pinouts](https://learn.adafruit.com/adafruit-mosfet-driver/pinouts), and [manufacturer design files](https://github.com/adafruit/Adafruit-MOSFET-Driver-STEMMA-PCB): purchased low-side driver, flyback and connection identification.
- [Raspberry Pi Pico documentation](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html) and [official pinout](https://pip-assets.raspberrypi.com/categories/610-raspberry-pi-pico/documents/RP-008309-DS-1-Pico-R3-A4-Pinout.pdf): non-wireless Pico H logic/pin identification. [Adafruit 5525](https://www.adafruit.com/product/5525) is the historical procurement example for Raspberry Pi SC0917.
- [Adafruit 367 buttons](https://www.adafruit.com/product/367): historical 20-pack procurement example, two contacts consumed.
- [MicroPython 1.25.0 RP2 API](https://docs.micropython.org/en/v1.25.0/rp2/quickref.html), [watchdog API](https://docs.micropython.org/en/v1.25.0/library/machine.WDT.html), [official Pico firmware downloads](https://micropython.org/download/RPI_PICO/), and [Raspberry Pi installation guidance](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html): target runtime and installation method.
- [Bambu PLA Basic material sheet](https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf): material context only. Published coupon values do not establish allowables for the issued N2 print process or this geometry.

Where a value is an analyst choice, nominal CAD dimension or provisional acceptance criterion, the documents label it accordingly instead of attributing it to a manufacturer.
