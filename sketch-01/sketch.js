function setup() {
  createCanvas(500, 500);
  frameRate(12);
  noStroke(); // Supprime les contours
}

function draw() {
  background(30,30,30);
  
  let cellSize = 50;
  for (let x = 8; x < width; x += cellSize) {
    for (let y = 8; y < height; y += cellSize) {
      fill((0), random(150,200), 0) ; // Couleurs aléatoires
      rect(x, y, cellSize-random(15,20), cellSize-random(15,20));
    }
  }
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}
