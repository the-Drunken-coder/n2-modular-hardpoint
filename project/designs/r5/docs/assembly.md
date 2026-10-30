# R5 assembly and wing installation

The retained cartridge is **85.6 × 54 × 20 mm**. Build and inspect it on the
bench, then insert the complete cartridge upward through the aircraft's lower
opening. The top access panel exposes four screws into captive nuts in the
structural receiver. The servo is installed in the cartridge before the
cartridge enters the wing.

Use the [interactive viewer](../viewer/index.html), [assembly STEP](../manufacturing/assembly.step),
[wing installation STEP](../manufacturing/wing-installation.step),
[BOM](../manufacturing/bom.csv) and [dimensioned drawings](../manufacturing/drawings/index.html)
together. The STEP and assembly manifest define geometry; purchased-part
reservations must be checked against the actual components.

## Physical parts

| Printed part | Function and service access |
| --- | --- |
| R5-01 receiver core | One structural print containing the keyed socket, keeper guide, cradle supports, ribs and four M3 mounting bosses. |
| R5-02 protective shell | Perimeter enclosure and lower retention ledge; remove it to reach the side-loaded nuts. |
| R5-03 upper lid | Four M2 screws close the cartridge. The mounting screws and cable pass through separate openings. |
| R5-04 keeper | One print containing the sliding bar and open-top follower yoke. A separate removable stop stud permits installation into the guide. |
| R5-05 payload adapter | One departing print containing the 3.5 mm lug, locating keys and four payload mounting holes. Foam pads are bonded to this part. |
| R5-06 servo clamp | Padded cross-clamp secures the servo body without relying on unverified mounting-ear holes. |

Explosion in the viewer separates these real manufactured bodies and their
hardware. It does not separate ribs, bosses, keys or the lug from their parent
prints. **Casing → Off** hides the shell, lid and their fasteners; the receiver,
actuator and latch remain visible. **Ghost** retains the box outline while
showing its contents.

## Cartridge assembly

1. **Inspect the purchased servo and hardware.** Measure the MG90D case,
   output-shaft location, spline seating, stock horn, supplied screw and lead
   exit. Check the smooth follower sleeve's 4 mm outside diameter, 2.1 mm bore
   and 6 mm length. The supplier does not specify all of these tolerances.
   Compare the actual parts with the inspection sheet before trimming a horn
   or finishing a print.
2. **Finish and dry-fit the six prints.** Use the supplied print orientations.
   Remove support and burrs from guide faces, nut pockets and countersinks.
   Check the keeper by hand through its full travel. A binding print must be
   corrected before installing the servo; motor torque is not a fit tool.
3. **Load the captive nuts while the shell is off.** Fit four M3 mounting nuts
   into the receiver's side pockets and two M2 clamp nuts into the cradle
   posts. Fit the four M2 lid nuts in the shell. Verify each screw enters its
   nut freely without cross-threading or cracking the pocket.
4. **Install the keeper before its stop stud.** Slide the bar leftward into
   the guide from the actuator end. The rear mounting boss has a relief for
   this insertion path. Then fit the captured M2 stop nut and its M2 × 6
   socket-head stud. The stud head meets integral receiver stop walls; it is
   a travel limiter, not a positive equipment lock.
5. **Fit the servo and pads.** Lay the MG90D on its narrow side in the cradle.
   Use the specified lower and upper shim reservations, adjusted only from
   measured fit. Secure the cross-clamp with its two M2 screws without
   distorting the servo case. Record the actual pad thickness and clamp
   setting; a generic screw torque is not specified for these printed posts.
6. **Fit the horn and follower.** Use the supplied compatible 20-tooth horn
   with its native hub and screw. The follower center must be 5.5 mm from the
   shaft axis. Inspect an existing hole or intact material before drilling;
   reject a horn whose existing holes would merge or leave inadequate edge
   material. Trim only to the drawing's clearance envelope. Assemble the M2
   follower screw, smooth sleeve, washer and prevailing-torque nut. The
   sleeve spans the yoke, so tightening clamps the sleeve rather than
   squeezing the sliding fork. Check that it slides freely.
