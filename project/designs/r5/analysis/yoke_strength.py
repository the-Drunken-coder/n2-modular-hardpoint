"""Section screens for the open assembly-entry yoke, separate from vertical FEA.

The sleeve pulls the right wall; that force returns through the top bridge.
The prescribed closing jam pushes the left wall directly into the keeper bar.
Use inspected minimum sections, not an assumed printer accuracy. These beam
screens omit local corner concentration, contact and FDM failure interactions;
they do not establish unrestricted stall survival or replace physical tests.
"""
import json
import sys
from math import acos, cosh, degrees, isfinite, pi, radians, sin, sqrt, tanh
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
    """Minimum sections and maximum lever arms from the inspection contract.

    The extra bridge breadth is only on +Y. Its centre is consequently not the
    centre of the sleeve-contact walls. The 5 mm walls and bar stay separate
    sections; no area or notch credit is taken for the underside R0.8 blend.
    """
    if getattr(p, "HORN_GROOVE_ENABLED", True):
        raise ValueError("this load-path screen requires the unrelieved keeper bar")
    small, large = p.FIT_BOUNDS["keeper_width_mm"]
    full = min(p.YOKE_MIN_BREADTH, small)
    bridge_min, bridge_max = p.YOKE_BRIDGE_MIN_BREADTH, p.YOKE_BRIDGE_MAX_BREADTH
    nominal_bridge = p.KEEPER_W + p.YOKE_BRIDGE_EXTRA_Y
    if not (0 < full <= large and 0 < bridge_min <= nominal_bridge <= bridge_max
            and p.YOKE_BRIDGE_EXTRA_Y >= 0 and p.YOKE_BRIDGE_FILLET > 0):
        raise ValueError("invalid inspected yoke section or bridge dimensions")
    slot_top = p.SHAFT_Z + p.CRANK_R_MAX + p.PIN_SLOT/2 + p.YOKE_SLOT_TOP_EXTRA
    # The cap and wall -Y faces must align within FIT_DATUM_ERROR. For an
    # edge load, the larger cap's half-breadth already includes its +Y shift.
    # Adding the old wall eccentricity to this would count that shift twice.
    wall_e = large/2 + p.FIT_DATUM_ERROR
    bridge_e = bridge_max/2 + p.FIT_DATUM_ERROR
    position_error = p.FIT_SURFACE_ERROR
    return dict(left_wall_mm=p.YOKE_LEFT_WALL, right_wall_mm=p.YOKE_RIGHT_WALL,
                top_bridge_mm=p.YOKE_TOP_WALL, wall_breadth_min_mm=full,
                left_wall_max_mm=p.YOKE_LEFT_WALL+2*position_error,
                right_wall_max_mm=p.YOKE_RIGHT_WALL+2*position_error,
                top_bridge_max_mm=p.YOKE_TOP_WALL+2*position_error,
                bar_height_min_mm=small, bridge_breadth_min_mm=bridge_min,
                bridge_breadth_max_mm=bridge_max,
                bridge_centroid_y_nominal_mm=p.YK+p.YOKE_BRIDGE_EXTRA_Y/2,
                bridge_centroid_shift_y_mm=p.YOKE_BRIDGE_EXTRA_Y/2,
                bridge_to_wall_near_face_alignment_max_mm=p.FIT_DATUM_ERROR,
                wall_contact_eccentricity_y_mm=wall_e,
                bridge_contact_eccentricity_y_mm=bridge_e,
                slot_width_max_mm=p.PIN_D+p.FIT_BOUNDS["pin_slot_clearance_total_mm"][1],
                section_position_error_mm=position_error,
                slot_top_z_mm=slot_top, bar_top_z_mm=p.ZK+p.KEEPER_W/2,
                bridge_bottom_z_bounds_mm=[slot_top-position_error, slot_top+position_error],
                bridge_top_z_bounds_mm=[slot_top+p.YOKE_TOP_WALL-position_error,
                                        slot_top+p.YOKE_TOP_WALL+position_error],
                underside_blend_radius_mm=p.YOKE_BRIDGE_FILLET,
                underside_blend_start_z_mm=slot_top-p.YOKE_BRIDGE_FILLET,
                transition_model="Minimum narrow sections through the blended shoulder; no fillet area or stress-concentration credit")


