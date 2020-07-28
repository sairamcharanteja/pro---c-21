var bullet,wall;
var speed,weigth,thickness;
var damage;





function setup() {
  createCanvas(1600,400);
 
 bullet = createSprite(50,200,50,20);
bullet.velocityX = 10;
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor(80,80,80);
  speed=random(233,321);
  weight=random(30,52);
  thickness=random(23,83);

  

}

function draw() {
  background(255,255,255);  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){

  damage =  ((0.5 * weigth * speed * speed) / thickness * thickness * thickness);

  
 
  if(damage> 180){
    bullet.shapeColor = "red";
  }
    
  if(damage < 180 && damage > 100) {
   bullet.shapeColor = "yellow";
  }
  
  
  if(damage < 100 ) {
bullet.shapeColor = "black";
  }
}
  
  drawSprites();
}