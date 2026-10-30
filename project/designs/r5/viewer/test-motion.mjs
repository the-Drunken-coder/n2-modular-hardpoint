import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {kinematicState} from './kinematics.js';
import {installationState} from './installation.js';

const model=JSON.parse(readFileSync(new URL('../manufacturing/assembly.json',import.meta.url)));
const joint=model.kinematics, near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6,`${a} differs from ${b}`);
const retained=kinematicState(joint,0),released=kinematicState(joint,1);
near(retained.stroke_mm,0);near(released.stroke_mm,joint.operating_travel_mm);
assert.ok(released.stroke_mm>joint.release_clearance_mm,'Keeper must clear the lug before departure.');
const radius=joint.radius_mm??joint.crank_radius_mm;
const fraction=(90-joint.angle_range_deg[0])/(joint.operating_angle_deg-joint.angle_range_deg[0]);
const overhead=kinematicState(joint,fraction);near(overhead.pin_x_mm,joint.pivot[0]);near(overhead.pin_z_mm,joint.pivot[2]+radius);
for(let i=0;i<=100;i++) {const pose=kinematicState(joint,i/100);near(pose.pin_x_mm-retained.pin_x_mm,pose.stroke_mm);}
assert.throws(()=>kinematicState({...joint,operating_travel_mm:joint.operating_travel_mm+.1},.5),/disagree/);
assert.throws(()=>kinematicState({...joint,angle_range_deg:undefined},.5),/metadata/);
const opened=installationState(1),inserted=installationState(2),fastened=installationState(3),closed=installationState(4);
near(opened.module_fraction,1);near(opened.hatch_fraction,1);near(opened.screw_fraction,1);
near(inserted.module_fraction,0);near(inserted.hatch_fraction,1);near(inserted.screw_fraction,1);
near(fastened.module_fraction,0);near(fastened.hatch_fraction,1);near(fastened.screw_fraction,0);
near(closed.module_fraction,0);near(closed.hatch_fraction,0);near(closed.screw_fraction,0);
for(let i=100;i<=300;i++)near(installationState(i/100).hatch_fraction,1);
for(let i=0;i<=400;i++){const s=installationState(i/100);if(s.screw_fraction<1)near(s.module_fraction,0);if(s.phase>3&&s.hatch_fraction<1)near(s.screw_fraction,0);}
assert.throws(()=>installationState(NaN),/finite/);
console.log('PASS: CAD crank/pin/keeper coincidence at 101 poses; endpoint consistency; hatch stays open during insertion/fastening; screws fasten only after insertion; closure follows fastening.');
