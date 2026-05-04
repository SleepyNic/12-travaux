let boxSize = 40;

let posX = 123;
let posY = 234

let vitX = 2;
let vitY = 4;

let radius = 0;

let color1 = 0;
let color3 = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0,200,100);
  fill(color1,0,color3);
  square(posX,posY,boxSize,radius)
  posX += vitX;
  posY += vitY;
  
  print(vitX);
  
  if(posX + boxSize > width || posX < 0 ){
    vitX *= -1;
    radius =random(0,50);
    color1 = random(200,255);
    color3 = random(150,200);
  }
    if(posY + boxSize > height || posY < 0 ){
    vitY *= -1;
        radius =random(0,50);
        color1 = random(150,255);
        color3 = random(100,200);
  }
}