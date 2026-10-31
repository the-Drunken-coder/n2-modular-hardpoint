"""Coupled 2D sliding screen for the clamped sleeve, keeper, tab and guide.

All contact forces satisfy force and moment equilibrium.  The level-slot model
enumerates unilateral guide contacts and keeps the sleeve's rigid crank spin.
It does not qualify tilted-slot contact normals, lateral binding, elastic
contact redistribution or physical release.  See COUPLED_FORCES.md.
"""
from functools import lru_cache
from itertools import product
from math import acos, cos, degrees, pi, sin

import numpy as np

DIMENSION_NAMES = ("radius_mm", "shaft_x_error_mm", "relative_shaft_z_error_mm",
                   "keeper_length_error_mm", "slot_play_mm", "tab_float_x_mm",
                   "tab_thickness_error_mm", "guide_aperture_mm", "tab_contact_z_mm")


def solve_contact(points, guide_signs, slot_ratio, mu, load, direction):
    """Solve one contact mode; positive guide normals may point up or down.

    Points are sleeve/front-guide/rear-guide/tab in assembly millimetres.
    Return None for an inadmissible tensile contact or reverse axial drive.
    """
    points = np.asarray(points, dtype=float)
    sf, sr = guide_signs
    xs, xf, xr, xt = points[:, 0]
    zs, zf, zr, zt = points[:, 2]
    k, d = slot_ratio, direction
    matrix = np.array([[1., -mu, -mu], [k, sf, sr],
                       [d*zs-k*xs, -d*mu*zf-sf*xf, -d*mu*zr-sr*xr]])
    rhs = np.array([mu*load, load, -(xt-d*mu*zt)*load])
    try:
        force, nf, nr = np.linalg.solve(matrix, rhs)
    except np.linalg.LinAlgError:
        return None
    if not np.isfinite((force, nf, nr)).all() or min(force, nf, nr) < -1e-8:
        return None
    forces = np.array([[d*force, 0., k*force], [-d*mu*nf, 0., sf*nf],
                       [-d*mu*nr, 0., sr*nr], [-d*mu*load, 0., -load]])
    net_force = forces.sum(axis=0)
    net_moment = np.cross(points, forces).sum(axis=0)
    if np.linalg.norm(net_force) > 1e-8*max(1., load) or np.linalg.norm(net_moment) > 1e-7*max(1., load):
        raise AssertionError("coupled contact equilibrium failed")
    return dict(force_x_N=float(force), front_normal_N=float(nf), rear_normal_N=float(nr),
                sleeve_force_N=forces[0].tolist(), guide_forces_N=forces[1:3].tolist(),
                tab_force_N=forces[3].tolist(), guide_vertical_signs=list(guide_signs),
                force_residual_N=float(np.linalg.norm(net_force)),
                moment_residual_Nmm=float(np.linalg.norm(net_moment)))


def slot_motion(radius, alpha_deg, sleeve_radius, mu, angular_direction=-1):
    """Impending horizontal motion and rigid-sleeve surface velocity.

    A free roller would need another model.  At zero tangential slip either
    static-friction endpoint is admissible; callers must inspect both signs.
    """
    a = np.radians(alpha_deg)
    vx = -angular_direction*radius*np.sin(a)
    direction = np.where(vx >= 0, 1., -1.)
    vz = angular_direction*(radius*np.cos(a)+direction*sleeve_radius)
    ratio = np.where(vz >= 0, mu, -mu)
    arm = np.abs(radius*np.sin(a))+mu*np.abs(radius*np.cos(a)+direction*sleeve_radius)
    return direction, vz, ratio, arm


def _configuration_key(p):
    b = p.FIT_BOUNDS
    return (p.SHAFT_X, p.SHAFT_Z, p.CRANK_R, p.TIP_LATCHED_X, p.PIN_D/2,
            p.ZK, p.YK, p.GUIDE_PATCH_LENGTH, p.TAB_X[0], p.TAB_X[1], p.SOCKET_GAP,
            p.A_RELEASE+b["release_error_deg"][0], p.A_LATCH+b["latch_error_deg"][1],
            tuple(b["horn_r"]), tuple(b["servo_dx"]), tuple(b["keeper_length_error_mm"]),
            tuple(b["pin_slot_clearance_total_mm"]), tuple(b["tab_thickness_error_mm"]),
            tuple(b["guide_interval_x_mm"]), tuple(b["keeper_width_mm"]),
            tuple(b["guide_clearance_total_mm"]), b["relative_guide_shaft_z_error_mm"],
            b["tip_chamfer_mm"])


