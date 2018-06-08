// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // stack
  let temp = [];
  let hsh = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for(let i = 0; i < s.length; i++) {
    // console.log(temp)
    // console.log(hsh[s[i]] === temp.slice(-1))
    // console.log(hsh[s[i]])
    // console.log(temp.slice(-1))
    if(Object.values(hsh).includes(s[i])) {
        temp.push(s[i]);
    } else if(hsh[s[i]] !== undefined && hsh[s[i]] === temp.slice(-1)[0]) {
        temp.pop();
    } else {
        return false;
    }
  }

  if(temp.length === 0) {
    return true;
  } else {
    return false;
  }
};
