"""Build the revision index + STLs + geometric diffs for the Pages app.

Writes web/public/data/. Needs full git history (fetch-depth 0) and
trimesh + manifold3d + numpy.
"""
import hashlib, io, itertools, json, re, shutil, subprocess, pathlib
import numpy as np, trimesh, manifold3d

R = pathlib.Path(__file__).resolve().parent.parent
OUT = R / 'web/public/data'
CAD = 'project/cad/N2'
# Params added after the import; their implied values in revisions that predate them.
IMPLICIT = {'DISTAL_OVERLAP': 0.6, 'ROOF_EXTRA': 0.0, 'ROOF_FILLET': 0.0}

git = lambda *a: subprocess.run(['git', *a], cwd=R, capture_output=True, check=True).stdout
show = lambda c, p: git('show', f'{c}:{p}')
def show_text(c, p):
    try: return show(c, p).decode()
    except subprocess.CalledProcessError: return None

def params(src):
    out = {}
    for m in re.finditer(r'^([A-Z][A-Z0-9_]+)\s*=\s*(.+)$', src or '', re.M):
        k, v = m.group(1), m.group(2).strip()
        e = re.match(r"float\(os\.environ\.get\('[^']+',\s*([-\d.]+)\)\)", v)
        out[k] = float(e.group(1)) if e else v
    for k, v in IMPLICIT.items(): out.setdefault(k, f'{v} (implicit)')
    return out

def rating(c):
    # Current/recent revisions carry an explicit analysis record. Keep the
    # original prose parser only for commits predating that record.
    active_text = show_text(c, f'{CAD}/active_metadata.json')
    active = json.loads(active_text) if active_text else {}
    screen = active.get('current_analysis')
    if screen:
        return {
            'text': (f"N2 {active['geometry_revision']}: {screen['stress_screen_N']:.2f} N "
                     f"unvalidated stress screen; / SF 2 = {screen['sf2_allowance_N']:.2f} N "
                     "for comparison only. No working-load rating assigned."),
            'N': None,
            'stress_screen_N': screen['stress_screen_N'],
            'sf2_allowance_N': screen['sf2_allowance_N'],
            'working_load_rating_N': None,
            'evidence': screen,
        }
    t = show_text(c, 'docs/provisional-load-rating.md')
    r = re.findall(r'\*\*(N2 (?:P\d+ )?hardpoint: [^*]+)\*\*', t or '')
    if not r: return None
    txt = r[-1]; n = re.search(r':\s*([\d.]+)\s*N', txt)
    return {'text': txt, 'N': float(n.group(1)) if n else None, 'historical': True}

def changelog(c):
    t = show_text(c, 'CHANGELOG.md') or ''
    return [{'title': s.split('\n', 1)[0].strip(), 'body': s.split('\n', 1)[1].strip() if '\n' in s else ''}
            for s in t.split('\n## ')[1:]]

def to_manifold(data):
    m = trimesh.load(io.BytesIO(data), file_type='stl')
    m.merge_vertices()
    return manifold3d.Manifold(manifold3d.Mesh(vert_properties=np.asarray(m.vertices, np.float32), tri_verts=np.asarray(m.faces, np.uint32)))

def write_manifold(man, path):
    mesh = man.to_mesh(); v = np.asarray(mesh.vert_properties)[:, :3]; f = np.asarray(mesh.tri_verts)
    if len(f) == 0: return 0.0
    trimesh.Trimesh(v, f, process=False).export(path)
    return float(man.volume())

def main():
    shutil.rmtree(OUT, ignore_errors=True); OUT.mkdir(parents=True)
    # Metadata corrections do not create a new physical geometry revision.
    commits = git('log', '--reverse', '--format=%H', '--', f'{CAD}/*.stl').decode().split()
    head = git('rev-parse', 'HEAD').decode().strip()
    revs = []
    for i, c in enumerate(commits):
        # Docs/rating for a geometry revision = state just before the next geometry change.
        src = git('rev-parse', commits[i + 1] + '~1').decode().strip() if i + 1 < len(commits) else head
        subj = git('log', '-1', '--format=%s', c).decode().strip()
        date = git('log', '-1', '--format=%cI', c).decode().strip()
        m = re.match(r'(P\d+)', subj)
        rid = m.group(1) if m else ('P11' if i == 0 else f'rev{i}')
        label = f'{rid} (original import)' if i == 0 else rid
        viewer = json.loads(show(c, f'{CAD}/viewer.json'))
        d = OUT / 'revs' / rid; d.mkdir(parents=True)
        parts = []
        for p in viewer['parts']:
            data = show(c, f"{CAD}/{p['stl']}"); (d / p['stl']).write_bytes(data)
            q = {'id': p['id'], 'name': p['name'], 'kind': p.get('kind'), 'color': p.get('color', '#bbbbbb'),
                 'stl': p['stl'], 'sha': hashlib.sha256(data).hexdigest()}
            if p.get('print_stl'):
                (d / p['print_stl']).write_bytes(show(c, f"{CAD}/{p['print_stl']}")); q['print_stl'] = p['print_stl']
            parts.append(q)
        revs.append({'id': rid, 'label': label, 'commit': c[:7], 'source_commit': src[:7], 'date': date, 'subject': subj,
                     'parts': parts, 'params': params(show_text(c, 'project/cad/build_n2.py')),
                     'rating': rating(src), 'changelog': changelog(src)})
        print('rev', rid, c[:7], len(parts), 'parts')
    # Pairwise boolean diffs for parts whose STL changed.
    diffs = {}
    for a, b in itertools.combinations(revs, 2):
        key = f"{a['id']}__{b['id']}"; dd = OUT / 'diffs' / key; dd.mkdir(parents=True); entry = {}
        pa = {p['id']: p for p in a['parts']}
        for pb in b['parts']:
            p0 = pa.get(pb['id'])
            if not p0 or p0['sha'] == pb['sha']: continue
            try:
                ma = to_manifold((OUT / 'revs' / a['id'] / p0['stl']).read_bytes())
                mb = to_manifold((OUT / 'revs' / b['id'] / pb['stl']).read_bytes())
                e = {'added_mm3': write_manifold(mb - ma, dd / f"{pb['id']}_added.stl"),
                     'removed_mm3': write_manifold(ma - mb, dd / f"{pb['id']}_removed.stl"),
                     'volume_a_mm3': float(ma.volume()), 'volume_b_mm3': float(mb.volume())}
                e['added'] = e['added_mm3'] > 0; e['removed'] = e['removed_mm3'] > 0
            except Exception as ex:
                e = {'error': str(ex)}
            entry[pb['id']] = e
        diffs[key] = entry
        print('diff', key, {k: (round(v.get('added_mm3', 0), 2), round(v.get('removed_mm3', 0), 2)) for k, v in entry.items()})
    log = [dict(zip(('hash', 'date', 'subject'), l.split('\t', 2)))
           for l in git('log', '-n', '25', '--date=short', '--format=%h\t%ad\t%s').decode().splitlines()]
    docs = {p.stem: p.read_text() for p in sorted((R / 'docs').glob('*.md'))}
    docs['CHANGELOG'] = (R / 'CHANGELOG.md').read_text()
    (OUT / 'docs.json').write_text(json.dumps(docs))
    (OUT / 'index.json').write_text(json.dumps({'head': head[:7], 'revisions': revs, 'diffs': diffs, 'commits': log,
                                                'rating': rating(head), 'repo': 'the-Drunken-coder/n2-modular-hardpoint'}, indent=1))

if __name__ == '__main__':
    main()