@lru_cache(maxsize=4)
def _geometry(key):
    (shaft_x, shaft_z, crank, tip, sleeve_r, bar_z, bar_y, patch, tab_lo, tab_hi, float_x,
     angle_lo, angle_hi, radii, dxs, lengths, plays, tab_errors, guide_x, widths, clearances,
     relative_z, chamfer) = key
    if not 0 < angle_lo < 180 < angle_hi < 190:
        raise ValueError("coupled sliding screen supports the inspected 0..190 degree opening path")
    if not 0 < patch < guide_x[1]-guide_x[0]:
        raise ValueError("invalid guide contact patch")
    loaded_front = max(guide_x[0], tab_hi+float_x+max(tab_errors)+chamfer)
    overhang = loaded_front-(tab_lo-float_x)
    if (guide_x[1]-loaded_front < 15.3-1e-9 or overhang > 5.4+1e-9
            or widths[0] < 4.9 or widths[1] > 5.1 or clearances[1] > 0.5
            or max(aperture for aperture in (widths[0]+clearances[0], widths[1]+clearances[1])) > 5.6+1e-9):
        raise ValueError("re-derive the tab-height enclosure for these inspection dimensions")
    # In the guide-centred frame, 11.3/10.0 mm at ZK=8 deliberately enclose
    # the upper tab-contact position including guide float/roll and overhang.
    # These independent positional bounds do not rotate the force directions.
    tab_heights = (bar_z+2.0, bar_z+3.3)
    apertures = (widths[0]+clearances[0], widths[1]+clearances[1])
    candidates = np.array(list(product(radii, dxs, (-relative_z, relative_z), lengths, plays,
                                       (-float_x, float_x), tab_errors, apertures, tab_heights)))
    radius, dx, dz, dl, play, tab_shift, tab_error, aperture, tab_z = candidates.T
    length = shaft_x-crank-tip+dl
    far = tab_lo+tab_shift
    near = tab_hi+tab_shift+tab_error
    angles = list(np.arange(angle_lo, angle_hi+0.125, 0.25))
    angles += [angle_lo, angle_hi, 180., 180.+1e-7]
    for r in radii:
        reversal = degrees(acos(-sleeve_r/r))
        angles += [reversal-1e-7, reversal, reversal+1e-7]
    # Include every contact-domain and load-removal boundary, not just a grid.
    for target in (far-chamfer, near-chamfer, near,
                   np.full_like(far, guide_x[0]-chamfer)):
        value = (target-shaft_x-dx+play/2+length)/radius
        for alpha in np.degrees(np.arccos(np.clip(value, -1, 1))):
            if angle_lo <= alpha <= min(angle_hi, 180):
                angles += [alpha-1e-7, alpha, alpha+1e-7]
    angles = np.array(sorted(set(round(float(a), 10) for a in angles if angle_lo <= a <= angle_hi)))
    alpha = np.radians(angles)[None, :]
    direction = np.where(angles <= 180, 1., -1.)[None, :]
    radius, dx, dz, length, play, far, near, aperture, tab_z = (
        a[:, None] for a in (radius, dx, dz, length, play, far, near, aperture, tab_z))
    xpin = shaft_x+dx+radius*np.cos(alpha)
    xs = xpin+direction*sleeve_r
    zs = shaft_z+dz+radius*np.sin(alpha)
    tip_x = xpin-direction*play/2-length
    full_tip = tip_x+chamfer
    loaded = tip_x < near-1e-9
    flat = full_tip <= near
    # The edge envelope does not assume uniform pressure on the remaining tab.
    # During final chamfer contact, retaining vertical P and adverse mu*P is
    # conservative for the chamfer's usual unloading/assisting action.
    xt = np.where(flat, np.maximum(far, full_tip), near)
    xf = np.maximum(guide_x[0], full_tip)+patch/2
    xr = np.full_like(xs, guide_x[1]-patch/2)
    floor, roof = bar_z-aperture/2, bar_z+aperture/2
    tangent = -(radius*np.cos(alpha)+direction*sleeve_r)
    return dict(key=key, angles=angles, candidates=candidates, radius=radius, alpha=alpha,
                direction=direction, xs=xs, zs=zs, xt=xt, zt=tab_z, xf=xf, xr=xr,
                floor=floor, roof=roof, tangent=tangent, loaded=loaded, flat=flat,
                tip_x=tip_x, full_tip=full_tip, far=far, near=near, bar_y=bar_y, sleeve_radius=sleeve_r)


