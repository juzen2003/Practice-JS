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
