/* Task:
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b. */

//code:

function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++) {
      sum1 += a[i] ** 2;
    }
    for (let j = 0; j < b.length; j++) {
      sum2 += b[j] ** 3;
    }
    if (sum1 > sum2) {
      return true;
    } else {
      return false;
    }
  }