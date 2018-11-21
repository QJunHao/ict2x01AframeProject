AFRAME.registerComponent('navcube', {
    schema: {
	  	name: {type: 'string'},
	  	color: {type: 'string', default: 'Not set'}
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

  		if (box.getAttribute("color") == "#42f48f"){
  			if (cubeName == "game")
  				console.log("game");
  				//window.open("http://localhost/Aframe/map.html", '_self', false);
  			else if (cubeName == "quit")
  				console.log("quit");
  				//window.open("http://localhost/Aframe/map.html", '_self', false);
        else if (cubeName == "tut")
          console.log("tutorial");
  		}
  	}
});