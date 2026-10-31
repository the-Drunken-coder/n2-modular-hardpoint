"""Viewer assembly for R5: every part (printed, purchased, payload, wing), fine STLs,
manifest with colours, explode vectors and release kinematics. Output: ../out/viewer (gitignored).

    python project/designs/r5/cad/build.py && python project/designs/r5/cad/viewer.py
Purchased parts are modelled from params.py / listing dims, not vendor CAD.
"""
import json
import sys
from math import cos, pi, radians, sin
from pathlib import Path

import cadquery as cq

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
sys.path.insert(0, str(HERE))
import params as p  # noqa: E402
from build import adapter, body, box, cable_gland, horn_screw, keeper, ycyl, zcyl  # noqa: E402

OUT = HERE.parent / "out" / "viewer"
X0 = p.SHAFT_X - p.SHAFT_FROM_END                 # servo case -X end
C = p.SERVO_CASE
CZ0, CZ1 = p.SHAFT_Z - C["w"] / 2, p.SHAFT_Z + C["w"] / 2
CASE_TOP_Y = p.SERVO_BOTTOM_Y + C["h"]            # 33
HORN_Y = (CASE_TOP_Y + 1.5, p.SPLINE_TOP_Y)       # horn hub sits on the spline
WING_T = 3.0


def servo_case():
    s = box(X0, X0 + C["l"], p.SERVO_BOTTOM_Y, CASE_TOP_Y, CZ0, CZ1).edges("|Y").fillet(0.8)
    # mounting ears (flange) at EAR_Y, 2.5 thick, with slotted screw holes
    ear = box(X0 - (p.EAR_SPAN - C["l"]) / 2, X0 + C["l"] + (p.EAR_SPAN - C["l"]) / 2,
              p.EAR_Y, p.EAR_Y + 2.5, CZ0, CZ1).edges("|Y").fillet(0.6)
    s = s.union(ear)
    off = (p.EAR_SPAN - C["l"]) / 4
    for ex in (X0 - off, X0 + C["l"] + off):
        s = s.cut(ycyl(ex, p.SHAFT_Z, p.EAR_Y - 1, p.EAR_Y + 4, 2.2))
    # case seams (lid / bottom cap grooves)
    for y in (p.SERVO_BOTTOM_Y + 3.0, CASE_TOP_Y - 4.0):
        s = s.cut(box(X0 - 1, X0 + C["l"] + 1, y, y + 0.3, CZ0 - 1, CZ0 + 0.25))
        s = s.cut(box(X0 - 1, X0 + C["l"] + 1, y, y + 0.3, CZ1 - 0.25, CZ1 + 1))
    # gear tower: big boss on the shaft, small boss for the idler
    s = s.union(ycyl(p.SHAFT_X, p.SHAFT_Z, CASE_TOP_Y - 0.1, CASE_TOP_Y + 1.5, 11.6))
    s = s.union(ycyl(p.SHAFT_X + 6.0, p.SHAFT_Z, CASE_TOP_Y - 0.1, CASE_TOP_Y + 1.0, 6.0))
    # cable gland at the -X end, low
    s = s.union(cable_gland())
    return s


def servo_spline():
    # 20-tooth output spline, 4.8 mm OD, rotates with the horn
    n, ro, ri = 20, 2.4, 2.1
    pts = []
    for i in range(2 * n):
        a = pi * i / n
        r = ro if i % 2 == 0 else ri
        pts.append((p.SHAFT_X + r * cos(a), p.SHAFT_Z + r * sin(a)))
    prof = cq.Workplane("XZ").polyline(pts).close().extrude(-(HORN_Y[0] + 0.5 - (CASE_TOP_Y + 1.4)))
    return prof.translate((0, CASE_TOP_Y + 1.4, 0))


