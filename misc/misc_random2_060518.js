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
