# tools

## n2fea.py: one-command variant FEA

```
export LD_LIBRARY_PATH=/tmp/debs/root/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH   # box only (OCC libs)
python3 tools/n2fea.py --lug-t 3.4 --overlap 2.0 --material paht-cf --sf 2 [--wall-bearing]
```

1. Builds receiver and adapter STEP with `n2variant.py`. This is the P13 geometry with two parameters: lug thickness and distal overlap.
2. Writes solver configs for the standard cases:
   - straight +Z
   - 45° and 90° in XZ and YZ, both signs
   - receiver `centered` (both roofs) and `distal_ineffective`
   - adapter keeper-floor load
3. Runs the frozen repo solver. The receiver mesh is h 0.8 and the adapter mesh is h 0.55, about 3 min on 8 cores.
4. Prints failure loads and ratings, worst sign per direction. Writes `summary.json`.

Options:
- `--prox`: `p13` (cantilever proximal roof) or `bridge` (P14: roof bridged to X 31.7, anchored on both sides of the keeper channel).
- `--material`: `pla` (31 MPa Z) or `paht-cf` (47 MPa Z). The failure load is the PLA-screen failure × (Z TDS / 31), as in docs/provisional-load-rating.md.
- `--wall-bearing`: adds an idealised zero-clearance restraint where the lug face would bear on the receiver slot wall. The receiver side of that reaction is **not** modelled.
- Python with cadquery/scikit-fem/gmsh: set `N2_PY` (default `/workspace/n2env/bin/python`).

Limits:
- This is a linear, prescribed-traction screen, not a contact solve.
- Expect about ±7% mesh scatter on the adapter. Compare variants run with this tool, not with older archived numbers.
- The keeper and actuator are not rebuilt. `stroke_needed_mm` is approximately overlap + lug + 1.0 mm.

## overhang.py: support check from the solid

```
python3 tools/overhang.py project/cad/N2/N2_receiver.step --up=+Z [--angle 45] [--bridge 10] [--json out.json]
```

Use `--up=-X` (with `=`) for negative axes. `--up` is the part axis that points away from the bed. Each face that faces down more than `--angle` from vertical, and is not on the bed, is classed:
- `small-curve`: cylinder Ø ≤ 3.5 mm (hole tops, fillets); prints without support.
- `bridge`: flat, ≤ `--bridge` mm across, and anchored by walls at both ends of that span.
- `sliver`: narrower than 0.4 mm (one extrusion line).
- `SUPPORT`: anything else, including one-sided cantilevers. Exit code 1 if any.

It works on the STEP; the `*_print.stl` files are the same solids rotated. It is a geometry check, not a slicer: confirm bridges in the slicer.

Print orientations used (P14): receiver `+Z`, keeper `+Z`, adapter `-Z` (flange down), clamp `-Z`.

## export_fea_web.py: FEA fields to the web viewer

```
/workspace/n2env/bin/python tools/export_fea_web.py --run <n2fea.py out dir> --keeper <keeper solve dir> [--material paht-cf]
```

Reads the solver `*_fields.npz`, keeps the outer surface of each tet mesh and writes the failure index per 1 N at every surface vertex (max over touching elements) to `web/public/fea/`. The viewer multiplies it by the chosen load and 31 / Z_TDS to get utilisation. The case list is `CASES` at the top. Re-run it after any new FEA run you want on the site (the npz files are not committed).
