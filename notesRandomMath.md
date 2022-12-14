Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

Code Explanation
Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

1- Math.random() = 0.8244326990411024
2- (myMax - myMin + 1) = 10 - 1 + 1 -> 10
3- a * b = 8.244326990411024
4- c + myMin = 9.244326990411024
5- Math.floor(9.244326990411024) = 9