"""High-impact report/gate regressions without a large stiffness solve."""
from copy import deepcopy
from contextlib import redirect_stdout
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

import numpy as np
from skfem import MeshTet

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5/"analysis"), str(R5)]
import body_actuation_fea as runner
import actuation_fea


def result(h, displacement=1.0, utilization=0.5):
    return dict(h_mm=h, load_point_disp_mm=displacement,
                max_utilization_at_proof=utilization,
                strength_ratio_at_proof=1/utilization,
                governing_peak_mm=[13., 40., 5.3],
                _field=dict(reference_load_N=12.0, fi_e=np.ones(1)))


class BodyFeaRunnerTests(unittest.TestCase):
    def run_fake(self, solver):
        case = dict(part="body", reference_load_N=12.0,
                    minimum_refinement_mm=0.22, loads=[])
        definition = dict(applied_reference_force_N=12.0)
        with tempfile.TemporaryDirectory() as directory, patch.object(runner.fea, "run_case", side_effect=solver) as mocked, redirect_stdout(io.StringIO()):
            record = runner.run_study("body_opening_force", case, definition, "test-id", directory)
            calls = list(mocked.call_args_list)
        return record, calls

    def test_scaled_reference_and_builder_are_used_at_every_level(self):
        record, calls = self.run_fake(lambda case, h, peaks, **kw: result(h))
        self.assertTrue(record["numerical_screen_passed"])
        self.assertEqual([call.args[1] for call in calls], [1.2, .3, .22])
        for call in calls:
            self.assertEqual(call.kwargs["reference_load_N"], 12.0)
            self.assertTrue(callable(call.kwargs["mesh_builder"]))
        self.assertNotIn("strength_ratio_at_proof", record["fine"])
        self.assertEqual(record["fine"]["strength_ratio_at_reference_load"], 2.0)
        self.assertFalse(record["study"][1]["refinement_depth_reached"])

    def test_stress_instability_and_budget_stop_cannot_pass_with_high_strength(self):
        def solve(case, h, peaks, **kw):
            if h == .16:
                raise runner.fea.MeshBudgetExceeded("guard")
            return result(h, utilization={1.2: .01, .3: .02, .22: .03}[h])
        record, _ = self.run_fake(solve)
        self.assertFalse(record["numerical_screen_passed"])
        self.assertGreater(record["fine"]["strength_ratio_at_reference_load"], 30)
        self.assertFalse(record["fine"]["stress_converged"])
        self.assertFalse(record["fine"]["converged"])
        self.assertEqual(record["refinement_stopped_reason"], "guard")

    def test_displacement_gate_is_independent(self):
        def solve(case, h, peaks, **kw):
            return result(h, displacement={1.2: 1., .3: 2., .22: 3., .16: 4.}[h])
        record, _ = self.run_fake(solve)
        self.assertFalse(record["numerical_screen_passed"])
        self.assertTrue(record["fine"]["stress_converged"])
        self.assertFalse(record["fine"]["displacement_converged"])

    def test_one_success_after_rejected_patches_is_not_convergence(self):
        def solve(case, h, peaks, **kw):
            if h != .16:
                raise runner.fea.InvalidLoadPatch("negative pressure")
            return result(h)
        record, _ = self.run_fake(solve)
        self.assertEqual(len(record["rejected_meshes"]), 3)
        self.assertEqual(len(record["study"]), 1)
        self.assertFalse(record["numerical_screen_passed"])

    def test_first_mesh_over_budget_is_a_reported_hold(self):
        def solve(*args, **kwargs):
            raise runner.fea.MeshBudgetExceeded("too large")
        record, _ = self.run_fake(solve)
        self.assertFalse(record["numerical_screen_passed"])
        self.assertEqual(record["fine"], {})
        self.assertIn("No admissible mesh", record["unresolved_reason"])

    def test_overall_requires_both_named_complete_finite_passing_cases(self):
        record, _ = self.run_fake(lambda case, h, peaks, **kw: result(h))
        self.assertFalse(runner.all_cases_pass({runner.EXPECTED_CASES[0]: record}))
        cases = {name: deepcopy(record) for name in runner.EXPECTED_CASES}
        self.assertTrue(runner.all_cases_pass(cases))
        cases[runner.EXPECTED_CASES[1]]["fine"]["strength_ratio_at_reference_load"] = float("nan")
        self.assertFalse(runner.all_cases_pass(cases))

    def test_source_provenance_covers_definition_mesher_and_force_inputs(self):
        required = {"analysis/body_actuation_fea.py", "analysis/body_actuation.py",
                    "analysis/traction_mesh.py", "analysis/fea.py", "analysis/load_audit.py",
                    "analysis/linear_solver.py", "analysis/evidence.py", "analysis/coupled_forces.py",
                    "params.py", "out/cad.json", "out/body.step"}
        self.assertEqual(set(runner.SOURCE_FILES), required)
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in required:
                file = root/name
                file.parent.mkdir(parents=True, exist_ok=True)
                file.write_text(name)
            before = runner.source_identities(root)
            (root/"analysis/coupled_forces.py").write_text("changed")
            with self.assertRaisesRegex(ValueError, "sources changed"):
                runner.verify_source_identities(root, before)

    def test_validation_failure_replaces_an_older_pass(self):
        with tempfile.TemporaryDirectory() as directory, patch.object(runner, "OUT", Path(directory)), patch.object(runner, "validate_cad_inputs", side_effect=ValueError("stale CAD")):
            output = Path(directory)/"body_actuation_fea.json"
            output.write_text('{"numerical_screen_passed": true}')
            markdown = Path(directory)/"body_actuation_fea.md"
            markdown.write_text("# PASS")
            with self.assertRaisesRegex(ValueError, "stale CAD"):
                runner.main()
            self.assertIs(json.loads(output.read_text())["numerical_screen_passed"], False)
            self.assertIn("HOLD", markdown.read_text())
            self.assertNotIn("PASS", markdown.read_text())

    def test_other_fe_drivers_clear_old_machine_and_human_pass_before_validation(self):
        for module, name, flag in ((runner.fea, "fea", "numerical_validation_passed"),
                                   (actuation_fea, "actuation_fea", "numerical_screen_passed")):
            with self.subTest(driver=name), tempfile.TemporaryDirectory() as directory, \
                 patch.object(module, "OUT", Path(directory)), \
                 patch.object(module, "validate_cad_inputs", side_effect=ValueError("stale CAD")):
                json_path, markdown = Path(directory)/f"{name}.json", Path(directory)/f"{name}.md"
                json_path.write_text(json.dumps({flag: True}))
                markdown.write_text("# PASS")
                with self.assertRaisesRegex(ValueError, "stale CAD"):
                    module.main()
                self.assertIs(json.loads(json_path.read_text())[flag], False)
                self.assertIn("HOLD", markdown.read_text())
                self.assertNotIn("PASS", markdown.read_text())

    def test_changed_cad_generator_after_solved_cases_cannot_publish_pass(self):
        record, _ = self.run_fake(lambda case, h, peaks, **kw: result(h))
        cases = {name: ({}, {}) for name in runner.EXPECTED_CASES}
        def solve(name, case, definition, analysis_id, output, progress):
            progress(deepcopy(record))
            return record
        with tempfile.TemporaryDirectory() as directory, patch.object(runner, "OUT", Path(directory)), \
             patch.object(runner, "validate_cad_inputs", side_effect=[None, ValueError("generator changed")]) as validate, \
             patch.object(runner, "source_identities", return_value={}), \
             patch.object(runner, "body_opening_cases", return_value=cases), \
             patch.object(runner, "run_study", side_effect=solve):
            with self.assertRaisesRegex(ValueError, "generator changed"):
                runner.main()
            self.assertEqual(validate.call_count, 2)
            report = json.loads((Path(directory)/"body_actuation_fea.json").read_text())
            self.assertEqual(set(report["cases"]), set(runner.EXPECTED_CASES))
            self.assertIs(report["numerical_screen_passed"], False)

    def test_reference_mismatch_is_rejected_before_any_solve(self):
        case = dict(reference_load_N=12.0, minimum_refinement_mm=.22)
        with patch.object(runner.fea, "run_case") as solve:
            with self.assertRaisesRegex(ValueError, "same positive reference"):
                runner.run_study("case", case, dict(applied_reference_force_N=8.9), "id", ".")
            solve.assert_not_called()

    def test_builder_hook_retains_preassembly_dof_guard(self):
        mesh = MeshTet()
        case = dict(part="body", global_floor_mm=1.2)
        with patch.object(runner.fea, "MAX_DOFS", 0), patch.object(runner.fea, "mesh_step") as default:
            builder = unittest.mock.Mock(return_value=mesh)
            with self.assertRaises(runner.fea.MeshBudgetExceeded):
                runner.fea.run_case(case, .3, reference_load_N=12., mesh_builder=builder)
            builder.assert_called_once()
            default.assert_not_called()


if __name__ == "__main__":
    unittest.main()
