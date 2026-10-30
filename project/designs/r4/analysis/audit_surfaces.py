#!/usr/bin/env python3
"""Check planned finite planar load/fixture patches against actual CAD faces."""
from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path

import cadquery as cq


def read(path):
    return json.loads(Path(path).read_text())


def patch_face(selector):
    axis = selector.get("normal_axis")
    if axis not in (0, 1, 2) or "xyz"[axis] not in selector:
        return None
    level = selector["xyz"[axis]]
    if axis == 2 and "circle_xy" in selector:
        x, y, radius = selector["circle_xy"]
        wire = cq.Wire.makeCircle(radius, cq.Vector(x, y, level), cq.Vector(0, 0, 1))
        return cq.Face.makeFromWires(wire)
    if axis == 2 and "annulus_xy" in selector:
        x, y, inner, outer = selector["annulus_xy"]
        a = cq.Wire.makeCircle(outer, cq.Vector(x, y, level), cq.Vector(0, 0, 1))
        b = cq.Wire.makeCircle(inner, cq.Vector(x, y, level), cq.Vector(0, 0, 1))
        return cq.Face.makeFromWires(a, [b])
    other = [k for k in range(3) if k != axis]
    if not all("xyz"[k] + "_range" in selector for k in other):
        return None
    (a, b), (c, d) = [selector["xyz"[k] + "_range"] for k in other]
    points = []
    for u, v in ((a, c), (b, c), (b, d), (a, d)):
        point = [0., 0., 0.]
        point[axis], point[other[0]], point[other[1]] = level, u, v
        points.append(cq.Vector(*point))
    face = cq.Face.makeFromWires(cq.Wire.makePolygon(points, close=True))
    if "cad_exclude_disk" in selector:
        hole = selector["cad_exclude_disk"]
        normal = [0., 0., 0.]
        normal[axis] = 1.
        wire = cq.Wire.makeCircle(hole["radius"], cq.Vector(*hole["center"]), cq.Vector(*normal))
        face = face.cut(cq.Face.makeFromWires(wire))
    return face


def audit(fea):
    manifest = read(fea / "manifest.json")
    records, gauge_records, nonplanar = [], [], []
    for plan in manifest["plans"]:
        config = read(fea / plan["config"])
        shape = cq.importers.importStep(config["step_path"]).val()
        if len(shape.Solids()) != 1 or not shape.isValid():
            raise ValueError("Invalid physical CAD part for surface audit")
        seen, gauges_seen = set(), set()
        for case, specification in config["cases"].items():
            for item in specification.get("loads", []) + specification.get("supports", []):
                selector = item["selector"]
                identity = json.dumps(selector, sort_keys=True)
                if identity in seen:
                    continue
                seen.add(identity)
                patch = patch_face(selector)
                if patch is None:
                    nonplanar.append({"part": plan["part"], "label": item["label"], "selector": selector,
                        "status": "deferred_to_mesh_boundary_audit"})
                    continue
                axis, level = selector["normal_axis"], selector["xyz"[selector["normal_axis"]]]
                matches = []
                for face in shape.Faces():
                    if face.geomType() != "PLANE":
                        continue
                    normal, center = face.normalAt().toTuple(), face.Center().toTuple()
                    if abs(abs(normal[axis]) - 1) > 1e-8 or abs(center[axis] - level) > 1e-6:
                        continue
                    overlap = face.intersect(patch).Area()
                    if overlap > 1e-9:
                        matches.append({"area_mm2": overlap, "face_normal": list(normal)})
                expected, covered = patch.Area(), sum(m["area_mm2"] for m in matches)
                passed = math.isclose(covered, expected, rel_tol=1e-5, abs_tol=1e-5)
                records.append({"part": plan["part"], "label": item["label"], "selector": selector,
                    "expected_area_mm2": expected, "covered_CAD_boundary_area_mm2": covered,
                    "faces": matches, "passed": passed})
            for gauge in specification.get("anchors", []):
                identity = tuple(gauge["point_mm"])
                if identity in gauges_seen:
                    continue
                gauges_seen.add(identity)
                distance = shape.distance(cq.Vertex.makeVertex(*identity))
                gauge_records.append({"part": plan["part"], "point_mm": list(identity),
                    "distance_to_CAD_mm": distance, "passed": distance < 1e-7})
    result = {"status": "pass" if all(r["passed"] for r in records + gauge_records) else "fail",
        "planar_patches": records, "gauge_points": gauge_records, "other_selectors": nonplanar,
        "scope": "Exact planar footprint coverage on actual external CAD faces; not a contact-closure or material-strength test.",
        "source_steps": manifest["source_steps"]}
    (fea / "surface-audit.json").write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps({"status": result["status"], "planar_patches": len(records),
        "gauge_points": len(gauge_records), "nonplanar_selectors": len(nonplanar),
        "failed": [r for r in records + gauge_records if not r["passed"]]}, indent=2))
    if result["status"] != "pass":
        raise SystemExit(2)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fea", type=Path, required=True)
    audit(parser.parse_args().fea.resolve())
