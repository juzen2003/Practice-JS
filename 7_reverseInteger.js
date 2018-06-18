/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  let pos = true;
  if(x >= 0) {
    pos = true;
  } else {
    pos = false;
  }
  x = Math.abs(x);
  while(x >= 10) {
    let oneDigit = x % 10;
    x = Math.floor(x / 10);
    res = res * 10 + oneDigit;
  }

  res = res * 10 + x;

  if(pos) {
    res = res;
  } else {
    res = res * (-1);
  }

  if(res > Math.pow(2,31) - 1 || res < Math.pow(2,31) * (-1)) {
    return 0;
  } else {
    return res;
  }
};
