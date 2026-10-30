#!/usr/bin/env python3
"""Fresh R4 actual-STEP component FEA and explicit release-force sensitivity.

The frozen P2/Gmsh engine is copied byte-for-byte. All new loads are in N,
dimensions in mm, and stresses in MPa. No computed result is a payload rating.
"""
from __future__ import annotations

import argparse
import hashlib
import importlib.metadata
import json
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time

ROOT = Path(__file__).resolve().parents[4]
HERE = Path(__file__).resolve().parent
SOLVER_SHA = "6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c"
PAYLOAD_KG = .454
GRAVITY = 9.80665
PAYLOAD_2G_N = PAYLOAD_KG * 2 * GRAVITY
PRELOAD_N = 3.
AXIAL_COUPLING_N = 12.
LATERAL_N = PAYLOAD_KG * GRAVITY
CG_OFFSET_MM = 60.


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def read(path):
    return json.loads(Path(path).read_text())


def dump(path, data):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, allow_nan=False) + "\n")


def plane(x, z, y):
    return {"normal_axis": 2, "z": z, "x_range": list(x), "y_range": list(y)}


def load(label, selector, force, **kwargs):
    return dict(label=label, selector=selector, force_N=list(force), **kwargs)


def traction(label, x, z, f, y):
    return load(label, plane(x, z, y), [0, 0, f])


def contact_state(g, stroke):
    x0 = max(g["lug_x"][0], g["keeper_tip_x"] + stroke)
    x1 = g["lug_x"][1]
    if x1 <= x0:
        raise ValueError("No retained lug overlap at requested state")
    xc = (x0 + x1) / 2
    loss = g["distal_roof_x"][1] - g["keeper_tip_x"]
    if stroke < loss - 1e-9:
        distal = [max(g["keeper_tip_x"] + stroke, g["distal_roof_x"][0]), g["distal_roof_x"][1]]
        dc, pc = sum(distal) / 2, sum(g["proximal_roof_x"]) / 2
        proximal = (xc - dc) / (pc - dc)
        contacts = [("distal_roof", distal, 1 - proximal), ("proximal_roof", g["proximal_roof_x"], proximal)]
    else:
        pc, fc = sum(g["proximal_roof_x"]) / 2, sum(g["far_floor_x"]) / 2
        far = (pc - xc) / (fc - pc)
        contacts = [("proximal_roof", g["proximal_roof_x"], 1 + far), ("far_floor", g["far_floor_x"], -far)]
    return {"stroke_mm": stroke, "lug_contact_x": [x0, x1], "lug_centroid_x": xc,
            "remaining_overlap_mm": x1 - x0, "contacts": contacts,
            "sliding_normal_force_multiplier": 1 + sum(abs(q[2]) for q in contacts)}


def annuli(points, radius, outer=3.):
    return [{"label": f"Rigid mount annulus {i + 1}", "selector": {
        "normal_axis": 2, "z": z, "annulus_xy": [x, y, radius, outer]}, "components": [0, 1, 2]}
        for i, (x, y, z) in enumerate(points)]


def pad_loads(points, total, sign):
    return [load(f"Pad {i + 1} opposing preload", {"normal_axis": 2, "z": z,
                 "circle_xy": [x, y, radius]}, [0, 0, sign * total / len(points)])
            for i, (x, y, z, radius) in enumerate(points)]


def receiver_loads(g, stroke, payload, preload):
    state = contact_state(g, stroke)
    loads = [traction(name, x, g["receiver_floor_z"] if name == "far_floor" else g["receiver_roof_z"],
                      (payload + preload) * factor, g["contact_y"])
             for name, x, factor in state["contacts"]]
    if preload:
        loads += pad_loads(g["pad_contacts"], preload, -1)
    return loads


def solver_selector(source):
    """Translate CAD's explicit plane schema without substituting coordinates."""
    if source.get("kind") != "plane":
        return source
    axis = "xyz".index(source["axis"])
    result = {"normal_axis": axis, source["axis"]: source["value"]}
    result.update({name + "_range": value for name, value in source["ranges"].items()})
    if "exclude_circle" in source:
        # The circle is an actual CAD hole, so no flat boundary facets exist
        # there. This extra audit key specifies the expected footprint area;
        # the frozen solver naturally sees only the surrounding physical face.
        result["cad_exclude_disk"] = source["exclude_circle"]
    return result


