/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// numbers is sorted in ascending order
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
var twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let res = [];

  while(low <= high) {
    let num1 = numbers[low];
    let num2 = numbers[high];

    if(num1 + num2 === target) {
      res[0] = low + 1;
      res[1] = high + 1;

      return res;
    } else if (num1 + num2 > target) {
      high--;
    } else {
      low++;
    }
  }
};
