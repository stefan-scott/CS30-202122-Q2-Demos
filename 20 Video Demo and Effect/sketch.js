// Video Stream and Effects
// Mr. Scott
// Jan 18, 2022
// Can we get these webcams to work?

let video;
let GRID_SPACING = 100;

function setup() {
  video = createCapture(VIDEO);
  createCanvas(640, 480);
  video.hide();
}


function multiVideo() {
  //display several videos in a 2D grid
  for (let x = 0; x < width; x += GRID_SPACING) {
    for (let y = 0; y < height; y += GRID_SPACING) {
      image(video, x, y, GRID_SPACING, GRID_SPACING);
    }
  }
}

function average(pos) {
  //return the average value of r/g/b starting at pos
  let r = pixels[pos];
  let g = pixels[pos + 1];
  let b = pixels[pos + 2];
  return (r + g + b) / 3;
}

function setPixelColor(pos, r, g, b) {
  //Helper Function to set RGB for particular pixel, index of R given by pos
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function magnify() {
  let cursorArea = video.get(mouseX - 20, mouseY - 20, 40, 40)
  rectMode(CENTER)
  rect(mouseX, mouseY, cursorArea.width * 3 + 4, cursorArea.height * 3 + 4);
  image(cursorArea, mouseX, mouseY, cursorArea.width * 3, cursorArea.height * 3);
}

function draw() {
  background(220);
  //multiVideo();
  imageMode(CORNER);
  rectMode(CORNER);
  image(video, 0, 0);

  imageMode(CENTER);
  magnify();

  loadPixels();  //tells p5 we want access to the pixel array
  for (let i = 0; i < pixels.length; i += 4) {
    let avg = average(i);
    setPixelColor(i, avg, avg, avg);
  }

  updatePixels();


}
