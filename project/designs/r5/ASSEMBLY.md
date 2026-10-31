# R5 assembly and crank-pin joint

Use the current generated CAD and oriented print files. There are three printed
parts. The crank uses a tightly clamped through-bolt, short horn-side spacer,
smooth running sleeve, washer and external nylon-insert locknut. The moving keeper is **not** inside
the clamped stack, and the screw does not rely on a thread cut in the plastic horn.

## Purchased crank parts and receiving inspection

| Item | Required dimensions / example |
|---|---|
| Through-bolt | M2×20, 90° Phillips countersunk **DIN 965H / ISO 7046-2**, head ≤3.8 mm diameter; Accu SIK-M2-20-A2 |
| Horn-side spacer | Nickel-plated brass, **4.0 mm OD × 2.2 mm ID × 2.0 mm long**; Ettinger 005.51.023 |
| Smooth running sleeve | Nickel-plated brass, **4.0 mm OD × 2.2 mm ID × 12.0 mm long**; Ettinger 005.51.123 |
| Washer | M2 stainless DIN 125, 2.2 mm ID × 5.0 mm OD × 0.3 mm; RS PRO 527347 |
| Locknut | M2 nylon-insert DIN 985, 4 mm across flats, **height ≤3.0 mm**; TR00000406-000 or dimension-matched equivalent |

The linked parts in [BOM.md](BOM.md) define geometry, not guaranteed availability
or delivered prices. Do not substitute an ISO 10642 socket countersunk screw:
its larger head does not match this horn preparation.

Inspect the horn arm thickness (nominal 1.6 mm), servo case, gland and output
geometry. The **effective radius from the servo shaft to the installed sleeve's
center must be 5.30–5.50 mm after the joint is clamped**. Measure the assembled
sleeve, not merely the stock hole: hole and sleeve-ID play are otherwise extra
unbudgeted errors. If a stock hole cannot meet this, accurately locate and drill
a new hole in a suitable stock horn or reject that horn; do not change the
crank-radius parameter without rerunning the endpoint/clearance checks.

The assembly procedure uses a **215° bare-pin position** and the normal release
endpoint is 40–42°. Receiving inspection must demonstrate **175° of safe,
unloaded physical travel**, with neither endpoint against an internal stop.
This is not guaranteed by a nominal 180° product description. These angles are
geometric angles in the CAD frame, not raw servo-library angle commands. Map
them to measured pulses on a separate bench setup. A servo that cannot safely
reach this assembly span is not accepted for this procedure. The operational
controller must never command the 215° assembly position.

## Ordered procedure

1. Inspect the prints and smooth only identified bearing edges. Confirm the
   finished guide and slot fits before installing hardware. The adapter's
   [outward lower-hole reliefs](docs/adapter-hole-relief.md) must retain at least
   R0.40 arcs and 0.80 mm finished side ligaments; do not round into the passage.
2. Prepare the crank hole to **2.2 mm through**. Countersink the **rear face**
   with a 90° tool just until the specified screw head is flush. Retain at least
   0.4 mm of horn throat beneath the countersink; reject cracks, whitening or an
   enlarged/oversunk hole. Insert the M2×20 bolt from the rear and pre-fit the
   **2 mm horn-side spacer** against the front of the horn. Hold this short
   spacer seated through steps 3–5; it is not clamped until the main sleeve
   and nut are installed.
3. Install the servo and route its lead through the gland-side opening. Fit the
   horn with the bolt and short spacer—**no 12 mm running sleeve, washer or nut yet**. Install the
   horn-center retaining screw now, while the keeper is absent and the tool has
   direct access. Index the unloaded mechanism to the verified 215° assembly pose.
4. Insert the keeper from **+X**. The bare M2 shank passes below the bar and
   through the 2.4 mm assembly entry into the vertical yoke slot. The short
   spacer stays behind the keeper and does not enter the assembly port. Move slowly;
   do not bend the bar or force the shank through a closed wall.
5. Rotate the bare pin from 215° to the 180° latch pose, following the keeper's
   motion. The pin is now in the normal vertical slot.
6. Slide the **12 mm smooth sleeve from +Y**, over the M2 shank, through the
   yoke and against the pre-fitted 2 mm spacer. Their combined length is
   **14 mm**; the joint between the two metal parts remains outside the entire
   keeper running/contact envelope. Add the washer, then a new M2 nylon-insert locknut.
   Use a 4 mm open-ended spanner on the nut and soft-jaw miniature pliers on the
   exposed bolt tip beyond the nut; rear screwdriver access is obstructed by the
   installed servo. Do not rely on countersink friction to stop the screw turning.
   Tighten until the sleeve, washer and horn are seated without axial looseness;
   do not crush the plastic horn. Reject a bolt with damaged engaged threads.
   The keeper must still move freely. Use the
   sleeve's fixed length to establish clearance, not a deliberately loose nut.
7. Verify at least **0.8 mm (two thread pitches)** beyond the fully engaged
   locknut, no horn damage and no relative sleeve/spacer/horn movement. These metal
   parts are rigidly clamped and rotate with the horn; they are not free rollers. Witness-mark
   the nut/bolt relationship. Record the clamped sleeve-center radius.
