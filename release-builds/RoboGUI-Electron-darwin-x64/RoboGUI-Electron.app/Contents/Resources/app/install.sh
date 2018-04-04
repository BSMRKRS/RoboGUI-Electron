#!/bin/bash

curl -O https://raw.githubusercontent.com/avoss19/RoboGUI-Electron/master/host.py

sudo cp host.py /etc/init.d/RoboGUI.py # Add to startup folder
sudo chmod +x /etc/init.d/RoboGUI.py # Make executable
sudo update-rc.d /etc/init.d/RoboGUI.py defaults # Add to startup boot sequence
