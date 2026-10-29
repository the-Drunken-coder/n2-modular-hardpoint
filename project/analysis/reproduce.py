#!/usr/bin/env python3
"""Replay issued N2 P8 FE runs from frozen portable inputs into a new directory.

No existing result or issued input is overwritten. Network/dependency installation
is never performed. Use --list or --verify-only before a potentially long run.
"""
from pathlib import Path
import argparse,datetime,hashlib,importlib,importlib.metadata,json,os,platform,shutil,subprocess,sys,time
HERE=Path(__file__).resolve().parent

def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def dump(p,d):Path(p).write_text(json.dumps(d,indent=2)+'\n')
def inside(root,relative):
 p=(root/relative).resolve()
 if not p.is_relative_to(root.resolve()):raise ValueError('Manifest path escapes package: '+relative)
 return p

def verify(root,manifest):
 bad=[]
 for entry in manifest['files']:
  p=inside(root,entry['path'])
  if not p.is_file():bad.append('Missing '+entry['path'])
  elif sha(p)!=entry['sha256']:bad.append('Hash mismatch '+entry['path'])
 if bad:raise RuntimeError('\n'.join(bad))
 return {'files_checked':len(manifest['files']),'geometry_files':manifest['geometry_count'],'all_hashes_match':True}

def environment(manifest,allow_mismatch):
 expect=manifest['environment'];found={};errors=[]
 for name,want in expect['pinned_packages'].items():
  try:got=importlib.metadata.version(name)
  except importlib.metadata.PackageNotFoundError:got=None
  found[name]=got
  if got is None:errors.append(f'Missing package {name}=={want}')
  elif got!=want:errors.append(f'{name}: installed {got}; issued pin {want}')
 if list(sys.version_info[:2])!=expect['python_major_minor']:errors.append(f'Python {platform.python_version()}; tested major/minor {expect["python_major_minor"]}')
 if errors and (not allow_mismatch or any(x.startswith('Missing package ') for x in errors)):raise RuntimeError('\n'.join(errors)+'\nInstall requirements.txt in Python3.12, or explicitly use --allow-version-mismatch for a nonmatching environment.')
 # Import exercises the native loader; some Gmsh wheels need X/GL libraries even headlessly.
 try:importlib.import_module('gmsh')
 except (ImportError,OSError) as exc:raise RuntimeError('Gmsh native import failed. See REPRODUCE.md, including Linux libXft.so.2/libxft2 and GLU dependencies. '+str(exc)) from exc
 return {'python':platform.python_version(),'platform':platform.platform(),'packages':found,'deviations':errors}

def selected_runs(manifest,models,sizes,cases):
 ids=sorted({p['model'] for p in manifest['issued_runs']})
 chosen=set(ids)
 if models:
  chosen=set()
  for m in models:
   matches={i for i in ids if i==m or i.startswith(m+'_')}
   if not matches:raise ValueError('Unknown model/variant '+m+'. Available: '+', '.join(ids))
   chosen|=matches
 runs=[]
 for issued in manifest['issued_runs']:
  if issued['model'] not in chosen:continue
  if sizes and not any(abs(issued['h_mm']-h)<1e-10 for h in sizes):continue
  r=dict(issued);r['cases']=list(issued['cases'])
  if cases:r['cases']=[c for c in r['cases'] if c in cases]
  if r['cases']:runs.append(r)
 if not runs:raise ValueError('No issued runs match the filters. --sizes filters recorded sizes; it does not invent a new mesh recipe.')
 return runs

