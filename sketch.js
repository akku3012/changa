var changa,c1 ;
var canvas;

var player;




function preload(){
  changa = loadImage("sprites/changa.png")
}

function setup() {
 canvas=  createCanvas(1800,1800);
c1 =  createSprite(350, 300, 1200, 1000);
 c1.addImage(changa);
 c1.scale = 0.7;

 //p1 = createSprite(330,120,15,15);
 //p2 = createSprite(370,120,15,15);

 
}

function draw() {
  background(255,255,255);  

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
  }
  
  drawSprites();
}