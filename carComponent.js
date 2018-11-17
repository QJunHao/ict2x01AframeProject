AFRAME.registerComponent('car', {
    schema: {
	  	name: {type: 'string'},
	  	color: {type: 'string', default: 'Not set'},
	  	collision: {type: 'string', default: 0}
	},
  	init: function () {
	    var carName = this.data.name;
	    var carColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var box = sceneEl.querySelector('#' + carName);
	    
	    console.log("Car initialized");
	    console.log(carName);
	    //console.log("Colour: " + box.getAttribute("color"));
	    //console.log("Name: " + box.getAttribute("name"));
	},
  	tick: function () {
  		//console.log("Tick!")
  		var carName = this.data.name;
	    var carColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var box = sceneEl.querySelector('#' + carName);

  		if (box.getAttribute("color") == "orange"){
  			var collision = parseInt(box.getAttribute("collision")) + 1;
  			box.setAttribute("collision", collision);
  			console.log(parseInt(box.getAttribute("collision")));
  			if (collision > 5){
  				console.log("Collision detected!");
  			}
  		}
  	}
});