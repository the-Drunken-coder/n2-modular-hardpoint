#!/usr/bin/env python3
"""R4 standalone hardpoint: deterministic nominal CAD and manufacturing exports.

All dimensions are millimetres. This generator creates three physical printed
bodies, supplied/modified hardware, fit coupons, and explicit verification data.
It does not assign a material strength or actuator performance rating.
"""
from __future__ import annotations
import argparse, csv, hashlib, json, math, shutil, sys
from pathlib import Path
import cadquery as cq

HERE=Path(__file__).resolve().parent
APPROVED_PARAMETERS_SHA256='16b615141a27343a7798269f9d95741c368d3ed0efe3c53c021ea7662b6e4dc0'
if hashlib.sha256((HERE/'parameters.json').read_bytes()).hexdigest()!=APPROVED_PARAMETERS_SHA256:
    raise ValueError('The reviewed R4 dimensional record changed. Review CAD source/geometry, update the dimensional record and its approved SHA together; this file is not a silent free-form geometry input.')
P=json.loads((HERE/'parameters.json').read_text())
START_SOURCE_DIGESTS={str(p.relative_to(HERE)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(HERE.rglob('*')) if p.is_file() and p.suffix in ('.py','.json','.step') and '__pycache__' not in p.parts}
R=7.5
THETA=math.degrees(math.acos(-.4))

def dump(path,value):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(value,indent=2,allow_nan=False)+'\n')

def sha(path): return hashlib.sha256(Path(path).read_bytes()).hexdigest()
def solid(s): return s.val() if isinstance(s,cq.Workplane) else s

def box(x0,x1,y0,y1,z0,z1):
    return cq.Workplane('XY').box(x1-x0,y1-y0,z1-z0).translate(((x0+x1)/2,(y0+y1)/2,(z0+z1)/2))

def cyl(r,h,o,d=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCylinder(r,h,cq.Vector(*o),cq.Vector(*d)))

def cone(r1,r2,h,o,d=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCone(r1,r2,h,cq.Vector(*o),cq.Vector(*d)))

def xz(points,y0,y1):
    return cq.Workplane('XZ').polyline(points).close().extrude(y1-y0).translate((0,y1,0))

def hexnut(af,h,inner,origin,axis='z'):
    x,y,z=origin
    if axis=='z': s=cq.Workplane('XY').polygon(6,af/math.cos(math.pi/6)).extrude(h).translate(origin)
    else: s=cq.Workplane('XZ').polygon(6,af/math.cos(math.pi/6)).extrude(h).translate((x,y+h,z))
    return s.cut(cyl(inner,h+.2,(x,y-.1,z),(0,1,0)) if axis=='y' else cyl(inner,h+.2,(x,y,z-.1)))

def washer(outer,inner,h,origin,axis='z'):
    d=(0,0,1) if axis=='z' else (0,1,0)
    return cyl(outer,h,origin,d).cut(cyl(inner,h,origin,d))

def cap_screw(radius,length,head_radius,head_height,origin,axis=(0,0,1)):
    # origin = head bearing face; length extends along axis; socket is represented.
    s=cyl(radius,length,origin,axis)
    start=tuple(origin[i]-axis[i]*head_height for i in range(3))
    s=s.union(cyl(head_radius,head_height,start,axis))
    socket_r=.86 if radius==1 else 1.25
    socket=cyl(socket_r,head_height*.65,start,axis)
    return s.cut(socket)

def mesh(shape):
    v,t=solid(shape).tessellate(.08,.12)
    return {'positions':[round(q,6) for p in v for q in p.toTuple()], 'indices':[q for row in t for q in row]}

def bounds(s):
    b=solid(s).BoundingBox()
    return {'min':[b.xmin,b.ymin,b.zmin],'max':[b.xmax,b.ymax,b.zmax]}

def move(s,u): return s.translate((u,0,0))
def rotate(s,a): return s.rotate((75,0,10.5),(75,1,10.5),a)
def overlap(a,b): return solid(a).intersect(solid(b)).Volume()

