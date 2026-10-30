#!/usr/bin/env python3
"""Require complete evidence from this GitHub Actions execution, not old records."""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import re
import sys

GROUP_COUNTS = {'baseline': 10, 'fixture': 8, 'partial_adapter': 10,
                'partial_keeper': 5, 'partial_keeper_terminal_refine': 2}
EXPECTED_JOBS = {'controller', 'cad', 'fea'}


def reject_nonfinite(value):
    raise ValueError(f'Non-finite JSON value: {value}')


def load_json(text):
    return json.loads(text, parse_constant=reject_nonfinite)


def collect(artifacts: Path, expected_sha: str, jobs: dict):
    errors = []
    reports = {}
    if not re.fullmatch(r'[0-9a-f]{40}', expected_sha):
        errors.append('Expected tested commit is not a full Git SHA.')
    if set(jobs) != EXPECTED_JOBS:
        errors.append('Required GitHub job results are missing or unexpected.')
    for name in sorted(EXPECTED_JOBS):
        result = jobs.get(name, {}).get('result')
        if result != 'success':
            errors.append(f'Job {name}: {result or "missing"}.')
    # Only each artifact root can provide a summary. Nested archived reference
    # JSON or a summary from another source checkout cannot satisfy this gate.
    for path in sorted(artifacts.glob('*/summary.json')):
        try:
            report = load_json(path.read_text())
            kind = report['kind']
            key = f'fea/{report.get("group")}' if kind == 'fea' else kind
            if key in reports:
                errors.append(f'Duplicate report: {key}.')
                continue
            reports[key] = report
            if report.get('status') != 'PASS':
                errors.append(f'{key} did not pass.')
            if report.get('checkout_sha') != expected_sha:
                errors.append(f'{key} was not run on the expected checkout.')
        except (OSError, ValueError, KeyError, TypeError) as exc:
            errors.append(f'Invalid report {path.name}: {exc}')
    expected_reports = {'controller', 'cad'} | {f'fea/{g}' for g in GROUP_COUNTS}
    if set(reports) != expected_reports:
        errors.append(f'Report set mismatch: missing={sorted(expected_reports-set(reports))}; '
                      f'unexpected={sorted(set(reports)-expected_reports)}.')
    controller = reports.get('controller', {})
    count = controller.get('tests_run')
    if not isinstance(count, int) or isinstance(count, bool) or count <= 0:
        errors.append('Controller report has no executed tests.')
    cad = reports.get('cad', {})
    if cad.get('regeneration_parts') != 13 or cad.get('clearance_checks') != 16:
        errors.append('CAD evidence must include all 13 regenerated parts and 16 clearance checks.')
    fea_count = 0
    for group, count in GROUP_COUNTS.items():
        report = reports.get(f'fea/{group}', {})
        if (report.get('profile') != 'full' or report.get('expected_case_solves') != count
                or report.get('completed_case_solves') != count
                or report.get('passed_cases') != count):
            errors.append(f'FEA group {group} must freshly execute and pass all {count} cases.')
        else:
            fea_count += count
    return {'schema_version': 1, 'status': 'FAIL' if errors else 'PASS',
            'checkout_sha': expected_sha, 'generated_at_utc': datetime.now(timezone.utc).isoformat(),
            'jobs': {name: jobs.get(name, {}).get('result', 'missing') for name in sorted(EXPECTED_JOBS)},
            'reports_received': len(reports), 'reports_expected': len(expected_reports),
            'controller_tests': controller.get('tests_run', 0),
            'cad_regeneration_parts': cad.get('regeneration_parts', 0),
            'cad_clearance_checks': cad.get('clearance_checks', 0),
            'fea_cases_passed': fea_count, 'fea_cases_expected': sum(GROUP_COUNTS.values()),
            'physical_tests_performed': False, 'working_load_rating_N': None,
            'failures': errors,
            'qualification': 'Computational regression and consistency checks only. '
                             'The P14 reference model does not qualify physical retention, '
                             'loaded release, material properties, or new concept geometry.'}


def markdown(result):
    lines = ['# Engineering validation', '', f'**{result["status"]}**', '',
             f'Tested checkout: `{result["checkout_sha"]}`', '',
             '| Evidence | Completed |', '|---|---:|',
             f'| Controller host tests | {result["controller_tests"]} |',
             f'| Regenerated CAD parts | {result["cad_regeneration_parts"]} / 13 |',
             f'| P14 clearance checks | {result["cad_clearance_checks"]} / 16 |',
             f'| P14 FEA cases | {result["fea_cases_passed"]} / {result["fea_cases_expected"]} |',
             f'| Job evidence reports | {result["reports_received"]} / {result["reports_expected"]} |',
             '| Physical tests | 0 |', '', result['qualification'], '',
             'Download per-job artifacts for exact inputs, environments, logs and result audits.']
    if result['failures']:
        lines += ['', '## Failures', ''] + [f'- {x}' for x in result['failures']]
    return '\n'.join(lines)+'\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--artifacts', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--expected-sha', required=True)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=False)
    try:
        jobs = load_json(os.environ.get('N2_JOB_RESULTS', '{}'))
        if not isinstance(jobs, dict):
            raise ValueError('Job results must be an object.')
    except ValueError as exc:
        jobs = {}
        print(f'Invalid job metadata: {exc}', file=sys.stderr)
    result = collect(args.artifacts, args.expected_sha, jobs)
    (args.output/'summary.json').write_text(json.dumps(result, indent=2, allow_nan=False)+'\n')
    report = markdown(result)
    (args.output/'summary.md').write_text(report)
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with Path(os.environ['GITHUB_STEP_SUMMARY']).open('a') as stream:
            stream.write(report)
    print(report)
    return 0 if result['status'] == 'PASS' else 1


if __name__ == '__main__':
    raise SystemExit(main())
