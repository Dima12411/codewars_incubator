/* Task:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */


//code:

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let age = dadYearsOld - sonYearsOld * 2;
     if (age < 0) {
       age *= - 1;
     }
     return age;
   }
   console.log(findSmallestInt([78,56,232,12,8]));