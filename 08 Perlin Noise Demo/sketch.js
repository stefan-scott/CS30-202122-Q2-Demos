// Working with Perlin Noise
// Mr. Scott
// Nov 29, 2021
// Comparing random() with noise()

let dia, t, x, y;  //diameter, time, x, and y
let xTime, yTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  t = random(110);  //noise seed
  x = width/2; 
  y = height/2;
  xTime = 5;
  yTime = 25;
  background(0);
  noStroke();
}

function draw() {
  //background(255);
  fill(0,10);
  rect(0,0,width,height);
  moveCircle();
  drawCircle();
}

function drawCircle(){
  dia = noise(t);  //0-1
  dia = map(dia, 0, 1, 10, 90);
  fill(255,0,0);
  circle(x, y, dia);
  t += 0.02;
}


function moveCircle(){
  //use some random() or noise() to move our circle
  x+= map(noise(xTime),0,1,-5,5);
  y += map(noise(yTime),0,1,-5,5);
  xTime += 0.02;
  yTime += 0.02;

}

