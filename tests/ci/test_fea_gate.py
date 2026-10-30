"""Negative checks for the FEA CI gate; no numerical solver dependencies needed."""
import copy
import importlib.util
import json
from pathlib import Path
import shutil
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location('n2_fea_ci', ROOT / 'tools/ci/run_fea.py')
gate = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(gate)


class FeaGateTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.model, cls.inventory, cls.plan, cls.configs, cls.refs, _ = gate.load_model(
            ROOT, ROOT / 'tools/ci/p14_model.json')
        cls.archive = ROOT / cls.model['run_plan']['path']
        cls.archive = cls.archive.parent
        cls.p = copy.deepcopy(next(p for p in cls.plan['plans']
                                  if p['group'] == 'baseline' and p['part'] == 'adapter'))
        cls.p['sizes_mm'] = [.55]
        cls.cfg = cls.configs[cls.p['config']]
        cls.cfg_sha = gate.sha(cls.archive / cls.p['config'])
        cls.reference = cls.refs[('baseline', 'adapter', 'adapter__Z', .55)]
        cls.reference_path = cls.archive / cls.reference['result_file']
        cls.data = gate.read_json(cls.reference_path)
        cls.material = gate.read_json(ROOT / cls.model['material_source'])

    def audit(self, data):
        return gate.validate_result(data, self.cfg, self.cfg_sha, 'adapter__Z', .55,
                                    self.data, self.material, self.model)

    def test_archived_reference_passes_as_numeric_control(self):
        self.assertTrue(self.audit(copy.deepcopy(self.data))['passes'])

    def test_all_35_archived_cases_pass_independent_audits(self):
        for key, reference in self.refs.items():
            with self.subTest(case=key):
                study, part, case, size = key
                plan = next(p for p in self.plan['plans'] if (p['group'], p['part']) == (study, part))
                cfg = self.configs[plan['config']]
                data = gate.read_json(self.archive / reference['result_file'])
                audit = gate.validate_result(data, cfg, gate.sha(self.archive / plan['config']),
                                             case, size, data, self.material, self.model)
                self.assertTrue(audit['passes'], audit['failed_checks'])

    def test_small_reported_errors_cannot_hide_inconsistent_records(self):
        changes = [
            ('reaction_force_N', [100, 100, 100], 'recomputed_force_balance_below_limit'),
            ('reaction_moment_Nmm', [100, 100, 100], 'recomputed_moment_balance_below_limit'),
            ('mesh_volume_mm3', self.data['mesh_volume_mm3']*.5, 'recomputed_mesh_volume_below_limit'),
            ('relative_volume_error', self.data['relative_volume_error']+.0001, 'mesh_volume_record_consistent'),
            ('strain_energy_Nmm', self.data['strain_energy_Nmm']*.5, 'energy_compliance_consistent'),
        ]
        for field, value, failed_check in changes:
            with self.subTest(field=field):
                data = copy.deepcopy(self.data)
                data[field] = value
                audit = self.audit(data)
                self.assertFalse(audit['passes'])
                self.assertIn(failed_check, audit['failed_checks'])

    def test_identity_mismatches_cannot_pass(self):
        changes = {'id': 'wrong_component', 'case': 'wrong_case', 'h_mm': .4,
                   'driver_sha256': '0'*64, 'configuration_sha256': '1'*64,
                   'step_sha256': '2'*64}
        for field, value in changes.items():
            with self.subTest(field=field):
                data = copy.deepcopy(self.data)
                data[field] = value
                self.assertFalse(self.audit(data)['passes'])

    def test_nonfinite_and_nonpositive_metrics_cannot_pass(self):
        changes = [('raw_strength_threshold_N', float('nan')),
                   ('raw_strength_threshold_N', float('inf')),
                   ('raw_strength_threshold_N', 0),
                   ('max_displacement_mm', -1),
                   ('gauge_reaction_norm_N', float('inf')),
                   ('relative_volume_error', float('nan')),
                   ('elements', True)]
        for field, value in changes:
            with self.subTest(field=field, value=value):
                data = copy.deepcopy(self.data)
                data[field] = value
                result = self.audit(data)
                self.assertFalse(result['passes'])
                # Audit output remains serializable even for a corrupt NaN result.
                json.dumps(result, allow_nan=False)

    def test_bad_equilibrium_residual_and_volume_fail(self):
        for field, value in [('relative_free_residual', 1e-4),
                             ('force_balance_error_N', 1e-3),
                             ('moment_balance_error_Nmm', 1e-2),
                             ('relative_volume_error', .02)]:
            with self.subTest(field=field):
                data = copy.deepcopy(self.data)
                data[field] = value
                self.assertFalse(self.audit(data)['passes'])

    def test_wrong_applied_force_and_material_fail(self):
        data = copy.deepcopy(self.data)
        data['applied_force_N'][0] += .1
        self.assertIn('applied_force_matches_case', self.audit(data)['failed_checks'])
        data = copy.deepcopy(self.data)
        data['material']['E_MPa'] *= 2
        self.assertIn('exact_material_record', self.audit(data)['failed_checks'])

    def test_large_replay_drift_fails_even_with_reciprocal_index(self):
        data = copy.deepcopy(self.data)
        data['raw_strength_threshold_N'] *= .9
        data['raw_peak_failure_index'] /= .9
        result = self.audit(data)
        self.assertTrue(result['checks']['reciprocal_screen_index'])
        self.assertIn('replay_raw_strength_threshold_N', result['failed_checks'])

    def test_small_roundoff_difference_passes(self):
        data = copy.deepcopy(self.data)
        data['raw_strength_threshold_N'] *= 1.000001
        data['raw_peak_failure_index'] /= 1.000001
        self.assertTrue(self.audit(data)['passes'])

    def test_missing_fresh_results_do_not_use_tracked_archive(self):
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory) / 'fresh'
            gate.create_output(out)
            gate.stage(ROOT, out, self.model, self.inventory, [self.p], self.configs)
            executions = {('baseline', 'adapter'): {'returncode': 0, 'timed_out': False}}
            results = gate.collect_results(ROOT, out, [self.p], self.configs,
                                           self.refs, self.model, executions)
            self.assertEqual(len(results), 1)
            self.assertFalse(results[0]['passes'])
            self.assertIn('missing_or_invalid_result_or_reference', results[0]['failed_checks'])
            self.assertTrue(self.reference_path.exists())

    def test_solver_failure_cannot_pass_with_valid_partial_output(self):
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory) / 'fresh'
            gate.create_output(out)
            gate.stage(ROOT, out, self.model, self.inventory, [self.p], self.configs)
            target = out / self.reference['result_file']
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(self.reference_path, target)
            executions = {('baseline', 'adapter'): {'returncode': 1, 'timed_out': False}}
            results = gate.collect_results(ROOT, out, [self.p], self.configs,
                                           self.refs, self.model, executions)
            self.assertFalse(results[0]['passes'])
            self.assertIn('fresh_solver_execution', results[0]['failed_checks'])

    def test_existing_output_is_rejected_without_deleting_it(self):
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory)
            sentinel = out / 'previous-result.json'
            sentinel.write_text('keep this')
            with self.assertRaises(gate.GateError):
                gate.create_output(out)
            self.assertEqual(sentinel.read_text(), 'keep this')

    def test_changed_current_step_is_not_masked_by_old_cache(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            items = [*self.inventory['files'], *self.model['configs'],
                     *(self.model[name] for name in ['source_inventory', 'run_plan',
                                                    'reference_results', 'requirements'])]
            for item in items:
                src, dest = ROOT / item['path'], root / item['path']
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(src, dest)
            path = 'project/cad/N2/N2_adapter.step'
            current = root / path
            cached = root / 'project/analysis/validation_20261029/fea/reference_inputs' / path
            cached.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(current, cached)
            current.write_bytes(current.read_bytes() + b'\n')
            manifest = root / 'tools/ci/p14_model.json'
            manifest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(ROOT / 'tools/ci/p14_model.json', manifest)
            with self.assertRaisesRegex(gate.GateError, 'Frozen P14 model mismatch'):
                gate.load_model(root, manifest)

    def test_json_nan_is_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'bad.json'
            path.write_text('{"raw_strength_threshold_N": NaN}')
            with self.assertRaises(gate.GateError):
                gate.read_json(path)

    def test_profiles_have_explicit_expected_counts(self):
        count = 0
        for group, expected in self.model['expected_group_counts'].items():
            actual = len(gate.expected_keys(gate.selected_plans(self.plan, group, 'full')))
            self.assertEqual(actual, expected)
            count += actual
        self.assertEqual(count, 35)
        self.assertEqual(len(gate.expected_keys(gate.selected_plans(self.plan, 'baseline', 'smoke'))), 5)
        with self.assertRaises(gate.GateError):
            gate.selected_plans(self.plan, 'fixture', 'smoke')


if __name__ == '__main__':
    unittest.main()
