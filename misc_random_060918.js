// **************************
// MISC Check
// **************************
// try...catch...finally
console.log(" === try...catch...finally === ");
function func() {

  try {
    return 1;

  } catch (e) {
    console.log("error");
  } finally {
    console.log("finally");
  }
}

console.log(func()); // execute code in finally block first and then have the return from try block.

console.log(" === hoisted === ");
var arr1 = [];
for(var i = 0; i < 3; i++) { // i gets hoisted to global space
  arr1.push(function() {
    return i; // refers global i
  });
}

console.log(i); // i is 3 here. SO the below loop returns 3 "3"s

for(var j = 0; j < 3; j++) {
  console.log(arr1[j]()); // prints 3, 3, and 3
}

var arr2 = [];
for(let k = 0; k < 3; k++) { // let creates new k for each loop
  arr2.push(function() {
    return k; // refers to local k
  });
}

// console.log(k); // Reference error (since there is no k in global space)

for(var l = 0; l < 3; l++) {
  console.log(arr2[l]()); // prints 0, 1, and 2
}
