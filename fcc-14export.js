//Use export to Share a Code Block

//In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}

//The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}
export { add };

//When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };

//There are two string-related functions in the editor. Export both of them using the method of your choice.
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
//minha resposta: 
  export {uppercaseString, lowercaseString};
  //mas tb podia ser só colocando 'export' antes de const