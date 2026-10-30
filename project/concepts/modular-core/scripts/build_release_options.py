"""Four independent N2 P14 release concepts for the interactive change gallery.

These are explicit CAD visual studies, not production changes. Clearance checks
below concern nominal rigid solids only; no force, fit or material rating follows.
"""
from __future__ import annotations
import json
import sys
from pathlib import Path
import cadquery as cq
from cad_api import (ROOT, OUT, BASE, box, cylinder, solid, load_shapes,
                     baseline_parts, replace_part, export_scene, save_json)

sys.path.insert(0, str(ROOT/'source-cad'))
from solenoid_parts import compression_spring


def part(parts,pid):
    return next(p for p in parts if p['id']==pid)


def add(parts,pid,name,shape,role='added',**kw):
    entry={'id':pid,'name':name,'shape':shape,'role':role,'explode':[0,0,0],**kw}
    parts.append(entry)
    return entry


def overlap(a,b):
    return max(0.0,solid(a).intersect(solid(b)).Volume())


def focused_checks(scene_id,checks):
    records=[]
    for label,value,expect_interference in checks:
        passed=(value>1e-5) if expect_interference else (value<1e-5)
        records.append({'label':label,'overlap_mm3':value,'expected_interference':expect_interference,'passed':passed})
    save_json(OUT/f'{scene_id}-clearance.json',{'scene':scene_id,'all_passed':all(r['passed'] for r in records),
        'scope':'Specified nominal rigid poses only; not a continuous tolerance, contact, force or strength assessment.',
        'checks':records})
    failures=[r for r in records if not r['passed']]
    if failures: raise ValueError(json.dumps({'scene':scene_id,'failed_clearance':failures},indent=2))
    return records


def long_actuator(parts):
    """Generic larger 5 V envelope with 6 mm kinematics, not a supplier model."""
    base=part(parts,'N2_receiver')['shape']
    # Remove the old front locator, which would occupy the elongated coil frame.
    base=base.cut(box(-2.02,.02,-8.1,8.1,3.19,6.65))
    base=base.union(box(-21,-.5,-13,17,0,3.2))
    for y0,y1 in ((6.2,8),(-8,-6.2)):
        base=base.union(box(-18.9,-.3,y0,y1,3.2,6.5))
    base=base.union(box(-20.5,-18.7,-8,8,3.2,6.5))
    base=base.cut(cylinder(3.2,2.4,(-20.6,0,8.7),(1,0,0))).clean()
    replace_part(parts,'N2_receiver',base,'companion',name='Receiver with extended actuator cradle')

    frame=box(-18.5,20.5,-6,6,3.2,14.2)
    frame=frame.cut(box(-17.95,19.95,-4.9,4.9,3.75,13.65))
    frame=frame.cut(cylinder(2.08,40,(-18.8,0,8.7),(1,0,0)))
    frame=frame.cut(cylinder(3.0,1.6,(-18.6,0,8.7),(1,0,0)))
    coil=cylinder(4.65,36,(-17,0,8.7),(1,0,0)).cut(cylinder(2.15,36.4,(-17.2,0,8.7),(1,0,0)))
    actuator=cq.Compound.makeCompound([solid(frame),solid(coil)])
    replace_part(parts,'N2_solenoid_body',actuator,'changed',
        name='Generic larger 5 V solenoid envelope — unselected',explode=[0,-14,0])
    armature=cylinder(2,43.1,(-26.6,0,8.7),(1,0,0))
    armature=armature.union(cylinder(3.35,.5,(-25.2,0,8.7),(1,0,0)))
    armature=armature.union(cylinder(.8,6.9,(16.5,0,8.7),(1,0,0)))
    armature=armature.union(cylinder(1.5,.6,(23.4,0,8.7),(1,0,0))).clean()
    replace_part(parts,'N2_armature',armature,'changed',name='Illustrative long-travel armature and button',
        motion={'vector':[6,0,0],'start':0,'end':.55})
    spring=compression_spring(-24.55,7.4)
    replace_part(parts,'N2_return_spring',spring,'companion',name='Illustrative return spring, retained shape only',hideAfter=.03)
    part(parts,'N2_keeper')['motion']={'vector':[6,0,0],'start':0,'end':.55}
    return base


