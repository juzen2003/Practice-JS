// **************************
// MISC prototype
// **************************
console.log("=========== Prototype ===========");
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

console.log("=== Dog.prototype.constructor ===");
console.log(Dog.prototype.constructor); // points to the original constructor function
console.log(Dog.prototype.constructor === Dog); // true, Dog.prototype is a object that has .constructor pointing back to Dog

/* Object created from Dog constructor function */
console.log("=== rusty ===");
console.log(rusty);   //  { breed: "Beagle", name: "Rusty" }
console.log(rusty.constructor === Dog); // true
console.log(Dog.prototype === rusty); // false
console.log(Dog.prototype === rusty.__proto__); // true

/* Object inherited properties from constructor function's prototype */
console.log("=== rusty.describe() ===");
rusty.describe();   // "Rusty is a Beagle"

/* the created object .__proto__ property points to the .prototype property of the constructor function */
console.log("=== rusty.__proto__ ===");
console.log(rusty.__proto__);    // { describe: ƒ , constructor: ƒ } same as Dog.prototype
console.log(rusty.__proto__ === Dog.prototype);    // true

/* .constructor property points to the constructor of the object */
console.log("=== rusty.constructor ===");
console.log(rusty.constructor);  // ƒ Dog(breed, name) { ... }
console.log(rusty.constructor === Dog); // true

console.log(Object.prototype); // {}

// **************************
// MISC Own vs Inherited Properties
// **************************
console.log("=========== Own vs Inherited Properties ===========");
function Car() { }
Car.prototype.wheels = 4;
Car.prototype.airbags = 1;

var myCar = new Car();
myCar.color = 'black';

/*  Check for Property including Prototype Chain:  */
console.log('airbags' in myCar);  // true
console.log(myCar.wheels);        // 4
console.log(myCar.year);          // undefined

/*  Check for Own Property:  */
console.log(myCar.hasOwnProperty('airbags'));  // false — Inherited
console.log(myCar.hasOwnProperty('color'));    // true

// **************************
// MISC Object.create(obj)
// **************************
// Object.create(obj) — Creates a new object with the specified prototype object and properties.
console.log("=========== Object.create(obj) ===========");
var dog = { legs: 4 };
var myDog = Object.create(dog);

console.log(myDog.hasOwnProperty('legs'));  // false
console.log(myDog.legs);                    // 4
console.log(myDog.__proto__ === dog);       // true

console.log("=========== Inheritance by reference ===========");
var objProt = { text: 'original' };
var objAttachedToProt = Object.create(objProt);
console.log(objAttachedToProt.text);   // original

objProt.text = 'prototype property changed';
console.log(objAttachedToProt.text);   // prototype property changed

objProt = { text: 'replacing property' };
console.log(objAttachedToProt.text);   // prototype property changed
