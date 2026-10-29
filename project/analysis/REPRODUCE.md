# Reproduce or inspect the N2 analysis

## Fast verification without an FE solver

From the focused project's top-level directory:

```sh
python analysis/verify_package.py
python analysis/reproduce.py --verify-only
python analysis/reproduce.py --list
```

These commands use Python's standard library. They do not install dependencies or run FEA. `verify_package.py` checks all frozen input and archived output hashes, copies the necessary input package to an independent temporary directory, prepares all issued cases there, and verifies that the paths resolve locally and that every numerical/case/mesh field is unchanged. It also reproduces the separate historical N2 friction arithmetic and checks its equilibrium. The report is `analysis/audits/portability_check.json`.

All 11 entries in `input_manifest.json` must pass before numerical replay. The 105 raw output files have their own `archive_manifest.json`. The latter verifies a faithful extraction of existing results; it is not evidence that a solver was run again.

To prepare a specific model without importing NumPy, Gmsh, or any numerical dependency:

```sh
python analysis/reproduce.py --model N2_keeper --sizes 0.55 --prepare-only --output /tmp/n2_keeper_prepared
```

The destination **must not already exist**. Use a new destination each time. The script copies the frozen final solver to `engine/solver.py`, copies the frozen material beside it, copies the required STEP solids into `package_inputs/`, and writes remapped configuration files into `configs/`. It records hashes and unchanged case metadata in `replay_manifest.json`.

The original `step_path` strings inside frozen configuration files deliberately retain their historical source paths. **Use `reproduce.py`; do not invoke the frozen driver directly on an unremapped configuration.** The wrapper resolves them through `input_manifest.json` and verifies the geometry hash. No prior workspace or original multi-design project is needed.

## Optional numerical replay

This package preserves inputs for a future full replay. P11 did not run that replay. Install the pinned requirements in an isolated Python 3.12 environment and ensure Gmsh's native libraries can load:

```sh
python3.12 -m venv /tmp/n2_fea_env
/tmp/n2_fea_env/bin/python -m pip install -r analysis/requirements.txt
/tmp/n2_fea_env/bin/python analysis/reproduce.py --model N2_keeper --sizes 0.55 --case centered --output /tmp/n2_keeper_replay
```

The numerical solver may need substantial CPU time and memory. Start with the keeper if checking an installation. A complete replay of all issued N2 models, mesh recipes, and cases is:

```sh
/tmp/n2_fea_env/bin/python analysis/reproduce.py --model N2 --output /tmp/n2_all_replay
```

This schedules **10 mesh/run steps and 39 cases**. Filtering `--sizes 0.4` selects the issued local receiver refinement, not a newly invented uniform mesh. A targeted receiver local-refinement replay is:

```sh
/tmp/n2_fea_env/bin/python analysis/reproduce.py --model N2_receiver --sizes 0.4 --output /tmp/n2_receiver_local_replay
```

All replay results go under the new destination's `configs/results/`; logs and `replay_manifest.json` remain alongside them. The wrapper protects the supplied reference outputs from overwrite. It uses one BLAS/OMP thread. It does not download models or install software automatically.

### Recorded environment

The P8 manifest records Python 3.12.14 on x86-64 Linux and the following pinned packages: NumPy 2.3.5, SciPy 1.17.0, Gmsh 4.15.2, scikit-fem 12.0.2, pyamg 5.3.0, meshio 5.3.5, and Matplotlib 3.10.8. They are listed in `requirements.txt`.

The Gmsh wheel can require native Linux X/GL libraries even for headless meshing: `libXft.so.2`, `libGLU.so.1`, `libGL.so.1`, `libXrender.so.1`, `libXcursor.so.1`, `libXfixes.so.3`, `libXext.so.6`, `libfontconfig.so.1`, `libXinerama.so.1`, and `libX11.so.6`. Install missing system dependencies through the normal process for the target operating system. They are not bundled. The wrapper checks package versions and performs a native Gmsh import before solving. `--allow-version-mismatch` explicitly records a nonmatching environment; it does not make its result equivalent to the issued environment.

## Regenerate tables and plots

```sh
python analysis/build_summary.py
python analysis/plot_convergence.py
```

The first command is standard-library postprocessing of the archived N2 selection and its 39 result files. It checks the crossing calculation and component minima, then regenerates `summary.json`, `assembly_results.csv`, and `results.csv`. The second uses Matplotlib to regenerate only the convergence PNG/SVG. Neither command runs an FE solve. The original stress figure is retained unchanged.

## Inspect the numerical fields

Each `results/N2_<component>/h<size>/` directory contains one `mesh.msh`, one `mesh.npz`, case JSON files, and matching `<case>_fields.npz` files.

| NPZ entry | Contents |
|---|---|
| `points_mm`, `tet4` | Linear tetrahedral boundary/mesh vertices and zero-based connectivity |
| `quadratic_points_mm` | P2 displacement-node coordinates |
| `displacement_mm` | XYZ displacements at those P2 nodes |
| `mean_stress_voigt_MPa` | Element-mean tensor components in order xx, yy, zz, xy, yz, xz |
| `raw_element_metrics` | Elementwise maxima: tensile, compressive, maximum shear, von Mises, failure index |
| `element_volume_mm3` | Element volume |
| `fixed_dofs` | Constrained vector DOF indices |
| `force_vector_N`, `reaction_vector_N` | Applied nodal force and residual reaction vectors |
| `r0.4_failure_index`, `r0.8_failure_index` | Uncalibrated volume-averaged diagnostics; not capacity estimates |

For example, with NumPy installed:

```python
import numpy as np
d = np.load("analysis/results/N2_receiver/h0.55/centered_washers_fields.npz")
print(d.files)
print(d["raw_element_metrics"][:, 4].max())
```

The case JSON is the authoritative scalar record for its mesh and boundary audit. The copied component-level `configuration.json` and `run_summary.json` can reflect the last run written in the original workstream; for exact issued-run mapping use `input_manifest.json`, frozen `inputs/configs/`, and the individual `h*/<case>.json` files.

## Comparison and provenance limits

Do not compare only a plot or a single maximum. Check STEP/config/material hashes, case definitions, selected patch areas, load moments, fixture definitions, reaction/gauge residuals, mesh volume and quality, compliance, displacement, and the local stress index. Keep the issued local-refinement recipe separate from the baseline recipe.

The frozen final solver hash is `6d9b172de0fca72755d74c663b9eba88c9d2bce19719962deb9385a2e644a64c`. It is the authoritative implementation for **current** replay. Original result `driver_sha256` fields record the file at serialization and cannot establish the exact code bytes already imported by each historical process. Older executing source snapshots were not retained. Thus successful package verification is not a claim of bit-identical reproduction of all historical FE solves. See `input_manifest.json.driver_history` and `METHOD.md`.

The generic implementation benchmark in `audits/prior_implementation_benchmark.json` is a reference to earlier archived verification. Its full inputs remain in the P8 archive; it is not an additional active design in this N2 package or a physical N2 test.
