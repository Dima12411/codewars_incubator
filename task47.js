/* Task:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */

//code:

function cockroachSpeed(s) {
    return Math.floor((s * 1000 * 100) / 3600);
  }