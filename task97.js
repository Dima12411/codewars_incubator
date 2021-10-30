/* Task:
Given a non-empty array of integers, return the result of multiplying the values together in order.  */

//code:

function grow(x){
    let s = 1;
  for (let i = 0; i < x.length; i++) {
    s *= x[i];
  }
    return s;
  }