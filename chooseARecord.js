// Write a method that takes a hash of symbol keys, for which the values are integers representing each key's weight. The method returns a key such that the chances of selecting a particular key are weighted by that key's value.

// For the hash {:a => 1, :b => 2, :c => 3}, the chance of returning :c is 1/2, :b is 1/3, and :a is 1/6.


const chooseARecord = function(hsh) {
  let total = 0;
  Object.keys(hsh).forEach(el => {
    total += hsh[el];
  });

  let randomNum = getRandNum(total);
  let sum = 0;
  let keyArr = Object.keys(hsh);

  for(let i = 0; i < keyArr.length; i++) {

    if(randomNum < hsh[keyArr[i]]) {
      return keyArr[i];
    }
    total -= hsh[keyArr[i]];
    randomNum = getRandNum(total);
  }
};

// 0 to max -1
const getRandNum = function(max) {
  return Math.floor(Math.random() * (max));
};

let hsh = {'a': 1, 'b': 2, 'c': 3};
let res = chooseARecord(hsh);
console.log(`FINAL: ${res}`);
console.log(Object.entries(hsh));
