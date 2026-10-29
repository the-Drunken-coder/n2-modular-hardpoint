import json,glob,os,numpy as np,csv
M=json.load(open('engine/material.json'));T,Cc,S=M['tension_MPa'],M['compression_MPa'],M['max_shear_MPa']
rows=[]
for comp in ['rec','ada','kee']:
    for f in sorted(glob.glob(f'cfg/{comp}/results/*/h0.55/*.json')):
        d=json.load(open(f))
        if 'case' not in d: continue
        r=dict(component=d['id'],case=d['case'],h_mm=d['h_mm'],dofs=d['dofs'],raw_failure_N=d['raw_strength_threshold_N'],
               r04_N=d['regularized']['0.4']['estimated_strength_threshold_N'],r08_N=d['regularized']['0.8']['estimated_strength_threshold_N'],
               peak_xyz=[round(v,2) for v in d['raw_peak_element_centroid_mm']],force_err=d['force_balance_error_N'],gauge=d['gauge_reaction_norm_N'])
        r['rating_SF3_N']=r['raw_failure_N']/3
        rows.append(r)
json.dump(rows,open('cases.json','w'),indent=1)
# anisotropy: element-mean stresses, Z = build direction (layers in XY)
def tens(v):
    t=np.zeros(v.shape[:-1]+(3,3));t[...,0,0],t[...,1,1],t[...,2,2]=v[...,0],v[...,1],v[...,2]
    t[...,0,1]=t[...,1,0]=v[...,3];t[...,1,2]=t[...,2,1]=v[...,4];t[...,0,2]=t[...,2,0]=v[...,5];return t
an=[]
for f in ['cfg/rec/results/N2_receiver/h0.55/distal_ineffective_bonded','cfg/rec/results/N2_receiver/h0.55/distal_ineffective_washers','cfg/rec/results/N2_receiver/h0.55/centered_washers','cfg/ada/results/N2_adapter/h0.55/low_y_half_contact']:
    z=np.load(f+'_fields.npz');v=z['mean_stress_voigt_MPa'];raw=json.load(open(f+'.json'))['raw_strength_threshold_N']
    p=np.linalg.eigvalsh(tens(v));iso=np.maximum.reduce([np.maximum(p[:,-1],0)/T,np.maximum(-p[:,0],0)/Cc,(p[:,-1]-p[:,0])/2/S])
    szz=np.maximum(v[:,2],0);tz=np.hypot(v[:,4],v[:,5])
    for k in [1.0,0.75,0.5]:
        ix=np.maximum.reduce([iso,szz/(T*k),tz/(S*k)])
        an.append(dict(case=f.split('/')[-1],component=f.split('/')[3],interlayer_factor=k,elementmean_iso_N=1/iso.max(),elementmean_aniso_N=1/ix.max(),ratio=iso.max()/ix.max(),raw_failure_N=raw,scaled_raw_failure_N=raw*iso.max()/ix.max(),scaled_rating_SF3_N=raw*iso.max()/ix.max()/3,peak_sigma_zz_per_N=float(v[:,2].max()),peak_interlayer_shear_per_N=float(tz.max())))
json.dump(an,open('aniso.json','w'),indent=1)
for a in an:print(a['component'],a['case'],a['interlayer_factor'],round(a['ratio'],3),round(a['scaled_raw_failure_N'],2))
