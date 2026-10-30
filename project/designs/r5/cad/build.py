#!/usr/bin/env python3
"""R5 credit-card cartridge. Millimetres; nominal prototype, not a rated release.

The retained structure is inside X0..85.6/Y0..54/Z0..20. Payload features
and the aircraft's installation screws belong to separate departing/host groups.
Supplier servo geometry is a measured-fit reservation, not an exact vendor STEP.
"""
from __future__ import annotations
import argparse, csv, hashlib, json, math
from pathlib import Path
import cadquery as cq
from OCP.Bnd import Bnd_Box
from OCP.BRepBndLib import BRepBndLib

HERE=Path(__file__).resolve().parent
ROOT=HERE.parent
R=5.5
A0=15.0
A1=100.0
ARES=105.0
PX,PZ=65.4,9.5
PINX=PX-R*math.cos(math.radians(A0))
PINZ=PZ+R*math.sin(math.radians(A0))
TRAVEL=R*(math.cos(math.radians(A0))-math.cos(math.radians(A1)))
RESERVE=R*(math.cos(math.radians(A0))-math.cos(math.radians(ARES)))
MOUNTS=[(10,10),(75.6,10),(10.5,44.8),(75.1,44.8)]
CASE_MOUNTS=[(4.2,4.2),(81.4,4.2),(4.2,49.8),(81.4,49.8)]
PADS=[(20.5,34),(35.5,34),(20.5,43),(35.5,43)]
ADAPTER_MOUNTS=[(17.5,29),(38.5,29),(17.5,48),(38.5,48)]
KIN={'type':'short_crank','radius_mm':R,'crank_radius_mm':R,'pivot':[PX,0,PZ],
     'axis':[0,1,0],'angle_range_deg':[A0,ARES],'retained_angle_deg':A0,
     'operating_angle_deg':A1,'operating_rotation_deg':A1-A0,
     'release_angle_deg':A1,'travel_mm':RESERVE,'operating_travel_mm':TRAVEL,
     'mechanical_travel_mm':7.3,'release_clearance_mm':4.8,
     'formula':'s = r * (cos(theta_retained) - cos(theta))',
     'animation_note':'Geometry starts at 15 degrees; rotate by the delta angle. Prescribed motion is not proof of release.'}


def dump(p,data):
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(data,indent=2,allow_nan=False)+'\n')
def shape(s): return s.val() if isinstance(s,cq.Workplane) else s
def box(x0,x1,y0,y1,z0,z1):
    return cq.Workplane('XY').box(x1-x0,y1-y0,z1-z0).translate(((x0+x1)/2,(y0+y1)/2,(z0+z1)/2))
def cyl(r,h,o,d=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCylinder(r,h,cq.Vector(*o),cq.Vector(*d)))
def cone(r1,r2,h,o,d=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCone(r1,r2,h,cq.Vector(*o),cq.Vector(*d)))
def xz(points,y0,y1):
    return cq.Workplane('XZ').polyline(points).close().extrude(y1-y0).translate((0,y1,0))
def nut(af,h,ri,o):
    return cq.Workplane('XY').polygon(6,af/math.cos(math.pi/6)).extrude(h).translate(o).cut(cyl(ri,h+.2,(o[0],o[1],o[2]-.1)))
def nut_y(af,h,ri,o):
    return cq.Workplane('XZ').polygon(6,af/math.cos(math.pi/6)).extrude(h).translate((o[0],o[1]+h,o[2])).cut(cyl(ri,h+.2,(o[0],o[1]-.1,o[2]),(0,1,0)))
def washer(ro,ri,h,o,d=(0,0,1)): return cyl(ro,h,o,d).cut(cyl(ri,h+.2,tuple(o[i]-.1*d[i] for i in range(3)),d))
def cap_screw(r,length,rh,hh,o,d=(0,0,-1)):
    a=cyl(r,length,o,d)
    start=tuple(o[i]-d[i]*hh for i in range(3))
    return a.union(cyl(rh,hh,start,d)).cut(cyl(.8 if r==1 else 1.2,hh*.55,start,d))
def flat_screw(r,length,rh,head_h,o):
    # o is the flush head-top point, screw points down.
    return cone(rh,r,head_h,o,(0,0,-1)).union(cyl(r,length-head_h,(o[0],o[1],o[2]-head_h),(0,0,-1))).cut(cyl(.65,.6,(o[0],o[1],o[2]+.01),(0,0,-1)))
def rotate(s,angle):return s.rotate((PX,0,PZ),(PX,1,PZ),angle)
def bounds(s):
    # Ignore cached display triangulations; use exact CAD surface extrema.
    bb=Bnd_Box()
    BRepBndLib.AddOptimal_s(shape(s).wrapped,bb,False,False)
    x0,y0,z0,x1,y1,z1=bb.Get()
    return {'min':[x0,y0,z0],'max':[x1,y1,z1]}
def intersection(a,b):return shape(a).intersect(shape(b)).Volume()
def mesh(s):
    vv,tt=shape(s).tessellate(.10,.16)
    return {'positions':[round(q,6) for v in vv for q in v.toTuple()], 'indices':[q for t in tt for q in t]}
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()


