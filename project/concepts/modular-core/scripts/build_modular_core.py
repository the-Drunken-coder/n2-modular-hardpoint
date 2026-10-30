"""Standalone, physically grouped N2 prototype core for simulation and inspection.

The Adafruit 3992 reservation is a bench-fit candidate. Its body dimensions are
supplier based; clevis slot, shaft pose, magnetic axis and fastener engagement
need sample measurement. No actuator force or print qualification is implied.
"""
from __future__ import annotations
import hashlib
import math
from pathlib import Path
import cadquery as cq
from cad_api import OUT, box, cylinder, solid, export_scene, save_json
from build_selected_concept import build_parts as selected_parts
from build_release_options import overlap, focused_checks

SHIFT=7.0
ACT_AXIS=(0,10,15.2)
STROKE=10.0
PARTS_OUT=OUT/'modular-core-parts'


def cone(r1,r2,h,origin):
    return cq.Workplane(obj=cq.Solid.makeCone(r1,r2,h,cq.Vector(*origin)))


def printed(pid,name,shape,features,explode,**kw):
    return dict(id=pid,name=name,shape=shape,role='changed',features=features,
                explode=explode,manufacturing='printed',**kw)


def hardware(pid,name,shape,explode,**kw):
    return dict(id=pid,name=name,shape=shape,role=kw.pop('role','context'),explode=explode,
                manufacturing='purchased',**kw)


