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
