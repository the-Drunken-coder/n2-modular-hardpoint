#!/usr/bin/env python3
"""Fresh R5 STEP component screens. N, mm, MPa; downward payload in R5 Z.

No archived R4 result is consumed. This runner keeps the existing frozen
quadratic-tetrahedron solver, defines new contacts from R5 CAD, and reports
numerical quality separately from material or hardware qualification.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time

from mechanics import PAYLOAD_N, contact_state

ROOT=Path(__file__).resolve().parents[4]
SOLVER_SHA='6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c'
PRELOAD=3.


def sha(path): return hashlib.sha256(Path(path).read_bytes()).hexdigest()
def read(path): return json.loads(Path(path).read_text())
def dump(path,data):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(data,indent=2,allow_nan=False)+'\n')
def plane(x,z,y): return dict(normal_axis=2,z=z,x_range=list(x),y_range=list(y))
def load(label,selector,force): return dict(label=label,selector=selector,force_N=force)
def vertical(label,x,z,y,force): return load(label,plane(x,z,y),[0,0,force])
def annuli(points,radii):
    return [dict(label=f'Mount bearing annulus {i+1}',selector=dict(normal_axis=2,z=z,
        annulus_xy=[x,y,*radii]),components=[0,1,2]) for i,(x,y,z) in enumerate(points)]
def pads(points,total):
    return [load(f'Opposing pad preload {i+1}',dict(normal_axis=2,z=z,circle_xy=[x,y,r]),
        [0,0,total/len(points)]) for i,(x,y,z,r) in enumerate(points)]


def receiver_loads(g,stroke,payload):
    st=contact_state(g,stroke)
    result=[vertical(name,x,g['receiver_roof_z'] if name=='far_roof' else g['receiver_floor_z'],
        g['contact_y'],-(payload+PRELOAD)*factor) for name,x,factor in st['contacts']]
    return result+pads(g['pad_contacts'],PRELOAD)


def gauge_points(g):
    a,b,c=g['keeper_anchors']
    if not math.isclose(a[0],b[0]) or not math.isclose(a[2],b[2]) or not math.isclose(a[2],c[2]):
        raise ValueError('Review six-DOF gauge directions for altered keeper anchors')
    if math.isclose(a[1],b[1]) or math.isclose(a[0],c[0]):
        raise ValueError('Keeper gauge points are collinear')
    return [dict(label='Translation gauge',point_mm=a,components=[0,1,2]),
            dict(label='Two rotation gauges',point_mm=b,components=[0,2]),
            dict(label='Last rotation gauge',point_mm=c,components=[2])]


def prepare(cad,out):
    if out.exists(): raise ValueError('Use a fresh output directory; old results cannot stand in for new solves')
    g=read(cad/'geometry.json')
    if g['units']!='mm' or g['revision']!='R5': raise ValueError('R5 millimetre geometry is required')
    assembly=read(cad/'assembly.json')
    by_id={p['id']:p for p in assembly['parts']}
    ids={'receiver':'receiver_core','adapter':'payload_adapter','keeper':'keeper'}
    files={p:cad/by_id[pid]['step'] for p,pid in ids.items()}
    for f in files.values():
        if not f.is_file(): raise FileNotFoundError(f)
    frozen=ROOT/f'project/analysis/inputs/drivers/solver_{SOLVER_SHA}.py'
    if sha(frozen)!=SOLVER_SHA: raise ValueError('Frozen solver identity changed')
    out.mkdir(parents=True);(out/'engine').mkdir()
    shutil.copyfile(frozen,out/'engine/solver.py')
    shutil.copyfile(ROOT/'project/analysis/inputs/material.json',out/'engine/material.json')
    loss=g['distal_floor_x'][1]-g['keeper_tip_x']
    clear=g['lug_x'][1]-g['keeper_tip_x']
    if not 0<loss<clear-.1: raise ValueError('Review revised guide-loss and release sequence')
    rs=annuli(g['receiver_mounts'],g['receiver_mount_annulus_radii'])
    ads=annuli(g['payload_mounts'],g['payload_mount_annulus_radii'])
    receiver={name:dict(loads=receiver_loads(g,s,p),supports=rs,stroke_mm=s,
        scope='Rigid captive-nut bearing fixture; downward interface loads and opposing 3 N preload. No wing compliance.')
        for name,s,p in [('retained_2g',0.,PAYLOAD_N),('distal_support_lost',loss,PAYLOAD_N),
                          ('retained_4g_screen',0.,2*PAYLOAD_N)]}
    adapter={};keeper={}
    for s in [0.,loss,clear-.1]:
        st=contact_state(g,s);name=f'stroke_{s:.3f}mm'.replace('.','p')
        if s!=loss:
            adapter[name]=dict(loads=[vertical('Keeper on upper lug-window face',st['lug_contact_x'],
                g['adapter_contact_z'],g['contact_y'],PAYLOAD_N+PRELOAD)]+
                pads(g['adapter_pad_contacts'],-PRELOAD),supports=ads,stroke_mm=s,
                remaining_overlap_mm=st['remaining_overlap_mm'],
                scope='Adapter constrained at actual payload-mount bearing annuli; uniform finite bearing patch.')
        kl=[vertical('Lug on keeper top',[x-s for x in st['lug_contact_x']],
            g['keeper_top_z'],g['contact_y'],-(PAYLOAD_N+PRELOAD))]
        for contact,x,factor in st['contacts']:
            kl.append(vertical(contact,[v-s for v in x],
                g['keeper_top_z'] if contact=='far_roof' else g['keeper_bottom_z'],
                g['contact_y'],(PAYLOAD_N+PRELOAD)*factor))
        keeper[name]=dict(loads=kl,anchors=gauge_points(g),stroke_mm=s,
            remaining_overlap_mm=st['remaining_overlap_mm'],
            scope='Balanced prescribed contact forces; rigid-motion gauges must carry negligible reaction.')
    if 'keeper_axial_load_selector' in g:
        keeper['blocked_drive_12N']=dict(loads=[load('12 N imposed sleeve load',
            g['keeper_axial_load_selector'],[12,0,0])],supports=[dict(label='Blocked-tip component fixture',
            selector=dict(normal_axis=0,x=g['keeper_tip_x'],y_range=g['contact_y'],
                z_range=[g['keeper_bottom_z'],g['keeper_top_z']]),components=[0,1,2])],
            scope='Deliberately blocked tip, no installed guide support; not normal displacement or a servo stall bound.')
    plans=[]
    for component,cases,sizes in [('receiver',receiver,[1.2,.9]),('adapter',adapter,[.65,.45]),('keeper',keeper,[.65,.45])]:
        boxes=g.get('refine_boxes',{}).get(component)
        if boxes is None: raise ValueError(f'Missing R5 refinement boxes for {component}')
        cfg=dict(id=f'R5_{component}',variant='R5',component=component,
            step_path=str(files[component].resolve()),expected_step_sha256=sha(files[component]),
            loads_are_actual_newtons=True,max_dofs=500000,far_size_factor=2.5,
            mesh_algorithm_3d=10,mesh_optimizer='Netgen',averaging_radii_mm=[],refine_boxes=boxes,cases=cases)
        path=out/'configs'/f'{component}.json';dump(path,cfg)
        plans.append(dict(part=component,config=str(path.relative_to(out)),sizes_mm=sizes,cases=list(cases)))
    manifest=dict(revision='R5',cad_directory=str(cad.resolve()),geometry_sha256=sha(cad/'geometry.json'),
        assembly_sha256=sha(cad/'assembly.json'),source_steps={k:dict(path=str(f.resolve()),sha256=sha(f)) for k,f in files.items()},
        runner_sha256=sha(__file__),mechanics_sha256=sha(Path(__file__).with_name('mechanics.py')),
        solver_sha256=SOLVER_SHA,material_sha256=sha(out/'engine/material.json'),
        configuration_sha256={p['part']:sha(out/p['config']) for p in plans},plans=plans,
        payload_2g_N=PAYLOAD_N,preload_N=PRELOAD,physical_qualification=False,
        scope='Component screening only. Receiver cases include payload/preload reactions; servo/clamp inertia and actuator mounting reactions are omitted. Casing, servo internals, bolts, host wing, fatigue, creep and lateral flight loads are not solved. Prescribed far-roof contact does not solve closure of the initial guide gap or assembled rocking.')
    dump(out/'manifest.json',manifest)
    print(json.dumps(dict(prepared_solves=sum(len(p['cases'])*len(p['sizes_mm']) for p in plans))))


def verify_inputs(out):
    m=read(out/'manifest.json')
    if m['runner_sha256']!=sha(__file__) or m['mechanics_sha256']!=sha(Path(__file__).with_name('mechanics.py')):
        raise ValueError('Analysis source changed after preparation; start a fresh run')
    if sha(out/'engine/solver.py')!=m['solver_sha256'] or sha(out/'engine/material.json')!=m['material_sha256']:
        raise ValueError('Solver/material changed after preparation')
    cad=Path(m['cad_directory'])
    if sha(cad/'geometry.json')!=m['geometry_sha256'] or sha(cad/'assembly.json')!=m['assembly_sha256']:
        raise ValueError('CAD identity changed after preparation')
    for item in m['source_steps'].values():
        if sha(item['path'])!=item['sha256']: raise ValueError('Source STEP changed after preparation')
    for p in m['plans']:
        if sha(out/p['config'])!=m['configuration_sha256'][p['part']]: raise ValueError('Load/fixture configuration changed')
    return m


def run(out,part):
    m=verify_inputs(out);p=next(p for p in m['plans'] if p['part']==part)
    log=out/'logs'/f'{part}.log';log.parent.mkdir(exist_ok=True)
    env=os.environ.copy();env.update({k:'1' for k in ['OPENBLAS_NUM_THREADS','OMP_NUM_THREADS','MKL_NUM_THREADS']})
    cmd=[sys.executable,str(out/'engine/solver.py'),'--config',str(out/p['config']),
         '--sizes',*map(str,p['sizes_mm'])]
    started=time.monotonic()
    with log.open('w') as stream:
        result=subprocess.run(cmd,stdout=stream,stderr=subprocess.STDOUT,env=env)
    dump(out/'execution'/f'{part}.json',dict(returncode=result.returncode,elapsed_seconds=time.monotonic()-started,
        command=cmd,config_sha256=sha(out/p['config']),log=str(log.relative_to(out))))
    print(json.dumps(dict(part=part,returncode=result.returncode,elapsed_seconds=time.monotonic()-started)),flush=True)
    if result.returncode:
        print(log.read_text()[-6000:]);raise SystemExit(result.returncode)


def passes(d):
    limits={'force_balance_error_N':1e-4,'moment_balance_error_Nmm':1e-3,
        'gauge_reaction_norm_N':1e-4,'relative_free_residual':1e-7,'relative_volume_error':.02}
    physical_fields=['max_displacement_mm','raw_peak_tensile_MPa','raw_peak_compressive_MPa','raw_peak_vm_MPa']
    return (all(math.isfinite(d[k]) and abs(d[k])<v for k,v in limits.items())
        and all(math.isfinite(d[k]) and d[k]>=0 for k in physical_fields))


def validate_result_identity(d,part,case,h,manifest,material):
    if d['id']!=f'R5_{part}' or d['case']!=case or not math.isclose(d['h_mm'],h,rel_tol=0,abs_tol=1e-12):
        raise ValueError('Result part, case or mesh level does not match the requested solve')
    if d['material']!=material:
        raise ValueError('Result material does not match the run material')
    if d['step_sha256']!=manifest['source_steps'][part]['sha256'] or d['configuration_sha256']!=manifest['configuration_sha256'][part]:
        raise ValueError('Stale numerical result')
    if d['driver_sha256']!=SOLVER_SHA:
        raise ValueError('Unrecognized numerical solver')


def summarize(out):
    m=verify_inputs(out);rows=[];material=read(out/'engine/material.json')
    for p in m['plans']:
        execution=read(out/'execution'/f"{p['part']}.json")
        if execution['returncode']!=0: raise ValueError('Failed execution cannot satisfy the evidence gate')
        if execution['config_sha256']!=m['configuration_sha256'][p['part']]:
            raise ValueError('Execution record does not identify the current configuration')
        for h in p['sizes_mm']:
            for case in p['cases']:
                d=read(out/'configs/results'/f"R5_{p['part']}"/f'h{h:g}'/f'{case}.json')
                validate_result_identity(d,p['part'],case,h,m,material)
                clean={k:v for k,v in d.items() if not any(s in k for s in ['threshold','failure_index','regularized','raw_peak_element_centroid'])}
                clean.update(physical_qualification=False,numerical_checks_passed=passes(d))
                file=out/'cases'/p['part']/f'{case}-h{h:g}.json';dump(file,clean)
                row={k:d[k] for k in ['max_displacement_mm','raw_peak_tensile_MPa','raw_peak_compressive_MPa',
                    'raw_peak_vm_MPa','elements','dofs','force_balance_error_N','moment_balance_error_Nmm',
                    'relative_free_residual','gauge_reaction_norm_N','relative_volume_error','step_sha256']}
                row.update(part=p['part'],case=case,mesh_size_mm=h,numerical_checks_passed=passes(d),result=str(file.relative_to(out)))
                rows.append(row)
    convergence=[]
    for part,case in sorted(set((r['part'],r['case']) for r in rows)):
        coarse,fine=sorted([r for r in rows if (r['part'],r['case'])==(part,case)],key=lambda r:-r['mesh_size_mm'])[-2:]
        convergence.append(dict(part=part,case=case,finest_pair_change_percent={k:
            100*abs(fine[k]-coarse[k])/max(abs(fine[k]),1e-12) for k in
            ['max_displacement_mm','raw_peak_tensile_MPa','raw_peak_compressive_MPa']}))
    summary=dict(revision='R5',status='numerical_checks_passed' if all(r['numerical_checks_passed'] for r in rows) else 'numerical_failure',
        case_solves=len(rows),payload_2g_N=PAYLOAD_N,preload_N=PRELOAD,cases=rows,mesh_convergence=convergence,
        physical_qualification=False,strength_rating_established=False,material=read(out/'engine/material.json'),
        exclusions=m['scope'])
    dump(out/'summary.json',summary)
    lines=['# R5 fresh component simulation','',f"{len(rows)} actual STEP/mesh solves; **{summary['status']}**.",'',
        'Loads use the new downward-facing cartridge geometry. The receiver is held at its actual captive-nut bearing interfaces; '
        'the adapter at its payload mounts. Balanced keeper contact cases use six rigid-motion gauges. '
        'The blocked-drive fixture, when present, is a separate deliberately restrained component test.','',
        f'2 g payload = {PAYLOAD_N:.7f} N. Opposing pad preload = {PRELOAD:g} N. '
        'Material: isotropic solid PLA comparison, E = 2200 MPa, Poisson ratio 0.35. '
        'These are not measured PAHT-CF properties or material allowables.','',
        '| Part / case | h, mm | Maximum displacement, mm | Raw tension, MPa | Raw compression, MPa |',
        '| --- | ---: | ---: | ---: | ---: |']
    for part,case in sorted(set((r['part'],r['case']) for r in rows)):
        r=min([r for r in rows if (r['part'],r['case'])==(part,case)],key=lambda r:r['mesh_size_mm'])
        lines.append(f"| {part} / {case} | {r['mesh_size_mm']:g} | {r['max_displacement_mm']:.5f} | {r['raw_peak_tensile_MPa']:.2f} | {r['raw_peak_compressive_MPa']:.2f} |")
    lines+=['','## Mesh sensitivity','', '| Part / case | Displacement change | Tension change | Compression change |','| --- | ---: | ---: | ---: |']
    for r in convergence:
        c=r['finest_pair_change_percent']
        lines.append(f"| {r['part']} / {r['case']} | {c['max_displacement_mm']:.2f}% | {c['raw_peak_tensile_MPa']:.2f}% | {c['raw_peak_compressive_MPa']:.2f}% |")
    lines+=['','Raw local contact peaks may remain mesh-sensitive. Two mesh levels are a sensitivity check, '
        'not proof of asymptotic convergence. Uniform tractions do not reproduce nonlinear edge yielding, wear or departure dynamics.','',
        'Each solve requires force error < 0.0001 N, moment error < 0.001 N mm, free residual < 0.0000001, '
        'CAD/mesh volume difference < 2%, and gauge reaction < 0.0001 N. Input/result hashes must match.','',
        m['scope'],'','A numerical pass establishes neither loaded servo performance nor a payload or flight rating.']
    (out/'report.md').write_text('\n'.join(lines)+'\n')
    print(json.dumps(dict(status=summary['status'],case_solves=len(rows))))
    if summary['status']!='numerical_checks_passed': raise SystemExit(2)


if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--stage',choices=['prepare','receiver','adapter','keeper','report'],required=True)
    ap.add_argument('--cad',type=Path)
    ap.add_argument('--output',type=Path,required=True)
    args=ap.parse_args();out=args.output.resolve()
    if args.stage=='prepare':
        if args.cad is None: ap.error('--cad is required for prepare')
        prepare(args.cad.resolve(),out)
    elif args.stage=='report': summarize(out)
    else: run(out,args.stage)
