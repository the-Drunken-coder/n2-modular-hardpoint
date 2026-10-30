#!/usr/bin/env python3
"""Actual-STEP modular hardpoint component FEA and release-force sensitivity.

N, mm, MPa. Uses the frozen P2/Gmsh engine without altering it. No physical
qualification or printed-material strength rating follows from these screens.
"""
from __future__ import annotations
import argparse
import hashlib
import importlib.metadata
import json
import math
import os
from pathlib import Path
import platform
import shutil
import subprocess
import sys
import time

ROOT=Path(__file__).resolve().parents[1]
ENGINE=ROOT/'scripts/simulation'
PUBLIC=ROOT/'dist/simulation'
GEOMETRY=ENGINE/'geometry.json'
SOLVER_SHA='6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c'
MASS_KG=.454
ACTUATOR_MASS_KG=.068
G=9.80665
PAYLOAD_2G=MASS_KG*2*G
ACTUATOR_2G=ACTUATOR_MASS_KG*2*G
PRELOAD_N=2.0

def sha(path):return hashlib.sha256(Path(path).read_bytes()).hexdigest()
def read(path):return json.loads(Path(path).read_text())
def dump(path,data):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(data,indent=2,allow_nan=False)+'\n')
def plane(x,z,y):return {'normal_axis':2,'z':z,'x_range':list(x),'y_range':list(y)}
def traction(label,x,z,f,y):return {'label':label,'selector':plane(x,z,y),'force_N':[0,0,f]}

def contact_state(g,stroke):
    x0=max(g['lug_x'][0],g['keeper_tip_x']+stroke);x1=g['lug_x'][1]
    if x1<=x0:raise ValueError('No retained lug overlap at requested state')
    xc=(x0+x1)/2
    if stroke<g['distal_support_loss_mm']-1e-9:
        distal=[g['keeper_tip_x']+stroke,g['distal_roof_x'][1]]
        dc=sum(distal)/2;pc=sum(g['proximal_roof_x'])/2
        proximal=(xc-dc)/(pc-dc)
        contacts=[('distal_roof',distal,1-proximal),('proximal_roof',g['proximal_roof_x'],proximal)]
    else:
        pc=sum(g['proximal_roof_x'])/2;fc=sum(g['far_floor_x'])/2
        far=(pc-xc)/(fc-pc)
        contacts=[('proximal_roof',g['proximal_roof_x'],1+far),('far_floor',g['far_floor_x'],-far)]
    return {'stroke_mm':stroke,'lug_contact_x':[x0,x1],'lug_centroid_x':xc,
            'remaining_overlap_mm':x1-x0,'contacts':contacts,
            'sliding_normal_force_multiplier':1+sum(abs(q[2]) for q in contacts)}

def washer_support(label,x,y,z,ri=1.6,ro=3.):
    return {'label':label,'selector':{'normal_axis':2,'z':z,'annulus_xy':[x,y,ri,ro]},'components':[0,1,2]}

def make_config(g,component,step,cases):
    if component=='receiver':
        refine=[{'bounds':[[22.3,3.2,2.9],[43.5,23.5,g['receiver_roof_z']+5]],'factor':1},
                {'bounds':[[1.7,10.7,-.1],[8.3,17.3,3.5]],'factor':1},
                {'bounds':[[31.7,-13.3,-.1],[38.3,-6.7,3.5]],'factor':1}]
    elif component=='adapter':
        refine=[{'bounds':[[26.5,6.1,g['adapter_floor_z']-4],[30.7,13.9,g['adapter_floor_z']+9]],'factor':1}]
    else:
        refine=[{'bounds':[[24.9,8.1,g['keeper_bottom_z']-.2],[37.5,11.9,g['keeper_top_z']+.2]],'factor':1}]
    return {'id':f'Modular_{component}','variant':'modular-core','component':component,
        'step_path':str(step.resolve()),'expected_step_sha256':sha(step),
        'load_normalization_N':None,'loads_are_actual_newtons':True,
        'model_scope':'Actual revised STEP; isotropic linear elastic prescribed contact-traction sensitivity. Not assembled contact, manufacturing or physical qualification.',
        'far_size_factor':2.6 if component=='receiver' else 2.2,
        'max_dofs':460000,'averaging_radii_mm':[.4,.8],'refine_boxes':refine,'cases':cases}