def finish(normal, shear, allowable, **details):
    principal = principal_bound(normal, shear)
    return dict(**details, normal_bound_MPa=normal, shear_bound_MPa=shear,
                principal_section_bound_MPa=principal,
                allowable_in_layer_MPa=allowable, margin=allowable/principal)


def wall_screen(p, g, fx, fz, arm, thickness, axial_arm=None):
    """Bound a Z-directed wall using its minimum breadth throughout.

    Axial Fz, bending from Fx and the contact-face offset, cross-plane bending,
    transverse shear and eccentric-force torsion are all included. Magnitudes
    are added even where their actual extrema occur at different points.
    """
    b, e = g["wall_breadth_min_mm"], g["wall_contact_eccentricity_y_mm"]
    if axial_arm is None:
        axial_arm = thickness/2 + g["section_position_error_mm"]
    area = thickness*b
    normal = (abs(fz)/area + (abs(fx)*arm + abs(fz)*axial_arm)/(b*thickness**2/6)
              + abs(fz)*e/(thickness*b**2/6))
    gxy, gz = p.E_XY/(2*(1+p.NU)), p.E_Z/(2*(1+p.NU))
    shear = 1.5*abs(fx)/area + rectangular_torsion(fx*e, thickness, b, gxy, gz)
    return finish(normal, shear, p.ALLOW_XY, axial_force_z_N=abs(fz),
                  transverse_force_x_N=abs(fx), arm_mm=arm,
                  axial_force_x_arm_mm=axial_arm,
                  contact_eccentricity_y_mm=e,
                  minimum_section_mm=[thickness, b])


def bar_root_screen(p, g, fx, fz, pin_z_bounds, opening):
    """X-normal section where the narrow left wall enters the keeper bar.

    All guide and tab loads lie to the left of this cut; the entire pin force
    returns across it. A wider cap does not widen this 4.9-by-4.9 minimum bar.
    """
    b, h = g["wall_breadth_min_mm"], g["bar_height_min_mm"]
    e, error = g["wall_contact_eccentricity_y_mm"], g["section_position_error_mm"]
    z_arm = max(abs(z-p.ZK) for z in pin_z_bounds)+error
    x_arm = g["left_wall_mm"]+2*error+(g["slot_width_max_mm"] if opening else 0)
    normal = (abs(fx)/(b*h)+(abs(fx)*z_arm+abs(fz)*x_arm)/(b*h**2/6)
              + abs(fx)*e/(h*b**2/6))
    gxy, gz = p.E_XY/(2*(1+p.NU)), p.E_Z/(2*(1+p.NU))
    shear = 1.5*abs(fz)/(b*h)+rectangular_torsion(fz*e, b, h, gz, gxy)
    return finish(normal, shear, p.ALLOW_XY, axial_force_x_N=abs(fx),
                  transverse_force_z_N=abs(fz), vertical_arm_mm=z_arm,
                  horizontal_arm_mm=x_arm, contact_eccentricity_y_mm=e,
                  minimum_section_mm=[b, h])


