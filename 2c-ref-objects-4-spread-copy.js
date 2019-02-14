let userCopy = {
  userid: 'myid',
  title: 'developer',
  salary: 45000,
  checkIn: () => {
    console.log(new Date());
  }
};

//or use spread (ES6)
console.log('original user:');
console.log(user);
console.log();
let replacementSpread = { ...userCopy };
replacementSpread.title = 'Director';
console.log('object copy user w spread:');
console.log(replacementSpread);
console.log();
