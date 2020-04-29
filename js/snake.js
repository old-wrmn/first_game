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
}