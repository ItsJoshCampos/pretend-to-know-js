/************************
 * Reference Types: mutable values
    -object literal, array, function
 ************************
*/

//*********** ARRAYS
let employees = [];
let admins = ['joe', 'brians', 10]; //dynamic typing
//console.log(typeof admins); //array in JS is type object
//console.log(Array.isArray(employees));
//dot notation to access object properties/methods
//admins.

//************ ACCESS
//access array elements by index
let arrSelection = 1;
// console.log(admins[0]);
// console.log(admins[arrSelection]);

//Traverse array elements
//FOR OF to traverse
// for (let key of admins) {
//   console.log(key);
// }

//************ MODIFY/ UPDATE
//ADD ELEMENTS - zero based index, dynamic typing
let myArr = ['b', 'e', 'j', 'm', 'f'];
//PUSH (END OF ARRAY)
myArr.push('g', 1);

//UNSHIFT (START OF ARRAY)
myArr.unshift(1, 'a');

//SPLICE (INDEX BASED INSERT)
myArr.splice(2, 0, 'c', 'd');

//console.log(myArr);

//DELETE ELEMENTS
let arr = [1, 1, 2, 3, 6, 7, 4, 4];
//Pop - end of array
let popLast = arr.pop();
// console.log(popItem);
// console.log(arr);

//shift - first element of array
let popFirst = arr.shift();
// console.log(popFirst);
// console.log(arr);

//SPLICE - index based
arr.splice(3, 2);
//console.log(arr);

//SORT & REVERSE Primitives
myArr.sort();
//console.log(myArr);

myArr.reverse();
//console.log(myArr);

//************ SEARCH
//Find primitive value type  index
// console.log(myArr.indexOf('u'));
// console.log(myArr.indexOf(1, 1)); //set custom start
// console.log(myArr.lastIndexOf('1'));
// console.log(myArr.includes('e')); //es6

//************ MAP & Filter ES6
let lottery = [3, 4, 8, -9, -2, 1, 7];
let validEntries = lottery.filter(i => i > -1);
console.log(validEntries);

let scored = validEntries.map(f => ({
  entry: f,
  isWinning: Math.random() >= 0.5
}));
console.log(scored);

//************ OBJECT ARRAYS
//reference type value
let cart = [
  { id: 1, name: 'milk', cost: 5, qty: 2 },
  { id: 2, name: 'cookies', cost: 3, qty: 1 },
  { id: 3, name: 'bread', cost: 2, qty: 1 }
];

let item = cart.find(function(item) {
  //return obj
  return item.name == 'milk';
});
//console.log(item);

let itemIndx = cart.findIndex(function(item) {
  //return index
  return item.name == 'milk';
});
//console.log(itemIndx);

//SORT object arrays - custom sort required
cart.sort((a, b) => {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  if (aName < bName) {
    return -1;
  }
  if (aName > bName) {
    return 1;
  } else {
    return 0;
  }
});
//console.log(cart);
