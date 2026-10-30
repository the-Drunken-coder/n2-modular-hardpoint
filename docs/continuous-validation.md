# Continuous engineering validation

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

## Three decisions for the next physical design

Carry forward the existing user-selected inputs unless the user changes them: **0.454 kg (1 lb) total carried mass, 2 g, straight +Z loading, SF 2, and Bambu PAHT-CF for the prototype**. These remain provisional design inputs, not demonstrated capacity. See [requirements](requirements.md), [print requirements](print-requirements.md) and [active metadata](../project/cad/N2/active_metadata.json). Mass and material do not need to be chosen again to start this work.

The remaining questions affect the next design and its physical acceptance tests; they do not prevent CI from checking the existing reference now.

| Decision | Information needed | Recommendation |
|---|---|---|
| Pod geometry and mounting | Rough pod dimensions, center-of-mass offset from the mounting face/centerline, and the available attachment face or backing structure. | Size the seat and backing around the actual pod. Offsets or transverse loads require extending the current straight-pull assessment rather than assuming it covers moments. |
| Loaded release | Must it release at the full 2 g design load, or may release be limited to steady 1 g conditions? | Prefer release throughout the agreed service envelope if the mass/space budget permits; record any narrower release envelope explicitly. |
| Actuator envelope and supply | Maximum installed hardpoint mass and footprint; available actuator voltage/current. Is 5 V fixed, or is another regulated voltage acceptable? | Keep the selected solenoid-first approach and servo fallback. Choose the actuator only after its full-stroke force requirement and packaging limits are known. |

For the interface, start with the **preloaded keyed face and broad structural backing**. Keep round-and-diamond locators as an alternative when repeatable remounting accuracy justifies them; this recommendation does not require another immediate user decision.

Before fabrication, confirm access to a printer, drying equipment and wear-resistant hardware that can reproduce the existing PAHT-CF print guidance. Record the actual process and matching specimens then; this is a fabrication check, not a reopened material choice.

The seating preload, backing, fit limits and environmental test levels can then be developed around those answers. Actual actuator-force, loaded-release, structural, creep, wear and vibration trials remain the hardware work described in the verification plan.
