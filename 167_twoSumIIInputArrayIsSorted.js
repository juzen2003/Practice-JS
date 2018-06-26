/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let high = numbers.length - 1;
  let low = 0;
  let res = [];

  while(low <= high) {
    let num1 = numbers[low];
    let num2 = numbers[high];

    if(target === num1 + num2) {
      res[0] = low + 1;
      res[1] = high + 1;
      return res;
    } else if (target > num1 + num2) {
      low += 1;
    } else {
      high -= 1;
    }
  }
};
