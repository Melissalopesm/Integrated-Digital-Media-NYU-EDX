function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
}

function draw() {
  background(200);
  point(10,10);//top,left
  point(390, 10)//top, right
  point(10, 390);//bottom, left
  point(390, 390);//bottom, right
}
