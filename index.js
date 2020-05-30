function outer() {
  //closure created
  var out = "out";

  //define a inner function
  //A closure is the combination of a function bundled together (enclosed/outer fun) with references to its surrounding state out  (the lexical environment)
  function inner() {
    //closure gives access to outer function scope from inner fun
    console.log(out);
  }

  //expose inner fun
  return inner;
}
outer()();
