AFRAME.registerComponent('player', {
    schema: {
	  	name: {type: 'string'},
	  	color: {type: 'string', default: 'Not set'},
	  	collision: {type: 'string', default: 0}
	},
  	init: function () {
	    var playerName = this.data.name;
	    var playeColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var player = sceneEl.querySelector('#' + playerName);
	    
	    console.log("Player initialized");
	    console.log(playerName);
	},
  	tick: function () {
  		var playeName = this.data.name;
	    var playeColor = this.data.color;
	    var sceneEl = document.querySelector('a-scene');
	    var player = sceneEl.querySelector('#' + playeName);

	    document.getElementById("hp").innerHTML = "Current damage: " + parseInt(player.getAttribute("collision")/10);

  		if (player.getAttribute("color") == "orange"){
  			var collision = parseInt(player.getAttribute("collision")) + 1;
  			player.setAttribute("collision", collision);
  		}
  	}
});