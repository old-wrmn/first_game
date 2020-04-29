var myGamePiece;

var score;

function start() {
    myGameArea.start();
}

function startGame(j){
    myGamePiece = new component(10, 10, "blue", Math.floor(Math.random() * (myGameArea.canvas.width/10))*10, Math.floor(Math.random() * (myGameArea.canvas.height/10))*10);
    score=0;    
    foods();
    myGameArea.go(j);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        },
    go : function(j){
        updateGameArea();
        clearInterval(this.interval);
        var k=400;
        for(var i=0;i<j;i++){
            k=k/2;
        }
        this.interval = setInterval(updateGameArea, k);
    },
    stop : function(){
        clearInterval(this.interval);
        window.alert("game over");
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    myGameArea.clear(); 
    myGamePiece.update();
    myGamePiece.newPos();
    if(myGamePiece.x == food.x && myGamePiece.y == food.y){
        score +=10;
        foods();
    }
    updateScore();
    food.update();  
}

function updateScore(){
    document.getElementById("score").innerHTML = score;
}
