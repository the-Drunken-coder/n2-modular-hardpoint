import json,hashlib,copy,math
A='/workspace/lane/n2-modular-hardpoint/project/analysis/inputs/configs/'
sha=lambda p:hashlib.sha256(open(p,'rb').read()).hexdigest()
def base(name,src):
    d=json.load(open(src));d['step_path']=f'/tmp/p13x/geo/{name}.step';d['expected_step_sha256']=sha(d['step_path']);return d
rec=base('N2_receiver','/tmp/frun0.3/configs/N2_receiver.json')
ada=base('N2_adapter',A+'N2_adapter.json')
kee=base('N2_keeper',A+'N2_keeper.json')
ANG=[15,30,45,90]
def dirs():
    for plane,ax in (('XZ',0),('YZ',1)):
        for s in (1,-1):
            for a in ANG:
                yield f'{plane}{"+" if s>0 else "-"}{a}',ax,s,a
# receiver directional on distal_ineffective (bonded + washers) and centered_bonded
recd=copy.deepcopy(rec)
for bc in ['distal_ineffective_bonded','distal_ineffective_washers','centered_bonded']:
    c0=rec['cases'][bc]
    for tag,ax,s,a in dirs():
        c=copy.deepcopy(c0);co,si=math.cos(math.radians(a)),math.sin(math.radians(a))
        up=[(L,L['force_N'][2]) for L in c['loads'] if L['force_N'][2]>0];tot=sum(z for _,z in up)
        for L in c['loads']:L['force_N']=[v*co for v in L['force_N']]
        # transverse component enters through roof contact patch(es) carrying upward load, split by axial share
        for L,z in up:L['force_N'][ax]+=s*si*z/tot
        c['direction']=dict(tag=tag,angle_deg=a,plane=tag[:2],sign=s)
        recd['cases'][f'{bc}__{tag}']=c
# adapter
add=copy.deepcopy(ada)
for bc in list(ada['cases']):
    for tag,ax,s,a in dirs():
        c=copy.deepcopy(ada['cases'][bc]);co,si=math.cos(math.radians(a)),math.sin(math.radians(a))
        for L in c['loads']:
            L['force_N']=[v*co for v in L['force_N']];L['force_N'][ax]+=-s*si/len(c['loads'])
        c['direction']=dict(tag=tag,angle_deg=a,sign=s);add['cases'][f'{bc}__{tag}']=c
json.dump(recd,open('cfg/rec/N2_receiver.json','w'),indent=1)
json.dump(add,open('cfg/ada/N2_adapter.json','w'),indent=1)
json.dump(kee,open('cfg/kee/N2_keeper.json','w'),indent=1)
# mesh convergence on governing case
for nm,fac in (('conv_global',None),('conv_local0.4',0.4/0.55),('conv_local0.3',0.3/0.55)):
    d=copy.deepcopy(rec);d['cases']={k:rec['cases'][k] for k in ['distal_ineffective_bonded']}
    if fac:d['refine_boxes']=d['refine_boxes']+[{'bounds':[[24.5,7.0,9.0],[37.6,13.0,11.5]],'factor':fac}]
    json.dump(d,open(f'cfg/{nm}/N2_receiver.json','w'),indent=1)
print(len(recd['cases']),len(add['cases']))