def build_module():
    # Structural sled: mounting bosses and guide are one connected print.
    core=box(2,83.6,2,52,1.6,3.1).union(box(3.8,81.8,3.8,50.2,0,3.1))
    core=core.union(box(14,43,25,51,0,3.1))
    for x,y in CASE_MOUNTS:
        core=core.cut(cyl(3.8,22,(x,y,-.5)))
    # Four top-loaded nuts. The roof above each nut transfers load to the core.
    for x,y in MOUNTS:
        core=core.union(cyl(4.2,16.6,(x,y,1.8)))
        core=core.cut(cyl(1.7,20,(x,y,0)))
        pocket=cq.Workplane('XY').polygon(6,5.8/math.cos(math.pi/6)).extrude(2.8).translate((x,y,12.8))
        # Nut side loading faces toward the nearest lateral wall; casing is removed.
        pocket=pocket.union(box(x-2.9,x+2.9,2 if y<27 else y, y if y<27 else 52,12.8,15.6))
        core=core.cut(pocket)
    # Guide floors carry downward load; the servo only withdraws the bar.
    core=core.union(box(22.7,50.5,34.4,43.7,3.0,13.2))
    core=core.cut(box(22.6,50.6,36.9,40.5,7.4,11.0))
    core=core.cut(box(25.7,29.8,33.6,43.8,-1,16))
    # Root clearance opens toward the departing payload.
    core=core.cut(xz([(23.0,-.1),(26,3.2),(26,-.1)],33.6,43.8))
    core=core.cut(xz([(29.5,-.1),(29.5,3.2),(32.5,-.1)],33.6,43.8))
    # Female rectangular keyed seat; the male features and foam depart with pod.
    for (x0,x1,c) in ((23,26,.3),(30.5,33.5,.6)):
        core=core.cut(box(x0-c,x1+c,27.7,30.3,-.2,1.8))
    for x,y in PADS:core=core.cut(cyl(2.15,.7,(x,y,-.37)))
    # Cradle: two side fences plus padded cross clamp. No guessed ear holes used.
    core=core.union(box(46.6,48.1,3,20.5,3.0,6.4))
    core=core.union(box(71.3,72.8,3,20.5,3.0,6.4))
    for x in (44.5,76.3):
        core=core.union(cyl(3.4,12.8,(x,18.0,3.1)))
        core=core.cut(cyl(1.1,16,(x,18.0,2.0)))
        pocket=cq.Workplane('XY').polygon(6,4.15/math.cos(math.pi/6)).extrude(1.9).translate((x,18.0,12.0))
        pocket=pocket.union(box(x-2.075,x+2.075,18.0,21.5,12,13.9))
        core=core.cut(pocket)
    # Keeper is inserted without its M2 stop stud; install stud afterwards.
    # These integral side walls stop the screw head, never the sliding bar.
    core=core.union(box(49.7,52.6,40.5,41.9,3.0,12.3))
    core=core.union(box(63.7,66.7,40.5,41.9,3.0,12.3))
    # Stiffening ribs connect guide and all bolt posts, while leaving lead path.
    core=core.union(box(12,73,49.0,51.5,3.0,6.0))
    core=core.union(box(12,42,2.5,5,3.0,6.0))
    core=core.cut(box(70.8,80.0,39.0,41.0,3.2,18.5))
    core=core.cut(box(71.1,73.0,2.0,5.8,3.1,7.0))
    core=core.cut(box(71.3,80.0,5.5,6.0,3.2,18.5)).clean()

    adapter=box(13,43,25,52,-5.3,-1.5)
    lug=box(26,29.5,33.9,43.5,-1.5,12.6).cut(box(25.9,29.6,36.6,40.8,6.8,10.4))
    adapter=adapter.union(lug)
    adapter=adapter.union(xz([(23,-1.5),(26,1.7),(26,-1.5)],33.9,43.5))
    adapter=adapter.union(xz([(29.5,-1.5),(29.5,1.7),(32.5,-1.5)],33.9,43.5))
    for x0,x1 in ((23,26),(30.5,33.5)):
        adapter=adapter.union(box(x0,x1,28,30,-1.6,1.5))
    for x0,x1 in ((18,21),(36,39)):
        adapter=adapter.union(box(x0,x1,36.3,40.3,-1.6,-.25))
    for x,y in ADAPTER_MOUNTS:
        adapter=adapter.cut(cyl(1.7,5,(x,y,-5.5)))
        adapter=adapter.cut(cone(3.5,1.7,1.8,(x,y,-1.5),(0,0,-1)))
    adapter=adapter.clean()

    keeper=box(24.7,PINX,37.2,40.2,7.4,10.4)
    fork=box(PINX-5.5,PINX+5.5,37.2,40.2,5.2,17.6)
    keeper=keeper.union(fork).union(box(51.1,57.9,37.2,40.2,5.5,12.3))
    keeper=keeper.cut(box(PINX-2.2,PINX+2.2,37.1,40.3,8.0,18))
    # Side-loaded standardM2nut; head is a removable lateral travel-stop lug.
    keeper=keeper.cut(cyl(1.1,5,(54.5,36.8,8.9),(0,1,0)))
    stop_nut_pocket=cq.Workplane('XZ').polygon(6,4.15/math.cos(math.pi/6)).extrude(1.9).translate((54.5,39.1,8.9))
    keeper=keeper.cut(stop_nut_pocket).clean()
    # Slot is open at its top: intentionally no fragile bridge under the lid.

    # MG90D case reservation. Body/ears follow supplier sketch; shaft offset is
    # provisional and must be measured. Cradle adapts using shim pads, no ear fit.
    servo=box(48.3,71.1,2,30.5,3.4,15.6)
    servo=servo.union(box(43.95,75.45,21.8,23.8,3.4,15.6))
    servo=servo.union(cyl(5.1,2,(PX,29.5,PZ),(0,1,0)))
    servo=servo.union(cyl(2.35,4,(PX,30.5,PZ),(0,1,0)))
    for x in (45.4,74):servo=servo.cut(cyl(1.05,2.2,(x,21.7,PZ),(0,1,0)))
    servo=servo.cut(cyl(1.05,4.5,(PX,30.1,PZ),(0,1,0))).clean()
    clamp=box(41.1,79.7,14.6,21.4,15.9,17.5)
    for x in (44.5,76.3):
        clamp=clamp.cut(cyl(1.1,3,(x,18.0,15.5)))
        clamp=clamp.cut(cone(2.1,1.1,1.0,(x,18.0,17.5),(0,0,-1)))
    # Modified supplied single arm. Dimensioned conservative envelope to trim.
    horn=box(PX-R,PX,34.1,35.9,PZ-2.3,PZ+2.3).union(cyl(3.4,1.8,(PX,34.1,PZ),(0,1,0)))
    horn=horn.union(cyl(2.3,1.8,(PX-R,34.1,PZ),(0,1,0)))
    horn=horn.union(cyl(3.4,2.6,(PX,31.5,PZ),(0,1,0))).cut(cyl(2.45,3.05,(PX,31.45,PZ),(0,1,0)))
    horn=horn.cut(cyl(1.1,2.2,(PX-R,34.0,PZ),(0,1,0)))
    horn=horn.cut(cyl(1.1,2.2,(PX,34.0,PZ),(0,1,0)))
    horn=rotate(horn,A0).clean()
    sleeve=washer(2,1.05,6,(PINX,35.9,PINZ),(0,1,0))
    follower_bolt=cap_screw(1,12,1.9,2,(PINX,34.1,PINZ),(0,1,0))
    follower_washer=washer(2.5,1.1,.3,(PINX,41.9,PINZ),(0,1,0))
    follower_nut=nut_y(4,2.8,1.1,(PINX,42.2,PINZ))
    horn_screw=cap_screw(1,4,1.9,.8,(PX,35.9,PZ),(0,-1,0))

    shell=box(0,85.6,0,54,0,18.4).edges('|Z').fillet(1.5)
    shell=shell.cut(box(1.6,84,1.6,52.4,1.6,19))
    shell=shell.cut(box(3.6,82,3.6,50.4,-.2,1.7))
    shell=shell.cut(box(13.7,43.3,24.7,52.4,-1,1.7))
    for x,y in CASE_MOUNTS:
        shell=shell.union(cyl(3.4,18.4,(x,y,0)))
        shell=shell.cut(cyl(1.1,10,(x,y,10)))
        pocket=cq.Workplane('XY').polygon(6,4.15/math.cos(math.pi/6)).extrude(1.9).translate((x,y,13.0))
        pocket=pocket.union(box(x-2.075,x+2.075,y if y<27 else y-4,y+4 if y<27 else y,13,14.9))
        shell=shell.cut(pocket)
    # Cable exit upward is in the lid. Case is not weather sealed.
    shell=shell.cut(box(69,78.5,1.3,1.7,3.2,18.3)).clean()
    lid=box(0,85.6,0,54,18.4,20).edges('|Z').fillet(1.5)
    for x,y in CASE_MOUNTS:
        lid=lid.cut(cyl(1.1,3,(x,y,18)))
        lid=lid.cut(cone(2.1,1.1,1,(x,y,20),(0,0,-1)))
    for x,y in MOUNTS:lid=lid.cut(cyl(1.8,3,(x,y,18)))
    lid=lid.cut(box(29,39,7,13,18,21))
    return {'receiver_core':core,'payload_adapter':adapter,'keeper':keeper,'servo':servo,
            'servo_clamp':clamp,'horn':horn,'sleeve':sleeve,'follower_bolt':follower_bolt,
            'follower_washer':follower_washer,'follower_nut':follower_nut,'horn_screw':horn_screw,
            'case_shell':shell,'case_lid':lid}


