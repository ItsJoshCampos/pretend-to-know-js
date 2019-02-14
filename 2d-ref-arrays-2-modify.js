//************ ADD & UPDATE / DELETE / MODIFY

//************ ADD & UPDATE
//ELEMENTS - zero based index, dynamic typing
let myArr = ['b', 'e', 'j', 'm', 'f'];

//PUSH (END OF ARRAY)
myArr.push('g', 1);

//UNSHIFT (START OF ARRAY)
myArr.unshift(1, 'a');

//SPLICE (INDEX BASED INSERT) ; zero based
myArr.splice(2, 0, 'c', 'd');

console.log(myArr);

//************ DELETE
let arr = [1, 1, 2, 3, 6, 7, 4, 4];
//Pop - end of array
let popLast = arr.pop();
//console.log(popItem);
//console.log(arr);

//shift - first element of array
let popFirst = arr.shift();
//console.log(popFirst);
//console.log(arr);

//SPLICE - index based
arr.splice(3, 2);
//console.log(arr);

//************ MODIFY
//SORT Primitives
myArr.sort();
//console.log(myArr);

//REVERSE
myArr.reverse();
//console.log(myArr);
