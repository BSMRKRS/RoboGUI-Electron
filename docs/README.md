# RoboGUI-Electron

This project is a GUI for BSM robots that is created using electron

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
$ python host.py
```

On Robot w/ OpenCM
```
$ curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/hostOpenCM.py
$ python host.py
```

In RoboGUI-Electron
- Click "Install Controller" (only need to do once; installs to Application Support)
- Define IP (click Nav in status bar)
- Click "Run Controller-Support"

## Dependencies

- npm
```
$ brew install npm
```