def prepare(out):
    if sha(ENGINE/'solver.py')!=SOLVER_SHA:raise ValueError('Frozen solver changed')
    g=read(GEOMETRY);out.mkdir(parents=True,exist_ok=True)
    files={p:ROOT/g['parts'][p] for p in ('receiver','adapter','keeper')}
    for path in files.values():
        if not path.exists():raise FileNotFoundError(path)
    supports=[washer_support(f'Rigid fixture at core mounting hole {i+1}',*m) for i,m in enumerate(g['receiver_mounts'])]
    payload_supports=[washer_support(f'Rigid payload bolt annulus {i+1}',*m) for i,m in enumerate(g['payload_mounts'])]
    y=g['contact_y'];states=[contact_state(g,s) for s in (0,1.,4.5,4.7)]
    rec_cases={};ada_cases={};keeper_cases={}
    for tag,stroke,nfactor,preload in [('retained_2g',0,1,0),('retained_2g_preload',0,1,PRELOAD_N),
             ('distal_lost_2g_preload',1,1,PRELOAD_N),('proof_4g_preload',0,2,PRELOAD_N)]:
        state=contact_state(g,stroke);total=nfactor*PAYLOAD_2G+preload;loads=[]
        for name,x,factor in state['contacts']:
            z=g['receiver_floor_z'] if name=='far_floor' else g['receiver_roof_z']
            loads.append(traction(name,x,z,total*factor,y))
        if preload:
            for i,(x,py,pz,radius) in enumerate(g['pad_contacts']):
                loads.append({'label':f'Pad {i+1} preload reaction on receiver',
                    'selector':{'normal_axis':2,'z':pz,'circle_xy':[x,py,radius]},'force_N':[0,0,-preload/len(g['pad_contacts'])]})
        # Actual actuator mount bearing patches. Equal splitting is an explicit
        # local-load idealization; no external housing supplies a restraint.
        for i,selector in enumerate(g['actuator_load_selectors']):
            loads.append({'label':f'68 g actuator inertia through mounting contact {i+1}',
                'selector':selector,'force_N':[0,0,nfactor*ACTUATOR_2G/len(g['actuator_load_selectors'])],
                'imprint':False})
        rec_cases[tag]={'loads':loads,'supports':supports,'stroke_mm':stroke,'payload_force_N':nfactor*PAYLOAD_2G,
            'preload_N':preload,'actuator_inertia_N':nfactor*ACTUATOR_2G,
            'fixture':'Only two actual core attachment annuli fixed; no rail, housing or full backing restraint.',
            'contact_scope':'Prescribed roof/floor reactions. Gaps, contact redistribution, bolt preload and fixture flexibility are not solved.'}
    total=PAYLOAD_2G+PRELOAD_N
    for state in states:
        s=state['stroke_mm'];tag=f'stroke_{s:.1f}mm'.replace('.','p')
        if s!=1.0: # Its adapter contact is identical to the retained case.
            adapter_loads=[traction('Keeper traction on remaining lug floor',state['lug_contact_x'],g['adapter_floor_z'],-total,y)]
            for i,(x,py,pz,radius) in enumerate(g['adapter_pad_contacts']):
                adapter_loads.append({'label':f'Pad {i+1} preload reaction on adapter',
                    'selector':{'normal_axis':2,'z':pz,'circle_xy':[x,py,radius]},'force_N':[0,0,PRELOAD_N/len(g['adapter_pad_contacts'])]})
            ada_cases[tag]={'loads':adapter_loads,
                'supports':payload_supports,'stroke_mm':s,'remaining_overlap_mm':state['remaining_overlap_mm'],
                'payload_force_N':PAYLOAD_2G,'preload_N':PRELOAD_N,
                'fixture':'Rigid annuli at the two real payload attachment holes; no full flange-face bonding.',
                'contact_scope':'Uniform traction over the remaining floor contact; wear and edge-contact redistribution are not solved.'}
        kloads=[traction('Lug floor pushes on keeper', [x-s for x in state['lug_contact_x']],g['keeper_bottom_z'],total,y)]
        for name,x,factor in state['contacts']:
            z=g['keeper_bottom_z'] if name=='far_floor' else g['keeper_top_z']
            kloads.append(traction(name,[v-s for v in x],z,-total*factor,y))
        keeper_cases[tag]={'loads':kloads,'anchors':g['keeper_anchors'],'stroke_mm':s,
            'remaining_overlap_mm':state['remaining_overlap_mm'],'payload_force_N':PAYLOAD_2G,'preload_N':PRELOAD_N,
            'fixture':'Six point DOFs remove rigid modes only; negligible gauge reaction is required.',
            'contact_scope':'Balanced prescribed tractions at specified host contact centroids, shifted into keeper-local coordinates.'}
    plans=[]
    for component,cases,sizes in [('receiver',rec_cases,[1.15,.85]),('adapter',ada_cases,[.7,.5,.35]),('keeper',keeper_cases,[.7,.5,.35])]:
        cfg=make_config(g,component,files[component],cases);path=out/'configs'/f'{component}.json';dump(path,cfg)
        plans.append({'part':component,'config':str(path),'sizes_mm':sizes,'cases':list(cases)})
    versions={name:importlib.metadata.version(name) for name in ('numpy','scipy','gmsh','scikit-fem','pyamg')}
    manifest={'geometry':g,'source_steps':{k:{'path':str(v.relative_to(ROOT)),'sha256':sha(v)} for k,v in files.items()},
        'solver_sha256':SOLVER_SHA,'runner_sha256':sha(__file__),'geometry_config_sha256':sha(GEOMETRY),
        'material_sha256':sha(ENGINE/'material.json'),'python':sys.version,'platform':platform.platform(),'packages':versions,
        'mass_kg':MASS_KG,'actuator_mass_kg':ACTUATOR_MASS_KG,'gravity_m_s2':G,'payload_force_2g_N':PAYLOAD_2G,
        'actuator_force_2g_N':ACTUATOR_2G,'assumed_seat_preload_N':PRELOAD_N,'plans':plans,'contact_states':states,
        'structural_or_physical_qualification':False,
        'runner_sha256_scope':'Preparation/reporting source version. Executed numerical problems are identified by the frozen solver hash and per-case configuration and STEP hashes.'}
    snapshot_record=out/'execution-orchestration.json'
    if snapshot_record.exists():manifest['execution_orchestration']=read(snapshot_record)
    manifest['preparation_runner_sha256']=sha(__file__)
    dump(out/'manifest.json',manifest);dump(PUBLIC/'input-manifest.json',manifest)
    for plan in plans:shutil.copyfile(plan['config'],PUBLIC/f'{plan["part"]}-configuration.json')
    release_sweep(g)
    print(json.dumps({'prepared':True,'planned_solves':sum(len(p['sizes_mm'])*len(p['cases']) for p in plans),'parts':list(files)},indent=2),flush=True)

