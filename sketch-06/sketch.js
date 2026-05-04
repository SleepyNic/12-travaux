function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(0);
  let cols = 150;
  let rows = 12;
  let spacingX = width / cols;
  let spacingY = height / rows;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i * spacingX;
      let y1 = j * spacingY + 20;
      let x2 = x1 + spacingX;
      let y2 = y1 + sin(frameCount * 0.09 + i) * 20;
      
      stroke(0,255,100);
      line(x1, y1, x2, y2);
    }
  }
}