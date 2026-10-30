"""Common export helpers for the N2 change gallery. All coordinates are mm.

Concept geometry only. Valid solids do not establish fit, strength or release.
"""
from __future__ import annotations
import hashlib
import json
from pathlib import Path
import cadquery as cq

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist/models'
SOURCE = ROOT / 'source-cad/N2'
SOURCE_COMMIT = '15f64836da8fa8a9957beea391beb9685ffbd532'
VIEWER = json.loads((SOURCE / 'viewer.json').read_text())
BASE = {p['id']: p for p in VIEWER['parts']}

def solid(shape):
    return shape.val() if isinstance(shape, cq.Workplane) else shape

def box(x0,x1,y0,y1,z0,z1):
    return cq.Workplane('XY').box(x1-x0,y1-y0,z1-z0).translate(((x0+x1)/2,(y0+y1)/2,(z0+z1)/2))

def cylinder(radius, length, origin, direction=(0,0,1)):
    return cq.Workplane(obj=cq.Solid.makeCylinder(radius,length,cq.Vector(*origin),cq.Vector(*direction)))

def load_shapes():
    return {pid: cq.importers.importStep(str(SOURCE/p['step'])) for pid,p in BASE.items()}

def baseline_parts(shapes=None):
    shapes = shapes or load_shapes()
    result=[]
    for pid,p in BASE.items():
        entry={'id':pid,'name':p['name'],'base_id':pid,'shape':shapes[pid],
               'role':'unchanged','explode':p.get('explode',[0,0,0])}
        if pid in ('N2_keeper','N2_armature'):
            entry['motion']={'vector':[3,0,0],'start':0,'end':0.55}
        elif pid=='N2_adapter':
            entry['motion']={'vector':[0,0,22],'start':0.6,'end':1}
        if pid=='N2_return_spring': entry['hideAfter']=0.03
        result.append(entry)
    return result

def replace_part(parts,pid,shape,role='changed',**kwargs):
    old=next(p for p in parts if p['id']==pid)
    old.update(shape=shape,role=role,modified=True,**kwargs)
    return old

def mesh_data(shape):
    s=solid(shape)
    if not s.isValid() or s.Volume()<=0: raise ValueError('Invalid or nonpositive solid')
    vertices,triangles=s.tessellate(0.08,0.12)
    return {'positions':[round(v,6) for p in vertices for v in p.toTuple()],
            'indices':[i for tri in triangles for i in tri]}

def save_json(path,data):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(data,separators=(',',':'),allow_nan=False)+'\n')

def export_baseline():
    for pid,p in BASE.items():
        save_json(OUT/'meshes'/f'{pid}.json',{'positions':p['positions'],'indices':p['indices']})
    return export_scene('baseline','Current P14',baseline_parts(),
        eyebrow='Reference assembly',summary='The issued P14 assembly, before the proposed changes.',
        primaryChange='Original geometry',purpose='Reference for all eight concept studies.',
        companionChanges=[],limits=['Issued geometry; hardware details retain the source model’s stated approximations.'],
        metrics=[{'label':'Keeper travel','before':'3 mm','after':'3 mm'},{'label':'Lug thickness','before':'1.4 mm','after':'1.4 mm'}],
        annotations=[{'label':'Original 1.4 mm lug','position':[27.5,10,15]}])

def transformed(shape,p):
    s=solid(shape)
    for axis,angle in zip(((1,0,0),(0,1,0),(0,0,1)),p.get('rotation',[0,0,0])):
        if angle: s=s.rotate((0,0,0),axis,angle)
    if p.get('translation'): s=s.translate(tuple(p['translation']))
    return s

def export_scene(scene_id,title,parts,**metadata):
    exported=[];assembly=cq.Assembly(name=scene_id);bounds=[];audit=[]
    for index,p in enumerate(parts):
        s=solid(p['shape'])
        if not s.isValid() or s.Volume()<=0: raise ValueError(f'{scene_id}/{p["id"]} invalid solid')
        shared=p.get('base_id') and not p.get('modified')
        mesh=f'meshes/{p["base_id"]}.json' if shared else f'meshes/{scene_id}/{p["id"]}.json'
        if not shared: save_json(OUT/mesh,mesh_data(s))
        item={k:v for k,v in p.items() if k not in ('shape','base_id','modified')}
        item['mesh']=mesh
        exported.append(item)
        world=transformed(s,p);bb=world.BoundingBox()
        bounds.append([bb.xmin,bb.ymin,bb.zmin,bb.xmax,bb.ymax,bb.zmax])
        role=p.get('role','unchanged'); color=(0.97,0.48,0.16) if role in ('changed','added') else (0.58,0.66,0.69)
        assembly.add(world,name=f'p{index}_{p["id"]}',color=cq.Color(*color))
        audit.append({'id':p['id'],'valid':True,'solid_count':len(world.Solids()),'volume_mm3':world.Volume(),'role':role})
    minimum=[min(b[i] for b in bounds) for i in range(3)]
    maximum=[max(b[i+3] for b in bounds) for i in range(3)]
    target=[(a+b)/2 for a,b in zip(minimum,maximum)]
    extent=max(b-a for a,b in zip(minimum,maximum))
    default_camera={'target':target,'position':[target[0]+extent*1.1,target[1]-extent*1.4,target[2]+extent*1.05]}
    data={'id':scene_id,'title':title,'units':'mm','sourceCommit':SOURCE_COMMIT,
          'status':'concept' if scene_id!='baseline' else 'reference','parts':exported,
          'bounds':{'min':minimum,'max':maximum},'camera':metadata.pop('camera',default_camera),
          'step':f'{scene_id}.step','stl':f'{scene_id}.stl','motionLabel':'Illustrative release motion',
          'geometryAudit':{'valid_solids':True,'parts':len(parts),'structural_analysis_performed':False,
                           'physical_tests_performed':False},**metadata}
    save_json(OUT/f'{scene_id}.json',data)
    assembly.save(str(OUT/f'{scene_id}.step'))
    cq.exporters.export(cq.Compound.makeCompound([transformed(p['shape'],p) for p in parts]),str(OUT/f'{scene_id}.stl'),tolerance=0.08,angularTolerance=0.12)
    save_json(OUT/f'{scene_id}-audit.json',{'scene':scene_id,'parts':audit,
        'checks_performed':['Positive volume','CAD kernel solid validity','Tessellation'],
        'not_performed':['Structural FEA','Manufacturing tolerance validation','Physical release testing']})
    print(json.dumps({'scene':scene_id,'parts':len(parts),'valid':True,'bounds':data['bounds']}),flush=True)
    return data

if __name__=='__main__': export_baseline()
