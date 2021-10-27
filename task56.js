/* Task:
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */

//code:

const areaOrPerimeter = function(l , w) {
    if (l == w) {
      return l * w;
    } else {
      return 2 * (l + w);
    }
    };