//*********** FUNCTIONS
function processUser(name) {
  console.log('processing: ' + name);
}

//arrow functions with ES6
processUserArrow = (first, last) => {
  console.log(`Processing with arrow function: ${first} ${last}`);
};

processUser('marc', 'westbrooks');
processUserArrow('marc', 'westbrooks');
