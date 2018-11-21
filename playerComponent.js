AFRAME.registerComponent('player', {
    schema: {
	  	name: {type: 'string'},
	  	color: {type: 'string', default: 'Not set'},
	  	hp: {type: 'string', default: 100}
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

	    document.getElementById("hp").innerHTML = "Current health: " + parseInt(player.getAttribute("hp")) + "%";
	    if (parseInt(player.getAttribute("hp")) < 1){
	    	window.open("SafeCycleVRTutorial.html", '_self', false);
	    }

  		if (player.getAttribute("color") == "orange"){
  			var hp = parseFloat(player.getAttribute("hp")) - 0.2;
  			player.setAttribute("hp", hp);
  		}
  	}
});