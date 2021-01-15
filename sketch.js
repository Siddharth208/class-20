var rect,rect2;
function setup() {
  createCanvas(800,400);
  rect=createSprite(400, 200, 50, 50);
  rect.shapeColor="blue";
  rect2=createSprite(200,200,50,50);
  rect2.shapeColor="red";
}

function draw() {
  background(0);  
  rect.x=mouseX;
  rect.y=mouseY;

  if(rect.x-rect2.x<rect2.width/2+rect.width/2&&rect2.x-rect.x<rect.width/2+rect2.width/2
    &&rect.y-rect2.y<rect.height/2+rect2.height/2&&rect2.y-rect.y<rect.height/2+rect2.height/2){
   rect.shapeColor="green";
   rect2.shapeColor="green";
  }
  else {
    rect.shapeColor="blue";
    rect2.shapeColor="red";
  }
  console.log(rect.x-rect2.x);
  drawSprites();
}