"""Independent force/moment regressions; no generated CAD or whole-part FEA needed."""
from pathlib import Path
import sys
import unittest

import numpy as np
from skfem import Basis, ElementTetP2, ElementVector, MeshTet

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "analysis"))
from load_audit import (check_resultants, facets_inside_band, horizontal_facets, mean_patch_displacement,
                        planar_facets, resultants, surface_load)


class SurfaceLoadTests(unittest.TestCase):
    def setUp(self):
        self.mesh = MeshTet.init_refdom()
        self.facets = self.mesh.facets_satisfying(lambda x: np.isclose(x[2], 0))
        self.basis = Basis(self.mesh, ElementVector(ElementTetP2()))

    def test_quadratic_tetra_facet_applies_full_proof_force(self):
        force = np.array([0.0, 0.0, -17.8088764])
        nodal, report = surface_load(self.mesh, self.facets, force)
        self.assertAlmostEqual(report["area_mm2"], 0.5)
        actual_force, actual_moment = resultants(self.basis, nodal)
        np.testing.assert_allclose(actual_force, force, atol=1e-12)
        np.testing.assert_allclose(actual_moment, np.cross([1 / 3, 1 / 3, 0], force), atol=1e-12)

    def test_force_and_moment_audit_rejects_one_tenth_load(self):
        force = np.array([3.0, -4.0, -17.8088764])
        nodal, _ = surface_load(self.mesh, self.facets, force)
        expected = force, np.cross([1 / 3, 1 / 3, 0], force)
        with self.assertRaisesRegex(AssertionError, "force_N"):
            check_resultants(resultants(self.basis, nodal / 10), expected, "regression")

    def test_prescribed_patch_centre_preserves_moment(self):
        target = np.array([0.30, 0.30, 0.0])
        force = np.array([0.0, 0.0, -17.8088764])
        nodal, report = surface_load(self.mesh, self.facets, force, target)
        np.testing.assert_allclose(resultants(self.basis, nodal)[1], np.cross(target, force), atol=1e-12)
        self.assertGreaterEqual(report["relative_pressure_min"], 0)

    def test_vertical_pin_patch_preserves_force_and_friction_moment(self):
        facets = planar_facets(self.mesh, self.mesh.boundary_facets(), 0, 0.0)
        self.assertEqual(len(facets), 1)
        target = np.array([0.0, 0.30, 0.30])
        force = np.array([7.1681, 0.0, 2.508835])
        nodal, report = surface_load(self.mesh, facets, force, target)
        self.assertAlmostEqual(report["area_mm2"], 0.5)
        actual_force, actual_moment = resultants(self.basis, nodal)
        np.testing.assert_allclose(actual_force, force, atol=1e-12)
        np.testing.assert_allclose(actual_moment, np.cross(target, force), atol=1e-12)
        self.assertGreaterEqual(report["relative_pressure_min"], 0.0)

    def test_off_plane_application_point_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "planar patch containing"):
            surface_load(self.mesh, self.facets, [0, 0, -1], [0.3, 0.3, 0.1])

    def test_physical_footprint_rejects_a_facet_that_only_has_its_midpoint_inside(self):
        # The base midpoint has Y=1/3, but one vertex extends to Y=1. A finite
        # keeper footprint ending at Y=0.7 must not put pressure on that vertex.
        self.assertEqual(len(facets_inside_band(self.mesh, self.facets, 1, 0.0, 0.7)), 0)
        np.testing.assert_array_equal(facets_inside_band(self.mesh, self.facets, 1, 0.0, 1.0), self.facets)

    def test_pressure_weighted_displacement_integrates_a_known_linear_field(self):
        force = np.array([7.0, 0.0, 2.0])
        target = np.array([0.3, 0.3, 0.0])
        nodal, _ = surface_load(self.mesh, self.facets, force, target)
        transform = np.array([[1, 2, 3], [2, 0, 1], [0, -1, 2]], dtype=float)
        offset = np.array([0.1, -0.2, 0.3])
        displacement = np.zeros(self.basis.N)
        for component, indices in enumerate(self.basis.split_indices()):
            displacement[indices] = transform[component] @ self.basis.doflocs[:, indices] + offset[component]
        np.testing.assert_allclose(mean_patch_displacement(self.basis, nodal, force, displacement),
                                   transform @ target + offset, atol=1e-12)

    def test_resultant_outside_patch_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "negative pressure"):
            surface_load(self.mesh, self.facets, [0, 0, -1], [2, 2, 0])

    def test_empty_patch_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "no boundary facets"):
            surface_load(self.mesh, np.array([], dtype=int), [0, 0, -1])

    def test_plane_selection_rejects_near_plane_sloping_facets(self):
        # A midpoint-only near-plane selection admits the sides of a shallow
        # tetrahedron; the physical pressure patch is its horizontal base only.
        shallow = MeshTet(self.mesh.p * np.array([[1], [1], [0.0001]]), self.mesh.t)
        selected = horizontal_facets(shallow, shallow.boundary_facets(), 0.0)
        self.assertEqual(len(selected), 1)
        self.assertTrue(np.all(shallow.p[2, shallow.facets[:, selected]] == 0))

    def test_moment_audit_rejects_correct_force_at_wrong_location(self):
        force = np.array([0.0, 0.0, -17.8088764])
        correct = force, np.cross([10, 40, 0], force)
        wrong = force, np.cross([11.3, 40, 0], force)
        with self.assertRaisesRegex(AssertionError, "moment_Nmm"):
            check_resultants(wrong, correct, "body reaction regression")


if __name__ == "__main__":
    unittest.main()
