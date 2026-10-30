# R5 computational evidence

The [archived local report](evidence/local-run/report.md) and
[summary](evidence/local-run/summary.json) contain **18 actual R5 STEP solves**:
receiver three cases × two meshes; adapter two × two; keeper four × two.
Receiver mesh targets are 1.2/0.9 mm; adapter and keeper 0.65/0.45 mm, with local
refinement and quadratic tetrahedra. See the [engineering assessment](../docs/engineering.md)
for interpretation and exclusions.

The receiver is restrained at captive-nut bearing faces and the adapter at its
payload-mount interfaces. Balanced keeper cases use six rigid-motion gauges
whose reactions must remain negligible. The 12 N blocked-tip fixture is a
separate constrained component screen. Surface audits check the actual CAD load
patches and bearing interfaces.

## Evidence identity and numerical gates

The local run preserves its original STEP inputs, configurations, material,
solver and result identities. Later manufacturing exports contain the same
structural geometry but different STEP timestamps/bytes. Their relationship is
recorded in [geometry-equivalence.json](evidence/local-run/geometry-equivalence.json);
the archived input hashes must not be presented as hashes of the later exports.

Each result must match its part, case, mesh size, material, STEP, configuration
and frozen solver. Gates require force error < 0.0001 N, moment error < 0.001 N mm,
free residual < 10⁻⁷, gauge reaction < 0.0001 N and CAD/mesh volume difference
< 2%. All 18 passed; this is a numerical-status result, not a strength rating.

## Reproduce from the repository root

Use the dependencies and system packages specified in the
[R5 workflow](../../../../.github/workflows/cartridge-validation.yml), then choose
a new output directory:

```sh
python tools/ci/run_cartridge.py --stage all --output /tmp/n2-r5-new-run
```

The wrapper regenerates CAD, compares physical STEP solids and assembly
placements, requires identical oriented print STLs and viewer meshes, audits
load surfaces, executes all component solves and rejects stale or incomplete
results. It records source identities and preserves logs. A local result does
not establish the status of a later remote CI run.

Physical records remain **PENDING** until the
[qualification plan](../docs/qualification.md) is completed. The isotropic PLA
proxy provides no measured PAHT-CF allowable or payload rating.
