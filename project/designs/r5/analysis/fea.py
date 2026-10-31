"""Linear FEA of the three R5 printed parts at the 17.8 N proof load.

Transversely isotropic PAHT-CF (layer plane stiff, print axis soft). Stress is
checked two ways per element quadrature point:
  max principal tension   vs ALLOW_XY   (in-layer)
  normal stress across layers (print axis) vs ALLOW_Z
Two mesh sizes per part; the finer one is reported.

    python project/designs/r5/analysis/fea.py   (needs ../out from cad/build.py)
"""
import json
import sys
from pathlib import Path

import gmsh
import numpy as np
from skfem import (Basis, BilinearForm, ElementTetP2, ElementVector, FacetBasis,
                   LinearForm, MeshTet, condense, solve)
from skfem.helpers import sym_grad, ddot
import pyamg

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402

OUT = HERE.parent / "out"
P = p.P_PROOF


def stiffness(axis):
    """6x6 Voigt stiffness, print axis = 0/1/2 (x/y/z)."""
    e1, e3, n12, n13 = p.E_XY, p.E_Z, p.NU, p.NU * p.E_Z / p.E_XY * 1.0
    g12 = e1 / (2 * (1 + n12))
    g13 = e3 / (2 * (1 + p.NU))
    n31 = n13 * e1 / e3
    S = np.zeros((6, 6))
    S[0, 0] = S[1, 1] = 1 / e1
    S[2, 2] = 1 / e3
    S[0, 1] = S[1, 0] = -n12 / e1
    S[0, 2] = S[2, 0] = S[1, 2] = S[2, 1] = -n31 / e3
    S[3, 3] = S[4, 4] = 1 / g13          # yz, xz
    S[5, 5] = 1 / g12                    # xy
    C = np.linalg.inv(S)
    perm = {2: [0, 1, 2], 1: [0, 2, 1], 0: [2, 1, 0]}[axis]
    full = np.zeros((3, 3, 3, 3))
    vo = {(0, 0): 0, (1, 1): 1, (2, 2): 2, (1, 2): 3, (2, 1): 3, (0, 2): 4, (2, 0): 4,
          (0, 1): 5, (1, 0): 5}
    for i in range(3):
        for j in range(3):
            for k in range(3):
                for l in range(3):
                    full[perm[i], perm[j], perm[k], perm[l]] = C[vo[i, j], vo[k, l]]
    return full


def mesh_step(step, h):
    gmsh.initialize()
    gmsh.option.setNumber("General.Terminal", 0)
    gmsh.model.occ.importShapes(str(step))
    gmsh.model.occ.synchronize()
    gmsh.option.setNumber("Mesh.MeshSizeMax", h)
    gmsh.option.setNumber("Mesh.MeshSizeMin", h / 3)
    gmsh.option.setNumber("Mesh.MeshSizeFromCurvature", 12)
    gmsh.model.mesh.generate(3)
    tags, xyz, _ = gmsh.model.mesh.getNodes()
    _, _, conn = gmsh.model.mesh.getElements(3)
    gmsh.finalize()
    pts = np.zeros((tags.max() + 1, 3))
    pts[tags] = xyz.reshape(-1, 3)
    t = conn[0].reshape(-1, 4).T
    used, inv = np.unique(t, return_inverse=True)
    return MeshTet(pts[used].T, inv.reshape(t.shape))


def run_case(case, h):
    m = mesh_step(OUT / f"{case['part']}.step", h)
    e = ElementVector(ElementTetP2())
    ib = Basis(m, e, intorder=2)
    C = stiffness(case["print_axis"])

    @BilinearForm
    def a(u, v, w):
        sig = np.einsum("ijkl,kl...->ij...", C, sym_grad(u))
        return ddot(sig, sym_grad(v))

    K = a.assemble(ib)
    f = np.zeros(K.shape[0])
    for sel, force in case["loads"]:
        facets = np.intersect1d(m.facets_satisfying(sel), m.boundary_facets())
        assert len(facets) > 0, case["part"]
        fb = FacetBasis(m, e, facets=facets)
        area = LinearForm(lambda v, w: 1.0 + 0 * v[0]).assemble(FacetBasis(m, ElementTetP2(), facets=facets)).sum()
        t = np.array(force) / area

        @LinearForm
        def lf(v, w):
            return t[0] * v[0] + t[1] * v[1] + t[2] * v[2]
        f += lf.assemble(fb)
    assert len(fixed_pre := np.intersect1d(m.facets_satisfying(case["fixed"]), m.boundary_facets())) > 0
    fixed = np.intersect1d(m.facets_satisfying(case["fixed"]), m.boundary_facets())
    D = ib.get_dofs(fixed).all()
    ml = pyamg.smoothed_aggregation_solver(K.tocsr()[np.setdiff1d(np.arange(K.shape[0]), D)][:, np.setdiff1d(np.arange(K.shape[0]), D)])
    x = solve(*condense(K, f, D=D), solver=lambda A, b: ml.solve(b, tol=1e-10, accel="cg"))
    # stresses at quadrature points
    u = ib.interpolate(x)
    sig = np.einsum("ijkl,kl...->ij...", C, sym_grad(u))
    s = np.moveaxis(sig.reshape(3, 3, -1), -1, 0)
    princ = np.linalg.eigvalsh(s)
    ax = case["print_axis"]
    res = {
        "h_mm": h, "dofs": int(K.shape[0]),
        "max_disp_mm": float(np.abs(x.reshape(-1, 3) if False else x).max()),
        "max_principal_MPa": float(princ[:, -1].max()),
        "min_principal_MPa": float(princ[:, 0].min()),
        "max_across_layer_tension_MPa": float(s[:, ax, ax].max()),
        "p99_9_principal_MPa": float(np.percentile(princ[:, -1], 99.9)),
    }
    res["margin_in_layer"] = p.ALLOW_XY / res["max_principal_MPa"]
    res["margin_across_layer"] = p.ALLOW_Z / max(res["max_across_layer_tension_MPa"], 1e-9)
    res["margin_compression"] = p.ALLOW_XY / abs(res["min_principal_MPa"])
    return res


