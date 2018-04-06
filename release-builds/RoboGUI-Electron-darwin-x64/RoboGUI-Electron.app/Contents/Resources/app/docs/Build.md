# Build for release
Install Dependencies:
```
$ brew install npm
$ npm install electron-packager --save-dev
$ npm install electron-packager -g
```

Package App:
```
$ electron-packager . --overwrite --platform=darwin --arch=x64 --icon=bsm.icns --prune=true --out=release-builds
```

Create DMG Installer:
```
$ electron-installer-dmg release-builds/RoboGUI-Electron-darwin-x64/RoboGUI-Electron.app RoboGUI-Electron --out=release-builds --overwrite --icon=bsm.icns
```
