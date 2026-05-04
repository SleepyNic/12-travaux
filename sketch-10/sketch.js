let t = 0; // time variable

function setup() {
  createCanvas(500 , 500);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
}

function draw() {
  background(300, 100, 20);
  
  for (let y = 0; y < 48; y++) {
    for (let x = 0; x < 48; x++) {
      let scaleFactor = sin(t + (x + y) * 1.5);
      let size = map(scaleFactor, 0, 1, 10, 25);

      let hue = (t * 60 + (x + y) * 5) % 360;
      fill(hue, 100, 100);
      
      square(x * 50 + 25, y * 50 + 25, size);
    }y
  }

  t += 0.03;
}
