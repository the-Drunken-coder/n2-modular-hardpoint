# N2 local release electronics

The existing local bench controller is retained without functional changes. One **Adafruit 2776** solenoid mounts in N2; the **Adafruit 5648** driver, **Raspberry Pi Pico H / SC0917**, ARM/FIRE buttons, resistor and regulated supply remain outside the compact mechanism. There is no aircraft-wide architecture or payload power/data interface.

[wiring.md](wiring.md) contains the complete circuit, physical Pico pin assignments, supply arrangement, limits, programming instructions, checkout and command/unlock/clear test procedure. [sources.json](sources.json) preserves the historical supplier-source and cost records. [provenance.json](provenance.json) records the copied firmware's hashes.

Copy only `main.py`, `config.py` and `controller_core.py` onto the non-wireless RP2040 Pico H after installing the stated MicroPython 1.25.0 runtime. The desktop test file is not firmware. Legacy identifiers in source comments indicate code provenance; the active mechanism is N2.

## Initial bench settings

| Parameter | Setting | Meaning |
|---|---:|---|
| Coil supply | Regulated 5.0 V, ≥2 A source capability | Separate from the Pico's USB power; common ground only |
| Initial current limit | 1.3 A | Project checkout setting; a current-limited pulse is invalid for nominal-voltage force characterization |
| Command pulse | 250 ms | Development parameter, not a thermal or release rating |
| Startup/minimum off lockout | 10 s | Does not measure temperature or zero current |
| Before every ARM | Case within 2°C of measured ambient; supported, inspected mechanism | External operator check; no thermal sensor installed |
| Command output | GP9 / physical pin 12 | Driver `In`; external 10 kΩ pulldown at the driver |
| ARM / FIRE | GP12 / pin 16; GP13 / pin 17 | Normally-open contacts to GND, internal pull-ups |
| Watchdog | 1,000 ms | Backup reset, not a 250 ms hardware limiter |

The command LED cannot prove keeper motion, unlock or payload clearance. Full stroke, loaded withdrawal, actual return, complete separation, temperature and electrical behavior still require physical observation. The software and driver cannot remove a mechanical jam, and a shorted output device needs upstream supply isolation.

## Reproduction and evidence

From this directory:

```bash
python -m unittest -v test_controller.py
python -m py_compile main.py config.py controller_core.py test_controller.py
```

The package includes the new host-run transcript and verification record. These are software logic checks only. No Pico was flashed, no GPIO or coil current was measured, and no physical N2 release was demonstrated for this consolidation. `release_timing_record.csv` is a blank form for future measured trials.

No bespoke PCB was designed or submitted for fabrication; purchased COTS electronics make a PCBWay fabrication quote inapplicable.
