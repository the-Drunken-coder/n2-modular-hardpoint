#!/usr/bin/env python3
"""P8 actual-STEP quadratic tetrahedral component load-path FEA. N, mm, MPa.

Prescribed finite contact tractions are NOT an assembled nonlinear contact solve.
Each result retains its boundary audit, force/moment balance and raw stress peaks.
"""
from __future__ import annotations
import argparse,hashlib,json,os,sys,time,zipfile
from pathlib import Path
HERE=Path(__file__).resolve().parent
sys.path.insert(0,str(HERE/'runtime'))
import numpy as np
from scipy.sparse.linalg import splu,cg
from scipy.spatial import cKDTree
from skfem import MeshTet,Basis,FacetBasis,ElementVector,ElementTetP2,BilinearForm,LinearForm,asm

MATERIAL=json.loads((HERE/'material.json').read_text())
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def dump(p,obj):
 p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(obj,indent=2,default=lambda x:x.item() if isinstance(x,np.generic) else str(x))+'\n')
def atomic_npz(p,**v):
 p=Path(p);tmp=p.with_suffix('.writing')
 with tmp.open('wb') as f:np.savez_compressed(f,**v);f.flush();os.fsync(f.fileno())
 with zipfile.ZipFile(tmp) as z:assert z.testzip() is None
 os.replace(tmp,p)
def eng(g):return np.array([g[0,0],g[1,1],g[2,2],g[0,1]+g[1,0],g[1,2]+g[2,1],g[0,2]+g[2,0]])
def constitutive():
 E=MATERIAL['E_MPa'];nu=MATERIAL['nu'];la=E*nu/((1+nu)*(1-2*nu));mu=E/(2*(1+nu))
 C=np.zeros((6,6));C[:3,:3]=la;C[np.arange(3),np.arange(3)]+=2*mu;C[3:,3:]=np.eye(3)*mu
 return C
def tensor(v):
 a=np.zeros(v.shape[:-1]+(3,3));a[...,0,0]=v[...,0];a[...,1,1]=v[...,1];a[...,2,2]=v[...,2]
 a[...,0,1]=a[...,1,0]=v[...,3];a[...,1,2]=a[...,2,1]=v[...,4];a[...,0,2]=a[...,2,0]=v[...,5]
 return a
def metrics(v):
 p=np.linalg.eigvalsh(tensor(v));t=np.maximum(p[...,-1],0);c=np.maximum(-p[...,0],0);s=(p[...,-1]-p[...,0])/2
 vm=np.sqrt(.5*((v[...,0]-v[...,1])**2+(v[...,1]-v[...,2])**2+(v[...,2]-v[...,0])**2)+3*np.sum(v[...,3:]**2,axis=-1))
 ix=np.maximum.reduce([t/MATERIAL['tension_MPa'],c/MATERIAL['compression_MPa'],s/MATERIAL['max_shear_MPa']])
 return dict(tensile=t,compressive=c,max_shear=s,vm=vm,failure_index=ix)

def select(points,spec,normals=None):
 """points Nx3. Boolean selector, planes/ranges, circles XY, polygons XY, cylinders."""
 p=np.asarray(points);m=np.ones(len(p),dtype=bool);tol=spec.get('tolerance',1e-5)
 for i,k in enumerate('xyz'):
  if k in spec:m&=np.abs(p[:,i]-spec[k])<=tol
  if k+'_range' in spec:
   lo,hi=spec[k+'_range'];m&=(p[:,i]>=lo-tol)&(p[:,i]<=hi+tol)
 if normals is not None and 'normal_axis' in spec:m&=np.abs(normals[:,spec['normal_axis']])>.999
 if 'circle_xy' in spec:
  x,y,r=spec['circle_xy'];m&=(p[:,0]-x)**2+(p[:,1]-y)**2<=(r+tol)**2
 if 'annulus_xy' in spec:
  x,y,ri,ro=spec['annulus_xy'];r2=(p[:,0]-x)**2+(p[:,1]-y)**2;m&=(r2>=(ri-tol)**2)&(r2<=(ro+tol)**2)
 if 'polygon_xy' in spec:
  from matplotlib.path import Path as MP
  m&=MP(spec['polygon_xy']).contains_points(p[:,:2],radius=tol)
 if 'cylinder' in spec:
  q=spec['cylinder'];ax=q['axis'];cc=np.array(q['center_mm']);v=p-cc;v[:,ax]=0
  radius=np.linalg.norm(v,axis=1);m&=np.abs(radius-q['radius_mm'])<q.get('tolerance_mm',.12)
  if normals is not None:
   radial=v/np.maximum(radius[:,None],1e-30)
   m&=np.abs(np.sum(normals*radial,axis=1))>q.get('minimum_normal_alignment',.9)
 if 'all' in spec:
  for a in spec['all']:m&=select(p,a,normals)
 if 'any' in spec:m&=np.logical_or.reduce([select(p,a,normals) for a in spec['any']])
 if 'exclude' in spec:
  for a in spec['exclude']:m&=~select(p,a,normals)
 return m

