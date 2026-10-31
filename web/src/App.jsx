import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, ButtonGroup, Checkbox, HTMLSelect, Slider, Switch, Tag } from '@blueprintjs/core';
import * as T from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SITE_ROOT = import.meta.env.VITE_SITE_ROOT || './';
const BUILD = { label: import.meta.env.VITE_BUILD_LABEL || 'local build', sha: (import.meta.env.VITE_BUILD_SHA || '').slice(0, 7) };
const feaBase = d => (d?.p14 ? 'fea/' : `model/${d?.id}/fea/`);
const Q = new URLSearchParams(location.search);
const THIS_PATH = (location.pathname.match(/\/(pr\/\d+\/)/) || [])[1] || '';   // '' = main
const verPath = c => (!c || c === 'main' ? '' : c.replace(/^\/+|\/+$/g, '') + '/');
const DIFF = { added: '#32a467', removed: '#e76a6e', changed: '#f0b726', moved: '#4c90f0', same: '#738091' };
// same triangle count and bbox size, different position -> moved; otherwise changed
const shapeKey = sg => { const v = sg.split(','); return [v[0], ...[0, 1, 2].map(k => (v[4 + k] - v[1 + k]).toFixed(2))].join(','); };
// geometry signature: triangle count + bbox + centroid, rounded to 0.01 mm
function sig(g) {
  const a = g.attributes.position, n = a.count; g.computeBoundingBox(); const b = g.boundingBox;
  let cx = 0, cy = 0, cz = 0; for (let i = 0; i < n; i++) { cx += a.getX(i); cy += a.getY(i); cz += a.getZ(i); }
  const r = v => (Math.round(v * 100) / 100).toFixed(2);
  return [n / 3, ...b.min.toArray(), ...b.max.toArray(), cx / n, cy / n, cz / n].map((v, i) => (i ? r(v) : v)).join(',');
}
function motionOf(man, phase) {
  const mo = man?.motion, ease = x => x * x * (3 - 2 * x);
  const alpha = mo ? mo.a_latch + (mo.a_release - mo.a_latch) * ease(Math.min(phase, 1)) : 0;
  const kx = mo ? mo.r * (Math.cos(alpha * Math.PI / 180) - Math.cos(mo.a_latch * Math.PI / 180)) : 0;
  return { mo, alpha, kx };
}
const short = id => id.replace(/^N2_/, '').replace(/_/g, ' ');
const STROKE = 3, DROP = 22;            // keeper stroke (mm, manifest actuator), adapter travel shown
const MOVERS = ['N2_keeper', 'N2_armature']; // pulled +X by the solenoid
const GROUPS = {                       // FEA load case -> case id per part
  Z: { label: 'Straight pull (R3)', parts: { N2_adapter: 'Z', N2_receiver: 'Z', N2_keeper: 'Z' } },
  Z_distal_lost: { label: 'Straight pull, distal roof lost', parts: { N2_adapter: 'Z', N2_receiver: 'Z_distal_lost', N2_keeper: 'Z_distal_lost' } },
  XZ90: { label: 'Side pull 90° (outside R3)', parts: { N2_adapter: 'XZ90', N2_receiver: 'XZ90' } },
};

// turbo-like colormap, u in [0,1]; above 1 = magenta
function cmap(u, c) {
  if (u > 1) return c.setRGB(0.85, 0.1, 0.85);
  const s = [[0.19, 0.07, 0.23], [0.16, 0.47, 0.93], [0.1, 0.84, 0.66], [0.64, 0.99, 0.24], [0.98, 0.73, 0.22], [0.86, 0.22, 0.05]];
  const x = Math.max(0, u) * (s.length - 1), i = Math.min(Math.floor(x), s.length - 2), f = x - i;
  return c.setRGB(...s[i].map((a, k) => a + (s[i + 1][k] - a) * f));
}
const GRAD = `linear-gradient(90deg, ${[0, .2, .4, .6, .8, 1].map(u => '#' + cmap(u, new T.Color()).getHexString()).join(',')})`;

