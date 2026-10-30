#!/usr/bin/env python3
"""Run and gate fresh P14 FEA replays without modifying the historical archive.

python tools/ci/run_fea.py --group baseline --out /new/output/directory
Use --profile smoke with baseline for five coarse cases; full is the default.
Requires project/analysis/requirements.txt and native gmsh libraries, not CadQuery.
"""
from __future__ import annotations

import argparse
import copy
from datetime import datetime, timezone
import hashlib
import importlib.metadata
import json
import math
import os
from pathlib import Path
import platform
import re
import shutil
import subprocess
import sys
import time
import uuid

ROOT = Path(__file__).resolve().parents[2]
DEFAULT_MODEL = ROOT / 'tools/ci/p14_model.json'
GROUPS = ('baseline', 'fixture', 'partial_adapter', 'partial_keeper',
          'partial_keeper_terminal_refine')
SUMMARY_METRICS = {
    'raw_strength_threshold_N': 'PLA_assumed_stress_screen_N',
    'max_displacement_mm': 'maximum_displacement_mm_per_N',
}


class GateError(RuntimeError):
    """An explicit replay gate failed; never convert this to a successful run."""


def sha(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def reject_constant(value):
    raise GateError(f'Non-finite JSON constant: {value}')


def read_json(path: Path):
    try:
        return json.loads(path.read_text(), parse_constant=reject_constant)
    except (OSError, ValueError) as exc:
        raise GateError(f'Cannot read valid JSON from {path}: {exc}') from exc


def write_json(path: Path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2, allow_nan=False) + '\n')


def local_path(base: Path, relative: str) -> Path:
    rel = Path(relative)
    if rel.is_absolute() or '..' in rel.parts:
        raise GateError(f'Expected a repository-relative path: {relative}')
    path = (base / rel).resolve()
    if not path.is_relative_to(base.resolve()):
        raise GateError(f'Path escapes its source/output directory: {relative}')
    return path


def verify_file(root: Path, item: dict) -> Path:
    path = local_path(root, item['path'])
    if not path.is_file() or sha(path) != item['sha256']:
        raise GateError(
            f'Frozen P14 model mismatch: {item["path"]}. The current checkout '
            'must match this explicit analysis model. Changed CAD, material or '
            'case definitions need a reviewed new model and reference results; '
            'CI will not silently replay cached old geometry.')
    return path


def result_key(study, part, case, size):
    return study, part, case, float(size)


def expected_keys(plans):
    return [result_key(p['group'], p['part'], case, size)
            for p in plans for size in p['sizes_mm'] for case in p['selected_cases']]


