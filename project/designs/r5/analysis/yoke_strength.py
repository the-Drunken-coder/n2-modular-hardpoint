"""Section screens for the open assembly-entry yoke, separate from vertical FEA.

The sleeve pulls the right wall; that force returns through the top bridge.
The prescribed closing jam pushes the left wall directly into the keeper bar.
Use inspected minimum sections, not an assumed printer accuracy. These beam
screens omit local corner concentration, contact and FDM failure interactions;
they do not establish unrestricted stall survival or replace physical tests.
"""
import json
import sys
from math import acos, cosh, degrees, pi, radians, sin, sqrt, tanh
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))


def principal_bound(normal, shear):
    """Conservative combination of non-coincident section stress maxima."""
    return normal / 2 + sqrt((normal / 2) ** 2 + shear ** 2)


def rectangular_torsion(torque, u, v, shear_lu, shear_lv):
    """Saint-Venant maximum shear, with orthotropic coordinate rescaling.

    Prandtl equation: phi_uu/G_lv + phi_vv/G_lu = -2*twist.
    Set u'=u*sqrt(G_lv/G_lu); then T'=T*sqrt(G_lv/G_lu).
    The two mid-face stresses are transformed back before taking their maximum.
    Isotropic rectangular series: Chen & Howell (2018), equations (1)--(4),
    https://doi.org/10.1186/s10033-018-0214-9 . No material strength is inferred.
    """
    if min(u, v, shear_lu, shear_lv) <= 0:
        raise ValueError("section dimensions and shear moduli must be positive")
    k = sqrt(shear_lv / shear_lu)
    a, b = u * k, v
    wide, thin = max(a, b), min(a, b)
    odd = range(1, 202, 2)
    j = wide * thin ** 3 / 3 * (1 - 192 * thin / (pi ** 5 * wide)
        * sum(tanh(n * pi * wide / (2 * thin)) / n ** 5 for n in odd))

    def midface(width, depth):
        # Terms beyond cosh(700) are negligible and would overflow.
        return depth * (1 - 8 / pi ** 2 * sum(
            1 / (n ** 2 * cosh(n * pi * width / (2 * depth)))
            for n in odd if n * pi * width / (2 * depth) < 700))

    t_prime = abs(torque) * k
    return max(t_prime * midface(a, b) / j,
               k * t_prime * midface(b, a) / j)


def section_geometry(p):
    full = p.YOKE_MIN_BREADTH
    relieved = getattr(p, "HORN_GROOVE_ENABLED", True)
    rear = min(full, p.YK + p.KEEPER_W / 2 - (
        p.SPLINE_TOP_Y + p.HORN_SCREW["head_h"] + p.HORN_GROOVE_Y_CLEAR)) if relieved else full
    slot_top = p.SHAFT_Z + p.CRANK_R_MAX + p.PIN_SLOT / 2 + 0.5
    groove_top = (p.SHAFT_Z + p.HORN_SCREW["head_d"] / 2 + p.HORN_GROOVE_Z_CLEAR
                  if relieved else float("-inf"))
    if not 0 < rear <= full or (relieved and groove_top >= slot_top):
        raise ValueError("groove leaves no supported section for this model")
    max_width = p.FIT_BOUNDS["keeper_width_mm"][1]
    # A yawed slot can contact at one Y edge. Include that whole eccentricity,
    # plus the inspected datum allowance and any relieved-section centroid shift.
    eccentricity = max_width/2 + p.FIT_DATUM_ERROR + (p.KEEPER_W-rear)/2
    return dict(left_wall_mm=p.YOKE_LEFT_WALL, right_wall_mm=p.YOKE_RIGHT_WALL,
                top_bridge_mm=p.YOKE_TOP_WALL, full_breadth_mm=full,
                rear_breadth_mm=rear, contact_eccentricity_y_mm=eccentricity,
                slot_top_z_mm=slot_top, bar_top_z_mm=p.ZK+p.KEEPER_W/2)


def finish(normal, shear, allowable, **details):
    principal = principal_bound(normal, shear)
    return dict(**details, normal_bound_MPa=normal, shear_bound_MPa=shear,
                principal_section_bound_MPa=principal,
                allowable_in_layer_MPa=allowable, margin=allowable/principal)


def wall_screen(p, g, fx, fz, arm, thickness):
    """Bound a Z-directed wall using its minimum rear breadth throughout.

    Axial Fz, bending from Fx and the contact-face offset, cross-plane bending,
    transverse shear and eccentric-force torsion are all included. Magnitudes
    are added even where their actual extrema occur at different points.
    """
    b, e = g["rear_breadth_mm"], g["contact_eccentricity_y_mm"]
    area = thickness*b
    normal = (abs(fz)/area + (abs(fx)*arm + abs(fz)*thickness/2)/(b*thickness**2/6)
              + abs(fz)*e/(thickness*b**2/6))
    gxy, gz = p.E_XY/(2*(1+p.NU)), p.E_Z/(2*(1+p.NU))
    shear = 1.5*abs(fx)/area + rectangular_torsion(fx*e, thickness, b, gxy, gz)
    return finish(normal, shear, p.ALLOW_XY, axial_force_z_N=abs(fz),
                  transverse_force_x_N=abs(fx), arm_mm=arm,
                  minimum_section_mm=[thickness, b])


