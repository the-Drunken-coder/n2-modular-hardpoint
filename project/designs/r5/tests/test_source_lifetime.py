"""A mid-solve input change must not leave a standalone FE PASS report."""
from contextlib import ExitStack, redirect_stdout
import hashlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

import numpy as np

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5/"analysis"), str(R5)]
import actuation_fea
import fea
from evidence import validate_source_identities


def fake_result(h):
    return dict(h_mm=h, global_h_mm=.45, dofs=30, max_disp_mm=.1,
                load_point_disp_mm=.1, max_utilization_at_proof=.5,
                strength_ratio_at_proof=2., governing_peak_mm=[0., 0., 0.],
                p99_9_principal_MPa=2., max_principal_MPa=2.,
                max_across_layer_tension_MPa=1.,
                _field=dict(reference_load_N=fea.P, fi_e=np.ones(1)))


class SourceLifetimeTests(unittest.TestCase):
    def test_changed_or_missing_captured_input_is_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            file = root/"solver.py"
            file.write_text("original")
            identities = {"solver.py": hashlib.sha256(file.read_bytes()).hexdigest()}
            validate_source_identities(root, identities)
            file.write_text("changed")
            with self.assertRaisesRegex(ValueError, "sources changed"):
                validate_source_identities(root, identities)
            file.unlink()
            with self.assertRaisesRegex(ValueError, "sources changed"):
                validate_source_identities(root, identities)

    def test_each_driver_rechecks_cad_generator_before_publishing_pass(self):
        self.check_drivers(change_cad_generator=True)

    def test_each_driver_rejects_input_modified_by_the_last_solve(self):
        self.check_drivers(change_cad_generator=False)

    def check_drivers(self, change_cad_generator):
        for module, name, flag in ((fea, "fea", "numerical_validation_passed"),
                                   (actuation_fea, "actuation_fea", "numerical_screen_passed")):
            with self.subTest(driver=name), tempfile.TemporaryDirectory(dir=R5) as directory, \
                 ExitStack() as stack, redirect_stdout(io.StringIO()):
                output = Path(directory)
                manifest = output/"cad.json"
                manifest.write_text("original manifest")
                (output/"keeper.step").write_text("original STEP")
                stack.enter_context(patch.object(module, "OUT", output))
                validation = stack.enter_context(patch.object(module, "validate_cad_inputs",
                    side_effect=[None, ValueError("CAD generator changed")] if change_cad_generator else None))
                case = dict(part="keeper", sizes=(.35, .25), minimum_refinement_mm=.25)
                if module is fea:
                    stack.enter_context(patch.object(fea, "CASES", {"keeper": case}))
                else:
                    stack.enter_context(patch.object(actuation_fea, "service_opening_case", return_value=(case, {})))
                calls = []
                def solve(case, h, *args, **kwargs):
                    calls.append(h)
                    if h == .25 and not change_cad_generator:
                        manifest.write_text("modified during the final solve")
                    return fake_result(h)
                stack.enter_context(patch.object(fea, "run_case", side_effect=solve))
                expected = "CAD generator changed" if change_cad_generator else "sources changed"
                with self.assertRaisesRegex(ValueError, expected):
                    module.main()
                self.assertEqual(calls, [.35, .25])
                self.assertEqual(validation.call_count, 2)
                report = json.loads((output/f"{name}.json").read_text())
                self.assertIs(report[flag], False)
                markdown = (output/f"{name}.md").read_text()
                self.assertIn("HOLD", markdown)
                self.assertNotIn("PASS", markdown)


if __name__ == "__main__":
    unittest.main()
