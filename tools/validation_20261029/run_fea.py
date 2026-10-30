#!/usr/bin/env python3
"""Focused P14 prescribed-traction validation; no physical or flight qualification.

Prepare: python tools/validation_20261029/run_fea.py --prepare
Run:     python tools/validation_20261029/run_fea.py --group baseline
Groups: baseline, fixture, partial_adapter, partial_keeper, partial_keeper_terminal_refine

Requires project/analysis/requirements.txt and libXft for the gmsh wheel.
N2_FEA_PY can select an isolated interpreter. Set OPENBLAS_NUM_THREADS=1.
The frozen solver is copied byte-for-byte, never patched.
"""
from __future__ import annotations
import argparse, copy, hashlib, importlib.metadata, importlib.util, json, os
from pathlib import Path
import platform, shutil, subprocess, sys, time

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'project/analysis/validation_20261029/fea'
REF = OUT / 'reference_inputs'
COMMIT = 'e1150701358f31e536c807ee21e29eae4e6c4985'
SOLVER_SHA = '6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c'
SOLVER_REL = f'project/analysis/inputs/drivers/solver_{SOLVER_SHA}.py'
PY = os.environ.get('N2_FEA_PY', sys.executable)

def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

def read(rel):
    return json.loads((REF / rel).read_text())

def dump(p, value):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(value, indent=2) + '\n')

def patch(x, z, y=(8.5, 11.5)):
    return {'normal_axis': 2, 'z': z, 'x_range': list(x), 'y_range': list(y)}

def load(label, x, z, fz):
    return {'label': label, 'selector': patch(x, z), 'force_N': [0, 0, fz]}

def set_part(cfg, part, study):
    cfg = copy.deepcopy(cfg)
    cfg['id'] = f'N2_{part}_{study}'
    cfg['component'] = part
    rel = f'reference_inputs/project/cad/N2/N2_{part}.step'
    cfg['step_path'] = rel
    cfg['expected_step_sha256'] = sha(OUT / rel)
    cfg['max_dofs'] = 420000
    cfg['validation_scope'] = 'Linear isotropic prescribed-traction sensitivity on current P14 STEP; not assembled nonlinear contact, physical test, failure prediction, or working-load rating.'
    return cfg

