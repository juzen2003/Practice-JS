/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length;
  for(let i = n-1; i >= 0; i--) {
    if(digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  // this is when test cases like [9, 9, 9] => [1, 0, 0, 0]
  return [1, ...digits];
};
