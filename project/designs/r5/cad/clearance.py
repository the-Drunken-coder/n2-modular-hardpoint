"""Rigid loaded-pose checks against the measured R5 acceptance envelope.

Guide contact is intentional. Its relief-profile reservation is removed from
the collision obstacle; all other receiver material, horn and retaining-screw
clearances remain checked. This is a geometry bound, not a contact/torque solve.
"""
from math import cos, degrees, radians, tan

import params as p
from build import box


def guide_angle(clearance=p.FIT_SLIDE_TOTAL[1]):
    # A pitched square section within the inspected guide: L tan(a) + w/cos(a).
    lo, hi = 0.0, radians(10)
    for _ in range(60):
        a = (lo + hi) / 2
        if p.FIT_GUIDE_LENGTH_MIN * tan(a) + p.FIT_KEEPER_SECTION[0] / cos(a) > p.FIT_KEEPER_SECTION[0] + clearance:
            hi = a
        else:
            lo = a
    return degrees((lo + hi) / 2)


def loaded_pose(shape, withdrawal, pitch, yaw, dy=0.0, dz=0.0, roll=0.0, pivot_x=None):
    xc = sum(p.TUNNEL_X) / 2 if pivot_x is None else pivot_x
    pivot = (xc, p.YK, p.ZK)
    return (shape.translate((withdrawal, 0, 0))
            .rotate(pivot, (xc + 1, p.YK, p.ZK), roll)
            .rotate(pivot, (xc, p.YK + 1, p.ZK), -pitch)
            .rotate(pivot, (xc, p.YK, p.ZK + 1), yaw)
            .translate((0, dy, dz)))


def bearing_reservation():
    # Only the original guide-contact axial interval is excluded. Include the
    # complete inspected outward-relief profile, not just its square throat.
    # The conservative common retained span admits extra poses that would also
    # contact an earlier guide flat. Those are contact-model questions, not
    # collisions with the separate yoke roof, tip pocket, horn or washer.
    half = (p.FIT_KEEPER_SECTION[1] + p.FIT_SLIDE_TOTAL[1]) / 2 \
        + p.FIT_GUIDE_RELIEF_EXTENT_MAX + p.FIT_DATUM_ERROR + 0.02
    return box(p.TUNNEL_X[0] - 0.15, p.TUNNEL_X[1] + 0.15,
               p.YK - half, p.YK + half, p.ZK - half, p.ZK + half)


def overlap(a, b):
    return sum(s.Volume() for s in a.intersect(b).solids().vals())


def check_loaded_clearance(body, keeper):
    # Kept as the public build/test entry point. The new gate includes partial
    # withdrawal, coupled roll, guide float and datum errors in one report.
    from guide_motion import check_guided_motion
    return check_guided_motion(body, keeper)
