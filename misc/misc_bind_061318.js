console.log("=== The context of a bound function is hard-fixed ===");
function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
// null, this = null in this case

console.log("=== A function cannot be re-bound ===");

function f1() {
  console.log(this.name);
}

f1 = f1.bind( {name: "John"} ).bind( {name: "Ann" } );

f1();
// John

console.log("=== The result of bind is another object. It does not have the origin property. ===");
function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log( bound.test );
// undefined


console.log("=== lose this, function is passed in with the object, this is set to undefined ===");
function askPassword(ok, fail, password) {
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

// askPassword(user1.loginOk, user1.loginFail, "rockstar");
// this = undefined
askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1), "rockstar");
// this = user1
