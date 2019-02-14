/*** let: block scoped, new to ES6***/
function lScope() {
  var i = 1;

  if (i > 0) {
    let update = 200;
    console.log('let update is:' + update); //scoped limit to this block
  }

  console.log(i);
  console.log(update); //out of scope!
}
lScope();
