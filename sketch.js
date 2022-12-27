var sea,ship;
var seaImg,shipImg;

function preload(){
  //descomentar el código para agregar la animación del barco 

  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");

  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  

  // Mover el fondo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background("blue");
  sea.velocityX = -3;

  //descomentar el código para reiniciar el fondo
  if(sea.x < 0){ 
    sea.x = sea.width/8;
  }

 
  drawSprites();
 
}
