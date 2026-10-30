# N2 next-design brief: pod envelope, 2 g release and 5 V actuation

> **Superseded for current development by [R5](../project/designs/r5/README.md), recorded 2026-10-30.** This brief is preserved as decision history. Its approximately 100 × 65 mm mounting allowance, larger mechanism-bulk allowance and solenoid-first motion preference no longer govern the active design: R5 uses a fixed **85.6 × 54 × 20 mm enclosed cartridge** and the **TowerPro MG90D**, observed at **$9.95** for the actuator before shipping and tax. Use the [R5 requirements](../project/designs/r5/docs/requirements.md), [cost and mass account](../project/designs/r5/docs/cost-and-mass.md), [assembly](../project/designs/r5/docs/assembly.md) and [electrical interface](../project/designs/r5/docs/electrical.md) for implementation. R4 is the previous proposal; P14 remains the preserved issued reference. Historical dimensions, calculations and solenoid settings below are not rewritten or transferred to R5.

Decisions recorded **2026-10-29, America/New_York**. This brief records the user's answers and the engineering assumptions used to begin the next design. **P14 remains the active issued CAD.** These inputs do not claim that a revised mechanism, actuator or installation has already passed analysis or physical testing.

The numerical inputs are also recorded in [next-design-inputs.json](next-design-inputs.json). The three questions in the earlier CI handoff are answered sufficiently to proceed; exact fits, actuator selection and force margins are engineering work.

## Recorded decisions and working dimensions

| Item | User decision or existing requirement | Working design value |
|---|---|---|
| Typical pod | About one Coke can; normally no larger | Cylinder envelope **diameter 70 × length 125 mm** |
| Larger pod | Up to two cans end-to-end | Same diameter, **250 mm length**; retain both configurations in clearance/layout studies |
| Complete carried mass | No new numerical mass limit supplied | Retain **0.454 kg**, including payload, departing adapter and its attached hardware; a longer pod does not increase this allowance |
| Loaded release | Release at **2 g** | **8.9 N straight +Z extraction load** during withdrawal until geometric disengagement, using the retained mass requirement |
| Mounting footprint | Credit-card sized, roughly 20% larger acceptable | Aim for **85 × 55 mm**; allow approximately **100 × 65 mm** for layout |
| Mechanism bulk | About one or two AirPods Pro cases | Compact mechanism body roughly **60 × 45 × 45 mm** at the larger end; a wider, thinner mounting flange may use the footprint above |
| Installed hardpoint mass | Minimize mass; no numeric maximum given | **100 g soft planning target**, with lower mass preferred; assess any overrun against the resulting force and reliability benefit |
| Actuator voltage | **5 V fixed**; power implementation delegated | Regulated **5.0 V**, with a provisional **3 A supply-capacity budget per hardpoint** |
| Mechanical direction | Retain the earlier selected simple mechanism | Solenoid-first cross-bolt, preloaded keyed seat and broad backing; servo, round/diamond location and twin support remain alternatives |

The rounded sizes are engineering interpretations, not dimensions specified to manufacturing precision by the user. A standard 355 ml beverage can is approximately **66 × 122.22 mm** [S1]. An ID-1 card is **85.60 × 53.98 mm** [S2]. The footprint allowance interprets “20% larger” approximately in each linear dimension; it is not a promise of only 20% more area. The AirPods comparison sets bulk, not grams: the reference Pro 2 case is **60.6 × 45.2 × 21.7 mm** [S3]. The body target is distinct from a solid 100 × 65 × 45 mm box and may be redistributed during layout.

Installed mass accounting includes the receiver/keeper, actuator, module electronics, local harness, dedicated fasteners and backing. Report any aircraft-specific backing separately as well as in the installation total. Keep departing-adapter mass within the carried-mass requirement, so it is not counted twice in aircraft mass accounting. The 100 g goal is an engineering optimization target, not a user-selected acceptance limit or measured mass.

## Load accounting and release requirement

Use the project's existing `g = 9.81 m/s²` convention and total load factor; **2 g is not 2 g added to gravity**.

| Quantity | Calculation | Value |
|---|---|---:|
| 1 g comparison force | 0.454 × 9.81 | 4.45374 N |
| 2 g retention/release service force | 0.454 × 9.81 × 2 | **8.90748 N**, reported as 8.9 N |
| SF 2 retention proof/screen target | 8.90748 × 2 | **17.81496 N**, reported as 17.8 N |

