# R5 current context

R5 is the current development package, selected in [active_design.json](../project/active_design.json). It replaces P14's solenoid with a positional MG92B servo and retains three printed pieces: body, keeper and departing adapter.

The selected use is a small mechanical hardpoint for a quad or wing-mounted pod. The provisional departing mass is 0.454 kg including its adapter/hardware. Required release is at 2 g total, 8.9044 N axial −Z in the R5 frame; the separate complete-assembly retention proof target is 17.8089 N. Fixed nominal supply is 5 V. Compact mounting remains credit-card scale with retained thickness at most 20 mm. See [requirements](requirements.md) for exact acceptance and scope.

Unpowered retention was deliberately removed. A local servo/power fault can cause loss of retention without implying loss of aircraft power. Payload power/data, ejector, departure sensing, independent equipment lock, aircraft backing design and flight qualification remain outside this prototype.

## Immediate work

Use the R5 print/assembly and electronics instructions. Correct computational evidence must be regenerated for the proposed geometry; no numerical stress ratio is a measured working-load rating. Complete retention proof and repeated 2 g loaded releases are separate physical gates in the [bench plan](test-plan.md).

## Historical context

The [earlier design brief](next-design-brief.md) records one-can/two-can packaging, fixed 5 V and the initial solenoid-first concepts. Those mechanism choices were superseded by R5; its mass/pod constraints remain useful. The 100 g installed-mass and 3 A supply-capacity budgets were engineering planning assumptions.

P11–P14 CAD, numerical studies, manufacturing records and solenoid controls remain in their original locations for traceability. [P14 requirements](p14-requirements.md), [P14 test plan](p14-test-plan.md), [P14 design](p14.md), and [archive recovery](ARTIFACTS_AND_RECOVERY.md) are historical references.