def withdrawal_screen(p, g, force, fz, pin_z_bounds):
    """Independent adverse force/height bounds for the complete opening path.

    Magnitudes deliberately remove favourable friction-sign cancellation. The
    shared force model has already included that friction in guide equilibrium;
    it is not permissible to substitute payload-only drag for ``force`` here.
    """
    b, t = g["bridge_breadth_min_mm"], g["top_bridge_mm"]
    e, error = g["bridge_contact_eccentricity_y_mm"], g["section_position_error_mm"]
    centre_z = g["slot_top_z_mm"]+t/2
    h = max(abs(centre_z-z) for z in pin_z_bounds)+error
    span = g["slot_width_max_mm"]
    normal = (force/(b*t)+(force*h+abs(fz)*span)/(b*t**2/6)
              + force*e/(t*b**2/6))
    gxy, gz = p.E_XY/(2*(1+p.NU)), p.E_Z/(2*(1+p.NU))
    shear = 1.5*abs(fz)/(b*t)+rectangular_torsion(fz*e, b, t, gz, gxy)
    bridge = finish(normal, shear, p.ALLOW_XY, axial_force_x_N=force,
                    slot_friction_z_N=abs(fz), vertical_arm_mm=h,
                    horizontal_arm_mm=span, contact_eccentricity_y_mm=e,
                    minimum_section_mm=[b, t])
    # At the shoulder, use the original narrow wall even where the R0.8 blend
    # adds material. Its top and bar-root sections bracket every intermediate
    # bending arm, including a pin below the bar top at the latched endpoint.
    top = g["slot_top_z_mm"]
    right_arm = max(abs(top-z) for z in pin_z_bounds)+error
    right = wall_screen(p, g, force, fz, right_arm, g["right_wall_mm"])
    left_arm = max(abs(level-z) for level in (top, g["bar_top_z_mm"])
                   for z in pin_z_bounds)+error
    left = wall_screen(p, g, force, fz, left_arm, g["left_wall_mm"],
                       span+g["left_wall_mm"]/2+error)
    root = bar_root_screen(p, g, force, fz, pin_z_bounds, opening=True)
    sections = dict(bridge=bridge, right_wall=right, receiving_left_wall=left, bar_root=root)
    worst = max(sections, key=lambda name: sections[name]["principal_section_bound_MPa"])
    stress = sections[worst]["principal_section_bound_MPa"]
    return dict(pin_z_bounds_mm=list(pin_z_bounds), force_x_bound_N=force,
                force_z_abs_bound_N=abs(fz), **sections, governing_section=worst,
                governing_section_bound_MPa=stress, margin=p.ALLOW_XY/stress)


def closing_screen(p, g, force, fz, pin_z_bounds):
    """Left-wall loading, directly into the bar; no right-wall/bridge detour."""
    arm = max(0, max(pin_z_bounds)-g["bar_top_z_mm"]+g["section_position_error_mm"])
    left = wall_screen(p, g, force, fz, arm, g["left_wall_mm"])
    root = bar_root_screen(p, g, force, fz, pin_z_bounds, opening=False)
    sections = dict(left_wall=left, bar_root=root)
    worst = max(sections, key=lambda name: sections[name]["principal_section_bound_MPa"])
    stress = sections[worst]["principal_section_bound_MPa"]
    return dict(pin_z_bounds_mm=list(pin_z_bounds), force_x_bound_N=force,
                force_z_abs_bound_N=abs(fz), **sections, governing_section=worst,
                governing_section_bound_MPa=stress, margin=p.ALLOW_XY/stress)


def pin_height_bounds(p, lo, hi):
    """Independent height extremes; preserve the relative guide/shaft Z bound."""
    angles = [lo, hi]+[a for a in (90, 180, 270) if lo <= a <= hi]
    heights = [p.SHAFT_Z+r*sin(radians(a)) for a in angles for r in p.FIT_BOUNDS["horn_r"]]
    error = p.FIT_BOUNDS["relative_guide_shaft_z_error_mm"]
    return min(heights)-error, max(heights)+error


