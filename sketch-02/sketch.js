function setup() {
  createCanvas(500, 500);

background(200,0,120)
}

let taille = 65

function draw() {
  circle(mouseX,mouseY,taille)
  fill(random(180,200),0,random(110,120))
  strokeWeight(0)
  taille = taille
}

function keyPressed(){
  if( key == "s" ){
     save("drawing.png");   
  }
}