def make_plane_tool(gmsh,s):
 """Planar selector footprint, for mesh-independent finite pressure boundaries."""
 if 'normal_axis' not in s:return []
 ax=s['normal_axis'];kk='xyz'[ax]
 if kk not in s:return []
 oth=[i for i in range(3) if i!=ax];keys=['xyz'[i] for i in oth];fixed=s[kk];occ=gmsh.model.occ
 if ax==2 and ('circle_xy' in s or 'annulus_xy' in s):
  if 'circle_xy' in s:x,y,r=s['circle_xy'];out=[(2,occ.addDisk(x,y,fixed,r,r))]
  else:
   x,y,ri,ro=s['annulus_xy'];a=occ.addDisk(x,y,fixed,ro,ro);b=occ.addDisk(x,y,fixed,ri,ri);out,_=occ.cut([(2,a)],[(2,b)])
 elif ax==2 and 'polygon_xy' in s:
  pp=[occ.addPoint(x,y,fixed) for x,y in s['polygon_xy']];ll=[occ.addLine(pp[i],pp[(i+1)%len(pp)]) for i in range(len(pp))];out=[(2,occ.addPlaneSurface([occ.addWire(ll)]))]
 elif all(k+'_range' in s for k in keys):
  a,b=s[keys[0]+'_range'];c,d=s[keys[1]+'_range'];pts=[]
  for u,v in [(a,c),(b,c),(b,d),(a,d)]:
   p=[0.,0.,0.];p[ax]=fixed;p[oth[0]]=u;p[oth[1]]=v;pts.append(occ.addPoint(*p))
  ll=[occ.addLine(pts[i],pts[(i+1)%4]) for i in range(4)];out=[(2,occ.addPlaneSurface([occ.addWire(ll)]))]
 else:return []
 for ex in s.get('exclude',[]):
  e=dict(ex);e.setdefault('normal_axis',ax);e.setdefault(kk,fixed);cut=make_plane_tool(gmsh,e)
  if cut:out,_=occ.cut(out,cut)
 return out

