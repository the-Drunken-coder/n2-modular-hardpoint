#!/usr/bin/env python3
"""Check frozen hashes and relocated prepare-only replay; never run FEA.

Uses Python's standard library. It also checks the N2 historical friction
arithmetic against its archived output; that is not physical validation.
"""
from pathlib import Path
import hashlib
import json
import shutil
import subprocess
import sys
import tempfile

HERE = Path(__file__).resolve().parent


def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()


def run(args, cwd):
    proc = subprocess.run([sys.executable, *map(str, args)], cwd=cwd,
                          text=True, capture_output=True, check=True)
    return proc.stdout


def main():
    manifest = json.loads((HERE / "input_manifest.json").read_text())
    archive = json.loads((HERE / "archive_manifest.json").read_text())
    for entry in archive["files"]:
        p = HERE / entry["path"]
        assert p.is_file(), str(p)
        assert sha(p) == entry["sha256"], str(p)
    for run_record in manifest["issued_runs"]:
        for name in run_record["reference_results"]:
            assert (HERE / name).is_file()
    material = json.loads((HERE / "material.json").read_text())
    cases = []
    for p in (HERE / "results").glob("*/h*/*.json"):
        r = json.loads(p.read_text())
        if "case" in r:
            assert r["variant"] == "N2"
            assert r["material"] == material
            cases.append(r)
    fields = list((HERE / "results").glob("*/h*/*_fields.npz"))
    meshes = list((HERE / "results").glob("*/h*/mesh.msh"))
    assert (len(cases), len(fields), len(meshes)) == (39, 39, 10)
    checked_configs = []
    with tempfile.TemporaryDirectory(prefix="n2_portable_") as td:
        td = Path(td)
        relocated = td / "focused_package"
        relocated.mkdir()
        for entry in manifest["files"]:
            target = relocated / entry["path"]
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(HERE / entry["path"], target)
        shutil.copy2(HERE / "input_manifest.json", relocated / "input_manifest.json")
        verified = json.loads(run([relocated / "reproduce.py", "--verify-only"], td))
        listing = run([relocated / "reproduce.py", "--list"], td)
        assert "10 run steps / 39 cases" in listing
        output = td / "prepared"
        run([relocated / "reproduce.py", "--prepare-only", "--output", output], td)
        record = json.loads((output / "replay_manifest.json").read_text())
        assert record["status"] == "prepared"
        assert record["environment"] is None
        assert record["replay_solver_sha256"] == manifest["replay_solver"]["sha256"]
        assert record["material_sha256"] == manifest["material"]["sha256"]
        for name, info in record["configs"].items():
            orig = json.loads((HERE / name).read_text())
            remap = json.loads((output / "configs" / Path(name).name).read_text())
            assert orig["cases"] == remap["cases"]
            assert info["case_metadata_preserved"]
            p = Path(remap["step_path"])
            assert p.is_relative_to(output)
            assert p.exists() and sha(p) == orig["expected_step_sha256"]
            assert str(HERE.parent.parent) not in remap["step_path"]
            assert not remap["imprint_step_files"]
            # Remapping may add an empty imprint list. Every other nonpath
            # numeric/selector/mesher field must stay exactly as issued.
            for key, value in orig.items():
                if key not in ["step_path", "imprint_step_files"]:
                    assert remap[key] == value, (name, key)
            checked_configs.append({"configuration": name, "cases_unchanged": True,
                                    "numeric_and_mesh_fields_unchanged": True,
                                    "geometry_sha256": sha(p),
                                    "relocated_step_is_inside_new_output": True})
        # Check the focused historical arithmetic independently of the source
        # workspace. These are no-load-path-change statics, not a new FE solve.
        hist = td / "historical_release"
        shutil.copytree(HERE / "historical_release", hist,
                        ignore=shutil.ignore_patterns("__pycache__"))
        hresult = json.loads(run([hist / "reproduce_release.py", "--output", td / "friction_replay"], td))
        equilibrium = json.loads(run([hist / "verify_equilibrium.py"], td))
        assert equilibrium["status"] == "PASS"
    report = {
        "status": "PASS",
        "date": "2026-10-27",
        "scope": "Frozen input integrity, archived output copy integrity, relocated prepare-only FE replay and historical N2 arithmetic only. No new FE solve or physical test.",
        "input_verification": verified,
        "archived_outputs": {"file_count": len(archive["files"]),
                             "all_hashes_match": True, "case_results": len(cases),
                             "all_cases_N2_same_PLA": True,
                             "field_arrays": len(fields), "meshes": len(meshes)},
        "issued_run_steps": len(manifest["issued_runs"]),
        "case_solves_available": sum(len(x["cases"]) for x in manifest["issued_runs"]),
        "relocated_configs": checked_configs,
        "new_FEA_performed": False,
        "historical_release": {k: v for k, v in hresult.items() if k != "output"},
        "historical_equilibrium": equilibrium,
        "historical_driver_limitation": manifest["driver_history"]["historical_hash_limitation"],
    }
    path = HERE / "audits/portability_check.json"
    path.write_text(json.dumps(report, indent=2) + "\n")
    (HERE / "historical_release/equilibrium_verification.json").write_text(json.dumps(equilibrium, indent=2) + "\n")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
