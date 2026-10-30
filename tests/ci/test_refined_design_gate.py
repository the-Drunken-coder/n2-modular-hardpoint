"""Fault injection for numerical evidence; fixtures are not real simulation data."""
import copy
import importlib.util
import math
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("r4_gate", ROOT / "tools/ci/run_refined_design.py")
gate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gate)
spec = importlib.util.spec_from_file_location("r4_simulate", ROOT / "project/designs/r4/analysis/simulate.py")
sim = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sim)


class NumericalEvidenceTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.folder = Path(temp.name)
        self.manifest = {"plans": [{"part": "keeper", "cases": ["retained"], "sizes_mm": [.7, .5]}],
            "source_steps": {"keeper": {"sha256": "current-step-test-fixture"}},
            "configuration_sha256": {"keeper": "current-config-test-fixture"}}
        rows = []
        for h in (.7, .5):
            row = dict(part="keeper", case="retained", mesh_size_mm=h, elements=100, dofs=600,
                max_displacement_mm=.02, raw_peak_tensile_MPa=3., raw_peak_compressive_MPa=4., raw_peak_vm_MPa=3.2,
                force_balance_error_N=1e-10, moment_balance_error_Nmm=1e-9, relative_free_residual=1e-10,
                gauge_reaction_norm_N=1e-10, relative_volume_error=.001, step_sha256="current-step-test-fixture",
                numerical_checks_passed=True, result=f"case-{h}.json")
            native = dict(row, id="R4_keeper", h_mm=h, driver_sha256=gate.SOLVER_SHA,
                configuration_sha256="current-config-test-fixture", physical_qualification=False)
            gate.dump(self.folder / row["result"], native)
            rows.append(row)
        self.summary = dict(revision="R4", status="numerical_checks_passed", physical_qualification=False,
            strength_rating_established=False, case_solves=2, cases=rows,
            mesh_convergence=[dict(part="keeper", case="retained", mesh_levels=2, finest_pair_change_percent={
                "max_displacement_mm": 0., "raw_peak_tensile_MPa": 0., "raw_peak_compressive_MPa": 0.})])

    def check(self):
        return gate.gate_results(self.summary, self.manifest, self.folder)

    def change_native(self, **kwargs):
        path = self.folder / self.summary["cases"][0]["result"]
        data = gate.read(path)
        data.update(kwargs)
        gate.dump(path, data)

    def test_complete_fixture_passes_without_qualification(self):
        result = self.check()
        self.assertTrue(result["numerical_checks_passed"])
        self.assertFalse(result["physical_qualification"])
        self.assertFalse(result["payload_rating_established"])

    def test_missing_or_duplicate_case_rejected(self):
        self.summary["cases"].pop()
        with self.assertRaisesRegex(ValueError, "Missing or duplicate"):
            self.check()

    def test_wrong_result_identity_rejected(self):
        self.change_native(case="unrelated")
        with self.assertRaisesRegex(ValueError, "another problem"):
            self.check()

    def test_wrong_step_solver_or_config_hash_rejected(self):
        for field, message in (("step_sha256", "STEP"), ("driver_sha256", "solver"), ("configuration_sha256", "configuration")):
            original = gate.read(self.folder / self.summary["cases"][0]["result"])
            self.change_native(**{field: "stale"})
            with self.assertRaisesRegex(ValueError, message):
                self.check()
            gate.dump(self.folder / self.summary["cases"][0]["result"], original)

    def test_nonfinite_result_rejected(self):
        self.summary["cases"][0]["max_displacement_mm"] = math.nan
        with self.assertRaisesRegex(ValueError, "Non-finite"):
            self.check()

    def test_summary_disagreement_rejected(self):
        self.change_native(raw_peak_tensile_MPa=30.)
        with self.assertRaisesRegex(ValueError, "differs"):
            self.check()

    def test_bad_numerical_equilibrium_rejected(self):
        for field, value in (("force_balance_error_N", .1), ("moment_balance_error_Nmm", .1),
                             ("relative_free_residual", .1), ("relative_volume_error", .1),
                             ("gauge_reaction_norm_N", .1)):
            original = self.summary["cases"][0][field]
            self.summary["cases"][0][field] = value
            with self.assertRaises(ValueError):
                self.check()
            self.summary["cases"][0][field] = original

    def test_physical_qualification_claim_rejected(self):
        self.summary["physical_qualification"] = True
        with self.assertRaisesRegex(ValueError, "cannot qualify"):
            self.check()

    def test_missing_file_rejected(self):
        (self.folder / self.summary["cases"][0]["result"]).unlink()
        with self.assertRaises(FileNotFoundError):
            self.check()

    def test_path_escape_rejected(self):
        self.summary["cases"][0]["result"] = "../outside.json"
        with self.assertRaisesRegex(ValueError, "escapes"):
            self.check()

    def test_fabricated_convergence_rejected(self):
        self.summary["mesh_convergence"][0]["finest_pair_change_percent"]["raw_peak_tensile_MPa"] = 1.
        with self.assertRaisesRegex(ValueError, "Mesh sensitivity"):
            self.check()


