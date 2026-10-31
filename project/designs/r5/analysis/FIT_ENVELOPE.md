# Continuous guided endpoint envelope

The earlier dimensional corner calculation treated the keeper as level. That
cannot establish full-section engagement: guide pitch/yaw changes both the tip
projection and the X coordinate required for a tilted slot wall to contact the
sleeve. The continuous interval model in `fit_envelope.py` bounds those effects
together. Its result remains a rigid endpoint screen, separate from contact-free
motion, deformation and physical departure.

The selected geometry uses a 5.4 mm crank, an assembled sleeve-center radius
acceptance of 5.3–5.5 mm, shaft X47.4/Z6.3 mm and tip X5.65 mm. Release must be
measured at 40–42° and latch at 177–183°. The 0.50 mm full-section overlap and
1.00 mm additional stroke after the 0.50 mm opening reserve remain unchanged.
Actual measured released opening must therefore be at least 1.50 mm, including
the adverse loaded/float pose. The radius is measured after the clamp is secured;
the stock horn-hole center alone does not include sleeve/bolt eccentricity.
The geometric slot-center-to-leading-tip distance is **36.35 ±0.10 mm**; tip
chamfer and sleeve/slot lost motion are budgeted separately in the model.

## Inspected guide and corner-relief contract

Require the full keeper section to be 4.9–5.1 mm, total guide clearance to be
0.30–0.50 mm, and uninterrupted body guide flats over X12.50–34.30 mm.
The occupied full-section guide length decreases as the keeper withdraws.
The selected keeper has no horn groove in the guide. The 4.9–5.1 mm Y breadth
limit also applies to both yoke sleeve-contact walls. The upper bridge is wider
toward +Y, but that does not widen the sleeve-contact walls or change this
contact-coordinate bound. Each guide/shaft datum
has a ±0.10 mm limit, giving up to ±0.20 mm relative Z error. Include the entire
±0.40 mm tab/socket float and 0.30–0.50 mm total sleeve/slot play.

The body has a relief along each of its four guide corners. The nominal profile
is a 0.60 mm radius circle centered 0.50 mm outward from both original guide
planes, joined to the aperture by a 0.60 × 0.60 mm square neck. The original
5.4 mm flat-plane spacing remains. Each nominal mouth enters a plane by
0.10 mm; each relief extends 1.10 mm outward. See
[the profile and inspection drawing](../docs/guide-relief.md).

The endpoint proof requires these **measured, conditioned-part limits**:

| Quantity | Acceptance |
|---|---:|
| Each mouth's intrusion along each adjoining flat plane | ≤0.20 mm |
| Each relief's outward extent from each adjoining flat plane | ≤1.20 mm |
| Remaining continuous flat width, each face | ≥4.80 mm |
| Uninterrupted body flat-guide interval | X12.50–34.30 mm |
| Total flat-plane spacing minus the keeper dimension, each axis | 0.30–0.50 mm |

The minimum aperture is 4.9 + 0.3 = 5.2 mm, so two maximum 0.2 mm mouths
leave 4.8 mm of flat. Nominal flats are 5.2 mm wide. A nominal 5.0 mm FEA
pressure footprint is not an as-built minimum contact breadth. Measuring only
the large outer relief opening does not measure guide clearance. All four
mouths and their full longitudinal extent must meet the contract; a large
outer void with the same nominal throat is not interchangeable.

## Why the remaining flats retain the angular bound

This is a rigid, straight-guide argument for the correctly assembled orientation
continuously connected to zero keeper roll. It does not assume that arbitrary
roll, pitch, yaw and guide translation maxima can occur together.

First take a deliberately large enclosing aperture: 5.6 + 2 × 1.2 = 8.0 mm.
Every accepted bar contains a 4.9 mm diameter cylinder. Consequently its
centerline lies within ±1.55 mm of the guide center. Provisionally take a
remaining guide length of at least 17.50 mm; the continuation certificate below
proves that it persists through the complete normal stroke. Each centerline
slope is then at most `(8.0 − 4.9)/17.5`. The maximum cross-axis displacement
of a central contact generator is bounded by
`(5.1/2) × ((8.0 − 4.9)/17.5)^2 = 0.080018 mm`.
Thus the central generators stay within ±1.630018 mm. Every accepted mouth
leaves the central ±`(5.2/2 − 0.2)` = **±2.40 mm** strip intact, so those
generators still meet the original flat planes, not the outer relief bulbs.

A rectangle with both dimensions in 4.9–5.1 mm, rolled by at most 45°, still
contains the centered cross along its original Y and Z half-widths. The worst
dimension ratio is 5.1/4.9; its product with `sin(45°)` is below one. At 45°,
the central vertical chord is at least `4.9 × sqrt(2) = 6.92965 mm`, larger
than the maximum 5.6 mm aperture. The correctly assembled connected pose set
therefore cannot pass through 45° into a different rolled orientation.

