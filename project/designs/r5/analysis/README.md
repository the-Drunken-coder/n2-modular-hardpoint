# R5 numerical checks

## Applied-load correction

The original R5 `fea.py` divided each traction by ten times the selected surface
area. Its scalar `LinearForm` integrated the constant one once for each of the
ten local quadratic-tetrahedron basis functions. A run labelled 17.8088764 N
therefore assembled only 1.78088764 N. Its historical strength ratios and the
stiffness/dynamics derived from them must not be used as current evidence.

`load_audit.py` integrates area as a scalar `Functional`, then independently sums
the assembled nodal force and its moment about the assembly origin. Every patch
and whole-part load is checked, followed by the solved support reactions. All
resultants are recorded in `out/fea.json`; force uses N and moment uses N·mm.

The body reaction loads now conserve the payload force and moment using the
centres of the two finite, 2 mm-long guide patches. To keep their resultants at
those declared centres across meshes, a small affine pressure correction is
allowed over the selected facets. Negative pressure is rejected. This remains
a prescribed component-load model; it does not solve assembly contact.

All three component cases audit the same source force and moment at the tab
centre. The adapter's bottom traction uses that declared resultant location
rather than silently applying the load at the plate's offset area centroid.
The fully engaged retention FEA and beam checks share the nominal guide-patch
length, centres and payload-only lever ratio. Sliding actuation additionally
changes the guide normals through sleeve friction and horizontal-force moments.
Its shared [coupled force model](COUPLED_FORCES.md) therefore solves equilibrium
with unilateral contacts, the inspected guide interval, migrating tab contact
and the clamped sleeve's rotation. The former 7.747 N and 7.168 N scalar drag
estimates are superseded. Both sets of prescribed contact patches remain
idealizations, with their distinct retention and sliding scopes recorded.
The body pressure footprint is confined to the nominal 5.0 mm keeper width,
rather than the wider guide cavity. Only facets whose vertices are wholly in
that Y band receive pressure; this keeps the pressure off the corner-relief
joins. The selected area and affine pressure correction are still audited on
every mesh. This changes the physical load footprint, not the stress-exclusion
zone or comparison criteria.

The load tests use a reference tetrahedron with an independently known face
area of 0.5. They check the full proof force, all force/moment components, a
shifted pressure resultant, and rejection of the former factor-ten error and
the former body moment mismatch. Run them with:

```sh
cd project/designs/r5
python -m unittest discover -s tests -v
```

Fresh geometry and FEA are required for the revision under review. Correcting
the applied force does not qualify a load rating or demonstrate loaded release.

## Mesh gate and computational status

Each part is refined through a bounded mesh sequence. Both the energy-equivalent
load displacement and the maximum dimensionless stress utilization outside the
stated support zone must change by at most **5%** between successive meshes.
Utilization includes principal tension, layer-normal tension and the compression
proxy. A large strength ratio never substitutes for convergence, and the latest
stress change is not treated as a proven error bound or used to inflate/discount
the result. Failure to meet the gate makes the FEA command fail and prevents
publication of its fields as current viewer evidence.

The keeper and adapter first refine globally to 0.45 mm; the body first refines
globally to 1.1 mm. If the gate still fails, the bulk keeps that spacing while
regions around the finite bearing patches **and every governing peak seen on
previous meshes** receive successively finer elements. The keeper uses 1.5 mm
radii. The adapter uses 0.8 mm radii, with explicit fields covering both lower
hole-relief cylinders through the complete tab thickness; it does not depend
on the coarse mesh finding those features first. The body uses 0.8 mm radii
with a denser grid over each bearing
rectangle: every point on the nominal 2 x 5 mm patch is at most 0.7072 mm from
a grid centre. This keeps the whole pressure footprint covered while avoiding
unnecessary fine volume. The sizing
field transitions to the bulk spacing over one bulk element length. Each run
records the global and local targets, the actual refinement centres, degrees of
freedom and governing peak. It also reports the governing tetrahedron's actual
minimum/maximum edge lengths and centroid, so a moving hotspot can be checked
against the mesh geometry. A nominal local size must not be described as the
size of the whole mesh. The exported viewer carries the same mesh metadata.
The keeper must reach 0.25 mm locally. The adapter must reach at most 0.25 mm
and at most 0.4 times its lower-hole relief radius, requiring **0.16 mm** for
the R0.40 relief. Its sequence uses a 0.25 to 0.16 mm step, with 0.12 mm
available if needed and within budget. The body must reach at most
0.22 mm (or 0.4 times its corner-relief radius if that is smaller). In particular,
the 0.30 to 0.22 mm pair is below the R0.60 arc's approximately 0.314 mm
curvature sizing target, so a stable pair of coarse meshes with nearly unchanged
fillet resolution cannot pass. These depth requirements supplement both 5%
stability tests; they do not relax either one.
Curvature sizing remains active on surfaces. Gmsh's automatic extension of
boundary sizes into the whole volume is disabled at every stage, so the global
and local studies use the same sizing policy. Explicit local fields, rather
than uncontrolled propagation from small relief arcs, resolve the loaded zones.

