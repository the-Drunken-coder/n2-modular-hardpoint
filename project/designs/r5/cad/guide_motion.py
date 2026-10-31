"""Sample coupled guide poses using the certified remaining engagement.

The independent polygon filter has a larger cavity than the real relief. It
can reject impossible poses, but accepting samples is not a continuous contact
proof. Full-path measured clearance and departure remain separate build gates.
"""
from itertools import product
from math import asin, cos, degrees, pi, radians, sin, sqrt
from pathlib import Path
import sys

from OCP.BRepExtrema import BRepExtrema_DistShapeShape

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "analysis"))
import params as p
from fit_envelope import contact_envelope, guide_angle, motion_guide_certificate, tip_interval
from guided_pose_geometry import rotation_matrix, section_samples_fit_relief_superset
from build import horn_screw, ycyl
from clearance import bearing_reservation, loaded_pose, overlap


def pose_samples(certificate):
    b = p.FIT_BOUNDS
    length = certificate["remaining_guide_length_candidate_mm"]
    angle = radians(certificate["continuous_pitch_yaw_abs_bound_deg"])
    shorter = dict(b, guide_length_min_mm=length)
    roll_bound = radians(contact_envelope(p, shorter, angle)["roll_abs_bound_deg"])
    width = b["keeper_width_mm"][0]
    gap = b["guide_clearance_total_mm"][1]
    pure_roll = asin((width + gap) / (sqrt(2) * width)) - pi / 4
    rolls = {0.0, -pure_roll, pure_roll}
    rolls.update(sign * fraction * roll_bound
                 for fraction in (0.25, 0.5, 0.75, 1.0) for sign in (-1, 1))
    tilts = (-angle, -angle / 2, 0.0, angle / 2, angle)
    floats = (-gap / 2, 0.0, gap / 2)
    candidates = product(tilts, tilts, sorted(rolls), floats, floats)
    samples = []
    for pitch, yaw, roll, dy, dz in candidates:
        # Check every accepted rectangular section corner. Keep the pose when
        # ANY section fits the larger cavity; false positives are conservative.
        if any(section_samples_fit_relief_superset(
                (wy, wz), (wy + gap, wz + gap), (pitch, yaw, roll), (dy, dz),
                length, b["guide_relief_intrusion_max_mm"], b["guide_relief_extent_max_mm"])
               for wy, wz in product(b["keeper_width_mm"], repeat=2)):
            samples.append((degrees(pitch), degrees(yaw), degrees(roll), dy, dz))
    assert samples and any(abs(s[2]) >= degrees(pure_roll) - 1e-8 for s in samples)
    return samples, degrees(pure_roll), degrees(roll_bound)


def bbox_distance(a, b):
    return sqrt(sum(max(0.0, getattr(a, axis + "min") - getattr(b, axis + "max"),
                        getattr(b, axis + "min") - getattr(a, axis + "max")) ** 2
                    for axis in "xyz"))


def minimum_distance(shape, other):
    solver = BRepExtrema_DistShapeShape(shape.val().wrapped, other.val().wrapped)
    solver.Perform()
    assert solver.IsDone(), "surface-distance calculation failed"
    return solver.Value()


def slot_translation_interval(alpha, pitch, yaw, roll, guide_dz, pivot):
    """Local-X keeper placement from the actual sleeve axis and tilted slot.

    The CAD slot datum uses nominal CRANK_R. Each real radius has its own
    sleeve X/Z position; it must not be substituted into keeper_x(), which
    would move the CAD latch datum as well. At either local yoke Y face, solve
    the world X/Z contact coordinates for local X/Z. For fixed orientation the
    solution is affine, so dimensional endpoint combinations give its extrema.
    """
    b = p.FIT_BOUNDS
    matrix = rotation_matrix(radians(pitch), radians(yaw), radians(roll))
    a, c = matrix[0, 0], matrix[0, 2]
    d, e = matrix[2, 0], matrix[2, 2]
    determinant = a * e - c * d
    assert determinant > 0, "slot contact placement is singular"
    slot_x = p.SHAFT_X - p.CRANK_R
    half_y = b["keeper_width_mm"][1] / 2
    placements = []
    for radius, shaft_dx, shaft_dz, contact_y in product(
            b["horn_r"], b["servo_dx"], (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR),
            (-half_y, half_y)):
        pin_x = p.SHAFT_X + shaft_dx + radius * cos(radians(alpha))
        pin_z = p.SHAFT_Z + shaft_dz + radius * sin(radians(alpha))
        rhs_x = pin_x - pivot - matrix[0, 1] * contact_y
        rhs_z = pin_z - p.ZK - guide_dz - matrix[2, 1] * contact_y
        local_x = (rhs_x * e - c * rhs_z) / determinant
        placements.append(local_x - (slot_x - pivot))
    pin_play = b["pin_slot_clearance_total_mm"][1] / 2
    length_error = max(abs(x) for x in b["keeper_length_error_mm"])
    shaft_x_error = max(abs(x) for x in b["servo_dx"])
    reserve = p.FIT_AXIAL_ENVELOPE - pin_play - length_error - shaft_x_error
    assert reserve >= -1e-10, "axial allowance omits inspected errors"
    # Shaft X is already included above. Do not add it for a second time.
    extra = pin_play + length_error + max(0.0, reserve)
    return min(placements) - extra, max(placements) + extra


