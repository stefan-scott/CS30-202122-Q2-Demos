// Array Warm-up and OOP Demo
// Mr. Scott
// Dec 2nd, 2021
// Find the minimum item's index + A first look 
// at object-oriented programming


//Warm-up: given an array of integers, find the smallest item
//         and report it's position

let numbers = [94, 32, 4, 33, 99, 102, 1];  //length 7
//              0   1  2   3   4    5  6
let sorted = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // findMinIndex();
  sortOurArray();
}

function draw() {
  background(220);
}

function sortOurArray(){
// find min value from array. Add to end of new 
// array and delete from original.
  while(numbers.length>0){
    findMinIndex();
  }
  print(sorted);
}

function findMinIndex(){
  // Search through an array. Find the smallest item, 
  // return it's index. Assume array is non-empty
  let smallestValue = numbers[0];
  let smallestIndex = 0;
  for(let i = 0; i <numbers.length ; i++){
    let current = numbers[i];
    if(current < smallestValue){
      smallestValue = current;
      smallestIndex = i;
    }
  }
  print(smallestValue + "\t" + smallestIndex);
  //copy result to new array and delete from original
  sorted.push(smallestValue);  //copies to new one
  numbers.splice(smallestIndex,1);
}
