"""Missing or inconsistent bench records must never become physical evidence."""
import copy
import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("r4_bench", ROOT / "project/designs/r4/analysis/bench_records.py")
bench = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bench)


class BenchEvidenceTests(unittest.TestCase):
    def setUp(self):
        self.plan = {"specimen_ids": ["fixture-1"], "tests": [{"id": "force", "name": "Force test fixture",
            "conditions": ["at-start"], "cycles_per_condition": 1, "force_margin_ratio": 1.5,
            "measurements": {name: {"unit": "N", "minimum": 0} for name in
                ("available_pull_N", "available_uncertainty_N", "required_pull_N", "required_uncertainty_N")}}]}
        self.rows = []
        for name, value in zip(self.plan["tests"][0]["measurements"], [10, .2, 5, .2]):
            self.rows.append(dict(test_id="force", specimen_id="fixture-1", condition="at-start", cycle="1",
                measurement=name, value=str(value), unit="N", evidence="unit-test-fixture-not-real-data",
                operator="unit-test", timestamp_utc="2026-10-30T00:00:00Z"))

    def test_no_records_are_pending(self):
        self.assertEqual(bench.evaluate(self.plan, [])["status"], "pending")

    def test_blank_measurement_stays_pending(self):
        self.rows[0]["value"] = ""
        self.assertEqual(bench.evaluate(self.plan, self.rows)["status"], "pending")

    def test_missing_measurement_stays_pending(self):
        self.assertEqual(bench.evaluate(self.plan, self.rows[:-1])["status"], "pending")

    def test_accepted_records_never_establish_qualification(self):
        result = bench.evaluate(self.plan, self.rows)
        self.assertEqual(result["status"], "records_accepted")
        self.assertIs(result["flight_qualification_established"], False)
        self.assertIs(result["payload_rating_established"], False)
        self.assertIs(result["physical_test_executed_by_software"], False)

    def test_uncertainty_reduces_margin(self):
        self.rows[0]["value"] = "8"
        self.rows[1]["value"] = "1"
        self.assertEqual(bench.evaluate(self.plan, self.rows)["status"], "fail")

    def test_duplicate_record_is_rejected(self):
        with self.assertRaisesRegex(ValueError, "Duplicate"):
            bench.evaluate(self.plan, self.rows + self.rows[:1])

    def test_nonfinite_value_is_rejected(self):
        self.rows[0]["value"] = "nan"
        with self.assertRaisesRegex(ValueError, "finite"):
            bench.evaluate(self.plan, self.rows)

    def test_wrong_unit_is_rejected(self):
        self.rows[0]["unit"] = "kg"
        with self.assertRaisesRegex(ValueError, "Wrong unit"):
            bench.evaluate(self.plan, self.rows)

    def test_measured_value_requires_provenance(self):
        for field in ("operator", "timestamp_utc", "evidence"):
            rows = copy.deepcopy(self.rows)
            rows[0][field] = ""
            with self.assertRaisesRegex(ValueError, field):
                bench.evaluate(self.plan, rows)

    def test_utc_timestamp_is_required(self):
        self.rows[0]["timestamp_utc"] = "2026-10-30T00:00:00"
        with self.assertRaisesRegex(ValueError, "UTC"):
            bench.evaluate(self.plan, self.rows)

    def test_unplanned_specimen_or_cycle_is_rejected(self):
        for field, value in (("specimen_id", "mystery"), ("cycle", "2")):
            rows = copy.deepcopy(self.rows)
            rows[0][field] = value
            with self.assertRaises(ValueError):
                bench.evaluate(self.plan, rows)

    def test_partial_boolean_is_rejected(self):
        self.plan["tests"][0].pop("force_margin_ratio")
        name = self.rows[0]["measurement"]
        self.plan["tests"][0]["measurements"][name]["unit"] = "boolean_0_or_1"
        self.rows[0].update(value="0.5", unit="boolean_0_or_1")
        with self.assertRaisesRegex(ValueError, "exactly 0 or 1"):
            bench.evaluate(self.plan, self.rows)


if __name__ == "__main__":
    unittest.main()
