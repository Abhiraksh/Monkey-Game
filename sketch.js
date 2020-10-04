
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, monkeyGroup;
var score = 0, ground, groundI, survivalTime = 0;
var PLAY = 1, END, gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)

monkey = createSprite(100,160,20,20);
  monkey.addAnimation("monkey", monkey_running);
monkey.scale = 0.08;
  
ground = createSprite(300,160,900,10);
 
  
 groundI = createSprite(300,160,900,10);
  groundI.velocityX = -4;
  groundI.visible = false;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  monkeyGroup = new Group();
  monkeyGroup.add(monkey);
}

function draw() {
 background("white");
 
  if(gameState === PLAY){
   
  spawnF();
  spawnOBS();
  
  
    
   if(keyDown("space")&& monkey.y >= 120) {
        monkey.velocityY = -12;
        
    }
   if(monkey.isTouching(FoodGroup)){
      score = score+1;
     FoodGroup.destroyEach();
      }
      
  survivalTime = Math.round(frameCount/50);
 
    if(monkey.isTouching(obstacleGroup)){
      
      gameState = END;
    
    }
 
  }
    else if (gameState === END){
     
      FoodGroup.setVelocityXEach(0);
      obstacleGroup.setVelocityXEach(0);
      
      monkey.velocityY = 0;
      
    }
  
  monkey.velocityY = monkey.velocityY+0.8
   monkey.collide(groundI);
  monkey.collide(ground);
  stroke("black");
  textSize(12);
  fill("black");
   text("Survival Time: "+survivalTime,50,50);
  
  stroke("black");
  textSize(12);
  fill("black");
  text("Score: "+score,500,50);
    
    drawSprites();
    
  
}

function spawnF(){
 if(frameCount%80===0){
   
   banana = createSprite(650,60,20,20);
   banana.addImage("bn",bananaImage);
   banana.lifetime = -1;
   banana.velocityX = -4;
   banana.scale = 0.08;
   
   FoodGroup.add(banana);
   
 }
  
}
function spawnOBS (){
  if(frameCount%300 === 0){
  
  obstacle= createSprite(650,140,20,20);
    obstacle.addImage("oi", obstacleImage);
    obstacle.lifetime = -1;
    obstacle.velocityX = -4;
    obstacle.scale = 0.08;
  
    obstacleGroup.add(obstacle);
  }  
}



