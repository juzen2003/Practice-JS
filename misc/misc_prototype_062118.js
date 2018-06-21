// **************************
// MISC prototype
// **************************
function Dog(breed, name){
  this.breed = breed;
  this.name = name;
}
Dog.prototype.describe = function() {
  console.log(`${this.name} is a ${this.breed}`);
};
const rusty = new Dog('Beagle', 'Rusty');

/* .prototype property points to an object which has constructor and attached
properties to be inherited by objects created by this constructor. */
console.log("=== Dog.prototype ===");
console.log(Dog.prototype);  // { describe: ƒ , constructor: ƒ }

/* Object created from Dog constructor function */
console.log("=== rusty ===");
console.log(rusty);   //  { breed: "Beagle", name: "Rusty" }

/* Object inherited properties from constructor function's prototype */
console.log("=== rusty.describe() ===");
rusty.describe();   // "Rusty is a Beagle"

/* .__proto__ property points to the .prototype property of the constructor function */
console.log("=== rusty.__proto__ ===");
console.log(rusty.__proto__);    // { describe: ƒ , constructor: ƒ } same as Dog.prototype

/* .constructor property points to the constructor of the object */
console.log("=== rusty.constructor ===");
console.log(rusty.constructor);  // ƒ Dog(breed, name) { ... }
