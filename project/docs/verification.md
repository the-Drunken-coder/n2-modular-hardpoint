# Evidence, remaining work and acceptance gates

**Current campaign:** use the [P14 bench-test plan](../../docs/test-plan.md) for PAHT-CF candidate prints, 8.9 N design force and the 17.8 N sacrificial qualification target. This page supplements that plan. The P11 numerical values below are historical; the current P14 screen is 33.68 N, with 16.84 N as division by SF 2 only. Neither is a working-load rating.

## What exists

The package retains current P14 CAD and historical P11 CAD/analysis records; it includes, sampled rigid-motion checks, common-PLA component FEA, mesh/contact/mounting sensitivities, and host-logic tests for the local pulse controller. These are different types of evidence. None proves a manufactured load rating or successful aircraft separation.

For the historical P11 h = 0.55 mm PLA analysis, nominal raw stress-threshold crossings are approximately **21.50 N** with full rigid backing and **11.26 N** with ideal two-hole support. With distal support ineffective, the values are approximately **7.48 N** and **7.53 N** respectively. Use the actual structured analysis for full precision, refinement history and controlling locations. The guide roots and ideal fixture edges remain important modeling limitations.

The common effective PLA model assumes E = 2,200 MPa, ν = 0.35, density 1.24 g/cm³ and assigned tension/compression/maximum-shear thresholds of 25/40/15 MPa, at 22°C and solid-equivalent infill. These are comparison assumptions, not measured print allowables. The current P14 material estimate scales PLA stress thresholds by 47/31 and assumes ideal full receiver backing; it is not direct anisotropic PAHT-CF analysis. See the included [analysis summary](../analysis/summary.json), [material record](../analysis/material.json) and [assumptions register](assumptions.md).

## Priority 1 — establish real support engagement

Measure each printed part and the actual solenoid. Record filament batch, slicer/profile, orientation, layer height, part mass, root condition, guide clearances, armature travel and fork lost motion. The nominal distal overlap is only 0.6 mm.

**Gate:** all pieces assemble without forcing; no cracked, incomplete or scarred retaining surfaces; unloaded motion is repeatable; positive distal overlap is directly observed across measured retained play. A provisional full-open axial clearance target is at least **0.20 mm after measured variation**, but the final requirement must follow the actual tolerance budget. Any lost retained support, binding or inadequate open margin stops loaded testing.

## Priority 2 — measure the full-stroke force budget

Measure net available actuator pull versus position at nominal and lowest intended voltage. Initially use only the ambient-coil condition and pre-ARM temperature gate in Priority 5. Warm powered measurements remain open until a separately documented thermal-conditioning and temperature-limit protocol is approved for the actual hardware. State whether the spring is included. Separately measure actual mechanism demand with the intended retained force, CG moment and misalignment. Count the spring once.

Pay particular attention to approximately **0.6 mm** stroke, where distal engagement is lost, and **2.3 mm**, where the lug clears. Record the entire trace rather than only a starting pull value.

**Provisional gate:** minimum measured net actuator pull must be at least twice maximum measured external mechanism demand, including uncertainty, at every relevant position and condition. This 2:1 ratio is a project development criterion, not a supplier rating. Apply it to the ambient-condition measurements before proceeding with initial ambient loaded-release trials; the warm-condition force gate remains open until its protocol and measurements are complete. Also require actual powered withdrawal in the assembled device. A larger or longer pulse is not a remedy for binding.

## Priority 3 — structural pull and sustained retention

Use matching PAHT-CF coupons and at least three sacrificial P14 assemblies for the current campaign; record separate results for any PLA fit prototypes. Test with the actual intended backing, mounting hardware and payload fixture. Pull in +Z through the defined attachment load point; add the intended eccentric moments separately. Include deliberately ineffective distal contact as a failure sensitivity.

Record force and displacement, first crack, permanent set, unintended slip and ultimate separation as separate events. Inspect keeper, lug/window webs, receiver roofs and mounting seats. Repeat at the intended temperature and retention duration to establish creep and softening behavior.

**Gate:** use the current plan’s 8.9 N design and 17.8 N sacrificial proof targets; those do not define every aircraft service wrench or qualify a load rating. Require **no measurable permanent set at the recorded instrument resolution, using displacement measurement with resolution 0.05 mm or better**, and additional displacement during the 10-minute 8.9 N dwell **less than 0.2 mm**, consistent with the current test plan. Any crack, whitening, delamination, keeper migration, engagement loss, uncontrolled sliding, binding or loss of full return fails the selected bench condition. The former 0.1 mm permanent-set allowance is superseded. The screening sample count is not a reliability qualification.

## Priority 4 — complete release and fault behavior

Film or instrument command-on, keeper fully withdrawn, adapter fully clear and command-off. Use the included timing record and state the measurement uncertainty. Test normal departure, near-zero departure force, misalignment and representative installation attitude.

**Provisional gate:** full clearance before command-off with at least two video-frame intervals of margin after uncertainty. There must be no collision, residual capture or spring recapture. A lifting attachment requires separate aircraft-relative separation evidence.

With the payload supported, interrupt upstream coil power at early/mid/late release positions; leave the coil connected to its flyback driver. Test incomplete insertion and obstructed return. Document how each resulting state is detected and recovered. Spring return alone is not proof of fail-safe retention.

## Priority 5 — thermal, wear and installation qualification

The initial controller requests a 250 ms pulse and a 10 s minimum lockout. Neither is a tested solenoid duty rating or temperature protection. **For the initial campaign, before every bench ARM, externally verify coil-case temperature within 2°C of ambient, including instrument uncertainty.** Confirm actual command pulse width, current, stroke, return and printed-contact temperature. Allow cooling as needed; the lockout ending does not waive the temperature gate.

Warm powered trials require a **separate thermal-conditioning and temperature-limit protocol approved for the actual solenoid, driver and printed assembly** before they may replace that initial ambient gate. The protocol must state its supporting hardware limits, conditioning method, pulse/repetition limits, measurement locations and uncertainty, temperature limits, monitoring and stop criteria. No warm-coil temperature or permissible duty cycle has yet been established here. Until that protocol exists, warm force measurements and warm loaded-release trials remain **open**; do not invent limits or mark those tests passed.

The current test plan schedules **10 nominal-voltage ambient-coil trials plus 10 minimum-voltage approved-warm-coil trials per assembly**, across three assemblies. The initial ambient set may proceed once its prerequisite gates are met. Its success does not complete the warm set or the overall release campaign: all 60 planned trials must be completed under their valid protocols before that campaign can pass.

After fit/force gates, conduct a recorded wear/cycling study at representative loads and environments. Only then qualify the actual airframe mount and complete separation. All physical tests, manufacturing validation and aircraft qualification remain open.
