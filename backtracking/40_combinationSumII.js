/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// numbers in candidates could be duplicated
// Each number in candidates may only be used once in the combination

// All numbers (including target) will be positive integers
// The solution set must not contain duplicate combinations
// use backtracking
// Time: O(n ^ n)
var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b) => a-b);
  let res = [];
  backtracking(res, [], candidates, target, 0);
  return res;
};

const backtracking = function(res, tmp, arr, remain, start) {
  if(remain < 0) {
    return;
  } else if(remain === 0) {
    res.push(tmp.slice());
  } else {
    for(let i = start; i < arr.length; i++) {
      if(i > start && arr[i] === arr[i-1]) continue; // avoid duplicated combo
      tmp.push(arr[i]);
      backtracking(res, tmp, arr, remain-arr[i], i+1); // i + 1: don't reuse the same element
      tmp.pop();
    }
  }
};
