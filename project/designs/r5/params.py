"""R5 dimensions (mm, N). Single source of truth for CAD, mechanics and FEA.

Frame: X along the keeper, Y across, Z up. Z = 20 is the wing face,
the payload hangs below Z = 0.
"""
from math import cos, radians

# Loads
MASS_KG = 0.454
G_DESIGN = 2.0
P_DESIGN = MASS_KG * G_DESIGN * 9.80665      # 8.90 N
P_PROOF = 2 * P_DESIGN                       # 17.81 N, safety factor 2

# Envelope / body
BODY = dict(x=64.0, y=48.5, z=20.0)          # 20 mm limit; loaded yoke clearance restored
TOP_PLATE_T = 2.5                            # Z 17.5..20 away from the local relief
YOKE_ROOF_T = 1.5                            # local relief ceiling Z 18.5
BOSSES = [(4.0, 4.0), (60.0, 4.0), (4.0, 45.0), (60.0, 45.0)]
BOSS_D = 7.0
PILOT_M3 = 2.5                               # M3 self-tapping pilot
PILOT_DEPTH = 10.0

# Keeper (printed bar) and its tunnel
YK, ZK = 40.2, 8.0                           # keeper centreline; loaded yaw clears horn
KEEPER_W = 5.0                               # Y and Z section
SLIDE = 0.4                                  # total sliding clearance
TUNNEL_X = (12.4, 28.4)
TIP_LATCHED_X = 6.0                          # 0.5 mm extra overlap includes yoke lost motion
TIP_POCKET = 2.0                             # free space beyond the latched tip
TIP_POCKET_HALF = 3.7                         # includes loaded pitch/yaw and clearance
FIT_SLIDE_TOTAL = (0.3, 0.5)                  # inspected finished guide clearance, both axes
FIT_GUIDE_LENGTH_MIN = 15.8                   # measured effective full-section guide length
FIT_DATUM_ERROR = 0.1                        # each inspected guide/shaft datum, mm
FIT_SURFACE_ERROR = 0.1                      # reserved per opposing non-contact surface
MOTION_CLEARANCE = 0.5                       # residual non-contact clearance, mm

# Payload tab (on the adapter)
TAB_X = (8.0, 12.0)                          # 4 mm upper tab; lower-root jam screen is separate
TAB_W = 8.0                                  # Y
TAB_TOP = 14.5
HOLE_W, HOLE_H = 5.6, 5.6                    # keeper hole, 0.6 clearance (less rattle)
HOLE_TOP_LOADED = ZK + KEEPER_W / 2          # hole top bears on keeper top
SOCKET_GAP = 0.4                             # per side, tab in socket
ADAPTER = dict(x=(-2.0, 21.0), y=(30.0, 48.5), z=(-3.5, -0.5))  # centred on the tab, 0.5 gap to body
ADAPTER_HOLES = [(1.5, 34.0), (17.5, 34.0), (1.5, 45.0), (17.5, 45.0)]
TAB_ROOT_FILLET = 1.0
# Buttress only the lower tab, below the keeper hole. The upper tab and travel
# stay unchanged; body() provides a matching tapered socket with SOCKET_GAP.
TAB_ROOT_EXTRA_X = 1.0                       # 6 mm root; 4 mm upper tab
TAB_ROOT_TAPER_TOP_Z = HOLE_TOP_LOADED - HOLE_H - 0.5

# Servo: TowerPro MG92B on its side, shaft along +Y.
SHAFT_X, SHAFT_Z = 38.0, 7.0
SERVO_CASE = dict(l=22.8, w=12.2, h=31.0)    # receiving-inspect these
SHAFT_FROM_END = 5.9
SERVO_BOTTOM_Y = 1.0
SPLINE_TOP_Y = 36.0                          # servo bottom to spline top 35 mm
EAR_Y = SERVO_BOTTOM_Y + 22.8
EAR_SPAN = 32.5
POCKET_GAP = 0.5
# Cable gland and an open installation channel to the wing face. These are
# receiving-inspection envelopes, not vendor-certified CAD dimensions.
SERVO_GLAND = dict(outstand=1.5, inside=0.1,
                   y=(SERVO_BOTTOM_Y + 2, SERVO_BOTTOM_Y + 6), z=(4.5, 9.5))
