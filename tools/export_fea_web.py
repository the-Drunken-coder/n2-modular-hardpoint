#!/usr/bin/env python3
"""Export solver field results (*_fields.npz) to the web viewer: surface mesh + per-vertex failure index.

  python3 tools/export_fea_web.py --run /tmp/p14/B1.4_O0.6 --keeper /tmp/p14/keeper [--material paht-cf]

--run is an n2fea.py output dir (N2_receiver/, N2_adapter/); --keeper a keeper solve dir.
Writes web/public/fea/index.json and one <part>__<case>.json per case:
  pos  flat xyz (mm, CAD assembly frame), idx flat triangles (outer tet faces),
  fi   per-vertex failure index per 1 N applied (max over touching elements; raw P1 vertex
       metric from the frozen solver, PLA screen allowables in project/analysis/material.json).
The viewer shows utilisation = fi x load x 31 / Z_TDS(material); 1.0 = an assumed stress-limit crossing.
Stress screen = 1 / max(fi) x Z_TDS / 31, same scaling as tools/n2fea.py.
Legacy JSON keys fail_N and rating_sf2_N retain their numeric meaning for compatibility:
the stress screen and that screen / 2, not demonstrated failure or a working-load rating.
"""
import argparse, glob, json
from pathlib import Path
import numpy as np
R = Path(__file__).resolve().parents[1]
OUT = R / 'web/public/fea'
MAT = {'pla': 31.0, 'paht-cf': 47.0}
CASES = [  # (part, glob pattern relative to run, case id, label, in requirement scope)
    ('N2_adapter', 'N2_adapter/results/N2_adapter/h*/adapter__Z_fields.npz', 'Z', 'Straight pull', True),
    ('N2_receiver', 'N2_receiver/results/N2_receiver/h*/centered__Z_fields.npz', 'Z', 'Straight pull', True),
    ('N2_receiver', 'N2_receiver/results/N2_receiver/h*/distal_ineffective__Z_fields.npz', 'Z_distal_lost', 'Straight pull, distal roof lost', True),
    ('N2_keeper', 'K:N2_keeper/results/N2_keeper/h*/centered_fields.npz', 'Z', 'Straight pull', True),
    ('N2_keeper', 'K:N2_keeper/results/N2_keeper/h*/distal_ineffective_fields.npz', 'Z_distal_lost', 'Straight pull, distal roof lost', True),
    ('N2_adapter', 'N2_adapter/results/N2_adapter/h*/adapter__XZ[+-]90_fields.npz', 'XZ90', 'Side pull 90° in XZ (outside R3)', False),
    ('N2_receiver', 'N2_receiver/results/N2_receiver/h*/centered__XZ[+-]90_fields.npz', 'XZ90', 'Side pull 90° in XZ (outside R3)', False),
]

def surface(tet):
    f = np.concatenate([tet[:, [0, 2, 1]], tet[:, [0, 1, 3]], tet[:, [1, 2, 3]], tet[:, [0, 3, 2]]])
    k = np.sort(f, axis=1); _, inv, cnt = np.unique(k, axis=0, return_inverse=True, return_counts=True)
    return f[cnt[inv.ravel()] == 1]

def export(npz, part, cid, label, scope, k):
    d = np.load(npz); p, tet = d['points_mm'], d['tet4']; fi_e = d['raw_element_metrics'][:, 4]
    fi_n = np.zeros(len(p)); np.maximum.at(fi_n, tet.ravel(), np.repeat(fi_e, 4))
    tri = surface(tet); used = np.unique(tri); remap = -np.ones(len(p), int); remap[used] = np.arange(len(used))
    i = int(np.argmax(fi_e)); cent = p[tet[i]].mean(0)
    rec = json.loads(Path(str(npz).replace('_fields.npz', '.json')).read_text())
    fail = 1 / fi_e.max() * k
    meta = dict(part=part, case=cid, label=label, in_scope=scope, fail_N=round(fail, 2), rating_sf2_N=round(fail / 2, 2),
                peak_mm=[round(float(x), 2) for x in cent], h_mm=rec['h_mm'], elements=int(len(tet)),
                load_N=[round(x, 4) for x in rec['applied_force_N']], source=str(npz).split('/results/')[-1])
    body = dict(meta, pos=np.round(p[used], 3).ravel().tolist(), idx=remap[tri].ravel().tolist(), fi=np.round(fi_n[used], 5).tolist())
    (OUT / f'{part}__{cid}.json').write_text(json.dumps(body, separators=(',', ':')))
    return meta

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--run', required=True); ap.add_argument('--keeper', required=True)
    ap.add_argument('--material', choices=MAT, default='paht-cf'); ap.add_argument('--revision', default='P14')
    a = ap.parse_args(); k = MAT[a.material] / 31.0; OUT.mkdir(parents=True, exist_ok=True); cases = []
    for part, pat, cid, label, scope in CASES:
        base = a.keeper if pat.startswith('K:') else a.run
        hits = sorted(glob.glob(str(Path(base) / pat.removeprefix('K:'))))
        if not hits: print('missing', pat); continue
        worst = max(hits, key=lambda h: np.load(h)['raw_element_metrics'][:, 4].max())  # worst sign
        m = export(worst, part, cid, label, scope, k); cases.append(m)
        print(f"{part:12}{cid:15}screen {m['fail_N']:7.2f} N  screen/SF2 {m['rating_sf2_N']:6.2f} N  peak {m['peak_mm']}")
    active = json.loads((R / 'project/cad/N2/active_metadata.json').read_text())
    req = active['current_requirements']
    json.dump(dict(revision=a.revision, material=a.material, z_tds_MPa=MAT[a.material], sf=2.0,
                   design_N=req['design_load_N'], required_fail_N=req['qualification_load_N'],
                   note='Linear isotropic component screens, solid-equivalent material and prescribed contact tractions. Receiver assumes ideal continuous full backing. PLA stress thresholds are scaled by Z TDS/31; this is not direct anisotropic PAHT-CF FEA. Selected support states only; full-stroke release, printing and mounting are untested. No working-load rating assigned.',
                   field_semantics={'fail_N': 'Calculated stress-screen crossing, not demonstrated failure',
                                    'rating_sf2_N': 'Stress screen divided by 2, not an assigned working-load rating',
                                    'required_fail_N': 'Sacrificial qualification target from current requirements'},
                   cases=cases), open(OUT / 'index.json', 'w'), indent=1)
if __name__ == '__main__': main()
