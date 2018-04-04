# RoboGUI-Electron

This project is a GUI for BSM robots that is created using electron

![alt text](https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/docs/pics/window.png)


## Download & Build:

[Download](https://github.com/avoss19/RoboGUI-Electron/releases) <br />
[Build](/docs/Build.md/) <br />
[Change Log](/docs/Changes.md/)


## How to run w/out building

Start the GUI run this command; You may need to changed the ip addresses in the connections.js
```
$ npm start
```


## Install robot script:
```
$ curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/install.sh
$ chmod +x install.sh
$ ./install.sh
```


## Plans

- [x] Have window/menu to define ip addresses instead of connections.js (save ip list locally in Application-Support)
- [x] Make host on robot start on boot
- [x] Build for GitHub release
