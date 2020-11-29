var car ;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  speed.visible = 'false';
  weight.visible = 'false';
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50,200,20,20);
  wall.shapeColor = 'grey';
  car.velocityX = speed;
}
function draw() {
  background(255,255,255);
  if (0.5*weight*speed*speed/22500<100){
  wall.shapeColor = 'green';
  // car.velocityX = 0;
  } 
  else if (0.5*weight*speed*speed/22500 >=100 && 0.5*weight*speed*speed/22500<=180){
  wall.shapeColor = 'yellow';
  // car.velocityX = 0;
  }
  else if (0.5*weight*speed*speed/22500>180){
  wall.shapeColor = 'red';
  // car.velocityX = 0;
  }
  if(car.x>=1470){
  car.velocityX=0;
  } 
  console.log(0.5*weight*speed*speed/22500);
  drawSprites();
} 