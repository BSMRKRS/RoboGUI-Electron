function lidarUpdate(){
  // updates lidar element
  console.log("lidarUpdate");
  document.getElementById('lidarIMG').src="http://"+lidar+":8000/lidar.png?rand=" + Math.random();
  setTimeout('lidarUpdate()', 5000);
};
