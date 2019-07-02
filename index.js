const fs = require('fs');
const $ = require('jquery')
const ip = __dirname + "/ip_config.json"

var cameraPos = 0;

var json = fs.readFileSync(ip);
json = JSON.parse(json);

var ipCheck;
var new_ipCheck;
fs.readFile(ip, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  ipCheck = data;
});

loop(); // Runs loop after index.html is loaded

// Loop that runs on clock
function loop(){
  check();
  printData();
  lidarUpdate();
  setTimeout('loop()',1000)
};

// runs onload in index.html
function start(){
  camera();
  printData();
  lidarInit();
};

// Checks is ip.js has been updated
function check(){
  fs.readFile(ip, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    new_ipCheck = data;
  });
  if(new_ipCheck != ipCheck){
    location.reload()
  }
};

// Init lidar image
function lidarInit(){
  lidar = json.lidar
  var lidarTemp = lidar.split('.');
  if (lidarTemp[3] != 'xxx'){
    document.getElementById('roboDiv').style='';
    document.getElementById('lidarIMG').width='320';
    document.getElementById('lidarIMG').height='240';
  };
};

// Display data from post_to_web
function printData(){
  var msg_print = '';
  var data = json.data
  for (i in data){
    var dataTemp = data[0].split('.')
    if (dataTemp[3] != 'xxx'){
      document.getElementById('roboDiv').style='';
      $.getScript("http://"+data[i]+"/readings.js", function() {
        var msg_arr = msg.split(',');
        var msg_arr = msg_arr.sort();
        for (i in msg_arr){
          msg_print = msg_print + msg_arr[i] + "<br />"
        };
        msg_print += "<br />"
        document.getElementById('data').innerHTML = msg_print;
      });
    };
  };
};

// Update Controller Script
function updateController(){
  console.log("Update controller");
  var dir = __dirname + "/Python/controller.py";
  require('child_process').exec("wget -q https://raw.githubusercontent.com/BSMRKRS/Controller-Support/master/controller.py -O " + dir);
}

// Execute controller python script
function Controller(){
  console.log("Run controller script");
  var dir = __dirname + "/Python/controller.py";
  console.log(json.controller);
  require('child_process').exec("python " + dir + " " + json.controller, function (err, stdout, stderr) {
    if (err) {
      return console.log(err);
    }
    console.log(stdout);
  });
};

// Update lidar image
function lidarUpdate(){
  var lidar = json.lidar
  var lidarTemp = lidar.split('.');
  if (lidarTemp[3] != 'xxx'){
    console.log("lidar: " + lidar);
    var d = new Date();
    document.getElementById('lidarIMG').src="http://"+lidar+":8000/lidar.png?rand=" + d.getTime();
  };
};

// Cameras
function camera(){
  var html = ''
  var cameras = json.cameras
  var cameraTemp = cameras[0].split('.')
  if (cameraTemp[3] != 'xxx:8080'){
    if (json.mjpg){
      for (i in json.cameras){
        html = html + "<img src=http://"+cameras[i]+"?action=stream id='stream"+i+"' width='320' height='240'>"
      };
    } else {
      for (i in cameras){
        html = html + "<img src="+cameras[i]+" id='stream"+i+"' width='320' height='240'>"
      };
    };
    var temp = (i + 1) % 3;
    if (temp == 0){html = html + '<br />';};
    document.getElementById('camerasDiv').innerHTML = html;
  };
};

// Rotate camera 180 degrees
function cameraFlip(){
  cameras = json.cameras
  cameraPos = cameraPos + 1;
  cameraPos = cameraPos % 2;
  for (var i in cameras){
    if (cameraPos == 0){document.getElementById('stream'+i.toString()).className=""}
    if (cameraPos == 1){document.getElementById('stream'+i.toString()).className="rotateimg180"}
  };
};