The bounded sequence stops before stiffness assembly if a mesh exceeds 650,000
quadratic vector degrees of freedom (configurable with `N2_FEA_MAX_DOFS` for a
machine with a different verified resource budget). This is a resource stop,
not a passing numerical result: the report records the reason, the mesh gate
fails and the viewer rejects publication. Field checkpoints are written after
each solve and their large arrays are released before the next refinement.
This avoids retaining all earlier meshes and fields simultaneously. Changing
the memory budget never changes the two 5% criteria.

For the expanded 72 x 53.5 x 20 mm body, a mesh-only Gmsh 4.15.2 preflight found
693,765 DOFs at a global 1.0 mm target, and 752,013 with local 0.22 mm fields.
Using a 1.1 mm bulk target while retaining those same 0.22 mm load/peak fields
gave 630,927 DOFs. This is why the bulk floor changed; the 650,000 DOF guard,
both 5% gates, actual peak-element metadata and required local depth remain.
The final study must still meet those gates with its own evolving hotspots.
The separate [receiver-opening study](BODY_OPENING.md) has additional finite
ear/socket load zones and records its own partitioned-mesh resource policy.

Every driver replaces an older machine-readable and Markdown PASS with a
pending HOLD before validation starts. Captured analysis, parameter and STEP
identities are checked again after the expensive solve, together with the CAD
generator identities in the manifest. A changed input cannot publish a fresh
PASS from computations made with an earlier version.

Convergence under this test is stability of these monitored quantities. It does
not establish an absolute numerical error bound or validate the physical model.
The 1 mm ideal-support zone remains excluded from comparison strength ratios;
the complete unfiltered peak is reported separately. Those local stresses,
bearing edges, threads and contact failure still need independent evidence.

The constrained stiffness is symmetric positive definite for this elastic
model. Its direct solver uses the upper triangle for factorization, releases
the factorization after every solve, and retains the full matrix for independent
residual and reaction checks. This reduces memory relative to general LU without
changing the equations. A small reference problem verifies the solve and repeated
factorization cleanup, and the full component runs record force/moment balance.
MKL and OpenMP default to two threads; CI fixes both settings at two and the
analysis report records them alongside the DOF budget.

## Material and contact assumptions

