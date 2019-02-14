/*** const: block scoped , new to ES6 ***/
function cScope() {
  const federalTax = 1;

  if (federalTax > 0) {
    const stateTax = 200; //also block scoped
    console.log('state is:' + stateTax);

    //federalTax = 300; // cannot re-assign
  }

  console.log(federalTax);
  //console.log(stateTax);
}
cScope();
