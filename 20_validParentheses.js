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
