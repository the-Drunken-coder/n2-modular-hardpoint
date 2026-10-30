# R5 cartridge CAD

The outside box is the design constraint: **85.6 × 54 × 20 mm**. The retained receiver, enclosure, actuator, linkage, captive nuts and modeled lead route fit inside it. The payload adapter and its attached hardware depart below the box. The flexible lead continues out of the top into the aircraft.

`build.py` is the geometry source. `parameters.json` is a generated dimensional record, not an independent input that silently changes the source. `manufacturing.py` writes the drawings, inspection table, BOM and print instructions from the same revision.

## Regenerate

With the project CAD dependencies installed:

```bash
python project/designs/r5/cad/build.py
```

Use `--out /absolute/output/directory` for an isolated build. The script writes nominal CAD checks before exporting, exits nonzero if a check fails, and removes obsolete mesh files from its generated mesh directory. Every displayed physical part has a mesh entry in `assembly.json`.

- `manufacturing/assembly.step` contains the cartridge and departing adapter.
- `manufacturing/wing-installation.step` adds the illustrative wing, frame, access panel, washers and four installation screws.
- `manufacturing/parts/` contains individual editable STEP files and oriented print STLs.
- `manufacturing/drawings/` contains six drawing sheets and a full-scale cutout template.
- `manufacturing/geometry.json` defines the actual load-face coordinates for component analysis.
- `manufacturing/clearance.json` records checks performed on this exact generated geometry.

The display meshes are derived from these solids. Manifest bounds use exact BRep surface extrema, not the cached display triangulation.

## Physical printed parts

There are six prints: structural receiver, protective shell, upper lid, guided keeper/yoke, departing adapter/lug, and servo clamp. Ribs, locating features and nut bosses remain integral to their parent print in the exploded view.

The keeper is installed from the right with its M2 stop stud removed. Insert the captured M2 nut and screw afterwards. The stud head meets two integral receiver walls; the mechanical travel limit is 7.3 mm. This stop is not an equipment lock.

## Interfaces

The host opening is **86.2 × 54.6 mm**, giving 0.3 mm nominal clearance per side. Four M3 screws enter from above through the host frame and engage captive nuts inside the receiver. Their XY positions are:

| Fastener | X | Y |
|---|---:|---:|
| Front left | 10.0 | 10.0 |
| Front right | 75.6 | 10.0 |
| Rear left | 10.5 | 44.8 |
| Rear right | 75.1 | 44.8 |

The rear pair is staggered inward to preserve the casing-post clearance while leaving room for keeper installation. Use the supplied template or CAD, rather than assuming a rectangular bolt pattern. The host frame underside is at Z20. The example uses a 3.5 mm frame, 0.5 mm washers and M3×12 screws.

The default M3×12 payload screws project 8.2 mm below the adapter. The payload must supply four metal M3 threaded attachments with at least 3 mm effective engagement and at least 8.7 mm unobstructed depth, or through holes. These payload-owned attachments are not modeled and their mass counts within the 454 g departing-mass input.

## Actuation and measured fit

The MG90D body is represented by a conservative supplier-dimension envelope. The exact output-shaft offset, horn details, supplied screw and lead exit are receiving measurements. The padded clamp avoids dependence on unpublished mounting-ear hole coordinates.

The crank radius is 5.5 mm. A 15° retained position and 100° release position give 6.2677 mm of nominal withdrawal. The reserved 105° motion gives 6.7361 mm; it is not the nominal commanded endpoint. The follower is a smooth 4 mm OD × 2.1 mm ID × 6 mm aluminum sleeve. Confirm that the supplied horn has a sound usable hole at the required radius, or enough intact material for a correctly placed hole without merging adjacent holes.

The modeled lead is a **flat 4.0 × 1.6 mm ribbon allowance**, with 3 mm centerline bends. It leaves the shaft-side end of the case, passes through the cradle relief, rises above the servo behind the clamp, and exits through matching lid and frame openings. Its factory exit and dimensions must be inspected; the CAD route is not a measurement of a purchased harness.

## What the checks establish

The generator checks valid connected printed solids, the retained outside envelope, assembled solid intersections, swept linkage motion, keeper float, keeper insertion, pad support and fastener clearance, payload departure, module insertion into the example wing, mounting screw paths and top tool access. Receiver and keeper contact faces are defined for downward payload load: the lug-window roof bears on the keeper top, and the keeper bears on the guide floor.

The wing is a one-off installation demonstration. Its skins, local frame, ribs and access-panel lip illustrate the installation sequence. They are not an aircraft structural design. Nominal CAD checks do not establish printed-material strength, a payload rating, actuator torque, loaded release or flight suitability.

## Loaded rocking clearance

After the keeper loses its distal support, a rigid bar can rock between the proximal guide floor and the far guide roof. The nominal first-roof-contact angle satisfies `20.7*tan(alpha) + 3/cos(alpha) = 3.6`, giving **1.656812°**. A pure vertical translation check does not cover this pose.

The lid therefore has an internal relief at **X53–74, Y36.5–40.9**, with its underside ceiling at **Z19.0**. The outside stays at Z20, leaving **1.0 mm of lid material**. The checks sweep this rocking pose, including lateral guide float, through retained withdrawal and a conservative post-release envelope. A prescribed **0.01 mm axial adjustment** accommodates the slightly inclined yoke slot within its existing **0.4 mm nominal total backlash**. These are geometric poses, not a coupled contact or equilibrium solution; the printed assembly still needs a loaded-release check.
