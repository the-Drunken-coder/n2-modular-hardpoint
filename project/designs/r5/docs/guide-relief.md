# Guide corner relief and bearing flats

The original square receiver tunnel left four sharp longitudinal concave
corners. Body stress peaks moved toward those corners as the mesh was refined,
so stable displacement alone did not establish a stable stress result. The
strict convergence gate rejected that result. The new body removes each sharp
corner with a finite-radius outward relief; the keeper and adapter hole retain
their existing square sections. The changed body still requires regenerated
CAD and a passing force/moment-audited, mesh-refined structural result.

## Exact section

The nominal guide is 5.40 mm square, centered at Y40.20/Z8.00. Its original
planes remain Y37.50/42.90 and Z5.30/10.70. At each Y/Z corner, remove the union
of these two shapes, extruded along X12.00–34.50 so both ends are open:

- A **0.60 mm radius** circle, centered **0.50 mm outward** from each of the
  two original guide planes.
- A **0.60×0.60 mm square neck**, between that circle center and the point
  **0.10 mm inward** from each original plane.

The neck sides meet the remaining 270-degree circular arc tangentially. At the
guide mouths, the remaining material has convex edges, with no sharp concave
corner or thin fin under a bearing flat. A circle alone with a narrow mouth
would leave such a fin and is not the specified profile. Do not substitute an
inward fillet: it would enter the square keeper's loaded contact envelope.

Each original guide plane retains a nominal **5.20 mm-wide continuous flat**
through the full **22.00 mm** effective span X12.40–34.40. The relief extends
**1.10 mm outward** from each original plane. The lowest relief extent is Z4.20;
the floor load plane stays Z5.30. The relief leaves the square keeper section,
guide planes and adapter hole unchanged. The separate guide-length change puts
the 2 mm-wide front and rear load-patch centers at X13.40 and X33.40; the body
and mounting layout follow the current drawing, not the earlier short guide.

The nominal centered structural model uses the actual **5.00 mm keeper contact
footprint** on the lower front and upper rear guide flats. That footprint ends
**0.10 mm before each relief mouth**. A mesh facet must be wholly inside the
declared contact footprint; pressure on the relief or a facet crossing its
mouth is not a centered square-bar bearing load. Applied force and moment
remain separate audited requirements. As-built minimum flats are smaller than
this nominal CAD footprint and must be used in conservative bearing screens.

## Inspection and fit implications

The outward void's bounding box is not an allowed keeper-motion box. The
keeper is constrained by the four long central flats. The continuous fit proof
in [FIT_ENVELOPE.md](../analysis/FIT_ENVELOPE.md) must cover the relieved section
using all of these inspected conditions together:

| Feature | Nominal CAD | Finished-part acceptance |
|---|---:|---:|
| Minimum radius throughout each smooth arc | 0.60 mm | ≥0.60 mm |
| Loss at each end of a guide flat, measured from its original corner | 0.10 mm | ≤0.20 mm |
| Continuous central flat width, all four planes | 5.20 mm | ≥4.80 mm |
| Outward relief extent from each original plane | 1.10 mm | ≤1.20 mm |
| Effective continuous guide length | 22.00 mm | ≥21.80 mm; uninterrupted flats span X12.50–34.30 |
| Total guide/keeper clearance between the flat planes, both axes | 0.40 mm | 0.30–0.50 mm |
| Keeper section, both axes | 5.00 mm | 4.90–5.10 mm |

The 0.60 mm minimum arc radius is a measured lower limit, not permission to
subtract a generic printer tolerance. A smaller local notch, abrupt join or
sagged arc does not inherit the nominal-radius structural result. Smooth
tangency, the mouth limit and the outward-extent limit must all hold together.
The 4.80 mm minimum flat follows from the smallest permitted aperture
(4.90+0.30=5.20 mm), less two permitted 0.20 mm mouth intrusions. It does not
silently assume that every printed aperture is the nominal 5.40 mm. Inspect
the actual flat and relief profile; an arbitrarily large outward void is not
accepted merely because its mouth is narrow.

Use a calibrated optical/profile inspection at both ends and an appropriate
internal profile or replica method through the span. Record the method and
measurement uncertainty. Inspect after the specified conditioning and host
mounting, and check for sagging, burrs, voids or a residual undercut fin. The
square-neck/arc blend must remain open and smooth. The relief is only in the
receiver; do not add it to the keeper or adapter hole.
Printed-process and component-strength qualification remain pending until the
specified physical tests are recorded.

The [print instructions](../PRINTING.md) and inspection template record these
limits. The existing loaded collision check must still pass, and the full-path
physical clearance and release gates remain required. A CAD relief alone does
not demonstrate the finished assembly's contact, friction or durability.
