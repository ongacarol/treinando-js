// Replace Loops using Recursion

//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
    // Only change code above this line
  }

sum([1], 0) //should equal 0.
sum([2, 3, 4], 1) //should equal 2.
sum([2, 3, 4, 5], 3) //should equal 9.

/*The if statement checks to see if sum is evaluating the base case, n <= 0, or not. If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive. Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1). Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.*/

//PQ N MENOR QUE ZERO?? PQ N-1?