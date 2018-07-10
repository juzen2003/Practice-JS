// Write a function that accepts a string and determines whether or not
// the string is a valid IPv4 address. The function should avoid
// unnecessary computation when possible.

// 0.0.0.0 -> True
// x.x.x.x
// split(".") -> array length === 4
// el => 123, 255.255.255.255


const validIP = function(str) {
//   array of digits
  let arr = str.split(".");
  if(arr.length !== 4) {
    console.log("length check");
    return false;
  }

  for(let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if(!parseInt(el) && el !== "0") {

      console.log("numbers check");
      console.log(`${el}`);
      return false;
    } else if (parseInt(el) > 255 || parseInt(el) < 0) {
      console.log("value check");
      return false;
    }

  }

  return true;

};


// 0.0.0.0
console.log(validIP("0.0.0.0"));
// "s.9.0.x"
console.log(validIP("s.9.0.x"));
// 0.0.0
console.log(validIP("0.0.0"));
// 256.9.0.12
console.log(validIP("256.9.0.12"));
// -1.0.0.0
console.log(validIP("-1.0.0.0"));

// Write a different that accepts a string of integers (digits) and returns
// whether or not a valid IPv4 address can be created using exactly those
// digits. Again, try to avoid unnecessary computation when possible.

// 0000 -> 0.0.0.0 -> True
// 255255255255 -> 255.255.255.255 -> True
// 111 -> 1.1.1 -> False
// 8675309 -> 86.75.30.9 -> True

// length of str < 4 return false v
// length of str > 12 return false  v
// split the str & insert "." using join(".")
// find a way to proper slice the str
// make each part of the str after slice < 255

const isValidIP = function(str) {
  if(str.length > 12 || str.length < 4) {return false;}
  let num = parseInt(str);

  //split str
  // length <= 5  x.x.x.xx
  // length <= 8  x.x.xx.xx
  // length > 9   xx.xx.xx.xxx
  // > 2, 200-255



};
