from pathlib import Path
import hashlib
import json
import sys
import tempfile
import unittest

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "analysis"))
from evidence import convergence, stress_utilizations, validate_cad_inputs


class NumericalEvidenceTests(unittest.TestCase):
    def test_compression_is_in_the_governing_field(self):
        modes = stress_utilizations(np.array([np.diag([-40.0, -2.0, -1.0])]), 2, 35.5, 16.0)
        self.assertAlmostEqual(modes["compression_proxy"][0], 40 / 35.5)
        self.assertEqual(modes["governing"][0], modes["compression_proxy"][0])

    def test_layer_normal_tension_uses_the_weaker_proxy(self):
        modes = stress_utilizations(np.array([np.diag([1.0, 1.0, 8.0])]), 2, 35.5, 16.0)
        self.assertAlmostEqual(modes["governing"][0], 0.5)

    def test_large_strength_ratio_does_not_bypass_stress_convergence(self):
        before = dict(load_point_disp_mm=0.01, max_utilization_at_proof=0.001)
        after = dict(load_point_disp_mm=0.0101, max_utilization_at_proof=0.002)
        gate = convergence(before, after)
        self.assertTrue(gate["displacement_converged"])
        self.assertFalse(gate["stress_converged"])
        self.assertFalse(gate["converged"])

    def test_both_monitored_quantities_must_stabilize(self):
        before = dict(load_point_disp_mm=0.01, max_utilization_at_proof=0.2)
        after = dict(load_point_disp_mm=0.0101, max_utilization_at_proof=0.202)
        self.assertTrue(convergence(before, after)["converged"])

    def test_nonfinite_result_is_not_convergence(self):
        before = dict(load_point_disp_mm=0.01, max_utilization_at_proof=0.2)
        after = dict(load_point_disp_mm=float("nan"), max_utilization_at_proof=0.2)
        self.assertFalse(convergence(before, after)["converged"])

    def test_stale_geometry_and_generator_are_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "cad").mkdir()
            (root / "out").mkdir()
            for name, content in {"params.py": "dimension=1", "cad/build.py": "generator=1", "out/body.step": "STEP body"}.items():
                (root / name).write_text(content)
            sha = lambda name: hashlib.sha256((root / name).read_bytes()).hexdigest()
            report = dict(source_sha256={name: sha(name) for name in ("params.py", "cad/build.py")},
                          step_sha256={"body": sha("out/body.step")})
            (root / "out/cad.json").write_text(json.dumps(report))
            validate_cad_inputs(root, ["body"])
            (root / "params.py").write_text("dimension=2")
            with self.assertRaisesRegex(ValueError, "source changed"):
                validate_cad_inputs(root, ["body"])
            (root / "params.py").write_text("dimension=1")
            (root / "out/body.step").write_text("different STEP")
            with self.assertRaisesRegex(ValueError, "STEP identity changed"):
                validate_cad_inputs(root, ["body"])


if __name__ == "__main__":
    unittest.main()