def release_sweep(g):
    rows=[]
    for mass in (0.1,.25,MASS_KG):
        for mu in (.05,.1,.15,.2,.3):
            for preload in (0,1,2,4):
                for spring in (0,.5,1):
                    state_values=[]
                    for stroke in (0,.5,1,2,3,4,4.5,4.7):
                        state=contact_state(g,stroke)
                        required=mu*state['sliding_normal_force_multiplier']*(mass*2*G+preload)+spring
                        state_values.append({'stroke_mm':stroke,'required_pull_N':required,
                            'actuator_gap_mm':g.get('actuator_stroke_mm',10)-stroke,
                            'normal_multiplier':state['sliding_normal_force_multiplier']})
                    worst=max(state_values,key=lambda v:v['required_pull_N'])
                    rows.append({'mass_kg':mass,'load_factor_g':2,'friction_coefficient':mu,'preload_N':preload,
                                 'return_and_other_resistance_N':spring,'peak_pull_N':worst['required_pull_N'],
                                 'peak_stroke_mm':worst['stroke_mm'],'states':state_values})
    yaw=[]
    for eccentricity in (0,.5,1,4,16):
        for span in (4.5,7,10):
            for mu in (.05,.1,.15,.2,.3):
                feedback=2*mu*eccentricity/span
                yaw.append({'pull_line_offset_mm':eccentricity,'effective_side_contact_spacing_mm':span,
                    'friction_coefficient':mu,'feedback_fraction':feedback,
                    'amplification':1/(1-feedback) if feedback<1 else None,
                    'idealized_self_lock_tendency':feedback>=1})
    report={'model':'Quasi-static Coulomb sensitivity with the same prescribed contact resultants as the structural submodels.',
        'equation':'F_pull = mu * (N_lug + sum(abs(N_guides))) + return_and_other_resistance',
        'friction_and_preload_measured':False,'actuator_force_qualified':False,'rows':rows,
        'exclusions':['Breakaway friction, contamination, wedging and misalignment','Contact redistribution and elasticity',
                      'Actual return spring curve','Solenoid current rise, heating and minimum force tolerance'],
        'candidate_note':'A 10 mm-stroke solenoid starts at a 10 mm pull gap in this layout. A 6 mm curve point is not its initial pull capability.',
        'yaw_sensitivity':{'equation':'F = F0 / (1 - 2*mu*e/L)',
            'derivation':'Two opposite side reactions separated by L balance yaw moment e*F. Each has magnitude e*F/L; their combined sliding friction is 2*mu*e*F/L.',
            'scope':'Illustrative two-contact rigid-body screen; actual lateral bearing span and coefficient are unmeasured. Not a nonlinear contact prediction.',
            'design_correction':'An initial 16 mm offset was rejected. Final actuator pull line and keeper bar both lie at Y10, removing the nominal yaw eccentricity. A 0.5 mm vertical offset remains. Clearance, tolerances and local side contact can still bind.',
            'rows':yaw}}
    dump(PUBLIC/'release-force-sweep.json',report)

def run_part(out,part):
    manifest=read(out/'manifest.json');plan=next(p for p in manifest['plans'] if p['part']==part)
    env=os.environ.copy()
    for key in ('OPENBLAS_NUM_THREADS','OMP_NUM_THREADS','MKL_NUM_THREADS'):env[key]='1'
    log=out/'logs'/f'{part}.log';log.parent.mkdir(exist_ok=True)
    cmd=[sys.executable,str(ENGINE/'solver.py'),'--config',plan['config'],'--sizes',*map(str,plan['sizes_mm'])]
    start_runner_hash=sha(__file__)
    started=time.time();print('START '+part,flush=True)
    with log.open('w') as stream:result=subprocess.run(cmd,stdout=stream,stderr=subprocess.STDOUT,env=env)
    record={'part':part,'returncode':result.returncode,'elapsed_seconds':time.time()-started,'log':str(log),
        'solver_sha256':sha(ENGINE/'solver.py'),'config_sha256':sha(plan['config']),
        'runner_sha256_at_start':start_runner_hash}
    dump(out/'logs'/f'{part}-execution.json',record);print(json.dumps(record),flush=True)
    if result.returncode:raise SystemExit(result.returncode)

def averaging_operator(fields_path,radius=.4):
    import numpy as np
    from scipy.spatial import cKDTree
    from scipy.sparse import csr_matrix
    with np.load(fields_path) as f:
        cent=f['points_mm'][f['tet4']].mean(axis=1);vol=f['element_volume_mm3']
    graph=cKDTree(cent).sparse_distance_matrix(cKDTree(cent),radius,output_type='coo_matrix')
    weights=csr_matrix((vol[graph.col],(graph.row,graph.col)),shape=graph.shape)
    return weights, np.asarray(weights.sum(axis=1)).ravel(),cent

