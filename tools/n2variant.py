"""Improvement-study geometry variants of N2 receiver + adapter (P13 base). Units mm.
Mirrors project/cad/build_n2.py design_n2() receiver/adapter, with the lug thickness
(LUG_T, X) and distal overlap (OVERLAP) as parameters. Lug stays centred at X 27.5;
the slot keeps 0.3 mm clearance per side; the distal roof keeps its 3.1 mm X width and
moves with the slot; the proximal roof starts at the slot edge. Study geometry only: the
keeper/actuator stroke is NOT rebuilt here (stroke needed ~= OVERLAP + LUG_T + 1.0 mm).
Run: python variant.py OUTDIR LUG_T OVERLAP
"""
import sys,os,json
sys.path.insert(0,os.path.join(os.path.dirname(__file__),'../project/cad'))
import cadquery as cq
from common import box,cyl
from solenoid_parts import clamp_base
ROOF_EXTRA=2.0;ROOF_FILLET=0.3;INDEX_CENTRES=[34.0,37.0]
def build(t,o):
    l0,l1=27.5-t/2,27.5+t/2;s0,s1=l0-.3,l1+.3
    base,cap,hw=clamp_base('N2',38,17)
    base=base.cut(cyl(3.75,2.3,(-2.2,0,8.7),(1,0,0)))
    distal=box(s0-3.1,s0,5.8,14.2,3.1,12.7+ROOF_EXTRA).cut(box(s0-3.2,s0+.1,8.2,11.8,6.9,10.5))
    proximal=box(s1,37.4,5.8,14.2,3.1,12.7+ROOF_EXTRA).cut(box(s1-.1,37.6,2,11.8,6.9,10.5))
    wall=box(23,38,-6,-4.3,3.1,12.7)
    for x in INDEX_CENTRES:wall=wall.cut(box(x-.3,x+.3,-6.01,-4.29,12.35,12.71))
    base=base.union(distal).union(proximal).union(wall)
    base=base.union(box(min(22.8,s0-3.6),31,4.6,15.4,3.1,6.6))
    base=base.cut(box(s0,s1,6.1,13.9,3.2,16)).clean()
    for y in (8.2,11.8):
        base=base.edges(cq.selectors.BoxSelector((s0-3.3,y-.05,10.45),(37.5,y+.05,10.55))).edges('|X').fillet(ROOF_FILLET)
    ad=box(l0,l1,6.4,13.6,3.8,16).union(box(24,37,5,17,16,19))
    ad=ad.cut(box(s0,s1,7.7,12.3,6.9,10.5))
    for y in (8,14):ad=ad.cut(cyl(1.6,4,(33,y,15.5)))
    return base,ad.clean(),dict(lug=[l0,l1],slot=[s0,s1],tip=s0-o,overlap=o,lug_t=t,stroke_needed_mm=round(o+t+1.0,2))
if __name__=='__main__':
    out,t,o=sys.argv[1],float(sys.argv[2]),float(sys.argv[3]);os.makedirs(out,exist_ok=True)
    r,a,m=build(t,o)
    cq.exporters.export(r,f'{out}/N2_receiver.step');cq.exporters.export(a,f'{out}/N2_adapter.step')
    json.dump(m,open(f'{out}/geom.json','w'),indent=1);print(m)
