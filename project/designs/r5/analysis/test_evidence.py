"""Reject copied/mislabelled solver results, including between mesh levels."""
import copy
import unittest
from simulate import SOLVER_SHA,validate_result_identity


class EvidenceIdentity(unittest.TestCase):
    def setUp(self):
        self.material={'E_MPa':2200,'nu':.35}
        self.manifest={'source_steps':{'keeper':{'sha256':'actual-step'}},
                       'configuration_sha256':{'keeper':'actual-config'}}
        self.result={'id':'R5_keeper','case':'terminal','h_mm':.45,
            'material':self.material.copy(),'step_sha256':'actual-step',
            'configuration_sha256':'actual-config','driver_sha256':SOLVER_SHA}

    def validate(self,result):
        validate_result_identity(result,'keeper','terminal',.45,self.manifest,self.material)

    def test_exact_record_accepted(self):self.validate(self.result)

    def test_relabelled_or_stale_results_rejected(self):
        for key,value in [('id','R5_adapter'),('case','retained'),('h_mm',.65),
                          ('material',{'E_MPa':3000,'nu':.35}),('step_sha256','old'),
                          ('configuration_sha256','old'),('driver_sha256','old')]:
            with self.subTest(key=key):
                changed=copy.deepcopy(self.result);changed[key]=value
                with self.assertRaises(ValueError):self.validate(changed)


if __name__=='__main__':unittest.main()