def assess(p=None):
    if p is None:
        import params as p
    from coupled_forces import study
    from risks import stall_nmm
    g = section_geometry(p)
    fit = p.FIT_BOUNDS
    rlo = fit["horn_r"][0]
    opening_z = pin_height_bounds(p, p.A_RELEASE+fit["release_error_deg"][0], 180)
    closing_z = pin_height_bounds(p, 180, p.A_LATCH+fit["latch_error_deg"][1])

    def envelope(payload_force):
        loads = study(p, load=payload_force, include_states=False)
        if not loads["finite_sliding_solution"]:
            raise ValueError("yoke service screen requires a finite coupled sliding solution")
        reports = []
        for key, direction, function, height in (
                ("max_opening_force", 1, withdrawal_screen, opening_z),
                ("max_closing_force", -1, closing_screen, closing_z)):
            state = loads[key]
            force = state["force_x_N"]
            vector = state["sleeve_force_N"]
            if not (isfinite(force) and force > 0
                    and state["keeper_sliding_direction"] == direction
                    and abs(vector[0]-direction*force) < 1e-8
                    and abs(vector[1]) < 1e-8 and abs(vector[2]) <= p.MU*force+1e-8):
                raise ValueError("inconsistent coupled sleeve-force state")
            result = function(p, g, force, p.MU*force, height)
            reports.append(dict(payload_force_N=payload_force, keeper_drag_N=force,
                                governing_force_state=state, **result))
        return reports[0], reports[1], dict(scope=loads["scope"],
            method=loads["method"], friction_coefficient=loads["friction_coefficient"],
            max_required_torque_Nmm=loads["max_torque"]["torque_Nmm"],
            working_torque_ratio=loads["working_torque_ratio"],
            force_envelope="Maximum coupled force with independent height and adverse friction-sign bounds; strength is a section screen")

    service, over_center, force_model = envelope(p.P_DESIGN)
    proof_sensitivity, proof_over_center, _ = envelope(p.P_PROOF)
    alpha = degrees(acos((p.TAB_X[1]-p.TIP_LATCHED_X)/p.CRANK_R-1))
    arm = p.CRANK_R*sin(radians(alpha))
    force = stall_nmm(6.0)/arm  # same conservative pose as risks.unseated()
    pin_z = p.SHAFT_Z+arm
    error = fit["relative_guide_shaft_z_error_mm"]
    jam = closing_screen(p, g, force, p.MU*force, (pin_z-error, pin_z+error))
    jam.update(angle_deg=alpha, pin_z_mm=pin_z, catalog_torque_case_V=6.0,
               note="Prescribed closing contact only; not a measured maximum servo torque")
    # A finite, nonsingular demonstration that service strength is not a stall
    # rating. At 90 degrees, T/r is an upper force bound without credit for slot
    # friction. Dead-centre force cannot be bounded by T/r across the full path.
    stall_force = stall_nmm(5.0)/rlo
    stall90 = withdrawal_screen(p, g, stall_force, p.MU*stall_force,
                                (p.SHAFT_Z+rlo-error, p.SHAFT_Z+rlo+error))
    stall90.update(angle_deg=90, radius_mm=rlo)
    return dict(required_as_built_minimum_sections=g,
                force_model=force_model, service_withdrawal=service,
                service_over_center_closing=over_center,
                proof_drag_sensitivity=dict(**proof_sensitivity,
                    over_center_closing=proof_over_center,
                    note="Sensitivity only: the selected retention proof does not command release"),
                prescribed_closing_jam=jam,
                finite_90deg_5V_stall_sensitivity=stall90,
                service_section_screen_pass=bool(min(service["margin"], over_center["margin"]) >= 1),
                prescribed_closing_jam_section_screen_pass=bool(jam["margin"] >= 1),
                unrestricted_release_stall_survival="NOT QUALIFIED; no measured or mechanical torque limiter",
                limitations="Section model, no notch/contact/FDM interaction qualification; physical loaded-motion and bounded jam gates remain pending")


if __name__ == "__main__":
    report = assess()
    print(json.dumps(report, indent=2))
    if not (report["service_section_screen_pass"] and report["prescribed_closing_jam_section_screen_pass"]):
        raise SystemExit("Yoke section screen below the selected allowable")