def make_parts(g):
    parts=[]
    def add(pid,name,kind,s,category,explode,role='module',**kw):
        parts.append({'id':pid,'name':name,'kind':kind,'shape':s,'category':category,'explode':explode,
                      'installation':{'role':role},**kw})
    add('receiver_core','R5-01 structural receiver and mounting bosses','printed',g['receiver_core'],'structure',[0,0,0],notes='One printed solid. The socket, guide, cradle supports and four M3 nut bosses share the load path.')
    add('case_shell','R5-02 protective shell','printed',g['case_shell'],'casing',[0,0,-18],notes='A removable enclosure for service. Its85.6 ×54 ×20 mm retained envelope includes the lid; the socket and wire slot remain open.')
    add('case_lid','R5-03 removable upper lid','printed',g['case_lid'],'casing',[0,0,28])
    add('keeper','R5-04 keeper with open-top yoke','printed',g['keeper'],'mechanism',[18,7,3],motion={'type':'slider'},notes='One print; the bar, fork and captive-nut boss stay together. Install the separate M2 travel-stop stud after keeper insertion. The receiver guide carries the payload load.')
    add('payload_adapter','R5-05 adapter, lug and locating keys','printed',g['payload_adapter'],'payload',[0,0,-25],role='payload',motion={'type':'payload','vector':[0,0,-32]})
    add('servo_clamp','R5-06 padded servo clamp','printed',g['servo_clamp'],'actuator',[0,0,18])
    add('servo','TowerPro MG90D / Adafruit1143 dimensional reservation','purchased',g['servo'],'actuator',[0,-14,8],notes='Supplier case envelope with provisional shaft offset. Inspect a purchased part; clamp shims and horn fitting remain measured-fit gates.')
    rot={'type':'rotation','axis':[0,1,0],'pivot':[PX,0,PZ],'angle_deg':A1-A0}
    for pid,label in [('horn','Trimmed supplied20T horn,5.5 mm follower radius'),('sleeve','Aluminum sleeve:4 mm OD ×2.1 mm ID ×6 mm long'),('follower_bolt','M2×12 follower screw'),('follower_washer','M2 follower washer'),('follower_nut','M2 follower locknut')]:
        add(pid,label,'purchased',g[pid],'actuator',[0,12,0],motion=rot)
    add('horn_screw','Supplied horn screw (envelope)','purchased',g['horn_screw'],'actuator',[0,18,0])
    for i,(x,y) in enumerate(MOUNTS,1):
        add(f'host_nut_{i}',f'Captured M3 nut {i}','purchased',nut(5.5,2.4,1.6,(x,y,13.0)),'structure',[0,6 if y>27 else -6,0])
    for i,(x,y) in enumerate(CASE_MOUNTS,1):
        add(f'lid_screw_{i}',f'M2×8 flat-head lid screw {i}','purchased',flat_screw(1,8,2,1,(x,y,20)),'casing',[0,0,36])
        add(f'lid_nut_{i}',f'Captured M2 lid nut {i}','purchased',nut(4,1.6,1.1,(x,y,13.1)),'casing',[0,5 if y<27 else -5,0])
    for i,x in enumerate((44.5,76.3),1):
        add(f'clamp_screw_{i}',f'M2×6 clamp screw {i}','purchased',flat_screw(1,6,2,1,(x,18.0,17.5)),'actuator',[0,0,27])
        add(f'clamp_nut_{i}',f'Captured M2 clamp nut {i}','purchased',nut(4,1.6,1.1,(x,18.0,12.1)),'actuator',[0,5,0])
    add('servo_lower_pad','Thin cradle shim/pad','pad',box(49,70,5,28,3.1,3.4),'actuator',[0,-4,5])
    add('servo_upper_pad','Clamp contact shim/pad','pad',box(49,70,16,20,15.6,15.9),'actuator',[0,0,12])
    add('stop_screw','Removable M2×6 keeper travel-stop screw','purchased',cap_screw(1,6,1.9,2,(54.5,40.2,8.9),(0,-1,0)),'mechanism',[0,13,0],motion={'type':'slider'},notes='Install after keeper insertion. The screw head meets the integral core travel stops. This is not an equipment lock.')
    add('stop_nut','Captured M2 keeper-stop nut','purchased',nut_y(4,1.6,1.1,(54.5,37.4,8.9)),'mechanism',[0,-8,0],motion={'type':'slider'})
    for i,(x,y) in enumerate(PADS,1):
        add(f'pad_{i}',f'Departing preloaded foam pad {i}','pad',cyl(2,1.77,(x,y,-1.44)),'pad',[0,0,-10],role='payload',motion={'type':'payload','vector':[0,0,-32]},notes='Foam bonded to the adapter:2.36 mm free thickness and1.77 mm installed, nominally25% compression. Measure actual preload force.')
        add(f'pad_adhesive_{i}',f'Pad adhesive {i}','pad',cyl(2,.06,(x,y,-1.5)),'pad',[0,0,-7],role='payload',motion={'type':'payload','vector':[0,0,-32]})
    for i,(x,y) in enumerate(ADAPTER_MOUNTS,1):
        add(f'payload_screw_{i}',f'M3×12 flat-head payload screw {i}','purchased',flat_screw(1.5,12,3.36,1.86,(x,y,-1.5)),'payload',[0,0,12],role='payload',motion={'type':'payload','vector':[0,0,-32]})
    # Short routing reservation is separate from supplied servo shape; connector
    # is plugged through the open top hatch before lid installation.
    V=cq.Vector
    edges=[cq.Edge.makeLine(V(71.1,3.7,5),V(73,3.7,5)),
      cq.Edge.makeThreePointArc(V(73,3.7,5),V(75.12132034,3.7,5.87867966),V(76,3.7,8)),
      cq.Edge.makeLine(V(76,3.7,8),V(76,3.7,13.6)),
      cq.Edge.makeThreePointArc(V(76,3.7,13.6),V(75.12132034,3.7,15.72132034),V(73,3.7,16.6)),
      cq.Edge.makeLine(V(73,3.7,16.6),V(35,3.7,16.6)),
      cq.Edge.makeThreePointArc(V(35,3.7,16.6),V(32.87867966,4.57867966,16.6),V(32,6.7,16.6)),
      cq.Edge.makeLine(V(32,6.7,16.6),V(32,7,16.6)),
      cq.Edge.makeThreePointArc(V(32,7,16.6),V(32,9.12132034,17.47867966),V(32,10,19.6)),
      cq.Edge.makeLine(V(32,10,19.6),V(32,10,20))]
    path=cq.Wire.assembleEdges(edges)
    lead=cq.Workplane('YZ',origin=(71.1,3.7,5)).ellipse(2,.8).sweep(path,isFrenet=False)
    add('lead_reservation','Continuous servo-lead routing reservation','reservation',lead,'actuator',[0,-8,0],notes='Flat4.0 ×1.6 mm ribbon allowance with3 mm centerline bends from the observed shaft-side case exit to the10 ×6 mm lid/frame slot. Measure the exact factory exit and wire size; the cradle relief remains a receiving-fit item. The flexible lead continues into the aircraft.')
    return parts


