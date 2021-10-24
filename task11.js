/* Task:
Given an array of integers, return a new array with each value doubled. */

//code:

function maps(x){
    let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] * 2;
  }
    return arr;
  }