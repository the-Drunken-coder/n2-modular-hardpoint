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
BODY = dict(x=64.0, y=48.5, z=18.0)          # R5 compact: was 64 x 50 x 20
TOP_PLATE_T = 2.5                            # Z 15.5..18
BOSSES = [(4.0, 4.0), (60.0, 4.0), (4.0, 45.0), (60.0, 45.0)]
BOSS_D = 7.0
PILOT_M3 = 2.5                               # M3 self-tapping pilot
PILOT_DEPTH = 10.0

# Keeper (printed bar) and its tunnel
YK, ZK = 40.0, 8.0                           # keeper centreline
KEEPER_W = 5.0                               # Y and Z section
SLIDE = 0.4                                  # total sliding clearance
TUNNEL_X = (12.4, 28.4)
TIP_LATCHED_X = 6.5                          # 1.5 mm past the tab: full engagement under tolerance
TIP_POCKET = 2.0                             # free space beyond the latched tip

# Payload tab (on the adapter)
TAB_X = (8.0, 12.0)                          # 4 mm thick (survives a stall on an unseated tab)
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
SERVO_BOTTOM_Y = 2.0
SPLINE_TOP_Y = 37.0                          # servo bottom to spline top 35 mm
EAR_Y = SERVO_BOTTOM_Y + 22.8
EAR_SPAN = 32.5
POCKET_GAP = 0.5
# Cable gland and an open installation channel to the wing face. These are
# receiving-inspection envelopes, not vendor-certified CAD dimensions.
SERVO_GLAND = dict(outstand=1.5, inside=0.1, y=(4.0, 8.0), z=(4.5, 9.5))
CABLE_CHANNEL = dict(x=(22.5, 32.7), y=(3.0, 9.0))
CABLE_CONNECTOR = dict(x=(23.5, 31.5), y=(4.0, 8.0))  # 8 x 4 mm reserved pass-through

# Keeper lever: tab load at mid-tab, supports at tunnel mouth and back
REACTION_RATIO = (TUNNEL_X[0] - (TAB_X[0] + TAB_X[1]) / 2) / (TUNNEL_X[1] - TUNNEL_X[0])

# Crank (stock horn hole + M2 screw riding in a slot in the keeper)
CRANK_R = 5.0
PIN_D, PIN_SLOT = 2.0, 2.4
A_LATCH, A_RELEASE = 180.0, 40.0             # degrees, 140 deg swing (servo range ~180)
HORN_REACH = CRANK_R + 4.0                   # arm tip radius allowance
CRANK_R_MAX = CRANK_R + 1.0                  # slot sized for a horn hole up to 6 mm
# Horn centre retaining screw (stock M2 pan head); keeper face is grooved over its sweep
HORN_SCREW = dict(d=2.0, head_d=3.8, head_h=1.4, l=4.0)
SCREW_CLEAR = 0.5                            # min gap head-to-keeper, whole 180->40 sweep
OVERSHOOT = 10.0                             # deg past latch the slot tolerates

# Material: PAHT-CF, Bambu TDS V2 (dry), mean - 3 sd, x0.5 knock-down
E_XY, E_Z, NU = 3860.0, 2180.0, 0.35
UTS_XY, UTS_Z = 92 - 3 * 7, 47 - 3 * 5       # 71, 32 MPa
KNOCKDOWN = 0.5                              # moisture, voids, creep, notches
ALLOW_XY, ALLOW_Z = UTS_XY * KNOCKDOWN, UTS_Z * KNOCKDOWN
DENSITY = 1.06

# Friction / servo (see README for sources)
MU = 0.35
STALL_KGFCM_4V8 = 3.1
WORKING_FRACTION = 0.5                        # working torque = 50 % of stall


def keeper_x(alpha_deg, r=CRANK_R):
    """Keeper displacement from latched, mm (+X = withdraw)."""
    return r * (cos(radians(alpha_deg)) - cos(radians(A_LATCH)))
