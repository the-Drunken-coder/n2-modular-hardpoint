"""R5 inspectable drawing sheets, controlled fits, BOM and calibration coupons."""
from __future__ import annotations
import csv, html, json, math
from pathlib import Path
import cadquery as cq


def sheet(path,title,shape,dimensions,notes):
    # Orthographic CAD edge projections, including hidden edges, retain true
    # coordinates. Dimensions below are authoritative, not screenshot estimates.
    w,h=1280,900
    chunks=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">',
      '<rect width="1280" height="900" fill="#fafaf7"/>',
      '<style>text{font-family:Arial,sans-serif;fill:#1c2b32}.title{font-size:27px;font-weight:bold}.sub{font-size:13px}.dim{font-size:13px;fill:#9e5020}.edge{fill:none;stroke:#3c6471;stroke-width:1.05;stroke-opacity:.7}.dline{fill:none;stroke:#b76832;stroke-width:1}</style>',
      f'<text x="38" y="45" class="title">{html.escape(title)}</text>',
      '<text x="38" y="70" class="sub">N2 / R5 prototype · All dimensions mm · Orthographic edge projections (hidden edges included)</text>',
      '<text x="38" y="91" class="sub">Datums: A = mounting/print reference face; B = left X reference; C = lateral Y reference. Numerical dimensions govern.</text>']
    bb=shape.BoundingBox();lims=[(bb.xmin,bb.xmax),(bb.ymin,bb.ymax),(bb.zmin,bb.zmax)]
    views=[('TOP · X / Y',0,1,40,125,580,295),('FRONT · X / Z',0,2,40,470,580,280),('SIDE · Y / Z',1,2,700,125,500,295)]
    for label,a,b,ox,oy,vw,vh in views:
        amin,amax=lims[a];bmin,bmax=lims[b];scale=min((vw-65)/max(amax-amin,1),(vh-65)/max(bmax-bmin,1))
        cx=ox+25+(vw-65-(amax-amin)*scale)/2;cy=oy+30+(vh-65-(bmax-bmin)*scale)/2
        def pos(point): return (cx+(point[a]-amin)*scale,cy+(bmax-point[b])*scale)
        chunks.append(f'<text x="{ox}" y="{oy}" class="sub">{label}</text>')
        seen=set()
        for edge in shape.Edges():
            count=2 if edge.geomType()=='LINE' else 28
            coords=[]
            for i in range(count):
                point=edge.positionAt(i/(count-1)).toTuple();px,py=pos(point);coords.append((round(px,3),round(py,3)))
            token=tuple(coords)
            if token in seen or tuple(reversed(token)) in seen:continue
            seen.add(token)
            chunks.append('<polyline class="edge" points="'+' '.join(f'{x},{y}' for x,y in coords)+'"/>')
        x1,y1=cx,cy+(bmax-bmin)*scale+18;x2=x1+(amax-amin)*scale
        chunks.extend([f'<path class="dline" d="M{x1},{y1-5}v10 M{x1},{y1}H{x2} M{x2},{y1-5}v10"/>',
          f'<text x="{(x1+x2)/2}" y="{y1+18}" text-anchor="middle" class="dim">{amax-amin:.2f}</text>'])
        dx=x2+18;top=cy;bottom=cy+(bmax-bmin)*scale
        chunks.append(f'<path class="dline" d="M{dx-5},{top}h10 M{dx},{top}V{bottom} M{dx-5},{bottom}h10"/>')
        chunks.append(f'<text x="{dx+6}" y="{(top+bottom)/2}" class="dim">{bmax-bmin:.2f}</text>')
    chunks.append('<text x="700" y="465" font-size="18" font-weight="bold">Controlled nominal dimensions / finished acceptance</text>')
    for i,line in enumerate(dimensions):chunks.append(f'<text x="700" y="{490+22*i}" class="sub">{html.escape(line)}</text>')
    for i,line in enumerate(notes):chunks.append(f'<text x="40" y="{792+19*i}" class="sub">{html.escape(line)}</text>')
    chunks.append('<text x="40" y="878" font-size="12">R5 manufacturing definition · Dimensional prototype only · No material or flight qualification implied</text></svg>')
    path.parent.mkdir(parents=True,exist_ok=True);path.write_text('\n'.join(chunks)+'\n')