def _fields(geometry, mu, load):
    """Vectorized elimination, checked against the independent 3x3 solve."""
    g = geometry
    d = g["direction"]
    k = np.where(g["tangent"] >= 0, mu, -mu)
    rhs = -(g["xt"]-d*mu*g["zt"])*load
    cf_slot = d*g["zs"]-k*g["xs"]
    best_f = np.full_like(g["xs"], -np.inf)
    best_mode = np.full(g["xs"].shape, -1, dtype=np.int8)
    # With a downward payload and mu<1, two downward guide normals cannot
    # support the assembly. The other three modes cover the positive solutions.
    modes = ((1, -1), (-1, 1), (1, 1))
    for mode, (sf, sr) in enumerate(modes):
        zf = g["floor"] if sf == 1 else g["roof"]
        zr = g["floor"] if sr == 1 else g["roof"]
        cf = -d*mu*zf-sf*g["xf"]
        cr = -d*mu*zr-sr*g["xr"]
        with np.errstate(divide="ignore", invalid="ignore"):
            if sf != sr:
                af, ar = (1/mu-sf*k)/2, (1/mu+sf*k)/2
                bf, br = load*(-1+sf)/2, load*(-1-sf)/2
                force = (rhs-cf*bf-cr*br)/(cf_slot+cf*af+cr*ar)
                nf, nr = af*force+bf, ar*force+br
            else:
                force = np.broadcast_to(2*mu*load/(1+mu*k), g["xs"].shape)
                total = force/mu-load
                nf = (rhs-cf_slot*force-cr*total)/(cf-cr)
                nr = total-nf
        valid = np.isfinite(force) & (force >= 0) & (nf >= -1e-8) & (nr >= -1e-8) & g["loaded"]
        better = valid & (force > best_f)
        best_f = np.where(better, force, best_f)
        best_mode = np.where(better, mode, best_mode)
    arm = np.abs(g["radius"]*np.sin(g["alpha"]))+mu*np.abs(
        g["radius"]*np.cos(g["alpha"])+d*g["sleeve_radius"])
    return best_f, best_f*arm, best_mode, k, modes


def _state(g, fields, row, column, mu, load):
    force, torque, modes_at, ratios, modes = fields
    sf, sr = modes[int(modes_at[row, column])]
    zf = g["floor"][row, 0] if sf == 1 else g["roof"][row, 0]
    zr = g["floor"][row, 0] if sr == 1 else g["roof"][row, 0]
    y = g["bar_y"]
    points = [[g["xs"][row, column], y, g["zs"][row, column]],
              [g["xf"][row, column], y, zf], [g["xr"][row, column], y, zr],
              [g["xt"][row, column], y, g["zt"][row, 0]]]
    direction = int(g["direction"][0, column])
    result = solve_contact(points, (sf, sr), ratios[row, column], mu, load, direction)
    if result is None or not np.isclose(result["force_x_N"], force[row, column], rtol=1e-9):
        raise AssertionError("vectorized envelope differs from independent equilibrium solve")
    result.update(alpha_deg=float(g["angles"][column]), keeper_sliding_direction=direction,
                  sleeve_application_point_mm=points[0], guide_application_points_mm=points[1:3],
                  tab_application_point_mm=points[3], torque_Nmm=float(torque[row, column]),
                  tip_x_mm=float(g["tip_x"][row, column]),
                  tab_near_face_x_mm=float(g["near"][row, 0]),
                  contact_phase="flat tab bearing" if g["flat"][row, column] else "vertical-load chamfer bound",
                  sleeve_relative_tangent_speed_per_rad_s=float(g["tangent"][row, column]),
                  dimensional_candidate=dict(zip(DIMENSION_NAMES, g["candidates"][row].tolist())))
    return result


