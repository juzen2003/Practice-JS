/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// numbers in candidates are unique, not duplicated
// The same repeated number may be chosen from candidates unlimited number of times.

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// use backtracking
// Time: O(n ^ 3)
// wc: n * (1 + 2 + ...n-1) => n * n * (n-1) / 2 => n * (n^2) => n ^ 3
var combinationSum = function(candidates, target) {
  // no need to sort if same number can be repeated for multiple times
  // candidates.sort((a,b) => a-b);
  let res = [];
  backtracking(res, [], candidates, target, 0);
  return res;
};

const backtracking = function(res, tmp, arr, remain, start) {
  if(remain < 0) {
    return;
  } else if(remain === 0) {
    res.push(tmp.slice());
    // return;
  } else {
    for(let i = start; i < arr.length; i++) {
      tmp.push(arr[i]);
      backtracking(res, tmp, arr, remain-arr[i], i); // use i not i + 1: because we can reuse same elements
      tmp.pop();
    }
  }
};
