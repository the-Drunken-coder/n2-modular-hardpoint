"""Reconstruct the assumed 3D forces and check all force/moment residuals.
This verifies arithmetic equilibrium of the chosen contact model, not that the
real mechanism develops those contacts. Standard-library only.
"""
from pathlib import Path
import json
from reproduce_release import state,stroke_rows
HERE=Path(__file__).resolve().parent

def residual(r):
    mu=r['mu'];P=1.;x=r['contact_x_mm'];a,b=r['support_x_mm'];A,B=r['support_coefficients'];N=r['side_reaction_N_per_N']
    xm,xp=r['yaw_side_contact_x_mm'];F=r['total_release_drag_N_per_N']
    # Each force is (position, force vector). All friction acts against +X.
    loads=[([x,10,7.2],[-mu*P,0,P]),
           ([23.7+r['stroke_mm'],0,8.7],[F,0,0]),
           ([xm,-4,8.7],[-mu*N,N,0]),
           ([xp,11.5,8.7],[-mu*N,-N,0])]
    if r['phase']=='overhung':
        loads += [([a,10,10.2],[-mu*A,0,-A]),([b,10,7.2],[-mu*B,0,B])]
    else:
        loads += [([a,10,10.2],[-mu*A,0,-A]),([b,10,10.2],[-mu*B,0,-B])]
    forces=[sum(f[i] for p,f in loads) for i in range(3)]
    moments=[0.,0.,0.]
    for p,f in loads:
        moments[0]+=p[1]*f[2]-p[2]*f[1]
        moments[1]+=p[2]*f[0]-p[0]*f[2]
        moments[2]+=p[0]*f[1]-p[1]*f[0]
    return forces,moments

def main():
    max_force=0.;max_moment=0.;count=0
    for v in ['N2']:
        for mu in [.1,.2,.3,.4]:
            for inset,distal in [(0.,True),(.5,True)]+([(.5,False)] if v=='N2' else []):
                for row in stroke_rows(v,mu,inset,distal):
                    force,moment=residual(row);count+=1
                    max_force=max(max_force,*[abs(x) for x in force])
                    max_moment=max(max_moment,*[abs(x) for x in moment])
    result=dict(status='PASS' if max_force<1e-10 and max_moment<1e-10 else 'REVISE',
      scope='Arithmetic force/moment balance of equal-mu assumed contact model; no physical validation',
      checked_states=count,max_force_residual_N=max_force,max_moment_residual_Nmm=max_moment,
      assumptions=['P/friction centroid Y=10 mm','Equal friction coefficients','Actuator and both side-contact friction heights Z=8.7 mm','Adapter and guide floor Z=7.2; guide roof Z=10.2 mm'])
    (HERE/'equilibrium_verification.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
    if result['status']!='PASS':raise SystemExit(1)

if __name__=='__main__':main()
