import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, ButtonGroup, HTMLSelect, Slider, Switch, Tag } from '@blueprintjs/core';
import * as T from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MeshBVH } from 'three-mesh-bvh';

// Every version (main at the Pages root, each PR at pr/<n>/) is loaded from its published path,
// so any version can be compared with any other without merging.
const SITE_ROOT = import.meta.env.VITE_SITE_ROOT || './';
const BUILD = { label: import.meta.env.VITE_BUILD_LABEL || 'local build', sha: (import.meta.env.VITE_BUILD_SHA || '').slice(0, 7) };
const Q = new URLSearchParams(location.search);
const THIS_PATH = (location.pathname.match(/\/(pr\/\d+\/)/) || [])[1] || '';
const norm = p => (!p || p === 'main' ? '' : p.replace(/^\/+|\/+$/g, '') + '/');
const prNum = path => (path.match(/pr\/(\d+)/) || [])[1];
const verName = v => (v.path ? `#${prNum(v.path)} ${v.title || v.label}` : 'main');
const verShort = path => (path ? `#${prNum(path)}` : 'main');
const short = id => id.replace(/^N2_/, '').replace(/_/g, ' ');

const DIFF = { added: '#32a467', removed: '#e76a6e', changed: '#f0b726', moved: '#4c90f0', same: '#738091' };
const STROKE = 3, DROP = 22;                    // P14 solenoid illustration
const MOVERS = ['N2_keeper', 'N2_armature'];
const GROUPS = {
  Z: { label: 'Straight pull (R3)', parts: { N2_adapter: 'Z', N2_receiver: 'Z', N2_keeper: 'Z' } },
  Z_distal_lost: { label: 'Straight pull, distal roof lost', parts: { N2_adapter: 'Z', N2_receiver: 'Z_distal_lost', N2_keeper: 'Z_distal_lost' } },
  XZ90: { label: 'Side pull 90° (outside R3)', parts: { N2_adapter: 'XZ90', N2_receiver: 'XZ90' } },
};

function cmap(u, c) { // turbo-like, >1 magenta
  if (u > 1) return c.setRGB(0.85, 0.1, 0.85);
  const s = [[0.19, 0.07, 0.23], [0.16, 0.47, 0.93], [0.1, 0.84, 0.66], [0.64, 0.99, 0.24], [0.98, 0.73, 0.22], [0.86, 0.22, 0.05]];
  const x = Math.max(0, u) * (s.length - 1), i = Math.min(Math.floor(x), s.length - 2), f = x - i;
  return c.setRGB(...s[i].map((a, k) => a + (s[i + 1][k] - a) * f));
}
const GRAD = `linear-gradient(90deg, ${[0, .2, .4, .6, .8, 1].map(u => '#' + cmap(u, new T.Color()).getHexString()).join(',')})`;

// geometry signature: triangles, bbox, centroid (0.01 mm)
function sig(g) {
  const a = g.attributes.position, n = a.count; g.computeBoundingBox(); const b = g.boundingBox;
  let cx = 0, cy = 0, cz = 0; for (let i = 0; i < n; i++) { cx += a.getX(i); cy += a.getY(i); cz += a.getZ(i); }
  return { tris: n / 3, size: b.getSize(new T.Vector3()).toArray(), c: [cx / n, cy / n, cz / n], bc: b.getCenter(new T.Vector3()).toArray(), key: [n / 3, ...b.min.toArray(), ...b.max.toArray(), cx / n, cy / n, cz / n].map(v => v.toFixed(2)).join(',') };
}
// signed distance of every vertex of `src` to the surface of `dst` (src point p maps to dst frame as p + off).
// > 0: src lies outside dst. Runs in slices so the page stays responsive.
async function deviation(src, dst, off, step = 1) {
  const g = new T.BufferGeometry(); g.setAttribute('position', dst.attributes.position.clone());
  const bvh = new MeshBVH(g), P = src.attributes.position, D = g.attributes.position, I = g.index, out = new Float32Array(Math.ceil(P.count / step));
  const q = new T.Vector3(), hit = { point: new T.Vector3() }, tri = new T.Triangle(), n = new T.Vector3(), o = new T.Vector3(...off);
  for (let i = 0, j = 0; i < P.count; i += step, j++) {
    q.fromBufferAttribute(P, i).add(o); bvh.closestPointToPoint(q, hit);
    const f = hit.faceIndex * 3, ix = k => (I ? I.getX(f + k) : f + k);
    tri.setFromAttributeAndIndices(D, ix(0), ix(1), ix(2)).getNormal(n);
    out[j] = Math.sign(q.clone().sub(hit.point).dot(n)) * hit.distance;
    if (j % 20000 === 19999) await new Promise(r => setTimeout(r));
  }
  let mx = 0, mn = 0, sum = 0, over = 0; for (const d of out) { mx = Math.max(mx, d); mn = Math.min(mn, d); sum += Math.abs(d); }
  return { d: out, max: mx, min: mn, mean: sum / out.length };
}
const GREY = new T.Color('#8a939f'), GREEN = new T.Color('#32a467'), RED = new T.Color('#e76a6e');
function devColor(d, tol, scale, c) { // diverging: red = inward/removed, grey = within tolerance, green = outward/added
  if (Math.abs(d) <= tol) return c.copy(GREY);
  return c.copy(GREY).lerp(d > 0 ? GREEN : RED, Math.min(1, 0.35 + 0.65 * (Math.abs(d) - tol) / Math.max(scale - tol, 1e-6)));
}
const DEVGRAD = `linear-gradient(90deg, #e76a6e, #8a939f 42%, #8a939f 58%, #32a467)`;
const median = a => { const b = [...a].sort((x, y) => x - y); return b.length ? b[b.length >> 1] : 0; };
const shapeKey = s => [s.tris, ...s.size.map(v => v.toFixed(2))].join(',');

