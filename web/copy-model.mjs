// Copies the current CAD assembly (manifest + STLs) into public/model for the viewer.
import { cpSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
const src = '../project/cad/N2', out = 'public/model';
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) if (f === 'manifest.json' || (f.endsWith('.stl') && !f.endsWith('_print.stl'))) cpSync(`${src}/${f}`, `${out}/${f}`);

// R4 is a self-contained review package, kept distinct from the frozen P14
// viewer and its field semantics. Copy only issued package material; Python
// cache files and temporary solver output never become website assets.
const r4 = '../project/designs/r4', r4out = 'public/r4';
if (existsSync(r4)) {
  rmSync(r4out, { recursive: true, force: true });
  cpSync(r4, r4out, { recursive: true, filter: path => !path.includes('__pycache__') && !path.endsWith('.pyc') });
}
