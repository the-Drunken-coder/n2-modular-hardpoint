# Axial actuation load path of the assembly-entry yoke

The bare-bolt assembly opening breaks the lower-left connection of the yoke
frame. During withdrawal, the sleeve pushes the right slot wall and the force
returns through the upper bridge. A vertical keeper proof-load analysis does not
exercise that load path. During the prescribed closing jam, the sleeve instead
pushes the left wall, which transfers force directly to the keeper bar.

Run `python project/designs/r5/analysis/yoke_strength.py` after applying the pin
joint and dimensional-fit changes. The JSON records the actual source geometry,
forces, section terms, selected allowable and assumptions. Its nonzero exit gates
service withdrawal and the defined closing-jam section screens. It does not gate
the separately labelled proof-drag or full-stall sensitivities.

## Forces and minimum sections

The modeled service drag is `mu * P * 2 * (1 + REACTION_RATIO)`: **7.746861234 N**
at the selected 8.9044382 N service payload force and assumed `mu=0.35`.
The additional vertical pin/slot friction is bounded by `mu * drag`,
**2.711401432 N**. Its adverse moment across the slot span must be included.
The shared reaction ratio uses the finite 2 mm guide-patch centers at X13.4 and
27.4 mm: `(13.4 - 10) / (27.4 - 13.4) = 3.4/14`.
The defined closing-jam force uses the existing conservative 6 V catalog torque
case divided by the crank lever at the stated tab-contact position. Catalog
torque is not a measured maximum for an individual servo.

The output's `required_as_built_minimum_sections` are inspection requirements.
Measure the **left wall, right wall, top-bridge thickness, full bridge breadth,
and remaining rear breadth after any horn relief**. Do not subtract an assumed
print tolerance and still claim the same result. The selected walls are 3.5 and
3.0 mm, with a 2.4 mm upper bridge and minimum 4.9 mm breadth. The former
horn groove is removed from the selected keeper so that the full guide section
is available. The code still rejects or accounts for a changed relief geometry.
The keeper must use the specified print orientation, with layer normal along Y.

## Calculation

For each rectangular section, normal stress includes axial force and bending
about both transverse axes. The bridge includes the vertical lever from pin to
bridge centroid and the slot-friction lever across the slot. Walls include the
contact-face offset from their centroids. A yawed slot may contact the sleeve at
one Y edge, so eccentricity includes the maximum half-breadth, datum allowance,
and any relieved-section centroid shift. This adds torsion and cross-plane
bending even when the bar has no groove. Transverse shear uses the `1.5 V/A`
bound; torsional shear uses the convergent rectangular Saint-Venant series with
the source material's two shear moduli and an orthotropic coordinate transform.

The maximum normal and shear bounds are deliberately combined even where their
maxima occur at different section points:

`principal_bound = normal/2 + sqrt((normal/2)^2 + shear^2)`.

This is a section screen. It omits local re-entrant-corner concentration,
nonlinear contact, damage and a calibrated multiaxial FDM failure criterion.
The tensile comparison does not establish an interlayer-shear allowable for
the eccentric pin load; that failure mode still needs printed-process evidence.
Those limitations require the targeted analysis and physical gates; a nominal
section pass is not complete assembly qualification. The rectangular torsion
series is documented in [Chen and Howell (2018), equations 1–4](https://doi.org/10.1186/s10033-018-0214-9).

## Limits that remain explicit

Doubling drag at the 17.8088764 N retention-proof force is reported as a
sensitivity, **not a requirement to actuate at proof load**. The selected proof
test holds the mechanism latched. A finite 90-degree, 5 V catalog-stall case is
also reported: it shows why service strength cannot be used as a stall rating.
Near dead center, torque divided by crank radius is not a force bound for the
whole mechanism. There is no measured or mechanical torque limiter here.

Unrestricted withdrawal-jam survival remains unqualified. Stop and inspect a
binding mechanism; the bench firmware cannot sense a jam. Physical loaded-motion
and specifically bounded closing-jam tests remain pending, including inspection
for yoke cracking, permanent deformation, lost fit and fastener movement.
