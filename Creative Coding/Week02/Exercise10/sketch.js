function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	//must evaluate both the mouseX and mouseY position variables
	if(mouseX <= 300 && mouseY <=300){
		ellipse(mouseX, mouseY, 20, 20);
	}

}

//Resolução do exercício proposto pelo curso
