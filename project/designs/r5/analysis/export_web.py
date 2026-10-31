"""Export current, audited R5 comparison fields without changing their criteria."""
import hashlib
import json
import sys
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402
from evidence import validate_cad_inputs

OUT = HERE.parent / "out"
WEB = OUT / "viewer" / "fea"


def surface(tet):
    f = np.concatenate([tet[:, [0, 2, 1]], tet[:, [0, 1, 3]], tet[:, [1, 2, 3]], tet[:, [0, 3, 2]]])
    k = np.sort(f, axis=1)
    _, inv, cnt = np.unique(k, axis=0, return_inverse=True, return_counts=True)
    return f[cnt[inv.ravel()] == 1]


def main():
    WEB.mkdir(parents=True, exist_ok=True)
    summ = json.loads((OUT / "fea.json").read_text())
    validate_summary(summ)
    cases = []
    for part in ("adapter", "keeper", "body"):
        d = np.load(OUT / f"{part}_fields.npz")
        meta, body = export_case(part, summ, d)
        (WEB / f"{part}__Z.json").write_text(json.dumps(body, separators=(",", ":")))
        cases.append(meta)
        print(f"{part:8} screen {meta['fail_N']:8.2f} N  strength ratio at reference load {meta['margin_at_proof']:.3f}")
    idx = dict(schema_version=2, revision="R5", material="PAHT-CF comparison proxy", fields_include_allowables=True,
               analysis_id=summ["analysis_id"], reference_load_N=summ["load_N"], source_sha256=summ["source_sha256"],
               design_N=p.P_DESIGN, required_fail_N=p.P_PROOF, working_load_rating_N=None,
               support_exclusion_mm=summ["support_exclusion_mm"],
               mesh_policy=summ["mesh_policy"], max_dofs_per_solve=summ["max_dofs_per_solve"],
               groups={"Z": dict(label="Fully engaged axial load", parts={"adapter": "Z", "keeper": "Z", "body": "Z"})},
               note=(f"Audited {summ['load_N']:.5f} N reference load; displacement and governing utilization each change <=5% "
                     f"between the last two meshes. Principal tension / {p.ALLOW_XY:.1f} MPa, layer-normal tension / {p.ALLOW_Z:.1f} MPa, "
                     f"and compression / {p.ALLOW_XY:.1f} MPa use the same provisional criteria as the report. "
                     f"Grey areas have no evaluated points outside the {summ['support_exclusion_mm']:g} mm ideal-support exclusion. "
                     "Compression/shear properties, printed process, contact and loaded release are unqualified. "
                     "Linear stress screens are not tested failure loads or a working-load rating."),
               cases=cases)
    (WEB / "index.json").write_text(json.dumps(idx, indent=1))


def validate_summary(summary):
    if summary.get("schema_version") != 2 or summary.get("numerical_validation_passed") is not True:
        raise ValueError("viewer requires current audited, mesh-converged numerical evidence")
    required = {"analysis/fea.py", "analysis/load_audit.py", "analysis/linear_solver.py", "analysis/evidence.py", "params.py",
                "out/cad.json", "out/body.step", "out/adapter.step", "out/keeper.step"}
    identities = summary.get("source_sha256", {})
    if not required.issubset(identities):
        raise ValueError("FEA evidence lacks required geometry/model identities")
    source = dict(files=identities, dependencies=summary.get("dependencies", {}))
    if hashlib.sha256(json.dumps(source, sort_keys=True).encode()).hexdigest() != summary.get("source_id"):
        raise ValueError("FEA input identity does not match its source/dependency hashes")
    if not summary.get("analysis_id"):
        raise ValueError("FEA evidence lacks its run identity")
    for name, digest in identities.items():
        if hashlib.sha256((HERE.parent / name).read_bytes()).hexdigest() != digest:
            raise ValueError(f"stale FEA evidence: {name} changed")
    validate_cad_inputs(HERE.parent, ("body", "keeper", "adapter"))


def export_case(part, summary, data):
    """Preserve report/field identity, reference load, criteria and exclusion mask."""
    if str(np.asarray(data["analysis_id"]).item()) != summary["analysis_id"]:
        raise ValueError(f"{part}: field and summary identities differ")
    if not np.isclose(float(data["reference_load_N"]), summary["load_N"], rtol=1e-12):
        raise ValueError(f"{part}: field reference load differs from the audited load")
    pts, tet, fe = data["points_mm"], data["tet4"], data["fi_e"]
    excluded_e = np.asarray(data["excluded_e"], dtype=bool)
    fine = summary["cases"][part]["fine"]
    if not fine.get("converged") or not np.isclose(fe.max() * summary["load_N"], fine["max_utilization_at_proof"], rtol=1e-10):
        raise ValueError(f"{part}: viewer field does not match the converged report criteria")
    nodal = np.zeros(len(pts))
    evaluated = np.zeros(len(pts), dtype=bool)
    np.maximum.at(nodal, tet.ravel(), np.repeat(fe, 4))
    np.logical_or.at(evaluated, tet.ravel(), np.repeat(~excluded_e, 4))
    tri = surface(tet)
    used = np.unique(tri)
    remap = -np.ones(len(pts), int)
    remap[used] = np.arange(len(used))
    peak_i = int(np.argmax(fe))
    peak = data.get("peak_mm", pts[tet[peak_i]].mean(0))
    screen = float(1 / fe.max())
    ratio = screen / summary["load_N"]
    if not np.isclose(ratio, fine["strength_ratio_at_proof"], rtol=1e-10):
        raise ValueError(f"{part}: exported strength ratio differs from report")
    meta = dict(part=part, case="Z", label="Fully engaged axial load", in_scope=True,
                fail_N=screen, stress_screen_N=screen, margin_at_proof=ratio,
                reference_load_N=summary["load_N"], working_load_rating_N=None,
                governing_fi_per_N=float(fe.max()), peak_mm=np.asarray(peak).tolist(),
                h_mm=fine["h_mm"], global_h_mm=fine["global_h_mm"], dofs=fine["dofs"],
                local_refinement_centres_mm=fine["local_refinement_centres_mm"],
                local_refinement_radius_mm=fine["local_refinement_radius_mm"],
                elements=int(len(tet)), analysis_id=summary["analysis_id"],
                disp_change_pct=fine["disp_change_pct"], utilization_change_pct=fine["utilization_change_pct"],
                raw_max_utilization_at_proof=fine["raw_max_utilization_at_proof"],
                support_exclusion_mm=summary["support_exclusion_mm"], applied_load_audit=fine["equilibrium"])
    body = dict(meta, pos=np.round(pts[used], 5).ravel().tolist(), idx=remap[tri].ravel().tolist(),
                fi=nodal[used].tolist(), excluded=(~evaluated[used]).tolist())
    return meta, body


if __name__ == "__main__":
    main()
