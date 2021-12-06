// Objects Demo Two
// Mr. Scott
// Dec 6th, 2021
// Objects and Loops working together. Maybe some gravity.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


class Dot{
  //class constructor
  constructor(x, y, diameter){
    this.x = x;
    this.y = y;
    this.diameter = y;  
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