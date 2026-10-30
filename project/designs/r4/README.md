# N2 R4 — standalone, printable hardpoint

**R4 is the complete development proposal for the next hardpoint.** It carries forward the selected preloaded keyed seat, stronger receiver, supported 3.5 mm retaining lug and longer withdrawal. The receiver has its own structural load path and four mounting interfaces. Three structural prints form the receiver, payload adapter and keeper/yoke. A specified Hitec HS-65MG servo drives the keeper directly through a purchased horn and a smooth catalog sleeve; no release sear is added.

This package defines the parts, interfaces, hardware, print process, assembly operations, electrical connections, controller, simulations and physical acceptance procedures. **It is a bench-prototype design, not a flight-qualified product or an assigned payload rating.** Physical measurements cannot be replaced by a green software workflow. The committed bench records remain unfilled and their status remains `pending`.

## Review and build map

| What to inspect | Authoritative material |
|---|---|
| Why this is the selected design | [Design decisions](docs/decisions.md) |
| Trace requirements to evidence | [Requirements and verification map](docs/requirements.md) |
| Rotate, explode and highlight real parts | [Interactive viewer](viewer/index.html); serve it over HTTP as described below |
| Nominal geometry and selected parameters | [CAD source](cad/), [parameters](cad/parameters.json), [assembly STEP](manufacturing/assembly.step) |
| Physical parts, dimensions and fit limits | [Manufacturing package](manufacturing/), [interface specification](docs/interfaces.md) |
| Mass and installed space | [Mass and operating envelope](docs/mass-and-envelope.md) |
| Buy hardware | [Mechanical BOM](manufacturing/bom.csv), [electrical BOM](electrical/bom.csv) |
| Print and finish | [Print instructions](docs/printing.md), [process recipe](manufacturing/print-process.json), oriented print STLs in the manufacturing package |
| Put it together | [Assembly and inspection](docs/assembly.md) |
| Wire, calibrate and command the actuator | [Actuation](docs/actuation.md), [electrical instructions](electrical/README.md), [wiring diagram](electrical/wiring.svg), [netlist](electrical/netlist.json) |
| Understand actual simulated loads and limitations | [Analysis package](analysis/README.md), [recorded results](analysis/evidence/report.md), and source/configuration hashes |
| Review completed checks and assembly images | [Verification record](docs/verification.md) |
| Qualify a manufactured prototype | [Physical acceptance plan](docs/qualification.md), [machine-readable bench plan](analysis/bench-plan.json) and record validator |
| Run the entire computation from a clean checkout | [R4 GitHub Actions workflow](../../../.github/workflows/refined-design-validation.yml), [runner](../../../tools/ci/run_refined_design.py) |

Paths in this table are repository files, not outside application state. The PR contains the viewer source and its local dependencies as well as the engineering code.

## Design basis

| Input | R4 basis |
|---|---|
| Departing mass | 0.454 kg including adapter and departing fasteners |
| Loaded release target | 2 g: 8.9044 N straight extraction until disengagement |
| Sacrificial fixture target | 17.8089 N, separately assessed; not a demonstrated capacity |
| Supply | Fixed nominal 5.00 V; servo must remain within 4.80–5.10 V at its terminals in accepted tests |
| Actuator | Hitec HS-65MG / 32065S, 12.5 g excluding horn as the supplier PDF basis |
| Drive | Modified supplied MS-I25 horn, 7.5 mm pin radius, catalog stainless sleeve, integral keeper/yoke |
| Nominal operating motion | 0–105.466° crank rotation produces 9.5 mm keeper withdrawal; 10.5 mm is the mechanical travel envelope |
| Retaining lug | 3.5 mm along the withdrawal axis; widened sidewalls and reinforced roots |
| Host mounting footprint | 100 × 55 mm receiver base, four M3 interfaces |
| Prototype print material | Dried Bambu PAHT-CF with the specified proposed print orientations |
| Numerical material | Isotropic solid PLA comparison model; no PAHT-CF strength scaling |
| Equipment lock, aircraft backing, twin installations and payload electrical interface | Deliberately outside this revision, as selected by the user |

The CAD and inspection documents govern the actual dimensional details. Supplier-based geometry is identified as such, including the HS-65 family CAD supplied from the MG product page under an HB filename. The receiving inspection explicitly checks the purchased MG case, mounts, horn and travel before assembly.

## Reproduce the computation

Use Python 3.12 and the pinned repository dependencies. On Ubuntu the native prerequisites are `libgl1`, `libglu1-mesa`, `libxft2` and `libxrender1`.

```sh
python -m pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt
python -m unittest discover -s tests/ci -p 'test_refined_design*.py' -v
python -m unittest discover -s project/designs/r4/electrical/firmware -p 'test_*.py' -v
python tools/ci/run_refined_design.py --stage all --output /tmp/n2-r4-run
```

Choose a **new output directory** for each full run. The runner rejects existing output so an old result cannot substitute for a fresh build/solve. Individual `cad`, `receiver`, `adapter`, `keeper` and `report` stages are available for inspecting a failed stage. The workflow regenerates actual CAD before preparing actual-STEP finite-element configurations. It records source, configuration, geometry, execution and result identities and checks equilibrium, residuals, mesh volume and gauge reactions. Mesh sensitivity is reported separately from those consistency checks.

No hardware is actuated by the workflow. The MicroPython runtime is a separate, disabled-until-calibrated bench deliverable.

## Open the viewer locally

Serve the repository root with an HTTP server; for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/project/designs/r4/viewer/`. The page has no CDN dependency. It loads the committed physical meshes, drives the prescribed linkage transforms, keeps each printed body together in the exploded view, and links the CAD, drawings, instructions and actual evidence. A Canvas fallback supports browsers without WebGL. The animation illustrates prescribed movement; it does not predict release success or dynamic separation.

The repository web build copies this entire review package to `r4/` alongside the frozen P14 viewer. The R4 page is accessible at `r4/viewer/` in the built site, including the downloadable manufacturing files.

## Revision and evidence boundaries

R4 includes the earlier modular-core work in this new PR, so it does not depend on separately merging PR #10. The R3 study remains under `project/concepts/modular-core` with its own input and result identities. P14 CAD, its original solver inputs and its reference checks remain intact. The top-level repository identifies R4 as current development and P14 as the retained issued reference; their numerical results are not interchangeable.

After changing load-bearing geometry, regenerate all affected meshes, drawings, inspection metadata and FEA. After changing the actuator, horn radius, drive axis, guide span, preload or fits, rerun the motion/force/tolerance checks as well. Preserve a measured specimen's revision, material batch and process records rather than overwriting its identity with later CAD.