function useScene(el) {
  const st = useRef(null);
  if (!st.current) {
    const scene = new T.Scene();
    scene.add(new T.HemisphereLight(0xffffff, 0x334455, 2.2));
    const d = new T.DirectionalLight(0xffffff, 1.6); d.position.set(60, -40, 90); scene.add(d);
    const d2 = new T.DirectionalLight(0xffffff, 0.6); d2.position.set(-50, 60, -30); scene.add(d2);
    const cam = new T.PerspectiveCamera(35, 1, 0.1, 3000); cam.up.set(0, 0, 1);
    st.current = { scene, cam, parts: new Map(), cparts: new Map(), fea: new Map(), markers: new T.Group() };
    scene.add(st.current.markers);
  }
  useEffect(() => {
    const s = st.current, r = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(devicePixelRatio); r.setClearColor(0x15191e); el.current.appendChild(r.domElement);
    const oc = new OrbitControls(s.cam, r.domElement);
    Object.assign(oc, { enableDamping: true, dampingFactor: 0.12, rotateSpeed: 0.9, zoomToCursor: true, screenSpacePanning: true });
    oc.mouseButtons = { LEFT: T.MOUSE.ROTATE, MIDDLE: T.MOUSE.PAN, RIGHT: T.MOUSE.PAN };
    s.oc = oc; s.r = r; let alive = true;
    // double-click a surface to orbit around that point
    const ray = new T.Raycaster();
    r.domElement.addEventListener('dblclick', e => {
      const b = r.domElement.getBoundingClientRect();
      ray.setFromCamera(new T.Vector2((e.clientX - b.left) / b.width * 2 - 1, -(e.clientY - b.top) / b.height * 2 + 1), s.cam);
      const hit = ray.intersectObjects([...s.parts.values(), ...s.fea.values()].filter(m => m.visible))[0];
      if (hit) { const d = hit.point.clone().sub(oc.target); oc.target.add(d); s.cam.position.add(d); }
    });
    const loop = () => {
      if (!alive) return; requestAnimationFrame(loop); s.tick?.(); oc.update();
      const w = el.current.clientWidth, h = el.current.clientHeight;
      if (r.domElement.width !== Math.floor(w * r.getPixelRatio()) || r.domElement.height !== Math.floor(h * r.getPixelRatio())) r.setSize(w, h);
      s.cam.aspect = w / h; s.cam.updateProjectionMatrix(); r.render(s.scene, s.cam);
    };
    loop();
    return () => { alive = false; r.dispose(); r.domElement.remove(); };
  }, []);
  return st.current;
}

function label(text) {
  const cv = document.createElement('canvas'), x = cv.getContext('2d'); cv.width = 512; cv.height = 64;
  x.fillStyle = 'rgba(17,20,24,0.85)'; x.fillRect(0, 0, 512, 64); x.fillStyle = '#fff'; x.font = 'bold 30px sans-serif'; x.textBaseline = 'middle'; x.fillText(text, 14, 32);
  const sp = new T.Sprite(new T.SpriteMaterial({ map: new T.CanvasTexture(cv), depthTest: false, transparent: true, sizeAttenuation: false }));
  sp.scale.set(0.24, 0.03, 1); sp.center.set(0, 0.5); sp.renderOrder = 11; return sp;
}

function lookAtPeak(s, d, off) {
  const p = new T.Vector3(...d.peakV).add(off), n = new T.Vector3(...d.peakN);
  const v = n.clone().add(new T.Vector3(0, 0, n.z > 0.7 ? 0 : 0.35)).normalize();
  s.oc.target.copy(p); s.cam.position.copy(p).add(v.multiplyScalar(70)); s.oc.update(); s.dirty = true;
}

function setView(s, bounds, dir) {
  const c = new T.Vector3(...bounds.min).add(new T.Vector3(...bounds.max)).multiplyScalar(0.5);
  const d = new T.Vector3(...bounds.size).length() * 2.1;
  const v = { iso: s.isoDir || [0.75, -1, 0.65], front: [0, -1, 0.0001], top: [0.0001, -0.0001, 1], side: [1, 0, 0.0001] }[dir];
  s.oc.target.copy(c); s.cam.position.copy(c).add(new T.Vector3(...v).normalize().multiplyScalar(d)); s.oc.update();
}

