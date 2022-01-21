  // var bgRed = 200;
  // var bgGreen = 12;
  // var bgBlue = 0; //global variable

  //quando tirado, o espaço fica sombreado.

function setup() {
  createCanvas(400, 400);
  var bgRed = 200;
  var bgGreen = 12;
  var bgBlue = 0; //altera as cores no espaço
}

function draw() {
  background(bgRed, bgGreen, bgBlue); //vai ocasionar um erro pq as variavéis precisam estar fora das funções.
  //Quando as variavéis são tiradas das funções elas se tornam variáveis globais
}

//Variable scope

//Variables already defined in p5:

// width - Width (in pixels) of sketch window
// height - Height (in pixels) of sketch window
// frameCount - Number of frames processed
// frameRate - Rate that frames are processed
// windowWidth - Width of entire screen
// windowHeight - Heigh of entire screen
// key - Most recent key prossed on the keybord
// keyCode - Numeric code for key pressed on keybord
//keiIsPressed - True or False? Is a key
// mouseIsPresse - True or False? Is the mouse pressed?
// mouseButton - Which button is pressed? LEFT, RIGHT, or CENTER?
// mouseX - x position of mouse cursor (Number)
// mouseY - y position of mouse cursor(Number)
