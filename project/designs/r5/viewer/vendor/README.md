# Viewer dependency

Three.js 0.180.0, vendored from the existing N2 engineering gallery. The original gallery verified the npm archive against registry integrity metadata. `OrbitControls.js` imports the local module. These files are governed by the accompanying MIT license (`THREE-LICENSE.txt`). The R4 viewer makes no CDN requests.

The Canvas fallback in `../software-renderer.js` renders the same meshes and transforms where WebGL is unavailable. It is an inspection illustration, not an interference detector or an FEA engine.
