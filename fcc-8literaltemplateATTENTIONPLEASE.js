//Create Strings using Template Literals

/*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
  ]*/

  //COMO EU FIZ (TÁ ERRADO):
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = `<li class="text-warning"> ${result.failure[0]} </li> <li class="text-warning"> ${result.failure[1]} </li> <li class="text-warning"> ${result.failure[2]} </li>`; 
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  //SOLUÇÃO 1
    // change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
  
  //SOLUÇÃO 2
    // change code below this line
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line