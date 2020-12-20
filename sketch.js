var bullet,wall;
var speed,thickness,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  console.log(thickness);

  bullet = createSprite(100,200,50,50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  


}

function draw() {
  background(80,80,80);  

if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 * speed * speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor=color(255,0,0);

}
  
if(damage<10){

wall.shapeColor=color(0,255,0)

}
}

  drawSprites();
}