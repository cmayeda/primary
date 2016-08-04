var createGrid = function() { 

	var newGrid = document.getElementById('grid');

	for(var i = 0; i < 4; i++) { 

		var row = document.createElement("div");
		row.className = "row";

		for(var j = 0; j < 4; j++) { 
			var box = document.createElement("div");
			box.className = "box";
			row.appendChild(box);
		}
		newGrid.appendChild(row);
	} 
}

var fillGrid = function() { 

	var BOX1 = document.getElementsByClassName('box')[randomBox()];
	BOX1.classList.add(randomColor());
	var BOX2 = document.getElementsByClassName('box')[randomBox()];
	BOX2.classList.add(randomColor());
	var BOX3 = document.getElementsByClassName('box')[randomBox()];
	BOX3.classList.add(randomColor());

}

var addBox = function() { 

	var num = Math.floor(Math.random()*15);
	var BOX = document.getElementsByClassName('box')[num];

	if(BOX.classList.length >= 2) { 
		num++;
	}

	BOX = document.getElementsByClassName('box')[num];
	BOX.classList.add(randomColor());

}

var randomColor = function() { 

	var colors = ["red", "blue", "yellow", "purple", "green", "orange"];
	return colors[Math.floor(Math.random()*colors.length)];

}

var randomBox = function() { 

 	return Math.floor(Math.random()*16);

}