def normalize_geometry(source):
    g = json.loads(json.dumps(source))
    g["servo_load_selectors"] = [solver_selector(s) for s in g["servo_load_selectors"]]
    g["keeper_axial_load_selector"] = solver_selector(g["keeper_axial_load_selector"])
    if g["keeper_anchors"] and isinstance(g["keeper_anchors"][0], list):
        a, b, c = g["keeper_anchors"]
        difference = [b[i] - a[i] for i in range(3)]
        along = max(range(3), key=lambda i: abs(difference[i]))
        other = [i for i in range(3) if i != along]
        cross = [(b[1]-a[1])*(c[2]-a[2])-(b[2]-a[2])*(c[1]-a[1]),
                 (b[2]-a[2])*(c[0]-a[0])-(b[0]-a[0])*(c[2]-a[2]),
                 (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])]
        normal = max(range(3), key=lambda i: abs(cross[i]))
        if abs(cross[normal]) < 1e-8:
            raise ValueError("Keeper gauge points must not be collinear")
        g["keeper_anchors"] = [{"label": "Rigid translation gauge", "point_mm": a, "components": [0, 1, 2]},
            {"label": "Two rotation gauges", "point_mm": b, "components": other},
            {"label": "Final rotation gauge", "point_mm": c, "components": [normal]}]
    for boxes in g["refine_boxes"].values():
        for box in boxes:
            if len(box["bounds"]) == 3 and all(len(v) == 2 for v in box["bounds"]):
                box["bounds"] = [[v[i] for v in box["bounds"]] for i in (0, 1)]
    if "seat_land_receiver_selector" in g:
        g["lateral_bearing"] = {"receiver_seat_selector": solver_selector(g["seat_land_receiver_selector"]),
            "adapter_seat_selector": solver_selector(g["seat_land_adapter_selector"]),
            "receiver_key_selector": solver_selector(g["key_receiver_selector"]),
            "adapter_key_selector": solver_selector(g["key_adapter_selector"]),
            "seat_lever_mm": g["seat_land_centroid_mm"][1] - sum(g["contact_y"]) / 2}
        if g["lateral_bearing"]["seat_lever_mm"] <= 0:
            raise ValueError("Selected tipping seat must be on positive Y side")
    return g


