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
console.log("====== Find Dup ======");
console.log(findDup([1,3,4,1,2,6,1,9,8,3])); // [1]
console.log(findDup([1,6,4,1,2,6,3,9,8,3])); // [1, 3]
console.log(findDup([1,3,4,1,2,6,3,9,8,3])); // [1]
console.log(findDup([1,2,4,3,2,6,3,9,8,3])); // [2, 3]
console.log(findDup([1,2,6,3,2,6,3,9,6,3])); // [2, 6, 3]
console.log(findDup([1,3])); // []


// Please write JavaScript code so that given an array of integers it gives outputs the largest number which is an even number and it is sum of any two numbers in the array. So e.g. if array is (1, 2, 3, 4, 5) then the answer is 8 (sum of 5 and 3)
const maxSumOfTwoNumber = function(arr) {
  // return null when input is not valid
  if(arr.length <= 1) return null;
  if(arr.length == 2 && arr[0] % 2 !== arr[1] % 2) return null;

  let largestTwoEvenNums = [0,0];
  let largestTwoOddNUms = [0,0];

  // keep updating the largest 2 even & odd numbers
  for(let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if(currentNum % 2 === 0) {
      if(currentNum > largestTwoEvenNums[0]) {
        if(currentNum > largestTwoEvenNums[1]) {
          largestTwoEvenNums[0] = largestTwoEvenNums[1];
          largestTwoEvenNums[1] = currentNum;
        } else {
          largestTwoEvenNums[0] = currentNum;
        }
      }
    } else {
      if(currentNum > largestTwoOddNUms[0]) {
        if(currentNum > largestTwoOddNUms[1]) {
          largestTwoOddNUms[0] = largestTwoOddNUms[1];
          largestTwoOddNUms[1] = currentNum;
        } else {
          largestTwoOddNUms[0] = currentNum;
        }
      }
    }
  }

  // return the largest even sum between two arrays
  let sum1 = largestTwoEvenNums[0] + largestTwoEvenNums[1];
  let sum2 = largestTwoOddNUms[0] + largestTwoOddNUms[1];

  if(sum1 > sum2) {
    return sum1;
  } else {
    return sum2;
  }
};

// test case
console.log("====== Max Even Sum of Two Nums ======");
console.log(maxSumOfTwoNumber([1,2,3,4,5])); // 8
console.log(maxSumOfTwoNumber([3,23,33,98,2])); // 100
console.log(maxSumOfTwoNumber([1,95,97,99,100])); // 196
console.log(maxSumOfTwoNumber([2,33,55,8,6])); // 88
console.log(maxSumOfTwoNumber([3,23])); // 26
console.log(maxSumOfTwoNumber([11, 8])); // null
