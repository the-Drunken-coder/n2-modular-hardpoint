# Actuator selection — development revision

Reviewed 2026-10-30. Requirements: nominal 5 V, at least 6 mm useful keeper withdrawal, a 3.5 mm lug, and eventual release of a 0.454 kg complete departing payload at 2 g. The user prefers a simple solenoid and accepts considering a servo. No load-isolating sear is assumed.

## Recommendation

**Keep Adafruit 3992 as a real solenoid packaging and bench-test candidate, not an approved actuator for loaded release.** It offers the required advertised travel, but its available force evidence does not establish adequate starting pull at 5 V. The 68 g actuator also consumes much of a provisional 100 g installed mass allowance before printed parts, hardware and electronics.

**The credible compact fallback is a Hitec HS-65MG servo driving the keeper directly through a crank/link.** Its published torque and much lower mass make it worth evaluating if the solenoid fails its force test. A servo replacement has not been designed or simulated in this revision. Its stall torque must not be treated as a usable continuous force rating.

No candidate is presently qualified for release at 2 g. Structural FEA and collision-free travel cannot establish actuator pull capability.

## Candidate screening

| Candidate | Published electrical/travel information | Decision |
|---|---|---|
| [Adafruit 3992](https://www.adafruit.com/product/3992) | 5–6 V; 10 mm throw; 0.8 A at 5 V; 6 Ω; captive, spring-return armature; 68 g | Solenoid development candidate. Force and thermal qualification remain open. |
| [SparkFun ROB-11015](https://www.sparkfun.com/solenoid-5v-small.html) | 5 V; vendor says actual throw is approximately 4.5 mm despite the older datasheet's 6 mm claim | Reject for the required 6 mm withdrawal. |
| [Olimex PUSH-PULL-SOLENOID-5V](https://www.olimex.com/Products/Components/Misc/PUSH-PULL-SOLENOID-5V/) | 5–6 V; 5 mm stroke; magnetic latching and polarity reversal | Reject for insufficient stroke and different return behavior. |
| [Hitec HS-65MG](https://www.hiteccs.com/actuators/product-details/HS-65MG) | 4.8–6 V; PWM position control; default ±60° travel | Compact alternative requiring a direct crank/link and separate verification. |

## 3992 CAD interface and limits

The [vendor drawing](https://cdn-shop.adafruit.com/product-files/3992/3992_diagram.jpg) shows a 26 × 22 × 25 mm body. Product prose says 27 mm long; reserve **27 × 22 × 25 mm** provisionally. The drawing shows two diagonal M3 × 0.5 mounting holes, with 15 mm axial and 12 mm transverse separation, and a Ø3 mm clevis hole. In drawing coordinates, hole centers appear at axial 6 and 21 mm from the rear face, transverse ±6 mm. These require sample confirmation before manufacturing a fixed adapter.

The drawing's 36 mm overall length describes one shown pose; its retracted/extended state is not explicit. The product's 55.4 mm armature-length entry is not reconciled by that drawing. Consequently the full swept envelope, shaft projection, exact axis height and clevis fit remain provisional. Midheight shaft placement is a CAD assumption.

**Pull direction matters:** energizing the clevis end pulls it toward the coil. For keeper withdrawal in +X, a direct clevis connection places the coil on the +X side. Using the opposite push end needs a deliberately designed coupling. The previous small actuator's button interface must not be assumed present or swappable.

## Why the longer solenoid is not yet selected for flight

The drawing gives force curves for 2.5, 5, 10 and 25 W and duty annotations of 100%, 50%, 25% and 10%, respectively. They are not an explicit minimum net-force curve for this installed 5 V assembly. Return-spring load, coil temperature and tolerances are not sufficiently specified for that claim.

With the listed 6 Ω resistance, the ideal cold estimate is **5² / 6 = 4.17 W**, approximately 0.83 A. The 5 W curve therefore cannot simply be assigned to a 5 V supply. The weak long-stroke portion of the low-power curves is a warning against assuming the larger actuator can overcome loaded keeper friction. A closed-gap or endpoint force is not the starting pull force.

Keeping the motion within the final 6 mm of a 10 mm actuator may improve the magnetic operating point, but requires appropriate stops and verified engagement geometry. It does not prove adequate force. Using all 10 mm requires checking the weaker initial part of that stroke. The actual selected CAD stroke must be used for the force comparison.

A provisional 5 V supply with 3 A capacity gives electrical headroom; it does not increase this coil's force at a fixed terminal voltage or establish a safe pulse duration. Installed coil temperature and the surrounding printed material constrain the allowed duty cycle.

## Servo fallback: documented capability and remaining work

The [HS-65MG manufacturer datasheet](https://www.hiteccs.com/public/uploads/data_sheet/HCS_HS-65MG_Specsheetv2.2_10-1729888021.pdf) gives, at 4.8 V:

| Item | Published value |
|---|---:|
| Stall torque | 1.8 kgf·cm = 0.1765 N·m |
| Peak-efficiency torque | 0.4 kgf·cm = 0.0392 N·m |
| No-load speed | 0.14 s / 60° |
| No-load / stall current | 180 / 960 mA |
| Case dimensions | 23.6 × 11.6 × 24.0 mm |
| Mass | 12.5 g excluding horn in the datasheet; product page lists 11.9 g |

For an illustrative 7 mm crank radius, torque divided by radius gives 25.2 N at stall and 5.6 N at the peak-efficiency point. These are ideal tangential equivalents, not guaranteed keeper forces. Link angles, friction, acceleration, voltage sag and thermal limits still matter. A 6 mm projected stroke needs approximately ±25.4° about the maximum-motion position in an ideal crank/slot arrangement, within the stated angular travel; this is a feasibility calculation, not finished linkage CAD.

A direct servo link preserves the basic loaded keeper concept without adding a sear. It changes power-loss and return behavior, so it cannot inherit the solenoid's spring-return assumption. An installed 5 V servo rail must remain within its specified 4.8–6 V operating range.

## Gate before calling an actuator selected

Measure net available withdrawal force over the actual installed stroke, with the real spring, coupling and current driver, at nominal and minimum terminal voltage, cold and after the intended pulse sequence. Measure loaded keeper extraction force separately with the chosen preload, print surfaces, tolerances and representative contamination. Compare the complete profiles with an explicit margin, then perform repeated releases with the 2 g equivalent suspended load and the most adverse intended moment. Log current, voltage, temperature, release time and failed attempts.

For the solenoid, include an exploratory 4.75 V terminal test if that is the chosen 5 V rail tolerance; do not present it as a published minimum-voltage guarantee. For the servo, require at least 4.8 V at its terminals. Until those measurements exist, the report and viewer must label the actuator as a candidate and the loaded-release result as unverified.