def build_geometry():
    # Full independent source: no P14 rail, plate or old STL is loaded.
    base=box(0,100,-26,29,-1.6,3.2).edges('|Z').fillet(1.5)
    rec=base.union(box(22.3,51,3.5,23,3.1,10.2))
    distal=box(23.4,26.5,4.8,15.2,3.1,21.7).cut(box(23.3,26.6,8.2,11.8,13.6,17.2))
    guide=box(30.6,51,4.8,15.2,3.1,21.7).cut(box(30.5,51.1,8.2,11.8,13.6,17.2))
    rec=rec.union(distal).union(guide)
    # Open socket walls and seat deck are integral material, never exploded.
    deck=box(22.3,43,0,26,19.5,21.7)
    deck=deck.union(box(22.3,43,23.6,26,3.1,19.6))
    deck=deck.union(box(22.3,24.5,15.2,26,3.1,19.6))
    deck=deck.union(box(40.8,43,14.9,26,3.1,19.6))
    rec=rec.union(deck)
    rec=rec.cut(box(26.5,30.6,5.1,14.9,3.2,28))
    relief=xz([(23.4,23.7),(27.1,19.3),(27.1,23.7)],5.1,14.9)
    relief=relief.union(xz([(30,19.3),(33.7,23.7),(30,23.7)],5.1,14.9))
    rec=rec.cut(relief)
    # Guide exit must remain open through the seat deck.
    rec=rec.cut(box(30.6,51.1,8.2,11.8,13.6,17.2))
    keys=[]
    for x0,x1 in ((23.2,26),(38.4,41.6)):
        key=box(x0,x1,18.9,20.9,21.7,25.8); keys.append(key);rec=rec.union(key)
    for x0,x1,y0,y1 in P['seat_lands']['rectangles']:
        rec=rec.union(box(x0,x1,y0,y1,21.7,23.05))
    for x,y in P['pads']['centers']:
        rec=rec.cut(cyl(2.1,4,(x,y,21.47)))
    for x,y in P['base']['mounts']:
        rec=rec.cut(cyl(1.7,8,(x,y,-2)))
    # Servo front-ear towers use the two exact central vendor holes, 28.6 apart.
    for x0,x1,xc in ((52.4,57.2,55),(81.4,86.2,83.6)):
        tower=box(x0,x1,-2.9,3.1,3.1,14.6)
        tower=tower.cut(cyl(1.1,8,(xc,-3.5,10.5),(0,1,0)))
        rec=rec.union(tower)
        # Brace toward the outer base rather than relying on a surrounding case.
        rec=rec.union(xz([(x0-4,3.1),(x0,9),(x0,3.1)],-2.9,3.1) if xc<70 else xz([(x1,3.1),(x1,9),(x1+4,3.1)],-2.9,3.1))
    # The open stop is a removable M3 screw, installed after the keeper.
    # Its low boss clears the stop tab during straight assembly insertion.
    stop_boss=box(72.5,82,17.5,25.5,3.1,12.7)
    stop_boss=stop_boss.cut(cyl(1.7,12,(77.25,21,2)))
    pocket=cq.Workplane('XY').polygon(6,5.8/math.cos(math.pi/6)).extrude(4.2).translate((77.25,21,5)).union(box(73.9,80.6,21,29.1,5,9.2))
    stop_boss=stop_boss.cut(pocket)
    rec=rec.union(stop_boss)
    rec=rec.union(box(43,78.5,18,21,3.1,6.2)).union(box(57.2,61,18,21,3.1,18.5))
    # Base ribs tie the load station, actuator towers and all local mounts together.
    rec=rec.union(box(12,52.5,-25.5,-22.5,3.1,7)).union(box(86.2,90,-25.5,-22.5,3.1,7))
    rec=rec.union(box(12,90,25.8,28.8,3.1,7))
    rec=rec.cut(cyl(1.7,12,(77.25,21,2))).cut(pocket).clean()

    a=P['adapter'];adapter=box(*a['flange_x'],*a['flange_y'],*a['flange_z'])
    lug=box(*a['lug_x'],*a['lug_y'],*a['lug_z']).cut(box(26.5,30.6,7.7,12.3,14.2,17.8))
    roots=xz([(24,23.3),(26.8,20.1),(26.8,23.3)],5.4,14.6)
    roots=roots.union(xz([(30.3,20.1),(33.1,23.3),(30.3,23.3)],5.4,14.6))
    adapter=adapter.union(lug).union(roots)
    for i,(x0,x1) in enumerate(((23.2,26),(38.4,41.6))):
        c=.3 if i==0 else .6
        adapter=adapter.cut(box(x0-c,x1+c,18.6,21.2,23.2,28))
    for x,y in a['mounts']:
        adapter=adapter.cut(cyl(1.7,5,(x,y,23.2)))
        adapter=adapter.cut(cone(3.5,1.7,1.8,(x,y,23.3)))
    adapter=adapter.clean()

    keeper=box(25.5,63,8.5,11.5,14.2,17.2)
    yoke=box(62,73,8.5,11.5,5.3,23.2).edges('|Y').fillet(.8)
    # Fixed stainless sleeve, not a rolling follower. Nominal slot clearance0.4.
    slot=box(65.3,69.7,8.4,11.6,9.5,19)
    slot=slot.union(cyl(2.2,3.2,(67.5,8.4,9.5),(0,1,0)))
    slot=slot.union(cyl(2.2,3.2,(67.5,8.4,19),(0,1,0)))
    yoke=yoke.cut(slot)
    keeper=keeper.union(yoke).union(box(61,64,11.3,22,14.2,17.2)).clean()

    vendor=cq.importers.importStep(str(HERE/'vendor/HS-65HB-vendor.step')).translate((69.3,-7.9,10.5))
    # The supplier STEP is linked by the MG product but named HB; it is a case
    # fit reference, not a claim that internal gear or wire geometry is exact.
    # Dimensioned Hitec MS-I25 profile; opposite arm trimmed at4.5 fromshaft.
    horn=box(60,75,6.4,8.2,8,13)
    horn=horn.union(cyl(4,1.8,(75,6.4,10.5),(0,1,0)))
    horn=horn.union(cyl(2.5,1.8,(60,6.4,10.5),(0,1,0)))
    # Preserve conservative envelope of stock taper from hub Ø8 to tip Ø5.
    horn=horn.union(xz([(60,8),(75,6.5),(79.5,6.5),(79.5,14.5),(75,14.5),(60,13)],6.4,8.2))
    hub=cyl(4,2.5,(75,3.9,10.5),(0,1,0))
    horn=horn.union(hub).cut(cyl(2.55,3.8,(75,3.8,10.5),(0,1,0)))
    horn=horn.cut(cyl(1.2,5,(75,3.8,10.5),(0,1,0)))
    for radius in (7.5,10,12.5,15):
        horn=horn.cut(cyl(1.05 if radius==7.5 else .5,2,(75-radius,6.3,10.5),(0,1,0)))
    horn=horn.clean()
    sleeve=washer(2,1.1,4,(67.5,8.2,10.5),'y')
    follower_bolt=cap_screw(1,10,1.9,2,(67.5,6.4,10.5),(0,1,0))
    follower_washer=washer(2.5,1.1,.3,(67.5,12.2,10.5),'y')
    follower_nut=hexnut(4,2.8,1.1,(67.5,12.5,10.5),'y')
    horn_screw=cap_screw(1.1,4.5,2,.9,(75,8.2,10.5),(0,-1,0))
    stop_screw=cap_screw(1.5,10,2.75,3,(77.25,21,13.2),(0,0,-1))
    stop_washer=washer(3,1.6,.5,(77.25,21,12.7))
    stop_nut=hexnut(5.5,4,1.6,(77.25,21,5.2))
    pads=[];adhesives=[]
    for x,y in P['pads']['centers']:
        adhesives.append(cyl(2,.06,(x,y,21.47)))
        pads.append(cyl(2,1.77,(x,y,21.53)))
    return dict(receiver_core=rec,payload_adapter=adapter,keeper=keeper,servo=vendor,horn=horn,
        sleeve=sleeve,follower_bolt=follower_bolt,follower_washer=follower_washer,
        follower_nut=follower_nut,horn_screw=horn_screw,stop_screw=stop_screw,stop_washer=stop_washer,stop_nut=stop_nut,pads=pads,adhesives=adhesives)


