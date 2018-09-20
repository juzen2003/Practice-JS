/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given a collection of integers that might contain duplicates, nums
// no duplicate subsets.
// Time: O(2^n)
var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a-b);
  let res = [];
  backtracking(res, [], nums, 0);
  return res;
};

const backtracking = function(res, tmp, arr, start) {
  res.push(tmp.slice());
  for(let i = start; i < arr.length; i++) {
    if(i > start && arr[i] === arr[i-1]) continue; // avoid duplicated combo
    tmp.push(arr[i]);
    backtracking(res, tmp, arr, i+1); // i + 1: don't reuse the same element
    tmp.pop();
  }
};
