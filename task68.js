/* Task:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them. */

//code:

function between(a, b) {
    let arr = [];
    for (let i = a; a <= b; a++) {
      arr.push(a);
    }
    return arr;
  }