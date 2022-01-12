// Farm Game Block Pusher
// Mr. Scott
// Jan 12, 2022
// More work with 2D Array (and images this time)

//Globals and Constants
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;

let level = [
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0] ];

let tiles = [];  //0 - blank
                 //1 - chicken
                 //2 - cow


function preload(){
  for (let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2;  //place the player
}

function renderBoard(){
  //interpret the level 2D array and place images accordingly
  for (let y = 0; y< ROWS; y++){
    for( let x = 0; x < COLUMNS; x++){
      let imageIndex = level[y][x];
      image(tiles[imageIndex], x*TILE_SIZE, y*TILE_SIZE);
    }
  }
}

//FUNCTIONS related to movement:
function swap(x1, y1, x2, y2){
  //Simple manipulation of the gameboard - switch 2 (adjacent) items
  let temp = level[y1][x1]; //back it up
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function draw() {
  //background(220);
  renderBoard();
}
