var database;
var gameState=0
var playerCount=0
var form,player,game
var allPlayers
var car1,car2,car3,car4,cars
var p1,p2,p3,p4,p5
function preload() {
   // p1=loadImage("B1.1.jng")
    p2=loadImage("Imported piskel (1).gif")
    p3=loadImage("Imported piskel.gif")
    p4=loadImage("Imported piskel (2).gif")
    p5=loadImage("Imported piskel (5).gif")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start()
    

}

function draw(){
    background(255,255,255)
    if (playerCount===4){
    game.update(1)

    }
    if (gameState === 1){
    clear();
    game.play()
    }

}