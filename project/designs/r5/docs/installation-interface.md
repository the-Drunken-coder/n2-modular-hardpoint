# R5 installation interface and unqualified conditions

This record defines what the host integration must supply. It does not design the wing/backing, add a second hardpoint, or claim an aircraft load rating. The initial bench scope is centered axial −Z loading; all other operating limits remain **UNQUALIFIED** until evidence is attached.

## Mechanical interface

Use the current STEP and `params.py`, in millimeters: X along keeper withdrawal, Y across, Z toward the host. The host plane is `BODY["z"]`; the adapter departs in −Z. The body is 72 × 53.5 × 20 mm; the servo overhang gives a retained envelope of 72 × 54.1 × 20 mm. Four nominal host bosses are at `(4,4)`, `(68.5,4)`, `(4,50)`, `(68.5,50)`, giving a 64.5 × 46 mm mounting pattern. Adapter holes are at `(1.5,34)`, `(17.5,34)`, `(1.5,45)`, `(17.5,45)`. Check generated geometry before making a mating part.

Record the actual host/payload fastener type, pilot or thread dimensions, engagement, installation torque, edge distance, material, local stiffness and load spreading. A fixed screw-pilot surface in FEA is an idealization, not proof of real screw pull-out or wing-skin strength. Preserve fastener/tool/cable access and the full moving envelope.

The typical pod layout envelope is approximately diameter 70 × length 125 mm; the extended layout is diameter 70 × length 250 mm. Neither increases the complete departing mass limit of 0.454 kg. Evaluate the actual pod and its entire departure corridor, not only a small viewer stand-in.

## Load and operating contract

Fill `../records/installation.csv` before proposing operation. Give force and moment vectors in the R5 frame, including signs, duration, uncertainty and the chosen reference point. For a force F applied at offset r, include `M = r × F`. Mass alone is insufficient.

| Input/limit | Present status |
|---|---|
| Complete departing mass | Requirement ≤0.454 kg; weigh the actual assembly |
| Axial retention/release | Requirement 8.9044 N; physical evidence pending |
| Complete-assembly retention proof | Target 17.8089 N; physical evidence pending |
| Lateral forces, torsion, bending and CG offset | UNQUALIFIED; no transferable allowable assigned |
| Host/backing and payload attachment strength/stiffness | Installation-specific; matching fastener/structure proof required |
| Vibration/shock spectrum and fastener retention | UNQUALIFIED; measure/define for the installation |
| Temperature, moisture, contamination, carriage duration and cycle life | Only the specifically completed bench conditions may be recorded; no broad rating |
| Terminal voltage, current capability, signal levels and power/signal faults | R5 electronics acceptance plus installed cable-drop measurements |
| Separation attitude, extraction force and clear corridor | Must provide positive departure and avoid recontact; no ejector or departure sensor |

An unqualified field is not a zero-capacity claim or an invitation to guess an allowable. It prevents promoting an axial bench result into an unstated aircraft envelope. The load path may be developed independently from the airframe, but its boundary conditions must be specified.

Power-off retention is deliberately not required. Record the consequence of a local servo/connector/power fault separately from the aircraft power architecture. Fixed-equipment locking and payload power/data remain deferred.
