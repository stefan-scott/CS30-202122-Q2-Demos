// Drawing with Loops
// Mr. Scott
// November 22, 2021
// Using Loops to draw more complex images


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  loopOne();
  //at the bottom of the the loop, a single new image is drawn
}

function loopOne() {
  //use a loop to draw some shapes
  let spacing = map(mouseX,0,width,10,100);   // can be 0  
  for (let x = 0; x < width; x += spacing) {
     //map a fill value
     let fillValue = map(x,0,width,0,255);
     fill(fillValue); 
     circle(x, height/2, spacing);
  }
}