def load_model(root: Path, model_path: Path):
    model = read_json(model_path)
    if not isinstance(model, dict) or model.get('schema_version') != 1:
        raise GateError('Unsupported FEA model-manifest schema.')
    for key in ('source_inventory', 'run_plan', 'reference_results', 'requirements'):
        verify_file(root, model[key])
    inventory = read_json(local_path(root, model['source_inventory']['path']))
    if inventory['commit'] != model['reference_commit']:
        raise GateError('Source inventory and model reference commit disagree.')
    source_checks = []
    for item in inventory['files']:
        # Always read the current checkout. No preexisting reference cache is used.
        path = verify_file(root, item)
        content = path.read_bytes()
        git_blob = hashlib.sha1(b'blob ' + str(len(content)).encode() + b'\0' + content).hexdigest()
        if git_blob != item['git_blob_sha1'] or len(content) != item['bytes']:
            raise GateError(f'Git blob identity mismatch: {item["path"]}')
        source_checks.append({'path': item['path'], 'sha256': item['sha256'],
                              'git_blob_sha1': git_blob, 'bytes': len(content)})
    config_paths = {}
    for item in model['configs']:
        config_paths[item['path']] = verify_file(root, item)
    archive_root = local_path(root, model['run_plan']['path']).parent
    plan = read_json(archive_root / 'run_plan.json')
    if plan['source_commit'] != model['reference_commit'] or plan['solver_sha256'] != model['solver_sha256']:
        raise GateError('Model and run plan provenance disagree.')
    keys = expected_keys(plan['plans'])
    if len(keys) != len(set(keys)) or len(keys) != model['expected_case_count']:
        raise GateError('Run plan has duplicate cases or the wrong total case count.')
    counts = {g: sum(k[0] == g for k in keys) for g in GROUPS}
    if counts != model['expected_group_counts'] or plan['planned_case_solves'] != len(keys):
        raise GateError('Run plan group counts disagree with the explicit model.')
    configs = {}
    for p in plan['plans']:
        path = local_path(archive_root, p['config'])
        relative = str(path.relative_to(root.resolve()))
        if relative not in config_paths:
            raise GateError(f'Unpinned case configuration: {relative}')
        cfg = read_json(path)
        if any(case not in cfg['cases'] for case in p['selected_cases']):
            raise GateError(f'Planned case absent from configuration: {p["config"]}')
        configs[p['config']] = cfg
    reference = read_json(local_path(root, model['reference_results']['path']))
    reference_map = {}
    for row in reference['rows']:
        key = result_key(row['study'], row['part'], row['case'], row['mesh_target_mm'])
        if key in reference_map:
            raise GateError(f'Duplicate archived reference: {key}')
        reference_map[key] = row
    if set(reference_map) != set(keys):
        raise GateError('Archived numeric references do not exactly cover the model cases.')
    if reference.get('missing_case_solves') or reference.get('numeric_audit_failures'):
        raise GateError('Archived reference summary itself reports failed or missing cases.')
    if sha(local_path(root, model['solver_source'])) != model['solver_sha256']:
        raise GateError('Frozen solver source identity differs from the model.')
    return model, inventory, plan, configs, reference_map, source_checks


def selected_plans(plan, group, profile):
    plans = copy.deepcopy([p for p in plan['plans'] if p['group'] == group])
    if not plans:
        raise GateError(f'No planned cases for group {group}.')
    if profile == 'smoke':
        if group != 'baseline':
            raise GateError('The smoke profile only supports the baseline group.')
        for p in plans:
            p['sizes_mm'] = [max(p['sizes_mm'])]
    return plans


def create_output(path: Path):
    try:
        path.mkdir(parents=True, exist_ok=False)
    except FileExistsError as exc:
        raise GateError(f'Output directory already exists: {path}. Choose a new directory; stale results are never reused.') from exc


def stage(root, out, model, inventory, plans, configs):
    for item in inventory['files']:
        src = verify_file(root, item)
        dest = local_path(out / 'reference_inputs', item['path'])
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest)
        if sha(dest) != item['sha256']:
            raise GateError(f'Staged source differs: {item["path"]}')
    engine = out / 'engine'
    engine.mkdir()
    shutil.copyfile(local_path(out / 'reference_inputs', model['solver_source']), engine / 'solver.py')
    shutil.copyfile(local_path(out / 'reference_inputs', model['material_source']), engine / 'material.json')
    archive_root = local_path(root, model['run_plan']['path']).parent
    for p in plans:
        src = local_path(archive_root, p['config'])
        pinned = next(item for item in model['configs'] if item['path'] == str(src.relative_to(root.resolve())))
        verify_file(root, pinned)
        dest = local_path(out, p['config'])
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest)  # Preserve configuration bytes and hash exactly.
        if sha(dest) != pinned['sha256']:
            raise GateError(f'Staged configuration differs: {p["config"]}')
        cfg = configs[p['config']]
        step = local_path(out, cfg['step_path'])
        if not step.is_file() or sha(step) != cfg['expected_step_sha256']:
            raise GateError(f'Configuration does not select the pinned current STEP: {p["config"]}')
    write_json(out / 'selected_plan.json', {'model_id': model['model_id'], 'plans': plans,
                                           'expected_cases': len(expected_keys(plans))})


