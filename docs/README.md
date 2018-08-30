# RoboGUI-Electron

This project is a GUI for BSM robots that is created using [Electron](https://electronjs.org)

![alt text](https://raw.githubusercontent.com/BSMRKRS/RoboGUI-Electron/master/docs/window.png)

## Run From Package

Mac:
- Install DMG file
- Launch app from applications folder

Linux:
- Install deb file

```bash
sudo RoboGUI-Electron
```

## Install Electron

```bash
sudo -H npm install -g electron
npm install
```

## Download & Build:

[Download](https://github.com/BSMRKRS/RoboGUI-Electron/releases) <br />
[Build](/docs/Build.md/) <br />
[Change Log](/docs/Changes.md/)


## How to run w/out building

Start the GUI run this command:
```
$ npm start
```

## Define IP Addresses

[IP Config Readme](/docs/ip_config.md/)

## Cameras

- Supports any camera stream that can be viewed from a web browser

## Post_to_web:

- Use post_to_web.py to send data to GUI from your robot
  - For reference to post_to_web refer to [robo-html](https://github.com/BSMRKRS/robo-html)
- Download post_to_web.py to robot or laptop
  - Post_to_web.py is located in the "Python" sub folder
  - Note: The version of post_to_web in this repo differs from the version in robo-html on line 18. Both versions work, but variables will be displayed as `variable=value` w/ robo-html instead of `variable: value` w/ the version in this repo.

```
$ curl -O https://raw.githubusercontent.com/BSMRKRS/RoboGUI-Electron/master/Python/post_to_web.py
```

Example of post_to_web:
```python
# Post_to_web example
# PTW.state['<variable name>'] = <variable value>
import post_to_web as PTW

x = 0

while 1:
    PTW.state['a'] = x
    PTW.state['b'] = x
    PTW.state['c'] = x
    PTW.post()
    x = x + 1
```

## Use w/ Controller:

On Robot w/ RoboPi Hat

```
$ curl -O https://raw.githubusercontent.com/BSMRKRS/RoboGUI-Electron/master/Python/hostRoboPi.py
$ python hostRoboPi.py
```

On Robot w/ OpenCM
- Not tested on OpenCM boards yet!

```
$ curl -O https://raw.githubusercontent.com/BSMRKRS/RoboGUI-Electron/master/Python/hostOpenCM.py
$ python hostOpenCM.py
```

In RoboGUI-Electron
- Define "Controller" IP (click "Nav" > "Config IP Addresses" in status bar)
- Click "Run Controller-Support"

## Dependencies

- [bsmLib](https://github.com/BSMRKRS/bsmLib/)
- wget


## Features

- Click lidar image to enlarge
- Compatible w/ post_to_web from robo-html

## Troubleshooting

[stack overflow](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)
