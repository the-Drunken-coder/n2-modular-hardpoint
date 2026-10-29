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
- `--material`: `pla` (31 MPa Z) or `paht-cf` (47 MPa Z). The failure load is the PLA-screen failure × (Z TDS / 31), as in docs/provisional-load-rating.md.
- `--wall-bearing`: adds an idealised zero-clearance restraint where the lug face would bear on the receiver slot wall. The receiver side of that reaction is **not** modelled.
- Python with cadquery/scikit-fem/gmsh: set `N2_PY` (default `/workspace/n2env/bin/python`).

Limits:
- This is a linear, prescribed-traction screen, not a contact solve.
- Expect about ±7% mesh scatter on the adapter. Compare variants run with this tool, not with older archived numbers.
- The keeper and actuator are not rebuilt. `stroke_needed_mm` is approximately overlap + lug + 1.0 mm.
