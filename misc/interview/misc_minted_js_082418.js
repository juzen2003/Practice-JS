// what is latency and what is bandwidth?

// Bandwidth refers to how wide the data pipe is, not how fast the data is transferred. The wider the pipe is, the less delay you’ll experience when loading webpages and transferring files. (download speed, and upload speed, in mbs)
// Latency (pronounced: la·ten·cy) is the amount of time it takes a data packet to travel from point A to point B. Together, bandwidth and latency define the speed and capacity of a network. Latency is usually expressed in milliseconds and can be measured using a ping command from your computer.
//
// When you run a ping command, a small packet of data (usually 32 bytes), is sent to another machine whereby the round-trip-time is measured in milliseconds. The ping command measures how long it takes for the data packet to leave the source computer, travel to the destination computer, and return back to the source computer.

// compared to wired network, what's the bandwidth and latency of mobile network?
// mobile netowrk is slower, lower bandwidth & higher latency

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
  displayName.bind(fruit)();
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
  // string with + => string concat
  // string with - => would try to coerce to math
  // operation from left to right
  console.log(1 + "2"); // "12"
  console.log("" + 1 + 0); // "10"
  console.log("" - 1 + 0); // -1 => - would coerce to math
  console.log("-9\n" + 5); // "-9\n5"
  console.log("-9\n" - 5); // -14
  console.log("2" * "3"); // 6
  console.log(4 + 5 + "px"); // "9px" => left to right, would get 9 first and concat with px
  console.log("$" + 4 + 5); // "$45"
  console.log("4" - 2); // 2
  console.log("4px" - 2); // NaN
  console.log(null + 1); // 1
  console.log(undefined + 1); // NaN
})();
