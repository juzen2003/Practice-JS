/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let hsh = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
  };

  let res = 0;
  let keys = Object.keys(hsh);
  let i = 0;

  while(i < s.length) {
    if(keys.includes(s.slice(i, i+2))) {
      res += hsh[s.slice(i, i+2)];
      i += 2;
    } else {
      res += hsh[s[i]];
      i += 1;
    }
  }

  return res;
};
