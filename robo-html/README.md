# robo-html
Web interface for a RoboPi robot controller

This repository should be cloned into the Student user's home folder on a RoboPi.

nginx service looks for index.html in /home/student/robo-html/

## Interested in setting up the motor and sensor readings?
1. Make sure that the post_to_web.py file is in the folder that's controlling your robot.
1. Include this in the file that's controlling your robot `import post_to_web as PTW # see post_to_web.py for instructions`
1. For each motor and sensor that you want to track, include this in the loop that's controlling your robot `PTW.state['d1'] = RPL.digitalRead(sensor_pin)`
1. Include this at the end of the loop that's controlling your robot `PTW.post()`

Check out basic.py in the robotonomy repo for an example.
