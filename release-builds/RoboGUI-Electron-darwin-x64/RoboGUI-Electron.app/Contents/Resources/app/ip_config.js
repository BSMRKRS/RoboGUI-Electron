function start(){
  oldIP();
};

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

  roboHTML = roboHTML.split("http://")

  console.log(roboHTML)

  document.getElementById('cameraIP').value = camera;
  document.getElementById('dataIP').value = datas;
  document.getElementById('controllerIP').value = controller;
  document.getElementById('roboHTMLIP').value = roboHTML[1];
  document.getElementById('lidarIP').value = lidar;
};

function defualtIP(){
  var fs = require('fs');

  fs.writeFile(__dirname+"/ip.js", "cameras = ['192.168.21.xxx']\ndata = ['192.168.21.xxx']\ncontroller = '192.168.21.xxx'\nroboHTML = 'http://192.168.21.xxx'\n" + "lidar = '192.168.21.xxx'", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+__dirname+"/ip.js");
  });

window.close()
};

function ipSave(){
  camera = document.getElementById('cameraIP').value;
  data = document.getElementById('dataIP').value;
  controller = document.getElementById('controllerIP').value;
  roboHTML = document.getElementById('roboHTMLIP').value;
  lidar = document.getElementById('lidarIP').value;

  if (camera == '') {camera = "''"};
  if (data == '') {data = "''"};
  if (controller == '') {controller = "''"};
  if (roboHTML == '') {roboHTML = ''};
  if (lidar == '') {lidar = ''};

  var fs = require('fs');

  fs.writeFile(__dirname+"/ip.js", "cameras = ["+camera+"]\ndata = ["+data+"]\ncontroller = '"+controller+"'\nroboHTML = 'http://"+roboHTML+"'\n" + "lidar = '" + lidar + "'", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Saved to "+__dirname+"/ip.js");
  });
  
window.close();
};