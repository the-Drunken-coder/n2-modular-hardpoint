# R5 physical evidence records

These CSV files contain headers only. They are templates, **not completed tests**. Follow the repository's `docs/test-plan.md` and retain raw traces/video alongside filled records. Use a new specimen/configuration identity after a geometry, print-process, critical fit or hardware change.

- `specimens.csv`: revision, process, hardware and fit acceptance.
- `retention.csv`: complete-assembly proof and sustained holds, including post-test inspection.
- `releases.csv`: every command, measured keeper-clear/payload-clear time, power minimum and failure.
- `faults.csv`: defined jam, startup, STOP, signal and power interruption observations.
- `installation.csv`: explicit host/pod force/moment, environment, power and departure contract.

Do not omit failed attempts, overwrite earlier configurations or infer zero field-failure probability from a finite campaign. A qualified reviewer must associate actual measurements with the exact sources before changing physical evidence status.