def checkout_identity(root, explicit=None):
    if explicit is not None and not re.fullmatch(r'[0-9a-fA-F]{40}', explicit):
        raise GateError('--checkout-sha must be an exact 40-character Git commit SHA.')
    probe = subprocess.run(['git', 'rev-parse', '--show-toplevel'], cwd=root,
                           capture_output=True, text=True, check=False)
    actual = None
    if probe.returncode == 0 and Path(probe.stdout.strip()).resolve() == root.resolve():
        head = subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=root,
                              capture_output=True, text=True, check=False)
        if head.returncode == 0:
            actual = head.stdout.strip()
    if actual and explicit and actual.lower() != explicit.lower():
        raise GateError('Provided checkout SHA does not match actual git HEAD.')
    if actual:
        return {'commit': actual, 'identity_source': 'git HEAD'}
    if explicit:
        return {'commit': explicit.lower(), 'identity_source': 'caller-supplied; materialized directory has no Git HEAD'}
    raise GateError('Cannot identify checkout commit: run in a Git checkout or provide --checkout-sha for a materialized local snapshot.')


def runtime_environment(model):
    if list(sys.version_info[:2]) != model['python']:
        raise GateError(f'This replay uses Python {model["python"]}; got {list(sys.version_info[:2])}.')
    versions = {}
    for name, expected in model['required_packages'].items():
        try:
            actual = importlib.metadata.version(name)
        except importlib.metadata.PackageNotFoundError as exc:
            raise GateError(f'Missing dependency {name}; install project/analysis/requirements.txt.') from exc
        if actual != expected:
            raise GateError(f'Dependency version differs: {name}={actual}, expected {expected}.')
        versions[name] = actual
    return {'python': sys.version, 'interpreter': sys.executable, 'platform': platform.platform(),
            'packages': versions, 'thread_limits': {'OPENBLAS_NUM_THREADS': '1', 'OMP_NUM_THREADS': '1', 'MKL_NUM_THREADS': '1'}}


def real(value, *, positive=False):
    return (isinstance(value, (int, float)) and not isinstance(value, bool)
            and math.isfinite(value) and (value > 0 if positive else value >= 0))


