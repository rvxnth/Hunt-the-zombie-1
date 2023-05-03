var player;
var bgImg;
var plyrImg;
var zombie1;
var zombie1Img;
var zombie2;
var zombie2Img;

function preload() {
bgImg = loadImage("graveyard.jpg")
plyrImg = loadImage("player.png")
zombie1Img = loadImage("zombie1.png")
zombie2Img = loadImage("zombie2.png")
}

function setup() {
createCanvas(900, 700)
player = createSprite(400, 500, 100, 100)
player.addImage(plyrImg)
player.scale = 0.8

}

function draw() {
background(bgImg)
if(keyDown(RIGHT_ARROW)&& player.x<800) {
  player.x = player.x+5

}

if(keyDown(LEFT_ARROW)&& player.x>100) {
  player.x = player.x-5
}

if(keyDown(UP_ARROW)&& player.y>400) {
  player.y = player.y-5
}

if(keyDown(DOWN_ARROW)&& player.y<600) {
  player.y = player.y+5
}

spawnZombies()
spawnZombies2()
drawSprites()
}

function spawnZombies() {
  if(frameCount %250===0) {
zombie1 = createSprite(850, 600, 100, 100)
zombie1.velocityX = -2 
zombie1.y = Math.round(random(450, 600))
zombie1.addImage(zombie1Img) 
zombie1.scale = 0.5
zombie1.lifetime = 450
  }
}

function spawnZombies2() {
  if(frameCount %200===0) {
    zombie2 = createSprite(150, 10, 100, 100)
    zombie2.velocityY = 2
    zombie2.x = Math.round(random(10, 800))
    zombie2.addImage(zombie2Img)
    zombie2.scale = 0.3

  }
}