def averaged_peaks(fields_path,operator):
    import numpy as np
    weights,denominator,cent=operator
    with np.load(fields_path) as f:
        s=(weights@f['mean_stress_voigt_MPa'])/denominator[:,None]
        points=f['quadratic_points_mm'];u=f['displacement_mm'];unorm=np.linalg.norm(u,axis=1)
    tensor=np.zeros((len(s),3,3));tensor[:,0,0]=s[:,0];tensor[:,1,1]=s[:,1];tensor[:,2,2]=s[:,2]
    tensor[:,0,1]=tensor[:,1,0]=s[:,3];tensor[:,1,2]=tensor[:,2,1]=s[:,4];tensor[:,0,2]=tensor[:,2,0]=s[:,5]
    p=np.linalg.eigvalsh(tensor)
    metrics={'tensile_MPa':np.maximum(p[:,-1],0),'compressive_MPa':np.maximum(-p[:,0],0),
             'max_shear_MPa':(p[:,-1]-p[:,0])/2,
             'vm_MPa':np.sqrt(.5*((s[:,0]-s[:,1])**2+(s[:,1]-s[:,2])**2+(s[:,2]-s[:,0])**2)+3*np.sum(s[:,3:]**2,axis=1))}
    neighbors=weights.getnnz(axis=1)
    peaks={k:{'value':float(v.max()),'location_mm':cent[int(v.argmax())].tolist(),
              'centroids_in_averaging_neighborhood':int(neighbors[int(v.argmax())])} for k,v in metrics.items()}
    peaks['radius_mm']=.4
    peaks['sampling']={'median_neighbor_count':float(np.median(neighbors)),
                       'single_centroid_neighborhood_fraction':float(np.mean(neighbors==1))}
    peaks['interpretation']='Each metric is independently maximized after volume-weighted tensor averaging within 0.4 mm of each element centroid. Uncalibrated comparison, not a strength allowable; small neighborhoods can undersample the requested radius.'
    displacement={'location_mm':points[int(unorm.argmax())].tolist(),'vector_mm':u[int(unorm.argmax())].tolist()}
    return peaks,displacement

