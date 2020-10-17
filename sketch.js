var movingrect,fixedrect;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400,200,60,40);
  fixedrect.debug = true;
  fixedrect.shapeColor = "green";
  fixedrect.velocityY = 5;

  movingrect = createSprite(400,600,40,60);
  movingrect.debug = true;
  movingrect.shapeColor = "green";
  movingrect.velocityY = -5;
  
}

function draw() {

  background(255,255,255);  

 

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
 fixedrect.velocityX = fixedrect.velocityX*(-1);
 movingrect.velocityX = movingrect.velocityX*(-1);
  }
 
  if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
fixedrect.velocityY = fixedrect.velocityY*(-1);
movingrect.velocityY = movingrect.velocityY*(-1);
    }
  drawSprites();
}