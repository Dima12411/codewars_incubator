/* Task:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once */

//code:

function doubleChar(str) {
    let st = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < 2; j++){
        st += str[i];
      }
    }
    return st;
  }