def make_plots(out,summary):
    """Plots are derived only from this run's numerical fields and equations."""
    os.environ.setdefault('MPLCONFIGDIR','/tmp/n2-modular-matplotlib')
    import numpy as np
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    from matplotlib import colors,cm
    from matplotlib.collections import PolyCollection
    from mpl_toolkits.mplot3d.art3d import Poly3DCollection
    dest=PUBLIC/'plots';dest.mkdir(exist_ok=True)
    plt.rcParams.update({'font.size':10,'axes.spines.top':False,'axes.spines.right':False,
                         'figure.facecolor':'white','savefig.facecolor':'white'})
    examples=[('receiver','distal_lost_2g_preload'),('adapter','stroke_4p7mm'),('keeper','stroke_1p0mm')]
    fig,axes=plt.subplots(2,3,figsize=(12,6.6),layout='constrained')
    for j,(part,case) in enumerate(examples):
        series=sorted([r for r in summary['cases'] if r['part']==part and r['case']==case],key=lambda r:r['elements'])
        for i,(key,label) in enumerate([('max_displacement_mm','Maximum displacement (mm)'),('averaged_0p4mm_tensile_MPa','0.4 mm averaged peak tension (MPa)')]):
            ax=axes[i,j];ax.plot([r['elements'] for r in series],[r[key] for r in series],'o-',color='#176d91')
            for r in series:ax.annotate(f'h={r["mesh_size_mm"]:g}',(r['elements'],r[key]),xytext=(3,7),textcoords='offset points',fontsize=8)
            ax.set(xlabel='Tetrahedral elements',ylabel=label);ax.grid(alpha=.22)
            ax.ticklabel_format(axis='x',style='sci',scilimits=(3,3));ax.margins(y=.3)
            if i==0:ax.set_title(f'{part.capitalize()}\n{case.replace("_"," ")}')
    fig.suptitle('Mesh refinement of final modular-core STEP bodies\nIsotropic linear-elastic component screens; stress averaging is uncalibrated',fontsize=12)
    fig.savefig(dest/'mesh-refinement.png',dpi=160);plt.close(fig)

    for part,case,kind in [('receiver','retained_2g_preload','displacement'),('adapter','stroke_4p7mm','von_mises'),('keeper','stroke_1p0mm','von_mises')]:
        row=min([r for r in summary['cases'] if r['part']==part and r['case']==case],key=lambda r:r['mesh_size_mm'])
        file=out/'configs/results'/f'Modular_{part}'/f'h{row["mesh_size_mm"]:g}'/f'{case}_fields.npz'
        with np.load(file) as f:
            p=f['points_mm'];t=f['tet4'];s=f['mean_stress_voigt_MPa'];u=f['displacement_mm'][:len(p)]
        faces=np.concatenate([t[:,[0,1,2]],t[:,[0,1,3]],t[:,[0,2,3]],t[:,[1,2,3]]]);owner=np.tile(np.arange(len(t)),4)
        _,first,count=np.unique(np.sort(faces,axis=1),axis=0,return_index=True,return_counts=True)
        ids=first[count==1];faces=faces[ids];owner=owner[ids]
        if kind=='displacement':
            values=np.linalg.norm(u,axis=1)[faces].mean(axis=1);label='Surface-facet mean displacement (mm)'
        else:
            vm=np.sqrt(.5*((s[:,0]-s[:,1])**2+(s[:,1]-s[:,2])**2+(s[:,2]-s[:,0])**2)+3*np.sum(s[:,3:]**2,axis=1))
            values=vm[owner];label='Von Mises of boundary-element mean stress (MPa)'
        norm=colors.Normalize(vmin=0,vmax=float(values.max()));cmap=plt.get_cmap('viridis')
        if part=='adapter':
            # Exact planar intersections with tetrahedra, not a filled contour
            # interpolated across the keeper opening or other absent material.
            plane_y=10.;polygons=[];section_values=[]
            crossed=np.flatnonzero((p[t,1].min(axis=1)<=plane_y)&(p[t,1].max(axis=1)>=plane_y))
            edges=[(0,1),(0,2),(0,3),(1,2),(1,3),(2,3)]
            for element in crossed:
                vertices=p[t[element]];cut=[]
                for i,j in edges:
                    a,b=vertices[i],vertices[j];da=a[1]-plane_y;db=b[1]-plane_y
                    if abs(da)<1e-10:cut.append(a[[0,2]])
                    if abs(db)<1e-10:cut.append(b[[0,2]])
                    if da*db<0:cut.append((a+(b-a)*(-da)/(db-da))[[0,2]])
                if not cut:continue
                cut=np.unique(np.round(cut,10),axis=0)
                if len(cut)<3:continue
                center=cut.mean(axis=0);angle=np.arctan2(cut[:,1]-center[1],cut[:,0]-center[0])
                polygons.append(cut[np.argsort(angle)]);section_values.append(vm[element])
            norm=colors.Normalize(vmin=0,vmax=float(vm.max()))
            fig=plt.figure(figsize=(11.2,6.1))
            gs=fig.add_gridspec(1,3,width_ratios=[1.4,1,.07],left=.06,right=.91,bottom=.13,top=.78,wspace=.3)
            for j,limits in enumerate([((22,44),(10.5,27)),((26.4,30.7),(11,18))]):
                ax=fig.add_subplot(gs[0,j]);collection=PolyCollection(polygons,array=np.asarray(section_values),cmap=cmap,norm=norm,edgecolors='none',rasterized=True)
                ax.add_collection(collection);ax.set(xlim=limits[0],ylim=limits[1],xlabel='X (mm)',ylabel='Z (mm)')
                ax.set_aspect('equal');ax.grid(alpha=.12);ax.set_title('Complete section' if j==0 else 'Lug-floor detail')
                if j==1:
                    ax.plot([30.2,30.3],[14.2,14.2],color='#dc2626',lw=3)
                    ax.annotate('0.1 mm remaining\nloaded contact',(30.25,14.2),xytext=(27,17.1),fontsize=9,
                                arrowprops={'arrowstyle':'->','color':'#dc2626'},color='#9f1239')
            cax=fig.add_subplot(gs[0,2]);fig.colorbar(cm.ScalarMappable(norm=norm,cmap=cmap),cax=cax,label='Von Mises of element-mean stress (MPa)')
            fig.suptitle('Adapter at 4.7 mm withdrawal: exact section through Y = 10 mm\nUndeformed tetrahedra; piecewise element-mean values; no interpolation across voids',fontsize=13,y=.96)
            fig.text(.06,.025,'Full field stress scale. The raw vertex peak and the 0.4 mm averaged metric are separate results; no strength qualification.',fontsize=9)
            fig.savefig(dest/'adapter-field.png',dpi=170);plt.close(fig)
            continue
        fig=plt.figure(figsize=(10.5,6.5))
        gs=fig.add_gridspec(1,2,width_ratios=[24,1],left=.02,right=.9,bottom=.06,top=.84,wspace=.23)
        ax=fig.add_subplot(gs[0,0],projection='3d')
        surface=Poly3DCollection(p[faces],facecolors=cmap(norm(values)),edgecolors='none',rasterized=True)
        ax.add_collection3d(surface);lo=p.min(axis=0);hi=p.max(axis=0)
        ax.set(xlim=(lo[0],hi[0]),ylim=(lo[1],hi[1]),zlim=(lo[2],hi[2]),xlabel='X (mm)',ylabel='Y (mm)',zlabel='Z (mm)')
        ax.set_box_aspect(hi-lo);ax.view_init(elev=24,azim=-125 if part=='adapter' else -65)
        fig.suptitle(f'{part.capitalize()}: {case.replace("_"," ")}\nUndeformed geometry; h={row["mesh_size_mm"]:g} mm; no strength qualification',fontsize=13,y=.97)
        cax=fig.add_subplot(gs[0,1]);fig.colorbar(cm.ScalarMappable(norm=norm,cmap=cmap),cax=cax,label=label)
        fig.savefig(dest/f'{part}-field.png',dpi=170);plt.close(fig)

    g=read(GEOMETRY);strokes=np.r_[np.linspace(0,.99,30),np.linspace(1,4.799,100)]
    fig,ax=plt.subplots(figsize=(9,5.2),layout='constrained')
    for mu in (.05,.1,.15,.2,.3):
        forces=[mu*contact_state(g,float(s))['sliding_normal_force_multiplier']*(PAYLOAD_2G+PRELOAD_N)+.5 for s in strokes]
        ax.plot(strokes,forces,label=f'μ={mu:g}')
    ax.axvline(1,color='#666',linestyle='--',lw=1);ax.axvline(4.8,color='#666',linestyle=':',lw=1)
    ax.text(1.04,ax.get_ylim()[1]*.93,'Distal support lost',fontsize=9)
    ax.set(xlabel='Keeper withdrawal (mm)',ylabel='Illustrative axial pull demand (N)',
           title='Release-force sensitivity: 0.454 kg at 2 g, 2 N preload, 0.5 N return resistance\nInline pull; excludes side binding, breakaway and actuator dynamics')
    ax.grid(alpha=.2);ax.legend(ncol=5,loc='lower left')
    fig.savefig(dest/'release-force-sensitivity.png',dpi=160);plt.close(fig)
    return ['simulation/plots/'+p.name for p in sorted(dest.glob('*.png'))]

