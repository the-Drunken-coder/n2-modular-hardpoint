# R4 assembly and service sequence

Use the [mechanical BOM](../manufacturing/bom.csv), [three manufacturing drawings](../manufacturing/drawings/), [interface specification](interfaces.md), and [print instructions](printing.md). This sequence is deliberately different from simply reversing the exploded animation: the keeper's integral stop tab requires the removable open stop to be absent during insertion.

## Prepare and inspect

1. Print the three parts and the calibration coupons with the recorded process. Finish and inspect the actual parts against `manufacturing/dimensional-inspection.csv`. Record the source revision, printer, material lot, drying history, slicer file, dimensions and photographs under the specimen ID. Do not hide a failed fit by changing load-bearing thickness without a new CAD/inspection record.
2. Inspect the actual HS-65MG case and two mounting ears against the supplier-envelope CAD. Check the lead exit and purchased horn seating. The HB-named supplier STEP does not establish the exact MG spline, screw or internal geometry.
3. Modify the MS-I25 horn as specified: supported drilling of the first existing R7.5 hole to Ø2.1 and removal of the opposite arm beyond R4.5. Deburr without opening cracks. Preserve the active arm and spline. Check its actual outline through the full sweep; the modeled horn is a conservative dimensional envelope, not a scanned purchased sample.
4. Check fastener lengths, head diameters, washer series, nut height and smooth sleeve dimensions before assembly. M2 washers are ISO7089, Ø5 × 0.3; M3 washers are the smaller ISO7092/DIN433, Ø6 × 0.5. The payload screw head must match its specified countersink. Use the supplied Hitec center screw, not an arbitrary metric replacement.

Required hand tools are supported Ø2.1 drilling equipment, suitable M2/M3 hex drivers, nut drivers, a caliper/micrometer, feeler gauges, a magnifier, a force gauge and a dial indicator or equivalent displacement instrument. Powered calibration additionally requires the defined 5 V bench circuit, voltage/current instrumentation and a means to observe motion time. The initial fixture uses two 3 mm grip panels with the specified mounting patterns; their construction must be sufficiently rigid for the test and verified in the fixture record.

## Assemble the moving joint on the bench

1. Keep the servo disconnected and the open-stop screw, its washer and nut out of the receiver. Place the keeper in its retained drawing orientation.
2. Pass the M2×10 follower screw from the horn's rear through its modified first hole. Slide the CU-2004 sleeve over the screw against the horn's front face. Place the keeper's slot around the sleeve, then fit the M2 washer and prevailing-torque nut outside the yoke.
3. Hold the screw and tighten the nut enough to clamp the metal sleeve against the horn. The yoke must remain free, with front clearance ≥0.10 mm and rear clearance ≥0.30 mm. The nominal bolt projects 1.1 mm beyond the modeled nut; verify that actual threads pass the locking element. Do not substitute a threaded screw shank as the slot's running surface.
4. Move the horn pin through the full slot by hand. Reject binding, edge catching, a clamped yoke, damaged plastic, or a sleeve that rotates because its clamped joint is loose. This design uses a fixed sliding sleeve, not a free-running roller.

## Insert the group and mount the actuator

1. Slide the assembled keeper/horn/follower group into the receiver **from the +X end, toward −X**, until the bar enters the long guide and reaches its retained position. Keep the open-stop screw absent. Do not try to feed the oversized yoke through the square guide.
2. With the horn held near retained orientation, install the servo body **from the −Y side**, engaging its output spline with the horn. Set the unloaded servo near its retained starting command using the calibrated bench setup before final spline indexing; disconnect power while handling the joint. Do not rotate an energized or mechanically blocked servo by hand.
3. Fit each M2×12 servo mounting screw from +Y: screw head, M2 washer, 6 mm printed tower, actual servo ear, M2 washer, prevailing-torque nut. The actual central ear holes match the 28.6 mm pitch. Tighten evenly while checking that the ears and towers remain flat and uncracked. Secure the horn with the supplied Hitec center screw.
4. Slide the M3 prevailing-torque nut into the open-stop boss's side pocket. Fit the ISO7092 M3 washer on the boss and install the **M3×10 open-stop screw from +Z** into the nut. The screw head now defines the 10.5 mm mechanical limit. Check nut capture and thread engagement; do not use the servo to test the stop's strength.
5. Route the servo lead outside the horn sweep and moving keeper. Use host-mounted strain relief so the case entry carries no harness tension. Maintain service access, or plan to remove the module from the host for future servicing.