def prepare(root,manifest,runs,out):
 # A strict new-directory rule protects both supplied and earlier replay results.
 out=out.resolve()
 if out.exists():raise FileExistsError('Output already exists; choose a new directory: '+str(out))
 out.mkdir(parents=True)
 engine=out/'engine';engine.mkdir();inputs=out/'package_inputs';inputs.mkdir();configs=out/'configs';configs.mkdir()
 solver=inside(root,manifest['replay_solver']['path']);shutil.copy2(solver,engine/'solver.py')
 shutil.copy2(inside(root,manifest['material']['path']),engine/'material.json')
 # Frozen physics inputs are copied; remapped configurations never point back to the author's workspace.
 remap={}
 needed_configs={r['frozen_configuration'] for r in runs};loaded={}
 for name in sorted(needed_configs):
  original=json.loads(inside(root,name).read_text());cfg=json.loads(json.dumps(original))
  source=cfg['step_path']
  if source not in manifest['geometry_remap']:raise ValueError('No portable STEP mapping for '+source)
  g=manifest['geometry_remap'][source];dest=inputs/g['package_path'];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(inside(root,g['package_path']),dest)
  cfg['step_path']=str(dest)
  cfg['imprint_step_files']=[]
  for value in original.get('imprint_step_files',[]):
   if value not in manifest['imprint_remap']:raise ValueError('No portable imprint mapping for '+value)
   pp=manifest['imprint_remap'][value];target=inputs/pp;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(inside(root,pp),target);cfg['imprint_step_files'].append(str(target))
  # All case metadata, including per-jaw normalization, is deliberately unchanged.
  if cfg['cases']!=original['cases']:raise RuntimeError('Case metadata changed during remapping')
  if sha(dest)!=cfg['expected_step_sha256']:raise RuntimeError('Copied geometry hash differs')
  path=configs/Path(name).name
  if path.exists():raise RuntimeError('Configuration filename collision '+path.name)
  dump(path,cfg);remap[name]=str(path);loaded[name]={'issued_config_sha256':sha(inside(root,name)),'remapped_config_sha256':sha(path),'case_metadata_preserved':True,'remapped_step':str(dest),'imprints':cfg['imprint_step_files']}
 record={'scope':'Current frozen solver replay with issued frozen geometry/configurations; output isolated from supplied results.','package_manifest_sha256':sha(root/'input_manifest.json'),'replay_solver_sha256':sha(engine/'solver.py'),'material_sha256':sha(engine/'material.json'),'verification':verify(root,manifest),'configs':loaded,'runs':runs,'driver_history':manifest['driver_history'],'status':'prepared'}
 dump(out/'replay_manifest.json',record)
 return engine/'solver.py',remap,record

def main():
 ap=argparse.ArgumentParser(description=__doc__)
 ap.add_argument('--model',nargs='+',help='Model ids (e.g. N2_keeper) or variant prefixes (e.g. N2).')
 ap.add_argument('--sizes',nargs='+',type=float,help='Filter issued mesh sizes; examples1.2 or0.55 0.4.')
 ap.add_argument('--case',nargs='+',help='Optional case-name filter.')
 ap.add_argument('--output',type=Path,help='New directory, must not already exist.')
 ap.add_argument('--list',action='store_true');ap.add_argument('--verify-only',action='store_true');ap.add_argument('--prepare-only',action='store_true');ap.add_argument('--allow-version-mismatch',action='store_true')
 a=ap.parse_args();manifest=json.loads((HERE/'input_manifest.json').read_text());check=verify(HERE,manifest)
 if a.verify_only:print(json.dumps(check,indent=2));return
 runs=selected_runs(manifest,a.model,a.sizes,a.case)
 if a.list:
  for r in runs:print(f'{r["model"]} h={r["h_mm"]:g}: '+', '.join(r['cases'])+' ['+r['issued_configuration']+']')
  print(f'{len(runs)} run steps / {sum(len(r["cases"]) for r in runs)} cases; all frozen input hashes match.');return
 env_record=None if a.prepare_only else environment(manifest,a.allow_version_mismatch)
 name='n2_replay_'+datetime.datetime.now().strftime('%Y%m%d_%H%M%S_%f');out=(a.output or Path.cwd()/name).resolve()
 solver,configs,record=prepare(HERE,manifest,runs,out);record['environment']=env_record;dump(out/'replay_manifest.json',record)
 if a.prepare_only:print('Prepared isolated inputs at '+str(out));return
 env=os.environ.copy();env['OPENBLAS_NUM_THREADS']='1';env['OMP_NUM_THREADS']='1';env.setdefault('MPLCONFIGDIR',str(out/'matplotlib_cache'))
 logdir=out/'logs';logdir.mkdir();completed=[]
 for index,r in enumerate(runs,1):
  print(f'[{index}/{len(runs)}] {r["model"]} h={r["h_mm"]:g}',flush=True)
  cmd=[sys.executable,str(solver),'--config',configs[r['frozen_configuration']],'--sizes',str(r['h_mm']),'--cases',*r['cases']]
  started=time.time();log=logdir/f'{index:03d}_{r["model"]}_h{r["h_mm"]:g}.txt'
  with log.open('w') as f:
   proc=subprocess.Popen(cmd,cwd=str(out),env=env,text=True,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
   assert proc.stdout is not None
   for line in proc.stdout:f.write(line);f.flush();print(line,end='',flush=True)
   code=proc.wait()
  completed.append({'model':r['model'],'h_mm':r['h_mm'],'cases':r['cases'],'returncode':code,'elapsed_s':time.time()-started,'log':str(log.relative_to(out))})
  record['completed']=completed;record['status']='failed' if code else 'running';dump(out/'replay_manifest.json',record)
  if code:raise SystemExit(code)
 record['status']='complete';dump(out/'replay_manifest.json',record);print('Replay complete: '+str(out/'configs/results'))
if __name__=='__main__':
 try:main()
 except (RuntimeError,ValueError,FileNotFoundError,FileExistsError) as exc:raise SystemExit(str(exc))
