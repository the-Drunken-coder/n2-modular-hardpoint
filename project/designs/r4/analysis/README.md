# R4 analysis and validation

The R4 workflow rebuilds the physical assembly and each manufactured part, checks specified motion and installation clearances, and solves the new STEP geometry. It does not use the archived R3/P14 results as evidence for R4. The standard outputs include configurations, numerical results, manufacturing advisories, plots, a force-demand sensitivity and a blank physical-test record.

## Reproduce the entire run

From the repository root, with Python 3.12, Node.js 22 and the pinned CAD/numerical requirements installed:

```sh
python -m pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt
python -m unittest discover -s tests/ci -p 'test_refined_design*.py' -v
python -m unittest discover -s project/designs/r4/electrical/firmware -p 'test_*.py' -v
python tools/ci/run_refined_design.py --stage all --output /tmp/n2-r4-new-run
```

Use a new output directory each time. The CAD stage rejects existing output so old STEP/results cannot silently stand in for a new run. Linux also needs `libgl1`, `libglu1-mesa`, `libxft2` and `libxrender1`; the workflow installs them explicitly.

The same stages can be run independently, in order: `cad`, `receiver`, `adapter`, `keeper`, `report`. Each stage checks that source files and prepared inputs have not changed. If geometry, solver configuration, material or analysis source changes, start a fresh run. Reports from interrupted development iterations must not be combined into a final result.

## Models and loads

Dimensions are in mm, force in N, stress in MPa. The working departing mass is 0.454 kg, giving 8.9044382 N at the 2 g release target. The 4 g static sensitivity doubles that payload load. A 3 N total preload is a deliberately conservative sensitivity above the nominal four-pad estimate; it is not a measured pad force. Receiver and adapter receive equal and opposite pad reactions, so preload does not incorrectly add external payload weight.

The geometry generator owns all contact and fixture coordinates. The FEA configurations point to the three freshly exported STEP files and record their hashes. The receiver is restrained only at four real host-mount annuli. The adapter is restrained at its payload-bolt annuli. Vertical keeper cases use six rigid-motion gauge degrees of freedom; their reactions must be negligible. No external carrier rail, aircraft skin or backing plate is used as a hidden restraint.

Loads are the explicitly listed payload/contact forces and, in the receiver's vertical cases, the purchased servo's inertia. The models do not apply a distributed inertial body force to the printed receiver/keeper or add separate fastener, horn, connector and cable loads. The material density therefore does not silently introduce self-weight. Those masses are accounted for in the separate installation budget; an installation load case must decide how their actual accelerations and cable restraints enter the structure.

| Component | Load states | Refinement |
| --- | --- | --- |
| Receiver | 2 g retained with/without preload; distal keeper support loss; 4 g static sensitivity; 12 N servo mounting reaction; representative lateral/CG contact case | 1.15 and 0.85 mm local targets; 12 solves |
| Adapter | Retained; 0.3 mm and 0.1 mm remaining lug contact; representative lateral/CG case | 0.70, 0.50 and 0.35 mm local targets; 12 solves |
| Keeper | Retained; distal support lost; 0.3 mm and 0.1 mm remaining lug contact; 12 N axial follower/slot load; retained reaction from representative tipping load | 0.70, 0.50 and 0.35 mm local targets; 18 solves |

The 12 N axial case is a specified **blocked-keeper component test**: the tip face is fixed and a finite patch on the actual slot wall receives the load. It screens the yoke and keeper connection. It is not a prediction of normal sliding and does not bound the theoretically large force amplification near crank dead center under motor stall.

The lateral/CG sensitivity represents a 4.4522191 N transverse force and an assumed 60 mm CG offset, giving 267.133146 N·mm. It loads the keyed contact and a positive-compression hard seat, with the opposite vertical reaction carried by the keeper. The hard seat is treated as engaged after its initial gap closes. This is a representative **individual hardpoint interface** load case, not a pod aerodynamic, wing or aircraft model. Actual gap-closing rotation and contact redistribution are not solved.

The material is the unchanged isotropic effective-solid PLA comparison proxy, E = 2200 MPa and ν = 0.35. It is deliberately not relabeled as measured PAHT-CF. Legacy assumed strength thresholds inside the frozen solver are excluded from the curated results. There is no directional material model, sparse-infill model, creep/fatigue model or qualified strength allowable.

## How the release-demand calculation works

The first sensitivity uses the lug/guide contact reactions and Coulomb sliding resistance. The second includes the moving crank force line and follower friction. At each prescribed keeper position, it computes the servo angle from `u = r(1 − cos θ)`, then the follower's X/Z position.

