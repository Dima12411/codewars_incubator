/* Task:
Write a function called repeatStr which repeats the given string string exactly n times. */

//code:

function repeatStr (n, s) {
    var new_str = '';
       while (n-- > 0) 
         new_str += s;
         
     return new_str;
   }
   repeatStr(3, "*");
   repeatStr(5, "#");
   repeatStr(2, "ha ");