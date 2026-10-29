// Copies the current CAD assembly (manifest + STLs) into public/model for the viewer.
import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
const src = '../project/cad/N2', out = 'public/model';
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) if (f === 'manifest.json' || (f.endsWith('.stl') && !f.endsWith('_print.stl'))) cpSync(`${src}/${f}`, `${out}/${f}`);
