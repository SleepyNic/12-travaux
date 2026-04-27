let posX = 0;
let posY = 0;
let eyeSize = 250;
let pupilSize = 50;
let maxDis;


function setup() {
  createCanvas(500, 500);
  
  posX = 500/2;
  posY = 500/2;
  maxDis= (eyeSize - pupilSize)/2;
}

function draw() {
  
  background(120,255,120);
  fill(255)
  strokeWeight(5)
  circle(500/2,500/2,eyeSize)
  
  
  let lookX = posX + (mouseX - posX) * 0.2;
  let lookY = posY + (mouseY - posY) * 0.2;
  
  fill(255)
  circle(lookX,lookY,pupilSize)
}

function keyPressed(){
  if( key == "s" ){
     save("drawing.png");
  }
}