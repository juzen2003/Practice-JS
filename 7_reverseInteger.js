// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  let pos = true;
  if(x >= 0) {
    pos = true;
  } else {
    pos = false;
  }
  x = Math.abs(x);
  while(x >= 10) {
    let oneDigit = x % 10;
    x = Math.floor(x / 10);
    res = res * 10 + oneDigit;
  }

  res = res * 10 + x;

  if(pos) {
    res = res;
  } else {
    res = res * (-1);
  }

  if(res > Math.pow(2,31) - 1 || res < Math.pow(2,31) * (-1)) {
    return 0;
  } else {
    return res;
  }
};
