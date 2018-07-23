/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// we can just use Math.pow(x,n), but if we don't ... then we code it out
var myPow = function(x, n) {
  if(n === 0) return 1;
  if(n === 1) return x;
  if(n === -1) return 1/x;

  if(n % 2 === 0) {
    let prev = myPow(x, n/2);
    let res = prev * prev;
    return res;
  } else {
    let prev = myPow(x, (n-1)/2);
    let res = prev * prev * x;
    return res;
  }
};
