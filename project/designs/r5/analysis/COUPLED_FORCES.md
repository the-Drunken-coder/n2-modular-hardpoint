# Coupled sliding force and actuator torque screen

`coupled_forces.py` is the common force source for mechanics, risk sensitivities,
the yoke section screen and the separate opening FEA. It replaces the earlier
payload-only guide-reaction calculation. The friction coefficient remains
**0.35**, and the required working-torque ratio remains **at least 3** at the
manufacturer's 5 V torque point with the project's 50% working factor.

This is a prescribed **level-slot, two-dimensional Coulomb model**. Its
dimensional and pressure-location envelope is deliberately broader than the
nominal assembly. It does not solve the three-dimensional contact problem,
tilted slot normals, lateral binding, elastic redistribution, wear, moisture,
servo dynamics or physical payload departure. Friction and the chosen working
factor are assumptions to validate, not measured material/device capabilities.

## Why the earlier force was too small

The earlier formula used payload-only front-up and rear-down guide reactions:

```
Fx = mu * P * 2 * (1 + reaction_ratio)
```

It then added sleeve friction to actuator torque or FEA without updating those
guide reactions. Upward sleeve friction acts behind the rear guide and changes
both guide normals; horizontal friction at different heights also contributes
to the moment balance.

For the previous guide centres X13.4/27.4, tab load at X10/Z10.5, guide contact
heights Z5.5/10.5 and sleeve force at X37.2/Z6.012152, P=8.9044382 N and mu=0.35,
the complete free-body solution gives **Fx=13.101514 N**. The former formula
gives **7.746861 N**. This example is a prescribed adverse opening-force state;
the actual over-centre motion at 183 degrees briefly loads the other wall and
is handled separately in the stroke calculation.

## Force and moment balance

Use +X for withdrawal and +Z upwards. Let `d` be the keeper sliding direction
(+1 opening/right wall, -1 closing/left wall), `F` the positive sleeve force
magnitude in X, and `k*F` its signed vertical force. Guide normal magnitudes
`Nf,Nr` are nonnegative; their vertical signs `sf,sr` are each +1 or -1.

| Contact | Force in X,Z |
|---|---|
| Sleeve | `(d*F, k*F)` |
| Front guide | `(-d*mu*Nf, sf*Nf)` |
| Rear guide | `(-d*mu*Nr, sr*Nr)` |
| Tab | `(-d*mu*P, -P)` |

The three solved equations are:

```
F - mu*Nf - mu*Nr = mu*P
k*F + sf*Nf + sr*Nr = P
(d*zs - k*xs)*F
  + (-d*mu*zf - sf*xf)*Nf
  + (-d*mu*zr - sr*xr)*Nr = -(xt - d*mu*zt)*P
```

The last equation sums moments `z*Fx - x*Fz` about the assembly origin. A positive
guide normal uses the appropriate floor or roof contact height. The model
enumerates front-up/rear-down, front-down/rear-up and both-up modes, rejecting
negative normals. For this positive downward payload and mu<1, a both-down
mode cannot support a positive driving force. The selected design changes to
both-floor support in part of its loaded path; retaining a tensile rear-roof
reaction would be an invalid contact assumption.

Vectorized elimination evaluates the dimensional/angle envelope efficiently.
Every reported extremum and retained state is independently solved with a
3-by-3 matrix, then its assembled forces and moments are summed. A missing
nonnegative finite sliding solution anywhere in the declared envelope makes
the result unresolved. It does not publish a partial finite torque or a pass.

## The clamped sleeve spins with the crank

The sleeve is rigidly clamped to the horn. It is not a free-running roller.
For crank radius `r`, sleeve radius `R`, angle `alpha` and opening angular
velocity -1 rad/s, its contact point is

```
xs = shaft_x + r*cos(alpha) + d*R
zs = shaft_z + r*sin(alpha)
relative sleeve surface velocity in Z = -(r*cos(alpha) + d*R)
k = mu * sign(relative sleeve surface velocity)
```

The right-wall friction reversal is at `acos(-R/r)`, about 111.7 degrees for
r=5.4/R=2 mm. It is not at 90 degrees. The 180-to-183-degree over-centre segment
briefly moves the keeper towards -X and uses the left wall. Both friction signs
are inspected at zero surface slip through the adjacent limiting states.