def foil_points(zoffset=26,skin=0):
    # NACA0018 illustrative section. Inner profile offset is a CAD shell proxy,
    # not an aerodynamic surface regeneration or a designed laminate.
    xs=[i/80 for i in range(81)]
    def thick(t):return 5*.18*300*(.2969*math.sqrt(t)-.1260*t-.3516*t*t+.2843*t**3-.1036*t**4)
    top=[(-100+300*t,zoffset+max(.15,thick(t)-skin)) for t in xs]
    bottom=[(-100+300*t,zoffset-max(.15,thick(t)-skin)) for t in reversed(xs)]
    return top+bottom


def wing_geometry():
    outer=xz(foil_points(),-83,137)
    inner=xz(foil_points(skin=1.6),-81.4,135.4)
    shell=outer.cut(inner)
    bottom_open=box(-.3,85.9,-.3,54.3,-30,20.1)
    hatch_open=box(-8,93.6,-8,62,30,90)
    hatch=shell.intersect(hatch_open)
    shell=shell.cut(bottom_open).cut(hatch_open)
    under=xz(foil_points(skin=1.6),-83,137).cut(xz(foil_points(skin=3.2),-83.1,137.1))
    lip_ring=box(-10,95.6,-10,64,30,90).cut(box(-3,88.6,-3,57,29,91))
    shell=shell.union(under.intersect(lip_ring)).clean()
    # A host mounting frame caps insertion atZ20. Four holes align with M3 nuts.
    frame=box(-5,90.6,-5,59,20,23.5).cut(box(17,68.6,16,38,19,25))
    for x,y in MOUNTS:frame=frame.cut(cyl(1.7,5,(x,y,19.5)))
    frame=frame.cut(box(29,39,7,13,19,25))
    # Two full-depth local ribs tied into the surrounding skin; clipped to foil.
    for y0 in (-6.8,59):
        rib=box(-20,108,y0,y0+1.8,2,57).intersect(inner)
        rib=rib.cut(box(25,55,y0-.1,y0+2,27,43))
        frame=frame.union(rib)
    # Chordwise webs connect ring to ribs; not a load-rated wing design.
    for x0 in (-5,88.8):frame=frame.union(box(x0,x0+1.8,-5,59,20,39).intersect(inner))
    frame=frame.cut(shell).clean()
    return {'wing_skin':shell,'wing_frame':frame,'wing_hatch':hatch}


