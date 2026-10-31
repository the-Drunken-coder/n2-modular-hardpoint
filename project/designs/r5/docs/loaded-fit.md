# Loaded motion, inspected fits and release gate

The guide has intentional play. A payload on the keeper's overhanging end can
pitch the bar onto the tunnel mouth floor and rear roof. The original nominal
5 mm bar in a 5.4 mm, 16 mm-long guide permits 1.42655 degrees of pitch. At 5 mm
withdrawal its original yoke reached Z 16.7153 mm, above the old 16.7 mm ceiling.
Level-translation interference checks missed this additional contact.

## Geometry changes

- Restore the receiver height from 18 to **20 mm**, inside the selected 15–20 mm
  thickness limit. The reinforced yoke requires a **1.0 mm local roof**, at Z 19–20.
- Place the servo bottom at Y−0.6 and the spline face at Y34.4, with the keeper
  datum at Y40.2. The 0.6 mm servo overhang makes the retained package width
  54.1 mm, within the selected credit-card-scale footprint. The separated horn
  and center head clear the keeper without a groove.
- Keep the full 5×5 mm keeper section throughout the guide. A groove beginning
  inside the guide would shorten one yaw-bearing span and invalidate the
  21.8 mm effective-length inspection gate.
- Extend the guide rear to X34.4 and the servo shaft to X47.4. Relative to the
  previous layout, the guide grows by 6 mm and the servo/yoke moves by 7 mm.
  The longer guide reduces the friction-coupled actuator demand and the extra
  1 mm exit space accommodates the correctly positioned tilted slot. The body
  is 72×53.5×20 mm, with all four mounting annuli preserved. Its rear mounting
  row is at Y50.0 so the wider yoke can enter along +X with clearance.
- Relieve the receiver's four sharp guide corners with the outward
  [circle-and-square-neck profile](guide-relief.md). The original guide planes
  and full length remain; inspect the central flats and relief extents before
  applying the corresponding continuous pose bound.
- Enlarge the tip pocket for permitted angular movement. Widen only the upper
  yoke bridge to 8 mm toward +Y, with a finite R0.8 underside transition;
  both sleeve-contact walls and the guided bar remain 5 mm wide. Raise the
  slot cap allowance to 0.8 mm so the actual finite pin clears at the radius,
  shaft and guide-datum extremes. The purchased 2 mm horn-side spacer and
  12 mm running sleeve establish 14 mm of running space without a loose nut.
- Use **R1.5 internal slot corners**, distinct from the R0.8 underside blend.
  The earlier R0.8 slot produced a converged opening-load peak of 39.956 MPa
  at its upper-left corner, above the 35.5 MPa comparison allowable. The
  larger radius adds material locally without changing the outside envelope,
  guide, straight slot faces or actuator moment arms. Finite-pin cap extremes
  and ordered assembly still pass; structural acceptance requires a regenerated
  passing opening result, with no extra fillet-area credit in hand screens.
- Require a measured **5.4 ±0.1 mm assembled sleeve-center** crank radius. A guessed larger stock-hole
  radius is not accepted. Inspect or prepare the hole as described in assembly.

Mass is regenerated in `out/cad.json`; the extra roof height carries a small
mass cost. No old stress margin is inherited by this geometry.

## Finished-part acceptance envelope

These are inspection limits for each manufactured assembly, not a claim about
the printer's generic accuracy. Rework within the instructions or reject a part
outside them. Record actual measurements in the inspection form.

| Feature | Acceptance |
|---|---|
| Total keeper/guide clearance, Y and Z | 0.30–0.50 mm after finishing |
| Finished keeper Y and Z section | 4.90–5.10 mm |
| Uninterrupted guide flats in the common receiver datum | Must span X12.50–34.30 mm (≥21.8 mm) |
| Minimum actual guide-relief arc radius | ≥0.60 mm; smooth tangent joins and no local notch/fin |
| Continuous width of all four guide flats | ≥4.80 mm |
| Relief intrusion at each flat end / outward extent | ≤0.20 mm / ≤1.20 mm |
| Guide/shaft datums relative to the drawing | ±0.10 mm |
| Yoke and relief-roof surface location | ±0.10 mm each |
| Upper bridge / sleeve-contact-wall Y breadth | 7.90–8.10 mm / 4.90–5.10 mm |
| Bridge −Y face alignment with the walls | Within 0.10 mm |
| Left wall / right wall / bridge thickness | 3.50–3.70 / 3.00–3.20 / 2.40–2.60 mm |
| Bridge underside / top Z faces | 14.80±0.10 / 17.20±0.10 mm; thickness gate also applies |
| Minimum internal slot radius / underside blend radius | 1.50 / 0.80 mm, with smooth tangent joins and the specified surface locations |
| Assembled sleeve-center crank radius | 5.30–5.50 mm |
| Calibrated release angle | 40–42 degrees in the assembly coordinate frame |
| Total pin-sleeve/slot clearance | 0.30–0.50 mm; include up to ±0.25 mm endpoint lost motion |
| Non-contact yoke roof, horn and head gap through the path | ≥0.50 mm remaining after fit errors |

The full guide constrains latch pitch/yaw to **1.31053 degrees**, but the
keeper's leading full section withdraws into the tunnel after departure. It
is incorrect to carry that full-length bound through the released endpoint.
The [continuous fit certificate](../analysis/FIT_ENVELOPE.md) proves at least
**17.50 mm** of engagement remains throughout 40–183°, using the common segment
**X16.80–34.30 mm**. The continuous calculation proves 17.73740 mm, above that
candidate barrier. Its conservative pitch/yaw bound is **1.63009 degrees**. The shaft is
lowered to **Z6.3 mm** so the withdrawn yoke retains its roof clearance.

