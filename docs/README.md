# RoboGUI-Electron

This project is a GUI for BSM robots that is created using [Electron](https://electronjs.org)

![alt text](https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/docs/window.png)


## Download & Build:

[Download](https://github.com/avoss19/RoboGUI-Electron/releases) <br />
[Build](/docs/Build.md/) <br />
[Change Log](/docs/Changes.md/)


## How to run w/out building

Start the GUI run this command:
```
$ npm start
```


## Use w/ Controller:

On Robot w/ RoboPi Hat
```
$ curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/hostRoboPi.py
$ python hostRoboPi.py
```

On Robot w/ OpenCM
```
$ curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/hostOpenCM.py
$ python hostOpenCM.py
```

In RoboGUI-Electron
- Define IP (click Nav in status bar)
- Click "Run Controller-Support"

## Dependencies

- npm & pygame
```
$ brew install npm
$ pip install pygame # Only needed for Controller-Support
```


## Features

- Click lidar image to enlarge
- Compatible w/ post_to_web from robo-html
