//copy property values
//object assign, optional: add new property
let userCopy = {
  userid: 'myid',
  title: 'developer',
  salary: 45000,
  checkIn: () => {
    console.log(new Date());
  }
};
console.log('original user:');
console.log(userCopy);
let replacement = Object.assign({ age: 99 }, userCopy);
replacement.title = 'copyManager';
console.log('object copy user with assign:');
console.log(replacement);
console.log();
