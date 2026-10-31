"""Check the actual crank clamp stack and its reproducible assembly path."""
from math import radians, sin

import params as p
from build import box, crank_screw, crank_sleeve, crank_washer, crank_nut, servo_envelope, ycyl
from clearance import bearing_reservation, guide_angle, loaded_pose, overlap


def rotate_crank(shape, alpha):
    return shape.rotate((p.SHAFT_X, 0, p.SHAFT_Z), (p.SHAFT_X, 1, p.SHAFT_Z),
                        p.A_LATCH - alpha)


def check_pin_joint(body, keeper):
    from viewer import horn
    c = p.CRANK_PIN
    washer_y = p.SPLINE_TOP_Y + c["sleeve_l"]
    nut_end = washer_y + c["washer_t"] + c["nut_h"]
    bolt_end = p.SPLINE_TOP_Y - c["horn_arm_t"] + c["screw_l"]
    assert bolt_end - nut_end >= 0.8, "at least two M2 thread pitches beyond locknut"
    assert c["washer_d"] > p.PIN_SLOT + 0.4, "washer must capture slot"
    assert p.ASSEMBLY_ENTRY_H < p.PIN_D - 1, "assembled sleeve cannot escape entry"
    parts = [crank_screw(), crank_sleeve(), crank_washer(), crank_nut()]
    # Body clearance of each purchased part and nominal pin-in-slot motion.
    for alpha in list(range(int(p.A_RELEASE), int(p.A_LATCH) + 1, 5)) + [183]:
        moved = keeper.translate((p.keeper_x(alpha), 0, 0))
        for i, shape in enumerate(parts):
            s = rotate_crank(shape, alpha)
            assert overlap(s, body) < 1e-6, ("pin hardware/body", i, alpha)
            assert overlap(s, moved) < 1e-6, ("pin hardware/keeper", i, alpha)
            assert overlap(s, servo_envelope()) < 1e-6, ("pin hardware/servo", i, alpha)
    # With only the bare through-bolt fitted, the keeper can enter from +X.
    bare = rotate_crank(crank_screw(), p.ASSEMBLY_ANGLE)
    assert overlap(bare, body) < 1e-6
    assert overlap(bare, servo_envelope()) < 1e-6
    final_dx = p.keeper_x(p.ASSEMBLY_ANGLE)
    for extra in range(0, 41):
        inserted = keeper.translate((final_dx + extra, 0, 0))
        assert overlap(bare, inserted) < 1e-6, ("bare pin entry", extra)
        assert overlap(body, inserted) < 1e-6, ("keeper insertion/body", extra)
    # Then turn the BARE pin into the operating slot before adding its sleeve.
    for alpha in range(int(p.A_LATCH), int(p.ASSEMBLY_ANGLE) + 1, 5):
        pin = rotate_crank(crank_screw(), alpha)
        assert overlap(pin, keeper.translate((p.keeper_x(alpha), 0, 0))) < 1e-6
        assert overlap(pin, body) < 1e-6
        assert overlap(rotate_crank(horn(), alpha), body) < 1e-6
    # Sleeve installs axially from +Y at latch, with the keeper already in place.
    for dy in range(0, 16):
        assert overlap(crank_sleeve().translate((0, dy, 0)), keeper) < 1e-6
    # Directly prove the larger sleeve cannot traverse the assembly entry.
    sleeve_at_entry = rotate_crank(crank_sleeve(), p.ASSEMBLY_ANGLE)
    blocked = overlap(sleeve_at_entry, keeper.translate((final_dx + 2.5, 0, 0)))
    assert blocked > 0.1, "sleeve must be captured after nut installation"
    # Functional sleeve/slot contact remains possible without penetration at
    # the loaded guide-angle corners. The washer stays outside that motion.
    from itertools import product
    a = guide_angle()
    washer_gap = float("inf")
    shift_max = 0.0
    obstacles = body.cut(bearing_reservation())
    # Tilting changes which slot face bears. Permit the actual radial slot play,
    # already included separately in the endpoint budget, rather than forcing
    # the pin to stay artificially centered in the slot.
    shifts = [0.0] + [sign * i / 100 for i in range(2, 21, 2) for sign in (-1, 1)]
    for alpha in (180, 150, 120, 90, 60, 45, 40):
        sleeve = rotate_crank(crank_sleeve(), alpha)
        for pitch, yaw in product((-a, a), repeat=2):
            moved = loaded_pose(keeper, p.keeper_x(alpha), pitch, yaw)
            fits = [dx for dx in shifts if abs(dx) <= (p.PIN_SLOT-p.PIN_D)/2 + 1e-8
                    and overlap(sleeve, moved.translate((dx, 0, 0))) < 1e-6
                    and overlap(obstacles, moved.translate((dx, 0, 0))) < 1e-6]
            assert fits, ("loaded sleeve/slot", alpha, pitch, yaw)
            shift_max = max(shift_max, abs(fits[0]))
            washer_gap = min(washer_gap, washer_y - moved.val().BoundingBox().ymax
                             - 2 * p.FIT_DATUM_ERROR - 2 * p.FIT_SURFACE_ERROR)
    assert washer_gap >= p.MOTION_CLEARANCE, ("loaded washer gap", washer_gap)
    return dict(sleeve_length_mm=c["sleeve_l"], sleeve_diameter_mm=p.PIN_D,
                total_slot_clearance_mm=p.PIN_SLOT-p.PIN_D,
                nominal_keeper_to_washer_gap_mm=washer_y-(p.YK+p.KEEPER_W/2),
                loaded_washer_gap_after_allowances_mm=washer_gap,
                max_loaded_slot_contact_shift_mm=shift_max,
                thread_beyond_locknut_mm=bolt_end-nut_end,
                bare_pin_entry_angle_deg=p.ASSEMBLY_ANGLE,
                installed_retained_y_bounds_mm=[min(0.0, p.SERVO_BOTTOM_Y), max(p.BODY["y"], bolt_end)],
                body_plus_crank_fastener_width_mm=max(p.BODY["y"], bolt_end)-min(0.0, p.SERVO_BOTTOM_Y),
                capture_overlap_at_entry_mm3=blocked)
