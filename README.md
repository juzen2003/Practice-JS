### Object.keys
```js
const obj = {"a": 2, "b": 4, "c": 6}
Object.keys(obj) // ["a", "b", "c"]
```
### for...in
```js
let hsh = {'a': 1, 'b': 2};
for(let a in hsh) {
  console.log(a);
  console.log(hsh[a]);
}
// a
// 1
// b
// 2
```
### Math.random
```js
// random number from 0-19
//  Math.random() return 0 to 1 (not included 1)
Math.floor(Math.random() * 20)
```
