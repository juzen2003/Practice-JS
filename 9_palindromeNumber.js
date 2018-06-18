/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  // console.log(reverseNum(x));
  return x === reverseNum(x);
};

const reverseNum = function(x) {
  let res = 0;
  while(x >= 10) {
    // console.log(res);
    res = res * 10;
    res += x % 10;
    x = Math.floor(x / 10);
  }

  return res * 10 + x;
};
