// Basics of Object Oriented Programming
// Mr. Scott
// December 2, 2021
// Some random walkers defined as objects

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


class Walker{

  // class Constructor and Properties
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
  }

  // class methods/functions
  move(){
    let choice = Math.floor(random(4));
    if(myChoice === 0) this.x -= this.speed;   //LEFT
    else if (myChoice === 1) this.x += this.speed //RIGHT
    else if (myChoice === 2) this.y -= this.speed //UP
    else this.y += this.speed;
  }

  display(){    //draw the walker at it's current location
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }

}
