var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
  if (select_sprites  == 1) 
  { createApples(); }
  else if  (select_sprites == 2) {         createApples(); }
else {  createApples(); } }
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) 
  { createLeaves(); }
  else if  (select_sprites == 5) {
    createLeaves(); }
else {  createLeaves(); } }
  drawSprites();
}
function createApples() {
apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale=0.1;
apple.velocityY=5;
apple.lifetime=150;
}
function createLeaves() {
leaf=createSprite(random(50,350),40,10,10)
leaf.addImage(orangeImg);
leaf.scale=0.1;
leaf.velocityY=5;
leaf.lifetime=150;
}






function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