def mesh_step(path,h,cfg,out):
 import gmsh
 gmsh.initialize()
 try:
  gmsh.option.setNumber('General.Terminal',0);gmsh.option.setNumber('General.NumThreads',1);gmsh.model.add(cfg['id'])
  gmsh.model.occ.importShapes(str(path));gmsh.model.occ.synchronize();vol=gmsh.model.getEntities(3)
  cv=sum(gmsh.model.occ.getMass(d,t) for d,t in vol);patches=[]
  for case in cfg['cases'].values():
   for p in case.get('loads',[])+case.get('supports',[]):
    if p.get('imprint',True):patches+=make_plane_tool(gmsh,p['selector'])
  for p in cfg.get('imprint_step_files',[]):
   q=Path(p);q=q if q.is_absolute() else HERE.parent/q;patches+=gmsh.model.occ.importShapes(str(q))
  if patches:
   gmsh.model.occ.fragment(vol,patches);gmsh.model.occ.synchronize();vol=gmsh.model.getEntities(3)
   v2=sum(gmsh.model.occ.getMass(d,t) for d,t in vol)
   if abs(v2/cv-1)>1e-6:raise ValueError('Surface imprint changed material volume')
   used={t for d,t in gmsh.model.getBoundary(vol,combined=False,oriented=False) if d==2}
   extra=[(2,t) for _,t in gmsh.model.getEntities(2) if t not in used]
   if extra:gmsh.model.occ.remove(extra,recursive=False);gmsh.model.occ.synchronize()
  far=h*cfg.get('far_size_factor',1.8)
  gmsh.option.setNumber('Mesh.MeshSizeMin',h*.3);gmsh.option.setNumber('Mesh.MeshSizeMax',far)
  gmsh.option.setNumber('Mesh.MeshSizeFromCurvature',20);gmsh.option.setNumber('Mesh.MeshSizeFromPoints',0);gmsh.option.setNumber('Mesh.MeshSizeExtendFromBoundary',0)
  fields=[]
  for box in cfg.get('refine_boxes',[]):
   f=gmsh.model.mesh.field.add('Box');lo,hi=box['bounds'];gmsh.model.mesh.field.setNumber(f,'VIn',h*box.get('factor',1));gmsh.model.mesh.field.setNumber(f,'VOut',far)
   for i,k in enumerate('XYZ'):gmsh.model.mesh.field.setNumber(f,k+'Min',lo[i]);gmsh.model.mesh.field.setNumber(f,k+'Max',hi[i])
   gmsh.model.mesh.field.setNumber(f,'Thickness',h);fields.append(f)
  if not fields:
   f=gmsh.model.mesh.field.add('MathEval');gmsh.model.mesh.field.setString(f,'F',str(h));fields=[f]
  f=gmsh.model.mesh.field.add('Min');gmsh.model.mesh.field.setNumbers(f,'FieldsList',fields);gmsh.model.mesh.field.setAsBackgroundMesh(f)
  gmsh.option.setNumber('Mesh.RandomSeed',7);gmsh.option.setNumber('Mesh.Algorithm3D',cfg.get('mesh_algorithm_3d',1));gmsh.model.mesh.generate(3)
  optimizer=cfg.get('mesh_optimizer','Netgen')
  if optimizer is not None:gmsh.model.mesh.optimize(optimizer)
  tags,xyz,_=gmsh.model.mesh.getNodes();xyz=xyz.reshape(-1,3);types,_,con=gmsh.model.mesh.getElements(3);tt=con[list(types).index(4)].reshape(-1,4)
  used=np.unique(tt);lookup={int(t):i for i,t in enumerate(tags)};points=np.array([xyz[lookup[int(t)]] for t in used]);imap={int(t):i for i,t in enumerate(used)}
  cells=np.array([[imap[int(t)] for t in row] for row in tt],dtype=np.int32)
  atomic_npz(out/'mesh.npz',points_mm=points,tet4=cells,cad_volume_mm3=cv,step_sha256=sha(path));gmsh.write(str(out/'mesh.msh'))
  return MeshTet(points.T,cells.T),cv
 finally:gmsh.finalize()

def boundary(mesh):
 ids=mesh.boundary_facets();p=mesh.p.T[mesh.facets[:,ids].T];cross=np.cross(p[:,1]-p[:,0],p[:,2]-p[:,0]);a=np.linalg.norm(cross,axis=1)/2
 return ids,p.mean(axis=1),a,cross/(2*a[:,None])
def resultant(basis,f):
 ix=basis.split_indices();p=basis.doflocs[:,ix[0]].T;F=np.stack([f[j] for j in ix],axis=1)
 return F.sum(axis=0),np.cross(p,F).sum(axis=0)
