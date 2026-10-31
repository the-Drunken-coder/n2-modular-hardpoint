"""Prescribed receiver opening loads, with full guide and servo wrenches.

The servo ears are ideal clamped interfaces, including fastener tension and
shear. They are loaded, not fixed supports. Socket reactions must be supplied
on identified physical faces before a complete body case can be constructed.
No helper here establishes an assembled frictional contact solution.
"""
from copy import deepcopy
from itertools import product
from math import ceil, cos, radians, sin

import numpy as np

import fea
from coupled_forces import solve_contact, slot_motion, study
from load_audit import check_resultants

p = fea.p


def _vector(value, name):
    value = np.asarray(value, dtype=float)
    if value.shape != (3,) or not np.isfinite(value).all():
        raise ValueError(f"{name} must be a finite three-component vector")
    return value


def rectangular_patch(name, point, axis, bands, force):
    """An axis-aligned physical rectangle, selected by whole boundary facets.

    ``bands`` names both in-plane axes. Refinement centres cover the rectangle
    with cells no wider than 1 mm, below the body's 0.8 mm refinement radius.
    """
    point, force = _vector(point, "patch point"), _vector(force, "patch force")
    bands = tuple((int(a), float(lo), float(hi)) for a, lo, hi in bands)
    if axis not in (0, 1, 2) or {a for a, _, _ in bands} != {0, 1, 2}-{axis}:
        raise ValueError("patch must bound both axes of its physical plane")
    if len(bands) != 2 or any(not np.isfinite((lo, hi)).all() or not lo < hi
                             or not lo <= point[a] <= hi for a, lo, hi in bands):
        raise ValueError("patch point must lie inside finite positive-width bands")

    def select(x):
        mask = fea.near(x[axis], point[axis])
        for a, lo, hi in bands:
            mask = mask & (x[a] >= lo) & (x[a] <= hi)
        return mask

    coordinates = []
    for a, lo, hi in bands:
        count = max(1, ceil(hi-lo))
        coordinates.append((a, lo+(np.arange(count)+0.5)*(hi-lo)/count))
    centres = []
    for u in coordinates[0][1]:
        for v in coordinates[1][1]:
            q = point.copy()
            q[coordinates[0][0]], q[coordinates[1][0]] = u, v
            centres.append(q.tolist())
    return dict(name=name, select=select, plane=(axis, float(point[axis])),
                application_point=point.tolist(), force=force.tolist(),
                vertex_bands=bands, refinement_points_mm=centres)


def patch_resultants(loads):
    """Independent force/moment sum about the assembly origin, in N/N mm."""
    force, moment = np.zeros(3), np.zeros(3)
    for load in loads:
        vector = _vector(load["force"], "load force")
        point = _vector(load["application_point"], "load point")
        force += vector
        moment += np.cross(point, vector)
    return force, moment


def clamped_patch_forces(points, force, moment):
    """Minimum-norm vector loads transmitting all six wrench components.

    Normal tension and in-plane shear represent a clamped fastener interface,
    not unilateral contact pressure. A rank-deficient arrangement is rejected;
    in particular, collinear points cannot carry an arbitrary torsional couple.
    """
    points = np.asarray(points, dtype=float)
    force, moment = _vector(force, "target force"), _vector(moment, "target moment")
    if points.ndim != 2 or points.shape[1] != 3 or len(points) < 3 or not np.isfinite(points).all():
        raise ValueError("clamped interface needs at least three finite patch points")
    centre = points.mean(axis=0)
    matrix = np.zeros((6, 3*len(points)))
    for i, (x, y, z) in enumerate(points-centre):
        matrix[:3, 3*i:3*i+3] = np.eye(3)
        matrix[3:, 3*i:3*i+3] = ((0, -z, y), (z, 0, -x), (-y, x, 0))
    target = np.r_[force, moment-np.cross(centre, force)]
    solution, _, rank, _ = np.linalg.lstsq(matrix, target, rcond=None)
    if rank != 6:
        raise ValueError("clamped patch layout cannot transmit the full wrench")
    forces = solution.reshape((-1, 3))
    check_resultants((forces.sum(axis=0), np.cross(points, forces).sum(axis=0)),
                     (force, moment), "servo clamped-interface wrench")
    return forces


