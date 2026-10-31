"""Simulations of the R5 open risks. Writes out/risks.json and out/risks.md, and exits
nonzero if a gate fails. Pure numpy and fast, so it runs in CI.

    python analysis/risks.py

1. friction sweep    required release torque vs mu over the whole crank swing
2. derating          servo torque vs supply voltage from the two datasheet points
3. tolerance stack   Monte Carlo of horn radius, servo position and stop error, print
                     error and tab float -> release travel and latch engagement
4. dynamics          support stiffness and natural frequency from the FEA, rattle
                     threshold and impact load, back-drive torque at dead centre
5. unseated tab      chamfer self-seating and the stall force on a tab that is not seated
6. hand stresses     keeper beam, tab hole ligaments and tab root, as a check on the FEA
"""
import json
import sys
from itertools import product
from math import degrees, pi, radians, sin, sqrt
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import params as p  # noqa: E402
from coupled_forces import study

OUT = Path(__file__).resolve().parents[1] / "out"
KGFCM = 98.0665          # N*mm per kgf*cm
G = 9.80665
W1 = p.MASS_KG * G       # payload weight at 1 g
L_PIN_TIP = (p.SHAFT_X - p.CRANK_R) - p.TIP_LATCHED_X   # pin to keeper tip (25.5)

# Manufacturer points. Adafruit labels the lower torque point 4.8 V but both
# sources specify a 5.0 V operating minimum. Use TowerPro's 5.0 V point and do
# not turn a motor-torque extrapolation into an electronics operating claim.
DATASHEET = [(5.0, p.STALL_KGFCM_5V), (6.0, 3.5)]

# Assumed scatter. All are guesses and should be replaced by measurements.
MC = dict(
    n=200_000, seed=1,
    horn_r=(4.5, 5.5),          # uniform, horn outer hole radius unknown
    servo_dx=(-0.5, 0.5),       # uniform, servo float in the 0.5 mm pocket gap
    stop_sd_deg=4.0,            # normal, servo deadband and trim at each end
    keeper_len_sd=0.1,          # normal, printed pin-to-tip length
    tab_float=(-p.SOCKET_GAP, p.SOCKET_GAP),   # uniform, tab position in its socket
    tab_t_sd=0.07,              # normal, printed tab thickness
    pin_slot_clearance=(0.3, 0.5), # assumed total sleeve/slot gap, uniform
)
BACKLASH_DEG = 3.0              # MG92B output backlash plus position error at latch, assumed


def stall_nmm(v):
    (v0, t0), (v1, t1) = DATASHEET
    if not v0 <= v <= v1:
        raise ValueError("No sourced torque model outside 5.0..6.0 V; sag requires hardware evidence")
    return (t0 + (t1 - t0) * (v - v0) / (v1 - v0)) * KGFCM


def drag(mu, load=p.P_DESIGN):
    """Maximum opening force from the shared coupled 2D positional envelope."""
    result = study(p, mu=mu, load=load, include_states=False)
    if not result["finite_sliding_solution"]:
        raise ValueError(result["failure_reason"])
    return result["max_opening_force"]["force_x_N"]


def torque_curve(mu, r=None, load=p.P_DESIGN):
    """Torque envelope with coupled reactions, sleeve spin and load removal."""
    from types import SimpleNamespace
    model = p if r is None else SimpleNamespace(**dict(vars(p), FIT_BOUNDS=dict(p.FIT_BOUNDS, horn_r=(r, r))))
    result = study(model, mu=mu, load=load)
    if not result["finite_sliding_solution"]:
        raise ValueError(result["failure_reason"])
    curve = {}
    for state in result["states"]:
        a = state["alpha_deg"]
        curve[a] = max(curve.get(a, 0.), state["torque_Nmm"])
    return np.array(sorted(curve)), np.array([curve[a] for a in sorted(curve)])


