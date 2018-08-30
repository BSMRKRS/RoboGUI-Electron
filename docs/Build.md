# Build for release mac

\* Remember to change version number in package.json

## Linux

Install Dependencies:

[brew](http://blog.teamtreehouse.com/install-node-js-npm-linux)

```bash
sudo apt-get install build-essential clang libdbus-1-dev libgtk-3-dev \
                         libnotify-dev libgnome-keyring-dev libgconf2-dev \
                         libasound2-dev libcap-dev libcups2-dev libxtst-dev \
                         libxss1 libnss3-dev gcc-multilib g++-multilib curl \
                         gperf bison

brew install npm
sudo -H npm install
sudo -H npm install electron-packager --save-dev
sudo -H npm install electron-packager -g
sudo -H npm install -g electron-installer-debian
```

Build:

```bash
npm run-script build:linux
```

Package:

```bash
electron-installer-debian --src release-builds/RoboGUI-Electron-linux-x64/ --arch amd64 --config debian.json
```

## Mac

Install Dependencies:

```bash
brew install npm
npm install
npm install electron-packager -g
npm install electron-packager --save-dev
```

Build App:

```bash
npm run-script build:mac
```

Create DMG Installer:

```bash
npm run-script package:mac
```
