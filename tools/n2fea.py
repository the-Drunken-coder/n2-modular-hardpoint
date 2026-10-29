#!/usr/bin/env python3
"""One-command N2 variant study: build -> mesh -> standard cases -> failure loads + ratings.

  tools/n2fea.py --lug-t 3.4 --overlap 2.0 --material paht-cf --sf 2 [--wall-bearing] [--h 0.8]

Geometry: tools/n2variant.py (P13 receiver+adapter, parametric lug thickness / distal overlap).
Solver: frozen project/analysis/inputs/drivers/solver_6d9b...py (linear, prescribed contact
tractions, 1 N unit loads). Cases per part: straight +Z, 45 and 90 deg in XZ and YZ, both signs;
the worst sign is reported. Receiver: centered (both roofs) and distal_ineffective (distal lost).
Adapter: keeper-floor load. --wall-bearing adds an X restraint on the lug face that would hit the
receiver slot wall (XZ and YZ cases): idealised zero-clearance socket bearing.
Material scaling: failure = PLA-screen failure x (material Z TDS / 31 MPa), as in the rating docs.
"""
import argparse,copy,glob,json,math,os,subprocess,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];A=R/'project/analysis'
SOLVER=glob.glob(str(A/'inputs/drivers/solver_*.py'))[0]
PY=os.environ.get('N2_PY','/workspace/n2env/bin/python')
MAT={'pla':31.0,'paht-cf':47.0}  # Bambu TDS Z tensile, MPa
ANG=[45,90]
def dirs():
    yield 'Z',None,0,0
    for plane,ax in (('XZ',0),('YZ',1)):
        for s in (1,-1):
            for a in ANG:yield f'{plane}{"+" if s>0 else "-"}{a}',ax,s,a
def sha(p):
    import hashlib;return hashlib.sha256(open(p,'rb').read()).hexdigest()
def patch(x,z,y=(8.5,11.5)):return dict(normal_axis=2,z=z,x_range=list(x),y_range=list(y))
def tilt(loads,tag,ax,s,a,sel_up):
    if ax is None:return loads
    co,si=math.cos(math.radians(a)),math.sin(math.radians(a));up=[L for L in loads if sel_up(L)];tot=sum(L['force_N'][2] for L in up)
    for L in loads:L['force_N']=[v*co for v in L['force_N']]
    for L in up:L['force_N'][ax]+=s*si*abs(L['force_N'][2]/co)/abs(tot)*(1 if tot>0 else -1)
    return loads
def configs(g,out,wall):
    l0,l1=g['lug'];s0,s1=g['slot'];tip=g['tip'];lc=27.5
    rec=json.load(open(A/'inputs/configs/N2_receiver.json'));ada=json.load(open(A/'inputs/configs/N2_adapter.json'))
    rb=rec['cases']['centered_bonded']['supports'];ab=ada['cases']['centered']['supports']
    dc,pc=(tip+s0)/2,s1+.5;fp=(lc-dc)/(pc-dc)
    base_r={'centered':[(patch((tip,s0),10.5),1-fp),(patch((s1,s1+1),10.5),fp)],
            'distal_ineffective':[(patch((s1,s1+1),10.5),(33.5-lc)/(33.5-pc)),(patch((33,34),6.9),1-(33.5-lc)/(33.5-pc))]}
    rec['cases']={};ada['cases']={}
    for nm,ls in base_r.items():
        for tag,ax,s,a in dirs():
            if nm=='distal_ineffective' and ax is not None:continue
            L=[dict(label='patch',selector=sel,force_N=[0,0,f]) for sel,f in ls]
            rec['cases'][f'{nm}__{tag}']=dict(loads=tilt(L,tag,ax,s,a,lambda L:L['force_N'][2]>0),supports=rb)
    for tag,ax,s,a in dirs():
        L=[dict(label='keeper on floor',selector=patch((l0,l1),6.9),force_N=[0,0,-1.0])]
        if ax is not None:
            co,si=math.cos(math.radians(a)),math.sin(math.radians(a));L[0]['force_N']=[0,0,-co];L[0]['force_N'][ax]=-s*si
        sup=copy.deepcopy(ab)
        if wall and ax==0:  # force -s*X pushes the lug X face into the slot wall
            xf=l0 if s>0 else l1
            sup.append(dict(label='slot wall bearing (idealised)',selector=dict(normal_axis=0,x=xf,z_range=[3.8,6.6],y_range=[6.4,13.6]),components=[0]))
        if wall and ax==1:  # force -s*Y pushes the lug Y face into the slot wall
            yf=6.4 if s>0 else 13.6
            sup.append(dict(label='slot wall bearing (idealised)',selector=dict(normal_axis=1,y=yf,z_range=[3.8,6.6],x_range=[l0,l1]),components=[1]))
        ada['cases'][f'adapter__{tag}']=dict(loads=L,supports=sup)
    for d,nm in ((rec,'N2_receiver'),(ada,'N2_adapter')):
        d['step_path']=str(out/f'{nm}.step');d['expected_step_sha256']=sha(d['step_path'])
        (out/nm).mkdir(exist_ok=True);json.dump(d,open(out/nm/f'{nm}.json','w'),indent=1)
