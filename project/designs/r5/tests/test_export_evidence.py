from pathlib import Path
import sys
import unittest

import numpy as np

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5 / "analysis")]
from export_web import export_case, validate_summary


class ViewerEvidenceTests(unittest.TestCase):
    def fixture(self):
        fine = dict(converged=True, max_utilization_at_proof=2.0, strength_ratio_at_proof=0.5,
                    h_mm=0.25, global_h_mm=0.5, dofs=60,
                    local_refinement_centres_mm=[[0.1, 0.2, 0.3]], local_refinement_radius_mm=1.5,
                    disp_change_pct=1.0, utilization_change_pct=2.0,
                    raw_max_utilization_at_proof=3.0, equilibrium={"applied_force_N": [0, 0, -10]})
        summary = dict(analysis_id="test-identity", load_N=10.0, support_exclusion_mm=1.0,
                       cases={"keeper": {"fine": fine}})
        points = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1],
                           [2, 0, 0], [3, 0, 0], [2, 1, 0], [2, 0, 1]], dtype=float)
        data = dict(points_mm=points, tet4=np.array([[0, 1, 2, 3], [4, 5, 6, 7]]),
                    fi_e=np.array([0.2, 0]), excluded_e=np.array([False, True]),
                    analysis_id=np.array("test-identity"), reference_load_N=np.array(10.0))
        return summary, data

    def test_export_preserves_reference_load_strength_ratio_and_excluded_region(self):
        summary, data = self.fixture()
        metadata, field = export_case("keeper", summary, data)
        self.assertEqual(metadata["reference_load_N"], 10.0)
        self.assertEqual(metadata["margin_at_proof"], 0.5)
        self.assertEqual(metadata["stress_screen_N"], 5.0)
        self.assertEqual(metadata["global_h_mm"], 0.5)
        self.assertEqual(metadata["h_mm"], 0.25)
        self.assertEqual(metadata["local_refinement_centres_mm"], [[0.1, 0.2, 0.3]])
        self.assertIsNone(metadata["working_load_rating_N"])
        self.assertEqual(field["excluded"], [False] * 4 + [True] * 4)
        self.assertEqual(max(field["fi"]) * 10, summary["cases"]["keeper"]["fine"]["max_utilization_at_proof"])

    def test_export_rejects_a_field_using_different_strength_criteria(self):
        summary, data = self.fixture()
        data["fi_e"] = np.array([0.1, 0])
        with self.assertRaisesRegex(ValueError, "criteria"):
            export_case("keeper", summary, data)

    def test_export_rejects_stale_field_identity_and_wrong_reference_load(self):
        summary, data = self.fixture()
        data["analysis_id"] = np.array("old-run")
        with self.assertRaisesRegex(ValueError, "identities"):
            export_case("keeper", summary, data)
        summary, data = self.fixture()
        data["reference_load_N"] = np.array(1.0)
        with self.assertRaisesRegex(ValueError, "reference load"):
            export_case("keeper", summary, data)

    def test_unconverged_or_unidentified_evidence_cannot_be_published(self):
        with self.assertRaisesRegex(ValueError, "mesh-converged"):
            validate_summary(dict(schema_version=2, numerical_validation_passed=False))
        with self.assertRaisesRegex(ValueError, "identities"):
            validate_summary(dict(schema_version=2, numerical_validation_passed=True))


if __name__ == "__main__":
    unittest.main()
