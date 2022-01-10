// 2D Arrays Demo
// Mr. Scott
// Jan 10th, 2022
// Using a 2D Array for the first time this class

let grid = 
[[0,   255,  0, 0, 255],
 [0,   255,   0,   0,   255], 
 [255, 0,   255, 0,   255],
 [255, 0, 0, 0,  0]];

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight, col, row;

function flip(col, row){
  if(grid[row][col] === 0) grid[row][col] = 255;
  else grid[row][col] = 0;
}

function renderGrid() {
  //create a 2D grid of squares, using information from our
  //2D array for the corresponding fill values
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let fillValue = grid[y][x];
      fill(fillValue);  
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      //(0,0)  (0,1)  (0,2)
    }
  }
}

function getCurrentX(){
  return int(mouseX/rectWidth);
}

function getCurrentY(){
  return int(mouseY/rectHeight);
}

function mousePressed(){
  //when mouse is clicked, flip the value lined up with
  //the mouse position:
  flip(col, row);

  //flip the four neighbours:
  flip(col + 1, row); //right nieghbour
  flip(col - 1, row); //left neighnbour
  flip(col, row -1); //top nieghbour
  flip(col, row+1); //bottom neighbour
}

function setup() {
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(NUM_COLS * rectWidth, NUM_ROWS * rectHeight);
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();
  print(col, row);
  // //test animation
  // grid[int(random(4))][int(random(5))] = int(random(256));
  //       //0-3          //0-4                  //0-255
}
