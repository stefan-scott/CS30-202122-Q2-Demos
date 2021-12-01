// Terrain Starter Code
// 
// 

let rectWidth=50;   //width of each rectangle slice

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(220);
  regularRandomTerrain();
}

function draw() {
  
}

function regularRandomTerrain(){
  //create some random terrain using random()
  for(let x = 0; x < width; x += rectWidth){
    let sectionHeight = random(0,height);
    rect(x,height, x+rectWidth, height - sectionHeight);
  }
}
