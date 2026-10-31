"""Conservative continuous-angle endpoint bounds for the guided sleeve/yoke.

See FIT_ENVELOPE.md for the constrained slot-plane equation. This bounds rigid
endpoint geometry; it does not establish contact-free motion or printed strength.
"""
from math import asin, atan2, cos, degrees, pi, radians, sin


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
    return (lo + hi) / 2


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

    Cross-section roll is conservatively enclosed in the maximum guide-sized
    Y/Z box. Guide float is included independently even at maximum pitch/yaw,
    deliberately enlarging the physically possible pose set.
    """
    if length <= 0:
        raise ValueError("pin-to-tip section distance must be positive")
    s, c = sin(angle), cos(angle)
    xp = p.SHAFT_X+shaft_dx+radius*cos(radians(alpha))
    zp = p.SHAFT_Z+radius*sin(radians(alpha))
    xc = sum(p.TUNNEL_X)/2
    if xp <= xc:
        raise ValueError("pin must remain behind the guide midpoint for this bound")
    guide_float = b["guide_clearance_total_mm"][1]/2
    z_offset = b["relative_guide_shaft_z_error_mm"]+guide_float
    # An accepted square section can roll inside the guide. Its Y/Z projection
    # cannot exceed this guide-sized box; use it for contact and tip corners.
    cross_span = b["keeper_width_mm"][1]+b["guide_clearance_total_mm"][1]
    corners = 1.5*cross_span*s
    height = s*c*(abs(zp-p.ZK)+z_offset)
    play = b["pin_slot_clearance_total_mm"][1]/2
    base = xp-length
    # xp>xc makes the guide-projection term nonpositive. The retained-length
    # projection is nonnegative. Keeping their intervals separate is conservative.
    lower = base+(xc-xp)*s*s-height-corners-play
    upper = base+length*s*s+height+corners+play
    return lower, upper
