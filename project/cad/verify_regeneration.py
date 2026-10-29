#!/usr/bin/env python3
"""Compare an independent N2 rebuild with the issued frozen assembly geometry."""
from pathlib import Path
import argparse,hashlib,json
import cadquery as cq

HERE=Path(__file__).resolve().parent
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def bbox(s):
 b=s.BoundingBox();return [b.xmin,b.ymin,b.zmin,b.xmax,b.ymax,b.zmax]
def solid(path):return cq.importers.importStep(str(path)).val()

def main():
 ap=argparse.ArgumentParser(description=__doc__)
 ap.add_argument('--regenerated',type=Path,required=True,help='The new export root passed to build_n2.py')
 ap.add_argument('--report',type=Path,required=True)
 a=ap.parse_args();original=HERE/'N2';rebuilt=a.regenerated.resolve()/'cad/N2'
 m=json.loads((original/'manifest.json').read_text());n=json.loads((rebuilt/'manifest.json').read_text())
 if [p['id'] for p in m['parts']]!=[p['id'] for p in n['parts']]:raise RuntimeError('Part identities/order differ')
 rows=[]
 for p in m['parts']:
  old=solid(original/p['step']);new=solid(rebuilt/p['step'])
  volume_delta=abs(old.Volume()-new.Volume())
  bounds_delta=max(abs(x-y) for x,y in zip(bbox(old),bbox(new)))
  # Exact-solid Boolean symmetric difference, independent of STEP header/order.
  symdiff=abs(old.cut(new).Volume())+abs(new.cut(old).Volume())
  checks={'valid':new.isValid(),'same_solid_count':len(old.Solids())==len(new.Solids()),'volume':volume_delta<1e-6,'bounds':bounds_delta<1e-6,'symmetric_difference':symdiff<1e-6}
  rows.append({'id':p['id'],'volume_difference_mm3':volume_delta,'max_bbox_difference_mm':bounds_delta,'symmetric_difference_mm3':symdiff,'original_step_sha256':sha(original/p['step']),'rebuilt_step_sha256':sha(rebuilt/p['step']),'checks':checks,'passed':all(checks.values())})
 oldasm=solid(original/'assembly.step');newasm=solid(rebuilt/'assembly.step')
 assembly={'original_solids':len(oldasm.Solids()),'rebuilt_solids':len(newasm.Solids()),'volume_difference_mm3':abs(oldasm.Volume()-newasm.Volume()),'max_bbox_difference_mm':max(abs(x-y) for x,y in zip(bbox(oldasm),bbox(newasm)))}
 assembly['passed']=assembly['original_solids']==assembly['rebuilt_solids'] and assembly['volume_difference_mm3']<1e-6 and assembly['max_bbox_difference_mm']<1e-6
 oldv=json.loads((original/'viewer.json').read_text());newv=json.loads((rebuilt/'viewer.json').read_text())
 viewer={'source_frozen_sha256':sha(original/'viewer.json'),'rebuilt_sha256':sha(rebuilt/'viewer.json'),'part_count':len(oldv['parts']),'mesh_arrays_identical':all(p['positions']==q['positions'] and p['indices']==q['indices'] for p,q in zip(oldv['parts'],newv['parts'])),'motion_and_explode_identical':all(all(p.get(k)==q.get(k) for k in ['id','keyframes','explode','rotationPivot','rotationAxis','visibleWhen']) for p,q in zip(oldv['parts'],newv['parts']))}
 passed=all(r['passed'] for r in rows) and assembly['passed'] and viewer['motion_and_explode_identical']
 result={'status':'PASS' if passed else 'FAIL','method':'Independent STEP re-import, per-part Boolean symmetric differences, volume/bounds/solid counts and assembly-frame checks. Viewer motion compared separately.','tolerance':{'volume_mm3':1e-6,'position_mm':1e-6},'cadquery':cq.__version__,'parts':rows,'assembly':assembly,'viewer':viewer,'qualification':'A successful rebuild verifies geometry/source continuity only, not physical strength, printing fit or loaded release. STEP hashes can differ because of export metadata; unchanged issued STEP/STL/viewer copies remain authoritative.'}
 a.report.parent.mkdir(parents=True,exist_ok=True);a.report.write_text(json.dumps(result,indent=2)+'\n')
 print(json.dumps({'status':result['status'],'parts':len(rows),'assembly':assembly,'mesh_arrays_identical':viewer['mesh_arrays_identical'],'maximum_symmetric_difference_mm3':max(r['symmetric_difference_mm3'] for r in rows)}))
 if not passed:raise SystemExit(1)

if __name__=='__main__':main()
