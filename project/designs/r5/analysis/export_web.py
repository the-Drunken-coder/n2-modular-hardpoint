"""Export R5 FEA fields (out/*_fields.npz from fea.py) to the web viewer: out/viewer/fea/.

Per-vertex fi = failure index per 1 N (max of in-layer principal / ALLOW_XY and across-layer
tension / ALLOW_Z over touching elements, 1 mm support zones excluded). Viewer colour = fi x load.
"""
import json
import sys
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402

OUT = HERE.parent / "out"
WEB = OUT / "viewer" / "fea"


def surface(tet):
    f = np.concatenate([tet[:, [0, 2, 1]], tet[:, [0, 1, 3]], tet[:, [1, 2, 3]], tet[:, [0, 3, 2]]])
    k = np.sort(f, axis=1)
    _, inv, cnt = np.unique(k, axis=0, return_inverse=True, return_counts=True)
    return f[cnt[inv.ravel()] == 1]


def main():
    WEB.mkdir(parents=True, exist_ok=True)
    summ = json.loads((OUT / "fea.json").read_text())
    cases = []
    for part in ("adapter", "keeper", "body"):
        d = np.load(OUT / f"{part}_fields.npz")
        pts, tet, fe = d["points_mm"], d["tet4"], d["fi_e"]
        fn = np.zeros(len(pts))
        np.maximum.at(fn, tet.ravel(), np.repeat(fe, 4))
        tri = surface(tet)
        used = np.unique(tri)
        remap = -np.ones(len(pts), int)
        remap[used] = np.arange(len(used))
        i = int(np.argmax(fe))
        fine = summ["cases"][part]["fine"]
        fail = 1 / fe.max()
        meta = dict(part=part, case="Z", label="Straight pull", in_scope=True, fail_N=round(float(fail), 1),
                    rating_sf2_N=round(float(fail) / 2, 1), peak_mm=[round(float(x), 2) for x in pts[tet[i]].mean(0)],
                    h_mm=fine["h_mm"], elements=int(len(tet)), margin_at_proof=round(fail / p.P_PROOF, 1))
        body = dict(meta, pos=np.round(pts[used], 3).ravel().tolist(), idx=remap[tri].ravel().tolist(),
                    fi=np.round(fn[used], 7).tolist())
        (WEB / f"{part}__Z.json").write_text(json.dumps(body, separators=(",", ":")))
        cases.append(meta)
        print(f"{part:8} screen {fail:8.1f} N  peak {meta['peak_mm']}")
    idx = dict(revision="R5", material="paht-cf", z_tds_MPa=31.0, sf=2.0, design_N=round(p.P_DESIGN, 1),
               required_fail_N=round(p.P_PROOF, 1),
               groups={"Z": dict(label="Straight pull", parts={"adapter": "Z", "keeper": "Z", "body": "Z"})},
               note=(f"Linear transversely isotropic PAHT-CF (fea.py), finest converged mesh, 1 mm around fixed patches "
                     f"excluded. 1.0 = allowable (in-layer {p.ALLOW_XY:.1f} MPa, across layers {p.ALLOW_Z:.1f} MPa, "
                     "already mean-3sd x0.5). Prescribed contact tractions; not a tested rating."),
               cases=cases)
    (WEB / "index.json").write_text(json.dumps(idx, indent=1))


if __name__ == "__main__":
    main()
