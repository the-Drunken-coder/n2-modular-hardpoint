"""Regressions for physical assembly states omitted by the original R5 checks."""
import sys
import unittest
from unittest.mock import patch
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad")]
import build
import viewer
import params as p
from clearance import check_loaded_clearance, loaded_pose


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
        old_wall = build.box(30.6, 31.6, *p.SERVO_GLAND["y"], 4.5, 9.5)
        self.assertAlmostEqual(overlap(build.cable_gland(), old_wall), 20.0, places=6)
        self.assertGreater(overlap(self.body.union(old_wall), viewer.servo_case()), 19.99)


class LoadedFitTests(unittest.TestCase):
    def test_inspected_loaded_pose_envelope(self):
        r = check_loaded_clearance(build.body(), build.keeper())
        self.assertGreaterEqual(r["roof_clearance_after_surface_errors_mm"], 0.5)

    def test_original_roof_height_interferes_before_release(self):
        # Review reproduction: old 16.7 mm ceiling vs rigid loaded guide pose.
        old_roof = build.box(28.5, 47.5, 34, 45, 16.7, 18)
        with patch.object(p, "CRANK_R_MAX", 6.0):
            original_height_keeper = build.keeper()
        pose = loaded_pose(original_height_keeper, 5.0, 1.4265484919014684, 0)
        self.assertGreater(overlap(pose, old_roof), 0.02)


if __name__ == "__main__":
    unittest.main()
