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
    this.initWind();
  }


  //class methods
  initWind(){
    print("Does this work?");
  }

  runWind(){
    rect(this.startX,0, this.endX,height); //temporary
  }

}
