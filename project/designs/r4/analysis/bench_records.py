#!/usr/bin/env python3
"""Validate recorded bench measurements without inventing unperformed tests.

This validates a report supplied by a human operator. It does not authenticate
the measurements, perform a physical test, or issue a flight/payload rating.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import math
from pathlib import Path

HERE = Path(__file__).resolve().parent
COLUMNS = ("test_id", "specimen_id", "condition", "cycle", "measurement", "value", "unit", "evidence", "operator", "timestamp_utc")


def finite(value):
    number = float(value)
    if not math.isfinite(number):
        raise ValueError("Measurement must be finite")
    return number


def evaluate(plan, rows):
    """Every planned cell is required. Empty cells are pending, never a pass."""
    specs = {s["id"]: s for s in plan["tests"]}
    if len(specs) != len(plan["tests"]):
        raise ValueError("Duplicate test specification")
    records = {}
    for row in rows:
        if not any(str(v or "").strip() for v in row.values()):
            continue
        test_id = row.get("test_id", "").strip()
        if test_id not in specs:
            raise ValueError(f"Unknown test ID: {test_id}")
        spec = specs[test_id]
        specimen = row.get("specimen_id", "").strip()
        condition = row.get("condition", "").strip()
        measurement = row.get("measurement", "").strip()
        if specimen not in plan["specimen_ids"]:
            raise ValueError(f"Unknown specimen {specimen}; amend the plan explicitly")
        if condition not in spec["conditions"]:
            raise ValueError(f"Unknown condition {condition} for {test_id}")
        if measurement not in spec["measurements"]:
            raise ValueError(f"Unknown measurement {measurement} for {test_id}")
        try:
            cycle = int(row.get("cycle", ""))
        except (ValueError, TypeError) as exc:
            raise ValueError("Cycle must be an integer") from exc
        if cycle not in range(1, spec["cycles_per_condition"] + 1):
            raise ValueError(f"Cycle outside planned range for {test_id}")
        key = test_id, specimen, condition, cycle, measurement
        if key in records:
            raise ValueError(f"Duplicate measurement: {key}")
        target = spec["measurements"][measurement]
        if row.get("unit") != target["unit"]:
            raise ValueError(f"Wrong unit for {key}; expected {target['unit']}")
        if not row.get("value", "").strip():
            records[key] = {"status": "pending", "reason": "No measured value"}
            continue
        for field in ("evidence", "operator", "timestamp_utc"):
            if not row.get(field, "").strip():
                raise ValueError(f"Measured value lacks {field}: {key}")
        from datetime import datetime, timezone
        try:
            stamp = datetime.fromisoformat(row["timestamp_utc"].replace("Z", "+00:00"))
            if stamp.tzinfo is None or stamp.utcoffset() != timezone.utc.utcoffset(stamp):
                raise ValueError("Timestamp must explicitly use UTC")
        except (ValueError, TypeError) as exc:
            raise ValueError(f"Invalid UTC timestamp: {key}") from exc
        value = finite(row["value"])
        if target["unit"] == "boolean_0_or_1" and value not in (0, 1):
            raise ValueError(f"Boolean measurement must be exactly 0 or 1: {key}")
        passed = (("minimum" not in target or value >= target["minimum"])
                  and ("maximum" not in target or value <= target["maximum"]))
        records[key] = {"status": "pass" if passed else "fail", "value": value,
                        "unit": target["unit"], "evidence": row["evidence"]}
    tests = []
    for spec in plan["tests"]:
        cells = []
        for specimen in plan["specimen_ids"]:
            for condition in spec["conditions"]:
                for cycle in range(1, spec["cycles_per_condition"] + 1):
                    for measurement in spec["measurements"]:
                        key = spec["id"], specimen, condition, cycle, measurement
                        cells.append(records.get(key, {"status": "pending"}))
                    # Force margin is derived from four recorded measurements;
                    # an operator-entered ratio cannot stand in for the data.
                    if spec.get("force_margin_ratio"):
                        names = ("available_pull_N", "available_uncertainty_N", "required_pull_N", "required_uncertainty_N")
                        data = [records.get((spec["id"], specimen, condition, cycle, name), {}) for name in names]
                        if not all("value" in item for item in data):
                            cells.append({"status": "pending"})
                        else:
                            available, ua, required, ur = [item["value"] for item in data]
                            passed = available - ua >= spec["force_margin_ratio"] * (required + ur)
                            cells.append({"status": "pass" if passed else "fail"})
                    for lower, upper in spec.get("ordered_measurements", []):
                        lo = records.get((spec["id"], specimen, condition, cycle, lower), {})
                        hi = records.get((spec["id"], specimen, condition, cycle, upper), {})
                        if "value" not in lo or "value" not in hi:
                            cells.append({"status": "pending"})
                        else:
                            cells.append({"status": "pass" if lo["value"] <= hi["value"] else "fail"})
        counts = {status: sum(c["status"] == status for c in cells) for status in ("pass", "fail", "pending")}
        status = "fail" if counts["fail"] else "pending" if counts["pending"] else "pass"
        tests.append({"id": spec["id"], "name": spec["name"], "status": status, "measurements": counts})
    status = "fail" if any(t["status"] == "fail" for t in tests) else "pending" if any(t["status"] == "pending" for t in tests) else "records_accepted"
    return {"status": status, "tests": tests, "physical_test_executed_by_software": False,
            "flight_qualification_established": False, "payload_rating_established": False,
            "scope": "Completeness and threshold checks on operator-supplied measurements only; not authentication or product qualification."}


def template(plan, destination):
    with Path(destination).open("w", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=COLUMNS, lineterminator="\n")
        writer.writeheader()
        for spec in plan["tests"]:
            for specimen in plan["specimen_ids"]:
                for condition in spec["conditions"]:
                    for cycle in range(1, spec["cycles_per_condition"] + 1):
                        for measurement, target in spec["measurements"].items():
                            writer.writerow(dict(test_id=spec["id"], specimen_id=specimen, condition=condition,
                                                 cycle=cycle, measurement=measurement, unit=target["unit"]))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--plan", type=Path, default=HERE / "bench-plan.json")
    parser.add_argument("--records", type=Path)
    parser.add_argument("--template", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--require-complete", action="store_true")
    args = parser.parse_args()
    plan = json.loads(args.plan.read_text())
    if args.template:
        template(plan, args.template)
        return
    rows = []
    if args.records:
        with args.records.open(newline="") as stream:
            reader = csv.DictReader(stream)
            if tuple(reader.fieldnames or ()) != COLUMNS:
                raise ValueError("CSV must have the exact documented header")
            rows = list(reader)
    result = evaluate(plan, rows)
    result["plan_sha256"] = hashlib.sha256(args.plan.read_bytes()).hexdigest()
    result["records_sha256"] = hashlib.sha256(args.records.read_bytes()).hexdigest() if args.records else None
    encoded = json.dumps(result, indent=2, allow_nan=False) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded)
    print(encoded)
    if result["status"] == "fail" or (args.require_complete and result["status"] != "records_accepted"):
        raise SystemExit(2)


if __name__ == "__main__":
    main()
