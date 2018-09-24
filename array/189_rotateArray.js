/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. reverse the whole array
// 2. reverse first k, up to idx k-1
// 3. reverse rest of array, from idx k to last el
// Time: O(n)
// Space: O(1)
var rotate = function(nums, k) {
  let n = nums.length;
  k = k % n; // k %= n;
  reverseArr(nums, 0, n-1);
  reverseArr(nums, 0, k-1);
  reverseArr(nums, k, n-1);
};

const reverseArr = function(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