The numerical inputs match Bambu's **PAHT-CF TDS V3.0**, available as a
[manufacturer-authored PDF mirror](https://idarts.co.jp/3dfs/data_sheet/bambuLab/Bambu_PAHT-CF_TDS.pdf):

| Input | Supplier dry-coupon value | Value used by this model |
|---|---:|---:|
| XY tensile modulus | 3860 +/- 230 MPa | 3860 MPa |
| Z tensile modulus | 2180 +/- 130 MPa | 2180 MPa |
| XY tensile strength | 92 +/- 7 MPa | 0.5 x (92 - 3 x 7) = 35.5 MPa comparison threshold |
| Z tensile strength | 47 +/- 5 MPa | 0.5 x (47 - 3 x 5) = 16 MPa comparison threshold |

V3.0 specifies coupons printed at 290 C nozzle, 100 C bed, 100 mm/s and 100%
infill, followed by annealing/drying at 80 C for 12 hours. The older V2.0 mirror
reports different tensile values and is not the source for this input set.
The project's reductions are an engineering convention: they do not establish
a statistical lower bound, lot acceptance distribution or failure probability
for the printed hardpoint. The supplier expressly presents its sample values
for design reference and comparison, with actual model performance dependent
on printing conditions and geometry.

- Dry PAHT-CF tensile data supply the XY/Z tensile proxies and directional
  moduli. The implemented scatter and 0.5 reductions are engineering assumptions,
  not measured allowables for this print, moisture state, temperature or lifetime.
- Poisson coupling and transverse shear modulus are assumed. The existing
  compliance matrix implies an in-plane-to-print-axis Poisson ratio of about
  0.620 and its reciprocal ratio of 0.350; these are not measured PAHT-CF data.
- Compression is compared to the reduced in-plane tensile proxy because a
  measured compression basis is absent. Interlayer shear, creep, fatigue and
  impact are not qualified by these criteria.
- The three cases represent a fully engaged axial component model, with fixed
  contact patches and prescribed body reactions. They do not solve clearance
  closure, rocking, frictional assembly contact, partial withdrawal, lateral
  forces, pod moments, screw withdrawal or the aircraft structure.
- The hand keeper calculation uses the actual enabled groove at the guide
  mouth and rear, including unsymmetric bending where applicable. Disabling the
  groove in the current design restores the full bar section in the calculation.
  This is a
  beam/bearing comparison, not a substitute for local groove or contact tests.
  Bearing stress uses the smaller of the actual bar bearing width and the
  inspected minimum guide-flat width (4.80 mm for the relieved guide), rather
  than treating the nominal 5.0 mm FEA footprint as a manufacturing minimum.

These limitations are not removed by a passing numerical workflow. Loaded
release, manufacturing fit, mounting strength and environmental performance
remain physical acceptance gates.

## One result, consistently reported

`fea.json`, the field arrays and the viewer carry the same reference load,
source/STEP hashes, three stress criteria, exclusion mask and strength ratio.
Export rejects stale input hashes, mismatched fields or unconverged runs. The
CAD build also stamps its generator/parameter inputs and STEP hashes; FEA
rejects geometry that was not regenerated for those inputs. Each solve run has
a distinct field/summary identity and records its numerical-library versions.
The compression criterion is included in the color field. Elements wholly inside
the support exclusion are marked as unassessed and displayed grey, not as zero
stress. Raw support peaks stay in the numerical report.

The viewer presents a **linear stress screen** and its ratio to the selected
load. Neither this extrapolation nor dividing it by another safety factor assigns
a working-load, measured breaking-load or release rating. R5 fields already
include the provisional material criteria and must not receive the historical
P14 material multiplier.

The old R5 displacement-derived stiffness and vibration values are also
superseded. Those calculations must consume the corrected run for the current
geometry; even then they describe a rigid-wing, linear component approximation,
not a measured aircraft mode or impact load.
The risk report validates the same current input hashes and convergence status
before deriving stiffness, frequency or impact force. Missing FEA leaves these
quantities pending without inserting an assumed stiffness; present but stale or
failed FEA stops the report.

## Separate service-opening yoke screen

`python analysis/actuation_fea.py` evaluates the keeper under the service tab
load plus the frictional sleeve force, with an independent force/moment audit.
Its output is `out/actuation_fea.json` and `out/actuation_fea.md`; it never replaces
the three retention-proof cases or their viewer fields. The keeper uses the
same declared print axis as its exported manufacturing orientation.

The sleeve force comes from the shared coupled opening envelope and acts at
the minimum opening pin height. Its signed vertical component is retained,
and the tab patch includes horizontal friction. To screen yaw-induced
eccentricity, a nonnegative pressure is distributed over an assumed 2 mm-high
by 1 mm-wide patch adjacent to the **-Y wall edge**, opposite the bridge's +Y
widening. The load centroid is 2.0 mm from the bar centre; its eccentricity from
the shifted bridge centroid is larger. The hand check separately uses inspected
minimum sections and an adverse edge-contact envelope. The FEA applies these
bounded forces to nominal CAD with ideal guide supports; it does not reproduce
the complete as-built contact state or its real pressure distribution.

Both 5% mesh gates still apply to the opening model. The usual 1 mm ideal guide
support exclusion remains; no extra exclusion removes yoke corners. Sharp or
unresolved corner stresses cause a failed numerical screen rather than a larger
allowable. This case does not demonstrate full-stroke sliding, arbitrary servo
stall survival, aircraft mounting capacity or printed-process qualification.
The opening study must reach the 0.35 and 0.25 mm local refinements before a
stable pair can pass: two coarse global meshes may otherwise share the same
curvature-controlled fillet discretization. Every load patch also reports its
pressure-weighted displacement vector. Its X component can inform a separate
elastic lost-motion assessment; the maximum displacement magnitude of the
whole keeper is not a release-travel loss. The force-bound opening pose differs
from the release endpoint, and payload drag ceases after disengagement.

Finite-patch force assembly now precedes stiffness allocation. An opening mesh
whose selected facets cannot carry its declared resultant with nonnegative
pressure is rejected with the patch name and mesh size; the report records the
rejection and proceeds to finer meshes. It keeps the physical footprint and
resultant fixed. At least two successful levels and the same local-depth and
5% gates are still required. A running, failed or terminated new study cannot
leave an older passing JSON report in place.
