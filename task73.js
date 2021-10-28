/* Task:
Write a function that returns a string in which firstname is swapped with last name. */

//code:

function nameShuffler(str){
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
  }