function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(0);
  let cols = 3;
  let rows = 3;
  let spacingX = width / cols ;
  let spacingY = height / rows ;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacingX + spacingX / 2;
      let y = j * spacingY + spacingY / 2;
      let w = sin(frameCount * 0.02 + i + j) * 20 + 40;
      let h = cos(frameCount * 0.02 + i - j) * 20 + 40;
      
      stroke(255,0,255);
      ellipse(x, y, w, h);
    }
  }
}