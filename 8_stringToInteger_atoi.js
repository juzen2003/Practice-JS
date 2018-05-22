// Implement atoi which converts a string to an integer.
//
// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
//
// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
//
// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
//
// If no valid conversion could be performed, a zero value is returned.
//
// Note:
//
// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (2^31 − 1) or INT_MIN (−2^31) is returned.

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let res = "";
  let pos = true;

  str = str.trim();
  let numStr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numSign = ["+", "-"];
  if(numStr.includes(str[0]) === false && numSign.includes(str[0]) === false) return 0;

  for(let i = 0; i < str.length; i++) {
    if(i === 0) {
      if(str[0] === "-") {
        pos = false;
        continue;
      } else if (str[0] === "+") {
        continue;
      }
    }

    if(pos == false && numStr.includes(str[1]) === false) return 0;

    if(numStr.includes(str[i])) {
      res += str[i];
    } else {
      break;
    }
  }


  let final = parseInt(res);
  if(isNaN(final)) return 0;

  if(pos) {
    if(final > Math.pow(2, 31)-1) {
      return Math.pow(2, 31)-1;
    } else {
      return final;
    }
  } else {
    if(final > Math.pow(2, 31)) {
      return -1 * Math.pow(2, 31);
    } else {
      return -1 * final;
    }
  }
};
