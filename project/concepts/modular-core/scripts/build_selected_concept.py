"""Integrated selected-direction visual concept, derived from the P14 assembly.

The separate feature solids are integral receiver/adapter material, split only
for highlighting. Nominal checks do not establish strength or loaded release.
"""
from __future__ import annotations
import cadquery as cq
from cad_api import (OUT, box, cylinder, solid, load_shapes, baseline_parts,
                     replace_part, export_scene, save_json)
from build_release_options import long_actuator, part, overlap, focused_checks


def xz_prism(points, y0, y1):
    return cq.Workplane('XZ').polyline(points).close().extrude(y1-y0).translate((0,y1,0))


def add(parts,pid,name,shape,features,**kwargs):
    entry={'id':pid,'name':name,'shape':shape,'role':'added','features':features,
           'explode':[0,0,0],**kwargs}
    parts.append(entry)
    return entry


def build_parts():
    shapes=load_shapes()
    parts=baseline_parts(shapes)
    base=long_actuator(parts)
    # The long-travel collar is radius 3.35 mm. Give it 0.25 mm radial
    # clearance through the fixed front rib throughout the nominal stroke.
    base=base.cut(cylinder(3.6,3,(-21,0,8.7),(1,0,0))).clean()

    # Same explicit 3.5 mm lug / 6 mm travel architecture as the separate study.
    base=base.cut(box(22.75,41,4.5,17.1,3.19,16.1))
    base=base.union(box(37.8,40.1,-13,17,0,3.2))
    distal=box(23.4,26.5,5.8,14.2,3.1,14.7).cut(box(23.3,26.6,8.2,11.8,6.9,10.5))
    proximal=box(30.6,33.8,5.8,14.2,3.1,14.7).cut(box(30.5,33.9,8.2,11.8,6.9,10.5))
    proximal=proximal.union(box(33.8,39.5,5.8,14.2,3.1,6.9)).union(box(33.8,39.5,11.8,14.2,3.1,14.7))
    base=base.union(distal).union(proximal).union(box(22.8,33.1,4.6,15.4,3.1,6.6))
    base=base.cut(box(26.5,30.6,6.1,13.9,3.2,16.1)).clean()
    for y in (8.2,11.8):
        base=base.edges(cq.selectors.BoxSelector((23.3,y-.05,10.45),(39.6,y+.05,10.55))).edges('|X').fillet(.3)

    keeper=box(22,36.1,-4,4,7.2,10.9).union(box(34.1,36.1,2.5,11.5,7.2,10.2))
    keeper=keeper.union(box(25.5,36.1,8.5,11.5,7.2,10.2))
    keeper=keeper.cut(box(23.35,24.05,-2.2,2.2,6.4,11.1)).cut(box(21.8,23.35,-1,1,6.4,11.1))
    keeper=keeper.union(box(32.6,36.1,-3.6,-.8,10.8,13.7)).cut(cylinder(1,4.7,(29,0,6.4))).clean()
    replace_part(parts,'N2_keeper',keeper,'companion',features=['lug','stroke'],
        name='Keeper with 1 mm distal overlap and widened link',motion={'vector':[6,0,0],'start':0,'end':.55})

    adapter=box(26.8,30.3,6.4,13.6,3.8,16).union(box(24,39.1,5,17,16,19))
    adapter=adapter.cut(box(26.5,30.6,7.7,12.3,6.9,10.5))
    for y in (8,14):adapter=adapter.cut(cylinder(1.6,4,(35.1,y,15.5)))
    adapter=adapter.clean()

    # Tapered root shoulders add material above the keeper opening. Their swept
    # upward release envelope is relieved into the fixed receiver/seat.
    left=xz_prism([(24,16),(26.8,12.8),(26.8,16)],6.4,13.6)
    right=xz_prism([(30.3,12.8),(33.1,16),(30.3,16)],6.4,13.6)
    root_shoulders=left.union(right).cut(adapter).clean()
    root_relief=xz_prism([(23.4,16.7),(27.1,12.3),(27.1,16.7)],6.1,13.9)
    root_relief=root_relief.union(xz_prism([(30,12.3),(33.7,16.7),(30,16.7)],6.1,13.9))
    base=base.cut(root_relief).clean()

    # Open structural rails at the edges of the receiver, not an aircraft plate.
    # Their top remains below clamp/driver access and the coil stays uncovered.
    rails=box(-20.8,42,-15,-12.2,0,8).union(box(-20.8,42,16.8,20,0,8))
    rails=rails.union(box(-20.8,-18.8,-12.2,16.8,0,6.5))
    rails=rails.cut(cylinder(3.6,3,(-21,0,8.7),(1,0,0)))
    # Side lead window carries both P14 wire exits through the new edge rail.
    rails=rails.cut(box(-1,3,-15.5,-11.8,4.3,7.6))
    # Keep the aircraft attachment interfaces and driver approaches accessible.
    for x,y in ((5,14),(35,-10)):
        rails=rails.cut(cylinder(3.2,24,(x,y,-1)))
    rails=rails.cut(base).clean()

    # Socket cheeks connect the guide structure down to the base. The opening
    # around the moving link remains open below the seating deck.
    seat=box(22.3,43,3.5,23,12.5,14.7)
    seat=seat.union(box(22.3,43,20.8,23,0,12.5))
    seat=seat.union(box(40.8,43,4.5,23,0,12.5))
    seat=seat.union(box(22.3,24.5,14.2,23,0,12.5))
    seat=seat.union(box(22.3,40.8,13.9,16.3,3.1,12.5))
    seat=seat.cut(box(26.5,30.6,6.1,13.9,3.1,16.7)).cut(root_relief)
    # The cross-link sweeps to x42.1. Preserve its full clearance to +X.
    seat=seat.cut(box(33.8,43.2,4.2,11.8,6.9,10.5))
    seat=seat.cut(base).cut(rails).clean()

    flange=box(22,43.5,3.5,23.5,16,19)
    for y in (8,14):flange=flange.cut(cylinder(1.6,4,(35.1,y,15.5)))
    keys=[]
    for i,(x0,x1) in enumerate(((23.2,26),(38.4,41.6)),1):
        key=box(x0,x1,18.9,20.9,14.7,18.8)
        keys.append(key)
        # The second rectangular slot is relieved along X to avoid requiring
        # two exact key spacings. These are still unqualified illustrative fits.
        xclear=.2 if i==1 else .6
        flange=flange.cut(box(x0-xclear,x1+xclear,18.7,21.1,15.9,19.5))
    flange=flange.cut(adapter).cut(root_shoulders).clean()

    replace_part(parts,'N2_receiver',base,'companion',features=['receiver','lug','stroke'],
        name='Receiver with widened lug guides and root-shoulder relief')
    replace_part(parts,'N2_adapter',adapter,'changed',features=['lug'],
        name='3.5 mm retaining lug and payload flange',translation=[0,0,.3])
    add(parts,'lug_root_shoulders','Integral tapered lug-root shoulders',root_shoulders,['lug'],
        translation=[0,0,.3],motion={'vector':[0,0,22],'start':.6,'end':1})
    add(parts,'receiver_rails','Integral open receiver rails and front rib',rails,['receiver'],explode=[0,-5,0])
    add(parts,'socket_cheeks_and_seat','Integral socket cheeks and keyed-seat deck',seat,['receiver','seat'],explode=[0,5,0])
    add(parts,'selected_adapter_flange','Integral wider flange with relieved rectangular key slots',flange,['seat','lug'],
        translation=[0,0,.3],motion={'vector':[0,0,22],'start':.6,'end':1},explode=[0,0,8])
    for i,key in enumerate(keys,1):
        add(parts,f'selected_key_{i}',f'Integral rectangular locating shoulder {i}',key,['seat'],explode=[0,0,5])
    pads=[]
    for i,(x,y) in enumerate(((24.3,4.9),(24.3,16.7),(40.5,7),(40.5,14.8)),1):
        pad=cylinder(1.3,1.6,(x,y,14.7));pads.append(pad)
        add(parts,f'selected_preload_pad_{i}',f'Compliant preload pad {i}, assembled state',pad,['seat'],explode=[0,0,4])
    for pid in ('N2_solenoid_body','N2_armature','N2_return_spring'):
        part(parts,pid)['features']=['stroke']
        part(parts,pid)['role']='changed' if pid!='N2_return_spring' else 'companion'
    receiver=base.union(rails).union(seat)
    for key in keys:receiver=receiver.union(key)
    receiver=receiver.clean()
    payload=adapter.union(root_shoulders).union(flange).clean().translate((0,0,.3))
    return parts,{'receiver':receiver,'payload':payload,'keeper':keeper,'pads':pads,'keys':keys,
        'base':base,'rails':rails,'seat':seat,'adapter':adapter,'roots':root_shoulders,'flange':flange,'source':shapes}


