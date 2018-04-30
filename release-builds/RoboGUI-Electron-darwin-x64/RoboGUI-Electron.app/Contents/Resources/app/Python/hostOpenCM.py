# --------------------------------File on Robot---------------------------------
# Hosts a TCP connection and interprets the data recieved
import sys, os, serial, socket, time
s = serial.Serial() #create a serial port object
s.baudrate = 57600 #set the rate of communication on the port (in bits/second)
s.port = "/dev/ttyAMA0" #this is which port you are using
s.timeout = 3.0
s.open()

######################
# Convert Speed
######################
def convertSpeed(speed):
    return (speed-1500)/5

######################
# Pin mode
######################
def wheelMode(ID):
     s.write('W'+'w'+chr(ID))

######################
# Move motors
######################
def servoWrite(ID, speed):
        s.write('W'+'s'+chr(ID))
        #WRITE ADDRESS
        addr = int(32)
        s.write(chr(int(addr)%256))
        s.write(chr(int(addr)>>8))
        #WRITE SPEED
        if speed >= 0:
                #Wrapper for forward speed
                speed = int(speed)
        else:
                #Wrapper for backward speed
                speed = int(1024 + int(-speed))
        s.write(chr(int(speed)%256))
        s.write(chr(int(speed)>>8))

######################
##    Host Info     ##
######################
# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to the address given on the command line
host = '0.0.0.0'
server_address = (host, 10000)
print >>sys.stderr, 'starting up on %s port %s' % server_address
sock.bind(server_address)
sock.listen(1)

######################
##      Main        ##
######################
wheelMode(1)
wheelMode(2)
wheelMode(3)
wheelMode(4)
while True:
    print >>sys.stderr, 'waiting for a connection'
    connection, client_address = sock.accept()
    try:
        print >>sys.stderr, 'client connected:', client_address
        while True:
            data = connection.recv(9)
            data = data.split(' ')

            servoWrite(1, convertSpeed(int(data[0])))
            servoWrite(2, convertSpeed(int(data[0])))
            servoWrite(3, -convertSpeed(int(data[1])))
            servoWrite(4, -convertSpeed(int(data[1])))

    finally:
        connection.close()
