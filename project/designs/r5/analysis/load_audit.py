"""Surface loads and independent resultant checks for the R5 component models.

Resultants use the assembly origin, in N and N*mm.  A load patch normally has
uniform traction.  The body reaction patches use a nonnegative affine pressure
to place their resultant at the declared patch centre despite facet-midpoint
selection on different meshes.  This is prescribed traction, not solved contact.
"""
import numpy as np
from skfem import ElementTetP2, ElementVector, FacetBasis, Functional, LinearForm


def horizontal_facets(mesh, candidates, plane_z):
    """Keep whole facets on the intended plane, not just near-plane midpoints."""
    return planar_facets(mesh, candidates, 2, plane_z)


def planar_facets(mesh, candidates, axis, coordinate):
    """Keep whole facets on an axis-aligned physical load plane."""
    candidates = np.asarray(candidates, dtype=int)
    if not len(candidates):
        return candidates
    return candidates[np.all(np.abs(mesh.p[axis, mesh.facets[:, candidates]] - coordinate) < 1e-7, axis=0)]


def facets_inside_band(mesh, candidates, axis, lower, upper):
    """Keep whole facets inside a physical contact footprint, including its edge."""
    candidates = np.asarray(candidates, dtype=int)
    if lower >= upper:
        raise ValueError("contact band must have positive width")
    coordinates = mesh.p[axis, mesh.facets[:, candidates]]
    return candidates[np.all((coordinates >= lower-1e-9) & (coordinates <= upper+1e-9), axis=0)]


def mean_patch_displacement(basis, nodal_force, force, displacement):
    """Integrate displacement with the same pressure weights used for the load.

This is the patch's pressure-weighted vector displacement, not the part maximum
and not automatically the relative displacement of an assembled mechanism.
"""
    force = np.asarray(force, dtype=float)
    component = int(np.argmax(np.abs(force)))
    if force[component] == 0:
        raise ValueError("patch displacement requires a nonzero applied force")
    indices = basis.split_indices()
    weights = np.asarray(nodal_force)[indices[component]] / force[component]
    return np.array([weights @ np.asarray(displacement)[idx] for idx in indices])


def resultants(basis, nodal_force):
    """Sum the actual assembled nodal force and its moment about (0, 0, 0)."""
    nodal_force = np.asarray(nodal_force)
    forces = np.zeros((basis.N, 3))
    for component, indices in enumerate(basis.split_indices()):
        forces[indices, component] = nodal_force[indices]
    return forces.sum(axis=0), np.cross(basis.doflocs.T, forces).sum(axis=0)


def check_resultants(actual, expected, label, rtol=1e-8):
    errors = []
    for name, got, want in zip(("force_N", "moment_Nmm"), actual, expected):
        got, want = np.asarray(got), np.asarray(want)
        scale = max(1.0, float(np.linalg.norm(want)))
        error = float(np.linalg.norm(got - want) / scale)
        if not np.isfinite(error) or error > rtol:
            raise AssertionError(f"{label} {name}: got {got}, expected {want}, relative error {error:.3g}")
        errors.append(error)
    return dict(force_relative_error=errors[0], moment_relative_error=errors[1])


def quadratic_edge_density(coordinates, vertex_bands):
    """Normalized centred rectangular density, zero at its four edges.

    This is a prescribed traction profile, not a solved contact pressure.
    Its analytic relative-density range is [0, 9/4], including the interior
    maximum that a vertex-only audit would miss.
    """
    area = float(np.prod([upper-lower for _, lower, upper in vertex_bands]))
    density = 9.0/(4.0*area)
    for axis, lower, upper in vertex_bands:
        xi = 2.0*(coordinates[axis]-(lower+upper)/2)/(upper-lower)
        density = density*np.maximum(0.0, 1.0-xi*xi)
    return density


