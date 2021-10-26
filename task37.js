/* Task:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them. */

//code:

function abbrevName(name){
    var nam = name.split(' ');
    return (nam[0][0] + '.' + nam[1][0]).toUpperCase();
  }