class MechanismEquilibriumTests(unittest.TestCase):
    def test_no_offset_no_follower_resistance_recovers_simple_friction(self):
        answer = sim.coupled_guide_force(12., .15, 0., 31.1, 49.5, 28.5, 60., 0., 1.5)
        expected = 2 * .15 * 12 * (1 + (31.1 - 28.5) / (49.5 - 31.1))
        self.assertAlmostEqual(answer["required_horizontal_N"], expected)

    def test_force_and_pitching_moment_balance(self):
        p, mu, mf, a, b, x, xp, e, half = 12., .3, .15, 31.1, 49.5, 30.2, 64., 1.8, 1.5
        for direction in (-1, 1):
            r = sim.coupled_guide_force(p, mu, mf, a, b, x, xp, e, half, direction)
            q, ra, rb, v = [r[k] for k in ("required_horizontal_N", "front_vertical_reaction_N", "rear_vertical_reaction_N", "follower_vertical_force_N")]
            self.assertAlmostEqual(p + ra + rb + v, 0)
            self.assertAlmostEqual(q, mu * (p + abs(ra) + abs(rb)))
            self.assertAlmostEqual((a - x) * p - (b - a) * rb - (xp - a) * v + e * q - mu * half * v, 0)

    def test_frictionless_guides_need_no_horizontal_load(self):
        r = sim.coupled_guide_force(12., 0., .15, 31.1, 49.5, 28.5, 60., 1., 1.5)
        self.assertEqual(r["required_horizontal_N"], 0.)

    def test_excessive_offset_has_no_positive_finite_solution(self):
        r = sim.coupled_guide_force(12., .3, 0., 31.1, 35.6, 28.5, 60., 20., 1.5)
        self.assertIsNone(r["required_horizontal_N"])


class CommittedHandoffTests(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root = Path(temp.name)
        self.design = self.root / "design"
        self.cad = self.design / "cad"
        (self.cad / "vendor").mkdir(parents=True)
        for name in ("build.py", "manufacturing.py", "parameters.json", "vendor/HS-65HB-vendor.step"):
            (self.cad / name).write_text("test-fixture-source")
        self.shipped, self.fresh = self.design / "manufacturing", self.root / "fresh"
        for folder in (self.shipped, self.fresh):
            folder.mkdir(parents=True)
            (folder / "meshes").mkdir()
            (folder / "assembly.step").write_text("test-fixture-step")
            gate.dump(folder / "assembly.json", {"part": "fixture", "bounds": [0, 3]})
            gate.dump(folder / "geometry.json", {"units": "mm", "x": 3})
            gate.dump(folder / "clearance.json", {"all_passed": True})
            gate.dump(folder / "meshes/fixture.json", {"vertices": [0, 1, 2]})
            manifest = {"printed_parts": [],
                "generator_sha256": gate.sha(self.cad / "build.py"),
                "manufacturing_generator_sha256": gate.sha(self.cad / "manufacturing.py"),
                "parameters_sha256": gate.sha(self.cad / "parameters.json"),
                "vendor_step_sha256": gate.sha(self.cad / "vendor/HS-65HB-vendor.step"),
                "generator_sources": {str(p.relative_to(self.cad)): gate.sha(p) for p in self.cad.rglob("*") if p.is_file()},
                "artifacts": {str(p.relative_to(folder)): gate.sha(p) for p in folder.rglob("*") if p.is_file()}}
            gate.dump(folder / "manifest.json", manifest)

    def check(self):
        with patch.object(gate, "DESIGN", self.design), patch.object(gate, "gate_cad", return_value={}):
            return gate.gate_handoff(self.fresh, self.shipped)

    def test_current_handoff_is_accepted(self):
        self.assertEqual(self.check()["status"], "pass")

    def test_changed_drawing_generator_is_rejected(self):
        (self.cad / "manufacturing.py").write_text("changed generator")
        with self.assertRaisesRegex(ValueError, "stale"):
            self.check()

    def test_added_generator_dependency_is_rejected(self):
        (self.cad / "new-helper.py").write_text("new dependency")
        with self.assertRaisesRegex(ValueError, "dependencies"):
            self.check()

    def test_changed_committed_mesh_is_rejected(self):
        (self.shipped / "meshes/fixture.json").write_text("corrupted mesh")
        with self.assertRaisesRegex(ValueError, "artifact changed"):
            self.check()

    def test_fresh_geometry_must_match_shipped_scene(self):
        gate.dump(self.fresh / "assembly.json", {"part": "fixture", "bounds": [0, 4]})
        with self.assertRaisesRegex(ValueError, "freshly rebuilt"):
            self.check()

    def test_unhashed_extra_export_is_rejected(self):
        (self.shipped / "untracked-print.stl").write_text("extra print")
        with self.assertRaisesRegex(ValueError, "not hashed"):
            self.check()


if __name__ == "__main__":
    unittest.main()
