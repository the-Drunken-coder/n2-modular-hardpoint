"""Rigid loaded-pose checks against the measured R5 acceptance envelope.

Guide contact is intentional. Its small tolerance reservation is removed from
the collision obstacle; all other receiver material, horn and retaining-screw
clearances remain checked. This is a geometry bound, not a contact/torque solve.
"""
from itertools import product
from math import cos, degrees, radians, tan

import params as p
from build import box, ycyl


def guide_angle(clearance=p.FIT_SLIDE_TOTAL[1]):
    # A pitched square section within the inspected guide: L tan(a) + w/cos(a).
    lo, hi = 0.0, radians(10)
    for _ in range(60):
        a = (lo + hi) / 2
        if p.FIT_GUIDE_LENGTH_MIN * tan(a) + p.KEEPER_W / cos(a) > p.KEEPER_W + clearance:
            hi = a
        else:
            lo = a
    return degrees((lo + hi) / 2)


def loaded_pose(shape, withdrawal, pitch, yaw, dy=0.0, dz=0.0):
    xc = sum(p.TUNNEL_X) / 2
    pivot = (xc, p.YK, p.ZK)
    return (shape.translate((withdrawal, 0, 0))
            .rotate(pivot, (xc, p.YK + 1, p.ZK), -pitch)
            .rotate(pivot, (xc, p.YK, p.ZK + 1), yaw)
            .translate((0, dy, dz)))


def bearing_reservation():
    # Includes only the guide where the real surfaces carry load. Do not mask
    # the yoke roof, tip pocket, actuator, or unrelated receiver material.
    half = (p.KEEPER_W + p.FIT_SLIDE_TOTAL[1]) / 2 + p.FIT_DATUM_ERROR + 0.02
    return box(p.TUNNEL_X[0] - 0.15, p.TUNNEL_X[1] + 0.15,
               p.YK - half, p.YK + half, p.ZK - half, p.ZK + half)


def overlap(a, b):
    return sum(s.Volume() for s in a.intersect(b).solids().vals())


def check_loaded_clearance(body, keeper):
    obstacles = body.cut(bearing_reservation())
    angle = guide_angle()
    # Position at maximum tilt has taken up the sliding play; adding the full
    # free-play translation again would double count it. Datum error remains.
    angles = (180, 160, 140, 120, 100, 90, 80, 60, 50, 40)
    hs = p.HORN_SCREW
    extra = p.MOTION_CLEARANCE + 2 * p.FIT_SURFACE_ERROR
    screw = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y,
                  p.SPLINE_TOP_Y + hs["head_h"] + extra,
                  hs["head_d"] + 2 * extra)
    # Whole horn disk is conservative over its real rotating silhouette.
    horn = ycyl(p.SHAFT_X, p.SHAFT_Z, p.SPLINE_TOP_Y - 2.5,
                p.SPLINE_TOP_Y + extra, 2 * p.HORN_REACH)
    clearance_min = float("inf")
    poses = 0
    for alpha in angles:
        # The inspected horn radius is 5.0 +/-0.1 mm; the calibrated release
        # endpoint is 40..50 deg. Include both ends and the full nominal path.
        withdrawal = p.keeper_x(alpha, p.CRANK_R_MAX)
        tilted = list(product((-angle, angle), (-angle, angle),
                              (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR),
                              (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR)))
        free = p.FIT_SLIDE_TOTAL[1] / 2 + p.FIT_DATUM_ERROR
        floating = [(0, 0, dy, dz) for dy, dz in product((-free, free), repeat=2)]
        for pitch, yaw, dy, dz in tilted + floating:
            moved = loaded_pose(keeper, withdrawal, pitch, yaw, dy, dz)
            assert overlap(moved, obstacles) < 1e-6, ("loaded receiver contact", alpha, pitch, yaw, dy, dz)
            assert overlap(moved, screw) < 1e-6, ("loaded screw clearance", alpha, pitch, yaw, dy, dz)
            assert overlap(moved, horn) < 1e-6, ("loaded horn clearance", alpha, pitch, yaw, dy, dz)
            clearance_min = min(clearance_min,
                                p.BODY["z"] - p.YOKE_ROOF_T - moved.val().BoundingBox().zmax
                                - 2 * p.FIT_SURFACE_ERROR)
            poses += 1
    assert clearance_min >= p.MOTION_CLEARANCE, ("loaded roof clearance", clearance_min)
    return dict(poses=poses, inspected_guide_clearance_total_mm=list(p.FIT_SLIDE_TOTAL),
                inspected_guide_length_min_mm=p.FIT_GUIDE_LENGTH_MIN,
                pitch_yaw_bound_deg=angle, roof_clearance_after_surface_errors_mm=clearance_min,
                required_noncontact_clearance_mm=p.MOTION_CLEARANCE,
                physical_loaded_release="PENDING: verify full path on printed assemblies")
