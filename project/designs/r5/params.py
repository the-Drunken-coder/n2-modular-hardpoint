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
BODY = dict(x=64.0, y=50.0, z=20.0)
TOP_PLATE_T = 3.0                            # Z 17..20
BOSSES = [(4.0, 4.0), (60.0, 4.0), (4.0, 46.0), (60.0, 46.0)]
BOSS_D = 7.0
PILOT_M3 = 2.5                               # M3 self-tapping pilot
PILOT_DEPTH = 10.0

# Keeper (printed bar) and its tunnel
YK, ZK = 40.0, 8.0                           # keeper centreline
KEEPER_W = 5.0                               # Y and Z section
SLIDE = 0.4                                  # total sliding clearance
TUNNEL_X = (11.4, 27.4)
TIP_LATCHED_X = 7.5

# Payload tab (on the adapter)
TAB_X = (8.0, 11.0)                          # 3 mm thick
TAB_W = 8.0                                  # Y
TAB_TOP = 14.5
HOLE_W, HOLE_H = 5.6, 6.1                    # keeper hole, 0.6 / 1.1 clearance
HOLE_TOP_LOADED = ZK + KEEPER_W / 2          # hole top bears on keeper top
SOCKET_GAP = 0.4                             # per side, tab in socket
ADAPTER = dict(x=(0.0, 30.0), y=(30.0, 50.0), z=(-3.5, -0.5))  # 0.5 gap to body

# Servo: TowerPro MG92B on its side, shaft along +Y.
SHAFT_X, SHAFT_Z = 38.0, 7.0
SERVO_CASE = dict(l=22.8, w=12.2, h=31.0)    # receiving-inspect these
SHAFT_FROM_END = 5.9
SERVO_BOTTOM_Y = 2.0
SPLINE_TOP_Y = 37.0                          # servo bottom to spline top 35 mm
EAR_Y = SERVO_BOTTOM_Y + 22.8
EAR_SPAN = 32.5
POCKET_GAP = 0.5

# Crank (stock horn hole + M2 screw riding in a slot in the keeper)
CRANK_R = 5.0
PIN_D, PIN_SLOT = 2.0, 2.4
A_LATCH, A_RELEASE = 180.0, 70.0             # degrees, 110 deg swing
HORN_REACH = CRANK_R + 4.0                   # arm tip radius allowance

# Material: PAHT-CF, Bambu TDS V2 (dry), mean - 3 sd, x0.5 knock-down
E_XY, E_Z, NU = 3860.0, 2180.0, 0.35
UTS_XY, UTS_Z = 92 - 3 * 7, 47 - 3 * 5       # 71, 32 MPa
KNOCKDOWN = 0.5                              # moisture, voids, creep, notches
ALLOW_XY, ALLOW_Z = UTS_XY * KNOCKDOWN, UTS_Z * KNOCKDOWN
DENSITY = 1.06

# Friction / servo (see README for sources)
MU = 0.35
PIN_FRICTION = 1.15
STALL_KGFCM_4V8 = 3.1
WORKING_FRACTION = 0.5                        # working torque = 50 % of stall


def keeper_x(alpha_deg, r=CRANK_R):
    """Keeper displacement from latched, mm (+X = withdraw)."""
    return r * (cos(radians(alpha_deg)) - cos(radians(A_LATCH)))
