import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const site=path.dirname(fileURLToPath(import.meta.url)), parent=path.dirname(site), snapshot=path.join(site,'project');
const exists=async f=>!!(await fs.stat(f).catch(()=>null));
let root;
for(const candidate of [process.env.N2_PROJECT_ROOT,path.join(parent,'n2_focus_p11'),parent,snapshot].filter(Boolean)){
 if(await exists(path.join(candidate,'cad/N2/manifest.json'))&&await exists(path.join(candidate,'cad/N2/viewer.json'))){root=candidate;break;}
}
if(!root)throw new Error('N2 source missing. Set N2_PROJECT_ROOT or restore project/.');
const readJson=async(p,fallback={})=>{try{return JSON.parse(await fs.readFile(path.join(root,p),'utf8'));}catch{return fallback;}};
await fs.mkdir(path.join(site,'data'),{recursive:true});await fs.mkdir(path.join(site,'dist'),{recursive:true});
for(const child of await fs.readdir(path.join(site,'dist')))await fs.rm(path.join(site,'dist',child),{recursive:true,force:true});
const files=[],docs=[];
const ext=new Set(['.md','.txt','.json','.csv','.svg','.png','.pdf','.step','.stp','.stl','.brep','.py','.sh','.inp','.msh','.npz','.yaml','.yml','.html','.cpp','.ino','.mjs','.js','.zip']);
const excluded=rel=>/(?:^|\/)(?:__pycache__|node_modules|runtime|native|wheels|pdf_qa|history|regenerated|\.\w[^/]*)(?:\/|$)/.test(rel)||/^analysis\/results(?:\/|$)/.test(rel)||/\.(?:log|npz|msh)$/.test(rel)||/\.temporary\./.test(rel);
async function copy(rel,prefix='',sourceRoot=root){
 if(excluded(rel)||/^cad\/N[13456](?:\/|_)/.test(rel)||/^drawings\/N[13456]_/.test(rel))return;const source=path.join(sourceRoot,rel);if(!await exists(source))return;const st=await fs.stat(source);
 if(st.isDirectory()){for(const child of await fs.readdir(source))await copy(path.join(rel,child),prefix,sourceRoot);return;}
 if(!ext.has(path.extname(rel).toLowerCase()))return;
 if(st.size>23*1024*1024)throw new Error('Hosted file exceeds limit: '+rel);
 const outputRel=path.join(prefix,rel);const dest=path.join(site,'dist/downloads',outputRel);await fs.mkdir(path.dirname(dest),{recursive:true});await fs.copyFile(source,dest);
 files.push({path:outputRel.replaceAll(path.sep,'/'),bytes:st.size,sha256:createHash('sha256').update(await fs.readFile(source)).digest('hex')});
 if(rel.endsWith('.md')){const content=await fs.readFile(source,'utf8');docs.push({path:outputRel.replaceAll(path.sep,'/'),title:(content.match(/^#\s+(.+)$/m)||[])[1]||path.basename(rel),content});}
}
for(const f of ['cad','drawings','docs','manufacturing','electronics','analysis','README.md','project.json','package_link.json'])await copy(f);
if(root!==snapshot){await fs.rm(snapshot,{recursive:true,force:true});await fs.cp(path.join(site,'dist/downloads'),snapshot,{recursive:true});}
const sourceManifest=await readJson('cad/N2/manifest.json');
if(!sourceManifest.parts?.length)throw new Error('N2 assembly missing.');
const overrides=await readJson('cad/N2/active_metadata.json');
const variant={...sourceManifest,...overrides,id:'N2',parts:sourceManifest.parts};
const otherModels=files.filter(f=>/(?:^|\/)N[13456](?:\/|_)/.test(f.path));
if(otherModels.length)throw new Error('Non-N2 model leaked into active downloads: '+otherModels.map(f=>f.path).join(', '));
const generated={revisionKey:createHash('sha256').update(JSON.stringify(files)).digest('hex').slice(0,16),revision:'P11',activeVariant:'N2',variant,analysis:await readJson('analysis/summary.json'),project:await readJson('project.json'),completePackageUrl:(await readJson('package_link.json')).url||'',bom:await readJson('manufacturing/bom.json'),downloads:files.sort((a,b)=>a.path.localeCompare(b.path)),docs};
await fs.writeFile(path.join(site,'data/project.json'),JSON.stringify(generated));
await build({entryPoints:[path.join(site,'src/App.jsx')],bundle:true,minify:true,sourcemap:false,target:['es2020'],format:'iife',outfile:path.join(site,'dist/app.js'),loader:{'.woff':'file','.woff2':'file','.ttf':'file','.eot':'file','.svg':'file'},assetNames:'assets/[name]-[hash]',legalComments:'linked'});
const app=await fs.readFile(path.join(site,'dist/app.js')),hash=createHash('sha256').update(app).digest('hex').slice(0,16);
const licenses=path.join(site,'licenses');await fs.rm(licenses,{recursive:true,force:true});await fs.mkdir(licenses,{recursive:true});
const modules=path.join(site,'node_modules'),packages=[],seen=new Set();
async function collectModules(folder){
 if(!await exists(folder))return;
 for(const n of await fs.readdir(folder)){
  if(n.startsWith('.'))continue;
  if(n.startsWith('@')){for(const c of await fs.readdir(path.join(folder,n)))packages.push(path.join(folder,n,c));}
  else packages.push(path.join(folder,n));
 }
}
await collectModules(modules);
// pnpm links direct dependencies at the root; bundled transitive license texts
// live beneath its package store. Preserve each distinct package/version notice.
const storeDir=path.join(modules,'.pnpm');
if(await exists(storeDir))for(const n of await fs.readdir(storeDir)){if(n==='node_modules')continue;await collectModules(path.join(storeDir,n,'node_modules'));}
const notices=[];
for(const base of packages){if(!await exists(path.join(base,'package.json')))continue;const p=JSON.parse(await fs.readFile(path.join(base,'package.json'),'utf8'));
 const key=p.name+'@'+p.version;if(seen.has(key))continue;seen.add(key);
 for(const f of await fs.readdir(base)){if(!/^(?:LICENSE|LICENCE|NOTICE|COPYING)(?:\..*)?$/i.test(f)||!(await fs.stat(path.join(base,f))).isFile())continue;const rel=p.name+'/'+p.version+'/'+f,dest=path.join(licenses,rel);await fs.mkdir(path.dirname(dest),{recursive:true});await fs.copyFile(path.join(base,f),dest);notices.push({package:p.name,version:p.version,path:rel});}}
notices.sort((a,b)=>a.package.localeCompare(b.package)||a.version.localeCompare(b.version));
if(!notices.some(n=>n.package==='@blueprintjs/core')||!notices.some(n=>n.package==='three'))throw new Error('Blueprint/Three.js package license missing.');
await fs.writeFile(path.join(licenses,'manifest.json'),JSON.stringify(notices,null,2)+'\n');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
await fs.writeFile(path.join(licenses,'index.html'),'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>N2 project licenses</title><style>body{font:16px/1.6 system-ui;max-width:900px;margin:3rem auto;padding:0 1.5rem;color:#203348}a{color:#08675f}</style><a href="../index.html">Return to documentation</a><h1>Third-party licenses</h1><p>Original license texts from the installed packages, including Palantir Blueprint and Three.js.</p><ul>'+notices.map(n=>'<li><a href="'+esc(n.path)+'">'+esc(n.package)+' '+esc(n.version)+'</a></li>').join('')+'</ul></html>');
await fs.cp(licenses,path.join(site,'dist/licenses'),{recursive:true});
await fs.writeFile(path.join(site,'dist/index.html'),`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="N2 supported cross-bolt hardpoint: interactive CAD, mechanical release, PLA FEA, assembly and manufacturing files."><title>N2 Supported Cross-bolt Hardpoint</title><link rel="stylesheet" href="app.css?v=${hash}"></head><body><div id="root"></div><script src="app.js?v=${hash}"></script></body></html>`);
const verification={build:'success',date:new Date().toISOString(),revision:'P11',active_variants:['N2'],blueprint:notices.find(n=>n.package==='@blueprintjs/core')?.version,three:notices.find(n=>n.package==='three')?.version,download_files:files.length,app_sha256:createHash('sha256').update(app).digest('hex'),source_root:root,geometry_sha256:createHash('sha256').update(await fs.readFile(path.join(root,'cad/N2/viewer.json'))).digest('hex')};
await fs.writeFile(path.join(site,'BUILD_VERIFICATION.json'),JSON.stringify(verification,null,2)+'\n');
console.log(JSON.stringify(verification));
