/* Task:
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

//code:

function correct(string) {
    let str = "";
      for (let i = 0; i < string.length; i++) {
      if (string[i] == "5") {
        str += "S";
      } else if (string[i] == "0") {
        str += "O";
      } else if (string[i] == "1") {
        str += "I";
      } else {
        str += string[i];
      }
      }
    return str;
  }