var guitarCube, axe, enemy, cannon, sword, platform1, fakePlatform, platform2, platform3, platform4, platform5, platform6;
var cubeImg, axeImg, swordImg;
var lava;
var gameOvertxt;

function preload () {

cubeImg = loadImage("images/guitar.png");
axeImg = loadImage("images/hacha.jpg");
swordImg = loadImage("images/sword.jpg");
}

function setup() {
  createCanvas(1200,400);
   platform1 = createSprite(0 ,300 , 300, 15);
  platform2 = createSprite(220, 280, 100 ,15);
  platform3 = createSprite(350,260,100,15);
  platform4 = createSprite(470,240,100,15);
  platform5 = createSprite(590,220,100,15);
  platform6 = createSprite(710,280,100,15);
  fakePlatform = createSprite(710,200,100,15);
  lava = createSprite(400,375,1200,50);


  guitarCube = createSprite(40, 270, 15, 15);
  guitarCube.addImage(cubeImg);
  guitarCube.scale = 0.2
  
  
axe = createSprite(250,350,5,50);
axe.addImage("hacha", axeImg);
axe.scale = 0.15;

sword = createSprite(270,75,5,50);
sword.addImage("sword", swordImg);
sword.scale = 0.15;

}

function draw() {
  background("purple");

  axe.velocityY = -2;
  axe.velocityX = -2;

  sword.velocityY = 2;
  sword.velocityX = -2;



  if(keyIsDown(UP_ARROW))  {
    guitarCube.x += 2;
  }

  
  if(keyIsDown(DOWN_ARROW))  {
    guitarCube.x -= 2;
  }



  if(keyDown("space")&& guitarCube.y >= 50) {
    guitarCube.velocityY = -5;
  }

  if(axe.isTouching(guitarCube)) {
    guitarCube.visible = false;
    
  }

  
  if(guitarCube.y >= 300) {

  guitarCube.velocityY = 0;
  }
  
  guitarCube.velocityY = guitarCube.velocityY + 0.8

  guitarCube.collide(platform1);
  guitarCube.collide(platform2);
  guitarCube.collide(platform3);
  guitarCube.collide(platform4);
  guitarCube.collide(platform5);
  guitarCube.collide(platform6);

 

  lava.shapeColor = "orange";
  drawSprites();
}

