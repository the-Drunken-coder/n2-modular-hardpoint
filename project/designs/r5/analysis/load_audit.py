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
    candidates = np.asarray(candidates, dtype=int)
    if not len(candidates):
        return candidates
    return candidates[np.all(np.abs(mesh.p[2, mesh.facets[:, candidates]] - plane_z) < 1e-7, axis=0)]


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


def surface_load(mesh, facets, force, application_point=None):
    """Assemble a specified force, returning its audited N / N*mm resultants.

``application_point`` is supported for horizontal patches.  It specifies the
resultant location, not a point load; pressure remains distributed over the
selected facets.  If omitted, uniform traction acts at the mesh patch centroid.
"""
    if not len(facets):
        raise ValueError("load patch contains no boundary facets")
    scalar = FacetBasis(mesh, ElementTetP2(), facets=facets)
    area = float(Functional(lambda w: 1.0).assemble(scalar))
    if not np.isfinite(area) or area <= 0:
        raise ValueError("load patch has nonpositive area")
    centroid = np.array([Functional(lambda w, i=i: w.x[i]).assemble(scalar) / area for i in range(3)])
    target = centroid if application_point is None else np.asarray(application_point, dtype=float)
    coefficients = np.array([1.0 / area, 0.0, 0.0])
    if application_point is not None:
        xyz = scalar.global_coordinates()
        if np.max(np.abs(xyz[2] - target[2])) > 1e-7:
            raise ValueError("prescribed resultant requires a horizontal patch at the target Z")
        def polynomial(w):
            return (1.0 + 0 * w.x[0], w.x[0] - centroid[0], w.x[1] - centroid[1])
        gram = np.array([[Functional(lambda w, i=i, j=j: polynomial(w)[i] * polynomial(w)[j]).assemble(scalar)
                          for j in range(3)] for i in range(3)])
        coefficients = np.linalg.solve(gram, [1.0, target[0] - centroid[0], target[1] - centroid[1]])
    def weight(w):
        return coefficients[0] + coefficients[1] * (w.x[0] - centroid[0]) + coefficients[2] * (w.x[1] - centroid[1])
    # An affine pressure reaches its extrema at patch vertices.  Do not silently
    # introduce tensile contact to enforce an inadmissible resultant location.
    xyz = mesh.p[:, np.unique(mesh.facets[:, facets])]
    weights = coefficients[0] + coefficients[1] * (xyz[0] - centroid[0]) + coefficients[2] * (xyz[1] - centroid[1])
    if weights.min() < -1e-10 / area:
        raise ValueError("resultant location requires negative pressure on the selected patch")
    force = np.asarray(force, dtype=float)
    vector = FacetBasis(mesh, ElementVector(ElementTetP2()), facets=facets)
    nodal = LinearForm(lambda v, w: weight(w) * (force[0] * v[0] + force[1] * v[1] + force[2] * v[2])).assemble(vector)
    expected = (force, np.cross(target, force))
    actual = resultants(vector, nodal)
    audit = check_resultants(actual, expected, "assembled surface load")
    return nodal, dict(area_mm2=area, mesh_centroid_mm=centroid.tolist(), application_point_mm=target.tolist(),
                       expected_force_N=force.tolist(), expected_moment_Nmm=expected[1].tolist(),
                       applied_force_N=actual[0].tolist(), applied_moment_Nmm=actual[1].tolist(),
                       relative_pressure_min=float(weights.min() * area), relative_pressure_max=float(weights.max() * area),
                       **audit)


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
