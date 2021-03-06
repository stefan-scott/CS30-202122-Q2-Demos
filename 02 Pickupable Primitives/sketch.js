// Pickupable Primitives
// Mr. Scott
// Nov 17th, 2021
// Simple Application of mouse-movable (pickupable) shapes

//global variables
let x, y, rSize;
let rLeft, rRight, rTop, rBottom;  //edge positions of rectangle
let pickedUp = false;  //are we currently moving the object?
let mouseOver = false; //are we hovering on the object?
let xOff, yOff; //used to allow for picking the rectangle up at any point

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  rSize = 200;  //rHeight will be half of rSize
}

function draw() {
  background(0);
  drawRectangle();
}

function drawRectangle(){
  //renders the rectangle and also checks for mouse interactions
  updateEdgePositions();
  print(rLeft + " " + rRight + " " + rTop + " " + rBottom + " " + pickedUp + " " + mouseOver);

  if(mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom || pickedUp){
    fill(220,10,255);
    mouseOver = true;
  }
  else{
    fill(255);
    mouseOver = false;
  }

  if(pickedUp){
    //can this be improved?? to not autocenter on the mouse?
    x = mouseX - xOff;
    y = mouseY - yOff;
  }

  rect(x,y, rSize, rSize/2);
}

function updateEdgePositions(){
  //update the left/right/top/bottom variables for our rectangle
  rLeft = x - rSize/2;
  rRight = x + rSize/2;
  rTop = y - rSize/4;
  rBottom = y + rSize/4;
}

function mousePressed(){
  if(mouseOver){
    pickedUp = true;
    // now update offset (to account for case where mouse is not in the center 
    // of the rectangle)
    xOff = mouseX - x;
    yOff = mouseY - y;
  }
}

function mouseReleased(){
  pickedUp = false;
}


















