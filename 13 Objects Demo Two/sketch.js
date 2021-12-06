// Objects Demo Two
// Mr. Scott
// Dec 6th, 2021
// Objects and Loops working together. Maybe some gravity.


let dotCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for(let i = 0; i < dotCollection.length; i++){
    dotCollection[i].process();
  }
}

function mousePressed(){
  dotCollection.push(new Dot(mouseX, mouseY, 10));
}




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