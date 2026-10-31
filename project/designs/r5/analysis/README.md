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