def friction_sweep():
    working = stall_nmm(5.0) * p.WORKING_FRACTION
    rows = []
    for mu in np.round(np.arange(0.2, 0.61, 0.05), 2):
        result = study(p, mu=float(mu), include_states=False)
        finite, need = result["finite_sliding_solution"], result["required_torque_Nmm"]
        rows.append(dict(mu=float(mu), torque_needed_Nmm=need,
                         finite_sliding_solution=finite,
                         margin_working=float(working / need) if finite else 0.,
                         margin_stall=float(stall_nmm(5.0) / need) if finite else 0.,
                         status="prescribed 2D screen" if finite else result["failure_reason"]))
    def threshold(limit):
        def exceeds(mu):
            result = study(p, mu=mu, include_states=False)
            return not result["finite_sliding_solution"] or result["required_torque_Nmm"] > limit
        previous = 0.05
        for current in np.linspace(0.05, 0.65, 25)[1:]:
            if exceeds(float(current)):
                lo, hi = previous, float(current)
                for _ in range(16):
                    mid = (lo+hi)/2
                    if exceeds(mid): hi = mid
                    else: lo = mid
                return hi
            previous = float(current)
        return None
    return dict(rows=rows, mu_for_margin_3=threshold(working / 3),
                mu_for_stall=threshold(stall_nmm(5.0)),
                threshold_basis="First torque-limit crossing or loss of a finite sliding solution in the prescribed 2D screen; friction is unmeasured")


def derating():
    need = study(p, include_states=False)["required_torque_Nmm"]
    return [dict(volts=v, supported_by_torque_points=v >= 5.0,
                 stall_kgfcm=stall_nmm(v) / KGFCM if v >= 5.0 else None,
                 margin_working=stall_nmm(v) * p.WORKING_FRACTION / need if v >= 5.0 and need is not None else None,
                 status="torque sensitivity only; physical operation unverified" if v >= 5.0
                 else "outside specified operating range; NOT QUALIFIED")
            for v in (4.4, 4.6, 4.8, 5.0, 6.0)]


def monte_carlo():
    rng = np.random.default_rng(MC["seed"])
    n = MC["n"]
    r = rng.uniform(*MC["horn_r"], n)
    dx = rng.uniform(*MC["servo_dx"], n)
    e_l = rng.normal(0, MC["stop_sd_deg"], n)
    e_r = rng.normal(0, MC["stop_sd_deg"], n)
    dl = rng.normal(0, MC["keeper_len_sd"], n)
    tab = rng.uniform(*MC["tab_float"], n)
    tt = rng.normal(p.TAB_X[1] - p.TAB_X[0], MC["tab_t_sd"], n)
    slot_half = rng.uniform(*MC["pin_slot_clearance"], n) / 2
    x_pin = lambda a: p.SHAFT_X + dx + r * np.cos(np.radians(a))
    tip_l = x_pin(p.A_LATCH + e_l) - (L_PIN_TIP + dl) + rng.uniform(-1, 1, n) * slot_half
    tip_r = x_pin(p.A_RELEASE + e_r) - (L_PIN_TIP + dl) + rng.uniform(-1, 1, n) * slot_half
    tab_back = p.TAB_X[0] + tab
    tab_front = tab_back + tt
    floor = p.TIP_LATCHED_X - p.TIP_POCKET                       # tip pocket floor in the body
    engage = tab_back - tip_l                           # >= 0: full keeper section through tab
    spare = tip_r - tab_front - 0.5                     # requirement: >= 1
    pz_top = p.SHAFT_Z + r + p.PIN_D / 2                # pin top vs slot top
    slot_top = p.SHAFT_Z + p.CRANK_R_MAX + p.PIN_SLOT / 2 + 0.5
    pct = lambda v: {k: float(np.percentile(v, q)) for k, q in (("p0.1", 0.1), ("p50", 50), ("p99.9", 99.9))}
    return dict(
        inputs=MC,
        interpretation="Synthetic geometric samples under guessed distributions; not a measured reliability probability",
        engagement_mm=pct(engage), spare_travel_mm=pct(spare),
        tip_to_pocket_floor_mm=pct(tip_l - floor),
        sample_fraction_partial_engagement=float((engage < 0).mean()),
        sample_fraction_engagement_below_half_keeper=float((engage < -p.KEEPER_W / 2).mean()),
        sample_fraction_tip_hits_pocket_floor=float((tip_l < floor).mean()),
        sample_fraction_spare_below_1mm=float((spare < 1.0).mean()),
        samples_with_no_geometric_release=int((tip_r < tab_front).sum()),
        sample_fraction_no_geometric_release=float((tip_r < tab_front).mean()),
        min_pin_to_slot_top_mm=float((slot_top - pz_top).min()),
    )


