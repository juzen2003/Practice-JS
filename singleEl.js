// O(logn) time and O(1) space
// given sorted array
// each el is in a pair, only one is single
const singleEl = function(arr) {
  if(arr.length < 1) {
    return null;
  }

  let mid = Math.floor(arr.length/2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid+1);
  // console.log("LEFT " + left);
  // console.log("RIGHT " + right);
  if(left.includes(arr[mid])) {
    left = left.concat([arr[mid]]);
    console.log(left);
    return singleEl(left);

  } else if (right.includes(arr[mid])){
    right = [arr[mid]].concat(right);
    // console.log(right);
    // return right;
    let res = singleEl(right);
    console.log(res);
    // return res + mid;

  } else {
    return mid;
  }

};

let arr = [1,1,2,2,3];
let fRes = singleEl(arr);
console.log("FINAL " + fRes);
