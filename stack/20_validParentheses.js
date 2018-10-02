/**
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n)
// 1. loop through s
// 2. if it's open bracket, push in the closed bracket to the stack
// 3. else if it's closed bracket, pop out the stack and see if they matched, if not, then return false
// 4. keep doing it and once exit out for loop, return true if stack is empty
var isValid = function(s) {
  let stack  = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      stack.push(")");
    } else if(s[i] === "[") {
      stack.push("]");
    } else if(s[i] === "{") {
      stack.push("}");
    } else if(stack.length === 0 || s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
