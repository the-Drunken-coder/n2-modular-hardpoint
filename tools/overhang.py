#!/usr/bin/env python3
"""Overhang check for a STEP part in a given print orientation (no slicer).

  tools/overhang.py PART.step --up=+X [--angle 45] [--bridge 10] [--json out.json]

--up is the part axis that points up on the printer (+X,-X,+Y,-Y,+Z,-Z).
A face region overhangs when its outward normal is within (90-angle) deg of straight down,
i.e. steeper than the self-supporting angle. Faces on the bed plane are ignored.
Each overhang face is classed:
  bridge     flat (horizontal), an in-plane extent <= --bridge mm, and anchored at both
             ends of that extent (the neighbouring face runs down from the edge). A flat
             face anchored on one side only is a cantilever and counts as SUPPORT.
  small-curve cylindrical face of diameter <= 3.5 mm: small hole top or fillet (prints
             without support).
  SUPPORT    anything else: needs support in this orientation.
Exit code 1 if any SUPPORT face exists.
"""
import argparse,json,math,sys
import numpy as np
import cadquery as cq
AX={'X':0,'Y':1,'Z':2}
def main():
    p=argparse.ArgumentParser();p.add_argument('step');p.add_argument('--up',required=True)
    p.add_argument('--angle',type=float,default=45);p.add_argument('--bridge',type=float,default=10)
    p.add_argument('--tol',type=float,default=.02);p.add_argument('--json')
    a=p.parse_args()
    u=np.zeros(3);u[AX[a.up[-1].upper()]]=-1 if a.up[0]=='-' else 1
    shp=cq.importers.importStep(a.step).val()
    lim=-math.cos(math.radians(a.angle))-1e-6
    hmin=min(np.dot(np.array(v.toTuple()),u) for v in shp.Vertices())
    out=[];bed=0.0;e2f={}
    for f in shp.Faces():
        for e in f.Edges():e2f.setdefault(e,[]).append(f)
    def anchored(f,h,ax):
        lo=[]
        for e in f.Edges():
            ev=[v.toTuple()[ax] for v in e.Vertices()]
            if max(ev)-min(ev)>.1:continue  # only edges across this axis can anchor its ends
            for g in e2f.get(e,[]):
                if g.isSame(f):continue
                # anchored if the neighbour face continues downward right at this edge
                if g.geomType()!='PLANE':  # tangent fillet/round: counts if it descends
                    if min(np.dot(np.array(v.toTuple()),u) for v in g.Vertices())<h-1e-3:
                        lo+=[v.toTuple()[ax] for v in e.Vertices()]
                    continue
                for t in np.linspace(.1,.9,5):
                    q=np.array(e.positionAt(t).toTuple())-.05*u
                    if g.distance(cq.Vertex.makeVertex(*q))<1e-3:lo.append(float(q[ax]))
        return lo
    for f in shp.Faces():
        vs,tr=f.tessellate(a.tol);V=np.array([v.toTuple() for v in vs])
        if not len(tr):continue
        c=f.Center()
        T=np.array(tr);n=np.cross(V[T[:,1]]-V[T[:,0]],V[T[:,2]]-V[T[:,0]]);ar=np.linalg.norm(n,axis=1)/2
        ok=ar>1e-12;n[ok]/=(2*ar[ok])[:,None]
        if f.geomType()=='PLANE' and np.dot(n[ok].mean(0),np.array(f.normalAt().toTuple()))<0:n=-n
        h=V@u
        if np.all(np.abs(h-hmin)<1e-4):bed+=ar.sum();continue
        d=n@u;m=ok&(d<lim)
        A=float(ar[m].sum())
        if A<1e-3:continue
        P=V[np.unique(T[m])];ext=np.ptp(P,0);ext[np.argmax(np.abs(u))]=0
        span=sorted(e for i,e in enumerate(ext) if i!=np.argmax(np.abs(u)))
        kind='SUPPORT'
        if f.geomType()=='CYLINDER' and 2*f._geomAdaptor().Cylinder().Radius()<=3.5:kind='small-curve'
        elif f.geomType()=='PLANE' and d[m].max()<-0.999 and span[0]<=a.bridge:
            iu=int(np.argmax(np.abs(u)))
            for ax in [i for i in range(3) if i!=iu and np.ptp(P[:,i])<=a.bridge]:
                lo=anchored(f,float(np.median(P@u)),ax)
                if lo and min(lo)<=P[:,ax].min()+.05 and max(lo)>=P[:,ax].max()-.05:kind='bridge';break
        if kind=='SUPPORT' and span[0]<=0.4:kind='sliver'  # narrower than one extrusion line
        out.append(dict(kind=kind,area_mm2=round(A,2),height_mm=round(float(np.median(P@u)-hmin),2),
                        span_mm=[round(float(s),2) for s in span],centre=[round(x,2) for x in c.toTuple()]))
    out.sort(key=lambda r:(r['kind']!='SUPPORT',-r['area_mm2']))
    tot={k:round(sum(r['area_mm2'] for r in out if r['kind']==k),2) for k in ('SUPPORT','bridge','small-curve','sliver')}
    print(f"{a.step} up={a.up} bed={bed:.1f} mm2 overhang(>{a.angle:g} from vertical): {tot}")
    for r in out:print(f"  {r['kind']:10s} {r['area_mm2']:8.2f} mm2  h={r['height_mm']:6.2f}  span={r['span_mm']}  at {r['centre']}")
    if a.json:json.dump(dict(step=a.step,up=a.up,angle=a.angle,bed_mm2=round(bed,2),totals=tot,faces=out),open(a.json,'w'),indent=1)
    sys.exit(1 if tot['SUPPORT']>0 else 0)
if __name__=='__main__':main()