def write_report(summary):
    finest=[]
    for part,case in sorted({(r['part'],r['case']) for r in summary['cases']}):
        finest.append(min([r for r in summary['cases'] if r['part']==part and r['case']==case],key=lambda r:r['mesh_size_mm']))
    lines=['# Modular-core numerical study','',
      '## Outcome','',
      f'{summary["case_solves"]} actual-STEP, quadratic-tetrahedron linear-elastic component solves were run. Numerical status: **{summary["status"]}**. These runs do **not** establish a payload rating, printed-material strength or reliable release at 2 g.','',
      'The final core uses only its two actual mounting holes as external restraints. There is no outer rail, surrounding module or aircraft skin in the support model. The adapter is restrained only at the two actual payload attachment-hole annuli. The keeper uses six rigid-motion gauge degrees of freedom with a negligible-reaction check.','',
      '## Design issue found and corrected','',
      'The first actuator reservation pulled at Y=-6 mm while the keeper contact bar lies at Y=10 mm. That 16 mm offset creates a yaw moment and can amplify sliding friction. It was rejected before the final evidence runs. The revised actuator and straight keeper pull at Y=10 mm. A 2 mm tongue preserves the provisional 2.4 mm clevis opening; the actuator axis is 0.5 mm below the 3 mm bar midplane. Printable ribs support the local actuator bed; they do not add an external restraint.','',
      'For a simplified pair of opposed side contacts, F = F0/(1 - 2 μ e/L), where e is force-line eccentricity and L is the contact separation along travel. The discarded e=16 mm layout gives 1.92× amplification at μ=0.15 and L=10 mm; at L=4.5 mm its idealized denominator is negative. The final nominal yaw offset is zero. For the remaining e=0.5 mm vertical offset, this same deliberately simplified feedback bound is 1.034× at μ=0.15, L=4.5 mm and 1.071× at μ=0.30. Actual contact geometry, clearances and return forces still require measurement.','',
      '## Inputs and physical scope','',
      f'- Departing mass: {MASS_KG:g} kg; 2 g force: {PAYLOAD_2G:.6f} N.',
      f'- Purchased actuator mass: {ACTUATOR_MASS_KG:g} kg; 2 g inertia: {ACTUATOR_2G:.6f} N.',
      '- Seat preload: an assumed total 2 N, with four equal 0.5 N pad reactions. Both receiver and adapter include the corresponding opposing pad tractions, so preload does not become additional external payload weight.',
      '- The receiver also has a 4 g external-load sensitivity, equivalent to twice the 2 g payload and actuator forces. The 2 N preload remains constant. This is a numerical proof-load screen, not a passed physical proof test.',
      '- Isotropic solid PLA comparison proxy: E=2200 MPa, ν=0.35. The repository material file contains analyst-assumed strength numbers used by legacy diagnostic code; they are not measured allowables. The curated results remove derived strength-threshold and failure-index fields. No PAHT-CF strength or anisotropy is inferred.',
      '- Vertical load cases only. Lateral key bearing, torsion, payload-center-of-gravity moments, combined multiaxis loads, bolt preload/slip/pull-through and host compliance are not solved.',
      '- Contact is represented by finite prescribed tractions. The actual 0.3 mm guide clearance, rotation into alternate contacts, frictional redistribution, wear, nonlinear geometry and material yielding are not solved. The vanishing distal-guide overlap immediately before its support is lost is not resolved by these discrete contact states.',
      '- Solenoid axial pull, tongue/pin bearing strength and their coupled frictional contact response are not included in the vertical retention FEA.',
      '- The actuator inertial force is split between the two actual countersink surfaces. Its resultant is at their midpoint, 1 mm from the approximate envelope CG. This is a finite bearing-traction surrogate, not a bolt/contact model.','',
      '## Finest-mesh results','',
      '| Part and case | h (mm) | Tetrahedra | Max displacement (mm) | Raw peak tension (MPa) | 0.4 mm averaged peak tension (MPa) |',
      '|---|---:|---:|---:|---:|---:|']
    for r in finest:lines.append(f'| {r["part"]}: {r["case"]} | {r["mesh_size_mm"]:g} | {r["elements"]:,} | {r["max_displacement_mm"]:.5f} | {r["raw_peak_tensile_MPa"]:.3f} | {r["averaged_0p4mm_tensile_MPa"]:.3f} |')
    lines+=['','The 0.4 mm value is the independent maximum principal tensile stress after volume-weighted tensor averaging within that radius of each element centroid. This smooths sharp traction/fixture peaks for comparison; it is not a calibrated fracture criterion. Keeper displacement is relative to its rigid-motion gauges and must not be added directly to receiver/adapter maxima as an assembly clearance prediction.','',
      '## Mesh refinement and numerical checks','',
      '| Part and case | Mesh levels | Finest-pair displacement change | Averaged-tension change | Raw-tension change |',
      '|---|---:|---:|---:|---:|']
    for r in summary['mesh_convergence']:
        c=r['finest_pair_change_percent'];lines.append(f'| {r["part"]}: {r["case"]} | {r["mesh_levels"]} | {c["max_displacement_mm"]:.2f}% | {c["averaged_0p4mm_tensile_MPa"]:.2f}% | {c["raw_peak_tensile_MPa"]:.2f}% |')
    lines+=['','Numerical gates are force balance <1e-4 N, moment balance <1e-3 N·mm, free-DOF relative residual <1e-7, mesh/CAD volume error <2%, and keeper gauge reactions <1e-4 N. Refinement is reported separately: a solved equilibrium problem is not evidence of mesh-independent stress or physical safety. The receiver has two levels; the critical lug/keeper cases have three.','',
      'The 0.4 mm averaging operator is undersampled near some fixtures. At the retained adapter tensile peak, its neighborhood contains only one element centroid at h=0.5 mm and three at h=0.35 mm. At the receiver retained/preload tensile peak, the corresponding counts are one at h=1.15 mm and two at h=0.85 mm. The peak locations also move around the attachment fixtures. These observations explain why some averaged maxima change by 28–44% even while displacements settle. The averaged stress is not converged in those cases, and no safety credit is taken from smoothing. Per-case neighbor counts are recorded in the curated results.','',
      '## Release force and actuator decision','',
      'The friction sweep uses Fpull = μ × (lug normal + sum of absolute guide normals) + return resistance. For 0.454 kg at 2 g, 2 N preload, μ=0.15 and 0.5 N return resistance, its peak is approximately 5.63 N immediately after the distal support is lost. At zero preload the same assumptions give about 4.69 N. These are sensitivity values, not measured requirements; they omit breakaway, side binding, contamination, wedges, current rise, temperature and tolerance.','',
      'The nominal lug overlap is 3.5 mm retained, 0.3 mm at 4.5 mm withdrawal and 0.1 mm at 4.7 mm. Distal guide support ends at 1 mm; complete lug clearance occurs at 4.8 mm. A 10 mm actuator stroke leaves 5.2 mm nominal final travel margin, but the initial pull begins at a 10 mm magnetic gap. Longer stroke does not establish usable force throughout that gap.','',
      'Adafruit 3992 remains a 5–6 V, 10 mm-stroke, 68 g envelope/bench candidate. The nominal 6 Ω winding is about 4.17 W at 5 V. The supplier diagram labels power/duty curves, not a guaranteed 5 V minimum-force curve, and does not establish spring-subtracted available force or tolerance. No release-at-2-g claim follows. See [actuator selection](actuator-selection.md) and the [official drawing](https://cdn-shop.adafruit.com/product-files/3992/3992_diagram.jpg).','',
      '## Reproduction and evidence','',
      'Install `scripts/simulation/requirements.txt` and system `libxft2`, then run:',
      '```sh','python scripts/simulate_modular_core.py --prepare --output /tmp/n2-modular-simulation',
      'python scripts/simulate_modular_core.py --run receiver --output /tmp/n2-modular-simulation',
      'python scripts/simulate_modular_core.py --run adapter --output /tmp/n2-modular-simulation',
      'python scripts/simulate_modular_core.py --run keeper --output /tmp/n2-modular-simulation',
      'python scripts/simulate_modular_core.py --summarize --output /tmp/n2-modular-simulation','```','',
      'The public `dist/simulation` directory contains the input manifest, exact component configurations, curated case results, compact summary, friction/yaw sweep and plots. Raw meshes, field arrays and solver logs stay in the output directory and are suitable for CI artifacts. Every result includes STEP, solver and configuration hashes. A fresh geometry build must be prepared and solved again; old numerical results are not carried forward by shape similarity.','',
      '## Next verification steps','',
      'Measure the candidate solenoid and its actual loaded 5 V force across the full 10 mm travel. Establish printed-material directional properties and print orientation, then run a controlled fixture proof and repeated release test at 2 g equivalent loading, including unfavorable lateral loads and tolerance extremes. These remain outstanding, and no physical testing is claimed here.','']
    if summary.get('execution_orchestration'):
        record=summary['execution_orchestration']
        lines+=['## Local execution and reporting provenance','',
          f'The solve-era orchestration source is preserved with SHA-256 `{record["runner_sha256_at_solve"]}`. Its snapshot was recovered from a contemporaneous CI staging copy; the original local launcher did not capture its own hash at process start. The final preparation/reporting source has SHA-256 `{summary["reporting_runner_sha256"]}`. Later edits changed reporting, plots and provenance bookkeeping, with no changes to the executed STEP bodies, solver or case configurations. The input manifest and provenance directory distinguish these versions and preserve a source diff. Future runs record the runner hash at launch.','']
    path=ROOT/'docs/modular-simulation.md';path.parent.mkdir(exist_ok=True);path.write_text('\n'.join(lines))

