"""Conservative continuous-angle endpoint bounds for the guided sleeve/yoke.

See FIT_ENVELOPE.md for the constrained slot-plane equation. This bounds rigid
endpoint geometry; it does not establish contact-free motion or printed strength.
"""
from itertools import product
from math import asin, atan2, cos, degrees, isfinite, pi, radians, sin, sqrt, tan


def guide_angle(bounds):
    width = bounds["keeper_width_mm"][0]
    length = bounds["guide_length_min_mm"]
    clearance = bounds["guide_clearance_total_mm"][1]
    if min(width, length) <= 0 or not 0 <= clearance < width:
        raise ValueError("invalid guide inspection dimensions")
    lo, hi = 0.0, radians(10)
    for _ in range(64):
        a = (lo + hi) / 2
        if length*sin(a)/cos(a) + width/cos(a) > width+clearance:
            hi = a
        else:
            lo = a
    if hi >= radians(9.999):
        raise ValueError("guide bound exceeds the supported angular interval")
    angle = (lo + hi) / 2
    validate_relief_contract(bounds, angle)
    return angle


def validate_relief_contract(bounds, angle):
    """Check the sufficient flat-contact inequalities in FIT_ENVELOPE.md.

    The relief's outer bulb is not an unrestricted guide opening. This proof
    applies to the assembled orientation continuously connected to zero roll,
    with every relief confined to its inspected corner mouth and outer extent.
    """
    small, large = bounds["keeper_width_mm"]
    clear_min, clear_max = bounds["guide_clearance_total_mm"]
    intrusion = bounds["guide_relief_intrusion_max_mm"]
    extent = bounds["guide_relief_extent_max_mm"]
    flat = bounds["guide_flat_width_min_mm"]
    length = bounds["guide_length_min_mm"]
    values = (small, large, clear_min, clear_max, intrusion, extent, flat, length, angle)
    if not all(isfinite(value) for value in values):
        raise ValueError("guide relief inspection limits must be finite")
    if not (0 < small <= large and 0 < clear_min <= clear_max
            and 0 <= intrusion <= extent and flat > 0 and length > 0
            and 0 <= angle < pi/4):
        raise ValueError("invalid guide relief inspection limits")
    if small/large < sin(pi/4):
        raise ValueError("keeper aspect ratio does not preserve the central generators")
    aperture = large+clear_max
    outer = aperture+2*extent
    center = (outer-small)/2
    broad_slope = (outer-small)/length
    witness_offset = large/2*broad_slope**2
    # Each mouth is measured from its adjoining flat-guide planes. Width alone
    # would not establish the centered portion when opposite mouths differ.
    central_half = (small+clear_min)/2-intrusion
    if flat < 2*central_half-1e-12:
        raise ValueError("measured flat width is below the corner-mouth contract")
    if center+witness_offset >= central_half:
        raise ValueError("outer relief can move the central generators off the guide flats")
    if small*sqrt(2) <= aperture:
        raise ValueError("guide permits passage through 45 degrees of keeper roll")
    sec, shear = 1/cos(angle), tan(angle)**2
    opposite_extra = intrusion+large*(sec-1+shear)
    adjacent_drop = small/large*cos(angle)*(clear_min-large*(sec-1)-2*large*shear)
    if opposite_extra >= clear_min or adjacent_drop <= intrusion:
        raise ValueError("corner mouths are too large to preserve the guided section bound")
    return dict(central_flat_half_mm=central_half,
                initial_center_plus_generator_offset_mm=center+witness_offset,
                opposite_edge_extra_mm=opposite_extra,
                adjacent_corner_drop_mm=adjacent_drop)


def corner_span(bounds, angle):
    """Local rolled-section box, allowing the oblique guide-section shear."""
    return (bounds["keeper_width_mm"][1]+bounds["guide_clearance_total_mm"][1])/cos(angle)


def contact_envelope(p, bounds, angle):
    """One constant contact-Y bound over both accepted endpoint intervals.

    The sleeve touches the raised yoke, so its rolled Y coordinate can exceed
    the guide-bar corner box. Keep this constant across crank-angle candidates;
    the analytic extrema used by angular_candidates then remain applicable.
    """
    span = corner_span(bounds, angle)
    ratio = span/(bounds["keeper_width_mm"][0]*sqrt(2))
    if not 1/sqrt(2) <= ratio < 1:
        raise ValueError("section box does not establish a finite near-zero roll bound")
    roll = asin(ratio)-pi/4
    candidates = []
    for base, errors in ((p.A_LATCH, bounds["latch_error_deg"]),
                         (p.A_RELEASE, bounds["release_error_deg"])):
        lo, hi = base+errors[0], base+errors[1]
        candidates.extend((lo, hi))
        candidates.extend(a for a in (0, 90, 180, 270, 360) if lo <= a <= hi)
    radius = bounds["horn_r"]
    height = max(abs(p.SHAFT_Z+r*sin(radians(a))-p.ZK) for r in radius for a in candidates)
    dx = max(p.SHAFT_X+b+r*cos(radians(a))-sum(bounds["guide_interval_x_mm"])/2
             for b in bounds["servo_dx"] for r in radius for a in candidates)
    if dx <= 0:
        raise ValueError("pin must remain behind the guide midpoint")
    height += (bounds["relative_guide_shaft_z_error_mm"]
               + bounds["guide_clearance_total_mm"][1]/2 + tan(angle)*dx)
    denominator = cos(roll)-sin(roll)*tan(angle)**2
    if denominator <= 0:
        raise ValueError("rolled sleeve-contact bound is unbounded")
    half_y = (bounds["keeper_width_mm"][1]/2+sin(roll)*height)/denominator
    return dict(local_corner_box_mm=span, roll_abs_bound_deg=degrees(roll),
                sleeve_contact_y_abs_bound_mm=half_y,
                sleeve_contact_height_bound_mm=height)


