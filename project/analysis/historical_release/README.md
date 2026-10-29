# N2 historical withdrawal-force model

**This is a filtered P7 analytical study from the earlier PETG-era design process. It is not PLA qualification, a measured friction result, a solenoid force guarantee, or a loaded-release rating.** Only the N2 geometry, contact/friction statics, and their source/output are included. Legacy material-strength values and structural-capacity estimates are excluded from this focused subset and are not used in P8's PLA FEA.

## What it models

The nominal N2 keeper tip is X = 25.9 mm. The lug spans X = 26.8–28.2 mm. The remaining lug engagement while withdrawing by stroke (s\) is:

\[
\ell(s)=28.2-\max(26.8,25.9+s).
\]

The retained distal roof overlap is (\max[0,26.5-(25.9+s)]\). It is **0.6 mm at retention**, disappears at (s=0.6\) mm, and the lug remains engaged until (s=2.3\) mm. Those positions are nominal geometry, not a tolerance allowance or actuator travel guarantee.

For each engaged state, the model chooses assumed point/centroid guide contacts, balances vertical force and moments, and sums equal-coefficient Coulomb friction. In the overhung phase:

\[
R_b/P=a/L,\quad R_a/P=1+a/L,\quad
D=\mu(P+R_a+R_b).
\]

Here (a\) is the distance from payload contact centroid to proximal guide reaction, (L\) the distance between the opposing guide reactions, and (D\) the vertical-contact friction contribution. It also includes friction feedback from the offset actuator/retainer geometry in the XY plane:

\[
N_{side}=\frac{y_D D}{L_y-\mu(y_-+y_+)},\qquad
F=D+2\mu N_{side},
\]

with nominal (y_D=10\) mm, (y_-=-4\) mm, and (y_+=11.5\) mm. Equality of friction coefficients and the chosen contact/actuator heights make the assumed XZ friction moments cancel. This is not a solved real pressure distribution, wedge-angle model, or contact compliance model.

The original study sampled μ = 0.1, 0.2, 0.3, and 0.4 with nominal contact, a 0.5 mm guide-contact inset, and an initially ineffective distal support plus inset. It also varied the assumed drag centroid. A coefficient called “PLA friction” was not measured here; changing printed material, surface roughness, orientation, lubrication, wear, humidity, or temperature can change it.

At assumed μ = 0.20, the maximum modeled withdrawal force through the engaged stroke is approximately:

| Historical contact assumption | Maximum (F/P\) |
|---|---:|
| Nominal | 0.650 |
| Guide contact inset by 0.5 mm | 0.745 |
| Distal ineffective and 0.5 mm inset | 0.784 |

These are dimensionless conditional coefficients. They omit a measured zero-load drag and actual minimum actuator pull. For example, (F/P=0.784\) does not imply a real mechanism releases a specified weight. It says that the chosen analytical contact model would consume approximately 0.784 N of withdrawal force per newton of retained extraction force, before unmeasured contributions.

## Historical actuator budgets

The output retains two illustrative available-friction-force budgets, **0.35 N** and **0.784532 N**. The first was an assumed reserve. The second is the arithmetic conversion of an 80 gram-force supplier point, not an established minimum net pull over the complete stroke, supply voltage, coil temperature, duty cycle, spring force, and installation variation. No controller or coil qualification follows from these values.

Historical fields `capacity_scenarios`, `P_limit_N`, and the CSV mass columns are kept to reproduce the original arithmetic exactly: (P=B/(F/P)\), then (m=P/(ng)\). They are **conditional force-budget crossings, not capacity or release ratings**. Never combine those numbers with the PLA holding screen as if they form a tested envelope.

The contact bearing estimate (p=P/(3\ell)\) diverges as the remaining overlap (\ell\) approaches zero at constant load. This idealized terminal behavior is a reason to investigate actual edge deformation, contact redistribution, possible motion of the payload, and repeatable complete release. The historical model does not establish a finite damage-free load through that terminal stage.

## Relationship to the retained PLA FE model

The three STEP hashes in `source_sha256` match the frozen N2 P8 solids. However, P7's zero-inset proximal contact is a point at X = 28.5 mm, whereas P8 applies a finite patch X = 28.5–29.5 centered at X = 29.0. The assumed reaction split consequently differs. These studies use different contact idealizations and must not be presented as one solved, validated contact model.

P8 evaluates retained normal loading in +Z. This historical study evaluates +X keeper withdrawal while +Z load remains. Neither simulates a payload departing an aircraft, and neither establishes how a lifting attachment clears the carrier after unlocking.

## Reproduce and inspect

From the focused project root:

```sh
python analysis/historical_release/reproduce_release.py --output /tmp/n2_release_replay
python analysis/historical_release/verify_equilibrium.py
```

The replay destination must be new. Both scripts use only the Python standard library. `reproduce_release.py` contains the extracted original `state` and `stroke_rows` functions with an N2-only geometry/case driver. It verifies its newly calculated arrays against the focused archived reference. It does not edit geometry, rerun FEA, or use material-strength allowables.

| File | Contents |
|---|---|
| `results.json` | 12 N2 friction cases, assumed budgets, contact equations, exclusions, and source geometry hashes |
| `release_summary.csv` | 24 rows: each of the 12 cases with the two historical force budgets |
| `full_stroke_mu0p2.json` | 3,462 N2 sampled stroke states at assumed μ = 0.20 |
| `reproduce_release.py` | Portable N2-only arithmetic reproduction |
| `verify_equilibrium.py` | Independent 3D force/moment reconstruction for assumed contact states |
| `equilibrium_verification.json` | 13,848 checked states; maximum force and moment residuals |
| `geometry_audit.json` | Original N2 geometry/dimension audit subset |
| `provenance.json` | Hashes and paths identifying the original historical source files |

The P11 arithmetic reproduction matched all retained case, stroke, and drag-centroid outputs exactly. Independent equilibrium residual maxima were approximately (4.72\times10^{-16}\) N and (1.42\times10^{-14}\) Nmm. This verifies the statics arithmetic of the chosen assumed contacts; it does not show that those contacts occur in a printed mechanism.