def make_parts(g):
    parts=[]
    def add(pid,name,kind,shape,explode,**kw):
        parts.append(dict(id=pid,name=name,kind=kind,shape=shape,explode=explode,**kw))
    add('receiver_core','R4-01 receiver core','printed',g['receiver_core'],[0,0,-12],features=['structure','seat','stroke'])
    add('payload_adapter','R4-02 payload adapter and supported lug','printed',g['payload_adapter'],[0,0,22],features=['lug','seat'],motion={'type':'payload','vector':[0,0,32]})
    add('keeper','R4-03 keeper, yoke and stroke-stop tab','printed',g['keeper'],[16,15,0],features=['stroke','lug'],motion={'type':'slider'})
    add('servo','Hitec HS-65MG case (supplier HB-envelope reference)','purchased',g['servo'],[0,-22,0],features=['actuator'],explodeGroup='servo')
    for pid,name in [('horn','Modified Hitec MS-I25 horn'),('sleeve','HiroSugi CU-2004 fixed sliding sleeve'),('follower_bolt','M2×10 follower screw'),('follower_washer','M2 follower washer'),('follower_nut','M2 follower prevailing-torque nut')]:
        # Sleeve/follower center follows the rotating horn; independent spin is
        # irrelevant because this sleeve is clamped and does not roll.
        add(pid,name,'purchased',g[pid],[0,16,0],features=['actuator','stroke'],motion={'type':'rotation','axis':[0,1,0],'pivot':[75,0,10.5],'angle_deg':THETA})
    add('horn_screw','Supplied servo horn retaining screw','purchased',g['horn_screw'],[0,25,0],features=['actuator'],notes='Use supplied Hitec screw. Model is an envelope; thread form is not reverse-engineered.')
    for pid,name,ez in [('stop_screw','Removable M3×10 open-stop screw',18),('stop_washer','Open-stop M3 small washer',12),('stop_nut','Captured M3 open-stop locknut',-8)]:
        add(pid,name,'purchased',g[pid],[0,0,ez],features=['stroke'],notes='Install after straight keeper insertion. This is a travel stop, not an equipment lock.')
    for i,xc in enumerate((55,83.6),1):
        add(f'servo_screw_{i}',f'M2×12 servo mount screw {i}','purchased',cap_screw(1,12,1.9,2,(xc,3.4,10.5),(0,-1,0)),[0,17,0])
        add(f'servo_front_washer_{i}',f'M2 front washer {i}','purchased',washer(2.5,1.1,.3,(xc,3.1,10.5),'y'),[0,13,0])
        add(f'servo_rear_washer_{i}',f'M2 ear washer {i}','purchased',washer(2.5,1.1,.3,(xc,-5.2,10.5),'y'),[0,-17,0])
        add(f'servo_nut_{i}',f'M2 servo locknut {i}','purchased',hexnut(4,2.8,1.1,(xc,-8,10.5),'y'),[0,-21,0])
    for i,(x,y) in enumerate(P['base']['mounts'],1):
        add(f'host_screw_{i}',f'M3×16 host screw {i}','purchased',cap_screw(1.5,16,2.75,3,(x,y,3.7),(0,0,-1)),[0,0,17])
        add(f'host_top_washer_{i}',f'M3 core washer {i}','purchased',washer(3,1.6,.5,(x,y,3.2)),[0,0,12])
        add(f'host_bottom_washer_{i}',f'M3 host washer {i}','purchased',washer(3,1.6,.5,(x,y,-5.1)),[0,0,-17])
        add(f'host_nut_{i}',f'M3 host locknut {i}','purchased',hexnut(5.5,4,1.6,(x,y,-9.1)),[0,0,-21])
    for i,(x,y) in enumerate(P['adapter']['mounts'],1):
        screw=cone(3.36,1.5,1.86,(x,y,23.3)).union(cyl(1.5,12.14,(x,y,25.16)))
        screw=screw.cut(cyl(.9,.8,(x,y,23.3)))
        add(f'payload_screw_{i}',f'M3×14 flat-head payload screw {i}','purchased',screw,[0,0,-13],motion={'type':'payload','vector':[0,0,32]})
        add(f'payload_washer_{i}',f'M3 payload washer {i}','purchased',washer(3,1.6,.5,(x,y,30.3)),[0,0,20],motion={'type':'payload','vector':[0,0,32]})
        add(f'payload_nut_{i}',f'M3 payload locknut {i}','purchased',hexnut(5.5,4,1.6,(x,y,30.8)),[0,0,26],motion={'type':'payload','vector':[0,0,32]})
    for i,pad in enumerate(g['pads'],1):
        add(f'pad_{i}',f'PORON preload pad {i}','pad',pad,[0,0,8],features=['seat'])
        add(f'pad_adhesive_{i}',f'467MP adhesive disc {i}','pad',g['adhesives'][i-1],[0,0,5],features=['seat'])
    # Captive lead/strain relief is installation hardware, not inferred servo data.
    lead=cyl(.9,10,(83,-18.9,10.5),(1,0,0))
    add('lead_reservation','Three-conductor servo lead routing envelope','purchased',lead,[0,-12,0],notes='External lead-clearance reservation. Strain relief belongs to the host harness; no slot is hidden beneath a flush host mount.')
    return parts


