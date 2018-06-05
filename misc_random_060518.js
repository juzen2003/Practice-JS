// What is the output of g?
function f(x) {
  x *= 2;
  return function(y) {
    y *= x;
    return function(z) {
      return z * y;
    };
  };
}
let g = f(3)(4)(5);
console.log(g);
// 120

/****************************/
// What is logged to the console?
function foo() {
  function bar() {
    setTimeout(
      () => console.log('Curly'),
    1000);
  }
  console.log('Larry');
  return bar;
}

let x = foo();
x();
console.log('Moe');

// Larry, Moe, Curly
