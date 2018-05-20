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
### Math.pow
```js
Math.pow(10,2)
// 100
```
### Split string into array
```js
"str".split("r")
// [ 'st', '' ]
"st r".split(" ")
// [ 'st', 'r' ]
```
### Join array into string
```js
let x = [ 'st', 'r' ]
x.join("")
// "str"
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
### charCodeAt & fromCharCode
```js
console.log("a".charCodeAt(0));
// 97
console.log(String.fromCharCode(97));
// "a"
```
### indexOf
```js
let a = [1,2,3];
a.indexOf(1);
// 0
a.indexOf(4);
// -1
```
### passed by value (primitive type)
```js
let a = 2;
let g = a;
// a: 2, g: 2
a = 5;
// a: 5, g: 2
```
### passed by reference (array, object)
```js
let a = [1,2,3];
let g = a;
// a: [1,2,3], g: [1,2,3]
g[1] = 9;
// a: [1,9,3], g: [1,9,3]
```
### array slice
```js
let a = [1,2,3];
a.slice(1);
// [2,3], but a is still [1,2,3]
a = a.slice(1);
// a: [2,3]
```
### array sort
```js
let arr = ["aaple","orange","banana"];
arr.sort();
// [ 'apple', 'banana', 'orange' ]
let arr2 = [1,5,3];
arr2.sort();
// [1,3,5]
arr2.sort(function(a,b){return b-a});
// b > a return 1, b < a return -1, b = a return 0
// [5,3,1]
```
### string slice
start index is included, end index is not included
```js
"cbbd".slice(1,2);
// 'b'
"cbbd".slice(1,3);
// 'bb'
```
### includes
```js
"cbbd".includes("d");
// true
"cbbd".includes("x");
// false
[1,2,3].includes(1);
// true
[1,2,3].includes(7);
// false
```
### array initialization
```js
let arr = new Array(3);
// initialize arr with length 3
// [ <3 empty items> ]
arr.fill("", 0);
// fill all elements with "", starting from idx 0
// ["", "", ""]
arr.fill("x",0,2);
// value, startIdx, endIdx
// fill idx 0 up to 2 (not including 2) with "x"
// ["x", "x", ""]
```
### [] + []
```js
[] + []
// ""
```
### "2" + 1
```js
"2" + 1
// "21"
```
