# R5: fixed cartridge requirements

Recorded 2026-10-30 from the user's requested box and wing installation. R5 is
the active development direction; the older issued P14 and R4 evidence retain
their original identities. No old simulation is evidence for this new shape.

| Item | R5 requirement or explicit engineering choice |
| --- | --- |
| Outside retained module | **85.6 × 54.0 × 20.0 mm**, including the casing and lid. The footprint is the rounded credit-card outline. |
| Depth choice | Use 20 mm for this revision. The user's 15 mm suggestion is a stretch goal, not an additional approved envelope. |
| Cost | Select an actuator below approximately US$20. Minimize the whole module's cost and report the actuator separately from printed material, hardware and installation. |
| Supply | Fixed nominal 5 V. Selected actuator must accept the measured terminal voltage. Retain 3 A as source-capacity allowance, not a claim of current draw. |
| Module installation | Insert the assembled cartridge upward through the wing's lower opening. Access mounting screws from a removable upper panel. |
| Structural interface | Four top-driven M3 screws act through a reinforced host frame into captive metal nuts in the cartridge's structural receiver. Cosmetic casing walls and wing skin alone are not the defined load path. |
| Mechanism | Preloaded keyed seat, reinforced 3.5 mm retaining lug, independently guided sliding keeper; the motion converter is chosen to fit cost and enclosure constraints. |
| Actuator | TowerPro MG90D, Adafruit 1143, prototype choice. Its supplied horn is fitted to the prescribed crank radius. |
| Departing mass | 0.454 kg total, including adapter and departing hardware. |
| Release load | 2 g total load factor, 8.9044382 N downward in R5 coordinates. |
| Retention screen | 4 g equivalent, 17.8088764 N; separate from the 2 g release requirement. |
| Prototype material | PAHT-CF remains the intended material/process candidate. Numerical comparisons use the explicitly documented isotropic PLA proxy and confer no PAHT-CF strength rating. |
| Casing inspection | Solid, ghosted and hidden casing views; skeleton remains a real assembly. Integral print features must never explode as separate manufactured parts. |
| Wing demonstration | One illustrative wing bay with bottom socket, structural mounting frame, top hatch, wiring route and installation sequence. No aerodynamic or flight-structural qualification is implied. |

The 20 mm module depth is measured from the module's lower datum face to its
upper cover. The departing payload adapter and the wing's mounting screws/frame
are separate items, clearly categorized in the assembly. No retained actuator,
moving linkage or case wall may escape the box during its permitted travel.
The cable service loop belongs in the wing, through the defined exit.

The pod envelope remains approximately Ø70 × 125 mm normally, with a Ø70 ×
250 mm larger case at the same carried-mass input. The wing demonstration does
not establish clearance for every actual pod, center of mass or flight load.

The previous round-and-diamond locators, full-seating interlock and positive
equipment lock remain excluded/deferred as previously decided. The mounting
frame now appears only because this task explicitly requests a wing-integration
demonstration. It is a host part, not hidden extra cartridge size.

## Datum and release acceptance

Coordinates in the R5 generator and STEP files are authoritative: +Z goes into
the wing, the module's bottom is Z = 0, and the payload departs in −Z. Old R4
coordinate signs are not transferred to the new analysis.

The nominal linkage leaves extra clearance after the lug disengages. Inspect
the actual follower/slot play, lug and keeper dimensions, endpoint variation
and casing clearance. The measured fully released gap must be at least 0.5 mm;
a drawn servo angle is not a measured endpoint. Retained overlap, unloaded
free movement, full-stroke loaded demand and power-off behavior remain physical
acceptance items.

Sources and selection: [actuator research](actuator-research.md).
