function closeCompare(a, b, margin = 0){
    if (margin >= (Math.max(a,b) - Math.min(a,b))) {
      return 0;
    } else if(a < b) {
      return -1;
    } else return 1;
    }
  