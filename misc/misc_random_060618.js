// **************************
// MISC Check
// **************************
// Closure
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
console.log(" === closure === ");
console.log(sayHiToJon);     // ƒ() { console.log(message) }
console.log(sayHiToJon());   // 'Hi Jon!'


console.log(" === IIFE === ");
var result = [];
for (var i=0; i < 5; i++) {
  result.push( function() { return i; } );
}
console.log( result[1]() ); // 5
console.log( result[3]() ); // 5
result = [];
for (var i=0; i < 5; i++) {
  (function () {
    var j = i; // copy current value of i
    result.push( function() { return j; } );
  })();
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3
for (var i=0; i < 5; i++) {
  (function (n) {
    result.push( function() { return n; } );
  })(i);
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3

// call, apply, bind
console.log(" === call, apply === ");
const Snow = {surename: 'Snow'};
const char = {
  surename: 'Stark',
  knows: function(arg, name) {
    console.log(`You know ${arg}, ${name} ${this.surename}`);
  }
};
char.knows('something', 'Bran');              // You know something, Bran Stark
char.knows.call(Snow, 'nothing', 'Jon');      // You know nothing, Jon Snow
// char.knows.call(Snow, ...['nothing', 'Jon']);      // You know nothing, Jon Snow
char.knows.apply(Snow, ['nothing', 'Jon']);   // You know nothing, Jon Snow

console.log(" === bind === ");
const whoKnowsNothing = char.knows.bind(Snow, 'nothing');
whoKnowsNothing('Jon');  // You know nothing, Jon Snow
