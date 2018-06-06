// **************************
// MISC Check
// **************************
// 6 primitive type: null, undefined, boolean, number, string, symbol (ES6)
// object is not primitive type
console.log(" === typeof === ");
console.log(typeof 0);            // number
console.log(typeof true);          // boolean
console.log(typeof 'Hello');        // string
console.log(typeof Math);           // object
console.log(typeof null);           // object  !!
console.log(typeof undefined);           // undefined  !!
console.log(typeof Symbol('Hi'));   // symbol (New ES6)

// Falsey value: "", 0, -0, NaN, null, undefined, false
console.log(" === boolean === ");
console.log(Boolean(null));         // false
console.log(Boolean('hello'));      // true
console.log(Boolean('0'));          // true
console.log(Boolean(' '));           // true
console.log(Boolean([]));            // true
console.log(Boolean(function(){})); // true

// coercion
console.log(" === coercion === ");
console.log(1 + "2"); // "12"
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log("-9\n" + 5); // "-9\n5"
console.log("-9\n" - 5); // -14
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
