from bsmLib.controller import controller
from bsmLib.networking import tcpClient
from sys import argv

#### Global Variables ####
DEADZONE = .2 # Controller deadzone

HOST = argv[1]
PORT = 10000


######################
## 0. Setup
######################
# Setup Controller
c = controller(0, DEADZONE)

# Create tcp connection & connect
t = tcpClient(HOST, PORT)
t.connect()


######################
## 1. Drive
######################
def drive():
    c.update()

    # Trigger turn in place
    if(c.RT > -1.0):
        s = (c.RT + 1) / 2
        return s, -s
    elif(c.LT > -1.0):
        s = (c.LT + 1) / 2
        return -s, s

    # Analog speed from Left Joystick
    l = c.LY
    r = c.LY

    # Direction from Right Joystick
    if(c.RX <= 0.0):
        l += (l * (c.RX))
    elif(c.RX > 0.0):
        r -= (r * (c.RX))

    return -l, r


######################
##      Main        ##
######################
while(1):
    if c.XBOX:
        t.stop()
    d = drive()
    d = "%f %f" % (d[0], d[1])
    t.send(d)
