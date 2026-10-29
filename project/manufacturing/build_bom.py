"""Recompute N2 material quantities and historical-cost arithmetic from frozen CAD.

No price lookup occurs. Prices are the project's 2026-10-26 observations or
explicit allowances; null means no supported price has been assigned.
"""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / "cad/N2/manifest.json").read_text())
# Geometry fingerprints from the preserved P11 import. The original manifest
# predates geometry_revision, so a metadata label alone is not a valid guard.
P11_PRINT_STEP_SHA256 = {
    "N2_receiver": "75ab803d24868cc4bf55335c6f5efd343688ff3f107a22b682b85ce0224a777d",
    "N2_adapter": "06fb0220b7c0cb94ed453cca4de5fbe115497101730e6bcb82289e553e829944",
    "N2_keeper": "6bf0237bdb03c33f2bd48522ccbad733c17a834ed17b45322ba89b3f03171b82",
    "N2_clamp": "7e4a325f73abf815ea9b7ae714e627717d954603b2c89dcba6fd23c01ac4eeaf",
}
actual_print_hashes = {
    p["id"]: p.get("step_sha256") for p in MANIFEST["parts"] if "print_stl" in p
}
if actual_print_hashes != P11_PRINT_STEP_SHA256:
    raise SystemExit(
        "Historical P11/PLA BOM generator: use a verified complete P11 archive. "
        "Current geometry/material must not be labeled as P11. "
        "For P14 procurement see manufacturing/ORDER_LIST.md and docs/print-requirements.md."
    )
DENSITY = 1.24  # g/cm^3; shared PLA analysis assumption, not measured print density.
FILAMENT_USD_KG = 25.0  # Budget allowance, not a catalog observation.


def item(identifier, category, description, part_number, quantity, unit="each",
         price=None, basis="Not priced", source=None, manufacturer=None, notes=""):
    return dict(id=identifier, category=category, description=description,
                manufacturer=manufacturer, part_number=part_number,
                quantity=quantity, unit=unit, unit_price_usd=price,
                extended_price_usd=None if price is None else quantity * price,
                price_basis=basis,
                price_date="2026-10-26" if price is not None else None,
                source_url=source, notes=notes)


items = []
prints = []
for part in MANIFEST["parts"]:
    if "print_stl" not in part:
        continue
    mass_g = part["volume_mm3"] * DENSITY / 1000.0
    row = item(part["id"], "printed", part["name"], part["id"], 1,
               price=mass_g * FILAMENT_USD_KG / 1000,
               basis="Computed ideal solid PLA material only, at assumed $25/kg",
               notes="Print-oriented STL; no support, purge, printer time, or labor included.")
    row.update(volume_mm3=part["volume_mm3"], ideal_solid_mass_g=mass_g,
               file="cad/N2/" + part["print_stl"])
    items.append(row)
    prints.append(row)

