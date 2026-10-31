#!/usr/bin/env bash
# Viewer assets for the Pages preview (out/viewer, gitignored): full assembly + FEA colormap.
set -euo pipefail
cd "$(dirname "$0")"
pip install -q -r ../../analysis/requirements.txt -r requirements.txt
python analysis/fea.py
python cad/viewer.py
python analysis/export_web.py
