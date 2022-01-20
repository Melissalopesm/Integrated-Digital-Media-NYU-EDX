function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  arc(200, 200, 100, 100, 0, PI);
  // arc(200, 200, 100, 100, 0, TWO_PI); ellipse
  // arc(200, 200, 100, 100, 0, TWO_PI, CHORD); closed arc
  // arc(200, 200, 100, 100, 0, PI/2, CHORD); arco fechado menor
  // arc(200, 200, 100, 100, 0, PI/2, PIE); metade de um arco fechado
}

// Anatomy of a function: arc()
