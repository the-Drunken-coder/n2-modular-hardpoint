# R4 printing and finishing

This is the selected **prototype process**, not a qualified production process. Use the print-oriented STL for each physical body; the assembly STEP uses installation coordinates. Integral ribs, guide roofs, locating keys and lug shoulders stay in their parent print. The fit coupon is a process aid and is not an assembly component.

## Material and equipment

Use **Bambu PAHT-CF**, an enclosed FDM printer and a hardened 0.6 mm nozzle. The [manufacturer data sheet](https://store.bblcdn.com/7166b20bc68f4c87b32c972b856eeb4b.pdf) permits 0.4–0.8 mm nozzles, recommends 0.6 mm, specifies drying at 80 °C for 8–12 hours, and calls for dry storage/printing below 20% RH. Its nozzle and bed ranges are 260–290 °C and 80–100 °C. Use the applicable printer and filament manufacturer instructions for the actual machine.

The R4 starting recipe selects 12 hours of drying, 285 °C nozzle, 90 °C bed, 0.20 mm layers, 0.62 mm nominal extrusion width, six perimeters, six top/bottom layers and 100% alternating rectilinear infill. Use 40 mm/s external perimeters, 60 mm/s internal/infill, 20 mm/s bridges and first layer, 20% ordinary part cooling and up to 40% for bridges. These are engineering starting settings within the material's published range; they have not been physically validated. The machine-readable recipe is [print-process.json](../manufacturing/print-process.json).

## Orientation and supports

| Body | Build orientation | Critical surfaces |
|---|---|---|
| Receiver | Flat host mounting face on the bed | Keeper channel, locating keys, pad-pocket floors and mounting lands |
| Payload adapter | Broad payload mounting face on the bed | Lug bore and its lower retaining floor, key slots, pad contact surfaces |
| Keeper/yoke | Broad Y side on the bed, as exported | Straight bar bearing faces, follower-slot wall and transition into the yoke |

Inspect the slicer's individual layers before printing. The receiver includes enclosed guide roofs and local deck overhangs. Use removable support only where the generated overhang report and actual layer preview require it; block supports from the keeper's final sliding/contact surfaces where bridging can produce the accepted geometry. A face-overhang report is advisory and does not prove that the slicer can reach or remove a support. Confirm removal through the open mechanism/service faces. If a required support cannot be removed without scoring a bearing face, reject that setup and revise the orientation or geometry rather than leaving material in the channel.

A narrow bridge over the lug bore must be continuous and free from sag that infringes the drawing's inspection envelope. The keeper/yoke's side-on orientation puts the slot outline in the build plane and avoids a tall unsupported yoke. Brim is permitted on nonfunctional edges; remove it fully. Do not use a raft that changes a datum face without accounting for it in inspection.

## Print, inspect, finish

1. Print the fit coupon from the same dried spool with the selected nozzle, layer settings and orientation. Record printer, slicer/version, material lot, drying history and ambient condition.
2. Measure the coupon and the actual parts against [interfaces and acceptance](interfaces.md) and the generated inspection table. Use local hole/slot compensation only after measurement. A global scale adjustment changes key spacing and mounting pitches as well as fit.
3. Remove support and brim, deburr edges and clear fastener bores with the specified drill/reamer. Preserve the retaining floor, lug sidewalls and keeper bearing sections. Do not free a binding assembly by arbitrarily thinning a loaded feature.
4. Check flatness of both mounting datums. Reject visible layer separation, incomplete extrusion, gouged bearing faces, cracked holes, damaged bridges or a warped mounting face.
5. Trial fit the bare keeper through the entire guide with the payload removed, then fit the adapter without pads. It must move through the complete specified stroke without forcing the servo or sanding the mechanism into an undocumented geometry.
6. Install the pads and purchased drive hardware only after dimensional acceptance. Repeat manual travel and measure actual preload and extraction force before powered testing.

Retain the actual slicer project and G-code with the specimen record. No machine-specific G-code is issued here because it must match the selected printer, firmware and material setup. No actual slicing, extrusion or physical printing has been recorded for this revision.

## Strength interpretation

The structural calculation uses a documented isotropic solid PLA comparison model. A 100% infill instruction does not make printed PAHT-CF isotropic, eliminate internal voids or validate that material model. Strength, moisture sensitivity, creep, temperature response and layer adhesion remain separate specimen tests. Do not use a supplier tensile-strength ratio to turn the PLA results into a PAHT-CF payload rating.
