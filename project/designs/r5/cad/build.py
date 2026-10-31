"""Build the three R5 printed parts. Outputs go to ../out (gitignored).

    python project/designs/r5/cad/build.py
"""
import json
from math import radians, sin
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


def cable_gland():
    g = p.SERVO_GLAND
    x0 = p.SHAFT_X - p.SHAFT_FROM_END
    return box(x0 - g["outstand"], x0 + g["inside"], *g["y"], *g["z"])


def servo_envelope():
    """Complete conservative case reservation, including ears, gland and gear bosses."""
    c = p.SERVO_CASE
    x0 = p.SHAFT_X - p.SHAFT_FROM_END
    z0, z1 = p.SHAFT_Z - c["w"] / 2, p.SHAFT_Z + c["w"] / 2
    top = p.SERVO_BOTTOM_Y + c["h"]
    s = box(x0, x0 + c["l"], p.SERVO_BOTTOM_Y, top, z0, z1)
    s = s.union(box(x0 - (p.EAR_SPAN - c["l"]) / 2,
                    x0 + c["l"] + (p.EAR_SPAN - c["l"]) / 2,
                    p.EAR_Y, p.EAR_Y + 2.5, z0, z1))
    s = s.union(ycyl(p.SHAFT_X, p.SHAFT_Z, top - 0.1, top + 1.5, 11.6))
    s = s.union(ycyl(p.SHAFT_X + 6, p.SHAFT_Z, top - 0.1, top + 1, 6.0))
    return s.union(cable_gland())


def cable_connector_sweep():
    """Connector can enter from below and leave through the same open top channel."""
    c = p.CABLE_CONNECTOR
    return box(*c["x"], *c["y"], -1, p.BODY["z"] + 1)


def tab_root_profile(gap=0.0):
    """XZ lower-tab buttress; offset in X for the receiver's release clearance."""
    x0, x1 = p.TAB_X
    z0, z1 = p.ADAPTER["z"][1], p.TAB_ROOT_TAPER_TOP_Z
    extra = p.TAB_ROOT_EXTRA_X
    return [(x0 - extra - gap, z0), (x1 + extra + gap, z0),
            (x1 + gap, z1), (x0 - gap, z1)]


def xz_prism(profile, y0, y1):
    return cq.Workplane("XZ").polyline(profile).close().extrude(-(y1 - y0)).translate((0, y0, 0))


