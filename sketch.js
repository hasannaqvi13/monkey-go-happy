
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
  monkey = createSprite(70,250,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.17
  
  ground = createSprite(250,350,900,10)
  ground.velocityX=-4
  
  FoodGroup = createGroup(); 
  obstacleGroup = createGroup();
}


function draw() {
  background("lightblue")
  
  ground.x = ground.width/2
  monkey.velocityY = monkey.velocityY + 0.8
  
  //console.log(monkey.y)
  
  if(keyDown("space")&& monkey.y >= 200){
    monkey.velocityY = -8
  }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime =   Math.ceil(frameCount/frameRate())
  text("survivaltime: "+survivalTime,50,50)
  
  monkey.collide(ground)
  
  spawnObstacle();
  spawnFruit();
  drawSprites();
}


function spawnFruit(){
  if (frameCount % 80 === 0){
    var fruit = createSprite(500,250,10,10)
    fruit.velocityX = -7
    fruit.y = Math.round(random(120,200))
    fruit.addImage (bananaImage)
    fruit.scale = 0.1
    //console.log(fruit.y)
    fruit.lifetime = 130
    
    
    FoodGroup.add(fruit)
  }
}
 

function spawnObstacle(){
if (frameCount % 300 === 0){
  var obstacle = createSprite (500,315,10,10)
  obstacle.velocityX = -7
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.lifetime = 130
  
  obstacleGroup.add(obstacle)
}
}