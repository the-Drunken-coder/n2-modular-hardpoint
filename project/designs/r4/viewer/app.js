import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { SoftwareRenderer } from './software-renderer.js';
import { kinematicState } from './kinematics.js';

const $ = id => document.getElementById(id);
const modelBase = new URL('../manufacturing/', import.meta.url);
const state = { model: null, explode: 0, phase: 0, selected: null, hardware: true, labels: true, section: false, playing: false };
const scene = new THREE.Scene(), objects = new Map(), meshes = [];
const camera = new THREE.PerspectiveCamera(34, 1, .1, 3000);
camera.up.set(0, 0, 1);
const stage = $('stage');
let renderer, controls, extent = 100, target = new THREE.Vector3(), lastFrame = 0, animationStart = 0, animationPhase = 0;
let annotations = [];
const clip = new THREE.Plane(new THREE.Vector3(0, -1, 0), 10);
const colors = { printed: 0x688e91, purchased: 0xb8c0bf, pad: 0xe6a05c, compliant: 0xe6a05c, hardware: 0xa8b6b5 };
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const url = path => new URL(path, modelBase).href;
const kind = part => part.kind || part.manufacturing || 'purchased';
const isPrint = part => ['printed', 'print'].includes(kind(part));
const isPad = part => ['pad', 'compliant', 'compliant insert'].includes(kind(part));
const fmt = (value, digits = 2) => Number.isFinite(value) ? value.toFixed(digits) : '—';

