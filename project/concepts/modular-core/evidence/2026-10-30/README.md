# Local development evidence — 2026-10-30

This is the completed **local** study of the final inline-actuator modular core. It is a recorded design-analysis result, not a claim that GitHub Actions has run, and not a physical qualification or payload rating.

- [Generated analysis report](modular-simulation.md): input assumptions, finest-mesh results, mesh sensitivity, release-force analysis and limitations.
- [Compact summary](modular-core-summary.json): all 29 component/mesh case rows and convergence comparisons.
- [Input manifest](input-manifest.json): exact source STEP, solver, runner, material and contact-configuration hashes, package versions, load assumptions and solve plan.
- [Independent evidence-gate result](local-evidence-gate.json): all 29 case results passed the same numerical, identity and provenance checks used by the new workflow.
- [Actuator selection snapshot](actuator-selection.md): candidate specifications and the unresolved force, fit and thermal requirements at the time of this run.
- [Solve-era runner snapshot](simulation/provenance/solve-era-runner.py.txt) and [later reporting changes](simulation/provenance/reporting-only-source-diff.patch): the recovered orchestration source and the changes made while refining the report.

The final preparation/reporting runner SHA-256 is `2b8662df8a95edab644eb3e02f4a74981dc3681de0507d360999c85a58fbc650`; the geometry-configuration SHA-256 is `19d2479e3670a1a7e2741a90620164ca22124ffd3dceb1dc0a8fbab4059f392d`. The solve-era orchestration snapshot has SHA-256 `8c0fc7f6541493ea6004dac5939e6bc3479277564cb5937cdbb3753967efb777`. It was recovered from a contemporaneous CI staging copy: the original local launcher did not record its own hash at process start. Later source edits refined plots, averaging diagnostics and provenance, without changing the executed STEP bodies, numerical solver or case configurations. The manifest distinguishes these versions explicitly; future Actions runs record a single immutable runner at preparation, launch and reporting.

The actual local STEP hashes appear in each summary row and the manifest. The independent check also verified those hashes against the final source STEP files and compared every summary row with its solved case JSON and current configuration hash.

Only compact evidence is committed here. The original manifest preserves local development paths as historical provenance; those paths are not portable execution inputs. Individual case JSON, plots and raw fields remain with the full study/Actions artifacts rather than being duplicated in this repository. To regenerate the complete set from this checkout, use the commands in the [study README](../../README.md).

The Actions workflow does **not** load, copy or accept this folder as solve evidence. Each run creates a fresh workspace, builds new physical CAD, creates new STEP-linked configurations, executes the solver and checks its own outputs. STEP file hashes can differ between CAD exports because file metadata can change; identity checks are performed within each run, against that run's actual generated files.

Numerical checks passed in this local record. Stress mesh sensitivity remains visible and unresolved for some cases. Isotropic solid PLA comparison properties, prescribed contacts and rigid bolt-annulus fixtures cannot establish the behavior of an actual anisotropic print, a compliant aircraft mount or a loaded release mechanism.
