// Write a function that takes an array of integers and returns their sum. Use recursion.

const sumRec = function(nums) {
  if(nums.length < 1) return 0;
  let prevNums = nums.slice(1);
  let prevSum = sumRec(prevNums);
  return nums[0] + prevSum;
};

let nums1 = [1,2,3,4,5];
let res1 = sumRec(nums1);
console.log(res1);
let nums2 = [9,2,1,8,7];
let res2 = sumRec(nums2);
console.log(res2); 
