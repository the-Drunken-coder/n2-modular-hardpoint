# R5 assembly and crank-pin joint

Use the current generated CAD and oriented print files. There are three printed
parts. The crank uses a tightly clamped through-bolt, smooth metal sleeve,
washer and external nylon-insert locknut. The moving keeper is **not** inside
the clamped stack, and the screw does not rely on a thread cut in the plastic horn.

## Purchased crank parts and receiving inspection

| Item | Required dimensions / example |
|---|---|
| Through-bolt | M2×16, 90° Phillips countersunk **DIN 965H / ISO 7046-2**, head ≤3.8 mm diameter; Accu SIK-M2-16-A2 |
| Smooth sleeve | Nickel-plated brass, **4.0 mm OD × 2.2 mm ID × 10.0 mm long**; Ettinger 005.51.103 |
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
endpoint is 40–44°. Receiving inspection must demonstrate **175° of safe,
unloaded physical travel**, with neither endpoint against an internal stop.
This is not guaranteed by a nominal 180° product description. These angles are
geometric angles in the CAD frame, not raw servo-library angle commands. Map
them to measured pulses on a separate bench setup. A servo that cannot safely
reach this assembly span is not accepted for this procedure. The operational
controller must never command the 215° assembly position.

## Ordered procedure

1. Inspect the prints and smooth only identified bearing edges. Confirm the
   finished guide and slot fits before installing hardware.
2. Prepare the crank hole to **2.2 mm through**. Countersink the **rear face**
   with a 90° tool just until the specified screw head is flush. Retain at least
   0.4 mm of horn throat beneath the countersink; reject cracks, whitening or an
   enlarged/oversunk hole. Insert the M2×16 bolt from the rear.
3. Install the servo and route its lead through the gland-side opening. Fit the
   horn with the **bare bolt only**—no sleeve, washer or nut yet. Install the
   horn-center retaining screw now, while the keeper is absent and the tool has
   direct access. Index the unloaded mechanism to the verified 215° assembly pose.
4. Insert the keeper from **+X**. The bare M2 shank passes below the bar and
   through the 2.4 mm assembly entry into the vertical yoke slot. Move slowly;
   do not bend the bar or force the shank through a closed wall.
5. Rotate the bare pin from 215° to the 180° latch pose, following the keeper's
   motion. The pin is now in the normal vertical slot.
6. Slide the **10 mm smooth sleeve from +Y**, over the M2 shank, through the
   yoke and against the horn. Add the washer, then a new M2 nylon-insert locknut.
   Use a 4 mm open-ended spanner on the nut and soft-jaw miniature pliers on the
   exposed bolt tip beyond the nut; rear screwdriver access is obstructed by the
   installed servo. Do not rely on countersink friction to stop the screw turning.
   Tighten until the sleeve, washer and horn are seated without axial looseness;
   do not crush the plastic horn. Reject a bolt with damaged engaged threads.
   The keeper must still move freely. Use the
   sleeve's fixed length to establish clearance, not a deliberately loose nut.
7. Verify at least **0.8 mm (two thread pitches)** beyond the fully engaged
   locknut, no horn damage and no relative sleeve/horn movement. Witness-mark
   the nut/bolt relationship. Record the clamped sleeve-center radius.
8. Calibrate latch to 177–183° and release to **40–44°** using measured physical
   positions. Check slot play, full keeper overlap and release opening against
   the inspection limits. Run the unloaded and loaded gates before service.
9. Mount the body using the actual host-interface drawing. Fit the payload,
   command latch and perform the required retention pull-check every time.

For removal, first unload the mechanism, remove the locknut/washer/sleeve,
then use the bare-pin assembly pose and withdraw the keeper toward +X. Only
then service the horn-center screw. Replace a reused nylon-insert nut if its
prevailing resistance is lost; the physical cycle gate includes nut inspection.

## Geometry and remaining evidence

The nominal clamp stack is horn front Y34.6 → sleeve end Y44.6 → washer end Y44.9 →
nut end at most Y47.9. The M2×16 countersunk bolt's total length includes its
head, so its tip is at Y49.0, leaving **1.1 mm** past the maximum-height nut.
The body is **65×51×20 mm**. The servo case extends to Y−0.4; the installed
retained assembly spans Y−0.4..51, or **65×51.4×20 mm** overall.
The mounting centers are X4.0/61.5 and Y4.0/47.5 mm, a **57.5×43.5 mm**
rectangular pattern. The outward spacing preserves each 7 mm boss around the
entire 10 mm pilot depth: the old front-right position was shaved by the servo
pocket, and the old rear-left position by the keeper-tip pocket. Do not reuse
an old host-hole pattern. The geometry gate checks every complete boss annulus;
thread-forming torque and host pull-out still require physical qualification.

Host mounting screw heads, departing adapter/payload and external harness are
outside that retained envelope. Keep assembly access on +X and +Y before
integrating the module into an aircraft.

The sleeve has 0.4 mm nominal total slot clearance; accept only **0.30–0.50 mm**
after finishing. The larger sleeve cannot traverse the 2.4 mm bare-pin entry.
CAD checks exercise ordered insertion, bare-pin indexing, sleeve insertion,
capture, operating motion, loaded guide-angle corners and washer clearance.
Slight X movement within the already-budgeted slot play is allowed as contact
changes faces; it is reported rather than assuming a perfectly centered pin.

The assembly port changes the yoke force path. Accept a measured left wall ≥3.5 mm, right wall ≥3.0 mm, top bridge ≥2.4 mm
and keeper breadth ≥4.9 mm. These sections must be checked for horizontal actuation as well as vertical payload
load. The [loaded-release protocol](docs/loaded-fit.md) remains a physical gate:
test friction, effective radius, horn clamping, wear, nut retention, full-stroke
motion and departure. Passing CAD checks establishes none of those measurements.
