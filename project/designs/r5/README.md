# R5 – servo hardpoint bench prototype

R5 is the selected design: three PAHT-CF printed parts, one TowerPro MG92B positional servo, and the purchased hardware in [BOM.md](BOM.md). The receiver envelope is **72 × 53.5 × 20 mm**; the servo's 0.6 mm overhang brings the retained assembly envelope to **72 × 54.1 × 20 mm**. Current dimensions come from [params.py](params.py); generated volumes and mass estimates come from `out/cad.json`.

**Physical qualification is pending.** The service target is retention and commanded release of a complete 0.454 kg departing assembly at 2 g total, or **8.9044382 N**. The separate retention proof target is **17.8088764 N**. These are requirements, not established working-load ratings. See the [current requirements](../../../docs/requirements.md), [evidence status](../../../docs/EVIDENCE_AND_READINESS.md) and [complete-assembly bench plan](../../../docs/test-plan.md).

Power-off retention is outside the selected scope. A local servo, connector or supply fault can affect retention while the rest of the aircraft remains powered. Payload power/data, an ejector and a departure sensor are not fitted.

## Mechanism and load path

A printed 5 × 5 mm keeper slides through the receiver guide and the adapter's tab hole. The seated adapter loads the keeper's top surface; the guide mouth and rear roof transfer that force and moment through the body to four host mounting bosses. The lower tab has integral buttresses; its upper engagement section remains 4 mm thick.

A crank on the servo horn drives the keeper's vertical slot. A 2 mm horn-side spacer, 12 mm smooth running sleeve, M2×20 through-bolt, washer and locking nut form the retained pin joint. The hardware stack must rotate rigidly with the horn while leaving the keeper free to move; its spacer seam remains outside the keeper's contact path. Follow the joint dimensions, clamping and receiving checks in the BOM and assembly procedure.

The nominal crank angles are 180° latched and 40° released. These are mechanical assembly angles, not universal servo PWM commands. Dead-center geometry reduces the modeled back-drive torque; backlash, friction, servo holding and guide contact still need measurement. The adapter departs along −Z only after the keeper actually clears it.

## Generate and verify

From the repository root:

```sh
pip install -r project/cad/requirements.txt -r project/analysis/requirements.txt -r project/designs/r5/requirements.txt
cd project/designs/r5
python cad/build.py
python -m unittest discover -s tests -v
python analysis/coupled_forces.py
python analysis/mechanics.py
python analysis/yoke_strength.py > out/yoke_strength.json
python analysis/actuation_fea.py
python analysis/fea.py
python analysis/body_actuation_fea.py
python analysis/risks.py
python cad/viewer.py
python analysis/export_web.py
```

`out/` is generated and ignored by Git. Run the stages on the current checkout; historical files and numbers are not substitutes. The R5 workflow uploads the generated package. A failed calculation, mesh gate or export is a failed stage.

## Fit acceptance

These are inspection limits, not claimed printer or supplier accuracy. Record actual measurements for each assembly and reject or rework parts outside the specified process.

| Feature | Nominal or accepted condition |
|---|---|
| Keeper-to-guide clearance | 0.4 mm nominal total; accept 0.30–0.50 mm in both guide axes |
| Body guide flats | Uninterrupted over X12.50–34.30 mm, with at least 4.80 mm flat width; inspect the [corner reliefs](docs/guide-relief.md) |
| Remaining guidance during withdrawal | At least 17.50 mm throughout the normal stroke; the full 21.8 mm body span is recovered at latch |
| Keeper section and yoke-wall breadth | 4.90–5.10 mm |
| Upper bridge breadth | 7.90–8.10 mm; inspect its face alignment and thickness using [PRINTING.md](PRINTING.md) |
| Internal yoke slot radii | At least R1.50 mm within the STEP surface limits; retain the required finite-pin clearance |
| Relative guide-to-shaft Z datum | Within ±0.20 mm |
| Tab-in-socket position | Nominal 0.4 mm gap per side; the upper tab's −X face must remain within X7.60–8.40 mm over its full float in the receiver datum |
| Upper-tab X thickness | 3.90–4.10 mm at the keeper-hole ligaments, excluding buttress and chamfer |
| Lower adapter-hole reliefs | Outward R0.40 mm, preserving the square passage; directly inspect at least 0.80 mm of finished side ligament on each side, following [the profile requirements](docs/adapter-hole-relief.md) |
| Keeper slot-center-to-tip length | 36.35±0.10 mm to the leading tip plane; the 0.50 mm chamfer and sleeve play are separate |
| Tab-hole clearance | 0.6 mm total, or 0.3 mm per side when centered; when loaded, the vertical clearance lies below the keeper |
| Measured crank radius | See the measured radius bounds in `params.FIT_BOUNDS`, including assembled sleeve eccentricity |
| Calibrated latch / release angles | 177–183° / 40–42° in the assembly frame |
| Pin sleeve-to-slot clearance | 0.30–0.50 mm total; up to ±0.25 mm lost motion at an endpoint |
| Latched engagement | At least 0.5 mm of full keeper section beyond the far tab face, excluding its chamfer |
| Opening clearance | At least 1.50 mm actual clearance, including the 0.50 mm reserve and 1.00 mm spare travel |
| Yoke roof, horn and head clearance | At least 0.5 mm remaining through the accepted loaded-pose path |

