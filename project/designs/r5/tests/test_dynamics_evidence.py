"""Prevent historical or stale FEA from resurfacing as current vibration data."""
import hashlib
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5 / "analysis")]
import export_web
from risks import dynamics


class DynamicsEvidenceTests(unittest.TestCase):
    def test_missing_fea_withholds_frequency_and_impact_force(self):
        result = dynamics(None)
        self.assertIn("pending", result["fea_status"])
        self.assertNotIn("payload_mode_Hz", result)
        self.assertNotIn("support_stiffness_N_per_mm_rigid_wing", result)
        self.assertTrue(all("impact_force_N" not in row for row in result["rattle_impact"]))

    def test_legacy_and_failed_fea_are_rejected(self):
        for result in ({"cases": {}}, {"schema_version": 2, "numerical_validation_passed": False}):
            with self.assertRaisesRegex(ValueError, "mesh-converged"):
                dynamics(result)

    def test_current_compliance_is_used_and_a_changed_source_is_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "analysis").mkdir()
            (root / "cad").mkdir()
            (root / "out").mkdir()
            names = ["params.py", "cad/build.py", "analysis/fea.py", "analysis/load_audit.py",
                     "analysis/linear_solver.py", "analysis/evidence.py",
                     "out/body.step", "out/keeper.step", "out/adapter.step"]
            for name in names:
                (root / name).write_text(name)
            sha = lambda name: hashlib.sha256((root / name).read_bytes()).hexdigest()
            cad = dict(source_sha256={name: sha(name) for name in ("params.py", "cad/build.py")},
                       step_sha256={part: sha(f"out/{part}.step") for part in ("body", "keeper", "adapter")})
            (root / "out/cad.json").write_text(json.dumps(cad))
            identities = {name: sha(name) for name in names + ["out/cad.json"]}
            summary = dict(schema_version=2, numerical_validation_passed=True, analysis_id="fresh-test",
                           source_sha256=identities, dependencies={}, load_N=12.0,
                           cases={part: {"fine": {"load_point_disp_mm": u}} for part, u in
                                  (("body", 0.01), ("keeper", 0.02), ("adapter", 0.03))})
            summary["source_id"] = hashlib.sha256(json.dumps(dict(files=identities, dependencies={}), sort_keys=True).encode()).hexdigest()
            with patch.object(export_web, "HERE", root / "analysis"):
                result = dynamics(summary)
                self.assertAlmostEqual(result["support_stiffness_N_per_mm_rigid_wing"], 200.0)
                self.assertEqual(result["fea_analysis_id"], "fresh-test")
                (root / "params.py").write_text("changed geometry")
                with self.assertRaisesRegex(ValueError, "stale FEA"):
                    dynamics(summary)


if __name__ == "__main__":
    unittest.main()
