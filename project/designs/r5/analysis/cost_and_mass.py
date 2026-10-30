#!/usr/bin/env python3
"""Account for R5 nominal material, hardware and explicitly unquoted allowances."""
from pathlib import Path
import hashlib
import json
import math

ROOT = Path(__file__).resolve().parents[1]


def main():
    source = ROOT / 'manufacturing/assembly.json'
    assembly = json.loads(source.read_text())
    rows = []
    for p in assembly['parts']:
        role, kind, pid = p['installation']['role'], p['kind'], p['id']
        if kind == 'reservation':
            continue
        density = None
        basis = 'Planning density times simplified nominal CAD volume; weigh the actual part.'
        if kind in ('printed', 'context'):
            density = 1.06
            basis = 'Nominal solid CAD volume times supplier typical PAHT-CF density.'
        elif pid == 'servo':
            mass = 13.4
            basis = 'Adafruit product 1143 listed mass; lead convention not separately established.'
        elif pid == 'horn':
            density = 1.15
        elif pid == 'sleeve':
            density = 2.70
        elif kind == 'purchased':
            density = 7.85
        elif pid.startswith('pad_adhesive_'):
            density = 1.0
        elif pid.startswith('pad_'):
            mass = math.pi * 2**2 * 2.36 / 1000 * .320
            basis = 'Uncompressed foam volume times selected 320 kg/m3 density; compression preserves mass.'
        else:
            density = 1.20
            basis = 'Unmeasured cradle/clamp pad density allowance; actual pad stock is a fit item.'
        if density is not None:
            mass = p['volume_mm3'] / 1000 * density
        rows.append(dict(id=pid, role=role, kind=kind, volume_mm3=p['volume_mm3'],
                         density_g_cm3=density, mass_g=mass, basis=basis))
    total = lambda predicate: sum(r['mass_g'] for r in rows if predicate(r))
    print_mass = total(lambda r: r['kind'] == 'printed')
    material_cost = print_mass / 1000 * 100 * 1.15
    retained = total(lambda r: r['role'] == 'module')
    departing = total(lambda r: r['role'] == 'payload')
    host_fasteners = total(lambda r: r['role'] == 'mount_screw')
    frame = total(lambda r: r['id'] == 'wing_frame')
    hatch = total(lambda r: r['id'] == 'wing_hatch')
    costs = [
        dict(item='MG90D servo, with stock horn/hardware',low_USD=9.95,high_USD=9.95,
             basis='Observed single-unit listing, 2026-10-30',url='https://www.adafruit.com/product/1143'),
        dict(item='One aluminum follower sleeve',low_USD=.719,high_USD=.719,
             basis='Allocated from a $7.19 ten-pack; full first-pack cash cost is separate',url='https://www.amazon.com/dp/B0CQF66RR7'),
        dict(item='Six PAHT-CF prints, with 15% process allowance',low_USD=material_cost,high_USD=material_cost,
             basis='$100/kg planning filament price, not a current quotation; CAD solid mass plus 15%'),
        dict(item='Remaining generic screws, nuts and washers',low_USD=2.5,high_USD=5.,
             basis='Unquoted consumed-hardware allowance, including cartridge, payload and host fasteners'),
        dict(item='Foam, adhesive and servo clamp pads',low_USD=.5,high_USD=1.5,
             basis='Unquoted allocated-material allowance; does not buy full stock sheets'),
    ]
    data = dict(revision='R5',assembly_sha256=hashlib.sha256(source.read_bytes()).hexdigest(),
        analysis_source_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
        measured_mass=False,rows=rows,totals_g=dict(six_prints=print_mass,
            retained_cartridge=retained,modeled_departing_interface=departing,
            host_mount_fasteners=host_fasteners,mechanical_package=retained+departing+host_fasteners,
            illustrative_frame=frame,illustrative_hatch=hatch),
        costs=costs,mechanical_consumed_cost_USD=[sum(c['low_USD'] for c in costs),sum(c['high_USD'] for c in costs)],
        external_harness_allowance_USD=[1.,3.],first_servo_and_sleeve_pack_USD=17.14,
        not_in_cost=['Shipping and tax','Printer, labor, electricity and failed prints beyond the allowance',
          'Complete hardware/foam/filament stock purchases','Host wing frame and hatch',
          'Offboard controller, buffer, switched power, regulated supply and aircraft integration'],
        mass_exclusions=['Actual mating pod thread/nut structure','External harness and strain relief',
          'Offboard controls and power supply','Actual aircraft reinforcement; illustrative geometry is itemized separately'],
        density_sources=dict(PAHT_CF='https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf',
            foam='https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf'))
    dest = ROOT / 'docs/cost-and-mass.json'
    dest.write_text(json.dumps(data,indent=2,allow_nan=False)+'\n')
    lines = ['# R5 cost and mass account','',
      '**The actuator is $9.95. The modeled mechanical parts consume about '
      f"${data['mechanical_consumed_cost_USD'][0]:.2f}–${data['mechanical_consumed_cost_USD'][1]:.2f} per unit under the allowances below.** "
      'This is not a complete first-purchase checkout or a quotation for an assembled product.','',
      'Prices were checked on 2026-10-30, before shipping and tax. The structured '
      '[account](cost-and-mass.json) records the CAD/source hashes and each mass assumption.','',
      '## Consumed mechanical cost','',
      '| Item | US dollars per hardpoint | Basis |','| --- | ---: | --- |']
    for c in costs:
        value=f"${c['low_USD']:.2f}" if c['low_USD']==c['high_USD'] else f"${c['low_USD']:.2f}–${c['high_USD']:.2f}"
        item=f"[{c['item']}]({c['url']})" if 'url' in c else c['item']
        lines.append(f"| {item} | {value} | {c['basis']} |")
    lines += ['',f'The six nominal solid prints total **{print_mass:.2f} g**. At the explicit '
      f'$100/kg planning assumption and 15% process allowance, their material consumption is ${material_cost:.2f}. '
      'A slicer estimate and the actual filament invoice must replace this allowance before ordering.',
      '', 'Add an unquoted **$1–3** allowance for the wing-side harness/connector if needed. '
      'The controller, signal buffer, power switch and regulated supply are offboard and excluded. '
      'Reusing those aircraft or bench components changes the incremental cost; buying them new changes the checkout.',
      '', '**First purchase:** one servo and a complete ten-pack of sleeves cost **$17.14** before '
      'the remaining hardware, material stock, shipping and tax. A full filament spool, foam sheet '
      'and several fastener packs can make the first prototype substantially more expensive '
      'than its consumed-parts total. No complete $20 checkout is claimed.',
      '', '## Nominal mass','',
      '| Group | Estimated mass | Included |','| --- | ---: | --- |',
      f'| Retained cartridge | **{retained:.2f} g** | Five retained prints, listed servo, horn, follower, captive nuts, lid/clamp/stop hardware and pads |',
      f'| Departing interface modeled here | **{departing:.2f} g** | Adapter, four payload screws, free-volume foam and adhesive |',
      f'| Four aircraft mounting screws and washers | {host_fasteners:.2f} g | Host hardware outside the 20 mm cartridge |',
      f'| Mechanical package subtotal | {retained+departing+host_fasteners:.2f} g | The three rows above; excludes the pod and its mating hardware |',
      f'| Illustrative wing frame, if solid PAHT-CF | {frame:.2f} g | Example geometry only; actual aircraft reinforcement is not specified |',
      f'| Illustrative hatch, if solid PAHT-CF | {hatch:.2f} g | Example panel only; actual skin material and retention are aircraft-specific |',
      '', 'The **0.454 kg departing-mass requirement includes the adapter and every departing '
      'fastener and mating component**. Do not add the adapter on top of a 0.454 kg pod and '
      'claim the same 2 g load. The receiver-side module and host hardware belong in the aircraft mass account.',
      '', 'The retained cartridge is below the earlier 100 g soft planning goal by itself. '
      'That does **not** establish a complete installation below 100 g: the illustrative solid '
      'frame and hatch, external wiring and controls add mass. Optimize and weigh the actual '
      'aircraft installation after its structural load path is designed.',
      '', '## Calculation limits','',
      'Print masses use nominal solid CAD volume and the '
      '[Bambu PAHT-CF data sheet](https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf) '
      'typical density of 1.06 g/cm³. FDM voids, supports, finishing and moisture change actual mass. '
      'Metal hardware uses simplified CAD solids and an assumed steel density of 7.85 g/cm³; '
      'the aluminum sleeve uses 2.70 g/cm³ and the molded horn 1.15 g/cm³. These are planning '
      'estimates, not certified material identities or purchased-part masses.',
      '', 'Foam mass uses uncompressed geometry and the '
      '[selected PORON 4701-30 data](https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf) '
      '320 kg/m³ nominal density. Compression does not remove mass. Adhesive and shim densities '
      'are explicit estimates. The modeled cable envelope is not separately added to the '
      'servo listing mass; the external service harness remains unmeasured.',
      '', 'Reproduce this account with `python project/designs/r5/analysis/cost_and_mass.py`. '
      'Weigh the completed cartridge and departing assembly before load testing.']
    (ROOT/'docs/cost-and-mass.md').write_text('\n'.join(lines)+'\n')
    print(json.dumps(dict(totals_g=data['totals_g'],mechanical_consumed_cost_USD=data['mechanical_consumed_cost_USD'])))


if __name__ == '__main__':
    main()
