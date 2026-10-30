# R4 CAD source and manufacturing definition

Run from the repository root with the pinned CadQuery environment:

```sh
python project/designs/r4/cad/build.py --output /tmp/n2-r4-cad-new
```

The destination must be new or empty. The generator builds three structural printed bodies independently of the P14 geometry, adds every modeled fastener/pad/purchased moving item, exports assembly and individual STEP, print-oriented STL, lightweight triangle meshes, drawing sheets, BOM, a dimensional inspection contract and three optional fit coupons. It then checks all listed motion, departure, hardware and tool paths.

`parameters.json` is the **reviewed dimensional record for this fixed design revision**, not an unconstrained user-editable configurator. The source contains the exact CAD operations and explicitly rejects a changed dimensional record until its recorded SHA is intentionally updated with the corresponding reviewed CAD change. This prevents an edited parameter label from falsely describing unchanged geometry. A new revision requires fresh nominal checks and fresh FEA; changing the approval hash by itself is not a valid design update.

The manufacturer-linked `HS-65HB-vendor.step` is a case-fit reference downloaded from the HS-65MG product page. Its filename identifies HB while the selected actuator is MG; real MG case, horn, mounting fit, supplied screw and wire exit must pass receiving inspection. The purchased Micro25T horn is a drawing-based conservative envelope. Its matched spline teeth and retaining-screw thread are not reverse-engineered. The existing radius7.5mm hole is opened to2.1mm, and only the opposite arm is cut at4.5mm from the shaft. The active arm is kept. These are real secondary operations, not custom replacement servo internals.

The receiver's four bolted interfaces are the only support supplied to the analysis. No surrounding rail, aircraft backing, full-face adhesive bond or payload shell is assumed. The host and payload fasteners are shown for separate3mm bench panels; those panels are integration/test fixtures and are not part of the hardpoint. Payload screws are installed while the adapter is removed. The servo cable is an external clearance reservation; the host harness must provide strain relief without placing a cable tie under a flush mounting face.

Before keeper installation, leave the removable M3 open-stop screw out. Bench-assemble the keeper/horn/follower joint, slide that complete group in from+X, slide the servo from−Y onto the held horn spline, fit the two ear fasteners, then install the open-stop screw/washer/captured nut. The generator checks this assembly path. The stop is a service fastener, not a payload equipment lock.

The physical sleeve is **HiroSugi CU-2004**, a fixed stainless sliding follower. It is clamped against the horn by an M2 screw, washer and prevailing-torque nut. It does not roll. The yoke remains free between the horn and washer; its4.4mm slot provides nominal0.4mm diametral clearance around the4mm sleeve. The assembled stack and real part tolerances must be measured. Calibrate the operating open position to9.5mm nominal travel with at least0.5mm measured remaining clearance to the10.5mm mechanical stop. Mechanical stop contact is not used as a continuous servo holding command.

## Printing and finishing

Use the intended PAHT-CF material and the manufacturer's machine-specific temperature, enclosure and drying recommendations. Those process values cannot be inferred from the CAD. Starting geometric settings are0.20mm layers, six perimeter lines and100% infill in all three structural prints, with a hardened0.6mm nozzle. These are prototype starting settings, not measured material qualification. The linear elastic comparison model assumes an effective solid; sparse infill is outside that comparison.

Print the receiver on its flat mounting face; removable support is required below the deck where the geometric overhang report flags it. The long3.6mm keeper guide uses a short bridge roof. Remove support through the open underside/side access, inspect the entire channel with a light and square gauge, and reject trapped support. Print the adapter inverted on its broad payload mounting face; inspect its4.6mm lug-window bridge. Print the keeper flat on sideY8.5: bar, yoke and stop tab are one physical print. Remove brim and deburr all bearing surfaces without rounding the load-bearing contact floor or erasing the accepted dimensions.

Use the fit coupons to establish dimensional compensation with the intended machine and process. Achieve the **finished** acceptance bands in `dimensional-inspection.csv`, including at least0.1mm measured face clearance at the constrained keys. A good coupon fit does not qualify strength. No sliced toolpath, actual print, load test, wear test or material coupon result is represented as completed by this generator.

All generated files except `manifest.json` are hashed into its artifact map. The manifest also records all `.py`, `.json` and vendor `.step` dependencies in the CAD source tree. The reproducible validation workflow rejects stale package/source combinations.

## Retained reference and guide take-up

The nominal retained drawing already places the keeper top at Z17.2 against the guide roof Z17.2. The complete channel is Z13.6–17.2, preserving its3.6mm height and0.6mm downward unloaded float below the3mm keeper. The adapter floor contacts the keeper atZ14.2 and its underside remainsZ23.3, so the pad's1.77mm installed foam thickness is defined after take-up. The expanded yoke slot centersZ9.5–19 allow the sleeve to move throughout the crank stroke without its rounded ends carrying vertical retention load. The generator checks both roof and floor positions against the sleeve and stop hardware. Actual fit tolerance and deflection still require the recorded end-clearance measurements.
