// try to do it in linear time
// [] {} () check if the string is well formed, ([]){()} is well formed
//  [(]{)} is not
const wellFormString = function(str) {
  let stack = [];
  let open_bracket = ["(", "[", "{"];
  let close_bracket = [")", "]", "}"];

  let brackets = {"(" : ")", "[" : "]", "{" : "}"};

  for(let i = 0; i < str.length; i++) {

    if(open_bracket.includes(str[i])) {
        stack.push(str[i]);
    }

    if(close_bracket.includes(str[i])) {
      // console.log(str[i]);
      // console.log(stack.slice(-1)[0]);
      // console.log("stack: " + stack);
      if(str[i] !== brackets[stack.slice(-1)[0]]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  // console.log("stack: " + stack);
  return true;
};

let res1 = wellFormString("([]){()}"); // truer
let res2 = wellFormString("[(]{)}"); // false
console.log(res1);
console.log(res2);
