# Archived numerical HOLD evidence

These reports preserve the original uniform servo-ear traction trial and its isolated bulk-size comparison. They are historical sensitivity evidence, not current passing qualification. The complete original JSON bytes are stored with deterministic gzip compression; no fields or failed results were removed.

The original checkout label was `aa3e947`. Its exact tree, `2d464e1540a4de761b14e874baa0560a2da6948f`, is published in [commit 8aa3567](https://github.com/the-Drunken-coder/n2-modular-hardpoint/commit/8aa35678655a8237b230732abae8a4b00ca75d1b). The reports also retain their individual computational-file, CAD and STEP hashes.

| Archive | Original bytes | Compressed bytes | SHA-256 of decompressed original |
| --- | ---: | ---: | --- |
| [body_uniform_ear_aa3e947.json.gz](body_uniform_ear_aa3e947.json.gz) | 215980 | 21517 | `0b79133ee071480733408a0c6184b75e7e8c0afed4abdaff71f979a11a09bea2` |
| [body_uniform_ear_bulk_comparison_aa3e947.json.gz](body_uniform_ear_bulk_comparison_aa3e947.json.gz) | 39713 | 5741 | `8c29ec42976d9a60e450bfe7d0a2429496d7da1a74ce1c7151420cf78fc484a3` |

To inspect a report from this directory:

```sh
gzip -dc body_uniform_ear_aa3e947.json.gz | python -m json.tool
```

The replacement finite ear-traction assumption and its limits are specified in [BODY_OPENING.md](../BODY_OPENING.md). Current numerical evidence must be regenerated from the current source and is written to `out/`; neither archive supplies a current PASS.
