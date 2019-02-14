/**
 * @typedef {object} User
 * @property {number} id
 * @property {string} title
 * @property {boolean} isAdmin
 */
//@ts-check --> enable strict type check

let user = {
  id: 1,
  title: 'Director',
  isAdmin: true
};

/**@type {User} */
let user2 = null;
user2 = 'hi';

/**@type [User] */
let employees = [
  {
    id: 2,
    title: 'Manager',
    isAdmin: false
  }
];
console.log(employees);
