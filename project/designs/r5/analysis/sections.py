"""Nominal keeper beam-section properties, including an enabled screw-head groove."""


def keeper_section(dimensions, x):
    p = dimensions
    half = p.KEEPER_W / 2
    ymin, ymax = p.YK - half, p.YK + half
    zmin, zmax = p.ZK - half, p.ZK + half
    start = getattr(p, "HORN_GROOVE_START_X", p.TIP_LATCHED_X - 1)
    yclear = getattr(p, "HORN_GROOVE_Y_CLEAR", p.SCREW_CLEAR)
    zclear = getattr(p, "HORN_GROOVE_Z_CLEAR", p.SCREW_CLEAR)
    grooved = getattr(p, "HORN_GROOVE_ENABLED", True) and x >= start
    cut_y = min(ymax, max(ymin, p.SPLINE_TOP_Y + p.HORN_SCREW["head_h"] + yclear)) if grooved else ymin
    gz = p.HORN_SCREW["head_d"] / 2 + zclear
    cut_lo, cut_hi = max(zmin, p.SHAFT_Z - gz), min(zmax, p.SHAFT_Z + gz)
    if cut_hi <= cut_lo or cut_y == ymin:
        rectangles = [(ymin, ymax, zmin, zmax)]
    else:
        rectangles = [(cut_y, ymax, zmin, zmax), (ymin, cut_y, zmin, cut_lo), (ymin, cut_y, cut_hi, zmax)]
    rectangles = [r for r in rectangles if r[1] > r[0] and r[3] > r[2]]
    areas = [(y1-y0) * (z1-z0) for y0, y1, z0, z1 in rectangles]
    area = sum(areas)
    if area <= 0:
        raise ValueError("keeper groove removes the load-bearing section")
    cy = sum(a * (r[0]+r[1])/2 for a, r in zip(areas, rectangles)) / area
    cz = sum(a * (r[2]+r[3])/2 for a, r in zip(areas, rectangles)) / area
    iy = iz = iyz = 0.0
    vertices = []
    for a, (y0, y1, z0, z1) in zip(areas, rectangles):
        dy, dz = (y0+y1)/2-cy, (z0+z1)/2-cz
        iy += (y1-y0) * (z1-z0)**3/12 + a*dz*dz
        iz += (z1-z0) * (y1-y0)**3/12 + a*dy*dy
        iyz += a*dy*dz
        vertices += [(y-cy, z-cz) for y in (y0, y1) for z in (z0, z1)]
    determinant = iy*iz - iyz*iyz
    if determinant <= 0:
        raise ValueError("keeper has a degenerate beam section")
    # Unsymmetric bending about Y: include product of inertia for an L-shaped
    # groove, rather than assuming its neutral axis remains horizontal.
    per_moment = max(abs((iz*z - iyz*y) / determinant) for y, z in vertices)
    min_width = ymax-cut_y if cut_hi > cut_lo else ymax-ymin
    if min_width <= 0:
        raise ValueError("groove splits the keeper section")
    top_width = ymax-cut_y if cut_hi >= zmax and cut_lo < zmax else ymax-ymin
    bottom_width = ymax-cut_y if cut_lo <= zmin and cut_hi > zmin else ymax-ymin
    return dict(area_mm2=area, section_modulus_y_mm3=1/per_moment,
                conservative_shear_area_mm2=min_width*(zmax-zmin),
                top_bearing_width_mm=top_width, bottom_bearing_width_mm=bottom_width)
