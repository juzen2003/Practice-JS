// Refers to variables in outer scope.
// The returned function access themessage variable from the enclosing scope.
// It can refer to outer scope variables even after the outer function has returned.
// sayHiToJon is a reference to the greeting function, created when sayHi was run. The greeting function maintains a reference to its outer scope — environment — in which message exists.

function sayHi(name){
  var message = `Hi ${name}!`;
  function greeting() {
    console.log(message);
  }
  return greeting;
}
var sayHiToJon = sayHi('Jon');
console.log(sayHiToJon);     // ƒ() { console.log(message) }
console.log(sayHiToJon());   // 'Hi Jon!'
