"""Memory-bounded direct solve for a constrained, symmetric elastic stiffness."""
import os

# Set before loading MKL through pypardiso. Explicit caller settings remain
# available for a separately verified machine/resource budget.
os.environ.setdefault("MKL_NUM_THREADS", "2")
os.environ.setdefault("OMP_NUM_THREADS", "2")

import numpy as np
import pypardiso
from scipy.sparse import triu


def solve_spd(stiffness, force):
    """Use Cholesky rather than general LU; check against the full matrix outside."""
    stiffness = stiffness.tocsr()
    difference = stiffness - stiffness.T
    asymmetry = np.max(np.abs(difference.data), initial=0.0)
    scale = np.max(np.abs(stiffness.diagonal()), initial=1.0)
    if asymmetry > 1e-10 * scale:
        raise ValueError("elastic stiffness is not symmetric")
    del difference
    upper = triu(stiffness, format="csr")
    solver = pypardiso.PyPardisoSolver(mtype=2)
    try:
        # Matrix type 2 takes only the upper triangle. No factorization is kept
        # for the next mesh, which has an entirely different matrix.
        solution = solver.solve(upper, np.asarray(force, dtype=float))
    finally:
        solver.free_memory(everything=True)
    if not np.isfinite(solution).all():
        raise ValueError("elastic solve produced nonfinite displacements")
    return solution