def horn():
    """Stock single-arm horn at the latched angle (arm toward -X, alpha = 180 deg)."""
    y0, y1 = HORN_Y
    hub = ycyl(p.SHAFT_X, p.SHAFT_Z, y0, y1, 7.0)
    tip_r, tip_c = 2.2, p.HORN_REACH - 2.2
    arm = (cq.Workplane("XZ").moveTo(p.SHAFT_X, p.SHAFT_Z + 3.2).lineTo(p.SHAFT_X - tip_c, p.SHAFT_Z + tip_r)
           .threePointArc((p.SHAFT_X - tip_c - tip_r, p.SHAFT_Z), (p.SHAFT_X - tip_c, p.SHAFT_Z - tip_r))
           .lineTo(p.SHAFT_X, p.SHAFT_Z - 3.2).close().extrude(-1.6).translate((0, y1 - 1.6, 0)))
    s = hub.union(arm)
    s = s.cut(ycyl(p.SHAFT_X, p.SHAFT_Z, y0 - 1, y1 + 1, 2.0))                    # centre screw hole
    s = s.cut(ycyl(p.SHAFT_X - p.CRANK_R, p.SHAFT_Z, y0 - 1, y1 + 1, 1.6))        # crank hole (M2 tap)
    s = s.cut(ycyl(p.SHAFT_X - p.CRANK_R - 2.0, p.SHAFT_Z, y0 - 1, y1 + 1, 1.2))  # spare outer hole
    return s


def pin_screw():
    """M2 x 8 pan head: threads into the horn's crank hole through the keeper slot."""
    x = p.SHAFT_X - p.CRANK_R
    ky1 = p.YK + p.KEEPER_W / 2
    shank = ycyl(x, p.SHAFT_Z, HORN_Y[1] - 1.6, ky1 + 0.4, p.PIN_D)
    head = ycyl(x, p.SHAFT_Z, ky1 + 0.4, ky1 + 1.7, 3.8).faces(">Y").edges().fillet(0.5)
    return shank.union(head).cut(box(x - 0.3, x + 0.3, ky1 + 1.0, ky1 + 2, p.SHAFT_Z - 1.4, p.SHAFT_Z + 1.4))


def ear_screws():
    off = (p.EAR_SPAN - C["l"]) / 4
    s = None
    for ex in (X0 - off, X0 + C["l"] + off):
        one = ycyl(ex, p.SHAFT_Z, p.EAR_Y - 6.0, p.EAR_Y + 2.5, 1.8).union(
            ycyl(ex, p.SHAFT_Z, p.EAR_Y + 2.5, p.EAR_Y + 3.8, 3.6).faces(">Y").edges().fillet(0.4))
        s = one if s is None else s.union(one)
    return s


def wing_screws():
    s = None
    top = p.BODY["z"] + WING_T
    for bx, by in p.BOSSES:
        one = zcyl(bx, by, top - WING_T - 8.0, top, 2.9).union(
            zcyl(bx, by, top, top + 1.8, 5.6).faces(">Z").edges().fillet(0.6))
        one = one.cut(box(bx - 0.4, bx + 0.4, by - 2, by + 2, top + 1.0, top + 2)).cut(
            box(bx - 2, bx + 2, by - 0.4, by + 0.4, top + 1.0, top + 2))
        s = one if s is None else s.union(one)
    return s


def wing():
    z0 = p.BODY["z"]
    s = box(-12, p.BODY["x"] + 12, -12, p.BODY["y"] + 12, z0, z0 + WING_T)
    for bx, by in p.BOSSES:
        s = s.cut(zcyl(bx, by, z0 - 1, z0 + WING_T + 1, 3.4))
    return s


def payload():
    a = p.ADAPTER
    z1 = a["z"][0]
    s = box(a["x"][0] - 4, a["x"][1] + 4, a["y"][0] - 6, a["y"][1] + 2, z1 - 14, z1).edges().fillet(1.5)
    return s


