import { useEffect, useMemo, useState } from 'react';
import { marked } from 'marked';
import {
  Alignment, AnchorButton, Button, Callout, Card, Checkbox, Classes, Divider, Elevation, H3, H4, H5, HTMLSelect,
  HTMLTable, Intent, Menu, MenuItem, Navbar, NonIdealState, Radio, RadioGroup, Spinner, Tab, Tabs, Tag, Slider,
} from '@blueprintjs/core';
import Viewer3D from './Viewer3D.jsx';

const D = 'data/';
const partUrl = (rev, p) => `${D}revs/${rev}/${p.stl}`;
const short = id => id.replace(/^N2_/, '');
const fmt = (n, d = 2) => (n == null ? '—' : Number(n).toFixed(d));

function useHash() {
  const [h, setH] = useState(location.hash.slice(2) || 'viewer');
  useEffect(() => { const f = () => setH(location.hash.slice(2) || 'viewer'); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f); }, []);
  return [h, v => { location.hash = '/' + v; }];
}

function RatingCard({ rating, compact }) {
  if (!rating) return <Callout intent={Intent.NONE} title="No rating at this revision">The FEA review hadn't been done yet.</Callout>;
  const [head, rest] = rating.text.split(': ');
  return (
    <Card elevation={Elevation.TWO} className="rating">
      <div className={Classes.TEXT_MUTED}>{head} · provisional load rating</div>
      <div className="big">{rest.split('. PROVISIONAL')[0]}</div>
      {!compact && <Tag intent={Intent.WARNING} large minimal icon="warning-sign">PROVISIONAL, untested: paper number (FEA screen ÷ SF 2)</Tag>}
    </Card>
  );
}

function ViewerTab({ idx }) {
  const revs = idx.revisions;
  const [rid, setRid] = useState(revs[revs.length - 1].id);
  const rev = revs.find(r => r.id === rid);
  const [hidden, setHidden] = useState({});
  const [pick, setPick] = useState('N2_receiver');
  const [isolate, setIsolate] = useState(false);
  const part = rev.parts.find(p => p.id === pick) || rev.parts[0];
  const layers = useMemo(() => rev.parts.map(p => ({
    key: `${rid}/${p.id}`, url: partUrl(rid, p), color: p.id === pick && !isolate ? '#4c90f0' : p.color,
    visible: isolate ? p.id === pick : !hidden[p.id],
  })), [rev, hidden, pick, isolate]);
  return (
    <div className="split">
      <Card className="side" elevation={Elevation.ONE}>
        <H5>Revision</H5>
        <HTMLSelect fill value={rid} onChange={e => setRid(e.target.value)} options={revs.map(r => ({ value: r.id, label: `${r.label} · ${r.commit}` }))} />
        <p className={Classes.TEXT_MUTED + ' small'}>{rev.subject}</p>
        <RatingCard rating={rev.rating} compact />
        <Divider />
        <H5>Parts</H5>
        <div className="row"><Button small text="All" onClick={() => setHidden({})} /><Button small text="None" onClick={() => setHidden(Object.fromEntries(rev.parts.map(p => [p.id, true])))} /></div>
        {rev.parts.map(p => (
          <Checkbox key={p.id} checked={!hidden[p.id]} onChange={() => setHidden(h => ({ ...h, [p.id]: !h[p.id] }))}
            labelElement={<span><span className="swatch" style={{ background: p.color }} />{short(p.id)}</span>} />
        ))}
        <Divider />
        <H5>Part picker</H5>
        <HTMLSelect fill value={pick} onChange={e => setPick(e.target.value)} options={rev.parts.map(p => ({ value: p.id, label: short(p.id) }))} />
        <Checkbox checked={isolate} onChange={() => setIsolate(!isolate)} label="Show only this part" />
        <p className="small">{part.name}</p>
        <div className="row">
          <AnchorButton icon="download" small text="STL" href={partUrl(rid, part)} download={`${rid}_${part.stl}`} />
          {part.print_stl && <AnchorButton icon="print" small intent={Intent.PRIMARY} text="Print STL" href={`${D}revs/${rid}/${part.print_stl}`} download={`${rid}_${part.print_stl}`} />}
        </div>
      </Card>
      <div className="main">
        <Viewer3D left={layers} fitKey={rid + isolate + (isolate ? pick : '')} />
        <div className="hint">Drag to orbit · scroll to zoom · right-drag to pan · picked part highlighted blue</div>
      </div>
    </div>
  );
}

const MODES = { side: 'Side by side', overlay: 'Overlay', diff: 'Geometric diff' };

