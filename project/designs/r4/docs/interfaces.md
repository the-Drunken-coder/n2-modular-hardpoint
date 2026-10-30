# R4 interfaces, datums and finished fits

All dimensions are millimetres. The generated STEP is the nominal shape; the [inspection table](../manufacturing/dimensional-inspection.csv) specifies finished acceptance limits. The tolerances below are selected inspection targets, not a claim about an unmeasured printer's accuracy. The fixed-revision [dimensional record](../cad/parameters.json) is guarded against silent changes: changing that record requires a corresponding reviewed CAD revision and regeneration.

## Coordinate and load contract

The receiver mounting plane is **datum A, Z = −1.6**; its X-minimum and Y-minimum edges are datums **B, X = 0**, and **C, Y = −26**. Positive X withdraws the keeper. Positive Z is the payload departure direction. The servo shaft is parallel to Y, with its axis at X75/Z10.5. These are modeling coordinates; on the intended underslung installation the assembly is rotated so +Z points away from the aircraft. The viewer's page orientation is not a gravity requirement.

The receiver carries its own socket walls, seat deck, guide, ribs and actuator mounts. An installation supplies a structure at its four mounting interfaces. It does not supply an assumed external receiver rail. The analysis constrains the named mounting annuli; a compliant host panel, bolt preload, local crushing and pull-through are not represented by that ideal fixture.

| Interface | Nominal definition | Assembly requirement |
|---|---|---|
| Host | Base 100 × 55 × 4.8; four Ø3.4 through holes at (6,−20), (6,23), (94,−20), (94,23) | 88 × 43 pitch. The specified M3×16 hardware represents a 3.00 mm bench-panel grip. All four interfaces are used. |
| Payload | Adapter flange 34 × 34 × 4; mounting face Z27.3; holes at (19.5,0.5), (44.5,0.5), (19.5,25.5), (44.5,25.5) | 25 × 25 pitch. Install the specified flush-head hardware before attaching the adapter. Ø7.0 ×1.8 deep,90° countersinks clear the ISO10642 Ø6.72 ×1.86 head envelope. |
| Servo | Two Ø2.2 holes, centers X55 and X83.6, Z10.5, axis Y | 28.6 pitch. Use the actual central ear holes. The supplied family STEP is an envelope reference; inspect the purchased HS-65MG. |
| Wiring | Three-wire servo lead, routed out beside the case | Reserve the full horn/keeper sweep and +X service corridor. The lead reservation is illustrative; strain relief belongs to the host harness and must not obstruct the moving mechanism. |
| Removal | Keeper/horn joint inserts from +X with the servo and open-stop screw removed | Provide service access to the +X end and −Y servo side, or remove the complete module from the host for service. The exploded view is a parts diagram; the assembly sequence governs installation. |

For a different host-panel thickness `t`, select a screw with under-head length at least `0.5 + 4.8 + t + 0.5 + actual_nut_height + 1.0`, while checking the available back-side space. The last 1.0 mm provides two nominal M3 pitches beyond the nut; verify actual engagement through its locking element. The stock 16 mm selection therefore has adequate nominal engagement for the defined 3 mm bench panel. Do not infer an aircraft attachment rating from that screw-length calculation.

For the payload flat-head screw, the catalog's length includes its head. The nominal stack is `4.0 + payload_panel_thickness + 0.5 + actual_nut_height`; allow at least 1.0 mm beyond the nut and verify the countersink/head match. The specified 14 mm length is for the 3 mm bench panel. A different thickness or head specification requires a checked hardware revision.

## Keeper, lug and locating seat

| Feature | Nominal shape | Finished acceptance |
|---|---|---|
| Keeper bar | 3 × 3 square; retained tip X25.5 | 2.95–3.05 in both width and height, including both bearing regions |
| Guide channel | 3.6 × 3.6; proximal guide X30.6–51; Z13.6–17.2 | 3.50–3.70 width and height; resulting total clearance0.45–0.75 against the accepted bar. Nominal retained keeper topZ17.2 already contacts the loaded roof. |
| Retaining lug | X26.8–30.3; width Y5.4–14.6 | X thickness 3.40–3.60; no damaged or porous retaining edges |
| Lug opening | 4.6 in Y × 3.6 in Z; Z14.2–17.8 | Side webs nominal 2.30, accepted 2.20–2.40; retaining floor nominal 3.10, accepted 3.00–3.20 |
| First locating key | X23.2–26; Y18.9–20.9 | Adapter slot X22.9–26.3; Y18.6–21.2: nominal 0.30 per constrained side |
| Second locating key | X38.4–41.6; same Y limits | Adapter slot X37.8–42.2: 0.60 X relief per side; 0.30 Y clearance per side |
| Finished key faces | ±0.10 position target on each mating face | Measured constrained face gap 0.10–0.50. Check the assembled fit; slot width alone does not verify spacing. |
| Yoke | 3 thick; integral with keeper and stop tab; slot end centersZ9.5 and19.0 | Thickness2.90–3.10; slot width4.30–4.50. The extended rounded ends clear the sleeve during unloaded vertical guide float. |
| Sliding sleeve | CU-2004, nominal Ø4 × 4 length, Ø2.2 bore | OD3.95–4.05, length3.90–4.10, bore2.10–2.30; smooth, burr-free edges |

