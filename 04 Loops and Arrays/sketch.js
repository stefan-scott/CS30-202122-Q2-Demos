// Working with Arrays and Loops
// Mr. Scott
// Nov 19th, 2021
// A quick refresher and application of for loops and arrays

//global variables:
let x = [];
let y = [];
const NUM_POINTS = 40;
const SPEED = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  initArrays();
}

function initArrays() {
  //we'll use this function to set up all our initial x,y values
  let x1 = width/2;
  let y1 = height/2;
  x.push(x1);
  y.push(y1);
  for (let i = 0; i < NUM_POINTS; i++) {
    x.push(x[0] + random(-SPEED,SPEED));
    y.push(y[0] + random(-SPEED,SPEED));
  }
}

function drawArrays() {
  //read through the parallel arrays, and draw some circles + connecting lines
  for (let i = 0; i < x.length; i++) {
    fill(0);
    //circle(x[i], y[i], 10);
    //only draw a line forward if one exists:
    stroke(map(x[i],0,width,0,255),0,0, map(i, 0, x.length*0.75,100,255));
    strokeWeight(4);
    if (i < x.length - 1) {
      line(x[i], y[i], x[i + 1], y[i + 1]);
    }
  }
}

function updateArrays() {
  //push One new value on, and delete first value
  x.push(x[x.length-1]+random(-SPEED,SPEED));
  y.push(y[y.length-1]+random(-SPEED,SPEED));
  x.shift();
  y.shift();
}


function draw() {
  background(220);
  drawArrays();
  updateArrays();
}






// function doLoops(){
  //first:  WHILE Loop

  // let counter = 0;
  // while (counter < 6){
  //   print(names[counter]);
  //   counter++;
  // } 

  //second: FOR Loop  (basic)   (later, enhanced)
  // for(let i = 0 ; i < names.length ; i++){
  //   print(names[i]);
  // }

// }