// Bouncing Object(s)
// Mr. Scott
// November 18th
// Using Variables to Create some animation


let ballX, ballY;  //variables for ball position
let bSize = 30;
let xSpeed = -2;
let ySpeed = 3;
let fillValue = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width * 0.9;
  ballY = height * 0.3;
}

function draw() {
  background(255);

  move();

  //update fill (fade)
  if (!mouseIsPressed) {  //"the mouse is not pressed"
    fillValue -= 5;
  }
  fillValue = constrain(fillValue,0,255);
 

  fill(255,0,0,fillValue);   //255 -> red  0 -> transparent
  circle(ballX, ballY, bSize);
}

function mousePressed() {
  fillValue = 255;
}

function move() {
  //this function is used to update the positin of the ball
  ballX += xSpeed;
  ballY += ySpeed;

  //handle some edge conditions
  let radius = bSize / 2;
  if (ballY < 0 + radius || ballY > height - radius) {
    ySpeed *= -1;
  }

  if (ballX < 0) {  //creates a wrap-around for X positions
    ballX = width;
  }
  else if (ballX > width) {
    ballX = 0;
  }
}
