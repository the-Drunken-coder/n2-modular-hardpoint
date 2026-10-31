"""Exercise actual local sizing and the resource stop before matrix assembly."""
from pathlib import Path
import sys
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import Mock, patch

import gmsh
import numpy as np
from skfem import MeshTet

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5 / "analysis")]
import fea


class MeshRefinementTests(unittest.TestCase):
    def test_inadmissible_named_load_patch_fails_before_stiffness_allocation(self):
        mesh = MeshTet.init_refdom()
        matrix = Mock(side_effect=AssertionError("stiffness allocation reached"))
        case = dict(part="keeper", print_axis=1, global_floor_mm=1., loads=[dict(
            name="declared finite sleeve patch", select=lambda x: x[0] > 5.,
            force=(1., 0., 0.), application_point=(5., 0., 0.))])
        with patch.object(fea, "mesh_step", return_value=mesh), \
                patch.object(fea, "BilinearForm", lambda function: SimpleNamespace(assemble=matrix)):
            with self.assertRaisesRegex(fea.InvalidLoadPatch, "declared finite sleeve patch"):
                fea.run_case(case, 1.)
        matrix.assert_not_called()

    def test_reported_peak_element_size_uses_actual_geometry_and_quadrature_mapping(self):
        mesh = MeshTet(np.array([[0., 1., 0., 0., 2.],
                                 [0., 0., 1., 0., 2.],
                                 [0., 0., 0., 1., 2.]]),
                       np.array([[0, 1], [1, 2], [2, 3], [3, 4]]))
        first = fea.governing_element_geometry(mesh, 3, 4)
        second = fea.governing_element_geometry(mesh, 6, 4)
        self.assertEqual(first["element_index"], 0)
        self.assertEqual(second["element_index"], 1)
        self.assertAlmostEqual(first["max_edge_mm"], np.sqrt(2))
        self.assertAlmostEqual(second["max_edge_mm"], 3.0)
        np.testing.assert_allclose(first["centroid_mm"], [0.25, 0.25, 0.25])
        np.testing.assert_allclose(second["centroid_mm"], [0.75, 0.75, 0.75])

    def test_local_refinement_retains_physical_zones_and_all_old_peaks(self):
        case = dict(global_floor_mm=1.0, bearing_points=[[0, 0, 0], [0, 2, 0]])
        global_h, centres = fea.refinement_plan(case, 0.5, [[3, 2, 1], [6, 5, 4]])
        self.assertEqual(global_h, 1.0)
        for physical_or_peak in ([0, 0, 0], [0, 2, 0], [3, 2, 1], [6, 5, 4]):
            self.assertIn(physical_or_peak, centres)

    def test_excessive_mesh_fails_before_stiffness_or_solver_allocation(self):
        mesh = MeshTet.init_refdom()
        with patch.object(fea, "mesh_step", return_value=mesh), patch.object(fea, "MAX_DOFS", 1), \
                patch.object(fea, "Basis", side_effect=AssertionError("matrix allocation reached")):
            with self.assertRaisesRegex(fea.MeshBudgetExceeded, "convergence remains unresolved"):
                fea.run_case(dict(part="keeper"), 1.0)

    def test_compact_body_fields_cover_the_complete_bearing_rectangles(self):
        case = fea.CASES["body"]
        centres = np.array(case["bearing_points"])
        # Rectangle edges and Voronoi-cell corners attain the greatest distance
        # to the regular centre grid; these are not arbitrary random samples.
        for cx, z in ((fea.PATCH_X[0], fea.p.ZK-(fea.p.KEEPER_W+fea.p.SLIDE)/2),
                      (fea.PATCH_X[1], fea.p.ZK+(fea.p.KEEPER_W+fea.p.SLIDE)/2)):
            for dx in (-fea.PATCH/2, 0, fea.PATCH/2):
                for dy in np.linspace(-fea.p.KEEPER_W/2, fea.p.KEEPER_W/2, 11):
                    point = np.array([cx+dx, fea.p.YK+dy, z])
                    self.assertLessEqual(np.linalg.norm(centres-point, axis=1).min(), case["refinement_radius_mm"])

    def test_gmsh_refines_the_selected_region_without_global_refinement(self):
        # A STEP box supplies independent, uncomplicated geometry. The actual
        # mesher must create finer edges near the requested point than far away.
        with tempfile.TemporaryDirectory() as directory:
            step = Path(directory) / "box.step"
            gmsh.initialize()
            try:
                gmsh.option.setNumber("General.Terminal", 0)
                gmsh.model.occ.addBox(0, 0, 0, 6, 4, 4)
                gmsh.model.occ.synchronize()
                gmsh.write(str(step))
            finally:
                gmsh.finalize()
            mesh = fea.mesh_step(step, 0.25, global_h=1.0, centres=[[0, 2, 2]], radius=1.0)
            end_a, end_b = mesh.p[:, mesh.edges[0]], mesh.p[:, mesh.edges[1]]
            midpoint = (end_a + end_b) / 2
            lengths = np.linalg.norm(end_a - end_b, axis=0)
            distance = np.linalg.norm(midpoint - np.array([[0], [2], [2]]), axis=0)
            near, far = lengths[distance < 0.8], lengths[distance > 3.0]
            self.assertGreater(len(near), 50)
            self.assertGreater(len(far), 50)
            self.assertLess(np.median(near), 0.6 * np.median(far))
            self.assertFalse(gmsh.isInitialized())


if __name__ == "__main__":
    unittest.main()
