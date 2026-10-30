import assert from 'node:assert/strict';
import * as THREE from './vendor/three.module.js';
import {SoftwareRenderer} from './software-renderer.js';

// No browser or GPU is required to verify the fallback's pixel occlusion.
const context={createImageData:(w,h)=>({width:w,height:h,data:new Uint8ClampedArray(w*h*4)}),putImageData(image){this.image=image;}};
const canvas={dataset:{},width:0,height:0,getContext:()=>context};
const renderer=new SoftwareRenderer({canvas});renderer.setSize(100,100);
const triangle=(depths,color,opacity=1)=>({points:new Float64Array([10,10,90,10,50,90]),depths:new Float64Array(depths),color,opacity,count:3});
const slope=triangle([-.5,.8,.8],'rgb(0,0,255)'),flat=triangle([.4,.4,.4],'rgb(255,0,0)');
const pixel=(x,y)=>Array.from(renderer._image.data.slice((y*100+x)*4,(y*100+x)*4+4));
function reset(){renderer._depth.fill(Infinity);renderer._image.data.fill(0);}
function draw(t,transparent=false){renderer._triangle(t,0,1,2,transparent);}
reset();draw(slope);draw(flat);
assert.deepEqual(pixel(20,20),[0,0,255,255],'Near portion of tilted face must occlude the flat face.');
assert.deepEqual(pixel(50,65),[255,0,0,255],'Flat face must occlude the far portion of the same tilted triangle.');
const first=Uint8ClampedArray.from(renderer._image.data);
reset();draw(flat);draw(slope);
assert.deepEqual(renderer._image.data,first,'Opaque visibility must be independent of triangle submission order.');
draw(triangle([.9,.9,.9],'rgb(0,255,0)',.5),true);
assert.deepEqual(pixel(20,20),[0,0,255,255],'A ghost surface behind an opaque face must remain occluded.');
draw(triangle([-.9,-.9,-.9],'rgb(0,255,0)',.5),true);
assert.deepEqual(pixel(20,20),[0,128,128,255],'A ghost surface in front must blend over the opaque face.');

// Exercise the complete Three.js projection/scene path with a solid casing
// containing a red mechanism. An internal triangle cannot show through it.
const scene=new THREE.Scene();
const outer=new THREE.Mesh(new THREE.BoxGeometry(4,4,4),new THREE.MeshBasicMaterial({color:0x0000ff,side:THREE.DoubleSide}));
const inner=new THREE.Mesh(new THREE.BoxGeometry(3.6,3.6,3.6),new THREE.MeshBasicMaterial({color:0xff0000,side:THREE.DoubleSide}));
scene.add(outer,inner);
const camera=new THREE.PerspectiveCamera(50,1,.1,100);camera.position.set(5,3,7);camera.lookAt(0,0,0);camera.updateProjectionMatrix();
renderer.invalidate();renderer.render(scene,camera);
let covered=0,red=0;
for(let i=0;i<context.image.data.length;i+=4){const p=context.image.data;if(p[i+3]){covered++;if(p[i]>p[i+2])red++;}}
assert.ok(covered>1000,'The outer box must be visible.');assert.equal(red,0,'No red internal box fragment may bleed through the solid casing.');
console.log('PASS: opaque per-pixel occlusion independent of mean triangle depth/order; ghost depth test/blending; complete enclosed-box scene hides internal geometry.');