def bounded_fit(bounds=None):
    """Continuous guide-pose interval bound plus dimensional/angle extrema.

    Sleeve contact constrains keeper X when the guide pitches/yaws. This
    includes lost motion, edge contact and tip-corner projection; it does not
    prove a contact-free path or physical payload departure.
    """
    from fit_envelope import angular_candidates, contact_envelope, guide_angle, motion_guide_certificate, tip_interval, validate_relief_contract
    b = dict(p.FIT_BOUNDS if bounds is None else bounds)
    if not (0 < b["horn_r"][0] <= b["horn_r"][1]
            and -10 <= b["latch_error_deg"][0] <= 0 <= b["latch_error_deg"][1] <= 10
            and 0 < p.A_RELEASE + b["release_error_deg"][0]
            <= p.A_RELEASE + b["release_error_deg"][1] < 90):
        raise ValueError("bounds leave the monotone angular intervals supported by this check")
    slot_lo, slot_hi = b["pin_slot_clearance_total_mm"]
    if not 0 <= slot_lo <= slot_hi:
        raise ValueError("pin/slot clearance bounds must be ordered and nonnegative")
    if not (0 < b["keeper_width_mm"][0] <= b["keeper_width_mm"][1]
            and b["relative_guide_shaft_z_error_mm"] >= 0):
        raise ValueError("invalid inspected keeper width or relative Z datum")
    tilt = guide_angle(b)
    engagement = motion_guide_certificate(p, b)
    released_bounds = dict(b, guide_length_min_mm=b["remaining_guide_length_min_mm"])
    released_tilt = guide_angle(released_bounds)
    corner = contact_envelope(p, b, released_tilt)
    half_play = slot_hi / 2
    rows = []
    for radius, dx, dl, tab, dt in product(
            b["horn_r"], b["servo_dx"],
            b["keeper_length_error_mm"], (-p.SOCKET_GAP, p.SOCKET_GAP),
            b["tab_thickness_error_mm"]):
        latch = angular_candidates(p.A_LATCH+b["latch_error_deg"][0],
            p.A_LATCH+b["latch_error_deg"][1], radius, p.SHAFT_Z, p.ZK, tilt)
        release = angular_candidates(p.A_RELEASE+b["release_error_deg"][0],
            p.A_RELEASE+b["release_error_deg"][1], radius, p.SHAFT_Z, p.ZK, released_tilt)
        for al, ar in product(latch, release):
            length = L_PIN_TIP+dl
            _, full_tip_hi = tip_interval(p, b, tilt, radius, dx, al, length-b["tip_chamfer_mm"])
            tip_lo, _ = tip_interval(p, b, tilt, radius, dx, al, length)
            open_lo, _ = tip_interval(p, b, released_tilt, radius, dx, ar, length)
            rows.append(dict(full_section_overlap_mm=p.TAB_X[0]+tab-full_tip_hi,
                             spare_after_clearance_mm=open_lo-(p.TAB_X[1]+tab+dt)-b["open_clearance_reserve_mm"],
                             tip_to_pocket_floor_mm=tip_lo-(p.TIP_LATCHED_X-p.TIP_POCKET)))
    minima = {key: float(min(row[key] for row in rows)) for key in rows[0]}
    ok = (minima["full_section_overlap_mm"] >= b["full_section_overlap_min_mm"]
          and minima["spare_after_clearance_mm"] >= b["spare_after_clearance_min_mm"]
          and minima["tip_to_pocket_floor_mm"] > 0)
    return dict(inspection_bounds=b, configurations_checked=len(rows), minima=minima,
                continuous_pitch_yaw_abs_bound_deg=float(np.degrees(released_tilt)),
                latched_pitch_yaw_abs_bound_deg=float(np.degrees(tilt)),
                guide_engagement_certificate=engagement,
                cross_section_corner_envelope_mm=corner["local_corner_box_mm"],
                roll_abs_bound_deg=corner["roll_abs_bound_deg"],
                sleeve_contact_y_abs_bound_mm=corner["sleeve_contact_y_abs_bound_mm"],
                guide_relief_contract=validate_relief_contract(released_bounds, released_tilt),
                pin_slot_play_per_endpoint_mm=half_play,
                rigid_kinematic_bounds_pass=bool(ok),
                physical_inspection="PENDING: every built assembly must be measured against these limits",
                method="Conservative continuous guide-pose intervals with analytic crank-angle extrema; dimensional candidates are not a reliability sample",
                excluded="contact-free path, friction/binding, wear, deformation, voltage/current, and payload departure")


