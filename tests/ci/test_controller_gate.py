"""Failure-propagation tests for the host-suite CI wrapper; standard library only."""
import contextlib
import importlib.util
import io
import json
import tempfile
import unittest
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("n2_controller_ci_gate", ROOT / "tools/ci/run_controller.py")
gate = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(gate)
REVISION = "1" * 40


class ControllerGateTests(unittest.TestCase):
    def fixture(self, base, test_source):
        root = Path(base) / "repo"
        electronics = root / "project/electronics"
        electronics.mkdir(parents=True)
        for name in ("controller_core.py", "config.py", "main.py"):
            (electronics / name).write_text("# isolated gate fixture\n")
        (electronics / "test_controller.py").write_text(test_source)
        history = root / "project/analysis/validation_20261029/verification_status.json"
        history.parent.mkdir(parents=True)
        history.write_text('{"historic":true}\n')
        return root, history

    def execute(self, root, output):
        with contextlib.redirect_stdout(io.StringIO()):
            return gate.run(root, output, REVISION)

    def test_empty_suite_fails_and_retains_diagnostics(self):
        with tempfile.TemporaryDirectory() as temp:
            root, history = self.fixture(temp, "# no tests\n")
            output = Path(temp) / "artifacts"
            # Python versions differ on the empty-suite exit code. Even a zero
            # code must not turn an empty suite into successful test evidence.
            empty = gate.subprocess.CompletedProcess([], 0, "Ran 0 tests in 0.000s\n\nOK\n")
            with mock.patch.object(gate, "revision", return_value={"source_revision":REVISION,"revision_method":"isolated_test_fixture"}), \
                 mock.patch.object(gate.subprocess, "run", return_value=empty):
                self.assertNotEqual(self.execute(root, output), 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["tests_run"], 0)
            self.assertEqual(result["test_process_returncode"], 0)
            self.assertEqual(result["status"], "FAIL")
            self.assertTrue((output / "controller.log").is_file())
            self.assertEqual(history.read_text(), '{"historic":true}\n')

    def test_failing_test_propagates_nonzero(self):
        with tempfile.TemporaryDirectory() as temp:
            root, _ = self.fixture(temp, "import unittest\nclass Broken(unittest.TestCase):\n def test_failure(self): self.fail('deliberate gate check')\n")
            output = Path(temp) / "artifacts"
            self.assertNotEqual(self.execute(root, output), 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["status"], "FAIL")
            self.assertEqual(result["tests_run"], 1)
            self.assertIn("deliberate gate check", (output / "controller.log").read_text())

    def test_all_skipped_suite_is_not_execution_evidence(self):
        with tempfile.TemporaryDirectory() as temp:
            root, _ = self.fixture(temp, "import unittest\n@unittest.skip('fixture')\nclass Skipped(unittest.TestCase):\n def test_skipped(self): pass\n")
            output = Path(temp) / "artifacts"
            self.assertNotEqual(self.execute(root, output), 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["tests_run"], 1)
            self.assertEqual(result["skipped"], 1)

    def test_current_provenance_and_no_historical_mutation(self):
        with tempfile.TemporaryDirectory() as temp:
            root, history = self.fixture(temp, "import unittest\nclass Working(unittest.TestCase):\n def test_pass(self): self.assertEqual(1+1,2)\n")
            output = Path(temp) / "artifacts"
            self.assertEqual(self.execute(root, output), 0)
            result = json.loads((output / "summary.json").read_text())
            self.assertEqual(result["kind"], "controller")
            self.assertEqual(result["status"], "PASS")
            self.assertEqual(result["checkout_sha"], REVISION)
            self.assertNotEqual(result["checkout_sha"], result["historical_baseline_revision"])
            self.assertEqual(len(result["source_file_sha256"]), 4)
            self.assertEqual(history.read_text(), '{"historic":true}\n')

    def test_historical_or_existing_output_is_rejected(self):
        with tempfile.TemporaryDirectory() as temp:
            root, history = self.fixture(temp, "# no tests\n")
            with self.assertRaises(ValueError):
                gate.prepare_output(root, history.parent)
            output = Path(temp) / "previous"
            output.mkdir()
            (output / "summary.json").write_text("previous evidence")
            with self.assertRaises(ValueError):
                gate.prepare_output(root, output)
            self.assertEqual((output / "summary.json").read_text(), "previous evidence")


if __name__ == "__main__":
    unittest.main()
