"""Hand checks for R5: travel, clearances, servo torque. Exits nonzero on failure."""
import json, sys
from math import cos, radians, sin
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import params as p

KGFCM = 98.0665  # N*mm per kgf*cm


def results():
    travel = p.keeper_x(p.A_RELEASE)
    needed = p.TAB_X[1] - p.TIP_LATCHED_X          # tip must clear the tab face
    short = p.keeper_x(p.A_RELEASE + 15)            # servo stops 15 deg short
    # Friction: hole top on keeper (P) plus tunnel mouth and back reactions, per side.
    normals = 2 * (1 + p.REACTION_RATIO)
    f_drag = p.MU * normals * p.P_DESIGN
    # scotch yoke: slot force gives F r |sin a|, pin sliding in the slot adds mu F r |cos a|
    t_need = max(f_drag * p.CRANK_R * (abs(sin(radians(a))) + p.MU * abs(cos(radians(a))))
                 for a in range(int(p.A_RELEASE), int(p.A_LATCH) + 1))
    stall = p.STALL_KGFCM_5V * KGFCM
    working = stall * p.WORKING_FRACTION
    return dict(
        travel_mm=travel, needed_mm=needed,
        spare_mm=travel - needed - 0.5, spare_15deg_short_mm=short - needed - 0.5,
        slide_total_mm=p.SLIDE, socket_gap_side_mm=p.SOCKET_GAP,
        hole_clearance_mm=(p.HOLE_W - p.KEEPER_W, p.HOLE_H - p.KEEPER_W),
        servo_pocket_gap_mm=p.POCKET_GAP,
        drag_N=f_drag, torque_needed_Nmm=t_need,
        working_torque_Nmm=working, margin_working=working / t_need,
        margin_stall=stall / t_need,
    )


def check(r):
    fails = []
    if r["spare_mm"] < 1.0: fails.append("spare travel < 1 mm")
    if r["spare_15deg_short_mm"] < 1.0: fails.append("spare travel < 1 mm with 15 deg shortfall")
    if not 0.3 <= r["slide_total_mm"] <= 0.4: fails.append("slide fit outside 0.3-0.4")
    if r["socket_gap_side_mm"] < 0.3: fails.append("socket gap < 0.3")
    if min(r["hole_clearance_mm"]) < 0.5: fails.append("tab hole clearance < 0.5")
    if r["servo_pocket_gap_mm"] < 0.5: fails.append("servo pocket gap < 0.5")
    if r["margin_working"] < 3.0: fails.append("working torque margin < 3")
    return fails


if __name__ == "__main__":
    r = results()
    out = Path(__file__).resolve().parents[1] / "out"
    out.mkdir(exist_ok=True)
    (out / "mechanics.json").write_text(json.dumps(r, indent=1))
    print(json.dumps(r, indent=1))
    f = check(r)
    print("FAIL: " + "; ".join(f) if f else "all mechanics checks pass")
    sys.exit(1 if f else 0)
