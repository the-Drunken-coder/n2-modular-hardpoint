"""Negative checks for selecting the wrong design or claiming unearned evidence."""
import importlib.util
import json
import shutil
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("current_design_check", ROOT / "tools/check_current_baseline.py")
baseline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(baseline)


class CurrentDesignTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        paths = [
            "project/active_design.json", "project/designs/r5/design.json", "project/designs/r5/params.py",
            "project/designs/r5/cad/build.py", "project/designs/r5/BOM.md", "project/designs/r5/PRINTING.md",
            "project/designs/r5/electronics/README.md", "project/cad/N2/active_metadata.json",
            "README.md", "docs/requirements.md", "docs/test-plan.md", "docs/print-requirements.md",
            "docs/EVIDENCE_AND_READINESS.md", "docs/p14-requirements.md", "docs/p14-test-plan.md",
        ]
        for name in paths:
            dest = self.root / name
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(ROOT / name, dest)

    def edit_json(self, name, fn):
        path = self.root / name
        data = json.loads(path.read_text())
        fn(data)
        path.write_text(json.dumps(data))

    def test_current_sources_pass(self):
        self.assertEqual(baseline.check(self.root), [])

    def test_p14_cannot_become_current_silently(self):
        self.edit_json("project/active_design.json", lambda d: d.update(id="N2", metadata="project/cad/N2/active_metadata.json"))
        self.assertTrue(any("selection" in e for e in baseline.check(self.root)))

    def test_stale_force_is_rejected(self):
        self.edit_json("project/designs/r5/design.json", lambda d: d["requirements"].update(release_load_N=17.8088764))
        self.assertTrue(any("force" in e for e in baseline.check(self.root)))

    def test_consistent_but_reduced_proof_multiplier_is_rejected(self):
        self.edit_json("project/designs/r5/design.json", lambda d: d["requirements"].update(
            retention_proof_multiplier=1.5, retention_proof_target_N=8.9044382 * 1.5))
        path = self.root / "project/designs/r5/params.py"
        text = path.read_text()
        self.assertIn("P_PROOF = 2 * P_DESIGN", text)
        path.write_text(text.replace("P_PROOF = 2 * P_DESIGN", "P_PROOF = 1.5 * P_DESIGN"))
        self.assertTrue(any("Selected retention proof multiplier" in e for e in baseline.check(self.root)))

    def test_physical_claim_requires_review(self):
        self.edit_json("project/designs/r5/design.json", lambda d: d["evidence"].update(physical_tests_performed=True, working_load_rating_N=8.9))
        self.assertTrue(any("physical evidence" in e for e in baseline.check(self.root)))
        self.assertTrue(any("working-load" in e for e in baseline.check(self.root)))

    def test_scope_change_is_rejected(self):
        self.edit_json("project/designs/r5/design.json", lambda d: d["requirements"].update(power_off_retention_required=True))
        self.assertTrue(any("scope" in e for e in baseline.check(self.root)))

    def test_old_entry_point_is_rejected(self):
        (self.root / "docs/requirements.md").write_text("# P14 requirements\n")
        self.assertTrue(any("entry point" in e for e in baseline.check(self.root)))


if __name__ == "__main__":
    unittest.main()