CABLE_CHANNEL = dict(x=(22.5, 32.7), y=(2.0, 8.0))
CABLE_CONNECTOR = dict(x=(23.5, 31.5), y=(3.0, 7.0))  # 8 x 4 mm reserved pass-through

# Keeper lever: tab load at mid-tab, supports at tunnel mouth and back
REACTION_RATIO = (TUNNEL_X[0] - (TAB_X[0] + TAB_X[1]) / 2) / (TUNNEL_X[1] - TUNNEL_X[0])

# Crank (stock horn hole + M2 screw riding in a slot in the keeper)
CRANK_R = 5.0
PIN_D, PIN_SLOT = 2.0, 2.4
A_LATCH, A_RELEASE = 180.0, 40.0             # degrees, 140 deg swing (servo range ~180)
HORN_REACH = CRANK_R + 4.0                   # arm tip radius allowance
CRANK_R_MAX = CRANK_R + 0.1                  # measured horn-hole radius must be 5.0 +/-0.1 mm
# Horn centre retaining screw (stock M2 pan head); keeper face is grooved over its sweep
HORN_SCREW = dict(d=2.0, head_d=3.8, head_h=1.4, l=4.0)
SCREW_CLEAR = 0.5                            # min gap head-to-keeper, whole 180->40 sweep
HORN_GROOVE_START_X = 25.0                    # keep the cantilever and tunnel mouth full-section
HORN_GROOVE_Y_CLEAR = 1.5                     # head clearance plus permitted yaw/float
HORN_GROOVE_Z_CLEAR = 1.5                     # head clearance plus permitted pitch/float
OVERSHOOT = 10.0                             # deg past latch the slot tolerates

# Material: PAHT-CF, Bambu TDS V2 (dry), mean - 3 sd, x0.5 knock-down
E_XY, E_Z, NU = 3860.0, 2180.0, 0.35
UTS_XY, UTS_Z = 92 - 3 * 7, 47 - 3 * 5       # 71, 32 MPa
KNOCKDOWN = 0.5                              # moisture, voids, creep, notches
ALLOW_XY, ALLOW_Z = UTS_XY * KNOCKDOWN, UTS_Z * KNOCKDOWN
DENSITY = 1.06

# Friction / servo (see README for sources)
MU = 0.35
SERVO_MIN_V, SERVO_MAX_V = 5.0, 6.6          # TowerPro MG92B operating range
STALL_KGFCM_5V = 3.1                        # manufacturer point; do not extrapolate below 5 V
WORKING_FRACTION = 0.5                        # working torque = 50 % of stall

# Acceptance bounds to MEASURE, not a claim of printer/vendor accuracy.
# A part outside these bounds needs adjustment/rebuild and a new fit assessment.
FIT_BOUNDS = dict(
    horn_r=(4.9, 5.1), servo_dx=(-0.1, 0.1),
    latch_error_deg=(-3.0, 3.0), release_error_deg=(0.0, 5.0),
    keeper_length_error_mm=(-0.1, 0.1), tab_thickness_error_mm=(-0.1, 0.1),
    guide_clearance_total_mm=(0.3, 0.5), guide_length_min_mm=15.8,
    pin_slot_clearance_total_mm=(0.3, 0.5),
    full_section_overlap_min_mm=0.5, spare_after_clearance_min_mm=1.0,
    open_clearance_reserve_mm=0.5, tip_chamfer_mm=0.5,
)


def keeper_x(alpha_deg, r=CRANK_R):
    """Keeper displacement from latched, mm (+X = withdraw)."""
    return r * (cos(radians(alpha_deg)) - cos(radians(A_LATCH)))
