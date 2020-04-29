function moveup() {
    if(myGamePiece.speedY != 10){
        myGamePiece.speedY = -10;  
        myGamePiece.speedX = 0; 
    }
}

function movedown() {
    if(myGamePiece.speedY != -10){
        myGamePiece.speedY = 10;  
        myGamePiece.speedX = 0;  
    }
}

function moveleft() {
    if(myGamePiece.speedX != 10){
        myGamePiece.speedY = 0;  
        myGamePiece.speedX = -10;      
    }
}

function moveright() {
    if(myGamePiece.speedX != -10){
        myGamePiece.speedY = 0;  
        myGamePiece.speedX = 10;  
    }
}

document.onkeydown = function(event) {
        switch (event.keyCode) {
           	case 37:
                moveleft();
				break;
			case 38:
		   		moveup();
				break;
           	case 39:
		   		moveright();
				break;
           	case 40:
		   		movedown();
				break;
        }
}