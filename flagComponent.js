AFRAME.registerComponent('flag', {
    schema: {
	  	name: {type: 'string'},
	  	color: {type: 'string', default: 'Not set'},
	  	clear: {type: 'string', default: 0}
	},
  	init: function () {
	    var cubeName = this.data.name;
	    var cubeColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var box = sceneEl.querySelector('#' + cubeName);
	},
  	tick: function () {
  		var cubeName = this.data.name;
	    var cubeColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var box = sceneEl.querySelector('#' + cubeName);
		var cube = sceneEl.querySelector('#cube');

		if (cube.getAttribute("color") == "#42f48f"){
			box.setAttribute("clear", 1);
			console.log("To 1");	
		}
		if (box.getAttribute("color") == "#42f48f"){
			console.log("green");
			if (parseInt(box.getAttribute("clear")) == 1)
	  			window.open("http://localhost/Aframe/SafeCycleVR.html", '_self', false);
  		}
  	}
});