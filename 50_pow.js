// Implement pow(x, n), which calculates x raised to the power n (x^n).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// we can just use Math.pos(x,n), but if we don't ... then we code it out
var myPow = function(x, n) {
  if(n === 0) {
    return 1;
  } else if (n === 1) {
    return x;
  } else if (n === -1) {
    return 1/x;
  } else if (n % 2 === 0) {
    let prev = myPow(x, n/2);
    let res = prev * prev;
    return res;
  } else {
    let prev = myPow(x, (n-1));
    let res = x * prev;
    return res;
  }

};
