# R5 print requirements

The active package is **R5**, with printed body, keeper and adapter. Follow the revision-specific [R5 print and inspection recipe](../project/designs/r5/PRINTING.md) and its generated `out/*_print.stl` files. Assembly-coordinate meshes are not the prescribed build orientation.

Record printer, filament lot, drying/conditioning, nozzle, layers, temperatures, toolpaths, build axes and inspected dimensions. Inspect solid material in every retaining section and all bridges/guide surfaces before assembly. Nominal clearances and supplier strength data do not substitute for measured fit or process qualification.

PAHT-CF is the candidate structural print material. PLA may be used for explicitly identified fit trials, which do not inherit PAHT-CF analysis or test status. No material/process combination has an assigned working-load rating.

The [historical P14 print requirements](p14-print-requirements.md) apply only to the earlier four-part solenoid package. Do not use its STLs or lug/keeper inspection dimensions for R5. Current targets are in [requirements](requirements.md); physical acceptance is in [the R5 bench plan](test-plan.md).
