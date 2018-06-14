console.log("=== name function expression ===");
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    //sayHi("Guest"); // Error: sayHi is not a function
    func("Guest"); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome();
// if use func, would work fine, Hello, Guest (nested call works)
// if use sayHi, would have Error, the nested sayHi (it's null now) call doesn't work any more!

console.log("=== sum function ===");
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)(3).toString());
console.log(sum(1)(2).toString()); // 3
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15
