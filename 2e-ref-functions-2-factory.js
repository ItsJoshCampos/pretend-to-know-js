//*********** Factory function
//RETURN OBJ, no 'this' or 'new' keywords
function car(color, make) {
  return {
    color,
    make
  };
}

let dn = car('red', 'Honda');

console.log(dn);