def prepare(cad, out):
    if out.exists():
        raise ValueError("FEA output must be fresh")
    g = normalize_geometry(read(cad / "geometry.json"))
    if g.get("units") != "mm":
        raise ValueError("CAD geometry must use mm")
    if "lateral_bearing" not in g:
        raise ValueError("R4 requires reviewed key and hard-seat patches; do not silently drop the interface load case")
    frozen = ROOT / f"project/analysis/inputs/drivers/solver_{SOLVER_SHA}.py"
    if sha(frozen) != SOLVER_SHA:
        raise ValueError("Frozen P2 solver changed")
    out.mkdir(parents=True)
    engine = out / "engine"
    engine.mkdir()
    shutil.copyfile(frozen, engine / "solver.py")
    shutil.copyfile(ROOT / "project/analysis/inputs/material.json", engine / "material.json")
    manifest = read(cad / "manifest.json")
    prints = {p["id"]: p for p in manifest["printed_parts"]}
    files = {part: cad / prints[pid]["step"] for part, pid in
             (("receiver", "receiver_core"), ("adapter", "payload_adapter"), ("keeper", "keeper"))}
    # CAD owns contact coordinates; a changed architecture cannot silently use
    # old manually typed coordinates or an archived STEP file.
    for part, path in files.items():
        if not path.is_file():
            raise FileNotFoundError(path)
    supports = annuli(g["receiver_mounts"], *g["receiver_mount_annulus_radii"])
    adapter_supports = annuli(g["payload_mounts"], *g["payload_mount_annulus_radii"])
    loss = g["distal_roof_x"][1] - g["keeper_tip_x"]
    clear = g["lug_x"][1] - g["keeper_tip_x"]
    strokes = [0., loss, clear - .3, clear - .1]
    if not (0 < loss < clear - .3 < clear - .1):
        raise ValueError("Unexpected keeper support sequence; review load states")
    receiver_cases = {}
    for name, stroke, factor, preload in (("retained_2g", 0., 1, 0.),
            ("retained_2g_preload", 0., 1, PRELOAD_N),
            ("distal_support_lost", loss, 1, PRELOAD_N),
            ("static_4g_sensitivity", 0., 2, PRELOAD_N)):
        loads = receiver_loads(g, stroke, factor * PAYLOAD_2G_N, preload)
        for i, selector in enumerate(g["servo_load_selectors"]):
            loads.append(load(f"Servo inertia bearing patch {i + 1}", selector,
                [0, 0, factor * g["servo_mass_kg"] * 2 * GRAVITY / len(g["servo_load_selectors"])], imprint=False))
        receiver_cases[name] = {"loads": loads, "supports": supports, "stroke_mm": stroke,
            "payload_force_N": factor * PAYLOAD_2G_N, "preload_N": preload,
            "scope": "Prescribed vertical contact loads and servo inertia; rigid four-hole host fixture only."}
    m1, m2 = g["servo_mount_centers"]
    if not math.isclose(m1[1], m2[1]) or not math.isclose(m1[2], m2[2]) or m2[0] <= m1[0]:
        raise ValueError("Review actuator bolt-resultant model for changed mount geometry")
    separation = m2[0] - m1[0]
    actuation_z = sum(g["keeper_axial_load_selector"]["z_range"]) / 2
    actuation_y = sum(g["keeper_axial_load_selector"]["y_range"]) / 2
    fz = -AXIAL_COUPLING_N * (actuation_z - m1[2]) / separation
    fy = -AXIAL_COUPLING_N * (actuation_y - m1[1]) / separation
    receiver_cases["servo_reaction_12N"] = {
        "loads": [load("Servo mount 1 equivalent force/moment reaction", g["servo_load_selectors"][0],
                       [-AXIAL_COUPLING_N / 2, fy, fz]),
                  load("Servo mount 2 equivalent force/moment reaction", g["servo_load_selectors"][1],
                       [-AXIAL_COUPLING_N / 2, -fy, -fz])],
        "supports": supports,
        "scope": "12 N follower reaction transferred as the same force and moment through two bolted servo interfaces. Joint resultants can include tensile/shear traction; local bolt preload, washer contact and pull-through are not modeled.",
        "target_force_N": [-AXIAL_COUPLING_N, 0, 0],
        "target_moment_Nmm": [0, -AXIAL_COUPLING_N * actuation_z, AXIAL_COUPLING_N * actuation_y]}
    adapter_cases, keeper_cases = {}, {}
    for stroke in strokes:
        state = contact_state(g, stroke)
        name = f"stroke_{stroke:.2f}mm".replace(".", "p")
        if stroke != loss:
            adapter_cases[name] = {"loads": [traction("Keeper on remaining lug floor", state["lug_contact_x"],
                g["adapter_floor_z"], -(PAYLOAD_2G_N + PRELOAD_N), g["contact_y"])]
                + pad_loads(g["adapter_pad_contacts"], PRELOAD_N, 1), "supports": adapter_supports,
                "stroke_mm": stroke, "remaining_overlap_mm": state["remaining_overlap_mm"],
                "scope": "Rigid payload bolt annuli; prescribed finite lug and pad tractions."}
        kloads = [traction("Lug floor on keeper", [v - stroke for v in state["lug_contact_x"]],
                    g["keeper_bottom_z"], PAYLOAD_2G_N + PRELOAD_N, g["contact_y"])]
        for contact, x, factor in state["contacts"]:
            kloads.append(traction(contact, [v - stroke for v in x],
                g["keeper_bottom_z"] if contact == "far_floor" else g["keeper_top_z"],
                -(PAYLOAD_2G_N + PRELOAD_N) * factor, g["contact_y"]))
        keeper_cases[name] = {"loads": kloads, "anchors": g["keeper_anchors"], "stroke_mm": stroke,
            "remaining_overlap_mm": state["remaining_overlap_mm"],
            "scope": "Self-equilibrated prescribed vertical tractions; gauge reaction must be negligible."}
    # A real finite pin bearing load tests the formerly omitted axial tongue
    # load path. Holding the tip face represents a deliberate jam-test fixture,
    # not a claim that this rigid restraint exists during normal release.
    keeper_cases["coupling_axial_12N"] = {"loads": [load("12 N follower pressure on loaded slot wall",
        g["keeper_axial_load_selector"], [AXIAL_COUPLING_N, 0, 0])], "supports": [{
            "label": "Deliberate blocked-keeper test fixture at tip end", "selector": {"normal_axis": 0,
                "x": g["keeper_tip_x"], "y_range": g["contact_y"],
                "z_range": [g["keeper_bottom_z"], g["keeper_top_z"]]}, "components": [0, 1, 2]}],
        "scope": "12 N imposed axial follower/slot jam sensitivity, not certified servo force or normal free-sliding operation. Near-dead-center servo stall is not bounded by this case."}
    lateral_scope = "Not included: CAD did not provide reviewed key and hard-seat bearing patches."
    if "lateral_bearing" in g:
        b = g["lateral_bearing"]
        receiver_cases["lateral_1g_and_roll_60mm"] = {
            "loads": receiver_loads(g, 0., PAYLOAD_2G_N + LATERAL_N * CG_OFFSET_MM / b["seat_lever_mm"], PRELOAD_N)
              + [load("Transverse key bearing", b["receiver_key_selector"], [0, LATERAL_N, 0]),
                 load("Hard seat compression for assumed CG moment", b["receiver_seat_selector"],
                      [0, 0, -LATERAL_N * CG_OFFSET_MM / b["seat_lever_mm"]])],
            "supports": supports, "lateral_force_N": LATERAL_N, "assumed_CG_offset_mm": CG_OFFSET_MM,
            "nominal_interface_bending_Nmm": LATERAL_N * CG_OFFSET_MM,
            "scope": "Assumed 1 g transverse/60 mm offset contact sensitivity. Positive-compression hard-seat and keeper couple; no aircraft model."}
        adapter_cases["lateral_1g_and_roll_60mm"] = {
            "loads": [traction("Keeper tension with tipping couple", g["lug_x"], g["adapter_floor_z"],
                    -(PAYLOAD_2G_N + PRELOAD_N + LATERAL_N * CG_OFFSET_MM / b["seat_lever_mm"]), g["contact_y"])]
                + pad_loads(g["adapter_pad_contacts"], PRELOAD_N, 1)
                + [load("Transverse key bearing", b["adapter_key_selector"], [0, -LATERAL_N, 0]),
                   load("Hard seat compression", b["adapter_seat_selector"],
                        [0, 0, LATERAL_N * CG_OFFSET_MM / b["seat_lever_mm"]])],
            "supports": adapter_supports, "lateral_force_N": LATERAL_N,
            "assumed_CG_offset_mm": CG_OFFSET_MM,
            "scope": "Paired idealized interface reactions; simultaneous sliding/impact, contact migration and preload loss are not solved."}
        keeper_cases["retained_tipping_sensitivity"] = json.loads(json.dumps(next(iter(keeper_cases.values()))))
        multiplier = (PAYLOAD_2G_N + PRELOAD_N + LATERAL_N * CG_OFFSET_MM / b["seat_lever_mm"]) / (PAYLOAD_2G_N + PRELOAD_N)
        for patch in keeper_cases["retained_tipping_sensitivity"]["loads"]:
            patch["force_N"] = [v * multiplier for v in patch["force_N"]]
        keeper_cases["retained_tipping_sensitivity"]["scope"] = "Increased retained keeper reaction from the assumed 1 g transverse/60 mm CG tipping couple; balanced vertical component loads only."
        lateral_scope = receiver_cases["lateral_1g_and_roll_60mm"]["scope"]
    plans = []
    for component, cases, sizes in (("receiver", receiver_cases, [1.15, .85]),
            ("adapter", adapter_cases, [.7, .5, .35]), ("keeper", keeper_cases, [.7, .5, .35])):
        cfg = {"id": f"R4_{component}", "variant": "R4", "component": component,
            "step_path": str(files[component].resolve()), "expected_step_sha256": sha(files[component]),
            "loads_are_actual_newtons": True, "load_normalization_N": None,
            "max_dofs": 500000, "far_size_factor": 2.6 if component == "receiver" else 2.2,
            "mesh_algorithm_3d": 10, "mesh_optimizer": "Netgen",
            "averaging_radii_mm": [], "refine_boxes": [dict(box, factor=1.) for box in g["refine_boxes"][component]],
            "mesh_policy": "HXT with the declared h inside CAD-specified local boxes, coarser far field. CAD advisory sub-h factors are not compounded into these separately reviewed refinement levels.",
            "cases": cases}
        path = out / "configs" / f"{component}.json"
        dump(path, cfg)
        plans.append({"part": component, "config": str(path.relative_to(out)), "sizes_mm": sizes, "cases": list(cases)})
    record = {"revision": "R4", "cad_directory": str(cad.resolve()), "geometry": g,
        "geometry_sha256": sha(cad / "geometry.json"), "cad_manifest_sha256": sha(cad / "manifest.json"),
        "source_steps": {k: {"path": str(v.resolve()), "sha256": sha(v)} for k, v in files.items()},
        "solver_sha256": SOLVER_SHA, "runner_sha256": sha(__file__), "material_sha256": sha(engine / "material.json"),
        "configuration_sha256": {p["part"]: sha(out / p["config"]) for p in plans},
        "plans": plans, "python": sys.version, "packages": {name: importlib.metadata.version(name)
            for name in ("numpy", "scipy", "gmsh", "scikit-fem", "pyamg")},
        "payload_mass_kg": PAYLOAD_KG, "payload_2g_N": PAYLOAD_2G_N, "preload_N": PRELOAD_N,
        "servo_mass_kg": g["servo_mass_kg"], "lateral_scope": lateral_scope,
        "physical_qualification": False, "strength_rating_established": False}
    dump(out / "manifest.json", record)
    release_sweep(g, out)
    print(json.dumps({"prepared_solves": sum(len(p["cases"]) * len(p["sizes_mm"]) for p in plans),
                      "lateral_scope": lateral_scope}, indent=2), flush=True)