def summarize(out):
    manifest=read(out/'manifest.json');rows=[];checks=[]
    for plan in manifest['plans']:
        part=plan['part'];base=Path(plan['config']).parent/'results'/f'Modular_{part}'
        for h in plan['sizes_mm']:
            operator=averaging_operator(base/f'h{h:g}'/f'{plan["cases"][0]}_fields.npz')
            for case in plan['cases']:
                p=base/f'h{h:g}'/f'{case}.json';d=read(p)
                avg,disp=averaged_peaks(base/f'h{h:g}'/f'{case}_fields.npz',operator)
                balanced=(d['force_balance_error_N']<1e-4 and d['moment_balance_error_Nmm']<1e-3 and
                    d['relative_free_residual']<1e-7 and abs(d['relative_volume_error'])<.02 and
                    (part!='keeper' or d['gauge_reaction_norm_N']<1e-4))
                safe={k:v for k,v in d.items() if not any(term in k for term in ('strength_threshold','failure_index','regularized'))}
                safe['regularized_stress']={r:{k:v for k,v in val.items() if k not in ('maximum_index','estimated_strength_threshold_N')} for r,val in d['regularized'].items()}
                safe['numerical_checks_passed']=balanced;safe['qualification']=False
                safe['independent_averaged_peaks']=avg;safe['maximum_displacement_details']=disp
                dest=PUBLIC/'cases'/part/f'{case}-h{h:g}.json';dump(dest,safe)
                rows.append({'part':part,'case':case,'mesh_size_mm':h,'elements':d['elements'],'dofs':d['dofs'],
                    'max_displacement_mm':d['max_displacement_mm'],'raw_peak_tensile_MPa':d['raw_peak_tensile_MPa'],
                    'max_displacement_location_mm':disp['location_mm'],
                    'raw_peak_vm_MPa':d['raw_peak_vm_MPa'],'averaged_0p4mm_tensile_MPa':avg['tensile_MPa']['value'],
                    'averaged_0p4mm_vm_MPa':avg['vm_MPa']['value'],
                    'averaged_0p4mm_compressive_MPa':avg['compressive_MPa']['value'],
                    'averaging_centroids_at_tensile_peak':avg['tensile_MPa']['centroids_in_averaging_neighborhood'],
                    'force_balance_error_N':d['force_balance_error_N'],'moment_balance_error_Nmm':d['moment_balance_error_Nmm'],
                    'relative_free_residual':d['relative_free_residual'],'gauge_reaction_norm_N':d['gauge_reaction_norm_N'],
                    'relative_volume_error':d['relative_volume_error'],'numerical_checks_passed':balanced,
                    'result':str(dest.relative_to(ROOT/'dist')),'step_sha256':d['step_sha256']})
                checks.append(balanced)
    convergence=[]
    for part,case in sorted({(r['part'],r['case']) for r in rows}):
        series=sorted([r for r in rows if r['part']==part and r['case']==case],key=lambda r:r['mesh_size_mm'],reverse=True)
        a,b=series[-2:];changes={k:abs(b[k]-a[k])/max(abs(b[k]),1e-12)*100 for k in ('max_displacement_mm','raw_peak_tensile_MPa','averaged_0p4mm_tensile_MPa')}
        convergence.append({'part':part,'case':case,'mesh_levels':len(series),'finest_pair_change_percent':changes,
            'displacement_change_under_5_percent':changes['max_displacement_mm']<5,
            'averaged_stress_change_under_10_percent':changes['averaged_0p4mm_tensile_MPa']<10,
            'raw_peak_is_mesh_sensitive':changes['raw_peak_tensile_MPa']>=10})
    summary={'status':'numerical_checks_passed' if all(checks) else 'numerical_check_failure',
        'physical_qualification':False,'strength_rating_established':False,'case_solves':len(rows),
        'geometry':'Revised fused modular-core STEP bodies; source hashes are in each case.',
        'supports':'Two actual receiver attachment-hole annuli only; no outer rail or host-body support. Adapter constrained only at its payload attachment-hole annuli.',
        'material':read(ENGINE/'material.json'),'material_scope':'Isotropic solid PLA comparison proxy; not a PAHT-CF model or measured print allowables.',
        'payload_mass_kg':MASS_KG,'payload_force_2g_N':PAYLOAD_2G,'assumed_preload_N':PRELOAD_N,
        'actuator_mass_kg':ACTUATOR_MASS_KG,'actuator_force_2g_N':ACTUATOR_2G,
        'cases':rows,'mesh_convergence':convergence,
        'mesh_convergence_summary':{
            'all_displacement_changes_under_5_percent':all(c['displacement_change_under_5_percent'] for c in convergence),
            'all_averaged_stress_changes_under_10_percent':all(c['averaged_stress_change_under_10_percent'] for c in convergence),
            'mesh_sensitive_raw_peak_cases':[{'part':c['part'],'case':c['case']} for c in convergence if c['raw_peak_is_mesh_sensitive']]},
        'limits':['Prescribed finite tractions, not an assembled nonlinear contact simulation.',
                  'Raw stress peaks can be singular at traction/fixture boundaries; averaging is an uncalibrated comparison metric.',
                  'No anisotropic strength, creep, fatigue, temperature, print-defect or physical release qualification.',
                  'Rigid bolt-annulus fixtures omit host compliance, fastener preload, slip and pull-through.',
                  'Vertical load-path screens only: lateral/key-face bearing, torsion, payload-CG moments and combined multiaxis loads are not solved.',
                  'The inline pull correction removes nominal yaw eccentricity, but misalignment/side-contact binding is not simulated.',
                  'Actuator axial pull and tongue/pin bearing strength are not solved in the vertical retention submodels.',
                  'The vanishing distal-guide overlap just before support loss is not resolved by the discrete contact states.',
                  'The actuator mount-load surrogate splits 68 g inertia equally between actual screw countersink surfaces; its resultant is 1 mm from the approximate envelope CG.'],
        'input_manifest':'simulation/input-manifest.json','release_sensitivity':'simulation/release-force-sweep.json'}
    summary['reporting_runner_sha256']=sha(__file__)
    summary['execution_orchestration']=manifest.get('execution_orchestration')
    manifest['reporting_runner_sha256']=sha(__file__)
    manifest['execution_records']=[read(out/'logs'/f'{part}-execution.json') for part in ('receiver','adapter','keeper')]
    dump(out/'manifest.json',manifest);dump(PUBLIC/'input-manifest.json',manifest)
    summary['plots']=make_plots(out,summary)
    write_report(summary)
    dump(PUBLIC/'modular-core-summary.json',summary)
    print(json.dumps({'status':summary['status'],'solves':len(rows),'convergence':convergence},indent=2),flush=True)
    if not all(checks):raise SystemExit(2)

if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--prepare',action='store_true');ap.add_argument('--run',choices=['receiver','adapter','keeper'])
    ap.add_argument('--summarize',action='store_true');ap.add_argument('--output',type=Path,default=Path('/tmp/n2-modular-simulation'))
    args=ap.parse_args()
    if args.prepare:prepare(args.output.resolve())
    if args.run:run_part(args.output.resolve(),args.run)
    if args.summarize:summarize(args.output.resolve())
