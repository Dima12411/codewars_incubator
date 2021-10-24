/* Task:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */


//code:

function past(h, m, s) {
    h = h * 60 * 60 * 1000;
    m = m * 60 * 1000;
    s = s * 1000;
    let sum = h + m + s;
    return sum;
  }