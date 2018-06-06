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

// primitive types are passed by values
// compound values are passed by reference, like array or object
console.log(" === value & reference === ");
var a = 2;        // 'a' hold a copy of the value 2.
var b = a;        // 'b' is always a copy of the value in 'a'
b++;
console.log(a);   // 2
console.log(b);   // 3
var c = [1,2,3];
var d = c;        // 'd' is a reference to the shared value
d.push( 4 );      // Mutates the referenced value (object)
console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]
/* Compound values are equal by reference */
var e = [1,2,3,4];
console.log(c === d);  // true
console.log(c === e);  // false

const copy = c.slice();    // 'copy' references to a new value
console.log(c);           // [1,2,3,4]
console.log(copy);        // [1,2,3,4]
console.log(c === copy);  // false
