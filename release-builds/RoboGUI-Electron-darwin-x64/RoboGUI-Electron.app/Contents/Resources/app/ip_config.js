function start(){
  oldIP();
};

// Reads old ip addresses from ip.js and prints to text boxes
function oldIP(){
  camera = "'" + cameras[0] + "'"
  for (var i in cameras){
    if (i != 0){
      var camera = camera + ",'" + cameras[i] + "'"
    };
  };

  datas = "'" + data[0] + "'"
  for (var i in data){
    if (i != 0){
      var datas = datas + ",'" + data[i] + "'"
    };
  };

  controllers = "'" + controller[0] + "'"
  for (var i in controller){
    if (i != 0){
      var controllers = controllers + ",'" + controller[i] + "'"
    };
  };

  // print to text boxes
  document.getElementById('cameraIP').value = camera;
  document.getElementById('mjpg-checkBox').checked = mjpg;
  document.getElementById('dataIP').value = datas;
  document.getElementById('controllerIP').value = controllers;
  document.getElementById('lidarIP').value = lidar;
  document.getElementById('ControllerSelect').value = controllerV;
};


// Sets default ip addresses
function defualtIP(){
  var fs = require('fs');

  fs.writeFile(__dirname+"/ip.js", "cameras = ['192.168.21.xxx:8080']\nmjpg = true\ndata = ['192.168.21.xxx']\ncontroller = ['192.168.21.xxx']\n" + "controllerV = 'Master'\n" + "lidar = '192.168.21.xxx'", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+__dirname+"/ip.js");
  });

window.close()
};


// Save ip addresses to ip.js
function ipSave(){
  camera = document.getElementById('cameraIP').value;
  mjpg = document.getElementById('mjpg-checkBox').checked;
  data = document.getElementById('dataIP').value;
  controller = document.getElementById('controllerIP').value;
  lidar = document.getElementById('lidarIP').value;
  controllerSelection = document.getElementById("ControllerSelect").value

  if (camera == '') {camera = "''"};
  if (data == '') {data = "''"};
  if (controller == '') {controller = "''"};
  if (lidar == '') {lidar = ''};

  var fs = require('fs');

  fs.writeFile(__dirname+"/ip.js", "cameras = ["+camera+"]\nmjpg = "+mjpg+"\ndata = ["+data+"]\ncontroller = ["+controller+"]\n" + "controllerV = '" + controllerSelection + "'\n" + "lidar = '" + lidar + "'", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+__dirname+"/ip.js");
  });

window.close();
};

// Open webpage in user's defualt browser
function browser(url){
  const {shell} = require('electron');
  shell.openExternal(url);
};
