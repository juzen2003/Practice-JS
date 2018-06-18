/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = "";
  if(strs.length === 0) return res;

  let i = 0;
  let firstStr = strs[0];
  // console.log(firstStr);

  while(i < firstStr.length) {
    for(let j = 1; j < strs.length; j++) {
      if(strs[j].slice(0, i+1) !== firstStr.slice(0, i+1)) {
        return res;
      }
    }
    res = firstStr.slice(0, i+1);
    i++;
  }

  return res;
};