function motionOf(man, phase) {
  const mo = man?.motion, ease = x => x * x * (3 - 2 * x);
  const alpha = mo ? mo.a_latch + (mo.a_release - mo.a_latch) * ease(Math.min(phase, 1)) : 0;
  const kx = mo ? mo.r * (Math.cos(alpha * Math.PI / 180) - Math.cos(mo.a_latch * Math.PI / 180)) : 0;
  return { mo, alpha, kx };
}

function label(text, color = '#fff') { // sprite sized to its text
  const cv = document.createElement('canvas'), x = cv.getContext('2d'); x.font = 'bold 28px sans-serif';
  const w = Math.ceil(x.measureText(text).width) + 28; cv.width = w; cv.height = 48;
  x.fillStyle = 'rgba(17,20,24,0.85)'; x.fillRect(0, 0, w, 48); x.fillStyle = color; x.font = 'bold 28px sans-serif'; x.textBaseline = 'middle'; x.fillText(text, 14, 25);
  const sp = new T.Sprite(new T.SpriteMaterial({ map: new T.CanvasTexture(cv), depthTest: false, transparent: true, sizeAttenuation: false }));
  sp.scale.set(0.024 * w / 48, 0.024, 1); sp.center.set(0.5, 0); sp.renderOrder = 11; return sp;
}

