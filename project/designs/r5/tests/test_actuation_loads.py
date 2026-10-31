from pathlib import Path
import sys
import unittest
from unittest.mock import patch

import numpy as np

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5/"analysis")]
import actuation_fea


class ActuationLoadTests(unittest.TestCase):
    def test_opening_case_carries_both_the_tab_and_frictional_pin_moments(self):
        fit = dict(latch_error_deg=(-3.0, 3.0),
                   horn_r=(actuation_fea.p.CRANK_R-0.1, actuation_fea.p.CRANK_R+0.1))
        with patch.object(actuation_fea.p, "HORN_GROOVE_ENABLED", False, create=True), \
                patch.object(actuation_fea.p, "FIT_BOUNDS", fit, create=True):
            case, definition = actuation_fea.service_opening_case()
        force, moment = case["source_resultant"]
        pin_force = np.array(definition["sleeve_force_N"])
        tab_force = np.array([0.0, 0.0, -actuation_fea.p.P_DESIGN])
        point = np.array(definition["sleeve_application_point_mm"])
        np.testing.assert_allclose(force, pin_force+tab_force)
        np.testing.assert_allclose(moment, np.cross(point, pin_force)+np.cross(actuation_fea.fea.TAB_CENTRE, tab_force))
        self.assertGreater(pin_force[0], 0)
        self.assertGreater(point[1], actuation_fea.p.YK)
        self.assertAlmostEqual(pin_force[2], actuation_fea.p.MU*pin_force[0])
        self.assertEqual(case["loads"][1]["plane"], (0, point[0]))
        self.assertAlmostEqual(definition["angle_deg"], actuation_fea.p.A_LATCH+3)

    def test_missing_inspection_envelope_is_not_substituted_with_a_nominal_pose(self):
        with patch.object(actuation_fea.p, "FIT_BOUNDS", {}, create=True):
            with self.assertRaisesRegex(ValueError, "inspected endpoint/radius envelope"):
                actuation_fea.service_opening_case()

    def test_service_output_cannot_be_labelled_as_retention_proof(self):
        result = actuation_fea.at_reference_load(dict(max_utilization_at_proof=0.5, strength_ratio_at_proof=2.0))
        self.assertEqual(result["strength_ratio_at_reference_load"], 2.0)
        self.assertTrue(all("proof" not in key for key in result))


if __name__ == "__main__":
    unittest.main()
