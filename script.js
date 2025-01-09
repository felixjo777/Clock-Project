window.onload = function() {
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var clockDiv = document.getElementById('clock');
    
    if (seconds < 10) {
    	seconds = "0" + seconds;
	}
	
	if (minutes < 10) {
    	minutes = "0" + minutes;
    var meridiem = "AM";  // Default is AM
	if (hours > 12) {
    	hours = hours - 12;
    	meridiem = "PM";
	}
	if (hours === 0) {
    	hours = 12;    
	}
  
	}
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }
  
  displayTime();

  setInterval(displayTime, 1000);

};
