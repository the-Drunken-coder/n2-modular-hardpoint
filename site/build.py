"""Build the static N2 status site into _site/. Needs: pip install markdown."""
import html, json, re, shutil, subprocess, pathlib, markdown
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
vparts = json.loads((R / 'project/cad/N2/viewer.json').read_text())['parts']
asm = [{'id': q['id'], 'name': q['name'], 'stl': q['stl'], 'color': q.get('color', '#bbbbbb')} for q in vparts]
for q in asm: shutil.copy(R / 'project/cad/N2' / q['stl'], OUT / 'stl' / q['stl'])
rating = re.findall(r'\*\*(N2 P\d+ hardpoint: [^*]+)\*\*', (R / 'docs/provisional-load-rating.md').read_text())[-1]
cl = (R / 'CHANGELOG.md').read_text().split('\n## ')[1]
links = ''.join(f'<li><a href="docs/{n}.html">{n}</a></li>' for n in docs)
opts = ''.join(f'<option>{s.name}</option>' for s in stls)
body = f"""<h1>N2 modular hardpoint</h1><p>PLA, mechanical-only payload release hardpoint (mini solenoid cross-bolt).</p>
<div class=card><div>Provisional rating (current design)</div><div class=big>{html.escape(rating.split(': ',1)[1].split('. PROVISIONAL')[0])}</div>
<div class=warn>PROVISIONAL. Untested, paper number only. See <a href="docs/provisional-load-rating.html">rating</a>.</div>
<p>Status: design + analysis only. Next: print the current receiver and run the <a href="docs/test-plan.html">proof-load test</a>. ({html.escape(rating.split(':')[0])})</p></div>
<div class=card><h2>3D assembly</h2><p>Drag to orbit, scroll to zoom, right-drag to pan. Toggle parts:</p><div id=tog>{''.join(f'<label style="margin-right:10px"><input type=checkbox checked data-i="{i}"> {html.escape(q["id"].replace("N2_",""))}</label>' for i,q in enumerate(asm))}</div><div id=viewer></div>
<h3>Print parts (STL)</h3><select id=pick>{opts}</select> <a id=dl href="#">download</a> <button id=showp>view print part</button> <button id=showa>back to assembly</button></div>
<div class=card><h2>Latest change</h2>{md('## ' + cl)}</div>
<div class=card><h2>Recent commits</h2><ul class=log>{''.join('<li>'+html.escape(l)+'</li>' for l in log)}</ul></div>
<div class=card><h2>Docs</h2><ul>{links}</ul></div>

<script type=importmap>{{"imports":{{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}}}</script>
<script type=module>
import * as T from 'three';import {{STLLoader}} from 'three/addons/loaders/STLLoader.js';import {{OrbitControls}} from 'three/addons/controls/OrbitControls.js';
const el=document.getElementById('viewer'),r=new T.WebGLRenderer({{antialias:true}});r.setSize(el.clientWidth,el.clientHeight);el.appendChild(r.domElement);
const sc=new T.Scene();sc.background=new T.Color(0xf6f7f9);const cam=new T.PerspectiveCamera(40,el.clientWidth/el.clientHeight,.1,1000);
sc.add(new T.HemisphereLight(0xffffff,0x888888,2.2));const dl=new T.DirectionalLight(0xffffff,1.5);dl.position.set(50,80,60);sc.add(dl);
const oc=new OrbitControls(cam,r.domElement);const asm=new T.Group();asm.rotation.x=-Math.PI/2;sc.add(asm);let pm=null;
const parts={json.dumps(asm)};const ld=new STLLoader();const ms=[];let n=0;
parts.forEach((p,i)=>ld.load('stl/'+p.stl,g=>{{const m=new T.Mesh(g,new T.MeshStandardMaterial({{color:p.color,metalness:.1,roughness:.7}}));m.name=p.name;ms[i]=m;asm.add(m);if(++n==parts.length)fit(asm);}}));
function fit(o){{const b=new T.Box3().setFromObject(o),c=b.getCenter(new T.Vector3()),d=b.getSize(new T.Vector3()).length()*1.2;oc.target.copy(c);cam.position.set(c.x+d,c.y+d*.7,c.z+d);oc.update();}}
document.querySelectorAll('#tog input').forEach(cb=>cb.onchange=()=>{{const m=ms[cb.dataset.i];if(m)m.visible=cb.checked;}});
const pick=document.getElementById('pick');function setdl(){{document.getElementById('dl').href='stl/'+pick.value;}}pick.onchange=setdl;setdl();
document.getElementById('showp').onclick=()=>ld.load('stl/'+pick.value,g=>{{if(pm)sc.remove(pm);g.center();pm=new T.Mesh(g,new T.MeshStandardMaterial({{color:0xdfb667}}));pm.rotation.x=-Math.PI/2;sc.add(pm);asm.visible=false;fit(pm);}});
document.getElementById('showa').onclick=()=>{{if(pm)sc.remove(pm);pm=null;asm.visible=true;fit(asm);}};
(function a(){{requestAnimationFrame(a);r.render(sc,cam);}})();
</script>"""
(OUT / 'index.html').write_text(page('N2 hardpoint', body))
print('built', OUT)
