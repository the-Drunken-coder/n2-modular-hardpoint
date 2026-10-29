#!/usr/bin/env python3
"""Reproduce the N2 subset of historical P7 friction statics (not FEA).

No legacy material-strength values are used. Friction coefficients and actuator
budgets are unmeasured assumptions, not PLA or loaded-release qualification.
Output must be a new directory. Python standard library only.
"""
from pathlib import Path
import argparse, csv, json, math
HERE=Path(__file__).resolve().parent
G=9.80665
GEOM={'N2':dict(tip=25.9,lug0=26.8,lug1=28.2,near=28.5,end=34.,lug_t=1.4)}
MU_VALUES=[.1,.2,.3,.4]
BUDGETS=[.35,.080*G]

def state(variant,s,mu=.2,inset=0.,distal_enabled=True,drag_y=10.):
    """P=1 N. Guide contact locations are analytical assumptions.
    Equal friction and centered actuator height make XZ friction moments cancel.
    XY yaw is solved with its own friction-feedback denominator.
    """
    g=GEOM[variant];start=max(g['lug0'],g['tip']+s);end=g['lug1']
    overlap=end-start
    if overlap<=1e-9:return None
    xc=(start+end)/2
    distal=max(0.,26.5-(g['tip']+s)) if variant=='N2' else 0.
    if variant=='N2' and distal_enabled and distal>1e-9:
        a=(g['tip']+s+26.5)/2.;b=g['near']+inset
        ra=(b-xc)/(b-a);rb=1-ra
        # Exact simply supported beam moment for a uniform central load patch.
        xcrit=start+ra*overlap
        M=ra*(xcrit-a)-(xcrit-start)**2/(2*overlap)
        phase='two_roofs';guide_roof_coeff=max(ra,rb);prox_roof_coeff=rb
        floor_coeff=0.;vertical_span=b-a;overhang=None
    else:
        a=g['near']+inset;b=g['end']+s-inset
        vertical_span=b-a;overhang=a-xc
        rb=overhang/vertical_span;ra=1+rb
        M=overhang;phase='overhung';guide_roof_coeff=ra;prox_roof_coeff=ra
        floor_coeff=rb
    # N2 retainer contact is nominally centered at Y=10 mm.
    # The outer arm can spread a floor reaction to Y=8.65. drag_y remains a
    # sensitivity parameter; it is not a solved contact-pressure centroid.
    Cvertical=mu*(1+ra+rb)
    side_x_left=max(23.,22.+s)+inset
    side_x_right=min(37.4,34.+s)-inset
    Ly=side_x_right-side_x_left
    yminus,yplus=-4.,11.5
    denom=Ly-mu*(yminus+yplus)
    if denom<=0:
        side=math.inf;Ctotal=math.inf
    else:
        side=drag_y*Cvertical/denom
        Ctotal=Cvertical+2*mu*side
    return dict(variant=variant,stroke_mm=s,mu=mu,guide_inset_mm=inset,
      distal_enabled=distal_enabled,phase=phase,overlap_mm=overlap,
      contact_x_mm=xc,support_x_mm=[a,b],support_coefficients=[ra,rb],
      proximal_roof_reaction_per_P=prox_roof_coeff,floor_reaction_per_P=floor_coeff,
      keeper_moment_Nmm_per_N=M,keeper_bending_MPa_per_N=M/4.5,
      adapter_bearing_MPa_per_N=1/(3*overlap),
      remaining_distal_overlap_mm=distal,vertical_only_drag_N_per_N=Cvertical,
      yaw_side_contact_x_mm=[side_x_left,side_x_right],yaw_span_mm=Ly,
      drag_centroid_y_mm=drag_y,yaw_denominator_mm=denom,
      side_reaction_N_per_N=side,total_release_drag_N_per_N=Ctotal,
      effective_retainer_mass_per_N_kg=1/G)

def stroke_rows(variant,mu,inset,distal_enabled,drag_y=10.):
    g=GEOM[variant];clear=g['lug1']-g['tip']
    points={round(i*.002,8) for i in range(int(clear/.002))}
    points|={0.,clear-1e-6,1.,g['lug0']-g['tip']}
    if variant=='N2':points|={.6-1e-8,.6,.6+1e-8}
    return [r for s in sorted(p for p in points if 0<=p<clear)
            if (r:=state(variant,s,mu,inset,distal_enabled,drag_y))]

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output',type=Path,required=True,help='New directory, must not exist')
    a=ap.parse_args()
    if a.output.exists():raise SystemExit('Output exists; choose a new directory')
    a.output.mkdir(parents=True)
    cases=[('nominal',0.,True),('guide_inset_0.5',.5,True),('distal_ineffective_and_inset',.5,False)]
    calculations=[];rows=[];yaw=[]
    for name,inset,enabled in cases:
        for mu in MU_VALUES:
            rr=stroke_rows('N2',mu,inset,enabled)
            peak=max(rr,key=lambda r:r['total_release_drag_N_per_N'])
            calculations.append(dict(variant='N2',contact_case=name,mu=mu,peak=peak,
                capacity_scenarios=[dict(available_friction_budget_N=B,
                    P_limit_N=B/peak['total_release_drag_N_per_N'],
                    kg_at_1g=B/peak['total_release_drag_N_per_N']/G,
                    kg_at_3g=B/peak['total_release_drag_N_per_N']/(3*G)) for B in BUDGETS]))
            if mu==.2:rows.extend(dict(contact_case=name,**r) for r in rr)
    for y in [8.65,10.,11.5]:
        peak=max(stroke_rows('N2',.2,.5,False,y),key=lambda r:r['total_release_drag_N_per_N'])
        yaw.append(dict(variant='N2',assumed_drag_centroid_y_mm=y,max_total_drag_N_per_N=peak['total_release_drag_N_per_N']))
    ref=json.loads((HERE/'results.json').read_text())
    full=json.loads((HERE/'full_stroke_mu0p2.json').read_text())
    checks={'release_matches_archived_N2':calculations==ref['release'],
            'stroke_matches_archived_N2':rows==full,
            'yaw_sensitivity_matches_archived_N2':yaw==ref['drag_centroid_sensitivity']}
    assert all(checks.values()),checks
    for name,obj in [('release.json',calculations),('full_stroke_mu0p2.json',rows),
                     ('drag_centroid_sensitivity.json',yaw),('verification.json',checks)]:
        (a.output/name).write_text(json.dumps(obj,indent=2)+'\n')
    print(json.dumps({'status':'HISTORICAL_ARITHMETIC_REPRODUCED_NOT_PHYSICAL_VALIDATION',
                      'checks':checks,'full_stroke_rows':len(rows),'output':str(a.output.resolve())},indent=2))

if __name__=='__main__':main()