def load_patch(mesh,basis,patch):
 ids,fc,area,fn=boundary(mesh);mask=select(fc,patch['selector'],fn)
 if not mask.any():raise ValueError('Empty patch: '+patch['label'])
 fb=FacetBasis(mesh,basis.elem,facets=ids[mask],intorder=4);p=fb.global_coordinates();w=fb.dx;A=w.sum();F=np.array(patch['force_N'],dtype=float)
 q=p.transpose(1,2,0).reshape(-1,3);ww=w.ravel();cent=(q*ww[:,None]).sum(axis=0)/A
 if patch.get('distribution')=='radial_cosine':
  rad=patch['radial'];ax=rad['axis'];center=np.array(rad['center_mm']);vec=q-center;vec[:,ax]=0;vec/=np.linalg.norm(vec,axis=1)[:,None]
  # Radial direction is selected so positive weights supply the requested force.
  sign=rad.get('sign',1);vec*=sign;d=F/np.linalg.norm(F);w0=np.maximum(vec@d,0)
  if np.sum(w0*ww)<1e-12:raise ValueError('Radial pressure direction misses selected bore arc')
  target=np.array(patch.get('target_centroid_mm',center),float);target[ax]=patch.get('target_centroid_mm',cent.tolist())[ax]
  targ=np.r_[F,np.cross(target,F)];lever=np.cross(q,vec);six=np.c_[vec,lever]
  others=[i for i in range(3) if i!=ax];a=q[:,ax]-cent[ax]
  b=np.c_[np.ones(len(q)),vec[:,others[0]],vec[:,others[1]],a,a*vec[:,others[0]],a*vec[:,others[1]]]
  base=w0*np.linalg.norm(F)/np.sum(ww*w0*(vec@d));mat=np.einsum('ni,nj,n->ij',six,b,ww*base);rhs=targ-np.sum(six*(ww*base)[:,None],axis=0)
  coeff=np.linalg.lstsq(mat,rhs,rcond=1e-12)[0];density=base*(1+b@coeff)
  if density.min()<-1e-7*max(1.,density.max()):raise ValueError('Radial pressure correction requires tension')
  tr=(vec*density[:,None]).T.reshape(3,*w.shape);min_weight=float(density.min());max_weight=float(density.max())
 else:
  target=np.array(patch.get('target_centroid_mm',cent),dtype=float);v=q-cent;cov=np.einsum('ni,nj,n->ij',v,v,ww)/A
  coeff=np.linalg.pinv(cov,rcond=1e-10)@(target-cent);density=1+v@coeff
  if density.min()<-1e-7:raise ValueError('Centroid correction requires negative pressure')
  density/=np.sum(ww*density);tr=(F[:,None]*(density[None])).reshape(3,*w.shape);min_weight=float(density.min());max_weight=float(density.max())
 @LinearForm
 def form(v,w):return np.sum(tr*v,axis=0)
 f=asm(form,fb);rf,rm=resultant(basis,f)
 return f,dict(label=patch['label'],selector=patch['selector'],distribution=patch.get('distribution','uniform/affine centroid correction'),area_mm2=float(A),geometric_centroid_mm=cent.tolist(),force_N=rf.tolist(),moment_Nmm=rm.tolist(),target_force_N=F.tolist(),target_centroid_mm=patch.get('target_centroid_mm'),minimum_density=min_weight,maximum_density=max_weight,facets=int(mask.sum()))

def conditions(mesh,basis,case):
 f=np.zeros(basis.N);audit=[];D=[];groups=basis.split_indices();p=basis.doflocs[:,groups[0]].T;ids,fc,area,fn=boundary(mesh)
 for patch in case.get('loads',[]):
  vec,a=load_patch(mesh,basis,patch);f+=vec;a['kind']='traction';audit.append(a)
 for bc in case.get('supports',[]):
  mask=select(fc,bc['selector'],fn)
  if not mask.any():raise ValueError('Empty support '+bc.get('label',''))
  dofs=basis.get_dofs(facets=ids[mask]).all();picked=np.concatenate([np.intersect1d(dofs,groups[i]) for i in bc.get('components',[0,1,2])]);D.extend(picked)
  audit.append(dict(label=bc.get('label','support'),kind='fixture',selector=bc['selector'],components=bc.get('components',[0,1,2]),area_mm2=float(area[mask].sum()),dofs=len(picked)))
 for a in case.get('anchors',[]):
  dest=np.array(a.get('point_mm',a.get('point_xyz')));j=int(np.argmin(np.linalg.norm(p-dest,axis=1)));dist=float(np.linalg.norm(p[j]-dest));dofs=[int(groups[k][j]) for k in a['components']];D.extend(dofs)
  audit.append(dict(label=a.get('label','rigid-mode gauge'),kind='gauge',requested_point_mm=dest.tolist(),actual_point_mm=p[j].tolist(),distance_mm=dist,components=a['components'],dofs=dofs))
 return f,np.unique(np.asarray(D,dtype=int)),audit

def assemble(mesh,C):
 @BilinearForm
 def form(u,v,w):return np.einsum('i...,ij,j...->...',eng(v.grad),C,eng(u.grad))
 K=None
 for start in range(0,mesh.nelements,3000):
  b=Basis(mesh,ElementVector(ElementTetP2()),elements=np.arange(start,min(mesh.nelements,start+3000)),intorder=2)
  part=asm(form,b).tocsr();K=part if K is None else K+part
 return K.tocsr()
