// **************************
// MISC Check
// **************************
// try...catch...finally
function func() {

  try {
    return 1;

  } catch (e) {
    console.log("error");
  } finally {
    console.log("finally");
  }
}

console.log(func()); // execute code in finally block first and then have the return from try block.
