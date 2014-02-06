(function () {
	if (window.DeviceOrientationEvent) {
  // Listen for the event and handle DeviceOrientationEvent object
  	window.addEventListener('deviceorientation', function(event) {
  	var a = event.alpha - 360;
  	document.getElementById('arrow').style.webkitTransform = "rotate("+a+"deg)";
  }, false);
}
else {
	alert('device orientation sensor not detected');
}
}());