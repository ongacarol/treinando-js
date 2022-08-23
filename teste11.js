//Do...While Loops - Essentially, a do...while loop ensures that the code inside the loop will run at least once. 

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

// resultado: []

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

//resultado: [5]