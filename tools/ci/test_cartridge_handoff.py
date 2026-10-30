"""Placed STEP inventory regression: duplicate solids must not disappear in a union."""
from pathlib import Path
import tempfile
import unittest

import cadquery as cq
from run_cartridge import compare_step_exports


class CartridgeHandoff(unittest.TestCase):
    def setUp(self):
        self.directory=tempfile.TemporaryDirectory(prefix='r5-step-handoff-')
        self.root=Path(self.directory.name)
        self.first=cq.Workplane('XY').box(2,3,4).val()
        self.second=self.first.translate((7,0,0))
        self.reference=self.export('reference',[self.first,self.second])

    def tearDown(self):self.directory.cleanup()

    def export(self,name,solids):
        path=self.root/(name+'.step')
        cq.exporters.export(cq.Compound.makeCompound(solids),str(path))
        return path

    def test_reordered_export_preserves_inventory_and_placements(self):
        self.assertEqual(compare_step_exports(self.reference,
            self.export('reordered',[self.second,self.first]),'reordered'),2)

    def test_missing_translated_and_duplicate_substituted_parts_fail(self):
        for name,solids in [('missing',[self.first]),
                            ('translated',[self.first,self.second.translate((0,0,.1))]),
                            ('duplicate',[self.first,self.first])]:
            with self.subTest(name=name),self.assertRaises(ValueError):
                compare_step_exports(self.reference,self.export(name,solids),name)


if __name__=='__main__':unittest.main()
