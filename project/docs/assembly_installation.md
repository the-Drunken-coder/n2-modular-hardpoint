# P14 assembly, installation and operation

Use the current [P14 print requirements](../../docs/print-requirements.md) and [bench-test plan](../../docs/test-plan.md). PAHT-CF is the candidate prototype material; no working-load or loaded-release rating is assigned.

## Assembly

1. Print and inspect the four supplied `*_print.stl` pieces. Use millimeters and the supplied bed orientation. Complete the checks in [print guidance](../manufacturing/PRINTING.md) before assembling.
2. Insert both ISO 4032 M2 nuts into the receiver's underside pockets. Access is needed before the receiver is permanently fastened to its backing.
3. With the adapter and actuator absent, feed the keeper from the **+X end** through the proximal guide and into the distal support. It cannot be dropped through the closed roofs from above.
4. Lower the complete purchased solenoid from **+Z**, engaging its rear button in the open-top keeper fork. Check front armature/spring clearance and route the leads through the modeled side passage.
5. Lower the separate clamp and install two M2 × 16 screws. Tighten evenly only enough to seat the actuator; no installation torque has been qualified. The clamp must not distort the actuator frame or squeeze moving clearances.
6. Check unloaded manual travel and spring return. Keep the coil supply disconnected during initial fit checks. Remove any temporary force-test hook or cord from the keeper before operation.
7. Support the payload adapter, hold the keeper open with the tab, lower the lug in **−Z** until seated, then release the tab. Inspect actual distal tip overlap and perform a gentle supported retention check.

The current interactive model identifies the receiver, adapter, keeper, clamp, purchased solenoid and clamp hardware. Purchased actuator internals and fasteners are fit-envelope models; they are not printable substitutes. The issued drawings are historical P11 illustrations; use P14 CAD for the revised roof, keeper link and print geometry.

## Mounting interfaces

The current receiver has two nominal Ø3.2 mm host holes at **(X,Y) = (5,14)** and **(35,−10)**, through a nominal **3.2 mm** base. The payload flange has two nominal Ø3.2 mm holes at **(33,8)** and **(33,14)**, through its **3 mm** thickness (Z16–19). Coordinates are assembly coordinates in millimeters, as defined by the CAD source; verify the supplied STEP before manufacturing a backing.

The model does not select aircraft or payload fastener lengths, washers, nuts, inserts, or backing material. Define these for the actual installation. Confirm tool/head access, nut-pocket access, thread engagement, edge distances and load distribution in both mating structures. The two modeled M2 screws clamp the solenoid; they are not the aircraft mounting screws.

The full-backing FEA condition requires continuous rigid support of the modeled underside. Two bolts by themselves do not provide that boundary condition. The historical P11/P13 two-hole analyses constrain ideal finite washer regions; those results are not a P14 two-screw validation, bolt-preload model or aircraft-joint model.

## What the aircraft installation must establish

- Carrier and payload mounting geometry, backing stiffness, fasteners and local pull-through/bearing strength.
- Payload mass including departing adapter/hardware; CG offsets; aerodynamic and maneuver forces/moments; vibration, temperature and retention duration.
- A clear +Z departure corridor. A lifting payload can remain pressed against its carrier after unlocking.
- A local regulated 5 V actuator supply and suitable command source if replacing the bench controller. Direct RC is not required by this prototype.
- Wiring routing and strain relief that cannot touch the keeper/tab, carry mechanical retention load, or snag the departing payload.

The current provisional bench requirement is 0.454 kg (1 lb including departing adapter and hardware) at 2 g, straight +Z: 8.9 N design load and a 17.8 N sacrificial qualification target at SF 2. These are requirements, not achieved ratings. Airframe fastener torque, real service loads/moments, separation attitude and flight qualification remain installation-specific.

## Bench operation and reattachment

Use the electrical checklist in [wiring.md](../electronics/wiring.md). Before every ARM, support the payload, inspect actual keeper engagement, confirm the exit corridor, and perform the prescribed external temperature check. ARM, release ARM, then make one fresh FIRE press. Observe command, actual unlock and actual payload clearance separately.

For reset, support the adapter independently, hold the keeper open, insert the lug fully, release the tab and confirm distal engagement. Never force the lug past a closed cross-bolt. Check return after several unloaded manual cycles; a consistent tab endpoint is only an inspection aid.

If the adapter does not clear before coil-off, the test has failed even if the armature stroked. Stop and characterize the force, clearance and timing problem before further loaded tests.

Interface dimensions and assembly order come from the current [editable P14 CAD](../cad/build_n2.py) and [manifest](../cad/N2/manifest.json). They remain nominal until checked on manufactured parts.
