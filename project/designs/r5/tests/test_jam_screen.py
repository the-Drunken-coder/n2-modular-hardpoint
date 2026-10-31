"""Regression checks for the previously inconsistent unseated-tab criterion."""
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "analysis"))
import params as p
import risks


class JamScreenTests(unittest.TestCase):
    def test_original_four_mm_root_fails_declared_allowable(self):
        with patch.object(p, "TAB_ROOT_EXTRA_X", 0.0):
            r = risks.unseated()
        expected = r["stall_force_6V_N"] * (p.ZK - p.ADAPTER["z"][1]) * 6 / (p.TAB_W * (p.TAB_X[1] - p.TAB_X[0]) ** 2)
        self.assertAlmostEqual(r["lower_tab_root_stress_if_adapter_clamped_MPa"], expected, places=6)
        self.assertLess(r["margin_root_vs_allowable_Z"], 1)

    def test_reinforced_root_checks_interior_taper_section(self):
        r = risks.unseated()
        self.assertAlmostEqual(r["root_allowable_across_layers_MPa"], 16.0)
        self.assertGreater(r["root_critical_z_mm"], p.ADAPTER["z"][1])
        self.assertLess(r["root_critical_z_mm"], p.TAB_ROOT_TAPER_TOP_Z)
        self.assertGreater(r["margin_root_vs_allowable_Z"], 1)
        self.assertTrue(r["complete_jam_qualification"].startswith("PENDING"))

    def test_taper_stays_below_hole_and_tunnel(self):
        self.assertGreaterEqual(p.HOLE_TOP_LOADED - p.HOLE_H - p.TAB_ROOT_TAPER_TOP_Z, 0.5)
        self.assertLess(p.TAB_ROOT_TAPER_TOP_Z, p.ZK - (p.KEEPER_W + p.SLIDE) / 2)


if __name__ == "__main__":
    unittest.main()