def contact_metadata():
    # Explicit selectors are verified against the generated CAD by validation.
    geometry=dict(units='mm',revision='R4',receiver_mounts=[[x,y,-1.6] for x,y in P['base']['mounts']],
      receiver_mount_annulus_radii=[1.7,3.0],payload_mounts=[[x,y,27.3] for x,y in P['adapter']['mounts']],
      payload_mount_annulus_radii=[1.7,3.0],lug_x=[26.8,30.3],adapter_floor_z=14.2,
      keeper_tip_x=25.5,keeper_bottom_z=14.2,keeper_top_z=17.2,receiver_roof_z=17.2,
      receiver_floor_z=13.6,distal_roof_x=[25.5,26.5],proximal_roof_x=[30.6,31.6],
      far_floor_x=[49,50],contact_y=[8.5,11.5],
      pad_contacts=[[x,y,21.47,2] for x,y in P['pads']['centers']],
      adapter_pad_contacts=[[x,y,23.3,2] for x,y in P['pads']['centers']],
      keeper_anchors=[[25.5,8.5,14.2],[25.5,11.5,14.2],[50,8.5,14.2]],
      servo_mass_kg=.0125,servo_cg_mm=[69.3,-8,10.5],servo_mount_centers=P['actuator']['mount_centers'],
      servo_load_selectors=[{'kind':'plane','axis':'y','value':-2.9,'normal':[0,-1,0],
        'ranges':{'x':[x-2.2,x+2.2],'z':[8.3,12.7]},'exclude_circle':{'center':[x,-2.9,10.5],'radius':1.1}}
          for x in (55,83.6)],
      actuation={'crank_radius_mm':7.5,'pivot_x_mm':75,'pivot_z_mm':10.5,'max_angle_deg':THETA,
        'travel_mm':10.5,'operating_travel_mm':9.5,'operating_angle_deg':math.degrees(math.acos(1-9.5/7.5)),'pin_y_mm':10.2,'follower':'fixed sliding SUS303 sleeve','sleeve_diameter_mm':4,
        'slot_width_mm':4.4,'horn_retained_angle_deg':0,'slot_straight_z_mm':[9.5,19],
        'receiver_stop_positions_mm':[0,10.5],'open_stop':{'type':'removable M3 screw head','center_mm':[77.25,21,13.2],'head_radius_mm':2.75,'installed_after_keeper':True}},
      keeper_axial_load_selector={'kind':'plane','axis':'x','value':69.7,'ranges':{'y':[8.5,11.5],'z':[16,18]},'normal':[1,0,0]},
      keeper_axial_fixture_selector={'kind':'plane','axis':'x','value':25.5,'ranges':{'y':[8.5,11.5],'z':[14.2,17.2]},'normal':[-1,0,0]},
      seat_land_receiver_selector={'kind':'plane','axis':'z','value':23.05,'ranges':{'x':[30.5,34.5],'y':[22,25]},'normal':[0,0,1]},
      seat_land_adapter_selector={'kind':'plane','axis':'z','value':23.3,'ranges':{'x':[30.5,34.5],'y':[22,25]},'normal':[0,0,-1]},
      seat_land_centroid_mm=[32.5,23.5,23.05],seat_land_gap_mm=.25,
      key_receiver_selector={'kind':'plane','axis':'y','value':20.9,'ranges':{'x':[23.2,26],'z':[23.3,25.8]},'normal':[0,1,0]},
      key_adapter_selector={'kind':'plane','axis':'y','value':21.2,'ranges':{'x':[23.2,26],'z':[23.3,25.8]},'normal':[0,-1,0]},
      key_normal_gap_mm=.3,
      refine_boxes={'receiver':[{'bounds':[[22,52],[4,16],[13,22]],'factor':.6}],
        'adapter':[{'bounds':[[24,34],[5,15],[11,24]],'factor':.6}],
        'keeper':[{'bounds':[[25,52],[8,12],[14,18]],'factor':.6},{'bounds':[[62,73],[8,12],[8,22]],'factor':.7}]},
      reference_pose={'state':'Retained with keeper taken up against guide roof by preload and positive payload load','keeper_top_z_mm':17.2,'guide_roof_z_mm':17.2,'unloaded_keeper_float_mm':0.6,'slot_lower_end_center_z_mm':9.5,'slot_upper_end_center_z_mm':19,'nominal_foam_thickness_mm':1.77,'nominal_foam_compression_percent':25},
      model_limitations=['Material and friction need physical characterization.','Seat-land and key-face reactions represent post-clearance contact, not nonlinear take-up.',
        'Only named discrete host interfaces support the core.','Servo manufacturer STEP is a case-fit reference; vendor horn outline and supplied screw/lead are envelope models.'])
    return geometry


