"""Body-opening load definitions; no CAD build, mesh or stiffness solve."""
from pathlib import Path
import sys
import unittest
from unittest.mock import patch

import numpy as np

R5 = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(R5), str(R5/"analysis")]
import body_actuation as body
from coupled_forces import study


class BodyOpeningLoadTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.report = study(body.p, include_states=False)

    def test_guide_action_reaction_uses_nominal_physical_planes(self):
        state = self.report["max_opening_force"]
        loads = body.nominal_guide_loads(state)
        for i, (load, source) in enumerate(zip(loads, state["guide_forces_N"])):
            np.testing.assert_allclose(load["force"], -np.array(source))
            self.assertAlmostEqual(load["application_point"][0], body.p.GUIDE_PATCH_X[i])
            z = body.p.ZK-state["guide_vertical_signs"][i]*(body.p.KEEPER_W+body.p.SLIDE)/2
            self.assertEqual(load["plane"], (2, z))
            self.assertEqual({a for a, _, _ in load["vertex_bands"]}, {0, 1})
        source_moment = np.cross(state["guide_application_points_mm"], -np.array(state["guide_forces_N"])).sum(axis=0)
        self.assertGreater(np.linalg.norm(body.patch_resultants(loads)[1]-source_moment), 0.1)

    def test_servo_mount_transfers_force_and_all_three_moments(self):
        for name in ("max_opening_force", "max_torque"):
            state = self.report[name]
            loads = body.servo_ear_loads(state)
            force, moment = body.patch_resultants(loads)
            target = -np.array(state["sleeve_force_N"])
            np.testing.assert_allclose(force, target, atol=1e-10)
            np.testing.assert_allclose(moment, np.cross(state["sleeve_application_point_mm"], target), atol=1e-9)
            # The Y overhang cannot be represented by just putting -Fx/-Fz on
            # the ear plane. Opposed normal fastener forces supply the couple.
            normal = [load["force"][1] for load in loads]
            self.assertLess(min(normal), 0)
            self.assertGreater(max(normal), 0)
            self.assertEqual(len(loads), 4)

    def test_clamped_wrench_distribution_is_independent_of_origin(self):
        points = np.array([[0, 0, 0], [4, 0, 0], [0, 0, 3], [4, 0, 3]], float)
        force, moment = np.array([2., -3., 5.]), np.array([7., 11., -13.])
        shift = np.array([100., -50., 23.])
        a = body.clamped_patch_forces(points, force, moment)
        b = body.clamped_patch_forces(points+shift, force, moment+np.cross(shift, force))
        np.testing.assert_allclose(a, b, atol=1e-12)

    def test_collinear_ear_points_cannot_silently_drop_a_moment(self):
        with self.assertRaisesRegex(ValueError, "full wrench"):
            body.clamped_patch_forces([[0, 0, 0], [1, 0, 0], [2, 0, 0]], [0, 0, 1], [1, 0, 0])

    def test_residual_socket_wrench_accounts_for_guide_remapping(self):
        state = self.report["max_opening_force"]
        loads, definition = body.opening_components(state)
        force, moment = body.patch_resultants(loads)
        np.testing.assert_allclose(force+definition["required_socket_force_N"],
                                   [0, 0, -body.p.P_DESIGN], atol=1e-12)
        np.testing.assert_allclose(moment+definition["required_socket_moment_Nmm"],
                                   np.cross(body.fea.TAB_CENTRE, [0, 0, -body.p.P_DESIGN]), atol=1e-10)
        self.assertAlmostEqual(definition["required_socket_force_N"][0], body.p.MU*body.p.P_DESIGN)
        self.assertAlmostEqual(definition["required_socket_moment_Nmm"][1], 59.3716960468, places=7)
        self.assertIn("Incomplete", definition["contact_status"])

    def test_patch_selector_bounds_both_directions_and_refinement_covers_corners(self):
        patch = body.rectangular_patch("test", [3, 5, 7], 1,
                    ((0, 2.2, 3.8), (2, 6.2, 7.8)), [1, 0, 0])
        probes = np.array([[3, 5, 7], [3, 5.01, 7], [3.81, 5, 7], [3, 5, 7.81]]).T
        np.testing.assert_array_equal(patch["select"](probes), [True, False, False, False])
        centres = np.array(patch["refinement_points_mm"])
        for x in (2.2, 3.8):
            for z in (6.2, 7.8):
                self.assertLess(np.linalg.norm(centres-[x, 5, z], axis=1).min(), 0.8)

    def test_complete_cases_balance_the_actual_scaled_reference_load(self):
        for case, definition in body.body_opening_cases().values():
            applied = case["reference_load_N"]
            self.assertAlmostEqual(applied, body.p.P_DESIGN*definition["scale_factor"])
            self.assertEqual(definition["design_service_force_N"], body.p.P_DESIGN)
            self.assertEqual(definition["applied_reference_force_N"], applied)
            self.assertGreater(applied, body.p.P_DESIGN)
            point = [sum(body.p.TAB_X)/2+body.p.SOCKET_GAP, body.p.YK, body.p.HOLE_TOP_LOADED]
            force, moment = body.patch_resultants(case["loads"])
            np.testing.assert_allclose(force, [0, 0, -applied], atol=1e-10)
            np.testing.assert_allclose(moment, np.cross(point, [0, 0, -applied]), atol=1e-9)
            np.testing.assert_allclose(case["source_resultant"], (force, moment), atol=1e-9)
            self.assertEqual(case["part"], "body")
            self.assertEqual(case["print_axis"], body.p.PRINT_AXES["body"])
            self.assertIs(case["fixed"], body.fea.CASES["body"]["fixed"])
            self.assertEqual(case["minimum_refinement_mm"], body.fea.CASES["body"]["minimum_refinement_mm"])

    def test_scale_covers_reactions_and_servo_moments_not_just_pin_force(self):
        for case, definition in body.body_opening_cases().values():
            rows = definition["component_coverage"]
            self.assertEqual(len([r for r in rows if "servo_moment" in r["component"]]), 3)
            for row in rows:
                self.assertGreaterEqual(abs(row["scaled_value"])+1e-10, abs(row["envelope_value"]))
                if abs(row["envelope_value"]) > 1e-10:
                    self.assertGreater(row["scaled_value"]*row["envelope_value"], 0)
            reference, envelope = definition["unscaled_centered_reference_state"], definition["source_envelope_state"]
            self.assertGreater(definition["scale_factor"], envelope["force_x_N"]/reference["force_x_N"])
            np.testing.assert_allclose(definition["servo_moment_reference_point_mm"], [52.9, 22.2, 6.3], atol=1e-10)
            self.assertIn("does not prove a full-stroke", definition["limitations"])

    def test_socket_return_is_positive_on_the_verified_side_strips(self):
        for case, definition in body.body_opening_cases().values():
            loads = [load for load in case["loads"] if load["name"].startswith("socket_")]
            self.assertEqual(len(loads), 4)
            for load in loads:
                self.assertGreater(load["force"][0], 0)
                self.assertEqual(load["force"][1:], [0, 0])
                self.assertEqual(load["plane"], (0, 12.4))
                bands = {a: (lo, hi) for a, lo, hi in load["vertex_bands"]}
                # Whole rectangles avoid the corner-relief bulbs and the tab's
                # top chamfer after its nominal loaded vertical displacement.
                self.assertIn(tuple(round(v, 8) for v in bands[1]), ((36.45, 37.25), (43.15, 43.95)))
                self.assertIn(tuple(round(v, 8) for v in bands[2]), ((9.2, 9.8), (12.8, 13.2)))
            force = sum(load["force"][0] for load in loads)
            centroid = sum(np.array(load["application_point"])*load["force"][0] for load in loads)/force
            np.testing.assert_allclose(centroid, [12.4, 40.2, 10.5], atol=1e-12)
            lower_fraction = sum(load["force"][0] for load in loads if "lower" in load["name"])/force
            self.assertAlmostEqual(lower_fraction, 5/7)

    def test_raw_incompatible_envelope_is_not_forced_onto_a_single_socket_face(self):
        _, definition = body.opening_components(self.report["max_opening_force"])
        with self.assertRaisesRegex(AssertionError, "socket return"):
            body.positive_socket_return(definition)

    def test_centered_reference_cannot_keep_the_payload_after_withdrawal(self):
        with self.assertRaisesRegex(ValueError, "bearing domain"):
            body.centered_reference_state(40)

    def test_failed_force_envelope_cannot_produce_a_body_case(self):
        with patch.object(body, "study", return_value={"finite_sliding_solution": False}):
            with self.assertRaisesRegex(ValueError, "finite coupled force"):
                body.body_opening_cases()


if __name__ == "__main__":
    unittest.main()
