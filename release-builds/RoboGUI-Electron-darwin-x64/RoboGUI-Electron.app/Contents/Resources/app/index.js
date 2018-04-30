var cameraPos = 0;

loop(); // Runs loop after index.html is loaded

// Loop that runs on clock
function loop(){
  printData();
  lidarUpdate();
  setTimeout('loop()',1000)
};

// runs onload in index.html
function start(){
  camera();
  roboHTMLInit();
  printData();
  lidarInit();
};

// Init lidar image
function lidarInit(){
  var lidarTemp = lidar.split('.');
  if (lidarTemp[3] != 'xxx'){
    document.getElementById('roboDiv').style='';
    document.getElementById('lidarIMG').width='320';
    document.getElementById('lidarIMG').height='240';
  };
};

// Display data from post_to_web
function printData(){
  var $ = require('jquery')
  var msg_print = '';
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

// Init robo-HTML iframe
function roboHTMLInit(){
  var roboHTMLTemp = roboHTML.split('.');
  if (roboHTMLTemp[3] != 'xxx'){
    document.getElementById('RoboHTML').action=roboHTML;
    document.getElementById('roboHTMLframe').src=roboHTML;
    document.getElementById('roboHTMLframe').style='background: #FFFFFF;border:0;border:none;margin:0px 0px 0px -5px;padding:0px;';
    document.getElementById('roboHTMLframe').width='320';
    document.getElementById('roboHTMLframe').height='240';
    document.getElementById('roboDiv').style='';
  }
};

// Execute controller python script
function Controller(){
  require('child_process').exec("python "+ __dirname + "/Controller.py " + controller, function (err, stdout, stderr) {
    if (err) {
      return console.log(err);
    }
    console.log(stdout);
  });
};

// Update lidar image
function lidarUpdate(){
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
  for (i in cameras){
    var cameraTemp = cameras[0].split('.')
    if (cameraTemp[3] != 'xxx'){
      html = html + "<img src="+cameras[i]+":8080?action=stream id='stream"+i+"' width='320' height='240'>"
      var temp = (i + 1) % 3;
      if (temp == 0){html = html + '<br />';};
      document.getElementById('camerasDiv').innerHTML = html;
    };
  };
};

// Rotate Camera 180 degrees
function cameraRotate(){
  cameraPos = cameraPos + 1;
  cameraPos = cameraPos % 2;
  for (var i in cameras){
    if (cameraPos == 0){document.getElementById('stream'+i.toString()).className=""}
    if (cameraPos == 1){document.getElementById('stream'+i.toString()).className="rotateimg180"}
  };
};
