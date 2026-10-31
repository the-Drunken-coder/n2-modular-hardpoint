"""The reports and structural opening case must use one coupled force source."""
from pathlib import Path
import sys
from types import SimpleNamespace
import unittest
from unittest.mock import patch

import numpy as np

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT/"analysis")]
import params
import actuation_fea
import mechanics
import risks
from coupled_forces import study
from test_coupled_forces import fixture


class ForceConsumerTests(unittest.TestCase):
    def test_mechanics_risk_and_opening_share_the_audited_envelope(self):
        model = SimpleNamespace(**dict(vars(params), **vars(fixture())))
        model.YOKE_SLOT_TOP_EXTRA = .8
        shared = study(model, include_states=False)
        with patch.object(mechanics, "p", model), patch.object(risks, "p", model), \
                patch.object(actuation_fea, "p", model):
            mechanical = mechanics.results()
            self.assertAlmostEqual(mechanical["drag_N"], shared["max_opening_force"]["force_x_N"])
            self.assertAlmostEqual(mechanical["torque_needed_Nmm"], shared["required_torque_Nmm"])
            self.assertAlmostEqual(risks.drag(model.MU), mechanical["drag_N"])
            _, torques = risks.torque_curve(model.MU)
            self.assertAlmostEqual(torques.max(), mechanical["torque_needed_Nmm"])
            self.assertAlmostEqual(next(r for r in risks.derating() if r["volts"] == 5.)["margin_working"],
                                   mechanical["margin_working"])
            case, definition = actuation_fea.service_opening_case()
            np.testing.assert_allclose(definition["sleeve_force_N"], shared["max_opening_force"]["sleeve_force_N"])
            self.assertLess(definition["sleeve_eccentricity_y_mm"], 0)
            self.assertLess(case["loads"][0]["force"][0], 0)  # tab drag participates in the audit
            self.assertEqual(mechanics.check(mechanical), [])

    def test_high_friction_sweep_reports_an_unresolved_mode_without_a_numeric_pass(self):
        model = SimpleNamespace(**dict(vars(params), **vars(fixture())))
        with patch.object(risks, "p", model):
            result = risks.friction_sweep()
        nominal = next(row for row in result["rows"] if row["mu"] == .35)
        unresolved = next(row for row in result["rows"] if row["mu"] == .6)
        self.assertGreater(nominal["margin_working"], 3.)
        self.assertFalse(unresolved["finite_sliding_solution"])
        self.assertIsNone(unresolved["torque_needed_Nmm"])
        self.assertEqual(unresolved["margin_working"], 0.)
        self.assertGreater(result["mu_for_margin_3"], .35)
        self.assertLess(result["mu_for_margin_3"], .40)


if __name__ == "__main__":
    unittest.main()