def release_sweep(g, out):
    loss = g["distal_roof_x"][1] - g["keeper_tip_x"]
    clear = g["lug_x"][1] - g["keeper_tip_x"]
    strokes = sorted(set([0., .5, loss, 2., 3., 4., clear - .3, clear - .1]))
    rows = []
    for mu in (.05, .1, .15, .2, .3):
        for preload in (0., 1., 2., 3.):
            states = []
            for stroke in strokes:
                if stroke >= clear:
                    continue
                state = contact_state(g, stroke)
                demand = mu * state["sliding_normal_force_multiplier"] * (PAYLOAD_2G_N + preload)
                states.append({"stroke_mm": stroke, "sliding_demand_N": demand,
                    "normal_multiplier": state["sliding_normal_force_multiplier"]})
            rows.append({"friction_coefficient": mu, "preload_N": preload,
                "peak_sliding_demand_N": max(s["sliding_demand_N"] for s in states), "states": states})
    dump(out / "release-force-sweep.json", {"model": "Prescribed rigid-contact Coulomb sensitivity",
        "payload_force_N": PAYLOAD_2G_N, "equation": "F = mu * (N_lug + sum(abs(N_guides)))",
        "rows": rows, "friction_measured": False, "actuator_adequacy": "pending_measured_force_profile",
        "exclusions": ["Breakaway friction, contamination, guide misalignment and local wedging",
            "Slot/pin friction, servo gear friction and crank contact reactions", "Assembled contact redistribution",
            "Temperature, speed, voltage drop and motor current limits"],
        "interpretation": "A demand sensitivity only. Stall torque is not counted as usable continuous or guaranteed output force."})
    coupled = []
    a = g["actuation"]
    for mu in (.05, .1, .15, .2, .3):
        for roller_mu in (.05, .15, .3, .4):
            states = []
            for stroke in strokes:
                if stroke >= clear:
                    continue
                state = contact_state(g, stroke)
                angle = math.acos(1 - stroke / a["crank_radius_mm"])
                xp = a["pivot_x_mm"] - a["crank_radius_mm"] * math.cos(angle)
                zp = a["pivot_z_mm"] + a["crank_radius_mm"] * math.sin(angle)
                # The long proximal guide's front/rear surfaces can each carry
                # compression on either the top or bottom of the keeper. This
                # two-station model allows sign changes instead of forcing an
                # impossible tensile guide reaction. Before distal separation,
                # this is an alternate conservative prescribed contact mode;
                # it is not a solution for all three simultaneously active guides.
                answer = coupled_guide_force(PAYLOAD_2G_N + PRELOAD_N, mu, roller_mu,
                    sum(g["proximal_roof_x"]) / 2, sum(g["far_floor_x"]) / 2,
                    state["lug_centroid_x"], xp, zp - (g["keeper_top_z"] + g["keeper_bottom_z"]) / 2,
                    (g["keeper_top_z"] - g["keeper_bottom_z"]) / 2,
                    1 if math.cos(angle) >= 0 else -1)
                answer.update(stroke_mm=stroke, angle_deg=math.degrees(angle), follower_z_mm=zp)
                if answer["required_horizontal_N"] is not None:
                    answer["required_torque_Nmm"] = answer["required_horizontal_N"] * a["crank_radius_mm"] * (
                        math.sin(angle) + roller_mu * abs(math.cos(angle)))
                states.append(answer)
            valid = [s for s in states if s["required_horizontal_N"] is not None]
            coupled.append({"guide_mu": mu, "follower_resistance_coefficient": roller_mu,
                "states": states, "peak_horizontal_N": max(s["required_horizontal_N"] for s in valid) if valid else None,
                "peak_required_torque_Nmm": max(s["required_torque_Nmm"] for s in valid) if valid else None,
                "all_states_have_positive_finite_solution": len(valid) == len(states)})
    dump(out / "crank-force-sensitivity.json", {
        "model": "Piecewise two-station guide equilibrium with follower resistance and moving vertical pull offset",
        "equations": ["V_follower = sign(cos(theta)) * mu_follower * Q", "R_b = A + B*Q; R_a = -P - V_follower - R_b",
            "Q = mu_guide * (P + abs(R_a) + abs(R_b))", "T = Q * r * (sin(theta) + mu_follower * abs(cos(theta)))"],
        "derivation": "Vertical reactions balance force and pitching moment about the proximal station. Opposing top/bottom guide contacts are permitted; each sign combination is solved and retained only if its reactions match that sign. Tangential friction moments at the keeper top/bottom are included.",
        "rows": coupled, "coefficients_measured": False, "actuator_qualified": False,
        "notes": ["The follower is a fixed stainless sliding sleeve, not a rolling bearing. Its slot friction is unmeasured; .05/.15/.30/.40 are explicit sensitivities.",
            "No useful continuous servo force is inferred from stall torque or power-supply current capacity.",
            "Before distal support loss, three possible contacts make load sharing compliance-dependent. The long-guide-only alternate contact mode does not establish actual load sharing.",
            "Bearing clearances, impacts, gear backlash, housing flexure and real friction transitions require the measured force-profile test."]})


