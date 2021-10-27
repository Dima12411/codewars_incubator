/* Task:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

//code:

function findShort(s) {
    let res = s.split(' ');
    let a = Infinity;
    
    for (let i = 0; i < res.length; i++) {
      a = Math.min(res[i].length, a);
    }
    return a;
  }