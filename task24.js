/* Task:
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2 */

//code:

function func(arr) {
	let sum = 0;
	let sum2 = 0;
	let ae = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0 || i == 0 ) {
			sum += arr[i];
		} 
		if (i & 2 != 0) {
			sum2 += arr[i];
		}

		}
		ae.push(sum);
ae.push(sum2);
		return ae;
	}
console.log(func([10,20,30,40]));