For pitch `theta`, yaw `psi`, guide length `L`, actual bar dimensions `wy,wz`
and corresponding clearances `cy,cz`, the central generators give

```text
L*abs(tan(psi)) + wy/cos(psi) <= wy + cy
L*abs(tan(theta))/cos(psi) + wz/cos(theta) <= wz + cz
```

Both angles are bounded by the solution `a` of
`L*tan(a) + 4.9/cos(a) = 4.9 + 0.5`. This is **1.3105252°** with the full
21.80 mm guide at latch and **1.6300874°** with 17.50 mm remaining guidance.
Each section's centerline free float also remains at most ±0.25 mm. The endpoint
interval deliberately includes that full float independently of maximum tilt,
enlarging the physically possible pose set.

## Remaining guide length during withdrawal

The full 21.80 mm body guide is not always occupied. Even in the nominal
level pose at 40°, the chamfer-transition face has moved inside the guide.
Reusing the full latched guide length at release understated the permitted tilt.

`motion_guide_certificate` uses a **continuation barrier of 17.50 mm**. Assume
an initially assembled, fully guided bar moves continuously through the normal
quasi-static crank interval 40–183°. At a first crossing below 17.50 mm, its
full-section leading face would have to reach X34.30−17.50=16.80 mm. Using
17.50 mm guidance, the interval model bounds that face over the **whole path**,
including the intermediate 90° crank height, by **X≤16.562603 mm**. Thus at least
**17.737397 mm** remains, strictly greater than the candidate 17.50 mm: the
first crossing cannot occur. The calculation is a certificate, not an assumed
constant engagement length or a test of only the two endpoint positions.

The same coarse bound places the latched full-section leading face at
X≤7.060661 mm, well ahead of the inspected X12.50 guide entrance. This proves
that latch recovers the entire 21.80 mm guide and may use its smaller tilt bound.
The guaranteed common guide segment for conservative posed-CAD checks is
**X16.80–34.30 mm**, with midpoint X25.55 mm. The endpoint interval retains the
original guide midpoint X23.40 mm: shortening occurs from the front, so the
actual midpoint moves only +X; the retained negative projection term and
contact-height enclosure become more conservative with this earlier midpoint.

The selected calibrated release window remains **40–42°**, with shaft
Z6.30 mm. Calibration, records and firmware validation use that measured
window. The longer guide improves the endpoint margins; it does not authorize
an existing wider-angle calibration profile. Actual opening must still be at
least 1.50 mm.
Servo overshoot, deformation, contact-free motion and measured departure are
separate physical checks; this is not a dynamic servo or contact simulation.

## Bounding rolled corners despite the relief bulbs

Outside an original guide plane, every allowed point must remain in a corner
mouth: its coordinate on the other plane must lie within 0.20 mm of that
plane's corner. The outer circle and square neck satisfy this condition.

Let `m=4.9`, `M=5.1`, `c=0.30`, `d=0.20`, `s=sec(a)` and
`k=tan(a)^2`, using the larger released/path angle `a=1.6300874°`. The following sufficient bounds cover either sign of pitch,
yaw and roll, including the shear of an oblique section:

```text
opposite-edge excess E = d + M*(s - 1 + k) = 0.206195 mm < c
adjacent-corner drop D = (m/M)*cos(a)*(c - M*(s - 1) - 2*M*k)
                       = 0.278202 mm > d
```

If a section's projected width exceeded the original flat-plane spacing, one
extreme corner would have to enter an outer mouth. `D > d` then forces its
adjacent corner beyond the perpendicular guide plane. Fitting that corner
requires clearance no greater than `E`, contradicting the inspected minimum
clearance `c`. The same argument applies with the axes and signs exchanged.
Thus the section's Y and Z **spans** cannot exceed the corresponding aperture.
This does not claim that every corner lies inside the original rectangle: a
small translated corner can enter a neck while the total span remains smaller
than the aperture. The regression suite includes such an example.

For local coordinates `u,v` after roll but before pitch/yaw, an oblique section
through a constant world-X plane has

```text
Y = u/cos(psi)
Z = tan(theta)*tan(psi)*u + v/cos(theta)
```

Undoing this shear encloses both local corner spans in
`5.6/cos(a) = 5.602267 mm`. This replaces the former uncorrected 5.6 mm box.
It also gives a deliberately loose roll bound of **8.944690°** from
`4.9*(cos(roll)+sin(roll)) <= 5.602267`.
For comparison, actual centered **pure roll** is limited to **6.192920°** for
a 4.9 mm square with 0.5 mm total clearance, or **4.789286°** at nominal
5.0/5.4 mm dimensions. The larger analytic roll bound is not a simultaneously
attainable physical pose.

