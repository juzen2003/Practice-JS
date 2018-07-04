/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let res = [];

  while(low < high) {
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
