"""Independent force/moment checks of the downward-load friction equations."""
import math
import unittest
from mechanics import coupled_force, contact_state


class Equilibrium(unittest.TestCase):
    def test_signed_contact_equilibrium(self):
        for mu in (.05,.15,.3):
            for smu in (.05,.15,.3):
                for direction in (-1,1):
                    p,front,rear,lug,xf,e,h=11.9,31.,49.,28.,70.,5.,1.5
                    v=coupled_force(p,mu,smu,front,rear,lug,xf,e,h,direction)
                    self.assertIsNotNone(v['required_horizontal_N'])
                    q,ra,rb,fs=(v[k] for k in ('required_horizontal_N',
                        'front_vertical_reaction_N','rear_vertical_reaction_N','follower_vertical_force_N'))
                    self.assertAlmostEqual(ra+rb+fs-p,0,places=10)
                    self.assertAlmostEqual(q-mu*(p+abs(ra)+abs(rb)),0,places=10)
                    # r cross F, Y component: z Fx - x Fz, about front-guide center.
                    moment=-h*mu*p+(lug-front)*p
                    for x,reaction in ((front,ra),(rear,rb)):
                        z=-math.copysign(h,reaction)
                        moment+=z*(-mu*abs(reaction))-(x-front)*reaction
                    moment+=e*q-(xf-front)*fs
                    self.assertAlmostEqual(moment,0,places=9)

    def test_zero_friction_needs_zero_drive(self):
        v=coupled_force(12,0,0,31,49,28,70,5,1.5)
        self.assertEqual(v['required_horizontal_N'],0)

    def test_invalid_span_rejected(self):
        with self.assertRaises(ValueError):
            coupled_force(12,.1,.1,31,31,28,70,5,1.5)

    def test_unretained_state_rejected(self):
        with self.assertRaises(ValueError):
            contact_state({'keeper_tip_x':25.5,'lug_x':[26.8,30.3]},4.8)


if __name__=='__main__':
    unittest.main()
