# RoboGUI-Electron

This project is a GUI for BSM robots that is created using electron

## How to run

Start the GUI run this command; You may need to changed the ip addresses in the connections.js
```
$ npm start
```

Start host on robot
```
$ curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/host.py
$ python host.py
```

## Plans

- [ ] Have window/menu to define ip addresses instead of connections.js (save ip list locally in Application-Support)
- [ ] Make host on robot start on boot