def motion_guide_certificate(p, bounds):
    """Prove a minimum remaining guide interval over the complete normal stroke.

    A first escape below the candidate length would require the full-section
    leading face to reach rear_x-length. The interval below proves it cannot.
    The full original guide must also be recovered at either latch endpoint.
    """
    front, rear = bounds["guide_interval_x_mm"]
    length = bounds["remaining_guide_length_min_mm"]
    if not (isfinite(front) and isfinite(rear) and isfinite(length)
            and 0 < length <= bounds["guide_length_min_mm"] <= rear-front+1e-10):
        raise ValueError("invalid inspected guide interval or remaining-length candidate")
    lo = p.A_RELEASE+bounds["release_error_deg"][0]
    hi = p.A_LATCH+bounds["latch_error_deg"][1]
    if not 0 < lo < hi < 270:
        raise ValueError("unsupported normal operating interval")
    # Include the intermediate90-degree crank height in the constant contact
    # bound; endpoint heights alone cannot certify the complete path.
    motion = dict(bounds, guide_length_min_mm=length,
                  release_error_deg=(bounds["release_error_deg"][0], hi-p.A_RELEASE))
    angle = guide_angle(motion)
    nominal_length = p.SHAFT_X-p.CRANK_R-p.TIP_LATCHED_X
    maximum_lead, latch_lead = -float("inf"), -float("inf")
    for radius, dx, dl in product(bounds["horn_r"], bounds["servo_dx"],
                                  bounds["keeper_length_error_mm"]):
        section_distance = nominal_length+dl-bounds["tip_chamfer_mm"]
        candidates = angular_candidates(lo, hi, radius, p.SHAFT_Z, p.ZK, angle)
        for alpha in candidates:
            maximum_lead = max(maximum_lead, tip_interval(
                p, motion, angle, radius, dx, alpha, section_distance)[1])
        for alpha in angular_candidates(p.A_LATCH+bounds["latch_error_deg"][0], hi,
                                        radius, p.SHAFT_Z, p.ZK, angle):
            latch_lead = max(latch_lead, tip_interval(
                p, motion, angle, radius, dx, alpha, section_distance)[1])
    guaranteed = rear-max(front, maximum_lead)
    if guaranteed <= length:
        raise ValueError("remaining-guide continuation barrier is not certified")
    if latch_lead > front:
        raise ValueError("full original guide is not established at latch")
    return dict(normal_crank_interval_deg=(lo, hi),
                full_section_lead_max_x_mm=maximum_lead,
                latched_full_section_lead_max_x_mm=latch_lead,
                remaining_guide_length_candidate_mm=length,
                remaining_guide_length_proved_mm=guaranteed,
                common_retained_guide_interval_x_mm=(rear-length, rear),
                continuous_pitch_yaw_abs_bound_deg=degrees(angle))


def angular_candidates(lo, hi, radius, shaft_z, bar_z, angle):
    """All extrema/branch changes of the endpoint interval expressions.

    Each branch is A*cos(alpha)+B*sin(alpha)+constant. Include its stationary
    points, height-sign changes, interval endpoints and geometric dead center.
    """
    s, c = sin(angle), cos(angle)
    k = s*c
    candidates = [lo, hi]
    for base in (0.0, 90.0, 180.0):
        if lo <= base <= hi:
            candidates.append(base)
    for q in (-1, 1):
        for a, b in ((1.0, q*k), (c*c, -q*k)):
            base = degrees(atan2(b, a))
            for turn in range(-2, 4):
                value = base+turn*180
                if lo <= value <= hi:
                    candidates.append(value)
    height_ratio = (bar_z-shaft_z)/radius
    if -1 <= height_ratio <= 1:
        a = degrees(asin(height_ratio))
        for value in (a, 180-a, 360+a):
            if lo <= value <= hi:
                candidates.append(value)
    return sorted(set(candidates))


def tip_interval(p, b, angle, radius, shaft_dx, alpha, length):
    """Lower/upper X of a tip section, including either sleeve contact edge.

    Cross-section roll and the raised sleeve-contact point are bounded from
    the inspected guide flats. Guide float is included independently even at
    maximum pitch/yaw, deliberately enlarging the physically possible pose set.
    """
    if length <= 0:
        raise ValueError("pin-to-tip section distance must be positive")
    s, c = sin(angle), cos(angle)
    xp = p.SHAFT_X+shaft_dx+radius*cos(radians(alpha))
    zp = p.SHAFT_Z+radius*sin(radians(alpha))
    # Withdrawal shortens the guide from its front. Its actual midpoint moves
    # +X; retaining the original midpoint makes this lower bound conservative.
    xc = sum(b["guide_interval_x_mm"])/2
    if xp <= xc:
        raise ValueError("pin must remain behind the guide midpoint for this bound")
    guide_float = b["guide_clearance_total_mm"][1]/2
    z_offset = b["relative_guide_shaft_z_error_mm"]+guide_float
    envelope = contact_envelope(p, b, angle)
    # Two tip-corner terms plus the contact-Y term. The latter belongs to the
    # raised yoke and cannot simply reuse the guide bar's half-width.
    corners = (envelope["local_corner_box_mm"]
               + envelope["sleeve_contact_y_abs_bound_mm"])*s
    height = s*c*(abs(zp-p.ZK)+z_offset)
    play = b["pin_slot_clearance_total_mm"][1]/2
    base = xp-length
    # xp>xc makes the guide-projection term nonpositive. The retained-length
    # projection is nonnegative. Keeping their intervals separate is conservative.
    lower = base+(xc-xp)*s*s-height-corners-play
    upper = base+length*s*s+height+corners+play
    return lower, upper
