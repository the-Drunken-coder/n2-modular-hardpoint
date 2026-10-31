"""Publish viewer builds to the gh-pages branch and keep versions.json + the sticky PR comment current.

deploy  --dist DIR --target ''|pr/N --label L --title T --sha S
remove  --target pr/N
comment --pr N --body TEXT      (creates or edits the comment containing <!-- n2-preview -->)
"""
import argparse, json, os, shutil, subprocess, sys, tempfile, time
from pathlib import Path

BRANCH = 'gh-pages'
MARK = '<!-- n2-preview -->'


def sh(*a, cwd=None, check=True):
    return subprocess.run(a, cwd=cwd, check=check, text=True, capture_output=True).stdout.strip()


def checkout():
    d = Path(tempfile.mkdtemp())
    url = sh('git', 'remote', 'get-url', 'origin')
    tok = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
    if tok and url.startswith('https://'):
        url = url.replace('https://', f'https://x-access-token:{tok}@')
    if sh('git', 'ls-remote', '--heads', url, BRANCH):
        sh('git', 'clone', '-q', '--depth', '1', '-b', BRANCH, url, str(d))
    else:
        sh('git', 'init', '-q', '-b', BRANCH, str(d)); sh('git', 'remote', 'add', 'origin', url, cwd=d)
    sh('git', 'config', 'user.name', 'github-actions', cwd=d)
    sh('git', 'config', 'user.email', 'github-actions@users.noreply.github.com', cwd=d)
    return d


def index(d):
    vs = []
    for meta in sorted(d.glob('**/build.json')):
        m = json.loads(meta.read_text()); rel = meta.parent.relative_to(d).as_posix()
        m['path'] = '' if rel == '.' else rel + '/'
        vs.append(m)
    vs.sort(key=lambda m: (m['path'] != '', -int(m['path'].split('/')[1]) if m['path'].startswith('pr/') else 0))
    (d / 'versions.json').write_text(json.dumps(vs, indent=1))
    (d / '.nojekyll').touch()


def push(d, msg):
    index(d)
    sh('git', 'add', '-A', cwd=d)
    if not sh('git', 'status', '--porcelain', cwd=d):
        return print('no change')
    sh('git', 'commit', '-q', '-m', msg, cwd=d)
    for i in range(5):  # other previews may push concurrently
        if subprocess.run(['git', 'push', '-q', 'origin', BRANCH], cwd=d).returncode == 0:
            return print('pushed', msg)
        subprocess.run(['git', 'pull', '-q', '--rebase', '-X', 'theirs', 'origin', BRANCH], cwd=d)
        index(d); sh('git', 'add', '-A', cwd=d)
        sh('git', 'commit', '-q', '--amend', '--no-edit', cwd=d, check=False)
        time.sleep(2 + 3 * i)
    sys.exit('push failed')


def clear(dest, keep_pr):
    for p in dest.iterdir():
        if p.name == '.git' or (keep_pr and p.name == 'pr'):
            continue
        shutil.rmtree(p) if p.is_dir() else p.unlink()


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('cmd')
    for k in ('dist', 'target', 'label', 'title', 'sha', 'pr', 'body'):
        ap.add_argument('--' + k, default='')
    a = ap.parse_args()
    if a.cmd == 'comment':
        repo = os.environ['GITHUB_REPOSITORY']
        ids = sh('gh', 'api', f'repos/{repo}/issues/{a.pr}/comments', '--paginate', '--jq', f'.[] | select(.body | contains("{MARK}")) | .id').split()
        if ids:
            sh('gh', 'api', '-X', 'PATCH', f'repos/{repo}/issues/comments/{ids[0]}', '-f', f'body={a.body}')
        else:
            sh('gh', 'api', f'repos/{repo}/issues/{a.pr}/comments', '-f', f'body={a.body}')
        return
    d = checkout()
    if a.cmd == 'deploy':
        dest = d / a.target if a.target else d
        dest.mkdir(parents=True, exist_ok=True); clear(dest, keep_pr=not a.target)
        shutil.copytree(a.dist, dest, dirs_exist_ok=True)
        (dest / 'build.json').write_text(json.dumps({'label': a.label, 'title': a.title, 'sha': a.sha, 'built': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())}))
        push(d, f'deploy {a.target or "main"} @ {a.sha[:7]}')
    elif a.cmd == 'remove':
        shutil.rmtree(d / a.target, ignore_errors=True)
        push(d, f'remove {a.target}')


if __name__ == '__main__':
    main()