def longer_stroke(shapes):
    parts=baseline_parts(shapes)
    long_actuator(parts)
    receiver=part(parts,'N2_receiver')['shape']; keeper=part(parts,'N2_keeper')['shape']; adapter=part(parts,'N2_adapter')['shape']
    checks=[('New actuator frame clears cradle',overlap(receiver,part(parts,'N2_solenoid_body')['shape']),False)]
    for travel in (0,3,6):
        checks.append((f'Keeper clears receiver at {travel} mm',overlap(receiver,keeper.translate((travel,0,0))),False))
    checks.append(('Adapter departure clears keeper at 6 mm',overlap(adapter.translate((0,0,10)),keeper.translate((6,0,0))),False))
    focused_checks('longer-stroke',checks)
    export_scene('longer-stroke','Longer useful stroke',parts,
        eyebrow='03 / Actuation',
        summary='A longer actuator envelope gives the keeper 6 mm of withdrawal while preserving the original 1.4 mm lug.',
        primaryChange='3 mm → 6 mm useful keeper travel',
        purpose='Make the extra opening travel visible without hiding it inside a thicker-lug redesign.',
        companionChanges=['The receiver cradle extends forward to support a longer generic coil frame.',
            'The armature and retained spring envelope are redrawn for the illustrative travel.'],
        limits=['The orange actuator is a generic design envelope, not a dimensioned model of a selected 5 V product.',
            'Follow-up review found armature-collar interference with the front cradle at 5–6 mm travel. This historical geometry is not the corrected selected direction.',
            'No force, current, thermal, return-spring or loaded-release qualification is implied.',
            'Retained spring geometry is hidden during travel; compression is not simulated.',
            'Only the listed nominal rigid poses were checked; manufacturing clearances remain unqualified.'],
        metrics=[{'label':'Useful travel','before':'3 mm','after':'6 mm'},
            {'label':'Lug thickness','before':'1.4 mm','after':'1.4 mm'},
            {'label':'Nominal open margin','before':'0.7 mm','after':'3.7 mm'}],
        annotations=[{'label':'Longer generic coil frame','position':[-8,-6,14]},
            {'label':'6 mm keeper motion','position':[34,10,11]},
            {'label':'Original thin lug retained','position':[27.5,10,16]}],
        clearanceReport='longer-stroke-clearance.json',
        motionLabel='Show 6 mm withdrawal, then external payload departure')


