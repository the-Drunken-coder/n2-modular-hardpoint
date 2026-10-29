# N2 Supported Cross-bolt Hardpoint — P11 website

N2 is the sole active design in this Palantir Blueprint / React / Three.js documentation application. It includes the interactive retained assembly, orbit and zoom, individual part visibility, exploded inspection, prescribed release sequence, PLA analysis, manufacturing instructions, electronics and N2-only downloads.

## Open the issued build

From this directory, serve the static output:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000 in a browser. The viewer fetches local JSON meshes over HTTP; opening the HTML directly from the filesystem may block those requests. Runtime assets are bundled locally. External links lead to cited suppliers/research and the complete project archive.

## Rebuild

The existing build environment uses Node 24.22.1 and pnpm 11.25.0. From this directory:

```sh
pnpm install --frozen-lockfile
node build.mjs
```

The builder selects the first complete N2 tree from `N2_PROJECT_ROOT`, a sibling `n2_focus_p11` directory, the complete package's parent directory, or this checkout's `project/` snapshot. It copies the active CAD/documents, compiles the app and retains dependency license texts. Actual Blueprint core and Three.js versions are recorded in `BUILD_VERIFICATION.json`; the lockfile fixes dependency versions. No runtime CDN is required.

The hosted tree deliberately omits raw FE field and mesh archives. These remain in the complete engineering ZIP under `analysis/results/`. The embedded snapshot can rebuild the documentation without those large solver outputs. Reproduction of the numerical studies requires the complete engineering package.

## Model and evidence limits

The viewer uses the original N2 STEP-derived meshes and prescribed motions. It does not calculate forces or simulate departure dynamics. The keeper retracts in +X and the payload adapter leaves in +Z under an external force; no ejector is modeled. The software depth-buffer renderer provides an interactive fallback when WebGL is unavailable. Purchased actuator internals, spring shape and simplified fastener threads have the limits described in `cad/README.md`.

This revision consolidates the selected design. It does not change the N2 geometry, run new FEA or demonstrate a physical load capacity. The archived PLA simulations and their mesh sensitivity, material assumptions and boundary conditions remain visible. Historical comparison artifacts stay in earlier project deliveries and source history; they are not active models in this website.

`BROWSER_VERIFICATION.json` records the focused managed-browser checks for the N2 build. Browser and software checks do not demonstrate loaded release or payload clearance.
