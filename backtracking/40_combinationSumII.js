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
// Time: O(n ^ 3)
// wc: n * (1 + 2 + ...n-1) => n * n * (n-1) / 2 => n * (n^2) => n ^ 3
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
    // return;
  } else {
    for(let i = start; i < arr.length; i++) {
      if(i > start && arr[i] === arr[i-1]) continue; // avoid duplicated combo, don't revisited the number that has been visited
      tmp.push(arr[i]);
      backtracking(res, tmp, arr, remain-arr[i], i+1); // i + 1: don't reuse the same element
      tmp.pop();
    }
  }
};