The existing [P14 bench plan](test-plan.md#4-loaded-release-and-reset) already calls for 20 release/reset trials at 8.9 N per assembly. The user's answer confirms that target. **17.8 N is the separate retention proof/screen target**, not the requested release load. The proposed actuator force margin in [H2](concept-verification-20261029.md#h2--available-actuator-force-and-actual-latch-demand) is a separate force-budget criterion; do not multiply all three factors into a larger release-load requirement.

Release at 2 g is a reasonable design objective, but its extra actuator requirement cannot be assumed negligible. In the study's ideal two-contact sliding model, `F_sliding >= 2 * mu * P`. For the illustrative, unmeasured `mu = 0.2`, the payload-dependent term changes from **1.78 N at 1 g to 3.56 N at 2 g**. Spring force and other fixed contributions need not double; guide reactions, preload, skew and binding can alter the real demand. This arithmetic is not a measured PAHT-CF friction value or a qualified actuator requirement. [Mechanical model and assumptions](../project/analysis/validation_20261029/mechanical/README.md)

## Orientation and center of mass

The can analogy specifies a size range, not a known mass distribution. Keep pod orientation and CG position as explicit layout/analysis parameters. For initial end-mounted vertical layouts, uniform-density examples place CG **62.5 mm** and **125 mm** below the payload attachment plane. A distal-concentration sensitivity may place it near **250 mm**; this is a bounding study assumption, not the expected CG.

Use `M = r cross F`. A greater vertical CG distance alone creates **no bending moment under collinear axial load**. It matters when transverse force is present; in-plane eccentricity also creates moment under the axial force. For illustration, 8.90748 N acting 35 mm off axis gives 0.312 N·m, while an assumed 1 g transverse force at 125 mm gives 0.557 N·m. The transverse example is a sensitivity case, not a newly approved flight-load requirement. Offsets from the aircraft mounting plane additionally include the mechanism height.

The actual backing, fasteners and load path still need to be represented in the next CAD and analysis. Broad backing remains the first choice. The larger pod can also be examined with two support locations without assuming equal load sharing or simultaneous separation.

## Electrical design basis

The **5.0 V / 3 A** figure reserves up to **15 W of source capacity per hardpoint**. It does not force 3 A into a coil. At fixed voltage, a larger supply does not by itself increase the existing coil's force. Use a simple low-side MOSFET with an inductive flyback path; rate the selected driver, connector and wiring for the actual actuator current, pulse and thermal conditions.

For next-design characterization, use **4.75 V at the actuator terminals during the pulse** as the provisional minimum-voltage test point, in addition to nominal 5.0 V. This is an engineering voltage-drop allowance, not a supplier guarantee. Measure the terminal waveform rather than assuming the supply setting reaches the coil unchanged. The selected actuator must meet the full-stroke force requirement at the minimum voltage and permitted thermal condition [S6].

Keep the existing P14 bench settings: **1.3 A initial current limit, 250 ms command pulse and 10 s minimum off interval**, with the current ambient-temperature checks. These are development settings, not thermal ratings. A current-limited pulse is not nominal-voltage force characterization. No coil voltage, current limit or pulse-duration increase is authorized merely by reserving a larger supply.

The current Adafruit 2776 is listed at **5 V / 1.1 A**, with **3 mm travel and an 80 gf catalog point**, not a complete installed force curve [S4]. The existing Adafruit 5648 driver is listed for **1.5 A continuous / 3 A peak**, and its JST-PH connector for **2 A continuous** [S5]. Its unspecified-duration peak figure must not be treated as qualification of a new 3 A actuator path.

An Adafruit 3992 is a simple longer-stroke **screening candidate**, with a captive return spring, 10 mm catalog throw, approximately 0.8 A at 5 V and 68 g mass [S7]. Its official diagram has force/stroke curves at specified powers [S8]; those curves and catalog throw do not establish the required net force at every position for this design. It is not selected or ordered. Final actuator choice requires compatible force/stroke evidence and physical demand measurements; the extra packaging allowance alone is not enough.

The hardpoint interface is fixed at 5 V. Selecting an upstream converter depends on the aircraft supply and remains separate from this local mechanism brief. Payload battery interfaces and wing aerodynamic/asymmetry analysis remain outside this work.

## Evidence and next implementation work

No new geometry, FEA case, physical measurement or actuator qualification is claimed by this input record. The existing Actions checks still validate the identified P14 reference. The next design must update its CAD, contact model, clearance expectations, mounting assumptions and reference evidence together.

The implementation sequence is: lay out the seat/keeper and actuator candidates inside these envelopes; close the full-stroke force and clearance budgets; evaluate actual backing and partial withdrawal; then perform the physical protocols. PAHT-CF remains the prototype candidate and the optional positive equipment lock remains separate from drop mode. The previous questions about 1 g versus 2 g, fixed 5 V, and rough pod/footprint size are closed.

## Sources

- **S1:** [Crown 12 oz / 355 ml standard can](https://www.crowncork.com/beverage-packaging/products/beverage-cans/12oz-355ml-standard).
- **S2:** [ISO/IEC 7810 ID-1 dimensional definition](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A7810%3Aed-3%3Av1%3Aen).
- **S3:** [Apple AirPods Pro 2 case dimensions](https://support.apple.com/en-us/111834).
- **S4:** [Adafruit 2776 specifications](https://www.adafruit.com/product/2776).
- **S5:** [Adafruit 5648 driver specifications](https://www.adafruit.com/product/5648).
- **S6:** [Geeplus solenoid selection guidance](https://www.geeplus.com/selecting-a-push-pull-solenoid/).
- **S7:** [Adafruit 3992 specifications](https://www.adafruit.com/product/3992).
- **S8:** [Adafruit 3992 manufacturer diagram and curves](https://cdn-shop.adafruit.com/product-files/3992/3992_diagram.jpg).