The CAD check includes sampled straight insertion of the keeper/horn group and servo body as well as the operating sweep. It models nominal rigid parts and selected tools. Actual handling clearances, spline engagement and access with the chosen host still require this assembly inspection.

## Fit the seat, adapter and fixtures

1. With the adapter removed, attach it to the payload's 3 mm test panel using the specified four flat-head M3×14 screws from its underside. Above the panel fit the four M3 small washers and prevailing-torque nuts. Screw heads must be flush or recessed by no more than 0.1 mm; any protrusion rejects the assembly. Confirm the departing assembly's mass separately from the retained mechanism.
2. Clean the four pad pockets without damaging the printed polymer; let them dry. Apply one Ø4 467MP adhesive disc and one Ø4 PORON disc per pocket, centered without wrinkles, overhanging adhesive or trapped debris. Record the bonding method and dwell. The proposed prototype bond receives 24 hours at 23 ±2 °C before preload measurement; this is a project process selection, not a demonstrated bond-strength claim.
3. Fasten the receiver to the 3 mm host test panel using four M3×16 screws from +Z, a small M3 washer against the receiver, and a second washer and nut below the panel. Use the defined 88 × 43 pitch. Check datum flatness before and after tightening; if the host pulls the base out of flat, correct the fixture instead of forcing the guide into alignment with screw preload.
4. With the keeper withdrawn and the payload supported, seat the adapter in the two keys and compress the pads until the lug opening aligns with the keeper. Manually return the keeper, or use the supported preparation procedure after the electrical checks. Confirm full retained overlap, correct key engagement and absence of debris.
5. Measure total pad preload at the retained position; accept **0.5–3.0 N**. Check the whole unloaded operating stroke, actual open-stop margin and lug-clearance margin. Record any finishing operation and repeat dimensional inspection afterward.

No universal tightening torque is assigned to these unqualified printed joints. Use a torque-indicating hand driver, tighten only to eliminate joint slip while keeping the polymer uncrushed, and record the resulting torque and datum/fit measurements. Establish a validated tightening range on printed joint coupons before treating this as a production process. Steel bolt proof torque is not an acceptable default for a printed tower, thin servo ear or adapter countersink.

## Electrical checkout and calibration

Build the [specified offboard harness](../electrical/README.md) and perform its dummy-load/oscilloscope checks first. Keep `CALIBRATED = False` until an unloaded calibration record exists. Adjust the retained position from observed crank geometry and keeper overlap; do not use stop contact or sustained buzzing as the endpoint indicator. Set the release position to nominal 9.5 mm withdrawal, with measured travel5.3–10.0 mm and ≥0.5 mm open-stop margin. Save both pulse widths, voltage, current, temperatures and photographs before enabling the firmware.

Perform the [physical acceptance plan](qualification.md) with the payload captured by a fixture. A button press, LED state or commanded pulse is not proof of retention, release or separation. After any fault, cut power, support the payload and inspect before resetting or preparing again.

## Service and replacement

Support and remove the payload first; disconnect the bench source and verify the switched rail has discharged. Remove the open-stop screw and washer, release the horn's center screw and the servo mounts, withdraw the servo toward −Y, then slide the keeper/horn group toward +X. Disassemble the follower on the bench where both sides are accessible. Remove the whole receiver if host integration obstructs those directions.

Inspect the keeper bearing faces, lug floor/webs, slot edges, horn, sleeve, tower roots, stop tab, pad bond and all fasteners. Replace cracked, delaminated, gouged or permanently bent parts. Replace prevailing-torque nuts that no longer retain their locking resistance. Replace all pads together when preload fails. A changed sleeve, horn, print process, material or fitted geometry requires repeated dimensional, motion and force checks; a changed structural CAD revision requires regenerated numerical evidence as well.
