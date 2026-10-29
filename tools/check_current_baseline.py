#!/usr/bin/env python3
"""Check the current P14 metadata and published analysis references, read-only.

Uses only the Python standard library. This is a consistency check, not a CAD
rebuild, FEA run, material qualification or physical test. It does not require
the large STEP/STL/field files in a partial checkout; file identities recorded
in the manifest and viewer must still agree.

Run from any directory: python tools/check_current_baseline.py
Use --root PATH to check a separate repository snapshot.
"""
import argparse
import ast
import json
import math
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CAD = 'project/cad/N2'
KEEPER = 'project/analysis/p14/fea/keeper/results/N2_keeper/run_summary.json'
CATALOG_KEYS = ('id', 'name', 'kind', 'step', 'stl', 'print_stl',
                'volume_mm3', 'bbox', 'print_note')
VIEWER_META = ('project_revision', 'geometry_revision', 'prototype_material',
               'manufacturing', 'evidence', 'current_requirements', 'current_analysis', 'notes')


class Checks:
    def __init__(self):
        self.errors = []

    def require(self, condition, message):
        if not condition:
            self.errors.append(message)

    def equal(self, actual, expected, label):
        self.require(actual == expected, f'{label}: expected {expected!r}, got {actual!r}')

    def near(self, actual, expected, label, tolerance=1e-8):
        valid = (isinstance(actual, (int, float)) and not isinstance(actual, bool)
                 and math.isfinite(actual) and abs(actual - expected) <= tolerance)
        self.require(valid, f'{label}: expected {expected:g} (±{tolerance:g}), got {actual!r}')


def read_json(root, relative):
    path = (root / relative).resolve()
    if not path.is_relative_to(root.resolve()):
        raise ValueError(f'File reference leaves repository: {relative}')
    return json.loads(path.read_text())


def keyed(records, fields):
    result = {tuple(record[field] for field in fields): record for record in records}
    if len(result) != len(records):
        raise ValueError(f'Duplicate records keyed by {fields}')
    return result


