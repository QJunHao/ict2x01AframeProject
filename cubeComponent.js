AFRAME.registerComponent('cube', {
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

	    console.log(cubeName);
	},
  	tick: function () {
  		var cubeName = this.data.name;
	    var cubeColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var box = sceneEl.querySelector('#' + cubeName);

  		if (box.getAttribute("color") == "orange"){
  			box.setAttribute("clear", 1);
  		}
  	}
});