function Bird() {
  this.wings = 2;
}
/* invoking as a normal function */
// let fakeBird = Bird();
//console.log(fakeBird);    // undefined
/* invoking as a constructor function */
let realBird= new Bird();
console.log(realBird);     // { wings: 2 }