def thicker_lug(shapes):
    parts=baseline_parts(shapes)
    base=long_actuator(parts)
    # Replace the load-bearing socket region, retaining the original actuator
    # cradle and the general P14 bridge/channel architecture.
    base=base.cut(box(22.75,41,4.5,17.1,3.19,16.1))
    base=base.union(box(37.8,40.1,-13,17,0,3.2))
    distal=box(23.4,26.5,5.8,14.2,3.1,14.7).cut(box(23.3,26.6,8.2,11.8,6.9,10.5))
    proximal=box(30.6,33.8,5.8,14.2,3.1,14.7).cut(box(30.5,33.9,8.2,11.8,6.9,10.5))
    proximal=proximal.union(box(33.8,39.5,5.8,14.2,3.1,6.9)).union(box(33.8,39.5,11.8,14.2,3.1,14.7))
    pocket=box(22.8,33.1,4.6,15.4,3.1,6.6)
    base=base.union(distal).union(proximal).union(pocket)
    base=base.cut(box(26.5,30.6,6.1,13.9,3.2,16.1)).clean()
    for y in (8.2,11.8):
        base=base.edges(cq.selectors.BoxSelector((23.3,y-.05,10.45),(39.6,y+.05,10.55))).edges('|X').fillet(.3)
    replace_part(parts,'N2_receiver',base,'companion',name='Receiver with widened socket and relocated proximal bridge')
    keeper=box(22,36.1,-4,4,7.2,10.9).union(box(34.1,36.1,2.5,11.5,7.2,10.2))
    keeper=keeper.union(box(25.5,36.1,8.5,11.5,7.2,10.2))
    keeper=keeper.cut(box(23.35,24.05,-2.2,2.2,6.4,11.1)).cut(box(21.8,23.35,-1,1,6.4,11.1))
    keeper=keeper.union(box(32.6,36.1,-3.6,-.8,10.8,13.7)).cut(cylinder(1,4.7,(29,0,6.4))).clean()
    replace_part(parts,'N2_keeper',keeper,'companion',name='Keeper extended for wider lug and 1 mm retained overlap',motion={'vector':[6,0,0],'start':0,'end':.55})
    adapter=box(26.8,30.3,6.4,13.6,3.8,16).union(box(24,39.1,5,17,16,19))
    adapter=adapter.cut(box(26.5,30.6,7.7,12.3,6.9,10.5))
    for y in (8,14): adapter=adapter.cut(cylinder(1.6,4,(35.1,y,15.5)))
    adapter=adapter.clean()
    replace_part(parts,'N2_adapter',adapter,'changed',name='3.5 mm retaining lug and revised payload flange')
    # Distinguish the featured lug from the already necessary longer actuator.
    for pid in ('N2_solenoid_body','N2_armature'):part(parts,pid)['role']='companion'
    checks=[]
    for travel in (0,.6,1.0,3.0,4.8,6):
        checks.append((f'Keeper clears receiver at {travel} mm',overlap(base,keeper.translate((travel,0,0))),False))
        checks.append((f'Keeper fits lug bore at {travel} mm',overlap(adapter,keeper.translate((travel,0,0))),False))
    checks.append(('Adapter fits receiver when seated',overlap(base,adapter),False))
    checks.append(('Adapter departure clears withdrawn keeper',overlap(adapter.translate((0,0,10)),keeper.translate((6,0,0))),False))
    focused_checks('thicker-lug',checks)
    export_scene('thicker-lug','Thicker retaining lug',parts,
        eyebrow='04 / Retention',summary='The adapter lug grows from 1.4 to 3.5 mm, with the socket and guide moved to make room.',
        primaryChange='1.4 mm → 3.5 mm lug thickness',
        purpose='Show the actual material increase and the surrounding geometry it forces to change.',
        companionChanges=['6 mm useful travel is required for this illustrative combination.',
            'The receiver socket widens, its proximal bridge moves 2.1 mm, and the keeper link moves with it.',
            'Retained distal overlap increases to 1.0 mm; the adapter flange and attachment holes shift with the thicker lug.'],
        limits=['The thicker lug has not been structurally analyzed or physically tested.',
            'Follow-up review found armature-collar interference with the front cradle at 5–6 mm travel. This historical geometry is not the corrected selected direction.',
            'After distal support is lost, retaining travel is 3.8 mm; a thicker lug does not remove that support transition.',
            'The generic longer actuator has no established full-stroke force or thermal margin.',
            'Nominal pose checks do not establish printed fit, wear, binding or loaded release.'],
        metrics=[{'label':'Lug thickness','before':'1.4 mm','after':'3.5 mm'},
            {'label':'Travel to lug clearance','before':'2.3 mm','after':'4.8 mm'},
            {'label':'Nominal open margin','before':'0.7 mm','after':'1.2 mm'}],
        annotations=[{'label':'3.5 mm lug — changed part','position':[28.55,6.4,13.5]},
            {'label':'Proximal bridge moved 2.1 mm','position':[32.2,14.2,14.7]},
            {'label':'1.0 mm retained overlap','position':[25.7,10,10.5]}],
        clearanceReport='thicker-lug-clearance.json',
        motionLabel='Show 6 mm withdrawal and the 4.8 mm clearance point')


def spring_z(center,base,length,radius=1.2,wire=.15,turns=5):
    path=cq.Wire.makeHelix(length/turns,length,radius)
    shape=cq.Workplane('XY').center(radius,0).circle(wire).sweep(cq.Workplane(obj=path),isFrenet=True)
    return shape.translate((center[0],center[1],base))