For the long proximal guide, the front and rear reaction signs are solved explicitly. A positive vertical reaction means a floor contact; a negative reaction means a roof contact. The equations balance vertical force and pitching moment, include tangential-friction moments, and enforce `Q = μguide(P + |Ra| + |Rb|)`. A mathematically invalid sign branch is discarded; no compatible finite branch is reported as such instead of manufacturing a positive force value.

The fixed stainless sleeve slides in the vertical slot. Its resistance adds a vertical follower force with the direction of sleeve travel. Required crank torque is `Q r (sin θ + μslot |cos θ|)`. Guide coefficients 0.05–0.30 and sleeve/slot coefficients 0.05, 0.15, 0.30 and 0.40 are **unmeasured sensitivities**. The zero-loss crank equation alone would omit this friction and the associated guide reactions.

Before the distal support is lost, three possible guide contacts make load sharing compliance-dependent. The long-guide-only calculation is an alternate prescribed contact mode, not a nonlinear solution for all simultaneous contacts. These equations do not include stick-slip, wear grooves, impacts, dynamic gear behavior, current rise or plastic deformation. They are used to identify what must be measured, not to declare the actuator adequate.

## What green Actions means

The workflow enforces complete case coverage, successful solver execution, current STEP/configuration/solver/material hashes, finite results and matching compact/native results. Every solve must meet these numerical limits:

| Numerical check | Bound |
| --- | ---: |
| Force equilibrium error | < 1e−4 N |
| Moment equilibrium error | < 1e−3 N·mm |
| Relative residual on free DOFs | < 1e−7 |
| Absolute relative CAD/mesh volume error | < 2% |
| Rigid-motion gauge reaction | < 1e−4 N |

Mesh sensitivity is recomputed from the actual finest two results and reported separately. It is not hidden behind a numerical pass. Raw local contact/fixture stresses can remain sensitive even when displacement settles. R4 gives no safety credit to the old undersampled 0.4 mm smoothing neighborhood.

Meshing uses Gmsh's [HXT algorithm (`Mesh.Algorithm3D = 10`)](https://gmsh.info/doc/texinfo/gmsh.html), followed by the existing Netgen optimizer. The declared h is the target size inside the CAD-provided local boxes; the box metadata's earlier advisory 0.6/0.7 factors are not compounded into the three reviewed h levels. The far-field target is 2.6 times h for the receiver and 2.2 times h for the other two parts. The actual element and degree-of-freedom counts are recorded for each solve; the 500,000-DOF ceiling is a resource limit, not an accuracy criterion.

An initial development mesh with the default Delaunay algorithm contained one zero-volume receiver tetrahedron and was rejected. HXT identified the geometric cause: a front pad-pocket rim was tangent to the socket boundary at `(26.5, 5.1, 21.47)` mm. The two front pad centers were moved from Y = 3.0 to Y = 2.5 mm, leaving a 0.5 mm web to the socket boundary and a 0.4 mm rim to the front edge of the shallow recess. The corresponding pad solids, load patches, drawings and manufacturing exports were regenerated together. The rejected diagnostic runs establish no structural result; only the corrected source's fresh meshes are eligible for the final record. Changing algorithms alone does not turn a degenerate element into evidence. The solver source itself remains unchanged.

Support/bridge detection is a geometric face heuristic, not a slicer or printed coupon result. The generated report may explicitly require support and still be a valid report. Missing or malformed evidence fails; admitting a real manufacturing limitation does not.

## Physical test records

`bench-plan.json` defines a concrete prototype acceptance matrix for three identified specimens. Its limits are development decisions and can be changed only through an explicit plan revision. The plan requires:

- Measured installed pad preload of 0.5–3 N, retained overlap and a calibrated released endpoint with at least 0.5 mm clearance past the actual lug and at least 0.5 mm before the actual stop.
- A restrained 4 g equivalent, 60-second static hold with no visible damage, accidental release or more than 0.1 mm permanent set.
- 100 loaded releases per specimen, divided into four documented environmental/fit conditions, at the 2 g equivalent load. Every attempt records servo-terminal voltage, time to clear, keeper travel, payload separation, case temperature and outcome.
- A measured available-versus-required drive profile at every 0.5 mm from 0 to the 9.5 mm operating endpoint, at the low accepted supply and a warm servo. The complete comparison is at the crank shaft, preserving the actual horn/sleeve/yoke/guide load path. With measurement uncertainties included, available torque must be at least 1.5 times measured demand at every position.
- Retained-state supply loss, reset and signal-disconnection tests, with zero uncommanded releases.
- Mid-stroke power-loss observations. Their outcome is recorded; the software does not assume that the servo returns to retention.

