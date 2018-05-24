### Object.keys/values/entries
keys of object would always be converted to string
```js
const obj = {"a": 2, "b": 4, "c": 6}
Object.keys(obj)
// ["a", "b", "c"]
Object.values(obj)
// [2, 4, 6]
Object.entries(obj)
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
obj["a"]
// 2
obj["x"]
// undefined
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
### Math.abs
```js
Math.abs(-1)
// 1
```
### Split string into array
```js
"str".split()
// [ 'str' ] default separator is " "
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
x.join()
// "st,r" default delimiter is ","
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
arr = arr.concat([])
arr = arr.concat()
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
let b = "baxda";
a.indexOf(1);
// 0
a.indexOf(4);
// -1, can't find the element
b.indexOf("a");
// 1, index at first appearance
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
arr2.sort((a,b) => (a-b));
// [1,3,5]
arr2.sort(function(a,b){return b-a});
// arr2.sort((a,b) => (b-a)); fat arrow
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
"cbbd".slice(1,1);
// ''
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
// let arr = Array(3); would work as well
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
### array of "a" to "z"
```js
let arr = Array(26).fill(1).map((el, idx) => {
  return String.fromCharCode(96 + el + idx);
});
```
### [] + []
```js
[] + []
// ""
```
### {} + {}
```js
{} + {}
// NaN
```
### "2" + 1
```js
"2" + 1
// "21"
```
### trim()
```js
"   abc".trim();
// "abc"
"   abc     ".trim();
// "abc"
```
### parseInt()
convert str to integer
```js
parseInt("528");
// 528
parseInt("f");
// NaN
```
### isNaN()
the only way to check NaN
```js
isNaN(parseInt("528"));
// false
isNaN(parseInt("f"));
// true
```
### ternary
```js
let u = 5 < 7 ? 5 : 7;
// u: 5
let v = 5 > 7 ? 5 : 7
// v: 7
```
### typeof
```js
let a = [1,3,5];
let c = 0;
let d = "str";
let e;
typeof a;
// "object"
typeof c;
// "number"
typeof d;
// "string"
typeof e;
// "undefined"
typeof e === "undefined";
e === undefined;
// true
```
### isArray
```js
let a = [1,3,5];
let c = 0;
Array.isArray(a)
// true
Array.isArray(c)
// false
```
### array swapping
```js
let a = [9,3,1];
[a[1], a[2]] = [a[2], a[1]]
// a: [9,1,3]
```
### string toUpperCase & toLowerCase
```js
"a".toUpperCase()
// "A"
"A".toLowerCase()
// "a"
```
### array reverse
string has no reverse method
```js
let a = [9,3,1];
a.reverse();
// a: [1,3,9]
```
### string repeat
```js
let a = [9,3,1];
a.reverse();
// a: [1,3,9]
```
