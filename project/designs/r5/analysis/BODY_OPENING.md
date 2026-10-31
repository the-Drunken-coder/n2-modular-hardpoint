# Conditional receiver opening component screens

The receiver needs an opening-load check in addition to its retention proof.
The fully engaged proof model puts approximately **3.027509 N** upward on the
rear guide roof. The coupled service-opening force envelope puts approximately
**10.814618 N** there. A higher external retention-proof load therefore does
not automatically cover the internal opening reactions.

[`body_actuation.py`](body_actuation.py) defines two balanced, scaled-reference
component cases at the shared envelope's maximum opening-force and maximum
torque angles. The design service requirement remains **8.9044382 N**. The
larger reference loads below are computational component-screen loads, not new
departing-mass requirements or measured capacities.

## Reference state and scaling

The reference places the adapter at the +0.40 mm socket float limit. The tab
and payload force centroids both lie at **X10.40 mm**, with tab bearing at
Z10.50 mm. The near socket wall is at X12.40 mm. At the two selected angles,
the remaining flat tab-bearing interval still includes the reference centroid,
and the front guide patch is still fully occupied.

For each angle, the same unilateral guide equilibrium used by the
[coupled force model](COUPLED_FORCES.md) is solved with nominal crank dimensions
and the actual nominal body guide planes. This centered-bearing traction
reference is **not asserted to be the simultaneous rigid contact state** that
produced the original adverse edge-pressure envelope.

The entire balanced reference system is then multiplied by one factor. That
factor is at least one and covers the absolute magnitudes of:

- Each component of the sleeve force and both guide-force vectors.
- All three components of the servo reaction moment about the ear-patch
  centroid, **(52.9, 22.2, 6.3) mm**.

A nonzero target component with a zero or oppositely directed reference
component is rejected. Matching just the horizontal sleeve force would miss
the larger rear-guide requirement. Scaling preserves all reference force and
moment balances, including tab friction and the socket return.

| Reference case | Crank angle | Scale factor | Applied reference force |
| --- | ---: | ---: | ---: |
| Maximum opening-force reference | 180° | 1.346247271 | 11.987575627 N |
| Maximum torque reference | 121° | 1.317780940 | 11.734098942 N |

The rear-guide component governs both scale factors for this revision. Each
case records its unscaled reference, source envelope state, every component
comparison, scale factor, actual applied reference force, and the unchanged
service requirement. The FE runner must use each case's `reference_load_N`;
labelling these loads as an unscaled 8.9044382 N result would be incorrect.

**Componentwise force/moment coverage does not prove a full-stroke stress or
contact envelope.** Different load distributions can change stress even when
their individual force amplitudes are smaller. These are two conditional
component screens, followed by physical loaded-release qualification.

## Receiver load path

The keeper's guide forces reverse onto the body. They act at the nominal
2 mm patch centers **X13.4 and X33.4 mm**, on the actual guide planes
**Z5.3 and Z10.7 mm** for these two states. Each pressure footprint is confined
to the 5 mm keeper breadth and to the complete specified X/Y rectangle.
Mapping a force-envelope state to nominal geometry changes its moment; the
code recomputes the body wrench from the mapped coordinates.

The servo carries the complete opposite sleeve wrench into four nominal
**1.6 × 1.6 mm ear patches** on Y22.2 mm. Their centers lie on the two real
ear-screw X axes, **39.075 and 66.725 mm**, at **Z3.3 and Z9.3 mm**. A
minimum-norm distribution transmits the force and all three moment components.
This includes the moments created by the sleeve's Y overhang; merely placing
the opposite X/Z forces on the ear plane would omit them.

These are **ideal clamped interfaces**. Vector tractions can include normal
tension and in-plane shear representing the fasteners and clamped ears.
They do not qualify screw pull-out, clamp preload, slip, or the servo housing.
The ears are loaded surfaces, not additional fixed supports. The body's
original host mounting constraints and print axis remain unchanged.

## Positive socket-side return

The centered reference requires a net **+X** socket return equal to the tab's
horizontal friction, with resultant height Z10.5 mm. The geometry-checked
nominal contact strips are all on the same near socket face, X12.4 mm:

| Coordinate | Lower patches | Upper patches |
| --- | --- | --- |
| Y bands | 36.45–37.25 and 43.15–43.95 mm | Same two bands |
| Z bands | 9.2–9.8 mm | 12.8–13.2 mm |
| Height of resultant | 9.5 mm | 13.0 mm |
| Share of total horizontal return | 5/7, split equally between Y bands | 2/7, split equally between Y bands |

