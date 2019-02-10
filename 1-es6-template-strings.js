let firstName = 'josh';
let lastName = 'campos';

let welcomeUser = (firstName, lastName) => {
  console.log('Welcome ' + lastName + ', ' + firstName + ' to the team!');
  console.log(`Welcome ${firstName} ${lastName} to the team!`);
};

welcomeUser(firstName, lastName);
