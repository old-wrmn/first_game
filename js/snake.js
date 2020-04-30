function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        if(myGamePiece.x>=0 && myGamePiece.x<myGameArea.canvas.width && myGamePiece.y>=0 && myGamePiece.y<myGameArea.canvas.height){
            this.x += this.speedX;
            this.y += this.speedY; 
            }
        else{
            myGameArea.stop();
        }
    }
    this.newTemp = function(){
        myGameTails[1].x=myGamePiece.x;
        myGameTails[1].y=myGamePiece.y;
    }
    this.newTemp2 = function(l){
        if(myGamePiece.x==myGameTails[l].x && myGamePiece.y==myGameTails[l].y && gameStat==1){
            myGameArea.stop();
        }
        else{
            myGameTails[l].x = myGameTails[l-1].x;
            myGameTails[l].y = myGameTails[l-1].y;
        }
    }
    this.newPosTail = function(l){
        i=l-1;
        myGameTails[l].x=myGameTails[i].x;
        myGameTails[l].y=myGameTails[i].y;
    }
}