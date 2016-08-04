window.onload = function() { 
	
	createGrid();	
	fillGrid();

	var direction = null; 
	var count = 0;
	document.getElementById("score").innerHTML = 0;
		
    document.onkeydown = checkKey; 

    function checkKey(e) { 
		e = e || window.event;

		if(e.keyCode == 37) { //left
		    direction = "left";	    
		} else if(e.keyCode == 38) { //up
		    direction = "up";
		} else if(e.keyCode == 39) { //right
		    direction = "right";
		} else if(e.keyCode == 40) { //down
		    direction = "down";
		} else { 
		    //return;
		}

		count++;
		userPlay(direction);
		console.log(direction); 
		if( count%3 == 0 ) { 
    		addBox();
    	}

    }

}

var userPlay = function(direction) { 

	if(direction == "up") {

		for(var i = 4; i <= 15; i++) { 
			var BOX = document.getElementsByClassName('box')[i];
			var changeBOX = document.getElementsByClassName('box')[i-4];
			changeColor(BOX, changeBOX);	
		}

	} else if(direction == "down") {

		for(var i = 11; i >= 0; i--) { 
			var BOX = document.getElementsByClassName('box')[i];
			var changeBOX = document.getElementsByClassName('box')[i+4];
			changeColor(BOX, changeBOX);	
		}

	} else if(direction == "left") {

		for(var i = 0; i <= 15; i++){ 
			
			var BOX = document.getElementsByClassName('box')[i];
			switch(i) { 
				case 0: 
					break;
				case 4:
					break;
				case 8: 
					break;
				case 12:
					break;
				default: 
					var changeBOX = document.getElementsByClassName('box')[i-1];
					changeColor(BOX, changeBOX);
			}

		}

	} else if(direction == "right") {

		for(var i = 14; i >= 0; i--){ 
			var BOX = document.getElementsByClassName('box')[i];
			switch(i) { 
				case 3:
					break;
				case 7:
					break;
				case 11: 
					break;
				default: 				
					var changeBOX = document.getElementsByClassName('box')[i+1];
					changeColor(BOX, changeBOX);
			}		
		}

	} else { 
			//? 
	}
}


//write to change 
var changeColor = function(BOX, changeBOX) { 

	var currentClassList = BOX.className.split(" ");
	var changeBOXList = changeBOX.className.split(" ");
	
	var BOXColor = currentClassList[1];
	var changeColor = changeBOXList[1];


		if(currentClassList.length >= 2 && changeBOXList.length == 1) { 

				var color = currentClassList[1];
				changeBOX.classList.add(color);
				BOX.classList.remove(color);

		} else if(currentClassList.length >= 2 && changeBOXList.length >= 2) { 
			
			//color combinations : primary colors 
	 		if(BOXColor == "red" && changeColor == "blue") { //red + blue = purple
				changeBOX.classList.add("purple"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "blue" && changeColor == "red") { 
				changeBOX.classList.add("purple");
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "blue" && changeColor == "yellow") { //blue + yellow = green 
				changeBOX.classList.add("green");
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "yellow" && changeColor == "blue") { 
				changeBOX.classList.add("green");
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "red" && changeColor == "yellow") { //red + yellow = orange 
				changeBOX.classList.add("orange"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "yellow" && changeColor == "red") { 
				changeBOX.classList.add("orange"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
	
			//color combinations : 2ndary to brown 	
			} else if(BOXColor == "purple" && changeColor == "green") { //purple + green = brown 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "green" && changeColor == "purple") { 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "green" && changeColor == "orange") { //green + orange = brown 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "orange" && changeColor == "green") { 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "orange" && changeColor == "purple") { //orange + purple = brown 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "purple" && changeColor == "orange") { 
				changeBOX.classList.add("brown"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);

			//color combinations : final 	
			} else if(BOXColor == "brown" && changeColor == "brown") { 
				changeBOX.classList.add("black"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "black" && changeColor == "black") { 
				changeBOX.classList.add("white"); 
				changeBOX.classList.remove(changeColor);
				BOX.classList.remove(BOXColor);
			} else if(BOXColor == "white" && changeColor == "white") { 

				BOX.classList.remove("white");
				//something to cumulate a score? 
				changeScore();

			} else { 
				//error, should not happen 
			}
			
		}
}


var changeScore = function() { 

	var oldScore = document.getElementById("score").innerHTML; 
	var oldScoreNum = parseInt(oldScore);
	document.getElementById("score").innerHTML = oldScoreNum + 10;

}


/*
	switch(BOXColor) { 
		case null: 
			break;
		//primary combinations 	
		case "red": 
			if(changeColor == "blue") { changeBOX.classList.add("purple"); }
			else if(changeColor == "yellow") { changeBOX.classList.add("orange"); }
			else { break; }
		case "blue": 
			if(changeColor == "yellow") { changeBOX.classList.add("green"); }
			else if(changeColor == "red") { changeBOX.classList.add("purple"); }
			else { break; }
		case: "yellow":
			if(changeColor == "red") { changeBOX.classList.add("orange"); }
			else if(changeColor == "blue") { changeBOX.classList.add("green"); }
			else ( break; )
		//secondary combinations 
		case "purple": 
			if(changeColor == "green" || changeColor == "orange") {
				changeBOX.classList.add("brown"); 
			} else { 
				break;
			}
		case "orange": 
			if(changeColor == "green" || changeColor == "purple") { 
				changeBOX.classList.add("brown");
			} else { 
				break; 
			}
		case "green": 
			if(changeColor == "purple" || changeColor == "orange") { 
				changeBOX.classList.add("brown");
			} else { 
				break; 
			}
		//final combinations 
		case "brown": 
			if(changeColor == "brown") { changeColor.classList.add("black"); } 
			else { break; }
		case "black": 
			if(changeColor == "black") { changeColor.classList.add("white"); }
			else { break; }
		case "white": 
			break; 
	}
	BOX.classList.remove(BOXColor);
	changeBOX.classList.remove(changeColor);
	*/