function CompareTab({ idx, init = [] }) {
  const revs = idx.revisions;
  const ok = id => revs.some(r => r.id === id);
  const [a, setA] = useState(ok(init[0]) ? init[0] : revs[0].id), [b, setB] = useState(ok(init[1]) ? init[1] : revs[revs.length - 1].id);
  const [mode, setMode] = useState(MODES[init[2]] ? init[2] : 'side');
  useEffect(() => { history.replaceState(null, '', `#/compare/${a}/${b}/${mode}`); }, [a, b, mode]);
  const [opacity, setOpacity] = useState(0.35);
  const [onlyChanged, setOnlyChanged] = useState(false);
  const order = id => revs.findIndex(r => r.id === id);
  const [A, B] = [revs.find(r => r.id === a), revs.find(r => r.id === b)];
  const [lo, hi] = order(a) <= order(b) ? [A, B] : [B, A];
  const diff = idx.diffs[`${lo.id}__${hi.id}`] || {};
  const shaA = Object.fromEntries(A.parts.map(p => [p.id, p.sha]));
  const changed = new Set(B.parts.filter(p => shaA[p.id] !== p.sha).map(p => p.id));
  A.parts.forEach(p => { if (!B.parts.find(q => q.id === p.id)) changed.add(p.id); });
  const show = p => !onlyChanged || changed.has(p.id);
  const col = p => (changed.has(p.id) ? '#ff9f43' : '#6b7785');

  const { left, right } = useMemo(() => {
    if (a === b) return { left: B.parts.map(p => ({ key: `${b}/${p.id}`, url: partUrl(b, p), color: p.color })) };
    if (mode === 'side') return {
      left: A.parts.filter(show).map(p => ({ key: `${a}/${p.id}`, url: partUrl(a, p), color: col(p) })),
      right: B.parts.filter(show).map(p => ({ key: `${b}/${p.id}`, url: partUrl(b, p), color: col(p) })),
    };
    if (mode === 'overlay') return {
      left: [
        ...A.parts.filter(show).map(p => ({ key: `A/${a}/${p.id}`, url: partUrl(a, p), color: '#4c90f0', opacity, order: 1 })),
        ...B.parts.filter(show).map(p => ({ key: `B/${b}/${p.id}`, url: partUrl(b, p), color: '#f0b726', opacity, order: 2 })),
      ],
    };
    const fwd = order(a) <= order(b); // diff files are lo->hi; swap meaning if A is newer
    const extra = [];
    for (const [pid, e] of Object.entries(diff)) {
      if (e.error) continue;
      const add = `${D}diffs/${lo.id}__${hi.id}/${pid}_added.stl`, rem = `${D}diffs/${lo.id}__${hi.id}/${pid}_removed.stl`;
      if (e.added) extra.push({ key: `d/${lo.id}${hi.id}/${pid}/a`, url: add, color: fwd ? '#32a467' : '#e76a6e', order: 3, offset: true });
      if (e.removed) extra.push({ key: `d/${lo.id}${hi.id}/${pid}/r`, url: rem, color: fwd ? '#e76a6e' : '#32a467', order: 3, offset: true });
    }
    return { left: [...B.parts.filter(show).map(p => ({ key: `g/${b}/${p.id}`, url: partUrl(b, p), color: '#8f99a8', opacity, order: 1 })), ...extra] };
  }, [a, b, mode, opacity, onlyChanged]);

  const pkeys = [...new Set([...Object.keys(A.params), ...Object.keys(B.params)])];
  const pv = v => (typeof v === 'string' ? v.replace(' (implicit)', '') : String(v));
  const prow = pkeys.filter(k => pv(A.params[k]) !== pv(B.params[k]));
  const ra = A.rating?.N, rb = B.rating?.N;
  const clA = new Set(A.changelog.map(c => c.title));
  const clDelta = B.changelog.filter(c => !clA.has(c.title));
  const clDeltaRev = A.changelog.filter(c => !new Set(B.changelog.map(x => x.title)).has(c.title));

  return (
    <div className="split">
      <Card className="side" elevation={Elevation.ONE}>
        <H5>Compare</H5>
        <label className={Classes.LABEL}>A (left / blue)<HTMLSelect fill value={a} onChange={e => setA(e.target.value)} options={revs.map(r => ({ value: r.id, label: r.label }))} /></label>
        <label className={Classes.LABEL}>B (right / gold)<HTMLSelect fill value={b} onChange={e => setB(e.target.value)} options={revs.map(r => ({ value: r.id, label: r.label }))} /></label>
        <Button small icon="swap-horizontal" text="Swap" onClick={() => { setA(b); setB(a); }} />
        <Divider />
        <RadioGroup label="Mode" selectedValue={mode} onChange={e => setMode(e.currentTarget.value)}>
          {Object.entries(MODES).map(([k, v]) => <Radio key={k} value={k} label={v} />)}
        </RadioGroup>
        {mode !== 'side' && <><label className={Classes.LABEL}>Ghost opacity</label><Slider min={0.05} max={1} stepSize={0.05} labelStepSize={0.5} value={opacity} onChange={setOpacity} /></>}
        <Checkbox checked={onlyChanged} onChange={() => setOnlyChanged(!onlyChanged)} label="Only changed parts" />
        <Divider />
        <div className="legend small">
          {mode === 'side' && <><span className="swatch" style={{ background: '#ff9f43' }} />changed part <span className="swatch" style={{ background: '#6b7785' }} />unchanged</>}
          {mode === 'overlay' && <><span className="swatch" style={{ background: '#4c90f0' }} />A {A.label} <span className="swatch" style={{ background: '#f0b726' }} />B {B.label}</>}
          {mode === 'diff' && <><span className="swatch" style={{ background: '#32a467' }} />added A→B <span className="swatch" style={{ background: '#e76a6e' }} />removed A→B <span className="swatch" style={{ background: '#8f99a8' }} />B ghost</>}
        </div>
        <Divider />
        <H5>Changed parts</H5>
        {changed.size === 0 ? <p className="small">None: identical STLs.</p> :
          <HTMLTable compact className="full small">
            <thead><tr><th>Part</th><th>+mm³</th><th>−mm³</th></tr></thead>
            <tbody>{[...changed].map(id => { const e = diff[id] || {}; const [ad, rm] = order(a) <= order(b) ? [e.added_mm3, e.removed_mm3] : [e.removed_mm3, e.added_mm3];
              return <tr key={id}><td>{short(id)}</td><td>{fmt(ad)}</td><td>{fmt(rm)}</td></tr>; })}</tbody>
          </HTMLTable>}
      </Card>
      <div className="main">
        {a === b ? <Callout intent={Intent.PRIMARY} icon="info-sign">Pick two different revisions.</Callout> : null}
        <div className="cmp-head">{mode === 'side' && right ? <><Tag large minimal>{A.label}</Tag><Tag large minimal>{B.label}</Tag></> : <Tag large minimal>{MODES[mode]}: {A.label} → {B.label}</Tag>}</div>
        <Viewer3D left={left} right={right} fitKey={mode + a + b} />
        {right && <div className="hint">Cameras are synced.</div>}
        <div className="grid2">
          <Card>
            <H5>Rating</H5>
            <HTMLTable compact className="full">
              <tbody>
                <tr><td>{A.label}</td><td>{A.rating ? `${fmt(ra, 1)} N` : '—'}</td></tr>
                <tr><td>{B.label}</td><td>{B.rating ? `${fmt(rb, 1)} N` : '—'}</td></tr>
                <tr><td><b>Δ</b></td><td>{ra != null && rb != null ? <Tag intent={rb >= ra ? Intent.SUCCESS : Intent.DANGER}>{rb - ra >= 0 ? '+' : ''}{fmt(rb - ra, 1)} N ({fmt((rb / ra - 1) * 100, 0)}%)</Tag> : '—'}</td></tr>
              </tbody>
            </HTMLTable>
          </Card>
          <Card>
            <H5>Changed parameters (build_n2.py)</H5>
            {prow.length === 0 ? <p className="small">No parameter changes.</p> :
              <HTMLTable compact striped className="full">
                <thead><tr><th>Parameter</th><th>{A.id}</th><th>{B.id}</th></tr></thead>
                <tbody>{prow.map(k => <tr key={k}><td><code>{k}</code></td><td>{String(A.params[k] ?? '—')}</td><td>{String(B.params[k] ?? '—')}</td></tr>)}</tbody>
              </HTMLTable>}
          </Card>
        </div>
        <Card>
          <H5>Changelog delta</H5>
          {clDelta.length + clDeltaRev.length === 0 && <p className="small">No changelog entries between these revisions.</p>}
          {clDelta.map(c => <div key={c.title}><H4>{c.title} <Tag minimal intent={Intent.SUCCESS}>in B</Tag></H4><Md text={c.body} /></div>)}
          {clDeltaRev.map(c => <div key={c.title}><H4>{c.title} <Tag minimal intent={Intent.DANGER}>only in A</Tag></H4><Md text={c.body} /></div>)}
        </Card>
      </div>
    </div>
  );
}