The lower strips avoid the guide's corner-relief opening. The upper strips
remain below the tab's top chamfer, including its nominal loaded vertical
shift. All four patch forces are positive compression in +X; their weighted
centroid is **(12.4, 40.2, 10.5) mm**. No arbitrary opposed-face couple or
tensile socket contact is introduced.

The raw edge-pressure maximum cannot simply be combined with this single-side
return: its contact moment differs. The code exposes and checks the residual
wrench, rejects that incompatible combination, and constructs the balanced
centered reference explicitly. Available interface surfaces do not establish
a unique real pressure distribution or a jointly realized contact pose.

## Audits and numerical gates

Every patch has a name, actual plane, force, resultant point, and finite
whole-facet bounds. Refinement centers cover the complete rectangles. The
sum of all ten patch forces is `(0, 0, -applied_reference_force)`, and their
moment equals the moment of that force at the recorded X10.4 payload datum.
The load assembly independently audits the actual nodal force and moment;
the solved host reactions require the same independent equilibrium check.

The case retains the body print axis, original mounting supports, existing
support exclusion, material comparison criteria, and minimum local refinement.
The opening runner must retain both 5% mesh gates, actual-reference-load
labelling, current geometry/source identities, and a failed status for an
unresolved case. Neither a source-wrench audit nor a larger comparison ratio
can substitute for mesh convergence or printed-process evidence.

The focused tests exercise the complete balanced cases, the positive socket
distribution, signed component coverage, the full servo wrench, coordinate
origin invariance, physical patch bounds, and rejection of invalid contact
combinations. They do not build CAD, generate a mesh, or perform a stiffness
solve.

## Conforming traction mesh and report

Run `python analysis/body_actuation_fea.py` after fresh CAD. The separate
`out/body_actuation_fea.json` report must contain both named cases and a true
`numerical_screen_passed` before the build can publish. Keeper opening remains
in `actuation_fea.json`; the three retention cases remain in `fea.json`.

The socket's upper bands are only 0.40 mm high. Selecting whole triangles
from an unconstrained surface mesh can leave an incomplete footprint whose
centroid cannot carry the prescribed force with positive pressure. The
body-only [traction mesher](traction_mesh.py) partitions the existing faces
along all ten exact rectangular patch boundaries. It checks unchanged solid
count/volume and the actual boundary area and centroid of every rectangle.
The shape, loads and pressure-positivity audit are preserved. This is a mesh
partition, not a geometry change or a contact solution.

A mesh-only preflight on the 72 × 53.5 × 20 mm receiver found these sizes:

| Bulk size | Local size | Quadratic displacement DOFs | Patch audit |
| ---: | ---: | ---: | --- |
| 1.2 mm | 0.40 mm | 523,233 | All ten exact rectangles; uniform positive traction |
| 1.2 mm | 0.30 mm | 546,873 | All ten exact rectangles; uniform positive traction |
| 1.2 mm | 0.22 mm | 600,159 | All ten exact rectangles; uniform positive traction |

An unpartitioned 1.1 mm bulk / 0.22 mm local trial required 686,373 DOFs,
over the unchanged 650,000 limit, and still had an inadmissible socket patch.
The additional ear/socket zones are why this separate body-opening study uses
a 1.2 mm bulk floor. These are planning estimates without a stiffness solve;
the final records include actual DOFs and every newly tracked stress peak.

The accepted sequence starts at the bulk floor, then refines locally to
0.30 and 0.22 mm; 0.16 mm is attempted only if required and within budget.
Every physical patch and every previous governing peak remains a refinement
centre. At least two successful levels, both unchanged 5% gates, a finite
comparison strength ratio of at least one, and the mandatory 0.22 mm depth
are required for each case. A resource stop or unresolved patch cannot pass.

The driver records all source files, the force/case definitions, mesh builder,
shared solver/audits, current CAD manifest and body STEP. It starts with a
failed/pending report, revalidates the CAD generator identities and source
hashes before accepting results, and aggregates both cases explicitly. A
generator change, interrupted study or missing case cannot leave an older
successful body report in place. The small mesh regression separately checks
volume, narrow-rectangle geometry, uniform pressure and assembled force/moment;
it does not stand in for the actual receiver solve.