def linear_solver(K,D,basis):
 free=np.setdiff1d(np.arange(basis.N),D);A=K[free][:,free].tocsr()
 if len(free)<22000:
  lu=splu(A.tocsc())
  return free,lambda f:(lu.solve(f),dict(method='SuperLU',iterations=1))
 import pyamg
 ix=basis.split_indices();p=basis.doflocs[:,ix[0]].T;p=p-p.mean(axis=0);m=np.zeros((basis.N,6))
 for a in range(3):
  m[ix[a],a]=1;rot=np.cross(np.eye(3)[a],p)
  for j in range(3):m[ix[j],3+a]=rot[:,j]
 m=m[free];m/=np.maximum(np.linalg.norm(m,axis=0),1e-30)
 ml=pyamg.smoothed_aggregation_solver(A,B=m,symmetry='symmetric',max_coarse=150);pre=ml.aspreconditioner(cycle='V')
 def solve(f):
  count=[0]
  def cb(x):count[0]+=1
  u,info=cg(A,f,rtol=1e-9,atol=1e-12,maxiter=4000,M=pre,callback=cb)
  if info:raise RuntimeError('CG did not converge '+str(info))
  return u,dict(method='CG with smoothed aggregation AMG',iterations=count[0])
 return free,solve

def recover(mesh,u,C):
 mean=np.empty((mesh.nelements,6));raw=np.empty((mesh.nelements,5));volumes=np.empty(mesh.nelements)
 vertex_quad=(np.array([[0.,1.,0.,0.],[0.,0.,1.,0.],[0.,0.,0.,1.]]),np.ones(4)/24)
 for start in range(0,mesh.nelements,4000):
  end=min(mesh.nelements,start+4000);els=np.arange(start,end)
  b=Basis(mesh,ElementVector(ElementTetP2()),elements=els,intorder=2);s=np.einsum('ij,jeq->ieq',C,eng(b.interpolate(u).grad));volumes[start:end]=b.dx.sum(axis=1)
  mean[start:end]=(s*b.dx[None]).sum(axis=2).T/volumes[start:end,None]
  b=Basis(mesh,ElementVector(ElementTetP2()),elements=els,quadrature=vertex_quad);s=np.einsum('ij,jeq->ieq',C,eng(b.interpolate(u).grad)).transpose(1,2,0)
  mm=metrics(s)
  raw[start:end]=np.stack([mm[k].max(axis=1) for k in ['tensile','compressive','max_shear','vm','failure_index']],axis=1)
 return mean,raw,volumes

def smoothed_stress(mesh,mean,vol,radius):
 """Explicit nonlocal comparison metric; not a calibrated PLA fracture law."""
 cent=mesh.p.T[mesh.t.T].mean(axis=1);tree=cKDTree(cent);out=np.empty_like(mean)
 for start in range(0,len(cent),1500):
  neighbors=tree.query_ball_point(cent[start:start+1500],radius)
  for j,ix in enumerate(neighbors):
   w=vol[ix];out[start+j]=(mean[ix]*w[:,None]).sum(axis=0)/w.sum()
 return out