def withdrawal_screen(p, g, force, mu, alpha, radius):
    z_pin = p.SHAFT_Z + radius*sin(radians(alpha))
    b, t = g["full_breadth_mm"], g["top_bridge_mm"]
    e, fz = g["contact_eccentricity_y_mm"], mu*force
    h = g["slot_top_z_mm"] + t/2 - z_pin
    # Use the adverse sign of slot friction throughout, including its moment
    # across the slot span. This bounds either sliding direction at an endpoint.
    normal = (force/(b*t) + (force*h + fz*p.PIN_SLOT)/(b*t**2/6)
              + force*e/(t*b**2/6))
    gxy, gz = p.E_XY/(2*(1+p.NU)), p.E_Z/(2*(1+p.NU))
    shear = 1.5*fz/(b*t) + rectangular_torsion(fz*e, b, t, gz, gxy)
    bridge = finish(normal, shear, p.ALLOW_XY, axial_force_x_N=force,
                    slot_friction_z_N=fz, vertical_arm_mm=h,
                    minimum_section_mm=[b, t])
    wall = wall_screen(p, g, force, fz, max(0, g["slot_top_z_mm"]-z_pin),
                       g["right_wall_mm"])
    worst = max(bridge["principal_section_bound_MPa"], wall["principal_section_bound_MPa"])
    return dict(angle_deg=alpha, radius_mm=radius, pin_z_mm=z_pin,
                bridge=bridge, right_wall=wall, governing_section_bound_MPa=worst,
                margin=p.ALLOW_XY/worst)


def assess(p=None):
    if p is None:
        import params as p
    from risks import drag, stall_nmm
    g = section_geometry(p)
    fit = getattr(p, "FIT_BOUNDS", {})
    rlo, rhi = fit.get("horn_r", (p.CRANK_R-0.1, p.CRANK_R_MAX))
    lo, hi = fit.get("latch_error_deg", (-3, 3))
    angles = [p.A_RELEASE, p.A_LATCH+lo, p.A_LATCH, p.A_LATCH+hi, 90]

    def envelope(payload_force):
        force = drag(p.MU, payload_force)
        cases = [withdrawal_screen(p, g, force, p.MU, angle, radius)
                 for angle in angles for radius in (rlo, rhi)]
        result = max(cases, key=lambda row: row["governing_section_bound_MPa"])
        return dict(payload_force_N=payload_force, keeper_drag_N=force, **result)

    service, proof_sensitivity = envelope(p.P_DESIGN), envelope(p.P_PROOF)
    alpha = degrees(acos((p.TAB_X[1]-p.TIP_LATCHED_X)/p.CRANK_R-1))
    arm = p.CRANK_R*sin(radians(alpha))
    force = stall_nmm(6.0)/arm  # same conservative pose as risks.unseated()
    pin_z = p.SHAFT_Z+arm
    jam = wall_screen(p, g, force, p.MU*force,
                      max(0, pin_z-g["bar_top_z_mm"]), g["left_wall_mm"])
    jam.update(angle_deg=alpha, pin_z_mm=pin_z, catalog_torque_case_V=6.0,
               note="Prescribed closing contact only; not a measured maximum servo torque")
    # A finite, nonsingular demonstration that service strength is not a stall
    # rating. At 90 degrees, T/r is an upper force bound without credit for slot
    # friction. Dead-centre force cannot be bounded by T/r across the full path.
    stall90 = withdrawal_screen(p, g, stall_nmm(5.0)/rlo, p.MU, 90, rlo)
    return dict(required_as_built_minimum_sections=g,
                service_withdrawal=service,
                proof_drag_sensitivity=dict(**proof_sensitivity,
                    note="Sensitivity only: the selected retention proof does not command release"),
                prescribed_closing_jam=jam,
                finite_90deg_5V_stall_sensitivity=stall90,
                service_section_screen_pass=bool(service["margin"] >= 1),
                prescribed_closing_jam_section_screen_pass=bool(jam["margin"] >= 1),
                unrestricted_release_stall_survival="NOT QUALIFIED; no measured or mechanical torque limiter",
                limitations="Section model, no notch/contact/FDM interaction qualification; physical loaded-motion and bounded jam gates remain pending")


if __name__ == "__main__":
    report = assess()
    print(json.dumps(report, indent=2))
    if not (report["service_section_screen_pass"] and report["prescribed_closing_jam_section_screen_pass"]):
        raise SystemExit("Yoke section screen below the selected allowable")
