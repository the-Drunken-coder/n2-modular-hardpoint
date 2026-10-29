"""Reusable P6 solenoid exterior, clamp and fastener geometry; units mm.
COTS actuator exterior follows Adafruit 2776 drawing. Internal magnetic and
spring details are explanatory envelopes, not vendor manufacturing geometry.
"""
from pathlib import Path
import math,json
import cadquery as cq
from common import box,cyl

BODY_X=20.5; AX=8.7; STROKE=3.0

def hexprism(af,z0,z1,x=0,y=0):
    return cq.Workplane('XY',origin=(x,y,z0)).polygon(6,af/math.cos(math.pi/6)).extrude(z1-z0)

def bolt(d,length,head_z,x,y):
    head_d={2:3.8,3:5.5}[d];h={2:2,3:3}[d];af={2:1.5,3:2.5}[d]
    p=cyl(d/2,length,(x,y,head_z-length)).union(cyl(head_d/2,h,(x,y,head_z)))
    return p.cut(hexprism(af,head_z+h-.8,head_z+h+.1,x,y)).clean()

def nut(d,z,x,y):
    af={2:4,3:5.5}[d];h={2:1.6,3:2.4}[d]
    return hexprism(af,z,z+h,x,y).cut(cyl(d/2,h+.2,(x,y,z-.1)))

def washer(d,z,x,y):
    return cyl(3.5,.5,(x,y,z)).cut(cyl((d+.3)/2,.7,(x,y,z-.1)))

def compression_spring(x0,length,r=2.55,wire=.15,turns=4):
    # Longitudinal axis X; .30 wire diameter is visual inference, not spring specification.
    path=cq.Wire.makeHelix(length/turns,length,r)
    p=cq.Workplane('XY').center(r,0).circle(wire).sweep(cq.Workplane(obj=path),isFrenet=True)
    return p.rotate((0,0,0),(0,1,0),90).translate((x0,0,AX))

def act_parts(vid):
    # 12 x 11 x 20.5 frame envelope with visually inferred .5 wall and 9.6 x 9.6 coil window.
    frame=box(0,20.5,-6,6,3.2,14.2)
    frame=frame.cut(box(.55,19.95,-4.9,4.9,3.75,13.65))
    frame=frame.cut(cyl(2.08,21,( -.2,0,AX),(1,0,0))).cut(cyl(3,1.6,(-.1,0,AX),(1,0,0)))
    # 1.5 diameter fixture holes on the supplier drawing: opposite side face, 10 mm axial and 6 mm lateral offset.
    for x,z in [(5,AX-3),(15,AX+3)]:
        frame=frame.cut(cyl(.75,1.2,(x,-6.1,z),(0,1,0)))
    coil=cyl(4.65,17.5,(1.5,0,AX),(1,0,0)).cut(cyl(2.15,18,(1.25,0,AX),(1,0,0)))
    # Frame and coil are one purchased unit; union disjoint subsolids for transparent external-envelope modeling.
    body=cq.Compound.makeCompound([frame.val(),coil.val()])
    plunger=cyl(2,21.6,(-5.1,0,AX),(1,0,0))
    plunger=plunger.union(cyl(3.35,.5,(-3.7,0,AX),(1,0,0)))
    plunger=plunger.union(cyl(.8,6.9,(16.5,0,AX),(1,0,0)))
    plunger=plunger.union(cyl(1.5,.6,(23.4,0,AX),(1,0,0))).clean()
    spring=compression_spring(-3.05,4.4)
    # Spring compression is not rigid: supplied spring represented by explanatory retained geometry only.
    parts=[
      dict(id=vid+'_solenoid_body',name='Adafruit 2776 frame and coil',kind='actuator',shape=body,mpn='Adafruit 2776',explode=[0,-12,0],fidelity='Drawing-based outer 20.5 x 12 x 11 mm; coil/window/wall details inferred.'),
      dict(id=vid+'_armature',name='Captive armature and rear button',kind='hardware',shape=plunger,mpn='Included with Adafruit 2776',explode=[-13,0,0],keyframes=[{'u':0},{'u':.5,'translation':[3,0,0]},{'u':1,'translation':[3,0,0]}],fidelity='4 mm main armature; 1.6 mm rear stem and 3 mm button from drawing; internal length inferred.'),
      dict(id=vid+'_return_spring',name='Included return spring (retained shape)',kind='hardware',shape=spring,mpn='Included with Adafruit 2776',explode=[-6,0,7],fidelity='Illustrative coil/wire/turn count. Compression is omitted in animation; shown retained only.',visibleWhen='retained'),
    ]
    # Short pigtails show wiring exit, not the full supplied 57 mm lead length.
    for k,z in enumerate([5.2,6.5]):
        wire=cyl(.48,5.5,(1,-6,z),(0,-1,0))
        parts.append(dict(id=f'{vid}_wire_{k+1}',name=('Positive' if k==0 else 'Return')+' lead stub',kind='reference',shape=wire,color='#c95853' if k==0 else '#343b46',explode=[0,-12,0],fidelity='Routing illustration only. Full supplied lead not modeled.',mpn='Included 26 AWG lead'))
    return parts

def clamp_base(vid,xmax,ymax):
    base=box(-2,xmax,-13,ymax,0,3.2).edges('|Z').fillet(1.2)
    # Locator walls leave .2 mm body-side clearance; body bears at Z=3.2.
    for s in (-1,1):
        base=base.union(box(-.4,20.9,6.2 if s>0 else -8,8 if s>0 else -6.2,3.2,6.5))
    base=base.union(box(-2,-.2,-8,8,3.2,6.5)).union(box(20.7,22,-8,8,3.2,6.5))
    # Front locator relief clears the supplier spring/armature envelope.
    base=base.cut(cyl(3.1,2.3,(-2.2,0,AX),(1,0,0)))
    # Pigtail channels through the side locator.
    base=base.cut(box(-.1,3,-10.2,-5.9,4.3,7.1))
    # Retained cap is separate print, bolted from top, clamp surfaces at exact nominal body height.
    cap=box(4,16,-12,12,14.2,16.2)
    cap=cap.union(box(4,16,-12,-6.2,6.8,14.21)).union(box(4,16,6.2,12,6.8,14.21))
    cap=cap.cut(box(6,14,-5,5,14.15,16.3)) # Open heat/window in the bridge; remaining rails contact body ends.
    hardware=[]
    for k,y in enumerate((-9,9)):
        base=base.union(cyl(2.8,1.8,(10,y,3.2)))
        base=base.cut(cyl(1.15,6,(10,y,-.5))).cut(hexprism(4.2,-.1,2.6,10,y))
        cap=cap.cut(cyl(1.15,14,(10,y,3)))
        hardware.extend([
          dict(id=f'{vid}_clamp_screw_{k+1}',name=f'M2 x 16 socket screw {k+1}',kind='hardware',shape=bolt(2,16,16.2,10,y),standard='ISO 4762 M2 x 16',explode=[0,0,12],fidelity='Nominal standard envelope and hex drive; threads simplified to major diameter.'),
          dict(id=f'{vid}_clamp_nut_{k+1}',name=f'M2 hex nut {k+1}',kind='hardware',shape=nut(2,1,10,y),standard='ISO 4032 M2',explode=[0,0,-7],fidelity='Nominal hex/nut thickness, unthreaded bore.'),
        ])
    for x,y in [(5,14),(xmax-3,-10)]:base=base.cut(cyl(1.6,4,(x,y,-.2)))
    return base,cap,hardware

def part(vid,suffix,name,kind,shape,**kw):return dict(id=vid+'_'+suffix,name=name,kind=kind,shape=shape,**kw)