def validate_result(data, cfg, cfg_sha, case, size, reference, material, model):
    checks = {
        'expected_component_id': data.get('id') == cfg['id'],
        'expected_case': data.get('case') == case,
        'expected_mesh_target': data.get('h_mm') == size,
        'frozen_solver_hash': data.get('driver_sha256') == model['solver_sha256'],
        'configuration_hash': data.get('configuration_sha256') == cfg_sha,
        'current_step_hash': data.get('step_sha256') == cfg['expected_step_sha256'],
        'exact_material_record': data.get('material') == material,
    }
    positive = ['raw_strength_threshold_N', 'raw_peak_failure_index', 'max_displacement_mm',
                'compliance_Nmm', 'strain_energy_Nmm', 'cad_volume_mm3', 'mesh_volume_mm3']
    nonnegative = ['raw_peak_tensile_MPa', 'raw_peak_compressive_MPa', 'raw_peak_max_shear_MPa',
                   'raw_peak_vm_MPa', 'relative_free_residual', 'force_balance_error_N',
                   'moment_balance_error_Nmm', 'gauge_reaction_norm_N']
    for key in positive:
        checks['finite_positive_' + key] = real(data.get(key), positive=True)
    for key in nonnegative:
        checks['finite_nonnegative_' + key] = real(data.get(key))
    for key in ('elements', 'dofs', 'quadratic_nodes'):
        checks['positive_integer_' + key] = type(data.get(key)) is int and data[key] > 0
    for key, limit in model['limits'].items():
        if key in ('absolute_mesh_volume_error', 'applied_force_error_N'):
            continue
        checks['limit_' + key] = real(data.get(key)) and data[key] < limit
    volume = data.get('relative_volume_error')
    checks['mesh_volume_limit'] = (isinstance(volume, (int, float)) and not isinstance(volume, bool)
                                   and math.isfinite(volume) and abs(volume) < model['limits']['absolute_mesh_volume_error'])
    for name in ('applied_force_N', 'applied_moment_Nmm', 'reaction_force_N', 'reaction_moment_Nmm'):
        vector = data.get(name)
        checks['finite_vector_' + name] = (isinstance(vector, list) and len(vector) == 3
            and all(isinstance(x, (int, float)) and not isinstance(x, bool) and math.isfinite(x) for x in vector))
    recomputed = {}
    for kind, applied, reaction, recorded, limit in (
        ('force', 'applied_force_N', 'reaction_force_N', 'force_balance_error_N', model['limits']['force_balance_error_N']),
        ('moment', 'applied_moment_Nmm', 'reaction_moment_Nmm', 'moment_balance_error_Nmm', model['limits']['moment_balance_error_Nmm']),
    ):
        value = None
        if checks['finite_vector_' + applied] and checks['finite_vector_' + reaction]:
            norm = math.hypot(*(a+b for a, b in zip(data[applied], data[reaction])))
            if math.isfinite(norm):
                value = norm
        recomputed[recorded] = value
        checks['recomputed_' + kind + '_balance_below_limit'] = value is not None and value < limit
        checks[kind + '_balance_record_consistent'] = (value is not None and real(data.get(recorded))
            and math.isclose(value, data[recorded], rel_tol=1e-7, abs_tol=1e-12))
    volume_error = None
    if real(data.get('mesh_volume_mm3'), positive=True) and real(data.get('cad_volume_mm3'), positive=True):
        derived = data['mesh_volume_mm3'] / data['cad_volume_mm3'] - 1
        if math.isfinite(derived):
            volume_error = derived
    recomputed['relative_volume_error'] = volume_error
    checks['recomputed_mesh_volume_below_limit'] = (volume_error is not None
        and abs(volume_error) < model['limits']['absolute_mesh_volume_error'])
    checks['mesh_volume_record_consistent'] = (volume_error is not None
        and isinstance(volume, (int, float)) and not isinstance(volume, bool) and math.isfinite(volume)
        and math.isclose(volume_error, volume, rel_tol=1e-7, abs_tol=1e-12))
    # Linear elasticity gives u·f = 2*(0.5*u·K·u), up to solver residual.
    checks['energy_compliance_consistent'] = (real(data.get('compliance_Nmm'), positive=True)
        and real(data.get('strain_energy_Nmm'), positive=True)
        and math.isclose(data['compliance_Nmm'], 2*data['strain_energy_Nmm'], rel_tol=1e-6, abs_tol=1e-12))
    if checks['finite_vector_applied_force_N']:
        expected = [sum(load['force_N'][axis] for load in cfg['cases'][case]['loads']) for axis in range(3)]
        error = math.sqrt(sum((x-y)**2 for x, y in zip(expected, data['applied_force_N'])))
        checks['applied_force_matches_case'] = error < model['limits']['applied_force_error_N']
    else:
        checks['applied_force_matches_case'] = False
    checks['reciprocal_screen_index'] = (real(data.get('raw_strength_threshold_N'), positive=True)
        and real(data.get('raw_peak_failure_index'), positive=True)
        and math.isclose(data['raw_strength_threshold_N'] * data['raw_peak_failure_index'], 1, rel_tol=1e-9))
    comparisons = {}
    tolerances = model['replay_comparison']
    for metric in tolerances['metrics']:
        target = reference.get(metric, reference.get(SUMMARY_METRICS.get(metric)))
        value = data.get(metric)
        ok = real(value, positive=True) and real(target, positive=True)
        matches = ok and math.isclose(value, target, rel_tol=tolerances['relative_tolerance'],
                                      abs_tol=tolerances['absolute_tolerance'])
        checks['replay_' + metric] = bool(matches)
        comparisons[metric] = {'reference': target,
            'actual': value if real(value, positive=True) else None,
            'relative_difference': (value/target-1) if ok else None,
            'passes': bool(matches)}
    return {'passes': all(checks.values()), 'checks': checks, 'recomputed_audits': recomputed,
            'replay_comparisons': comparisons,
            'failed_checks': [name for name, passed in checks.items() if not passed]}


