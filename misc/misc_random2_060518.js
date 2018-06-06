// **************************
// MISC Check
// **************************
console.log(" === scope === ");
function outer() {
  let a = 1;
  function inner() {
    let b = 2;
    function innermost() {
      let c = 3;
      console.log(a, b, c);   // 1 2 3
    }
    innermost();
    console.log(a, b);        // 1 2 — 'c' is not defined
  }
  inner();
  console.log(a);             // 1 — 'b' and 'c' are not defined
}
outer();

console.log(" === Function === ");
// function expression is created and can be used after that, not hoisted
// sum1(1,2);
var sum1 = function(a, b) {
  return a + b;
};

// function declaration, can be called before or after it was defined, hoisted
console.log(sum2(1,2));
function sum2(a, b) {
  return a + b;
}

console.log(" === var, let, const === ");
// variable is function scope, hoisted
// let and const (ES6) are block scope, not hoisted
console.log(" === var === ");
function greeting() {
  console.log(s); // undefined, no error due to var hoisted in function scope
  if(true) {
    var s = 'Hi';
  }
  console.log(s); // 'Hi'
}
greeting();

console.log(" === let === ");
let g1 = 'global 1';
let g2 = 'global 2';
function letTest() {   /* Creating a new block scope */
  g1 = 'new global 1';
  let g2 = 'local global 2';
  console.log(g1);   // 'new global 1'
  console.log(g2);   // 'local global 2'
  // console.log(g3);   // ReferenceError: g3 is not defined
  let g3 = 'I am not hoisted';
}
console.log(g1);    // 'new global 1'
console.log(g2);    // 'global 2'
letTest();

console.log(" === const === ");
// constant is immutable, can't be re-assigned, but its properties can be changed.
const tryMe = 'initial assignment';
// tryMe = 'this has been reassigned';  // TypeError: Assignment to constant variable.
// You cannot reassign but you can change it…
const array = ['Ted', 'is', 'awesome!'];
array[0] = 'Barney';
array[3] = 'Suit up!';
console.log(array);     // [“Barney”, “is”, “awesome!”, “Suit up!”]
const airplane = {};
airplane.wings = 2;
airplane.passengers = 200;
console.log(airplane);   // {passengers: 200, wings: 2}