The relieved second key avoids using two tight X locators. The keys take up their defined clearance before carrying lateral load; the foam reduces loose axial seating but does not create a zero-backlash rigid joint. The nominal retained CAD pose uses the keeper against its loaded guide roof, so the foam stack is evaluated at that pose. The remaining channel height permits downward float when unloaded, and the extended yoke slot avoids transferring that float into the servo follower. Finished roof position and actual pad preload still require inspection. The nominal seat lands are Z23.05, leaving0.25 mm below the retained adapter underside at Z23.3. The lateral/moment calculation explicitly assumes selected faces have contacted after this clearance is taken up; it does not solve the nonlinear take-up motion.

## Preload inserts

Use four Ø4 discs punched from **Rogers PORON 4701-30, 320 kg/m³, 2.36 mm free thickness**, bonded with Ø4 **3M 467MP** transfer adhesive. Pocket centers are (26.5,2.5), (37.5,2.5), (26.5,23.5), (37.5,23.5). Pocket diameter is 4.2; floor Z21.47. The front pockets leave a 0.5 mm web to the socket boundary instead of a tangent edge. The 0.06 mm nominal adhesive and 1.77 mm installed foam thickness reach the retained adapter underside at Z23.3.

Nominal foam compression is 25%. The supplier's ±10% free-thickness band alone changes that to approximately 16.7–31.8%, before print height, adhesive, temperature and creep are considered. Its published 25%-deflection stress is a material selection aid, not a guaranteed force for a tiny bonded disc. **Measure total installed preload and accept 0.5–3.0 N in B00.** Replace all four discs together if a pad tears, detaches or takes a permanent set that fails that criterion. Do not add unrecorded layers or alternate foam to force a pass. Sources: [Rogers data](https://www.rogerscorp.com/-/media/project/rogerscorp/documents/elastomeric-material-solutions/poron/english/data-sheets/17-006-poron-4701-30-very-soft.pdf), [3M 467MP data](https://multimedia.3m.com/mws/media/2366204O/3M-Adhesive-Transfer-Tape-467MP.pdf?pif=000024).

## Motion and stop contract

The 7.5 mm crank drives `u = 7.5 × (1 − cos θ)` from nominal retained dead center. The keeper loses its distal roof support after approximately 1.0 mm withdrawal and clears the nominal lug's X face at 4.8 mm. Those are geometric transitions, not a dynamic separation prediction.

The operating target is **9.5 mm / 105.466°**, leaving 1.0 mm nominal travel before the **10.5 mm / 113.578°** mechanical limit. Calibrated acceptance requires actual withdrawal **5.3–10.0 mm**, at least 0.5 mm clearance past the real lug and at least 0.5 mm gap to the open stop. Retained lug overlap must be at least 3.0 mm. Measure the keeper, rather than inferring those distances solely from pulse width. The controller's starting values are not calibrated endpoints.

The removable M3 open-stop screw is installed after the keeper; its head contacts the integral stop tab only at the mechanical travel limit. It is not a payload equipment lock, an actuation target, or a qualified stalled-servo restraint. The retained pose must independently pass the unpowered-retention tests. The absence of a return spring means a power interruption during withdrawal can leave an intermediate state.

## Purchased horn joint

Use the Hitec Micro25T MS-I25 horn; preserve the molded spline and the existing 7.5 mm-radius hole location. Enlarge that hole to Ø2.10, accepted 2.05–2.15, with the part supported. Keep the active arm; trim the opposite arm at the drawing's 4.5 mm distance from the shaft axis. Inspect at least 4.5 mm width around the enlarged hole before drilling. A full-size 25T horn is not interchangeable.

In retained CAD coordinates the horn's front face is Y8.2; the sleeve extends Y8.2–12.2, the yoke occupies Y8.5–11.5, and the outer M2 washer starts at Y12.2. This gives 0.3 mm nominal horn-to-yoke space and 0.7 mm nominal yoke-to-washer space. Require at least 0.10 mm measured front space and 0.30 mm rear space, with the yoke free throughout motion. The M2 nut clamps the sleeve to the horn. Tightening it must not squeeze the yoke. The supplied Hitec center screw secures the horn to the servo separately.
