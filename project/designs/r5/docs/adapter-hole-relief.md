# Adapter lower-hole relief

The two sharp lower corners of the adapter's keeper hole produced a stress
peak that continued to change with local mesh refinement, even though the
provisional strength ratio was above one. The lower corners now have outward
finite-radius relief. The upper bearing plane and the entire original square
keeper passage remain unchanged.

## Exact profile

The nominal tab is **8.20 mm wide in Y**, spanning Y36.10–44.30. Its upper X
thickness remains 4 mm. The original hole is still fully open through
Y37.40–43.00 and Z4.90–10.50. At each lower Y/Z corner, remove an additional
**R0.40 circular cylinder**, with its axis along X through the tab:

| Relief | Center Y | Center Z | Radius |
|---|---:|---:|---:|
| Lower −Y corner | 37.40 mm | 4.90 mm | 0.40 mm |
| Lower +Y corner | 43.00 mm | 4.90 mm | 0.40 mm |

The circles are centered exactly on the original corners. Their mouth joins
leave convex material edges, with no thin undercut fin. This is an outward
cut, not an inward rounding of the original hole. The extreme void reaches
Y37.00/43.40 and Z4.50; the lower-root taper ends below it at Z4.40. The upper
load plane remains Z10.50. The nominal minimum side ligament is
`(8.20 − 5.60)/2 − 0.40 = 0.90 mm` on each side.

The matching upper socket widens with the tab to **9.00 mm in Y**, preserving
the nominal 0.40 mm clearance per side. The body envelope, mounting pattern,
adapter base, upper-tab X faces and keeper endpoints do not change.

## Passage regression

The adapter can be held 0.50 mm upward against the body and floated 0.30 mm
sideways while the original square hole still admits the keeper. Adding an
inward R0.40 at the lower corners blocks that pose, producing approximately
0.04988 mm³ of keeper interference. The outward relief has zero interference
with either the keeper or body at both signs of that lateral float.

`tests/test_adapter_relief.py` reproduces that failure and verifies that the
new adapter adds no material to the original passage, retains the upper
bearing material, and remains one valid solid. Removing material preserves
passage geometrically; it does not by itself qualify the remaining ligaments.

## Finished-part and structural gates

Inspect the actual lower arcs at **radius ≥0.40 mm**, and directly measure
**each finished side ligament ≥0.80 mm** after conditioning. Both gates must
hold together. The 0.90 mm nominal ligament is not permission to assume a
printer error or infer the minimum from the CAD width. Record the actual tab
breadth, hole profile, radius and ligament dimensions, including measurement
uncertainty. Reject a smaller-radius notch, thin fin, split or overcut ligament.

Measure hole clearance between the original flat planes, not across the relief
bulbs. Require at least 0.50 mm total keeper/hole clearance in Y and Z and at
least 0.30 mm centered tab/socket clearance per side. Inspect the upper load
plane against the current STEP and retain the loaded-motion and release gates.

The structural result must use the changed adapter and its actual lower arcs.
For R0.40 the mandatory local mesh size is **≤0.16 mm**, in addition to the
existing force/moment audits and displacement/stress stability criteria. A
coarser nominal mesh or the earlier provisional margin does not establish a
pass. Printed strength, profile quality and contact behavior remain physical
qualification requirements.
