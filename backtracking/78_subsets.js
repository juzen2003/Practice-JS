/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Use backtracking
// input is a set of distinct integers
// no duplicated subsets
// Time: O(n * 2^n), because the total number of subsets would be 2^n where n is the length of nums, and each backtracking is O(n)
var subsets = function(nums) {
  // sorting is not necessary if input elements are not duplicated
  // nums.sort((a, b) => a-b);
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
