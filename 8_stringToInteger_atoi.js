/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let res = "";
  let pos = true;

  str = str.trim();
  let numStr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numSign = ["+", "-"];
  if(numStr.includes(str[0]) === false && numSign.includes(str[0]) === false) return 0;

  for(let i = 0; i < str.length; i++) {
    if(i === 0) {
      if(str[0] === "-") {
        pos = false;
        continue;
      } else if (str[0] === "+") {
        continue;
      }
    }

    if(pos == false && numStr.includes(str[1]) === false) return 0;

    if(numStr.includes(str[i])) {
      res += str[i];
    } else {
      break;
    }
  }


  let final = parseInt(res);
  if(isNaN(final)) return 0;

  if(pos) {
    if(final > Math.pow(2, 31)-1) {
      return Math.pow(2, 31)-1;
    } else {
      return final;
    }
  } else {
    if(final > Math.pow(2, 31)) {
      return -1 * Math.pow(2, 31);
    } else {
      return -1 * final;
    }
  }
};
