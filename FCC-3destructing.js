//Use Destructuring Assignment to Extract Values from Objects

//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

//Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;

//Os resultados são os mesmos, porém com o destructing fica bem mais limpo.

//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line