def nominal_guide_loads(state):
    """Apply action/reaction on actual nominal body flats and patch centres.

    The source envelope uses inspected-position extremes. Its force vectors
    are preserved; their moments must be recomputed after this position map.
    """
    half_gap = (p.KEEPER_W+p.SLIDE)/2
    ylo, yhi = p.YK-p.KEEPER_W/2, p.YK+p.KEEPER_W/2
    if len(state["guide_forces_N"]) != 2 or len(state["guide_vertical_signs"]) != 2:
        raise ValueError("body opening requires front and rear guide reactions")
    result = []
    for i, (force, sign) in enumerate(zip(state["guide_forces_N"], state["guide_vertical_signs"])):
        force = _vector(force, "guide force on keeper")
        if sign not in (-1, 1) or sign*force[2] < -1e-8:
            raise ValueError("guide normal is inconsistent with its contact plane")
        xlo = p.TUNNEL_X[0] if i == 0 else p.TUNNEL_X[1]-p.GUIDE_PATCH_LENGTH
        xhi = xlo+p.GUIDE_PATCH_LENGTH
        z = p.ZK-sign*half_gap
        face = "floor" if sign == 1 else "roof"
        result.append(rectangular_patch(
            f"{'front' if i == 0 else 'rear'}_guide_{face}",
            ((xlo+xhi)/2, p.YK, z), 2, ((0, xlo, xhi), (1, ylo, yhi)), -force))
    if len(result) != 2:
        raise ValueError("body opening requires front and rear guide reactions")
    return result


def ear_patch_points():
    """Nominal clamp patches above/below each real ear-screw axis."""
    case_start = p.SHAFT_X-p.SHAFT_FROM_END
    offset = (p.EAR_SPAN-p.SERVO_CASE["l"])/4
    xaxes = (case_start-offset, case_start+p.SERVO_CASE["l"]+offset)
    return [(x, p.EAR_Y, p.SHAFT_Z+dz) for x in xaxes for dz in (-3.0, 3.0)]


def servo_ear_loads(state):
    """Return the complete opposite sleeve wrench through four ear patches."""
    points = ear_patch_points()
    servo_force = -_vector(state["sleeve_force_N"], "sleeve force on keeper")
    servo_moment = np.cross(_vector(state["sleeve_application_point_mm"], "sleeve point"), servo_force)
    vectors = clamped_patch_forces(points, servo_force, servo_moment)
    return [rectangular_patch(f"servo_ear_{i+1}", point, 1,
                ((0, point[0]-0.8, point[0]+0.8), (2, point[2]-0.8, point[2]+0.8)), vector)
            for i, (point, vector) in enumerate(zip(points, vectors))]


def opening_components(state, reference_payload_point=None):
    """Map guide/servo loads and expose the socket wrench still required.

    This deliberately returns no runnable FE case: the residual interface
    wrench must first be represented on documented physical socket faces.
    """
    loads = nominal_guide_loads(state)+servo_ear_loads(state)
    reference = _vector(fea.TAB_CENTRE if reference_payload_point is None
                        else reference_payload_point, "payload reference point")
    payload = -_vector(state["tab_force_N"], "tab force on keeper")[2]
    if not payload > 0:
        raise ValueError("opening state must carry a positive downward payload")
    expected_force = np.array([0.0, 0.0, -payload])
    expected_moment = np.cross(reference, expected_force)
    force, moment = patch_resultants(loads)
    definition = dict(reference_payload_force_N=payload,
        reference_payload_point_mm=reference.tolist(),
        target_force_N=expected_force.tolist(), target_moment_Nmm=expected_moment.tolist(),
        guide_servo_force_N=force.tolist(), guide_servo_moment_Nmm=moment.tolist(),
        required_socket_force_N=(expected_force-force).tolist(),
        required_socket_moment_Nmm=(expected_moment-moment).tolist(),
        force_state=state,
        servo_interface="Four ideal clamped ear patches carry force and all moments, including normal tension/shear; fastener pull-out and slip are not qualified",
        position_map="Guide vectors reversed onto nominal body patch centres and actual flat planes; sleeve wrench preserved at its source application point",
        contact_status="Incomplete until a physical socket-return distribution is specified")
    return loads, definition