const Md = ({ text }) => <div className={Classes.RUNNING_TEXT + ' md'} dangerouslySetInnerHTML={{ __html: marked.parse(text.replace(/\]\((?:\.\.\/)?(?:docs\/)?([\w-]+)\.md\)/g, '](#/docs/$1)')) }} />;

function StatusTab({ idx }) {
  const cur = idx.revisions[idx.revisions.length - 1];
  return (
    <div className="status">
      <RatingCard rating={idx.rating} />
      <Card>
        <H4>Status</H4>
        <p>Design + analysis only; nothing printed or tested. Next: print the current receiver ({cur.label}) and run the <a href="#/docs/test-plan">proof-load test</a>.</p>
      </Card>
      <Card><H4>Latest change</H4>{cur.changelog[0] && <><H5>{cur.changelog[0].title}</H5><Md text={cur.changelog[0].body} /></>}</Card>
      <Card>
        <H4>Revisions</H4>
        <HTMLTable compact striped className="full">
          <thead><tr><th>Revision</th><th>Commit</th><th>Date</th><th>Rating</th><th>Summary</th></tr></thead>
          <tbody>{[...idx.revisions].reverse().map(r => <tr key={r.id}><td><Tag minimal>{r.label}</Tag></td><td><a href={`https://github.com/${idx.repo}/commit/${r.commit}`}>{r.commit}</a></td><td>{r.date.slice(0, 10)}</td><td>{r.rating ? `${fmt(r.rating.N, 1)} N` : '—'}</td><td className="small">{r.subject}</td></tr>)}</tbody>
        </HTMLTable>
      </Card>
      <Card>
        <H4>Recent commits</H4>
        <HTMLTable compact striped className="full mono">
          <tbody>{idx.commits.map(c => <tr key={c.hash}><td>{c.date}</td><td><a href={`https://github.com/${idx.repo}/commit/${c.hash}`}>{c.hash}</a></td><td>{c.subject}</td></tr>)}</tbody>
        </HTMLTable>
      </Card>
    </div>
  );
}

