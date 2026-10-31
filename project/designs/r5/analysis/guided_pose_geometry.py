"""Geometric section probes independent of the analytic endpoint enclosure.

The cavity is intentionally larger than the circle-and-neck CAD: a rectangle
plus four rectangular corner pockets. Rejecting a section here rejects it in
the real guide; accepting sampled sections is not a continuous-motion proof.
The CAD gate can use this necessary condition to discard impossible poses while
retaining a conservative superset. Do not interpret passing samples as measured
clearance, manufacturing capability or reliability.
"""
from math import cos, sin

import numpy as np


def rotation_matrix(pitch, yaw, roll):
    cp, sp, cy, sy, cr, sr = cos(pitch), sin(pitch), cos(yaw), sin(yaw), cos(roll), sin(roll)
    rx = np.array(((1, 0, 0), (0, cr, -sr), (0, sr, cr)))
    ry = np.array(((cp, 0, -sp), (0, 1, 0), (sp, 0, cp)))
    rz = np.array(((cy, -sy, 0), (sy, cy, 0), (0, 0, 1)))
    return rz @ ry @ rx


def section_polygon(widths, rotation, center_yz, x):
    """Intersect four rotated longitudinal bar edges with a world-X plane."""
    center = np.array((0, *center_yz))
    points = []
    for ysign, zsign in ((-1, -1), (1, -1), (1, 1), (-1, 1)):
        corner = center + rotation @ np.array((0, ysign*widths[0]/2, zsign*widths[1]/2))
        front, back = corner-100*rotation[:, 0], corner+100*rotation[:, 0]
        fraction = (x-front[0])/(back[0]-front[0])
        point = front+fraction*(back-front)
        points.append((float(point[1]), float(point[2])))
    return points


def clip_axis(polygon, axis, value, greater):
    out = []
    if not polygon:
        return out
    def inside(point):
        return point[axis] >= value if greater else point[axis] <= value
    previous = polygon[-1]
    for current in polygon:
        before, after = inside(previous), inside(current)
        if before != after:
            fraction = (value-previous[axis])/(current[axis]-previous[axis])
            out.append(tuple(a+fraction*(b-a) for a, b in zip(previous, current)))
        if after:
            out.append(current)
        previous = current
    return out


def clipped_area(polygon, rectangle):
    lo_y, hi_y, lo_z, hi_z = rectangle
    for axis, value, greater in ((0, lo_y, True), (0, hi_y, False),
                                  (1, lo_z, True), (1, hi_z, False)):
        polygon = clip_axis(polygon, axis, value, greater)
    if not polygon:
        return 0.0
    return abs(sum(a[0]*b[1]-b[0]*a[1]
                   for a, b in zip(polygon, polygon[1:]+polygon[:1])))/2


def section_fits_relief_superset(polygon, aperture, intrusion, extent):
    hy, hz = aperture[0]/2, aperture[1]/2
    ey, ez = hy+extent, hz+extent
    if any(abs(y) > ey+1e-10 or abs(z) > ez+1e-10 for y, z in polygon):
        return False
    # Every part outside a flat guide plane must remain in a corner mouth.
    forbidden = ((hy, ey, -hz+intrusion, hz-intrusion),
                 (-ey, -hy, -hz+intrusion, hz-intrusion),
                 (-hy+intrusion, hy-intrusion, hz, ez),
                 (-hy+intrusion, hy-intrusion, -ez, -hz))
    return all(clipped_area(polygon, rectangle) <= 1e-10 for rectangle in forbidden)


def section_samples_fit_relief_superset(widths, aperture, angles, center_yz=(0, 0),
                                        length=15.8, intrusion=0.2, extent=1.2):
    rotation = rotation_matrix(*angles)
    return all(section_fits_relief_superset(
        section_polygon(widths, rotation, center_yz, x), aperture, intrusion, extent)
        for x in (-length/2, -length/4, 0, length/4, length/2))
