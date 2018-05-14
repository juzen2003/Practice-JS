### Object.keys/values/entries
```js
const obj = {"a": 2, "b": 4, "c": 6}
Object.keys(obj)
// ["a", "b", "c"]
Object.values(obj)
// [2, 4, 6]
Object.entries(obj)
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```
### Check if POJO is empty
```js
Object.keys(obj).length === 0 // empty
Object.keys(obj).length !== 0 // not empty
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
### Split string into array
```js
"str".split("r")
// [ 'st', '' ]
"st r".split(" ")
// [ 'st', 'r' ]
```
### delete a key value pair in object
```js
let hsh = {"a": 1, "b": 2, "c": 3}
delete hsh["b"]
// true
console.log(hsh);
//{ a: 1, c: 3 }
```
### concat & push
```js
let arr = [1,2,3]
arr.push(4)
// arr = [1,2,3,4]
arr.push([5])
// arr = [1,2,3,4,[5]]
arr.concat(3)
// arr = [1,2,3,4,[5]], arr not change, need to re-assign
arr = arr.concat(3)
// arr = [1,2,3,4,[5],3]
```
