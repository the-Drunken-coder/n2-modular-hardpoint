"""Finite ear-traction profile: exact P2 virtual work and independent wrenches."""
from pathlib import Path
import sys
import unittest

import numpy as np
from skfem import Basis, ElementTetP2, ElementVector, MeshTet

R5 = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(R5/"analysis"))
from load_audit import (facets_inside_band, mean_patch_displacement, planar_facets,
                        quadratic_edge_density, surface_load)


class EdgeTractionProfileTests(unittest.TestCase):
    def setUp(self):
        self.mesh = MeshTet.init_tensor(np.linspace(0, 2, 5), np.linspace(0, 1, 3), np.linspace(0, 1, 3))
        self.bands = ((0, .5, 1.5), (2, 0., 1.))
        self.centre = np.array([1., 0., .5])
        self.facets = planar_facets(self.mesh, self.mesh.boundary_facets(), 1, 0.)
        for axis, lo, hi in self.bands:
            self.facets = facets_inside_band(self.mesh, self.facets, axis, lo, hi)

    def assemble(self, force, **kwargs):
        return surface_load(self.mesh, self.facets, force, kwargs.pop("point", self.centre),
                            pressure_profile="quadratic_edge_taper", vertex_bands=self.bands, **kwargs)

    def test_centre_and_all_four_edges_have_the_analytic_density(self):
        probes = np.array([[1, 0, .5], [.5, 0, .5], [1.5, 0, .5],
                           [1, 0, 0], [1, 0, 1], [.4, 0, .5]]).T
        np.testing.assert_allclose(quadratic_edge_density(probes, self.bands), [2.25, 0, 0, 0, 0, 0])

    def test_force_and_moment_are_preserved_for_normal_tension_and_shear(self):
        for force in ([7., -2., 3.], [-4., 6., -1.]):
            with self.subTest(force=force):
                _, report = self.assemble(force)
                np.testing.assert_allclose(report["applied_force_N"], force, atol=1e-12)
                np.testing.assert_allclose(report["applied_moment_Nmm"], np.cross(self.centre, force), atol=1e-12)
                self.assertAlmostEqual(report["scalar_density_integral"], 1., places=12)
                np.testing.assert_allclose(report["scalar_density_centroid_mm"], self.centre, atol=1e-12)
                self.assertEqual(report["traction_quadrature_order"], 6)
                self.assertEqual(report["relative_pressure_min"], 0.)
                self.assertEqual(report["relative_pressure_max"], 2.25)

    def test_degree_six_virtual_work_matches_quadratic_displacement_integrals(self):
        force, report = self.assemble([7., -2., 3.])
        basis = Basis(self.mesh, ElementVector(ElementTetP2()))
        u = np.zeros(basis.N)
        for component, indices in enumerate(basis.split_indices()):
            x, _, z = basis.doflocs[:, indices]
            u[indices] = (x*x+z*z, x*z, z*z-x*x)[component]
        # Each normalized one-dimensional parabolic density has variance L²/20.
        np.testing.assert_allclose(mean_patch_displacement(basis, force, [7., -2., 3.], u),
                                   [1.35, .5, -.75], atol=1e-12)

    def test_noncentral_resultant_is_rejected_instead_of_affine_recentering(self):
        with self.assertRaisesRegex(ValueError, "rectangle centre"):
            self.assemble([1, 0, 0], point=self.centre+[.1, 0, 0])

    def test_partial_rectangle_cannot_be_renormalized_into_the_same_claim(self):
        self.facets = facets_inside_band(self.mesh, self.facets, 0, .5, 1.)
        with self.assertRaisesRegex(ValueError, "complete rectangle"):
            self.assemble([1, 0, 0])

    def test_missing_bounds_or_unknown_profile_cannot_silently_use_uniform_load(self):
        with self.assertRaisesRegex(ValueError, "rectangle bounds"):
            surface_load(self.mesh, self.facets, [1, 0, 0], self.centre,
                         pressure_profile="quadratic_edge_taper")
        with self.assertRaisesRegex(ValueError, "unknown prescribed"):
            surface_load(self.mesh, self.facets, [1, 0, 0], self.centre, pressure_profile="unrecognized")


if __name__ == "__main__":
    unittest.main()