def seating_interlock(shapes):
    parts=baseline_parts(shapes)
    base=part(parts,'N2_receiver')['shape']
    # An offset follower under the adapter flange connects to a thin stop blade
    # immediately ahead of the open keeper tip. It carries no payload load.
    blade=box(28.35,28.85,9.0,16.2,4.2,6.9)
    link=box(28.35,35.0,14.6,16.2,4.2,5.7)
    stem=box(34.0,35.0,14.9,16.1,4.2,15.9)
    pad=box(33.4,35.6,14.5,16.5,15.5,16.0)
    collar=cylinder(1.1,.6,(34.5,15.5,12.6))
    follower=blade.union(link).union(stem).union(pad).union(collar).clean()
    # Clearance slot covers the complete 3.3 mm follower movement.
    pocket=box(28.20,29.0,8.8,16.5,3.9,10.5).union(box(28.2,35.2,14.4,16.4,3.9,9.2))
    base=base.cut(pocket)
    base=base.union(box(32.5,37.5,16.8,19.0,0,3.2))
    # Open-sided guide cage leaves the spring and follower visible in the model.
    cage=box(32.5,36.5,14.3,18.0,3.1,15.2)
    cage=cage.cut(box(33.2,35.8,14.15,17.3,3.3,14.5))
    cage=cage.cut(box(33.2,35.8,14.2,16.8,14.4,15.3))
    cage=cage.cut(box(32.3,35.8,14.2,16.6,3.3,9.3))
    spring_seat=cylinder(1.6,.5,(34.5,15.5,9.3)).cut(box(33.8,35.2,14.7,16.3,9.2,9.9))
    base=base.union(cage).union(spring_seat).clean()
    replace_part(parts,'N2_receiver',base,'companion',name='Receiver with follower guide, clearance pocket and stop-blade slot')
    add(parts,'seat_follower','Offset seating follower and keeper-closing stop blade',follower,
        explode=[0,5,6])
    follower_spring=spring_z((34.5,15.5),9.95,2.55,radius=1.05,wire=.12,turns=5)
    add(parts,'seat_follower_spring','Illustrative follower return spring, seated shape only',follower_spring,
        role='companion',explode=[0,6,3],hideAfter=.03)
    keeper=part(parts,'N2_keeper')['shape']; adapter=part(parts,'N2_adapter')['shape']
    checks=[('Follower clears fixed receiver when seated',overlap(base,follower),False),
            ('Follower clears fixed receiver at mid travel',overlap(base,follower.translate((0,0,1.65))),False),
            ('Follower clears fixed receiver when raised',overlap(base,follower.translate((0,0,3.3))),False),
            ('Follower spring clears fixed receiver in drawn seated state',overlap(base,follower_spring),False),
            ('Follower spring clears plunger in drawn seated state',overlap(follower,follower_spring),False),
            ('Seated follower leaves keeper channel clear',overlap(keeper,follower),False),
            ('Raised follower blocks a closing keeper',overlap(keeper,follower.translate((0,0,3.3))),True),
            ('Raised follower clears the fully open keeper',overlap(keeper.translate((3,0,0)),follower.translate((0,0,3.3))),False),
            ('Seated adapter clears follower at contact face',overlap(adapter,follower),False),
            ('Raised adapter clears raised follower',overlap(adapter.translate((0,0,3.3)),follower.translate((0,0,3.3))),False)]
    focused_checks('seating-interlock',checks)
    export_scene('seating-interlock','Full-seating interlock',parts,
        eyebrow='07 / Engagement',summary='A small offset follower senses the adapter face and withdraws a stop blade from the keeper path.',
        primaryChange='Mechanical closure blocked until the adapter is seated',
        purpose='Make the proposed seating check tangible: the follower is separate from the load-bearing keeper.',
        companionChanges=['A narrow receiver pocket and guide cage allow 3.3 mm follower travel.',
            'The follower includes an illustrative metal stop blade and return spring; this adds a small moving part.'],
        limits=['This is a mechanical layout concept; force, spring, wear, false-seating and contamination behavior remain unverified.',
            'The thin stop blade is an illustrative metal detail; its 0.05 mm nominal gap to the open keeper needs tolerance redesign before manufacture.',
            'The toggle prescribes the two end states; it does not simulate dynamic insertion or prove a safe sequence.',
            'No seating sensor, firmware interlock, or actuator feedback is implemented by this model.'],
        metrics=[{'label':'Seating indication','before':'Visual inspection','after':'Mechanical follower'},
            {'label':'Follower travel','before':'—','after':'3.3 mm'},
            {'label':'Keeper useful travel','before':'3 mm','after':'3 mm'}],
        annotations=[{'label':'Adapter presses this follower','position':[34.5,15.5,16]},
            {'label':'Thin blade blocks keeper closure','position':[28.6,10,8.7]},
            {'label':'Spring and guide are conceptual','position':[35.8,16,11]}],
        control={'type':'seating','label':'Payload fully seated','defaultEngaged':True,
            'transforms':[{'partId':'seat_follower','translation':[0,0,3.3]},
                {'partId':'N2_adapter','translation':[0,0,3.3]},
                {'partId':'N2_keeper','translation':[3,0,0]},
                {'partId':'N2_armature','translation':[3,0,0]}],
            'hiddenWhenDisengaged':['N2_return_spring','seat_follower_spring'],
            'statusEngaged':'Seated: follower clears the keeper path. Illustrative release is available.',
            'statusDisengaged':'Unseated: the raised blade occupies the closing path. Keeper is shown held open.'},
        clearanceReport='seating-interlock-clearance.json',
        motionLabel='Illustrative release after full seating')


