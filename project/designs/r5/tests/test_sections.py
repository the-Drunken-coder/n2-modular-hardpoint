from pathlib import Path
from types import SimpleNamespace
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "analysis"))
from sections import keeper_section


class KeeperSectionTests(unittest.TestCase):
    def dimensions(self, **changes):
        values = dict(KEEPER_W=5.0, YK=40.0, ZK=8.0, SHAFT_Z=7.0,
                      TIP_LATCHED_X=6.5, SCREW_CLEAR=0.5, SPLINE_TOP_Y=37.0,
                      HORN_SCREW=dict(head_h=1.4, head_d=3.8))
        values.update(changes)
        return SimpleNamespace(**values)

    def test_full_square_at_mouth_when_groove_starts_at_rear(self):
        section = keeper_section(self.dimensions(HORN_GROOVE_START_X=25.0), 12.4)
        self.assertAlmostEqual(section["area_mm2"], 25)
        self.assertAlmostEqual(section["section_modulus_y_mm3"], 5**3/6)

    def test_disabled_groove_keeps_the_full_guide_section(self):
        section = keeper_section(self.dimensions(HORN_GROOVE_ENABLED=False,
                                                 HORN_GROOVE_Z_CLEAR=2.2), 27.4)
        self.assertAlmostEqual(section["area_mm2"], 25)
        self.assertAlmostEqual(section["section_modulus_y_mm3"], 5**3/6)
        self.assertAlmostEqual(section["top_bearing_width_mm"], 5)
        self.assertAlmostEqual(section["bottom_bearing_width_mm"], 5)

    def test_original_continuous_groove_is_not_a_full_square(self):
        section = keeper_section(self.dimensions(), 12.4)
        self.assertAlmostEqual(section["area_mm2"], 19.54)
        self.assertLess(section["section_modulus_y_mm3"], 5**3/6)
        self.assertAlmostEqual(section["bottom_bearing_width_mm"], 3.6)

    def test_through_height_groove_matches_remaining_rectangle(self):
        section = keeper_section(self.dimensions(HORN_GROOVE_Z_CLEAR=1.7), 27.4)
        self.assertAlmostEqual(section["area_mm2"], 3.6*5)
        self.assertAlmostEqual(section["section_modulus_y_mm3"], 3.6*5**2/6)
        self.assertAlmostEqual(section["top_bearing_width_mm"], 3.6)


if __name__ == "__main__":
    unittest.main()
