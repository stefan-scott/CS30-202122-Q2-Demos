// Recursive Visualizations
// Mr. Scott
// Jan 6, 2022
// Some simple recursive visualizations


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // drawCircle(width/2, height/2, 100);
  // drawCircle(50,50,160);
  strokeWeight(1);
  drawCantor(width * 0.05, height/2, width*0.9);
}

function drawCantor(x, y, len){
  line(x,y, x+len, y); //start with a line
  if(len>3){  //base case: len <=3
    //recursive calls for next two lines (next generation)
    drawCantor(x, y+20, len/3);
    drawCantor(x + 2*len/3, y+20, len/3);
  }

}



function drawCircle(x, y, s){
  //draw a circle recursively
  //(x,y) position
  //s diameter

  //base case is implied (s<=2...do nothing)
  if(s>2){
    circle(x,y,s);
    drawCircle(x,y,s-10);
  }



}
