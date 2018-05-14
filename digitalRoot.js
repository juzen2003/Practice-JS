// Write a method, digital_root(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root".

const digitalRoot = function(num) {
  let sum = 0;
  if(num < 10) return num;

  let remainder = num % 10;
  let res = Math.floor(num / 10);
  sum = remainder + digitalRoot(res);
  if (sum < 10) {
    return sum;
  } else {
    return digitalRoot(sum);
  }
};

let num = 4791;
let num2 = 5306;
let res = digitalRoot(num);
let res2 = digitalRoot(num2);
console.log(res);
console.log(res2);
