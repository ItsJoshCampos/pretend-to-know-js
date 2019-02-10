let firstName = 'josh';
let lastName = 'campos';

let welcomeUser = (firstName, lastName) => {
  console.log(
    "Welcome '" + lastName + ', ' + firstName + "' to the team! \n Thanks!"
  );
  console.log(`Welcome '${firstName} ${lastName}' to the team!
  Thanks!`);
};

//avoid using escape keys (new lines), multiline support, interpolation vs concatenation

welcomeUser(firstName, lastName);
