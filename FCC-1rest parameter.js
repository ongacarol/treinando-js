
//A sintaxe de rest parameter (parâmetros rest) nos permite representar um número indefinido de argumentos como um array.
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }


const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

//The result of sum(1,2,3,4) should be 10
//The result of sum(5) should be 5
//The result of sum() should be 0