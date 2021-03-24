var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1400,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 25,20);
  wall=createSprite(1300,200, thickness, height/2);
  fill ("white")
  bullet.velocityX=speed;
  thickness=random (22,83)
}

function draw() {
background("white");


  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    console.log(deformation);
    if (deformation >= 180){
      bullet.shapeColor=color(255,230,0);
    }
    if (deformation  < 180 && deformation > 100){
      bullet.shapeColor=color(230,230,0);
    }
    if (deformation < 100){
      bullet.shapeColor=color(0,255,0);
    }
  }


  drawSprites();

  }