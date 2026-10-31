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
from math import degrees, pi, radians, sin, sqrt
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import params as p  # noqa: E402

OUT = Path(__file__).resolve().parents[1] / "out"
KGFCM = 98.0665          # N*mm per kgf*cm
G = 9.80665
W1 = p.MASS_KG * G       # payload weight at 1 g
L_PIN_TIP = (p.SHAFT_X - p.CRANK_R) - p.TIP_LATCHED_X   # pin to keeper tip (25.5)

# Datasheet (Adafruit 2307, TowerPro MG92B): stall 3.1 kgf*cm at 4.8 V, 3.5 at 6.0 V
DATASHEET = [(4.8, 3.1), (6.0, 3.5)]

# Assumed scatter. All are guesses and should be replaced by measurements.
MC = dict(
    n=200_000, seed=1,
    horn_r=(4.5, 5.5),          # uniform, horn outer hole radius unknown
    servo_dx=(-0.5, 0.5),       # uniform, servo float in the 0.5 mm pocket gap
    stop_sd_deg=4.0,            # normal, servo deadband and trim at each end
    keeper_len_sd=0.1,          # normal, printed pin-to-tip length
    tab_float=(-p.SOCKET_GAP, p.SOCKET_GAP),   # uniform, tab position in its socket
    tab_t_sd=0.07,              # normal, printed tab thickness
)
BACKLASH_DEG = 3.0              # MG92B output backlash plus position error at latch, assumed


def stall_nmm(v):
    (v0, t0), (v1, t1) = DATASHEET
    return (t0 + (t1 - t0) * (v - v0) / (v1 - v0)) * KGFCM


def drag(mu, load=p.P_DESIGN):
    """Axial force to pull the keeper: friction at the hole top and both tunnel reactions."""
    return mu * load * 2 * (1 + p.REACTION_RATIO)


def torque_curve(mu, r=p.CRANK_R, load=p.P_DESIGN):
    """Scotch yoke: slot force F gives T = F r |sin a|; the pin sliding along the slot
    adds mu F r |cos a|. Returns (alpha, T) over the release swing."""
    a = np.radians(np.linspace(p.A_RELEASE, p.A_LATCH, 221))
    f = drag(mu, load)
    return np.degrees(a), f * r * (np.abs(np.sin(a)) + mu * np.abs(np.cos(a)))


def friction_sweep():
    working = stall_nmm(4.8) * p.WORKING_FRACTION
    rows = []
    for mu in np.round(np.arange(0.2, 0.61, 0.05), 2):
        _, t = torque_curve(mu)
        rows.append(dict(mu=float(mu), torque_needed_Nmm=float(t.max()),
                         margin_working=float(working / t.max()),
                         margin_stall=float(stall_nmm(4.8) / t.max())))
    mus = np.linspace(0.05, 2.0, 2000)
    need = np.array([torque_curve(m)[1].max() for m in mus])
    mu_at = lambda lim: float(mus[np.argmax(need > lim)]) if (need > lim).any() else None
    return dict(rows=rows, mu_for_margin_3=mu_at(working / 3), mu_for_stall=mu_at(stall_nmm(4.8)))


def derating():
    _, t = torque_curve(p.MU)
    need = t.max()
    return [dict(volts=v, stall_kgfcm=stall_nmm(v) / KGFCM,
                 margin_working=stall_nmm(v) * p.WORKING_FRACTION / need)
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
    x_pin = lambda a: p.SHAFT_X + dx + r * np.cos(np.radians(a))
    tip_l = x_pin(p.A_LATCH + e_l) - (L_PIN_TIP + dl)
    tip_r = x_pin(p.A_RELEASE + e_r) - (L_PIN_TIP + dl)
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
        engagement_mm=pct(engage), spare_travel_mm=pct(spare),
        tip_to_pocket_floor_mm=pct(tip_l - floor),
        P_partial_engagement_lt_0=float((engage < 0).mean()),
        P_engagement_below_half_keeper=float((engage < -p.KEEPER_W / 2).mean()),
        P_tip_hits_pocket_floor=float((tip_l < floor).mean()),
        P_spare_below_1mm=float((spare < 1.0).mean()),
        P_no_release=float((tip_r < tab_front).mean()),
        min_pin_to_slot_top_mm=float((slot_top - pz_top).min()),
    )