def body():
    B, top0 = p.BODY, p.BODY["z"] - p.TOP_PLATE_T
    s = box(0, B["x"], 0, B["y"], top0, B["z"])
    # keeper/socket block
    hw = p.TAB_W / 2 + p.SOCKET_GAP + 3.0
    s = s.union(box(0, p.TUNNEL_X[1], p.YK - hw, p.YK + hw, 0, top0))
    # servo cradle (ear ledge at EAR_Y)
    s = s.union(box(26.5, 60.5, 0, p.EAR_Y, 0, top0))
    for bx, by in p.BOSSES:
        s = s.union(zcyl(bx, by, p.BODY["z"] - p.PILOT_DEPTH - 1.5, top0 + 0.01, p.BOSS_D))
    # socket for the tab, open below, 1 mm lead-in
    g = p.SOCKET_GAP
    s = s.cut(box(p.TAB_X[0] - g, p.TAB_X[1] + g, p.YK - p.TAB_W / 2 - g,
                  p.YK + p.TAB_W / 2 + g, -1, p.TAB_TOP + 1.0))
    s = s.cut(box(p.TAB_X[0] - g - 1, p.TAB_X[1] + g + 1, p.YK - p.TAB_W / 2 - g - 1,
                  p.YK + p.TAB_W / 2 + g + 1, -1, 1.0))
    # Clearance for the integral lower-tab buttresses. The relief stops below
    # the hole and tunnel floor; no extra printed part or guide contact is added.
    s = s.cut(xz_prism(tab_root_profile(g), p.YK - p.TAB_W / 2 - g,
                      p.YK + p.TAB_W / 2 + g))
    # tunnel and tip pocket
    h = (p.KEEPER_W + p.SLIDE) / 2
    s = s.cut(box(p.TAB_X[1], p.TUNNEL_X[1] + 1, p.YK - h, p.YK + h, p.ZK - h, p.ZK + h))
    tp = p.TIP_POCKET_HALF
    s = s.cut(box(p.TIP_LATCHED_X - p.TIP_POCKET, p.TAB_X[0], p.YK - tp, p.YK + tp, p.ZK - tp, p.ZK + tp))
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
    # A continuous, open-bottom channel at the actual gland end. The old +X
    # hole did not clear the -X cable gland and required an unspecified route.
    ch = p.CABLE_CHANNEL
    s = s.cut(box(*ch["x"], *ch["y"], -1, p.BODY["z"] + 1))
    # plate underside relief over the horn and keeper-yoke sweep (0.5 mm over both)
    hz = p.BODY["z"] - p.YOKE_ROOF_T
    s = s.cut(box(p.SHAFT_X - p.HORN_REACH - 0.5, p.SHAFT_X + p.HORN_REACH + 0.5 + 0.0,
                  p.SPLINE_TOP_Y - 3.0, p.YK + p.KEEPER_W / 2 + 2.5, top0 - 1, hz))
    # lightening window in the plate where nothing hangs below
    s = s.cut(box(9.0, 24.0, 9.0, 29.0, top0 - 1, p.BODY["z"] + 1).edges("|Z").fillet(2.0))
    return s


def keeper():
    h = p.KEEPER_W / 2
    xs = p.SHAFT_X - p.CRANK_R                      # pin x when latched
    yx0, yx1 = xs - p.PIN_SLOT / 2 - 2.0, xs + p.PIN_SLOT / 2 + 2.0
    s = box(p.TIP_LATCHED_X, yx1, p.YK - h, p.YK + h, p.ZK - h, p.ZK + h)
    # pin height is SHAFT_Z + r sin(alpha); slot covers the sweep plus overshoot
    dip = p.CRANK_R_MAX * sin(radians(p.OVERSHOOT))
    z0 = p.SHAFT_Z - dip - p.PIN_SLOT / 2 - 0.5
    z1 = p.SHAFT_Z + p.CRANK_R_MAX + p.PIN_SLOT / 2 + 0.5
    s = s.union(box(yx0, yx1, p.YK - h, p.YK + h, z0 - 1.5, z1 + 1.5))
    s = s.cut(box(xs - p.PIN_SLOT / 2, xs + p.PIN_SLOT / 2, p.YK - h - 1, p.YK + h + 1, z0, z1))
    s = s.faces("<X").edges().chamfer(0.5)
    # groove in the horn-side face so the horn centre screw head passes under the yoke
    hs = p.HORN_SCREW
    gz = hs["head_d"] / 2 + p.HORN_GROOVE_Z_CLEAR
    s = s.cut(box(p.HORN_GROOVE_START_X, yx1 + 1, p.YK - h - 1,
                  p.SPLINE_TOP_Y + hs["head_h"] + p.HORN_GROOVE_Y_CLEAR,
                  p.SHAFT_Z - gz, p.SHAFT_Z + gz))
    return s


def horn_screw():
    hs = p.HORN_SCREW
    y = p.SPLINE_TOP_Y
    return ycyl(p.SHAFT_X, p.SHAFT_Z, y - hs["l"], y, hs["d"]).union(
        ycyl(p.SHAFT_X, p.SHAFT_Z, y, y + hs["head_h"], hs["head_d"]))


