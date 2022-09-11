//Use the Spread Operator to Evaluate Arrays In-Place
//allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. 

//The ES5 code below uses apply() to compute the maximum value in an array:
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

//The spread operator makes this syntax much better to read and maintain.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

//maximus would have a value of 89.

//EXERCÍCIO: Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);

//RESPOSTA
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//retorna: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']