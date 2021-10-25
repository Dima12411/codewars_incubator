/* Task:
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out */

//code:

function filter_list(l) {
	let arr = [];
  let arr2 = [];
	for (let i = 0; i < l.length; i++) {
    arr.push(String(l[i]));
	}
for (let i = 0; i <l.length; i++) {
    if (l[i] !== arr[i]) {
      arr2.push(l[i]);
    }
  }
  return arr2;
} 