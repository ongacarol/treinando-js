/*Iterate with JavaScript For Loops
You can run the same code multiple times by using a loop.
The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
For loops are declared with three optional expressions separated by semicolons:
for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.*/

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i<=5; i++) {
  myArray.push(i);
}

console.log(myArray);