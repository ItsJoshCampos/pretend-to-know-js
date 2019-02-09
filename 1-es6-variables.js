/*** var: function scoped  ***/
var badPractice = 0;

function vScope() {
  var i = 1;

  if (i > 0) {
    var update = 100;
  }

  console.log(i);
  console.log(update);
}
//vScope();

/*** let: block scoped, new to ES6***/
function lScope() {
  var i = 1;

  if (i > 0) {
    let update = 200;
    console.log('let update is:' + update);
  }

  console.log(i);
  console.log(update);
}
//lScope();

/*** const: block scoped , new to ES6 ***/
function cScope() {
  const federalTax = 1;

  if (federalTax > 0) {
    const stateTax = 200;
    console.log('state is:' + stateTax);

    //federalTax = 300;  cannot re-assign
  }

  console.log(federalTax);
  console.log(stateTax);
}
cScope();
