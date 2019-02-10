/************************
 * Reference Types: mutable values
    -object literal, array, function
 ************************
*/

//*********** FUNCTIONS
function processUser(name) {
  console.log('processing: ' + name);
}

//arrow functions with ES6
processUserArrow = (first, last) => {
  console.log(`Processing with arrow function: ${first} ${last}`);
};

//processUser('marc', 'westbrooks');
//processUserArrow('marc', 'westbrooks');

//Factory function
//RETURN OBJ, no 'this' or 'new' keywords
function car(color, make) {
  return {
    color,
    make
  };
}

let dn = car('red', 'Honda');

//console.log(dn);

//Constructor function
//NEW keyword is critical
function Car(_color, _make) {
  //hint to use class with ES6, topic for later
  this.color = _color;
  this.make = _make;
}

let c1 = new Car('red', 'Honda');
var c2 = Car('black', 'Toyota'); //modified the global scope, 'use strict'; to prevent error

// console.log(c1);
// console.log(c2);
// console.log(window.color, window.make);
