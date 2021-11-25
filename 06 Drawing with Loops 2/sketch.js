// Loop Drawing Two
let spacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();  //draw run only once
}

function draw() {
  background(220);
  nestedLoops();
}

function nestedLoops(){
  //to see what happens with a loop inside a loop
  for (let x = 0; x < width ; x += spacing){
    for (let y = 0; y < height; y+= spacing){
      // print(x + ", " + y);
      circle(x,y,2);
      let r = map(mouseX, 0, width, 0, 255);
      let g = map(mouseY, 0, height, 255, 0);
      let b = map(mouseX, 0, width, 255, 0);
      stroke(r,g,b);
      line(x,y,mouseX, mouseY);
    }
  }
}
