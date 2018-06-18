/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};

var letterCombinations = function(digits) {
  // console.log(map[2].split(""));
  if(digits.length === 1) return map[digits].split("");
  if(digits.length === 0) return [];

  let prevCombo = letterCombinations(digits.slice(1));
  let firstLetters = map[digits[0]];

  let newCombo = [];
  for(let i = 0; i < firstLetters.length; i++) {
    prevCombo.forEach(el => {
        newCombo.push(firstLetters[i] + el);
    });
  }

  return newCombo;
};
