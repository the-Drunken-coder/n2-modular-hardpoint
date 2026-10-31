"""Bed-oriented R5 solids; assembly STEP/STL coordinates remain unchanged."""
from hashlib import sha256
from math import cos, radians, sin
import struct

import cadquery as cq
from OCP.Bnd import Bnd_Box
from OCP.BRepBndLib import BRepBndLib
import params as p


# Rotation about assembly X, then translation so the bounding-box minimum is 0.
# The keeper's +Y face is on the bed; its X/Z actuator and bending paths lie in layers.
ROTATIONS_X_DEG = {"body": 180.0, "keeper": -90.0, "adapter": 0.0}
BED_FACES = {"body": "+Z wing face", "keeper": "+Y plain side", "adapter": "-Z base"}


def exact_bounds(shape):
    # STL export populates OCC triangulation caches. The default CQ bounds can
    # then differ from the analytical bed plane; never base bed placement on it.
    bounds = Bnd_Box()
    BRepBndLib.AddOptimal_s(shape.val().wrapped, bounds, False, False)
    return cq.BoundBox(bounds)


def stl_bounds(path):
    data = path.read_bytes()
    count = struct.unpack_from("<I", data, 80)[0]
    assert len(data) == 84 + 50 * count, "expected binary STL"
    lo, hi = [float("inf")]*3, [-float("inf")]*3
    for i in range(count):
        vertices = struct.unpack_from("<9f", data, 84 + 50*i + 12)
        for j in range(3):
            for axis in range(3):
                value = vertices[j*3+axis]
                lo[axis], hi[axis] = min(lo[axis], value), max(hi[axis], value)
    return [lo, hi]


def orient(name, shape):
    angle = ROTATIONS_X_DEG[name]
    moved = shape.rotate((0, 0, 0), (1, 0, 0), angle) if angle else shape
    bb = exact_bounds(moved)
    shift = [-bb.xmin, -bb.ymin, -bb.zmin]
    moved = moved.translate(tuple(shift))
    bb = exact_bounds(moved)
    c, s = cos(radians(angle)), sin(radians(angle))
    transform = [[1, 0, 0, shift[0]], [0, c, -s, shift[1]],
                 [0, s, c, shift[2]], [0, 0, 0, 1]]
    meta = dict(bed_face_in_assembly=BED_FACES[name],
                print_axis_in_assembly=p.PRINT_AXES[name],
                transform_assembly_to_print=transform,
                bounds_mm=[[bb.xmin, bb.ymin, bb.zmin], [bb.xmax, bb.ymax, bb.zmax]],
                volume_mm3=moved.val().Volume())
    return moved, meta


def export_print_parts(shapes, out):
    report = {}
    for name, shape in shapes.items():
        moved, meta = orient(name, shape)
        assert moved.val().isValid() and len(moved.solids().vals()) == 1, name
        assert abs(moved.val().Volume() - shape.val().Volume()) < 1e-6, name
        assert abs(exact_bounds(moved).zmin) < 1e-6, name
        path = out / f"{name}_print.stl"
        cq.exporters.export(moved, str(path), tolerance=0.02, angularTolerance=0.1)
        mesh_bounds = stl_bounds(path)
        assert abs(mesh_bounds[0][2]) < 1e-6, (name, "STL bed plane", mesh_bounds)
        meta["stl_bounds_mm"] = mesh_bounds
        meta.update(filename=path.name, sha256=sha256(path.read_bytes()).hexdigest())
        report[name] = meta
    return report