7. **Route the servo lead.** The cable leaves the shaft-side end of the case,
   rises through the cradle relief, passes above the servo behind the clamp,
   and exits through the matching lid and host-frame opening. The modeled
   flat-ribbon path is a routing reservation. Verify
   the purchased lead's actual exit and bend requirements. Put the service
   loop and connector above the cartridge in the wing.
8. **Fit the shell and lid.** Seat the receiver on the shell's retention
   ledge, keep wires clear, and install the four M2 lid screws. Repeat the
   hand-motion and powered unloaded checks with the lid installed. The
   retained rigid assembly and swept linkage must remain inside the fixed
   box; the departing adapter and flexible external harness are excluded.
9. **Prepare the payload adapter.** Attach it to the defined pod interface
   with the four M3 flat-head screws. Bond the four foam/adhesive discs to
   the adapter, clear of the screw recesses. The pod must provide the mating
   metal threads or specified nut stack; see the BOM's interface requirement.
   Include the adapter, pads, screws and mating payload hardware within the
   **0.454 kg total departing mass**.
10. **Calibrate and measure the complete unit.** The CAD positions are 15°
    retained and 100° released, an 85° rotation. Determine suitable pulse
    endpoints on the actual unit using the [electrical procedure](electrical.md).
    Measure at least 0.5 mm clearance beyond the lug and to the mechanical
    stop when fully released. Then perform the [loaded test plan](qualification.md).

The stop stud is fitted after the keeper because its head cannot pass through
the guide. Reverse that order for keeper removal. Disconnect power and support
the payload before service. A commanded servo position does not establish that
the payload is seated, retained or clear.

## One-off wing bay

The example is a **300 mm chord × 220 mm span NACA 0018 section**, with a
removable top panel, local frame and lower opening. It is an installation
demonstration rather than a complete aircraft wing design.

| Interface | Nominal geometry |
| --- | --- |
| Lower opening | 86.2 × 54.6 mm; 0.3 mm clearance per side around the 85.6 × 54 mm cartridge |
| Cartridge datum | Bottom Z = 0; upper lid Z = 20 mm |
| Frame bearing face | Underside Z = 20 mm, stopping upward insertion |
| Front mounting centers | (10, 10) and (75.6, 10) mm from the cartridge origin |
| Rear mounting centers | (10.5, 44.8) and (75.1, 44.8) mm; use these explicit coordinates, not a rectangular pitch |
| Top installation hardware | Four M3 × 12 socket-head screws and 0.5 mm washers through the 3.5 mm frame into captured M3 nuts |
| Cable path | Aligned lid/frame opening into the wing interior |

In **Wing installation** mode, move the sequence control through its labeled
steps: open the hatch, insert the cartridge, install the four top screws, and
close the hatch. The wing-skin transparency control exposes the frame and
fastener load path. The payload is omitted from this sequence to make the
mounting operation readable.

For a real aircraft, cut the lower opening and top access panel in its CAD,
then connect the frame into the actual spar/rib/skin structure. Do not treat
the remaining wing skin alone as sufficient backing. Check the opening's
effect on wing torsion, the real pod's eccentric loads, tool access, local
fastener pull-through and cable routing. Select the hatch's retention and
skin joint for that aircraft; the demonstration does not specify a flight
qualified hatch latch.

## Removal and replacement

Support and remove the payload, isolate servo power, open the upper panel and
disconnect the wing-side harness. Support the cartridge from underneath while
undoing its four M3 mounting screws, then lower the complete unit out of the
wing. Internal service can then happen on the bench. This keeps installation
fasteners accessible from above while the entire hardpoint remains replaceable
through the bottom opening.
