# R5 requirements

R5 is the active bench prototype selected by [active_design.json](../project/active_design.json). These requirements supersede the [historical P14 requirements](p14-requirements.md). Priorities remain reliable commanded retention/release, simplicity, and accessible manufacture. **No working-load rating or aircraft operating envelope has been demonstrated.**

| ID | Requirement | Acceptance/evidence |
|---|---|---|
| R1 | Complete departing assembly at most **0.454 kg**, including adapter, attachment hardware and payload | Weigh and record the entire departing assembly; count retained components separately |
| R2 | Retain and release at **2 g total**, with gravity already included: 0.454 × 9.80665 × 2 = **8.9044382 N** | Complete loaded withdrawal and actual payload clearance in the R5 bench plan |
| R3 | Initial scope is straight **−Z extraction in R5 coordinates** | Record fixture alignment; lateral forces and moments require a separate installation envelope |
| R4 | Complete-assembly retention proof target **17.8088764 N**, twice R2 | Computational checks plus sacrificial physical proof; release at the proof force is not required |
| R5 | Releases on an intentional command and retains during accepted powered operating conditions | Calibrated control, engagement inspection, loaded cycles and later installation-specific vibration test |
| R6 | **Power-off retention is not required** | Record the possibility of losing retention after a local servo/power fault; do not infer that the whole aircraft must fail |
| R7 | Three printed components, one actuator, minimal assembly complexity | CAD solid count, explicit joint details and reproducible assembly instructions |
| R8 | Fixed nominal **5 V** actuation | Confirm allowed terminal voltage under load, logic level, measured endpoints and startup behavior using the R5 electronics procedure |
| R9 | Compact credit-card-scale footprint, retained thickness **≤20 mm**, one-can typical pod and two-can extended layout envelope | Current CAD bounds and installation/departure study; adapter, screw heads, host structure and cable envelope identified separately |
| R10 | Common FDM process, specified PAHT-CF trial orientation, no inaccessible supports or support damage on running/load faces | R5 print record, slicer inspection, measured fit and actual process specimens |
| R11 | Full stroke clear through the accepted manufacturing/guide-pose envelope | CAD pose checks followed by measured force/travel and loaded-release tests; nominal translation alone is insufficient |
| R12 | Jam checks use the same explicit structural allowance policy | Check the defined unseated pose; arbitrary mis-seating and repeated damage remain physical verification gates |

## Explicit limits

Payload electrical/data transfer, an ejector, departure sensing, an independent fixed-equipment lock, aircraft backing design, and flight qualification remain outside this prototype. Their consequences and observation of actual departure remain explicit.

The 100 g installed-mass target and 3 A supply-capacity budget in the earlier [design brief](next-design-brief.md) were planning assumptions, not user-selected qualification limits. Historical 10–15 lb and 4 lb targets remain withdrawn. A longer pod does not increase the 0.454 kg allowance.

## Evidence rules

CAD overlap tests, linear component FEA, supplier material properties, and simulated geometric sample frequencies establish only the stated model results. They do not establish measured reliability, strength, creep life, service temperature, or a working-load rating. Generated evidence must identify current inputs and report failed or unconverged conditions explicitly.

Use [the R5 bench plan](test-plan.md) for physical acceptance. Use [P14 reference documents](p14-requirements.md) only when reproducing P14.

