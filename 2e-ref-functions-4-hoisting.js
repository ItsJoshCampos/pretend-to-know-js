//*********** HOISTING
//Variable & Function Declarations are moved to the top of the scope before execution
doIExist(); // Output: "This function has been declared."
function doIExist() {
  //function declaration
  console.log('This function has been declared.');
}

//fun(); //Output: expression is not a function

//fun was declared, but not assigned.  It's recognized as a variable not a function
let fun = function() {
  //function expression,
  console.log('This function has been initialized.');
};
