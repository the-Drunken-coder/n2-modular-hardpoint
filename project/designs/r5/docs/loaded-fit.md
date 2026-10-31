# Loaded motion, inspected fits and release gate

The guide has intentional play. A payload on the keeper's overhanging end can
pitch the bar onto the tunnel mouth floor and rear roof. The original nominal
5 mm bar in a 5.4 mm, 16 mm-long guide permits 1.42655 degrees of pitch. At 5 mm
withdrawal its original yoke reached Z 16.7153 mm, above the old 16.7 mm ceiling.
Level-translation interference checks missed this additional contact.

## Geometry changes

- Restore the receiver height from 18 to **20 mm**, inside the selected 15–20 mm
  thickness limit. The local roof remains **1.5 mm thick**, at Z 18.5–20.
- Shift the servo 1 mm toward −Y and the keeper datum 0.2 mm toward +Y. This
  reserves real horn-face clearance under yaw, without widening the body.
- Enlarge the tip pocket for permitted angular movement. Restrict the horn-head
  groove to X ≥25 mm and extend it around the head's loaded-pose sweep, leaving
  the cantilever and tunnel mouth at their full section.
- Require a measured **5.0 ±0.1 mm** crank radius. A guessed larger stock-hole
  radius is not accepted. Inspect or prepare the hole as described in assembly.

Mass is regenerated in `out/cad.json`; the extra roof height carries a small
mass cost. No old stress margin is inherited by this geometry.

## Finished-part acceptance envelope

These are inspection limits for each manufactured assembly, not a claim about
the printer's generic accuracy. Rework within the instructions or reject a part
outside them. Record actual measurements in the inspection form.

| Feature | Acceptance |
|---|---|
| Total keeper/guide clearance, Y and Z | 0.30–0.50 mm after finishing |
| Effective full-section guide length | ≥15.8 mm |
| Guide/shaft datums relative to the drawing | ±0.10 mm |
| Yoke and relief-roof surface location | ±0.10 mm each |
| Actual horn crank radius | 4.90–5.10 mm |
| Calibrated release angle | 40–45 degrees in the assembly coordinate frame |
| Total pin-sleeve/slot clearance | 0.30–0.50 mm; include up to ±0.25 mm endpoint lost motion |
| Non-contact yoke roof, horn and head gap through the path | ≥0.50 mm remaining after fit errors |

`cad/clearance.py` computes the angular bound from
`L tan(angle) + w/cos(angle) = w + clearance`. At 0.50 mm clearance and 15.8 mm
effective length it is **1.80357 degrees**. The check includes both signs of
pitch and yaw, ±0.10 mm datum offsets, and separate level free-play corner poses.
Maximum tilt already consumes guide play; it is not added a second time as a
full free-play translation. A further 0.10 mm on each opposing non-contact
surface is reserved before accepting the 0.50 mm gap.

The 220 rigid-pose checks cover eleven positions from latch through the release
endpoint. Intentional bearing contact is excluded only inside a documented
guide reservation. The complete remaining body, tip pocket, conservative horn
disk and enlarged center-screw envelope remain obstacles. Roof margin is checked
numerically. This is a bounded sampled geometric check; it is not a nonlinear
contact, friction, deformation, wear or departure simulation.

## Required full-path bench gate — still PENDING

Before loaded tests, measure all fits above. With the actuator disconnected,
move the keeper slowly through its entire path while applying the intended
payload force. Stop on rubbing at the yoke roof, pinching at the horn/head,
stick-slip, or inability to obtain the minimum gap. Inspect both lateral float
limits and recheck after tightening the mounting screws on the actual host fixture.

For loaded release, apply **8.9044 N** continuously to the departing adapter
(the 0.454 kg, 2 g service target). A secured vertical bench can use approximately
0.908 kg total suspended mass including the departing adapter/hardware; verify
the actual force with the fixture/load cell. Use a controlled catch that does
not preload or obstruct the adapter. The **17.8089 N** retention proof is a
separate test and does not replace this loaded-motion test.

On three independently printed assemblies, perform 10 unloaded conditioning
cycles, then **100 loaded release/reset cycles per assembly** at the minimum
qualified terminal voltage. Record every attempt, terminal voltage minimum,
withdrawal/endpoint, load, temperature, force/torque trace when characterized,
release time, complete departure and successful reset. Test both lateral float
limits across the sequence. Do not infer a reliability probability from zero
failures in this sample. Acceptance requires no jam, incomplete departure,
uncommanded movement, damage, fastener loosening or lost clearance. A failure
requires investigation and a new recorded validation sequence after correction.

Characterize actuator output torque and keeper demand across the full path at
the same voltage and thermal state. The modeled working-torque fraction and
friction coefficient remain assumptions until measured. Require the specified
torque margin at every loaded position, and record the worst angle, rather than
checking only the endpoint or quoting stall torque. Environmental and vibration
qualification require the installation's defined conditions; these ambient
bench cycles do not establish a flight rating.
