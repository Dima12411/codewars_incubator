/* Task:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array. */

//code:

function countPositivesSumNegatives(input) {
    if (!input) {
     return []
   }
   let a = 0;
   let b = 0;
     for (let i = 0; i < input.length; i++) {
       if (input[i] > 0) {
         a++;
       } else if (input[i] < 0) {
         b += input[i];
       }
     }
   if (input.length !== 0) {
     return [a, b];
   } else {
     return [];