def add_wing(parts,w):
    parts.extend([
      {'id':'wing_skin','name':'Illustrative NACA0018 wing skins','kind':'context','category':'wing_skin','shape':w['wing_skin'],'explode':[0,0,0],'installation':{'role':'wing'},'notes':'A300 mm chord ×220 mm span demonstration with an86.2 ×54.6 mm bottom opening. This is an installation example, not a flight-ready wing or a strength claim.'},
      {'id':'wing_frame','name':'Aircraft mounting frame and local ribs','kind':'context','category':'wing_structure','shape':w['wing_frame'],'explode':[0,0,0],'installation':{'role':'wing'},'notes':'The host frame holds the four fasteners; its underside at Z20 stops upward insertion. Connect the frame to the aircraft load paths when designing the actual wing.'},
      {'id':'wing_hatch','name':'Removable upper access panel','kind':'context','category':'hatch','shape':w['wing_hatch'],'explode':[0,0,55],'installation':{'role':'hatch','vector':[0,0,70]},'notes':'The top panel rests on an underlying lip. Its latch and skin-joint details remain aircraft integration choices.'}])
    for i,(x,y) in enumerate(MOUNTS,1):
        parts.append({'id':f'host_screw_{i}','name':f'M3×12 top installation screw {i}','kind':'purchased','category':'mounts','shape':cap_screw(1.5,12,2.75,3,(x,y,24.0)),'explode':[0,0,28],'installation':{'role':'mount_screw','vector':[0,0,50]},'notes':'Inserted from the top access panel through host frame into captive nut in module. Keep screws captive in service tool/wing as installation develops.'})
        parts.append({'id':f'host_washer_{i}','name':f'M3 host-frame washer {i}','kind':'purchased','category':'mounts','shape':washer(3,1.6,.5,(x,y,23.5)),'explode':[0,0,20],'installation':{'role':'mount_screw','vector':[0,0,50]}})