def centered_reference_state(alpha_deg):
    """Balanced level-force reference at the +X socket float limit.

    The payload and nominal tab-bearing centroids both move to X10.4. This
    centred-bearing traction reference is not asserted to be the simultaneous
    rigid contact state that produced the conservative force-envelope maximum.
    """
    radius, sleeve_r = p.CRANK_R, p.PIN_D/2
    alpha = radians(alpha_deg)
    direction, tangent, ratio, torque_arm = slot_motion(radius, alpha_deg, sleeve_r, p.MU)
    direction, tangent, ratio, torque_arm = int(direction), float(tangent), float(ratio), float(torque_arm)
    if direction != 1:
        raise ValueError("centered body reference requires the opening/right-wall branch")
    tab_x = (p.TAB_X[0]+p.TAB_X[1])/2+p.SOCKET_GAP
    tab_point = [tab_x, p.YK, p.HOLE_TOP_LOADED]
    pin = [p.SHAFT_X+radius*cos(alpha)+sleeve_r, p.YK, p.SHAFT_Z+radius*sin(alpha)]
    pin_to_tip = p.SHAFT_X-p.CRANK_R-p.TIP_LATCHED_X
    tip_x = pin[0]-sleeve_r-(p.PIN_SLOT-p.PIN_D)/2-pin_to_tip
    full_tip = tip_x+p.FIT_BOUNDS["tip_chamfer_mm"]
    domain = [max(p.TAB_X[0]+p.SOCKET_GAP, full_tip), p.TAB_X[1]+p.SOCKET_GAP]
    if not domain[0] <= tab_x <= domain[1] or full_tip > p.TUNNEL_X[0]:
        raise ValueError("centered reference no longer has its stated tab/guide bearing domain")
    gap = (p.KEEPER_W+p.SLIDE)/2
    ratios = (-p.MU, p.MU) if abs(tangent) < 1e-10 else (ratio,)
    candidates = []
    for k, (sf, sr) in product(ratios, ((1, -1), (-1, 1), (1, 1))):
        points = [pin, [p.GUIDE_PATCH_X[0], p.YK, p.ZK-sf*gap],
                  [p.GUIDE_PATCH_X[1], p.YK, p.ZK-sr*gap], tab_point]
        result = solve_contact(points, (sf, sr), k, p.MU, p.P_DESIGN, direction)
        if result is not None:
            result.update(alpha_deg=float(alpha_deg), keeper_sliding_direction=direction,
                sleeve_application_point_mm=pin,
                guide_application_points_mm=points[1:3], tab_application_point_mm=tab_point,
                torque_Nmm=result["force_x_N"]*torque_arm, tip_x_mm=tip_x,
                remaining_flat_tab_domain_x_mm=domain,
                sleeve_relative_tangent_speed_per_rad_s=tangent)
            candidates.append(result)
    if not candidates:
        raise ValueError("centered body reference has no finite unilateral guide solution")
    return max(candidates, key=lambda value: value["force_x_N"])


def _covered_components(state):
    values = {}
    for label, vector in (("sleeve_force", state["sleeve_force_N"]),
                          ("front_guide_force", state["guide_forces_N"][0]),
                          ("rear_guide_force", state["guide_forces_N"][1])):
        values.update({f"{label}_{axis}_N": float(value) for axis, value in zip("xyz", vector)})
    centre = np.mean(ear_patch_points(), axis=0)
    torque = np.cross(np.asarray(state["sleeve_application_point_mm"])-centre,
                      -np.asarray(state["sleeve_force_N"]))
    values.update({f"servo_moment_about_ear_centroid_{axis}_Nmm": float(value)
                   for axis, value in zip("xyz", torque)})
    return values


def scaled_reference(reference, envelope):
    """Scale the complete balanced system to cover named force/moment amplitudes.

    Componentwise coverage at two mapped poses is not a full-stroke stress or
    contact envelope. A changed sign/contact branch requires a new reference;
    it is not silently represented by an absolute magnitude in the wrong sense.
    """
    baseline, target = _covered_components(reference), _covered_components(envelope)
    ratios = {"design_service_load": 1.0}
    for name, want in target.items():
        have = baseline[name]
        if abs(want) < 1e-10:
            ratios[name] = 0.0
        elif abs(have) < 1e-10 or have*want < 0:
            raise ValueError(f"centered reference cannot cover the signed component {name}")
        else:
            ratios[name] = abs(want/have)
    governing = max(ratios, key=ratios.get)
    scale = ratios[governing]
    result = deepcopy(reference)
    for name in ("force_x_N", "front_normal_N", "rear_normal_N", "torque_Nmm",
                 "force_residual_N", "moment_residual_Nmm"):
        result[name] *= scale
    for name in ("sleeve_force_N", "guide_forces_N", "tab_force_N"):
        result[name] = (np.asarray(result[name])*scale).tolist()
    points = [result["sleeve_application_point_mm"], *result["guide_application_points_mm"],
              result["tab_application_point_mm"]]
    vectors = [result["sleeve_force_N"], *result["guide_forces_N"], result["tab_force_N"]]
    check_resultants((np.sum(vectors, axis=0), np.cross(points, vectors).sum(axis=0)),
                     (np.zeros(3), np.zeros(3)), "scaled keeper reference equilibrium")
    coverage = [dict(component=name, envelope_value=target[name], reference_value=baseline[name],
                     scaled_value=baseline[name]*scale, required_scale=ratios[name]) for name in target]
    return result, dict(scale_factor=scale, governing_scale_component=governing,
                        component_coverage=coverage,
                        servo_moment_reference_point_mm=np.mean(ear_patch_points(), axis=0).tolist())