def verify_geometry(g,parts):
    rows=[]
    def check(label,a,b,limit=1e-5):
        v=overlap(a,b);rows.append({'id':label,'passed':v<limit,'overlap_mm3':v,'limit_mm3':limit})
    for k in ('receiver_core','payload_adapter','keeper'):
        s=solid(g[k]);assert s.isValid() and len(s.Solids())==1,(k,s.isValid(),len(s.Solids()))
    angles=sorted(set([0,5,15,30,45,60,75,90,105,THETA]+[math.degrees(math.acos(1-u/R)) for u in (1,4.5,4.8,5.2)]))
    moving=('horn','sleeve','follower_bolt','follower_washer','follower_nut')
    for angle in angles:
        u=R*(1-math.cos(math.radians(angle)))
        keep=move(g['keeper'],u)
        check(f'keeper_receiver_at_{angle:.3f}deg',keep,g['receiver_core'])
        check(f'keeper_adapter_at_{angle:.3f}deg',keep,g['payload_adapter'])
        check(f'keeper_servo_at_{angle:.3f}deg',keep,g['servo'])
        for key in moving:
            s=rotate(g[key],angle)
            check(f'{key}_receiver_at_{angle:.3f}deg',s,g['receiver_core'])
            check(f'{key}_servo_at_{angle:.3f}deg',s,g['servo'])
            check(f'{key}_keeper_at_{angle:.3f}deg',s,keep)
        check(f'horn_payload_at_{angle:.3f}deg',rotate(g['horn'],angle),g['payload_adapter'])
    # The drawn retained pose is already taken up on the guide roof. The
    # expanded slot must not route vertical retention through the servo even
    # when the unloaded keeper settles through the full0.6mm guide clearance.
    for angle in angles:
        u=R*(1-math.cos(math.radians(angle)))
        for dz in (-.6,0):
            floated=move(g['keeper'],u).translate((0,0,dz))
            check(f'keeper_float_receiver_{angle:.3f}_{dz}',floated,g['receiver_core'])
            check(f'keeper_float_sleeve_{angle:.3f}_{dz}',floated,rotate(g['sleeve'],angle))
            check(f'keeper_float_stop_screw_{angle:.3f}_{dz}',floated,g['stop_screw'])
            check(f'keeper_float_stop_washer_{angle:.3f}_{dz}',floated,g['stop_washer'])
    for lift in (0,.2,.5,1,3,6,12,32):
        a=g['payload_adapter'].translate((0,0,lift))
        check(f'payload_departure_receiver_{lift}',a,g['receiver_core'])
        check(f'payload_departure_keeper_{lift}',a,move(g['keeper'],10.5))
        check(f'payload_departure_servo_{lift}',a,g['servo'])
    # Actual hardware against physical prints; listed screw/thread fits are
    # represented by clearance cylinders, not silently ignored collisions.
    for p in parts:
        if p['kind']=='printed':continue
        for key in ('receiver_core','payload_adapter','keeper'):
            check(f'{p["id"]}_vs_{key}',p['shape'],g[key])
    for x,y in P['base']['mounts']:
        check(f'host_M3_driver_{x}_{y}',cyl(2.8,35,(x,y,6.7)),g['receiver_core'])
    for x,y in P['adapter']['mounts']:
        check(f'payload_M3_driver_{x}_{y}',cyl(1.5,20,(x,y,35.3)),g['receiver_core'])
    for x in (55,83.6):
        check(f'servo_M2_driver_{x}',cyl(1.2,25,(x,5.4,10.5),(0,1,0)),g['receiver_core'])
    # Actual assembly order: bench-assemble keeper/horn/follower, insert that
    # group along-X, then slide the servo from-Y onto the held horn spline.
    for u in (0,.5,1,3,6,10.5,15,22,30,45,60,80):
        for key in ('keeper','horn','sleeve','follower_bolt','follower_washer','follower_nut'):
            check(f'assembly_insert_{key}_{u}',move(g[key],u),g['receiver_core'])
    for shift in (0,.5,1,3,6,10,20,35,55):
        servo=g['servo'].translate((0,-shift,0))
        check(f'assembly_servo_from_rear_{shift}',servo,g['receiver_core'])
        check(f'assembly_servo_horn_engagement_{shift}',servo,g['horn'])
    for u in (0,3,6,9.5,10.5):
        check(f'keeper_stop_screw_at_{u}',move(g['keeper'],u),g['stop_screw'])
        check(f'keeper_stop_washer_at_{u}',move(g['keeper'],u),g['stop_washer'])
    check('open_stop_driver',cyl(2.8,25,(77.25,21,16.2)),g['receiver_core'])
    return {'revision':'R4','checks':rows,'all_passed':all(r['passed'] for r in rows),
        'sampled_angles_deg':angles,'scope':'Nominal rigid discrete poses and listed tool paths. Not continuous collision, compliance or tolerance validation.',
        'tool_access_basis':'M2 ear screws use a 1.5 mm AF L-hex key inside a Ø2.4 mm cylindrical shaft envelope. Payload screws are installed with adapter removed.',
        'intentional_contacts':['Keeper stop tab touches a fixed closed stop at0mm and removable M3 head at10.5mm.',
          'Preload foam touches adapter underside; adhesive touches pocket floor.',
          'Screw heads/washers bear on matching parts. Screw thread engagement is simplified.',
          'Straight keeper/horn assembly insertion requires the open-stop screw and servo body to be removed.',
          'Servo spline is represented by vendor shaft and a clearance envelope in the purchased matching Micro25T horn; real teeth are not reverse-engineered.']}


