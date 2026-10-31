"""Exact finite-traction geometry on a small real Gmsh mesh."""
from pathlib import Path
import sys
import tempfile
import unittest

import gmsh
import numpy as np

R5 = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(R5/"analysis"))
from load_audit import facets_inside_band, planar_facets, surface_load
from traction_mesh import audit_patch_geometry, mesh_with_traction_partitions, traction_refinement_fields


class TractionPartitionTests(unittest.TestCase):
    def test_finer_peak_field_is_not_suppressed_by_nearby_baseline_patch(self):
        centres = [[0., 0., 0.], [2., 0., 0.]]
        peaks = [[.1, 0., 0.], [2.1, 0., 0.]]
        fields = traction_refinement_fields(.16, centres, .8, .22, peaks)
        baseline = [f for f in fields if f["h_mm"] == .22]
        fine = [f for f in fields if f["h_mm"] == .16]
        self.assertEqual(len(baseline), 2)
        self.assertEqual(len(fine), 2)
        for point in peaks:
            self.assertTrue(any(np.linalg.norm(np.array(point)-f["centre_mm"]) < f["radius_mm"] for f in fine))
        coarse = traction_refinement_fields(.3, centres, .8, .22, peaks)
        self.assertEqual(len(coarse), 2)
        self.assertTrue(all(f["h_mm"] == .3 for f in coarse))

    def test_narrow_rectangles_preserve_volume_centroid_and_uniform_pressure(self):
        patches = [dict(name="small_x", plane=(0, 0.), vertex_bands=((1, .55, 1.35), (2, 1.8, 2.2))),
                   dict(name="small_y", plane=(1, 3.), vertex_bands=((0, .4, 1.4), (2, .6, 1.2)))]
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory)/"cube.step"
            gmsh.initialize()
            try:
                gmsh.option.setNumber("General.Terminal", 0)
                gmsh.model.occ.addBox(0, 0, 0, 2, 3, 4)
                gmsh.model.occ.synchronize()
                gmsh.write(str(path))
            finally:
                gmsh.finalize()
            mesh = mesh_with_traction_partitions(path, .8, patches=patches)
        xyz = mesh.p[:, mesh.t].transpose(2, 1, 0)
        volume = np.abs(np.linalg.det(xyz[:, 1:]-xyz[:, :1])).sum()/6
        self.assertAlmostEqual(volume, 24., places=9)
        for patch in patches:
            audit = audit_patch_geometry(mesh, patch)
            expected_area = np.prod([hi-lo for _, lo, hi in patch["vertex_bands"]])
            self.assertAlmostEqual(audit["area_mm2"], expected_area, places=10)
            facets = planar_facets(mesh, mesh.boundary_facets(), *patch["plane"])
            for axis, lo, hi in patch["vertex_bands"]:
                facets = facets_inside_band(mesh, facets, axis, lo, hi)
            _, report = surface_load(mesh, facets, [7., -2., 3.], audit["centroid_mm"])
            self.assertAlmostEqual(report["relative_pressure_min"], 1., places=10)
            self.assertAlmostEqual(report["relative_pressure_max"], 1., places=10)
            np.testing.assert_allclose(report["applied_force_N"], [7., -2., 3.], atol=1e-12)
        outside = dict(name="outside", plane=(0, 0.), vertex_bands=((1, 2.5, 3.5), (2, 1., 2.)))
        with self.assertRaisesRegex(ValueError, "not on the solid boundary"):
            audit_patch_geometry(mesh, outside)


if __name__ == "__main__":
    unittest.main()
