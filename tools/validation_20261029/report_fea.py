#!/usr/bin/env python3
"""Build the compact P14 evidence report and auditable publication inventory."""
from pathlib import Path
import hashlib, json

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'project/analysis/validation_20261029/fea'

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def main():
    summary = json.loads((OUT / 'results_summary.json').read_text())
    if summary['missing_case_solves'] or summary['numeric_audit_failures']:
        raise SystemExit('Cannot issue complete report: missing solves or failed numeric audits.')
    rows = summary['rows']
    def row(study, part, case, h):
        return next(x for x in rows if (x['study'],x['part'],x['case'],x['mesh_target_mm'])==(study,part,case,h))
    def screen(study, part, case, h):
        return row(study,part,case,h)['PLA_assumed_stress_screen_N']
    def delta(a,b):
        return (b/a-1)*100
    baseline = []
    for part,case,coarse,fine in [('adapter','adapter__Z',.55,.4),('receiver','centered__Z',.8,.55),
                                  ('receiver','distal_ineffective__Z',.8,.55),('keeper','centered',.55,.4),
                                  ('keeper','distal_ineffective',.55,.4)]:
        a,b=screen('baseline',part,case,coarse),screen('baseline',part,case,fine)
        baseline.append({'part':part,'case':case,'coarse_h_mm':coarse,'fine_h_mm':fine,
                         'coarse_PLA_screen_N':a,'fine_PLA_screen_N':b,'change_percent':delta(a,b)})
    fixtures=[]
    for h in (.8,.55):
        for case in ('centered__Z','distal_ineffective__Z'):
            a,b=screen('fixture','receiver',case,h),screen('fixture','receiver',case+'_washers',h)
            fixtures.append({'h_mm':h,'case':case,'full_backing_PLA_screen_N':a,
                             'washer_PLA_screen_N':b,'change_percent':delta(a,b)})
    partial=[]
    states=json.loads((OUT/'stroke_states.json').read_text())
    for state in states:
        case=state['case'];a=screen('partial_adapter','adapter',case,.55);b=screen('partial_adapter','adapter',case,.4)
        k=screen('partial_keeper','keeper',case,.55)
        kfine=screen('partial_keeper_terminal_refine','keeper',case,.4) if case=='stroke_2p2mm' else None
        partial.append({**state,'adapter_h0p55_PLA_screen_N':a,'adapter_h0p4_PLA_screen_N':b,
                        'adapter_mesh_change_percent':delta(a,b),'keeper_h0p55_PLA_screen_N':k,
                        'keeper_h0p4_PLA_screen_N':kfine})
    maxima={key:max(abs(x[key]) for x in rows) for key in ['relative_free_residual','force_balance_error_N',
            'moment_balance_error_Nmm','gauge_reaction_norm_N','relative_mesh_volume_error']}
    findings={'source_commit':summary['source_commit'],'case_solves':len(rows),
       'meshes':len({(x['study'],x['part'],x['mesh_target_mm']) for x in rows}),
       'numeric_audit_failures':summary['numeric_audit_failures'],
       'interpretation':'Computed PLA stress screens only; no measured failure loads, qualified release loads or working-load ratings.',
       'baseline_mesh_sensitivity':baseline,'same_mesh_fixture_pairs':fixtures,'partial_contact_sensitivity':partial,
       'numeric_audit_maxima':maxima,
       'material_caution':'The baseline adapter is tension-governed; ideal washer cases are compression-governed; terminal adapter/keeper overlap is maximum-shear-governed. A tensile TDS ratio cannot validate those other material strengths.',
       'physical_test_status':'Not performed: no fabricated or measured specimens, actuator pull curves, assembly load tests, coupon tests, creep, vibration, wear, fatigue or loaded release.'}
    (OUT/'key_findings.json').write_text(json.dumps(findings,indent=2)+'\n')
    btable='\n'.join(f"| {x['part']} / {x['case']} | {x['coarse_h_mm']} → {x['fine_h_mm']} | {x['coarse_PLA_screen_N']:.3f} | {x['fine_PLA_screen_N']:.3f} | {x['change_percent']:+.2f}% |" for x in baseline)
    ftable='\n'.join(f"| {x['h_mm']} | {x['case']} | {x['full_backing_PLA_screen_N']:.3f} | {x['washer_PLA_screen_N']:.3f} | {x['change_percent']:+.2f}% |" for x in fixtures)
    ptable='\n'.join(f"| {x['stroke_mm']:.1f} | {x['remaining_lug_overlap_mm']:.1f} | {x['adapter_h0p55_PLA_screen_N']:.3f} | {x['adapter_h0p4_PLA_screen_N']:.3f} | {x['keeper_h0p55_PLA_screen_N']:.3f} | {x['keeper_h0p4_PLA_screen_N']:.3f}"+' |' if x['keeper_h0p4_PLA_screen_N'] is not None else f"| {x['stroke_mm']:.1f} | {x['remaining_lug_overlap_mm']:.1f} | {x['adapter_h0p55_PLA_screen_N']:.3f} | {x['adapter_h0p4_PLA_screen_N']:.3f} | {x['keeper_h0p55_PLA_screen_N']:.3f} | — |" for x in partial)
    report=f'''# P14 computational validation results

## Outcome

Completed **{len(rows)} actual finite-element case solves on {findings['meshes']} meshes**, using current P14 STEP solids and the unchanged frozen solver. The original coarse axial screens reproduce at their published precision. All stored numerical residual, equilibrium, material-volume and source-identity checks pass.

The new results identify two substantial limitations: **the real mounting boundary condition can govern before the previously quoted adapter screen, and reduced keeper-to-lug overlap does reduce the computed structural screen.** Mesh refinement also changes several raw stress screens materially. This work provides evidence for design decisions; it does not assign a working-load rating.

Source snapshot: `{summary['source_commit']}`. The study is of existing P14 only. Longer-stroke, thicker-lug, keyed-seat, positive-lock and sensing concepts have not been structurally modeled by these solves.

## What the numbers mean

Every primary force value below is a **PLA assumed local stress-screen crossing in newtons**, not a measured failure force. The solver uses homogeneous isotropic linear elasticity, E = 2200 MPa, Poisson ratio 0.35, and analyst thresholds of 25 MPa tension, 40 MPa compression and 15 MPa maximum shear. Loads are normalized to 1 N.

For each stress field the screen is the load at which the maximum normalized local stress index first reaches one. It is neither nonlinear collapse nor a calibrated printed-part fracture model. Dividing it by a safety factor does not validate the contact, fixture, process or environmental assumptions.

`results_summary.csv` includes the older 47/31 PAHT-CF multiplier as a clearly named **unvalidated sensitivity column**. It is not a new PAHT-CF constitutive model. This caveat matters especially because the washer cases below govern in compression and the terminal overlap cases govern in maximum shear, while 47/31 comes from tensile coupon strengths.

## 1. Baseline replay and focused refinement

The same P14 standard case definitions and their imprint boundaries were retained. Receiver sizes are 0.8 and 0.55 mm; adapter and keeper sizes are 0.55 and 0.40 mm. These are local mesh targets, not uniform element dimensions.

| Component / case | Mesh target, mm | Coarse screen, N | Refined screen, N | Change |
|---|---:|---:|---:|---:|
{btable}

The refined full-backing axial component minimum is the adapter's **20.697 N PLA screen**, compared with 22.213 N at the original mesh. Under the earlier scalar multiplier those become 31.380 N and 33.678 N respectively. The two-size check establishes sensitivity, not complete convergence or physical capacity.

The keeper's coarse full-contact and distal-ineffective results also reproduce the archived full-precision records. This is a reproducibility check of the selected mathematical problem, not validation of a printed assembly.

## 2. Actual P14 fixture sensitivity

Full-backing and washer cases were compared **on the same mesh at each resolution**, including the same imprinted washer boundaries. Full backing fixes the selected receiver underside in XYZ. The alternative fixes the two exposed washer annuli in XYZ, using the archived centers (5,14) and (35,-10) mm, inner radius 1.6 mm and outer radius 3 mm.

| Mesh target, mm | Retained contact state | Full backing screen, N | Ideal washer screen, N | Change to washers |
|---|---|---:|---:|---:|
{ftable}

At the refined mesh, the washer-supported receiver screens **12.986 N centered and 12.936 N with the distal support absent**, below the 20.697 N refined fully fixed adapter screen. This shows that the earlier adapter-governed assembly conclusion does not transfer automatically to a two-fastener installation.

The washer screens decrease about 15% when refined from 0.8 to 0.55 mm, and the critical compressive peak occurs at an ideal fixed-washer edge. Consequently these are **fixture sensitivities, not a prediction that a real screw joint fails at 12.94 N**. Real bolt preload, contact separation, washer compliance, backing flexibility, friction, slip and pull-through remain unmodeled. The payload adapter still assumes its whole external flange fixed; its real payload bolts and pod wall are also outside the model.

## 3. Reduced overlap during withdrawal

The adapter lug occupies X = 26.8–28.2 mm and the keeper starts at X = 25.9 mm. For withdrawal s, remaining overlap is:

`overlap(s) = min(1.4, max(0, 2.3 - s)) mm`.

Distal roof contact disappears at 0.6 mm travel. The following four states are after that loss, with actual reduced lug pressure footprints. The keeper STEP is kept in local coordinates and all host-fixed contact footprints are translated by -s; this is geometrically equivalent to translating the keeper by +s. The assumed proximal roof and far-floor reaction centroids stay at host X = 29.0 and 33.5 mm. Vertical forces and moments are balanced separately at every state.

With lug-contact centroid xc, the assumed reaction magnitudes are `Rb/P = (29 - xc)/(33.5 - 29)` and `Ra/P = 1 + Rb/P`. Each component still uses prescribed uniform contact; no pressure distribution or contact state is solved between bodies.

| Travel, mm | Remaining overlap, mm | Adapter h0.55 screen, N | Adapter h0.40 screen, N | Keeper h0.55 screen, N | Keeper h0.40 screen, N |
|---:|---:|---:|---:|---:|---:|
{ptable}

All stroke states within each component study share an imprinted mesh. Separate retained controls are stored: the adapter's full-contact control is 21.189 N at h0.55 and 22.066 N at h0.40. Thus the terminal 0.1 mm-overlap adapter screen is about **31% of its same-mesh full-contact control** at either size. The nominally fully engaged control differs modestly from the separate baseline mesh because the additional stroke boundaries change the triangulation.

The adapter's 0.3 mm-overlap result changes from 11.110 to 8.942 N under refinement (about -19.5%). The keeper and adapter terminal screens are close; two additional keeper terminal/control solves were therefore run at h0.40. Both components should be treated as critical in that near-clearance state rather than claiming an established physical governing failure mode.

At the 8.90748 N design input, average nominal bearing pressure rises from `8.90748/(3*1.4) = 2.121 MPa` with full overlap to `8.90748/(3*0.1) = 29.692 MPa` at 0.1 mm overlap. This arithmetic and the FE sensitivities do not predict the final dynamic departure: contact redistributes, edges deform and the payload begins moving. They do establish that a static distal-support-removed model with full lug contact cannot validate all partial-engagement states.

No receiver stroke study, frictional assembled-contact solve, tilted-contact solve, wear model, actual measured geometry, or moving-payload calculation is included. A zero-overlap state was deliberately not assigned a fictitious static carrying capacity.

## Numerical audit

Every recorded case uses the unchanged solver SHA-256 `6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c`. All nine reference inputs match their source Git blob identity and stored SHA-256. Each case also records the exact STEP and configuration hash, mesh size, degrees of freedom, load and support selection areas, forces/moments, solver method and iterations.

Maximum values across the {len(rows)} cases:

- Relative free residual: {maxima['relative_free_residual']:.6g}.
- Force-balance error: {maxima['force_balance_error_N']:.6g} N.
- Moment-balance error: {maxima['moment_balance_error_Nmm']:.6g} N·mm.
- Keeper gauge-reaction norm: {maxima['gauge_reaction_norm_N']:.6g} N.
- Absolute mesh/CAD volume difference: {maxima['relative_mesh_volume_error']*100:.5f}%.

These checks support internal numerical consistency only. They do not validate physical material properties, contact seating, mounting stiffness, strength, reliability or a release envelope.

## What has and has not been completed

**Completed:** pinned dependency setup, source identity verification, actual baseline replay, focused mesh refinement, same-mesh mounting sensitivity, reduced-overlap adapter/keeper sensitivity, equilibrium/residual audits, and preservation of compact results, configs, logs and hashes.

**Not performed:** physical printing, specimen dimensional inspection, actuator pull curves, loaded release, proof/destructive assembly tests, material coupons, creep, temperature/moisture conditioning, vibration, wear or fatigue. No experimental result or pass has been invented. The model does not establish that the present solenoid can withdraw the keeper under the intended load.

The next useful physical work is full-stroke available actuator force versus required mechanism force, followed by complete-assembly load/release tests through the intended mounting surfaces. Those measurements should select and calibrate the next model; more mesh refinement alone cannot close the physical gaps shown here.

## Reproduction and files

Use the pinned `project/analysis/requirements.txt`, Python 3.12 and the native library required by the gmsh wheel. The recorded environment used CadQuery 2.7.0 and a scratch-only Ubuntu libXft 2.3.6 extraction. No solver code was changed.

```sh
python tools/validation_20261029/run_fea.py --prepare
python tools/validation_20261029/run_fea.py --group baseline
python tools/validation_20261029/run_fea.py --group fixture
python tools/validation_20261029/run_fea.py --group partial_adapter
python tools/validation_20261029/run_fea.py --group partial_keeper
python tools/validation_20261029/run_fea.py --group partial_keeper_terminal_refine
python tools/validation_20261029/summarize_fea.py
python tools/validation_20261029/report_fea.py
```

`--prepare` reconstructs ignored reference and engine copies from the source checkout only after verifying their stored hashes. If they differ, use the cited source snapshot; no incompatible geometry is silently accepted. Native library paths are installation-specific. Set `N2_FEA_PY` when a different isolated interpreter is required.

- `key_findings.json`: compact tables and qualifications for the interactive review page.
- `results_summary.csv` / `results_summary.json`: all {len(rows)} rows, numerical audits and exact result paths.
- `configs/`: seven complete case configurations; per-case compact JSON is under `configs/results/`.
- `logs/`: solver logs and seven execution records, including return codes and elapsed times.
- `source_git_blobs.json`, `environment.json`, `run_plan.json`, `stroke_states.json`: provenance and assumptions.
- `artifact_inventory.json`: curated publication hashes and a separate manifest of omitted native mesh/field arrays.

Large `.msh` and `.npz` files are omitted from the compact repository record; their hashes are indexed and the script regenerates them. They were produced during the actual runs, rather than inferred from archived scalar values.
'''
    (OUT/'FEA_REPORT.md').write_text(report)
    publish=[]
    for p in OUT.rglob('*'):
        if not p.is_file():continue
        rel=p.relative_to(OUT)
        if rel.parts[0] in ('reference_inputs','generated_standard','engine'):continue
        if p.suffix in ('.npz','.msh') or p.name in ('artifact_inventory.json','run_summary.json','configuration.json'):continue
        publish.append(p)
    publish += [ROOT/'tools/validation_20261029'/name for name in ('run_fea.py','summarize_fea.py','report_fea.py')]
    publish=sorted(set(publish))
    fields=sorted(p for p in (OUT/'configs/results').rglob('*') if p.is_file() and p.suffix in ('.npz','.msh'))
    record=lambda p:{'path':str(p.relative_to(ROOT)),'bytes':p.stat().st_size,'sha256':sha(p)}
    inventory={'source_commit':summary['source_commit'],'completed_case_solves':len(rows),
       'publication_files_excluding_this_inventory':[record(p) for p in publish],
       'publication_file_count_including_this_inventory':len(publish)+1,
       'omitted_native_mesh_and_field_files':[record(p) for p in fields],
       'omitted_native_bytes':sum(p.stat().st_size for p in fields),
       'note':'Ignored reference STEP, engine and standard-config copies are reconstructed by --prepare from hash-verified repository sources.'}
    (OUT/'artifact_inventory.json').write_text(json.dumps(inventory,indent=2)+'\n')
    print(json.dumps({'publication_files':len(publish)+1,'native_files_indexed':len(fields),'native_bytes':inventory['omitted_native_bytes']}))

if __name__=='__main__':
    main()
