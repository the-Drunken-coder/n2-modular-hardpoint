"""Conforming meshes for prescribed rectangular boundary tractions.

Partition existing solid faces along the declared patch edges. This changes
mesh topology, not CAD volume or load footprints. Narrow strips then retain
their exact area and centroid even on the first bulk mesh; no negative affine
pressure is needed to compensate for accidental partial-facet coverage.
"""
import gmsh
import numpy as np
from skfem import MeshTet

from load_audit import facets_inside_band, planar_facets


def patch_corners(patch):
    axis, coordinate = patch["plane"]
    bands = patch["vertex_bands"]
    if axis not in (0, 1, 2) or len(bands) != 2 or {a for a, _, _ in bands} != {0, 1, 2}-{axis}:
        raise ValueError("traction partition needs both in-plane rectangle bounds")
    if not np.isfinite(coordinate) or any(not np.isfinite((lo, hi)).all() or lo >= hi for _, lo, hi in bands):
        raise ValueError("traction partition needs finite positive rectangle dimensions")
    (u, ulo, uhi), (v, vlo, vhi) = bands
    corners = []
    for a, b in ((ulo, vlo), (uhi, vlo), (uhi, vhi), (ulo, vhi)):
        point = np.zeros(3)
        point[axis], point[u], point[v] = coordinate, a, b
        corners.append(point)
    return np.asarray(corners)


def audit_patch_geometry(mesh, patch):
    """Require the complete prescribed rectangle on the actual solid boundary."""
    facets = planar_facets(mesh, mesh.boundary_facets(), *patch["plane"])
    for axis, lo, hi in patch["vertex_bands"]:
        facets = facets_inside_band(mesh, facets, axis, lo, hi)
    triangles = mesh.p[:, mesh.facets[:, facets]].transpose(2, 1, 0)
    areas = np.linalg.norm(np.cross(triangles[:, 1]-triangles[:, 0],
                                    triangles[:, 2]-triangles[:, 0]), axis=1)/2
    expected_area = float(np.prod([hi-lo for _, lo, hi in patch["vertex_bands"]]))
    area = float(areas.sum())
    if not np.isclose(area, expected_area, rtol=1e-8, atol=1e-10):
        raise ValueError(f"{patch['name']}: complete traction rectangle is not on the solid boundary: {area} vs {expected_area} mm²")
    centroid = (areas[:, None]*triangles.mean(axis=1)).sum(axis=0)/area
    expected_centroid = patch_corners(patch).mean(axis=0)
    if not np.allclose(centroid, expected_centroid, rtol=0, atol=1e-7):
        raise ValueError(f"{patch['name']}: partitioned rectangle centroid changed")
    return dict(area_mm2=area, centroid_mm=centroid.tolist(), facets=len(facets))


def mesh_with_traction_partitions(step, h, global_h=None, centres=(), radius=1.5, *, patches):
    """Match fea.mesh_step's size policy, adding only exact boundary partitions."""
    global_h = h if global_h is None else global_h
    gmsh.initialize()
    try:
        gmsh.option.setNumber("General.Terminal", 0)
        gmsh.model.occ.importShapes(str(step))
        gmsh.model.occ.synchronize()
        volumes = gmsh.model.getEntities(3)
        if not volumes:
            raise ValueError("traction mesh requires a solid STEP volume")
        initial_volume = sum(gmsh.model.occ.getMass(*v) for v in volumes)
        surfaces = []
        for patch in patches:
            points = [gmsh.model.occ.addPoint(*xyz) for xyz in patch_corners(patch)]
            lines = [gmsh.model.occ.addLine(points[i], points[(i+1) % 4]) for i in range(4)]
            loop = gmsh.model.occ.addCurveLoop(lines)
            surfaces.append((2, gmsh.model.occ.addPlaneSurface([loop])))
        gmsh.model.occ.fragment(volumes, surfaces)
        gmsh.model.occ.synchronize()
        final_volumes = gmsh.model.getEntities(3)
        final_volume = sum(gmsh.model.occ.getMass(*v) for v in final_volumes)
        if len(final_volumes) != len(volumes) or not np.isclose(final_volume, initial_volume, rtol=1e-9, atol=1e-9):
            raise ValueError("traction partition changed the solid volume or split the solid")
        gmsh.option.setNumber("Mesh.MeshSizeMax", global_h)
        gmsh.option.setNumber("Mesh.MeshSizeMin", h/3)
        gmsh.option.setNumber("Mesh.MeshSizeFromCurvature", 12)
        gmsh.option.setNumber("Mesh.MeshSizeExtendFromBoundary", 0)
        if centres:
            fields = []
            for centre in centres:
                field = gmsh.model.mesh.field.add("Ball")
                for key, value in dict(XCenter=centre[0], YCenter=centre[1], ZCenter=centre[2],
                        Radius=radius, Thickness=global_h, VIn=h, VOut=global_h).items():
                    gmsh.model.mesh.field.setNumber(field, key, float(value))
                fields.append(field)
            background = gmsh.model.mesh.field.add("Min")
            gmsh.model.mesh.field.setNumbers(background, "FieldsList", fields)
            gmsh.model.mesh.field.setAsBackgroundMesh(background)
        gmsh.model.mesh.generate(3)
        tags, xyz, _ = gmsh.model.mesh.getNodes()
        _, _, connectivity = gmsh.model.mesh.getElements(3)
    finally:
        gmsh.finalize()
    points = np.zeros((tags.max()+1, 3))
    points[tags] = xyz.reshape(-1, 3)
    tetrahedra = connectivity[0].reshape(-1, 4).T
    used, inverse = np.unique(tetrahedra, return_inverse=True)
    mesh = MeshTet(points[used].T, inverse.reshape(tetrahedra.shape))
    for patch in patches:
        audit_patch_geometry(mesh, patch)
    return mesh
