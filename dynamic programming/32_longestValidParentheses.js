/**
 * @param {string} s
 * @return {number}
 */
// use stack
// 1. use stack to store idx of unmatched string
// 2. if stack is empty return the lenght of s
// 3. else use the index store in stack to find the max length (diff between idx stored in the stack are the length)
var longestValidParentheses = function(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[stack[stack.length-1]] === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  if(stack.length === 0) return s.length;
  let prev = s.length;
  let max = 0;
  while(stack.length !== 0) {
    let current = stack.pop();
    let diff = prev - current - 1;
    prev = current;
    max = Math.max(max, diff);
  }
  // last idx from the stack
  max = Math.max(max, prev);

  return max;
};

// dp: an array that store the length of longest valid parentheses that ends at index i of s
var longestValidParentheses = function(s) {
  let dp = [...new Array(s.length)].fill(0);
  let max = 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      dp[i] = 0;
    } else { // when s[i] === ")"
      if(s[i-1] === "(") {
        dp[i] = 2 + ((i-2) >= 0 ? dp[i-2] : 0);
        max = Math.max(max, dp[i]);
      } else if(s[i-1] === ")" && s[i - dp[i-1] - 1] === "(") {
        dp[i] = 2 + dp[i-1] + ((i - dp[i-1] - 2) >= 0 ? dp[i - dp[i-1] - 2] : 0);
        max = Math.max(max, dp[i]);
      }
    }
  }

  return max;
};
