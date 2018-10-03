/**
 * @param {number} n
 * @return {string[]}
 */
// Time: O(2^n)
var generateParenthesis = function(n) {
  let res = [];
  backtracking(res, "", 0, 0, n);
  return res;
};

const backtracking = function(res, str, open, close, pair) {
  if(str.length === 2 * pair) {
    res.push(str);
    return;
  } else {
    if(open < pair) backtracking(res, str+"(", open+1, close, pair);
    if(close < open) backtracking(res, str+")", open, close+1, pair);
  }
};
