"""Lower-hole stress relief must retain the actual floated latching passage."""
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad")]
import build
import params as p
from clearance import overlap


class AdapterReliefTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.body = build.body()
        cls.keeper = build.keeper()
        cls.adapter = build.adapter()
        with patch.object(p, "ADAPTER_LOWER_HOLE_RADIUS", 0.0):
            cls.original = build.adapter()

    def test_outward_relief_retains_original_passage_and_upper_load_plane(self):
        self.assertTrue(self.adapter.val().isValid())
        self.assertEqual(len(self.adapter.solids().vals()), 1)
        # Subtraction only: no part of the old passage can become obstructed.
        self.assertLess(sum(s.Volume() for s in self.adapter.cut(self.original).solids().vals()), 1e-8)
        removed = self.original.cut(self.adapter)
        self.assertGreater(removed.val().Volume(), 2.0)
        self.assertLessEqual(removed.val().BoundingBox().zmax,
                            p.HOLE_TOP_LOADED-p.HOLE_H+p.ADAPTER_LOWER_HOLE_RADIUS+1e-7)
        upper = build.box(*p.TAB_X, p.YK-p.HOLE_W/2, p.YK+p.HOLE_W/2,
                          p.HOLE_TOP_LOADED, p.HOLE_TOP_LOADED+0.01)
        self.assertAlmostEqual(overlap(self.adapter, upper), upper.val().Volume(), places=7)

    def test_inward_radius_blocks_the_valid_upward_side_float_pose(self):
        z0 = p.HOLE_TOP_LOADED-p.HOLE_H
        tool = build.box(p.TAB_X[0]-1, p.TAB_X[1]+1,
                         p.YK-p.HOLE_W/2, p.YK+p.HOLE_W/2, z0, p.HOLE_TOP_LOADED)
        inward_tool = tool.edges("|X and <Z").fillet(p.ADAPTER_LOWER_HOLE_RADIUS)
        clip = build.box(*p.TAB_X, p.YK-p.TAB_W/2, p.YK+p.TAB_W/2,
                         z0, z0+p.ADAPTER_LOWER_HOLE_RADIUS)
        inward = self.original.union(tool.cut(inward_tool).intersect(clip))
        for dy in (-0.3, 0.3):
            shift = (0, dy, 0.5)
            with self.subTest(side_float=dy):
                for adapter in (self.original, self.adapter):
                    posed = adapter.translate(shift)
                    self.assertLess(overlap(posed, self.body), 1e-6)
                    self.assertLess(overlap(posed, self.keeper), 1e-6)
                self.assertGreater(overlap(inward.translate(shift), self.keeper), 0.04)

    def test_nominal_ligaments_exceed_the_direct_inspection_minimum(self):
        nominal = (p.TAB_W-p.HOLE_W)/2-p.ADAPTER_LOWER_HOLE_RADIUS
        self.assertAlmostEqual(nominal, 0.9)
        self.assertGreater(nominal, p.ADAPTER_MIN_HOLE_SIDE_LIGAMENT)
        z0 = p.HOLE_TOP_LOADED-p.HOLE_H
        self.assertGreater(z0-p.ADAPTER_LOWER_HOLE_RADIUS, p.TAB_ROOT_TAPER_TOP_Z)
        for sy in (-1, 1):
            ys = sorted((p.YK+sy*(p.HOLE_W/2+p.ADAPTER_LOWER_HOLE_RADIUS),
                         p.YK+sy*p.TAB_W/2))
            witness = build.box(*p.TAB_X, *ys, z0-0.1, z0+0.1)
            self.assertAlmostEqual(overlap(self.adapter, witness), witness.val().Volume(), places=7)


if __name__ == "__main__":
    unittest.main()
