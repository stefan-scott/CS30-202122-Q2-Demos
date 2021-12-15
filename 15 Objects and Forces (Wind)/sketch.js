// Particles and Wind Forces
// Mr. Scott
// Dec 15, 2021
// More practice with Objects, Vectors, etc...

let myWind;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let windForce = createVector(0,-0.1);
  myWind = new WindZone(width * 0.3, width * 0.5, windForce);
}

function draw() {
  background(220);
  myWind.runWind();
}


class WindZone{
  
  
  //constructor
  constructor(startX, endX, f){ //f -> force vector (wind str)
    this.startX = startX;
    this.endX = endX;
    this.force = f; 
    this.windLines = [];
    this.NUM_LINES = 100;
    this.initWind();
  }


  //class methods
  initWind(){  //create a bunch of windline Objects
    for(let i = 0; i < this.NUM_LINES; i++){
      this.windLines.push(new WindLine(random(this.startX,this.endX)));  
    }
  }

  runWind(){
    for(let w of this.windLines){
      w.move();
      w.display();
    }
  }

}

class WindLine{
  //the lines used to illustrate areas where a find force is
  constructor(x){
    this.pos = createVector(x, random(height));
    this.vel = createVector(0, random(-2, -0.5));
    this.len = random(4,15);
  }

  //class methods
  move(){
    this.pos.add(this.vel);
    if((this.pos.y) < 0){
      //gone off top of screen, time to wrap around
      this.pos.y = height;
    }
  }

  display(){
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len);
  }


}
