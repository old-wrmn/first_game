var food;

function foods(){
    food = new gameFood(10, 10, "#c10000", Math.floor(Math.random() * (myGameArea.canvas.width/10))*10, Math.floor(Math.random() * (myGameArea.canvas.height/10))*10);
    myGameTails.push(new component(10, 10, "#aaffaa", myGamePiece.x, myGamePiece.y));
}

function gameFood(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}