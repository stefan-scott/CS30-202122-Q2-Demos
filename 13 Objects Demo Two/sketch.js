// Objects Demo Two
// Mr. Scott
// Dec 6th, 2021
// Objects and Loops working together. Maybe some gravity.


let dotCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initDots();
}

function draw() {
  background(220);

  for(let i = 0; i < dotCollection.length; i++){
    dotCollection[i].process();
  }
}

function initDots(){
  //use a while loop, to make a bunch of linearly aligned dots
  let spacing = 25;
  let currentX = spacing/2;
  let currentY = spacing/2;
  while(currentX < width){ //generates a new X position
    while(currentY< height){
      dotCollection.push(new Dot(currentX, currentY, 20));
      currentY += spacing;
    }
    currentX += spacing;
    currentY = spacing/2;
  }
}

// function mousePressed(){
//   dotCollection.push(new Dot(mouseX, mouseY, 10));
// }


////// CLASS BELOW THIS POINT //////////

class Dot{
  //class constructor
  constructor(x, y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = diameter;  
    this.c = color(255,255,255);
  }

  //class methods
  display(){
    fill(this.c);
    circle(this.x, this.y, this.diameter);
  }

  setColor(){
    //
  }

  process(){
    //helper function to call the appropriate class methods
    this.setColor();
    this.display();
  }
}