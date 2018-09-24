console.log("TEST");

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// *********
// result is between 0 - 2^20-1
// return -1 if error
//
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let input = S.split(" ");
    let n = input.length;
    let stack = [];

    for(let i = 0; i < n; i++) {
        if(i !== 0 && stack.length === 0) return -1;

        if(parseInt(input[i])) {
            let num = parseInt(input[i]);
            if(num < 0 || num > Math.pow(2, 20)-1) return -1;
            stack.push(num);
            continue;
        }

        switch(input[i]) {
            case "POP":
                stack.pop();
                break;
            case "DUP":
                let peek = stack[stack.length-1];
                stack.push(peek);
                break;
            case "+":
                let num1 = stack.pop();
                let num2 = stack.pop();
                if(!num1 || !num2) return -1;
                stack.push(num1 + num2);
                break;
            case "-":
                let num3 = stack.pop();
                let num4 = stack.pop();
                let minus = num3 - num4;
                if(!num3 || !num4 || minus < 0) return -1;
                stack.push(minus);
                break;
            default:
                // wrong operation
                return -1;
        }
    }

    if(stack.length === 0) return -1;
    return stack.pop();
}

// let res1 = solution("13 DUP 4 POP 5 DUP + DUP + -");
// let res2 = solution("5 6 + -");
// let res3 = solution("3 DUP 5 - -");
// console.log(res1);
// console.log(res2);
// console.log(res3);




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// A: arr of weight
// B: arr of target stop floor
// X: limit of people
// Y: limit of weight
// M: number of floor
// ****
// 1. queue in as many peope as possible
// 2. get the unique stop of current queue
// 3. +1 for the next stop on ground, and repeat step 1
// use bfs, time complexity to be O(n) where n is number of people
function solution(A, B, M, X, Y) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let i = 0;
    let totalStop = 0;

    let headCount = 0;
    let weightCount = 0;
    let queueA = [];
    let queueB = [];

    // load in 1st group of people
    while(i < N && headCount <= X && weightCount <= Y) {
        if(weightCount + A[0] > Y) break;
        if(headCount + 1 > X) break;
        let curWeight = A.shift();
        weightCount += curWeight;
        headCount++;
        queueA.push(curWeight);
        queueB.push(B.shift());

        i++;
    }

    while(queueA.length) {
        let size = queueA.length;
        let currentA;
        let currentB;
        let currentStop = {};

        // get the unique stop of current group
        for(let j = 0; j < size; j++) {
            currentA = queueA.shift();
            currentB = queueB.shift();
            currentStop[currentB] = currentStop[currentB] === undefined ? 1 : currentStop[currentB] + 1;
        }

        totalStop += Object.keys(currentStop).length + 1;

        // load in next group of people
        headCount = 0;
        weightCount = 0;
        while(i < N && headCount <= X && weightCount <= Y) {
            if(weightCount + A[0] > Y) break;
            if(headCount + 1 > X) break;
            let curWeight = A.shift();
            weightCount += curWeight;
            headCount++;
            queueA.push(curWeight);
            queueB.push(B.shift());

            i++;
        }
    }

    return totalStop;
}

// let res1 = solution([60, 80, 40], [2, 3, 5], 5, 2, 200);
// let res2 = solution([40, 40, 100, 80, 20], [3, 3, 2, 2, 3], 3, 5, 200);
// console.log(res1);
// console.log(res2);


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
// use dynamic programming
// 1. create dp: an arr to store earliest time we can reach to position i in dp[i]; (idx: 0 ~ N-1), initialize dp[0] = A[0]
// 2. loop through every element in A
//    - get the minimum value of dp from previous D locations from current i because those are the locations that monkey can reach to current i
//    - if current A[i] is larger min value (current stone pops out later after previous earliest stone), the earliest time we can reach to idx i is A[i], update dp[i] = A[i]
//    - else if current A[i] is smaller than min value (current stone pops out earlier than previous earliest stones), the earliest time we can reach to idx i is min, update dp[i] = min
// 3. Once we fill up dp array, we loop through the last D locations to obtain the earliest (min value) time we can reach to the other bank
// Time: O(N * D), loop through each element in A * calculate min value from previous D elements of current A[i]
function solution(A, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if(-1 + D >= N) return 0;

    // build up dp array
    let dp = [...Array(N)].fill(0); // idx from 0 ~ N-1
    dp[0] = A[0];
    for(let i = 1; i < N; i++) {
        if(A[i] === -1) {
            dp[i] = -1;
            continue;
        }

        // let min = dp[i-1];
        let min;
        for(let j = 1; j <= D; j++) {
            if(!dp[i-j] || dp[i-j] === -1) continue;
            min = min === undefined ? dp[i-j] : Math.min(min, dp[i-j]);
            // min = Math.min(min, dp[i-j]);
        }

        if(min && min < A[i]) {
            dp[i] = A[i];
        } else {
            dp[i] = min === undefined ? -1 : min;
        }

    }

    // loop through last D elements from dp to obtain the earliest time
    let earliest = dp[N-1];
    for(let k = N; k > N-D; k--) {
        earliest = Math.min(earliest, dp[k-1]);
    }

    return earliest;
}

// let res1 = solution([1, -1, 0, 2, 3, 5], 3);
// let res2 = solution([3, 2, 1], 1);
// let res3 = solution([1, 2, 3, 4, -1, -1, -1], 3);
// let res4 = solution([3,-1,1], 1);
// let res5 = solution([4,0,1,2], 1);

// console.log(res1); // 2
// console.log(res2); // 3
// console.log(res3); // -1
// console.log(res4); // -1
// console.log(res5); // 4
