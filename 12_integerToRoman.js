// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {number} num
 * @return {string}
 */
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
var intToRoman = function(num) {
  // keys at object will be converted to string
  let hsh = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M",
      4: "IV",
      9: "IX",
      40: "XL",
      90: "XC",
      400: "CD",
      900: "CM"
  };

  let res = "";
  // console.log(hsh);

  let arr = Object.keys(hsh).filter(el => {
    return num >= parseInt(el);
  });

  arr = arr.map(el => {return parseInt(el);});
  arr.sort((a, b) => (a - b));
  // console.log(arr);
  for(let i = arr.length-1; i >= 0; i--) {
    if(num < arr[i]) {
        continue;
    }
    // console.log(arr[i])
    let time = Math.floor(num / arr[i]);
    res += hsh[arr[i]].repeat(time);
    num = num - time * arr[i];
  }

  return res;
};
