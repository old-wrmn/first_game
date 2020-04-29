var myGamePiece;
var myGameTails =[];
var score;
var dplc;

function start() {
    myGameArea.start();
}

function startGame(j){
    myGameTails =[];
    document.getElementById("stat").innerHTML = "Gak Bisa Tembus Dinding Ya";
    myGamePiece = new component(10, 10, "blue", Math.floor(Math.random() * (myGameArea.canvas.width/10))*10, Math.floor(Math.random() * (myGameArea.canvas.height/10))*10);
    score=0;
    for(var l=1;l<6;++l){
        var x=myGamePiece.x-l*10;
        myGameTails[l]=new component(10, 10, "#aaffaa", x, myGamePiece.y);
    }    
    foods();
    myGameArea.go(j);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        },
    go : function(j){
        updateGameArea();
        clearInterval(this.interval);
        var k=400;
        dplc=(j+1)*10;
        for(var i=0;i<j;i++){
            k=k/2;
        }
        this.interval = setInterval(updateGameArea, k);
    },
    stop : function(){
        clearInterval(this.interval);
        document.getElementById("stat").innerHTML = "Game Over";
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    myGameArea.clear(); 
    for(var l=myGameTails.length-1;l>=2;--l){
        myGameTails[l].update();
        myGameTails[l].newTemp2(l);
    }
    myGameTails[1].update();
    myGameTails[1].newTemp();
    myGamePiece.update();
    myGamePiece.newPos();
    if(myGamePiece.x == food.x && myGamePiece.y == food.y){
        score +=dplc;
        foods();
        updateScore();
    } 
    food.update(); 
}

function updateScore(){
    document.getElementById("score").innerHTML = score;
}