export default function App() {
  const el = useRef();
  const s = useScene(el);
  const [man, setMan] = useState(null), [fea, setFea] = useState(null);
  const [mode, setMode] = useState(new URLSearchParams(location.search).get('mode') || 'model');
  const [explode, setExplode] = useState(Number(new URLSearchParams(location.search).get('explode') || 0));
  const [phase, setPhase] = useState(Number(new URLSearchParams(location.search).get('phase') || 0)); // release sequence 0..2
  const [playing, setPlaying] = useState(false);
  const [hidden, setHidden] = useState({});
  const [group, setGroup] = useState('Z');
  const [feaN, setFeaN] = useState(0);
  const [focus, setFocus] = useState(new URLSearchParams(location.search).get('fade') !== '0');
  const [autoScale, setAutoScale] = useState(new URLSearchParams(location.search).get('scale') !== 'abs');
  const [load, setLoad] = useState(Number(new URLSearchParams(location.search).get('load') || 17.8));
  const [ghost, setGhost] = useState(true);
  const [designs, setDesigns] = useState([]), [design, setDesign] = useState(null), [versions, setVersions] = useState([]);
  const p14 = designs.find(d => d.id === design)?.p14;
  // compare mode: other version loaded from its published gh-pages path (main root or pr/<n>/)
  const [cmp, setCmp] = useState(Q.get('compare') ? verPath(Q.get('compare')) : null);
  const [cmpMan, setCmpMan] = useState(null), [cmpFea, setCmpFea] = useState(null), [cmpErr, setCmpErr] = useState('');
  const [cmpView, setCmpView] = useState(Q.get('view') === 'side' ? 'side' : 'overlay');
  const [diffCol, setDiffCol] = useState(Q.get('diffcolors') !== '0'), [onlyChanged, setOnlyChanged] = useState(false);
  const [nLoaded, setNLoaded] = useState(0);
  const otherIsBase = THIS_PATH !== '';                 // on a PR build the other version is the baseline
  const cmpBase = cmp === null ? null : SITE_ROOT + cmp;

  useEffect(() => {
    fetch('model/designs.json').then(r => r.json()).then(ds => {
      setDesigns(ds); const want = new URLSearchParams(location.search).get('design');
      setDesign((ds.find(d => d.id === want) || ds[ds.length - 1])?.id);
    });
    fetch(`${SITE_ROOT}versions.json`, { cache: 'no-store' }).then(r => r.json()).then(setVersions).catch(() => {});
  }, []);
  useEffect(() => {
    if (!design) return;
    for (const m of [...s.parts.values(), ...s.fea.values()]) { s.scene.remove(m); m.geometry.dispose(); }
    for (const m of s.cparts.values()) { s.scene.remove(m); m.geometry.dispose(); }
    s.parts.clear(); s.fea.clear(); s.cparts.clear(); setHidden({}); setMan(null); setFea(null); setCmpMan(null); setCmpFea(null); setCmpErr('');
    fetch(`model/${design}/manifest.json`).then(r => r.json()).then(setMan);
    const dd = designs.find(d => d.id === design);
    if (dd?.p14 || dd?.fea) fetch(`${feaBase(dd)}index.json`).then(r => r.json()).then(setFea);
  }, [design]);

  // load assembly STLs
  useEffect(() => {
    if (!man) return; s.design = man.id; const L = new STLLoader();
    const cur = man.id;
    man.parts.forEach(p => L.load(`model/${man.id}/${p.stl}`, g => {
      if (cur !== s.design) return;
      const gg = p14 ? (g.computeVertexNormals(), g) : toCreasedNormals(g, Math.PI / 7);
      const metal = p.kind === 'purchased' && /screw|spline/.test(p.id);
      const m = new T.Mesh(gg, new T.MeshStandardMaterial({ color: p.color, metalness: metal ? 0.6 : 0.1, roughness: metal ? 0.35 : 0.6, side: T.DoubleSide,
        transparent: (p.opacity ?? 1) < 1, opacity: p.opacity ?? 1, depthWrite: (p.opacity ?? 1) >= 1 }));
      m.userData.p = p; m.userData.sig = sig(g); s.parts.set(p.id, m); s.scene.add(m); s.dirty = true; setNLoaded(n => n + 1);
    }));
    s.isoDir = man.iso; setView(s, man.bounds, 'iso');
  }, [man]);

  // compare: fetch the other version's manifest, FEA index and STLs
  useEffect(() => {
    for (const m of s.cparts.values()) { s.scene.remove(m); m.geometry.dispose(); }
    s.cparts.clear(); setCmpMan(null); setCmpFea(null); setCmpErr('');
    const u = new URL(location.href);
    if (cmp === null) u.searchParams.delete('compare'); else u.searchParams.set('compare', cmp ? cmp.replace(/\/$/, '') : 'main');
    history.replaceState(null, '', u);
    if (cmp === null || !design) return;
    const dd = designs.find(d => d.id === design), base = `${cmpBase}model/${design}/`, tag = `${cmp}|${design}`; s.ctag = tag;
    fetch(`${base}manifest.json`, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(cm => {
      if (s.ctag !== tag) return; setCmpMan(cm); const L = new STLLoader();
      cm.parts.forEach(p => L.load(`${base}${p.stl}`, g => {
        if (s.ctag !== tag) return;
        const gg = dd?.p14 ? (g.computeVertexNormals(), g) : toCreasedNormals(g, Math.PI / 7);
        const m = new T.Mesh(gg, new T.MeshStandardMaterial({ color: p.color, metalness: 0.1, roughness: 0.6, side: T.DoubleSide }));
        m.userData = { p, sig: sig(g), other: true }; s.cparts.set(p.id, m); s.scene.add(m); setNLoaded(n => n + 1);
      }));
    }).catch(e => s.ctag === tag && setCmpErr(`No ${design} model at ${cmp || 'main'} (${e.message})`));
    const fb = dd?.p14 ? `${cmpBase}fea/` : `${base}fea/`;
    if (dd?.p14 || dd?.fea) fetch(`${fb}index.json`, { cache: 'no-store' }).then(r => r.json()).then(f => s.ctag === tag && setCmpFea(f)).catch(() => {});
  }, [cmp, design, designs]);

  // per-part diff: baseline (A) vs proposed (B)
  const A = otherIsBase ? s.cparts : s.parts, B = otherIsBase ? s.parts : s.cparts;
  const diff = useMemo(() => {
    if (cmp === null || !cmpMan || !man) return null;
    const ids = [...new Set([...(otherIsBase ? cmpMan : man).parts.map(p => p.id), ...(otherIsBase ? man : cmpMan).parts.map(p => p.id)])];
    const out = {};
    for (const id of ids) {
      const a = A.get(id), b = B.get(id), inA = (otherIsBase ? cmpMan : man).parts.some(p => p.id === id), inB = (otherIsBase ? man : cmpMan).parts.some(p => p.id === id);
      out[id] = !inA ? 'added' : !inB ? 'removed' : !a || !b ? 'loading' : a.userData.sig === b.userData.sig ? 'same' : shapeKey(a.userData.sig) === shapeKey(b.userData.sig) ? 'moved' : 'changed';
      if (out[id] === 'changed' || out[id] === 'moved') { const [sa, sb] = [a, b].map(m => m.geometry.boundingBox.getSize(new T.Vector3()));
        out[id + '#d'] = `${sa.toArray().map(v => v.toFixed(1)).join('×')} → ${sb.toArray().map(v => v.toFixed(1)).join('×')} mm, tris ${a.userData.sig.split(',')[0]}→${b.userData.sig.split(',')[0]}`; }
    }
    return out;
  }, [cmp, cmpMan, man, nLoaded]);
  // side by side: baseline on the screen-left of the default iso view, proposed on the right
  const lr = (man?.iso || [0.75, -1])[1] > 0 ? 1 : -1;
  const sideDx = man && cmpMan ? Math.max(man.bounds.size[0], cmpMan.bounds.size[0]) * 1.35 * (otherIsBase ? lr : -lr) : 0;
  const frame = (dir = 'iso') => {
    if (!man) return;
    if (!(cmp !== null && cmpView === 'side' && cmpMan)) return setView(s, man.bounds, dir);
    const o = sideDx, mn = [...man.bounds.min], mx = [...man.bounds.max];
    mn[0] = Math.min(mn[0], mn[0] + o); mx[0] = Math.max(mx[0], mx[0] + o);
    setView(s, { min: mn, max: mx, size: mx.map((v, i) => v - mn[i]) }, dir);
  };
  useEffect(() => { frame(); }, [cmpView, !!cmpMan]);

  // load FEA surfaces
  useEffect(() => {
    if (!fea) return;
    const fb = feaBase(designs.find(d => d.id === design));
    fea.cases.forEach(c => fetch(`${fb}${c.part}__${c.case}.json`).then(r => r.json()).then(d => {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(d.pos, 3)); g.setIndex(d.idx); g.computeVertexNormals();
      g.setAttribute('color', new T.Float32BufferAttribute(new Float32Array(d.pos.length), 3));
      const m = new T.Mesh(g, new T.MeshStandardMaterial({ vertexColors: true, metalness: 0, roughness: 0.75, side: T.DoubleSide }));
      let pi = 0; for (let i = 1; i < d.fi.length; i++) if (d.fi[i] > d.fi[pi]) pi = i;
      const nrm = g.attributes.normal, ctr = new T.Vector3(); g.computeBoundingBox(); g.boundingBox.getCenter(ctr);
      const pv = new T.Vector3().fromBufferAttribute(g.attributes.position, pi), pn = new T.Vector3().fromBufferAttribute(nrm, pi);
      if (pn.dot(pv.clone().sub(ctr)) < 0) pn.negate(); // DoubleSide: orient outward
      d.peakV = pv.toArray(); d.peakN = pn.normalize().toArray(); d.fiMax = d.fi[pi];
      m.userData = { d, part: c.part }; m.visible = false; s.fea.set(`${c.part}__${c.case}`, m); s.scene.add(m); s.dirty = true; setFeaN(n => n + 1);
    }));
  }, [fea]);

  // animate the release sequence
  useEffect(() => {
    if (!playing) return; let t0 = performance.now(), p0 = phase >= 2 ? 0 : phase, raf;
    const f = now => { const p = p0 + (now - t0) / 1600; setPhase(Math.min(p, 2)); if (p < 2) raf = requestAnimationFrame(f); else setPlaying(false); };
    raf = requestAnimationFrame(f); return () => cancelAnimationFrame(raf);
  }, [playing]);

  const groups = fea?.groups || GROUPS, hasFea = !!fea;
  const shown = mode === 'fea' && fea && groups[group] ? groups[group].parts : {};
  const mo = man?.motion, ease = x => x * x * (3 - 2 * x);
  const alpha = mo ? mo.a_latch + (mo.a_release - mo.a_latch) * ease(Math.min(phase, 1)) : 0;
  const kx = mo ? mo.r * (Math.cos(alpha * Math.PI / 180) - Math.cos(mo.a_latch * Math.PI / 180)) : 0;
  const loadMax = fea?.cases ? Math.max(60, Math.ceil(Math.min(...fea.cases.map(c => c.fail_N)) * 1.2)) : 60;
  const k = fea ? 31 / fea.z_tds_MPa : 1;
  const uMax = Math.max(1e-9, ...[...s.fea.values()].filter(m => shown[m.userData.part] && !hidden[m.userData.part]).map(m => (m.userData.d.fiMax || 0) * load * k));
  const scale = autoScale ? uMax : 1;
  const rows = fea ? Object.entries(shown).map(([p, c]) => fea.cases.find(x => x.part === p && x.case === c)).filter(Boolean) : [];
  const gov = rows.reduce((a, b) => (!a || b.fail_N < a.fail_N ? b : a), null);

  useEffect(() => { // ?peak=1: frame the governing peak once its surface is loaded
    if (!gov || mode !== 'fea' || new URLSearchParams(location.search).get('peak') !== '1' || s.peaked) return;
    const m = s.fea.get(`${gov.part}__${gov.case}`); if (!m?.userData.d.peakV) return;
    s.peaked = true; s.tick?.(); lookAtPeak(s, m.userData.d, m.position);
  }, [feaN, gov, mode]);

  // per-frame placement + colouring
  s.tick = () => {
    if (!man) return;
    const ease = x => x * x * (3 - 2 * x), ph = phase;
    const retract = ease(Math.min(ph, 1)), drop = ease(Math.max(0, Math.min(ph - 1, 1)));
    const place = (m, id, M = man, mot = { mo, alpha, kx }, dx = 0) => {
      const { mo, alpha, kx } = mot;
      const p = M.parts.find(q => q.id === id); const e = p?.explode || [0, 0, 0];
      let x = e[0] * explode, y = e[1] * explode, z = e[2] * explode;
      if (mo) {
        if (mo.slide.includes(id)) x += kx;
        if (mo.drop.includes(id)) z -= mo.drop_mm * drop;
        if (mo.rotate.includes(id)) { // rotate about the servo axis (Y); +alpha turns X toward Z
          const th = -(alpha - mo.a_latch) * Math.PI / 180, [px, , pz] = mo.pivot, c = Math.cos(th), sn = Math.sin(th);
          m.rotation.set(0, th, 0); x += px - (px * c + pz * sn); z += pz - (-px * sn + pz * c);
        } else m.rotation.set(0, 0, 0);
        m.position.set(x + dx, y, z); return;
      }
      if (MOVERS.includes(id)) x += STROKE * retract;
      if (id === 'N2_return_spring') { m.scale.x = 1 - 0.35 * retract; } // compressed by the armature collar
      if (id === 'N2_adapter') z += DROP * drop;
      m.position.set(x + dx, y, z);
    };
    const cmpOn = cmp !== null && diff && mode === 'model', side = cmpView === 'side';
    const paint = (m, id, isBase) => { // diff colouring; returns visibility
      const st = diff[id], op = m.userData.p?.opacity ?? 1, mat = m.material;
      if (!m.userData.c0) m.userData.c0 = mat.color.clone();
      if (onlyChanged && st === 'same') return false;
      const col = diffCol ? (st === 'same' ? DIFF.same : isBase ? (st === 'removed' || st === 'changed' || st === 'moved' ? DIFF.removed : DIFF.same) : DIFF[st] || DIFF.same) : null;
      col ? mat.color.set(col) : mat.color.copy(m.userData.c0);
      // overlay: baseline drawn as a translucent ghost; unchanged proposed parts dimmed so changes stand out
      const o = !side && isBase ? (st === 'same' ? 0 : 0.28) : !side && diffCol && st === 'same' ? 0.3 : op;
      mat.transparent = o < 1; mat.opacity = o; mat.depthWrite = o >= 1; mat.wireframe = !side && isBase && st === 'changed';
      return o > 0;
    };
    for (const [id, m] of s.parts) {
      place(m, id);
      const inFea = mode === 'fea' && shown[id];
      m.visible = !hidden[id] && !inFea && (mode === 'model' || ghost);
      const op = m.userData.p?.opacity ?? 1;
      m.material.transparent = mode === 'fea' || op < 1; m.material.opacity = mode === 'fea' ? 0.12 * op : op; m.material.depthWrite = mode !== 'fea' && op >= 1;
      if (cmpOn) { m.visible = m.visible && paint(m, id, !otherIsBase); m.material.wireframe = m.material.wireframe && m.visible; }
      else if (m.userData.c0) { m.material.color.copy(m.userData.c0); m.material.wireframe = false; }
    }
    if (cmpMan) {
      const mot = motionOf(cmpMan, ph), dx = side ? sideDx : 0;
      for (const [id, m] of s.cparts) {
        place(m, id, cmpMan, mot, dx); m.visible = !!cmpOn && !hidden[id] && paint(m, id, otherIsBase);
      }
    }
    s.markers.clear();
    if (cmp !== null && cmpMan && mode === 'model' && side) for (const [t, dx] of [[`BASELINE: ${baseLabel}`, otherIsBase ? sideDx : 0], [`PROPOSED: ${propLabel}`, otherIsBase ? 0 : sideDx]]) {
      const lb = label(t); lb.position.set(man.bounds.min[0] + dx, man.bounds.min[1], man.bounds.max[2] + 14); s.markers.add(lb);
    }
    for (const [key, m] of s.fea) {
      const on = shown[m.userData.part] && key === `${m.userData.part}__${shown[m.userData.part]}` && !hidden[m.userData.part];
      m.visible = !!on; if (!on) continue; place(m, m.userData.part);
      const ck = `${load}|${k}|${scale}`;
      if (m.userData.ck !== ck) {
        const col = m.geometry.attributes.color, c = new T.Color(), fi = m.userData.d.fi;
        for (let i = 0; i < fi.length; i++) { cmap(fi[i] * load * k / scale, c); col.setXYZ(i, c.r, c.g, c.b); }
        col.needsUpdate = true; m.userData.ck = ck;
      }
      const d = m.userData.d, isGov = gov && d.part === gov.part, fade = focus && gov && !isGov;
      m.material.transparent = fade; m.material.opacity = fade ? 0.12 : 1; m.material.depthWrite = !fade;
      const mk = new T.Mesh(new T.SphereGeometry(isGov ? 0.9 : 0.6, 20, 14), new T.MeshBasicMaterial({ color: isGov ? 0xffffff : 0xabb3bf, depthTest: false, transparent: true, opacity: 0.95 }));
      mk.position.set(...(d.peakV || d.peak_mm)).add(m.position);
      if (isGov) { const lb = label(`PEAK ${short(d.part)}: ${(d.fiMax * load * k).toFixed(2)} of limit`); lb.position.copy(mk.position).add(new T.Vector3(...(d.peakN || [0, 0, 1])).multiplyScalar(4)); s.markers.add(lb); } mk.renderOrder = 10; s.markers.add(mk);
      if (isGov) { const ring = new T.Mesh(new T.TorusGeometry(1.6, 0.18, 8, 32), mk.material); ring.position.copy(mk.position); ring.quaternion.copy(s.cam.quaternion); ring.renderOrder = 10; s.markers.add(ring); }
    }
  };

  const ids = [...new Set([...(man?.parts.map(p => p.id) || []), ...(cmp !== null && cmpMan ? cmpMan.parts.map(p => p.id) : [])])];
  const pcol = id => (man.parts.find(p => p.id === id) || cmpMan.parts.find(p => p.id === id)).color;
  const verLabel = path => (versions.find(v => v.path === path)?.label || (path ? path.replace(/\/$/, '') : 'main'));
  const thisLabel = verLabel(THIS_PATH), otherLabel = cmp === null ? '' : verLabel(cmp);
  const baseLabel = otherIsBase ? otherLabel : thisLabel, propLabel = otherIsBase ? thisLabel : otherLabel;
  const minFail = f => f?.cases?.filter(c => c.in_scope !== false && c.case === 'Z').reduce((a, b) => (!a || b.fail_N < a.fail_N ? b : a), null);
  const feaRows = (() => { const [fa, fb] = otherIsBase ? [cmpFea, fea] : [fea, cmpFea]; if (!fa && !fb) return [];
    const r = [], ga = minFail(fa), gb = minFail(fb);
    if (ga || gb) r.push(['Straight-pull screen (min)', ga ? `${ga.fail_N} N (${short(ga.part)})` : '–', gb ? `${gb.fail_N} N (${short(gb.part)})` : '–', ga && gb ? gb.fail_N - ga.fail_N : null]);
    const parts = [...new Set([...(fa?.cases || []), ...(fb?.cases || [])].filter(c => c.case === 'Z').map(c => c.part))];
    for (const p of parts) { const a = fa?.cases.find(c => c.part === p && c.case === 'Z'), b = fb?.cases.find(c => c.part === p && c.case === 'Z');
      r.push([`  ${short(p)} Z`, a ? `${a.fail_N} N` : '–', b ? `${b.fail_N} N` : '–', a && b ? b.fail_N - a.fail_N : null]); }
    for (const k of ['design_N', 'required_fail_N', 'material']) if ((fa?.[k] ?? '') !== (fb?.[k] ?? '')) r.push([k, fa?.[k] ?? '–', fb?.[k] ?? '–', null]);
    return r; })();
  const motRows = (() => { const [ma, mb] = otherIsBase ? [cmpMan, man] : [man, cmpMan]; if (!ma || !mb) return [];
    const flat = m => ({ parts: m.parts.length, ...Object.fromEntries(Object.entries(m.motion || {}).filter(([, v]) => typeof v === 'number')), ...Object.fromEntries((m.bounds?.size || []).map((v, i) => ['envelope ' + 'XYZ'[i], +v.toFixed(1)])) });
    const a = flat(ma), b = flat(mb); return Object.keys({ ...a, ...b }).map(k => [k, a[k] ?? '–', b[k] ?? '–', typeof a[k] === 'number' && typeof b[k] === 'number' ? +(b[k] - a[k]).toFixed(3) : null]); })();
  const nChanged = diff ? Object.entries(diff).filter(([k, v]) => !k.includes('#') && v !== 'same' && v !== 'loading').length : 0;
  const status = fea && (() => { const z = fea.cases.filter(c => c.in_scope && c.case === 'Z'); const g = z.reduce((a, b) => (b.fail_N < a.fail_N ? b : a)); return g; })();

  return (
    <div className="app">
      <div className="panel">
        <div className="status">
          Version: <Tag minimal intent={BUILD.label === 'main' ? 'success' : 'warning'}>{BUILD.label}</Tag> {BUILD.sha && <code>{BUILD.sha}</code>}
          {versions.length > 1 && <HTMLSelect fill minimal value="" onChange={e => { location.href = SITE_ROOT + e.target.value; }}
            options={[{ value: '', label: 'Switch version…' }, ...versions.map(v => ({ value: v.path, label: v.label + (v.title ? ` — ${v.title}` : '') }))]} />}
        </div>
        {designs.length > 1 && <HTMLSelect fill value={design || ''} onChange={e => setDesign(e.target.value)} options={designs.map(d => ({ value: d.id, label: d.label }))} />}
        <div className="status">
          <b>N2 hardpoint · {p14 ? fea?.revision || '' : man?.revision || ''}</b><br />
          {!p14 && man && <>{man.parts.length} parts from CI-built CAD (cad/viewer.py){mo ? ', release driven by the servo crank kinematics.' : '.'}</>}
          {status && <>
            Straight-pull stress screen <b>{status.fail_N.toFixed(2)} N</b> ({short(status.part)} governs). Dividing by SF 2 gives {status.rating_sf2_N.toFixed(2)} N for comparison only.<br />
            <b>No working-load rating assigned.</b> No printed or loaded-release tests recorded.<br />
            Design load: {fea.design_N} N. Sacrificial bench target: {fea.required_fail_N} N.
          </>}
        </div>
        <ButtonGroup fill>
          <Button intent={mode === 'model' ? 'primary' : 'none'} icon="cube" text="Model" onClick={() => setMode('model')} />
          <Button intent={mode === 'fea' ? 'primary' : 'none'} icon="heat-grid" text="FEA" disabled={!hasFea} onClick={() => setMode('fea')} />
        </ButtonGroup>

        <h6>Compare</h6>
        <HTMLSelect fill value={cmp === null ? '__off' : cmp} onChange={e => setCmp(e.target.value === '__off' ? null : e.target.value)}
          options={[{ value: '__off', label: 'Off (this version only)' }, ...(versions.length ? versions : [{ path: '', label: 'main' }]).filter(v => v.path !== THIS_PATH)
            .map(v => ({ value: v.path, label: `${otherIsBase ? 'Baseline' : 'Proposed'}: ${v.label}${v.title ? ` — ${v.title}` : ''}` }))]} />
        {cmp !== null && <>
          <div className="status">Baseline <Tag minimal>{baseLabel}</Tag> → proposed <Tag minimal intent="warning">{propLabel}</Tag>
            {cmpErr && <><br /><span style={{ color: DIFF.removed }}>{cmpErr}</span></>}
            {diff && <><br /><b>{nChanged}</b> of {Object.keys(diff).filter(k => !k.includes('#')).length} parts differ (by part name; geometry compared by triangle count, bounding box and centroid).</>}</div>
          <ButtonGroup fill>
            <Button small intent={cmpView === 'overlay' ? 'primary' : 'none'} text="Overlay" onClick={() => setCmpView('overlay')} />
            <Button small intent={cmpView === 'side' ? 'primary' : 'none'} text="Side by side" onClick={() => setCmpView('side')} />
          </ButtonGroup>
          <Switch checked={diffCol} label="Colour by change" onChange={() => setDiffCol(!diffCol)} />
          <Switch checked={onlyChanged} label="Hide unchanged parts" onChange={() => setOnlyChanged(!onlyChanged)} />
          <div className="status">{Object.entries(DIFF).map(([k, c]) => <span key={k} style={{ marginRight: 8 }}><span className="swatch" style={{ background: c }} />{k}</span>)}<br />
            {cmpView === 'overlay' ? 'Overlay: baseline drawn as a red ghost (wireframe where changed).' : 'Side by side: baseline left, proposed right; one camera.'}</div>
          {diff && <table className="fea"><thead><tr><th>Part</th><th>Change</th></tr></thead><tbody>
            {Object.entries(diff).filter(([k, v]) => !k.includes('#') && v !== 'same').map(([k, v]) => <tr key={k} title={diff[k + '#d'] || ''}><td>{short(k)}</td><td style={{ color: DIFF[v] }}>{v}{diff[k + '#d'] && <div style={{ color: '#abb3bf', fontSize: 10 }}>{diff[k + '#d']}</div>}</td></tr>)}
          </tbody></table>}
          {[...feaRows, ...motRows.filter(r => r[1] !== r[2])].length > 0 && <table className="fea"><thead><tr><th>Key value</th><th>Base</th><th>Prop.</th><th>Δ</th></tr></thead><tbody>
            {[...feaRows, ...motRows.filter(r => r[1] !== r[2])].map(([k, a, b, d]) => <tr key={k}><td>{k}</td><td className="n">{String(a)}</td><td className="n">{String(b)}</td>
              <td className="n" style={{ color: d > 0 ? DIFF.added : d < 0 ? DIFF.removed : undefined }}>{d === null ? '' : (d > 0 ? '+' : '') + (+d.toFixed(2))}</td></tr>)}
          </tbody></table>}
          {mode === 'fea' && <div className="status">Compare overlay is shown in Model mode; FEA shows this version.</div>}
        </>}

        <h6>Explode</h6>
        <Slider min={0} max={1} stepSize={0.01} labelRenderer={false} value={explode} onChange={setExplode} />

        {(p14 || mo) && <><h6>Release sequence</h6>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Button small icon={playing ? 'pause' : 'play'} onClick={() => setPlaying(!playing)} />
          <Button small icon="reset" onClick={() => { setPlaying(false); setPhase(0); }} />
          <div style={{ flex: 1, paddingTop: 4 }}><Slider min={0} max={2} stepSize={0.01} labelRenderer={false} value={phase} onChange={v => { setPlaying(false); setPhase(v); }} /></div>
        </div>
        <div className="status">{mo ? (phase < 0.02 ? `Latched: servo ${mo.a_latch}°, keeper through the adapter tab.`
          : phase <= 1 ? `Servo ${alpha.toFixed(0)}° → ${mo.a_release}°: pin drives the keeper +X ${kx.toFixed(1)} / ${(mo.r * (Math.cos(mo.a_release * Math.PI / 180) - Math.cos(mo.a_latch * Math.PI / 180))).toFixed(1)} mm.`
          : 'Keeper clear of the tab; adapter and payload drop by gravity.') + ' Kinematics from params.py, not a tested release.' : phase < 0.02 ? 'Latched: keeper crosses the adapter lug.' : phase <= 1 ? `Solenoid pulls keeper +X ${(STROKE * phase * phase * (3 - 2 * phase)).toFixed(1)} / ${STROKE} mm.` : 'Keeper open; illustrated adapter travel is +Z. Actual clearance requires an external departure force.'} {!mo && 'This is a prescribed motion illustration, not a tested release.'}</div></>}

        {mode === 'fea' && fea && <>
          <h6>Load case</h6>
          <HTMLSelect fill value={group} onChange={e => setGroup(e.target.value)} options={Object.entries(groups).map(([v, g]) => ({ value: v, label: g.label }))} />
          <h6>Applied load: {load.toFixed(1)} N</h6>
          <Slider min={1} max={loadMax} stepSize={0.1} labelRenderer={false} value={load} onChange={setLoad} />
          <div className="row" style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <Button small text={`Design ${fea.design_N} N`} onClick={() => setLoad(fea.design_N)} />
            <Button small text={`Bench target ${fea.required_fail_N} N`} onClick={() => setLoad(fea.required_fail_N)} />
          </div>
          <table className="fea"><thead><tr><th>Part</th><th>Screen</th><th>Screen/load</th></tr></thead><tbody>
            {rows.map(r => <tr key={r.part}><td>{gov === r && '● '}{short(r.part)}</td><td className="n">{r.fail_N} N</td><td className="n">{(r.fail_N / load).toFixed(2)}×</td></tr>)}
          </tbody></table>
          <Switch checked={ghost} label="Ghost other parts" onChange={() => setGhost(!ghost)} />
          <Switch checked={autoScale} label="Scale colours to peak at this load" onChange={() => setAutoScale(!autoScale)} />
          <Switch checked={focus} label="Fade parts other than the governing one" onChange={() => setFocus(!focus)} />
          <Button small icon="locate" text="Look at peak" disabled={!gov} onClick={() => { setFocus(true); const m = s.fea.get(`${gov.part}__${gov.case}`); if (m?.userData.d.peakV) lookAtPeak(s, m.userData.d, m.position); }} />
          <div className="status">{fea.material.toUpperCase()}, {fea.note}</div>
        </>}

        <h6>Parts</h6>
        <div className="parts">
          {ids.map(id => <Checkbox key={id} checked={!hidden[id]} onChange={() => setHidden(h => ({ ...h, [id]: !h[id] }))}
            labelElement={<span><span className="swatch" style={{ background: diff && diffCol ? DIFF[diff[id]] || DIFF.same : pcol(id) }} />{short(id)}</span>} />)}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <Button small text="All" onClick={() => setHidden({})} />
          <Button small text="Printed only" onClick={() => setHidden(Object.fromEntries(man.parts.filter(p => !['printed', 'payload', 'moving'].includes(p.kind)).map(p => [p.id, true])))} />
        </div>
      </div>
      <div className="stage" ref={el}>
        {man && <ButtonGroup className="views" minimal>
          {['iso', 'front', 'side', 'top'].map(v => <Button key={v} small text={v} onClick={() => frame(v)} />)}
        </ButtonGroup>}
        {mode === 'fea' && fea && <div className="legend">
          Screen utilisation at {load.toFixed(1)} N {autoScale ? `(colours scaled to peak ${uMax.toFixed(2)}; 1.0 = assumed stress limit)` : '(1.0 = assumed stress limit)'}
          <div className="bar" style={{ background: GRAD }} />
          <div className="ticks"><span>0</span><span>{(0.5 * scale).toFixed(2)}</span><span>{scale.toFixed(2)}</span>{!autoScale && <span style={{ color: '#d91ad9' }}>&gt;1</span>}</div>
          {gov && <div style={{ marginTop: 4 }}>○ governing peak: {short(gov.part)} {(() => { const d = s.fea.get(`${gov.part}__${gov.case}`)?.userData.d; return d?.peakV ? `at (${d.peakV.map(v => v.toFixed(1)).join(', ')}) mm, ${(d.fiMax * load * k).toFixed(3)} of limit` : ''; })()}</div>}
        </div>}
        <div className="hint">Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point</div>
      </div>
    </div>
  );
}