def build_parts():
    previous,g=selected_parts()
    # Retain the load station, not the peripheral rails or obsolete actuator bay.
    retention=g['base'].intersect(box(22.3,44,3.5,24,3.19,30)).union(g['seat'])
    for key in g['keys']:retention=retention.union(key)
    retention=retention.translate((0,0,SHIFT))
    base=box(0,93,-20,24,0,3.2).edges('|Z').fillet(1)
    base=base.union(box(22.3,43,3.5,23,0,10.2))
    receiver=base.union(retention)
    # A shallow open pocket puts the candidate actuator axis at Z15.2. This
    # aligns its clevis slot to a flat-bottom, 2 mm-thick keeper tongue.
    receiver=receiver.cut(box(63.6,91.4,-1.4,21.4,2.7,3.3))
    for stop in (box(62.7,63.6,-1.4,21.4,3.1,6.2),
                 box(91.4,92.7,-1.4,21.4,3.1,6.2)):
        receiver=receiver.union(stop)
    # Local bed ribs return the actuator load to the socket plinth. They belong
    # to this printed core and do not assume an external carrier rail/support.
    receiver=receiver.union(box(38,43,-4,3.6,3.1,10.2))
    for y0,y1 in ((-4,-1.4),(21.4,24)):
        receiver=receiver.union(box(40,93,y0,y1,3.1,8))
    # Two existing host interfaces remain the only assumed structural supports.
    for x,y in ((5,14),(35,-10)):
        receiver=receiver.cut(cylinder(1.6,20,(x,y,-1)))
    # Candidate actuator mounts, based on the 26 mm drawing's diagonal pattern.
    for x,y in ((84,16),(69,4)):
        receiver=receiver.cut(cylinder(1.7,8,(x,y,-1)))
        receiver=receiver.cut(cone(3.05,1.7,1.5,(x,y,0)))
    receiver=receiver.clean()

    adapter=g['payload'].translate((0,0,SHIFT)).clean()
    # Straight axial extension removes the old 16 mm transverse pull offset.
    # A 2 mm tongue preserves the conservative provisional 2.4 mm clevis slot;
    # its centre remains 0.5 mm below the 3 mm bar's neutral plane.
    keeper=box(25.5,44,8.5,11.5,14.2,17.2)
    tongue=box(43.5,51,7.1,12.9,14.2,16.2)
    keeper=keeper.union(tongue).cut(cylinder(1.6,6,(48,10,12.5)))
    keeper=keeper.clean()

    # The vendor's 26 mm dimension and 27 mm prose dimension disagree by 1 mm;
    # reserve 27 mm. Internal walls/coil and shaft details are illustrative.
    frame=box(64,91,-1,21,2.7,27.7)
    frame=frame.cut(box(65,90,0,20,3.7,26.7))
    frame=frame.cut(cylinder(3.7,28,(63.5,10,15.2),(1,0,0)))
    for x,y in ((84,16),(69,4)):
        frame=frame.cut(cylinder(1.7,4,(x,y,2.5)))
    coil=cylinder(9.7,23,(65.5,10,15.2),(1,0,0)).cut(cylinder(3.7,24,(65,10,15.2),(1,0,0)))
    body=cq.Compound.makeCompound([solid(frame),solid(coil)])
    # The shown drawing pose is not a certified endpoint. The translation below
    # is an explicit 10 mm kinematic reservation to inspect a provisional joint.
    armature=cylinder(3.5,47.4,(52,10,15.2),(1,0,0))
    clevis=cylinder(4,8,(44,10,15.2),(1,0,0))
    clevis=clevis.cut(box(43.8,51.1,5.9,14.1,14,16.4))
    clevis=clevis.cut(cylinder(1.6,9,(48,10,10.7)))
    armature=armature.union(clevis).clean()
    # M3 x12 socket screw and M3 nut illustrate a captured driving joint.
    joint_bolt=cylinder(1.5,12,(48,10,7.5)).union(cylinder(2.75,3,(48,10,19.5)))
    joint_nut=cq.Workplane('XY',origin=(48,10,8.8)).polygon(6,5.5/math.cos(math.pi/6)).extrude(2.4)
    joint_nut=joint_nut.cut(cylinder(1.65,2.8,(48,10,8.6)))
    # Illustrative lead stubs exit above the new local bed rib; actual wire
    # exit positions and strain relief remain part of sample fit verification.
    lead_a=cylinder(.65,7,(87,-1,10),(0,-1,0))
    lead_b=cylinder(.65,7,(89,-1,10),(0,-1,0))
    leads=cq.Compound.makeCompound([solid(lead_a),solid(lead_b)])
    motion={'vector':[STROKE,0,0],'start':0,'end':.55}
    parts=[
      printed('receiver_core','One-piece printed receiver core',receiver,['receiver','seat'],[0,0,-9]),
      printed('payload_adapter','One-piece printed keyed payload adapter and lug',adapter,['seat','lug'],[0,0,18],motion={'vector':[0,0,25],'start':.6,'end':1}),
      printed('keeper','One-piece printed keeper and clevis tongue',keeper,['lug','stroke'],[14,-12,0],motion=motion),
      hardware('actuator_body','Adafruit 3992 body reservation — bench-fit candidate',body,[0,0,23],features=['stroke'],role='companion',explodeGroup='actuator'),
      hardware('actuator_armature','3992 armature/clevis reservation — measure sample',armature,[0,0,23],features=['stroke'],role='companion',explodeGroup='actuator',motion=motion),
      hardware('actuator_leads','Candidate actuator lead stubs',leads,[0,0,23],explodeGroup='actuator'),
      hardware('coupling_screw','Provisional M3 x12 coupling screw',joint_bolt,[0,0,14],motion=motion),
      hardware('coupling_nut','Provisional M3 coupling nut',joint_nut,[0,0,-8],motion=motion),
    ]
    for i,(x,y) in enumerate(((84,16),(69,4)),1):
        bolt=cone(2.8,1.5,1.5,(x,y,0)).union(cylinder(1.5,4.5,(x,y,1.5)))
        parts.append(hardware(f'actuator_mount_screw_{i}',f'Provisional M3 x6 countersunk actuator screw {i}',bolt,[0,0,-10]))
    pads=[]
    for i,pad in enumerate(g['pads'],1):
        p=pad.translate((0,0,SHIFT));pads.append(p)
        parts.append(dict(id=f'preload_pad_{i}',name=f'Separate compliant preload pad {i}',shape=p,
                          role='added',features=['seat'],explode=[0,0,7],manufacturing='compliant insert'))
    return parts,dict(receiver=receiver,adapter=adapter,keeper=keeper,body=body,armature=armature,
        joint_bolt=joint_bolt,joint_nut=joint_nut,pads=pads,base=base,leads=leads)


