// Implement int sqrt(int x).
//
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
//
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let num = 1;
  let currentRoot = 0;

  while(x >= Math.pow(num, 2)) {
    currentRoot = num;
    num += 1;

  }

  return currentRoot;
};
