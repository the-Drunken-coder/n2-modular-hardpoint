// Copies CAD assemblies into public/model for the viewer.
// - P14 (project/cad/N2): committed manifest + STLs -> model/N2/
// - project/designs/<id>/out/*.stl (CI-built, gitignored) -> model/<id>/ with a generated manifest
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
const out = 'public/model', designs = [];
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });

const p14 = '../project/cad/N2';
if (existsSync(`${p14}/manifest.json`)) {
  mkdirSync(`${out}/N2`);
  for (const f of readdirSync(p14)) if (f === 'manifest.json' || (f.endsWith('.stl') && !f.endsWith('_print.stl'))) cpSync(`${p14}/${f}`, `${out}/N2/${f}`);
  designs.push({ id: 'N2', label: 'P14 solenoid (baseline)', p14: true });
}

function stlBounds(buf) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  const add = v => v.forEach((x, k) => { lo[k] = Math.min(lo[k], x); hi[k] = Math.max(hi[k], x); });
  const n = buf.readUInt32LE(80);
  if (buf.length === 84 + n * 50) {
    for (let i = 0; i < n; i++) for (let j = 0; j < 3; j++) { const o = 84 + i * 50 + 12 + j * 12; add([buf.readFloatLE(o), buf.readFloatLE(o + 4), buf.readFloatLE(o + 8)]); }
  } else for (const m of buf.toString().matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g)) add([+m[1], +m[2], +m[3]]);
  return { min: lo, max: hi };
}
const COLORS = ['#4c90f0', '#f0b726', '#32a467', '#e76a6e', '#9d3f9d', '#68c1ee', '#d1980b'];
const root = '../project/designs';
for (const id of existsSync(root) ? readdirSync(root).sort() : []) {
  const src = `${root}/${id}/out`;
  if (existsSync(`${src}/viewer/manifest.json`)) { // full viewer assembly from cad/viewer.py
    cpSync(`${src}/viewer`, `${out}/${id}`, { recursive: true });
    designs.push({ id, label: `${id.toUpperCase()} (CI-built CAD)`, fea: existsSync(`${src}/viewer/fea/index.json`) });
    continue;
  }
  const stls = existsSync(src) ? readdirSync(src).filter(f => f.endsWith('.stl')).sort() : [];
  if (!stls.length) continue;
  mkdirSync(`${out}/${id}`);
  const parts = stls.map((f, i) => { cpSync(`${src}/${f}`, `${out}/${id}/${f}`); return { id: f.replace(/\.stl$/, ''), stl: f, kind: 'printed', color: COLORS[i % COLORS.length], b: stlBounds(readFileSync(`${src}/${f}`)) }; });
  const min = [0, 1, 2].map(k => Math.min(...parts.map(p => p.b.min[k]))), max = [0, 1, 2].map(k => Math.max(...parts.map(p => p.b.max[k])));
  const size = max.map((x, k) => x - min[k]), span = Math.max(...size);
  // explode: the largest part stays put, the others stack below it (-Z) and spread along X
  const vol = p => p.b.max.reduce((a, x, k) => a * (x - p.b.min[k]), 1), big = parts.reduce((a, p) => (vol(p) > vol(a) ? p : a));
  parts.filter(p => p !== big).forEach((p, i) => { p.explode = [+((i - 0.5) * span * 0.4).toFixed(2), 0, +(-(i + 1) * span * 0.4).toFixed(2)]; });
  big.explode = [0, 0, 0]; parts.forEach(p => delete p.b);
  writeFileSync(`${out}/${id}/manifest.json`, JSON.stringify({ id, name: id.toUpperCase(), revision: id.toUpperCase(), units: 'mm', bounds: { min, max, size }, parts }, null, 1));
  designs.push({ id, label: `${id.toUpperCase()} (CI-built CAD)` });
}
writeFileSync(`${out}/designs.json`, JSON.stringify(designs, null, 1));
console.log('designs:', designs.map(d => d.id).join(', '));