def prepare():
    OUT.mkdir(parents=True, exist_ok=True)
    inventory = json.loads((OUT / 'source_git_blobs.json').read_text())
    for item in inventory['files']:
        p = REF / item['path']
        if not p.exists():
            source = ROOT / item['path']
            if not source.exists() or sha(source) != item['sha256']:
                raise ValueError(f'Checkout source commit {COMMIT}; reference file differs: {source}')
            p.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, p)
        b = p.read_bytes()
        blob = hashlib.sha1(b'blob ' + str(len(b)).encode() + b'\0' + b).hexdigest()
        if blob != item['git_blob_sha1'] or sha(p) != item['sha256']:
            raise ValueError(f'Reference input changed: {p}')
    engine = OUT / 'engine'
    engine.mkdir(exist_ok=True)
    shutil.copyfile(REF / SOLVER_REL, engine / 'solver.py')
    shutil.copyfile(REF / 'project/analysis/material.json', engine / 'material.json')
    if sha(engine / 'solver.py') != SOLVER_SHA:
        raise ValueError('Frozen solver hash mismatch')

    # Generate the exact original standard case family, preserving its imprint
    # selectors even though only axial cases are solved for baseline replay.
    spec = importlib.util.spec_from_file_location('n2fea_reference', ROOT / 'tools/n2fea.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    generated = OUT / 'generated_standard'
    generated.mkdir(exist_ok=True)
    for part in ('adapter', 'receiver'):
        shutil.copyfile(REF / f'project/cad/N2/N2_{part}.step', generated / f'N2_{part}.step')
    g = {'lug': [26.8, 28.2], 'slot': [26.5, 28.5], 'tip': 25.9,
         'overlap': 0.6, 'lug_t': 1.4, 'stroke_needed_mm': 3.0, 'prox': 'bridge'}
    module.configs(g, generated, False)
    rec = json.loads((generated / 'N2_receiver/N2_receiver.json').read_text())
    ada = json.loads((generated / 'N2_adapter/N2_adapter.json').read_text())
    keeper = read('project/analysis/p14/fea/keeper/results/N2_keeper/configuration.json')

    plans = []
    def add(group, part, cfg, sizes, cases):
        cfg = set_part(cfg, part, group)
        path = OUT / 'configs' / f'{part}_{group}.json'
        dump(path, cfg)
        plans.append({'group': group, 'part': part, 'config': str(path.relative_to(OUT)),
                      'sizes_mm': sizes, 'selected_cases': cases})

    add('baseline', 'receiver', rec, [0.8, 0.55], ['centered__Z', 'distal_ineffective__Z'])
    add('baseline', 'adapter', ada, [0.55, 0.4], ['adapter__Z'])
    add('baseline', 'keeper', keeper, [0.55, 0.4], ['centered', 'distal_ineffective'])

    fixture = copy.deepcopy(rec)
    washers = read('project/analysis/inputs/configs/N2_receiver.json')['cases']['centered_washers']['supports']
    for stem in ('centered', 'distal_ineffective'):
        case = copy.deepcopy(rec['cases'][stem + '__Z'])
        case['supports'] = copy.deepcopy(washers)
        case['fixture'] = 'Ideal rigid washer annuli; no bolt preload, slip, airframe flexibility or pull-through model.'
        fixture['cases'][stem + '__Z_washers'] = case
    add('fixture', 'receiver', fixture, [0.8, 0.55],
        ['centered__Z', 'distal_ineffective__Z', 'centered__Z_washers', 'distal_ineffective__Z_washers'])

    partial_a = copy.deepcopy(ada)
    partial_a['cases'] = {}
    partial_k = copy.deepcopy(keeper)
    partial_k['cases'] = {}
    states = []
    # These states are AFTER distal support is lost.  The retained roof/floor
    # contacts stay at prescribed host-frame centroids 29.0/33.5 mm.
    # Keeper geometry stays in local coordinates; all host contacts are shifted
    # by -s, exactly equivalent to translating the whole keeper STEP by +s.
    for s in (0.6, 1.5, 2.0, 2.2):
        name = f'stroke_{s:.1f}mm'.replace('.', 'p')
        x0, x1 = max(26.8, 25.9 + s), 28.2
        xc = (x0 + x1) / 2
        rb = (29.0 - xc) / (33.5 - 29.0)
        ra = 1 + rb
        case_a = copy.deepcopy(ada['cases']['adapter__Z'])
        case_a['loads'] = [load('Keeper on remaining lug floor', (x0, x1), 6.9, -1)]
        partial_a['cases'][name] = case_a
        case_k = copy.deepcopy(keeper['cases']['distal_ineffective'])
        case_k['loads'] = [
            load('Remaining adapter contact, keeper-local coordinates', (x0-s, x1-s), 7.2, 1),
            load('Prescribed proximal roof contact, keeper-local coordinates', (28.5-s, 29.5-s), 10.2, -ra),
            load('Prescribed far-floor contact, keeper-local coordinates', (33-s, 34-s), 7.2, rb),
        ]
        partial_k['cases'][name] = case_k
        states.append({'case': name, 'stroke_mm': s, 'remaining_lug_overlap_mm': x1-x0,
                       'lug_centroid_host_x_mm': xc, 'proximal_roof_reaction_per_N': ra,
                       'far_floor_reaction_per_N': rb,
                       'average_bearing_MPa_at_8p90748N': 8.90748 / (3*(x1-x0)),
                       'scope': 'Assumed uniform contact and fixed host roof/floor centroids; no coupled contact redistribution or dynamic departure.'})
    # Each study uses the same imprinted mesh for all stroke states, avoiding
    # case-to-case mesh changes; the reference full-contact state is retained.
    partial_a['cases']['reference_full_contact'] = copy.deepcopy(ada['cases']['adapter__Z'])
    partial_k['cases']['reference_distal_lost_retained_pose'] = copy.deepcopy(keeper['cases']['distal_ineffective'])
    add('partial_adapter', 'adapter', partial_a, [0.55, 0.4], list(partial_a['cases']))
    add('partial_keeper', 'keeper', partial_k, [0.55], list(partial_k['cases']))
    # Added after the first run: keeper and adapter screens were close at 0.1 mm
    # overlap, so refine that keeper state and its same-mesh retained control.
    add('partial_keeper_terminal_refine', 'keeper', partial_k, [0.4],
        ['stroke_2p2mm', 'reference_distal_lost_retained_pose'])
    dump(OUT / 'stroke_states.json', states)
    dump(OUT / 'run_plan.json', {'source_commit': COMMIT, 'solver_sha256': SOLVER_SHA,
        'planned_case_solves': sum(len(p['sizes_mm'])*len(p['selected_cases']) for p in plans),
        'plans': plans, 'deliberately_excluded': ['Unmodeled payload moments or sidewall contacts',
        'Flight load rating', 'Physical tests', 'PAHT-CF constitutive model', 'New proposed concept geometry']})
    versions = {name: importlib.metadata.version(name) for name in
                ('numpy', 'scipy', 'gmsh', 'scikit-fem', 'pyamg', 'meshio', 'cadquery')}
    dump(OUT / 'environment.json', {'python': sys.version, 'executable': sys.executable,
         'platform': platform.platform(), 'packages': versions,
         'native_dependency': 'Ubuntu libxft2 2.3.6-1build1 extracted into isolated scratch environment; gmsh initialized successfully.',
         'source_commit': COMMIT, 'solver_sha256': SOLVER_SHA})
    print(json.dumps({'prepared_case_solves': sum(len(p['sizes_mm'])*len(p['selected_cases']) for p in plans),
                      'groups': sorted(set(p['group'] for p in plans))}), flush=True)

def run_group(group):
    plan = json.loads((OUT / 'run_plan.json').read_text())
    env = os.environ.copy()
    for key in ('OPENBLAS_NUM_THREADS', 'OMP_NUM_THREADS', 'MKL_NUM_THREADS'):
        env[key] = '1'
    logs = OUT / 'logs'
    logs.mkdir(exist_ok=True)
    for p in plan['plans']:
        if p['group'] != group:
            continue
        cmd = [PY, str(OUT / 'engine/solver.py'), '--config', str(OUT / p['config']),
               '--sizes', *map(str, p['sizes_mm']), '--cases', *p['selected_cases']]
        stem = f"{p['part']}_{group}"
        started = time.time()
        print('START ' + stem, flush=True)
        with (logs / (stem + '.log')).open('w') as log:
            result = subprocess.run(cmd, env=env, stdout=log, stderr=subprocess.STDOUT)
        status = {'command': cmd, 'group': group, 'part': p['part'], 'returncode': result.returncode,
                  'elapsed_s': time.time()-started, 'config_sha256': sha(OUT / p['config']),
                  'solver_sha256': sha(OUT / 'engine/solver.py'), 'log': str((logs/(stem+'.log')).relative_to(OUT))}
        dump(logs / (stem + '.execution.json'), status)
        print(json.dumps(status), flush=True)
        if result.returncode:
            raise SystemExit(result.returncode)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--prepare', action='store_true')
    parser.add_argument('--group', choices=['baseline', 'fixture', 'partial_adapter', 'partial_keeper', 'partial_keeper_terminal_refine'])
    args = parser.parse_args()
    if args.prepare:
        prepare()
    if args.group:
        run_group(args.group)
