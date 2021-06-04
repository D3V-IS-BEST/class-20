var wall
var pointer







function setup() {
  createCanvas(800,400);
wall=createSprite(400,100,200,40);
pointer=createSprite(100,100,30,50);

wall.debug=true;
pointer.debug=true;





}

function draw() {
  background(12,255,255);  
 
pointer.x = mouseX;
pointer.y = mouseY;
 console.log(pointer.x-wall.x)
 if (pointer.x-wall.x< pointer.width/2 + wall.width/2
  && wall.x-pointer.x<pointer.width/2 + wall.width/2 
  && wall.y-pointer.y<pointer.height/2 + wall.height/2
  && pointer.y - wall.y<pointer.height/2 + wall.height/2) {
   pointer.shapeColor = "red"
 }
 else{
   
  pointer.shapeColor = "green"
  wall.shapeColor = "yellow"
   

 }
 
 
 
 
 
 
  drawSprites();
}