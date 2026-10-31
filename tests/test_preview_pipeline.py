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
            "for c in cases: (p/'fea'/f\"{c['part']}__Z.json\").write_text('{}')\n"
            "reports={'coupled_forces.json':{'numerical_screen_passed':True},\n"
            "'mechanics.json':{'numerical_checks_passed':True},\n"
            "'yoke_strength.json':{'service_section_screen_pass':True,'prescribed_closing_jam_section_screen_pass':True},\n"
            "'actuation_fea.json':{'numerical_screen_passed':True},\n"
            "'body_actuation_fea.json':{'numerical_screen_passed':True},\n"
            "'risks.json':{'gates':{'fixture':True}}}\n"
            "for name,report in reports.items(): (p.parent/name).write_text(json.dumps(report))\n")

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

    def test_missing_numerical_report_is_fatal(self):
        preview.build(self.root)
        for name in ("coupled_forces.json", "mechanics.json", "yoke_strength.json",
                     "actuation_fea.json", "body_actuation_fea.json", "risks.json"):
            path = self.design / "out" / name
            original = path.read_text()
            with self.subTest(report=name):
                path.unlink()
                with self.assertRaisesRegex(ValueError, "Missing active preview artifact"):
                    preview.validate_assets(self.design)
                path.write_text(original)

    def test_failed_or_absent_numerical_gate_is_fatal(self):
        preview.build(self.root)
        cases = {
            "coupled_forces.json": ("numerical_screen_passed",),
            "mechanics.json": ("numerical_checks_passed",),
            "yoke_strength.json": ("service_section_screen_pass",
                                   "prescribed_closing_jam_section_screen_pass"),
            "actuation_fea.json": ("numerical_screen_passed",),
            "body_actuation_fea.json": ("numerical_screen_passed",),
        }
        for name, flags in cases.items():
            path = self.design / "out" / name
            original = json.loads(path.read_text())
            for flag in flags:
                for invalid in (None, False, 1, "true"):
                    with self.subTest(report=name, flag=flag, value=invalid):
                        changed = dict(original)
                        if invalid is None:
                            changed.pop(flag)
                        else:
                            changed[flag] = invalid
                        path.write_text(json.dumps(changed))
                        with self.assertRaisesRegex(ValueError, "Failed or missing numerical gate"):
                            preview.validate_assets(self.design)
            path.write_text(json.dumps(original))
        path = self.design / "out/risks.json"
        for gates in (None, {}, [], {"a": True, "b": False}, {"a": 1}):
            with self.subTest(risk_gates=gates):
                path.write_text(json.dumps({"gates": gates}))
                with self.assertRaisesRegex(ValueError, "risks.json:gates"):
                    preview.validate_assets(self.design)


if __name__ == "__main__":
    unittest.main()
