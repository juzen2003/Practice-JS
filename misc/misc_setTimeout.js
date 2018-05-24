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

test();
// test1();
// test2();
