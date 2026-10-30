#!/usr/bin/env python3
"""R5 kinematics, tolerance allocation and explicit unmeasured friction screen.

Coordinates: cartridge Z increases toward the wing. The departing payload pulls
down. All distances are mm, force N and torque N mm. This is not a contact solve
or a manufacturer working-torque rating.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path

MASS_KG = 0.454
G = 9.80665
PAYLOAD_N = MASS_KG * 2 * G


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def contact_state(g, stroke):
    """Prescribed vertical keeper reactions; positive means upward on keeper."""
    tip = g['keeper_tip_x'] + stroke
    lo, hi = max(tip, g['lug_x'][0]), g['lug_x'][1]
    if hi <= lo:
        raise ValueError('Requested state has no retained lug contact')
    xc = (lo + hi) / 2
    if tip < g['distal_floor_x'][1] - 1e-9:
        distal = [max(tip, g['distal_floor_x'][0]), g['distal_floor_x'][1]]
        dc, pc = sum(distal) / 2, sum(g['proximal_floor_x']) / 2
        proximal = (xc - dc) / (pc - dc)
        contacts = [('distal_floor', distal, 1-proximal),
                    ('proximal_floor', g['proximal_floor_x'], proximal)]
    else:
        pc, fc = sum(g['proximal_floor_x']) / 2, sum(g['far_roof_x']) / 2
        rear = (pc - xc) / (fc - pc)
        contacts = [('proximal_floor', g['proximal_floor_x'], 1+rear),
                    ('far_roof', g['far_roof_x'], -rear)]
    if not math.isclose(sum(r[2] for r in contacts), 1, abs_tol=1e-10):
        raise ValueError('Vertical reaction sum does not balance the payload')
    if not math.isclose(sum(sum(r[1])/2*r[2] for r in contacts), xc, abs_tol=1e-9):
        raise ValueError('Prescribed contact reactions do not balance pitch moment')
    return dict(stroke_mm=stroke, lug_contact_x=[lo, hi], lug_centroid_x=xc,
                remaining_overlap_mm=hi-lo, contacts=contacts,
                normal_multiplier=1+sum(abs(r[2]) for r in contacts))


def coupled_force(payload, mu, slot_mu, front, rear, lug, follower_x,
                  follower_height, half_height, direction=1, fixed_drag=0):
    """Two guide stations, with signed normal forces and Coulomb friction.

    P acts down at the keeper top. Q acts right at the follower. Sliding sleeve
    friction acts vertically with the sleeve velocity. Guide contact may occur
    on either floor or roof. The front/rear contacts replace simultaneous
    three-contact behavior; they are a sensitivity, not proven conservative.
    """
    span = rear-front
    if span <= 0 or min(payload, mu, slot_mu, half_height, fixed_drag) < 0:
        raise ValueError('Invalid geometry or friction input')
    dslot = direction*slot_mu
    a = (lug-front)*payload/span
    b = (follower_height-dslot*(follower_x-front+mu*half_height))/span
    c, d = payload-a, -dslot-b
    answers = []
    for sa in (-1, 1):
        for sb in (-1, 1):
            denominator = 1-mu*(sa*d+sb*b)
            if denominator <= 1e-10:
                continue
            q = (mu*(payload+sa*c+sb*a)+fixed_drag)/denominator
            ra, rb = c+d*q, a+b*q
            if q >= 0 and sa*ra >= -1e-8 and sb*rb >= -1e-8:
                answers.append(dict(required_horizontal_N=q,
                    front_vertical_reaction_N=ra, rear_vertical_reaction_N=rb,
                    follower_vertical_force_N=dslot*q,
                    feedback_denominator=denominator))
    if not answers:
        return dict(required_horizontal_N=None,
                    reason='No compatible finite sliding solution in this assumed contact mode')
    return max(answers, key=lambda r:r['required_horizontal_N'])


def analyze(g):
    a = g['actuation']
    r = a['crank_radius_mm']
    t0 = math.radians(a['retained_angle_deg'])
    t1 = math.radians(a['release_angle_deg'])
    travel = r*(math.cos(t0)-math.cos(t1))
    clear = g['lug_x'][1]-g['keeper_tip_x']
    loss = g['distal_floor_x'][1]-g['keeper_tip_x']
    samples = sorted(set([0., loss, clear-.3, clear-.1] +
                         [clear*i/100 for i in range(100)]))
    samples = [s for s in samples if 0 <= s < clear]
    rows=[]
    for mu in (.05,.10,.15,.20,.30):
        for preload in (0.,1.,2.,3.):
            for smu in (.05,.15,.30):
                states=[]
                for s in samples:
                    st=contact_state(g,s)
                    theta=math.acos(math.cos(t0)-s/r)
                    xf=a['pivot_x_mm']-r*math.cos(theta)
                    zf=a['pivot_z_mm']+r*math.sin(theta)
                    v=coupled_force(PAYLOAD_N+preload,mu,smu,
                        sum(g['proximal_floor_x'])/2,sum(g['far_roof_x'])/2,
                        st['lug_centroid_x'],xf,
                        zf-(g['keeper_top_z']+g['keeper_bottom_z'])/2,
                        (g['keeper_top_z']-g['keeper_bottom_z'])/2,
                        1 if math.cos(theta)>=0 else -1)
                    v.update(stroke_mm=s, angle_deg=math.degrees(theta))
                    if v['required_horizontal_N'] is not None:
                        v['required_torque_Nmm']=v['required_horizontal_N']*r*(
                            math.sin(theta)+smu*abs(math.cos(theta)))
                    states.append(v)
                valid=[s for s in states if s['required_horizontal_N'] is not None]
                rows.append(dict(guide_mu=mu,preload_N=preload,slot_mu=smu,
                    all_states_finite=len(valid)==len(states),
                    peak_horizontal_N=max(s['required_horizontal_N'] for s in valid) if valid else None,
                    peak_required_torque_Nmm=max(s['required_torque_Nmm'] for s in valid) if valid else None,
                    states=states))
    # An explicit dimensional budget, not a prediction of print accuracy.
    backlash=.4
    geometry_stack=.2
    angle_error_deg=2.
    low_travel=r*(math.cos(t0)-math.cos(t1-math.radians(angle_error_deg)))
    minimum_gap=low_travel-clear-backlash-geometry_stack
    return dict(revision='R5',payload_mass_kg=MASS_KG,payload_2g_N=PAYLOAD_N,
        proof_screen_N=2*PAYLOAD_N,units={'length':'mm','force':'N','torque':'N mm'},
        kinematics=dict(radius_mm=r,retained_angle_deg=a['retained_angle_deg'],
            release_angle_deg=a['release_angle_deg'],servo_rotation_deg=a['release_angle_deg']-a['retained_angle_deg'],
            withdrawal_mm=travel,lug_clearance_stroke_mm=clear,
            distal_support_loss_mm=loss,nominal_open_gap_mm=travel-clear),
        tolerance=dict(role='Allocated maximum losses to be inspected, not measured tolerances',
            slot_diametral_backlash_mm=backlash,combined_lug_tip_error_mm=geometry_stack,
            release_angle_shortfall_deg=angle_error_deg,
            allocated_minimum_open_gap_mm=minimum_gap,required_measured_gap_mm=.5,
            budget_passes=minimum_gap>=.5),
        catalogue_comparison=dict(actuator='TowerPro MG90D',stall_torque_Nmm=2.1*98.0665,
            voltage_V=4.8,axial_screen_N=12.,ideal_peak_torque_Nmm=12*r,
            slot_mu_sensitivity=.15,screen_upper_torque_Nmm=12*r*(1+.15),
            meaning='Catalogue stall comparison only; no usable-torque or release margin established'),
        friction_sweep=rows,physical_tests='PENDING',actuator_qualified=False,
        assumptions=['Coulomb coefficients and pad preload are unmeasured sensitivities.',
          'Long-guide two-station equilibrium is an assumed contact mode, including before distal separation.',
          'Positive guide reaction acts upward on the keeper floor; negative reaction acts downward on its roof.',
          'Sleeve friction, moving drive height and tangential-friction pitching moments are included.',
          'Three-dimensional skew, elastic contact sharing, breakaway, wear, grit, gear and shaft behavior are not solved.',
          'No return spring is specified. Unpowered position and retention require physical testing.'])


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--geometry',type=Path,required=True)
    parser.add_argument('--output',type=Path,required=True)
    args=parser.parse_args()
    result=analyze(json.loads(args.geometry.read_text()))
    result['geometry_sha256']=sha(args.geometry)
    result['analysis_source_sha256']=sha(__file__)
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(json.dumps(result,indent=2,allow_nan=False)+'\n')
    print(json.dumps({k:result[k] for k in ('kinematics','tolerance','catalogue_comparison')}))
    if not result['tolerance']['budget_passes']:
        raise SystemExit('Allocated release clearance is below 0.5 mm')


if __name__=='__main__':
    main()
