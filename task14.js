/* Task:
In this kata you will create a function that takes in a list and returns a list with the reverse order */

//code:

function reverseList(list) {
    let arr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i]);
  }
    return arr;
  }