"""N2 supported cross-bolt only, unchanged P6 geometry. Units mm.

Creates an independent export tree; never overwrites the issued CAD.
Run: python cad/build_n2.py --output /absolute/new-directory
"""
from pathlib import Path
import argparse, json, os
import cadquery as cq
import common
from common import box, cyl, export_variant
from solenoid_parts import clamp_base, act_parts, part

TAB = [30.5, 34.0, -3.6, -0.8, 10.8, 13.7]
INDEX_CENTRES = [34.0, 37.0]

def _common_metadata():
    return {
        'departure_direction':'+Z, externally driven; orient +Z downward for a gravity bench test',
        'load_path':'Payload adapter cross-hole floor → printed keeper → printed receiver guide → installation-specific host mount. The armature supplies axial motion, not intended transverse payload support.',
        'release_sequence':[
            'Retained: spring-return keeper crosses the seated adapter lug.',
            'Unlock: energize the coil; its rear button pulls the open-top fork and keeper +X through nominal 3 mm.',
            'Clear: gravity or another external force moves the adapter +Z while the keeper stays open. Unlocking alone does not supply that force.'
        ],
        'reset':'Support the adapter, hold the tab open, insert the lug in −Z, then release the tab and inspect actual keeper engagement. Do not force the lug against a closed keeper.',
        'assembly_order':[
            'Insert both M2 nuts from the underside.',
            'With the actuator and adapter absent, feed the keeper from the +X end through the open guide.',
            'Lower the complete solenoid from +Z so the rear button enters the open keeper fork.',
            'Lower the clamp and install the two M2 × 16 screws.',
            'Check unloaded manual travel, then attach the supported adapter with the keeper held open.'
        ],
        'bill_of_materials':[
            {'item':'Printed receiver','quantity':1},
            {'item':'Printed adapter','quantity':1},
            {'item':'Printed keeper','quantity':1},
            {'item':'Printed clamp','quantity':1},
            {'item':'Adafruit 2776 mini solenoid including captive armature, spring and leads','quantity':1,'mpn':'2776'},
            {'item':'ISO 4762 M2 × 16 socket screw','quantity':2},
            {'item':'ISO 4032 M2 nut','quantity':2}
        ],
        'part_count':{'printed':4,'purchased_solenoid_units':1,'separate_screws':2,'separate_nuts':2,'cad_objects':13},
        'local_control':'P6 shared off-board 5 V pulse driver and two-button controller. No payload power or data interface. No direct RC requirement.',
        'evidence':'CAD concept and sampled rigid-motion checks only. No physical print, load, release, fatigue, wear or aircraft test performed.'
    }

# Design parameters (P12). Baseline P6-01 values: overlap 0.6 mm, roof +0.0 mm.
# DISTAL_OVERLAP moves the retained keeper tip -X; with the fixed 3 mm stroke
# the lug clears only if tip + 3 > 28.2, so overlap must stay < 1.3 mm.
# ROOF_EXTRA raises the top of both receiver guide roofs (nominal Z 12.7).
# P12 issue: +2.0 mm (roof top Z 14.7; adapter flange underside stays at Z 16).
DISTAL_OVERLAP=float(os.environ.get('N2_DISTAL_OVERLAP',0.6))
ROOF_EXTRA=float(os.environ.get('N2_ROOF_EXTRA',2.0))
# ROOF_FILLET rounds the inside corner where a keeper-channel side wall meets
# the roof underside (Z 10.5), the P11/P12 governing stress location.
# The keeper's 3 x 3 arm corner sits 0.3 mm from that corner in Y and Z, so a
# quarter-round must stay below ~1.45 mm. 0 = sharp corner (P12).
ROOF_FILLET=float(os.environ.get('N2_ROOF_FILLET',0.3))

