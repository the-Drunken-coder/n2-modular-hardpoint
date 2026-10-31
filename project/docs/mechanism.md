# N2 P14 retention and release

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](../designs/r5/README.md); the specifications, files and results below apply only to the earlier package.

The current prototype candidate uses PAHT-CF. The [P14 design record](../../docs/p14.md) and [bench-test plan](../../docs/p14-test-plan.md) govern the 8.9 N design-load and 17.8 N sacrificial qualification targets. Neither is a demonstrated capacity.

## What carries the load

A +Z extraction force on the payload adapter loads the floor of its cross-hole against the printed 3 × 3 mm keeper. In the retained state, receiver roof regions on both sides of the lug react that force. The receiver then transfers it to the aircraft-side attachment.

The solenoid is an actuator, not the intended transverse payload support. Its rear button engages the printed keeper's open-top fork and supplies +X motion. The included spring tends to return the keeper when the coil is de-energized. Neither spring return nor an illuminated command LED proves that the keeper reached its retained endpoint.

## The 3 mm stroke budget

Dimensions below are nominal CAD values, in millimeters. They must be measured on prints and purchased hardware.

| Feature | X coordinate or travel |
|---|---:|
| Retained keeper tip | 25.9 |
| Distal roof region | 23.4–26.5 |
| Adapter lug | 26.8–28.2 |
| Proximal bridged roof region | 28.5–31.7 |
| Proximal floor and outer wall | Continue to 37.4; open above beyond 31.7 |
| Retained distal overlap | 26.5 − 25.9 = **0.6** |
| Travel until the tip clears the lug | 28.2 − 25.9 = **2.3** |
| Full-open keeper tip | 25.9 + 3.0 = **28.9** |
| Full-open axial clearance | 28.9 − 28.2 = **0.7** |

The distal support disengages after about 0.6 mm, before the adapter is unlocked at about 2.3 mm. Over roughly 1.7 mm of withdrawal, the keeper is still retaining the lug while supported only by the proximal guide. P14 anchors the proximal roof on both sides of the keeper channel and moves the link behind it. The two analyzed support states do not resolve contact migration or friction throughout this interval. That transition can control withdrawal force and binding. A strong retained state does not establish easy release.

## Release sequence

1. **Retained:** the spring-return keeper crosses the fully seated adapter lug and engages the distal receiver pocket. Inspect the actual tip and support overlap.
2. **Commanded:** the controller energizes the coil. The armature's rear button pulls the keeper fork in +X. Check that the keeper, not just the armature, moves.
3. **Unlocked:** the keeper tip has cleared the lug across the actual tolerance and skew range. The nominal 0.7 mm clearance is a budget, not a manufactured guarantee.
4. **Departing:** an external +Z force moves the adapter out of the receiver. The mechanism contains no ejector or departure sensor. The CAD viewer prescribes 22 mm of translation for illustration; it is not a dynamics simulation or a tested clearance distance.
5. **Reset:** once the payload is safely clear, coil current decays and the spring returns the keeper if the path is free. Reattach only with the adapter supported and keeper held open.

## Preventing unintended release

The retained cross-bolt geometrically blocks +Z motion. The unpowered spring biases the keeper toward that position. The off-board bench controller requires a fresh ARM/FIRE sequence and imposes a pulse/lockout sequence. These measures reduce specific accidental-command paths but do not establish a qualified retention safety function. The manual tab must be protected from straps, cables and accidental contact.

No independent non-releasable pod lock exists in this geometry. Removing coil power does not turn it into a positively locked fixed-pod attachment. A fixed-use configuration needs a defined and verified mechanical lock before it can be described that way; none was added by this selection.

## Loss of power, partial release and binding

Power loss from the retained state normally removes actuator force and leaves spring bias toward closure. During partial departure, however, the spring can recapture the adapter or jam against it. An incompletely seated lug can prevent full tip engagement while the tab appears nearly closed. Guide scars, a tilted adapter, insufficient stroke, softening, or a squeezed actuator clamp can prevent opening or return.

Support the payload before recovery. Disable upstream coil power while leaving the coil connected to its flyback driver, unload the mechanism, and inspect the interference before operating the manual tab. Do not force a loaded or jammed print and do not extend pulse duration to compensate for a mechanical bind.

## Release-force evidence

The historical P7 full-stroke hand model includes the disappearing distal support and yaw-related sliding friction. At an assumed coefficient μ = 0.20, its nominal peak withdrawal demand is about **0.650 P**, increasing to about **0.784 P** in an assumed ineffective-support/inset-contact case. Here P is retained internal normal force and the available actuator budget is net of the return spring.

Those coefficients are historical contact assumptions, not measured PLA friction or a release rating. They exclude unresolved local edge-pressure transitions and actual print/actuator behavior. Measure available pull and mechanism demand throughout the full stroke; do not infer a releasable payload from the structural FEA alone.

The N2-only calculations and replay script are retained in [historical release analysis](../analysis/historical_release/README.md). That hand model's point-contact position and the FEA's finite contact patch use different idealizations; their coefficients and stresses are not outputs from one coupled contact simulation. Nominal geometry and motion are defined by the [CAD manifest](../cad/N2/manifest.json) and [active metadata](../cad/N2/active_metadata.json).