[Loaded-fit requirements](docs/loaded-fit.md) define roll, pitch/yaw, datum errors, surface allowances and the sampled geometry checks. The [continuous interval proof](analysis/FIT_ENVELOPE.md) accounts for shortened guide engagement during withdrawal, the raised yoke contact point and pin-slot lost motion. It bounds the inspected rigid geometry; the separate CAD checks screen sampled poses for external interference. Neither establishes frictional motion or elastic loaded release. `analysis/risks.py` evaluates the dimensional limits and analytic extrema. Its separate Monte Carlo output is a sensitivity exercise under guessed distributions, with no measured reliability probability.

## Numerical evidence and limits

Read [analysis/README.md](analysis/README.md) and the current generated `out/coupled_forces.json`, `out/mechanics.json`, `out/yoke_strength.json`, `out/actuation_fea.json`, `out/body_actuation_fea.json`, `out/fea.json` and `out/risks.md`.

- Each assembled FE load is audited for actual force and moment, followed by independent support-reaction equilibrium checks. The original factor-ten load normalization error invalidates the old stress margins and derived stiffness/dynamics.
- Displacement and governing stress utilization must each change by no more than 5% between the final two mesh levels. A large strength ratio cannot bypass convergence.
- Report and viewer use the same provisional criteria, reference load and source identities. Excluded ideal-support regions remain identified; they are not shown as validated low-stress material.
- The [coupled actuation screen](analysis/COUPLED_FORCES.md) solves guide reactions and sleeve friction together, including rigid sleeve rotation, changing tab overlap and the over-center contact branch. It is a level-slot two-dimensional Coulomb model sampled across dimensional limits and angle; tilted contact normals, lateral binding and elastic contact still require characterization.
- Linear component FEA prescribes supports and contact tractions for retention and opening. It does not simulate actual frictional withdrawal, contact redistribution, screw pull-out, arbitrary mis-seating, wear, creep or aircraft dynamics. The separate opening checks must pass as well as retention proof.
- PAHT-CF properties, elastic coupling, compression/shear behavior and the assumed working-torque fraction require process and component characterization. A computed comparison ratio is not a tested failure load.
- The [yoke section screen](analysis/YOKE_LOADS.md) checks service withdrawal and one prescribed closing-jam pose, including the open assembly entry and eccentric pin force. It is not an unrestricted stall rating or a local-notch, contact or interlayer-shear qualification.
- The jam screen checks the reinforced lower root against the same 16 MPa across-layer design allowable. It does not qualify all tab/hole contact poses.
- Compliance-derived modes, rattle impacts and friction sensitivities are model estimates. Regenerate them after geometry or load changes; no old fixed frequency or impact multiplier is retained here.

## Manufacture and assemble

Use [PRINTING.md](PRINTING.md) for print-oriented exports, the trial process, support restrictions, conditioning and dimensional records. Use [BOM.md](BOM.md) for the exact purchased joint and [electronics/README.md](electronics/README.md) for the nominal 5 V terminal contract, 5 V command logic and individual endpoint calibration.

1. Print and inspect the three parts and receive-inspect the actual servo, horn, sleeve and fasteners.
2. Verify the [continuous gland-side cable route](docs/cable-fit.md), then attach the servo using the specified screws.
3. Calibrate the free actuator, index the horn, install the retained pin joint following [ASSEMBLY.md](ASSEMBLY.md), and inspect the entire unloaded path. The 215° assembly-only bare-pin pose requires at least 175° of separately verified safe unloaded actuator travel between release and assembly positions; it is never a normal controller command.
4. Attach the body and adapter through their actual mounting interfaces. Establish installation torque on matching coupons and record it.
5. Command latch deliberately with the adapter supported, inspect full engagement, and then execute the complete-assembly acceptance plan.

The bench controller ships with no valid endpoint calibration and refuses motion until the measured endpoint and fit records are entered. It requires an explicit arm before release and an explicit relatch afterward. Controller command state is not a physical position measurement.

## Physical evidence still required

The [bench plan](../../../docs/test-plan.md) specifies three independent printed assemblies, complete-assembly proof, repeated releases at the service force, measured actual departure, post-cycle proof, defined jam exposure and sustained hold. Record every failure and configuration change. Use the [installation interface](docs/installation-interface.md) before extending a bench result to a particular host, pod, vibration spectrum, environmental range or load vector.

The viewer depicts purchased parts using receiving envelopes rather than certified vendor CAD. Its release animation is explanatory; it does not demonstrate separation.

## Sources

- [TowerPro MG92B](https://towerpro.com.tw/product/mg92b/): manufacturer operating range and torque points.
- [Adafruit 2307](https://www.adafruit.com/product/2307): purchased servo dimensions, signal and endpoint guidance; the manufacturer governs the lower torque-point voltage.
- [Bambu PAHT-CF TDS V3.0](https://idarts.co.jp/3dfs/data_sheet/bambuLab/Bambu_PAHT-CF_TDS.pdf): the manufacturer data sheet matching the selected numerical properties and coupon conditions. Quoted scatter is not a statistical confidence statement.
- [Bambu PAHT-CF](https://wiki.bambulab.com/en/filament-acc/filament/paht-cf): material and processing reference. Supplier data do not qualify this printed geometry.
