"""Nominal contact width must not replace the inspected minimum bearing flat."""
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5/"analysis")]
import risks


class BearingWidthTests(unittest.TestCase):
    def test_hand_bearing_uses_the_smaller_inspected_flat(self):
        with patch.object(risks.p, "HORN_GROOVE_ENABLED", False, create=True), \
                patch.object(risks.p, "FIT_GUIDE_FLAT_MIN", 4.8, create=True):
            result = risks.hand_stresses()
        self.assertEqual(result["inspected_front_contact_width_mm"], 4.8)
        self.assertEqual(result["inspected_rear_contact_width_mm"], 4.8)
        expected = risks.p.P_PROOF*(1+risks.p.REACTION_RATIO)/(4.8*risks.p.GUIDE_PATCH_LENGTH)
        self.assertAlmostEqual(result["tunnel_mouth_bearing_MPa"], expected)


if __name__ == "__main__":
    unittest.main()