def guaranteed_guide_interval(alpha, certificate):
    """A fixed-angle consequence of the same continuous continuation proof."""
    b = p.FIT_BOUNDS
    motion = dict(b, guide_length_min_mm=certificate["remaining_guide_length_candidate_mm"],
                  release_error_deg=(b["release_error_deg"][0],
                                     certificate["normal_crank_interval_deg"][1] - p.A_RELEASE))
    angle = radians(certificate["continuous_pitch_yaw_abs_bound_deg"])
    nominal_length = p.SHAFT_X - p.CRANK_R - p.TIP_LATCHED_X
    full_section_lead = max(tip_interval(
        p, motion, angle, radius, dx, alpha, nominal_length + dl - b["tip_chamfer_mm"])[1]
        for radius, dx, dl in product(b["horn_r"], b["servo_dx"], b["keeper_length_error_mm"]))
    front, rear = b["guide_interval_x_mm"]
    return max(front, full_section_lead), rear


def pose_fits_interval(sample, interval, pivot):
    """Reject only poses impossible in a guaranteed larger-than-real cavity."""
    pitch, yaw, roll, dy, dz = sample
    angles = tuple(radians(x) for x in (pitch, yaw, roll))
    matrix = rotation_matrix(*angles)
    delta_x = sum(interval) / 2 - pivot
    center = (dy + matrix[1, 0] / matrix[0, 0] * delta_x,
              dz + matrix[2, 0] / matrix[0, 0] * delta_x)
    b = p.FIT_BOUNDS
    gap = b["guide_clearance_total_mm"][1]
    return any(section_samples_fit_relief_superset(
        (wy, wz), (wy + gap, wz + gap), angles, center, interval[1] - interval[0],
        b["guide_relief_intrusion_max_mm"], b["guide_relief_extent_max_mm"])
        for wy, wz in product(b["keeper_width_mm"], repeat=2))


def positioned_samples(alpha, samples, pivot, certificate):
    interval = guaranteed_guide_interval(alpha, certificate)
    for sample, ey, ez in product(samples, (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR),
                                  (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR)):
        # At latch the certificate establishes the full original guide, which
        # excludes extreme short-guide poses. Both guide and keeper share the
        # datum offset, so this relative fit filter uses float, not that offset.
        if not pose_fits_interval(sample, interval, pivot):
            continue
        pitch, yaw, roll, dy, dz = sample
        for withdrawal in slot_translation_interval(alpha, pitch, yaw, roll, dz + ez, pivot):
            yield sample, withdrawal, ey, ez


