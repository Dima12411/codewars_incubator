/* Task:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? */

//code:

function makeNegative(num) {
    if (num > 0) {
      num *= -1;
    }
     return num;
   }