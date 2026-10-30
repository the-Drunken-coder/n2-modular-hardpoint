"""A missing/failed/stale group must not be hidden by the other green reports."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('summarize_run', ROOT/'tools/ci/summarize_run.py')
ci = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ci)
SHA = 'a' * 40
JOBS = {name: {'result': 'success'} for name in ('controller', 'cad', 'fea')}


class RunSummaryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.write('controller', {'kind':'controller', 'tests_run':16})
        self.write('cad', {'kind':'cad', 'regeneration_parts':13, 'clearance_checks':16})
        for group, count in ci.GROUP_COUNTS.items():
            self.write(group, {'kind':'fea', 'group':group, 'profile':'full',
                              'expected_case_solves':count, 'completed_case_solves':count,
                              'passed_cases':count})

    def write(self, name, data):
        path = self.root/name/'summary.json'
        path.parent.mkdir(exist_ok=True)
        path.write_text(json.dumps({'status':'PASS', 'checkout_sha':SHA, **data}))

    def result(self, jobs=JOBS):
        return ci.collect(self.root, SHA, jobs)

    def test_complete_run_passes_with_35_cases(self):
        report = self.result()
        self.assertEqual(report['status'], 'PASS')
        self.assertEqual(report['fea_cases_passed'], 35)
        self.assertFalse(report['physical_tests_performed'])

    def test_missing_group_fails(self):
        (self.root/'fixture/summary.json').unlink()
        self.assertEqual(self.result()['status'], 'FAIL')

    def test_old_checkout_fails(self):
        self.write('controller', {'kind':'controller', 'tests_run':16, 'checkout_sha':'b'*40})
        self.assertEqual(self.result()['status'], 'FAIL')

    def test_failed_job_cannot_be_hidden_by_complete_reports(self):
        jobs = {**JOBS, 'fea':{'result':'failure'}}
        self.assertEqual(self.result(jobs)['status'], 'FAIL')

    def test_zero_controller_tests_fail(self):
        self.write('controller', {'kind':'controller', 'tests_run':0})
        self.assertEqual(self.result()['status'], 'FAIL')

    def test_duplicate_group_fails(self):
        self.write('extra', json.loads((self.root/'fixture/summary.json').read_text()))
        self.assertEqual(self.result()['status'], 'FAIL')

    def test_smoke_profile_cannot_satisfy_full_workflow(self):
        p = self.root/'baseline/summary.json'
        d = json.loads(p.read_text());d['profile']='smoke';p.write_text(json.dumps(d))
        self.assertEqual(self.result()['status'], 'FAIL')


if __name__ == '__main__':
    unittest.main()
