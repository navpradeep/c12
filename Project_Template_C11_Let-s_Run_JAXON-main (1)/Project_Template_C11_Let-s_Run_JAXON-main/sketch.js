
function preload(){
  roadImg= loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");
  road=createSprite(200,400)
  road.addImage(roadImg)
  road.scale=1

  runner=createSprite(200,200,30,30)
  runner.addAnimation(runnerImg)

  invisibleWall = createSprite(40,200,10,400);
  invisibleWall.visible = false;

  invisibleWall1 = createSprite(360,200,10,400);
  invisibleWall1.visible = false;
  
}

function draw() {
  background(0);

  road.velocityY = -3;
  if (road.y < 100){
    road.y = height/2
  }

  runner.collide(invisibleWall)
  runner.collide(invisibleWall1)

  if(keyDown("a")) {
    runner.x=runner.x-5
  }

  if(keyDown("d")) {
    runner.x=runner.x+5
  }
  drawSprites();

}
