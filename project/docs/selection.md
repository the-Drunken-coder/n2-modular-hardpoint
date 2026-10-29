# N2 selection and active scope

**Decision:** N2, the supported cross-bolt, is the sole active mechanism. The user selected it after reviewing the common-PLA structural study and the extraction-direction correction.

This P11 consolidation preserves the issued N2 geometry. It changes the active project and documentation scope; it does not strengthen a part, improve an actuator, or create new test evidence.

## Active configuration

- Four printed pieces: receiver, payload adapter, keeper, and actuator clamp.
- One purchased Adafruit 2776 mini solenoid, including its captive armature, return spring, and leads.
- Two ISO 4762 M2 × 16 screws and two ISO 4032 M2 nuts for the clamp.
- A nominal 3 mm keeper stroke in +X, followed by externally driven adapter departure in +Z.
- Mechanical attachment and release only. The local bench controller powers the release actuator; there is no payload power/data interface or aircraft-wide bus assumption.

The primary reason to develop this arrangement is the integral support on both sides of the retained keeper. It adds no printed piece or separate bracket. Its benefit depends on actual distal engagement and on the receiver mounting.

## Qualification status

Selection is not a load rating. The prior PLA FEA remains a linear, prescribed-contact comparison on the current geometry. Its raw local stress-threshold crossings are approximately 21.50 N with continuous rigid backing, 11.26 N with the ideal two-hole fixture, and 7.48–7.53 N when the distal support is ineffective. These are not measured breaking loads, proof loads, permitted payloads, or loaded-release capacities.

No print, physical load test, powered loaded release, creep test, thermal test, or aircraft qualification was added by this consolidation. The next work is to measure fit, support engagement and withdrawal force, then revise the controlling features using that evidence.

## History

The former competing-design comparison remains in the previously delivered project archives. It is historical reference, not part of this active N2 package.
