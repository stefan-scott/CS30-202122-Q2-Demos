// State Variables Demo
// Looking at State Variables, and a fading effect
// Mr. Scott
// November 16, 2021
//
// State Variables: a value stored in a variable that 
// represents some sort of "state"
//
// int:  millions of possible values, but with code we can constrain it
//       to less, perhaps 4.  0, 1, 2, 3
//  0 - black bg     1 - red bg    2 - blue bg    3 - green bg
//
// which side of the screen the mouse is on (left/right)
// 

let onLeft, onRight;   //Boolean state variables 
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function draw() {
  background(220);
  line(width/2, 0, width/2,height);
  updateCurrentSide();
  print("Left: " + onLeft + "\tRight: " + onRight);
  renderRectangles();
}


function renderRectangles(){
  //draw two rectangles of varying fill values on the screen
  //LEFT RECTANGLE
  if(onLeft){   
    fill(200,100,100, leftFade);
    leftFade += FADE_SPEED;
  }
  else{
    fill(255);
    leftFade = 0;
  }
  rect(0,0,width/2,height);

  //RIGHT RECTANGLE
  if(onRight){
    fill(50,255,128);
  }
  else{
    fill(255);
  }
  rect(width/2,0,width/2,height);
}

function updateCurrentSide(){
  //update the state variables to represent which side of the canvas
  //the mouse is presently on.
  if(mouseX < width/2){
    //mouse is on the LEFT
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the RIGHT
    onLeft = false;
    onRight = true;
  }
}





























