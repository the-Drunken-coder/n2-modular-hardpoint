"""Regressions for clearance lost when the leading section leaves the guide."""
from pathlib import Path
from contextlib import contextmanager
import sys
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad"), str(ROOT / "analysis")]
import build
import params as p
from clearance import loaded_pose
from fit_envelope import motion_guide_certificate
from guide_motion import minimum_distance
from pin_joint import rotate_crank


@contextmanager
def earlier_short_guide():
    """Restore the geometry on which the historical clearance failures occurred."""
    with patch.object(p, "SHAFT_X", 40.4), patch.object(p, "TUNNEL_X", (12.4, 28.4)), \
            patch.object(p, "FIT_GUIDE_LENGTH_MIN", 15.8), \
            patch.object(p, "YOKE_BRIDGE_EXTRA_Y", 0.0), \
            patch.object(p, "YOKE_SLOT_TOP_EXTRA", 0.5), \
            patch.object(p, "YOKE_SLOT_FILLET", 0.8), \
            patch.dict(p.FIT_BOUNDS, guide_length_min_mm=15.8,
                       guide_interval_x_mm=(12.5, 28.3), remaining_guide_length_min_mm=11.5):
        yield


class WithdrawnGuideTests(unittest.TestCase):
    @staticmethod
    def adverse_pose(keeper, yaw=0.0, pitch=0.0, dy=0.0, dz=0.0):
        certificate = motion_guide_certificate(p, p.FIT_BOUNDS)
        angle = certificate["continuous_pitch_yaw_abs_bound_deg"]
        return loaded_pose(keeper, p.keeper_x(40, p.CRANK_R_MAX) + p.FIT_AXIAL_ENVELOPE,
                           pitch * angle, yaw * angle, dy, dz,
                           pivot_x=sum(certificate["common_retained_guide_interval_x_mm"]) / 2)

    def test_old_shaft_height_loses_the_withdrawn_roof_gap(self):
        current = self.adverse_pose(build.keeper(), pitch=1, dz=p.FIT_DATUM_ERROR)
        gap = p.BODY["z"] - p.YOKE_ROOF_T - current.val().BoundingBox().zmax - 2 * p.FIT_SURFACE_ERROR
        self.assertGreaterEqual(gap, p.MOTION_CLEARANCE)
        with patch.object(p, "SHAFT_Z", 6.5):
            old_keeper = build.keeper()
        old = self.adverse_pose(old_keeper, pitch=1, dz=p.FIT_DATUM_ERROR)
        old_gap = p.BODY["z"] - p.YOKE_ROOF_T - old.val().BoundingBox().zmax - 2 * p.FIT_SURFACE_ERROR
        self.assertLess(old_gap, p.MOTION_CLEARANCE)

    def test_old_spline_plane_loses_the_head_gap(self):
        with earlier_short_guide():
            moved = self.adverse_pose(build.keeper(), yaw=-1, dy=-p.FIT_DATUM_ERROR)
            allowance = 2 * p.FIT_SURFACE_ERROR + p.FIT_DATUM_ERROR
            self.assertGreaterEqual(minimum_distance(moved, build.horn_screw()) - allowance, p.MOTION_CLEARANCE)
            with patch.object(p, "SPLINE_TOP_Y", 34.6):
                old_head = build.horn_screw()
            self.assertLess(minimum_distance(moved, old_head) - allowance, p.MOTION_CLEARANCE)

    def test_old_sleeve_stack_loses_the_washer_gap(self):
        with earlier_short_guide():
            moved = self.adverse_pose(build.keeper(), yaw=1, dy=p.FIT_DATUM_ERROR)
            allowance = 2 * p.FIT_SURFACE_ERROR + p.FIT_DATUM_ERROR
            current = rotate_crank(build.crank_washer(), 40)
            self.assertGreaterEqual(minimum_distance(moved, current) - allowance, p.MOTION_CLEARANCE)
            with patch.object(p, "SPLINE_TOP_Y", 34.6), patch.dict(p.CRANK_PIN, sleeve_l=10, screw_l=16):
                old_washer = rotate_crank(build.crank_washer(), 40)
            self.assertLess(minimum_distance(moved, old_washer) - allowance, p.MOTION_CLEARANCE)


if __name__ == "__main__":
    unittest.main()
