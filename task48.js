/* Task:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False! */

//code:

function betterThanAverage(classPoints, yourPoints) {
	let sum = 0;
	for (let i = 0; i < classPoints.length; i++) {
	  sum += classPoints[i];
	}
  if (yourPoints > sum / classPoints.length) {
	 return true; 
   } else {
	 return false;
   } 
  }