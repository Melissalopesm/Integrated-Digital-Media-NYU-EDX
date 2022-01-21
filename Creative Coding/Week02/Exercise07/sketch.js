function setup() {
  createCanvas(400, 400);
}

function draw() {
  var shapeWidth = 200;
  var shapeHeight = 200;

  background(220);

  rect(20, 20, mouseX, mouseY);
  ellipse(200, 120, mouseX, mouseY);
}

//os elemntos se mexem com o mouse
