class Ripple {
  constructor(x, y,r_alpha, r_radius) {
    this.x = x;
    this.y = y;
    this.r_radius = 10;
    this.r_alpha = 255;
  }

  update() {
    this.r_radius += 1;
    this.r_alpha -= 2;
  }

  display() {
    noFill();
    stroke(180, 0, 120, this.r_alpha);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r_radius);
    ellipse(this.x, this.y, this.r_radius * 1.7);
  }

  isFinished() {
    return this.r_alpha <= 0;
  }
}

let ripples = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(150, 0, 100);

  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];
    r.update();
    r.display();

    if (r.isFinished()) {
      ripples.splice(i, 1);
    }
  }
}

function mousePressed() {
  ripples.push(new Ripple(mouseX, mouseY));
}
