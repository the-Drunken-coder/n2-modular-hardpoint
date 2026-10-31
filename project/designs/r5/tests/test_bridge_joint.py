"""Finite hardware and assembly regressions for the wider service-load bridge."""
from itertools import product
from math import asin, degrees, pi, sqrt
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad"), str(ROOT / "analysis")]
import build
import params as p
from clearance import loaded_pose, overlap
from guide_motion import (guaranteed_guide_interval, guide_angle, minimum_distance,
                          motion_guide_certificate)
from guided_pose_geometry import rotation_matrix
from pin_joint import rotate_crank


class WideBridgeJointTests(unittest.TestCase):
    def test_tilted_finite_pin_cap_clears_dimensional_extrema(self):
        certificate = motion_guide_certificate(p, p.FIT_BOUNDS)
        interval = guaranteed_guide_interval(90, certificate)
        pivot = sum(interval) / 2
        angle = guide_angle(dict(p.FIT_BOUNDS, guide_length_min_mm=interval[1]-interval[0]))
        keeper = build.keeper()
        worst_old = 0.0
        with patch.object(p, "YOKE_SLOT_TOP_EXTRA", 0.5):
            old_keeper = build.keeper()
        for sign, radius, shaft_x, shaft_z, guide_z in product(
                (-1, 1), p.FIT_BOUNDS["horn_r"], p.FIT_BOUNDS["servo_dx"],
                (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR),
                (-p.FIT_DATUM_ERROR, p.FIT_DATUM_ERROR)):
            pitch = sign*angle
            rotation = rotation_matrix(pitch, 0, 0)
            pin_x = p.SHAFT_X+shaft_x
            pin_z = p.SHAFT_Z+shaft_z+radius
            determinant = rotation[0, 0]*rotation[2, 2]-rotation[0, 2]*rotation[2, 0]
            local_x = ((pin_x-pivot)*rotation[2, 2]
                       -rotation[0, 2]*(pin_z-p.ZK-guide_z))/determinant
            withdrawal = local_x-(p.SHAFT_X-p.CRANK_R-pivot)
            pin = build.ycyl(pin_x, pin_z,
                p.SPLINE_TOP_Y+p.CRANK_PIN["horn_spacer_l"],
                p.SPLINE_TOP_Y+p.CRANK_PIN["sleeve_l"], p.PIN_D)
            current = loaded_pose(keeper, withdrawal, degrees(pitch), 0,
                                  dz=guide_z, pivot_x=pivot)
            old = loaded_pose(old_keeper, withdrawal, degrees(pitch), 0,
                              dz=guide_z, pivot_x=pivot)
            self.assertLess(overlap(pin, current), 1e-6)
            worst_old = max(worst_old, overlap(pin, old))
        self.assertGreater(worst_old, 0.2)

    def test_wide_bridge_has_finite_washer_clearance_under_roll(self):
        width = p.FIT_KEEPER_SECTION[0]
        roll = degrees(asin((width+p.FIT_SLIDE_TOTAL[1])/(sqrt(2)*width))-pi/4)
        moved = loaded_pose(build.keeper(), p.keeper_x(90), 0, 0, roll=-roll)
        allowance = p.FIT_DATUM_ERROR + 2*p.FIT_SURFACE_ERROR
        current = rotate_crank(build.crank_washer(), 90)
        self.assertGreaterEqual(minimum_distance(moved, current)-allowance, p.MOTION_CLEARANCE)
        with patch.dict(p.CRANK_PIN, sleeve_l=12.0):
            old_washer = rotate_crank(build.crank_washer(), 90)
        self.assertLess(minimum_distance(moved, old_washer)-allowance, p.MOTION_CLEARANCE)

    def test_rear_boss_preserves_the_wide_bridge_insertion_allowance(self):
        keeper = build.keeper()
        xs = p.SHAFT_X-p.CRANK_R
        cap_mid = xs + (p.YOKE_RIGHT_WALL-p.YOKE_LEFT_WALL)/2
        bx, by = p.BOSSES[-1]
        moved = keeper.translate((bx-cap_mid, 0, 0))
        boss = build.zcyl(bx, by, p.BODY["z"]-p.PILOT_DEPTH-1.5, p.BODY["z"], p.BOSS_D)
        allowance = p.FIT_DATUM_ERROR + 2*p.FIT_SURFACE_ERROR
        self.assertGreaterEqual(minimum_distance(moved, boss)-allowance, p.MOTION_CLEARANCE-1e-8)
        old_boss = boss.translate((0, 47.5-by, 0))
        self.assertGreater(overlap(moved, old_boss), 1.0)


if __name__ == "__main__":
    unittest.main()
