/* Task:
Given a year, return the century it is in. */



//code:

function century(year) {
    let cen = 0;
    for (let i = 0, j = 1; i <= year; j++, i += 100) {
      if (year > i) {
        cen = j;
      }
    }
      
    return cen;
  }
  century(1705);
  century(1900);
  century(1601);
  century(2000);
  century(89);