def solve_config(cfg_path,sizes,selected_cases=None):
 cfg_path=Path(cfg_path).resolve();cfg=json.loads(cfg_path.read_text());step=Path(cfg['step_path']);step=step if step.is_absolute() else HERE.parent/step
 if cfg.get('expected_step_sha256') and sha(step)!=cfg['expected_step_sha256']:raise ValueError('STEP hash mismatch')
 root=cfg_path.parent/'results'/cfg['id'];root.mkdir(parents=True,exist_ok=True);dump(root/'configuration.json',cfg)
 cases={k:v for k,v in cfg['cases'].items() if not selected_cases or k in selected_cases};records=[];C=constitutive()
 for h in sizes:
  out=root/f'h{h:g}';out.mkdir(parents=True,exist_ok=True);print(f'{cfg["id"]}: mesh h={h}',flush=True);t=time.time();mesh,cv=mesh_step(step,h,cfg,out)
  basis=Basis(mesh,ElementVector(ElementTetP2()),intorder=2);scalar=Basis(mesh,ElementTetP2());print(f'{mesh.nelements} elements / {basis.N} DOF',flush=True)
  if basis.N>cfg.get('max_dofs',420000):raise RuntimeError('Mesh DOF cap exceeded; use local refinement')
  K=assemble(mesh,C);lastD=None;solver=None
  for name,case in cases.items():
   f,D,audit=conditions(mesh,basis,case)
   if lastD is None or not np.array_equal(D,lastD):free,solver=linear_solver(K,D,basis);lastD=D
   u=np.zeros(basis.N);u[free],sol=solver(f[free]);r=K@u-f;R=np.zeros_like(r);R[D]=r[D];F,M=resultant(basis,f);RF,RM=resultant(basis,R)
   groups=basis.split_indices();U=np.stack([u[g] for g in groups],axis=1);mean,raw,vol=recover(mesh,u,C);cent=mesh.p.T[mesh.t.T].mean(axis=1)
   smooth_results={};sm_fields={}
   for radius in cfg.get('averaging_radii_mm',[.4,.8]):
    v=smoothed_stress(mesh,mean,vol,radius);met=metrics(v);idx=int(np.argmax(met['failure_index']));sm_fields[f'r{radius:g}_failure_index']=met['failure_index']
    smooth_results[str(radius)]=dict(radius_mm=radius,maximum_index=float(met['failure_index'][idx]),estimated_strength_threshold_N=float(1/met['failure_index'][idx]),location_mm=cent[idx].tolist(),tensile_MPa=float(met['tensile'][idx]),compressive_MPa=float(met['compressive'][idx]),max_shear_MPa=float(met['max_shear'][idx]),interpretation='Volume-weighted tensor average within centroid radius; explicit uncalibrated regularization sensitivity, not demonstrated fracture capacity')
   gauges=[]
   for a in audit:
    if a['kind']=='gauge':gauges+=a['dofs']
   rec=dict(id=cfg['id'],variant=cfg.get('variant'),case=name,h_mm=h,elements=mesh.nelements,dofs=basis.N,quadratic_nodes=scalar.N,element='P2 displacement tetrahedra; faceted linear boundary geometry',elapsed_s=time.time()-t,material=MATERIAL,applied_force_N=F.tolist(),applied_moment_Nmm=M.tolist(),reaction_force_N=RF.tolist(),reaction_moment_Nmm=RM.tolist(),force_balance_error_N=float(np.linalg.norm(F+RF)),moment_balance_error_Nmm=float(np.linalg.norm(M+RM)),gauge_reaction_norm_N=float(np.linalg.norm(R[gauges])) if gauges else 0.,relative_free_residual=float(np.linalg.norm(r[free])/max(np.linalg.norm(f[free]),1e-30)),max_displacement_mm=float(np.linalg.norm(U,axis=1).max()),compliance_Nmm=float(u@f),strain_energy_Nmm=float(.5*u@(K@u)),cad_volume_mm3=cv,mesh_volume_mm3=float(vol.sum()),relative_volume_error=float(vol.sum()/cv-1),raw_peak_tensile_MPa=float(raw[:,0].max()),raw_peak_compressive_MPa=float(raw[:,1].max()),raw_peak_max_shear_MPa=float(raw[:,2].max()),raw_peak_vm_MPa=float(raw[:,3].max()),raw_peak_failure_index=float(raw[:,4].max()),raw_strength_threshold_N=float(1/raw[:,4].max()),raw_peak_element_centroid_mm=cent[int(np.argmax(raw[:,4]))].tolist(),regularized=smooth_results,boundary_audit=audit,solver=sol,step_sha256=sha(step),driver_sha256=sha(__file__),configuration_sha256=sha(cfg_path))
   atomic_npz(out/f'{name}_fields.npz',points_mm=mesh.p.T,tet4=mesh.t.T,quadratic_points_mm=scalar.doflocs.T,displacement_mm=U,mean_stress_voigt_MPa=mean,raw_element_metrics=raw,element_volume_mm3=vol,fixed_dofs=D,force_vector_N=f,reaction_vector_N=R,**sm_fields)
   dump(out/f'{name}.json',rec);records.append(rec);print(f'{name}: u={rec["max_displacement_mm"]:.5g}; raw threshold={rec["raw_strength_threshold_N"]:.5g} N; gauge={rec["gauge_reaction_norm_N"]:.2g}',flush=True)
 dump(root/'run_summary.json',{'id':cfg['id'],'records':records,'status':'actual geometry linear elastic component FEA; prescribed seated contact pressures; no physical rating'})
 return records

if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--config',required=True);ap.add_argument('--sizes',type=float,nargs='+',default=[1.2,.8,.55]);ap.add_argument('--cases',nargs='*');a=ap.parse_args();solve_config(a.config,a.sizes,a.cases)
