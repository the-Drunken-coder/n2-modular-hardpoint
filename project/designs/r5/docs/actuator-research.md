# R5 actuator cost and packaging trade

Research date: **2026-10-30**. Prices are public single-unit US-dollar listings before shipping and tax. They are observations from the linked vendors, not quotations or price guarantees. Structured claims and source URLs are in [actuator-sources.json](actuator-sources.json).

## Selection

**Use the TowerPro MG90D from Adafruit, product 1143, for the compact R5 prototype.** Its verified listing is **$9.95** with horns and hardware. Its 4.8 V minimum supports a nominal 5 V system with some terminal-voltage drop. The current layout needs roughly 90° of motion and a 5.5 mm crank, so it no longer needs the longer operating angle that originally favored the $11.95 MG92B. Keep the direct sliding keeper and compact crank/yoke.

The manufacturer lists **2.1 kgf·cm stall torque at 4.8 V**, 0.10 s/60°, metal gears, double bearings and 13 g. Adafruit lists 13.4 g; use that larger value in the mass account before separately adding horn/linkage hardware. Stall torque is a comparison figure, not permissible continuous torque or a loaded-release qualification. Sources: [TowerPro MG90D](https://towerpro.com.tw/product/mg90d-2/) and [Adafruit 1143](https://www.adafruit.com/product/1143).

## Alternatives

| Candidate | Verified actuator price | Useful published data | Decision |
| --- | ---: | --- | --- |
| [TowerPro MG90D](https://www.adafruit.com/product/1143) | **$9.95** | 2.1 kgf·cm stall at 4.8 V; approximately 90° described travel; 12.2 mm narrow case | Selected for this shorter-stroke, 5 V layout, subject to measured angle and torque acceptance. |
| [TowerPro MG92B](https://www.adafruit.com/product/2307) | $11.95 | Approximately 180° travel, 5 V signal required; manufacturer minimum supply 5.0 V | More advertised travel and torque, but unnecessary for the current geometry and less supply-drop allowance. |
| [FEETECH FT1117M](https://www.pololu.com/product/3423) | $16.74 | 120° over 900–2100 µs; accepts 3.3 V signals; 20 g | Within the budget, but heavier and larger in plan, with no cost advantage. |
| [Mini 5 V solenoid 2776](https://www.adafruit.com/product/2776) | $4.95 | 3 mm throw / 80 gf listed; 1.1 A; 12.6 g | Insufficient direct travel and force; multiplying travel reduces available output force. |
| [Medium 5–6 V solenoid 3992](https://www.adafruit.com/product/3992) | $7.50 | 10 mm throw; 0.8 A at 5 V; 68 g | Cheap actuator, but high mass and unestablished loaded pull across the installed stroke. |
| [Pololu 100:1 MP 6 V gearmotor 2367](https://www.pololu.com/product/2367) | $23.95 | 10 × 12 mm gearbox; 220 rpm no load and 0.94 kgf·cm extrapolated stall at 6 V | This sourced example exceeds the actuator target before driver, end sensing and linkage. Its 6 V ratings cannot be assigned to 5 V. |

These are specific sourced examples. The table does not claim no cheaper generic motor or solenoid exists. Selecting one would require part-specific dimensions, output data, sensing and supply-chain characterization. A hobby servo already includes its driver, gears and position feedback. The hardpoint controller still cannot infer actual payload departure from a servo command.

## Mechanical dimensions and receiving inspection

Read the [manufacturer dimension-letter sketch](https://towerpro.com.tw/wp-content/uploads/2014/07/%E5%B0%8F%E9%A6%AC%E9%81%94%E5%B0%BA%E5%AF%B8%E6%A8%99%E7%A4%BA%E5%9C%96B.jpg) together with the product table:

| Letter | Interpretation from sketch | MG90D | MG92B alternative |
| --- | --- | ---: | ---: |
| A | Bottom to spline top | 32.5 mm | 35 mm |
| B | Main case length | 22.6 mm | 22.6 mm |
| C | Bottom to gearbox top | 28.5 mm | 31 mm |
| D | Narrow case width | 12 mm | 12 mm |
| E | Overall mounting-ear span | 31.5 mm | 31.5 mm |
| F | Bottom to lower mounting-ear face | 19.8 mm | 22.8 mm |

Use **12.2 mm** as the MG90D narrow-case reservation, because its supplier lists that larger dimension. This dimension becomes cartridge depth when the servo lies on its side. The shaft direction lies in the cartridge plane. Reserve horn, screw head, lead exit and bend space separately. The 28.5 mm case figure excludes the spline. Both supplied horns use 20 teeth according to Adafruit; this does not establish interchangeability with arbitrary 20-tooth horns.

Exact shaft offset, ear-hole sizes and supplied horn hole radii are not fully dimensioned. Receiving measurements must close those interfaces. The supplier’s [top photograph](https://cdn-shop.adafruit.com/970x728/1143-09.jpg) and [side photograph](https://cdn-shop.adafruit.com/970x728/1143-08.jpg) show the wire emerging on the short side near the output-shaft end, close to the case bottom. This establishes routing direction, not exact exit coordinates or bend radius. Reserve a continuous path and inspect the purchased lead. Do not scale the generic sketch or photos from pixels to invent certified dimensions. The CAD describes the acceptance reservation; it does not certify an unmeasured purchased unit.

## Operating angle and travel

The final CAD parameters remain authoritative. For a 5.5 mm crank and a 15° retained position:

    s(theta) = 5.5 * (cos(15°) - cos(theta)) mm
    s(105°) = 6.7361 mm
    s(100°) = 6.2677 mm

The supplier says approximately 90°, not a guaranteed minimum of exactly 90°. Keep a calibration reserve: a 15° → 100° nominal operating range uses 85°, while 105° remains the CAD clearance envelope. The **4.8 mm lug-clearance travel is nominal for a flat keeper**; it does not include the extra tip projection when the keeper rocks in its guide. The 6.2677 mm nominal stroke gives 1.4677 mm additional withdrawal before these allowances. Acceptance must use the **actual measured lug-clearance distance plus at least 0.5 mm**, including backlash, dimensional uncertainty and permitted keeper rocking.

The rounded conservative screening stack is 0.40 mm pin/slot backlash, 0.20 mm dimensional error, 0.20 mm angular/position error, **0.10 mm tilted-tip projection**, and 0.50 mm post-clearance reserve: **1.40 mm total**. Adding that stack to 4.8 mm nominal flat-keeper clearance requires **6.20 mm nominal travel**, leaving **0.0677 mm** beyond the rounded allocation. Using the specified 2° release-angle shortfall instead of the rounded 0.20 mm angular allowance gives:

    s(98°) = 5.5 * (cos(15°) - cos(98°)) = 6.078044 mm
    allocated minimum gap = 6.078044 - 4.8 - 0.40 - 0.20 - 0.10
                          = 0.578044 mm

That **0.5780 mm allocated minimum gap** exceeds the 0.5 mm requirement by only 0.0780 mm. It is a dimensional budget, not a measured clearance or a prediction of print accuracy. The small residual margin makes actual dimensional and loaded endpoint acceptance necessary. The 7.3 mm mechanical travel limit is not a commanded endpoint. A unit that cannot meet measured travel inside approved pulse limits is rejected; do not silently command it farther.

The follower reaches maximum height at 90°, requiring 5.5 mm above the shaft center. At the current shaft center Z = 9.5 mm, the follower center reaches Z = 15.0 mm. Sleeve radius, yoke wall, guide float and lid clearance are additional. Sweep the entire operating path; endpoint fits alone are insufficient. A 15° retained angle is not a dead-center latch, so power-off retention and power-loss behavior remain test gates.

## Force and torque screen

At an inherited 12 N axial screen and a 5.5 mm crank:

    T_ideal_max = 12 N * 0.0055 m = 0.066 N·m
    T_conservative_slot_screen = 12 N * 0.0055 m * (1 + 0.15)
                              = 0.0759 N·m
    T_stall_catalogue = 2.1 kgf·cm * 0.0980665
                     = 0.20594 N·m

The factor 1 + 0.15 is an illustrative upper-bound allowance for pin-slot friction, not a validated model of every guide reaction. The ratio 2.71 is catalogue stall torque divided by that screening demand. It excludes unknown moving torque, guide binding, supply sag, temperature and wear; **it is not an acceptance margin**. Compare measured available torque to measured complete-mechanism demand at every loaded position, with the project's 1.5 margin and measurement uncertainties. No continuous-duty or stall-current curve was obtained.

The mini-solenoid's 3 mm / 80 gf listing corresponds to 0.785 N. An ideal 2:1 travel multiplier to 6 mm would leave only 0.392 N before losses. That is below the previous several-newton withdrawal estimates. A trip sear could reduce actuator demand, but would introduce another latch and reset mechanism.

## Electrical and physical acceptance

Keep the validated switched power path, 5 V signal buffer, common ground, output gating and default-disabled startup. The MG90D supplier explicitly says the digital servo can hold position after PWM stops; removing the signal alone is not power isolation. Do not replace the power switch with a firmware-only signal stop.

Use the user’s fixed **nominal 5.00 V supply**; the published 4.8 V minimum permits at most 0.20 V of drop at the servo during motion. A 5.10 V upper test limit is an acceptance bound, not an instruction to raise the nominal supply. Retain the measured **4.80–5.10 V terminal-voltage test band** if the final electrical package retains it. The 3 A source allowance is capacity, not measured servo consumption. Record the actual unit's peak/RMS current and voltage at its lead during motion.

Before qualification: inspect purchased servo and stock horn; verify sufficient material around any enlarged follower hole; check full-motion casing and guide clearance; calibrate unloaded endpoints; measure torque, current, voltage and temperature during loaded travel; then run repeated releases, wear, power-loss and power-off-retention tests. Cheap catalogue hardware still requires those physical gates. No flight qualification is implied by CAD clearance or the price comparison.

## Sleeve procurement

The stainless reference geometry has a real catalogue counterpart: **HiroSugi CU-2006**, SUS303, 4 mm outside diameter, 2.2 ±0.1 mm bore and 6 ±0.1 mm length. The [manufacturer catalogue](https://us.c.misumi-ec.com/book/HSK1_USA_M01/pdf/0154.pdf) lists a **50-piece minimum order**. An allocated sleeve cost per hardpoint is not the cash cost of buying that pack. Any single-quantity alternative must match the specified dimensions, finish and tolerances; a quoted spacer price cannot silently stand in for an unverified part. No sleeve price was established from this catalogue.

The **selected R5 prototype sleeve is PATIKIL pta231201tt000007**, [ASIN B0CQF66RR7](https://www.amazon.com/dp/B0CQF66RR7), sold by PATIKIL US: ten smooth aluminum sleeves listed as **2.1 mm ID × 4 mm OD × 6 mm long**, observed at **$7.19 per pack**. That is **$0.719 allocated per sleeve**, while the first purchase still costs the full pack. Servo plus sleeve allocation is $10.67; buying one servo and the complete sleeve pack is $17.14, both before remaining hardware, printing, shipping and tax. The listed 2.1 mm bore lies at the lower edge of the reference sleeve's bore range, but alloy and tolerances are unspecified. Inspect the delivered outside diameter, length, free M2 passage, burrs and surface condition; retain repeated wear testing. No aluminum working-life equivalence to SUS303 is assumed.
