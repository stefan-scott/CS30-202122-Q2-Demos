// Movable Marks + Voronoi Diagram
// Mr. Scott
// Dec 17, 2021
//
// For a buisiness placement problem...?


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}



class MovableMarker{
  //something like a pin that can placed/moved on a map
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.baseColor = color(255,0,0);
    this.hoverColor = color(200,0,0);
    this.beingDragged = false; 
    this.radius = 15;
    this.diameter = this.radius * 2;
  }


  //class Methods
  move(){

  }

  display(){
    if(this.mouseIsOver()){
      fill(this.hoverColor);
    }
    else{  //no hover
      fill(this.baseColor);
    }
    circle(this.x, this.y, this.diameter);
  }

  mouseIsOver(){
    //return true if the mouse is hovering over this shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d <= this.radius){
      return true; //mouse is hovering over this object
    }
    else{
      return false;
    }
  }
  

}