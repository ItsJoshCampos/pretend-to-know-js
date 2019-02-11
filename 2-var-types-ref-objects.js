/************************
 * Reference Types: mutable values
    -object literal, array, function
 ************************
*/

//*********** OBJECTS

//dynamic property types
let user = {
  userid: 'myid',
  title: 'developer',
  salary: 45000,
  checkIn: () => {
    console.log(new Date());
  }
};

//Dot notation  **best practice
//console.log(user.userid);
//user.checkIn();
//bracket notation
//console.log(user['title']);

//************COPY
//copy reference of object not value
// let sub = user;
// sub.userid = 'updatedname';
// console.log(user);
// console.log(sub);

//copy property values
//object assign, optional: add new property
// let replacement = Object.assign({ age: 99 }, user);
// replacement.title = 'manager';
// console.log(user);
// console.log(replacement);

//or use spread (ES6)
// let replacement = { ...user };
// replacement.title = 'manager';
// console.log(user);
// console.log(replacement);

//************TRAVERSE
//Traverse object key: value pairs
//FOR IN to enumerate objects
// for (let key in user) {
//   console.log(key, user[key]);
// }

//FOR OF can be used on array of objects, just not object itself
//Object.keys array
// for (let key of Object.keys(user)) {
//   console.log(key);
// }

//Object.entries for key:value pair
// for (let e of Object.entries(user)) {
//   console.log(e);
//   for (let key of e) {
//     console.log(key);
//   }
// }
