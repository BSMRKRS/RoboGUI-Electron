const fs = require('fs');
const ip = __dirname + "/ip_config.json"

var json = fs.readFileSync(ip);
json = JSON.parse(json);

var lidar = json.lidar

function lidarUpdate(){
  // updates lidar element
  console.log("lidarUpdate");
  document.getElementById('lidarIMG').src="http://"+lidar+":8000/lidar.png?rand=" + Math.random();
  setTimeout('lidarUpdate()', 1000);
};
