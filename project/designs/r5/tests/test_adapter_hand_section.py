"""The relieved adapter hand screen uses inspected dimensions, not nominal area."""
from numbers import Real
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5/"analysis")]
import risks


class AdapterHandSectionTests(unittest.TestCase):
    def test_lower_relief_uses_the_accepted_6_24_square_mm_section(self):
        result = risks.hand_stresses()
        self.assertAlmostEqual(result["adapter_side_ligament_min_mm"], 0.8)
        self.assertAlmostEqual(result["adapter_tab_thickness_min_mm"], 3.9)
        self.assertAlmostEqual(result["adapter_net_width_min_mm"], 1.6)
        self.assertAlmostEqual(result["adapter_net_area_min_mm2"], 6.24)
        self.assertAlmostEqual(result["adapter_nominal_side_ligament_mm"], 0.9)
        self.assertAlmostEqual(result["adapter_nominal_net_area_mm2"], 7.2)
        self.assertAlmostEqual(result["tab_ligament_tension_MPa"], risks.p.P_PROOF/6.24)
        self.assertAlmostEqual(result["margin_ligament_across_layers"],
                               risks.p.ALLOW_Z*6.24/risks.p.P_PROOF)
        # The former 10.4 mm² unrelieved section understated proof stress.
        self.assertGreater(result["tab_ligament_tension_MPa"], risks.p.P_PROOF/10.4)

    def test_inspected_limits_drive_the_screen_independently_of_nominal_width(self):
        with patch.object(risks.p, "ADAPTER_MIN_HOLE_SIDE_LIGAMENT", 0.75), \
             patch.dict(risks.p.FIT_BOUNDS, tab_thickness_error_mm=(-0.2, 0.1)):
            result = risks.hand_stresses()
        self.assertAlmostEqual(result["adapter_net_area_min_mm2"], 5.7)
        self.assertAlmostEqual(result["tab_ligament_tension_MPa"], risks.p.P_PROOF/5.7)
        self.assertAlmostEqual(result["adapter_nominal_net_area_mm2"], 7.2)

    def test_hand_report_metadata_remains_numeric_for_markdown_export(self):
        result = risks.hand_stresses()
        self.assertTrue(all(isinstance(value, Real) for value in result.values()))
        lines = [f"- {key}: {value:.2f}" for key, value in result.items()]
        self.assertIn("- adapter_net_area_min_mm2: 6.24", lines)


if __name__ == "__main__":
    unittest.main()
