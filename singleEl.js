// O(logn) time and O(1) space
// given sorted array
// each el is in a pair, only one is single, find the single one, return index
const singleEl = function(arr) {
  if(arr.length < 1) {
    return null;
  }

  let mid = Math.floor(arr.length/2);



  let left = arr.slice(0, mid);
  let right = arr.slice(mid+1);
  // // console.log("LEFT " + left);
  // // console.log("RIGHT " + right);
  if(left.includes(arr[mid])) {
    // if it's even, and found the match, unique one is there
    if (left.length % 2 === 0) {
      left = left.concat([arr[mid]]);
      return singleEl(left);
    //  if it's odd, and found the match, unique is on the other side
    } else {
      // right = [arr[mid]].concat(right);
      let res = singleEl(right);
      return res + mid+1;
    }

  } else if (right.includes(arr[mid])){

    if  (right.length % 2 === 0) {
      right = [arr[mid]].concat(right);
      let res = singleEl(right);
      return res + mid;
    } else {
      // left = left.concat([arr[mid]]);
      return singleEl(left);
    }

  } else {
    return mid;
  }

};

let arr1 = [1,1,2,2,3];
let fRes1 = singleEl(arr1);
console.log("FINAL " + fRes1); // 4

let arr2 = [1,1,2,3,3];
let fRes2 = singleEl(arr2);
console.log("FINAL " + fRes2); // 2

let arr3 = [1,1,2,2,3,3,4];
let fRes3 = singleEl(arr3);
console.log("FINAL " + fRes3); // 6
