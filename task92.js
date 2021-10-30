/* Task:
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones. */

//code:

function findDifference(a, b) {
    let sl_a = 1;
    let sl_b = 1;
    for (let i = 0; i < a.length; i++) {
      sl_a *= a[i];
    }
    for (let j = 0; j < b.length; j++) {
      sl_b *= b[j];
    }
    if (sl_a > sl_b) {
      return sl_a - sl_b;
  } else {
    return sl_b - sl_a;
  }
    }