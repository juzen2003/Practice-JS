// Write code to find elements in an array of integers that are not only duplicates but that are within 3 array index apart so in an example array of (1, 3, 4, 1, 2, 6, 1, 9, 8, 3)
// we will get 1 as answer but not 3 because although 3 is duplicate the occurrence happens at more than 3 indices apart

const findDup = function(arr) {
  if(arr.length === 0) return [];
  let res = [];
  let notValid = [];

  for(let i = 0; i < arr.length; i++) {
    // if element at i is the same as the one at i + 3, and it's not been logged and not been visited yet, we log it
    if(arr[i] === arr[i+3] && !res.includes(arr[i]) && !notValid.includes(arr[i])) {
      res.push(arr[i]);
    } else {
      notValid.push(arr[i]);
      continue;
    }
  }

  return res;
};

// test cases
console.log(findDup([1,3,4,1,2,6,1,9,8,3])); // [1]
console.log(findDup([1,6,4,1,2,6,3,9,8,3])); // [1, 3]
console.log(findDup([1,3,4,1,2,6,3,9,8,3])); // [1]
console.log(findDup([1,2,4,3,2,6,3,9,8,3])); // [2, 3]
console.log(findDup([1,2,6,3,2,6,3,9,6,3])); // [2, 6, 3]
console.log(findDup([1,3])); // []