def execute_plan(root, out, p, run_id, timeout_seconds):
    cfg_path = local_path(out, p['config'])
    stem = f'{p["part"]}_{p["group"]}'
    log_path = out / 'logs' / f'{stem}.log'
    log_path.parent.mkdir(exist_ok=True)
    cmd = [sys.executable, str(out / 'engine/solver.py'), '--config', str(cfg_path),
           '--sizes', *map(str, p['sizes_mm']), '--cases', *p['selected_cases']]
    environment = os.environ.copy()
    for key in ('OPENBLAS_NUM_THREADS', 'OMP_NUM_THREADS', 'MKL_NUM_THREADS'):
        environment[key] = '1'
    record = {'run_id': run_id, 'part': p['part'], 'group': p['group'],
              'started_at_utc': utc_now(), 'command': cmd, 'config_sha256': sha(cfg_path),
              'log': str(log_path.relative_to(out)), 'returncode': None, 'timed_out': False}
    start = time.monotonic()
    print(f'Running {stem}: {len(p["sizes_mm"]) * len(p["selected_cases"])} fresh solves', flush=True)
    try:
        with log_path.open('w') as log:
            result = subprocess.run(cmd, cwd=root, env=environment, stdout=log,
                                    stderr=subprocess.STDOUT, timeout=timeout_seconds, check=False)
        record['returncode'] = result.returncode
    except subprocess.TimeoutExpired:
        record['timed_out'] = True
        record['error'] = f'Solver exceeded {timeout_seconds} seconds.'
    except OSError as exc:
        record['error'] = str(exc)
    record['elapsed_seconds'] = time.monotonic() - start
    record['finished_at_utc'] = utc_now()
    write_json(out / 'logs' / f'{stem}.execution.json', record)
    return record


def collect_results(root, out, plans, configs, references, model, executions):
    material = read_json(local_path(root, model['material_source']))
    rows = []
    for p in plans:
        cfg = configs[p['config']]
        cfg_path = local_path(out, p['config'])
        execution = executions.get((p['group'], p['part']))
        execution_ok = bool(execution and execution.get('returncode') == 0 and not execution.get('timed_out'))
        for size in p['sizes_mm']:
            for case in p['selected_cases']:
                path = cfg_path.parent / 'results' / cfg['id'] / f'h{size:g}' / f'{case}.json'
                key = result_key(p['group'], p['part'], case, size)
                row = {'group': p['group'], 'part': p['part'], 'case': case, 'mesh_target_mm': size,
                       'result_file': str(path.relative_to(out)), 'solver_execution_passed': execution_ok}
                try:
                    data = read_json(path)
                    if not isinstance(data, dict):
                        raise GateError('Solver result must be a JSON object.')
                    reference = references[key]
                    # Compliance is in the compact case record, not the summary table.
                    reference_path = local_path(local_path(root, model['run_plan']['path']).parent,
                                                reference['result_file'])
                    if sha(reference_path) != reference['result_sha256']:
                        raise GateError(f'Archived per-case numeric reference changed: {reference["result_file"]}')
                    reference_data = read_json(reference_path)
                    audit = validate_result(data, cfg, sha(cfg_path), case, size,
                                            reference_data, material, model)
                    row.update(audit)
                    row['result_sha256'] = sha(path)
                    value = data.get('raw_strength_threshold_N')
                    row['PLA_assumed_stress_screen_N'] = value if real(value, positive=True) else None
                    row['passes'] = audit['passes'] and execution_ok
                    if not execution_ok:
                        row['failed_checks'].append('fresh_solver_execution')
                except (GateError, OSError, KeyError, TypeError, ValueError) as exc:
                    row.update({'passes': False, 'error': str(exc), 'failed_checks': ['missing_or_invalid_result_or_reference']})
                rows.append(row)
    return rows


def write_report(out, summary):
    write_json(out / 'summary.json', summary)
    lines = ['# P14 FEA CI replay', '', f'**Status: {summary["status"].upper()}**', '',
             f'Checkout commit: `{summary.get("checkout", {}).get("commit", "unavailable")}`', '',
             f'Historical model reference: `{summary.get("reference_commit", "unavailable")}`', '',
             f'Group: `{summary["group"]}`; profile: `{summary["profile"]}`; '
             f'passed cases: {summary.get("passed_cases", 0)} / {summary.get("expected_cases", 0)}.', '',
             'This gate checks fresh numerical replay and internal consistency of the explicit P14 model. '
             'It does not certify new geometry, physical strength, loaded release or a working-load rating.', '',
             'Replay comparison tolerance: 2% relative plus an absolute tolerance of 1e-8; '
             'this is a numerical drift guard, not a safety factor or a convergence criterion.', '']
    if summary.get('error'):
        lines.extend(['## Failure', '', summary['error'], ''])
    if summary.get('cases'):
        lines.extend(['| Part | Case | Mesh target, mm | PLA stress screen, N | Gate |',
                      '|---|---|---:|---:|---|'])
        for row in summary['cases']:
            value = row.get('PLA_assumed_stress_screen_N')
            force = f'{value:.6f}' if value is not None else 'unavailable'
            lines.append(f'| {row["part"]} | {row["case"]} | {row["mesh_target_mm"]} | {force} | {"PASS" if row["passes"] else "FAIL"} |')
        failed = [row for row in summary['cases'] if not row['passes']]
        if failed:
            lines.extend(['', '## Failed checks', ''])
            for row in failed:
                lines.append(f'- {row["part"]}/{row["case"]}/h{row["mesh_target_mm"]}: '
                             + row.get('error', ', '.join(row['failed_checks'])))
    (out / 'summary.md').write_text('\n'.join(lines) + '\n')