def export_print_parts(g):
    PARTS_OUT.mkdir(parents=True,exist_ok=True)
    items=[]
    for pid,name,shape,orientation,notes in (
        ('receiver_core','Receiver core',g['receiver'],'Flat mounting face Z0 to the bed',[
          'One fused print; no peripheral carrier rails are needed for its load path.',
          'Guide roofs include short bridges. Larger seating-deck underside patches need removable support; this is not a support-free receiver.',
          'Plan removable support under the deck near (33.6, 7.1, 19.5) mm and the guide exit near (41.9, 8.2, 17.5) mm; check removal through the open front (−Y) and keeper exit (+X).',
          'The actuator pocket is an open 0.5 mm recess. Countersinks and top-open locating stops are accessible.',
          'Two integral 2.6 mm-wide bed ribs and a plinth web connect the actuator bed back to the socket; these print vertically from the base.',
          'Use solid-equivalent settings for the structural screen; inspect all load-bearing walls and bridge roofs.']),
        ('payload_adapter','Payload adapter',g['adapter'],'Invert: broad payload mounting face to the bed',[
          'The flange, locating slots, lug and root shoulders form one print.',
          'The lug cross-hole has an approximately 4.6 mm bridge span in this orientation; inspect the bridge and side walls.',
          'The retaining floor is 3.1 mm thick, the lug is 3.5 mm thick in X, and its two bore side webs are 1.3 mm thick.',
          'The root shoulders narrow away from the bed. The pad-contact face is not the build-plate datum.']),
        ('keeper','Keeper',g['keeper'],'Flat keeper/tongue underside to the bed',[
          'The axial bar and coupling tongue form one print with a coplanar underside.',
          'The 2 mm tongue and M3 hole require dimensional inspection; clear the hole without thinning its side webs.',
          'Nominal tongue side webs are 1.3 mm around the 3.2 mm hole. The loaded bar remains 3 × 3 mm.',
          'The clevis acts on the keeper centreline in Y. A 0.5 mm vertical offset remains because the tongue is thinner than the 3 mm bar.',
          'Keep bearing faces free from support scars and remove any brim before assembly.'])):
        s=solid(shape);assert s.isValid() and len(s.Solids())==1,(pid,s.isValid(),len(s.Solids()))
        step=PARTS_OUT/f'{pid}.step';cq.exporters.export(s,str(step))
        if pid=='payload_adapter':
            print_shape=s.rotate((0,0,0),(1,0,0),180)
        else:print_shape=s
        bb=print_shape.BoundingBox();print_shape=print_shape.translate((-bb.xmin,-bb.ymin,-bb.zmin))
        stl=PARTS_OUT/f'{pid}_print.stl';cq.exporters.export(print_shape,str(stl),tolerance=.08,angularTolerance=.16)
        items.append(dict(id=pid,name=name,step=f'modular-core-parts/{step.name}',stl=f'modular-core-parts/{stl.name}',
            orientation=orientation,notes=notes,solidCount=1,volume_mm3=s.Volume(),
            overhangReport=f'modular-core-parts/{pid}_overhang.json',
            stepSha256=hashlib.sha256(step.read_bytes()).hexdigest(),
            printBounds_mm=[print_shape.BoundingBox().xlen,print_shape.BoundingBox().ylen,print_shape.BoundingBox().zlen]))
    coords=dict(units='mm',z_shift_mm=SHIFT,stroke_mm=STROKE,
      host_mount_centers_mm=[[5,14],[35,-10]],host_mount_top_z_mm=3.2,host_mount_bottom_z_mm=0,
      host_hole_radius_mm=1.6,host_support='Only the two mounting washer/contact patches; no external carrier or full-face bond',
      payload_mount_centers_mm=[[35.1,8],[35.1,14]],payload_mount_plane_z_mm=26.3,
      lug_x_mm=[26.8,30.3],lug_floor_z_mm=14.2,keeper_tip_x_mm=25.5,keeper_bottom_z_mm=14.2,
      keeper_top_z_mm=17.2,receiver_roof_z_mm=17.5,receiver_floor_z_mm=13.9,
      distal_x_mm=[25.5,26.5],proximal_x_mm=[30.6,31.6],far_floor_x_mm=[35.1,36.1],contact_y_mm=[8.5,11.5],
      actuator_mount_centers_mm=[[84,16],[69,4]],actuator_mount_plane_z_mm=2.7,
      actuator_mass_kg=.068,actuator_cg_mm=[77.5,10,15.2],actuator_cg_status='Body-envelope center approximation',
      actuator_axis_mm=[0,10,15.2],coupling_pin_retained_mm=[48,10,15.2],
      pull_y_eccentricity_mm=0,pull_z_eccentricity_mm=-.5,
      actuator_bed_ribs_mm={'x':[40,93],'y':[[-4,-1.4],[21.4,24]],'z':[3.1,8]},
      actuator_geometry_status='Provisional drawing-based reservation; sample verification required')
    save_json(OUT/'modular-core-simulation-geometry.json',coords)
    save_json(OUT/'modular-core-printability.json',dict(status='Geometric preparation only; not slicer or print qualification',printedParts=items,
        structuralMaterial='Planned PAHT-CF prototype; no measured anisotropic allowables',
        materialSplit='Receiver, adapter and keeper are structural prints; four compliant pads are separate material inserts.',
        orientationBasis='Suggested orientations simplify manufacture. They are not proven strength-optimal; Z-directed receiver/adapter loads still require layer-adhesion and anisotropic material data.',
        overhangAudit={'method':'Advisory STEP face screening at 45 degrees, with short-bridge and small-hole heuristics; no sliced toolpaths or actual extrusion is simulated.',
            'generation':'Run the existing tools/overhang.py for receiver_core +Z, payload_adapter −Z and keeper +Z after CAD export. CI regenerates these reports against the current STEP files.',
            'reports':[i['overhangReport'] for i in items]},
        minimumFeatureReview={'scope':'Named critical dimensions from the nominal design; not a global minimum-wall search.',
            'adapter_floor_mm':3.1,'lug_thickness_x_mm':3.5,'lug_bore_side_web_mm':1.3,
            'keeper_bar_mm':[3,3],'keeper_tongue_mm':2,'keeper_pin_side_web_mm':1.3,
            'actuator_bed_below_countersink_mm':1.2,'actuator_bed_rib_width_mm':2.6},
        noSupportFreeClaim=True))
    print({'physical_print_parts_exported':len(items),'paths':[i['step'] for i in items]},flush=True)
    return items