Actuator torque, equivalently the virtual-work result for unit angular speed,
is

```
T = F * (abs(r*sin(alpha)) + mu*abs(r*cos(alpha) + d*R))
```

This equals horizontal drive work plus sleeve-contact dissipation. The sleeve
radius contributes to both surface speed and moment arm. A segmented metal
spacer stack is compatible only if it remains rigidly clamped and rotates as
one stack; loaded witness-mark inspection is required for that assumption.

## Contact migration and load removal

The keeper tip includes the loaded-side half of measured slot play and the
inspected pin-to-tip length. If the leading tip is `t`, the full-height section
starts at `f=t+0.50 mm`. For actual tab faces `a,n`, the remaining flat bearing
domain is `[max(a,f),n]`. The force envelope uses its adverse front edge; a
uniform-pressure midpoint is not assumed.

Once the flat section no longer overlaps, the model conservatively retains
vertical P and adverse horizontal mu*P at the tab near face until the leading
tip clears it. This neglects the usual assisting/unloading action of the
45-degree chamfer. **Payload force is removed once `t>=n`.** A fully withdrawn
40-degree keeper does not continue carrying the payload in this model.

The front guide patch begins at the greater of the inspected guide entrance
and the full-section leading face. Its force acts at that patch's centre; the
rear patch remains at the inspected guide's rear end. Both patches retain the
shared 2 mm length. This is a finite prescribed-pressure idealization, not a
solution for the actual contact footprint.

## Inspection envelope and numerical resolution

The model enumerates 512 dimensional corners from these bounds:

- assembled crank radius, shaft X error and relative shaft/guide Z error;
- keeper pin-to-tip length and total sleeve/slot play;
- tab/socket float and tab thickness;
- minimum/maximum guide aperture from the measured bar and clearance limits;
- tab-contact Z between ZK+2.0 and ZK+3.3 mm in the guide-centred frame.

The tab-height enclosure includes the accepted section span, centre float and
overhang tilt. With at least 15.3 mm loaded guide engagement, at most 5.4 mm
overhang, section4.9–5.1 mm and total clearance at most0.5 mm, an upper bound is
approximately ZK+3.23 mm; ZK+3.3 mm rounds it outward. The lower endpoint is
also rounded outward. The code rejects changes outside that enclosure's
dimensional contract so they cannot silently inherit it. These positions do
not rotate the assumed level contact-force directions.

Angles use a 0.25-degree grid plus exact sleeve-friction, partial-bearing,
guide-entry and tab-departure boundaries, including both sides of discontinuous
contact transitions. This is a numerical design screen, not an interval proof
of a complete contact solution. The separate rigid endpoint certificate still
governs geometry, and loaded motion requires physical tests.

For the +6 mm rear-guide/+7 mm shaft candidate, r=5.4 mm, shaft Z6.3 mm and the
declared inspection limits, the expanded envelope gives approximately
**49.6185 Nmm** and **3.0634 working-torque ratio**. Its maximum opening force is
**12.2970 N**, with upward component **4.30394 N**, at the minimum opening pin
height Z6.1 mm. The maximum-force state also occurs at the minimum opening pin
height, so the yoke section screen may conservatively combine those bounds.
Generated reports are authoritative for the current parameter set.

The +4 mm guide/+5 mm shaft candidate gives about51.3781 Nmm and ratio2.9585,
failing the unchanged gate. No friction assumption or acceptance threshold was
reduced to select the longer guide.

## Downstream structural checks

The yoke section screen consumes these signed forces, distinguishes the two
walls, and includes the wider bridge's shifted centroid and inspected minimum
section. The prescribed closing-jam screen remains a separate actuator-load
case; an opening service load is not a stall-survival qualification.

The opening FEA applies the shared opening-force envelope to the nominal CAD
at the minimum opening pin height. Its finite 1 mm sleeve patch is at the
**-Y wall edge**, opposite the bridge's +Y widening. The tab patch also carries
its adverse horizontal friction. These are audited prescribed forces on the
nominal component, not the complete as-built state that produced the envelope.
The same5% convergence gates and existing ideal-support exclusion apply; no
yoke corner or force-model issue is hidden by a new exclusion.