def dynamics(fea):
    out = {"fea_status": "pending current, mesh-converged FEA"}
    if fea is not None:
        from export_web import validate_summary
        validate_summary(fea)
        load = float(fea["load_N"])
        displacements = [float(fea["cases"][c]["fine"]["load_point_disp_mm"]) for c in ("keeper", "adapter", "body")]
        if not np.isfinite(load) or load <= 0 or any(not np.isfinite(u) or u <= 0 for u in displacements):
            raise ValueError("dynamics requires positive finite audited load and component compliance")
        k = load / sum(displacements)
        out["fea_status"] = "current numerical proxy; physical dynamics unvalidated"
        out["fea_analysis_id"] = fea["analysis_id"]
        out["support_stiffness_N_per_mm_rigid_wing"] = k
        out["payload_mode_Hz"] = sqrt(k * 1000 / p.MASS_KG) / (2 * pi)
    # Hanging payload rattle: it lifts off the keeper once vertical acceleration
    # exceeds 1 g plus the steady load factor (n = 1 assumed).
    gap = p.HOLE_H - p.KEEPER_W                         # 1.1 mm free play in the hole
    out["liftoff_threshold_g_peak"] = 1.0
    k_contact = out.get("support_stiffness_N_per_mm_rigid_wing")
    rows = []
    for a_g in (2.0, 3.0, 5.0):
        v = sqrt(2 * (a_g - 1) * G * gap / 1000)        # m/s after free flight across the gap
        row = dict(vib_g_peak=a_g, impact_velocity_mps=v)
        if k_contact is None:
            row["impact_force_status"] = "pending current FEA compliance"
        else:
            f_imp = v * sqrt(k_contact * 1000 * p.MASS_KG)   # undamped impact peak, N
            row.update(impact_force_N=f_imp, ratio_to_proof=f_imp / p.P_PROOF)
        rows.append(row)
    out["rattle_impact"] = rows
    # Back-drive at dead centre. The axial keeper force comes from keeper inertia and from
    # friction as the tab slides in its socket under X vibration at load factor n.
    n, ax_g = 4.0, 10.0
    f_ax = p.MU * W1 * n + 0.001 * 0.91 * ax_g * G
    t_bd = f_ax * p.CRANK_R * sin(radians(BACKLASH_DEG))
    out["backdrive"] = dict(load_factor=n, axial_g=ax_g, backlash_deg=BACKLASH_DEG,
                            axial_force_N=f_ax, torque_Nmm=t_bd,
                            ratio_working_torque=stall_nmm(5.0) * p.WORKING_FRACTION / t_bd,
                            note="powered servo holds position; with the servo unpowered, "
                                 "retention is not a requirement")
    return out


def unseated():
    # contact angle when the tip meets the tab face (keeper 3.5 mm from latched)
    cos_a = (p.TAB_X[1] - p.TIP_LATCHED_X) / p.CRANK_R - 1
    alpha = float(np.degrees(np.arccos(cos_a)))
    arm = p.CRANK_R * sin(radians(alpha))
    f_work = stall_nmm(5.0) * p.WORKING_FRACTION / arm
    f_stall = stall_nmm(6.0) / arm
    chamfer = 0.5
    f_lift = W1 * (1 + p.MU) / (1 - p.MU) + drag(p.MU, W1)     # 45 deg wedge lifts 1 g payload
    # Lower-root cantilever screen, with the same across-layer allowable used
    # elsewhere. This is NOT a contact model of every possible mis-seated pose.
    t, w = p.TAB_X[1] - p.TAB_X[0], p.TAB_W
    L = p.ZK - p.ADAPTER["z"][1]
    z0, z1 = p.ADAPTER["z"][1], p.TAB_ROOT_TAPER_TOP_Z
    t0 = t + 2 * p.TAB_ROOT_EXTRA_X
    slope = (t - t0) / (z1 - z0)
    sections = [z0, z1]
    if slope:
        stationary_z = 2 * p.ZK + t0 / slope - z0
        if z0 < stationary_z < z1:
            sections.append(stationary_z)
    root_stresses = [(z, f_stall * (p.ZK - z) * 6 /
                     (w * (t0 + slope * (z - z0)) ** 2)) for z in sections]
    critical_z, sigma_root = max(root_stresses, key=lambda row: row[1])
    # Original uniform-tab stiffness is retained only as a conservative
    # deflection sensitivity; it is not an assembled-contact prediction.
    k_tab = 3 * p.E_Z * (w * t ** 3 / 12) / L ** 3
    return dict(contact_alpha_deg=alpha, self_seat_window_mm=chamfer,
                force_to_cam_payload_up_N=f_lift, keeper_force_working_N=f_work,
                self_seats=bool(f_work > f_lift),
                stall_force_6V_N=f_stall,
                lower_tab_root_stress_if_adapter_clamped_MPa=sigma_root,
                root_critical_z_mm=critical_z,
                root_allowable_across_layers_MPa=p.ALLOW_Z,
                tab_deflection_to_socket_wall_mm=f_stall / k_tab,
                socket_gap_mm=p.SOCKET_GAP,
                margin_root_vs_allowable_Z=(p.ALLOW_Z / sigma_root),
                complete_jam_qualification="PENDING: upper tab/hole contacts, mis-seating, purchased horn and printed assembly tests",
                scope="Prescribed keeper-height load on the reinforced lower root only; no arbitrary-jam survival claim")


