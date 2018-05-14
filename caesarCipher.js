// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.


const caesarCipher = function(str, offset) {
  let arr = arrayRange("a", "z");
  let res = [];

  str.split("").forEach(el => {
    if(el !== " ") {
      let idx = (arr.indexOf(el) + offset) % arr.length;
      res.push(arr[idx]);
    } else {
      res.push(el);
    }
  });

  return res.join("");
};

const arrayRange = function(start, end) {
  let res = [];
  for(let i = start.charCodeAt(0), j = end.charCodeAt(0); i <= j; i++) {
    res.push(String.fromCharCode(i));
  }

  return res;
};

console.log("a".charCodeAt(0));
console.log(String.fromCharCode(97));
// console.log(arrayRange("a", "z"));
let res = caesarCipher("catz hatz", 2);
let res2 = caesarCipher("aaa", 11);
let res3 = caesarCipher("zzz", 1);
console.log(res);
console.log(res2);
console.log(res3);