function useScene(el) {
  const st = useRef(null);
  if (!st.current) {
    const scene = new T.Scene();
    scene.add(new T.HemisphereLight(0xffffff, 0x334455, 2.2));
    const d = new T.DirectionalLight(0xffffff, 1.6); d.position.set(60, -40, 90); scene.add(d);
    const d2 = new T.DirectionalLight(0xffffff, 0.6); d2.position.set(-50, 60, -30); scene.add(d2);
    const cam = new T.PerspectiveCamera(35, 1, 0.1, 3000); cam.up.set(0, 0, 1);
    st.current = { scene, cam, sets: { A: new Map(), B: new Map() }, fea: new Map(), markers: new T.Group() };
    scene.add(st.current.markers);
  }
  useEffect(() => {
    const s = st.current, r = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(devicePixelRatio); r.setClearColor(0x14171c); el.current.appendChild(r.domElement);
    const oc = new OrbitControls(s.cam, r.domElement);
    Object.assign(oc, { enableDamping: true, dampingFactor: 0.12, rotateSpeed: 0.9, zoomToCursor: true, screenSpacePanning: true });
    oc.mouseButtons = { LEFT: T.MOUSE.ROTATE, MIDDLE: T.MOUSE.PAN, RIGHT: T.MOUSE.PAN };
    s.oc = oc; let alive = true;
    const ray = new T.Raycaster();
    r.domElement.addEventListener('dblclick', e => { // orbit around the clicked point
      const b = r.domElement.getBoundingClientRect();
      ray.setFromCamera(new T.Vector2((e.clientX - b.left) / b.width * 2 - 1, -(e.clientY - b.top) / b.height * 2 + 1), s.cam);
      const hit = ray.intersectObjects([...s.sets.A.values(), ...s.sets.B.values(), ...s.fea.values()].filter(m => m.visible))[0];
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

function aim(s, box, dir, iso) {
  const c = box.getCenter(new T.Vector3()), d = box.getSize(new T.Vector3()).length() * 2.1 + 10;
  const v = { iso: iso || [0.75, -1, 0.65], front: [0, -1, 0.0001], top: [0.0001, -0.0001, 1], side: [1, 0, 0.0001] }[dir];
  s.oc.target.copy(c); s.cam.position.copy(c).add(new T.Vector3(...v).normalize().multiplyScalar(d)); s.oc.update();
}
const boxOf = b => new T.Box3(new T.Vector3(...b.min), new T.Vector3(...b.max));

// load one version's manifest + STLs (+ FEA index) into s.sets[key]
function useVersion(s, key, root, design, dd, onPart) {
  const [man, setMan] = useState(null), [fea, setFea] = useState(null), [err, setErr] = useState('');
  useEffect(() => {
    const set = s.sets[key]; for (const m of set.values()) { s.scene.remove(m); m.geometry.dispose(); } set.clear();
    setMan(null); setFea(null); setErr(''); if (root === null || !design) return;
    const tag = `${root}|${design}`; s['tag' + key] = tag; const base = `${root}model/${design}/`;
    fetch(`${base}manifest.json`, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); }).then(man => {
      if (s['tag' + key] !== tag) return; setMan(man); const L = new STLLoader();
      man.parts.forEach(p => L.load(`${base}${p.stl}`, g => {
        if (s['tag' + key] !== tag) return;
        const gg = dd?.p14 ? (g.computeVertexNormals(), g) : toCreasedNormals(g, Math.PI / 7);
        const metal = p.kind === 'purchased' && /screw|spline/.test(p.id);
        const m = new T.Mesh(gg, new T.MeshStandardMaterial({ color: p.color, metalness: metal ? 0.6 : 0.1, roughness: metal ? 0.35 : 0.6, side: T.DoubleSide }));
        m.userData = { p, sig: sig(g), c0: new T.Color(p.color), key }; set.set(p.id, m); s.scene.add(m); onPart();
      }));
    }).catch(e => s['tag' + key] === tag && setErr(`${design} not published at ${verShort(root.slice(SITE_ROOT.length))} (${e.message})`));
    if (dd?.p14 || dd?.fea) fetch(`${dd?.p14 ? root + 'fea/' : base + 'fea/'}index.json`, { cache: 'no-store' }).then(r => r.json())
      .then(f => s['tag' + key] === tag && setFea(f)).catch(() => {});
  }, [root, design]);
  return { man, fea, err };
}

export default function App() {
  const el = useRef();
  const s = useScene(el);
  const [versions, setVersions] = useState([{ path: '', label: 'main', title: '' }]);
  const [base, setBase] = useState(norm(Q.get('base') ?? (THIS_PATH ? '' : Q.get('compare') ?? '')));
  const [prop, setProp] = useState(norm(Q.get('prop') ?? (THIS_PATH || (Q.get('compare') ? '' : ''))));
  const [view, setView] = useState(Q.get('view') || (THIS_PATH || Q.get('compare') ? 'overlay' : 'single'));
  const [layer, setLayer] = useState(Q.get('mode') === 'fea' ? 'fea' : 'model');
  const [designs, setDesigns] = useState([]), [design, setDesign] = useState(Q.get('design'));
  const [explode, setExplode] = useState(Number(Q.get('explode') || 0));
  const [phase, setPhase] = useState(Number(Q.get('phase') || 0)), [playing, setPlaying] = useState(false);
  const [hidden, setHidden] = useState({}), [focus, setFocus] = useState(Q.get('focus'));
  const [diffCol, setDiffCol] = useState(Q.get('diffcolors') !== '0'), [onlyChanged, setOnlyChanged] = useState(Q.get('changed') === '1');
  const [group, setGroup] = useState('Z'), [load, setLoad] = useState(Number(Q.get('load') || 17.8));
  const [autoScale, setAutoScale] = useState(Q.get('scale') !== 'abs'), [fade, setFade] = useState(Q.get('fade') !== '0'), [ghost, setGhost] = useState(true);
  const [devOn, setDevOn] = useState(Q.get('devmap') !== '0'), [tol, setTol] = useState(Number(Q.get('tol') || 0.05)), [dscale, setDscale] = useState(Number(Q.get('dscale') || 1));
  const [onlyDiff, setOnlyDiff] = useState(Q.get('onlydiff') === '1'), [removedOv, setRemovedOv] = useState(Q.get('removed') !== '0'), [align, setAlign] = useState(Q.get('align') || 'assembly');
  const [devN, setDevN] = useState(0);
  const [nLoaded, setNLoaded] = useState(0), [feaN, setFeaN] = useState(0);
  const bump = () => setNLoaded(n => n + 1);
  const compare = view !== 'single';

  useEffect(() => {
    fetch(`${SITE_ROOT}versions.json`, { cache: 'no-store' }).then(r => r.json()).then(vs => {
      vs = [...vs].sort((a, b) => (a.path ? +prNum(a.path) : 1e9) - (b.path ? +prNum(b.path) : 1e9)).reverse();
      setVersions(vs.length ? vs : [{ path: '', label: 'main', title: '' }]);
    }).catch(() => {});
  }, []);
  // design list from the proposal (falls back to this build)
  useEffect(() => {
    const get = r => fetch(`${r}model/designs.json`, { cache: 'no-store' }).then(x => { if (!x.ok) throw 0; return x.json(); });
    get(SITE_ROOT + prop).catch(() => get('')).then(ds => {
      setDesigns(ds); setDesign(d => (ds.find(x => x.id === d) ? d : ds[ds.length - 1]?.id));
    }).catch(() => {});
  }, [prop]);
  const dd = designs.find(d => d.id === design);
  const B = useVersion(s, 'B', SITE_ROOT + prop, design, dd, bump);
  const A = useVersion(s, 'A', compare ? SITE_ROOT + base : null, design, dd, bump);
  const man = B.man, fea = B.fea, p14 = dd?.p14;

  // shareable URL (never required)
  useEffect(() => {
    const u = new URL(location.href), q = u.searchParams; q.delete('compare');
    const setq = (k, v, def) => (v === def || v === null ? q.delete(k) : q.set(k, v));
    setq('design', design, null); setq('base', base ? base.replace(/\/$/, '') : 'main', null); setq('prop', prop ? prop.replace(/\/$/, '') : 'main', null);
    setq('view', view, 'single'); setq('mode', layer, 'model'); setq('explode', explode ? String(explode) : null, null);
    setq('diffcolors', diffCol ? null : '0', null); setq('devmap', devOn ? null : '0', null); setq('tol', tol === 0.05 ? null : String(tol), null); setq('dscale', dscale === 1 ? null : String(dscale), null);
    setq('onlydiff', onlyDiff ? '1' : null, null); setq('removed', removedOv ? null : '0', null); setq('align', align, 'assembly'); setq('focus', focus, null); setq('changed', onlyChanged ? '1' : null, null);
    history.replaceState(null, '', u);
  }, [design, base, prop, view, layer, explode, diffCol, onlyChanged, devOn, tol, dscale, onlyDiff, removedOv, align, focus]);

  // FEA surfaces for the proposal (Single view)
  useEffect(() => {
    for (const m of s.fea.values()) { s.scene.remove(m); m.geometry.dispose(); } s.fea.clear(); s.peaked = false;
    if (!fea) return; const fb = p14 ? `${SITE_ROOT}${prop}fea/` : `${SITE_ROOT}${prop}model/${design}/fea/`, tag = s.tagB;
    fea.cases.forEach(c => fetch(`${fb}${c.part}__${c.case}.json`).then(r => r.json()).then(d => {
      if (tag !== s.tagB) return;
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(d.pos, 3)); g.setIndex(d.idx); g.computeVertexNormals();
      g.setAttribute('color', new T.Float32BufferAttribute(new Float32Array(d.pos.length), 3));
      const m = new T.Mesh(g, new T.MeshStandardMaterial({ vertexColors: true, metalness: 0, roughness: 0.75, side: T.DoubleSide }));
      let pi = 0; for (let i = 1; i < d.fi.length; i++) if (d.fi[i] > d.fi[pi]) pi = i;
      const ctr = new T.Vector3(); g.computeBoundingBox(); g.boundingBox.getCenter(ctr);
      const pv = new T.Vector3().fromBufferAttribute(g.attributes.position, pi), pn = new T.Vector3().fromBufferAttribute(g.attributes.normal, pi);
      if (pn.dot(pv.clone().sub(ctr)) < 0) pn.negate();
      d.peakV = pv.toArray(); d.peakN = pn.normalize().toArray(); d.fiMax = d.fi[pi];
      m.userData = { d, part: c.part }; m.visible = false; s.fea.set(`${c.part}__${c.case}`, m); s.scene.add(m); setFeaN(n => n + 1);
    }));
  }, [fea]);

  useEffect(() => { // release sequence playback
    if (!playing) return; const t0 = performance.now(), p0 = phase >= 2 ? 0 : phase; let raf;
    const f = now => { const p = p0 + (now - t0) / 1600; setPhase(Math.min(p, 2)); if (p < 2) raf = requestAnimationFrame(f); else setPlaying(false); };
    raf = requestAnimationFrame(f); return () => cancelAnimationFrame(raf);
  }, [playing]);

  // ---------- diff ----------
  // baseline -> proposal translation per part. 'assembly': median offset of parts whose shape is unchanged,
  // so a whole-assembly shift reads as 'moved'/'same' and isn't painted as a shape change.
  const offs = useMemo(() => {
    const o = {}; if (!compare || !A.man || !B.man) return o;
    const pairs = [...s.sets.B].map(([id, b]) => [id, b, s.sets.A.get(id)]).filter(([, b, a]) => a);
    const same = pairs.filter(([, b, a]) => shapeKey(a.userData.sig) === shapeKey(b.userData.sig));
    const g = [0, 1, 2].map(k => median(same.map(([, b, a]) => b.userData.sig.c[k] - a.userData.sig.c[k])));
    const fits = (b, a, v) => [0, 1, 2].every(k => Math.abs(b.userData.sig.c[k] - a.userData.sig.c[k] - v[k]) < 0.02);
    for (const [id, b, a] of pairs) o[id] = align === 'assembly' ? (fits(b, a, g) ? g : [0, 0, 0]) : align === 'none' ? [0, 0, 0] : align === 'part' ? [0, 1, 2].map(k => b.userData.sig.bc[k] - a.userData.sig.bc[k]) : g;
    o._g = align === 'assembly' ? g : [0, 0, 0]; return o;
  }, [compare, A.man, B.man, nLoaded, align]);
  const diff = useMemo(() => {
    if (!compare || !A.man || !B.man) return null;
    const ids = [...new Set([...A.man.parts.map(p => p.id), ...B.man.parts.map(p => p.id)])], out = {};
    for (const id of ids) {
      const a = s.sets.A.get(id), b = s.sets.B.get(id), inA = A.man.parts.some(p => p.id === id), inB = B.man.parts.some(p => p.id === id);
      const o = offs[id] || [0, 0, 0], shape = a && b && shapeKey(a.userData.sig) === shapeKey(b.userData.sig);
      const still = shape && [o, align === 'assembly' ? [0, 0, 0] : o].some(o2 => [0, 1, 2].every(k => Math.abs(b.userData.sig.c[k] - a.userData.sig.c[k] - o2[k]) < 0.02));
      const st = !inA ? 'added' : !inB ? 'removed' : !a || !b ? 'loading' : still ? 'same' : shape ? 'moved' : 'changed';
      const f = v => v.map(x => x.toFixed(1)).join('×');
      out[id] = { st, note: st === 'changed' ? `${f(a.userData.sig.size)} → ${f(b.userData.sig.size)} mm · ${a.userData.sig.tris}→${b.userData.sig.tris} tris` : st === 'moved' ? 'same shape, new position' : '' };
    }
    return out;
  }, [compare, A.man, B.man, nLoaded, offs]);
  useEffect(() => {
    if (!diff || !devOn) return; let stop = false; s.dev = s.dev || {};
    (async () => { for (const [id, d] of Object.entries(diff)) {
      if (stop) return; if (d.st !== 'changed') continue;
      const a = s.sets.A.get(id), b = s.sets.B.get(id), o = offs[id], key = `${s.tagA}|${s.tagB}|${o}`;
      if (!a || !b || s.dev[id]?.key === key) continue;
      let best = o;
      if (align === 'assembly') { // best fit among: no shift, assembly shift, bbox-centre shift (coarse sample)
        const cands = [[0, 0, 0], offs._g, [0, 1, 2].map(k => b.userData.sig.bc[k] - a.userData.sig.bc[k])];
        const step = Math.max(1, Math.floor(b.geometry.attributes.position.count / 3000));
        let bm = Infinity; for (const c of cands) { const r = await deviation(b.geometry, a.geometry, c.map(v => -v), step); if (r.mean < bm) { bm = r.mean; best = c; } }
      }
      const neg = best.map(v => -v), fwd = await deviation(b.geometry, a.geometry, neg), rev = await deviation(a.geometry, b.geometry, best);
      if (stop) return; s.dev[id] = { key, fwd, rev, off: best }; setDevN(n => n + 1);
    } })();
    return () => { stop = true; };
  }, [diff, devOn]);
  const devOf = id => { const v = s.dev?.[id]; return v && v.key === `${s.tagA}|${s.tagB}|${offs[id]}` ? v : null; };
  const order = { added: 0, removed: 1, changed: 2, moved: 3, loading: 4, same: 5 };
  const changeList = diff ? Object.entries(diff).sort((a, b) => order[a[1].st] - order[b[1].st]) : [];
  const nDiff = changeList.filter(([, d]) => !['same', 'loading'].includes(d.st)).length;

  // ---------- FEA screen (single view) ----------
  const groups = fea?.groups || GROUPS, showFea = layer === 'fea' && !compare && !!fea;
  const shown = showFea && groups[group] ? groups[group].parts : {};
  const k = fea ? 31 / fea.z_tds_MPa : 1;
  const uMax = Math.max(1e-9, ...[...s.fea.values()].filter(m => shown[m.userData.part] && !hidden[m.userData.part]).map(m => (m.userData.d.fiMax || 0) * load * k));
  const scale = autoScale ? uMax : 1;
  const rows = fea ? Object.entries(shown).map(([p, c]) => fea.cases.find(x => x.part === p && x.case === c)).filter(Boolean) : [];
  const gov = rows.reduce((a, b) => (!a || b.fail_N < a.fail_N ? b : a), null);
  const loadMax = fea?.cases ? Math.max(60, Math.ceil(Math.min(...fea.cases.map(c => c.fail_N)) * 1.2)) : 60;
  const lookAtPeak = () => { const m = gov && s.fea.get(`${gov.part}__${gov.case}`); if (!m?.userData.d.peakV) return;
    const p = new T.Vector3(...m.userData.d.peakV).add(m.position), n = new T.Vector3(...m.userData.d.peakN);
    const v = n.clone().add(new T.Vector3(0, 0, n.z > 0.7 ? 0 : 0.35)).normalize(); s.oc.target.copy(p); s.cam.position.copy(p).add(v.multiplyScalar(70)); s.oc.update(); };
  useEffect(() => { if (gov && showFea && Q.get('peak') === '1' && !s.peaked && s.fea.get(`${gov.part}__${gov.case}`)) { s.peaked = true; s.tick?.(); lookAtPeak(); } }, [feaN, gov, showFea]);

  // ---------- layout ----------
  const lr = (man?.iso || A.man?.iso || [0.75, -1])[1] > 0 ? 1 : -1;  // baseline on screen-left in iso view
  const width = Math.max(man?.bounds.size[0] || 0, A.man?.bounds.size[0] || 0);
  const offA = view === 'side' ? lr * width * 0.68 : 0, offB = view === 'side' ? -lr * width * 0.68 : 0;
  const frame = (dir = 'iso') => {
    const ms = [B.man && [B.man, offB], compare && A.man && [A.man, offA]].filter(Boolean); if (!ms.length) return;
    const box = new T.Box3(); ms.forEach(([m, o]) => box.union(boxOf(m.bounds).translate(new T.Vector3(o, 0, 0))));
    aim(s, box, dir, (B.man || A.man).iso);
  };
  useEffect(() => { frame(); }, [view, !!B.man, !!A.man, design]);
  const focusOn = id => {
    if (focus === id) { setFocus(null); return frame(); }
    setFocus(id); s.tick?.(); const m = s.sets.B.get(id) || s.sets.A.get(id); if (!m) return;
    m.updateMatrixWorld(); aim(s, new T.Box3().setFromObject(m), 'iso', (B.man || A.man).iso);
  };

  // ---------- per frame ----------
  s.tick = () => {
    const ease = x => x * x * (3 - 2 * x), retract = ease(Math.min(phase, 1)), drop = ease(Math.max(0, Math.min(phase - 1, 1)));
    const place = (m, id, M, dx) => {
      const { mo, alpha, kx } = motionOf(M, phase), e = M.parts.find(q => q.id === id)?.explode || [0, 0, 0];
      let x = e[0] * explode, y = e[1] * explode, z = e[2] * explode;
      m.rotation.set(0, 0, 0); m.scale.set(1, 1, 1);
      if (mo) {
        if (mo.slide.includes(id)) x += kx;
        if (mo.drop.includes(id)) z -= mo.drop_mm * drop;
        if (mo.rotate.includes(id)) { const th = -(alpha - mo.a_latch) * Math.PI / 180, [px, , pz] = mo.pivot, c = Math.cos(th), sn = Math.sin(th);
          m.rotation.set(0, th, 0); x += px - (px * c + pz * sn); z += pz - (-px * sn + pz * c); }
      } else {
        if (MOVERS.includes(id)) x += STROKE * retract;
        if (id === 'N2_return_spring') m.scale.x = 1 - 0.35 * retract;
        if (id === 'N2_adapter') z += DROP * drop;
      }
      m.position.set(x + dx, y, z);
    };
    const style = (m, color, op, wire = false) => {
      const mat = m.material; color ? mat.color.set(color) : mat.color.copy(m.userData.c0);
      mat.transparent = op < 1; mat.opacity = op; mat.depthWrite = op >= 1; mat.wireframe = wire;
    };
    for (const key of ['A', 'B']) {
      const M = key === 'A' ? A.man : B.man, isBase = key === 'A';
      for (const [id, m] of s.sets[key]) {
        if (!M) { m.visible = false; continue; }
        place(m, id, M, key === 'A' ? offA : offB); if (key === 'A') { const o = devOf(id)?.off || offs[id]; if (o) m.position.add(new T.Vector3(...o)); }
        const op0 = m.userData.p.opacity ?? 1, st = diff?.[id]?.st;
        let vis = !hidden[id] && (key === 'B' || compare), color = null, op = op0, wire = false;
        if (compare && diff) {
          if (onlyChanged && st === 'same') vis = false;
          if (diffCol) color = st === 'same' || st === 'loading' ? DIFF.same : isBase ? DIFF.removed : DIFF[st];
          if (view === 'overlay') {
            if (isBase) { if (st === 'same') vis = false; op = 0.28; wire = st === 'changed'; }
            else if (diffCol && st === 'same') op = 0.3;
          }
        }
        if (showFea) { if (shown[id]) vis = false; else if (!ghost) vis = false; else op = 0.12 * op0; }
        if (focus && id !== focus) { op = Math.min(op, 0.08); wire = false; }
        const dv = compare && devOn && st === 'changed' && (!focus || focus === id) && devOf(id);
        const showDev = dv && (key === 'B' || removedOv);
        if (!m.userData.mat0) m.userData.mat0 = m.material;
        if (showDev) { // per-vertex deviation map
          const arr = key === 'B' ? dv.fwd.d : dv.rev.d, g = m.geometry, ck = `${dv.key}|${tol}|${dscale}|${onlyDiff}|${view}`;
          if (!g.attributes.devc || g.attributes.devc.count !== arr.length) g.setAttribute('devc', new T.Float32BufferAttribute(new Float32Array(arr.length * 4), 4));
          if (!m.userData.devMat) m.userData.devMat = new T.MeshStandardMaterial({ vertexColors: true, roughness: 0.65, side: T.DoubleSide });
          if (m.userData.ck !== ck) { const ca = g.attributes.devc, c = new T.Color();
            for (let i = 0; i < arr.length; i++) {
              if (key === 'B') { devColor(arr[i], tol, dscale, c); ca.setXYZW(i, c.r, c.g, c.b, onlyDiff && Math.abs(arr[i]) <= tol ? 0.06 : 1); }
              else { const out = arr[i] > tol; c.copy(out ? RED : GREY); ca.setXYZW(i, c.r, c.g, c.b, out ? 0.32 : (view === 'side' ? 0.35 : 0.04)); }
            }
            g.setAttribute('color', ca); ca.needsUpdate = true; m.userData.ck = ck; }
          const dm = m.userData.devMat, tr = key === 'A' || onlyDiff; dm.transparent = tr; dm.depthWrite = !tr; m.material = dm;
        } else m.material = m.userData.mat0;
        m.visible = vis; if (vis && !showDev) style(m, color, op, wire && vis);
      }
    }
    s.markers.clear();
    if (view === 'side' && A.man && B.man) for (const [t, o, M, c] of [[`Baseline · ${verShort(base)}`, offA, A.man, '#e76a6e'], [`Proposal · ${verShort(prop)}`, offB, B.man, '#f0b726']]) {
      const lb = label(t, c), b = M.bounds; lb.position.set((b.min[0] + b.max[0]) / 2 + o, (b.min[1] + b.max[1]) / 2, b.max[2] + 6); s.markers.add(lb);
    }
    for (const [fk, m] of s.fea) {
      const part = m.userData.part, on = showFea && fk === `${part}__${shown[part]}` && !hidden[part];
      m.visible = !!on; if (!on) continue; place(m, part, B.man, 0);
      const ck = `${load}|${k}|${scale}`;
      if (m.userData.ck !== ck) { const col = m.geometry.attributes.color, c = new T.Color(), fi = m.userData.d.fi;
        for (let i = 0; i < fi.length; i++) { cmap(fi[i] * load * k / scale, c); col.setXYZ(i, c.r, c.g, c.b); } col.needsUpdate = true; m.userData.ck = ck; }
      const d = m.userData.d, isGov = gov && part === gov.part, fd = fade && gov && !isGov;
      m.material.transparent = fd; m.material.opacity = fd ? 0.12 : 1; m.material.depthWrite = !fd;
      const mk = new T.Mesh(new T.SphereGeometry(isGov ? 0.9 : 0.6, 20, 14), new T.MeshBasicMaterial({ color: isGov ? 0xffffff : 0xabb3bf, depthTest: false, transparent: true, opacity: 0.95 }));
      mk.position.set(...d.peakV).add(m.position); mk.renderOrder = 10; s.markers.add(mk);
      if (isGov) { const lb = label(`Peak ${short(part)} ${(d.fiMax * load * k).toFixed(2)}`); lb.position.copy(mk.position).add(new T.Vector3(...d.peakN).multiplyScalar(4)); s.markers.add(lb);
        const ring = new T.Mesh(new T.TorusGeometry(1.6, 0.18, 8, 32), mk.material); ring.position.copy(mk.position); ring.quaternion.copy(s.cam.quaternion); ring.renderOrder = 10; s.markers.add(ring); }
    }
  };

  // ---------- delta table ----------
  const zMin = f => f?.cases?.filter(c => c.in_scope !== false && c.case === 'Z').reduce((a, b) => (!a || b.fail_N < a.fail_N ? b : a), null);
  const deltas = (() => {
    if (!compare) return [];
    const r = [], fa = A.fea, fb = B.fea, ga = zMin(fa), gb = zMin(fb);
    if (ga || gb) r.push(['Straight-pull screen (min)', ga?.fail_N, gb?.fail_N, ' N']);
    for (const p of [...new Set([...(fa?.cases || []), ...(fb?.cases || [])].filter(c => c.case === 'Z').map(c => c.part))])
      r.push([`  ${short(p)}`, fa?.cases.find(c => c.part === p && c.case === 'Z')?.fail_N, fb?.cases.find(c => c.part === p && c.case === 'Z')?.fail_N, ' N']);
    const flat = m => m ? { parts: m.parts.length, ...Object.fromEntries(Object.entries(m.motion || {}).filter(([, v]) => typeof v === 'number')), ...Object.fromEntries(m.bounds.size.map((v, i) => [`envelope ${'XYZ'[i]}`, +v.toFixed(1)])) } : {};
    const a = flat(A.man), b = flat(B.man);
    for (const key of Object.keys({ ...a, ...b })) if (a[key] !== b[key]) r.push([key, a[key], b[key], '']);
    return r;
  })();

  const status = fea && zMin(fea);
  const vOpts = versions.map(v => ({ value: v.path, label: verName(v) }));
  const mo = man?.motion, { alpha, kx } = motionOf(man, phase);
  const ids = [...new Set([...(B.man?.parts.map(p => p.id) || []), ...(compare && A.man ? A.man.parts.map(p => p.id) : [])])];
  const colorOf = id => (diff && diffCol ? DIFF[diff[id]?.st] || DIFF.same : (B.man?.parts.find(p => p.id === id) || A.man?.parts.find(p => p.id === id))?.color);

  return (
    <div className="app">
      <header className="top">
        <div className="brand">N2 hardpoint<span>{BUILD.label}{BUILD.sha && ` · ${BUILD.sha}`}</span></div>
        <label className="pick"><span>Design</span><HTMLSelect minimal value={design || ''} onChange={e => setDesign(e.target.value)} options={designs.map(d => ({ value: d.id, label: d.label }))} /></label>
        <label className={`pick base ${compare ? '' : 'off'}`}><span>Baseline</span><HTMLSelect minimal value={base} disabled={!compare} onChange={e => setBase(e.target.value)} options={vOpts} /></label>
        <label className="pick prop"><span>{compare ? 'Proposal' : 'Version'}</span><HTMLSelect minimal value={prop} onChange={e => setProp(e.target.value)} options={vOpts} /></label>
        <ButtonGroup className="seg">
          {[['single', 'Single'], ['overlay', 'Overlay'], ['side', 'Side by side']].map(([v, t]) => <Button key={v} small active={view === v} intent={view === v ? 'primary' : 'none'} text={t} onClick={() => setView(v)} />)}
        </ButtonGroup>
        <ButtonGroup className="seg">
          <Button small icon="cube" active={layer === 'model'} text="Model" onClick={() => setLayer('model')} />
          <Button small icon="heat-grid" active={layer === 'fea'} disabled={!fea || compare} title={compare ? 'FEA colours show in Single view' : ''} text="FEA" onClick={() => setLayer('fea')} />
        </ButtonGroup>
      </header>
      <div className="body">
        <div className="stage" ref={el}>
          <ButtonGroup className="views" minimal>{['iso', 'front', 'side', 'top'].map(v => <Button key={v} small text={v} onClick={() => frame(v)} />)}</ButtonGroup>
          {(B.err || A.err) && <div className="err">{[A.err && `Baseline: ${A.err}`, B.err && `Proposal: ${B.err}`].filter(Boolean).join(' · ')}</div>}
          {compare && <div className="legend chips">{Object.entries(DIFF).map(([k2, c]) => <span key={k2}><i style={{ background: c }} />{k2}</span>)}
            <div className="sub">{view === 'overlay' ? devOn ? 'Changed parts coloured by surface deviation; baseline shown as a ghost.' : 'Baseline drawn as a red ghost (wireframe where the shape changed).' : 'Baseline left, proposal right, shared camera.'}</div></div>}
          {compare && devOn && <div className="legend dev">
            Surface deviation, proposal vs baseline (mm)
            <div className="bar" style={{ background: DEVGRAD }} />
            <div className="ticks"><span>−{dscale.toFixed(1)} removed</span><span>±{tol.toFixed(2)}</span><span>+{dscale.toFixed(1)} added</span></div>
            {removedOv && <div className="sub">Red ghost: baseline surface that is no longer there.</div>}
          </div>}
          {showFea && <div className="legend">
            Utilisation at {load.toFixed(1)} N {autoScale ? `(scaled to peak ${uMax.toFixed(2)})` : '(1.0 = stress limit)'}
            <div className="bar" style={{ background: GRAD }} />
            <div className="ticks"><span>0</span><span>{(0.5 * scale).toFixed(2)}</span><span>{scale.toFixed(2)}</span>{!autoScale && <span style={{ color: '#d91ad9' }}>&gt;1</span>}</div>
          </div>}
          <div className="hint">Drag orbit · scroll zoom · right-drag pan · double-click re-centre</div>
        </div>

        <aside className="side">
          <section>
            <h6>{compare ? 'Changes' : 'Summary'}</h6>
            {compare ? <>
              <div className="muted"><b>{nDiff}</b> of {changeList.length} parts differ, <Tag minimal className="t-base">{verShort(base)}</Tag> → <Tag minimal className="t-prop">{verShort(prop)}</Tag>. Click a part to focus it.</div>
              <div className="list">{changeList.filter(([, d]) => !onlyChanged || d.st !== 'same').map(([id, d]) =>
                <button key={id} className={`row ${focus === id ? 'on' : ''}`} onClick={() => focusOn(id)}>
                  <i style={{ background: DIFF[d.st] || DIFF.same }} /><span className="nm">{short(id)}</span><span className="st" style={{ color: DIFF[d.st] }}>{d.st}</span>
                  {d.note && <span className="note">{d.note}</span>}
                  {d.st === 'changed' && devOn && (dv => dv ? <span className="note dev">
                    <b style={{ color: GREEN.getStyle() }}>+{dv.fwd.max.toFixed(2)}</b> / <b style={{ color: RED.getStyle() }}>{Math.min(dv.fwd.min, -dv.rev.max).toFixed(2)}</b> mm max · mean {dv.fwd.mean.toFixed(2)} mm</span>
                    : <span className="note">measuring surface deviation…</span>)(devOf(id))}
                </button>)}</div>
            </> : <div className="muted">
              {man && <>{man.name || man.id} · {man.parts.length} parts{mo ? ', release driven by the servo crank kinematics' : ''}.<br /></>}
              {status && <>Straight-pull stress screen <b>{status.fail_N.toFixed(1)} N</b> ({short(status.part)} governs). Design load {fea.design_N} N, bench target {fea.required_fail_N} N. No working-load rating assigned; not yet tested.</>}
            </div>}
          </section>

          {compare && deltas.length > 0 && <section>
            <h6>Key values</h6>
            <table className="tbl"><thead><tr><th /><th>Base</th><th>Prop.</th><th>Δ</th></tr></thead><tbody>
              {deltas.map(([n, a, b, u]) => { const d = typeof a === 'number' && typeof b === 'number' ? b - a : null;
                return <tr key={n}><td>{n}</td><td className="n">{a ?? '–'}</td><td className="n">{b ?? '–'}</td>
                  <td className="n" style={{ color: d > 0 ? DIFF.added : d < 0 ? DIFF.removed : undefined }}>{d === null || d === 0 ? '' : `${d > 0 ? '+' : ''}${+d.toFixed(2)}${u}`}</td></tr>; })}
            </tbody></table>
          </section>}

          <section>
            <h6>Display</h6>
            <div className="ctl"><span>Explode</span><Slider min={0} max={1} stepSize={0.01} labelRenderer={false} value={explode} onChange={setExplode} /></div>
            {(p14 || mo) && <div className="ctl"><span>Release</span>
              <Button small minimal icon={playing ? 'pause' : 'play'} onClick={() => setPlaying(!playing)} />
              <Button small minimal icon="reset" onClick={() => { setPlaying(false); setPhase(0); }} />
              <Slider min={0} max={2} stepSize={0.01} labelRenderer={false} value={phase} onChange={v => { setPlaying(false); setPhase(v); }} /></div>}
            {(p14 || mo) && <div className="muted small">{mo ? (phase < 0.02 ? `Latched: servo ${mo.a_latch}°.` : phase <= 1 ? `Servo ${alpha.toFixed(0)}°, keeper +X ${kx.toFixed(1)} mm.` : 'Keeper clear; adapter drops.') + ' Kinematics from params.py, not a tested release.'
              : phase < 0.02 ? 'Latched.' : phase <= 1 ? 'Solenoid retracting the keeper.' : 'Keeper open; illustrated adapter travel.'}</div>}
            {compare && <><Switch checked={diffCol} label="Colour by change" onChange={() => setDiffCol(!diffCol)} />
              <Switch checked={onlyChanged} label="Hide unchanged parts" onChange={() => setOnlyChanged(!onlyChanged)} /></>}
            {compare && <>
              <div className="ctl"><span>Align</span><HTMLSelect minimal fill value={align} onChange={e => setAlign(e.target.value)} options={[
                { value: 'assembly', label: 'Best fit (auto)' }, { value: 'part', label: 'Each part by bbox centre' }, { value: 'none', label: 'None (raw coordinates)' }]} /></div>
              <Switch checked={devOn} label="Surface deviation map" onChange={() => setDevOn(!devOn)} />
              {devOn && <>
                <div className="ctl"><span>Tol {tol.toFixed(2)}</span><Slider min={0.01} max={0.5} stepSize={0.01} labelRenderer={false} value={tol} onChange={setTol} /></div>
                <div className="ctl"><span>Scale {dscale.toFixed(1)}</span><Slider min={0.2} max={5} stepSize={0.1} labelRenderer={false} value={dscale} onChange={setDscale} /></div>
                <Switch checked={onlyDiff} label="Show only differences" onChange={() => setOnlyDiff(!onlyDiff)} />
                <Switch checked={removedOv} label="Baseline as removed-material overlay" onChange={() => setRemovedOv(!removedOv)} />
              </>}</>}
            {focus && <Button small icon="cross" text={`Clear focus (${short(focus)})`} onClick={() => focusOn(focus)} />}
          </section>

          {showFea && <section>
            <h6>FEA</h6>
            <HTMLSelect fill value={group} onChange={e => setGroup(e.target.value)} options={Object.entries(groups).map(([v, g]) => ({ value: v, label: g.label }))} />
            <div className="ctl"><span>{load.toFixed(1)} N</span><Slider min={1} max={loadMax} stepSize={0.1} labelRenderer={false} value={load} onChange={setLoad} /></div>
            <div className="btns"><Button small text={`Design ${fea.design_N} N`} onClick={() => setLoad(fea.design_N)} /><Button small text={`Bench ${fea.required_fail_N} N`} onClick={() => setLoad(fea.required_fail_N)} />
              <Button small icon="locate" text="Peak" disabled={!gov} onClick={() => { setFade(true); lookAtPeak(); }} /></div>
            <table className="tbl"><thead><tr><th>Part</th><th>Screen</th><th>×load</th></tr></thead><tbody>
              {rows.map(r => <tr key={r.part}><td>{gov === r && '● '}{short(r.part)}</td><td className="n">{r.fail_N} N</td><td className="n">{(r.fail_N / load).toFixed(2)}×</td></tr>)}</tbody></table>
            <Switch checked={ghost} label="Ghost other parts" onChange={() => setGhost(!ghost)} />
            <Switch checked={autoScale} label="Scale colours to peak" onChange={() => setAutoScale(!autoScale)} />
            <Switch checked={fade} label="Fade non-governing parts" onChange={() => setFade(!fade)} />
            <div className="muted small">{fea.material?.toUpperCase()}, {fea.note}</div>
          </section>}

          <section>
            <h6>Parts</h6>
            <div className="parts">{ids.map(id => <label key={id} className={hidden[id] ? 'off' : ''}>
              <input type="checkbox" checked={!hidden[id]} onChange={() => setHidden(h => ({ ...h, [id]: !h[id] }))} /><i style={{ background: colorOf(id) }} />{short(id)}</label>)}</div>
            <div className="btns"><Button small text="All" onClick={() => setHidden({})} />
              <Button small text="Printed only" onClick={() => setHidden(Object.fromEntries([...(B.man?.parts || []), ...(A.man?.parts || [])].filter(p => !['printed', 'payload', 'moving'].includes(p.kind)).map(p => [p.id, true])))} /></div>
          </section>
        </aside>
      </div>
    </div>
  );
}
