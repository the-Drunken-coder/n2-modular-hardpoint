#!/usr/bin/env bash
# Viewer assets for the Pages preview (out/viewer, gitignored): full assembly + FEA colormap.
set -euo pipefail
cd "$(dirname "$0")"
pip install -q -r ../../analysis/requirements.txt -r requirements.txt
python analysis/coupled_forces.py
python analysis/mechanics.py
python analysis/yoke_strength.py > out/yoke_strength.json
python analysis/actuation_fea.py
python analysis/fea.py
python analysis/body_actuation_fea.py
python analysis/risks.py
python cad/viewer.py
python analysis/export_web.py
