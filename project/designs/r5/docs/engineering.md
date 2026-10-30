# R5 engineering assessment

The enclosed **85.6 × 54 × 20 mm** cartridge passes **1,931 nominal CAD checks**
and **18 component finite-element solves** with acceptable numerical residuals.
This supports building a measured prototype. It establishes **no payload,
actuator or flight rating**. Near-release contact, guide-gap closure and loaded
actuator performance remain unresolved. Sources: [CAD checks](../manufacturing/clearance.json),
[full numerical report](../analysis/evidence/local-run/report.md).

## Load, motion and torque

The departing 0.454 kg includes its adapter and hardware. With +Z into the wing,
the release load acts downward:

    P = 0.454 × 2 × 9.80665 = 8.9044382 N
    Retention screen = 2P = 17.8088764 N

The keeper carries this load through its guides into the receiver and four
captured mounting nuts. The casing encloses the mechanism; the aircraft needs
its own reinforced mounting frame.

For crank radius 5.5 mm and absolute crank angle θ, withdrawal is:

    u = 5.5 × (cos 15° − cos θ)
    u(100°) = 6.267657 mm

A flat keeper clears the lug after 4.8 mm, leaving 1.467657 mm nominal opening.
Allocating 0.4 mm follower backlash, 0.2 mm combined lug/tip error, 2° endpoint
shortfall and 0.10 mm for tilted-tip projection leaves **0.578044 mm**. These are inspection allocations, not measured printing
or servo tolerances. The assembled release gap must measure at least 0.5 mm.

The friction screen spans guide coefficients 0.05–0.30, sleeve coefficients
0.05–0.30 and pad preload 0–3 N. Its 60 combinations give finite solutions;
the largest sampled demand is 9.30 N horizontally and 46.37 N mm at the crank.
The model includes sleeve friction and force-offset pitching moments, but assumes
two guide-contact stations even before distal support disappears. It does not
establish a conservative bound on real contact, breakaway, skew or contamination.

A separate 12 N drive screen gives 66 N mm ideal torque, or 75.9 N mm with its
stated sleeve-friction allowance. The MG90D catalogue stall value at 4.8 V is
205.94 N mm; comparison with stall torque establishes no operating margin.
No return spring is specified, so unpowered retention must also be measured.
See [mechanics inputs/results](../analysis/evidence/mechanics.json) and
[actuator research](actuator-research.md).

## Structural results and critical limits

The solves use a **solid isotropic PLA comparison model**, E = 2,200 MPa and
ν = 0.35, with 3 N opposing pad preload. They do not represent measured PAHT-CF
properties, layer direction, defects or sparse infill. Fine-mesh results follow;
stresses are raw local extrema, not allowable stresses.

| Component / condition | Displacement, mm | Tension, MPa | Compression, MPa |
| --- | ---: | ---: | ---: |
| Receiver, retained 2 g | 0.06321 | 8.57 | 21.84 |
| Receiver, distal support lost | 0.07327 | 16.64 | 40.05 |
| Receiver, retained 4 g screen | 0.11922 | 16.44 | 41.83 |
| Adapter, retained | 0.01100 | 7.87 | 4.09 |
| Adapter, 0.1 mm overlap remains | 0.03814 | 32.27 | 59.62 |
| Keeper, retained | 0.00916 | 2.56 | 3.60 |
| Keeper, distal support lost | 0.15944 | 6.88 | 10.64 |
| Keeper, 0.1 mm overlap remains | 0.03290 | 28.95 | 58.03 |
| Keeper, separate blocked-drive fixture | 1.71993 | 33.06 | 16.54 |

Displacement changes between two mesh levels stay below 0.93%; raw stress
changes reach 32.42%. Two levels do not prove convergence. At 0.1 mm remaining
overlap, concentrated edge loading produces high, mesh-sensitive peaks. Several
peaks exceed the proxy's assumed 25 MPa tension or 40 MPa compression thresholds;
neither numerical equilibrium nor those assumed thresholds qualifies the part.
Nonlinear yielding, wear and departure dynamics are unsolved.

A final geometric review found that first-roof-contact rocking could strike the
original lid. An internal relief to Z19.0 now preserves a 1.0 mm lid roof and
clears the prescribed 1.6568° pitched keeper, including lateral float and a
0.01 mm axial adjustment within slot backlash. Calculated lid clearance is
0.233 mm at 4.7 mm withdrawal and 0.188 mm at the operating endpoint. These
small nominal clearances require printed-fit inspection with the lid installed.
The outside remains 20 mm thick; the three FEA structural parts are unchanged.
See the `pitch_clearance` record in [CAD checks](../manufacturing/clearance.json).

After 1.0 mm nominal withdrawal, prescribed far-roof support replaces the lost distal
support. The solve does not close the initial **0.6 mm guide gap** or simulate
assembled rocking and possible follower load transfer. The blocked-drive case
fixes the keeper tip and omits installed guides: its 1.72 mm displacement and
fixture-edge stress concentration are not normal installed deflection or a
servo-stall prediction.

Receiver cases omit servo/clamp inertia and actuator mounting reactions.
Casing, fastener strength, wing compliance, lateral loads, fatigue and creep
are also excluded. Apply the [physical qualification plan](qualification.md),
including measured full-path torque margin, loaded cycles, power behavior and
the separate aircraft structural assessment.
