"""Test CAD gate failure paths without importing a CAD kernel or running a solver."""
import contextlib
import importlib.util
import io
import json
import tempfile
import types
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("n2_cad_ci_gate", ROOT / "tools/ci/run_cad.py")
gate = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(gate)
REVISION = "1" * 40


class FakeShape:
    def isValid(self): return True
    def Solids(self): return [self]
    def Volume(self): return 1.0
    def translate(self, vector): return self
    def rotate(self, start, end, angle): return self
    def intersect(self, other): return types.SimpleNamespace(Volume=lambda: 0.0)


FAKE_CQ = types.SimpleNamespace(__version__="test-double", importers=types.SimpleNamespace(
    importStep=lambda path: types.SimpleNamespace(val=lambda: FakeShape())))


class CadGateTests(unittest.TestCase):
    def test_changed_step_is_rejected_before_old_expectations_are_used(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp) / "repo"
            cad = root / "project/cad/N2"
            cad.mkdir(parents=True)
            for name in ("receiver", "adapter", "keeper"):
                (cad / f"N2_{name}.step").write_text("changed geometry fixture")
            output = Path(temp) / "artifacts"
            with contextlib.redirect_stdout(io.StringIO()):
                code = gate.run(root, output, REVISION)
            self.assertNotEqual(code, 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["status"], "FAIL")
            self.assertEqual(result["checkout_sha"], REVISION)
            identity = json.loads((output / "p14_input_identity.json").read_text())
            self.assertEqual(identity["status"], "FAIL")
            self.assertEqual(len(identity["inputs"]), 3)

    def test_failed_clearance_keeps_each_pose_record(self):
        expectation = json.loads(gate.EXPECTATION.read_text())
        result = gate.clearance(Path("unused-fixture"), expectation, FAKE_CQ)
        self.assertEqual(result["status"], "FAIL")
        self.assertEqual(result["cases_run"], 16)
        self.assertTrue(any(not c["check_pass"] for c in result["checks"]))
        with tempfile.TemporaryDirectory() as temp:
            gate.write_clearance(Path(temp), result)
            saved = json.loads((Path(temp) / "clearance.json").read_text())
            self.assertEqual(len(saved["checks"]), 16)
            self.assertEqual(len((Path(temp) / "clearance.csv").read_text().splitlines()), 17)

    def test_truncated_regeneration_cannot_be_a_pass(self):
        report = {"status":"PASS", "parts":[{"passed":True}], "assembly":{"passed":True},
                  "viewer":{"part_count":13,"motion_and_explode_identical":True}}
        self.assertFalse(gate.assess_regeneration(report, 13))

    def test_clearance_failure_propagates_through_full_wrapper(self):
        expected = json.loads(gate.EXPECTATION.read_text())
        failed = gate.clearance(Path("unused-fixture"), expected, FAKE_CQ)
        def successful_process(command, root, log, timeout):
            log.write_text("isolated subprocess fixture\n")
            if "--report" in command:
                path = Path(command[command.index("--report")+1])
                gate.save(path, {"status":"PASS", "parts":[{"passed":True} for _ in range(13)],
                    "assembly":{"passed":True},"viewer":{"part_count":13,"motion_and_explode_identical":True}})
            return {"returncode":0,"log":log.name}
        with tempfile.TemporaryDirectory() as temp, \
             mock.patch.object(gate, "revision", return_value={"source_revision":REVISION,"revision_method":"isolated_test_fixture"}), \
             mock.patch.object(gate, "execute", side_effect=successful_process), \
             mock.patch.object(gate, "clearance", return_value=failed):
            output = Path(temp) / "artifacts"
            with contextlib.redirect_stdout(io.StringIO()):
                code = gate.run(ROOT, output)
            self.assertNotEqual(code, 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["kind"], "cad")
            self.assertEqual(result["status"], "FAIL")
            self.assertEqual(result["regeneration_parts"], 13)
            self.assertEqual(result["clearance_checks"], 16)
            self.assertTrue((output / "clearance.csv").is_file())


if __name__ == "__main__":
    unittest.main()
