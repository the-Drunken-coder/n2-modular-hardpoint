import { useEffect, useRef } from 'react';
import * as T from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const cache = new Map();
const loader = new STLLoader();
export function loadGeom(url) {
  if (!cache.has(url)) cache.set(url, new Promise((res, rej) => loader.load(url, g => { g.computeVertexNormals(); res(g); }, undefined, rej)));
  return cache.get(url);
}

function makeScene() {
  const s = new T.Scene();
  s.add(new T.HemisphereLight(0xffffff, 0x334455, 2.0));
  const d = new T.DirectionalLight(0xffffff, 1.6); d.position.set(60, -40, 90); s.add(d);
  const d2 = new T.DirectionalLight(0xffffff, 0.6); d2.position.set(-50, 60, -30); s.add(d2);
  const grid = new T.GridHelper(120, 24, 0x3d4a57, 0x2a333d); grid.rotation.x = Math.PI / 2; s.add(grid);
  return s;
}

// layers: [{key, url, color, opacity, visible}], split: second layer list rendered in right half with the same camera.
export default function Viewer3D({ left, right, fitKey, height = 560 }) {
  const el = useRef(), st = useRef();
  useEffect(() => {
    const r = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(window.devicePixelRatio); r.setClearColor(0x1c2127); r.setScissorTest(true);
    el.current.appendChild(r.domElement);
    const cam = new T.PerspectiveCamera(35, 1, 0.1, 2000); cam.up.set(0, 0, 1);
    const oc = new OrbitControls(cam, r.domElement); oc.enableDamping = true;
    const s = { r, cam, oc, scenes: [makeScene(), makeScene()], meshes: [new Map(), new Map()], split: false, fitted: null, alive: true };
    st.current = s;
    const loop = () => {
      if (!s.alive) return; requestAnimationFrame(loop); oc.update();
      const w = el.current.clientWidth, h = el.current.clientHeight;
      if (r.domElement.width !== Math.floor(w * r.getPixelRatio()) || r.domElement.height !== Math.floor(h * r.getPixelRatio())) r.setSize(w, h, true);
      const vw = s.split ? w / 2 : w; cam.aspect = vw / h; cam.updateProjectionMatrix();
      r.setViewport(0, 0, vw, h); r.setScissor(0, 0, vw, h); r.render(s.scenes[0], cam);
      if (s.split) { r.setViewport(vw, 0, vw, h); r.setScissor(vw, 0, vw, h); r.render(s.scenes[1], cam); }
    };
    loop();
    return () => { s.alive = false; r.dispose(); r.domElement.remove(); };
  }, []);

  useEffect(() => {
    const s = st.current; s.split = !!right;
    const sync = async (i, layers) => {
      const sc = s.scenes[i], map = s.meshes[i], keep = new Set();
      await Promise.all((layers || []).map(async L => {
        keep.add(L.key);
        let m = map.get(L.key);
        if (!m) {
          const g = await loadGeom(L.url);
          m = new T.Mesh(g, new T.MeshStandardMaterial({ metalness: 0.1, roughness: 0.65, side: T.DoubleSide }));
          map.set(L.key, m); sc.add(m);
        }
        m.material.color.set(L.color); m.material.transparent = (L.opacity ?? 1) < 1; m.material.opacity = L.opacity ?? 1;
        m.material.depthWrite = !m.material.transparent; m.renderOrder = L.order || 0;
        m.material.polygonOffset = !!L.offset; m.material.polygonOffsetFactor = L.offset ? -1 : 0; m.material.polygonOffsetUnits = L.offset ? -1 : 0;
        m.visible = L.visible !== false;
      }));
      for (const [k, m] of map) if (!keep.has(k)) { sc.remove(m); map.delete(k); }
    };
    Promise.all([sync(0, left), sync(1, right)]).then(() => {
      if (s.fitted === fitKey) return; s.fitted = fitKey;
      const b = new T.Box3();
      for (const map of s.meshes) for (const m of map.values()) if (m.visible) b.expandByObject(m);
      if (b.isEmpty()) return;
      const c = b.getCenter(new T.Vector3()), d = b.getSize(new T.Vector3()).length() * 1.25;
      s.oc.target.copy(c); s.cam.position.set(c.x + d * 0.8, c.y - d, c.z + d * 0.7); s.oc.update();
    });
  }, [left, right, fitKey]);

  return <div ref={el} className="viewer" style={{ height }} />;
}
