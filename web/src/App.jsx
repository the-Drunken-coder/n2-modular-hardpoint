import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, ButtonGroup, Checkbox, HTMLSelect, Slider, Switch, Tag } from '@blueprintjs/core';
import * as T from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SITE_ROOT = import.meta.env.VITE_SITE_ROOT || './';
const BUILD = { label: import.meta.env.VITE_BUILD_LABEL || 'local build', sha: (import.meta.env.VITE_BUILD_SHA || '').slice(0, 7) };
const feaBase = d => (d?.p14 ? 'fea/' : `model/${d?.id}/fea/`);
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
    st.current = { scene, cam, parts: new Map(), fea: new Map(), markers: new T.Group() };
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
  const [load, setLoad] = useState(Number(new URLSearchParams(location.search).get('load') || 17.8));
  const [ghost, setGhost] = useState(true);
  const [designs, setDesigns] = useState([]), [design, setDesign] = useState(null), [versions, setVersions] = useState([]);
  const p14 = designs.find(d => d.id === design)?.p14;

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
    s.parts.clear(); s.fea.clear(); setHidden({}); setMan(null); setFea(null);
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
      m.userData.p = p; s.parts.set(p.id, m); s.scene.add(m); s.dirty = true;
    }));
    s.isoDir = man.iso; setView(s, man.bounds, 'iso');
  }, [man]);

  // load FEA surfaces
  useEffect(() => {
    if (!fea) return;
    const fb = feaBase(designs.find(d => d.id === design));
    fea.cases.forEach(c => fetch(`${fb}${c.part}__${c.case}.json`).then(r => r.json()).then(d => {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(d.pos, 3)); g.setIndex(d.idx); g.computeVertexNormals();
      g.setAttribute('color', new T.Float32BufferAttribute(new Float32Array(d.pos.length), 3));
      const m = new T.Mesh(g, new T.MeshStandardMaterial({ vertexColors: true, metalness: 0, roughness: 0.75, side: T.DoubleSide }));
      m.userData = { d, part: c.part }; m.visible = false; s.fea.set(`${c.part}__${c.case}`, m); s.scene.add(m); s.dirty = true;
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
  const rows = fea ? Object.entries(shown).map(([p, c]) => fea.cases.find(x => x.part === p && x.case === c)).filter(Boolean) : [];
  const gov = rows.reduce((a, b) => (!a || b.fail_N < a.fail_N ? b : a), null);

  // per-frame placement + colouring
  s.tick = () => {
    if (!man) return;
    const ease = x => x * x * (3 - 2 * x), ph = phase;
    const retract = ease(Math.min(ph, 1)), drop = ease(Math.max(0, Math.min(ph - 1, 1)));
    const place = (m, id) => {
      const p = man.parts.find(q => q.id === id); const e = p?.explode || [0, 0, 0];
      let x = e[0] * explode, y = e[1] * explode, z = e[2] * explode;
      if (mo) {
        if (mo.slide.includes(id)) x += kx;
        if (mo.drop.includes(id)) z -= mo.drop_mm * drop;
        if (mo.rotate.includes(id)) { // rotate about the servo axis (Y); +alpha turns X toward Z
          const th = -(alpha - mo.a_latch) * Math.PI / 180, [px, , pz] = mo.pivot, c = Math.cos(th), sn = Math.sin(th);
          m.rotation.set(0, th, 0); x += px - (px * c + pz * sn); z += pz - (-px * sn + pz * c);
        } else m.rotation.set(0, 0, 0);
        m.position.set(x, y, z); return;
      }
      if (MOVERS.includes(id)) x += STROKE * retract;
      if (id === 'N2_return_spring') { m.scale.x = 1 - 0.35 * retract; } // compressed by the armature collar
      if (id === 'N2_adapter') z += DROP * drop;
      m.position.set(x, y, z);
    };
    for (const [id, m] of s.parts) {
      place(m, id);
      const inFea = mode === 'fea' && shown[id];
      m.visible = !hidden[id] && !inFea && (mode === 'model' || ghost);
      const op = m.userData.p?.opacity ?? 1;
      m.material.transparent = mode === 'fea' || op < 1; m.material.opacity = mode === 'fea' ? 0.12 * op : op; m.material.depthWrite = mode !== 'fea' && op >= 1;
    }
    s.markers.clear();
    for (const [key, m] of s.fea) {
      const on = shown[m.userData.part] && key === `${m.userData.part}__${shown[m.userData.part]}` && !hidden[m.userData.part];
      m.visible = !!on; if (!on) continue; place(m, m.userData.part);
      const ck = `${load}|${k}`;
      if (m.userData.ck !== ck) {
        const col = m.geometry.attributes.color, c = new T.Color(), fi = m.userData.d.fi;
        for (let i = 0; i < fi.length; i++) { cmap(fi[i] * load * k, c); col.setXYZ(i, c.r, c.g, c.b); }
        col.needsUpdate = true; m.userData.ck = ck;
      }
      const d = m.userData.d, isGov = gov && d.part === gov.part;
      const mk = new T.Mesh(new T.SphereGeometry(isGov ? 0.9 : 0.6, 20, 14), new T.MeshBasicMaterial({ color: isGov ? 0xffffff : 0xabb3bf, depthTest: false, transparent: true, opacity: 0.95 }));
      mk.position.set(...d.peak_mm).add(m.position); mk.renderOrder = 10; s.markers.add(mk);
      if (isGov) { const ring = new T.Mesh(new T.TorusGeometry(1.6, 0.18, 8, 32), mk.material); ring.position.copy(mk.position); ring.quaternion.copy(s.cam.quaternion); ring.renderOrder = 10; s.markers.add(ring); }
    }
  };

  const ids = man?.parts.map(p => p.id) || [];
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
          <div className="status">{fea.material.toUpperCase()}, {fea.note}</div>
        </>}

        <h6>Parts</h6>
        <div className="parts">
          {ids.map(id => <Checkbox key={id} checked={!hidden[id]} onChange={() => setHidden(h => ({ ...h, [id]: !h[id] }))}
            labelElement={<span><span className="swatch" style={{ background: man.parts.find(p => p.id === id).color }} />{short(id)}</span>} />)}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <Button small text="All" onClick={() => setHidden({})} />
          <Button small text="Printed only" onClick={() => setHidden(Object.fromEntries(man.parts.filter(p => !['printed', 'payload', 'moving'].includes(p.kind)).map(p => [p.id, true])))} />
        </div>
      </div>
      <div className="stage" ref={el}>
        {man && <ButtonGroup className="views" minimal>
          {['iso', 'front', 'side', 'top'].map(v => <Button key={v} small text={v} onClick={() => setView(s, man.bounds, v)} />)}
        </ButtonGroup>}
        {mode === 'fea' && fea && <div className="legend">
          Screen utilisation at {load.toFixed(1)} N (1.0 = assumed stress limit)
          <div className="bar" style={{ background: GRAD }} />
          <div className="ticks"><span>0</span><span>0.5</span><span>1.0</span><span style={{ color: '#d91ad9' }}>&gt;1</span></div>
          {gov && <div style={{ marginTop: 4 }}>○ governing peak: {short(gov.part)} at ({gov.peak_mm.join(', ')}) mm</div>}
        </div>}
        <div className="hint">Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point</div>
      </div>
    </div>
  );
}