def coupled_guide_force(payload, mu, follower_mu, front_x, rear_x, lug_x, follower_x, vertical_offset, half_height, direction=1):
    """Signed two-guide planar equilibrium; no nonlinear contact claim."""
    span = rear_x - front_x
    if span <= 0 or min(payload, mu, follower_mu) < 0:
        raise ValueError("Invalid contact/force parameters")
    a = (front_x - lug_x) * payload / span
    b = (vertical_offset - direction * follower_mu * (follower_x - front_x + mu * half_height)) / span
    c, d = -payload - a, -direction * follower_mu - b
    answers = []
    for sa in (-1, 1):
        for sb in (-1, 1):
            denominator = 1 - mu * (sa * d + sb * b)
            if denominator <= 1e-10:
                continue
            q = mu * (payload + sa * c + sb * a) / denominator
            ra, rb = c + d * q, a + b * q
            if q >= 0 and sa * ra >= -1e-8 and sb * rb >= -1e-8:
                answers.append({"required_horizontal_N": q, "front_vertical_reaction_N": ra,
                    "rear_vertical_reaction_N": rb, "follower_vertical_force_N": direction * follower_mu * q,
                    "feedback_denominator": denominator})
    if not answers:
        return {"required_horizontal_N": None, "reason": "No compatible positive finite solution in this prescribed two-station model"}
    # If a reaction is exactly zero, two branches may give the same answer.
    return max(answers, key=lambda item: item["required_horizontal_N"])


def run(out, part):
    manifest = read(out / "manifest.json")
    if sha(__file__) != manifest["runner_sha256"]:
        raise ValueError("Runner changed after configuration preparation")
    plan = next(p for p in manifest["plans"] if p["part"] == part)
    cfg = out / plan["config"]
    if sha(cfg) != manifest["configuration_sha256"][part]:
        raise ValueError("FEA configuration changed")
    log = out / "logs" / f"{part}.log"
    log.parent.mkdir(exist_ok=True)
    env = os.environ.copy()
    env.update({k: "1" for k in ("OPENBLAS_NUM_THREADS", "OMP_NUM_THREADS", "MKL_NUM_THREADS")})
    command = [sys.executable, str(out / "engine/solver.py"), "--config", str(cfg), "--sizes", *map(str, plan["sizes_mm"])]
    started = time.monotonic()
    with log.open("w") as stream:
        result = subprocess.run(command, stdout=stream, stderr=subprocess.STDOUT, env=env)
    record = {"part": part, "returncode": result.returncode, "elapsed_seconds": time.monotonic() - started,
        "command": command, "solver_sha256": sha(out / "engine/solver.py"), "runner_sha256": sha(__file__),
        "config_sha256": sha(cfg), "log": str(log.relative_to(out))}
    dump(out / "execution" / f"{part}.json", record)
    if result.returncode:
        print(log.read_text()[-10000:])
        raise SystemExit(result.returncode)
    print(json.dumps(record), flush=True)


def result_passes(d):
    return (d["force_balance_error_N"] < 1e-4 and d["moment_balance_error_Nmm"] < 1e-3
        and d["relative_free_residual"] < 1e-7 and abs(d["relative_volume_error"]) < .02
        and d["gauge_reaction_norm_N"] < 1e-4)


