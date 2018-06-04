console.log(toSquare(3));  // 9

function toSquare(n){
  return n*n;
}

const test1 = function() {  /* Original code */
  console.log(i);  // undefined, declaration is hoisted but not the assignment
  var i = 10;
  console.log(i);  // 10
};

const test2 = function() {  /* Compilation phase */
  var i;
  console.log(i);  // undefined
  i = 10;
  console.log(i);  // 10
};
// ES6 let & const
const test3 = function() {
  // console.log(i);  // ReferenceError: i is not defined
  const i = 10;
  console.log(i);  // 10

  // console.log(j);  // ReferenceError: i is not defined
  let j = 10;
  console.log(j);  // 10
};

test1();
test2();
test3();
