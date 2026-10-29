# Evidence, remaining work and acceptance gates

## What exists

The package retains the current N2 CAD, sampled rigid-motion checks, common-PLA component FEA, mesh/contact/mounting sensitivities, and host-logic tests for the local pulse controller. These are different types of evidence. None proves a manufactured load rating or successful aircraft separation.

For the baseline h = 0.55 mm PLA analysis, nominal raw stress-threshold crossings are approximately **21.50 N** with full rigid backing and **11.26 N** with ideal two-hole support. With distal support ineffective, the values are approximately **7.48 N** and **7.53 N** respectively. Use the actual structured analysis for full precision, refinement history and controlling locations. The guide roots and ideal fixture edges remain important modeling limitations.

The common effective PLA model assumes E = 2,200 MPa, ν = 0.35, density 1.24 g/cm³ and assigned tension/compression/maximum-shear thresholds of 25/40/15 MPa, at 22°C and solid-equivalent infill. These are comparison assumptions, not measured print allowables. No new FEA or geometry change is implied by selecting N2. See the included [analysis summary](../analysis/summary.json), [material record](../analysis/material.json) and [assumptions register](assumptions.md).

## Priority 1 — establish real support engagement

Measure each printed part and the actual solenoid. Record filament batch, slicer/profile, orientation, layer height, part mass, root condition, guide clearances, armature travel and fork lost motion. The nominal distal overlap is only 0.6 mm.

**Gate:** all pieces assemble without forcing; no cracked, incomplete or scarred retaining surfaces; unloaded motion is repeatable; positive distal overlap is directly observed across measured retained play. A provisional full-open axial clearance target is at least **0.20 mm after measured variation**, but the final requirement must follow the actual tolerance budget. Any lost retained support, binding or inadequate open margin stops loaded testing.

## Priority 2 — measure the full-stroke force budget

Measure net available actuator pull versus position at nominal and lowest intended voltage, cold and permitted warm conditions. State whether the spring is included. Separately measure actual mechanism demand with the intended retained force, CG moment and misalignment. Count the spring once.

Pay particular attention to approximately **0.6 mm** stroke, where distal engagement is lost, and **2.3 mm**, where the lug clears. Record the entire trace rather than only a starting pull value.

**Provisional gate:** minimum measured net actuator pull must be at least twice maximum measured external mechanism demand, including uncertainty, at every relevant position and condition. This 2:1 ratio is a project development criterion, not a supplier rating. Also require actual powered withdrawal in the assembled device. A larger or longer pulse is not a remedy for binding.

## Priority 3 — structural pull and sustained retention

Use matching PLA coupons and at least three representative assemblies per selected configuration for initial screening. Test with the actual intended backing, mounting hardware and payload fixture. Pull in +Z through the defined attachment load point; add the intended eccentric moments separately. Include deliberately ineffective distal contact as a failure sensitivity.

Record force and displacement, first crack, permanent set, unintended slip and ultimate separation as separate events. Inspect keeper, lug/window webs, receiver roofs and mounting seats. Repeat at the intended temperature and retention duration to establish creep and softening behavior.

**Gate:** define service wrench, proof factor and permissible permanent set before qualification. No service value is supplied here. Any crack, engagement loss or uncontrolled sliding fails the selected proof condition. Choose the displacement limit from measured fit; a preliminary 0.1 mm permanent-set criterion must be tightened if the engagement budget demands it. The screening sample count is not a reliability qualification.

## Priority 4 — complete release and fault behavior

Film or instrument command-on, keeper fully withdrawn, adapter fully clear and command-off. Use the included timing record and state the measurement uncertainty. Test normal departure, near-zero departure force, misalignment and representative installation attitude.

**Provisional gate:** full clearance before command-off with at least two video-frame intervals of margin after uncertainty. There must be no collision, residual capture or spring recapture. A lifting attachment requires separate aircraft-relative separation evidence.

With the payload supported, interrupt upstream coil power at early/mid/late release positions; leave the coil connected to its flyback driver. Test incomplete insertion and obstructed return. Document how each resulting state is detected and recovered. Spring return alone is not proof of fail-safe retention.

## Priority 5 — thermal, wear and installation qualification

The initial controller requests a 250 ms pulse and a 10 s minimum lockout. Neither is a tested solenoid duty rating. Before every bench ARM, externally measure coil-case temperature within 2°C of ambient, including instrument uncertainty. Confirm actual command pulse width, current, stroke, return and printed-contact temperature before increasing repetition or opening time.

After fit/force gates, conduct a recorded wear/cycling study at representative loads and environments. Only then qualify the actual airframe mount and complete separation. All physical tests, manufacturing validation and aircraft qualification remain open.