def summarize(out):
    manifest = read(out / "manifest.json")
    if sha(__file__) != manifest["runner_sha256"]:
        raise ValueError("Reporting source changed since preparation")
    rows = []
    for plan in manifest["plans"]:
        part = plan["part"]
        for h in plan["sizes_mm"]:
            folder = out / "configs/results" / f"R4_{part}" / f"h{h:g}"
            for case in plan["cases"]:
                d = read(folder / f"{case}.json")
                safe = {k: v for k, v in d.items() if k != "raw_peak_element_centroid_mm"
                        and not any(s in k for s in ("strength_threshold", "failure_index", "regularized"))}
                safe["physical_qualification"] = False
                safe["numerical_checks_passed"] = result_passes(d)
                destination = out / "cases" / part / f"{case}-h{h:g}.json"
                dump(destination, safe)
                row = {k: d[k] for k in ("elements", "dofs", "max_displacement_mm", "raw_peak_tensile_MPa",
                    "raw_peak_compressive_MPa", "raw_peak_vm_MPa", "force_balance_error_N", "moment_balance_error_Nmm",
                    "relative_free_residual", "gauge_reaction_norm_N", "relative_volume_error", "step_sha256")}
                row.update(part=part, case=case, mesh_size_mm=h, result=str(destination.relative_to(out)),
                           numerical_checks_passed=result_passes(d))
                rows.append(row)
    convergence = []
    for part, case in sorted({(r["part"], r["case"]) for r in rows}):
        series = sorted([r for r in rows if r["part"] == part and r["case"] == case], key=lambda r: -r["mesh_size_mm"])
        a, b = series[-2:]
        changes = {key: abs(b[key] - a[key]) / max(abs(b[key]), 1e-12) * 100
                   for key in ("max_displacement_mm", "raw_peak_tensile_MPa", "raw_peak_compressive_MPa")}
        convergence.append({"part": part, "case": case, "mesh_levels": len(series),
            "finest_pair_change_percent": changes, "displacement_under_5_percent": changes["max_displacement_mm"] < 5,
            "raw_tension_under_10_percent": changes["raw_peak_tensile_MPa"] < 10})
    summary = {"revision": "R4", "status": "numerical_checks_passed" if all(r["numerical_checks_passed"] for r in rows) else "numerical_failure",
        "physical_qualification": False, "strength_rating_established": False, "case_solves": len(rows),
        "payload_mass_kg": PAYLOAD_KG, "payload_2g_N": PAYLOAD_2G_N, "preload_N": PRELOAD_N,
        "servo_mass_kg": manifest["servo_mass_kg"], "material": read(out / "engine/material.json"),
        "cases": rows, "mesh_convergence": convergence, "lateral_scope": manifest["lateral_scope"],
        "limits": ["Prescribed component tractions and rigid fixtures, not an assembled nonlinear contact solve.",
            "Isotropic PLA proxy; no measured PAHT-CF directional stiffness, strength, creep or fatigue data.",
            "Raw stress peaks may be singular or mesh-sensitive; no allowable or payload rating is assigned.",
            "Servo shaft/horn gear capacity, fasteners, horn slot contact and gearbox failure are not solved.",
            "The 12 N axial coupling case is an imposed blocked-tip fixture sensitivity, not guaranteed available actuator force.",
            "Host compliance, fastener preload/slip/pull-through, vibration and combined real contact redistribution remain physical checks."],
        "manifest": "manifest.json", "release_force_sweep": "release-force-sweep.json"}
    dump(out / "summary.json", summary)
    write_report(out, summary)
    plots(out, summary)
    print(json.dumps({"status": summary["status"], "case_solves": len(rows)}), flush=True)
    if summary["status"] != "numerical_checks_passed":
        raise SystemExit(2)