def build_and_export():
    parts,g=build_parts();receiver=g['receiver'];payload=g['payload'];keeper=g['keeper']
    checks=[]
    for travel in (0,.5,1,2,3,4,4.8,5,6):
        checks.append((f'Keeper clears integral receiver at {travel} mm travel',overlap(receiver,keeper.translate((travel,0,0))),False))
        checks.append((f'Keeper fits preloaded lug bore at {travel} mm travel',overlap(payload,keeper.translate((travel,0,0))),False))
        checks.append((f'Armature clears integral receiver at {travel} mm travel',overlap(receiver,part(parts,'N2_armature')['shape'].translate((travel,0,0))),False))
    for lift in (0,.3,1,2,4,8,14,22):
        checks.append((f'Payload clears integral receiver at {lift} mm departure',overlap(receiver,payload.translate((0,0,lift))),False))
        checks.append((f'Payload clears withdrawn keeper at {lift} mm departure',overlap(payload.translate((0,0,lift)),keeper.translate((6,0,0))),False))
    for i,pad in enumerate(g['pads'],1):
        checks.append((f'Pad {i} contacts rather than penetrates payload',overlap(pad,payload),False))
        for y in (8,14):
            checks.append((f'Pad {i} avoids attachment bore at y{y}',overlap(pad,cylinder(1.6,25,(35.1,y,0))),False))
    for pid in ('N2_solenoid_body','N2_clamp','N2_wire_1','N2_wire_2','N2_clamp_screw_1','N2_clamp_screw_2'):
        checks.append((f'{pid} clears added receiver structure',overlap(g['rails'].union(g['seat']),part(parts,pid)['shape']),False))
    for lift in (1,4,10,20):
        for pid in ('N2_solenoid_body','N2_clamp'):
            checks.append((f'{pid} upward assembly clearance at {lift} mm',overlap(receiver,part(parts,pid)['shape'].translate((0,0,lift))),False))
    for x,y in ((5,14),(35,-10)):
        checks.append((f'Existing aircraft bolt driver axis at ({x},{y}) remains clear',overlap(g['rails'].union(g['seat']),cylinder(3.2,24,(x,y,3.2))),False))
    for y in (-9,9):
        checks.append((f'Clamp driver axis at y{y} remains clear',overlap(g['rails'].union(g['seat']),cylinder(3,20,(10,y,16.2))),False))
    records=focused_checks('selected-direction',checks)
    connectivity={
        'receiver_joined_solid_count':len(solid(receiver).Solids()),
        'adapter_joined_solid_count':len(solid(payload).Solids()),
        'receiver_valid':solid(receiver).isValid(),'adapter_valid':solid(payload).isValid(),
        'receiver_volume_mm3':solid(receiver).Volume(),
        'P14_receiver_volume_mm3':solid(g['source']['N2_receiver']).Volume(),
        'adapter_volume_mm3':solid(payload).Volume(),
        'P14_adapter_volume_mm3':solid(g['source']['N2_adapter']).Volume(),
        'note':'Added feature solids are split for highlighting; the unions must remain one connected valid solid per manufactured body. Volume is geometric, not an assigned material mass or strength rating.'}
    assert connectivity['receiver_joined_solid_count']==1,connectivity
    assert connectivity['adapter_joined_solid_count']==1,connectivity
    assert connectivity['receiver_valid'] and connectivity['adapter_valid'],connectivity
    save_json(OUT/'selected-direction-connectivity.json',connectivity)
    export_scene('selected-direction','Selected hardpoint direction',parts,
        eyebrow='Integrated concept / Selected direction',
        summary='The selected keyed preload interface, open receiver structure, thicker lug and longer actuator travel combined in one hardpoint.',
        primaryChange='Combined selected changes, with integral supporting material',
        purpose='Make the chosen direction inspectable as one compatible assembly before actuator selection, tolerance design and structural validation.',
        companionChanges=['The lug socket and proximal guide move to accommodate the 3.5 mm lug.',
            'Tapered root shoulders use matching upward-opening receiver relief, leaving the keeper channel open.',
            'The wider mating flange, socket cheeks and open edge rails belong to the hardpoint body; no aircraft backing plate is included.',
            'Integral receiver/adapter material is split into feature solids only for highlighting.'],
        limits=['This is nominal concept geometry. Added material has not established a strength increase, a payload rating or a 2 g release capability.',
            'Distal keeper support ends after 1.0 mm withdrawal, but the lug clears at 4.8 mm. The intervening 3.8 mm of potentially loaded partial withdrawal remains unqualified.',
            'The 6 mm, 5 V actuator is an unselected generic envelope; force throughout the stroke, current and temperature behavior remain unqualified.',
            'Pads bias the adapter +Z onto the keeper-hole floor. They do not establish a rigid face datum, and their preload adds contact force and release friction.',
            'The pads are drawn at 1.6 mm assembled thickness. Their free thickness, material, compression and retention method remain to be selected.',
            'The second rectangular slot has extra X clearance to avoid prescribing two exact key spacings; both key fits remain illustrative.',
            'Root relief removes material above the guide channel. The combined load path, including those roof sections, needs FEA and physical validation.',
            'Only the listed nominal rigid poses and assembly/tool envelopes were checked; this is not a continuous swept contact or tolerance simulation.',
            'Existing aircraft attachment holes are retained. Aircraft backing, twin installations, seating interlock and equipment lock are excluded.'],
        metrics=[{'label':'Lug thickness','before':'1.4 mm','after':'3.5 mm provisional'},
            {'label':'Useful keeper travel','before':'3 mm','after':'6 mm provisional'},
            {'label':'Travel to lug clearance','before':'2.3 mm','after':'4.8 mm nominal'},
            {'label':'Open margin','before':'0.7 mm','after':'1.2 mm nominal'},
            {'label':'Interface','before':'Unpreloaded','after':'Keyed + compliant pads'}],
        features=[{'id':'seat','title':'Preloaded keyed seat','description':'Rectangular locating shoulders, a relieved second slot, and four compliant pads offset from attachment bores.'},
            {'id':'receiver','title':'More receiver structure','description':'Open edge rails, a front rib and socket cheeks connect the mechanism supports to the hardpoint base.'},
            {'id':'lug','title':'Thicker lug and supported root','description':'A 3.5 mm retaining lug with tapered root shoulders, a wider flange and matching receiver relief.'},
            {'id':'stroke','title':'Longer useful stroke','description':'An illustrative 6 mm armature/keeper withdrawal gives 1.2 mm nominal clearance beyond the thicker lug.'}],
        annotations=[{'label':'Keyed seat + preload pads','position':[40.5,14.8,16.3],'feature':'seat'},
            {'label':'Open integral receiver rails','position':[-8,-14,8],'feature':'receiver'},
            {'label':'Tapered lug-root shoulders','position':[25.2,6.4,15.8],'feature':'lug'},
            {'label':'Generic 6 mm actuator envelope','position':[-11,0,14.2],'feature':'stroke'}],
        clearanceReport='selected-direction-clearance.json',
        connectivityReport='selected-direction-connectivity.json',
        motionLabel='Illustrative 6 mm withdrawal, then +Z payload departure',
        camera={'target':[9,4,10],'position':[93,-93,83]})
    print({'focused_checks':len(records),'connectivity':connectivity})


if __name__=='__main__':build_and_export()