def export(out):
    if out.exists() and any(out.iterdir()):
        raise ValueError('Output directory must be new or empty; stale artifacts cannot form a new R4 package.')
    out.mkdir(parents=True,exist_ok=True)
    g=build_geometry();parts=make_parts(g);prints=[];exported=[]
    (out/'parts').mkdir(exist_ok=True);(out/'meshes').mkdir(exist_ok=True)
    assembly=cq.Assembly(name='N2_R4')
    for p in parts:
        pid=p['id'];s=solid(p['shape'])
        if not s.isValid():raise ValueError(f'Invalid {pid}')
        step=out/'parts'/f'{pid}.step';cq.exporters.export(s,str(step))
        dump(out/'meshes'/f'{pid}.json',mesh(s))
        entry={k:v for k,v in p.items() if k!='shape'}
        entry.update(step=f'parts/{pid}.step',mesh=f'meshes/{pid}.json',bounds=bounds(s),volume_mm3=s.Volume())
        if p['kind']=='printed':
            pr=s
            orientation={'receiver_core':[0,0,1],'payload_adapter':[0,0,-1],'keeper':[0,1,0]}[pid]
            if pid=='payload_adapter':pr=pr.rotate((0,0,0),(1,0,0),180)
            elif pid=='keeper':pr=pr.rotate((0,0,0),(1,0,0),90)
            b=pr.BoundingBox();pr=pr.translate((-b.xmin,-b.ymin,-b.zmin))
            stl=out/'parts'/f'{pid}_print.stl';cq.exporters.export(pr,str(stl),tolerance=.08,angularTolerance=.12)
            entry['print_stl']=f'parts/{pid}_print.stl'
            prints.append(dict(id=pid,step=entry['step'],stl=entry['print_stl'],valid=True,
                solid_count=len(s.Solids()),volume_mm3=s.Volume(),step_sha256=sha(step),stl_sha256=sha(stl),
                print_up=orientation,print_bounds=bounds(pr)))
        exported.append(entry)
        color={'printed':(.93,.48,.18),'purchased':(.55,.62,.67),'pad':(.28,.57,.66)}[p['kind']]
        assembly.add(s,name=pid,color=cq.Color(*color))
    assembly.save(str(out/'assembly.step'))
    bb={'min':[min(e['bounds']['min'][i] for e in exported) for i in range(3)],'max':[max(e['bounds']['max'][i] for e in exported) for i in range(3)]}
    scene={'id':'r4','title':'R4 standalone direct-drive hardpoint','revision':'R4','units':'mm','parts':exported,'bounds':bb,
      'kinematics':{'axis':[0,1,0],'pivot':[75,0,10.5],'crank_radius_mm':7.5,'angle_range_deg':[0,THETA],
        'travel_mm':10.5,'operating_travel_mm':9.5,'operating_angle_deg':math.degrees(math.acos(1-9.5/7.5)),'slider_expression':'r*(1-cos(theta))','pin_expression':'[75-r*cos(theta),10.2,10.5+r*sin(theta)]',
        'release_clearance_at_mm':4.8,'follower':'fixed sliding sleeve; no rolling-bearing assumption'},
      'dimensions':{'base_mm':[100,55,4.8],'lug_thickness_mm':3.5,'lug_side_web_mm':2.3,'guide_reaction_span_mm':18.4,'key_lateral_clearance_per_side_mm':.3},
      'annotations':[{'label':'Four actual core mount interfaces','position':[6,23,3.2],'partId':'receiver_core'},
        {'label':'Integral long keeper guide','position':[45,12,21.7],'partId':'receiver_core'},
        {'label':'Supported 3.5 mm lug / 2.3 mm side webs','position':[28.5,14.6,18],'partId':'payload_adapter'},
        {'label':'One printed keeper and yoke','position':[68,11.5,20],'partId':'keeper'},
        {'label':'Hitec HS-65MG, fixed5V prototype','position':[69,-12,14],'partId':'servo'},
        {'label':'Catalog fixed sleeve; sliding friction included','position':[67.5,10.2,10.5],'partId':'sleeve'}],
      'notes':['The retained reference already bears on the guide roof; pad compression is not calculated before taking up guide clearance.',
        'Exactly3 structural printed bodies; integral features never explode separately.',
        'Host and payload bolts show3mm test-panel grip; aircraft/payload panels are integration context and are not included as hardpoint parts.',
        'Assembly order: preassemble keeper/horn/follower; insert from +X with stop absent; install servo from −Y; install open-stop screw.',
        'This is a dimensioned prototype, not a flight-qualified payload rating.']}
    dump(out/'assembly.json',scene);dump(out/'geometry.json',contact_metadata())
    checks=verify_geometry(g,parts);dump(out/'clearance.json',checks)
    manifest={'revision':'R4','units':'mm','printed_parts':prints,'assembly_step':'assembly.step','assembly_json':'assembly.json',
        'parameters_sha256':sha(HERE/'parameters.json'),'generator_sha256':sha(Path(__file__)),
        'vendor_step_sha256':sha(HERE/'vendor/HS-65HB-vendor.step'),'clearance':'clearance.json','geometry':'geometry.json',
        'physical_qualification':False,'strength_rating_established':False}
    from manufacturing import generate
    generate(out,g,P,box,cyl,sha)
    manifest['manufacturing_generator_sha256']=sha(HERE/'manufacturing.py')
    manifest['generator_sources']={str(path.relative_to(HERE)):sha(path) for path in sorted(HERE.rglob('*')) if path.is_file() and path.suffix in ('.py','.json','.step') and '__pycache__' not in path.parts}
    if manifest['generator_sources'] != START_SOURCE_DIGESTS:
        raise ValueError('CAD source changed during generation. Discard this output and regenerate from one frozen source snapshot.')
    manifest['artifacts']={str(path.relative_to(out)):sha(path) for path in sorted(out.rglob('*')) if path.is_file() and path.name!='manifest.json'}
    dump(out/'manifest.json',manifest)
    print(json.dumps({'output':str(out),'printed_parts':len(prints),'parts':len(parts),'checks':len(checks['checks']),
                      'passed':checks['all_passed'],'failures':[x for x in checks['checks'] if not x['passed']]}),flush=True)
    return checks['all_passed']

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--output',type=Path,required=True);args=parser.parse_args()
    if not export(args.output):sys.exit(2)
