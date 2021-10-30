/* Task:
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. */

//code:

function preFizz(n) {
    let arr = [];
      let num = 1;
      while(arr.length < n){
        arr.push(num);
        num += 1;
      }
      return arr;
    
    }