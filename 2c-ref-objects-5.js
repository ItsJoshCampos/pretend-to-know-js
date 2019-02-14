//************TRAVERSE
let user = {
  userid: 'myid',
  title: 'developer',
  salary: 45000,
  checkIn: () => {
    console.log(new Date());
  }
};

//Traverse object key: value pairs
//FOR IN to enumerate objects
for (let key in user) {
  console.log(key, user[key]);
}

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
