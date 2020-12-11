var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  var survivalTime = 0;
  score = 0;
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white")
  
  
  if(keyDown("space") && monkey.y >= 150){
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50)
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50)
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  monkey.collide(ground)
  
  banana();
  Obstacles();
  
  drawSprites();
}

function banana(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,120,40,10)
    banana.y = Math.round(random(100,150))
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 220;
    
    FoodGroup.add(banana);
  }
  
}
function Obstacles(){
  if(frameCount % 120 === 0){
    var obstacle = createSprite(400,330,40,10);
    obstacle.x = Math.round(random(300,600))
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 300;
  }
}