def run(args, root=ROOT):
    out = Path(args.out).expanduser().resolve()
    create_output(out)  # A preexisting directory is never accepted or overwritten.
    run_id = str(uuid.uuid4())
    summary = {'schema_version': 1, 'kind': 'fea', 'run_id': run_id, 'group': args.group, 'profile': args.profile,
               'started_at_utc': utc_now(), 'status': 'FAIL', 'checkout_sha': None,
               'expected_cases': 0, 'expected_case_solves': 0, 'completed_case_solves': 0,
               'passed_cases': 0, 'cases': [], 'runner_sha256': sha(Path(__file__)),
               'github_run_id': os.environ.get('GITHUB_RUN_ID'),
               'github_run_attempt': os.environ.get('GITHUB_RUN_ATTEMPT')}
    try:
        summary['checkout'] = checkout_identity(root, args.checkout_sha)
        summary['checkout_sha'] = summary['checkout']['commit']
        model_path = root / 'tools/ci/p14_model.json'
        summary['model_manifest_sha256'] = sha(model_path)
        model, inventory, plan, configs, references, source_checks = load_model(root, model_path)
        summary.update({'model_id': model['model_id'], 'reference_commit': model['reference_commit'],
                        'environment': runtime_environment(model), 'source_checks': source_checks})
        plans = selected_plans(plan, args.group, args.profile)
        summary['expected_cases'] = len(expected_keys(plans))
        summary['expected_case_solves'] = summary['expected_cases']
        stage(root, out, model, inventory, plans, configs)
        write_json(out / 'model_manifest.json', model)
        executions = {}
        for p in plans:
            record = execute_plan(root, out, p, run_id, args.timeout_seconds)
            executions[(p['group'], p['part'])] = record
        summary['executions'] = list(executions.values())
        summary['cases'] = collect_results(root, out, plans, configs, references, model, executions)
        summary['completed_case_solves'] = sum('result_sha256' in row for row in summary['cases'])
        summary['passed_cases'] = sum(row['passes'] for row in summary['cases'])
        if summary['passed_cases'] == summary['expected_cases'] and summary['expected_cases'] > 0:
            summary['status'] = 'PASS'
    except (GateError, OSError, KeyError, TypeError, ValueError) as exc:
        summary['error'] = str(exc)
    summary['finished_at_utc'] = utc_now()
    write_report(out, summary)
    print(json.dumps({'status': summary['status'], 'passed_cases': summary['passed_cases'],
                      'expected_cases': summary['expected_cases'], 'summary': str(out / 'summary.json')}), flush=True)
    return 0 if summary['status'] == 'PASS' else 1


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--group', choices=GROUPS, required=True)
    parser.add_argument('--out', required=True, help='New output directory; existing paths are rejected.')
    parser.add_argument('--profile', choices=('full', 'smoke'), default='full')
    parser.add_argument('--checkout-sha', help='Exact commit for a materialized non-Git local snapshot.')
    parser.add_argument('--timeout-seconds', type=int, default=1200, help='Per-component solver timeout.')
    args = parser.parse_args()
    if args.timeout_seconds <= 0:
        parser.error('--timeout-seconds must be positive.')
    try:
        return run(args)
    except GateError as exc:
        print(str(exc), file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