def hand_stresses():
    from sections import keeper_section
    P = p.P_PROOF
    patch = p.GUIDE_PATCH_LENGTH
    arm = p.GUIDE_PATCH_X[0] - (p.TAB_X[0] + p.TAB_X[1]) / 2
    reaction_ratio = p.REACTION_RATIO
    front = keeper_section(p, p.TUNNEL_X[0])
    rear = keeper_section(p, p.GUIDE_PATCH_X[1])
    # Beam comparison at the tunnel mouth; the narrowest section width gives a
    # conservative rectangular shear-area estimate. Local groove/edge stresses
    # still require CAD FEA and physical proof, not this beam approximation.
    s_keeper = P * arm / front["section_modulus_y_mm3"] + 1.5 * P * (1 + reaction_ratio) / front["conservative_shear_area_mm2"]
    # Outward lower-hole reliefs reduce both side ligaments. Use the directly
    # inspected minimum widths and the existing inspected X-thickness bound;
    # nominal TAB_W-HOLE_W omits that removal and is not an accepted section.
    tab_thickness = p.TAB_X[1] - p.TAB_X[0]
    tab_thickness_min = tab_thickness + min(p.FIT_BOUNDS["tab_thickness_error_mm"])
    side_ligament_min = p.ADAPTER_MIN_HOLE_SIDE_LIGAMENT
    net_width_min = 2 * side_ligament_min
    net_area_min = net_width_min * tab_thickness_min
    nominal_side_ligament = (p.TAB_W - p.HOLE_W) / 2 - p.ADAPTER_LOWER_HOLE_RADIUS
    nominal_net_area = 2 * nominal_side_ligament * tab_thickness
    s_lig = P / net_area_min
    front_contact = min(front["bottom_bearing_width_mm"], p.FIT_GUIDE_FLAT_MIN)
    rear_contact = min(rear["top_bearing_width_mm"], p.FIT_GUIDE_FLAT_MIN)
    bearing = P * (1 + reaction_ratio) / (front_contact * patch)
    rear_bearing = P * reaction_ratio / (rear_contact * patch)
    return dict(keeper_bending_plus_shear_MPa=s_keeper, margin_keeper=p.ALLOW_XY / s_keeper,
                tab_ligament_tension_MPa=s_lig, margin_ligament_across_layers=p.ALLOW_Z / s_lig,
                adapter_side_ligament_min_mm=side_ligament_min,
                adapter_tab_thickness_min_mm=tab_thickness_min,
                adapter_net_width_min_mm=net_width_min, adapter_net_area_min_mm2=net_area_min,
                adapter_nominal_side_ligament_mm=nominal_side_ligament,
                adapter_nominal_net_area_mm2=nominal_net_area,
                tunnel_mouth_bearing_MPa=bearing, tunnel_rear_bearing_MPa=rear_bearing,
                margin_bearing=p.ALLOW_XY / max(bearing, rear_bearing),
                inspected_front_contact_width_mm=front_contact, inspected_rear_contact_width_mm=rear_contact,
                keeper_mouth_area_mm2=front["area_mm2"], keeper_mouth_section_modulus_mm3=front["section_modulus_y_mm3"],
                keeper_rear_area_mm2=rear["area_mm2"], keeper_rear_section_modulus_mm3=rear["section_modulus_y_mm3"])


