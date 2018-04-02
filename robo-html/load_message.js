load_message = function(txt){
  var msg_arr = txt.split(',');
  for(var i = 0; i < msg_arr.length; i++){
    console.log(msg_arr[i]);
    var pair = msg_arr[i].split('=');
    var pin_type = msg_arr[i][0];
    if(pin_type == 'm'){
      document.getElementById(pair[0]).innerHTML = 'Motor ' + pair[0] + ': ' + pair[1];
    } else if (pin_type == 'd'){
      document.getElementById(pair[0]).innerHTML = 'Digital ' + pair[0] + ': ' + pair[1];
    } else if (pin_type == 'a'){
      document.getElementById(pair[0]).innerHTML = 'Analog ' + pair[0] + ': ' + pair[1];
    } else {
      document.getElementById(pair[0]).innerHTML = msg_arr[i];
    }
  }
}

async_message = function(){
  delete msg;
  var readings_script = document.getElementById('readings');
  var readings_script_parent = readings_script.parentNode;
  readings_script_parent.removeChild(readings_script);
  var script = document.createElement('script');
  script.src = 'readings.js';
  script.id = 'readings';
  readings_script_parent.appendChild(script);
  load_message(msg);
  setTimeout(function(){async_message()}, 50);
}
