#!/usr/bin/env python3
"""Regenerate R5 CAD and run fresh component screens; fail on stale evidence."""
from __future__ import annotations
import argparse
from datetime import datetime,timezone
import hashlib
import json
import math
import os
from pathlib import Path
import subprocess
import sys

ROOT=Path(__file__).resolve().parents[2]
DESIGN=ROOT/'project/designs/r5'


def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def read(p):return json.loads(Path(p).read_text())
def dump(p,v):
    p=Path(p);p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(v,indent=2,allow_nan=False)+'\n')
def require(v,message):
    if not v:raise ValueError(message)


def sources():
    paths=[Path(__file__),Path(__file__).with_name('test_cartridge_handoff.py'),ROOT/'.github/workflows/cartridge-validation.yml',
        ROOT/'project/analysis/inputs/material.json',
        ROOT/'project/cad/requirements.txt',ROOT/'project/analysis/requirements.txt',
        ROOT/'project/designs/r4/analysis/audit_surfaces.py']
    paths+=list((DESIGN/'cad').glob('*.py'))+list((DESIGN/'analysis').glob('*.py'))
    paths+=list((DESIGN/'viewer').glob('*.js'))+list((DESIGN/'viewer').glob('*.mjs'))
    return {str(p.relative_to(ROOT)):sha(p) for p in sorted(paths)}


def execute(out,name,args):
    log=out/'logs'/f'{name}.log';log.parent.mkdir(parents=True,exist_ok=True)
    env=os.environ.copy();env.update({k:'1' for k in ['OPENBLAS_NUM_THREADS','OMP_NUM_THREADS','MKL_NUM_THREADS']})
    print(f'RUN {name}',flush=True)
    with log.open('w') as stream:
        r=subprocess.run(args,cwd=ROOT,stdout=stream,stderr=subprocess.STDOUT,env=env)
    if r.returncode:
        print(log.read_text()[-8000:]);raise RuntimeError(f'{name} failed with exit {r.returncode}')


def record_handoff():
    folder=DESIGN/'manufacturing'
    files={str(p.relative_to(folder)):sha(p) for p in sorted(folder.rglob('*'))
        if p.is_file() and p.name!='artifact-manifest.json' and '__pycache__' not in p.parts}
    dump(folder/'artifact-manifest.json',dict(generator_sha256=sha(DESIGN/'cad/build.py'),
        cad_source_sha256={p.name:sha(p) for p in sorted((DESIGN/'cad').glob('*.py'))},files=files))
    print(json.dumps(dict(recorded_artifacts=len(files))))


def gate_cad(cad):
    a=read(cad/'assembly.json');v=read(cad/'clearance.json');g=read(cad/'geometry.json')
    require(a['revision']=='R5' and a['units']=='mm','Wrong CAD revision or units')
    require(v['status']=='pass' and v['checks'] and all(c['passed'] is True for c in v['checks']),'CAD checks failed')
    require(len({c['name'] for c in v['checks']})==len(v['checks']),'Duplicate geometry checks')
    expected={'receiver_core','case_shell','case_lid','keeper','payload_adapter','servo_clamp'}
    require(len({p['id'] for p in a['parts']})==len(a['parts']),'Duplicate physical part IDs')
    prints=[p for p in a['parts'] if p['kind']=='printed']
    require(len(prints)==len(expected) and {p['id'] for p in prints}==expected,'Unexpected physical print inventory')
    require(all(p['solid_count']==1 and p['volume_mm3']>0 for p in prints),'Disconnected or empty print')
    require(g['retained_box_mm']=={'min':[0,0,0],'max':[85.6,54,20]},'Fixed box changed')
    for p in a['parts']:
        require((cad/p['mesh']).is_file(),f"Missing actual mesh for {p['id']}")
        if p['installation']['role']=='module':
            b=p['bounds_mm']
            require(all(b['min'][i]>=-1e-6 and b['max'][i]<=[85.6,54,20][i]+1e-6 for i in range(3)),f"Part outside box: {p['id']}")
    return dict(status='pass',physical_prints=len(prints),nominal_checks=len(v['checks']),
        generator_sha256=a['sources']['generator_sha256'])


def step_solid_signature(solid):
    """Placement-sensitive screening key; geometric equality is checked below."""
    b=solid.BoundingBox();c=solid.Center()
    return (solid.Volume(),solid.Area(),c.x,c.y,c.z,
            b.xmin,b.ymin,b.zmin,b.xmax,b.ymax,b.zmax)