def write_report(out, summary):
    lines = ["# R4 actual-STEP simulation record", "",
        f"**{summary['case_solves']} component/mesh solves; {summary['status']}.**", "",
        "The numerical result does not establish a payload rating or physical release qualification.", "",
        "## Inputs and fixtures", "",
        f"Payload: {PAYLOAD_KG:g} kg, 2 g equivalent = {PAYLOAD_2G_N:.6f} N. Pad preload sensitivity: {PRELOAD_N:g} N total. "
        f"Purchased servo mass represented: {summary['servo_mass_kg'] * 1000:g} g; horn and connector allowances are reported in the BOM.", "",
        "The receiver is fixed at four real host-mount annuli. The adapter is fixed at real payload-bolt annuli. "
        "Vertical keeper cases use six rigid-motion gauge DOFs and must have negligible reaction. The separate axial case "
        "fixes the tip end as an explicit blocked-keeper fixture and applies 12 N on its real follower slot wall.", "",
        "All parts use the existing isotropic solid PLA comparison proxy: E = 2200 MPa and ν = 0.35. "
        "This is not a measured PAHT-CF material model. Any strength thresholds retained inside the legacy solver "
        "are excluded from the curated results because they are not qualified material allowables.", "",
        summary["lateral_scope"], "", "## Finest mesh results", "",
        "| Part / case | h (mm) | Displacement (mm) | Raw tension (MPa) | Raw compression (MPa) |",
        "| --- | ---: | ---: | ---: | ---: |"]
    for part, case in sorted({(r["part"], r["case"]) for r in summary["cases"]}):
        r = min([r for r in summary["cases"] if r["part"] == part and r["case"] == case], key=lambda r: r["mesh_size_mm"])
        lines.append(f"| {part} / {case} | {r['mesh_size_mm']:g} | {r['max_displacement_mm']:.5f} | {r['raw_peak_tensile_MPa']:.3f} | {r['raw_peak_compressive_MPa']:.3f} |")
    lines += ["", "## Mesh sizes and model size", "",
              "The local h target applies inside the CAD-provided refinement boxes. The far field is coarser by factors "
              "of 2.6 for the receiver and 2.2 for the adapter/keeper. HXT generates linear boundary geometry; "
              "displacements use quadratic tetrahedral shape functions. Element and DOF counts are measured from each actual mesh.", "",
              "| Part | Local h (mm) | Tetrahedra | Displacement DOFs |",
              "| --- | ---: | ---: | ---: |"]
    for part, h in sorted({(r["part"], r["mesh_size_mm"]) for r in summary["cases"]}):
        r = next(r for r in summary["cases"] if r["part"] == part and r["mesh_size_mm"] == h)
        lines.append(f"| {part} | {h:g} | {r['elements']:,} | {r['dofs']:,} |")
    lines += ["", "## Refinement sensitivity", "", "| Part / case | Displacement change | Raw tension change | Raw compression change |",
              "| --- | ---: | ---: | ---: |"]
    for r in summary["mesh_convergence"]:
        d = r["finest_pair_change_percent"]
        lines.append(f"| {r['part']} / {r['case']} | {d['max_displacement_mm']:.2f}% | {d['raw_peak_tensile_MPa']:.2f}% | {d['raw_peak_compressive_MPa']:.2f}% |")
    lines += ["", "Changes compare the finest two meshes. Converged displacement does not imply converged local stress. "
        "The earlier 0.4 mm averaging neighborhood was undersampled and supplied no reliable strength criterion; "
        "this revision exposes raw stresses without using smoothing as safety credit.", "",
        "Displacement figures show the real undeformed boundary triangles, colored by the mean corner-node displacement "
        "magnitude of each triangle. The table reports maxima over all quadratic nodes. Keeper values from the balanced "
        "traction cases are relative to their rigid-motion gauges; separate component maxima cannot be added to claim an assembled clearance.",
        "", "## Numerical gates", "",
        "Every solve must satisfy force error < 1e−4 N, moment error < 1e−3 N·mm, relative free residual < 1e−7, "
        "CAD/mesh volume error < 2%, and rigid-motion gauge reaction < 1e−4 N. Input STEP, configuration, material "
        "and solver hashes must identify the current run; archived evidence cannot satisfy the gate.", "", "## Remaining physical evidence", ""]
    lines += [f"- {item}" for item in summary["limits"]]
    lines += ["", "## Coupled crank/guide demand", "",
        "The fixed sleeve slides in its slot. The following values include sleeve resistance, the moving vertical force offset, "
        "and signed reactions at the two long-guide stations. All friction coefficients are assumptions, and no servo force "
        "margin is declared from these calculated demands.", "",
        "| Guide coefficient | Sleeve coefficient | Peak horizontal demand (N) | Peak shaft torque (N·mm) |",
        "| ---: | ---: | ---: | ---: |"]
    for row in read(out / "crank-force-sensitivity.json")["rows"]:
        if (row["guide_mu"], row["follower_resistance_coefficient"]) in ((.05, .05), (.15, .15), (.3, .3), (.3, .4)):
            lines.append(f"| {row['guide_mu']:.2f} | {row['follower_resistance_coefficient']:.2f} | "
                         f"{row['peak_horizontal_N']:.3f} | {row['peak_required_torque_Nmm']:.3f} |")
    lines += ["", "The nominal operating command is calibrated below the full geometric stop. Pin-slot free play, print dimensions "
              "and loaded angle error must meet the measured interface acceptance table; the CAD animation is not position feedback."]
    lines += ["", "The companion bench plan and blank CSV require measured force margin over the whole withdrawal, repeated 2 g releases, "
              "restrained static holds, dimensional inspection and power-loss observations. No physical measurements were generated by this analysis.", ""]
    (out / "report.md").write_text("\n".join(lines))


