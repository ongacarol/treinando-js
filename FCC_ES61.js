//Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. 

function checkScope() {
    let i = 'function scope'; //era var
    if (true) {
      let i = 'block scope'; //era só i, coloquei let i
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }