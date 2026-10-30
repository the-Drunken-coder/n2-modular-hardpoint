"""Failure injection for the new study's evidence gate; no CAD/FEA is mocked as real evidence."""
import copy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("modular_core_gate", ROOT / "tools/ci/run_modular_core.py")
gate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gate)


class ModularEvidenceGateTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.dist = Path(self.temp.name)
        self.config = self.dist / "config.json"
        self.config.write_text('{"test_fixture": true}\n')
        self.manifest = {"plans": [{"part": "keeper", "cases": ["retained"],
                                    "sizes_mm": [.7, .5], "config": str(self.config)}],
                         "source_steps": {"keeper": {"sha256": "current-generated-step"}}}
        rows = []
        for h in (.7, .5):
            row = {"part": "keeper", "case": "retained", "mesh_size_mm": h,
                   "elements": 1200, "dofs": 2000, "max_displacement_mm": .02,
                   "raw_peak_tensile_MPa": 2., "raw_peak_vm_MPa": 2.5,
                   "averaged_0p4mm_tensile_MPa": 1., "relative_free_residual": 1e-10,
                   "gauge_reaction_norm_N": 1e-9, "force_balance_error_N": 1e-9,
                   "moment_balance_error_Nmm": 1e-8, "relative_volume_error": -.001,
                   "step_sha256": "current-generated-step", "numerical_checks_passed": True,
                   "result": f"cases/keeper-{h}.json"}
            result = copy.deepcopy(row)
            result.update(driver_sha256=gate.SOLVER_SHA,
                          configuration_sha256=gate.sha(self.config), qualification=False,
                          id="Modular_keeper", h_mm=h)
            gate.dump(self.dist / row["result"], result)
            rows.append(row)
        self.summary = {"status": "numerical_checks_passed", "physical_qualification": False,
                        "strength_rating_established": False, "case_solves": 2, "cases": rows,
                        "mesh_convergence": [{"part": "keeper", "case": "retained", "mesh_levels": 2,
                            "finest_pair_change_percent": {"max_displacement_mm": 0.,
                              "raw_peak_tensile_MPa": 0., "averaged_0p4mm_tensile_MPa": 0.}}]}

    def check(self):
        return gate.gate_simulation(self.summary, self.manifest, self.dist)

    def edit_case(self, **changes):
        path = self.dist / self.summary["cases"][0]["result"]
        data = json.loads(path.read_text())
        data.update(changes)
        gate.dump(path, data)

    def test_complete_numerical_fixture_passes_without_qualification(self):
        result = self.check()
        self.assertEqual(result["case_solves"], 2)
        self.assertIs(result["physical_qualification"], False)
        self.assertIs(result["strength_rating_established"], False)

    def test_missing_case_is_rejected(self):
        self.summary["cases"].pop()
        with self.assertRaisesRegex(ValueError, "Missing or duplicate"):
            self.check()

    def test_duplicate_case_is_rejected(self):
        self.summary["cases"][1] = self.summary["cases"][0]
        with self.assertRaisesRegex(ValueError, "duplicate case"):
            self.check()

    def test_missing_case_file_is_rejected(self):
        (self.dist / self.summary["cases"][0]["result"]).unlink()
        with self.assertRaises(FileNotFoundError):
            self.check()

    def test_nan_result_is_rejected(self):
        self.summary["cases"][0]["max_displacement_mm"] = float("nan")
        with self.assertRaisesRegex(ValueError, "Non-finite"):
            self.check()

    def test_wrong_geometry_hash_is_rejected(self):
        self.edit_case(step_sha256="old-P14-geometry")
        with self.assertRaisesRegex(ValueError, "Wrong geometry hash"):
            self.check()

    def test_result_from_another_case_is_rejected(self):
        self.edit_case(case="different-load-case")
        with self.assertRaisesRegex(ValueError, "another component, load case or mesh"):
            self.check()

    def test_wrong_solver_hash_is_rejected(self):
        self.edit_case(driver_sha256="different-engine")
        with self.assertRaisesRegex(ValueError, "Wrong solver hash"):
            self.check()

    def test_changed_configuration_is_rejected(self):
        self.config.write_text('{"test_fixture": "changed after solve"}\n')
        with self.assertRaisesRegex(ValueError, "Wrong configuration hash"):
            self.check()

    def test_summary_cannot_disagree_with_actual_case(self):
        self.edit_case(max_displacement_mm=.04)
        with self.assertRaisesRegex(ValueError, "Summary differs"):
            self.check()

    def test_numerical_pass_cannot_claim_qualification(self):
        self.summary["physical_qualification"] = True
        with self.assertRaisesRegex(ValueError, "cannot establish"):
            self.check()

    def test_keeper_gauge_load_is_rejected(self):
        self.summary["cases"][0]["gauge_reaction_norm_N"] = .1
        with self.assertRaisesRegex(ValueError, "artificial gauge restraints"):
            self.check()

    def test_equilibrium_failure_is_rejected(self):
        self.summary["cases"][0]["moment_balance_error_Nmm"] = .1
        with self.assertRaisesRegex(ValueError, "Moment imbalance"):
            self.check()

    def test_missing_convergence_is_rejected(self):
        self.summary["mesh_convergence"] = []
        with self.assertRaisesRegex(ValueError, "convergence report"):
            self.check()

    def test_case_path_cannot_escape_artifact(self):
        self.summary["cases"][0]["result"] = "../old-run/result.json"
        with self.assertRaisesRegex(ValueError, "escapes its workspace"):
            self.check()


if __name__ == "__main__":
    unittest.main()