Do dimensional inspection and a slow unloaded hand-cycle first. Identify the printer, material lot, drying/conditioning state, orientation, slicer profile, pad lot and hardware batch in each specimen's evidence folder. Define the dust particle type/mass and conditioning duration in that record before testing. The “dimension-limit fit” condition must use measured parts near the specified acceptance limits, not a nominal model with a new label. Log every attempted cycle; do not remove failed attempts from the CSV.

Create a blank sheet:

```sh
python project/designs/r4/analysis/bench_records.py --template /tmp/r4-bench-records.csv
```

The exact CSV header is `test_id,specimen_id,condition,cycle,measurement,value,unit,evidence,operator,timestamp_utc`. Enter measured values only. Reference the raw trace/photo/log in `evidence`; include operator and an explicit UTC timestamp. Do not enter a computed force-margin ratio: the validator calculates it from the available/demand forces and their uncertainties.

### B03 measurement boundary

A slow axial pull on the disconnected keeper is useful for diagnosing guide/lug friction. It does not include the moving follower height, sleeve/slot friction or the vertical follower force that changes guide reactions. It must not be entered as the complete B03 drive demand.

For B03, measure required torque at the crank axis while the real horn, sleeve, yoke, guides, installed pads and 2 g equivalent load remain in the load path. A calibrated instrumented input shaft/drive fixture replaces the servo drive and reproduces the actual commanded release angle/speed profile; fixture friction and its uncertainty are documented. Separately measure available servo torque over the same angle/speed profile and representative output-shaft side loads at the accepted terminal voltage and temperature. Retain the raw angle, keeper position, torque, speed, voltage and temperature traces. The minimum available value and maximum required value over each position interval are used, including breakaway/transients. If a suitable torque fixture and trace are unavailable, B03 remains pending even when the straight axial pull or assembled release succeeds.

The CSV's existing `available_pull_N` and `required_pull_N` names represent **equivalent tangential forces** for this comparison: divide each measured torque in N·mm by the common reference radius **7.5 mm**. Divide its torque uncertainty by the same radius for the corresponding uncertainty field. These quantities are not measured axial keeper forces. Using the same reference radius preserves the exact torque-margin test:

`(Tavailable − uTavailable) / 7.5 ≥ 1.5 × (Trequired + uTrequired) / 7.5`.

No conversion from advertised stall torque, motor current, the ideal frictionless crank equation or the assumed-friction sensitivity can substitute for either measured profile. The source CSV/evidence record must identify the torque fixture, reference radius and calibration; the validator checks the supplied scalar values and cannot authenticate that boundary experimentally.

Validate and require completeness:

```sh
python project/designs/r4/analysis/bench_records.py \
  --records /tmp/r4-bench-records.csv \
  --output /tmp/r4-bench-status.json \
  --require-complete
```

Blank or absent records remain **PENDING** and fail `--require-complete`. Failed measurements remain **FAIL**. Duplicate cells, wrong units, NaN values and measurements without provenance are rejected. A completed accepted record establishes only that the supplied records meet this plan; the program cannot authenticate that a physical test occurred and never sets a flight qualification or payload rating.

## Evidence layout

| Output | Contents |
| --- | --- |
| `run.json`, `prepared-inputs.json` | Source identity, Git revision/dirty-state indicator, prepared input hashes |
| `cad/` | Physical STEP/STL, complete assembly, geometry metadata, clearances, drawings and overhang reports |
| `cad-gate.json`, `manufacturing-advisory.json` | Validity/grouping/clearance gate and advisory print findings |
| `fea/configs/`, `fea/manifest.json` | Exact new load cases and input provenance |
| `fea/cases/`, `fea/summary.json`, `fea/report.md` | Curated results without unsupported strength ratings |
| `fea/plots/` | Refinement and release-demand plots derived from this run |
| `fea/release-force-sweep.json`, `fea/crank-force-sensitivity.json` | Two explicit force-demand screens |
| `bench-status.json`, `bench-records-blank.csv` | Unperformed physical tests and the complete measurement template |
| `validation-gate.json`, `summary.md` | Final automated status and human-readable findings |

The normal Actions artifact retains the compact evidence for 30 days. A manual-dispatch option adds native meshes and field arrays for seven days. Dated local evidence committed in the design package remains documentary; the workflow never consumes it as proof of a new solve.