def positive_socket_return(definition):
    """Positive +X pressure on available lower/upper near-wall side strips.

    Nominal bands avoid the guide relief and top chamfer; the upper band also
    stays on the tab face after its nominal 0.199177 mm loaded vertical shift.
    Two positive height weights put the aggregate return at the tab-load height.
    This distribution is a prescribed component interface, not solved pressure.
    """
    force = _vector(definition["required_socket_force_N"], "socket force")
    moment = _vector(definition["required_socket_moment_Nmm"], "socket moment")
    x, centre_z = p.TAB_X[1]+p.SOCKET_GAP, p.HOLE_TOP_LOADED
    if force[0] <= 0:
        raise ValueError("reference needs a positive +X socket-side return")
    check_resultants((force, moment),
                     (np.array([force[0], 0., 0.]), np.cross([x, p.YK, centre_z], [force[0], 0., 0.])),
                     "single-side socket return")
    ybands = ((p.YK-p.TAB_W/2+0.25, p.YK-p.HOLE_W/2-0.15),
              (p.YK+p.HOLE_W/2+0.15, p.YK+p.TAB_W/2-0.25))
    heights = ((centre_z-1.3, centre_z-0.7), (p.TAB_TOP-1.7, p.TAB_TOP-1.3))
    lower, upper = (sum(band)/2 for band in heights)
    if not lower < centre_z < upper:
        raise ValueError("physical socket bands do not bracket the return centroid")
    weights = ((upper-centre_z)/(upper-lower), (centre_z-lower)/(upper-lower))
    loads = []
    for i, (zband, weight) in enumerate(zip(heights, weights)):
        for j, yband in enumerate(ybands):
            loads.append(rectangular_patch(f"socket_{'lower' if i == 0 else 'upper'}_{j+1}",
                [x, sum(yband)/2, sum(zband)/2], 0,
                ((1, *yband), (2, *zband)), [force[0]*weight/2, 0., 0.]))
    check_resultants(patch_resultants(loads), (force, moment), "positive socket patch return")
    return loads


def body_opening_cases():
    """Two conditional scaled-reference body screens, separate from retention."""
    coupled = study(p, include_states=False)
    if not coupled["finite_sliding_solution"]:
        raise ValueError("body opening requires a finite coupled force envelope")
    cases = {}
    for name, key in (("body_opening_force", "max_opening_force"),
                       ("body_opening_torque", "max_torque")):
        envelope = coupled[key]
        reference = centered_reference_state(envelope["alpha_deg"])
        state, scaling = scaled_reference(reference, envelope)
        loads, definition = opening_components(state, reference["tab_application_point_mm"])
        loads += positive_socket_return(definition)
        target = (np.asarray(definition["target_force_N"]), np.asarray(definition["target_moment_Nmm"]))
        check_resultants(patch_resultants(loads), target, f"{name} complete body source load")
        case = dict(fea.CASES["body"], loads=loads, source_resultant=target,
                    reference_load_N=definition["reference_payload_force_N"],
                    bearing_points=[point for load in loads for point in load["refinement_points_mm"]])
        definition.update(design_service_force_N=p.P_DESIGN,
            applied_reference_force_N=definition["reference_payload_force_N"],
            source_envelope_case=key, source_envelope_state=envelope,
            unscaled_centered_reference_state=reference, **scaling,
            contact_status="Conditional nominal component traction model; not a jointly realized rigid contact state",
            basis="Centered tab and payload at the +0.4 mm socket float datum; balanced nominal guide/servo forces scaled together to cover selected envelope force and servo-moment components",
            socket_basis="Four positive +X side-strip patches at the actual near socket face; lower/upper weights preserve the tab-height return centroid; no opposed artificial couple",
            limitations="Componentwise amplitude coverage does not prove a full-stroke stress/contact envelope. The edge-pressure envelope and centered reference are not the same assembled contact state. Clamped ear tractions idealize screw tension/shear, not pull-out or slip qualification. Physical release and printed-process qualification remain pending.")
        definition["load_patch_definitions"] = [
            {key: load[key] for key in ("name", "plane", "application_point", "force", "vertex_bands")}
            for load in loads]
        cases[name] = (case, definition)
    return cases
