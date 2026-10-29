#!/usr/bin/env python3
"""Plot already archived N2 convergence data; does not run FEA."""
from pathlib import Path
import json
import os
import tempfile
os.environ.setdefault("MPLCONFIGDIR", str(Path(tempfile.gettempdir()) / "n2_matplotlib_cache"))
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

HERE = Path(__file__).resolve().parent
data = json.loads((HERE / "summary.json").read_text())
curves = {item["key"]: item for item in data["convergence"]}
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 10,
                     "text.color": "#203447", "axes.labelcolor": "#203447",
                     "axes.edgecolor": "#8da2b1", "xtick.color": "#445c70",
                     "ytick.color": "#445c70", "axes.spines.top": False,
                     "axes.spines.right": False})
fig, axes = plt.subplots(1, 2, figsize=(12, 6.3))
fig.subplots_adjust(left=.075, right=.98, top=.72, bottom=.25, wspace=.25)
styles = [
    ("centered_bonded", "Centered · full backing", "#137d79", "o"),
    ("centered_washers", "Centered · two-hole fixture", "#2c63ac", "s"),
    ("distal_ineffective_bonded", "Distal support absent · full backing", "#b06b15", "^"),
    ("distal_ineffective_washers", "Distal support absent · two-hole fixture", "#a34560", "D"),
]
for case, label, color, marker in styles:
    seq = curves["N2_receiver/" + case]["sequence"]
    baseline = next(x for x in seq if x["h_mm"] == .55)["compliance_Nmm"]
    for ax, key, scale in [(axes[0], "raw_strength_threshold_N", 1),
                            (axes[1], "compliance_Nmm", 100 / baseline)]:
        points = [x for x in seq if x["h_mm"] != .4]
        ys = [x[key] * scale for x in points]
        ax.plot(range(len(points)), ys, marker=marker, color=color, lw=2,
                markersize=5, label=label)
        fine = [x for x in seq if x["h_mm"] == .4]
        if fine:
            ax.plot([2, 3], [ys[-1], fine[0][key] * scale], marker=marker,
                    color=color, lw=1.6, ls="--", markersize=5)
for ax in axes:
    ax.axvspan(1.89, 2.11, color="#dbe8ef", alpha=.5, zorder=-1)
    ax.set_xticks([0, 1, 2, 3], ["1.20", "0.80", "0.55", "0.40 local\n0.55 bulk"])
    ax.set_xlim(-.12, 3.2)
    ax.set_xlabel("Issued target mesh size (mm)", labelpad=10)
    ax.grid(axis="y", color="#e1e8ed", linewidth=.8)
axes[0].set_ylabel("Raw local-stress crossing (N)")
axes[0].set_ylim(bottom=0)
axes[1].set_ylabel("Compliance relative to the 0.55 mm mesh (%)")
axes[1].axhline(100, color="#748a99", linewidth=.8, ls=":")
fig.text(.075, .95, "N2 receiver · mesh refinement evidence", fontsize=18, weight="bold")
fig.text(.075, .906, "Archived P8 PLA results · actual STEP geometry · +Z extraction load", fontsize=11, color="#526b7e")
fig.legend(*axes[0].get_legend_handles_labels(), loc="upper left", bbox_to_anchor=(.065, .868),
           ncol=2, frameon=False, columnspacing=2.0, labelspacing=.65)
fig.text(.075, .105, "The shaded 0.55 mm mesh remains the common reported screen. Dashed segments use a separate local refinement.", fontsize=10)
fig.text(.075, .068, "Compliance stabilizes more quickly than local stress peaks. These curves do not establish a fracture load or working-load rating.", fontsize=10)
(HERE / "figures").mkdir(exist_ok=True)
fig.savefig(HERE / "figures/N2_convergence.png", dpi=170)
fig.savefig(HERE / "figures/N2_convergence.svg")
print("Wrote figures/N2_convergence.png and .svg from summary.json; no FE solve.")