def plots(out, summary):
    os.environ.setdefault("MPLCONFIGDIR", "/tmp/n2-r4-matplotlib")
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    folder = out / "plots"
    folder.mkdir(exist_ok=True)
    fig, axes = plt.subplots(3, 2, figsize=(12, 10), layout="constrained")
    for pair, part in zip(axes, ("receiver", "adapter", "keeper")):
        for case in sorted({r["case"] for r in summary["cases"] if r["part"] == part}):
            rows = sorted([r for r in summary["cases"] if r["part"] == part and r["case"] == case], key=lambda r: r["mesh_size_mm"])
            for ax, field in zip(pair, ("max_displacement_mm", "raw_peak_tensile_MPa")):
                ax.plot([r["mesh_size_mm"] for r in rows], [r[field] for r in rows], "o-", label=case, markersize=3)
        for ax, title in zip(pair, ("Maximum displacement (mm)", "Raw peak tensile stress (MPa)")):
            ax.set(xlabel="Local mesh h (mm) — smaller is finer", ylabel=title, title=part.capitalize())
            ax.grid(alpha=.2)
        if pair[1].lines:
            pair[1].legend(fontsize=7, loc="upper left", bbox_to_anchor=(1, 1))
    fig.suptitle("R4 mesh refinement — raw local peaks may remain mesh-sensitive")
    fig.savefig(folder / "mesh-refinement.png", dpi=160)
    plt.close(fig)
    sweep = read(out / "release-force-sweep.json")
    fig, ax = plt.subplots(figsize=(8, 4.5), layout="constrained")
    for row in sweep["rows"]:
        if row["preload_N"] == PRELOAD_N:
            ax.plot([s["stroke_mm"] for s in row["states"]], [s["sliding_demand_N"] for s in row["states"]],
                    "o-", label=f"μ = {row['friction_coefficient']:.2f}")
    ax.set(xlabel="Keeper withdrawal (mm)", ylabel="Prescribed-contact sliding demand (N)",
           title="2 g equivalent, 3 N pad preload; no measured actuator force claim")
    ax.grid(alpha=.2)
    ax.legend()
    fig.savefig(folder / "release-demand.png", dpi=160)
    plt.close(fig)
    coupled = read(out / "crank-force-sensitivity.json")
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.5), layout="constrained")
    for row in coupled["rows"]:
        if (row["guide_mu"], row["follower_resistance_coefficient"]) not in ((.05, .05), (.15, .15), (.3, .3), (.3, .4)):
            continue
        states = [s for s in row["states"] if s["required_horizontal_N"] is not None]
        label = f"guide μ {row['guide_mu']:.2f} / sleeve μ {row['follower_resistance_coefficient']:.2f}"
        for ax, field in zip(axes, ("required_horizontal_N", "required_torque_Nmm")):
            ax.plot([s["stroke_mm"] for s in states], [s[field] for s in states], "o-", label=label)
    axes[0].set(ylabel="Required horizontal follower force (N)")
    axes[1].set(ylabel="Required shaft torque (N·mm)")
    for ax in axes:
        ax.set(xlabel="Loaded keeper withdrawal (mm)")
        ax.grid(alpha=.2)
    axes[0].legend(fontsize=7)
    fig.suptitle("Coupled crank / guide / sliding-sleeve sensitivity; coefficients unmeasured")
    fig.savefig(folder / "crank-demand.png", dpi=160)
    plt.close(fig)
    # Real boundary triangles and solved nodal displacement, on undeformed
    # geometry. No invented deformation or interpolation across CAD voids.
    import numpy as np
    from mpl_toolkits.mplot3d.art3d import Poly3DCollection
    from matplotlib.colors import Normalize
    for part, wanted in (("receiver", "retained_2g_preload"), ("adapter", "stroke_4p70mm"),
                         ("keeper", "coupling_axial_12N")):
        candidates = [r for r in summary["cases"] if r["part"] == part and r["case"] == wanted]
        if not candidates:
            continue
        row = min(candidates, key=lambda r: r["mesh_size_mm"])
        fields = out / "configs/results" / f"R4_{part}" / f"h{row['mesh_size_mm']:g}" / f"{wanted}_fields.npz"
        with np.load(fields) as data:
            vertices, tetra = data["points_mm"], data["tet4"]
            quadratic, displacement = data["quadratic_points_mm"], data["displacement_mm"]
        if not np.allclose(vertices, quadratic[:len(vertices)], rtol=0, atol=1e-9):
            raise ValueError("Vertex-to-quadratic-node ordering changed; review field plot mapping")
        faces = np.concatenate([tetra[:, local] for local in ([0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3])])
        _, indices, counts = np.unique(np.sort(faces, axis=1), axis=0, return_index=True, return_counts=True)
        surface = faces[indices[counts == 1]]
        magnitude = np.linalg.norm(displacement[:len(vertices)], axis=1)
        values = magnitude[surface].mean(axis=1)
        norm = Normalize(vmin=0, vmax=max(float(values.max()), 1e-12))
        fig = plt.figure(figsize=(9, 5.8))
        ax = fig.add_axes([.01, .10, .76, .78], projection="3d")
        collection = Poly3DCollection(vertices[surface], facecolors=plt.cm.viridis(norm(values)),
            edgecolors="none", linewidth=0, alpha=1)
        ax.add_collection3d(collection)
        low, high = vertices.min(axis=0), vertices.max(axis=0)
        ax.set(xlim=(low[0], high[0]), ylim=(low[1], high[1]), zlim=(low[2], high[2]),
               xlabel="X (mm)", ylabel="Y (mm)", zlabel="Z (mm)")
        ax.set_box_aspect(np.maximum(high - low, .1))
        ax.view_init(elev=24, azim=-65)
        ax.tick_params(labelsize=8, pad=1)
        cax = fig.add_axes([.86, .22, .028, .55])
        colorbar = fig.colorbar(plt.cm.ScalarMappable(norm=norm, cmap="viridis"), cax=cax)
        colorbar.set_label("Surface displacement magnitude (mm)", fontsize=9, labelpad=10)
        colorbar.ax.tick_params(labelsize=8)
        ax.set_title(f"R4 {part} / {wanted}\nUndeformed mesh; h = {row['mesh_size_mm']:g} mm", fontsize=10)
        fig.savefig(folder / f"{part}-displacement.png", dpi=160, bbox_inches="tight")
        plt.close(fig)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cad", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--prepare", action="store_true")
    parser.add_argument("--run", choices=("receiver", "adapter", "keeper"))
    parser.add_argument("--report", action="store_true")
    args = parser.parse_args()
    if args.prepare:
        if not args.cad:
            parser.error("--cad is required for preparation")
        prepare(args.cad.resolve(), args.output.resolve())
    if args.run:
        run(args.output.resolve(), args.run)
    if args.report:
        summarize(args.output.resolve())


if __name__ == "__main__":
    main()