def build_and_export():
    parts,g=build_parts();items=export_print_parts(g)
    checks=[]
    for u in (0,.5,1,2,3,4,4.8,6,8,10):
        for name,shape in [('keeper',g['keeper']),('armature',g['armature']),('coupling screw',g['joint_bolt']),('coupling nut',g['joint_nut'])]:
            checks.append((f'{name} clears receiver at {u} mm travel',overlap(g['receiver'],shape.translate((u,0,0))),False))
        checks.append((f'Keeper fits payload at {u} mm travel',overlap(g['adapter'],g['keeper'].translate((u,0,0))),False))
        checks.append((f'Armature clears actuator body at {u} mm travel',overlap(g['body'],g['armature'].translate((u,0,0))),False))
    for lift in (0,.2,1,3,6,12,25):
        checks.append((f'Payload clears receiver at {lift} mm departure',overlap(g['receiver'],g['adapter'].translate((0,0,lift))),False))
        checks.append((f'Payload clears fully withdrawn keeper at {lift} mm departure',overlap(g['keeper'].translate((STROKE,0,0)),g['adapter'].translate((0,0,lift))),False))
    checks += [('Candidate body clears receiver seat',overlap(g['receiver'],g['body']),False),
               ('Candidate lead stubs clear receiver and bed ribs',overlap(g['receiver'],g['leads']),False),
               ('Clevis clears keeper tongue',overlap(g['keeper'],g['armature']),False),
               ('Coupling screw clears tongue and clevis',overlap(g['joint_bolt'],g['keeper'].union(g['armature'])),False),
               ('Coupling nut clears tongue and clevis',overlap(g['joint_nut'],g['keeper'].union(g['armature'])),False)]
    for i,pad in enumerate(g['pads'],1):checks.append((f'Pad {i} contacts without penetrating adapter',overlap(pad,g['adapter']),False))
    for x,y in ((5,14),(35,-10)):
        # Installation occurs before the moving keeper/coupling are fitted.
        checks.append((f'Host mount tool axis ({x},{y}) clears receiver',overlap(g['receiver'],cylinder(2.8,30,(x,y,3.2))),False))
    records=focused_checks('modular-core',checks)
    conn={f'{k}_joined_solid_count':len(solid(g[k]).Solids()) for k in ('receiver','adapter','keeper')}
    conn.update({f'{k}_valid':solid(g[k]).isValid() for k in ('receiver','adapter','keeper')})
    assert all(conn[f'{k}_joined_solid_count']==1 and conn[f'{k}_valid'] for k in ('receiver','adapter','keeper'))
    save_json(OUT/'modular-core-connectivity.json',conn)
    export_scene('modular-core','Standalone printable hardpoint core',parts,
      eyebrow='Modular core / Simulation revision',
      summary='A standalone load-bearing core with three real printed bodies and a provisional 5 V long-stroke actuator reservation.',
      primaryChange='Physical print grouping, self-contained load path and actual actuator packaging study',
      purpose='Inspect and simulate an individual hardpoint that can be mounted in, or incorporated into, a later aircraft module.',
      companionChanges=['The receiver, socket cheeks and locating shoulders are fused into one printed receiver body; no external rails are used as structural supports.',
        'The adapter flange, root shoulders and retaining lug are fused into one printed payload adapter.',
        'The larger candidate actuator sits on the +X side and pulls a straight axial keeper through a provisional cross-pin joint. The 16 mm transverse pull offset is removed; the load station is raised 7 mm.',
        'Integral low ribs connect the actuator bed back to the load-station plinth; no surrounding module is required to carry the candidate actuator.',
        'The actuator mounts directly to the core. Its body and captive armature explode together as one purchased subassembly.'],
      limits=['The Adafruit 3992 is a bench-fit candidate, not an actuator qualified for release at 2 g.',
        'Body reservation uses 27 × 22 × 25 mm; the supplier drawing gives 26 mm length. Axis height, clevis slot, shaft endpoint, pin fit and fastener engagement require sample measurement.',
        'The modeled 10 mm motion is a provisional kinematic reservation. The supplier drawing pose is not identified as a certified stroke endpoint.',
        'The clevis slot remains an unmeasured 2.4 mm reservation around a 2 mm printed tongue. A 0.5 mm vertical pull offset remains and must be included in release testing.',
        'Distal keeper support ends after 1.0 mm, while the lug clears after 4.8 mm. Structural and friction behavior throughout that partial withdrawal remain a separate analysis issue.',
        'Pad free thickness, preload, compliance and retention are not selected. Pads are separate inserts and do not establish a rigid seating datum.',
        'Print files have proposed orientations. The receiver seating deck needs removable support; the adapter has a short bridge and the keeper lies flat. No slicer toolpath, first print, anisotropic coupon or physical release has been validated.',
        'No surrounding aircraft body, carrier rail, backing plate or adhesive support is assumed. Only the named core mounting interfaces are available to the structural model.'],
      metrics=[{'label':'Printed bodies','before':'Highlight regions exploded separately','after':'3 fused physical prints'},
        {'label':'Lug thickness','before':'3.5 mm selected concept','after':'3.5 mm retained'},
        {'label':'Actuator reservation','before':'Generic 6 mm envelope','after':'3992 candidate / 10 mm travel'},
        {'label':'Open clearance','before':'1.2 mm at 6 mm','after':'5.2 mm nominal at 10 mm'}],
      features=[{'id':'seat','title':'Keyed preload interface','description':'Integral keys and flange remain part of their printed bodies; four compliant pads remain separate inserts.'},
        {'id':'receiver','title':'Standalone receiver core','description':'Load-bearing socket and local actuator bed belong to the core; peripheral carrier rails are absent.'},
        {'id':'lug','title':'Fused lug and keeper prints','description':'The lug root and flange form one adapter print; the keeper and its flat-bottom coupling tongue form one print.'},
        {'id':'stroke','title':'Candidate long-stroke actuator','description':'A provisional Adafruit 3992 mounting and cross-pin interface reserves 10 mm pull travel; force and exact sample fit are unqualified.'}],
      annotations=[{'label':'One printed receiver core','partId':'receiver_core','position':[23,20,18],'feature':'receiver'},
        {'label':'One adapter + lug print','partId':'payload_adapter','position':[33,14,26.3],'feature':'lug'},
        {'label':'3992 bench-fit candidate','partId':'actuator_body','position':[80,10,27.7],'feature':'stroke'},
        {'label':'Separate compliant pads','partId':'preload_pad_4','position':[40.5,14.8,23.3],'feature':'seat'}],
      printedParts=items,clearanceReport='modular-core-clearance.json',connectivityReport='modular-core-connectivity.json',
      printabilityReport='modular-core-printability.json',simulationGeometry='modular-core-simulation-geometry.json',
      motionLabel='Provisional 10 mm pull, then external +Z payload departure',
      camera={'target':[50,4,13],'position':[145,-121,110]})
    print({'scene':'modular-core','focused_checks':len(records),'connectivity':conn},flush=True)


if __name__=='__main__':build_and_export()