def dynamics(fea):
    out = {}
    if fea:
        k = 1 / sum(fea["cases"][c]["fine"]["load_point_disp_mm"] / p.P_PROOF for c in ("keeper", "adapter", "body"))
        out["support_stiffness_N_per_mm_rigid_wing"] = k
        out["payload_mode_Hz"] = sqrt(k * 1000 / p.MASS_KG) / (2 * pi)
    # Hanging payload rattle: it lifts off the keeper once vertical acceleration
    # exceeds 1 g plus the steady load factor (n = 1 assumed).
    gap = p.HOLE_H - p.KEEPER_W                         # 1.1 mm free play in the hole
    out["liftoff_threshold_g_peak"] = 1.0
    k_contact = out.get("support_stiffness_N_per_mm_rigid_wing", 5000.0)
    rows = []
    for a_g in (2.0, 3.0, 5.0):
        v = sqrt(2 * (a_g - 1) * G * gap / 1000)        # m/s after free flight across the gap
        f_imp = v * sqrt(k_contact * 1000 * p.MASS_KG)   # undamped impact peak, N
        rows.append(dict(vib_g_peak=a_g, impact_velocity_mps=v, impact_force_N=f_imp,
                         ratio_to_proof=f_imp / p.P_PROOF))
    out["rattle_impact"] = rows
    # Back-drive at dead centre. The axial keeper force comes from keeper inertia and from
    # friction as the tab slides in its socket under X vibration at load factor n.
    n, ax_g = 4.0, 10.0
    f_ax = p.MU * W1 * n + 0.001 * 0.91 * ax_g * G
    t_bd = f_ax * p.CRANK_R * sin(radians(BACKLASH_DEG))
    out["backdrive"] = dict(load_factor=n, axial_g=ax_g, backlash_deg=BACKLASH_DEG,
                            axial_force_N=f_ax, torque_Nmm=t_bd,
                            ratio_working_torque=stall_nmm(4.8) * p.WORKING_FRACTION / t_bd,
                            note="powered servo holds position; with the servo unpowered, "
                                 "retention is not a requirement")
    return out


def unseated():
    # contact angle when the tip meets the tab face (keeper 3.5 mm from latched)
    cos_a = (p.TAB_X[1] - p.TIP_LATCHED_X) / p.CRANK_R - 1
    alpha = float(np.degrees(np.arccos(cos_a)))
    arm = p.CRANK_R * sin(radians(alpha))
    f_work = stall_nmm(4.8) * p.WORKING_FRACTION / arm
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
    P, h = p.P_PROOF, p.KEEPER_W
    arm = p.TUNNEL_X[0] - (p.TAB_X[0] + p.TAB_X[1]) / 2
    s_keeper = P * arm / (h ** 3 / 6) + 1.5 * P * (1 + p.REACTION_RATIO) / h ** 2
    lig = (p.TAB_W - p.HOLE_W) / 2 * (p.TAB_X[1] - p.TAB_X[0]) * 2
    s_lig = P / lig
    bearing = P * (1 + p.REACTION_RATIO) / (h * 2.0)
    return dict(keeper_bending_plus_shear_MPa=s_keeper, margin_keeper=p.ALLOW_XY / s_keeper,
                tab_ligament_tension_MPa=s_lig, margin_ligament_across_layers=p.ALLOW_Z / s_lig,
                tunnel_mouth_bearing_MPa=bearing, margin_bearing=p.ALLOW_XY / bearing)


def main():
    OUT.mkdir(exist_ok=True)
    fea_path = OUT / "fea.json"
    fea = json.loads(fea_path.read_text()) if fea_path.exists() else None
    r = dict(friction=friction_sweep(), derating=derating(), monte_carlo=monte_carlo(),
             dynamics=dynamics(fea), unseated_tab=unseated(), hand_stresses=hand_stresses())
    mc, fr, dy, un, hs = r["monte_carlo"], r["friction"], r["dynamics"], r["unseated_tab"], r["hand_stresses"]
    nominal = next(x for x in fr["rows"] if abs(x["mu"] - 0.35) < 1e-9)
    gates = {
        "working margin >= 3 at mu 0.35, 4.8 V": nominal["margin_working"] >= 3,
        "working margin >= 3 at 4.6 V sag": next(d for d in r["derating"] if d["volts"] == 4.6)["margin_working"] >= 3,
        "P(no release) < 1e-4": mc["P_no_release"] < 1e-4,
        "P(spare travel < 1 mm) < 1e-3": mc["P_spare_below_1mm"] < 1e-3,
        "P(tip hits pocket floor) < 1e-4": mc["P_tip_hits_pocket_floor"] < 1e-4,
        "P(partial engagement) < 1e-3": mc["P_partial_engagement_lt_0"] < 1e-3,
        "pin clears slot top": mc["min_pin_to_slot_top_mm"] > 0,
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
    md += [f"| {x['mu']:.2f} | {x['torque_needed_Nmm']:.1f} | {x['margin_working']:.2f} | {x['margin_stall']:.2f} |" for x in fr["rows"]]
    md += ["", f"Margin falls to 3 at mu = {fr['mu_for_margin_3']:.2f}; stall at mu = {fr['mu_for_stall']}.", "",
           "| V | stall kgf·cm | working margin |", "|---|---:|---:|"]
    md += [f"| {d['volts']} | {d['stall_kgfcm']:.2f} | {d['margin_working']:.2f} |" for d in r["derating"]]
    md += ["", "Monte Carlo (" + f"{MC['n']:,}" + " samples):", ""] + [f"- {k}: {v}" for k, v in mc.items() if k != "inputs"]
    md += ["", "Dynamics:", ""] + [f"- {k}: {v}" for k, v in dy.items()]
    md += ["", "Unseated tab:", ""] + [f"- {k}: {v}" for k, v in un.items()]
    md += ["", "Hand stresses at 17.8 N:", ""] + [f"- {k}: {v:.2f}" for k, v in hs.items()]
    md += ["", "Gates:", ""] + [f"- {'PASS' if v else 'FAIL'} {k}" for k, v in gates.items()]
    (OUT / "risks.md").write_text("\n".join(md) + "\n")
    print("\n".join(md))
    sys.exit(0 if all(gates.values()) else 1)


if __name__ == "__main__":
    main()
