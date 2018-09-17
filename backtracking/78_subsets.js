/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Use backtracking
// input is a set of distinct integers
// no duplicated subsets
var subsets = function(nums) {
  let res = [];
  backtracking(res, [], nums, 0);
  return res;
};

const backtracking = function(res, tmp, arr, start) {
  res.push(tmp.slice());
  for(let i = start; i < arr.length; i++) {
    tmp.push(arr[i]);
    backtracking(res, tmp, arr, i+1);
    tmp.pop();
  }
};
