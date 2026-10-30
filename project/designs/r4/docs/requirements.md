# R4 requirements and evidence map

This table separates a design definition, a computed check and a demonstrated physical capability. All load and reliability entries refer to the complete departing mass, real printed parts and actual purchased drive hardware.

| ID | Requirement or selected design value | Verification and current boundary |
|---|---|---|
| R4-R01 | Departing mass ≤0.454 kg, including adapter, payload-side fasteners and pod | Weigh the actual departing assembly; CAD mass estimates are planning values. |
| R4-R02 | Commanded release under 8.9044 N straight extraction load (2 g equivalent) | Prescribed-contact/force sensitivity plus B02 loaded releases and B03 measured force margin; physical evidence pending. |
| R4-R03 | Sacrificial retention screen at 17.8089 N | Actual-geometry FEA sensitivity and B01 fixture test; no passed proof-load result exists. |
| R4-R04 | Fixed nominal 5 V actuation, measured 4.80–5.10 V at servo during motion | Specified 5 V harness, startup/command tests and instrumented B02/B03 trials; no voltage measurement exists yet. |
| R4-R05 | No command on startup, reset or held FIRE input | Host controller tests exercise the specified command logic; actual output levels and startup twitch remain scope/hardware checks. |
| R4-R06 | Retain a fully seated payload with power removed | Nominal dead-center retained geometry and explicit closed stop; B04 and installation-specific vibration/retention-duration tests required. No passive locking or spring-return claim. |
| R4-R07 | No assumed automatic recovery after mid-stroke power loss | B05 records the resulting physical state. Controller disables and requires a fresh deliberate preparation; it cannot infer the keeper position. |
| R4-R08 | Standalone mechanism, independent of outer receiver rails | Three connected structural prints, four defined host interfaces and FEA fixtures at those interfaces. Host panel flexibility and pull-through require installation qualification. |
| R4-R09 | More supported retaining lug and longer useful withdrawal | 3.5 mm lug, 2.3 mm nominal side webs, long proximal guide, 9.5 mm operating withdrawal within a 10.5 mm mechanical envelope; drawing inspection and clearance checks. |
| R4-R10 | Preloaded keyed seat | Defined key fits and replaceable PORON pads; nominal compression geometry plus measured preload/withdrawal force. Foam thickness alone does not establish preload. |
| R4-R11 | Common engineering FDM manufacture | Oriented print files, fit coupon, dimensioned drawings and process recipe; slicer review and manufactured specimens still required. |
| R4-R12 | Correct exploded assembly | One mesh group per structural printed body, purchased hardware shown separately, integral features fixed together; viewer motion also checked against CAD crank kinematics. |
| R4-R13 | Simple mechanism without a release sear, seating interlock or loose equipment-lock pin | BOM and assembly review. A modified purchased horn and a stock sleeve drive the loaded keeper directly. |
| R4-R14 | Reproducible CAD, clearance, FEA and controller verification in GitHub Actions | Clean output directory, exact input identities, actual current STEP solves, result consistency and explicit pending physical records. |

## Installation input boundaries

The interface analysis includes a documented lateral/CG sensitivity in addition to straight extraction. That does not establish an arbitrary pod envelope. The host designer must supply actual payload CG, acceleration directions, mounting stiffness, vibration spectrum, retained duration, moisture/temperature conditions and departure corridor before claiming installation readiness. Aircraft backing, wing loading, drag, asymmetry, multiple hardpoints and external-battery power transfer remain separate work, as requested by the user.

## Acceptance does not mean qualification

The CSV validator can accept complete measurements that satisfy the prototype criteria. It does not authenticate a test record, estimate a reliability distribution, certify material allowables or grant a working-load rating. A 300-release prototype screen is useful evidence; it is not a claim that accidental release has a demonstrated flight probability.

The project keeps three distinct outcomes: **defined** (the design specifies it), **computed** (the declared software check passed), and **measured** (identified physical evidence exists). The current package intentionally has no measured pass fabricated by the software run.
