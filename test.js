// const str = 'question';
//
// console.log(str.split('').map(char => char.charCodeAt(0)).reduce((memo, c) => memo + c, 0));
//
// console.log(113+117+101+115+116+105+111+110);

// let m = new Map();
// m.set(1,3);
// m.set(3,5);
// m.set(7,8);
// for(let [key, value] of m) {
//   console.log(key);
//   console.log(value);
// }
//
// for(let key of m.keys()) {
//   console.log(key);
// }

// function test() {
//   console.log(x);
// }
// test();
// var x = 5;

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// ******
// start from position -1, end at position N
// can jump between 1 and D where D is <= N
// A[K] = T, it means at time T, stone at position K would surface (K: 0 ~ N-1)
// return earliest time to reach to another bank
// return 0 if only one jump
// return -1 if never make it
// ******
// 1. Use a hash map to store available stone at each time, key: time, value: available stone
// 2. loop through keys of hash map and use greedy to see if the monkey and reach to another bank
// 3.
// Time:
// function solution(A, D) {
//
//     let N = A.length;
//     if(-1 + D >= N) return 0;
//
//     // build up hash map, key: time, value: stone that pops out
//     // time: O(n)
//     let map = new Map();
//     for(let i = 0; i < N; i++) {
//       if(A[i] !== -1) map.set(A[i], i);
//       // map.set(A[i], i);
//     }
//     // console.log(map)
//     // Map { 1 => 0, 0 => 2, 2 => 3, 3 => 4, 5 => 5 }
//     // build up time array
//     // time: O(n)
//     let time = [];
//     for(let key of map.keys()) {
//       if(time.length === 0 || key > time[time.length-1]) {
//         time.push(key);
//       } else {
//         time.unshift(key);
//       }
//     }
//     // console.log(time);
//
//     // update hash map, key: time, value: stones available at the time
//     // time: O(n)
//     for(let i = 0; i < time.length; i++) {
//       let prev = i === 0 ? [] : map.get(time[i-1]);
//       map.set(time[i], [...prev, map.get(time[i])]);
//       map.set(time[i], new Set(map.get(time[i])));
//     }
//     console.log(map);
//     // Map {
//     //   1 => [ 2, 0 ],
//     //   0 => [ 2 ],
//     //   2 => [ 2, 0, 3 ],
//     //   3 => [ 2, 0, 3, 4 ],
//     //   5 => [ 2, 0, 3, 4, 5 ] }
//
//     for(let i = 0; i < time.length; i++) {
//
//     }
//
// }


// ******
// start from position -1, end at position N
// can jump between 1 and D where D is <= N
// A[K] = T, it means at time T, stone at position K would surface (K: 0 ~ N-1)
// return earliest time to reach to another bank
// return 0 if only one jump
// return -1 if never make it
// ******
// 1. loop through A from idx i: 0 ~ N-D, at current location i:
// 2. loop from 1 ~ D to calculate the min time we can move forward to a location within i+1 ~ i+D
// 3. keep track of the earliest time the monkey can jump onto current location i, repeat step 1
// Time: O((N-D)*D) where N is the length of A
function solution1(A, D) {
    let N = A.length;
    if(-1 + D >= N) return 0;

    let max = 0;
    if(A[0] === -1 && D === 1) return -1;
    for(let i = 0; i < N-D; i++) {
      if(A[i] === -1) continue;
      let min;
      // calculate the min time we can move forward to a location within i+1 ~ i+D
      for(let j = 1; j <= D; j++) {
        if(A[i+j] === -1) continue;
        if(min === undefined) min = A[i+j];
        min = Math.min(min, A[i+j]);
      }

      if(min === undefined) return -1;
      if(min < A[i]) min = A[i];
      max = Math.max(max, min);
    }

    return max;

}

// 1. loop through A from idx i: 1 ~ N, at current location i:
//    - get the local min time to reach to a location within i+1 ~ i+D
//    - store the min time to an array (minArr)
// 2. loop through A from idx i: 0 ~ N-D, at current location i:
// 3. keep track of the earliest time the monkey can jump from current location i to a location within i+1 ~ i+D using the data we got from step 1 in minArr
// Time: O(N) + O(N) ~ O(N) where N is the length of A
function solution(A, D) {

    let N = A.length;
    if(-1 + D >= N) return 0;

    let minQueue = [];
    let minArr = [];
    let idx = 0;
    let count = 0;

    // O(N): loop through A to get the local min time that we can move to a location within i+1 ~ i+D from current location i
    // instead of using Math.min, we used two variables to keep track of local min value
    // this is to avoid another O(N) when using Math.min
    let localMin;
    let secMin;

    for(let i = 1; i < N; i++) {
      if(A[i] === -1) {
        count++;
      } else {
        minQueue.push(A[i]);
        localMin = localMin === undefined ? A[i] : Math.min(localMin, A[i]);
        if((A[i] > localMin && A[i] < secMin) || !secMin) {
          secMin = A[i];
        }
        count++;
      }

      if(count === D || idx + D >= N) {
        if(minQueue.length === 0) {
          return -1;
        } else {
          // let min = Math.min(...minQueue);
          let min = localMin;
          let remove = minQueue.shift();
          if(remove === localMin) {
            localMin = secMin;
          }

          minArr[idx] = min;
          count--;
          idx++;
        }
      }
    }

    // O(N): loop through A again to get global earliest time to go across the river
    let max = 0;
    let start = 0;
    if(A[0] === -1 && D === 1) return -1;
    for(let i = 0; i < N-D; i++) {
      if(A[i] === -1) continue;
      let minVal = minArr[start] < A[i] ? A[i] : minArr[start];
      start++;

      max = Math.max(max, minVal);
    }

    return max;
}


let res1 = solution([1, -1, 0, 2, 3, 5], 3);
let res2 = solution([3, 2, 1], 1);
let res3 = solution([1, 2, 3, 4, -1, -1, -1], 3);
let res4 = solution([3,-1,1], 1);
let res5 = solution([4,0,1,2], 1);
let res6 = solution([4,1,3,0,-1,2], 2);
let res7 = solution([-1,1,0,3,2], 1);


console.log(res1); // 2
console.log(res2); // 3
console.log(res3); // -1
console.log(res4); // -1
console.log(res5); // 4
console.log(res6); // 4
console.log(res7); // -1
