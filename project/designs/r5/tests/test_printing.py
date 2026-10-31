"""Verify exported print attitudes preserve solids and put the selected face on bed."""
import sys
import unittest
import tempfile
import cadquery as cq
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "cad")]
import build
import params as p
from printing import orient, export_print_parts


class PrintOrientationTests(unittest.TestCase):
    def test_previously_meshed_adapter_exports_exactly_on_bed(self):
        # A prior assembly STL used to bias the cached bounding box by 0.00053 mm,
        # moving the flat base off the print bed. Check the actual export vertices.
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory)
            adapter = build.adapter()
            cq.exporters.export(adapter, str(out / "assembly.stl"))
            report = export_print_parts({"adapter": adapter}, out)
            self.assertAlmostEqual(report["adapter"]["stl_bounds_mm"][0][2], 0, places=6)

    def test_bed_faces_and_solid_dimensions(self):
        expected = {"body": (p.BODY["x"], p.BODY["y"], p.BODY["z"]),
                    "keeper": None, "adapter": None}
        for name, fn in build.PARTS.items():
            with self.subTest(name=name):
                original = fn()
                result, meta = orient(name, original)
                source, bed = original.val().BoundingBox(), result.val().BoundingBox()
                self.assertEqual(len(result.solids().vals()), 1)
                self.assertTrue(result.val().isValid())
                self.assertAlmostEqual(result.val().Volume(), original.val().Volume(), places=6)
                self.assertAlmostEqual(bed.zmin, 0, places=6)
                # Keeper height on bed is its full Y breadth, including the cap,
                # while body and adapter retain their original Z print axes.
                self.assertAlmostEqual(bed.zlen, source.ylen if name == "keeper" else source.zlen, places=6)
                self.assertEqual(meta["print_axis_in_assembly"], 1 if name == "keeper" else 2)
                if expected[name]:
                    self.assertEqual(tuple(round(x, 6) for x in (bed.xlen, bed.ylen, bed.zlen)), expected[name])
                # A selected original-face point maps exactly to print Z=0.
                face_z = {"body": source.zmax, "keeper": source.ymin, "adapter": source.zmin}[name]
                point = [0, face_z, 0, 1] if name == "keeper" else [0, 0, face_z, 1]
                mapped_z = sum(a*b for a,b in zip(meta["transform_assembly_to_print"][2], point))
                self.assertAlmostEqual(mapped_z, 0, places=6)


if __name__ == "__main__":
    unittest.main()
