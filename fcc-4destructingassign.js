//Use Destructuring Assignment to Assign Variables from Objects

//Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

//Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };

//Assim muda somente o NOME da variável:

const { name: userName, age: userAge } = user;

//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  //const highToday = HIGH_TEMPERATURES.today;
  //const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; //fui baka e fiz o contrário, daí logo que não iria funcionar né

  // Only change code above this line
  
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80