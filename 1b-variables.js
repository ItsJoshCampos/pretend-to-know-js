/*** var: function scoped  ***/
var badPractice = 5;

function vScope() {
  var i = 1;

  if (i > 0) {
    var update = 100;
  }

  console.log(i);
  console.log(update); //out of block scope but in function scope
  console.log(badPractice); //global
}
vScope();