def check_guided_motion(body, keeper):
    certificate = motion_guide_certificate(p, p.FIT_BOUNDS)
    samples, pure_roll, outer_roll = pose_samples(certificate)
    pivot = sum(certificate["common_retained_guide_interval_x_mm"]) / 2
    obstacles = body.cut(bearing_reservation())
    head = horn_screw()
    horn = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y - 2.5,
                p.SPLINE_TOP_Y, 2 * p.HORN_REACH)
    head_bb, horn_bb = head.val().BoundingBox(), horn.val().BoundingBox()
    # Guide datum is applied to each pose. The shaft can move independently
    # in all three axes; its Euclidean bound is sqrt(3) times the axis limit.
    distance_allowance = 2 * p.FIT_SURFACE_ERROR + sqrt(3) * p.FIT_DATUM_ERROR
    required = p.MOTION_CLEARANCE + distance_allowance
    washer_y = p.SPLINE_TOP_Y + p.CRANK_PIN["sleeve_l"]
    angles = (183, 180, 177, 160, 140, 120, 100, 90, 80, 60, 50, 42, 40)
    roof_min, washer_min = float("inf"), float("inf")
    head_min, horn_min = float("inf"), float("inf")
    placement_correction = [float("inf"), -float("inf")]
    intervals, poses_by_angle = {}, {}
    orientations_by_angle, tilt_bounds_by_angle = {}, {}
    poses = 0
    for alpha in angles:
        intervals[alpha] = list(guaranteed_guide_interval(alpha, certificate))
        # Sample the actual guaranteed interval's boundary as well as interior
        # tilts. Merely filtering a fixed short-guide grid would drop the full
        # guide's 1.80375-degree extrema without replacing them at latch.
        length = intervals[alpha][1] - intervals[alpha][0]
        phase_certificate = dict(certificate,
            remaining_guide_length_candidate_mm=length,
            common_retained_guide_interval_x_mm=intervals[alpha],
            continuous_pitch_yaw_abs_bound_deg=degrees(guide_angle(
                dict(p.FIT_BOUNDS, guide_length_min_mm=length))))
        samples, _, _ = pose_samples(phase_certificate)
        pivot = sum(intervals[alpha]) / 2
        orientations_by_angle[alpha] = len(samples)
        tilt_bounds_by_angle[alpha] = phase_certificate["continuous_pitch_yaw_abs_bound_deg"]
        count_before = poses
        for (pitch, yaw, roll, dy, dz), withdrawal, ey, ez in positioned_samples(alpha, samples, pivot, certificate):
            dx = withdrawal - p.keeper_x(alpha)
            placement_correction[0] = min(placement_correction[0], dx)
            placement_correction[1] = max(placement_correction[1], dx)
            moved = loaded_pose(keeper, withdrawal, pitch, yaw,
                                dy + ey, dz + ez, roll, pivot)
            assert overlap(moved, obstacles) < 1e-6, (
                "external receiver contact", alpha, pitch, yaw, roll, dy, dz, dx, ey, ez)
            bb = moved.val().BoundingBox()
            # Bounding-box separation is a rigorous lower bound. Only invoke
            # exact surface distance when that cheaper bound does not suffice.
            for name, other, other_bb in (("head", head, head_bb), ("horn", horn, horn_bb)):
                lower = bbox_distance(bb, other_bb)
                current_min = head_min if name == "head" else horn_min
                if lower < required or lower - distance_allowance < current_min:
                    lower = minimum_distance(moved, other)
                assert lower >= required - 1e-8, (
                    name + " clearance", lower - distance_allowance, alpha,
                    pitch, yaw, roll, dy, dz, dx, ey, ez)
                if name == "head":
                    head_min = min(head_min, lower - distance_allowance)
                else:
                    horn_min = min(horn_min, lower - distance_allowance)
            roof_min = min(roof_min, p.BODY["z"] - p.YOKE_ROOF_T - bb.zmax
                           - 2 * p.FIT_SURFACE_ERROR)
            # A whole-part Y box is conservative for the finite washer disc.
            washer_min = min(washer_min, washer_y - bb.ymax
                             - p.FIT_DATUM_ERROR - 2 * p.FIT_SURFACE_ERROR)
            poses += 1
        poses_by_angle[alpha] = poses - count_before
        assert poses_by_angle[alpha], ("no admitted poses", alpha)
    assert roof_min >= p.MOTION_CLEARANCE, ("withdrawn/rolled roof clearance", roof_min)
    assert washer_min >= p.MOTION_CLEARANCE, ("withdrawn/rolled washer clearance", washer_min)
    return dict(poses=poses, coupled_orientation_float_samples_by_angle=orientations_by_angle,
                crank_angles_deg=list(angles), guide_certificate=certificate,
                guaranteed_guide_intervals_by_angle_mm=intervals,
                poses_by_angle=poses_by_angle,
                sampled_tilt_bounds_by_angle_deg=tilt_bounds_by_angle,
                pure_roll_reference_deg=pure_roll, analytic_roll_outer_bound_deg=outer_roll,
                sampled_pitch_yaw_bound_deg=certificate["continuous_pitch_yaw_abs_bound_deg"],
                inspected_guide_clearance_total_mm=list(p.FIT_SLIDE_TOTAL),
                inspected_guide_length_min_mm=p.FIT_GUIDE_LENGTH_MIN,
                axial_position_allowance_mm=p.FIT_AXIAL_ENVELOPE,
                measured_crank_radius_interval_mm=list(p.FIT_BOUNDS["horn_r"]),
                local_x_correction_from_nominal_translation_mm=placement_correction,
                placement="Actual radius and tilted slot-plane X/Z solve at both yoke faces; inspected shaft/play/length bounds",
                roof_clearance_after_surface_errors_mm=roof_min,
                washer_clearance_after_errors_mm=washer_min,
                head_clearance_lower_bound_after_errors_mm=head_min,
                horn_clearance_lower_bound_after_errors_mm=horn_min,
                shaft_and_surface_distance_allowance_mm=distance_allowance,
                required_noncontact_clearance_mm=p.MOTION_CLEARANCE,
                scope="Sampled rigid poses admitted by a larger guide cavity; not continuous contact or deformation proof",
                physical_loaded_release="PENDING: verify full path, including rolled withdrawn poses, on printed assemblies")
