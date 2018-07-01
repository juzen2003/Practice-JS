console.log("====== myCurry ======");
// set object to be null
function myCurry(fn, object, numArgs) {
  let args = [];

  function _curry(num) {
    args.push(num);
    if(args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
}

const times = function(a, b, c) {
  return a * b * c;
};
const curriedTimes = myCurry(times, null, 3);
const result = curriedTimes(1)(2)(3);
console.log(times.length); // number of args needed for this function
console.log(result);

console.log("====== curry ======");
function curry(func) {

  return function curried(...args) {

    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      // return curried;
      return function(...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// still callable normally
console.log( curriedSum(1, 2, 3) ); // 6

// get the partial with curried(1) and call it with 2 other arguments
console.log( curriedSum(1)(2,3) ); // 6

// full curried form
console.log( curriedSum(1)(2)(3) ); // 6
