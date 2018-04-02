## Thanks for using post to web!
################################

#Begin with incude post_to_web as PTW
#put PTW.post() somewhere in your loop
#update the PTW.state dictionary with your data
#visit 192.168.21.x to view your dashboard

import time

global tState
tState = time.time()
global state
state = dict()
#print 'ptw', state, tState

def send(d):
  f = open('/home/student/robo-html/readings.js','w')
  msg = (',').join(map(lambda reading: str(reading) + '=' + str(d[reading]), d.keys()))
  f.write('var msg = `' + msg+'`;')
  f.close()

def post(interval = 0.5):
  global tState
  if time.time() - tState > interval:
    send(state)
    time.sleep(0.1)
    tState = time.time()