def geometry_metadata():
    return {'units':'mm','revision':'R5','retained_box_mm':{'min':[0,0,0],'max':[85.6,54,20]},
       'receiver_mounts':[[x,y,15.6] for x,y in MOUNTS],
       'receiver_mount_annulus_radii':[1.7,2.7],
       'receiver_mount_note':'Nut bears upward on captured pocket roofZ15.6; surrounds real top load-bearing boss. Full annulus lies within hex pocket.',
       'payload_mounts':[[x,y,-5.3] for x,y in ADAPTER_MOUNTS], 'payload_mount_annulus_radii':[1.7,3.0],
       'lug_x':[26,29.5],'keeper_tip_x':24.7,'keeper_bottom_z':7.4,'keeper_top_z':10.4,
       'adapter_contact_z':10.4,'receiver_floor_z':7.4,'receiver_roof_z':11.0,
       'distal_floor_x':[24.7,25.7],'proximal_floor_x':[29.8,30.8],
       'far_roof_x':[49,50],'contact_y':[37.2,40.2],
       'pad_contacts':[[x,y,.33,2] for x,y in PADS],
       'adapter_pad_contacts':[[x,y,-1.5,2] for x,y in PADS],
       'keeper_anchors':[[24.7,37.2,7.4],[24.7,40.2,7.4],[49.5,37.2,7.4]],
       'actuation':{**KIN,'pivot_x_mm':PX,'pivot_z_mm':PZ},
       'servo_mass_kg':.0134,'servo_cg_mm':[59.7,16.25,9.5],
       'nominal_pad_preload_N':2.0,'preload_sensitivity_N':[0,3],
       'slot_width_mm':4.4,'sleeve_diameter_mm':4,'keeper_vertical_float_mm':.6,
       'host_cutout_mm':[86.2,54.6],'mount_pattern_note':'Front X10/75.6,Y10; rear X10.5/75.1,Y44.8. Rear pair staggered0.5mm inward to clear casing posts while preserving keeper insertion.',
       'load_sign':'Payload extraction and gravity are−Z; lug window roof bears down on keeper top; keeper bears on receiver floor.',
       'refine_boxes':{'receiver':[{'bounds':[[22,32,3],[53,44,14]],'factor':1}],'adapter':[{'bounds':[[23,32,-2],[33,44,13]],'factor':1}],'keeper':[{'bounds':[[24,36,7],[32,40,11]],'factor':1}]},
       'keeper_axial_load_selector':{'normal_axis':0,'value':PINX+2.2,'x':PINX+2.2,'y_range':[37.2,40.2],'z_range':[10,12],'normal':[1,0,0]},
       'servo_fit_status':'Conservative sketch-based reservation. Shaft offset/horn dimensions require receiving inspection and shimming, not an exact supplier CAD fit.'}


