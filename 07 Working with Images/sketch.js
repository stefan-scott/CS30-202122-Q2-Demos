// Image Demo - Static and Animated
// Mr. Scott
// Nov 26, 2021
// Loading and Displaying Images Demo

let lionL, lionR;
let lionDirection = 0; //0-LEFT   1-RIGHT
let pinImages = [];
let currentFrame = 0;

function preload() {
  //ensure our images are loaded before running
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print("Size: " + lionL.width + ", " + lionL.height);
  imageMode(CENTER);
}

function draw() {
  background(255);
  stepOne();
  print(frameCount);

  
  image(pinImages[currentFrame], width / 2, height / 2);

  if (frameCount % 7 === 0) {
    currentFrame++;
  }
  if (currentFrame >= pinImages.length) {
    //have I reached an invalid index?
    currentFrame = 0;
  }
}















function stepOne() {
  //lion display. First, determine direction of mouse:
  if (pmouseX > mouseX) lionDirection = 0;
  else if (pmouseX < mouseX) lionDirection = 1;

  //now, draw the correct facing lion at mouse cursor
  if (lionDirection === 0) {
    image(lionL, mouseX, mouseY, lionL.width * 0.5, lionL.height * 0.5);
  }
  else {
    image(lionR, mouseX, mouseY, lionR.width * 0.5, lionR.height * 0.5);
  }
}




















