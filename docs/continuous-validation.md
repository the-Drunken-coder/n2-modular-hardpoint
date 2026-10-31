# Continuous engineering validation

> **Historical P14 context.** R5 is the current development package. Follow [the current R5 instructions](EVIDENCE_AND_READINESS.md); the specifications, files and results below apply only to the earlier package.

The workflow [engineering-validation.yml](../.github/workflows/engineering-validation.yml) runs on pull requests, pushes to `main`, and manual dispatch. It checks the controller, CAD and the recorded P14 finite-element model. These checks establish computational consistency; they do not establish a payload rating, manufactured strength or reliable physical release.

## What runs

| Check | What it does | What a pass means |
|---|---|---|
| Controller | Runs the existing host tests against the current checked-out electronics code; currently 16 tests. | The tested button, state and timing logic passes. GPIO, actuator motion and the proposed seating interlock are not exercised. |
| CAD | Regenerates the default CAD from current source, compares it with the issued STEP/viewer package, then runs 16 specified nominal clearance/interference poses. | The source/export relationship and those particular geometric expectations agree. It is not an exhaustive collision or tolerance analysis. |
| P14 FEA | Executes all 35 prescribed-contact cases across five independent groups, with fresh results and numerical/source-integrity audits. | The identified P14 mathematical problems solve consistently. Stress screens remain model outputs, not measured failure loads. |
| Summary | Collects job outcomes and evidence into a compact run summary, including failed or missing jobs. | Every required check completed successfully; a failed or missing required result keeps validation failed. |

The five FEA groups are `baseline` (10 cases), `fixture` (8), `partial_adapter` (10), `partial_keeper` (5), and `partial_keeper_terminal_refine` (2). CI runs the full 35-case set.

### Current source versus the P14 model

The controller tests execute current code, without freezing the controller to the historical study. CAD regeneration likewise uses the current checked-out source.

The clearance expectations and FEA contacts are specific to P14. Their manifests guard the relevant inputs against the current checkout. If those inputs change, the checks require a deliberate model/expectation update rather than silently testing stale geometry. A new design must update its contact regions, constraints, dimensional expectations and reference evidence together; changing a hash alone does not make the old analysis applicable.

The longer-stroke, thicker-lug, keyed-seat and interlock demonstrations remain concepts. The existing P14 cases do not become analyses of those concepts merely because the workflow is green. See [the selected concept and physical verification plan](concept-verification-20261029.md).

## Evidence and failure handling

Each run uses fresh output directories. Committed historical JSON files cannot substitute for new execution. Reports record the actual tested checkout identity, input hashes, environment, commands and outcomes. The FEA gate checks expected case completeness and numerical audits as well as solver exit status.

Each job uploads its available logs and reports even when a check fails. Artifacts have separate names per job/FEA group and a **14-day retention period**. Download evidence needed for a longer investigation before it expires. The workflow does not commit generated results over historical evidence.

Failed-job reruns replace the rerun jobs' evidence and reuse successful per-job artifacts from the same GitHub run and checkout.

The jobs use read-only repository access and do not need project secrets. Tests run through ordinary `pull_request` events; deployment and repository-writing automation are separate. Physical measurements remain pending until hardware is actually tested.

## Run locally

Run from a Git checkout of the repository root. Use the workflow's Python and dependency versions in an isolated environment. The controller needs only the Python standard library. CAD uses CadQuery 2.7.0; FEA uses the pinned [analysis requirements](../project/analysis/requirements.txt). On Ubuntu, the Gmsh runtime also needs `libglu1-mesa` and `libxft2`; the workflow records the runner setup.

```bash
python -m pip install -r project/analysis/requirements.txt -r project/cad/requirements.txt
python tools/ci/run_controller.py --output /tmp/n2-ci/controller
python tools/ci/run_cad.py --output /tmp/n2-ci/cad
python tools/ci/run_fea.py --group baseline --out /tmp/n2-ci/fea-baseline
python tools/ci/run_fea.py --group fixture --out /tmp/n2-ci/fea-fixture
python tools/ci/run_fea.py --group partial_adapter --out /tmp/n2-ci/fea-partial-adapter
python tools/ci/run_fea.py --group partial_keeper --out /tmp/n2-ci/fea-partial-keeper
python tools/ci/run_fea.py --group partial_keeper_terminal_refine --out /tmp/n2-ci/fea-terminal-refine
```

Choose fresh output directories for each rerun. FEA requires a nonexistent directory; CAD and controller also accept an existing empty directory. Read each output directory's `summary.json` and logs. Nonzero exit status means the check failed. Keep the Git checkout available so the wrappers can record the tested revision automatically.

## Recorded inputs for the next physical design

The user has selected **2 g loaded release and a fixed nominal 5 V actuator supply**, and described the desired pod and hardpoint sizes. The following numeric packaging values translate those rough comparisons into engineering working targets; they are not final CAD dimensions or user-imposed mass limits. The [next-design brief](next-design-brief.md) and [machine-readable inputs](next-design-inputs.json) record their status and assumptions.

| Item | Recorded decision or working target | Status |
|---|---|---|
| Pod | Usually one Coke-can-sized pod, occasionally two end-to-end; use **Ø70 × 125 mm nominal** and **Ø70 × 250 mm extended** envelopes. | Qualitative size supplied by the user; rounded dimensions are engineering assumptions. Orientation and actual center of mass remain model inputs. |
| Carried mass and material | Retain **0.454 kg total departing mass**, including the adapter and its hardware, and **Bambu PAHT-CF** for the prototype. | Existing provisional project inputs; the larger volume allowance does not increase the mass limit. |
| Loaded release | **2 g straight +Z**, giving **8.9 N** at the carried-mass target. | User-selected release requirement. The separate SF 2 retention proof/screen target remains **17.8 N**. Neither is demonstrated capacity. |
| Mounting footprint | **85 × 55 mm target**, with **100 × 65 mm** available for development. | Engineering interpretation of the user's credit-card comparison and roughly 20% additional linear dimensions. |
| Mechanism volume | A compact body around **60 × 45 × 45 mm**, with a wider mounting flange permitted within the footprint. | Engineering packaging target from the one/two AirPods-case analogy; the analogy specifies size, not measured mass. |
| Installed hardpoint mass | **100 g soft target**. | Engineering optimization goal, not a user-imposed hard limit or a measured assembly mass. |
| Actuator power | **5 V fixed**; provision **3 A supply capacity** and use **4.75 V at the coil** as the proposed minimum-voltage test point. | Voltage selected by the user; capacity and test point are engineering targets. Supply capacity does not force that current through a coil or authorize a longer pulse. |

Keep the **solenoid-first approach**, servo fallback, **preloaded keyed face and broad structural backing**. Round-and-diamond locators remain an alternative. Actual actuator selection still requires matching full-stroke force demand, return force, packaging and thermal limits.

The current P14 bench settings remain **250 ms command pulse, 10 s minimum off-time and a 1.3 A initial bench-supply current limit**. The proposed 3 A supply capacity does not change those settings or qualify another actuator. See the brief for the distinction between current bench limits and next-design electrical targets.

The existing CI continues to check P14; these new design inputs do not turn its passing reference cases into validation of a new mechanism. Develop preload, backing, fit and environmental conditions against the recorded envelope, then update geometry-specific models deliberately. Physical actuator-force, loaded-release, structural, creep, wear and vibration trials remain the hardware work described in the verification plan. Before fabrication, record a print and drying process that can reproduce the existing [PAHT-CF guidance](p14-print-requirements.md).

