// what is latency and what is bandwidth?
// compared to wired network, what's the bandwidth and latency of mobile network?

// difference between === & ==

console.log("======= this =======");
(function() {
  var fruit = {
    name: "orange",
    display: function() {
        console.log(this.name);
    }
  };

  var displayName = function() {
    console.log(this.name);
  };

  // bind only set this, but not execute, to execute a function, we use apply or call
  displayName.call(fruit);
  displayName.apply(fruit);
  fruit.display();
})();

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// List of arguments => an array
// The spread operator allows us to split an array into multiple arguments
// an array => List of arguments
console.log("======= spread & rest =======");
(function() {
  let color = ["yello", "red", "orange"];

  var displayName = function(...colors) {
    console.log(colors);
  };

  displayName(color);
})();

console.log("======= pass by reference =======");
(function() {
  let color1 = ["yello", "red", "orange"];
  let color2 = color1;
  let color3 = color1.slice();

  console.log(color1);
  console.log(color2);
  console.log(color3);
  console.log(color1 === color2);
  console.log(color1 === color3);

  color1[1] = "blue";
  console.log(color1);
  console.log(color2);
  console.log(color3);
  console.log(color1 === color2);
  console.log(color1 === color3);
})();

// important to know these 
console.log("======= coercion =======");
(function() {
  console.log(1 + "2"); // "12"
  console.log("" + 1 + 0); // "10"
  console.log("" - 1 + 0); // -1
  console.log("-9\n" + 5); // "-9\n5"
  console.log("-9\n" - 5); // -14
  console.log("2" * "3"); // 6
  console.log(4 + 5 + "px"); // "9px"
  console.log("$" + 4 + 5); // "$45"
  console.log("4" - 2); // 2
  console.log("4px" - 2); // NaN
  console.log(null + 1); // 1
  console.log(undefined + 1); // NaN
})();
