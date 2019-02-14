//************ OBJECT ARRAYS
//reference type value
let cart = [
  { id: 1, name: 'milk', cost: 5, qty: 2 },
  { id: 2, name: 'cookies', cost: 3, qty: 1 },
  { id: 3, name: 'bread', cost: 2, qty: 1 }
];

let item = cart.find(function(item) {
  //find method: return obj
  return item.name == 'milk';
});
console.log(item);

let selectedItem = 'bread';
let itemIndx = cart.findIndex(function(item) {
  //return index
  return item.name == selectedItem;
});
console.log(itemIndx);

//SORT object arrays - custom sort required
// cart.sort((a, b) => {
//   const aName = a.name.toLowerCase();
//   const bName = b.name.toLowerCase();

//   if (aName < bName) {
//     return -1;
//   }
//   if (aName > bName) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
//console.log(cart);
