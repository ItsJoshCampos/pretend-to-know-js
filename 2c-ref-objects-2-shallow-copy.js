//************COPY
let user = {
  userid: 'myid',
  title: 'developer',
  salary: 45000,
  checkIn: () => {
    console.log(new Date());
  }
};

//copy reference of object not value
console.log('original user:');
console.log(user);
let sub = user;
sub.userid = 'updatedname';
console.log('shallow ref copy:');
console.log(user);
console.log();
