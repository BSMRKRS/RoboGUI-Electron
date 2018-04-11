# Build for release
- Remember to change version number in package.json

Install Dependencies:
```
$ brew install npm
$ npm install electron-packager --save-dev
$ npm install electron-packager -g
```

Package App:
```
$ npm run-script build:mac
```

Create DMG Installer:
```
$ npm run-script package:mac
```