def near(v, a, tol=1e-3):
    return np.abs(v - a) < tol


h = p.KEEPER_W / 2
R1, R2 = P * (1 + 1.9 / 16), P * 1.9 / 16       # tunnel reactions on the keeper
CASES = {
    # keeper cantilevered from the tunnel mouth; tab bears on its top face
    "keeper": dict(part="keeper", print_axis=1, sizes=(0.8, 0.5),
                   fixed=lambda x: (near(x[2], p.ZK - h) & (x[0] > 11.4) & (x[0] < 13.4))
                   | (near(x[2], p.ZK + h) & (x[0] > 25.4) & (x[0] < 27.4)),
                   loads=[(lambda x: near(x[2], p.ZK + h) & (x[0] > p.TAB_X[0]) & (x[0] < p.TAB_X[1]),
                           (0, 0, -P))]),
    # adapter held at the hole top (keeper contact); payload pulls the plate down
    "adapter": dict(part="adapter", print_axis=2, sizes=(0.8, 0.5),
                    fixed=lambda x: near(x[2], p.HOLE_TOP_LOADED) & (np.abs(x[1] - p.YK) < p.HOLE_W / 2),
                    loads=[(lambda x: near(x[2], p.ADAPTER["z"][0]), (0, 0, -P))]),
    # body fixed at the four screw pilots; keeper reactions on the tunnel
    "body": dict(part="body", print_axis=2, sizes=(2.0, 1.4),
                 fixed=lambda x: np.any([np.hypot(x[0] - bx, x[1] - by) < p.PILOT_M3 / 2 + 0.05
                                         for bx, by in p.BOSSES], axis=0) & (x[2] > 10),
                 loads=[(lambda x: near(x[2], p.ZK - (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > 11.4) & (x[0] < 13.4), (0, 0, -R1)),
                        (lambda x: near(x[2], p.ZK + (p.KEEPER_W + p.SLIDE) / 2) & (x[0] > 25.4) & (x[0] < 27.4), (0, 0, R2))]),
}


def main():
    summary = {"load_N": P, "allow_in_layer_MPa": p.ALLOW_XY, "allow_across_layer_MPa": p.ALLOW_Z, "cases": {}}
    for name, c in CASES.items():
        runs = [run_case(c, s) for s in c["sizes"]]
        fine = runs[-1]
        fine["disp_change_pct"] = 100 * abs(runs[-1]["max_disp_mm"] - runs[0]["max_disp_mm"]) / runs[-1]["max_disp_mm"]
        summary["cases"][name] = {"coarse": runs[0], "fine": fine}
        print(name, json.dumps(fine, indent=1), flush=True)
    worst = min(min(v["fine"]["margin_in_layer"], v["fine"]["margin_across_layer"], v["fine"]["margin_compression"])
                for v in summary["cases"].values())
    summary["min_margin"] = worst
    (OUT / "fea.json").write_text(json.dumps(summary, indent=2))
    lines = ["| Part | Max principal MPa | Across-layer tension MPa | Margin in-layer | Margin across layers | Max disp mm |", "|---|---:|---:|---:|---:|---:|"]
    for n, v in summary["cases"].items():
        f = v["fine"]
        lines.append(f"| {n} | {f['max_principal_MPa']:.2f} | {f['max_across_layer_tension_MPa']:.2f} | {f['margin_in_layer']:.1f} | {f['margin_across_layer']:.1f} | {f['max_disp_mm']:.4f} |")
    (OUT / "fea.md").write_text(f"FEA at {P:.2f} N (2 x design load)\n\n" + "\n".join(lines) + f"\n\nMinimum margin: {worst:.1f}\n")
    print(f"min margin {worst:.2f}")
    if worst < 1.0:
        sys.exit("FEA margin below 1.0 at the proof load")


if __name__ == "__main__":
    main()
