//Reuse JavaScript Code Using import

//import allows you to choose which parts of a file or module to load. 
//Here's how you can import it to use in another file:

import { add } from './math_functions.js';

//Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js';