"""Shared stress criteria and mesh gates for numerical reports and viewer fields."""
import hashlib
import json
from pathlib import Path

import numpy as np

DISPLACEMENT_CHANGE_LIMIT_PCT = 5.0
UTILIZATION_CHANGE_LIMIT_PCT = 5.0


def validate_source_identities(root, identities):
    """Reject computations whose captured inputs changed before publication."""
    root = Path(root).resolve()
    changed = []
    for name, expected in identities.items():
        path = (root/name).resolve()
        if (not path.is_relative_to(root) or not path.is_file()
                or hashlib.sha256(path.read_bytes()).hexdigest() != expected):
            changed.append(name)
    if changed:
        raise ValueError(f"analysis sources changed during solve: {changed}")


def validate_cad_inputs(root, parts):
    """Reject STEP files or parameter/generator inputs stale since CAD regeneration."""
    root = Path(root).resolve()
    report = json.loads((root / "out/cad.json").read_text())
    identities = report.get("source_sha256", {})
    if not {"params.py", "cad/build.py"}.issubset(identities):
        raise ValueError("regenerate CAD: missing parameter/generator provenance")
    for name, expected in identities.items():
        path = (root / name).resolve()
        if not path.is_relative_to(root) or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            raise ValueError(f"regenerate CAD: source changed: {name}")
    for part in parts:
        digest = hashlib.sha256((root / "out" / f"{part}.step").read_bytes()).hexdigest()
        if report.get("step_sha256", {}).get(part) != digest:
            raise ValueError(f"regenerate CAD: STEP identity changed: {part}")


def stress_utilizations(stress, print_axis, allow_xy, allow_z):
    """Provisional comparison criteria, not a measured printed-material failure law.

Principal tension is compared to the in-plane tensile proxy; layer-normal
tension to the across-layer tensile proxy. Compression uses the in-plane
tensile proxy explicitly because no measured compression allowable is supplied.
Interlayer shear is not qualified by these criteria.
"""
    principal = np.linalg.eigvalsh(stress)
    modes = {
        "principal_tension": np.maximum(principal[..., -1], 0) / allow_xy,
        "layer_normal_tension": np.maximum(stress[..., print_axis, print_axis], 0) / allow_z,
        "compression_proxy": np.maximum(-principal[..., 0], 0) / allow_xy,
    }
    modes["governing"] = np.maximum.reduce(list(modes.values()))
    return modes


def relative_change_pct(previous, current):
    if not np.isfinite(previous) or not np.isfinite(current) or current <= 0:
        return float("inf")
    return 100.0 * abs(current - previous) / current


def convergence(previous, current, minimum_refinement_mm=None):
    displacement = relative_change_pct(previous["load_point_disp_mm"], current["load_point_disp_mm"])
    utilization = relative_change_pct(previous["max_utilization_at_proof"], current["max_utilization_at_proof"])
    stable = (displacement <= DISPLACEMENT_CHANGE_LIMIT_PCT
              and utilization <= UTILIZATION_CHANGE_LIMIT_PCT)
    refined = minimum_refinement_mm is None or current["h_mm"] <= minimum_refinement_mm
    return dict(disp_change_pct=displacement, utilization_change_pct=utilization,
                displacement_converged=displacement <= DISPLACEMENT_CHANGE_LIMIT_PCT,
                stress_converged=utilization <= UTILIZATION_CHANGE_LIMIT_PCT,
                monitored_quantities_stable=stable, required_refinement_mm=minimum_refinement_mm,
                refinement_depth_reached=refined, converged=stable and refined)
