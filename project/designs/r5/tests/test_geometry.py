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
from pin_joint import check_pin_joint


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

    def test_host_opening_preserves_the_complete_cable_route(self):
        connector = p.CABLE_CONNECTOR
        route = build.box(*connector["x"], *connector["y"],
                          p.BODY["z"] - 1, p.BODY["z"] + viewer.WING_T + 1)
        host = viewer.wing()
        self.assertTrue(host.val().isValid())
        self.assertLess(overlap(host, route), 1e-6)

    def test_regression_rejects_the_original_gland_wall(self):
        x0 = p.SHAFT_X - p.SHAFT_FROM_END
        old_wall = build.box(x0 - 1.5, x0 - 0.5, *p.SERVO_GLAND["y"], *p.SERVO_GLAND["z"])
        self.assertAlmostEqual(overlap(build.cable_gland(), old_wall), 20.0, places=6)
        self.assertGreater(overlap(self.body.union(old_wall), viewer.servo_case()), 19.99)


class LoadedFitTests(unittest.TestCase):
    def test_full_square_section_spans_the_entire_guide(self):
        h = p.KEEPER_W / 2
        required = build.box(*p.TUNNEL_X, p.YK-h, p.YK+h, p.ZK-h, p.ZK+h)
        expected = (p.TUNNEL_X[1]-p.TUNNEL_X[0]) * p.KEEPER_W**2
        for dx in (-p.FIT_AXIAL_ENVELOPE, p.FIT_AXIAL_ENVELOPE):
            self.assertAlmostEqual(overlap(required, build.keeper().translate((dx,0,0))), expected, places=6)

    def test_inspected_loaded_pose_envelope(self):
        r = check_loaded_clearance(build.body(), build.keeper())
        self.assertGreaterEqual(r["roof_clearance_after_surface_errors_mm"], 0.5)

    def test_original_roof_height_interferes_before_release(self):
        # Review reproduction: old 16.7 mm ceiling vs rigid loaded guide pose.
        old_roof = build.box(28.5, 47.5, 34, 45, 16.7, 18)
        with patch.object(p, "CRANK_R_MAX", 6.0), patch.object(p, "PIN_SLOT", 2.4), \
                patch.object(p, "SHAFT_X", 38.0), patch.object(p, "SHAFT_Z", 7.0), \
                patch.object(p, "CRANK_R", 5.0), patch.object(p, "YOKE_LEFT_WALL", 2.0), patch.object(p, "YOKE_RIGHT_WALL", 2.0), \
                patch.object(p, "YOKE_TOP_WALL", 1.5):
            original_height_keeper = build.keeper()
        pose = loaded_pose(original_height_keeper, 5.0, 1.4265484919014684, 0)
        self.assertGreater(overlap(pose, old_roof), 0.02)


class MountBossTests(unittest.TestCase):
    @staticmethod
    def missing_annulus(body, bx, by):
        z0, z1 = p.BODY["z"] - p.PILOT_DEPTH, p.BODY["z"]
        annulus = build.zcyl(bx, by, z0, z1, p.BOSS_D).cut(
            build.zcyl(bx, by, z0-1, z1+1, p.PILOT_M3))
        return sum(s.Volume() for s in annulus.cut(body).solids().vals())

    def test_full_mount_annuli_survive_all_pocket_cuts(self):
        body = build.body()
        for boss in p.BOSSES:
            with self.subTest(boss=boss):
                self.assertLess(self.missing_annulus(body, *boss), 1e-6)
        self.assertLess(overlap(body, build.servo_envelope()), 1e-6)

    def test_original_boss_positions_lose_reserved_material(self):
        old_positions = [(4.,4.), (60.,4.), (4.,46.5), (60.,46.5)]
        with patch.dict(p.BODY, x=64.0, y=50.0), patch.object(p, "BOSSES", old_positions):
            old_body = build.body()
            self.assertGreater(self.missing_annulus(old_body, 60., 4.), 15.2)
            self.assertGreater(self.missing_annulus(old_body, 4., 46.5), 2.8)


class CrankJointTests(unittest.TestCase):
    def test_clamped_joint_and_ordered_assembly_path(self):
        r = check_pin_joint(build.body(), build.keeper())
        self.assertGreaterEqual(r["thread_beyond_locknut_mm"], 0.8)
        self.assertLessEqual(r["body_plus_crank_fastener_width_mm"], 54)

    def test_rear_horn_head_is_flush_and_clear_of_servo(self):
        self.assertLess(overlap(build.crank_screw(), viewer.horn()), 1e-6)
        self.assertLess(overlap(build.crank_screw(), viewer.servo_case()), 1e-6)

    def test_too_short_bolt_is_rejected(self):
        with patch.dict(p.CRANK_PIN, screw_l=12):
            with self.assertRaisesRegex(AssertionError, "thread pitches"):
                check_pin_joint(build.body(), build.keeper())


if __name__ == "__main__":
    unittest.main()
