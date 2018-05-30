// 5 5 5 5 5
function test() {
  for(var i = 0; i < 5; i++) {
    // console.log("test");
    setTimeout(function(){
      console.log(i);
    }, 1);
  }
}

// 0 1 2 3 4
function test1() {
  for(var i = 0; i < 5; i++) {
    (function(n) {
      setTimeout(function(){
        console.log(n);
      }, 1);
    }(i));
  }
}

// 0 1 2 3 4
function test2() {
  for(let i = 0; i < 5; i++) {
    // console.log("test2");
    setTimeout(function(){
      console.log(i);
    }, 1);
  }
}

// The value undefined is at index: 4
// The value undefined is at index: 4
// The value undefined is at index: 4
// The value undefined is at index: 4
function test3 () {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log(`The value ${arr[i]} is at index: ${i}`);
    }, (i+1) * 1000);
  }
}

// The value 10 is at index: 0
// The value 12 is at index: 1
// The value 15 is at index: 2
// The value 21 is at index: 3
function test4 () {
  const arr = [10, 12, 15, 21];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log(`The value ${arr[i]} is at index: ${i}`);
    }, (i+1) * 1000);
  }
}

// The value 10 is at index: 0
// The value 12 is at index: 1
// The value 15 is at index: 2
// The value 21 is at index: 3
function test5 () {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    (function(n) {
      setTimeout(function() {
        console.log(`The value ${arr[n]} is at index: ${n}`);
      }, (n+1) * 1000);
    })(i);
  }
}

// test();
// test1();
// test2();
// test3();
// test4();
test5();
