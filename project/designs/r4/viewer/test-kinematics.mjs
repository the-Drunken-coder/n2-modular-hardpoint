import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { kinematicState } from './kinematics.js';

const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== '--assembly')) throw new Error('Usage: node test-kinematics.mjs [--assembly path/to/assembly.json]');
const model = JSON.parse(readFileSync(args[1] || new URL('../manufacturing/assembly.json', import.meta.url)));
const joint = model.kinematics;
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} differs from ${b}`);
near(kinematicState(joint, 0).stroke_mm, 0);
near(kinematicState(joint, 1).stroke_mm, joint.operating_travel_mm);
near(kinematicState(joint, 1, 'envelope').stroke_mm, joint.travel_mm);
// At a quarter-turn, the pin is exactly above the shaft and the slider has
// advanced one crank radius. A linear slider interpolation fails this check.
const quarter = (90 - joint.angle_range_deg[0]) / (joint.operating_angle_deg - joint.angle_range_deg[0]);
const q = kinematicState(joint, quarter);
near(q.pin_x_mm, joint.pivot[0]);
near(q.pin_z_mm, joint.pivot[2] + joint.crank_radius_mm);
near(q.stroke_mm, joint.crank_radius_mm);
const retainedPin = kinematicState(joint, 0).pin_x_mm;
for (const mode of ['operating', 'envelope']) {
  for (let i = 0; i <= 100; i++) {
    const pose = kinematicState(joint, i / 100, mode);
    near(pose.pin_x_mm - retainedPin, pose.stroke_mm);
  }
}
assert.throws(() => kinematicState({ ...joint, crank_radius_mm: undefined }, .5), /metadata/);
assert.throws(() => kinematicState({ ...joint, travel_mm: joint.travel_mm + 1 }, .5), /disagree/);
assert.throws(() => kinematicState({ ...joint, operating_angle_deg: undefined }, .5), /metadata/);
assert.throws(() => kinematicState({ ...joint, operating_travel_mm: joint.operating_travel_mm + .1 }, .5), /disagree/);
assert.ok(joint.travel_mm - kinematicState(joint, 1).stroke_mm >= .5, 'Operating animation must preserve the specified open-stop margin.');
console.log('PASS: R4 viewer crank/pin/keeper coincidence across 101 operating and 101 envelope poses; missing and inconsistent CAD metadata rejected.');
