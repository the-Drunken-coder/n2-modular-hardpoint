# Servo gland and lead route

The complete MG92B reservation includes the mounting ears, gear bosses and the
lead gland. It is checked against the receiver, and the viewer uses the same
gland dimensions. These are inspection envelopes; confirm the purchased servo
before printing a production batch.

The lead exits the servo's **−X end**. A continuous **10.2 × 6 mm** opening at
X 24.9–35.1 / Y 0.5–6.5 runs from the underside to the wing face. Feed the connector
through this opening before seating the servo. Route the wires beside the
gland, up through the opening, and into a matching opening in the host frame.
No wire crosses the keeper, horn sweep or an ear-screw pilot.

The CAD reserves an **8 × 4 mm connector** pass-through and at least 1 mm around
that rectangle. Measure the actual plug; if larger, revise the channel and its
test rather than force or depin it. Inspect that the gland fits without contact,
the lead is not pinched during insertion, and the wire bend is relaxed (at least
three cable diameters as the initial inspection allowance, or the supplier's
larger minimum). Apply external strain relief on the host side; do not let cable
tension pull on the servo gland. The channel is an opening, not an environmental
seal.

`tests/test_geometry.py` exercises the complete viewer servo, a connector sweep,
and the exact 20 mm³ old-wall regression. `cad/build.py` also gates the complete
case and connector path. The old rectangular-case-only test missed the clash.
