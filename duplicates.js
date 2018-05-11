// write a method that takes an array and returns its duplicate values. Use less than O(n^2) time
const duplicates = function(arr) {
  let hsh = {};
  let dup_val = {};
  let res = [];

  arr.forEach(el => {
    if(hsh[el] == undefined) {
      hsh[el] = true;
    } else {
      dup_val[el] = true;
    }
  });

  Object.keys(dup_val).forEach(el => {
    res = res.concat(el[0]);
  });

  return res;
};
// this is O(n)

const arr = [1,2,3,3,5,6,6,1,7,8,9,8];
let res = duplicates(arr);
console.log(res); // 1', '3', '6', '8' ]
