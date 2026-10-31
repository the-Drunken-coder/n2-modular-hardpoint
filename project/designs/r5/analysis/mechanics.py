"""Hand checks for R5: travel, clearances, servo torque. Exits nonzero on failure."""
import json, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import params as p
from coupled_forces import study

KGFCM = 98.0665  # N*mm per kgf*cm


def results():
    travel = p.keeper_x(p.A_RELEASE)
    needed = p.TAB_X[1] - p.TIP_LATCHED_X          # tip must clear the tab face
    short = p.keeper_x(p.A_RELEASE + 15)            # servo stops 15 deg short
    force_model = study(p, include_states=False)
    finite = force_model["finite_sliding_solution"]
    f_drag = force_model["max_opening_force"]["force_x_N"] if finite else None
    t_need = force_model["required_torque_Nmm"]
    stall = p.STALL_KGFCM_5V * KGFCM
    working = stall * p.WORKING_FRACTION
    return dict(
        travel_mm=travel, needed_mm=needed,
        spare_mm=travel - needed - 0.5, spare_15deg_short_mm=short - needed - 0.5,
        slide_total_mm=p.SLIDE, socket_gap_side_mm=p.SOCKET_GAP,
        hole_clearance_mm=(p.HOLE_W - p.KEEPER_W, p.HOLE_H - p.KEEPER_W),
        hole_clearance_convention="total clearance; half per side only when centered, all below when loaded",
        servo_pocket_gap_mm=p.POCKET_GAP,
        drag_N=f_drag, torque_needed_Nmm=t_need,
        drag_basis="Maximum opening force in the coupled inspected-position 2D screen",
        coupled_forces=force_model,
        working_torque_Nmm=working, margin_working=working / t_need if finite else 0.,
        margin_stall=stall / t_need if finite else 0.,
    )


def check(r):
    fails = []
    if r["spare_mm"] < 1.0: fails.append("spare travel < 1 mm")
    if r["spare_15deg_short_mm"] < 1.0: fails.append("spare travel < 1 mm with 15 deg shortfall")
    if not 0.3 <= r["slide_total_mm"] <= 0.4: fails.append("slide fit outside 0.3-0.4")
    if r["socket_gap_side_mm"] < 0.3: fails.append("socket gap < 0.3")
    if min(r["hole_clearance_mm"]) < 0.5: fails.append("tab hole clearance < 0.5")
    if r["servo_pocket_gap_mm"] < 0.5: fails.append("servo pocket gap < 0.5")
    if not r["coupled_forces"]["finite_sliding_solution"]: fails.append("coupled sliding force unresolved")
    if r["margin_working"] < 3.0: fails.append("working torque margin < 3")
    return fails


if __name__ == "__main__":
    r = results()
    f = check(r)
    r["numerical_checks_passed"] = not f
    out = Path(__file__).resolve().parents[1] / "out"
    out.mkdir(exist_ok=True)
    (out / "mechanics.json").write_text(json.dumps(r, indent=1))
    print(json.dumps(r, indent=1))
    print("FAIL: " + "; ".join(f) if f else "all mechanics checks pass")
    sys.exit(1 if f else 0)
