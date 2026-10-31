"""Geometric contracts for the finite-radius receiver guide corner remedy."""
from math import pi
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad")]
import build
import params as p


def volume(shape):
    return sum(s.Volume() for s in shape.solids().vals())


class GuideReliefTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.body = build.body()

    def test_single_valid_body_and_full_depth_mount_annuli(self):
        self.assertTrue(self.body.val().isValid())
        self.assertEqual(len(self.body.solids().vals()), 1)
        for bx, by in p.BOSSES:
            with self.subTest(boss=(bx, by)):
                z0, z1 = p.BODY["z"] - p.PILOT_DEPTH, p.BODY["z"]
                annulus = build.zcyl(bx, by, z0, z1, p.BOSS_D).cut(
                    build.zcyl(bx, by, z0 - 1, z1 + 1, p.PILOT_M3))
                self.assertLess(volume(annulus.cut(self.body)), 1e-6)

    def test_all_original_guide_planes_keep_full_length_flats(self):
        h = (p.KEEPER_W + p.SLIDE) / 2
        expected_width = 2 * (h - p.GUIDE_RELIEF_INTRUSION)
        expected_length = p.TUNNEL_X[1] - p.TUNNEL_X[0]
        for axis, center in (("y", p.YK), ("z", p.ZK)):
            for sign in (-1, 1):
                plane = center + sign * h
                matches = []
                for face in self.body.val().Faces():
                    bb = face.BoundingBox()
                    if face.geomType() == "PLANE" and abs(getattr(bb, axis + "min") - plane) < 1e-7 \
                            and abs(getattr(bb, axis + "max") - plane) < 1e-7 \
                            and abs(bb.xmin - p.TUNNEL_X[0]) < 1e-7 \
                            and abs(bb.xmax - p.TUNNEL_X[1]) < 1e-7:
                        matches.append(face)
                with self.subTest(axis=axis, sign=sign):
                    self.assertEqual(len(matches), 1)
                    self.assertAlmostEqual(matches[0].Area(), expected_length * expected_width, places=6)
                    self.assertAlmostEqual(expected_width, 5.20, places=6)

    def test_no_undercut_fin_under_the_remaining_bearing_flats(self):
        # Solid slabs behind every nominal flat must remain solid. A circle-only
        # narrow-mouth cut leaves voids under these slabs and fails this test.
        h = (p.KEEPER_W + p.SLIDE) / 2
        inner = h - p.GUIDE_RELIEF_INTRUSION
        depth = p.GUIDE_RELIEF_RADIUS
        for sign in (-1, 1):
            wall_z = p.ZK + sign * h
            zs = sorted((wall_z, wall_z + sign * depth))
            horizontal = build.box(*p.TUNNEL_X, p.YK - inner, p.YK + inner, *zs)
            wall_y = p.YK + sign * h
            ys = sorted((wall_y, wall_y + sign * depth))
            vertical = build.box(*p.TUNNEL_X, *ys, p.ZK - inner, p.ZK + inner)
            with self.subTest(sign=sign):
                self.assertLess(volume(horizontal.cut(self.body)), 1e-6)
                self.assertLess(volume(vertical.cut(self.body)), 1e-6)

    def test_exact_neck_arc_tangency_and_removed_old_corner(self):
        r = p.GUIDE_RELIEF_RADIUS
        self.assertGreaterEqual(r, p.FIT_GUIDE_RELIEF_RADIUS_MIN)
        h = (p.KEEPER_W + p.SLIDE) / 2
        for sy in (-1, 1):
            for sz in (-1, 1):
                cutter = build.guide_corner_relief(sy, sz)
                edges = cutter.val().Edges()
                arcs = [edge for edge in edges if edge.geomType() == "CIRCLE"]
                self.assertEqual(len(arcs), 2)  # one at each open end
                for arc in arcs:
                    self.assertAlmostEqual(arc.Length(), 1.5 * pi * r, places=7)
                    for u in (0.0, 1.0):
                        point = arc.positionAt(u)
                        tangent = arc.tangentAt(u)
                        adjacent = [e for e in edges if e.geomType() == "LINE"
                                    and abs(e.Length() - r) < 1e-7
                                    and any((v.Center() - point).Length < 1e-7 for v in e.Vertices())]
                        self.assertEqual(len(adjacent), 1)
                        self.assertAlmostEqual(abs(tangent.dot(adjacent[0].tangentAt())), 1.0, places=7)
                # Material immediately outside both old flat planes must now be
                # void, so the old sharp concave longitudinal corner is gone.
                ys = sorted((p.YK + sy * (h + 0.01), p.YK + sy * (h + 0.02)))
                zs = sorted((p.ZK + sz * (h + 0.01), p.ZK + sz * (h + 0.02)))
                probe = build.box(*p.TUNNEL_X, *ys, *zs)
                self.assertLess(volume(self.body.intersect(probe)), 1e-8)


if __name__ == "__main__":
    unittest.main()
