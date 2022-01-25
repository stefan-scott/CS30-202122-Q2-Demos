// Working with Images Review
// Mr. Scott
// Jan 25, 2022
// Some practice with images

let gorillaIdle = [];
let gorillaSwipe = [];

let gorillaX, gorillaY;
let gorillaIndex = 0;
let swipeIndex = 0;

function preload() {
  //load some images
  for (let i = 1; i < 7; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  gorillaX = width / 2;
  gorillaY = height / 2;
}

function draw() {
  background(0);

  //draw the gorilla;
  if (keyIsPressed && key === " ") {
    //swipe
    image(gorillaSwipe[swipeIndex], gorillaX, gorillaY);
    if (frameCount % 12 === 0) {
      swipeIndex++;
      if (swipeIndex > 5) swipeIndex = 0;
    }
    gorillaIndex = 0;
  }
  else {
    //idle
    image(gorillaIdle[gorillaIndex], gorillaX, gorillaY);
    if (frameCount % 12 === 0) {
      gorillaIndex++;
      if (gorillaIndex > 5) gorillaIndex = 0;
    }
    swipeIndex = 0;
  }




}