async function json(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${new URL(path, location.href).pathname} (${response.status}).`);
  return response.json();
}

function initializeRenderer() {
  const canvas = $('canvas');
  try {
    const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
    if (!gl) throw new Error('No WebGL context');
    renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: true, alpha: true });
    renderer.localClippingEnabled = true;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setClearColor(0xf4f5ec, 0);
  } catch (_) {
    const replacement = document.createElement('canvas');
    replacement.id = 'canvas'; canvas.replaceWith(replacement);
    renderer = new SoftwareRenderer({ canvas: replacement });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.25));
    $('renderer-note').textContent = 'Canvas 3D · same CAD meshes';
  }
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = !renderer.isSoftwareRenderer;
  controls.dampingFactor = .09; controls.screenSpacePanning = true;
  controls.addEventListener('change', () => renderer.invalidate?.());
  scene.add(new THREE.HemisphereLight(0xffffff, 0x6f8481, 2.5));
  const light = new THREE.DirectionalLight(0xfff3df, 2.5); light.position.set(70, -70, 120); scene.add(light);
  const fill = new THREE.DirectionalLight(0xc2e2e1, 1.5); fill.position.set(-60, 80, 50); scene.add(fill);
  new ResizeObserver(resize).observe(stage);
  let down;
  renderer.domElement.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
    const bounds = renderer.domElement.getBoundingClientRect();
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(2 * (e.clientX - bounds.left) / bounds.width - 1, 1 - 2 * (e.clientY - bounds.top) / bounds.height), camera);
    scene.updateMatrixWorld(true);
    const hit = ray.intersectObjects(meshes.filter(m => m.parent.visible), false).find(h => !state.section || clip.distanceToPoint(h.point) >= 0);
    if (hit) select(hit.object.userData.partId); else select(null);
  });
  resize(); requestAnimationFrame(frame);
}

function resize() {
  if (!renderer) return;
  const width = Math.max(1, stage.clientWidth), height = Math.max(1, stage.clientHeight);
  renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix();
  renderer.invalidate?.();
}

function view(name) {
  const directions = { iso: [1.15, -1.5, 1.05], top: [.001, -.001, 1], front: [0, -1, .001], side: [1, 0, .001] };
  controls.target.copy(target);
  camera.position.copy(target).add(new THREE.Vector3(...directions[name]).normalize().multiplyScalar(extent * 2.25));
  controls.update(); renderer.invalidate?.();
  document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === name));
}

function geometry(data) {
  const result = new THREE.BufferGeometry();
  result.setAttribute('position', new THREE.Float32BufferAttribute(data.positions || data.pos, 3));
  result.setIndex(data.indices || data.idx); result.computeVertexNormals(); return result;
}

function modelMotion(part) {
  const motion = part.motion || {}, joint = state.model.kinematics || {};
  const phase = Math.min(state.phase, 1), departure = Math.max(0, state.phase - 1);
  const kinematic = kinematicState(joint, phase);
  const stroke = kinematic.stroke_mm;
  const type = motion.type || motion.kind;
  const matrix = new THREE.Matrix4();
  if (type === 'slider' || type === 'keeper' || motion.joint === 'slider') {
    matrix.makeTranslation(stroke, 0, 0);
  } else if (type === 'servo' || type === 'crank' || type === 'rotation' || motion.joint === 'crank') {
    const pivot = new THREE.Vector3(...(motion.pivot || joint.pivot));
    const axis = new THREE.Vector3(...(motion.axis || joint.axis)).normalize();
    const delta = kinematic.delta_deg;
    matrix.makeTranslation(pivot.x, pivot.y, pivot.z)
      .multiply(new THREE.Matrix4().makeRotationAxis(axis, delta * Math.PI / 180))
      .multiply(new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
  } else if (type === 'payload' || type === 'departure') {
    const vector = motion.vector || [0, 0, 30];
    matrix.makeTranslation(...vector.map(v => v * departure));
  } else if (type === 'translation' || motion.vector) {
    const fraction = motion.start !== undefined ? Math.max(0, Math.min(1, (state.phase / 2 - motion.start) / (motion.end - motion.start))) : phase;
    matrix.makeTranslation(...motion.vector.map(v => v * fraction));
  }
  return matrix;
}

function updateParts() {
  if (!state.model) return;
  for (const part of state.model.parts) {
    const object = objects.get(part.id), e = part.explode || [0, 0, 0];
    object.matrix.copy(new THREE.Matrix4().makeTranslation(...e.map(n => n * state.explode))).multiply(modelMotion(part));
    object.matrixWorldNeedsUpdate = true;
    object.visible = state.hardware || isPrint(part) || isPad(part);
    const material = object.userData.mesh.material;
    const selected = state.selected === part.id;
    material.color.set(selected ? 0xef9a57 : part.color || colors[kind(part)] || 0xa9b8b4);
    material.transparent = Boolean(state.selected && !selected);
    material.opacity = state.selected && !selected ? .24 : 1;
    material.depthWrite = material.opacity === 1;
    material.clippingPlanes = state.section ? [clip] : [];
    material.needsUpdate = true;
    object.userData.edges.visible = !state.section && material.opacity > .9;
  }
  $('explode').value = state.explode; $('explode-value').textContent = `${Math.round(state.explode * 100)}%`;
  $('motion').value = state.phase;
  $('motion-value').textContent = state.phase === 0 ? 'Retained' : state.phase >= 2 ? 'Released' : state.phase > 1 ? 'Departing' : `Withdrawing ${Math.round(state.phase * 100)}%`;
  $('annotations').hidden = !state.labels;
  renderer.invalidate?.();
}

function select(id) {
  state.selected = id; const part = state.model?.parts.find(p => p.id === id);
  $('selection').hidden = !part;
  document.querySelectorAll('[data-part]').forEach(b => { b.classList.toggle('active', b.dataset.part === id); b.setAttribute('aria-pressed', b.dataset.part === id); });
  if (part) {
    $('selected-title').textContent = part.name;
    $('selected-note').textContent = (Array.isArray(part.notes) ? part.notes.join(' ') : part.notes) || part.note || part.description || part.print_note || (isPrint(part) ? 'One manufactured printed body. Integral ribs and shoulders remain part of this piece.' : 'Purchased hardware or a separately installed insert. Check its BOM and assembly entry.');
    $('selected-downloads').innerHTML = downloads(part);
  }
  updateParts();
}

function downloads(part) {
  return [['STEP', part.step], ['Print STL', part.print_stl || part.printStl], ['Drawing', part.drawing]].filter(([, path]) => path)
    .map(([label, path]) => `<a href="${escape(url(path))}" download>${label} ↓</a>`).join('');
}

function createAnnotations(model) {
  $('annotations').replaceChildren();
  annotations = (model.annotations || []).map(a => {
    const element = document.createElement('span'); element.className = 'annotation'; element.textContent = a.label;
    $('annotations').appendChild(element); return { ...a, element };
  });
}

function updateAnnotations() {
  if (!state.labels || !annotations.length) return;
  const placed = [], width = stage.clientWidth, height = stage.clientHeight;
  for (const annotation of annotations) {
    const object = objects.get(annotation.partId || annotation.part_id), point = new THREE.Vector3(...annotation.position);
    if (object) point.applyMatrix4(object.matrix);
    const onSide = !state.section || clip.distanceToPoint(point) >= 0;
    point.project(camera);
    let x = (point.x / 2 + .5) * width + 12, y = (-point.y / 2 + .5) * height - 17;
    const labelWidth = annotation.element.offsetWidth || 150;
    x = Math.min(width - labelWidth - 10, Math.max(10, x));
    for (let i = 0; i < 6 && placed.some(p => Math.abs(p.y - y) < 27 && x < p.x + p.w + 8 && x + labelWidth > p.x - 8); i++) y += 29;
    const visible = onSide && point.z < 1 && point.z > -1 && y > 45 && y < height - 35 && (!object || object.visible) && (!state.selected || !object || object.userData.part.id === state.selected);
    annotation.element.hidden = !visible;
    if (visible) { annotation.element.style.transform = `translate(${x}px,${y}px)`; placed.push({ x, y, w: labelWidth }); }
  }
}

async function loadModel() {
  const model = await json(new URL('assembly.json', modelBase));
  if (!Array.isArray(model.parts) || !model.parts.length) throw new Error('The assembly manifest has no physical parts.');
  kinematicState(model.kinematics, 1);
  const printing = await json(new URL('print-process.json', modelBase));
  const drawings = { receiver_core: 'drawings/R4-01_receiver.svg', payload_adapter: 'drawings/R4-02_adapter.svg', keeper: 'drawings/R4-03_keeper.svg' };
  for (const part of model.parts.filter(isPrint)) {
    part.print_orientation = printing.orientations[part.id];
    part.drawing = drawings[part.id];
  }
  const data = await Promise.all(model.parts.map(part => json(url(part.mesh))));
  state.model = model;
  model.parts.forEach((part, i) => {
    const group = new THREE.Group(); group.matrixAutoUpdate = false; group.userData.part = part;
    const shape = geometry(data[i]);
    const material = new THREE.MeshStandardMaterial({ color: part.color || colors[kind(part)] || 0xa9b8b4, roughness: .68, metalness: isPrint(part) ? .03 : .15, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(shape, material); mesh.userData.partId = part.id; group.add(mesh);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(shape, 28), new THREE.LineBasicMaterial({ color: 0x44605e, opacity: .18, transparent: true })); group.add(edges);
    group.userData.mesh = mesh; group.userData.edges = edges; objects.set(part.id, group); meshes.push(mesh); scene.add(group);
  });
  const bounds = model.bounds || model.bounds_mm, low = bounds.min, high = bounds.max;
  target.set(...low.map((n, i) => (n + high[i]) / 2)); extent = Math.max(...low.map((n, i) => high[i] - n));
  const grid = new THREE.GridHelper(Math.ceil(extent * 1.5 / 10) * 10, 24, 0xa9bfb0, 0xd1ddcf);
  grid.rotation.x = Math.PI / 2; grid.position.set(target.x, target.y, low[2] - .7); grid.material.transparent = true; grid.material.opacity = .25; scene.add(grid);
  clip.constant = model.section_y_mm ?? 10;
  const prints = model.parts.filter(isPrint);
  $('part-count').textContent = `${prints.length} prints / ${model.parts.length} items`;
  const mainHardware = new Set(['servo', 'horn', 'sleeve', 'stop_screw', 'pad_1']);
  const selectable = model.parts.filter(p => isPrint(p) || mainHardware.has(p.id));
  $('parts').innerHTML = selectable.map(p => `<button class="part ${isPrint(p) ? 'printed' : isPad(p) ? 'pad' : 'purchased'}" data-part="${escape(p.id)}" aria-pressed="false"><i></i>${escape(p.name)}</button>`).join('');
  document.querySelectorAll('[data-part]').forEach(b => b.addEventListener('click', () => select(b.dataset.part)));
  $('geometry-size').textContent = `${low.map((n, i) => fmt(high[i] - n, 1)).join(' × ')} mm retained`;
  $('assembly-step').href = url(model.step || 'assembly.step');
  if (model.drawing_index) $('drawing-index').href = url(model.drawing_index);
  $('print-cards').innerHTML = prints.map((p, i) => `<article class="print-card"><span>PRINT ${String(i + 1).padStart(2, '0')} / ONE SOLID</span><h3>${escape(p.name)}</h3><p>${escape(p.print_orientation || p.orientation || p.print_note || 'See the oriented print STL and manufacturing drawing.')}</p><div class="links">${downloads(p)}</div></article>`).join('');
  $('motion-note').textContent = `Prescribed movement: ${fmt(model.kinematics.operating_travel_mm, 1)} mm operating withdrawal, then illustrative payload departure. The ${fmt(model.kinematics.travel_mm, 1)} mm mechanical limit is not commanded.`;
  createAnnotations(model); updateParts(); view('iso'); $('loading').hidden = true;
  document.documentElement.dataset.modelReady = 'true';
}

async function loadEvidence() {
  try {
    const report = await json(new URL('./report.json', import.meta.url));
    $('evidence-status').textContent = report.status_text;
    $('evidence-metrics').innerHTML = (report.metrics || []).map(m => `<div class="metric"><strong>${escape(m.value)}</strong><span>${escape(m.label)}</span></div>`).join('');
    $('result-rows').innerHTML = (report.rows || []).map(r => `<tr><td>${escape(r.name)}</td><td>${escape(r.displacement)}</td><td>${escape(r.stress)}</td><td>${escape(r.scope)}</td></tr>`).join('');
    $('limits').innerHTML = (report.limits || []).map(limit => `<li>${escape(limit)}</li>`).join('');
    $('evidence-plots').innerHTML = (report.plots || []).map(p => `<figure><img src="${escape(p.src)}" alt="${escape(p.alt)}" loading="lazy"><figcaption>${escape(p.caption)}</figcaption></figure>`).join('');
    if (report.pr_url) $('pr-link').href = report.pr_url;
    if (report.actions_url) $('actions-link').href = report.actions_url;
  } catch (error) {
    $('evidence-status').textContent = `No current verification record was loaded. ${error.message} Use the analysis instructions to regenerate it.`;
    $('result-rows').innerHTML = '<tr><td colspan="4">No results displayed. An absent report is not a passing result.</td></tr>';
  }
}

function stop() { state.playing = false; $('play').textContent = 'Play release'; }
function play() {
  if (state.playing) return stop();
  if (state.phase >= 2) state.phase = 0;
  state.playing = true; animationStart = performance.now(); animationPhase = state.phase; $('play').textContent = 'Pause release';
}
function frame(now) {
  requestAnimationFrame(frame);
  if (renderer.isSoftwareRenderer && now - lastFrame < 38) return;
  lastFrame = now;
  if (state.playing) {
    state.phase = Math.min(2, animationPhase + (now - animationStart) / 2200);
    updateParts(); if (state.phase >= 2) stop();
  }
  controls.update(); renderer.render(scene, camera); updateAnnotations();
}

$('explode').addEventListener('input', e => { state.explode = Number(e.target.value); updateParts(); });
$('motion').addEventListener('input', e => { stop(); state.phase = Number(e.target.value); updateParts(); });
$('hardware').addEventListener('change', e => { state.hardware = e.target.checked; updateParts(); });
$('labels').addEventListener('change', e => { state.labels = e.target.checked; updateParts(); });
$('section').addEventListener('change', e => { state.section = e.target.checked; updateParts(); });
$('clear-selection').addEventListener('click', () => select(null)); $('play').addEventListener('click', play);
document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => view(b.dataset.view)));
stage.addEventListener('keydown', e => { if (e.key.toLowerCase() === 'r') view('iso'); if (e.key === 'Escape') select(null); });
try { initializeRenderer(); await Promise.all([loadModel(), loadEvidence()]); }
catch (error) { $('loading').hidden = true; $('error').hidden = false; $('error').textContent = error.message + ' Serve the repository over HTTP; opening this file directly can block model requests.'; console.error(error); }