def main():
    ap=argparse.ArgumentParser(description=__doc__,formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--lug-t',type=float,default=1.4);ap.add_argument('--overlap',type=float,default=0.6)
    ap.add_argument('--material',choices=MAT,default='paht-cf');ap.add_argument('--sf',type=float,default=2.0)
    ap.add_argument('--wall-bearing',action='store_true');ap.add_argument('--h',type=float,default=0.8,help='receiver mesh size');ap.add_argument('--h-adapter',type=float,default=0.55)
    ap.add_argument('--out',default=None)
    a=ap.parse_args()
    out=Path(a.out or f'/tmp/n2fea/t{a.lug_t}_o{a.overlap}{"_wall" if a.wall_bearing else ""}_h{a.h}-{a.h_adapter}').resolve();out.mkdir(parents=True,exist_ok=True)
    subprocess.run([PY,str(R/'tools/n2variant.py'),str(out),str(a.lug_t),str(a.overlap)],check=True,capture_output=True)
    g=json.load(open(out/'geom.json'));configs(g,out,a.wall_bearing)
    import shutil;eng=out/'engine';eng.mkdir(exist_ok=True);shutil.copy(SOLVER,eng/'solver.py');shutil.copy(A/'material.json',eng/'material.json')
    ps=[subprocess.Popen([PY,str(eng/'solver.py'),'--config',str(out/n/f'{n}.json'),'--sizes',str(a.h if n=='N2_receiver' else a.h_adapter)],stdout=open(out/f'{n}.log','w'),stderr=subprocess.STDOUT) for n in ('N2_receiver','N2_adapter')]
    if any(p.wait() for p in ps):sys.exit(f'solver failed, see {out}/*.log')
    k=MAT[a.material]/31.0;res={}
    for f in glob.glob(str(out/'*/results/*/h*/*.json')):
        d=json.load(open(f));part,case=d['id'].split('_')[1],d['case']
        nm,tag=case.split('__');grp=tag if tag=='Z' else tag[:2]+tag[3:]
        key=(part,nm,grp);res[key]=min(res.get(key,1e9),d['raw_strength_threshold_N'])
    rows=[dict(part=p,case=n,dir=gr,PLA_fail_N=round(v,2),fail_N=round(v*k,2),rating_N=round(v*k/a.sf,2)) for (p,n,gr),v in sorted(res.items())]
    gov={}
    for r in rows:
        if r['case']=='distal_ineffective':continue
        gov[r['dir']]=min(gov.get(r['dir'],1e9),r['rating_N'])
    di=[r['rating_N'] for r in rows if r['case']=='distal_ineffective']
    summary=dict(params=vars(a),geometry=g,rows=rows,rating_distal_engaged=gov,rating_straight_distal_lost=min(di+[gov['Z']]))
    json.dump(summary,open(out/'summary.json','w'),indent=1)
    print(f"{'part':9}{'case':20}{'dir':6}{'PLA fail':>10}{a.material+' fail':>14}{'rating SF'+str(a.sf):>12}")
    for r in rows:print(f"{r['part']:9}{r['case']:20}{r['dir']:6}{r['PLA_fail_N']:10.2f}{r['fail_N']:14.2f}{r['rating_N']:12.2f}")
    print('governing rating, distal engaged:',gov,'| straight, distal lost:',summary['rating_straight_distal_lost'],'| stroke needed',g['stroke_needed_mm'],'mm')
    print('summary:',out/'summary.json')
if __name__=='__main__':main()
