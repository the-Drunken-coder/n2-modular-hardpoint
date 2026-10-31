# Axial actuation load path of the assembly-entry yoke

The bare-bolt assembly opening breaks the lower-left connection of the yoke
frame. During withdrawal, the sleeve pushes the right slot wall. The force
returns through the upper bridge, the receiving left wall, and finally the
narrow keeper bar. All four sections need checking. During the brief over-center
part of an opening command, and during the prescribed closing jam, the sleeve
instead pushes the left wall directly toward the bar. A vertical retention
proof-load analysis does not exercise either complete axial load path.

Run `python project/designs/r5/analysis/yoke_strength.py`. Its nonzero exit gates
the service opening and over-center section screens and the defined closing-jam
section screen. The output records minimum sections, maximum load eccentricities,
the source force states, the selected allowable, and the assumptions. The
separately labelled proof-drag and full-stall sensitivities are not acceptance
requirements.

## Shared coupled force model

The service forces come from [`coupled_forces.study`](COUPLED_FORCES.md), using
the same inspected-position envelope as the torque screen. Pin/slot friction
changes the guide reactions; calculating payload-only guide drag and then adding
pin friction misses that feedback. The shared model balances the complete force
and moment system, enumerates positive guide-contact normals, follows the
shrinking tab-bearing interval, and removes the payload load when the leading
tip clears the tab. The clamped sleeve rotates with the horn, so its surface-slip
reversal includes sleeve radius as well as crank radius.

For the selected **guide X12.4–34.4 mm, shaft X47.4/Z6.3 mm, service force
8.9044382 N, and assumed friction coefficient 0.35**, the current numerical
screen gives:

| Quantity | Result | Meaning |
| --- | ---: | --- |
| Maximum opening force | 12.296961 N | Right slot wall, at 180 degrees |
| Corresponding vertical slot force | 4.303936 N | Already included in the guide-reaction solution |
| Maximum over-center closing force | 9.540188 N | Left slot wall, just beyond 180 degrees |
| Maximum required actuator torque | 49.618451 N mm | A different state, at 121 degrees |
| Working-torque ratio | 3.063439 | Assumed 50% of the sourced 5 V catalog stall torque divided by required torque |

These are the outputs of the stated two-dimensional, level-slot Coulomb model,
sampled in angle with contact-phase boundaries included. They are not measured
servo forces, a continuous contact proof, or a qualification of tilted-slot
normals, lateral binding, or elastic contact redistribution.

The section screen uses the maximum opening force with independent pin-height
bounds, and the adverse magnitude of vertical slot friction. This deliberately
removes favourable cancellation between force directions and lever arms. The
opening pin-height interval includes the inspected **±0.20 mm relative guide to
shaft Z error**; its low endpoint is 6.10 mm. The shared model's maximum opening
force occurs at that same low height. The actual signed force state is retained
in the report. Left-wall states remain a separate load path.

If the coupled model finds a loaded configuration with no finite admissible
sliding solution, this section calculation stops. It cannot publish a passing
strength result from the subset of configurations that happened to solve.

## Inspected sections and the asymmetric transition

The bridge is widened **only toward +Y**. Nominally it occupies
Y37.70–45.70 mm, with its centroid at Y41.70 mm, **1.50 mm away from the wall/bar
centerline**. Treating it as a centered 8 mm section would understate bending and
torsion from an adverse sleeve contact at the near Y edge.

The output's `required_as_built_minimum_sections` includes both lower and upper
bounds and is an inspection contract, not a claim of printer accuracy:

| Feature | Required finished dimensions or position |
| --- | --- |
| Left wall thickness in X | 3.50–3.70 mm |
| Right wall thickness in X | 3.00–3.20 mm |
| Upper bridge thickness in Z | 2.40–2.60 mm |
| Wall contact breadth and both guide-bar dimensions | 4.90–5.10 mm |
| Upper bridge breadth in Y | 7.90–8.10 mm |
| Bridge near Y face relative to wall/bar near Y face | Aligned within 0.10 mm |
| Bridge lower and upper Z faces | Within 0.10 mm of Z14.80 and Z17.20 mm respectively |
| Other section positions used for lever arms | Within the reserved 0.10 mm surface-position error |

