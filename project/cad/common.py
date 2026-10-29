"""Shared concept assembly exporter (P6 revision fallback). Units mm.
All COTS models are external geometry.

Each physical instance is a part, including each fastener. Each part is placed
in the retained assembly at u=0. Optional keyframes contain u (0..1),
translation [x,y,z] and angle_deg around rotationPivot/rotationAxis. u=.5 is
unlocked but still seated; u=1 is separated. This is prescribed kinematics.
"""
from pathlib import Path
import json, hashlib, math
import cadquery as cq

ROOT=Path(__file__).resolve().parents[1]
COLORS={'printed':'#dfb667','payload':'#22a99b','actuator':'#536b85','hardware':'#a2abb5','moving':'#e78b59','reference':'#9d82b5'}

def box(x0,x1,y0,y1,z0,z1):
    return cq.Workplane('XY').box(x1-x0,y1-y0,z1-z0).translate(((x0+x1)/2,(y0+y1)/2,(z0+z1)/2))

def cyl(radius,length,origin=(0,0,0),axis=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCylinder(radius,length,cq.Vector(*origin),cq.Vector(*axis)))

def shape_of(v):
    return v.val() if hasattr(v,'val') else v

def sha(path):return hashlib.sha256(Path(path).read_bytes()).hexdigest()

def stats(obj):
    s=shape_of(obj);b=s.BoundingBox()
    return dict(valid=s.isValid(),solids=len(s.Solids()),volume_mm3=s.Volume(),bbox={'min':[b.xmin,b.ymin,b.zmin],'max':[b.xmax,b.ymax,b.zmax],'size':[b.xlen,b.ylen,b.zlen]})

def export_variant(vid,title,family,parts,metadata,checks=None):
    out=ROOT/'cad'/vid;out.mkdir(parents=True,exist_ok=True)
    revision=metadata.get('geometry_revision','P6-01')
    asm=cq.Assembly(name=revision+'_'+vid); records=[]; meshes=[]
    for p in parts:
        s=shape_of(p['shape']);record={k:v for k,v in p.items() if k not in ('shape','print_shape')}
        record.update(stats(s))
        if not record['valid'] or record['solids']<1:raise ValueError((vid,p['id'],'invalid solid'))
        if p.get('kind') in ('printed','payload','moving') and p.get('printable',True) and record['solids']!=1:
            raise ValueError((vid,p['id'],'A single printed piece must be one connected solid',record['solids']))
        color=p.get('color',COLORS.get(p.get('kind'),'#888888'))
        step=out/(p['id']+'.step');stl=out/(p['id']+'.stl')
        if p.get('preserve_existing_step',False) and step.exists():
            preserved=cq.importers.importStep(str(step)).val()
            delta=abs(preserved.cut(s).Volume())+abs(s.cut(preserved).Volume())
            if delta>1e-7:raise ValueError((p['id'],'Frozen STEP geometry differs',delta))
        else:
            cq.exporters.export(s,str(step))
        cq.exporters.export(s,str(stl),tolerance=.09,angularTolerance=.18)
        record.update(step=step.name,stl=stl.name,step_sha256=sha(step),color=color)
        if p.get('kind') in ('printed','payload','moving') and p.get('printable',True):
            ps=shape_of(p.get('print_shape',s));b=ps.BoundingBox();ps=ps.translate((0,0,-b.zmin))
            pr=out/(p['id']+'_print.stl');cq.exporters.export(ps,str(pr),tolerance=.05,angularTolerance=.12)
            record.update(print_stl=pr.name,print_bbox=stats(ps)['bbox'])
        verts,tris=s.tessellate(.12,.22)
        mesh={k:v for k,v in record.items() if k not in ('bbox','print_bbox','volume_mm3','step_sha256')}
        mesh.update(positions=[round(c,6) for v in verts for c in v.toTuple()],indices=[int(i) for t in tris for i in t],sourceStep=step.name,sourceSha256=record['step_sha256'])
        meshes.append(mesh);records.append(record);asm.add(s,name=p['id'],color=cq.Color(color))
    asm.save(str(out/'assembly.step'))
    bounds={'min':[min(p['bbox']['min'][i] for p in records) for i in range(3)],'max':[max(p['bbox']['max'][i] for p in records) for i in range(3)]}
    bounds['size']=[bounds['max'][i]-bounds['min'][i] for i in range(3)]
    result=dict(id=vid,name=title,family=family,revision=revision,units='mm',bounds=bounds,parts=records,**metadata)
    (out/'manifest.json').write_text(json.dumps(result,indent=2)+'\n')
    viewer=dict(variant=vid,name=title,family=family,revision=revision,units='mm',bounds=bounds,parts=meshes,notes=metadata.get('notes',[]))
    for key in ('project_revision','geometry_revision','prototype_material','manufacturing','evidence','current_requirements','current_analysis'):
        if key in metadata: viewer[key]=metadata[key]
    (out/'viewer.json').write_text(json.dumps(viewer,separators=(',',':')))
    if checks is not None:(out/'validation.json').write_text(json.dumps(checks,indent=2)+'\n')
    print(json.dumps({'id':vid,'parts':len(records),'printed':sum('print_stl'in r for r in records),'bounds':bounds,'all_valid':all(r['valid']for r in records)}),flush=True)
    return result

def rigid_pose(part,u):
    """Apply the same keyframe contract used by the interactive viewer."""
    s=shape_of(part['shape']);frames=part.get('keyframes',[])
    if not frames:return s
    fs=sorted(frames,key=lambda f:f['u']);a=fs[0];b=fs[-1]
    for x,y in zip(fs,fs[1:]):
        if x['u']<=u<=y['u']:a,b=x,y;break
    t=max(0,min(1,(u-a['u'])/(b['u']-a['u']) if b['u']!=a['u'] else 0))
    angle=a.get('angle_deg',0)+(b.get('angle_deg',0)-a.get('angle_deg',0))*t
    pivot=part.get('rotationPivot',[0,0,0]);axis=part.get('rotationAxis',[0,0,1])
    if angle:s=s.rotate(tuple(pivot),tuple(pivot[i]+axis[i]for i in range(3)),angle)
    ta=a.get('translation',[0,0,0]);tb=b.get('translation',[0,0,0]);tr=[ta[i]+(tb[i]-ta[i])*t for i in range(3)]
    return s.translate(tuple(tr))
