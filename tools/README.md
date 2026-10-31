# tools

## check_current_baseline.py: current R5 selection and requirements

```bash
python tools/check_current_baseline.py
python site/build_status.py
```

The first command is a read-only standard-library check of the R5 selection, source parameters, carried-load and proof arithmetic, declared evidence status, package references and current documentation headings. It exits nonzero on disagreement. The second regenerates `STATUS.md` from the selected R5 metadata and parameters. Neither command rebuilds CAD, runs FEA, checks every prose claim or qualifies a load rating. Reproduce current numerical and geometry checks using the [R5 package instructions](../project/designs/r5/README.md).

## Historical P14 workflows

The commands and viewer exports below document P14. Its saved results, material scaling and active-metadata filename are historical; they do not select or validate the current R5 package.

### n2fea.py: one-command variant FEA

```
export LD_LIBRARY_PATH=/tmp/debs/root/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH   # box only (OCC libs)
python3 tools/n2fea.py --lug-t 1.4 --overlap 0.6 --prox bridge --material paht-cf --sf 2 --out /tmp/p14-check
```

1. Builds receiver and adapter STEP with `n2variant.py`. The example selects the P14 bridged proximal roof, 1.4 mm lug and 0.6 mm overlap; `--prox p13` retains the older one-sided roof for historical studies.
2. Writes solver configs for the standard cases:
   - straight +Z
   - 45° and 90° in XZ and YZ, both signs
   - receiver `centered` (both roofs) and `distal_ineffective`
   - adapter keeper-floor load
3. Runs the frozen repo solver. The receiver mesh is h 0.8 and the adapter mesh is h 0.55, about 3 min on 8 cores.
4. Writes `summary.json` and prints the stress screens, worst sign per direction. Legacy output keys/labels `fail_N` and `rating_N` mean the calculated threshold crossing and its division by SF; they do not establish physical failure or a working-load rating.

Options:
- `--prox`: `p13` (cantilever proximal roof) or `bridge` (P14: roof bridged to X 31.7, anchored on both sides of the keeper channel).
- `--material`: `pla` (31 MPa Z) or `paht-cf` (47 MPa Z). The screen is the PLA stress-threshold crossing × (Z TDS / 31), as in docs/provisional-load-rating.md. This scales all strength thresholds by a tensile-data ratio; it does not run an anisotropic PAHT-CF model.
- `--wall-bearing`: adds an idealised zero-clearance restraint where the lug face would bear on the receiver slot wall. The receiver side of that reaction is **not** modelled.
- Python with cadquery/scikit-fem/gmsh: set `N2_PY` (default `/workspace/n2env/bin/python`).

Limits:
- This is a linear, prescribed-traction screen, not a contact solve.
- The roughly 7% variation discussed in older studies is not a P14 convergence bound. A P14-specific mesh study is still required before relying on the margin.
- The receiver uses ideal continuous full backing. Actual host fasteners and airframe compliance are not verified by this screen.
- The keeper and actuator are not rebuilt. `stroke_needed_mm` is approximately overlap + lug + 1.0 mm.

### overhang.py: support check from the solid

```
python3 tools/overhang.py project/cad/N2/N2_receiver.step --up=+Z [--angle 45] [--bridge 10] [--json out.json]
```

Use `--up=-X` (with `=`) for negative axes. `--up` is the part axis that points away from the bed. Each face that faces down more than `--angle` from vertical, and is not on the bed, is classed:
- `small-curve`: cylinder Ø ≤ 3.5 mm (hole tops, fillets); classified as a candidate for printing without support, requiring slicer/print verification.
- `bridge`: flat, ≤ `--bridge` mm across, and anchored by walls at both ends of that span.
- `sliver`: narrower than 0.4 mm (one extrusion line).
- `SUPPORT`: anything else, including one-sided cantilevers. Exit code 1 if any.

It works on the STEP; the `*_print.stl` files are the same solids rotated. It is a geometry check, not a slicer: confirm bridges in the slicer.

Print orientations used (P14): receiver `+Z`, keeper `+Z`, adapter `-Z` (flange down), clamp `-Z`.

### export_fea_web.py: FEA fields to the web viewer

```
/workspace/n2env/bin/python tools/export_fea_web.py --run <n2fea.py out dir> --keeper <keeper solve dir> [--material paht-cf]
```

Reads the solver `*_fields.npz`, keeps the outer surface of each tet mesh and writes the failure index per 1 N at every surface vertex (max over touching elements) to `web/public/fea/`. The viewer multiplies it by the chosen load and 31 / Z_TDS to get utilisation. The case list is `CASES` at the top. Re-run it after any new FEA run you want on the site (the npz files are not committed).

Utilisation 1.0 is an assumed stress-limit crossing, not a demonstrated breaking point. The retained JSON names `fail_N` and `rating_sf2_N` have explicit unvalidated-screen meanings in `index.json`; the UI displays them as a screen and arithmetic allowance. Requirement loads come from `project/cad/N2/active_metadata.json`. Changing the material or geometry requires reviewing those requirements and result references; a fresh export does not transfer qualification.