def compare_step_exports(left,right,label):
    """Compare a multiset of placed solids, retaining duplicate physical items.

    Comparing only compound union volume would miss missing duplicate hardware.
    The placed-solid multiset detects inventory/transform changes, while the
    symmetric difference catches different shapes with similar mass properties.
    STEP creation timestamps and serialization order are intentionally ignored.
    """
    import cadquery as cq
    old=[solid for root in cq.importers.importStep(str(left)).vals() for solid in root.Solids()]
    new=[solid for root in cq.importers.importStep(str(right)).vals() for solid in root.Solids()]
    require(len(old)==len(new) and len(old)>0,f'STEP solid inventory differs: {label}')
    require(all(s.isValid() for s in old+new),f'Invalid STEP solid: {label}')
    remaining=[(s,step_solid_signature(s)) for s in new]
    for index,solid in enumerate(old):
        signature=step_solid_signature(solid)
        matched=None
        for j,(candidate,candidate_signature) in enumerate(remaining):
            if not all(math.isclose(x,y,rel_tol=1e-8,abs_tol=1e-6)
                       for x,y in zip(signature,candidate_signature)):
                continue
            difference=solid.cut(candidate).Volume()+candidate.cut(solid).Volume()
            if difference<1e-5:
                matched=j;break
        require(matched is not None,f'STEP shape or placement differs: {label}, solid {index+1}')
        remaining.pop(matched)
    return len(old)


def gate_handoff(fresh):
    committed=DESIGN/'manufacturing';m=read(committed/'artifact-manifest.json')
    require(m['generator_sha256']==sha(DESIGN/'cad/build.py'),'Committed CAD source identity is stale')
    require(m['cad_source_sha256']=={p.name:sha(p) for p in sorted((DESIGN/'cad').glob('*.py'))},
            'Committed CAD/drawing generator source identity is stale')
    actual={str(p.relative_to(committed)) for p in committed.rglob('*') if p.is_file()
            and p.name!='artifact-manifest.json' and '__pycache__' not in p.parts}
    require(actual==set(m['files']),'Manufacturing artifact inventory differs')
    fresh_inventory={str(p.relative_to(fresh)) for p in fresh.rglob('*') if p.is_file()
                     and p.name!='artifact-manifest.json' and '__pycache__' not in p.parts}
    require(actual==fresh_inventory,'Downloadable manufacturing inventory differs from fresh exports')
    for name,digest in m['files'].items():
        require(sha(committed/name)==digest,f'Modified or stale committed artifact: {name}')
    old,new=read(committed/'assembly.json'),read(fresh/'assembly.json')
    require(old['sources']==new['sources'],'Fresh generator and committed manufacturing disagree')
    require(old['kinematics']==new['kinematics'],'Fresh motion differs from downloadable motion')
    require(read(committed/'geometry.json')==read(fresh/'geometry.json'),'Fresh analysis contact coordinates differ')
    by_id={p['id']:p for p in new['parts']}
    require(len(by_id)==len(new['parts']) and len({p['id'] for p in old['parts']})==len(old['parts']),
            'Duplicate IDs in downloadable or regenerated assembly')
    require(set(by_id)=={p['id'] for p in old['parts']},'Fresh physical inventory differs')
    part_step_solids=0;oriented_stls=0
    for p in old['parts']:
        other=by_id[p['id']]
        require(sha(committed/p['mesh'])==sha(fresh/other['mesh']),f"Viewer tessellation differs for {p['id']}")
        for key in ('kind','category','installation','motion','explode','step','print_stl','drawing'):
            require(p.get(key)==other.get(key),f"Downloadable part metadata differs: {p['id']} / {key}")
        if p.get('step'):
            part_step_solids+=compare_step_exports(committed/p['step'],fresh/other['step'],p['id'])
        if p.get('print_stl'):
            # Open CASCADE's binary STL header has no timestamp; exact bytes
            # compare the complete oriented triangles, including print axes.
            require(sha(committed/p['print_stl'])==sha(fresh/other['print_stl']),
                    f"Oriented print STL differs: {p['id']}")
            oriented_stls+=1
    assemblies={}
    for key in ('step','wing_step'):
        require(old.get(key)==new.get(key) and bool(old.get(key)),f'Missing or changed {key} export')
        assemblies[key]=compare_step_exports(committed/old[key],fresh/new[key],old[key])
    # These deterministic manufacturing documents are generated with the parts.
    # Check them against regeneration, rather than only their recorded digest.
    documents=[name for name in actual if name.startswith('drawings/') or name.endswith('.csv')
               or name=='print-process.json']
    for name in documents:
        require(sha(committed/name)==sha(fresh/name),f'Generated manufacturing document differs: {name}')
    return dict(status='pass',artifacts=len(m['files']),physical_solids_compared=sum(p['solid_count'] for p in old['parts'] if p['kind']=='printed'),
                individual_step_solids_compared=part_step_solids,
                oriented_stls_compared=oriented_stls,assembly_solids_compared=assemblies,
                generated_documents_compared=len(documents),
                comparison='Fresh viewer meshes, complete oriented STL bytes, every individual STEP, '
                'placed-solid multisets for both assemblies, and generated manufacturing documents; '
                'STEP timestamps/serialization order excluded')