def check(root):
    c = Checks()
    try:
        active = read_json(root, f'{CAD}/active_metadata.json')
        manifest = read_json(root, f'{CAD}/manifest.json')
        viewer = read_json(root, f'{CAD}/viewer.json')
        catalog = read_json(root, 'project/cad/parts_catalog.json')
        project = read_json(root, 'project/project.json')
        web = read_json(root, 'web/public/fea/index.json')
        req, analysis = active['current_requirements'], active['current_analysis']
        summary = read_json(root, analysis['source'])
        keeper = read_json(root, KEEPER)

        # These are the selected baseline, not automatically transferable to a
        # new revision, material, required load or parameter study.
        c.equal(active['id'], 'N2', 'active design')
        c.equal(active['project_revision'], 'P14', 'active project revision')
        c.equal(active['geometry_revision'], 'P14', 'active geometry revision')
        c.equal(active['prototype_material'], 'Bambu PAHT-CF', 'prototype material')
        c.equal(project['active_variant'], active['id'], 'project active design')
        c.equal(project['revision'], active['project_revision'], 'project revision')
        c.equal(project['current_metadata'], 'cad/N2/active_metadata.json', 'project metadata reference')
        c.equal(req['source'], 'docs/requirements.md', 'requirements source')
        c.require((root / req['source']).is_file(), 'Requirements source is missing')
        c.near(req['payload_mass_kg'], 0.454, 'carried mass')
        c.near(req['load_factor_g'], 2, 'flight load factor')
        c.near(req['safety_factor'], 2, 'design safety factor')
        c.equal(req['load_direction'], '+Z straight pull', 'required direction')
        c.near(req['design_load_N'], round(req['payload_mass_kg'] * 9.81 * req['load_factor_g'], 1),
               'design load from carried mass and flight factor')
        c.near(req['qualification_load_N'], round(req['design_load_N'] * req['safety_factor'], 1),
               'qualification target from design load and safety factor')
        c.require(analysis['working_load_rating_N'] is None, 'A working-load rating is not established by this baseline')
        c.require(analysis['physical_tests_performed'] is False, 'Physical-evidence status changed; review and revise this baseline gate')
        c.equal(analysis['source'], 'project/analysis/p14/fea/B1.4_O0.6/summary.json', 'current analysis source')
        scale = analysis['material_scaling']
        c.equal(scale, {'baseline': 'PLA', 'target': 'PAHT-CF', 'numerator': 47, 'denominator': 31},
                'material scaling')
        factor = scale['numerator'] / scale['denominator']
        c.equal(summary['params']['material'], 'paht-cf', 'stored summary material')
        c.near(summary['params']['sf'], req['safety_factor'], 'stored summary safety factor')
        c.equal(summary['params']['prox'], 'bridge', 'stored summary geometry')

        # Compare current claims to the committed result records. Summary
        # forces are rounded independently to 0.01 N; the ratio comparison
        # allows only the propagation of those display-rounding intervals.
        rows = keyed(summary['rows'], ('part', 'case', 'dir'))
        for key, row in rows.items():
            c.near(row['fail_N'], row['PLA_fail_N'] * factor, f'{key} material-scaled screen',
                   tolerance=0.005 * factor + 0.005 + 1e-8)
            c.near(row['rating_N'], row['fail_N'] / req['safety_factor'], f'{key} arithmetic allowance', tolerance=0.011)
        adapter = rows[('adapter', 'adapter', 'Z')]
        engaged = min(adapter['fail_N'], rows[('receiver', 'centered', 'Z')]['fail_N'])
        distal_lost = min(adapter['fail_N'], rows[('receiver', 'distal_ineffective', 'Z')]['fail_N'])
        c.near(engaged, adapter['fail_N'], 'retained-state governing component')
        c.near(distal_lost, adapter['fail_N'], 'distal-ineffective governing component')
        c.equal(analysis['governing_part'], 'adapter_straight', 'reported governing component')
        c.near(analysis['stress_screen_N'], min(engaged, distal_lost), 'current stress screen')
        c.near(analysis['sf2_allowance_N'], analysis['stress_screen_N'] / req['safety_factor'], 'current screen/SF')
        c.near(summary['rating_distal_engaged']['Z'], engaged / req['safety_factor'], 'stored retained allowance', tolerance=0.011)
        c.near(summary['rating_straight_distal_lost'], distal_lost / req['safety_factor'], 'stored distal-lost allowance', tolerance=0.011)
        keeper_rows = keyed(keeper['records'], ('case',))
        for key, row in keeper_rows.items():
            c.require(row['raw_strength_threshold_N'] * factor >= analysis['stress_screen_N'],
                      f'Keeper {key} now governs; update the claimed current screen')

        # A metadata-only correction must remain internally consistent across
        # the assembly, viewer, catalog and future default-generator exports.
        for key, value in active.items():
            c.equal(manifest.get(key), value, f'manifest.{key}')
        for key in VIEWER_META:
            c.equal(viewer.get(key), active[key], f'viewer.{key}')
        for label, record in (('manifest', manifest), ('viewer', viewer)):
            c.equal(record['revision'], active['geometry_revision'], f'{label} revision')
            c.equal(record['units'], 'mm', f'{label} units')
        c.equal(viewer['bounds'], manifest['bounds'], 'viewer assembly bounds')
        c.equal(catalog['variant'], active['id'], 'catalog variant')
        c.equal(catalog['geometry_revision'], active['geometry_revision'], 'catalog revision')
        c.equal(catalog['bounds_mm'], manifest['bounds']['size'], 'catalog assembly bounds')
        parts = keyed(manifest['parts'], ('id',))
        meshes = keyed(viewer['parts'], ('id',))
        catalog_parts = keyed(catalog['parts'], ('id',))
        c.equal(set(parts), set(meshes), 'viewer part IDs')
        c.equal(set(parts), set(catalog_parts), 'catalog part IDs')
        c.equal(len(parts), manifest['part_count']['cad_objects'], 'assembly object count')
        printed = sum('print_stl' in p for p in parts.values())
        c.equal(printed, active['manufacturing']['printed_parts'], 'printed part count')
        c.equal(printed, 4, 'P14 printed part count')
        for key, part in parts.items():
            mesh, entry = meshes[key], catalog_parts[key]
            c.require(bool(re.fullmatch(r'[0-9a-f]{64}', part['step_sha256'])), f'{key} malformed STEP identity')
            c.equal(mesh['sourceSha256'], part['step_sha256'], f'{key} viewer STEP identity')
            c.equal(mesh['sourceStep'], part['step'], f'{key} viewer STEP filename')
            for field in ('name', 'kind', 'step', 'stl', 'print_stl', 'print_note'):
                c.equal(mesh.get(field), part.get(field), f'{key} viewer {field}')
            c.equal(entry, {k: part[k] for k in CATALOG_KEYS if k in part}, f'{key} catalog record')
        parameters = manifest['geometry_parameters']
        c.near(parameters['distal_overlap_mm'], summary['geometry']['overlap'], 'geometry overlap')
        c.near(manifest['dimensions']['lug_thickness_mm'], summary['geometry']['lug_t'], 'geometry lug thickness')
        c.near(manifest['dimensions']['retained_keeper_tip_x_mm'], summary['geometry']['tip'], 'geometry retained tip')
        names = {'DISTAL_OVERLAP': 'distal_overlap_mm', 'ROOF_EXTRA': 'roof_extra_mm',
                 'ROOF_FILLET': 'roof_fillet_mm', 'PROX_BRIDGE_END': 'prox_bridge_end_mm'}
        found = set()
        for node in ast.parse((root / 'project/cad/build_n2.py').read_text()).body:
            if isinstance(node, ast.Assign) and len(node.targets) == 1 and isinstance(node.targets[0], ast.Name):
                name = node.targets[0].id
                if name in names:
                    default = ast.literal_eval(node.value.args[0].args[1])
                    c.near(default, parameters[names[name]], f'{name} generator default')
                    found.add(name)
        c.equal(found, set(names), 'recognized generator parameters')

        # All published viewer numbers are tied to the committed source cases,
        # including the separate keeper solve and off-axis context cases.
        c.equal(web['revision'], active['geometry_revision'], 'web revision')
        c.equal(web['material'], summary['params']['material'], 'web material')
        c.near(web['z_tds_MPa'], scale['numerator'], 'web material factor numerator')
        c.near(web['sf'], req['safety_factor'], 'web safety factor')
        c.near(web['design_N'], req['design_load_N'], 'web design load')
        c.near(web['required_fail_N'], req['qualification_load_N'], 'web qualification target')
        web_cases = keyed(web['cases'], ('part', 'case'))
        mapping = {
            ('N2_adapter', 'Z'): ('adapter', 'adapter', 'Z'),
            ('N2_receiver', 'Z'): ('receiver', 'centered', 'Z'),
            ('N2_receiver', 'Z_distal_lost'): ('receiver', 'distal_ineffective', 'Z'),
            ('N2_adapter', 'XZ90'): ('adapter', 'adapter', 'XZ90'),
            ('N2_receiver', 'XZ90'): ('receiver', 'centered', 'XZ90'),
        }
        keeper_mapping = {('N2_keeper', 'Z'): 'centered', ('N2_keeper', 'Z_distal_lost'): 'distal_ineffective'}
        c.equal(set(web_cases), set(mapping) | set(keeper_mapping), 'published viewer case set')
        for key, record in web_cases.items():
            if key in mapping:
                source = rows[mapping[key]]
                value = source['fail_N']
                h = summary['params']['h_adapter' if key[0] == 'N2_adapter' else 'h']
            else:
                source = keeper_rows[(keeper_mapping[key],)]
                value = round(source['raw_strength_threshold_N'] * factor, 2)
                h = source['h_mm']
                c.equal(record['elements'], source['elements'], f'{key} web element count')
            c.near(record['fail_N'], value, f'{key} web stress screen')
            c.near(record['rating_sf2_N'], record['fail_N'] / 2, f'{key} web screen/SF2', tolerance=0.011)
            c.near(record['h_mm'], h, f'{key} web mesh size')
            c.equal(record['in_scope'], key[1] in ('Z', 'Z_distal_lost'), f'{key} requirement scope')
            c.require(record['source'].startswith(key[0] + '/') and record['source'].endswith('_fields.npz'),
                      f'{key} web source filename is inconsistent')
        semantics = web['field_semantics']
        c.require('stress-screen' in semantics['fail_N'].lower() and 'not demonstrated' in semantics['fail_N'].lower(),
                  'web fail_N must be described as an unvalidated stress-screen crossing')
        c.require('not an assigned working-load rating' in semantics['rating_sf2_N'].lower(),
                  'web rating_sf2_N must not imply an assigned working-load rating')
        c.require('qualification target' in semantics['required_fail_N'].lower(),
                  'web required_fail_N must be labeled as a qualification target')
        for phrase in ('ideal continuous full backing', 'not direct anisotropic', 'no working-load rating assigned'):
            c.require(phrase in web['note'].lower(), f'web evidence note is missing: {phrase}')
    except (OSError, ValueError, KeyError, TypeError, AttributeError, IndexError, ZeroDivisionError) as error:
        c.errors.append(f'Invalid or incomplete baseline input: {error}')
    return c.errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=ROOT, help='Repository snapshot root (default: this script\'s repository).')
    errors = check(parser.parse_args().root.resolve())
    if errors:
        for error in errors:
            print('FAIL:', error)
        return 1
    print('PASS: P14 metadata, carried-load arithmetic, source stress screens and viewer semantics agree.')
    print('Consistency only: no CAD rebuild, FEA run or physical qualification performed.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
