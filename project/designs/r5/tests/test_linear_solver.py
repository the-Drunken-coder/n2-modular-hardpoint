from pathlib import Path
import sys
import unittest

import numpy as np
from scipy.sparse import csr_matrix

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "analysis"))
from linear_solver import solve_spd


class ElasticSolverTests(unittest.TestCase):
    def test_full_matrix_reference_and_repeated_factor_cleanup(self):
        matrix = np.array([[6.0, -2.0, 1.0], [-2.0, 5.0, -1.0], [1.0, -1.0, 4.0]])
        force = np.array([2.0, -3.0, 7.0])
        for scale in (1.0, 1.7):
            solution = solve_spd(csr_matrix(matrix * scale), force)
            np.testing.assert_allclose(solution, np.linalg.solve(matrix * scale, force), rtol=1e-12, atol=1e-12)
            np.testing.assert_allclose(matrix * scale @ solution, force, rtol=1e-12, atol=1e-12)

    def test_asymmetric_matrix_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "not symmetric"):
            solve_spd(csr_matrix([[2.0, 1.0], [0.0, 2.0]]), [1.0, 1.0])


if __name__ == "__main__":
    unittest.main()
