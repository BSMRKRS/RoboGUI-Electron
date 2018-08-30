# Config IP Addresses

Open the window to config ip addresses by clicking "Nav" in the navigation bar and click "Config IP Addresses"

## Cameras

How to config camera ip addresses

#### Cameras w/ mjpg-streamer

- RoboGUI-Electron is compatible w/ [mjpg-streamer](https://github.com/jacksonliam/mjpg-streamer)
  - To use mjpg-streamer make sure the "mjpg-streamer" checkbox is checked
- RoboGUI-Electron uses this format for cameras from mjpg-steamer: http://ip:port?action=stream
- BSM Robots are set to port 8080 by default
  - Example: http://192.168.21.xxx:8080?action=stream
- When defining camera ips in RoboGUI-Electron only type the camera ip and port number
  - Separate each device w/ comma
  - Example: 192.168.21.113:8080, 192.168.21.167:8000

#### Cameras w/out mjpg-streamer

- Uncheck the "mjpg-streamer" checkbox
- Supports any camera stream that can be viewed from a web browser
- Define ip camera ips w/ the full url to the stream and a comma separating each device
  - Example: http://<span></span>192.168.21.113:8080?action=stream, http://<span></span>192.168.21.167:8080?action=stream

## Data

- Use [post_to_web.py](https://github.com/BSMRKRS/bsmLib/blob/master/docs/post_to_web.md) to read from robot
- Use comma to separate ip addresses
- Example: 192.168.21.113, 192.168.21.167

## Controller

- Only able to define one ip
- Does not execute [Controller-Support](https://github.com/BSMRKRS/RoboGUI-Electron/blob/master/Python/controller.py) right away, the "Run Controller-Support" button will need to be press to run the script
- Requires [bsmLib](https://github.com/BSMRKRS/bsmLib)

## LIDAR

- Only able to define one ip
- Views image from [LIDAR](https://github.com/avoss19/LIDAR)
