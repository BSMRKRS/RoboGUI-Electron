const fs = require('fs');
const ip = __dirname + "/ip_config.json"
const openInEditor = require('open-in-editor');
console.log(ip)

var json = fs.readFileSync(ip);
var json = JSON.parse(json);

// Used to wait for ip to be written to ip_config.json w/out window closing
var delay = 500;

// Config openInEditor w/ editor Atom
const editor = openInEditor.configure({
  'editor': 'atom'
}, function(err) {
console.error('Something went wrong: ' + err);
});

function start(){
  oldIP();
};

// Reads old ip addresses from ip.js and prints to text boxes
function oldIP(){
  // print to text boxes
  document.getElementById('cameraIP').value = json.cameras;
  document.getElementById('mjpg-checkBox').checked = json.mjpg;
  document.getElementById('dataIP').value = json.data;
  document.getElementById('controllerIP').value = json.controller;
  document.getElementById('lidarIP').value = json.lidar;
};


// Sets default ip addresses
function defualtIP(){
  var new_json = {
    "name": "ip_config",
    "cameras": [
        "192.168.21.xxx:8080"
    ],
    "mjpg": true,
    "data": [
        "192.168.21.xxx"
    ],
    "controller": "192.168.21.xxx",
    "lidar": "192.168.21.xxx"
  }
  var new_json = JSON.stringify(new_json, null, 4);

  fs.writeFile(ip, new_json, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+ ip);
  });

  // Wait for file to be written to before closing
  setTimeout(function(){window.close();}, delay); // Line needed for linux systems
};


// Save ip addresses to ip.js
function ipSave(){
  var camera = document.getElementById('cameraIP').value;
  var mjpg = document.getElementById('mjpg-checkBox').checked;
  var data = document.getElementById('dataIP').value;
  var controller = document.getElementById('controllerIP').value;
  var lidar = document.getElementById('lidarIP').value;

  camera = camera.split(',')
  data = data.split(',')

  var new_json = {
    "name": "ip_config",
    "cameras": camera,
    "mjpg": mjpg,
    "data": data,
    "controller": controller,
    "lidar": lidar
  };
  var new_json = JSON.stringify(new_json, null, 4);

  fs.writeFile(ip, new_json, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+ ip);
  });

  // Wait for file to be written to before closing
  setTimeout(function(){window.close();}, delay); // Line needed for linux systems
};

// Open webpage in user's defualt browser
function browser(url){
  const {shell} = require('electron');
  shell.openExternal(url);
};

// Edit JSON in Atom
function editJSON(){
  editor.open(ip).then(function() {
    console.log('Success!');
  }, function(err) {
    console.error('Something went wrong: ' + err);
  });
}