`cad/guide_motion.py` obtains that certificate directly, then samples coupled
pitch, yaw, roll and guide float. A deliberately enlarged guide cavity filters
out only poses that cannot fit; admitted poses can include extras. Its square
section limits, throat/extent bounds and exact polygon clipping include the
outward relief. A 4.9 mm square with 0.5 mm clearance permits **6.19292 degrees**
of pure roll; roll cannot be combined arbitrarily with maximum pitch and yaw.
The generator samples both signs, intermediate roll/tilt, all guide-float
corners, both accepted section-size endpoints, thirteen crank positions, both
extrema of the solved slot placement and all ±0.10 mm Y/Z datum corners. `out/cad.json`
records the exact sample count, angular bounds and resulting minimum gaps.
Each crank position uses its own guaranteed engaged interval and samples that
interval's angular boundary. At latch the full 21.8 mm guide is recovered;
extreme short-guide poses are therefore impossible there. The larger-cavity
filter is evaluated in the corresponding guide frame, with guide-relative
float and without double-counting the common guide datum. The separate
joint gate also checks nominal sleeve/slot poses using the rotated slot
plane and the available radial play, in addition to the ordered assembly path.

For each orientation and guide datum, the actual sleeve X/Z coordinates are
solved against the rotated slot plane at both yoke Y faces. The CAD slot stays
at its nominal 5.4 mm-radius datum; the real pin uses each accepted radius
endpoint and each shaft X/Z datum endpoint. Substituting a new radius into the
nominal withdrawal formula would incorrectly move both the pin and the CAD
latch datum. The tilted plane also changes the required keeper translation.
After those coupled extrema, a further **±0.40 mm local-X allowance** reserves
0.25 mm pin/slot play, 0.10 mm keeper-end location and 0.05 mm extra. Shaft X is
already in the solve and is not counted again. Each opposing noncontact surface
has a 0.10 mm allowance. Head and
horn separation uses actual surface distance, with a further **sqrt(3)×0.10 mm**
for the independent three-axis shaft datum. Roof and washer checks use planar
bounds; the full keeper Y box is conservative for the finite washer disc. The
2+12 mm spacer stack/M2×20 bolt and spline Y34.4 keep the head and washer away
from the rolled and withdrawn yoke without changing the three printed parts.
The 2 mm part is next to the horn; its seam remains outside the complete keeper
contact envelope. Both parts are clamped rigidly to the horn, so the force
model includes the rotating sleeve surface rather than assuming a free roller.

The selected geometry passes **6,552** coupled external poses. Its smallest
residual CAD gaps, after the declared errors, are:

| Non-contact feature | Residual gap |
|---|---:|
| Yoke roof | 0.60757 mm |
| Washer, conservative whole-keeper Y-box bound | 1.33963 mm |
| Horn-center screw head | 0.75513 mm |
| Horn disc envelope | 1.94406 mm |

The joint gate separately passes 567 nominal finite-sleeve poses and the ordered
assembly path. A 32-case cap regression checks the actual pin cylinder at the
90° radius/shaft/guide-Z extrema: the old 0.5 mm cap allowance interferes,
while the 0.8 mm allowance clears. A finite-washer regression reproduces the
old 12 mm stack's clearance deficit under roll. These results remain conditional
on the declared geometry and inspected bounds; archive the regenerated manifest.

Intentional guide contact is excluded only within the original guide's axial
interval and the complete inspected relief-profile bounding region. The short
common segment admits conservative poses that would contact earlier guide
surfaces still present in a particular assembly; those are not external-obstacle
collisions. The tip pocket, yoke roof, horn, center head and washer remain
checked. This is a sampled rigid-geometry gate, not a continuous contact,
friction, deformation, wear or departure simulation. Physical full-path
clearance, including rolled and withdrawn states, remains required.

## Required full-path bench gate — still PENDING

Before loaded tests, measure all fits above. With the actuator disconnected,
move the keeper slowly through its entire path while applying the intended
payload force. Stop on rubbing at the yoke roof, pinching at the horn/head,
stick-slip, or inability to obtain the minimum gap. Inspect both lateral float
limits and recheck after tightening the mounting screws on the actual host fixture.

For loaded release, apply **8.9044 N** continuously to the departing adapter
(the 0.454 kg, 2 g service target). A secured vertical bench can use approximately
0.908 kg total suspended mass including the departing adapter/hardware; verify
the actual force with the fixture/load cell. Use a controlled catch that does
not preload or obstruct the adapter. The **17.8089 N** retention proof is a
separate test and does not replace this loaded-motion test.

On three independently printed assemblies, perform 10 unloaded conditioning
cycles, then **100 loaded release/reset cycles per assembly** at the minimum
qualified terminal voltage. Record every attempt, terminal voltage minimum,
withdrawal/endpoint, load, temperature, force/torque trace when characterized,
release time, complete departure and successful reset. Test both lateral float
limits across the sequence. Do not infer a reliability probability from zero
failures in this sample. Acceptance requires no jam, incomplete departure,
uncommanded movement, damage, fastener loosening or lost clearance. A failure
requires investigation and a new recorded validation sequence after correction.

Characterize actuator output torque and keeper demand across the full path at
the same voltage and thermal state. The modeled working-torque fraction and
friction coefficient remain assumptions until measured. Require the specified
torque margin at every loaded position, and record the worst angle, rather than
checking only the endpoint or quoting stall torque. Environmental and vibration
qualification require the installation's defined conditions; these ambient
bench cycles do not establish a flight rating.
