# R5 fresh component simulation

18 actual STEP/mesh solves; **numerical_checks_passed**.

Loads use the new downward-facing cartridge geometry. The receiver is held at its actual captive-nut bearing interfaces; the adapter at its payload mounts. Balanced keeper contact cases use six rigid-motion gauges. The blocked-drive fixture, when present, is a separate deliberately restrained component test.

2 g payload = 8.9044382 N. Opposing pad preload = 3 N. Material: isotropic solid PLA comparison, E = 2200 MPa, Poisson ratio 0.35. These are not measured PAHT-CF properties or material allowables.

| Part / case | h, mm | Maximum displacement, mm | Raw tension, MPa | Raw compression, MPa |
| --- | ---: | ---: | ---: | ---: |
| adapter / stroke_0p000mm | 0.45 | 0.01100 | 7.87 | 4.09 |
| adapter / stroke_4p700mm | 0.45 | 0.03814 | 32.27 | 59.62 |
| keeper / blocked_drive_12N | 0.45 | 1.71993 | 33.06 | 16.54 |
| keeper / stroke_0p000mm | 0.45 | 0.00916 | 2.56 | 3.60 |
| keeper / stroke_1p000mm | 0.45 | 0.15944 | 6.88 | 10.64 |
| keeper / stroke_4p700mm | 0.45 | 0.03290 | 28.95 | 58.03 |
| receiver / distal_support_lost | 0.9 | 0.07327 | 16.64 | 40.05 |
| receiver / retained_2g | 0.9 | 0.06321 | 8.57 | 21.84 |
| receiver / retained_4g_screen | 0.9 | 0.11922 | 16.44 | 41.83 |

## Mesh sensitivity

| Part / case | Displacement change | Tension change | Compression change |
| --- | ---: | ---: | ---: |
| adapter / stroke_0p000mm | 0.92% | 14.28% | 28.64% |
| adapter / stroke_4p700mm | 0.59% | 31.80% | 13.36% |
| keeper / blocked_drive_12N | 0.40% | 10.09% | 1.42% |
| keeper / stroke_0p000mm | 0.10% | 1.47% | 9.74% |
| keeper / stroke_1p000mm | 0.76% | 0.57% | 5.23% |
| keeper / stroke_4p700mm | 0.73% | 9.67% | 18.11% |
| receiver / distal_support_lost | 0.63% | 23.30% | 4.98% |
| receiver / retained_2g | 0.67% | 32.42% | 4.15% |
| receiver / retained_4g_screen | 0.66% | 32.11% | 4.18% |

Raw local contact peaks may remain mesh-sensitive. Two mesh levels are a sensitivity check, not proof of asymptotic convergence. Uniform tractions do not reproduce nonlinear edge yielding, wear or departure dynamics.

Each solve requires force error < 0.0001 N, moment error < 0.001 N mm, free residual < 0.0000001, CAD/mesh volume difference < 2%, and gauge reaction < 0.0001 N. Input/result hashes must match.

Component screening only. Receiver cases include payload/preload reactions; servo/clamp inertia and actuator mounting reactions are omitted. Casing, servo internals, bolts, host wing, fatigue, creep and lateral flight loads are not solved. Prescribed far-roof contact does not solve closure of the initial guide gap or assembled rocking.

A numerical pass establishes neither loaded servo performance nor a payload or flight rating.