def surface_load(mesh, facets, force, application_point=None, pressure_profile=None, vertex_bands=()):
    """Assemble a specified force, returning its audited N / N*mm resultants.

``application_point`` is supported for axis-aligned planar patches. It specifies the
resultant location, not a point load; pressure remains distributed over the
selected facets.  If omitted, uniform traction acts at the mesh patch centroid.

``quadratic_edge_taper`` requires the complete rectangle and its central
resultant. Its degree-four density is integrated with the quadratic shape
functions using degree-six quadrature. No affine recentering is applied.
"""
    if pressure_profile not in (None, "nonnegative_affine", "quadratic_edge_taper"):
        raise ValueError(f"unknown prescribed traction profile: {pressure_profile}")
    if not len(facets):
        raise ValueError("load patch contains no boundary facets")
    tapered = pressure_profile == "quadratic_edge_taper"
    order = 6 if tapered else None
    scalar = FacetBasis(mesh, ElementTetP2(), facets=facets, intorder=order)
    area = float(Functional(lambda w: 1.0).assemble(scalar))
    if not np.isfinite(area) or area <= 0:
        raise ValueError("load patch has nonpositive area")
    centroid = np.array([Functional(lambda w, i=i: w.x[i]).assemble(scalar) / area for i in range(3)])
    target = centroid if application_point is None else np.asarray(application_point, dtype=float)
    coefficients = np.array([1.0 / area, 0.0, 0.0])
    in_plane = (0, 1)
    if application_point is not None or tapered:
        xyz = scalar.global_coordinates()
        normal_axes = np.flatnonzero(np.ptp(xyz.reshape(3, -1), axis=1) < 1e-7)
        if len(normal_axes) != 1 or np.max(np.abs(xyz[normal_axes[0]] - target[normal_axes[0]])) > 1e-7:
            raise ValueError("prescribed resultant requires an axis-aligned planar patch containing the target")
        in_plane = tuple(i for i in range(3) if i != normal_axes[0])
    if tapered:
        bands = tuple((int(axis), float(lower), float(upper)) for axis, lower, upper in vertex_bands)
        if (len(bands) != 2 or {axis for axis, _, _ in bands} != set(in_plane)
                or any(not np.isfinite((lower, upper)).all() or lower >= upper for _, lower, upper in bands)):
            raise ValueError("edge taper requires both finite in-plane rectangle bounds")
        rectangle_area = float(np.prod([upper-lower for _, lower, upper in bands]))
        centre = centroid.copy()
        vertices = mesh.p[:, np.unique(mesh.facets[:, facets])]
        for axis, lower, upper in bands:
            centre[axis] = (lower+upper)/2
            if np.any(vertices[axis] < lower-1e-8) or np.any(vertices[axis] > upper+1e-8):
                raise ValueError("edge taper requires the complete rectangle footprint")
        if not np.isclose(area, rectangle_area, rtol=1e-8, atol=1e-10):
            raise ValueError("edge taper requires the complete rectangle footprint")
        if not np.allclose(target, centre, rtol=0, atol=1e-8):
            raise ValueError("symmetric edge taper requires the rectangle centre; affine recentering is not permitted")
        def weight(w):
            return quadratic_edge_density(w.x, bands)
        integral = float(Functional(weight).assemble(scalar))
        first_moments = np.array([Functional(lambda w, i=i: w.x[i]*weight(w)).assemble(scalar)
                                  for i in range(3)])
        if not np.isclose(integral, 1.0, rtol=1e-10, atol=1e-12) or not np.allclose(first_moments, centre, rtol=0, atol=1e-8):
            raise ValueError("edge-taper scalar quadrature failed normalization or centroid audit")
        profile_report = dict(pressure_profile="quadratic_edge_taper", traction_quadrature_order=6,
                              relative_pressure_min=0.0, relative_pressure_max=2.25,
                              pressure_extrema_basis="analytic range over the full rectangle",
                              scalar_density_integral=integral, scalar_density_centroid_mm=(first_moments/integral).tolist())
    else:
        if application_point is not None:
            def polynomial(w):
                return (1.0 + 0 * w.x[0], w.x[in_plane[0]] - centroid[in_plane[0]], w.x[in_plane[1]] - centroid[in_plane[1]])
            gram = np.array([[Functional(lambda w, i=i, j=j: polynomial(w)[i] * polynomial(w)[j]).assemble(scalar)
                              for j in range(3)] for i in range(3)])
            coefficients = np.linalg.solve(gram, [1.0, target[in_plane[0]] - centroid[in_plane[0]], target[in_plane[1]] - centroid[in_plane[1]]])
        def weight(w):
            return coefficients[0] + coefficients[1] * (w.x[in_plane[0]] - centroid[in_plane[0]]) + coefficients[2] * (w.x[in_plane[1]] - centroid[in_plane[1]])
        # An affine density reaches its extrema at patch vertices. Do not use
        # this vertex-only check for the tapered profile's interior maximum.
        xyz = mesh.p[:, np.unique(mesh.facets[:, facets])]
        weights = coefficients[0] + coefficients[1] * (xyz[in_plane[0]] - centroid[in_plane[0]]) + coefficients[2] * (xyz[in_plane[1]] - centroid[in_plane[1]])
        if weights.min() < -1e-10 / area:
            raise ValueError("resultant location requires negative pressure on the selected patch")
        profile_report = dict(pressure_profile="nonnegative_affine",
                              relative_pressure_min=float(weights.min()*area), relative_pressure_max=float(weights.max()*area),
                              pressure_extrema_basis="affine extrema at selected facet vertices")
    force = np.asarray(force, dtype=float)
    vector = FacetBasis(mesh, ElementVector(ElementTetP2()), facets=facets, intorder=order)
    nodal = LinearForm(lambda v, w: weight(w) * (force[0] * v[0] + force[1] * v[1] + force[2] * v[2])).assemble(vector)
    expected = (force, np.cross(target, force))
    actual = resultants(vector, nodal)
    audit = check_resultants(actual, expected, "assembled surface load")
    return nodal, dict(area_mm2=area, mesh_centroid_mm=centroid.tolist(), application_point_mm=target.tolist(),
                       expected_force_N=force.tolist(), expected_moment_Nmm=expected[1].tolist(),
                       applied_force_N=actual[0].tolist(), applied_moment_Nmm=actual[1].tolist(),
                       **profile_report, **audit)


def support_equilibrium(basis, stiffness, displacement, applied, fixed):
    """Audit actual reactions, including moments; a free residual alone is insufficient."""
    residual = stiffness @ displacement - applied
    reaction = np.zeros_like(applied)
    reaction[fixed] = residual[fixed]
    applied_result = resultants(basis, applied)
    reaction_result = resultants(basis, reaction)
    audit = check_resultants(reaction_result, tuple(-v for v in applied_result), "support equilibrium", rtol=1e-6)
    return dict(reference_point_mm=[0.0, 0.0, 0.0],
                applied_force_N=applied_result[0].tolist(), applied_moment_Nmm=applied_result[1].tolist(),
                reaction_force_N=reaction_result[0].tolist(), reaction_moment_Nmm=reaction_result[1].tolist(), **audit)
