//Use Recursion to Create a Countdown

// Only change code below this line
function countdown(n){
    if (n < 1) { 
    return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  
  console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]