def verify_run(out):
    r=read(out/'run.json')
    require(r['sources']==sources(),'Source changed after CAD preparation; start a fresh run')
    return r


def stage_cad(out):
    require(not out.exists(),'Output must be fresh')
    out.mkdir(parents=True)
    rev=subprocess.run(['git','rev-parse','HEAD'],cwd=ROOT,text=True,check=True,stdout=subprocess.PIPE).stdout.strip()
    dump(out/'run.json',dict(revision='R5',started_utc=datetime.now(timezone.utc).isoformat(),commit=rev,
        github_run_id=os.environ.get('GITHUB_RUN_ID'),sources=sources(),physical_qualification=False))
    execute(out,'handoff-regression',[sys.executable,str(Path(__file__).with_name('test_cartridge_handoff.py')),'-v'])
    execute(out,'cad',[sys.executable,str(DESIGN/'cad/build.py'),'--out',str(out/'cad')])
    dump(out/'cad-gate.json',gate_cad(out/'cad'))
    dump(out/'handoff-gate.json',gate_handoff(out/'cad'))
    execute(out,'mechanics',[sys.executable,str(DESIGN/'analysis/mechanics.py'),'--geometry',str(out/'cad/geometry.json'),'--output',str(out/'mechanics.json')])
    execute(out,'prepare',[sys.executable,str(DESIGN/'analysis/simulate.py'),'--stage','prepare','--cad',str(out/'cad'),'--output',str(out/'fea')])
    execute(out,'surface-audit',[sys.executable,str(ROOT/'project/designs/r4/analysis/audit_surfaces.py'),'--fea',str(out/'fea')])


def stage_report(out):
    verify_run(out)
    execute(out,'report',[sys.executable,str(DESIGN/'analysis/simulate.py'),'--stage','report','--output',str(out/'fea')])
    c=read(out/'cad-gate.json');f=read(out/'fea/summary.json')
    require(read(out/'fea/surface-audit.json')['status']=='pass','Missing or failed exact-face audit')
    require(f['status']=='numerical_checks_passed' and f['case_solves']==18,'Incomplete or failed fresh numerical evidence')
    result=dict(revision='R5',status='computational_checks_passed',cad_checks=c['nominal_checks'],fea_solves=f['case_solves'],
        source_commit=read(out/'run.json')['commit'],physical_tests='PENDING',payload_rating_established=False,
        full_wing_simulation=False,actuator_qualification=False)
    dump(out/'verification.json',result)
    (out/'summary.md').write_text(f"# R5 cartridge validation\n\n{c['nominal_checks']} nominal CAD checks and {f['case_solves']} fresh STEP solves passed.\n\n"
        'The committed manufacturing solids and viewer meshes match freshly regenerated CAD.\n\n'
        '**Physical tests remain PENDING. No payload rating, actuator qualification or wing flight qualification is established.**\n')
    print(json.dumps(result))


if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--record-handoff',action='store_true')
    ap.add_argument('--stage',choices=['cad','receiver','adapter','keeper','report','all'])
    ap.add_argument('--output',type=Path)
    args=ap.parse_args()
    if args.record_handoff:record_handoff()
    elif args.stage and args.output:
        out=args.output.resolve();stages=['cad','receiver','adapter','keeper','report'] if args.stage=='all' else [args.stage]
        for stage in stages:
            if stage=='cad':stage_cad(out)
            elif stage=='report':stage_report(out)
            else:
                verify_run(out);execute(out,stage,[sys.executable,str(DESIGN/'analysis/simulate.py'),'--stage',stage,'--output',str(out/'fea')])
    else:ap.error('Use --record-handoff or --stage with --output')
