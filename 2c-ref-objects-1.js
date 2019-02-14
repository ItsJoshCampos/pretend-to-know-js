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
console.log(user.userid);
user.checkIn();

//bracket notation
console.log(user['title']);
