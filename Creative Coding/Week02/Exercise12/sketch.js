function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(100);

	//must have 1st rectangle
	rect(width/2, height/2, 20, 20);

	var rectHeight;
	var rectWidth;
	//must have conditional expression
	if(width/2 < 300){
		rectHeight = 100;
		rectWidth = 200;
	} else {
		rectHeight = 200;
		rectWidth = 100;
	}

	//second rectangle size changes depending on conditional logic above
	rect(10, 10, rectWidth, rectHeight);

}

//Resolução do exercicio proposto pelo curso
