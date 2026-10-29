"""Build the static N2 status site into _site/. Needs: pip install markdown."""
import html, shutil, subprocess, pathlib, markdown
R = pathlib.Path(__file__).resolve().parent.parent
OUT = R / '_site'
shutil.rmtree(OUT, ignore_errors=True); (OUT / 'docs').mkdir(parents=True); (OUT / 'stl').mkdir()
md = lambda t: markdown.markdown(t, extensions=['tables', 'fenced_code'])
CSS = """body{font:15px/1.55 system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px;color:#1d2125}
h1{margin-bottom:0}nav a{margin-right:14px}table{border-collapse:collapse;margin:12px 0}td,th{border:1px solid #ccd;padding:4px 8px}
code,pre{background:#f3f4f6;border-radius:4px}pre{padding:10px;overflow:auto}.card{border:1px solid #dde;border-radius:8px;padding:14px 18px;margin:16px 0}
.big{font-size:28px;font-weight:700}.warn{color:#a15c00;font-weight:600}#viewer{width:100%;height:420px;background:#f6f7f9;border-radius:8px}
ul.log{font-family:monospace;font-size:13px}"""
def page(title, body, rel=''):
    return f"""<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>{title}</title>
<style>{CSS}</style><nav><a href="{rel}index.html">Home</a><a href="{rel}docs/provisional-load-rating.html">Rating</a><a href="{rel}docs/fea-review.html">FEA review</a><a href="{rel}docs/test-plan.html">Test plan</a><a href="{rel}docs/changelog.html">Changelog</a></nav>{body}"""
docs = {p.stem: p for p in sorted((R / 'docs').glob('*.md'))}
docs['changelog'] = R / 'CHANGELOG.md'
for name, p in docs.items():
    (OUT / 'docs' / f'{name}.html').write_text(page(name, md(p.read_text().replace('.md)', '.html)')), '../'))
log = subprocess.run(['git', 'log', '-n', '20', '--date=short', '--pretty=%ad %h %s'], cwd=R, capture_output=True, text=True).stdout.splitlines()
stls = sorted((R / 'project/cad/N2').glob('*_print.stl'))
for s in stls: shutil.copy(s, OUT / 'stl' / s.name)
cl = (R / 'CHANGELOG.md').read_text().split('\n## ')[1]
links = ''.join(f'<li><a href="docs/{n}.html">{n}</a></li>' for n in docs)
opts = ''.join(f'<option>{s.name}</option>' for s in stls)
body = f"""<h1>N2 modular hardpoint</h1><p>PLA, mechanical-only payload release hardpoint (mini solenoid cross-bolt).</p>
<div class=card><div>Provisional rating (current design P12)</div><div class=big>3.4 N static pull-out ≈ 340 g at 1 g</div>
<div class=warn>PROVISIONAL. Untested, paper number only (FEA screen 10.3 N ÷ SF 3).</div>
<p>Status: design + analysis only. Next: print P12 and run the <a href="docs/test-plan.html">proof-load test</a>.</p></div>
<div class=card><h2>Latest change</h2>{md('## ' + cl)}</div>
<div class=card><h2>Recent commits</h2><ul class=log>{''.join('<li>'+html.escape(l)+'</li>' for l in log)}</ul></div>
<div class=card><h2>Docs</h2><ul>{links}</ul></div>
<div class=card><h2>Print parts (STL)</h2><select id=pick>{opts}</select> <a id=dl href="#">download</a><div id=viewer></div></div>
<script type=importmap>{{"imports":{{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}}}</script>
<script type=module>
import * as T from 'three';import {{STLLoader}} from 'three/addons/loaders/STLLoader.js';import {{OrbitControls}} from 'three/addons/controls/OrbitControls.js';
const el=document.getElementById('viewer'),r=new T.WebGLRenderer({{antialias:true}});r.setSize(el.clientWidth,el.clientHeight);el.appendChild(r.domElement);
const sc=new T.Scene();sc.background=new T.Color(0xf6f7f9);const cam=new T.PerspectiveCamera(40,el.clientWidth/el.clientHeight,.1,1000);
sc.add(new T.HemisphereLight(0xffffff,0x888888,2.2));const dl=new T.DirectionalLight(0xffffff,1.5);dl.position.set(50,80,60);sc.add(dl);
const oc=new OrbitControls(cam,r.domElement);let mesh;
function load(n){{document.getElementById('dl').href='stl/'+n;new STLLoader().load('stl/'+n,g=>{{if(mesh)sc.remove(mesh);g.center();g.computeBoundingSphere();
mesh=new T.Mesh(g,new T.MeshStandardMaterial({{color:0xdfb667}}));mesh.rotation.x=-Math.PI/2;sc.add(mesh);const d=g.boundingSphere.radius*3;cam.position.set(d,d*.8,d);oc.update();}});}}
document.getElementById('pick').onchange=e=>load(e.target.value);load(document.getElementById('pick').value);
(function a(){{requestAnimationFrame(a);r.render(sc,cam);}})();
</script>"""
(OUT / 'index.html').write_text(page('N2 hardpoint', body))
print('built', OUT)
