/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nums has unqiue elements
// Time: O(n * n!), permutation would have n! and each recursive call of backtracking is n => n * n!
var permute = function(nums) {
  let res = [];
  // this is for fast loop up which is better than tmp.includes(arr[i])
  let set = new Set();

  backtracking(res, [], nums, set);
  return res;
};

const backtracking = function(res, tmp, arr, set) {
  if(tmp.length === arr.length) {
    res.push(tmp.slice());
  } else {
    for(let i = 0; i < arr.length; i++) {
      if(set.has(arr[i])) continue;

      tmp.push(arr[i]);
      set.add(arr[i]);
      backtracking(res, tmp, arr, set);
      tmp.pop();
      set.delete(arr[i]);
    }
  }
};
