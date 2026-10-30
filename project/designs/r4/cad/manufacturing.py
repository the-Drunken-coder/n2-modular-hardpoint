"""R4 inspectable drawing sheets, controlled fits, BOM and calibration coupons."""
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
      '<text x="38" y="70" class="sub">N2 / R4 prototype · All dimensions mm · Orthographic edge projections (hidden edges included)</text>',
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
    chunks.append('<text x="40" y="878" font-size="12">R4 manufacturing definition · Dimensional prototype only · No material or flight qualification implied</text></svg>')
    path.parent.mkdir(parents=True,exist_ok=True);path.write_text('\n'.join(chunks)+'\n')


def generate(out,g,P,box,cyl,sha):
    drawings=out/'drawings';drawings.mkdir(exist_ok=True)
    sheet(drawings/'R4-01_receiver.svg','R4-01 · Standalone receiver core',g['receiver_core'].val(),[
      'Base: 100 × 55 × 4.8; corner radii1.5.',
      'Datum A: Z−1.6; B: X0; C: Y−26.',
      '4 × host bore Ø3.4; acceptØ3.30–3.50.',
      'Host centers: X6/94; Y−20/23 (88 × 43 pitch).',
      'Keeper channel: 3.6 × 3.6; finish3.50–3.70.',
      'Long guide X30.6–51; nominal length20.4.',
      'Two servo holes Ø2.2; finish2.10–2.30.',
      'Servo centersX55/83.6; Z10.5; axisY.',
      'Pad pocketsØ4.2 ×0.23deep; floorZ21.47.',
      'Seat landsZ23.05; loaded adapterZ23.3.',
      'Removable M3×10 open stop; insert keeper first.'
    ],['Print A down. Receiver needs removable support beneath seat-deck patches; do not trap support in guide channels.',
       'Ream/finish critical guide and fastener bores. Clean all sliding faces; verify with matching coupons before assembly.',
       'Pad pocket depth includes0.06mm467MP adhesive +1.77mm compressed PORON. Measure actual preload.'])
    sheet(drawings/'R4-02_adapter.svg','R4-02 · Payload adapter and supported retaining lug',g['payload_adapter'].val(),[
      'Flange: 34 × 34 × 4; Z23.3–27.3.',
      'Datum A: payload mounting faceZ27.3.',
      '4 × Ø3.4 bores; centersX19.5/44.5,',
      'Y0.5/25.5 (25 × 25 pitch).',
      'Underside90° CSK Ø7.0,1.80deep.',
      'Lug X thickness3.50; finish 3.40–3.60.',
      'Lug Y width9.20; minimum 9.10.',
      'Cross opening4.6wide ×3.6high.',
      'Remaining side webs2.30; minimum 2.20.',
      'Retaining floor 3.10; minimum 3.00.',
      'Key1 slotX3.4; key2 slotX4.4.',
      'Both key slotsY2.6; face-position±0.10.'
    ],['Print broad payload mounting face down (inverted from assembly). Lug opening bridges4.6mm; inspect the bridge roof.',
       'Assemble countersunk payload bolts to the payload/test panel while the adapter is removed from the receiver.',
       'Countersunk heads must be flush or recessed≤0.1mm; protruding heads interfere with proper interface seating.'])
    sheet(drawings/'R4-03_keeper.svg','R4-03 · Integral keeper, yoke and stop tab',g['keeper'].val(),[
      'Datum A: flat sideY8.5; print this side down.',
      'Keeper bar: 3 × 3; finish 2.95–3.05 each.',
      'TipX25.5; bar extends toX63.',
      'Yoke thickness3; finish 2.90–3.10.',
      'Slot width4.4; finish 4.30–4.50.',
      'Slot X center 67.5; end centers Z9.5/19.',
      'Slot end radii2.2; total slot height 13.9.',
      'Sleeve: CU-2004 Ø4 × ID2.2 × L4.',
      'Sleeve acceptanceOD3.95–4.05,L3.90–4.10.',
      'Captive stop tabX61–64,Y11.3–22.',
      'Nominal travel10.5; lug clearat4.8.',
      'Do not clamp the yoke between washers.'
    ],['Print on flat sideY8.5 with positiveY upward. Stop tab grows from a supported bar footprint; integral features stay together.',
       'Deburr and polish slot bearing edges without enlarging beyond the acceptance band. Do not lubricate foam pads.',
       'Check smooth manual travel and measure extraction force through the entire stroke before powered testing.'])
    inspections=[
      ('receiver_guide_width',3.6,3.5,3.7,'mm','Measure acrossY at entrance, center and exit after finishing.'),
      ('receiver_guide_height',3.6,3.5,3.7,'mm','Check Z roof/floor gap with square gauge; remove support scars.'),
      ('keeper_bar_width',3,2.95,3.05,'mm','Measure both guide-bearing regions.'),
      ('keeper_bar_height',3,2.95,3.05,'mm','Measure both guide-bearing regions.'),
      ('yoke_vertical_end_clearance',.6,.4,2,'mm','Measure follower-to-slot-end clearance throughout travel with keeper held both against roof and floor; there must be no vertical end bearing.'),
      ('yoke_slot_width',4.4,4.3,4.5,'mm','Check full straight slot; do not infer width from caliper tips in rounded ends.'),
      ('yoke_thickness',3,2.9,3.1,'mm','Measure follower area.'),
      ('follower_od',4,3.95,4.05,'mm','Receiving inspection; catalog does not specifyOD tolerance.'),
      ('follower_length',4,3.9,4.1,'mm','Catalog length tolerance±0.1.'),
      ('follower_id',2.2,2.1,2.3,'mm','Catalog ID tolerance±0.1; M2 screw must pass freely.'),
      ('lug_x_thickness',3.5,3.4,3.6,'mm','Finish without removing retaining-floor material.'),
      ('lug_side_web',2.3,2.2,2.4,'mm','Inspect both side webs; no voids or damaged bridge junction.'),
      ('lug_floor',3.1,3,3.2,'mm','Measure remaining floor under rectangular opening.'),
      ('key_minimum_face_gap',.3,.1,.5,'mm','Per mating face after finished face-position errors of ±0.1 each; measure the assembled gap, not nominal slot width alone.'),
      ('host_bore',3.4,3.3,3.5,'mm','4 places.'),
      ('servo_bore',2.2,2.1,2.3,'mm','2 places.'),
      ('horn_follower_hole',2.1,2.05,2.15,'mm','Open the existing first MS-I25 Ø1 hole at R7.5; preserve its location.'),
      ('horn_width_at_follower',6.5,4.5,7.0,'mm','Outline nominal is a drawing-based envelope; inspect actual width≥4.5 before drilling.'),
      ('foam_free_thickness',2.36,2.124,2.596,'mm','Supplier±10% thickness band; measure unloaded disc before installation.'),
      ('pad_pocket_floor_z',21.47,21.42,21.52,'mm','Relative to core coordinateA=Z−1.6; total fromA23.07.'),
      ('assembled_sleeve_end_clearance',.7,.3,1.1,'mm','Actual rear-yoke-to-washer clearance; receiving/assembly measurement supersedes stack estimate.'),
      ('assembled_sleeve_front_clearance',.3,.1,.5,'mm','Measure actual front-yoke-to-horn gap; receiving/assembly measurement supersedes stack estimate.'),
      ('open_keeper_tip_clearance',4.7,.5,7,'mm','Distance from keeper tip to lug +X face at the 9.5 mm operating position (4.7 nominal); accept ≥0.5 measured. The 10.5 mm limit gives 5.7 nominal.'),
    ]
    with (out/'dimensional-inspection.csv').open('w',newline='') as f:
        w=csv.writer(f);w.writerow(['feature','nominal','minimum','maximum','units','method']);w.writerows(inspections)
    data={'revision':'R4','status':'Defined inspection requirements; no physical measurements recorded',
      'measurements':[dict(zip(['feature','nominal','minimum','maximum','units','method'],row)) for row in inspections],
      'tolerance_basis':'Finished feature acceptance targets, not unverified printer capabilities.',
      'stack_cases':[
        {'name':'Guide/bar total clearance','minimum_mm':.45,'maximum_mm':.75,'basis':'guide3.50..3.70 minusbar2.95..3.05'},
        {'name':'Slot/sleeve diametral clearance','minimum_mm':.25,'maximum_mm':.55,'basis':'slot4.30..4.50 minussleeve3.95..4.05'},
        {'name':'Foam compression, nominal installed1.77','minimum_percent':(1-1.77/2.124)*100,'maximum_percent':(1-1.77/2.596)*100,'basis':'Supplierfoam±10% thickness only; stack heights/adhesive/creep add variation.'}
      ]}
    (out/'dimensional-inspection.json').write_text(json.dumps(data,indent=2)+'\n')
    bom=[
      ('P01','R4-01','Receiver core',1,'PAHT-CF intended','One structural print; proposed settings and inspection apply','parts/receiver_core_print.stl','No measured directional allowables.'),
      ('P02','R4-02','Adapter and retaining lug',1,'PAHT-CF intended','One structural print','parts/payload_adapter_print.stl','Flange34×34;4M3 interface.'),
      ('P03','R4-03','Keeper, yoke and stop tab',1,'PAHT-CF intended','One structural print','parts/keeper_print.stl','Print on its flat Y side.'),
      ('A01','Hitec32065S / HS-65MG','Micro servo',1,'Purchased','Fixed nominal 5 V;12.5g excluding horn','https://www.hiteccs.com/actuators/product-details/HS-65MG','Vendor-linked HB STEP used only as case-fit reference; inspect actual MG.'),
      ('A02','Hitec55718 / MS-I25','Micro 25T horn and suppliedretaining screw',1,'Engineeringplastic/steel','Open first R7.5 hole to Ø2.1; trim opposite arm at 4.5 mm from the axis','https://hitecrcd.com/hs-65-65mg-5065mg-horn-hdwr/','Keep active arm. Match Micro 25T; standardfullsize25Tnotinterchangeable.'),
      ('A03','HiroSugiCU-2004','Fixed sliding follower sleeve',1,'SUS303','OD4 /ID2.2±0.1 /L4±0.1mm','https://us.c.misumi-ec.com/book/HSK1_USA_M01/pdf/0154.pdf','Clamped against horn; does not roll.'),
      ('F01','ISO4762 M2×10','Follower screw',1,'Steel','Socket cap, M2×0.4','ISO4762','Use an M2 washer and prevailing-torque nut; clamp the sleeve, not the printed slot.'),
      ('F02','ISO4762 M2×12','Servo mount screw',2,'Steel','Socket cap, M2×0.4','ISO4762','6 mm printed wall + 2 mm servo ear + washers + locknut; verify grip.'),
      ('F03','ISO7089 M2','M2 plainwasher',5,'Steel','ID2.2 OD5 thickness0.3','ISO7089','4 servo interface washers and 1 follower washer.'),
      ('F04','ISO10511 M2','M2 prevailing-torque nut',3,'Steel/nylon','AF4; height2.8maximum envelope','ISO10511','Replace if locking resistance is lost.'),
      ('F05','ISO4762 M3×16','Host attachment screw',4,'Steel','M3×0.5, socketcap','ISO4762','Length for a 3 mm bench host only; use the grip-length formula for integration.'),
      ('F06','ISO7092 / DIN433 M3','M3 small-series plainwasher',13,'Steel','ID3.2 OD6 thickness0.5','https://www.jcfasteners.com/wp-content/uploads/2019/10/ISO-7092-Small-OD-Washer-B4iD10-SS304.pdf','8 host, 4 payload, 1 open-stop washer.'),
      ('F07','ISO10511 M3','M3 prevailing-torque nut',9,'Steel/nylon','AF5.5; modeledheight4maximum envelope','ISO10511','4 host, 4 payload, 1 open-stop nut.'),
      ('F08','ISO10642 M3×14','Payload interface screw',4,'Steel','90° flathead; total length 14 includes the head','ISO10642','Head flush with underside; 3 mm payload test-panel grip.'),
      ('F09','ISO4762 M3×10','Removable open-stop screw',1,'Steel','M3×0.5 socketcap;headØ5.5×3','ISO4762','Install after keeper insertion with M3 washer and captured nut; do not stall the servo against the stop.'),
      ('C01','Rogers PORON4701-30','Preload foam disc',4,'320kg/m3 polyurethane foam','Ø4 ×2.36mm free thickness;1.77 mm nominal assembled','https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf','Purchase sheet and punch discs; measure preload, do not infer force from thickness alone.'),
      ('C02','3M467MP','Adhesive disc',4,'200MP acrylic transfer adhesive','Ø4 ×0.06mmnominal','https://multimedia.3m.com/mws/media/2366204O/3M-Adhesive-Transfer-Tape-467MP.pdf?pif=000024','Replace with foam; assess the bond to the actual printed material.'),
      ('T01','Bench fixture context','Host test panel',1,'Rigid test fixture','3.00 mm grip panel, 4 holes on an 88 × 43 pitch','drawings/R4-01_receiver.svg','Not part of the hardpoint; aircraft backing is outside this design.'),
      ('T02','Payload fixture context','Payload test panel',1,'Rigid test fixture','3.00mm grip panel,4 holes25×25 pitch','drawings/R4-02_adapter.svg','Not part of the hardpoint; include its mass in the departing payload test mass.'),
    ]
    with (out/'bom.csv').open('w',newline='') as f:
        w=csv.writer(f);w.writerow(['item','part_number','description','quantity','material','specification','source','notes']);w.writerows(bom)
    process={
      'revision':'R4','status':'Proposed first-article recipe; no sliced toolpath or printed specimen has been validated',
      'filament':'Bambu PAHT-CF','source':'https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf',
      'drying':{'temperature_C':80,'hours':12,'printing_storage_max_RH_percent':20},
      'machine':{'enclosed':True,'hardened_nozzle_diameter_mm':0.6,'hardened_feed_gears':True,'record_actual_chamber_temperature':True},
      'slicing':{'nozzle_temperature_C':285,'bed_temperature_C':90,'layer_height_mm':0.2,'nominal_line_width_mm':0.62,'perimeters':6,
        'top_layers':6,'bottom_layers':6,'infill_percent':100,'infill_pattern':'alternating rectilinear',
        'external_perimeter_mm_s':40,'internal_infill_mm_s':60,'bridge_mm_s':20,'first_layer_mm_s':20,
        'ordinary_part_fan_percent':20,'bridge_fan_percent_max':40},
      'orientations':{'receiver_core':'Flat mounting face A on bed, +Z up; print STL is already oriented.',
        'payload_adapter':'Broad payload face A on bed, −Z up; print STL is already oriented.',
        'keeper':'Flat side Y8.5 on bed, +Y up; print STL is already oriented.'},
      'support':{'receiver_core':'Local removable support under seat deck and required pockets; verify removal paths and inspect all guides.',
        'payload_adapter':'4.6 mm lug-window bridge; inspect before using the part.',
        'keeper':'Flat side orientation; confirm stop-tab paths are supported. Integral features are not separate prints.'},
      'required_records':['slicer name/version/project','printer','material lot','drying and humidity','actual temperatures','orientation','finished feature measurements','specimen ID'],
      'qualification':False}
    (out/'print-process.json').write_text(json.dumps(process,indent=2)+'\n')
    (drawings/'index.html').write_text('''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>N2 R4 dimensioned drawings</title><style>body{font:16px system-ui;background:#f5f5f1;color:#182d35;max-width:1400px;margin:40px auto;padding:0 24px}h1{font-size:32px}img{width:100%;border:1px solid #ccd5d9;margin:18px 0 40px}a{color:#9c501e}</style><h1>N2 R4 manufacturing drawings</h1><p>All dimensions are millimetres. Drawings show actual CAD edge projections, including hidden edges. Numeric dimensions and the finished inspection contract govern. This is a prototype definition; no flight rating is assigned.</p><p><a href="../bom.csv">Bill of materials</a> · <a href="../dimensional-inspection.csv">Dimensional acceptance</a> · <a href="../print-process.json">Print recipe</a> · <a href="../coupons.json">Fit coupons</a></p><h2>Receiver core</h2><a href="R4-01_receiver.svg">Open receiver drawing</a><img src="R4-01_receiver.svg" alt="R4 receiver core dimensioned drawing"><h2>Payload adapter</h2><a href="R4-02_adapter.svg">Open adapter drawing</a><img src="R4-02_adapter.svg" alt="R4 adapter dimensioned drawing"><h2>Keeper and yoke</h2><a href="R4-03_keeper.svg">Open keeper drawing</a><img src="R4-03_keeper.svg" alt="R4 keeper and yoke dimensioned drawing"></html>''')
    # Coupons are optional calibration prints, not extra assembly parts.
    coupons=out/'coupons';coupons.mkdir(exist_ok=True)
    female=box(0,24,0,26,0,8)
    for i,width in enumerate((3.3,3.4,3.6,3.8)):
        yc=4+i*6;female=female.cut(box(-.1,24.1,yc-width/2,yc+width/2,2.2,5.8))
    male=box(0,8,0,7,0,5).union(box(7.9,38,2,5,0,3))
    slot=box(0,34,0,23,0,3)
    for i,width in enumerate((4.2,4.4,4.6)):
        xc=6+i*11
        hole=box(xc-width/2,xc+width/2,5,18,-.1,3.1)
        hole=hole.union(cyl(width/2,3.2,(xc,5,-.1))).union(cyl(width/2,3.2,(xc,18,-.1)))
        slot=slot.cut(hole)
    coupon_rows=[]
    for name,shape,description in [('guide_coupon',female,'Four guide channels, widths 3.3/3.4/3.6/3.8 from low to high Y; all heights 3.6.'),
      ('keeper_gauge',male,'3 × 3 square male gauge with grip; 20 mm engagement required.'),
      ('follower_coupon',slot,'Slots 4.2/4.4/4.6 wide from low to high X; test the actual CU-2004 sleeve.')]:
        step=coupons/f'{name}.step';stl=coupons/f'{name}_print.stl'
        cq.exporters.export(shape,str(step));cq.exporters.export(shape,str(stl),tolerance=.08,angularTolerance=.12)
        coupon_rows.append({'id':name,'description':description,'step':str(step.relative_to(out)),'stl':str(stl.relative_to(out)),
            'step_sha256':sha(step),'stl_sha256':sha(stl),'assembly_part':False})
    (out/'coupons.json').write_text(json.dumps({'coupons':coupon_rows,'instruction':'Print with the intended material and profile; identify compensation needed to achieve finished acceptance. Coupon fit does not qualify strength.'},indent=2)+'\n')