def adapter():
    a = p.ADAPTER
    s = box(a["x"][0], a["x"][1], a["y"][0], a["y"][1], a["z"][0], a["z"][1])
    s = s.union(box(p.TAB_X[0], p.TAB_X[1], p.YK - p.TAB_W / 2, p.YK + p.TAB_W / 2,
                    a["z"][1] - 0.01, p.TAB_TOP))
    s = s.edges(cq.selectors.BoxSelector((p.TAB_X[0] - 0.1, p.YK - p.TAB_W / 2 - 0.1, a["z"][1] - 0.1),
                                         (p.TAB_X[1] + 0.1, p.YK + p.TAB_W / 2 + 0.1, a["z"][1] + 0.1))
                ).fillet(p.TAB_ROOT_FILLET)
    s = s.union(xz_prism(tab_root_profile(), p.YK - p.TAB_W / 2, p.YK + p.TAB_W / 2))
    s = s.cut(box(p.TAB_X[0] - 1, p.TAB_X[1] + 1, p.YK - p.HOLE_W / 2, p.YK + p.HOLE_W / 2,
                  p.HOLE_TOP_LOADED - p.HOLE_H, p.HOLE_TOP_LOADED))
    s = s.faces(">Z").edges().chamfer(1.0)
    for hx, hy in p.ADAPTER_HOLES:
        s = s.cut(zcyl(hx, hy, a["z"][0] - 1, a["z"][1] + 1, 3.4))
        # 90 deg countersink so M3 flat heads sit flush under the 0.5 mm gap to the body
        s = s.cut(cq.Workplane().add(cq.Solid.makeCone(1.7, 3.3, 1.6, cq.Vector(hx, hy, a["z"][1] - 1.6))))
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
    v = 0.0
    for i in range(15):  # whole sweep, not just the end point
        moved = shapes["keeper"].translate((p.keeper_x(p.A_LATCH + (p.A_RELEASE - p.A_LATCH) * i / 14), 0, 0))
        inter = moved.intersect(shapes["body"])
        v = max(v, inter.val().Volume() if inter.vals() else 0.0)
    report["overlap_keeper_released_body_mm3"] = round(v, 4)
    assert v < 1e-3
    # Complete purchased-part envelope and reserved connector insertion path.
    servo = servo_envelope()
    horn = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y - 2.5, p.SPLINE_TOP_Y, 2 * p.HORN_REACH)
    for name, env in (("servo", servo), ("horn_disc", horn)):
        for other in ("body", "keeper"):
            inter = env.intersect(shapes[other])
            v = inter.val().Volume() if inter.vals() else 0.0
            report[f"overlap_{name}_{other}_mm3"] = round(v, 4)
            assert v < 1e-3, (name, other, v)
    inter = cable_connector_sweep().intersect(shapes["body"])
    v = sum(s.Volume() for s in inter.solids().vals())
    report["overlap_cable_connector_path_body_mm3"] = round(v, 4)
    assert v < 1e-6, ("cable connector path", v)
    # horn centre screw head, inflated by SCREW_CLEAR, vs keeper over the full sweep
    hs, c = p.HORN_SCREW, p.SCREW_CLEAR
    env = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y, p.SPLINE_TOP_Y + hs["head_h"] + c - 0.01, hs["head_d"] + 2 * c - 0.02)
    worst = 0.0
    for i in range(29):
        a = p.A_LATCH + (p.A_RELEASE - p.A_LATCH) * i / 28
        inter = env.intersect(shapes["keeper"].translate((p.keeper_x(a), 0, 0)))
        worst = max(worst, inter.val().Volume() if inter.vals() else 0.0)
    report["overlap_horn_screw_keeper_sweep_mm3"] = round(worst, 4)
    report["horn_screw_clearance_mm"] = c
    assert worst < 1e-3, worst
    # Loaded guides permit pitch/yaw before elastic displacement. Check those
    # states explicitly; pure translation only covers a freely floating level bar.
    from clearance import check_loaded_clearance
    report["loaded_clearance"] = check_loaded_clearance(shapes["body"], shapes["keeper"])
    (out / "cad.json").write_text(json.dumps(report, indent=2))
    return report


if __name__ == "__main__":
    print(json.dumps(build(), indent=2))