def equipment_lock(shapes):
    parts=baseline_parts(shapes)
    base=part(parts,'N2_receiver')['shape'];keeper=part(parts,'N2_keeper')['shape']
    bore=cylinder(.85,18,(31,-9,9),(0,1,0))
    boss=box(29.4,32.6,-7.5,-4.3,6.5,11.5)
    base=base.union(boss).cut(bore).clean()
    keeper=keeper.cut(bore).clean()
    replace_part(parts,'N2_receiver',base,'companion',name='Receiver with supported transverse lock-pin bore')
    replace_part(parts,'N2_keeper',keeper,'companion',name='Keeper with transverse equipment-lock hole')
    shaft=cylinder(.7,16,(31,-8,9),(0,1,0))
    head=cylinder(1.5,2,(31,-10,9),(0,1,0))
    neck=box(30.5,31.5,-10,-8.5,9,12.5)
    eye=cylinder(2,1,(31,-10,12.5),(0,1,0)).cut(cylinder(1.2,1.2,(31,-10.1,12.5),(0,1,0)))
    pin=shaft.union(head).union(neck).union(eye).clean()
    add(parts,'equipment_lock_pin','Manual positive-lock pin with tether eye',pin,explode=[0,-15,0])
    checks=[('Engaged pin clears receiver bore',overlap(base,pin),False),
        ('Engaged pin clears keeper bore',overlap(keeper,pin),False),
        ('Engaged pin physically blocks 0.5 mm withdrawal',overlap(keeper.translate((.5,0,0)),pin),True),
        ('Withdrawn pin clears receiver',overlap(base,pin.translate((0,-18,0))),False),
        ('Withdrawn pin clears fully open keeper',overlap(keeper.translate((3,0,0)),pin.translate((0,-18,0))),False)]
    focused_checks('equipment-lock',checks)
    export_scene('equipment-lock','Positive equipment lock',parts,
        eyebrow='08 / Retained equipment',summary='A separate manual pin crosses the keeper and receiver to prevent commanded withdrawal in camera mode.',
        primaryChange='Independent positive lock for a retained pod',
        purpose='Show the physical difference between power-off retention and deliberately disabling release.',
        companionChanges=['A transverse hole is added to the keeper and supported at both sides by the receiver.',
            'The pin includes a tether eye; tether routing and captive retention remain to be detailed.'],
        limits=['The default pin-in state disables the animation rather than driving the keeper through a solid lock.',
            'Pin, bore bearing, retention against vibration and misuse have not been load tested.',
            'The changed keeper hole requires structural review.',
            'Remove/disengage the lock for intended drop operation; the actuator must not be used to overcome it.'],
        metrics=[{'label':'Retained mode','before':'Spring-return keeper','after':'Independent manual pin'},
            {'label':'Pin diameter','before':'—','after':'1.4 mm illustrative'},
            {'label':'Drop mode','before':'Release available','after':'Pin must be withdrawn'}],
        annotations=[{'label':'Manual pin and tether eye','position':[31,-10,12.5]},
            {'label':'Pin crosses keeper here','position':[31,0,9]},
            {'label':'Receiver supports both ends','position':[31,6.5,10]}],
        control={'type':'lock','label':'Equipment lock engaged','defaultEngaged':True,
            'transforms':[{'partId':'equipment_lock_pin','translation':[0,-18,0]}],
            'statusEngaged':'Equipment mode: pin engaged. Keeper withdrawal is physically blocked.',
            'statusDisengaged':'Drop mode: pin withdrawn. Illustrative release is available.'},
        clearanceReport='equipment-lock-clearance.json',
        motionLabel='Illustrative release with manual lock withdrawn')


if __name__=='__main__':
    shapes=load_shapes()
    functions={'longer-stroke':longer_stroke,'thicker-lug':thicker_lug,
               'seating-interlock':seating_interlock,'equipment-lock':equipment_lock}
    selected=sys.argv[1:] or list(functions)
    for scene in selected:functions[scene](shapes)
