import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { SoftwareRenderer } from './software-renderer.js';
import { kinematicState } from './kinematics.js';
import { installationState } from './installation.js';

const $ = id => document.getElementById(id);
const modelBase = new URL('../manufacturing/', import.meta.url);
const state = {model:null,scene:'module',casing:'solid',wing:'solid',explode:0,phase:0,installation:0,selected:null,hardware:true,labels:true,section:false,payload:true,playing:null};
const scene = new THREE.Scene(), objects = new Map(), meshes = [];
const camera = new THREE.PerspectiveCamera(34,1,.1,5000); camera.up.set(0,0,1);
const stage = $('stage');
const clip = new THREE.Plane(new THREE.Vector3(0,-1,0),27);
let renderer,controls,extent=100,target=new THREE.Vector3(42.8,27,10),lastFrame=0,startTime=0,startPhase=0,annotations=[],grid;
const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = (v,n=1) => Number.isFinite(v)?v.toFixed(n):'—';
const url = path => new URL(path,modelBase).href;
const isPrint = p => ['print','printed'].includes(p.kind);
const role = p => typeof p.installation==='string'?p.installation:p.installation?.role || p.installation_role || (isPayload(p)?'payload':isWing(p)?'wing':'module');
function category(p) { return p.category || (isPrint(p)?'structure':'hardware'); }
function isCasing(p) { return /casing|shell|lid/.test(p.category || '') || /^(case_|casing|shell|lid|top_lid)/.test(p.id); }
function isPayload(p) { return p.motion?.type==='payload' || p.category==='payload' || /^payload|adapter/.test(p.id); }
function isHatch(p) { return p.category==='hatch' || /^(wing_)?hatch/.test(p.id) || p.installation?.role==='hatch'; }
function isWing(p) { return /^(wing|hatch|mounts)/.test(p.category || '') || /^(wing_|hatch_|host_mount_|mount_screw_)/.test(p.id) || ['wing','hatch','mount_screw','hatch_screw'].includes(p.installation?.role); }
function isWingSkin(p) { return p.category==='wing_skin' || p.subcategory==='skin' || /wing_(skin|shell)/.test(p.id); }
function isMountScrew(p) { return p.installation?.role==='mount_screw' || /^(host_)?mount_screw|wing_screw/.test(p.id); }
function baseColor(p) {
  if (p.color) return p.color;
  if (isCasing(p)) return 0xa9b9ad;
  if (isHatch(p) || isWingSkin(p)) return 0xd6cfb8;
  if (isWing(p) && !isMountScrew(p)) return 0xb1bda7;
  if (isPayload(p)) return 0x73969a;
  if (/servo/.test(p.id)) return 0x253e4c;
  if (/keeper|horn|follower|sleeve/.test(p.id)) return 0xdf8956;
  if (p.kind==='pad') return 0x806147;
  return isPrint(p)?0x3c817d:0xaab5b6;
}
async function json(path) {
  const response=await fetch(path);
  if(!response.ok)throw new Error(`Could not load ${new URL(path,location.href).pathname} (${response.status}).`);
  return response.json();
}
function initializeRenderer() {
  const canvas=$('canvas');
  try {
    const gl=canvas.getContext('webgl2',{antialias:true,alpha:true});
    if(!gl)throw new Error('WebGL unavailable');
    renderer=new THREE.WebGLRenderer({canvas,context:gl,antialias:true,alpha:true});
    renderer.localClippingEnabled=true;renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.setClearColor(0xf4f5ec,0);
  } catch (_) {
    const replacement=document.createElement('canvas');replacement.id='canvas';canvas.replaceWith(replacement);
    renderer=new SoftwareRenderer({canvas:replacement});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.25));
    $('renderer-note').textContent='Canvas 3D · same CAD meshes';
  }
  controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=!renderer.isSoftwareRenderer;
  controls.dampingFactor=.09;controls.screenSpacePanning=true;controls.minDistance=30;controls.maxDistance=1800;
  controls.addEventListener('change',()=>renderer.invalidate?.());
  scene.add(new THREE.HemisphereLight(0xffffff,0x6f8481,2.5));
  const light=new THREE.DirectionalLight(0xfff3df,2.5);light.position.set(70,-70,120);scene.add(light);
  const fill=new THREE.DirectionalLight(0xc2e2e1,1.5);fill.position.set(-60,80,50);scene.add(fill);
  new ResizeObserver(resize).observe(stage);
  let down;
  renderer.domElement.addEventListener('pointerdown',e=>{down=[e.clientX,e.clientY];});
  renderer.domElement.addEventListener('pointerup',e=>{
    if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;
    const b=renderer.domElement.getBoundingClientRect(),ray=new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(2*(e.clientX-b.left)/b.width-1,1-2*(e.clientY-b.top)/b.height),camera);
    scene.updateMatrixWorld(true);
    const hit=ray.intersectObjects(meshes.filter(m=>m.parent.visible&&m.material.opacity>.45),false).find(h=>!state.section||clip.distanceToPoint(h.point)>=0);
    select(hit?.object.userData.partId || null);
  });
  resize();requestAnimationFrame(frame);
}
function resize() {
  if(!renderer)return;
  const w=Math.max(1,stage.clientWidth),h=Math.max(1,stage.clientHeight);
  renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.invalidate?.();
}
function sceneBounds() {
  if(state.scene==='wing')return state.model?.wing_bounds || state.model?.installation_bounds || {min:[-100,-80,-65],max:[200,140,125]};
  return state.model?.module_bounds || state.model?.bounds || {min:[0,0,-10],max:[85.6,54,20]};
}
function view(name='iso') {
  const directions={iso:[1.05,-1.35,1.2],top:[.001,-.001,1],bottom:[.001,-.001,-1],side:[1,0,.001]};
  const b=sceneBounds();target.set(...b.min.map((n,i)=>(n+b.max[i])/2));
  extent=Math.max(...b.min.map((n,i)=>b.max[i]-n));
  if(state.scene==='module'){target.set(42.8,27,7);extent=110+state.explode*35;}
  controls.target.copy(target);camera.position.copy(target).add(new THREE.Vector3(...directions[name]).normalize().multiplyScalar(extent*2.1));
  controls.update();renderer.invalidate?.();
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
}
function geometry(data) {
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(data.positions||data.pos,3));
  g.setIndex(data.indices||data.idx);g.computeVertexNormals();g.computeBoundingBox();return g;
}
function modelMotion(part) {
  const m=new THREE.Matrix4();
  if(state.scene==='wing')return m;
  const motion=part.motion||{},k=kinematicState(state.model.kinematics,Math.min(1,state.phase));
  if(['slider','keeper'].includes(motion.type))m.makeTranslation(k.stroke_mm,0,0);
  else if(['rotation','crank','servo'].includes(motion.type)) {
    const pivot=motion.pivot||state.model.kinematics.pivot,axis=motion.axis||state.model.kinematics.axis||[0,1,0];
    m.makeTranslation(...pivot).multiply(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(...axis).normalize(),k.delta_deg*Math.PI/180)).multiply(new THREE.Matrix4().makeTranslation(...pivot.map(n=>-n)));
  } else if(isPayload(part)) {
    const departure=Math.max(0,state.phase-1),vector=motion.vector||[0,0,-35];
    m.makeTranslation(...vector.map(n=>n*departure));
  }
  return m;
}
function installationMotion(part) {
  const matrix=new THREE.Matrix4();if(state.scene!=='wing')return matrix;
  const s=installationState(state.installation),r=role(part);
  let fraction=0,vector=part.installation?.vector;
  if(r==='module'){fraction=s.module_fraction;vector ||= [0,0,-62];}
  if(r==='hatch'){fraction=s.hatch_fraction;vector ||= [0,0,72];}
  if(r==='mount_screw'){fraction=s.screw_fraction;vector ||= [0,0,45];}
  if(r==='hatch_screw'){fraction=s.hatch_fraction;vector ||= [0,0,90];}
  return matrix.makeTranslation(...(vector||[0,0,0]).map(n=>n*fraction));
}
function isVisible(part) {
  if(state.scene==='module'&&isWing(part))return false;
  if(state.scene==='wing'&&isPayload(part))return false;
  if(!state.payload&&isPayload(part))return false;
  if(!state.hardware&&!isPrint(part)&&!['pad','compliant','wing','context'].includes(part.kind)&&!isWingSkin(part)&&!isHatch(part))return false;
  if(isCasing(part)&&state.casing==='off')return false;
  if(isWingSkin(part)&&state.wing==='off')return false;
  if(state.scene==='wing'&&isMountScrew(part)&&!installationState(state.installation).screws_visible)return false;
  return true;
}
function updateParts() {
  if(!state.model)return;
  for(const part of state.model.parts) {
    const object=objects.get(part.id),e=state.scene==='module'?part.explode||[0,0,0]:[0,0,0];
    object.matrix.copy(new THREE.Matrix4().makeTranslation(...e.map(n=>n*state.explode))).multiply(installationMotion(part)).multiply(modelMotion(part));
    object.matrixWorldNeedsUpdate=true;object.visible=isVisible(part);
    const mat=object.userData.mesh.material,selected=state.selected===part.id;
    mat.color.set(selected?0xf69b53:baseColor(part));
    let opacity=isCasing(part)&&state.casing==='ghost'?.18:isWingSkin(part)&&state.wing==='ghost'?.15:1;
    if(state.selected&&!selected)opacity=Math.min(opacity,.24);
    mat.transparent=opacity<1;mat.opacity=opacity;mat.depthWrite=opacity===1;
    mat.clippingPlanes=state.section?[clip]:[];mat.needsUpdate=true;
    object.userData.edges.visible=!state.section&&opacity>.8;
  }
  if(grid)grid.visible=state.scene==='module';
  $('explode').value=state.explode;$('explode-value').textContent=state.explode===0?'Assembled':`${Math.round(state.explode*100)}%`;
  $('motion').value=state.phase;
  const stroke=kinematicState(state.model.kinematics,Math.min(state.phase,1)).stroke_mm;
  $('motion-value').textContent=state.phase===0?'Retained':state.phase>=2?'Released':state.phase>1?'Departing':`${fmt(stroke)} mm`;
  $('installation').value=state.installation;$('installation-value').textContent=`${fmt(state.installation,1)} / 4`;
  $('annotations').hidden=!state.labels;updateStep();renderer.invalidate?.();
  document.documentElement.dataset.scene=state.scene;document.documentElement.dataset.casing=state.casing;
}
const steps=[
  ['Ready to install','Start with the payload removed. The cartridge is below its opening; the access panel is closed.'],
  ['Top panel open','The top hatch lifts away to expose the mounting frame and screw access.'],
  ['Cartridge inserted','Lift the module into the bottom opening until its mounting datums seat. Support it while fastening.'],
  ['Fastened from above','The mounting screws pass down through the wing frame into the cartridge’s captured hardware.'],
  ['Panel closed','Route and connect the lead, check the mechanism, then reinstall the top panel. The payload mounts below.'],
];
function updateStep() {
  const s=installationState(state.installation),next=s.phase%1>.02?Math.min(4,s.stage+1):s.stage;
  $('step-title').textContent=steps[next][0];$('step-copy').textContent=steps[next][1];
  document.querySelectorAll('[data-step]').forEach(b=>b.classList.toggle('active',Number(b.dataset.step)===next));
}
function setScene(name) {
  stop();state.scene=name;state.selected=null;
  $('module-controls').hidden=name!=='module';$('wing-controls').hidden=name!=='wing';$('payload-toggle').hidden=name!=='module';
  $('mount-view').hidden=name!=='wing';
  $('control-title').textContent=name==='module'?'SEE INSIDE':'INSTALLATION';
  $('scene-chip').textContent=name==='module'?'ACTUAL CAD · CARTRIDGE':'ACTUAL CAD · WING STUDY';
  $('geometry-size').textContent=name==='module'?'85.6 × 54 × 20 mm retained':'Bottom insertion · top fasteners';
  $('scene-caption').textContent=name==='module'?'The 20 mm envelope applies to the retained cartridge. The departing payload adapter is outside that envelope.':'One-off wing section for installation access. The payload is removed. This model does not establish wing strength or flight suitability.';
  document.querySelectorAll('[data-scene]').forEach(b=>{b.classList.toggle('active',b.dataset.scene===name);b.setAttribute('aria-selected',b.dataset.scene===name);});
  renderPartButtons();select(null);view('iso');
}
function select(id) {
  state.selected=id;const part=state.model?.parts.find(p=>p.id===id);$('selection').hidden=!part;
  document.querySelectorAll('[data-part]').forEach(b=>{b.classList.toggle('active',b.dataset.part===id);b.setAttribute('aria-pressed',b.dataset.part===id);});
  if(part){$('selected-title').textContent=part.name;$('selected-note').textContent=(Array.isArray(part.notes)?part.notes.join(' '):part.notes)||part.note||part.description||(isPrint(part)?'One physical printed body. Its integral ribs and shoulders remain attached in the exploded assembly.':'Purchased hardware or installation context. See its BOM and assembly notes.');$('selected-downloads').innerHTML=downloads(part);}
  updateParts();
}
function downloads(part) {
  return [['STEP',part.step],['Print STL',part.print_stl||part.printStl],['Drawing',part.drawing]].filter(([,p])=>p).map(([label,p])=>`<a href="${escape(url(p))}" download>${label} ↓</a>`).join('');
}
function renderPartButtons() {
  if(!state.model)return;
  const candidates=state.model.parts.filter(p=>state.scene==='module'?!isWing(p):!isPayload(p)).filter(p=>isPrint(p)||isWingSkin(p)||isHatch(p)||p.category==='wing_structure'||isMountScrew(p)||['servo','horn','sleeve','lead_reservation'].includes(p.id));
  $('parts').innerHTML=candidates.map(p=>`<button class="part" data-part="${escape(p.id)}" aria-pressed="false"><i style="background:#${new THREE.Color(baseColor(p)).getHexString()}"></i>${escape(p.name)}</button>`).join('');
  document.querySelectorAll('[data-part]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.part)));
}
function createAnnotations(model) {
  const supplied=model.annotations||[];
  const defaults=model.parts.filter(p=>isPrint(p)||p.id==='servo'||isHatch(p)).map(p=>({label:p.label||p.name,partId:p.id,position:objects.get(p.id).userData.mesh.geometry.boundingBox.getCenter(new THREE.Vector3()).toArray()}));
  annotations=(supplied.length?supplied:defaults).map(a=>{const element=document.createElement('span');element.className='annotation';element.textContent=a.label;$('annotations').appendChild(element);return{...a,element};});
}
function updateAnnotations() {
  if(!state.labels)return;
  const placed=[],w=stage.clientWidth,h=stage.clientHeight;
  for(const a of annotations){
    const object=objects.get(a.partId||a.part_id),point=new THREE.Vector3(...a.position);if(object)point.applyMatrix4(object.matrix);
    const clipping=!state.section||clip.distanceToPoint(point)>=0;point.project(camera);
    let x=(point.x/2+.5)*w+12,y=(-point.y/2+.5)*h-17;const labelWidth=a.element.offsetWidth||160;
    x=Math.min(w-labelWidth-10,Math.max(10,x));
    for(let i=0;i<6&&placed.some(p=>Math.abs(p.y-y)<27&&x<p.x+p.w+8&&x+labelWidth>p.x-8);i++)y+=29;
    const visible=clipping&&point.z<1&&point.z>-1&&y>45&&y<h-55&&(!object||object.visible)&&(!state.selected||!object||object.userData.part.id===state.selected);
    a.element.hidden=!visible;if(visible){a.element.style.transform=`translate(${x}px,${y}px)`;placed.push({x,y,w:labelWidth});}
  }
}
async function loadModel() {
  const model=await json(new URL('assembly.json',modelBase));
  if(!Array.isArray(model.parts)||!model.parts.length)throw new Error('The CAD manifest has no physical parts.');
  kinematicState(model.kinematics,1);
  const data=await Promise.all(model.parts.map(p=>json(url(p.mesh))));state.model=model;
  model.parts.forEach((part,i)=>{
    const group=new THREE.Group();group.matrixAutoUpdate=false;group.userData.part=part;
    const shape=geometry(data[i]),material=new THREE.MeshStandardMaterial({color:baseColor(part),roughness:.69,metalness:isPrint(part)?.02:.12,side:THREE.DoubleSide});
    const m=new THREE.Mesh(shape,material);m.userData.partId=part.id;group.add(m);
    const edges=new THREE.LineSegments(new THREE.EdgesGeometry(shape,28),new THREE.LineBasicMaterial({color:0x365b55,opacity:.17,transparent:true}));group.add(edges);
    group.userData.mesh=m;group.userData.edges=edges;objects.set(part.id,group);meshes.push(m);scene.add(group);
  });
  grid=new THREE.GridHelper(180,18,0xa9bfb0,0xd1ddcf);grid.rotation.x=Math.PI/2;grid.position.set(42.8,27,-13);grid.material.transparent=true;grid.material.opacity=.22;scene.add(grid);
  clip.constant=model.section_y_mm??27;
  const prints=model.parts.filter(p=>isPrint(p)&&!isWing(p));
  $('part-count').textContent=`${prints.length} prints`;
  $('assembly-step').href=url(model.step||'assembly.step');
  if(model.wing_step||model.installation_step)$('wing-step').href=url(model.wing_step||model.installation_step);
  $('print-cards').innerHTML=prints.map((p,i)=>`<article class="print-card"><span>PRINT ${String(i+1).padStart(2,'0')} / ONE BODY</span><h3>${escape(p.name)}</h3><p>${escape(p.print_note||p.orientation||p.notes||'Use the oriented print STL; inspect fit against the assembly instructions.')}</p><div class="links">${downloads(p)}</div></article>`).join('');
  $('motion-note').textContent=`${fmt(model.kinematics.operating_travel_mm,1)} mm keeper withdrawal, followed by illustrative payload departure. This is prescribed motion, not a release-force simulation.`;
  createAnnotations(model);renderPartButtons();updateParts();view('iso');$('loading').hidden=true;
  document.documentElement.dataset.modelReady='true';
}
async function loadEvidence() {
  try {
    const report=await json(new URL('./report.json',import.meta.url));
    $('evidence-status').textContent=report.status_text;
    $('evidence-metrics').innerHTML=(report.metrics||[]).map(m=>`<div class="metric"><strong>${escape(m.value)}</strong><span>${escape(m.label)}</span></div>`).join('');
    $('check-list').innerHTML=(report.checks||[]).map(c=>`<article><span class="check-state">${escape(c.result)}</span><div><h3>${escape(c.name)}</h3><p>${escape(c.detail)}</p></div></article>`).join('');
    if(report.limits?.length)$('limits').innerHTML=report.limits.map(l=>`<li>${escape(l)}</li>`).join('');
    if(report.pr_url)$('pr-link').href=report.pr_url;if(report.actions_url)$('actions-link').href=report.actions_url;
    if(report.actuator_price)$('actuator-cost').textContent=report.actuator_price;
    if(report.actuator_rationale)$('actuator-rationale').textContent=report.actuator_rationale;
    if(report.actuator_options?.length){
      $('cost-comparison').hidden=false;
      $('cost-note').textContent=report.cost_note||'Quoted actuator prices exclude shipping and tax. Total mechanism cost also includes hardware, printed material and controls.';
      $('actuator-options').innerHTML=report.actuator_options.map(p=>`<tr><td>${p.url?`<a href="${escape(p.url)}">${escape(p.name)} ↗</a>`:escape(p.name)}</td><td>${escape(p.price)}</td><td>${escape(p.fit)}</td><td>${escape(p.decision)}</td></tr>`).join('');
    }
  }catch(error){$('evidence-status').textContent='No current verification record loaded. Use the engineering record and regenerate the R5 checks; missing evidence is not a passing result.';}
}
function stop(){state.playing=null;$('play-release').textContent='Play release';$('play-installation').textContent='Play installation';}
function play(kind){
  if(state.playing===kind)return stop();stop();
  const key=kind==='release'?'phase':'installation',max=kind==='release'?2:4;
  if(state[key]>=max)state[key]=0;
  state.playing=kind;startTime=performance.now();startPhase=state[key];$(`play-${kind}`).textContent='Pause';
}
function frame(now){
  requestAnimationFrame(frame);if(renderer.isSoftwareRenderer&&now-lastFrame<38)return;lastFrame=now;
  if(state.playing){const key=state.playing==='release'?'phase':'installation',max=state.playing==='release'?2:4;state[key]=Math.min(max,startPhase+(now-startTime)/(state.playing==='release'?2300:2600));updateParts();if(state[key]>=max)stop();}
  controls.update();renderer.render(scene,camera);updateAnnotations();
}
$('explode').addEventListener('input',e=>{state.explode=Number(e.target.value);updateParts();});
$('motion').addEventListener('input',e=>{stop();state.phase=Number(e.target.value);updateParts();});
$('installation').addEventListener('input',e=>{stop();state.installation=Number(e.target.value);updateParts();});
for(const key of ['hardware','labels','section','payload'])$(key).addEventListener('change',e=>{state[key]=e.target.checked;updateParts();});
$('clear-selection').addEventListener('click',()=>select(null));$('play-release').addEventListener('click',()=>play('release'));$('play-installation').addEventListener('click',()=>play('installation'));
$('fit').addEventListener('click',()=>view('iso'));
$('mount-view').addEventListener('click',()=>{
  target.set(42.8,27,25);controls.target.copy(target);camera.position.copy(target).add(new THREE.Vector3(1.05,-1.35,1.2).normalize().multiplyScalar(330));controls.update();renderer.invalidate?.();
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.remove('active'));
});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>view(b.dataset.view)));
document.querySelectorAll('[data-scene]').forEach(b=>b.addEventListener('click',()=>setScene(b.dataset.scene)));
document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{stop();state.installation=Number(b.dataset.step);updateParts();}));
for(const [key,data]of[['casing','case'],['wing','wing']])document.querySelectorAll(`[data-${data}]`).forEach(b=>b.addEventListener('click',()=>{state[key]=b.dataset[data];document.querySelectorAll(`[data-${data}]`).forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b);});select(null);}));
stage.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='r')view('iso');if(e.key==='Escape')select(null);});
try{initializeRenderer();await Promise.all([loadModel(),loadEvidence()]);}catch(error){$('loading').hidden=true;$('error').hidden=false;$('error').textContent=error.message+' Serve this viewer over HTTP so its CAD meshes can load.';console.error(error);}
