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

//(shallow) copy reference of object not value
let sub = user;
sub.userid = 'updatedname';
//console.log(user);

//(deep) copy property values, optional: add new property
let replacement = Object.assign({ age: 99 }, user);
replacement.title = 'manager';
// console.log(user);
// console.log(replacement);