def verify(g,parts,w):
    checks=[]
    def check(name,ok,**details):checks.append({'name':name,'passed':bool(ok),**details})
    for p in parts:
        s=shape(p['shape']);valid=s.isValid(); solids=len(s.Solids())
        check('valid:'+p['id'],valid and solids>=1,solid_count=solids,volume_mm3=s.Volume())
        if p['kind']=='printed':check('one_solid:'+p['id'],solids==1)
    # Every item retained with the module, including caps and screws, must fit.
    retained=[p for p in parts if p['installation']['role']=='module']
    for p in retained:
        b=bounds(p['shape']); check('box:'+p['id'],all(b['min'][j]>=-[1e-6,1e-6,1e-6][j] and b['max'][j]<=[85.6,54,20][j]+1e-6 for j in range(3)),bounds_mm=b)
    for a,b in [('receiver_core','case_shell'),('receiver_core','case_lid'),('payload_adapter','receiver_core'),('payload_adapter','case_shell'),('servo','receiver_core'),('servo','servo_clamp'),('servo','case_lid'),('servo_clamp','receiver_core')]:
        v=intersection(g[a],g[b]);check('assembly_clear:'+a+':'+b,v<1e-5,interference_mm3=v)
    # Whole swept solids, 5deg stations incl operating and reserved endpoints.
    angles=sorted(set([A0,A1,ARES]+list(range(15,106,5))))
    driven=['horn','sleeve','follower_bolt','follower_washer','follower_nut']
    for angle in angles:
        delta=angle-A0;u=R*(math.cos(math.radians(A0))-math.cos(math.radians(angle)))
        keeper=g['keeper'].translate((u,0,0))
        for fixed in ['receiver_core','case_shell','case_lid','servo','servo_clamp']:
            v=intersection(keeper,g[fixed]);check(f'motion:keeper:{fixed}:{angle}',v<1e-5,interference_mm3=v,stroke_mm=u)
        for pid in driven:
            moved=rotate(g[pid],delta)
            for fixed in ['receiver_core','case_shell','case_lid','servo','servo_clamp']:
                # Hub and supplied shaft intentionally mate; horn shaft overlap
                # is excluded only from this one mating pair, never the core.
                if pid=='horn' and fixed=='servo':continue
                v=intersection(moved,g[fixed]);check(f'motion:{pid}:{fixed}:{angle}',v<1e-5,interference_mm3=v)
            if pid in ('sleeve','follower_bolt','follower_washer','follower_nut'):
                v=intersection(moved,keeper);check(f'pin_fork_clear:{pid}:{angle}',v<1e-5,interference_mm3=v)
        # Vertical load must reach guide before the linkage. Test fullfloat.
        floated=keeper.translate((0,0,.6))
        for pid in ['sleeve','follower_washer','follower_nut']:
            v=intersection(rotate(g[pid],delta),floated);check(f'keeper_float:{pid}:{angle}',v<1e-5,interference_mm3=v)
        for fixed in ['case_shell','case_lid','servo_clamp']:
            v=intersection(floated,g[fixed]);check(f'float_case:{fixed}:{angle}',v<1e-5,interference_mm3=v)
    for offset in [0,2,5,10,15,20,28,35,50]:
        entering=g['keeper'].translate((offset,0,0))
        v=intersection(entering,g['receiver_core'])
        check(f'keeper_install_without_stud:{offset}',v<1e-5,interference_mm3=v)
    # All nominal solidpairs with overlapping AABBs, excluding no physicalpair.
    import itertools
    for aa,bb in itertools.combinations(parts,2):
        ba,bc=bounds(aa['shape']),bounds(bb['shape'])
        if any(min(ba['max'][j],bc['max'][j])-max(ba['min'][j],bc['min'][j])<=1e-6 for j in range(3)):continue
        v=intersection(aa['shape'],bb['shape'])
        check('assembled_pair:'+aa['id']+':'+bb['id'],v<1e-5,interference_mm3=v)
    rear_boss=g['receiver_core'].intersect(box(70.8,80,39,51,3.2,18.5))
    for offset in [12,15,20,25,30,35]:
        entering=g['keeper'].translate((offset,0,0))
        distance=shape(entering).distance(shape(rear_boss))
        shifted=shape(entering.translate((0,.3,0))).distance(shape(rear_boss))
        check(f'keeper_insert_rear_boss_gap:{offset}',distance>=.7999 and shifted>=.4999,minimum_distance_mm=distance,with_lateral_float_mm=shifted)
    for angle in angles:
        u=R*(math.cos(math.radians(A0))-math.cos(math.radians(angle)))
        for dy in [-.3,.3]:
            floating=g['keeper'].translate((u,dy,0))
            for fixed in ['receiver_core','case_lid','servo','servo_clamp','horn_screw']:
                v=intersection(floating,g[fixed]);check(f'keeper_lateral_float:{angle}:{dy}:{fixed}',v<1e-5,interference_mm3=v)
            for pid in driven:
                v=intersection(floating,rotate(g[pid],angle-A0));check(f'float_drive:{angle}:{dy}:{pid}',v<1e-5,interference_mm3=v)
    # Adapter exits downwards once the actual overlap is cleared.
    open_keeper=g['keeper'].translate((TRAVEL,0,0))
    for dz in [0,-.25,-.5,-1,-2,-4,-8,-16,-30]:
        a=g['payload_adapter'].translate((0,0,dz))
        for fixed,ss in [('core',g['receiver_core']),('shell',g['case_shell']),('keeper',open_keeper)]:
            v=intersection(a,ss);check(f'departure:{fixed}:{dz}',v<1e-5,interference_mm3=v)
    # Installation uses complete envelope, so no hardware can be silently missed.
    envelope=box(0,85.6,0,54,0,20)
    for dz in [-40,-20,-10,-2,0]:
        s=envelope.translate((0,0,dz))
        for name,ss in w.items():
            if name=='wing_hatch':continue
            v=intersection(s,ss);check(f'wing_insert:{name}:{dz}',v<1e-5,interference_mm3=v)
    for i,(x,y) in enumerate(MOUNTS,1):
        shaft=cyl(1.5,12,(x,y,24),(0,0,-1))
        for name,ss in [('frame',w['wing_frame']),('lid',g['case_lid']),('core',g['receiver_core'])]:
            v=intersection(shaft,ss);check(f'host_shaft_path:{i}:{name}',v<1e-5,interference_mm3=v)
        tool=cyl(2.1,45,(x,y,24))
        v=intersection(tool,w['wing_skin']);check(f'top_driver_access:{i}',v<1e-5,interference_mm3=v)
    for i,(x,y) in enumerate(PADS,1):
        footprint=cyl(2,.03,(x,y,-1.53))
        fraction=intersection(footprint,g['payload_adapter'])/shape(footprint).Volume()
        check(f'pad_adhesive_support:{i}',abs(fraction-1)<1e-5,supported_fraction=fraction)
        for j,(xx,yy) in enumerate(ADAPTER_MOUNTS,1):
            check(f'pad_head_clearance:{i}:{j}',math.hypot(x-xx,y-yy)>=5.5,edge_clearance_mm=math.hypot(x-xx,y-yy)-5.5)
    cable=box(32,36,8,12,18,30)
    for name,ss in [('lid',g['case_lid']),('frame',w['wing_frame'])]:
        v=intersection(cable,ss);check('harness_exit:'+name,v<1e-5,interference_mm3=v)
    check('nominal_release_gap',TRAVEL-4.8>=.5,nominal_gap_mm=TRAVEL-4.8)
    check('all_prints_present',sum(p['kind']=='printed' for p in parts)==6)
    return {'revision':'R5','status':'pass' if all(c['passed'] for c in checks) else 'fail','passed':sum(c['passed'] for c in checks),'total':len(checks),'checks':checks,
            'scope':'Nominal connected-solid, selected-interference, swept motion, load-direction, cartridge-envelope and installation checks. No strength or physical performance claim.'}