## The sleeve contact lies on the raised yoke

The contact's local Y coordinate cannot automatically use the bar half-width:
rolling the raised contact also moves it sideways. Let `phi` be roll,
`H = zp − ZK − dz`, and let `uc,vc` be the contact coordinates after roll but
before pitch/yaw. Solving the world-X/Z contact equations gives

```text
vc = cos(theta)*H - sin(theta)/cos(psi)*(xp-xc)
     - sin(theta)*tan(psi)*uc
unrolled_contact_y = cos(phi)*uc + sin(phi)*vc
```

Require the unrolled contact Y coordinate to remain within the inspected
±2.55 mm yoke breadth. Over both accepted endpoint intervals, take one bound
`B` on `abs(cos(theta)*H - sin(theta)/cos(psi)*(xp-xc))`, including the
relative datum, guide float, radius and shaft errors. Then

```text
abs(uc) <= (2.55 + sin(phi_max)*B)
           / (cos(phi_max) - sin(phi_max)*tan(a)^2)
         = 3.092311 mm
```

The endpoint interval uses this contact bound separately from the two tip-corner
terms. It is constant over all crank-angle candidates, preserving the analytic
extrema calculation below. This is an enlargement of the pose set; external
yoke/horn/washer/roof clearance must be checked against feasible combined poses
and physically inspected, separately from endpoint engagement/opening.

## Constrained slot-plane equation

Let `xp,zp` be the sleeve-center position; `xc` the guide midpoint; `L` the
slot-center-to-tip-section distance; `theta,psi` the guide pitch/yaw; and `dz`
the relative vertical datum/float. Let `u,v` denote a tip-section point and `uc`
the Y coordinate of sleeve contact on the slot face. Solving the rotated slot
plane together with the guided bar centerline gives the tip X coordinate:

```text
x = cos(theta)^2*xp + sin(theta)^2*xc
    - cos(theta)*cos(psi)*L
    + cos(theta)^2*sin(psi)*uc - sin(psi)*u
    + cos(psi)*sin(theta)*cos(theta)*(zp - ZK - dz)
    - cos(psi)*sin(theta)*v + bounded slot-play term
```

The implementation takes conservative intervals of these terms over the whole
declared angle/float box, including either contact edge and every tip corner.
It uses the section behind the tip chamfer for full engagement, and the leading
tip for opening and pocket clearance. Crank-angle endpoints, analytic stationary
points and height-sign changes are included; the pocket minimum need not occur
at exactly 180°. Dimensional candidates are bounds, not random samples.

## Results and independent checks

For the declared dimensions and inspection limits, the continuous interval
returns **0.620287 mm minimum full-section overlap**, **1.203512 mm spare after
the 0.50 mm opening reserve**, and **1.191530 mm minimum tip-to-pocket space**.
The acceptance thresholds remain 0.50 mm overlap and 1.00 mm additional opening
reserve; actual measured opening remains **at least 1.50 mm**. No threshold was
reduced to accommodate the relief.

`validate_relief_contract` rejects limits that invalidate the sufficient
inequalities. Independent tests intersect rotated three-dimensional bar edges
with guide planes, clip their polygons against forbidden flat-strip regions,
and probe 12,000 dimension/pose combinations in a larger corner-box cavity
that contains the real rounded relief. They also solve actual rolled-yoke
contact coordinates and transform the tip corners, reject excess pure tilt
and roll, and retain the earlier pin-play/interior-extremum regressions.
Those deterministic probes are a regression stress test, not a proof from
sampling, a manufacturing distribution or a measured reliability rate.

`guided_pose_geometry.py` can reject impossible poses for the sampled CAD
clearance checks. Passing its sampled guide sections admits a conservative
superset, not guaranteed continuous collision-free motion. Every built assembly
still requires recorded loaded/float endpoint inspection, full-path motion
tests and the separate proof/release campaign.

## Force and physical-release gates

The geometric certificate does not establish the required actuator force.
The separate [coupled force model](COUPLED_FORCES.md) uses the same guide/shaft
geometry and inspection bounds, balances pin friction with the guide reactions,
tracks the remaining tab-bearing interval, and removes the payload load after
the tip clears the tab. It assumes the sleeve/spacer stack remains rigidly
clamped to the rotating horn. Its level-slot, two-dimensional force directions
do not qualify the three-dimensional contact poses bounded in this document.

At the selected service load and assumed friction coefficient 0.35, the current
force screen gives about **49.6185 N mm required torque**, **3.0634 working-torque
ratio**, and **12.2970 N maximum opening force**. These are numerical model
results, not measured servo capability or payload departure. The
[yoke section screen](YOKE_LOADS.md) uses those coupled forces and the asymmetric
bridge and narrow transitions. Physical loaded-release tests must establish
motion and departure; the separate retention proof holds the mechanism latched.
