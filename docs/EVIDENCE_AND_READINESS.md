# R5 evidence and readiness

**Current design: R5. Status: unqualified bench prototype.** No physical test result, working-load rating or aircraft qualification is recorded. [Selection](../project/active_design.json) · [Requirements](requirements.md) · [Bench plan](test-plan.md)

| Evidence | What it can establish | What it does not establish |
|---|---|---|
| Regenerated CAD, solid counts and pose checks | Defined nominal/tolerance geometry and checked intersections | Actual printed fit, cable compliance or reliable loaded motion |
| Audited linear component FEA | Results for applied force/moment, proxy material, prescribed supports and mesh | Nonlinear assembled contact, full-stroke release, print allowables or rated capacity |
| Mechanics and geometric sampling | Sensitivity under named assumptions and sampled distributions | Measured friction, torque, field failure probabilities or physical departure |
| Software/metadata tests | Implemented commands, acceptance rules and current documents agree | Servo terminal voltage, actual endpoints or mechanical behavior |
| Published viewer | Visualization of the identified design and evidence | Proof that a physical item fits, releases or withstands the required load |

Physical work must establish the complete mounting/keeper/adapter load path, full-stroke 2 g release, manufacturing repeatability, fault handling and later installation-specific conditions. Numerical values must come from a fresh run on the proposed geometry. Do not inherit the original erroneous 26.2 margin or approximately 2 kHz estimate.

R5 does not promise unpowered retention, ejector action, departure feedback, fixed-pod locking, payload power/data or an aircraft operating envelope. The accepted power-failure consequence and difference between unlocking and departure remain explicit.

## Historical boundary

`project/cad/N2`, `project/analysis/p14`, the old `project/electronics` solenoid firmware and its host tests belong to P14. The earlier 33.68 N scaled stress screen and 16.84 N arithmetic allowance do not apply to R5. Historical regression results preserve their own model; they are not current qualification evidence.

The [archive/recovery guide](ARTIFACTS_AND_RECOVERY.md), [P14 design](p14.md) and [historical requirements](p14-requirements.md) preserve original evidence and limitations. Original numerical records and source identities are retained.
