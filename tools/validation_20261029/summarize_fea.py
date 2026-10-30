#!/usr/bin/env python3
"""Summarize stored P14 validation solves without calling them load ratings."""
from pathlib import Path
import csv, hashlib, json

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'project/analysis/validation_20261029/fea'

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def main():
    plan = json.loads((OUT / 'run_plan.json').read_text())
    rows = []
    audits = []
    for p in plan['plans']:
        cfg_path = OUT / p['config']
        cfg = json.loads(cfg_path.read_text())
        for h in p['sizes_mm']:
            folder = cfg_path.parent / 'results' / cfg['id'] / f'h{h:g}'
            for case in p['selected_cases']:
                path = folder / f'{case}.json'
                if not path.exists():
                    audits.append({'result': str(path.relative_to(OUT)), 'status': 'missing'})
                    continue
                d = json.loads(path.read_text())
                row = {'study': p['group'], 'part': p['part'], 'case': case,
                    'mesh_target_mm': h, 'elements': d['elements'], 'dofs': d['dofs'],
                    'PLA_assumed_stress_screen_N': d['raw_strength_threshold_N'],
                    'PAHT_tensile_ratio_only_sensitivity_N': d['raw_strength_threshold_N']*47/31,
                    'maximum_displacement_mm_per_N': d['max_displacement_mm'],
                    'peak_tensile_MPa_per_N': d['raw_peak_tensile_MPa'],
                    'peak_compressive_MPa_per_N': d['raw_peak_compressive_MPa'],
                    'peak_max_shear_MPa_per_N': d['raw_peak_max_shear_MPa'],
                    'relative_free_residual': d['relative_free_residual'],
                    'force_balance_error_N': d['force_balance_error_N'],
                    'moment_balance_error_Nmm': d['moment_balance_error_Nmm'],
                    'gauge_reaction_norm_N': d['gauge_reaction_norm_N'],
                    'relative_mesh_volume_error': d['relative_volume_error'],
                    'result_file': str(path.relative_to(OUT)),
                    'result_sha256': sha(path), 'step_sha256': d['step_sha256'],
                    'configuration_sha256': d['configuration_sha256'],
                    'driver_sha256': d['driver_sha256']}
                rows.append(row)
                checks = {
                    'frozen_solver': d['driver_sha256']==plan['solver_sha256'],
                    'correct_step': d['step_sha256']==cfg['expected_step_sha256'],
                    'matching_configuration': d['configuration_sha256']==sha(cfg_path),
                    'relative_residual_below_1e-8': d['relative_free_residual']<1e-8,
                    'force_balance_below_1e-6_N': d['force_balance_error_N']<1e-6,
                    'moment_balance_below_1e-5_Nmm': d['moment_balance_error_Nmm']<1e-5,
                    'gauge_reaction_below_1e-6_N': d['gauge_reaction_norm_N']<1e-6,
                    'mesh_volume_within_0p5percent': abs(d['relative_volume_error'])<0.005,
                }
                audits.append({'result': row['result_file'], 'checks': checks,
                    'status': 'pass' if all(checks.values()) else 'investigate'})
    rows.sort(key=lambda d:(d['study'],d['part'],d['case'],-d['mesh_target_mm']))
    if rows:
        with (OUT / 'results_summary.csv').open('w',newline='') as f:
            w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
    result = {'source_commit': plan['source_commit'],
        'interpretation': 'Actual computational linear elastic solves of current P14 STEP under prescribed contact. Raw local stress screens are neither physical failure loads nor aircraft working-load ratings. PAHT ratio column is unvalidated scalar sensitivity only.',
        'planned_case_solves': plan['planned_case_solves'], 'completed_case_solves': len(rows),
        'numeric_audit_failures': sum(a['status']=='investigate' for a in audits),
        'missing_case_solves': sum(a['status']=='missing' for a in audits),
        'all_available_numeric_audits_pass': all(a['status']=='pass' for a in audits),
        'rows': rows, 'audits': audits}
    (OUT / 'results_summary.json').write_text(json.dumps(result,indent=2)+'\n')
    print(json.dumps({k:result[k] for k in ['planned_case_solves','completed_case_solves','missing_case_solves','numeric_audit_failures']}))

if __name__=='__main__':
    main()
