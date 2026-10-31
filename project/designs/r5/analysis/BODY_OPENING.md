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

### Prescribed ear traction profile

Only the four `servo_ear_*` patches declare
`pressure_profile="quadratic_edge_taper"`. The two guide patches and four
socket patches retain `nonnegative_affine`, whose zero-slope case is uniform
traction on the complete centered rectangles. Every exported patch definition
records its profile as well as its original force, plane, centroid and bounds.

On an ear rectangle of area `A`, let `xi` and `eta` be the two centered
in-plane coordinates divided by their respective half-widths. Both range from
−1 to +1. The prescribed scalar density and vector traction are

```text
q(xi, eta) = 9/(4A) * (1 - xi^2) * (1 - eta^2)
t(xi, eta) = q(xi, eta) * F_ear
```

The integral of `q` over the rectangle is one. Symmetry puts its centroid at
the existing patch center, so both `integral(t) = F_ear` and
`integral(r cross t) = r_center cross F_ear` are unchanged. The four original
ear vectors consequently transmit exactly the same full servo wrench. The
reference scale factors, payload forces, footprints and supports are unchanged.

This profile is nonnegative, zero on all four edges, and has a center peak
**2.25 times its mean density**. "Nonnegative" describes the scalar weight;
the ear vectors can still include normal tension and tangential shear under
the ideal clamped-interface assumption. It is not a unilateral pressure model.

The profile is biquadratic, with total polynomial degree four. Multiplying it
by a P2 surface test function gives degree six, so the FE load assembly uses
**degree-six surface quadrature** for the load and its scalar audits. The
complete physical rectangle and centered resultant are required; an off-center
target must be rejected, rather than adjusted by an affine recentering. The
analytic relative-density limits are **0 and 2.25**; inspecting only mesh
vertices can miss the interior maximum. Actual assembled forces and moments
remain independently audited.

### Uniform-profile trial and the change in assumption

The [archived uniform-ear trial](reference_results/body_uniform_ear_aa3e947.json.gz)
is a **HOLD and sensitivity record**, with its original source identities and
load audits. It is not current qualification evidence. In its maximum-torque
case, layer-normal stress rose from **3.098241 MPa at 0.30 mm** local size to
**3.298002 MPa at 0.22 mm**, a **6.057%** change. The governing point moved
toward the right edge of the upper-right ear traction patch; at the finer level
it was X67.399160 mm, versus the patch edge at X67.525 mm. No stress exclusion
was added to hide that location.

A sharp tangential-traction cutoff can produce an edge singularity in elastic
half-space models; see [Willert, section 4.3, equations 14–19](https://arxiv.org/html/2410.20979v1).
The peak trend is consistent with that concern, but does not prove this
orthotropic receiver's exact asymptotic behavior. A relative-change gate alone
cannot establish a finite limit: a peak proportional to `log(1/h)` has
successively smaller relative changes despite increasing without bound.

The replacement profile removes the imposed traction jump at the same ear
rectangle edges. This is an explicit **change in the assumed clamp traction**,
not a geometric repair or a conservative bound on real local clamp stress.
It retains a higher center density and every ear stress remains included in
the comparison. Both cases must pass the original displacement/utilization
gates, local-refinement requirement and allowable; there is no added support
exclusion or relaxed threshold. Any passing result is conditional on this
declared traction model. Clamp preload, slip, pull-out, servo housing, printed
material and physical loaded release remain unqualified.

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

The 0.8 mm strip breadth is fixed by this reviewed traction assumption. The
later tab widening to 8.2 mm adds surrounding material without widening the
pressure footprint. At least 0.25 mm of outer tab material must remain beside
each strip; a narrower tab is rejected rather than silently changing the load.

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

The focused load-definition tests exercise the complete balanced cases, the
positive socket distribution, signed component coverage, the full servo wrench,
coordinate origin invariance, physical patch bounds, and rejection of invalid
contact combinations. They also require exactly four tapered ear declarations,
unchanged reference scales, and independently integrate the declared profile
to check each actual ear force and moment. Those tests do not build CAD,
generate a mesh, or perform a stiffness solve.

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

The earlier uniform-profile mesh-only preflight on the 72 × 53.5 × 20 mm
receiver found these sizes; these records describe the original patch/mesh
check, not results for the new ear profile:

| Bulk size | Local size | Quadratic displacement DOFs | Patch audit |
| ---: | ---: | ---: | --- |
| 1.2 mm | 0.40 mm | 523,233 | All ten exact rectangles; uniform positive traction |
| 1.2 mm | 0.30 mm | 546,873 | All ten exact rectangles; uniform positive traction |
| 1.2 mm | 0.22 mm | 600,159 | All ten exact rectangles; uniform positive traction |

An unpartitioned 1.1 mm bulk / 0.22 mm local trial required 686,373 DOFs,
over the unchanged 650,000 limit, and still had an inadmissible socket patch.
The complete uniform-profile study with the 1.2 mm bulk floor reached
6,808 MiB peak process RSS. Its attempted 0.16 mm refinement of every load
zone required 726,675 DOFs and was rejected before stiffness assembly.

An [isolated bulk-size comparison](reference_results/body_uniform_ear_bulk_comparison_aa3e947.json.gz)
retained the 0.22 mm physical patch/peak refinement and changed only the bulk
floor from 1.2 to **1.3 mm**. It used **531,438 DOFs** and **5,813 MiB** peak
process RSS. The load-compliance displacement changed by **0.0842%**. Its
peak utilization changed by **6.8563%**, so this is a resource comparison,
not an accuracy pass or evidence for the new ear profile. It also retains the
old uniform-ear assumption and its edge sensitivity.

The current sequence starts at the **1.3 mm bulk floor**, then refines every
physical patch and every previously governing peak to 0.30 and 0.22 mm.
If further refinement is needed, **all previous governing peaks** refine to
0.16 and then 0.12 mm, while every physical patch zone retains its mandatory
0.22 mm baseline. Fine peak fields are independent of baseline-field
deduplication, so a nearby patch center cannot suppress a requested finer
peak field. Each run records every field's center, radius, size and role.
No load footprint or stress-comparison region is removed.

With the uniform trial's three known governing peaks, mesh-only preflight of
this policy gave **541,959 DOFs at 0.16 mm** and **563,016 at 0.12 mm**.
Those counts are planning estimates, not converged tapered-profile results;
newly governing peaks and changed geometry can alter the actual counts.
At least two successful levels, both unchanged 5% gates, a finite comparison
strength ratio of at least one, and the mandatory 0.22 mm depth remain
required for each case. A resource stop or unresolved patch cannot pass.

The driver records all source files, the force/case definitions, mesh builder,
shared solver/audits, current CAD manifest and body STEP. It starts with a
failed/pending report, revalidates the CAD generator identities and source
hashes before accepting results, and aggregates both cases explicitly. A
generator change, interrupted study or missing case cannot leave an older
successful body report in place. The small mesh regression separately checks
volume, narrow-rectangle geometry and assembled force/moment. The tapered
profile also requires its own integration regression; neither test stands in
for the actual receiver solve.