def main():
    OUT.mkdir(exist_ok=True)
    fea_path = OUT / "fea.json"
    fea = json.loads(fea_path.read_text()) if fea_path.exists() else None
    r = dict(coupled_forces=study(p, include_states=False), friction=friction_sweep(), derating=derating(), monte_carlo=monte_carlo(), bounded_fit=bounded_fit(),
             dynamics=dynamics(fea), unseated_tab=unseated(), hand_stresses=hand_stresses())
    mc, fr, dy, un, hs = r["monte_carlo"], r["friction"], r["dynamics"], r["unseated_tab"], r["hand_stresses"]
    nominal = next(x for x in fr["rows"] if abs(x["mu"] - 0.35) < 1e-9)
    gates = {
        "assumed working margin >= 3 at mu 0.35, 5.0 V": nominal["margin_working"] >= 3,
        "unsupported voltage rows cannot claim a torque pass": all(d["margin_working"] is None for d in r["derating"] if d["volts"] < 5.0),
        "deterministic rigid kinematics within inspected bounds": r["bounded_fit"]["rigid_kinematic_bounds_pass"],
        "chamfer self-seats a 1 g payload": un["self_seats"],
        "back-drive torque < working / 10": dy["backdrive"]["ratio_working_torque"] > 10,
        "prescribed jam lower-root stress <= design allowable_Z": un["margin_root_vs_allowable_Z"] >= 1,
        "hand-stress margins >= 1": min(hs["margin_keeper"], hs["margin_ligament_across_layers"], hs["margin_bearing"]) >= 1,
    }
    if "payload_mode_Hz" in dy:
        # Reported, not gated: the excitation spectrum is unmeasured (a 2-blade prop at
        # 10,000 rpm excites 333 Hz) and uniform traction on the adapter plate
        # understates the stiffness a rigid payload adds.
        pass
        # Rattle is reported, not gated: the hardpoint's vibration level is unmeasured.
    gates = {k: bool(v) for k, v in gates.items()}
    r["gates"] = gates
    (OUT / "risks.json").write_text(json.dumps(r, indent=1))
    md = ["# R5 risk simulations", "", "| mu | torque N·mm | margin working | margin stall |", "|---|---:|---:|---:|"]
    md += [f"| {x['mu']:.2f} | {x['torque_needed_Nmm']:.1f} | {x['margin_working']:.2f} | {x['margin_stall']:.2f} |"
           if x["finite_sliding_solution"] else f"| {x['mu']:.2f} | unresolved sliding | HOLD | HOLD |" for x in fr["rows"]]
    md += ["", f"Margin falls to 3 at mu = {fr['mu_for_margin_3']:.2f}; stall at mu = {fr['mu_for_stall']}.", "",
           "| V | stall kgf·cm | working margin |", "|---|---:|---:|"]
    md += [f"| {d['volts']} | {d['stall_kgfcm']:.2f} | {d['margin_working']:.2f} |" if d["supported_by_torque_points"] and d["margin_working"] is not None
           else f"| {d['volts']} | unsupported | NOT QUALIFIED |" for d in r["derating"]]
    md += ["", "Deterministic fit within the stated inspection limits:", ""] + [f"- {k}: {v}" for k, v in r["bounded_fit"].items()]
    md += ["", "Synthetic Monte Carlo sensitivity (" + f"{MC['n']:,}" + " guessed-input samples; not measured reliability):", ""] + [f"- {k}: {v}" for k, v in mc.items() if k != "inputs"]
    md += ["", "Dynamics:", ""] + [f"- {k}: {v}" for k, v in dy.items()]
    md += ["", "Unseated tab:", ""] + [f"- {k}: {v}" for k, v in un.items()]
    md += ["", "Hand stresses at 17.8 N:", ""] + [f"- {k}: {v:.2f}" for k, v in hs.items()]
    md += ["", "Gates:", ""] + [f"- {'PASS' if v else 'FAIL'} {k}" for k, v in gates.items()]
    (OUT / "risks.md").write_text("\n".join(md) + "\n")
    print("\n".join(md))
    sys.exit(0 if all(gates.values()) else 1)


if __name__ == "__main__":
    main()