The maximum bridge contact eccentricity is therefore
`8.10/2 + 0.10 = 4.15 mm`. The maximum narrow-wall contact eccentricity is
`5.10/2 + 0.10 = 2.65 mm`. The calculation uses 7.90 mm for bridge area and
4.90 mm for the wall and bar breadths. The maximum slot width is
`4.00 + 0.50 = 4.50 mm`; the maximum wall thicknesses also enter the moment arms.
It is inconsistent to inspect only minimum section area while leaving these
load-path distances unbounded.

The +Y extension has a continuous R0.80 mm underside blend at the sidewalls,
starting at Z14.00 mm and meeting the bridge underside at Z14.80 mm. The slot
cut removes the blend inside the opening. The contact walls below it remain
5 mm wide. The screen takes **no credit for the blend's extra area or for a
reduction in local stress concentration**: it carries the original narrow wall
section through the shoulder, checks the receiving wall down to the bar, and
checks a separate minimum 4.90 by 4.90 mm section where the left wall enters the
bar. Widening the bridge consequently cannot conceal a weak narrow transition.

The former horn groove remains removed. A changed relief is rejected by this
screen and needs a new section model. The keeper must use the specified print
orientation, with layer normal along Y.

## Section calculation

For each rectangular section, the normal-stress bound includes axial force and
bending about both transverse axes. The bridge includes the pin-to-centroid
vertical lever, the vertical-force moment across the full slot, and the shifted
Y centroid. The right wall includes the contact-face offset. The receiving left
wall includes the full slot span plus its half-thickness. The bar-root section
includes the full left-wall thickness and, for opening, the slot span as well.
These are the moments of the force returning through the actual load path.

The wall's upper and bar-root sections bracket the linear variation of bending
moment through its transition. Maximum force, height, surface-position error,
and force-sign contributions are combined independently. This is conservative
within the beam-section model and does not assume their extrema occur together.

Transverse shear uses `1.5 V/A`. Eccentric force also causes torsional shear,
calculated with the rectangular Saint-Venant series and the material model's
orthotropic coordinate transform. The two shear moduli correspond to the
specified layer normal. The rectangular series is documented in
[Chen and Howell (2018), equations 1–4](https://doi.org/10.1186/s10033-018-0214-9).
No shear-strength measurement is inferred from that elastic calculation.

The maximum normal and shear bounds are combined even where their maxima occur
at different section points:

`principal_bound = normal/2 + sqrt((normal/2)^2 + shear^2)`.

For the dimensions and force assumptions above, the service section bounds are
approximately **21.597 MPa in the bridge, 17.947 MPa in the right wall,
15.403 MPa in the receiving left wall, and 6.638 MPa at the bar root**. The
governing service ratio to the selected 35.5 MPa in-layer allowable is **1.644**.
The defined closing-jam case gives approximately **30.053 MPa in the left wall
and 29.154 MPa at the bar root**, for a governing ratio of **1.181**. The smaller
jam margin remains visible rather than being hidden by the stronger bridge.

This section screen omits local re-entrant-corner concentration, nonlinear
contact, damage, and a calibrated multiaxial FDM failure criterion. The tensile
comparison does not establish an interlayer-shear allowable for the eccentric
pin load. Printed-process evidence, the targeted analysis, and the physical
loaded-motion and bounded-jam gates remain necessary; a nominal section pass is
not assembly qualification.

## Limits that remain explicit

Repeating the model at the 17.8088764 N retention-proof force doubles the section
stresses and is reported as a sensitivity, **not a requirement to actuate at
proof load**. The selected proof test holds the mechanism latched.

The prescribed closing-jam force uses the existing 6 V catalog-torque case
divided by the crank lever at the stated unseated-tab contact position. Its
pin-height lever includes the relative Z inspection bound. This remains one
defined contact/load case: catalog torque is not a measured maximum for an
individual servo, and arbitrary mis-seating is not qualified.

A finite 90-degree, 5 V catalog-stall case is also reported. Its bridge section
bound is about **61.066 MPa**, above the selected allowable; service strength
cannot be used as a stall rating. Near dead center, torque divided by crank
radius is not a force bound for the whole mechanism. There is no measured or
mechanical torque limiter here.

Unrestricted withdrawal-jam survival remains unqualified. Stop and inspect a
binding mechanism; the bench firmware cannot sense a jam. Physical loaded-motion
and specifically bounded closing-jam tests remain pending, including inspection
for yoke cracking, permanent deformation, lost fit, and fastener movement.