def design_n2():
    vid='N2'
    base,cap,hardware=clamp_base(vid,38,17)
    base=base.cut(cyl(3.75,2.3,(-2.2,0,8.7),(1,0,0)))
    # The same body, fork, tab and test hole keep the actuator coupling simple.
    keeper=(box(22,34,-4,4,6.5,10.9)
            .union(box(30.5,34,2.5,11.5,7.2,10.2))
            .union(box(26.5-DISTAL_OVERLAP,34,8.5,11.5,7.2,10.2)))
    keeper=keeper.cut(box(23.35,24.05,-2.2,2.2,6.4,11.1))
    keeper=keeper.cut(box(21.8,23.35,-1.5,1.5,6.4,11.1))
    keeper=keeper.union(box(*TAB)).cut(cyl(1,4.7,(29,0,6.4))).clean()
    # Two load-bearing roof regions straddle the adapter. The distal roof is
    # integral with the receiver, so there is no extra print or fastener.
    distal=(box(23.4,26.5,5.8,14.2,3.1,12.7+ROOF_EXTRA)
            .cut(box(23.3,26.6,8.2,11.8,6.9,10.5)))
    proximal=(box(28.5,37.4,5.8,14.2,3.1,12.7+ROOF_EXTRA)
              .cut(box(28.4,37.6,2,11.8,6.9,10.5)))
    wall=box(23,38,-6,-4.3,3.1,12.7)
    for x in INDEX_CENTRES:
        wall=wall.cut(box(x-.3,x+.3,-6.01,-4.29,12.35,12.71))
    base=base.union(distal).union(proximal).union(wall)
    # A lower pocket locates the payload laterally independently of the keeper.
    base=base.union(box(22.8,31,4.6,15.4,3.1,6.6))
    base=base.cut(box(26.5,28.5,6.1,13.9,3.2,16)).clean()
    if ROOF_FILLET>0:
        # X-parallel inside edges where the channel walls meet the roof underside.
        for y in (8.2,11.8):
            base=base.edges(cq.selectors.BoxSelector((23.3,y-.05,10.45),(37.5,y+.05,10.55))).edges('|X').fillet(ROOF_FILLET)
    # The lug is narrowed to fit distal engagement + release clearance within
    # the unchanged 3 mm stroke. This is an explicit strength/printing tradeoff.
    adapter=box(26.8,28.2,6.4,13.6,3.8,16).union(box(24,37,5,17,16,19))
    adapter=adapter.cut(box(26.5,28.5,7.7,12.3,6.9,10.5))
    for y in (8,14):adapter=adapter.cut(cyl(1.6,4,(33,y,15.5)))
    adapter=adapter.clean()
    move=[{'u':0},{'u':.5,'translation':[3,0,0]},{'u':1,'translation':[3,0,0]}]
    parts=[
      part(vid,'receiver','Receiver with proximal and distal keeper supports','printed',base,explode=[0,0,-9],
           print_note='Base to bed. Both guide roofs require accessible local support and careful running-face cleanup. Preserve the distal roof; do not split it from the print.'),
      part(vid,'adapter','Thin cross-hole payload lug','payload',adapter,explode=[0,0,15],
           keyframes=[{'u':0},{'u':.5},{'u':1,'translation':[0,0,22]}],
           print_shape=adapter.rotate((0,0,0),(1,0,0),180),
           print_note='Flange to bed using supplied inverted print STL. The 1.4 mm lug thickness is a deliberate unqualified tradeoff. Inspect the hole bridge and 1.3 mm side webs; reject incomplete walls.'),
      part(vid,'keeper','Bridge-supported cross-bolt with inspection tab','moving',keeper,explode=[13,0,4],keyframes=move,
           print_note='Main body underside to bed. Retaining arm is raised 0.7 mm and needs local support. Clean sliding faces without reducing retained tip engagement.'),
      part(vid,'clamp','Two-screw solenoid clamp','printed',cap,explode=[0,0,12],
           print_shape=cap.rotate((0,0,0),(1,0,0),180),print_note='Top bridge to bed, legs upward.')
    ]+act_parts(vid)+hardware
    metadata=_common_metadata()
    metadata.update({
      'concept_summary':'Supported cross-bolt: a receiver bridge supports the keeper on both sides of the adapter while retained.',
      'description':'Integral distal keeper bearing trades a thinner lug and tighter stroke budget for a shorter supported retaining span.',
      'why_consider':'Four prints and the same purchased hardware as N1, with an additional retained-state support rather than a larger actuator.',
      'main_risk':'Only 0.6 mm nominal distal engagement is available. That support is lost early during withdrawal; loaded release again becomes overhung before the lug clears. The lug is thinner than N1.',
      'load_path':'Adapter cross-hole floor → 3 × 3 mm keeper → receiver roofs on both sides of the lug when retained → host mount. During withdrawal the distal support disengages before the adapter does, leaving the proximal guide to react the load.',
      'actuator':{'name':'Mini push-pull solenoid','mpn':'Adafruit 2776','url':'https://www.adafruit.com/product/2776','nominal_stroke_mm':3,
                  'fidelity':'Drawing-based 20.5 × 12 × 11 mm frame, Ø4 armature and rear Ø1.6 stem / Ø3 button. Internal coil, spring, button thickness and wire routing include assumptions; measure purchased hardware.'},
      'dimensions':{'nominal_stroke_mm':3,'retained_keeper_tip_x_mm':25.9,'distal_support_x_mm':[23.4,26.5],
                    'proximal_support_x_mm':[28.5,37.4],'lug_x_mm':[26.8,28.2],
                    'lug_thickness_mm':1.4,'nominal_distal_engagement_mm':.6,
                    'open_tip_clearance_mm':.7,'retaining_bar_yz_mm':[3,3],
                    'distal_support_disengages_after_nominal_stroke_mm':.6,
                    'lug_clears_after_nominal_stroke_mm':2.3},
      'manufacturing':{'printed_parts':4,'material':'Unfilled PETG fit prototype, 0.4 mm nozzle, 0.16 mm layer, 5 walls; inspect slicer paths through the 1.4 mm lug.',
                       'qualification':'No proven strength, creep, loaded release or thermal duty. First print is for fit and force measurement.'},
      'notes':[
        'Unrated concept; no manufactured or tested specimen.',
        'Four printed parts, one Adafruit 2776, two M2 × 16 screws and two M2 nuts; host fasteners are installation-specific.',
        'The distal support improves the retained load path only while engaged. It does not guarantee lower peak release force.',
        'The 3 mm stroke budget forces the cross-hole lug to 1.4 mm thickness. This is a new geometry; P5 adapter FEA does not apply.',
        'Feed the keeper from +X before lowering the complete actuator. Never force it through the roof from above.',
        'The tab is a ground inspection and manual reset feature; shield it against accidental actuation. Remove the force-test hook before operation.',
        'No ejector or departure sensor. The adapter needs an external +Z force to clear.',
        'The included spring is shown only in its retained shape; full lead length and off-board controls are outside the assembly envelope.'
      ]
    })
    return parts,metadata

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output',type=Path,required=True,help='New output directory; created with cad/N2 exports beneath it.')
    args=ap.parse_args()
    target=args.output.expanduser().resolve()
    if target.exists():raise SystemExit('Output directory already exists. Choose a new directory to preserve issued files.')
    target.mkdir(parents=True)
    common.ROOT=target
    parts,metadata=design_n2()
    active=json.loads((Path(__file__).resolve().parent/'N2/active_metadata.json').read_text())
    metadata.update({k:v for k,v in active.items() if k not in ('id','name','revision')})
    export_variant('N2','Supported cross-bolt','Mini solenoid',parts,metadata)

if __name__=='__main__':main()