function DocsTab({ docs, name }) {
  const names = Object.keys(docs);
  const cur = docs[name] ? name : 'provisional-load-rating';
  return (
    <div className="split">
      <Card className="side" elevation={Elevation.ONE}>
        <Menu>{names.map(n => <MenuItem key={n} icon="document" text={n} active={n === cur} href={`#/docs/${n}`} />)}</Menu>
      </Card>
      <Card className="main doc"><Md text={docs[cur]} /></Card>
    </div>
  );
}

export default function App() {
  const [idx, setIdx] = useState(null), [docs, setDocs] = useState(null), [err, setErr] = useState(null);
  const [route, go] = useHash();
  useEffect(() => {
    Promise.all([fetch(D + 'index.json').then(r => r.json()), fetch(D + 'docs.json').then(r => r.json())]).then(([i, d]) => { setIdx(i); setDocs(d); }).catch(setErr);
  }, []);
  const tab = route.split('/')[0];
  return (
    <>
      <Navbar fixedToTop>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading><b>N2 modular hardpoint</b></Navbar.Heading>
          <Navbar.Divider />
          <Tabs id="nav" selectedTabId={tab} onChange={t => go(t)} large>
            <Tab id="viewer" title="Viewer" icon="cube" />
            <Tab id="compare" title="Compare" icon="comparison" />
            <Tab id="status" title="Status" icon="dashboard" />
            <Tab id="docs" title="Docs" icon="manual" />
          </Tabs>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {idx?.rating && <Tag large intent={Intent.WARNING} minimal>{idx.rating.text.split(':')[0]} · {fmt(idx.rating.N, 1)} N provisional</Tag>}
          <Navbar.Divider />
          {idx && <AnchorButton minimal icon="git-repo" href={`https://github.com/${idx.repo}`} text={idx.head} />}
        </Navbar.Group>
      </Navbar>
      <div className="page">
        {err ? <NonIdealState icon="error" title="Couldn't load site data" description={String(err)} /> :
          !idx ? <Spinner /> :
            tab === 'compare' ? <CompareTab idx={idx} init={route.split('/').slice(1)} /> :
              tab === 'status' ? <StatusTab idx={idx} /> :
                tab === 'docs' ? <DocsTab docs={docs} name={route.split('/')[1]} /> : <ViewerTab idx={idx} />}
      </div>
    </>
  );
}
