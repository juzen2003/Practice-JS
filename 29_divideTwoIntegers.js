// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
//
// Return the quotient after dividing dividend by divisor.
//
// The integer division should truncate toward zero.
//
// Example 1:
//
// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:
//
// Input: dividend = 7, divisor = -3
// Output: -2
// Note:
//
// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let res = 0;
  let positive = true;
  if((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
    positive = false;
  }

  let dv = Math.abs(dividend);
  let ds = Math.abs(divisor);

  let newDs = ds;
  let incr = 1;


  while(dv >= ds) {
    dv -= newDs;
    newDs += newDs; // keep adding up newDS like newDs * 2
    res += incr;
    incr += incr; // quotient also * 2 if newDs double

    // after newDs double, if it's larger than dividend, we use original divisor
    if(dv < newDs) {
      newDs = ds;
      incr = 1;
    }
  }

  if(positive) {
    res = res;
  } else {
    res = res * (-1);
  }

  if(res > Math.pow(2,31) - 1) {
    res = Math.pow(2,31) - 1;
  } else if (res < (-1) * Math.pow(2, 31)) {
    res = (-1) * Math.pow(2, 31);
  }

  return res;
};
