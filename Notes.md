Remember the structure of a for loop:
for ([initialization]; [condition]; [final-expression]) statement

The [initialization] part is executed only once (the first time).
The [condition] is checked on every iteration.
The [final-expression] is executed along the statement if [condition] resolves to true.

//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. 

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(total);
}

Initialization: i gets a value of 0 and its used as a counter.
Condition: the subsequent code is executed as long as i is lower than the length of myArr (which is 5; five numbers but arrays are zero based).
Final-expression: i is incremented by 1.
Statement: The function adds myArr[i]'s value to total until the condition isn’t met like so: