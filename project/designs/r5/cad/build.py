"""Build the three R5 printed parts. Outputs go to ../out (gitignored).

    python project/designs/r5/cad/build.py
"""
import json
import sys
from pathlib import Path

import cadquery as cq

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import params as p  # noqa: E402

OUT = HERE.parent / "out"


def box(x0, x1, y0, y1, z0, z1):
    return cq.Workplane("XY").box(x1 - x0, y1 - y0, z1 - z0, centered=False).translate((x0, y0, z0))


def zcyl(x, y, z0, z1, d):
    return cq.Workplane("XY").circle(d / 2).extrude(z1 - z0).translate((x, y, z0))


def ycyl(x, z, y0, y1, d):
    return cq.Workplane("XZ").circle(d / 2).extrude(-(y1 - y0)).translate((x, y0, z))


def body():
    B, top0 = p.BODY, p.BODY["z"] - p.TOP_PLATE_T
    s = box(0, B["x"], 0, B["y"], top0, B["z"])
    # keeper/socket block
    hw = p.TAB_W / 2 + p.SOCKET_GAP + 3.0
    s = s.union(box(0, p.TUNNEL_X[1], p.YK - hw, p.YK + hw, 0, top0))
    # servo cradle (ear ledge at EAR_Y)
    s = s.union(box(26.5, 60.5, 0, p.EAR_Y, 0, top0))
    for bx, by in p.BOSSES:
        s = s.union(zcyl(bx, by, 9.0, top0 + 0.01, p.BOSS_D))
    # socket for the tab, open below, 1 mm lead-in
    g = p.SOCKET_GAP
    s = s.cut(box(p.TAB_X[0] - g, p.TAB_X[1] + g, p.YK - p.TAB_W / 2 - g,
                  p.YK + p.TAB_W / 2 + g, -1, p.TAB_TOP + 1.0))
    s = s.cut(box(p.TAB_X[0] - g - 1, p.TAB_X[1] + g + 1, p.YK - p.TAB_W / 2 - g - 1,
                  p.YK + p.TAB_W / 2 + g + 1, -1, 1.0))
    # tunnel and tip pocket
    h = (p.KEEPER_W + p.SLIDE) / 2
    s = s.cut(box(p.TAB_X[1], p.TUNNEL_X[1] + 1, p.YK - h, p.YK + h, p.ZK - h, p.ZK + h))
    s = s.cut(box(p.TIP_LATCHED_X - 1.0, p.TAB_X[0], p.YK - 3, p.YK + 3, p.ZK - 3, p.ZK + 3))
    # servo pocket, open below
    c, gp = p.SERVO_CASE, p.POCKET_GAP
    x0 = p.SHAFT_X - p.SHAFT_FROM_END
    s = s.cut(box(x0 - gp, x0 + c["l"] + gp, p.SERVO_BOTTOM_Y - gp, p.EAR_Y + 1,
                  -1, p.SHAFT_Z + c["w"] / 2 + gp))
    # ear-screw pilots (self-tapping, supplied with servo), axis Y
    ear_off = (p.EAR_SPAN - c["l"]) / 4
    for ex in (x0 - ear_off, x0 + c["l"] + ear_off):
        s = s.cut(ycyl(ex, p.SHAFT_Z, p.EAR_Y - 8, p.EAR_Y + 0.1, 1.6))
    # mounting pilots from the wing face, and lead exit
    for bx, by in p.BOSSES:
        s = s.cut(zcyl(bx, by, p.BODY["z"] - p.PILOT_DEPTH, p.BODY["z"] + 1, p.PILOT_M3))
    s = s.cut(box(56.0, 62.0, 8.0, 16.0, top0 - 1, p.BODY["z"] + 1))
    return s