observed = "Historical manufacturer/catalog observation, not a current quote"
allowance = "Historical budget allowance; vendor and pack price remain unselected"
items += [
    item("M01", "mechanism_purchased", "Mini push-pull solenoid including armature, return spring and leads", "2776", 1,
         price=4.95, basis=observed, source="https://www.adafruit.com/product/2776", manufacturer="Adafruit",
         notes="One purchased assembly, represented by multiple CAD objects; supplier listed mass 12.6 g."),
    item("M02", "mechanism_purchased", "M2 x 16 socket-head screw", "ISO 4762 M2 x 16", 2,
         price=0.25, basis=allowance,
         notes="Standard designation, not a manufacturer part number; vendor/grade/coating to be selected. Actuator clamp only."),
    item("M03", "mechanism_purchased", "M2 hex nut", "ISO 4032 M2", 2,
         price=0.15, basis=allowance,
         notes="Standard designation, not a manufacturer part number; vendor/grade/coating to be selected. Actuator clamp only."),
    item("E01", "bench_control", "MOSFET driver with integrated flyback diode", "5648", 1,
         price=3.95, basis=observed, source="https://www.adafruit.com/product/5648", manufacturer="Adafruit",
         notes="Purchased board, off-board from the hardpoint; no bespoke PCB."),
    item("E02", "bench_control", "Pico H non-wireless RP2040 controller with headers", "SC0917", 1,
         price=5.0, basis=observed, source="https://www.adafruit.com/product/5525", manufacturer="Raspberry Pi",
         notes="Procurement example Adafruit 5525. That vendor was out of stock at historical observation; current availability not checked."),
    item("E03", "bench_control", "Normally-open tactile button: ARM and FIRE", "367", 2,
         price=2.50 / 20, basis="Historical $2.50/20-pack listing, prorated to two consumed switches",
         source="https://www.adafruit.com/product/367", manufacturer="Adafruit catalog item",
         notes="Two used; minimum example pack purchase is 20. Underlying switch manufacturer not specified."),
    item("E04", "bench_control_unpriced", "10 kOhm resistor, at least 0.125 W", None, 1,
         notes="Project-selected value; procurement manufacturer/part number unselected."),
    item("E05", "bench_control_unpriced", "Short insulated power leads and rated terminals", None, 1, "set",
         notes="Coil path rated at least 1.3 A; do not use solderless breadboard power rails for coil current. Lengths depend on bench fixture."),
    item("E06", "bench_control_unpriced", "Logic and button hookup leads", None, 1, "set",
         notes="Route away from moving tab and departing payload; strain relieve separately from the moving mechanism."),
    item("E07", "bench_equipment_unpriced", "Regulated 5.0 V current-limited bench supply, at least 2 A capability", None, 1,
         notes="Initial current-limit setting 1.3 A is a project checkout choice, not a solenoid duty rating."),
    item("E08", "bench_equipment_unpriced", "USB data cable and USB controller power source", None, 1, "set",
         notes="Pico power/programming only. Keep the separate 5 V coil rail off Pico VBUS/VSYS/3V3."),
    item("E09", "bench_equipment_unpriced", "Force, voltage/current, temperature and timing instruments", None, 1, "set",
         notes="Record actual models and measurement uncertainty in test records."),
    item("I01", "installation_unpriced", "Aircraft-side and payload-side fasteners/backing", None, 1, "set",
         notes="Installation dependent. Nominal 3.2 mm holes do not define fastener length, torque, backing stiffness or airframe qualification.")
]

mass = sum(p["ideal_solid_mass_g"] for p in prints)
print_cost = sum(p["extended_price_usd"] for p in prints)
mechanism = sum(r["extended_price_usd"] for r in items
                if r["category"] in ("printed", "mechanism_purchased"))
bench_priced = sum(r["extended_price_usd"] for r in items if r["category"] == "bench_control")
result = {
    "revision": "N2-focus-P11",
    "date": "2026-10-27",
    "source_record_date": "2026-10-26",
    "currency": "USD",
    "cost_type": "Historical catalog observations plus explicitly identified allowances and unpriced items; not a quote or complete procurement total.",
    "material": {"name": "PLA", "density_g_cm3": DENSITY, "filament_allowance_usd_kg": FILAMENT_USD_KG,
                 "basis": "Density matches the existing PLA analysis; CAD solid volume is not a slicer estimate or measured mass."},
    "envelope_mm": MANIFEST["bounds"]["size"],
    "printed_piece_count": len(prints),
    "items": items,
    "subtotals": {
        "ideal_solid_print_volume_mm3": sum(p["volume_mm3"] for p in prints),
        "ideal_solid_print_mass_g": mass,
        "departing_adapter_print_mass_g": next(p["ideal_solid_mass_g"] for p in prints if p["id"] == "N2_adapter"),
        "known_partial_mechanism_mass_g": mass + 12.6,
        "mass_exclusions": "Fasteners, full wiring, remote controls, aircraft/payload backing and attachment hardware; no measured mass.",
        "ideal_print_material_usd": print_cost,
        "mechanism_consumed_material_and_parts_usd": mechanism,
        "priced_remote_control_consumables_usd": bench_priced,
        "known_priced_subset_prorated_usd": mechanism + bench_priced,
        "known_priced_subset_using_button_pack_usd": mechanism + bench_priced - 0.25 + 2.50,
        "subtotal_caveat": "Both known-priced-subset totals omit every unpriced row and all general exclusions. Neither is a complete bench cost or checkout total."
    },
    "exclusions": ["Shipping", "tax", "vendor minimum packs other than noted button example", "support and purge material", "printer time", "labor", "unpriced rows", "actual installation design and qualification"],
    "pcb": {"custom_pcb_required": False, "pcbway_quote": "Not applicable: only purchased COTS boards are used; no fabrication files were submitted."},
    "sources": ["cad/N2/manifest.json", "electronics/sources.json", "Historical project P6 manufacturing BOM, N2 entry"]
}
(ROOT / "manufacturing/bom.json").write_text(json.dumps(result, indent=2) + "\n")
print(f"N2: {mass:.4f} g ideal PLA; mechanism historical consumed-parts budget ${mechanism:.4f}.")