def adapter_screws():
    s = None
    a = p.ADAPTER
    for hx, hy in p.ADAPTER_HOLES:
        one = zcyl(hx, hy, a["z"][0] - 6.4, a["z"][1] - 1.6, 2.9).union(
            cq.Workplane().add(cq.Solid.makeCone(1.5, 3.0, 1.5, cq.Vector(hx, hy, a["z"][1] - 1.6))))
        s = one if s is None else s.union(one)
    return s


ROT, SLIDE, DROP = ["horn", "servo_spline", "pin_screw", "horn_screw"], ["keeper"], ["adapter", "payload", "payload_screws"]
PARTS = [  # id, builder, name, kind, colour, explode (mm at slider 1)
    ("body", body, "Body (printed, PAHT-CF)", "printed", "#5f6b7c", [0, 0, 0]),
    ("keeper", keeper, "Keeper bar (printed)", "printed", "#f0b726", [0, 22, 0]),
    ("adapter", adapter, "Payload adapter with tab (printed)", "printed", "#4c90f0", [0, 0, -22]),
    ("servo", servo_case, "TowerPro MG92B servo", "purchased", "#2d72d2", [0, -14, -26]),
    ("servo_spline", servo_spline, "Servo output spline", "moving", "#c5cbd3", [0, -14, -26]),
    ("horn", horn, "Stock single-arm horn", "moving", "#f6f7f9", [0, 10, -26]),
    ("pin_screw", pin_screw, "M2x8 crank pin screw", "purchased", "#abb3bf", [0, 34, -26]),
    ("horn_screw", horn_screw, "M2 horn centre retaining screw (supplied)", "purchased", "#dfe3e8", [0, 18, -26]),
    ("ear_screws", ear_screws, "Servo ear screws (2, supplied)", "purchased", "#abb3bf", [0, 2, -26]),
    ("wing_screws", wing_screws, "M3 self-tapping screws (4)", "purchased", "#abb3bf", [0, 0, 40]),
    ("wing", wing, "Wing panel section (ghost)", "ghost", "#8abbff", [0, 0, 24]),
    ("payload", payload, "1 lb payload stand-in", "payload", "#29a634", [0, 0, -40]),
    ("payload_screws", adapter_screws, "Adapter-to-payload screws (4)", "purchased", "#abb3bf", [0, 0, -31]),
]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    parts, lo, hi = [], [1e9] * 3, [-1e9] * 3
    for pid, fn, name, kind, col, ex in PARTS:
        s = fn()
        assert s.val().isValid(), pid
        cq.exporters.export(s, str(OUT / f"{pid}.stl"), tolerance=0.01, angularTolerance=0.12)
        bb = s.val().BoundingBox()
        if kind != "ghost":
            lo = [min(a, b) for a, b in zip(lo, (bb.xmin, bb.ymin, bb.zmin))]
            hi = [max(a, b) for a, b in zip(hi, (bb.xmax, bb.ymax, bb.zmax))]
        parts.append(dict(id=pid, name=name, kind=kind, color=col, stl=f"{pid}.stl", explode=ex,
                          opacity={"ghost": 0.18, "printed": 0.45 if pid == "body" else 1}.get(kind, 1)))
    drop = 30.0
    man = dict(id="r5", name="R5 servo crank hardpoint", revision="R5", units="mm", iso=[0.8, 1.0, -0.6],
               bounds=dict(min=lo, max=hi, size=[b - a for a, b in zip(lo, hi)]), parts=parts,
               motion=dict(type="crank", pivot=[p.SHAFT_X, 0, p.SHAFT_Z], a_latch=p.A_LATCH, a_release=p.A_RELEASE,
                           r=p.CRANK_R, rotate=ROT, slide=SLIDE, drop=DROP, drop_mm=drop,
                           note="Servo 180 to 40 deg; the M2 pin in the horn drives the keeper slot, "
                                "keeper x = r (cos a - cos 180). Payload then falls by gravity."))
    (OUT / "manifest.json").write_text(json.dumps(man, indent=1))
    print("viewer parts:", ", ".join(x["id"] for x in parts))


if __name__ == "__main__":
    main()
