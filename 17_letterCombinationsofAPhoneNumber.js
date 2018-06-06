// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.

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
}

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
