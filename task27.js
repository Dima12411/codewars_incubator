/* Task:
Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero) */

//code:

function oddOrEven(array) {
    let sum = 0;
   for (let i = 0; i < array.length; i++) {
     sum += array[i];
   }
     if (sum == 0 || sum % 2 == 0) {
       return "even";
     } else if (sum % 2 != 0) {
       return "odd";
     }
 }