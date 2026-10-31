# Continuous guided endpoint envelope

The earlier dimensional corner calculation treated the keeper as level. That
cannot establish full-section engagement: guide pitch/yaw changes both the tip
projection and the X coordinate required for a tilted slot wall to contact the
sleeve. The continuous interval model in `fit_envelope.py` bounds those effects
together. Its result remains a rigid endpoint screen, separate from contact-free
motion, deformation and physical departure.

The selected geometry uses a 5.4 mm crank, an assembled sleeve-center radius
acceptance of 5.3–5.5 mm, shaft X40.4/Z6.5 mm and tip X5.65 mm. Release must be
measured at 40–44° and latch at 177–183°. The 0.50 mm full-section overlap and
1.00 mm additional stroke after the 0.50 mm opening reserve remain unchanged.
Actual measured released opening must therefore be at least 1.50 mm, including
the adverse loaded/float pose. The radius is measured after the clamp is secured;
the stock horn-hole center alone does not include sleeve/bolt eccentricity.

## Guide and contact bounds

Require the full keeper section to be 4.9–5.1 mm, total guide clearance to be
0.30–0.50 mm, and effective full-section guide length to be at least 15.8 mm.
The selected keeper has no horn groove in the guide. Each guide/shaft datum has
a ±0.10 mm limit, giving up to ±0.20 mm relative Z error. Include the entire
±0.40 mm tab/socket float and 0.30–0.50 mm total sleeve/slot play.

The maximum pitch/yaw angle follows
`length*tan(angle) + width/cos(angle) = width + clearance`, using the minimum
accepted section width. The interval also includes the full guide free float
independently of tilt. That deliberately enlarges the real pose set, since
maximum tilt already consumes some float. Rolled cross-section corners are
enclosed by the maximum guide-sized Y/Z box, 5.6 mm; this does not demonstrate
that a rolled yoke clears the receiver or actuator.

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

Tests independently solve rotated X/Z contact coordinates and compare sampled
forward poses with the interval enclosure, reject the old tip under the new
combined bound, retain the pin-play regression, and check the interior angular
extremum. The checks cannot establish print capability or a reliability rate.
Every built assembly still requires recorded loaded/float endpoint inspection,
full-path motion tests and the separate proof/release campaign.
