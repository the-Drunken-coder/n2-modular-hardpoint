"""Failure-injection tests for the deploy artifact boundary."""
import importlib.util
import json
from pathlib import Path
import shlex
import subprocess
import sys
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location("build_active_preview",
    Path(__file__).resolve().parents[1] / "tools/build_active_preview.py")
preview = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(preview)


class PreviewPipelineTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.design = self.root / "project/designs/r5"
        (self.design / "cad").mkdir(parents=True)
        (self.root / "project/active_design.json").write_text(json.dumps({"id": "r5"}))
        (self.design / "cad/build.py").write_text(
            "from pathlib import Path\n"
            "p=Path('out'); p.mkdir()\n"
            "for n in ('cad.json','body.step','keeper.step','adapter.step'): (p/n).write_text('fixture')\n")
        (self.design / "viewer_build.sh").write_text(
            "#!/usr/bin/env bash\nset -euo pipefail\nexec " + shlex.quote(sys.executable) + " export.py\n")
        (self.design / "export.py").write_text(
            "import json\nfrom pathlib import Path\n"
            "p=Path('out/viewer'); (p/'fea').mkdir(parents=True)\n"
            "parts=[{'id':n,'stl':n+'.stl'} for n in ('body','keeper','adapter')]\n"
            "(p/'manifest.json').write_text(json.dumps({'parts':parts}))\n"
            "for part in parts: (p/part['stl']).write_text('fixture')\n"
            "cases=[{'part':n,'case':'Z'} for n in ('body','keeper','adapter')]\n"
            "(p/'fea/index.json').write_text(json.dumps({'revision':'R5','cases':cases}))\n"
            "for c in cases: (p/'fea'/f\"{c['part']}__Z.json\").write_text('{}')\n")

    def test_success_requires_new_complete_artifacts(self):
        (self.design / "out").mkdir()
        stale = self.design / "out/stale.json"
        stale.write_text("{}")
        preview.build(self.root)
        self.assertFalse(stale.exists())
        preview.validate_assets(self.design)

    def test_cad_failure_is_fatal_before_viewer(self):
        (self.design / "cad/build.py").write_text("raise SystemExit(7)\n")
        with self.assertRaises(subprocess.CalledProcessError) as error:
            preview.build(self.root)
        self.assertEqual(error.exception.returncode, 7)
        self.assertFalse((self.design / "out/viewer").exists())

    def test_export_failure_is_fatal(self):
        (self.design / "export.py").write_text("raise SystemExit(9)\n")
        with self.assertRaises(subprocess.CalledProcessError) as error:
            preview.build(self.root)
        self.assertEqual(error.exception.returncode, 9)

    def test_missing_case_cannot_be_hidden_by_a_successful_process(self):
        export = self.design / "export.py"
        export.write_text(export.read_text() + "(p/'fea/keeper__Z.json').unlink()\n")
        with self.assertRaisesRegex(ValueError, "Missing viewer asset"):
            preview.build(self.root)

    def test_active_design_cannot_silently_fall_back_to_archive(self):
        (self.root / "project/active_design.json").write_text(json.dumps({"id": "p14"}))
        with self.assertRaisesRegex(ValueError, "selected R5"):
            preview.build(self.root)


if __name__ == "__main__":
    unittest.main()
