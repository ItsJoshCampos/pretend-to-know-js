let firstName = 'josh';
let lastName = 'campos';

let welcomeUser = (firstName, lastName) => {
  console.log(
    "Welcome '" + lastName + ', ' + firstName + "' to the team! \nThanks!"
  );

  //finally put the backtick key to use
  console.log(`Welcome '${firstName} ${lastName}' to the team!
Thanks!`);
};

//Improves:
//  avoid using escape keys (new lines)
//  multiline support
//  interpolation vs concatenation

welcomeUser(firstName, lastName);