def study(p, mu=None, load=None, include_states=True):
    """Inspected-position/edge-pressure envelope of the prescribed 2D model.

    Each displayed extremum is re-solved and audited as a free body.  The
    angular grid is 0.25 degrees with exact phase boundaries added; it is a
    numerical screen, not an interval proof of contact or release.
    """
    mu, load = p.MU if mu is None else float(mu), p.P_DESIGN if load is None else float(load)
    if not 0 < mu < 1 or not np.isfinite(load) or load <= 0:
        raise ValueError("coupled force screen requires 0<mu<1 and a positive finite load")
    g = _geometry(_configuration_key(p))
    fields = _fields(g, mu, load)
    forces, torques, modes_at, _, _ = fields
    finite = bool(np.all((modes_at >= 0) | ~g["loaded"]))
    common = dict(finite_sliding_solution=finite, friction_coefficient=mu, payload_load_N=load,
                  dimensional_candidates=len(g["candidates"]), angular_candidates=len(g["angles"]),
                  angular_grid_deg=0.25, tab_contact_z_bounds_mm=[p.ZK+2., p.ZK+3.3],
                  scope="Prescribed level-slot 2D Coulomb screen with clamped-sleeve spin, unilateral guide modes and migrating tab contact; tilted contact normals, lateral binding, elastic contact and physical release are unqualified",
                  method="Dimensional corner/edge-pressure envelope with angular grid and exact contact-phase boundaries; not a manufacturing probability or a continuous-contact proof")
    if not finite:
        return dict(common, max_torque=None, max_opening_force=None, max_closing_force=None,
                    required_torque_Nmm=None, working_torque_ratio=0., states=[],
                    failure_reason="At least one declared loaded pose has no finite nonnegative sliding-contact solution; torque capability is withheld")
    flat_index = int(np.argmax(torques))
    max_row, max_column = np.unravel_index(flat_index, torques.shape)
    maxima = {}
    for name, direction in (("max_opening_force", 1), ("max_closing_force", -1)):
        selected = np.where(g["direction"] == direction, forces, -np.inf)
        row, col = np.unravel_index(int(np.argmax(selected)), selected.shape)
        maxima[name] = _state(g, fields, row, col, mu, load)
    maximum = _state(g, fields, max_row, max_column, mu, load)
    states = []
    if include_states:
        for col in range(len(g["angles"])):
            rows = {int(np.argmax(forces[:, col])), int(np.argmax(torques[:, col]))}
            for row in rows:
                if modes_at[row, col] >= 0:
                    states.append(_state(g, fields, row, col, mu, load))
    working = p.STALL_KGFCM_5V*98.0665*p.WORKING_FRACTION
    return dict(common, max_torque=maximum, **maxima, states=states,
                required_torque_Nmm=maximum["torque_Nmm"],
                working_torque_ratio=working/maximum["torque_Nmm"])


def main():
    import hashlib
    import json
    from pathlib import Path
    import sys
    root = Path(__file__).resolve().parents[1]
    sys.path.insert(0, str(root))
    import params as p
    result = study(p, include_states=False)
    passed = bool(result["finite_sliding_solution"] and result["working_torque_ratio"] >= 3.)
    sources = (Path(__file__).resolve(), root/"params.py")
    result.update(schema_version=1, numerical_screen_passed=passed,
                  required_working_torque_ratio=3., physical_tests_performed=False,
                  working_load_rating_N=None,
                  source_sha256={str(path.relative_to(root)): hashlib.sha256(path.read_bytes()).hexdigest()
                                 for path in sources})
    out = root/"out"
    out.mkdir(exist_ok=True)
    (out/"coupled_forces.json").write_text(json.dumps(result, indent=2, allow_nan=False))
    print(json.dumps(result, indent=2, allow_nan=False))
    if not passed:
        raise SystemExit("coupled sliding force unresolved or working torque ratio below 3")


if __name__ == "__main__":
    main()