8. Calibrate latch to 177–183° and release to **40–42°** using measured physical
   positions. Check slot play, full keeper overlap and release opening against
   the inspection limits. Run the unloaded and loaded gates before service.
9. Mount the body using the actual host-interface drawing. Fit the payload,
   command latch and perform the required retention pull-check every time.

For removal, first unload the mechanism, remove the locknut/washer/running sleeve,
then use the bare-pin assembly pose and withdraw the keeper toward +X. Only
then service the horn-center screw. Replace a reused nylon-insert nut if its
prevailing resistance is lost; the physical cycle gate includes nut inspection.

## Geometry and remaining evidence

The nominal clamp stack is horn front Y34.4 → short-spacer end Y36.4 →
running-sleeve end Y48.4 → washer end Y48.7 → nut end at most Y51.7.
The M2×20 countersunk bolt's total length includes its head, so its tip is at
Y52.8, leaving **1.1 mm** past the maximum-height nut. The 14 mm stack keeps
the washer clear of the widened bridge when the keeper tilts and rolls in the
shorter guide span remaining after withdrawal. The 2/12 mm division keeps its
seam on the horn side of the moving keeper; a differently divided stack is not
an equivalent substitution. Do not use the old 12/18 or 10/16 mm sleeve/bolt
combinations. The shaft is at **X47.4/Z6.3**. The guide rear is X34.4, 6 mm beyond
the earlier guide, while the servo/yoke moved 7 mm to leave additional exit space.
This longer support span reduces the friction-coupled actuator demand.

The body is **72×53.5×20 mm**. The servo case extends to Y−0.6; the installed
retained assembly spans Y−0.6..53.5, or **72×54.1×20 mm** overall.
The mounting centers are X4.0/68.5 and Y4.0/50.0 mm, a **64.5×46.0 mm**
rectangular pattern. The outward spacing preserves each 7 mm boss around the
entire 10 mm pilot depth: the old front-right position was shaved by the servo
pocket, and the old rear-left position by the keeper-tip pocket. Do not reuse
an old host-hole pattern. The rear row also gives the 8 mm bridge 0.80 mm nominal
clearance during straight +X insertion, with 0.30 mm reserved for opposing
surface/datum errors. The geometry gate checks every complete boss annulus;
thread-forming torque and host pull-out still require physical qualification.

The adapter tab is 8.20 mm wide in Y, with a 9.00 mm matching socket and
0.40 mm nominal clearance per side. Its original 5.60 mm square hole remains
fully open; the additional R0.40 reliefs extend outward at the two lower
corners only. The upper load plane, tab X thickness and inspected far-face X
limits are unchanged. Accept the measured hole and socket clearances in the
print instructions, including the upward/side-float latching check.

Host mounting screw heads, departing adapter/payload and external harness are
outside that retained envelope. Keep assembly access on +X and +Y before
integrating the module into an aircraft.

The sleeve has 0.4 mm nominal total slot clearance; accept only **0.30–0.50 mm**
after finishing. The larger sleeve cannot traverse the 2.4 mm bare-pin entry.
CAD checks exercise ordered insertion, bare-pin indexing, sleeve insertion,
capture, operating motion, coupled pitch/yaw/roll in the certified remaining
guide span, nominal sleeve/slot contact and washer clearance.
Slight X movement within the already-budgeted slot play is allowed as contact
changes faces; it is reported rather than assuming a perfectly centered pin.

The assembly port changes the yoke force path. Accept measured left-wall
thickness **3.50–3.70 mm**, right-wall thickness **3.00–3.20 mm**, and top-bridge
thickness **2.40–2.60 mm**. The upper bridge alone is widened toward +Y to
**7.90–8.10 mm** breadth; the bar and both sleeve-contact walls remain
**4.90–5.10 mm** wide. The bridge's −Y face must align with the bar/walls' −Y
face within **0.10 mm**. Its underside and top must lie within **0.10 mm** of
Z14.80 and Z17.20 respectively, with the R0.80 underside blend intact. Inspect
all section faces against the current STEP within 0.10 mm; minimum thickness
alone would not bound the actuator's lever arms. These sections are checked
for horizontal actuation as well as vertical payload load, including the
narrow wall shoulders and the wall-to-bar return path.
The slot's separate **R1.50 internal corners** relieve the upper-left opening
hotspot. Require an actual radius of at least 1.50 mm, a smooth profile within
the drawing's surface limits and free finite-sleeve motion; do not restore the
earlier R0.80 slot profile. The hand section screen takes no added-area credit
from these fillets, and a fresh passing structural result remains required.

The current geometric checks pass 6,552 coupled external poses and 567 nominal
finite-sleeve poses; the cap regression also checks the actual pin at 32
radius/shaft/guide-Z extremes. They remain sampled geometry checks. Inspect the
full moving joint and require a positive gap between the spacer seam and the
keeper, as well as the specified 0.50 mm non-contact washer gap.
The [loaded-release protocol](docs/loaded-fit.md) remains a physical gate:
test friction, effective radius, horn clamping, wear, nut retention, full-stroke
motion and departure. Passing CAD checks establishes none of those measurements.