def generate(out,g,meta,constants):
    drawings=out/'drawings';drawings.mkdir(exist_ok=True)
    R=constants['radius'];a0=constants['a0'];a1=constants['a1'];travel=constants['travel']
    specs={
      'receiver_core':('R5-01 structural receiver',[
        'Module datum: X0/Y0/Z0; outside box85.6 ×54 ×20.',
        'Core base: X2–83.6, Y2–52; upper faceZ3.1.',
        'Support ledgeZ1.6; broad central undersideZ0.',
        'Front M3 centers(10,10) and(75.6,10).',
        'Rear M3 centers(10.5,44.8) and(75.1,44.8).',
        'M3 boresØ3.4; nut pocketsAF5.8, Z12.8–15.6.',
        'Boss topsZ18.4; roof above captive nut2.8 thick.',
        'Guide boreY36.9–40.5, Z7.4–11.0.',
        'Proximal guideX29.8–50.5; distalX22.7–25.7.',
        'SocketX25.7–29.8; nominal0.3 clearance per side.',
        'M2 clamp postsØ6.8: X44.5/76.3, Y18.0.'
      ],['Print the broad central underside down. Check the short2 mm perimeter ledge overhangs.',
          'Guide roofs and side nut pockets need bridge/support inspection and finishing.',
          'The ribs, guides, cradle supports and mounting bosses form one connected print.']),
      'case_shell':('R5-02 protective casing shell',[
        'Outside85.6 ×54; height18.4; vertical cornersR1.5.',
        'Walls1.6; local lead relief leaves1.3 at front.',
        'Core retention ledge2 wide ×1.6 high.',
        'Case screw centersX4.2/81.4, Y4.2/49.8.',
        'Corner postsØ6.8; M2 nut pocketsAF4.15.',
        'Lid nut pocketsZ13.0–14.9; actual nuts1.6 high.',
        'Seat exitX13.7–43.3, Y24.7–52.4.',
        'Not sealed: the socket and lead slot stay open.'
      ],['Print the bottom edge down; add a brim if needed. Inspect the nut loading slots.',
          'Insert the M2 nuts before the receiver. The lid holds the core against the lower ledge.',
          'The enclosure protects the mechanism; the core bosses carry the host mounting load.']),
      'case_lid':('R5-03 upper service lid',[
        '85.6 ×54 ×1.6; installedZ18.4–20.0.',
        'M2 centersX4.2/81.4, Y4.2/49.8.',
        'M2 holesØ2.2; countersinksØ4.2 ×1.0 deep.',
        'Four host clearance holesØ3.6; see template.',
        'Lead slot10 ×6 atX29–39, Y7–13.',
        'Keep top access clear through the aircraft frame.',
        'The removable lid provides no seating interlock.'
      ],['Print the outside face down; the exported STL is already flipped. Smooth the lead exit.',
          'Four M2×8 flat-head screws secure the lid to captive nuts; no glued closure.',
          'Screw heads must sit within the20 mm outside thickness.']),
      'keeper':('R5-04 guided keeper and open yoke',[
        'BarX24.7–60.0874, Y37.2–40.2, Z7.4–10.4.',
        'Bar section3 ×3; nominal vertical float0.6.',
        'YokeX54.5874–65.5874; topZ17.6.',
        'Slot4.4 wide: X57.8874–62.2874; floorZ8.0.',
        'The slot is open at the top; side columns3.3.',
        'M2 stop stud axisX54.5/Z8.9, alongY.',
        'Stop nut pocketAF4.15; load from the−Y side.',
        f'Crank radius{R:.1f}; angles{a0:g}–{a1:g}°; travel{travel:.4f}.',
        'Nominal clearance beyond the lug1.4677.',
        'Mechanical limit7.3;105° reserved motion6.7361.'
      ],['Print the broad Y side flat using the oriented STL. The bar, fork and nut boss stay together.',
          'Insert from+X with the M2 stop stud removed; install the nut and screw afterwards.',
          'Finish sliding surfaces. Verify that receiver guides take the load before the servo follower.']),
      'payload_adapter':('R5-05 departing adapter and supported lug',[
        'Flange30 ×27 ×3.8: X13–43, Y25–52.',
        'FlangeZ−5.3 to−1.5; supported lug3.5 thick.',
        'LugX26–29.5, Y33.9–43.5; topZ12.6.',
        'WindowY36.6–40.8, Z6.8–10.4.',
        'The window roof bears down on keeper topZ10.4.',
        'Payload holesX17.5/38.5, Y29/48;Ø3.4.',
        'CountersinksØ7.0 ×1.8 deep from topZ−1.5.',
        'Male keysX23–26 and30.5–33.5, Y28–30.',
        'KeysZ−1.5 to1.5; female X clearance0.3/0.6.',
        'PadsØ4: X20.5/35.5, Y34/43; adhesive0.06.',
        'Foam2.36 free/1.77 installed; attached to adapter.'
      ],['Print the broad payload face down. Inspect the4.2 mm window bridge and reinforced roots.',
          'Fit payload screws before bonding foam. Each full adhesive footprint clears the screw heads.',
          'The adapter and its hardware depart with the pod; the454 g mass input includes them.']),
      'servo_clamp':('R5-06 padded actuator clamp',[
        '38.6 ×6.8 ×1.6: X41.1–79.7, Y14.6–21.4.',
        'InstalledZ15.9–17.5; servo case topZ15.6.',
        'M2 centersX44.5/76.3, Y18.0; pitch31.8.',
        'HolesØ2.2; countersinksØ4.2 ×1.0 deep.',
        'M2×6 flat-head screws; capturedAF4 nuts.',
        'Upper pad21 ×4 ×0.3 installed.',
        'The clamp avoids relying on unpublished ear holes.',
        'Tighten only to retain the case; do not crush it.'
      ],['Print flat. Inspect the1.3 mm edge ligament around each countersink mouth.',
          'Set shim thickness using the purchased servo. The22.8 ×12.2 ×28.5 case is a fit reservation.',
          'Measure shaft, supplied horn, screw and wire exit before accepting a purchased actuator.'])
    }
    for pid,(title,dimensions,notes) in specs.items():
        sheet(drawings/f'{pid}.svg',title,g[pid].val(),dimensions,notes)
    cards=''.join(f'<li><a href="{pid}.svg">{html.escape(v[0])}</a></li>' for pid,v in specs.items())
    (drawings/'index.html').write_text('<!doctype html><meta charset="utf-8"><title>R5 dimensioned drawings</title><style>body{font:17px system-ui;max-width:900px;margin:40px auto;color:#142a31}li{margin:14px}a{color:#0a6b76}</style><h1>R5 dimensioned prototype drawings</h1><p>Millimetres. Six physical prints. Dimensions and verified CAD govern; this is not a material strength or flight qualification.</p><ul>'+cards+'</ul><p><a href="mounting-template.svg">Full-scale host cutout and bolt template</a></p>')
    svg=['<svg xmlns="http://www.w3.org/2000/svg" width="110mm" height="90mm" viewBox="0 0 110 90">','<rect width="110" height="90" fill="white"/>','<style>text{font-family:Arial;fill:#102c36;font-size:2.5px}</style>','<text x="6" y="6">R5 host interface · 1:1 nominal template · units mm</text>','<rect x="10" y="12" width="86.2" height="54.6" fill="none" stroke="#d27830" stroke-width=".2"/>','<rect x="10.3" y="12.3" width="85.6" height="54" rx="1.5" fill="none" stroke="#145766" stroke-width=".15" stroke-dasharray="1 1"/>']
    for x,y in constants['mounts']:
        xx,yy=x+10.3,y+12.3
        svg.extend([f'<circle cx="{xx}" cy="{yy}" r="1.7" fill="none" stroke="#182a30" stroke-width=".15"/>',f'<path d="M{xx-2},{yy}h4 M{xx},{yy-2}v4" stroke="#182a30" stroke-width=".1"/>'])
    svg.extend(['<text x="10" y="72">Orange:86.2×54.6 bottom opening; dotted:85.6×54 module.</text>','<text x="10" y="76">Four Ø3.4 frame holes; front and rear pairs differ. Frame underside Z20.</text>','<text x="10" y="80">Print100% / actualsize. Check50mm reference beforeuse.</text>','<path d="M10,85h50 M10,83v4 M60,83v4" stroke="#102c36" stroke-width=".2"/>','<text x="64" y="86">50.00 mm</text></svg>'])
    (drawings/'mounting-template.svg').write_text('\n'.join(svg)+'\n')
    process={'revision':'R5',
      'material':'Bambu PAHT-CF remains the prototype material. Isotropic PLA is only a numerical comparison proxy.',
      'orientations':{
        'receiver_core':'Broad central underside Z0 on the bed. Inspect short perimeter overhangs, guide bridges and accessible nut-pocket supports.',
        'case_shell':'Bottom edge on the bed. Use a brim as needed; inspect the retention ledge and nut loading windows.',
        'case_lid':'Outside upper face on the bed; the supplied print STL is already flipped.',
        'keeper':'Broad Y side on the bed; the supplied print STL rotates90° about X. Preserve the3 mm bar and3.3 mm fork columns.',
        'payload_adapter':'Broad payload mounting face Z−5.3 on the bed; inspect the4.2 mm lug-window bridge.',
        'servo_clamp':'Flat broad face on the bed; inspect the countersinks and their edge ligaments.'},
      'critical_receiving_measurements':[
        'MG90D case, shaft offset and spline height, supplied screw, wire exit and usable horn hole location.',
        'Smooth sleeve nominal OD4 mm, ID2.1 mm and length6 mm; inspect bore, ovality and running finish.',
        'M2 flat-head screws: verify head diameter≤4 mm and head height≤1 mm against the actual supplier drawing.',
        'M3 nuts: AF5.5 ×2.4 mm; M2 plain nuts: AF4 ×1.6 mm; M2 follower locknut: AF4 ×2.8 mm.',
        'Flat servo lead must fit the4.0 ×1.6 mm routing reservation with the modeled3 mm centerline bends.'
      ],
      'acceptance':[
        'Each printed part is one connected solid; integral features never separate in the exploded view.',
        'Finish the guide and keeper until they slide freely over the entire stroke; preserve the reviewed load-bearing walls.',
        'Rigid retained parts fit the85.6 ×54 ×20 mm box. The flexible lead exits through the top; the adapter departs below.',
        'Measure at least0.5 mm fully open lug clearance at the calibrated endpoint, including available lateral play.',
        'Check each printed unit. Nominal CAD clearance does not establish the fit of a material or printer process.'
      ]}
    (out/'print-process.json').write_text(json.dumps(process,indent=2)+'\n')
    rows=[
      ['R5-01',1,'Printed structural receiver','PAHT-CF','parts/receiver_core.step'],
      ['R5-02',1,'Printed protective shell','PAHT-CF','parts/case_shell.step'],
      ['R5-03',1,'Printed upper lid','PAHT-CF','parts/case_lid.step'],
      ['R5-04',1,'Printed keeper and yoke','PAHT-CF','parts/keeper.step'],
      ['R5-05',1,'Printed departing adapter and lug','PAHT-CF','parts/payload_adapter.step'],
      ['R5-06',1,'Printed actuator clamp','PAHT-CF','parts/servo_clamp.step'],
      ['ACT-01',1,'TowerPro MG90D microservo','Adafruit1143; fixed5 V; listed13.4 g','https://www.adafruit.com/product/1143'],
      ['ACT-02',1,'Supplied20T single-arm horn and screw','Trim to CAD; require a sound hole at radius5.5 mm, with no merged or elongated pre-existing holes','Included with ACT-01'],
      ['ACT-03',1,'Smooth aluminum sleeve4 OD ×2.1 ID ×6 mm','PATIKIL pta231201tt000007; receiving inspection required','https://www.amazon.com/dp/B0CQF66RR7'],
      ['M2-01',4,'M2×8 flat-head lid screw','Modeled maximum head: diameter4 mm ×height1 mm','Standard hardware'],
      ['M2-02',2,'M2×6 flat-head clamp screw','Modeled maximum head: diameter4 mm ×height1 mm','Standard hardware'],
      ['M2-03',7,'M2 plain hex nut','AF4 ×1.6 mm; four lid, two clamp, one stop stud','Standard hardware'],
      ['M2-04',1,'M2×6 socket-cap stop stud','Head diameter3.8 ×height2 mm; install after keeper insertion','Standard hardware'],
      ['M2-05',1,'M2×12 socket-cap follower screw','Head diameter3.8 ×height2 mm','Standard hardware'],
      ['M2-06',1,'M2 plain washer','OD5 / ID2.2 / thickness0.3 mm','Standard hardware'],
      ['M2-07',1,'M2 prevailing-torque nut','AF4 ×2.8 mm nominal; follower hardware','Standard hardware'],
      ['M3-01',4,'M3 plain mounting nut','AF5.5 ×2.4 mm; captive in receiver','Standard hardware'],
      ['M3-02',4,'M3×12 socket-cap mounting screw','Aircraft side:3.5 mm frame plus0.5 mm washer','Standard hardware'],
      ['M3-03',4,'M3 mounting washer','OD6 / ID3.2 / thickness0.5 mm; aircraft side','Standard hardware'],
      ['M3-04',4,'M3×12 flat-head payload screw','Projects8.2 mm below the3.8 mm adapter; see POD-01 mating requirement','Standard hardware'],
      ['POD-01',4,'Payload-owned M3 metal threaded attachment','Provide≥3 mm effective metal thread engagement and≥8.7 mm unobstructed depth, or a through hole, below the adapter mating face; its mass counts within454 g','Specified interface; supplied by payload'],
      ['PAD-01',4,'PORON4701-30 foam disc, diameter4 ×2.36 mm free','Nominal320 kg/m³; installed thickness1.77 mm; force must be measured','Existing R4 material basis'],
      ['PAD-02',4,'467MP adhesive disc, diameter4 ×0.06 mm','Bond foam to the departing adapter','Existing R4 material basis'],
      ['PAD-03',1,'Lower cradle shim,21 ×23 ×0.3 mm installed','Cut suitable pad stock; set thickness on the purchased case','Measured fit item'],
      ['PAD-04',1,'Upper clamp shim,21 ×4 ×0.3 mm installed','Cut suitable pad stock; set thickness on the purchased case','Measured fit item']
    ]
    with (out/'bom.csv').open('w',newline='') as f:
        writer=csv.writer(f);writer.writerow(['item','quantity','description','specification','source']);writer.writerows(rows)
    inspection=[
      ['Retained cartridge','Outside envelope','85.6 ×54 ×20 mm','No rigid retained part exceeds the envelope; test with a cutout coupon.'],
      ['Host cutout','Opening','86.2 ×54.6 mm','Nominal0.3 mm clearance per side; actual wing-material fit still requires checking.'],
      ['Host mount','Four hole centers','Front(10,10)/(75.6,10); rear(10.5,44.8)/(75.1,44.8) mm','Use the actual CAD pattern and template; the rear pair is staggered inward.'],
      ['Keeper','Guide bar','3 ×3 mm nominal','Finish straight and free-sliding; preserve the reviewed section.'],
      ['Guide','Bore','3.6 ×3.6 mm nominal','Use a fit coupon; verify running clearance and maximum float.'],
      ['Yoke','Slot width','4.4 mm nominal','The smooth4 mm sleeve must slide without wedging.'],
      ['Lug','Thickness','3.5 mm nominal','Fit the4.1 mm socket; nominal0.3 mm clearance on each side.'],
      ['Release','Measured fully open lug clearance','At least0.5 mm','Measure the actual calibrated endpoint, including lateral play.'],
      ['Preload','Foam thickness','2.36 mm free /1.77 mm installed','Measure force;25% compression is a geometry target.'],
      ['Servo','Purchased fit','MG90D at5 V; operating range4.8–6.6 V','Inspect shaft, horn, supplied screw and wire exit.'],
      ['Aircraft frame','Mounting fasteners','M3×12 plus0.5 mm washer and3.5 mm frame','Verify full nut engagement and that screws are not bottomed.'],
      ['Payload interface','Threaded metal mates','At least3 mm metal engagement; at least8.7 mm free depth or through hole','The M3×12 screws project8.2 mm below the adapter; include payload attachment mass within454 g.']
    ]
    with(out/'dimensional-inspection.csv').open('w',newline='') as f:
        writer=csv.writer(f);writer.writerow(['part_or_interface','feature','nominal_or_limit','acceptance']);writer.writerows(inspection)
