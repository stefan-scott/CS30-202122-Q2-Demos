// Video Stream and Effects
// Mr. Scott
// Jan 18, 2022
// Can we get these webcams to work?

let video;
let GRID_SPACING = 10;

function setup() {
  video = createCapture(VIDEO);
  createCanvas(640, 480);
  video.hide();
  textSize(GRID_SPACING);
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
  let r = video.pixels[pos];
  let g = video.pixels[pos + 1];
  let b = video.pixels[pos + 2];
  return (r + g + b) / 3;
}

function setPixelColor(pos, r, g, b) {
  //Helper Function to set RGB for particular pixel, index of R given by pos
  video.pixels[pos] = r;
  video.pixels[pos + 1] = g;
  video.pixels[pos + 2] = b;
}

function magnify() {
  //magnify the video feed at the cursor location
  let cursorArea = video.get(mouseX - 25, mouseY - 25, 50, 50);
  imageMode(CENTER);
  image(cursorArea, mouseX, mouseY, cursorArea.width * 3, cursorArea.height * 3);
  imageMode(CORNER);
}

function drawCharacter(x, y, avg) {
  //depending on the avg intensity, pick a character to draw it...
  fill(255);
  if (avg > 210) {
    text("@", x, y);
  }
  else if (avg > 140) { text("x", x, y); }
  else if (avg > 80) { text("¬", x, y); }
  else if (avg > 40) { text(".", x, y); }
}

function draw() {
  video.loadPixels();
  background(0);


  for (let x = 0; x < video.width; x += GRID_SPACING) {
    for (let y = 0; y < video.height; y += GRID_SPACING) {
      let location = (x + y * video.width) * 4; //r value for (x,y)pixel
      let avg = average(location);

      //option 1 - circles
      // fill(avg);
      // circle(x,y,5);

      //option 2 - text
      drawCharacter(x, y, avg);

    }
  }

}







function originalDraw() {
  //This was the draw used for greyscale and magnifier
  background(220);
  //multiVideo();
  image(video, 0, 0);
  // magnify();
  loadPixels();  //tells p5 we want access to the pixel array

  for (let i = 0; i < pixels.length; i += 4) {
    let avg = average(i);
    setPixelColor(i, avg, avg, avg);
  }

  updatePixels();
}