def main():
    ap=argparse.ArgumentParser();ap.add_argument('--out',type=Path,default=ROOT/'manufacturing');args=ap.parse_args();out=args.out;out.mkdir(parents=True,exist_ok=True)
    g=build_module();parts=make_parts(g);w=wing_geometry();add_wing(parts,w)
    current_ids={p['id'] for p in parts}
    for old in (out/'meshes').glob('*.json'):
        if old.stem not in current_ids:old.unlink()
    verification=verify(g,parts,w);dump(out/'clearance.json',verification)
    failed=[c for c in verification['checks'] if not c['passed']]
    print(json.dumps({'checks':verification['total'],'passed':verification['passed'],'failures':failed[:60]},indent=2),flush=True)
    assembly=cq.Assembly(name='R5_credit_card_cartridge')
    wing_assembly=cq.Assembly(name='R5_wing_installation_demo')
    print_names=['receiver_core','case_shell','case_lid','keeper','payload_adapter','servo_clamp']
    for p in parts:
        s=p.pop('shape');pid=p['id']
        meshpath=out/'meshes'/f'{pid}.json';dump(meshpath,mesh(s));p['mesh']=str(meshpath.relative_to(out))
        p['bounds_mm']=bounds(s);p['volume_mm3']=shape(s).Volume();p['solid_count']=len(shape(s).Solids())
        if p['kind']=='printed' or pid in ('wing_skin','wing_frame','wing_hatch'):
            dest=out/'parts';dest.mkdir(exist_ok=True);cq.exporters.export(shape(s),str(dest/f'{pid}.step'))
            p['step']=f'parts/{pid}.step'
            # PrintSTLs are explicitly reoriented for the print process.
            printshape=s
            if pid=='keeper':printshape=s.rotate((0,0,0),(1,0,0),90)
            if pid=='case_lid':printshape=s.rotate((0,0,0),(1,0,0),180)
            if pid=='payload_adapter':printshape=s
            b=bounds(printshape);printshape=printshape.translate((-b['min'][0],-b['min'][1],-b['min'][2]))
            cq.exporters.export(shape(printshape),str(dest/f'{pid}_print.stl'),tolerance=.06,angularTolerance=.1)
            p['print_stl']=f'parts/{pid}_print.stl'
        wing_assembly.add(shape(s),name=pid)
        if p['installation']['role'] in ('module','payload'):assembly.add(shape(s),name=pid)
    assembly.save(str(out/'assembly.step'))
    wing_assembly.save(str(out/'wing-installation.step'))
    from manufacturing import generate
    generate(out,g,geometry_metadata(),{'radius':R,'a0':A0,'a1':A1,'travel':TRAVEL,'mounts':MOUNTS})
    for p in parts:
        if p['kind']=='printed':p['drawing']='drawings/'+p['id']+'.svg'
    manifest={'revision':'R5','name':'Credit-card hardpoint cartridge','units':'mm','bounds':{'min':[0,0,-13.5],'max':[85.6,54,20]},'bounds_mm':{'min':[0,0,-13.5],'max':[85.6,54,20]},
       'retained_bounds':{'min':[0,0,0],'max':[85.6,54,20]},'wing_bounds':{'min':[-100,-83,-1],'max':[200,137,53]},
       'kinematics':KIN,'parts':parts,'drawing_index':'drawings/index.html','step':'assembly.step','wing_step':'wing-installation.step','part_count':len(parts),'print_count':6,
       'installation':{'cutout_mm':[86.2,54.6],'mount_holes_mm':[[x,y,20] for x,y in MOUNTS],'frame_stop_z_mm':20,'insert_vector':[0,0,1],'note':'Insert the box from below. Four M3×12 screws go down through the top hatch,3.5 mm frame and0.5 mm washers into captive nuts in the module.'},
       'section_y_mm':38.7,'status':'Dimensioned packaging prototype. Servo receiving fit, physical performance, printed strength and actual aircraft integration remain unqualified.',
       'sources':{'generator_sha256':sha(HERE/'build.py'),'manufacturing_writer_sha256':sha(HERE/'manufacturing.py')},'annotations':[{'partId':'case_lid','position':[40,15,20],'label':'85.6 × 54 × 20 mm cartridge'},{'partId':'keeper','position':[48,38,9],'label':'Guided keeper · 6.27 mm withdrawal'},{'partId':'servo','position':[59,18,14],'label':'MG90D · $9.95 listed actuator'},{'partId':'wing_frame','position':[75.6,44,23.5],'label':'Four top-access M3 fasteners'}]}
    dump(out/'assembly.json',manifest);dump(out/'geometry.json',geometry_metadata())
    dump(HERE/'parameters.json',{'revision':'R5','retained_envelope_mm':[85.6,54,20],'kinematics':KIN,'host_mounts_mm':MOUNTS,'case_mounts_mm':CASE_MOUNTS,'payload_mounts_mm':ADAPTER_MOUNTS,'pad_centers_mm':PADS,'source_role':'Authoritative geometry is build.py; this record is regenerated from its constants.'})
    print('EXPORTED '+str(out),flush=True)
    if failed:raise SystemExit(2)
if __name__=='__main__':main()
