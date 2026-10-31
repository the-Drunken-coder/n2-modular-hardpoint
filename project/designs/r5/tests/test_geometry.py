"""Regressions for physical assembly states omitted by the original R5 checks."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad")]
import build
import viewer


def overlap(a, b):
    return sum(s.Volume() for s in a.intersect(b).solids().vals())


class CableFitTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.body = build.body()

    def test_complete_viewer_servo_fits(self):
        self.assertLess(overlap(self.body, viewer.servo_case()), 1e-6)

    def test_connector_has_continuous_insertion_and_exit_path(self):
        self.assertLess(overlap(self.body, build.cable_connector_sweep()), 1e-6)

    def test_regression_rejects_the_original_gland_wall(self):
        old_wall = build.box(30.6, 31.6, 4.0, 8.0, 4.5, 9.5)
        self.assertAlmostEqual(overlap(build.cable_gland(), old_wall), 20.0, places=6)
        self.assertGreater(overlap(self.body.union(old_wall), viewer.servo_case()), 19.99)


if __name__ == "__main__":
    unittest.main()