def keeper():
    h = p.KEEPER_W / 2
    xs = p.SHAFT_X - p.CRANK_R                      # pin x when latched
    yx0, yx1 = xs - p.PIN_SLOT / 2 - 2.0, xs + p.PIN_SLOT / 2 + 2.0
    s = box(p.TIP_LATCHED_X, yx1, p.YK - h, p.YK + h, p.ZK - h, p.ZK + h)
    z0 = p.SHAFT_Z - 0.17 * 6 - p.PIN_SLOT / 2 - 0.5
    z1 = p.SHAFT_Z + 6 + p.PIN_SLOT / 2 + 0.5
    s = s.union(box(yx0, yx1, p.YK - h, p.YK + h, z0 - 1.5, z1 + 1.5))
    s = s.cut(box(xs - p.PIN_SLOT / 2, xs + p.PIN_SLOT / 2, p.YK - h - 1, p.YK + h + 1, z0, z1))
    s = s.faces("<X").edges().chamfer(0.5)
    return s


def adapter():
    a = p.ADAPTER
    s = box(a["x"][0], a["x"][1], a["y"][0], a["y"][1], a["z"][0], a["z"][1])
    s = s.union(box(p.TAB_X[0], p.TAB_X[1], p.YK - p.TAB_W / 2, p.YK + p.TAB_W / 2,
                    a["z"][1] - 0.01, p.TAB_TOP))
    s = s.cut(box(p.TAB_X[0] - 1, p.TAB_X[1] + 1, p.YK - p.HOLE_W / 2, p.YK + p.HOLE_W / 2,
                  p.HOLE_TOP_LOADED - p.HOLE_H, p.HOLE_TOP_LOADED))
    s = s.faces(">Z").edges().chamfer(1.0)
    for hx, hy in ((4, 34), (26, 34), (4, 46), (26, 46)):
        if not (p.TAB_X[0] - 4 < hx < p.TAB_X[1] + 4):
            s = s.cut(zcyl(hx, hy, a["z"][0] - 1, a["z"][1] + 1, 3.4))
    return s


PARTS = {"body": body, "keeper": keeper, "adapter": adapter}


def build(out=OUT):
    out.mkdir(parents=True, exist_ok=True)
    report, shapes = {}, {}
    for name, fn in PARTS.items():
        s = fn()
        solid = s.val()
        assert solid.isValid(), name
        n = len(s.solids().vals())
        assert n == 1, f"{name}: {n} solids"
        shapes[name] = s
        cq.exporters.export(s, str(out / f"{name}.step"))
        cq.exporters.export(s, str(out / f"{name}.stl"), tolerance=0.02, angularTolerance=0.1)
        report[name] = {"volume_mm3": round(solid.Volume(), 1),
                        "mass_g": round(solid.Volume() * p.DENSITY / 1000, 2)}
    # static interference: latched keeper vs body, adapter vs body, keeper vs adapter
    pairs = [("keeper", "body"), ("adapter", "body"), ("keeper", "adapter")]
    for a, b in pairs:
        v = shapes[a].intersect(shapes[b]).val().Volume() if shapes[a].intersect(shapes[b]).vals() else 0.0
        report[f"overlap_{a}_{b}_mm3"] = round(v, 4)
        assert v < 1e-3, f"{a} intersects {b}: {v} mm3"
    # swept keeper (withdrawn) vs body
    d = p.keeper_x(p.A_RELEASE)
    moved = shapes["keeper"].translate((d, 0, 0))
    inter = moved.intersect(shapes["body"])
    v = inter.val().Volume() if inter.vals() else 0.0
    report["overlap_keeper_released_body_mm3"] = round(v, 4)
    assert v < 1e-3
    # purchased-part envelopes: servo case and a full horn disc (any angle)
    c = p.SERVO_CASE
    x0 = p.SHAFT_X - p.SHAFT_FROM_END
    servo = box(x0, x0 + c["l"], p.SERVO_BOTTOM_Y, p.SERVO_BOTTOM_Y + c["h"],
                p.SHAFT_Z - c["w"] / 2, p.SHAFT_Z + c["w"] / 2)
    horn = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y - 2.5, p.SPLINE_TOP_Y, 2 * p.HORN_REACH)
    for name, env in (("servo", servo), ("horn_disc", horn)):
        for other in ("body", "keeper"):
            inter = env.intersect(shapes[other])
            v = inter.val().Volume() if inter.vals() else 0.0
            report[f"overlap_{name}_{other}_mm3"] = round(v, 4)
            assert v < 1e-3, (name, other, v)
    (out / "cad.json").write_text(json.dumps(report, indent=2))
    return report


if __name__ == "__main__":
    print(json.dumps(build(), indent=2))
